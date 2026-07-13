(() => {
  const lessons = window.TAMIL_LESSONS || [];
  const app = document.getElementById('app');
  const tabs = document.getElementById('lessonTabs');
  const rateSelect = document.getElementById('speechRate');
  const repeatSelect = document.getElementById('repeatCount');
  const stopButton = document.getElementById('stopAudio');
  const playLessonButton = document.getElementById('playLesson');
  const voiceStatus = document.getElementById('voiceStatus');
  const toast = document.getElementById('toast');
  let currentLesson = 0;
  let activeEl = null;
  let queueToken = 0;
  let tamilVoice = null;
  let voiceCheckDone = false;

  const esc = value => String(value ?? '').replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]));
  const attr = value => esc(value).replace(/\n/g,' ');
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

  function showToast(message){
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => toast.classList.remove('show'), 2600);
  }

  function updateVoiceStatus(){
    if(!voiceStatus) return;
    if(!('speechSynthesis' in window)){
      voiceStatus.hidden = false;
      voiceStatus.textContent = '音声非対応';
      return;
    }
    voiceStatus.hidden = Boolean(tamilVoice);
    voiceStatus.textContent = tamilVoice ? '' : 'Tamil音声を確認できません';
  }

  function findTamilVoice(){
    if(!('speechSynthesis' in window)) return null;
    const voices = speechSynthesis.getVoices();
    tamilVoice = voices.find(v => /^ta(-|_)/i.test(v.lang)) || voices.find(v => /tamil/i.test(v.name)) || null;
    if(voices.length) voiceCheckDone = true;
    updateVoiceStatus();
    return tamilVoice;
  }

  if('speechSynthesis' in window){
    findTamilVoice();
    speechSynthesis.addEventListener?.('voiceschanged', findTamilVoice);
    setTimeout(findTamilVoice, 450);
  }else{
    updateVoiceStatus();
  }

  function clearSpeaking(){
    if(activeEl) activeEl.classList.remove('speaking');
    activeEl = null;
  }

  function stopSpeech(){
    queueToken += 1;
    if('speechSynthesis' in window) speechSynthesis.cancel();
    clearSpeaking();
  }

  function speakOnce(text, element, token){
    return new Promise(resolve => {
      if(!('speechSynthesis' in window)){
        showToast('このブラウザでは音声再生を利用できません。');
        resolve();
        return;
      }

      findTamilVoice();
      if(voiceCheckDone && !tamilVoice){
        showToast('端末のTamil音声が見つかりません。本文はそのまま読めます。');
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = tamilVoice?.lang || 'ta-IN';
      if(tamilVoice) utterance.voice = tamilVoice;
      utterance.rate = Number(rateSelect.value || .88);
      utterance.pitch = 1;
      utterance.volume = 1;
      utterance.onstart = () => {
        clearSpeaking();
        activeEl = element;
        element?.classList.add('speaking');
        element?.scrollIntoView({block:'center',behavior:'smooth'});
      };
      utterance.onend = () => {
        if(token === queueToken) clearSpeaking();
        resolve();
      };
      utterance.onerror = event => {
        clearSpeaking();
        if(event.error !== 'canceled') showToast('音声を再生できませんでした。');
        resolve();
      };
      speechSynthesis.speak(utterance);
    });
  }

  async function speakText(text, element){
    stopSpeech();
    const token = queueToken;
    const repeat = Number(repeatSelect.value || 1);
    for(let i=0;i<repeat;i+=1){
      if(token !== queueToken) break;
      await speakOnce(text, element, token);
      if(i < repeat-1 && token === queueToken) await delay(520);
    }
  }

  async function speakSequence(items){
    stopSpeech();
    const token = queueToken;
    const repeat = Number(repeatSelect.value || 1);
    for(const item of items){
      for(let i=0;i<repeat;i+=1){
        if(token !== queueToken) return;
        await speakOnce(item.text, item.el, token);
        if(i < repeat-1 && token === queueToken) await delay(470);
      }
      if(token !== queueToken) return;
      await delay(720);
    }
  }

  function audioButton(item, compact=false){
    const surface = item.surface ? `<p class="surface-roman">表面：${esc(item.surface)}</p>` : '';
    const details = compact ? '' : `${surface}<p class="roman">${esc(item.roman || '')}</p>${item.katakana?`<p class="katakana">${esc(item.katakana)}</p>`:''}${item.japanese?`<p class="translation">${esc(item.japanese)}</p>`:''}${item.literal?`<p class="literal">${esc(item.literal)}</p>`:''}${item.context?`<span class="context-tag">${esc(item.context)}</span>`:''}`;
    return `<button type="button" class="tamil-line js-speak" data-tts="${attr(item.tts || item.tamil)}" aria-label="タミル語を再生">
      <span class="tamil-text">${esc(item.tamil)}</span><span class="speaker" aria-hidden="true">▶</span>
    </button>${details}`;
  }

  function morphs(items){
    if(!items?.length) return '';
    return `<div class="morph-row">${items.map(m => {
      const [a,b] = m.split('＝');
      return `<span class="morph"><b>${esc(a)}</b>${b!==undefined?'＝'+esc(b):''}</span>`;
    }).join('')}</div>`;
  }

  function sectionClass(section, base=''){
    return ['section',base,section.tone ? `${section.tone}-section` : ''].filter(Boolean).join(' ');
  }

  function sectionHeading(section){
    return `${section.eyebrow?`<p class="section-eyebrow">${esc(section.eyebrow)}</p>`:''}<h3 class="section-title">${esc(section.title)}</h3>`;
  }

  function renderExamples(section){
    return `<section class="${sectionClass(section)}">${sectionHeading(section)}<div class="example-grid">${section.items.map(item => `<article class="example-card ${item.featured?'featured':''}">${audioButton(item)}${morphs(item.morph)}</article>`).join('')}</div>${section.note?`<div class="note">${esc(section.note)}</div>`:''}</section>`;
  }

  function renderProse(section){
    return `<section class="${sectionClass(section,'prose-section')}">${sectionHeading(section)}${section.paragraphs.map(p=>`<p class="explain">${p}</p>`).join('')}${section.note?`<div class="note">${esc(section.note)}</div>`:''}</section>`;
  }

  function renderCulture(section){
    return `<section class="${sectionClass({...section,tone:'culture'},'prose-section')}">${sectionHeading(section)}${section.paragraphs.map(p=>`<p class="explain">${p}</p>`).join('')}${section.facts?.length?`<div class="fact-list">${section.facts.map(f=>`<div class="fact"><b>${esc(f.label)}</b><span>${esc(f.text)}</span></div>`).join('')}</div>`:''}</section>`;
  }

  function renderForms(section){
    return `<section class="${sectionClass(section)}">${sectionHeading(section)}<div class="form-grid">${section.items.map((item,idx)=>`<article class="form-card example-card">${audioButton(item)}${morphs(item.morph)}${item.changes?.length?`<button type="button" class="change-toggle" aria-expanded="false" data-target="change-${section.title}-${idx}">変化を見る</button><div class="change-panel" id="change-${section.title}-${idx}">${item.changes.map(step=>`<div class="change-step"><div>${audioButton(step,true)}${step.surface?`<p class="surface-roman">表面：${esc(step.surface)}</p>`:''}<p class="roman">${esc(step.roman)}</p><div class="change-meaning">${esc(step.meaning)}</div></div></div>`).join('')}</div>`:''}</article>`).join('')}</div>${section.note?`<div class="note">${esc(section.note)}</div>`:''}</section>`;
  }

  function renderCompare(section){
    return `<section class="${sectionClass(section)}">${sectionHeading(section)}<div class="compare">${section.items.map(item=>`<div class="compare-row"><div>${audioButton(item.left,true)}${item.left.surface?`<p class="surface-roman">表面：${esc(item.left.surface)}</p>`:''}<p class="roman">${esc(item.left.roman)}</p></div><div class="compare-note">${item.right}</div></div>`).join('')}</div></section>`;
  }

  function renderMini(section){
    return `<section class="${sectionClass(section)}">${sectionHeading(section)}<div class="mini-grid">${section.items.map(item=>`<article class="mini-card example-card">${audioButton(item)}</article>`).join('')}</div></section>`;
  }

  function renderReading(section){
    return `<section class="${sectionClass(section)}">${sectionHeading(section)}${section.intro?`<p class="reading-intro">${esc(section.intro)}</p>`:''}<div class="short-reading">${section.lines.map(item=>`<div class="reading-line">${audioButton(item)}</div>`).join('')}</div></section>`;
  }

  function renderQuiz(section){
    return `<section class="${sectionClass(section)}">${sectionHeading(section)}<div class="quiz-list">${section.items.map((q,qi)=>`<div class="quiz" data-answer="${q.answer}" data-explain="${attr(q.explain)}"><p>${qi+1}. ${esc(q.question)}</p><div class="quiz-options">${q.options.map((o,oi)=>`<button type="button" class="quiz-option" data-choice="${oi}">${esc(o)}</button>`).join('')}</div><div class="quiz-feedback"></div></div>`).join('')}</div></section>`;
  }

  function renderMap(section){
    return `<section class="${sectionClass(section)}">${sectionHeading(section)}<div class="map-line">${section.nodes.map((n,i)=>`${i?'<span class="map-arrow">›</span>':''}<span class="map-node ${i===section.current?'current':''}">${esc(n)}</span>`).join('')}</div></section>`;
  }

  function renderSection(section){
    const renderers = {examples:renderExamples,prose:renderProse,culture:renderCulture,forms:renderForms,compare:renderCompare,mini:renderMini,reading:renderReading,quiz:renderQuiz,map:renderMap};
    return renderers[section.type]?.(section) || '';
  }

  function renderLesson(index){
    stopSpeech();
    currentLesson = index;
    const lesson = lessons[index];
    document.title = `第${lesson.number}課 ${lesson.title}｜タミル語 文法の庭`;
    app.innerHTML = `<article class="lesson-article"><header class="lesson-head"><p class="lesson-no">LESSON ${esc(lesson.number)}</p><h2>${esc(lesson.title)}</h2><p class="lesson-question">${esc(lesson.question)}</p></header>${lesson.sections.map(renderSection).join('')}</article>`;
    [...tabs.children].forEach((tab,i)=>{
      tab.classList.toggle('active',i===index);
      tab.setAttribute('aria-current',i===index?'page':'false');
    });
    window.scrollTo({top:0,behavior:'smooth'});
  }

  function collectLessonAudio(){
    return [...app.querySelectorAll('.js-speak')]
      .filter(el => !el.closest('.change-panel:not(.open)'))
      .map(el => ({text:el.dataset.tts,el}));
  }

  lessons.forEach((lesson,index)=>{
    const button = document.createElement('button');
    button.type='button';
    button.className='lesson-tab';
    button.textContent=`${lesson.number} ${lesson.title}`;
    button.addEventListener('click',()=>renderLesson(index));
    tabs.appendChild(button);
  });

  app.addEventListener('click',event=>{
    const speak = event.target.closest('.js-speak');
    if(speak){
      speakText(speak.dataset.tts,speak);
      return;
    }

    const toggle = event.target.closest('.change-toggle');
    if(toggle){
      const panel = document.getElementById(toggle.dataset.target);
      const open = panel.classList.toggle('open');
      toggle.setAttribute('aria-expanded',String(open));
      toggle.textContent=open?'変化を閉じる':'変化を見る';
      return;
    }

    const option = event.target.closest('.quiz-option');
    if(option){
      const quiz=option.closest('.quiz');
      const answer=Number(quiz.dataset.answer);
      const choice=Number(option.dataset.choice);
      quiz.querySelectorAll('.quiz-option').forEach((btn,i)=>{
        btn.disabled=true;
        if(i===answer) btn.classList.add('correct');
      });
      if(choice!==answer) option.classList.add('wrong');
      quiz.querySelector('.quiz-feedback').textContent=(choice===answer?'正解です。 ':'形と役割をもう一度見てみましょう。 ')+quiz.dataset.explain;
    }
  });

  stopButton.addEventListener('click',stopSpeech);
  playLessonButton.addEventListener('click',()=>speakSequence(collectLessonAudio()));
  window.addEventListener('beforeunload',stopSpeech);
  document.addEventListener('visibilitychange',()=>{ if(document.hidden) stopSpeech(); });

  if(lessons.length) renderLesson(0);
  else app.innerHTML='<p>課データを読み込めませんでした。</p>';
})();

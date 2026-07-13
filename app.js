(() => {
  const lessons = window.TAMIL_LESSONS || [];
  const app = document.getElementById('app');
  const tabs = document.getElementById('lessonTabs');
  const rateSelect = document.getElementById('speechRate');
  const repeatSelect = document.getElementById('repeatCount');
  const stopButton = document.getElementById('stopAudio');
  const playLessonButton = document.getElementById('playLesson');
  const toast = document.getElementById('toast');
  let currentLesson = 0;
  let activeEl = null;
  let queueToken = 0;
  let tamilVoice = null;

  const esc = value => String(value ?? '').replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]));
  const attr = value => esc(value).replace(/\n/g,' ');

  function showToast(message){
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => toast.classList.remove('show'), 2400);
  }

  function findTamilVoice(){
    if(!('speechSynthesis' in window)) return null;
    const voices = speechSynthesis.getVoices();
    tamilVoice = voices.find(v => /^ta(-|_)/i.test(v.lang)) || voices.find(v => /tamil/i.test(v.name)) || null;
    return tamilVoice;
  }
  if('speechSynthesis' in window){
    findTamilVoice();
    speechSynthesis.addEventListener?.('voiceschanged', findTamilVoice);
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
        resolve(); return;
      }
      findTamilVoice();
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
      };
      utterance.onend = () => { if(token === queueToken) clearSpeaking(); resolve(); };
      utterance.onerror = () => { clearSpeaking(); resolve(); };
      speechSynthesis.speak(utterance);
    });
  }

  async function speakText(text, element){
    stopSpeech();
    const token = queueToken;
    const repeat = Number(repeatSelect.value || 1);
    for(let i=0;i<repeat;i++){
      if(token !== queueToken) break;
      await speakOnce(text, element, token);
      if(i < repeat-1 && token === queueToken) await new Promise(r => setTimeout(r, 500));
    }
  }

  async function speakSequence(items){
    stopSpeech();
    const token = queueToken;
    const repeat = Number(repeatSelect.value || 1);
    for(const item of items){
      for(let i=0;i<repeat;i++){
        if(token !== queueToken) return;
        await speakOnce(item.text, item.el, token);
        if(i < repeat-1 && token === queueToken) await new Promise(r => setTimeout(r, 430));
      }
      if(token !== queueToken) return;
      await new Promise(r => setTimeout(r, 650));
    }
  }

  function audioButton(item, compact=false){
    return `<button type="button" class="tamil-line js-speak" data-tts="${attr(item.tts || item.tamil)}" aria-label="タミル語を再生">
      <span class="tamil-text">${esc(item.tamil)}</span><span class="speaker" aria-hidden="true">▶</span>
    </button>${compact?'':`<p class="roman">${esc(item.roman || '')}</p>${item.katakana?`<p class="katakana">${esc(item.katakana)}</p>`:''}${item.japanese?`<p class="translation">${esc(item.japanese)}</p>`:''}${item.literal?`<p class="literal">${esc(item.literal)}</p>`:''}`}`;
  }

  function morphs(items){
    if(!items?.length) return '';
    return `<div class="morph-row">${items.map(m => {
      const [a,b] = m.split('＝');
      return `<span class="morph"><b>${esc(a)}</b>${b!==undefined?'＝'+esc(b):''}</span>`;
    }).join('')}</div>`;
  }

  function renderExamples(section){
    return `<section class="section"><h3 class="section-title">${esc(section.title)}</h3><div class="example-grid">${section.items.map(item => `<article class="example-card ${item.featured?'featured':''}">${audioButton(item)}${morphs(item.morph)}</article>`).join('')}</div></section>`;
  }

  function renderProse(section){
    return `<section class="section"><h3 class="section-title">${esc(section.title)}</h3>${section.paragraphs.map(p=>`<p class="explain">${p}</p>`).join('')}${section.note?`<div class="note">${esc(section.note)}</div>`:''}</section>`;
  }

  function renderForms(section){
    return `<section class="section"><h3 class="section-title">${esc(section.title)}</h3><div class="form-grid">${section.items.map((item,idx)=>`<article class="form-card example-card">${audioButton(item)}${morphs(item.morph)}${item.changes?.length?`<button type="button" class="change-toggle" aria-expanded="false" data-target="change-${section.title}-${idx}">変化を見る</button><div class="change-panel" id="change-${section.title}-${idx}">${item.changes.map(step=>`<div class="change-step"><div>${audioButton(step,true)}<p class="roman">${esc(step.roman)}</p><div class="change-meaning">${esc(step.meaning)}</div></div></div>`).join('')}</div>`:''}</article>`).join('')}</div></section>`;
  }

  function renderCompare(section){
    return `<section class="section"><h3 class="section-title">${esc(section.title)}</h3><div class="compare">${section.items.map(item=>`<div class="compare-row"><div>${audioButton(item.left,true)}<p class="roman">${esc(item.left.roman)}</p></div><div>${esc(item.right)}</div></div>`).join('')}</div></section>`;
  }

  function renderMini(section){
    return `<section class="section"><h3 class="section-title">${esc(section.title)}</h3><div class="mini-grid">${section.items.map(item=>`<article class="mini-card example-card">${audioButton(item)}</article>`).join('')}</div></section>`;
  }

  function renderReading(section){
    return `<section class="section"><h3 class="section-title">${esc(section.title)}</h3><div class="short-reading">${section.lines.map(item=>`<div class="reading-line">${audioButton(item)}</div>`).join('')}</div></section>`;
  }

  function renderQuiz(section){
    return `<section class="section"><h3 class="section-title">${esc(section.title)}</h3><div class="quiz-list">${section.items.map((q,qi)=>`<div class="quiz" data-answer="${q.answer}" data-explain="${attr(q.explain)}"><p>${qi+1}. ${esc(q.question)}</p><div class="quiz-options">${q.options.map((o,oi)=>`<button type="button" class="quiz-option" data-choice="${oi}">${esc(o)}</button>`).join('')}</div><div class="quiz-feedback"></div></div>`).join('')}</div></section>`;
  }

  function renderMap(section){
    return `<section class="section"><h3 class="section-title">${esc(section.title)}</h3><div class="map-line">${section.nodes.map((n,i)=>`${i?'<span class="map-arrow">›</span>':''}<span class="map-node ${i===section.current?'current':''}">${esc(n)}</span>`).join('')}</div></section>`;
  }

  function renderSection(section){
    const renderers = {examples:renderExamples,prose:renderProse,forms:renderForms,compare:renderCompare,mini:renderMini,reading:renderReading,quiz:renderQuiz,map:renderMap};
    return renderers[section.type]?.(section) || '';
  }

  function renderLesson(index){
    stopSpeech();
    currentLesson = index;
    const lesson = lessons[index];
    document.title = `第${lesson.number}課 ${lesson.title}｜タミル語 文法の庭`;
    app.innerHTML = `<article><header class="lesson-head"><p class="lesson-no">LESSON ${esc(lesson.number)}</p><h2>${esc(lesson.title)}</h2><p class="lesson-question">${esc(lesson.question)}</p></header>${lesson.sections.map(renderSection).join('')}</article>`;
    [...tabs.children].forEach((tab,i)=>tab.classList.toggle('active',i===index));
    window.scrollTo({top:0,behavior:'smooth'});
  }

  function collectLessonAudio(){
    return [...app.querySelectorAll('.js-speak')].filter(el => !el.closest('.change-panel:not(.open)')).map(el => ({text:el.dataset.tts,el}));
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
    if(speak){ speakText(speak.dataset.tts,speak); return; }
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
      quiz.querySelectorAll('.quiz-option').forEach((btn,i)=>{btn.disabled=true;if(i===answer)btn.classList.add('correct');});
      if(choice!==answer) option.classList.add('wrong');
      quiz.querySelector('.quiz-feedback').textContent=(choice===answer?'正解です。 ':'もう一度、形の役割を見てみましょう。 ')+quiz.dataset.explain;
    }
  });

  stopButton.addEventListener('click',stopSpeech);
  playLessonButton.addEventListener('click',()=>speakSequence(collectLessonAudio()));
  window.addEventListener('beforeunload',stopSpeech);

  if(lessons.length) renderLesson(0);
  else app.innerHTML='<p>課データを読み込めませんでした。</p>';
})();

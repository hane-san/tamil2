(function(){
  const synth = window.speechSynthesis;

  function chooseTamilVoice(){
    const voices = synth ? synth.getVoices() : [];
    return voices.find(v => /^ta(-|_)/i.test(v.lang)) || voices.find(v => /Tamil/i.test(v.name)) || null;
  }

  let activeTamil=null;
  let activeUtterance=null;

  function status(message){
    let node=document.getElementById('speech-status');
    if(!node){
      node=document.createElement('div');
      node.id='speech-status';node.className='speech-status';
      node.setAttribute('role','status');document.body.append(node);
    }
    node.textContent=message;
  }

  function stopSpeech(){
    if(synth) synth.cancel();
    if(activeTamil) activeTamil.classList.remove('is-speaking');
    activeTamil=null;activeUtterance=null;
  }
  window.addEventListener('song:stop-speech',stopSpeech);
  window.addEventListener('pagehide',stopSpeech);

  function speakTamil(text,element){
    if(!('speechSynthesis' in window)){
      status('端末の読み上げは利用できません。曲の音源で確認してください。');
      return;
    }
    stopSpeech();
    activeTamil=element || null;
    if(activeTamil) activeTamil.classList.add("is-speaking");
    const u = new SpeechSynthesisUtterance(text);
    u.lang='ta-IN';
    u.rate=document.documentElement.dataset.speechRate==='slow' ? .65 : .86;
    u.pitch=1;
    const voice=chooseTamilVoice();
    if(voice) u.voice=voice;
    status(voice ? '端末TTSで読み上げています。' : 'タミル語音声が見つからないため端末の既定音声で試します。歌の音源でも確認してください。');
    activeUtterance=u;
    const finish=()=>{
      if(activeUtterance===u){
        if(activeTamil) activeTamil.classList.remove("is-speaking");
        activeTamil=null;
        activeUtterance=null;
        if(voice) status('読み上げが終わりました。');
      }
    };
    u.onend=finish;
    u.onerror=()=>{if(activeUtterance===u){finish();status('読み上げできませんでした。端末の音声設定や曲の音源を確認してください。');}};
    synth.speak(u);
  }

  function ensureTamilRomanSpaces(root=document){
    root.querySelectorAll('t + r').forEach(r=>{
      const prev = r.previousSibling;
      if(prev && prev.nodeType === Node.TEXT_NODE){
        const value = prev.nodeValue || '';
        // Preserve a real visual separator in iOS/GitHub webviews. Source HTML
        // still keeps an ASCII half-width space; at runtime whitespace-only text
        // is upgraded to NBSP so it cannot collapse away visually.
        if(/^\s*$/.test(value)){
          prev.nodeValue = '\u00A0';
        }else if(!/[\s\u00A0]$/.test(value)){
          prev.nodeValue += '\u00A0';
        }
        return;
      }
      if(prev && prev.nodeType === Node.ELEMENT_NODE && prev.tagName.toLowerCase() === 't'){
        r.parentNode.insertBefore(document.createTextNode('\u00A0'), r);
      }
    });
  }

  function prepareReadingTables(root=document){
    root.querySelectorAll("table").forEach(table=>{
      table.classList.add("reading-table");
      table.setAttribute("role","table");
      const headers=Array.from(table.querySelectorAll("thead tr:first-child th")).map(th=>th.textContent.trim());
      table.querySelectorAll("thead,tbody").forEach(group=>group.setAttribute("role","rowgroup"));
      table.querySelectorAll("tr").forEach(row=>row.setAttribute("role","row"));
      table.querySelectorAll("th").forEach(th=>{th.setAttribute("role","columnheader");th.setAttribute("scope","col");});
      table.querySelectorAll("tbody tr").forEach(row=>{
        Array.from(row.cells).forEach((cell,index)=>{
          cell.setAttribute("role","cell");
          if(headers[index] && cell.colSpan===1) cell.dataset.label=headers[index];
        });
      });
    });
  }

  function prepareTamil(root=document){
    prepareReadingTables(root);
    ensureTamilRomanSpaces(root);
    root.querySelectorAll('t').forEach(el=>{
      // A link containing Tamil remains a navigation link, without a nested button.
      el.setAttribute('lang','ta');
      if(el.closest('a')) return;
      el.setAttribute('role','button');
      el.setAttribute('tabindex','0');
      el.setAttribute('aria-label','タミル語を読み上げ: '+tamilText(el));
    });
  }

  function tamilText(element){
    const copy=element.cloneNode(true);
    copy.querySelectorAll('br').forEach(br=>br.replaceWith(document.createTextNode(' ')));
    return copy.textContent.replace(/\s+/g,' ').trim();
  }

  document.addEventListener('click', e=>{
    const el=e.target.closest('t');
    if(!el || el.closest('a')) return;
    e.preventDefault();
    speakTamil(tamilText(el),el);
  });

  document.addEventListener('keydown', e=>{
    const el=e.target.closest && e.target.closest('t');
    if(!el || el.closest('a') || (e.key!=='Enter' && e.key!==' ')) return;
    e.preventDefault();
    speakTamil(tamilText(el),el);
  });

  async function loadParts(){
    prepareTamil(document);
    if(!Array.isArray(window.SONG_PARTS)) return;
    const main=document.getElementById('songMain');
    const loading=main && main.querySelector('.loading');
    if(main)main.setAttribute('aria-busy','true');
    if(loading)loading.setAttribute('role','status');
    try{
      const content=document.createDocumentFragment();
      for(const url of window.SONG_PARTS){
        const res=await fetch(url,{cache:'no-store'});
        if(!res.ok) throw new Error(url+' '+res.status);
        const html=await res.text();
        const box=document.createElement('div');
        box.innerHTML=html;
        prepareTamil(box);
        while(box.firstChild) content.append(box.firstChild);
      }
      main.insertBefore(content,loading || null);
      if(loading) loading.remove();
      main.setAttribute('aria-busy','false');
      if(location.hash){
        let id=location.hash.slice(1);try{id=decodeURIComponent(id);}catch(_){}
        const target=document.getElementById(id);
        if(target) target.scrollIntoView();
      }
      prepareTamil(document);
      document.dispatchEvent(new CustomEvent('song:ready'));
    }catch(err){
      if(main)main.setAttribute('aria-busy','false');
      if(loading){
        loading.textContent='本文を読み込めませんでした。通信を確認して再試行してください。 ';
        const retry=document.createElement('button');retry.type='button';retry.textContent='再試行';
        retry.onclick=()=>{retry.disabled=true;loadParts();};loading.append(retry);
      }
      console.error(err);
    }
  }

  if('speechSynthesis' in window){
    speechSynthesis.getVoices();
    speechSynthesis.onvoiceschanged=()=>speechSynthesis.getVoices();
  }

  loadParts();
})();

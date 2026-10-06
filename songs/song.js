(function(){
  const synth = window.speechSynthesis;

  function chooseTamilVoice(){
    const voices = synth ? synth.getVoices() : [];
    return voices.find(v => /^ta(-|_)/i.test(v.lang)) || voices.find(v => /Tamil/i.test(v.name)) || null;
  }

  function speakTamil(text){
    if(!('speechSynthesis' in window)){
      alert('このブラウザでは音声読み上げに対応していません。');
      return;
    }
    synth.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang='ta-IN';
    u.rate=.86;
    u.pitch=1;
    const voice=chooseTamilVoice();
    if(voice) u.voice=voice;
    synth.speak(u);
  }

  function ensureTamilRomanSpaces(root=document){
    root.querySelectorAll('t + r').forEach(r=>{
      const prev = r.previousSibling;
      if(prev && prev.nodeType === Node.TEXT_NODE){
        if(!/\s$/.test(prev.nodeValue || '')) prev.nodeValue += ' ';
        return;
      }
      if(prev && prev.nodeType === Node.ELEMENT_NODE && prev.tagName.toLowerCase() === 't'){
        r.parentNode.insertBefore(document.createTextNode(' '), r);
      }
    });
  }

  function prepareTamil(root=document){
    ensureTamilRomanSpaces(root);
    root.querySelectorAll('t').forEach(el=>{
      el.setAttribute('role','button');
      el.setAttribute('tabindex','0');
      el.setAttribute('aria-label','タミル語を読み上げ: '+el.textContent.trim());
    });
  }

  document.addEventListener('click', e=>{
    const el=e.target.closest('t');
    if(!el) return;
    e.preventDefault();
    speakTamil(el.textContent.trim());
  });

  document.addEventListener('keydown', e=>{
    const el=e.target.closest && e.target.closest('t');
    if(!el || (e.key!=='Enter' && e.key!==' ')) return;
    e.preventDefault();
    speakTamil(el.textContent.trim());
  });

  async function loadParts(){
    prepareTamil(document);
    if(!Array.isArray(window.SONG_PARTS)) return;
    const main=document.getElementById('songMain');
    const loading=main && main.querySelector('.loading');
    try{
      for(const url of window.SONG_PARTS){
        const res=await fetch(url,{cache:'no-cache'});
        if(!res.ok) throw new Error(url+' '+res.status);
        const html=await res.text();
        const box=document.createElement('div');
        box.innerHTML=html;
        prepareTamil(box);
        while(box.firstChild) main.insertBefore(box.firstChild,loading || null);
      }
      if(loading) loading.remove();
      prepareTamil(document);
    }catch(err){
      if(loading) loading.textContent='本文の読み込みに失敗しました。ページを再読み込みしてください。';
      console.error(err);
    }
  }

  if('speechSynthesis' in window){
    speechSynthesis.getVoices();
    speechSynthesis.onvoiceschanged=()=>speechSynthesis.getVoices();
  }

  loadParts();
})();

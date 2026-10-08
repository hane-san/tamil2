(function(){
  const synth = window.speechSynthesis;

  function chooseTamilVoice(){
    const voices = synth ? synth.getVoices() : [];
    return voices.find(v => /^ta(-|_)/i.test(v.lang)) || voices.find(v => /Tamil/i.test(v.name)) || null;
  }

  let activeTamil=null;
  let activeUtterance=null;

  function speakTamil(text,element){
    if(!('speechSynthesis' in window)){
      alert('このブラウザでは音声読み上げに対応していません。');
      return;
    }
    synth.cancel();
    if(activeTamil) activeTamil.classList.remove("is-speaking");
    activeTamil=element || null;
    if(activeTamil) activeTamil.classList.add("is-speaking");
    const u = new SpeechSynthesisUtterance(text);
    u.lang='ta-IN';
    u.rate=.86;
    u.pitch=1;
    const voice=chooseTamilVoice();
    if(voice) u.voice=voice;
    activeUtterance=u;
    const finish=()=>{
      if(activeUtterance===u){
        if(activeTamil) activeTamil.classList.remove("is-speaking");
        activeTamil=null;
        activeUtterance=null;
      }
    };
    u.onend=finish;
    u.onerror=finish;
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
      el.setAttribute('role','button');
      el.setAttribute('tabindex','0');
      el.setAttribute('aria-label','タミル語を読み上げ: '+el.textContent.trim());
    });
  }

  document.addEventListener('click', e=>{
    const el=e.target.closest('t');
    if(!el) return;
    e.preventDefault();
    speakTamil(el.innerHTML.replace(/<br\s*\/?\s*>/gi,' ').replace(/<[^>]*>/g,'').trim(),el);
  });

  document.addEventListener('keydown', e=>{
    const el=e.target.closest && e.target.closest('t');
    if(!el || (e.key!=='Enter' && e.key!==' ')) return;
    e.preventDefault();
    speakTamil(el.innerHTML.replace(/<br\s*\/?\s*>/gi,' ').replace(/<[^>]*>/g,'').trim(),el);
  });

  async function loadParts(){
    prepareTamil(document);
    if(!Array.isArray(window.SONG_PARTS)) return;
    const main=document.getElementById('songMain');
    const loading=main && main.querySelector('.loading');
    try{
      for(const url of window.SONG_PARTS){
        const res=await fetch(url,{cache:'no-store'});
        if(!res.ok) throw new Error(url+' '+res.status);
        const html=await res.text();
        const box=document.createElement('div');
        box.innerHTML=html;
        prepareTamil(box);
        while(box.firstChild) main.insertBefore(box.firstChild,loading || null);
      }
      if(loading) loading.remove();
      if(location.hash){
        const target=document.getElementById(decodeURIComponent(location.hash.slice(1)));
        if(target) target.scrollIntoView();
      }
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

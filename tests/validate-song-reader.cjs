// Reader behaviour: keep records associated, audio selection local, deep links stable.
const fs=require('node:fs');
const path=require('node:path');
const assert=require('node:assert/strict');
const {JSDOM}=require('jsdom');
const root=path.resolve(__dirname,'..');
const songs=path.join(root,'songs');
const script=fs.readFileSync(path.join(songs,'song.js'),'utf8');
const shells=fs.readdirSync(songs).filter(name=>name.endsWith('.html')&&fs.readFileSync(path.join(songs,name),'utf8').includes('SONG_PARTS'));
(async()=>{
 for(const shell of shells){
  const html=fs.readFileSync(path.join(songs,shell),'utf8');
  const prefix=shell.slice(0,2);
  const dom=new JSDOM(html,{url:`https://example.test/songs/${shell}#foundation-${prefix}`,runScripts:'outside-only'});
  const w=dom.window;
  const parts=html.match(/window.SONG_PARTS=(\[[^;]+\]);/)[1];
  w.SONG_PARTS=JSON.parse(parts.replace(/'/g,'"'));
  let scrolled=null;
  const spoken=[];
  w.fetch=async url=>({ok:true,text:async()=>fs.readFileSync(path.join(songs,url.split('?')[0]),'utf8')});
  w.HTMLElement.prototype.scrollIntoView=function(){scrolled=this.id;};
  w.speechSynthesis={cancel(){},getVoices(){return [{lang:'ta-IN',name:'Tamil'}];},speak(u){spoken.push(u);}};
  w.SpeechSynthesisUtterance=function(text){this.text=text;};
  w.eval(script);
  for(let tries=0;w.document.querySelector('.loading')&&tries<30;tries++)await new Promise(resolve=>setTimeout(resolve,10));
  assert.equal(w.document.querySelector('.loading'),null,`${shell} loads all parts`);
  assert.equal(scrolled,`foundation-${prefix}`,`${shell} resolves its deep link`);
  for(const table of w.document.querySelectorAll('table')){
   const headings=[...table.querySelectorAll('thead tr:first-child th')].map(th=>th.textContent.trim());
   assert.equal(table.getAttribute('role'),'table');
   for(const row of table.querySelectorAll('tbody tr'))[...row.cells].forEach((cell,index)=>{
    if(headings[index]&&cell.colSpan===1)assert.equal(cell.dataset.label,headings[index]);
   });
  }
  const targets=[...w.document.querySelectorAll('t')];
  targets[0].click();assert.equal(spoken.length,1);assert.equal(spoken[0].lang,'ta-IN');assert(targets[0].classList.contains('is-speaking'));
  targets[1].dispatchEvent(new w.KeyboardEvent('keydown',{key:'Enter',bubbles:true}));
  assert.equal(spoken.length,2);assert(!targets[0].classList.contains('is-speaking'));assert(targets[1].classList.contains('is-speaking'));
  spoken[0].onend();assert(targets[1].classList.contains('is-speaking'),'late completion does not clear the next selection');
  targets[1].click();assert.equal(spoken.length,3);
  spoken[1].onend();assert(targets[1].classList.contains('is-speaking'),'replaying the same word retains the new selection');
  spoken[2].onend();assert(!targets[1].classList.contains('is-speaking'));
  const fullText=w.document.getElementById('songMain').textContent;
  const details=w.document.querySelector('details');if(details)details.open=true;
  assert.equal(w.document.getElementById('songMain').textContent,fullText,'opening review retains all text');
  dom.window.close();
 }
 console.log(`${shells.length} song lessons: record labels, deep links, click/keyboard audio and replay feedback passed`);
})().catch(error=>{console.error(error);process.exitCode=1;});

const fs=require('node:fs');
const path=require('node:path');
const assert=require('node:assert/strict');
const {JSDOM}=require('jsdom');
const songs=path.resolve(__dirname,'../songs');
const core=fs.readFileSync(path.join(songs,'reader.js'),'utf8');
const study=fs.readFileSync(path.join(songs,'study.js'),'utf8');
const shells=fs.readdirSync(songs).filter(f=>f.endsWith('.html')&&fs.readFileSync(path.join(songs,f),'utf8').includes('SONG_PARTS'));
const delay=()=>new Promise(r=>setTimeout(r,10));
async function boot(file,options={}){
 const html=fs.readFileSync(path.join(songs,file),'utf8');
 const dom=new JSDOM(html,{url:'https://example.test/songs/'+file+(options.hash||''),runScripts:'outside-only'});
 const w=dom.window;
 const match=html.match(/window.SONG_PARTS=(\[[^;]+\]);/);
 if(match)w.SONG_PARTS=JSON.parse(match[1].replace(/'/g,'"'));
 if(options.storage)for(const [key,value] of Object.entries(options.storage))w.localStorage.setItem(key,JSON.stringify(value));
 if(options.blocked)Object.defineProperty(w,'localStorage',{get(){throw new Error('blocked');}});
 w.HTMLElement.prototype.scrollIntoView=function(){};
 w.fetch=async url=>({ok:!options.fail,status:503,text:async()=>fs.readFileSync(path.join(songs,url.split('?')[0]),'utf8')});
 w.console.error=()=>{};
 w.eval(core);w.eval(study);
 for(let i=0;i<50&&w.document.querySelector('.loading')&&!options.fail;i++)await delay();
 return dom;
}
(async()=>{
 for(const file of shells){
  const dom=await boot(file);const w=dom.window,d=w.document;
  assert.equal(d.body.dataset.studyMode,'listen',file+' starts with listening');
  const originals=[...d.querySelectorAll('#songMain>.reading-content .line')];
  const select=d.querySelector('#listen-line');
  assert.equal(select.options.length,originals.length,'every existing lyric appears once');
  assert.equal(d.querySelector('.listen-stage .ta').textContent,originals[0].querySelector('.ta').textContent,'listening uses the original text');
  assert(d.querySelector('.listen-stage .literal').hidden,'translations start concealed');
  d.querySelector('.listen-stage button').click();assert(!d.querySelector('.listen-stage .literal').hidden);
  const next=[...d.querySelectorAll('.line-controls button')][1];next.click();
  assert.equal(select.value,'1');assert(d.querySelector('.listen-stage .literal').hidden,'next line resets reveal');
  assert.equal(d.querySelectorAll('.listen-stage button').length,1,'cloning does not copy navigation controls');
  const saved=JSON.parse(w.localStorage.getItem('tamil-song-study-v1'));
  assert.equal(saved[file.slice(0,2)].line,1,'line saved per song');
  const note=d.querySelector('#song-note');note.value='語尾をもう一度聴く';note.dispatchEvent(new w.Event('input'));
  assert.equal(JSON.parse(w.localStorage.getItem('tamil-song-study-v1'))[file.slice(0,2)].note,note.value,'notes save while typing without requiring blur');
  assert.equal(d.querySelector('#songMain').getAttribute('aria-busy'),'false');
  const ids=[...d.querySelectorAll('[id]')].map(n=>n.id);assert.equal(new Set(ids).size,ids.length,'listening clones never duplicate IDs');
  d.querySelector('.listen-panel>a').click();assert.equal(d.body.dataset.studyMode,'read');assert.equal(w.location.hash,'#lyric-2');
  originals[3].querySelector('button').click();assert.equal(select.value,'3');assert.equal(d.body.dataset.studyMode,'listen');
  assert.equal(d.querySelectorAll('iframe').length,0,'Spotify never loads without an explicit action');
  const input=d.querySelector('#spotify-url'),form=d.querySelector('.spotify-form');
  for(const invalid of ['https://evil.test/track/0123456789012345678901','https://open.spotify.com.evil.test/track/0123456789012345678901','https://open.spotify.com/album/0123456789012345678901','javascript:alert(1)']){
   input.value=invalid;form.dispatchEvent(new w.Event('submit',{cancelable:true}));assert.equal(d.querySelectorAll('iframe').length,0);assert.equal(input.getAttribute('aria-invalid'),'true');
  }
  input.value='https://open.spotify.com/intl-ja/track/0123456789012345678901?si=abc';form.dispatchEvent(new w.Event('submit',{cancelable:true}));
  assert.equal(d.querySelector('iframe').src,'https://open.spotify.com/embed/track/0123456789012345678901?utm_source=generator');
  const iframe=d.querySelector('iframe');d.querySelector('.study-toolbar button:nth-child(2)').click();assert.equal(d.querySelector('iframe'),iframe,'switching mode preserves the player');
  assert.equal(d.querySelectorAll('.lesson-pagination a').length,file.startsWith('01')||file.startsWith('10')?2:3);
  dom.window.close();
 }
 const first=shells[0];
 const restored=await boot(first,{storage:{'tamil-song-study-v1':{'01':{line:2,spotify:'0123456789012345678901'}}},hash:'#foundation-01'});
 assert.equal(restored.window.document.body.dataset.studyMode,'read','grammar deep links open reading');
 assert.equal(restored.window.document.querySelector('#listen-line').value,'2','saved line restored');
 assert.equal(restored.window.document.querySelectorAll('iframe').length,0,'saved Spotify requires explicit load');restored.window.close();
 const blocked=await boot(first,{blocked:true});assert(blocked.window.document.querySelector('#listen-line'),'blocked storage does not break study');blocked.window.close();
 const failed=await boot(first,{fail:true});await delay();
 assert(failed.window.document.querySelector('.loading button'),'load failure offers retry');assert.equal(failed.window.document.querySelectorAll('#a').length,0,'failed load cannot leave partial duplicate text');
 failed.window.fetch=async url=>({ok:true,text:async()=>fs.readFileSync(path.join(songs,url.split('?')[0]),'utf8')});
 failed.window.document.querySelector('.loading button').click();for(let i=0;i<50&&failed.window.document.querySelector('.loading');i++)await delay();
 assert.equal(failed.window.document.querySelectorAll('#a').length,1,'retry inserts content exactly once');assert(failed.window.document.querySelector('#listen-line'),'successful retry starts the shared workspace');
 failed.window.document.querySelector('t[role=button]').click();assert(failed.window.document.querySelector('#speech-status').textContent.includes('利用できません'),'unsupported speech gives a visible status');failed.window.close();
 const library=await boot('index.html',{storage:{'tamil-song-study-v1':{'01':{line:0,updated:10}}}});const d=library.window.document;
 assert(d.querySelector('.library-hero .primary'),'library resumes even from first line');
 const search=d.querySelector('#song-search');search.value='否定';search.dispatchEvent(new library.window.Event('input'));assert(d.querySelectorAll('.song-card:not([hidden])').length>0);assert(d.querySelectorAll('.song-card[hidden]').length>0);
 search.value='no-such-song';search.dispatchEvent(new library.window.Event('input'));assert.equal(d.querySelectorAll('.song-card:not([hidden])').length,0);library.window.close();
 console.log('Song study: ten lessons, original lyrics, reveal/navigation, persistence, deep links, Spotify validation, denied storage, loading failures and search passed');
})().catch(e=>{console.error(e);process.exitCode=1;});

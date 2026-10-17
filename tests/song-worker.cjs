const fs=require('node:fs');
const vm=require('node:vm');
const assert=require('node:assert/strict');
const path=require('node:path');
const handlers={},stored=new Map(),lookups=[],deleted=[];
let offline=false,networkCalls=0;
const source=fs.readFileSync(path.resolve(__dirname,'../sw.js'),'utf8');
const key=(req,options)=>{const url=typeof req==='string'?req:req.url;return options?.ignoreSearch?url.split('?')[0]:url;};
vm.runInNewContext(source,{
 self:{addEventListener(type,fn){handlers[type]=fn;},skipWaiting(){},clients:{claim(){}}},
 Response,
 fetch:async req=>{networkCalls++;if(offline)throw new Error('offline');return new Response('page: '+key(req),{status:req.fail?503:200});},
 caches:{open:async()=>({put:async(req,response)=>stored.set(key(req),response),addAll:async()=>{}}),
  keys:async()=>['tamil2-old','other-app-cache'],delete:async name=>deleted.push(name),
  match:async(req,options)=>{lookups.push([key(req),options]);const entry=[...stored].find(([url])=>options?.ignoreSearch?url.split('?')[0]===key(req,options):url===key(req));return entry?entry[1].clone():undefined;}}
});
async function dispatch(request){let result;handlers.fetch({request,respondWith(p){result=p;}});return result;}
(async()=>{
 let activated;handlers.activate({waitUntil(p){activated=p;}});await activated;assert.deepEqual(deleted,['tamil2-old'],'other GitHub Pages apps retain their caches');
 const song={url:'https://example.test/songs/01.html?v=1',method:'GET',mode:'navigate'};
 const book={url:'https://example.test/textbook.html',method:'GET',mode:'navigate'};
 await dispatch(song);await dispatch(book);offline=true;
 assert.equal(await (await dispatch(song)).text(),'page: '+song.url,'offline navigation restores the requested page, not the last visited page');
 assert.equal((await dispatch({...song,url:'https://example.test/songs/missing.html'})).status,503,'uncached offline page gets an explicit failure');
 offline=false;
 const asset={url:'https://example.test/songs/reader.js?v=1',method:'GET',mode:'cors'};await dispatch(asset);
 const before=networkCalls;await dispatch({...asset,url:asset.url.replace('v=1','v=2')});assert.equal(networkCalls,before+1,'new asset version goes to network');
 const count=lookups.length;await dispatch({...asset,cache:'no-store'});assert.equal(lookups.length,count,'fresh fragments bypass cache');
 await dispatch({...asset,url:'https://example.test/failure.js',fail:true});assert(!stored.has('https://example.test/failure.js'),'error responses are not cached');
 console.log('Song worker: isolated caches, page-specific offline navigation, versioned assets, no-store fragments and error responses passed');
})().catch(e=>{console.error(e);process.exitCode=1;});

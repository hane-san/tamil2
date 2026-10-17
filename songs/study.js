/* Shared song study UI. Curriculum text stays in the existing HTML fragments. */
(()=>{
  'use strict';
  // Refresh an existing textbook worker; the song reader itself needs no install.
  if('serviceWorker' in navigator)navigator.serviceWorker.getRegistration().then(reg=>reg&&reg.update()).catch(()=>{});
  const catalog=[
    ['01-vaazhndhu-paaru','Vaazhndhu Paaru','Tourist Family','動詞の後ろの「〜してみる」と、名詞の前の「〜する」を聞き分ける。'],
    ['02-marandhu-poche','Marandhu Poche','With Love','短い否定と「〜してしまった」の結果を探し、単純な過去との違いを説明する。'],
    ['03-innum-ethana-kaalam','Innum Ethana Kaalam','Bomb','疑問・未来・引用の語尾に注目し、誰の言葉かを追う。'],
    ['04-eppadi-iruntha-naanga','Eppadi Iruntha Naanga','Sulthan','「私たち」を表す語と動詞の終わりを一緒に拾う。'],
    ['05-morattu-muttal','Morattu Muttal','With Love','「もし〜なら」と「〜でも」を、後ろに続く内容とセットで読む。'],
    ['06-aiyo-kadhaley','Aiyo Kadhaley','With Love','「〜しない名詞」と「〜せずに」を、直後に来る語で見分ける。'],
    ['07-edhukku-dhan-indha-kaadhal','Edhukku Dhan Indha Kaadhal','With Love','否定の語尾を拾い、名詞の説明・動作の接続・禁止のどれかを考える。'],
    ['08-power','Power','Jai Bhim','短い命令と、必要・可能を足す語尾の違いを聞く。'],
    ['09-varalaama','Varalaama','Sarvam Thaala Mayam','「〜してもいい？」の問いと、文学的な呼びかけを区別する。'],
    ['10-sarvam-thaalamayam','Sarvam Thaalamayam','Sarvam Thaala Mayam','同じ -um でも、名詞を説明する形か、語を並べる形かを前後から判断する。']
  ];
  const KEY='tamil-song-study-v1', PREF='tamil-song-display-v1';
  const contrasts=[
    [['「見る」と「試す」','同じ pāru でも、前の動詞を受けて「〜してみる」になる場合と、文末で「ほら・見て」と添える場合があります。直前の形と、文全体の意味を一緒に確認しましょう。'],['文を終える／名詞を説明する','-um は「未来」と即決しません。後ろに名詞があれば、その名詞を説明するまとまりかを確認します。'],['つなぐ二つの形','連結形は動作を次へつなぎ、不定形は後続の述語へ意味を渡します。日本語訳の「〜して」だけで選ばず、実際の語尾と右隣の語を見ます。']],
    [['過去と結果','pōccu は、この曲では出来事の結果・完了に関わります。単に「過去のこと」だけでなく、何が変わり、どんな状態になったかを読みます。'],['否定と場所の -la','同じような音でも、動詞の否定か、名詞の場所を示す語尾かで役割が違います。語全体と前後のつながりを分解表で確認します。'],['縮約と原文の綴り','聞こえにくい形は、原文→分解→標準寄りの対応の順で照合します。綴りが不確かな箇所は、推測した形に置き換えて暗記しません。']],
    [['疑問と未来','問いかけの終わりと、一人称未来の終わりを別々に拾います。語尾から、誰が何をする文なのかを組み立て直しましょう。'],['引用の内と外','-nnu の左が引用する内容、右が発言・思考などの外側です。引用内の「私」が誰なのかを、外側の主語と区別します。'],['分かった／分からない','否定と完了の対比では、肯否だけでなく「理解に至った」という変化も確認します。同じ語の形を見比べると、語彙の負担を減らせます。']],
    [['私たちの範囲','人称語尾だけで聞き手を含むかは決まりません。代名詞と場面を一緒に読み、誰を「私たち」に含めているかを確かめます。'],['過去と状態変化','「〜だった」と「〜になった」を区別します。結果完了の形が、以前から今への変化をどう示すかに注目します。'],['歌の親しさと依頼','くだけた命令は親しい間柄の響きです。歌で認識できることと、初対面で同じ形を使うことは分け、教科書の丁寧な依頼も確認します。']],
    [['条件と譲歩','「もし〜なら」は後半の成立条件、「〜でも」は予想に反して後半が成り立つ関係です。前半だけを和訳せず、後半との関係を説明します。'],['主語と経験する人','「好き・分かる」などは、日本語で「私が」と言いたくても、タミル語では経験者を与格で示す構文があります。格と述語をセットで読みます。'],['保持と単純過去','補助動詞を含む長い形は右端から見ます。単に行っただけか、その結果を自分の状態として保つ意味があるかを確認します。']],
    [['否定の後ろを見る','否定形の直後が名詞なら「〜しない名詞」、動詞なら「〜せずに」の接続かを考えます。日本語の「ない」だけで一つにまとめません。'],['現在と非人間の語尾','動詞の末尾が何を受けるかを確認します。口語の短い現在形を、聞こえた音だけから独立した単語に切らないようにします。'],['不定形の相手','不定形を必ず「〜するため」とは訳しません。後ろの動詞・述語が、目的・必要などのどの関係を作るかを確かめます。']],
    [['名詞の説明と禁止','-ādha は名詞を説明し、-ādhē は相手への禁止を表します。似た音でも、文の中で置ける位置が違います。'],['接続と文の述語','-āmal / -āma は次の動作につなぐ否定、-ādhu は文の述語になる否定として対比します。文末だけでなく、後続のまとまりも確認します。'],['否定と強調','thān の焦点と、否定されている内容を分けて読みます。歌詞の不確実な綴りは注記を残したまま、断定できる構造から理解します。']],
    [['命令・必要・可能','「しろ」「しなければ」「できる・してよい」は別の機能です。強い歌の調子につられず、形がどの意味を足すかを説明します。'],['条件と引用条件','-ṭṭā と -nnā は、前が動作なのか、発言内容・想定なのかを含めて確認します。日本語でどちらも「なら」でも、組み立ては同じとは限りません。'],['認識と使い方','短い命令や呼びかけを聞き取れたら、会話では誰に使う形かも確認します。旅行の依頼には丁寧な形を選びます。']],
    [['可能と許可の問い','-lāmā を見たら、誰の動作について誰に尋ねているかを読みます。能力を述べる文と「〜してもいい？」の許可・誘いを区別します。'],['場所と内部','「〜で」と「〜の中に」の違いを、名詞に付く形と位置関係から確認します。日本語の助詞だけでなく、何を基準に位置を示すかを考えます。'],['会話と文学的な呼びかけ','歌の未来形・呼びかけは、日常会話と響きが異なることがあります。意味が分かる形を、そのまま無標の会話表現にはしません。']],
    [['二つの -um','名詞を説明する動詞の -um と、語を並べたり取り立てたりする -um を区別します。まず付いている語の種類、次に文での役割を見ます。'],['改行と文の境界','長い名詞句は改行をまたいでも一つのまとまりです。中心の名詞と最後の述語を探してから、修飾を左側へたどります。'],['意味のある語とリズム音節','リズムのための音節を、通常の単語や活用として無理に分解しません。文学的な命令・願望も、会話の命令とは表示を分けて読みます。']]
  ];
  function read(key){try{const v=JSON.parse(localStorage.getItem(key)||'{}');return v&&typeof v==='object'&&!Array.isArray(v)?v:{};}catch(_){return {};}}
  function save(key,value){try{localStorage.setItem(key,JSON.stringify(value));return true;}catch(_){return false;}}
  const records=read(KEY),prefs=read(PREF);
  const el=(tag,cls,text)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(text!==undefined)n.textContent=text;return n;};
  const button=(text,fn)=>{const b=el('button','study-button',text);b.type='button';b.onclick=fn;return b;};
  const link=(text,href)=>{const a=el('a','study-button',text);a.href=href;return a;};
  const main=document.querySelector('main');if(!main)return;
  if(!main.id)main.id='study-main';
  const skip=link('本文へ移動','#'+main.id);skip.className='skip-link';document.body.prepend(skip);
  const status=el('div','sr-only');status.setAttribute('role','status');document.body.append(status);
  const announce=text=>{status.textContent=text;};
  const lesson=catalog.find(c=>location.pathname.endsWith('/'+c[0]+'.html'));
  const page=lesson?String(catalog.indexOf(lesson)+1).padStart(2,'0'):null;
  let record=page&&records[page]&&typeof records[page]==='object'?records[page]:{};
  function persist(){records[page]=record;const ok=save(KEY,records);if(!ok)announce('このブラウザでは学習記録を保存できません。今の画面での学習は続けられます。');return ok;}
  function applyPrefs(){
    document.documentElement.dataset.studySize=prefs.large?'large':'normal';
    document.documentElement.dataset.speechRate=prefs.slow?'slow':'normal';
    document.body.classList.toggle('hide-reading-kana',!!prefs.hideKana);
    document.body.classList.toggle('hide-reading-roman',!!prefs.hideRoman);
  }
  applyPrefs();

  function settings(){
    const details=el('details','study-settings');details.append(el('summary',null,'表示・読み上げの設定'));
    const fields=el('div','setting-fields');
    [['large','文字を大きくする'],['hideKana','歌詞カードのカナを隠す'],['hideRoman','歌詞カードのローマ字を隠す'],['slow','端末TTSをゆっくり読む']].forEach(([key,label])=>{
      const l=el('label');const input=el('input');input.type='checkbox';input.checked=!!prefs[key];
      input.onchange=()=>{prefs[key]=input.checked;applyPrefs();if(!save(PREF,prefs))announce('表示設定を保存できませんでした。');};
      l.append(input,document.createTextNode(label));fields.append(l);
    });
    fields.append(button('端末の読み上げを停止',()=>window.dispatchEvent(new Event('song:stop-speech'))));
    details.append(fields,el('p','study-muted','端末TTSは歌唱音源ではありません。カナは音の手掛かりです。長母音や子音の長さは原曲・文字と照らし合わせてください。'));
    return details;
  }
  function glossary(){
    const d=el('details','study-glossary');d.append(el('summary',null,'解説の読み方・文法用語の早見'));
    const dl=el('dl');
    [
      ['直訳 → 自然訳','直訳は語の組み立て、自然訳はこの場面で伝えたい意味を示します。英語は構造を照らす補助です。'],
      ['格','「誰に・何を・どこで」など、名詞と他の語の関係を示す印。日本語の助詞とは一対一に対応しません。'],
      ['有限形','時・人称などを担い、文の述語になれる動詞の形。歌の改行だけで文が終わるとは限りません。'],
      ['不定形／連結形','不定形は別の述語へ動作を渡す形、連結形は動作を次へつなぐ形。どちらも後ろの語と一緒に読みます。'],
      ['名詞修飾','後ろの名詞を説明するまとまり。「来る鳥」の「来る」のような働き。文を終える動詞と区別します。'],
      ['口語／標準寄り／文学表現','会話の縮約、比較用の整った形、歌や書き言葉の形を区別します。歌の形がすべて日常会話に向くわけではありません。'],
      ['学び方','まず訳を伏せて一行聴く → 聞こえた語を探す → 分解表で語尾の働きを確認 → もう一度聴く。最後に自分の言葉で理由を説明します。']
    ].forEach(([term,meaning])=>dl.append(el('dt',null,term),el('dd',null,meaning)));
    d.append(dl);return d;
  }

  function library(){
    const list=document.querySelector('.song-list');if(!list)return;
    const hero=document.querySelector('.library-hero');
    hero.querySelector('h1').textContent='聴こえた一行が、わかる一行に。';
    hero.querySelector('.lead').textContent='好きなタミル語の歌を流して、一行ずつ。まず音を追い、気になった語の意味と文法をほどいていきましょう。';
    const steps=el('ol','study-steps');['曲を流す','一行を耳で追う','意味と形を確かめる'].forEach(s=>steps.append(el('li',null,s)));hero.append(steps);
    const latest=Object.entries(records).filter(([id,r])=>catalog[Number(id)-1]&&r&&Number.isFinite(r.updated)).sort((a,b)=>b[1].updated-a[1].updated)[0];
    if(latest){const c=catalog[Number(latest[0])-1];const resume=link('続きから学ぶ · '+c[1],c[0]+'.html#listen');resume.classList.add('primary');hero.append(resume);}
    const tools=el('section','library-search');tools.setAttribute('aria-label','曲を探す');
    const label=el('label',null,'曲名・映画・学びたい文法で探す');label.htmlFor='song-search';
    const input=el('input');input.id='song-search';input.type='search';input.placeholder='例：否定、With Love、ヴァララーマー';
    const count=el('p','study-muted');count.setAttribute('role','status');
    const filters=el('div','filter-row');let film='すべて';
    const cards=[...list.querySelectorAll('.song-card')];
    cards.forEach((card,i)=>{
      const r=records[String(i+1).padStart(2,'0')];const tag=el('div','song-progress',r&&Number.isInteger(r.line)?'続きあり · '+(r.line+1)+'行目':'聴いて学ぶ →');card.append(tag);
      card.querySelector('.tags').lastElementChild.textContent='一行リスニング';
    });
    function filter(){
      const q=input.value.normalize('NFKC').toLocaleLowerCase().trim();let found=0;
      cards.forEach((card,i)=>{const match=(film==='すべて'||catalog[i][2]===film)&&(card.textContent+' '+catalog[i][1]).normalize('NFKC').toLocaleLowerCase().includes(q);card.hidden=!match;if(match)found++;});
      count.textContent=found?found+' / 10曲':'該当する曲がありません。別の語で探してください。';
      [...filters.children].forEach(b=>b.setAttribute('aria-pressed',String(b.textContent===film)));
    }
    ['すべて',...new Set(catalog.map(c=>c[2]))].forEach(f=>filters.append(button(f,()=>{film=f;filter();})));
    input.addEventListener('input',filter);tools.append(label,input,filters,count);list.before(tools);filter();
    hero.after(glossary());
  }

  function music(){
    const d=el('details','music-panel');d.id='music';d.append(el('summary',null,'音源を選ぶ · Spotify / YouTube'));
    const row=el('div','music-links');
    const query=lesson[1]+' '+lesson[2];
    [['Spotifyで曲を探す','https://open.spotify.com/search/'+encodeURIComponent(query)],['YouTubeで曲を探す','https://www.youtube.com/results?search_query='+encodeURIComponent(query+' official')]].forEach(([text,url])=>{const a=link(text,url);a.target='_blank';a.rel='noopener noreferrer';row.append(a);});
    d.append(row,el('p','study-muted','Spotifyアプリで流したままでも学べます。埋め込むときは、再生したい曲の「シェア → リンクをコピー」を使ってください。'));
    const form=el('form','spotify-form');const label=el('label',null,'Spotifyの曲URL');label.htmlFor='spotify-url';
    const input=el('input');input.id='spotify-url';input.type='url';input.placeholder='https://open.spotify.com/track/…';input.autocomplete='off';
    const error=el('p','form-message');error.id='spotify-message';error.setAttribute('role','status');input.setAttribute('aria-describedby',error.id);
    const submit=button('プレーヤーを表示',()=>{});submit.type='submit';
    const frameBox=el('div','spotify-player');
    function trackId(value){try{const u=new URL(value);if(u.protocol!=='https:'||u.hostname!=='open.spotify.com'||u.username||u.password||u.port)return null;return u.pathname.match(/^\/(?:intl-[a-z]{2}\/)?(?:embed\/)?track\/([A-Za-z0-9]{22})\/?$/)?.[1]||null;}catch(_){return null;}}
    function embed(id){
      window.dispatchEvent(new Event('song:stop-speech'));
      const frame=el('iframe');frame.src='https://open.spotify.com/embed/track/'+id+'?utm_source=generator';frame.title=lesson[1]+' — Spotifyプレーヤー';frame.height='152';frame.allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture';frame.setAttribute('allowfullscreen','');
      frameBox.replaceChildren(frame);error.textContent='再生できない場合は「Spotifyで開く」を使ってください。';
      const open=link('この曲をSpotifyで開く','https://open.spotify.com/track/'+id);open.target='_blank';open.rel='noopener noreferrer';frameBox.append(open);
    }
    form.onsubmit=e=>{e.preventDefault();const id=trackId(input.value.trim());if(!id){input.setAttribute('aria-invalid','true');error.textContent='open.spotify.com/track/… の曲リンクを入力してください。短縮リンクはSpotifyで開いてからコピーしてください。';return;}
      input.removeAttribute('aria-invalid');record.spotify=id;persist();embed(id);
    };
    form.append(label,input,submit);d.append(form,error,frameBox);
    if(typeof record.spotify==='string'&&/^[A-Za-z0-9]{22}$/.test(record.spotify)){
      d.open=true;
      input.value='https://open.spotify.com/track/'+record.spotify;
      frameBox.append(button('保存した曲のプレーヤーを読み込む',()=>embed(record.spotify)));
    }
    d.append(button('保存した曲を解除',()=>{delete record.spotify;persist();input.value='';frameBox.replaceChildren();error.textContent='この曲の保存済みリンクを解除しました。';}),el('p','study-muted','再生範囲・ログイン・地域の制限はSpotify側の仕様に従います。歌詞との自動同期・A/Bリピートには対応していません。'));
    return d;
  }

  function studyNotes(){
    const d=el('details','study-notes');d.append(el('summary',null,'この曲の確認・学習メモ'));
    const checks=el('div','setting-fields');
    const checked=Array.isArray(record.checked)?record.checked:[];
    ['一行を聴いて、文字で追えた','語尾の働きを自分の言葉で説明できた','訳を隠して、もう一度確かめた'].forEach((text,i)=>{
      const label=el('label');const input=el('input');input.type='checkbox';input.checked=checked.includes(i);
      input.onchange=()=>{record.checked=[...checks.querySelectorAll('input')].flatMap((box,n)=>box.checked?[n]:[]);record.updated=Date.now();persist();};label.append(input,document.createTextNode(text));checks.append(label);
    });
    const label=el('label',null,'聞き取れなかった語・気づいたこと');label.htmlFor='song-note';
    const note=el('textarea');note.id='song-note';note.rows=3;note.maxLength=3000;note.placeholder='例：語末を聞き落とした。次は同じ節をもう一度。';note.value=typeof record.note==='string'?record.note:'';
    const feedback=el('p','study-muted');feedback.setAttribute('role','status');
    note.oninput=()=>{record.note=note.value;record.updated=Date.now();const message=persist()?'このブラウザにメモを保存しました。':'メモを保存できませんでした。';if(feedback.textContent!==message)feedback.textContent=message;};
    d.append(checks,label,note,feedback,el('p','study-muted','チェック・続きの行・曲リンク・メモは、このブラウザだけに保存します。別の端末との同期はありません。翌日、同じ一節を訳なしで確かめてみましょう。'));
    return d;
  }

  function contrastGuide(){
    const d=el('details','study-contrasts');d.append(el('summary',null,'この曲で見分けたい、3つの対比'));
    const dl=el('dl');contrasts[catalog.indexOf(lesson)].forEach(([term,meaning])=>dl.append(el('dt',null,term),el('dd',null,meaning)));
    d.append(dl,link('文法の足場で例を確かめる','#foundation-'+page));d.querySelector('a').onclick=()=>document.querySelector('.study-toolbar button:nth-child(2)').click();return d;
  }

  function reader(){
    if(!lesson||document.getElementById('study-workspace'))return;
    const sourceLines=[...main.querySelectorAll('.line')];if(!sourceLines.length)return;
    let current=Number.isInteger(record.line)?Math.max(0,Math.min(record.line,sourceLines.length-1)):0;
    let mode='read';
    const workspace=el('section','card study-workspace');workspace.id='study-workspace';
    workspace.append(el('div','eyebrow','LISTEN · NOTICE · UNDERSTAND'),el('h2',null,'この曲を、あなたのペースで。'),el('p','study-focus',lesson[3]),music());
    const toolbar=el('div','study-toolbar');toolbar.setAttribute('role','group');toolbar.setAttribute('aria-label','学習モード');
    const listenButton=button('聴く · 一行ずつ',()=>setMode('listen'));
    const readButton=button('読む · 詳しい解説',()=>setMode('read'));
    toolbar.append(listenButton,readButton);workspace.append(toolbar);
    const panel=el('section','listen-panel');panel.id='listen';panel.setAttribute('aria-label','一行リスニング');
    panel.append(el('p','study-muted','原曲の再生に合わせて「次の行」で進みます。掲載順は学習用の抜粋です。反復や間奏は音源に合わせて戻ってください。'));
    const selectLabel=el('label',null,'聴きたい行');selectLabel.htmlFor='listen-line';
    const select=el('select');select.id='listen-line';
    sourceLines.forEach((line,i)=>{
      line.id='lyric-'+(i+1);const text=line.querySelector('.ta')?.textContent.trim()||'';
      const option=el('option',null,(i+1)+'｜'+text);option.value=String(i);select.append(option);
    });
    const counter=el('p','line-counter');counter.setAttribute('role','status');
    const stage=el('div','listen-stage');
    const prev=button('← 前の行',()=>show(current-1));const next=button('次の行 →',()=>show(current+1));
    const controls=el('div','line-controls');controls.append(prev,next);
    const detail=link('この行の語彙・文法を読む','#');detail.onclick=e=>{e.preventDefault();setMode('read');const line=sourceLines[current];history.replaceState(null,'','#'+line.id);line.scrollIntoView({block:'start',behavior:'instant'});line.setAttribute('tabindex','-1');line.focus({preventScroll:true});};
    panel.append(selectLabel,select,counter,stage,controls,detail);
    workspace.append(panel,contrastGuide(),studyNotes(),settings(),glossary());
    const hero=main.querySelector('.hero');hero.after(workspace);
    const intro=el('nav','study-jumps');intro.setAttribute('aria-label','この課の学習順');
    [['聴く','#listen'],['文法の足場','#foundation-'+page],['歌詞の解説','#a'],['累積復習','#recall-'+page]].forEach(([title,href])=>{const a=link(title,href);a.onclick=()=>setMode(href==='#listen'?'listen':'read');intro.append(a);});
    workspace.before(intro);
    const contentNodes=[...main.children].filter(n=>n!==hero&&n!==workspace&&n!==intro);
    contentNodes.forEach(n=>n.classList.add('reading-content'));
    function show(index){
      window.dispatchEvent(new Event('song:stop-speech'));
      current=Math.max(0,Math.min(index,sourceLines.length-1));select.value=String(current);
      const clone=sourceLines[current].cloneNode(true);clone.removeAttribute('id');clone.removeAttribute('tabindex');
      clone.querySelectorAll('.study-button').forEach(b=>b.remove());
      const translation=clone.querySelector('.literal');
      if(translation){const toggle=button('意味を確かめる',()=>{translation.hidden=!translation.hidden;toggle.textContent=translation.hidden?'意味を確かめる':'意味を隠す';toggle.setAttribute('aria-expanded',String(!translation.hidden));});translation.hidden=true;translation.id='listen-meaning';toggle.setAttribute('aria-controls',translation.id);toggle.setAttribute('aria-expanded','false');clone.append(toggle);}
      stage.replaceChildren(clone);counter.textContent=(current+1)+' / '+sourceLines.length+'行';prev.disabled=current===0;next.disabled=current===sourceLines.length-1;
      record.line=current;record.updated=Date.now();persist();
    }
    function setMode(value){mode=value;document.body.dataset.studyMode=mode;panel.hidden=mode!=='listen';listenButton.setAttribute('aria-pressed',String(mode==='listen'));readButton.setAttribute('aria-pressed',String(mode==='read'));}
    select.onchange=()=>show(Number(select.value));
    function hashMode(){const hash=location.hash.slice(1);if(hash==='listen'){setMode('listen');}else if(hash){setMode('read');}}
    window.addEventListener('hashchange',hashMode);
    // Every detailed lyric has the same route back to listening; no extra lyric copy.
    sourceLines.forEach((line,i)=>{const b=button('この行を聴く画面へ',()=>{show(i);setMode('listen');history.replaceState(null,'','#listen');panel.scrollIntoView({block:'start',behavior:'instant'});select.focus({preventScroll:true});});line.append(b);});
    const footer=el('nav','card lesson-pagination');footer.setAttribute('aria-label','前後の曲');
    const idx=catalog.indexOf(lesson);if(idx>0)footer.append(link('← 前の曲',catalog[idx-1][0]+'.html'));footer.append(link('曲一覧','index.html'));if(idx<9)footer.append(link('次の曲 →',catalog[idx+1][0]+'.html'));main.append(footer);
    show(current);
    setMode(location.hash&&location.hash!=='#listen'?'read':'listen');
    if(location.hash){let id=location.hash.slice(1);try{id=decodeURIComponent(id);}catch(_){}document.getElementById(id)?.scrollIntoView({block:'start',behavior:'instant'});}
    announce('本文を読み込みました。一行リスニングと詳しい解説を切り替えられます。');
  }
  if(lesson){document.addEventListener('song:ready',reader);if(!document.querySelector('.loading'))reader();}
  else if(document.querySelector('.song-list'))library();
  else {main.prepend(settings());main.append(glossary());}
})();

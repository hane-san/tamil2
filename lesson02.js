window.TAMIL_LESSONS = window.TAMIL_LESSONS || [];
window.TAMIL_LESSONS.push({
  id:"lesson02",
  number:"02",
  title:"代名詞と中心となる格",
  question:"「私」「私を」「私に」は、同じ語へ語尾を足すだけなのでしょうか。",
  sections:[
    {
      type:"examples",
      title:"まず聞く",
      items:[
        {tamil:"நான் படம் பார்க்கிறேன்.",tts:"நான் படம் பார்க்கிறேன்.",roman:"nāṉ paṭam pār-kkiṟ-ēṉ.",katakana:"ナーン　パダム　パールッキレーン",japanese:"私は映画を見ています。",featured:true,morph:["nāṉ＝私（中心）","paṭam＝映画","-ēṉ＝私を示す動詞語尾"]},
        {tamil:"அவர் என்னை பார்க்கிறார்.",tts:"அவர் என்னை பார்க்கிறார்.",roman:"avar eṉṉ-ai pār-kkiṟ-ār.",katakana:"アヴァル　エンナイ　パールッキラール",japanese:"その方は私を見ています。",morph:["avar＝その方","eṉṉ-ai＝私を","-ai＝対象"]},
        {tamil:"நான் நண்பருக்கு போன் செய்கிறேன்.",tts:"நான் நண்பருக்கு போன் செய்கிறேன்.",roman:"nāṉ naṇpar-ukku pōṉ cey-kiṟ-ēṉ.",katakana:"ナーン　ナンバルック　ポーン　セイギレーン",japanese:"私は友達に電話します。",morph:["naṇpar-ukku＝友達に","-ukku＝届く相手"]},
        {tamil:"எனக்கு காபி பிடிக்கும்.",tts:"எனக்கு காபி பிடிக்கும்.",roman:"eṉ-akku kāpi piṭikkum.",katakana:"エナック　カーピ　ピディックム",japanese:"私はコーヒーが好きです。",literal:"構造に近く言えば「私には、コーヒーが好ましい」です。",morph:["eṉ-akku＝私に／私には","-ukku＝経験者"]}
      ]
    },
    {
      type:"prose",
      title:"格は、名詞に役を渡す",
      eyebrow:"THE BIG IDEA",
      paragraphs:[
        "格は、日本語の助詞を別の言語へ置き換える表ではありません。文の中に登場した名詞や代名詞へ、<strong>この出来事では何を担当するのか</strong>を渡す仕組みです。第2課では、まず三つの役に絞ります。",
        "一つ目は、動作や状態の<strong>中心</strong>。二つ目は、動作が向かう<strong>対象</strong>。三つ目は、物・情報・移動・感覚が<strong>届く相手や地点</strong>です。伝統的な名称では、それぞれ主格・対格・与格と呼ばれます。",
        "この三つを別々の暗記事項にすると、与格の用法がばらばらに見えます。しかし『届く先』という関係でまとめると、友達に電話する、チェンナイへ行く、私にはコーヒーが好ましい、が同じ方向を向きます。"
      ]
    },
    {
      type:"compare",
      title:"中心・対象・届く先",
      items:[
        {left:{tamil:"நான்",tts:"நான்",roman:"nāṉ"},right:"<strong>中心</strong>――私が見る、私が行く。主格は多くの場合、目に見える語尾を持ちません。"},
        {left:{tamil:"என்னை",tts:"என்னை",roman:"eṉṉ-ai"},right:"<strong>対象</strong>――誰かが私を見る。動作の矢印が私へ向かいます。"},
        {left:{tamil:"எனக்கு",tts:"எனக்கு",roman:"eṉ-akku"},right:"<strong>届く先・経験者</strong>――物が私に届く、必要や好みが私に生じます。"},
        {left:{tamil:"சென்னைக்கு",tts:"சென்னைக்கு",roman:"ceṉṉai-kku"},right:"<strong>行き先</strong>――与格は人だけでなく、移動が到達する地点にも付きます。"}
      ]
    },
    {
      type:"forms",
      title:"代名詞は専用の土台を持つ",
      items:[
        {
          tamil:"என்னை",tts:"என்னை",roman:"eṉṉ-ai",katakana:"エンナイ",japanese:"私を",
          morph:["eṉṉ-＝『私』の対格用の土台","-ai＝対象"],
          changes:[
            {tamil:"நான்",tts:"நான்",roman:"nāṉ",meaning:"私（中心）"},
            {tamil:"என்னை",tts:"என்னை",roman:"eṉṉ-ai",meaning:"私を"},
            {tamil:"எனக்கு",tts:"எனக்கு",roman:"eṉ-akku",meaning:"私に／私には"}
          ]
        },
        {
          tamil:"உன்னை",tts:"உன்னை",roman:"uṉṉ-ai",katakana:"ウンナイ",japanese:"あなたを",
          morph:["uṉṉ-＝『あなた』の対格用の土台","-ai＝対象"],
          changes:[
            {tamil:"நீ",tts:"நீ",roman:"nī",meaning:"あなた（親しい単数・中心）"},
            {tamil:"உன்னை",tts:"உன்னை",roman:"uṉṉ-ai",meaning:"あなたを"},
            {tamil:"உனக்கு",tts:"உனக்கு",roman:"uṉ-akku",meaning:"あなたに"}
          ]
        },
        {
          tamil:"அவளை",tts:"அவளை",roman:"avaḷ-ai",katakana:"アヴァライ",japanese:"彼女を",
          morph:["avaḷ＝彼女","-ai＝対象"],
          changes:[
            {tamil:"அவள்",tts:"அவள்",roman:"avaḷ",meaning:"彼女（中心）"},
            {tamil:"அவளை",tts:"அவளை",roman:"avaḷ-ai",meaning:"彼女を"},
            {tamil:"அவளுக்கு",tts:"அவளுக்கு",roman:"avaḷ-ukku",meaning:"彼女に"}
          ]
        },
        {
          tamil:"அவருக்கு",tts:"அவருக்கு",roman:"avar-ukku",katakana:"アヴァルック",japanese:"その方に／その方には",
          morph:["avar＝敬意を含む『その方』","-ukku＝相手・経験者"],
          changes:[
            {tamil:"அவர்",tts:"அவர்",roman:"avar",meaning:"その方（中心）"},
            {tamil:"அவரை",tts:"அவரை",roman:"avar-ai",meaning:"その方を"},
            {tamil:"அவருக்கு",tts:"அவருக்கு",roman:"avar-ukku",meaning:"その方に／その方には"}
          ]
        }
      ],
      note:"代名詞では、主格の形へ格語尾を機械的に足せないことがあります。nāṉ-ai ではなく eṉṉ-ai、nāṉ-ukku ではなく eṉ-akku です。"
    },
    {
      type:"prose",
      title:"なぜ代名詞だけ大きく変わる？",
      paragraphs:[
        "『私』『あなた』のような代名詞は、会話で非常に頻繁に使われます。頻度の高い語は、言語の歴史の中で古い変化を保ちやすく、形が短くまとまりやすいため、普通名詞より不規則に見えることがあります。",
        "けれども、格語尾そのものまで消えたわけではありません。<strong>என்னை eṉṉ-ai</strong> には対象の <strong>-ai</strong>、<strong>எனக்கு eṉ-akku</strong> には与格の <strong>-ukku</strong> が見えます。変わるのは、語尾を受ける前の土台です。",
        "したがって、代名詞は三つの語を無関係に覚えるより、<strong>中心形＋格を受ける土台</strong>として組で覚えるほうが再利用できます。நான்―என்னை―எனக்கு、நீ―உன்னை―உனக்கு、という三点セットです。"
      ]
    },
    {
      type:"mini",
      title:"人を指す形",
      items:[
        {tamil:"நான்",tts:"நான்",roman:"nāṉ",katakana:"ナーン",japanese:"私"},
        {tamil:"நாங்க",tts:"நாங்க",roman:"nāṅka",katakana:"ナーンガ",japanese:"私たち（聞き手を含めない口語）"},
        {tamil:"நாம",tts:"நாம",roman:"nāma",katakana:"ナーマ",japanese:"私たち（聞き手を含む口語）"},
        {tamil:"நீ",tts:"நீ",roman:"nī",katakana:"ニー",japanese:"あなた（親しい単数）"},
        {tamil:"நீங்க",tts:"நீங்க",roman:"nīṅka",katakana:"ニーンガ",japanese:"あなた／あなた方（丁寧・複数の口語）"},
        {tamil:"அவன்",tts:"அவன்",roman:"avaṉ",katakana:"アヴァン",japanese:"彼（非敬意・親しい関係）"},
        {tamil:"அவள்",tts:"அவள்",roman:"avaḷ",katakana:"アヴァル",japanese:"彼女（非敬意・親しい関係）"},
        {tamil:"அவர்",tts:"அவர்",roman:"avar",katakana:"アヴァル",japanese:"その方（敬意）"},
        {tamil:"அவங்க",tts:"அவங்க",roman:"avaṅka",katakana:"アヴァンガ",japanese:"その方／その人たち（敬意・複数の口語）"}
      ]
    },
    {
      type:"prose",
      title:"これ・それ・あれは二分法から見る",
      paragraphs:[
        "日本語は『これ・それ・あれ』の三つを基本にしますが、タミル語の指示代名詞は、まず<strong>話し手に近い இ- 系</strong>と、<strong>話し手から離れた அ- 系</strong>の対立で見ると分かりやすくなります。",
        "<strong>இது itu</strong> は「これ」、<strong>அது atu</strong> は文脈に応じて「それ／あれ」です。日本語の『聞き手の近く』と『双方から遠い』の区別を、代名詞一語だけで常に分けるわけではありません。場所をはっきりさせたいときは、ここ・そこ・あそこといった場所表現や指さし、文脈が補います。",
        "格が付くと、<strong>இதை it-ai</strong>（これを）、口語の <strong>இதுக்கு it-ukku</strong>（これに）、<strong>அதை at-ai</strong>（それ／あれを）、<strong>அதுக்கு at-ukku</strong>（それ／あれに）となります。書記形の இதற்கு・அதற்கு は、口語形と無表示で混ぜません。"
      ]
    },
    {
      type:"mini",
      title:"物を指す形",
      items:[
        {tamil:"இது",tts:"இது",roman:"itu",katakana:"イドゥ",japanese:"これ"},
        {tamil:"இதை",tts:"இதை",roman:"it-ai",katakana:"イダイ",japanese:"これを"},
        {tamil:"இதுக்கு",tts:"இதுக்கு",roman:"it-ukku",katakana:"イドゥック",japanese:"これに／このために（口語）"},
        {tamil:"அது",tts:"அது",roman:"atu",katakana:"アドゥ",japanese:"それ／あれ"},
        {tamil:"அதை",tts:"அதை",roman:"at-ai",katakana:"アダイ",japanese:"それを／あれを"},
        {tamil:"அதுக்கு",tts:"அதுக்கு",roman:"at-ukku",katakana:"アドゥック",japanese:"それに／あれに（口語）"}
      ]
    },
    {
      type:"prose",
      title:"対格は、対象を輪郭づける",
      paragraphs:[
        "対格 <strong>-ai</strong> は、動作が向かう対象を示します。ただし、物を表す名詞なら必ず付く、という単純な規則ではありません。特に口語では、種類として述べる不特定の物は、対格なしで現れることがあります。",
        "<strong>நான் படம் பார்க்கிறேன்</strong> は『私は映画を見ます』。ここでは படம் は、特定の一本を強く指すというより、映画を見るという活動の中に組み込まれています。一方、<strong>படத்தை நான் பார்க்கிறேன்</strong> とすれば、『その映画を／問題になっている映画を私が見る』という対象の輪郭が強くなります。",
        "人を表す目的語や、特定された対象では、対格が重要になります。<strong>அவர் என்னை பார்க்கிறார்</strong> の என்னை を落とすと、誰が誰を見るのかが崩れます。対格は日本語の『を』の翻訳というより、動作の矢印の終点を明示する装置です。"
      ]
    },
    {
      type:"compare",
      title:"映画か、その映画か",
      items:[
        {left:{tamil:"நான் படம் பார்க்கிறேன்.",tts:"நான் படம் பார்க்கிறேன்.",roman:"nāṉ paṭam pār-kkiṟ-ēṉ."},right:"映画を見るという活動。物の目的語は、口語で無標になることがあります。"},
        {left:{tamil:"படத்தை நான் பார்க்கிறேன்.",tts:"படத்தை நான் பார்க்கிறேன்.",roman:"paṭatt-ai nāṉ pār-kkiṟ-ēṉ."},right:"その映画を私が見る。-ai によって、対象が特定され輪郭を持ちます。"},
        {left:{tamil:"அவர் என்னை பார்க்கிறார்.",tts:"அவர் என்னை பார்க்கிறார்.",roman:"avar eṉṉ-ai pār-kkiṟ-ār."},right:"人を表す対象。誰へ動作が向かうかを対格で明示します。"}
      ]
    },
    {
      type:"prose",
      title:"与格は「届く先」",
      paragraphs:[
        "与格を単に『〜に』と覚えるより、<strong>何かが届く先</strong>と考えると用法がつながります。電話や物が届く相手、移動の行き先、必要や好みを経験する人は、いずれも出来事の到達点として表されます。",
        "<strong>நண்பருக்கு போன் செய்கிறேன்</strong> では情報・呼びかけが友達へ向かい、<strong>சென்னைக்கு போகிறேன்</strong> では移動がチェンナイへ向かいます。人と場所は違っても、矢印の終点という関係は同じです。",
        "<strong>எனக்கு காபி பிடிக்கும்</strong> では、話者が意志的に『好きという動作』をするのではありません。コーヒーの好ましさが私に生じるため、経験する人が与格になります。<strong>எனக்கு தண்ணீர் வேண்டும்</strong>（私には水が必要です）も同じ設計です。"
      ]
    },
    {
      type:"culture",
      title:"映画の耳――代名詞は人間関係を映す",
      eyebrow:"DIALOGUE & RELATIONSHIPS",
      paragraphs:[
        "タミル映画で代名詞を聞くときは、辞書的な意味だけでなく、<strong>誰が誰をどう扱っているか</strong>を聞きます。நீ と நீங்க、அவன்・அவள் と அவர்・அவங்க の選択には、人数だけでなく、親しさ、年齢差、敬意、距離、怒りがにじみます。",
        "அவன்・அவள் は、近い友人や年下について自然に使われる一方、敬意を払うべき相手へ使えばぞんざいに響くことがあります。反対に அவர் や口語の அவங்க は、敬意を含む三人称として働きます。映画では、登場人物が呼び方を変えた瞬間に、関係の変化が台詞の内容より先に現れることがあります。",
        "さらに、主語代名詞は会話で省かれることがあります。動詞の末尾が『私』『あなた』『その人』を示すためです。字幕に『私は』とあっても、音声に நான் が聞こえないことがあります。消えたのではなく、主語の情報が動詞側へ移っているのです。"
      ],
      facts:[
        {label:"நீ / நீங்க",text:"親しい単数か、丁寧・複数か。呼びかけの距離を見る。"},
        {label:"அவன்・அவள் / அவர்・அவங்க",text:"性だけでなく、敬意と関係性を見る。"},
        {label:"代名詞が聞こえない",text:"動詞末尾に人称情報がある可能性を考える。"}
      ]
    },
    {
      type:"examples",
      title:"文で読む",
      items:[
        {tamil:"நான் அவளை பார்க்கிறேன்.",tts:"நான் அவளை பார்க்கிறேன்.",roman:"nāṉ avaḷ-ai pār-kkiṟ-ēṉ.",katakana:"ナーン　アヴァライ　パールッキレーン",japanese:"私は彼女を見ています。",context:"友人"},
        {tamil:"அவன் என்னை அழைக்கிறான்.",tts:"அவன் என்னை அழைக்கிறான்.",roman:"avaṉ eṉṉ-ai aḻai-kkiṟ-āṉ.",katakana:"アヴァン　エンナイ　アライッキラーン",japanese:"彼が私を呼んでいます。",context:"会話"},
        {tamil:"அவருக்கு தண்ணீர் வேண்டும்.",tts:"அவருக்கு தண்ணீர் வேண்டும்.",roman:"avar-ukku taṇṇīr vēṇṭum.",katakana:"アヴァルック　タンニール　ヴェーンダム",japanese:"その方には水が必要です。",context:"食堂"},
        {tamil:"எனக்கு ஒரு டிக்கெட் வேண்டும்.",tts:"எனக்கு ஒரு டிக்கெட் வேண்டும்.",roman:"eṉ-akku oru ṭikkeṭ vēṇṭum.",katakana:"エナック　オル　ティッケット　ヴェーンダム",japanese:"私は切符が一枚必要です。",literal:"私には、一枚の切符が必要です。",context:"駅"},
        {tamil:"அவளுக்கு இந்த படம் பிடிக்கும்.",tts:"அவளுக்கு இந்த படம் பிடிக்கும்.",roman:"avaḷ-ukku inta paṭam piṭikkum.",katakana:"アヴァルック　インダ　パダム　ピディックム",japanese:"彼女はこの映画が好きです。",context:"映画"},
        {tamil:"நண்பருக்கு ஒரு புத்தகம் கொடுக்கிறேன்.",tts:"நண்பருக்கு ஒரு புத்தகம் கொடுக்கிறேன்.",roman:"naṇpar-ukku oru puttakam koṭu-kkiṟ-ēṉ.",katakana:"ナンバルック　オル　プッタガム　コドゥッキレーン",japanese:"私は友達に本を一冊渡します。",context:"友人"},
        {tamil:"நான் சென்னைக்கு போகிறேன்.",tts:"நான் சென்னைக்கு போகிறேன்.",roman:"nāṉ ceṉṉai-kku pō-kiṟ-ēṉ.",katakana:"ナーン　チェンナイック　ポーギレーン",japanese:"私はチェンナイへ行きます。",context:"旅行"},
        {tamil:"இந்த பஸ் சென்னைக்கு போகும்.",tts:"இந்த பஸ் சென்னைக்கு போகும்.",roman:"inta pas ceṉṉai-kku pōkum.",katakana:"インダ　バス　チェンナイック　ポーグム",japanese:"このバスはチェンナイへ行きます。",context:"バス"},
        {tamil:"இதை நான் வாங்குகிறேன்.",tts:"இதை நான் வாங்குகிறேன்.",roman:"it-ai nāṉ vāṅku-kiṟ-ēṉ.",katakana:"イダイ　ナーン　ヴァーングギレーン",japanese:"これを私が買います。",context:"店"},
        {tamil:"அதுக்கு நேரம் வேண்டும்.",tts:"அதுக்கு நேரம் வேண்டும்.",roman:"at-ukku nēram vēṇṭum.",katakana:"アドゥック　ネーラム　ヴェーンダム",japanese:"それには時間が必要です。",context:"口語"}
      ]
    },
    {
      type:"reading",
      title:"短く読む",
      intro:"チェンナイで友達と映画を見る場面です。中心・対象・届く先を追います。",
      lines:[
        {tamil:"நான் சென்னையில் இருக்கிறேன்.",tts:"நான் சென்னையில் இருக்கிறேன்.",roman:"nāṉ ceṉṉai-yil irukkiṟēṉ.",katakana:"ナーン　チェンナイイル　イルッキレーン",japanese:"私はチェンナイにいます。"},
        {tamil:"எனக்கு தமிழ் படம் பிடிக்கும்.",tts:"எனக்கு தமிழ் படம் பிடிக்கும்.",roman:"eṉ-akku tamiḻ paṭam piṭikkum.",katakana:"エナック　タミル　パダム　ピディックム",japanese:"私はタミル映画が好きです。"},
        {tamil:"நண்பர் என்னை தியேட்டருக்கு அழைக்கிறார்.",tts:"நண்பர் என்னை தியேட்டருக்கு அழைக்கிறார்.",roman:"naṇpar eṉṉ-ai tiyēṭṭar-ukku aḻai-kkiṟ-ār.",katakana:"ナンバル　エンナイ　ティエーッタルック　アライッキラール",japanese:"友達が私を映画館へ誘っています。"},
        {tamil:"எங்களுக்கு இரண்டு டிக்கெட் வேண்டும்.",tts:"எங்களுக்கு இரண்டு டிக்கெட் வேண்டும்.",roman:"eṅkaḷ-ukku iraṇṭu ṭikkeṭ vēṇṭum.",katakana:"エンガルック　イランドゥ　ティッケット　ヴェーンダム",japanese:"私たちには切符が二枚必要です。"}
      ]
    },
    {
      type:"quiz",
      title:"確かめる",
      items:[
        {question:"「私を」はどれ？",options:["நான்","என்னை","எனக்கு"],answer:1,explain:"対格用の土台 eṉṉ- に -ai が付きます。"},
        {question:"「私はコーヒーが好きです」で、私が与格になる理由は？",options:["コーヒーを運ぶ人だから","好ましさを経験する人だから","複数だから"],answer:1,explain:"好みが生じる経験者を、与格で表します。"},
        {question:"『映画を見る』と活動一般を言うとき、口語で自然に現れうる形は？",options:["படம் பார்க்கிறேன்","படத்தை மட்டுமே","எனக்கு படம்"],answer:0,explain:"不特定の物の目的語は、対格なしで現れることがあります。"},
        {question:"日本語の『それ／あれ』に基本的に対応する形は？",options:["இது","அது","எது"],answer:1,explain:"基本の指示は近称 இ- と遠称 அ- の二分法から捉えます。"},
        {question:"映画で அவர் から அவன் に呼び方が変わったとき、注目すべきことは？",options:["文字数だけ","敬意や距離の変化","必ず複数になったこと"],answer:1,explain:"三人称の選択は、人物関係や感情の変化を映すことがあります。"}
      ]
    },
    {type:"map",title:"この課の位置",nodes:["名詞の形","代名詞と中心格","所有・共同・手段","場所・起点","動詞"],current:1}
  ]
});

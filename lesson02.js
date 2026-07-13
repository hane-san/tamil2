window.TAMIL_LESSONS = window.TAMIL_LESSONS || [];
window.TAMIL_LESSONS.push({
  id:"lesson02",
  number:"02",
  title:"代名詞と中心となる格",
  question:"「私」「私を」「私に」は、同じ語へ語尾を足すだけでしょうか。",
  sections:[
    {
      type:"examples",
      title:"まず聞く",
      items:[
        {tamil:"நான் படம் பார்க்கிறேன்.",tts:"நான் படம் பார்க்கிறேன்.",roman:"nāṉ paṭam pār-kkiṟ-ēṉ.",katakana:"ナーン　パダム　パールッキレーン",japanese:"私は映画を見ています。",featured:true,morph:["nāṉ＝私（中心）","paṭam＝映画","-ēṉ＝私を示す語尾"]},
        {tamil:"அவர் என்னைப் பார்க்கிறார்.",tts:"அவர் என்னைப் பார்க்கிறார்.",roman:"avar eṉṉ-ai pār-kkiṟ-ār.",katakana:"アヴァル　エンナイ　パールッキラール",japanese:"その方は私を見ています。",morph:["eṉṉ-ai＝私を","-ai＝対象"]},
        {tamil:"எனக்கு காபி பிடிக்கும்.",tts:"எனக்கு காபி பிடிக்கும்.",roman:"eṉ-akku kāpi piṭikkum.",katakana:"エナック　カーピ　ピディックム",japanese:"私はコーヒーが好きです。",literal:"構造に近く言えば「私には、コーヒーが好ましい」です。",morph:["eṉ-akku＝私に／私には","-ukku＝相手・到達点・経験者"]}
      ]
    },
    {
      type:"prose",
      title:"三つの役割",
      paragraphs:[
        "中心となる格は、まず三つの関係で考えます。<strong>誰が出来事の中心か</strong>、<strong>動作が何へ向かうか</strong>、そして <strong>物・情報・感覚が誰やどこへ届くか</strong> です。",
        "日本語の「は・を・に」と似ていますが、一対一対応ではありません。特に与格は、相手や行き先だけでなく、「私には好きだ」「私には必要だ」のような経験者も示します。",
        "普通名詞は語幹へ格語尾を積みますが、代名詞には専用の土台があります。<strong>நான் nāṉ</strong> に -ai をそのまま付けるのではなく、<strong>என்னை eṉṉ-ai</strong>、<strong>எனக்கு eṉ-akku</strong> となります。"
      ]
    },
    {
      type:"forms",
      title:"私・あなた・その人",
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
            {tamil:"நீ",tts:"நீ",roman:"nī",meaning:"あなた（親しい単数）"},
            {tamil:"உன்னை",tts:"உன்னை",roman:"uṉṉ-ai",meaning:"あなたを"},
            {tamil:"உனக்கு",tts:"உனக்கு",roman:"uṉ-akku",meaning:"あなたに"}
          ]
        },
        {
          tamil:"அவர்களுக்கு",tts:"அவர்களுக்கு",roman:"avar-kaḷ-ukku",katakana:"アヴァルガルック",japanese:"その方々に／その方に（敬意）",
          morph:["avar＝敬意を含む『その方』","-kaḷ＝複数・敬意形の一部","-ukku＝相手"],
          changes:[
            {tamil:"அவர்",tts:"அவர்",roman:"avar",meaning:"その方"},
            {tamil:"அவர்கள்",tts:"அவர்கள்",roman:"avar-kaḷ",meaning:"その方々／その方（敬意を強く示す形）"},
            {tamil:"அவர்களுக்கு",tts:"அவர்களுக்கு",roman:"avar-kaḷ-ukku",meaning:"その方々に"}
          ]
        }
      ]
    },
    {
      type:"compare",
      title:"役割を比べる",
      items:[
        {left:{tamil:"நான்",tts:"நான்",roman:"nāṉ"},right:"私が／私は――出来事や状態の中心"},
        {left:{tamil:"என்னை",tts:"என்னை",roman:"eṉṉ-ai"},right:"私を――動作が向かう対象"},
        {left:{tamil:"எனக்கு",tts:"எனக்கு",roman:"eṉ-akku"},right:"私に・私には――相手、到達点、経験者"},
        {left:{tamil:"சென்னைக்கு",tts:"சென்னைக்கு",roman:"ceṉṉai-kku"},right:"チェンナイへ――人だけでなく行き先も与格で表せる"}
      ]
    },
    {
      type:"prose",
      title:"与格は「届く先」",
      paragraphs:[
        "与格を単に「〜に」と覚えるより、<strong>何かが届く先</strong>と考えると用法がつながります。物を渡す相手、移動の行き先、必要や好みを感じる人は、どれも出来事の到達点です。",
        "<strong>எனக்கு காபி பிடிக்கும்</strong> では、話者が意志的にコーヒーを好きになるのではなく、好ましさが『私に』生じています。そのため「私」が主格ではなく与格になります。",
        "口語では物を指す代名詞の与格に <strong>இதுக்கு it-ukku</strong>、<strong>அதுக்கு at-ukku</strong> がよく使われます。書記形の <strong>இதற்கு itaṟku</strong>、<strong>அதற்கு ataṟku</strong> とは形が違うため、表示するときは混在させません。"
      ]
    },
    {
      type:"mini",
      title:"短い形も聞く",
      items:[
        {tamil:"நான்",tts:"நான்",roman:"nāṉ",katakana:"ナーン",japanese:"私"},
        {tamil:"நாங்க",tts:"நாங்க",roman:"nāṅka",katakana:"ナーンガ",japanese:"私たち（相手を含めない口語形）"},
        {tamil:"நாம",tts:"நாம",roman:"nāma",katakana:"ナーマ",japanese:"私たち（相手を含む口語形）"},
        {tamil:"நீ",tts:"நீ",roman:"nī",katakana:"ニー",japanese:"あなた（親しい単数）"},
        {tamil:"நீங்க",tts:"நீங்க",roman:"nīṅka",katakana:"ニーンガ",japanese:"あなた／あなた方（丁寧・複数）"},
        {tamil:"அவன்",tts:"அவன்",roman:"avaṉ",katakana:"アヴァン",japanese:"彼（親しい・非敬意）"},
        {tamil:"அவள்",tts:"அவள்",roman:"avaḷ",katakana:"アヴァル",japanese:"彼女（親しい・非敬意）"},
        {tamil:"அவர்",tts:"அவர்",roman:"avar",katakana:"アヴァル",japanese:"その方"},
        {tamil:"இது",tts:"இது",roman:"itu",katakana:"イドゥ",japanese:"これ"},
        {tamil:"அது",tts:"அது",roman:"atu",katakana:"アドゥ",japanese:"それ／あれ"},
        {tamil:"இதை",tts:"இதை",roman:"it-ai",katakana:"イダイ",japanese:"これを"},
        {tamil:"இதுக்கு",tts:"இதுக்கு",roman:"it-ukku",katakana:"イドゥック",japanese:"これに／このために（口語）"}
      ]
    },
    {
      type:"examples",
      title:"文で読む",
      items:[
        {tamil:"நான் அவளைப் பார்க்கிறேன்.",tts:"நான் அவளைப் பார்க்கிறேன்.",roman:"nāṉ avaḷ-ai pār-kkiṟ-ēṉ.",katakana:"ナーン　アヴァライ　パールッキレーン",japanese:"私は彼女を見ています。"},
        {tamil:"அவருக்கு தண்ணீர் வேண்டும்.",tts:"அவருக்கு தண்ணீர் வேண்டும்.",roman:"avar-ukku taṇṇīr vēṇṭum.",katakana:"アヴァルック　タンニール　ヴェーンダム",japanese:"その方には水が必要です。"},
        {tamil:"நண்பருக்கு படம் பிடிக்கும்.",tts:"நண்பருக்கு படம் பிடிக்கும்.",roman:"naṇpar-ukku paṭam piṭikkum.",katakana:"ナンバルック　パダム　ピディックム",japanese:"友達はその映画が好きです。"},
        {tamil:"இந்த பஸ் சென்னைக்குப் போகும்.",tts:"இந்த பஸ் சென்னைக்குப் போகும்.",roman:"inta pas ceṉṉai-kku pōkum.",katakana:"インダ　バス　チェンナイック　ポーグム",japanese:"このバスはチェンナイへ行きます。",literal:"ここでは ceṉṉai-kku の行き先用法に注目します。"}
      ]
    },
    {
      type:"reading",
      title:"短く読む",
      lines:[
        {tamil:"நான் சென்னையில் இருக்கிறேன்.",tts:"நான் சென்னையில் இருக்கிறேன்.",roman:"nāṉ ceṉṉai-yil irukkiṟēṉ.",japanese:"私はチェンナイにいます。"},
        {tamil:"எனக்கு தமிழ் படம் பிடிக்கும்.",tts:"எனக்கு தமிழ் படம் பிடிக்கும்.",roman:"eṉ-akku tamiḻ paṭam piṭikkum.",japanese:"私はタミル映画が好きです。"},
        {tamil:"நண்பர் என்னைத் தியேட்டருக்கு அழைக்கிறார்.",tts:"நண்பர் என்னைத் தியேட்டருக்கு அழைக்கிறார்.",roman:"naṇpar eṉṉ-ai tiyēṭṭar-ukku aḻaikkiṟār.",japanese:"友達が私を映画館へ誘っています。"}
      ]
    },
    {
      type:"quiz",
      title:"確かめる",
      items:[
        {question:"「私を」はどれ？",options:["நான்","என்னை","எனக்கு"],answer:1,explain:"対格用の土台 eṉṉ- に -ai が付きます。"},
        {question:"「私はコーヒーが好きです」で『私』が与格になる理由は？",options:["コーヒーを運ぶから","好ましさを経験する人だから","複数だから"],answer:1,explain:"好き・必要などを感じる人は、与格で表されることがあります。"},
        {question:"「チェンナイへ」の形は？",options:["சென்னையை","சென்னைக்கு","சென்னையில்"],answer:1,explain:"行き先は与格 -kku で表せます。"}
      ]
    },
    {type:"map",title:"この課の位置",nodes:["名詞の形","代名詞と中心格","所有・共同・手段","場所・起点","動詞"],current:1}
  ]
});

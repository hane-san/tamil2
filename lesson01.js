window.TAMIL_LESSONS = window.TAMIL_LESSONS || [];
window.TAMIL_LESSONS.push({
  id:"lesson01",
  number:"01",
  title:"名詞の形",
  question:"語尾を足すとき、名詞はどこまで同じ形でいられるのでしょうか。",
  sections:[
    {
      type:"examples",
      title:"まず聞く",
      items:[
        {tamil:"இது ஒரு வீடு.",tts:"இது ஒரு வீடு.",roman:"itu oru vīṭu.",katakana:"イドゥ　オル　ヴィードゥ",japanese:"これは一軒の家です。",featured:true,morph:["itu＝これ","oru＝一つの","vīṭu＝家"]},
        {tamil:"இவை வீடுகள்.",tts:"இவை வீடுகள்.",roman:"ivai vīṭu-kaḷ.",katakana:"イヴァイ　ヴィードゥガル",japanese:"これらは家々です。",morph:["vīṭu＝家","-kaḷ＝複数"]},
        {tamil:"அவை கார்கள்.",tts:"அவை கார்கள்.",roman:"avai kār-kaḷ.",katakana:"アヴァイ　カーガル",japanese:"あれらは車です。",morph:["kār＝車","-kaḷ＝複数"]}
      ]
    },
    {
      type:"prose",
      title:"名詞は、後ろから育つ",
      eyebrow:"THE BIG IDEA",
      paragraphs:[
        "タミル語では、名詞の後ろへ小さな部品を順番に足していきます。<strong>家</strong>に複数を足せば「家々」、さらに場所を足せば「家々の中で」。一語が長く見えても、実際には意味の層が後ろへ積まれているのです。",
        "この仕組みが分かると、知らない長い語に出会っても、最後からほどけます。<strong>vīṭu-kaḷ-il</strong> なら、最後の <strong>-il</strong> が場所、その前の <strong>-kaḷ</strong> が複数。残った <strong>vīṭu</strong> が「家」です。映画の字幕で一瞬しか見えない語も、全部を一度に覚える必要はありません。まず末尾を拾えば、文の骨格が見えてきます。",
        "ただし、部品は単純なシールではありません。名詞の最後の音と、次に来る語尾の最初の音がぶつかると、発音しやすい形へ変わります。そのため、辞書に載る基本形と、語尾を受けるときの形を分けて考える必要があります。"
      ],
      note:"ローマ字のハイフンは、自然な発音を切断する記号ではなく、完成語の内部を観察するための線です。"
    },
    {
      type:"forms",
      title:"複数を積む",
      items:[
        {
          tamil:"வீடுகள்",tts:"வீடுகள்",roman:"vīṭu-kaḷ",katakana:"ヴィードゥガル",japanese:"家々／複数の家",
          morph:["vīṭu＝家","-kaḷ＝複数"],
          changes:[
            {tamil:"வீடு",tts:"வீடு",roman:"vīṭu",meaning:"家"},
            {tamil:"வீடுகள்",tts:"வீடுகள்",roman:"vīṭu-kaḷ",meaning:"家々／複数の家"},
            {tamil:"வீடுகளில்",tts:"வீடுகளில்",roman:"vīṭu-kaḷ-il",meaning:"家々に／家々の中で"}
          ]
        },
        {
          tamil:"கார்கள்",tts:"கார்கள்",roman:"kār-kaḷ",katakana:"カーガル",japanese:"車々／複数の車",
          morph:["kār＝車","-kaḷ＝複数"],
          changes:[
            {tamil:"கார்",tts:"கார்",roman:"kār",meaning:"車"},
            {tamil:"கார்கள்",tts:"கார்கள்",roman:"kār-kaḷ",meaning:"複数の車"},
            {tamil:"கார்களை",tts:"கார்களை",roman:"kār-kaḷ-ai",meaning:"複数の車を"}
          ]
        },
        {
          tamil:"நண்பர்கள்",tts:"நண்பர்கள்",roman:"naṇpar-kaḷ",katakana:"ナンバルガル",japanese:"友達たち／複数の友達",
          morph:["naṇpar＝友達","-kaḷ＝複数"],
          changes:[
            {tamil:"நண்பர்",tts:"நண்பர்",roman:"naṇpar",meaning:"友達／友人"},
            {tamil:"நண்பர்கள்",tts:"நண்பர்கள்",roman:"naṇpar-kaḷ",meaning:"友達たち"},
            {tamil:"நண்பர்களுக்கு",tts:"நண்பர்களுக்கு",roman:"naṇpar-kaḷ-ukku",meaning:"友達たちに"}
          ]
        },
        {
          tamil:"குழந்தைகள்",tts:"குழந்தைகள்",roman:"kuḻantai-kaḷ",katakana:"クランダイガル",japanese:"子どもたち",
          morph:["kuḻantai＝子ども","-kaḷ＝複数"],
          changes:[
            {tamil:"குழந்தை",tts:"குழந்தை",roman:"kuḻantai",meaning:"子ども"},
            {tamil:"குழந்தைகள்",tts:"குழந்தைகள்",roman:"kuḻantai-kaḷ",meaning:"子どもたち"},
            {tamil:"குழந்தைகளுக்கு",tts:"குழந்தைகளுக்கு",roman:"kuḻantai-kaḷ-ukku",meaning:"子どもたちに"}
          ]
        }
      ],
      note:"人を表す名詞では、数だけでなく敬意や集団の捉え方も形に関わります。ここではまず、複数語尾 -kaḷ が格語尾より前に来ることを押さえます。"
    },
    {
      type:"prose",
      title:"斜格語幹――語尾を受ける足場",
      eyebrow:"WHY THE SHAPE CHANGES",
      paragraphs:[
        "名詞が文の中心として単独で立つときの形を、ここでは<strong>基本形</strong>と呼びます。ところが、格語尾が付くときには、名詞が別の「接続用の足場」を見せることがあります。この足場が<strong>斜格語幹</strong>です。",
        "たとえば <strong>வீடு vīṭu</strong> は、場所の <strong>-il</strong> を受けると <strong>வீட்டில் vīṭṭ-il</strong> になります。途中の <strong>ṭṭ</strong> は、意味を新しく足す語尾ではありません。名詞と格語尾を滑らかにつなぐために現れる、接続形の一部です。",
        "同じように、<strong>படம் paṭam</strong> は <strong>படத்தில் paṭatt-il</strong>、<strong>படத்தை paṭatt-ai</strong> となります。語末の <strong>-m</strong> をそのまま残して格語尾を貼るのではなく、<strong>paṭatt-</strong> という足場を使う、と見ると二つの形が同じ規則にまとまります。",
        "斜格語幹が必要なのは、文法が気まぐれだからではありません。タミル語は語尾を連結して意味を作る言語なので、<strong>連結した結果を発音できる形に整える仕組み</strong>が発達しています。後の課で格、後置詞、助動詞を学ぶときも、この「接続用の形」という考え方が何度も戻ってきます。"
      ]
    },
    {
      type:"compare",
      title:"基本形と足場を比べる",
      items:[
        {left:{tamil:"வீடு → வீட்டில்",tts:"வீடு. வீட்டில்.",roman:"vīṭu → vīṭṭ-il"},right:"語末が -u のこの語では、格語尾の前で vīṭṭ- という接続形が見えます。"},
        {left:{tamil:"படம் → படத்தில்",tts:"படம். படத்தில்.",roman:"paṭam → paṭatt-il"},right:"-am で終わる語では、ここでは -att- が格語尾を受ける足場になります。"},
        {left:{tamil:"கார் → காரில்",tts:"கார். காரில்.",roman:"kār → kār-il"},right:"すべての名詞が大きく姿を変えるわけではありません。kār は語幹が見えやすい型です。"},
        {left:{tamil:"நண்பர் → நண்பருக்கு",tts:"நண்பர். நண்பருக்கு.",roman:"naṇpar → naṇpar-ukku"},right:"人を表す名詞でも、語幹 naṇpar- を保ったまま与格が続きます。"}
      ]
    },
    {
      type:"prose",
      title:"順番は、名詞―複数―格",
      paragraphs:[
        "複数と格が同時に必要なら、基本の順番は <strong>名詞―複数―格</strong> です。<strong>வீடுகளில் vīṭu-kaḷ-il</strong> は「家―複数―場所」、<strong>கார்களை kār-kaḷ-ai</strong> は「車―複数―対象」、<strong>நண்பர்களுக்கு naṇpar-kaḷ-ukku</strong> は「友達―複数―相手」です。",
        "この順番には理由があります。まず『何がいくつあるか』までを名詞のまとまりとして作り、その完成したまとまりへ『文の中でどんな役割を持つか』を与えるからです。格は、単語の意味を変えるというより、名詞句を文へ接続する最後のプラグだと考えると分かりやすくなります。"
      ]
    },
    {
      type:"forms",
      title:"複数の後ろに格を足す",
      items:[
        {tamil:"வீடுகளில்",tts:"வீடுகளில்",roman:"vīṭu-kaḷ-il",katakana:"ヴィードゥガリル",japanese:"家々に／家々の中で",morph:["vīṭu＝家","-kaḷ＝複数","-il＝場所"]},
        {tamil:"கார்களை",tts:"கார்களை",roman:"kār-kaḷ-ai",katakana:"カーガライ",japanese:"複数の車を",morph:["kār＝車","-kaḷ＝複数","-ai＝対象"]},
        {tamil:"நண்பர்களுக்கு",tts:"நண்பர்களுக்கு",roman:"naṇpar-kaḷ-ukku",katakana:"ナンバルガルック",japanese:"友達たちに",morph:["naṇpar＝友達","-kaḷ＝複数","-ukku＝相手・到達点"]}
      ]
    },
    {
      type:"culture",
      title:"映画の耳――名詞を足場にする",
      eyebrow:"CHENNAI & CINEMA",
      paragraphs:[
        "タミル映画の会話では、動詞や代名詞が口語音で大きく縮み、最初は輪郭を失いやすくなります。そんなとき、<strong>名詞とその末尾</strong>は場面をつかむ足場になります。<strong>வீட்டில் vīṭṭ-il</strong> が聞こえれば「家で／家に」、<strong>நண்பருக்கு naṇpar-ukku</strong> が聞こえれば「友達に」。動詞を全部取れなくても、人物と場所の関係は拾えます。",
        "チェンナイの都市会話や映画では、<strong>பஸ் pas</strong>、<strong>கார் kār</strong>、<strong>போன் pōṉ</strong>、<strong>தியேட்டர் tiyēṭṭar</strong> のような英語由来語が日常語として自然に入ります。借用語であっても、複数や格はタミル語の仕組みで付きます。つまり『外から来た名詞』も、文の中へ入ればタミル語らしく変化するのです。",
        "字幕は書記形寄り、俳優の台詞は口語寄りになることがあります。両者が一字一句一致しなくても、間違いとは限りません。まず名詞の核と格語尾を照合し、同じ出来事を別のレジスターで表しているのだと捉えると、映画が急に教材になります。"
      ],
      facts:[
        {label:"まず拾う",text:"家・車・友達・映画など、場面を作る名詞"},
        {label:"次に拾う",text:"-il・-ai・-ukku など、名詞の役割を示す末尾"},
        {label:"後で拾う",text:"動詞の時制・人称・口語的な縮約"}
      ]
    },
    {
      type:"examples",
      title:"文で読む",
      items:[
        {tamil:"இது ஒரு சிறிய வீடு.",tts:"இது ஒரு சிறிய வீடு.",roman:"itu oru ciṟiya vīṭu.",katakana:"イドゥ　オル　シリヤ　ヴィードゥ",japanese:"これは小さな家です。",context:"自宅"},
        {tamil:"இவை புதிய கார்கள்.",tts:"இவை புதிய கார்கள்.",roman:"ivai putiya kār-kaḷ.",katakana:"イヴァイ　プディヤ　カーガル",japanese:"これらは新しい車です。",context:"街"},
        {tamil:"வீட்டில் நண்பர்கள் இருக்கிறார்கள்.",tts:"வீட்டில் நண்பர்கள் இருக்கிறார்கள்.",roman:"vīṭṭ-il naṇpar-kaḷ irukkiṟārkaḷ.",katakana:"ヴィーッティル　ナンバルガル　イルッキラーガル",japanese:"家には友達がいます。",context:"家"},
        {tamil:"காரில் இரண்டு நண்பர்கள் இருக்கிறார்கள்.",tts:"காரில் இரண்டு நண்பர்கள் இருக்கிறார்கள்.",roman:"kār-il iraṇṭu naṇpar-kaḷ irukkiṟārkaḷ.",katakana:"カーリル　イランドゥ　ナンバルガル　イルッキラーガル",japanese:"車には友達が二人います。",context:"移動"},
        {tamil:"நான் காரை வாங்குகிறேன்.",tts:"நான் காரை வாங்குகிறேன்.",roman:"nāṉ kār-ai vāṅku-kiṟ-ēṉ.",katakana:"ナーン　カーライ　ヴァーングギレーン",japanese:"私はその車を買います。",context:"買い物"},
        {tamil:"அவர் நண்பரை அழைக்கிறார்.",tts:"அவர் நண்பரை அழைக்கிறார்.",roman:"avar naṇpar-ai aḻai-kkiṟ-ār.",katakana:"アヴァル　ナンバライ　アライッキラール",japanese:"その方は友達を呼んでいます。",context:"友人"},
        {tamil:"நண்பர்களுக்கு தண்ணீர் வேண்டும்.",tts:"நண்பர்களுக்கு தண்ணீர் வேண்டும்.",roman:"naṇpar-kaḷ-ukku taṇṇīr vēṇṭum.",katakana:"ナンバルガルック　タンニール　ヴェーンダム",japanese:"友達たちには水が必要です。",context:"食事"},
        {tamil:"குழந்தைகள் படம் பார்க்கிறார்கள்.",tts:"குழந்தைகள் படம் பார்க்கிறார்கள்.",roman:"kuḻantai-kaḷ paṭam pār-kkiṟ-ārkaḷ.",katakana:"クランダイガル　パダム　パールッキラーガル",japanese:"子どもたちは映画を見ています。",context:"映画"},
        {tamil:"கடையில் புத்தகங்கள் இருக்கின்றன.",tts:"கடையில் புத்தகங்கள் இருக்கின்றன.",surface:"kaṭaiyil puttakaṅkaḷ irukkiṉṟaṉa",roman:"kaṭai-yil puttakam-kaḷ irukkiṉṟaṉa.",katakana:"カダイイル　プッタガンガル　イルッキンラナ",japanese:"店には本があります。",literal:"puttakam + -kaḷ は、表面では puttakaṅkaḷ と発音・表記されます。",context:"店"},
        {tamil:"வீடுகளில் மக்கள் இருக்கிறார்கள்.",tts:"வீடுகளில் மக்கள் இருக்கிறார்கள்.",roman:"vīṭu-kaḷ-il makkaḷ irukkiṟārkaḷ.",katakana:"ヴィードゥガリル　マッカル　イルッキラーガル",japanese:"家々には人々がいます。",context:"街"}
      ]
    },
    {
      type:"reading",
      title:"短く読む",
      intro:"家で映画を見る夕方を、名詞の末尾に注目して読みます。",
      lines:[
        {tamil:"இது ஒரு சிறிய வீடு.",tts:"இது ஒரு சிறிய வீடு.",roman:"itu oru ciṟiya vīṭu.",katakana:"イドゥ　オル　シリヤ　ヴィードゥ",japanese:"これは小さな家です。"},
        {tamil:"வீட்டில் நண்பர்கள் இருக்கிறார்கள்.",tts:"வீட்டில் நண்பர்கள் இருக்கிறார்கள்.",roman:"vīṭṭ-il naṇpar-kaḷ irukkiṟārkaḷ.",katakana:"ヴィーッティル　ナンバルガル　イルッキラーガル",japanese:"家には友達がいます。"},
        {tamil:"நண்பர்களுக்கு தண்ணீர் வேண்டும்.",tts:"நண்பர்களுக்கு தண்ணீர் வேண்டும்.",roman:"naṇpar-kaḷ-ukku taṇṇīr vēṇṭum.",katakana:"ナンバルガルック　タンニール　ヴェーンダム",japanese:"友達たちには水が必要です。"},
        {tamil:"அவர்கள் ஒரு படம் பார்க்கிறார்கள்.",tts:"அவர்கள் ஒரு படம் பார்க்கிறார்கள்.",roman:"avar-kaḷ oru paṭam pār-kkiṟ-ārkaḷ.",katakana:"アヴァルガル　オル　パダム　パールッキラーガル",japanese:"その人たちは映画を一本見ています。"}
      ]
    },
    {
      type:"quiz",
      title:"確かめる",
      items:[
        {question:"vīṭu-kaḷ-il を最後から読むと、最初に分かることは？",options:["家であること","複数であること","場所に関係すること"],answer:2,explain:"最後の -il が、まず場所の役割を示します。"},
        {question:"「名詞―複数―格」の順番になっている形は？",options:["vīṭu-il-kaḷ","vīṭu-kaḷ-il","kaḷ-vīṭu-il"],answer:1,explain:"名詞の数を作ってから、その名詞句へ格を付けます。"},
        {question:"வீடு vīṭu に場所の -il が付くと？",options:["வீடில் vīṭu-il","வீட்டில் vīṭṭ-il","வீடுகள் vīṭu-kaḷ"],answer:1,explain:"格語尾の前では vīṭṭ- という接続用の形が現れます。"},
        {question:"படம் paṭam の斜格語幹を使った形は？",options:["படத்தில் paṭatt-il","படங்கள் paṭam-kaḷ","படம் paṭam"],answer:0,explain:"-am 語のこの型では、格語尾の前に paṭatt- が現れます。"},
        {question:"映画の会話を聞くとき、動詞を全部取れなくても役立つ手掛かりは？",options:["名詞と格語尾","字幕の文字数","俳優の声量"],answer:0,explain:"名詞が場面を、格語尾がその名詞の役割を示します。"}
      ]
    },
    {type:"map",title:"この課の位置",nodes:["名詞の形","代名詞と中心格","所有・共同・手段","場所・起点","動詞"],current:0}
  ]
});

window.TAMIL_LESSONS = window.TAMIL_LESSONS || [];
window.TAMIL_LESSONS.push({
  id:"lesson01",
  number:"01",
  title:"名詞の形",
  question:"語尾を足すとき、名詞はそのままなのでしょうか。",
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
      title:"形を見る",
      paragraphs:[
        "タミル語の名詞は、後ろに小さな部品を積み重ねて役割を増やします。まず複数を表す <strong>-kaḷ</strong>、その後ろに場所や対象を表す格語尾が続きます。",
        "ただし、辞書形へ文字を機械的に貼るだけではありません。語末の音に合わせて、つなぎやすい表面形になります。ローマ字のハイフンは、その完成語の中にどんな文法部品があるかを見るための印です。"
      ],
      note:"音声では、ハイフンで切った部品ではなく、自然な完成語を聞きます。"
    },
    {
      type:"forms",
      title:"単数から積み上げる",
      items:[
        {
          tamil:"வீடுகளில்",tts:"வீடுகளில்",roman:"vīṭu-kaḷ-il",katakana:"ヴィードゥガリル",japanese:"家々の中で／家々に",
          morph:["vīṭu＝家","-kaḷ＝複数","-il＝場所"],
          changes:[
            {tamil:"வீடு",tts:"வீடு",roman:"vīṭu",meaning:"家"},
            {tamil:"வீடுகள்",tts:"வீடுகள்",roman:"vīṭu-kaḷ",meaning:"家々"},
            {tamil:"வீடுகளில்",tts:"வீடுகளில்",roman:"vīṭu-kaḷ-il",meaning:"家々の中で／家々に"}
          ]
        },
        {
          tamil:"கார்களை",tts:"கார்களை",roman:"kār-kaḷ-ai",katakana:"カーガライ",japanese:"車々を",
          morph:["kār＝車","-kaḷ＝複数","-ai＝対象"],
          changes:[
            {tamil:"கார்",tts:"கார்",roman:"kār",meaning:"車"},
            {tamil:"கார்கள்",tts:"கார்கள்",roman:"kār-kaḷ",meaning:"車々"},
            {tamil:"கார்களை",tts:"கார்களை",roman:"kār-kaḷ-ai",meaning:"車々を"}
          ]
        },
        {
          tamil:"நண்பர்களுக்கு",tts:"நண்பர்களுக்கு",roman:"naṇpar-kaḷ-ukku",katakana:"ナンバルガルック",japanese:"友達たちに",
          morph:["naṇpar＝友達","-kaḷ＝複数","-ukku＝相手・到達点"],
          changes:[
            {tamil:"நண்பர்",tts:"நண்பர்",roman:"naṇpar",meaning:"友達"},
            {tamil:"நண்பர்கள்",tts:"நண்பர்கள்",roman:"naṇpar-kaḷ",meaning:"友達たち"},
            {tamil:"நண்பர்களுக்கு",tts:"நண்பர்களுக்கு",roman:"naṇpar-kaḷ-ukku",meaning:"友達たちに"}
          ]
        }
      ]
    },
    {
      type:"prose",
      title:"なぜ形が少し変わる？",
      paragraphs:[
        "<strong>வீடு vīṭu</strong> に複数語尾が付くと、完成形は <strong>வீடுகள் vīṭu-kaḷ</strong> になります。目で見える語形と、文法上の組み立てを分けて捉えると迷いにくくなります。",
        "順番は基本的に <strong>名詞―複数―格</strong> です。したがって <strong>vīṭu-kaḷ-il</strong> は「家―複数―場所」。最後から逆に見ると、文中の役割を早く判定できます。",
        "人を表す名詞では、複数形が敬意や集団性とも関係することがあります。詳しい待遇表現は代名詞と人称を扱う課で戻ってきます。"
      ]
    },
    {
      type:"compare",
      title:"比べる",
      items:[
        {left:{tamil:"வீடு",tts:"வீடு",roman:"vīṭu"},right:"家――数も格も付いていない基本形"},
        {left:{tamil:"வீடுகள்",tts:"வீடுகள்",roman:"vīṭu-kaḷ"},right:"家々――複数だけを足した形"},
        {left:{tamil:"வீடுகளில்",tts:"வீடுகளில்",roman:"vīṭu-kaḷ-il"},right:"家々に――複数の後ろへ場所格を足した形"},
        {left:{tamil:"காரை",tts:"காரை",roman:"kār-ai"},right:"その車を――単数名詞へ対象を示す格を付けた形"}
      ]
    },
    {
      type:"examples",
      title:"文で読む",
      items:[
        {tamil:"இவை புதிய கார்கள்.",tts:"இவை புதிய கார்கள்.",roman:"ivai putiya kār-kaḷ.",katakana:"イヴァイ　プディヤ　カーガル",japanese:"これらは新しい車です。"},
        {tamil:"அவர்கள் நல்ல நண்பர்கள்.",tts:"அவர்கள் நல்ல நண்பர்கள்.",roman:"avarkaḷ nalla naṇpar-kaḷ.",katakana:"アヴァルガル　ナッラ　ナンバルガル",japanese:"その人たちは良い友達です。"},
        {tamil:"வீடுகளில் மக்கள் இருக்கிறார்கள்.",tts:"வீடுகளில் மக்கள் இருக்கிறார்கள்.",roman:"vīṭu-kaḷ-il makkaḷ irukkiṟārkaḷ.",katakana:"ヴィードゥガリル　マッカル　イルッキラーガル",japanese:"家々には人々がいます。",literal:"動詞の詳しい形は後の課で扱います。"},
        {tamil:"அவர் கார்களைப் பார்க்கிறார்.",tts:"அவர் கார்களைப் பார்க்கிறார்.",roman:"avar kār-kaḷ-ai pārkkiṟār.",katakana:"アヴァル　カーガライ　パールッキラール",japanese:"その方は車々を見ています。",literal:"ここでは kār-kaḷ-ai の積み重なりに注目します。"}
      ]
    },
    {
      type:"reading",
      title:"短く読む",
      lines:[
        {tamil:"இது ஒரு சிறிய வீடு.",tts:"இது ஒரு சிறிய வீடு.",roman:"itu oru ciṟiya vīṭu.",japanese:"これは小さな家です。"},
        {tamil:"அங்கே இரண்டு கார்கள் இருக்கின்றன.",tts:"அங்கே இரண்டு கார்கள் இருக்கின்றன.",roman:"aṅkē iraṇṭu kār-kaḷ irukkiṉṟaṉa.",japanese:"あそこには車が二台あります。"},
        {tamil:"வீட்டில் நண்பர்கள் இருக்கிறார்கள்.",tts:"வீட்டில் நண்பர்கள் இருக்கிறார்கள்.",roman:"vīṭṭ-il naṇpar-kaḷ irukkiṟārkaḷ.",japanese:"家には友達がいます。"}
      ]
    },
    {
      type:"quiz",
      title:"確かめる",
      items:[
        {question:"vīṭu-kaḷ-il の部品の順番は？",options:["家―場所―複数","家―複数―場所","複数―家―場所"],answer:1,explain:"名詞の後ろへ複数、その後ろへ格が続きます。"},
        {question:"「車々を」に合う形は？",options:["கார்கள்","கார்களை","கார்களில்"],answer:1,explain:"-kaḷ が複数、-ai が対象です。"},
        {question:"音声で優先して聞くのは？",options:["語尾だけ","自然な完成語","ローマ字のハイフン"],answer:1,explain:"構造は目で分け、音では自然な完成形を確かめます。"}
      ]
    },
    {type:"map",title:"この課の位置",nodes:["名詞の形","代名詞と中心格","所有・共同・手段","場所・起点","動詞"],current:0}
  ]
});

(() => {
  "use strict";

  const { entry: E, confidence: C } = window.TAMIL_V30;
  const POSTPOSITION_SOURCES = [
  "TAMIL-INTEGRATED-v2.0-rc.1 §§23-25,31-32",
  "TAMIL-GRAMMAR-GARDEN Lesson 05",
  "SCHIFFMAN-SPOKEN-TAMIL: case and postposition chapters",
  "SCHIFFMAN-CASE-SYSTEM",
  "CMC-COMMON-SPOKEN-TAMIL: postpositions and travel expressions"
];
  const make = input => E({ ...input, sourceRefs: POSTPOSITION_SOURCES, confidence: C("B", "B", "C", "B") });

  const examples = [
    make({
  "id": "l5-01",
  "targetTamil": "இந்த படம் பற்றி பேசலாம்.",
  "structuredRoman": "inta paṭam paṟṟi pēcalām.",
  "pronunciationRoman": "inda paḍam patti pēsalām.",
  "katakana": "インダ パダム パッティ ペーサラーム。",
  "meaningJa": "この映画について話しましょう。",
  "literalJapanese": "この＋映画＋について＋話せます／話しましょう",
  "morphemes": [
    {
      "surfaceTamil": "இந்த படம்",
      "gloss": "この映画"
    },
    {
      "surfaceTamil": "பற்றி",
      "gloss": "〜について／話題"
    },
    {
      "surfaceTamil": "பேசலாம்",
      "gloss": "話しましょう"
    }
  ],
  "grammarNote": "பற்றி は前の名詞句を話題として後ろの発言動詞へ渡します。速い会話では பத்தி に近く聞こえます。",
  "vocabulary": [
    "இந்த",
    "படம்",
    "பற்றி",
    "பேசலாம்"
  ],
  "audioGroup": "lesson05-core",
  "featured": true,
  "counterparts": [
    {
      "relation": "spoken-orthography-variant",
      "primaryRegister": "SST",
      "regionalProfile": "TN-GENERAL",
      "targetTamil": "இந்த படம் பத்தி பேசலாம்.",
      "structuredRoman": "inta paṭam patti pēcalām."
    }
  ]
}),
    make({
  "id": "l5-02",
  "targetTamil": "இங்கே வரை நடக்கலாம்.",
  "structuredRoman": "iṅkē varai naṭakkalām.",
  "pronunciationRoman": "ingē vare naḍakkalām.",
  "katakana": "インゲー ヴァレ ナダッカラーム。",
  "meaningJa": "ここまで歩きましょう。",
  "literalJapanese": "ここ＋まで＋歩けます／歩きましょう",
  "morphemes": [
    {
      "surfaceTamil": "இங்கே",
      "gloss": "ここ"
    },
    {
      "surfaceTamil": "வரை",
      "gloss": "〜まで／終点"
    },
    {
      "surfaceTamil": "நடக்கலாம்",
      "gloss": "歩きましょう"
    }
  ],
  "grammarNote": "வரை は場所・時間・数量などの範囲が止まる終点を示します。",
  "vocabulary": [
    "இங்கே",
    "வரை",
    "நடக்கலாம்"
  ],
  "audioGroup": "lesson05-core",
  "featured": true
}),
    make({
  "id": "l5-03",
  "targetTamil": "நண்பருக்காக டிக்கெட் வாங்கறேன்.",
  "structuredRoman": "naṇpar-ukkāka ṭikkeṭ vāṅkaṟ-ēṉ.",
  "pronunciationRoman": "naṇbarukkāga ṭikkeṭ vāṅgarēn.",
  "katakana": "ナンバルッカーガ ティッケット ヴァーンガレーン。",
  "meaningJa": "友達のために切符を買います。",
  "literalJapanese": "友達・のために＋切符＋買う・私",
  "morphemes": [
    {
      "surfaceTamil": "நண்பருக்காக",
      "analysis": "நண்பர் + -உக்காக",
      "gloss": "友達のために"
    },
    {
      "surfaceTamil": "டிக்கெட்",
      "gloss": "切符"
    },
    {
      "surfaceTamil": "வாங்கறேன்",
      "gloss": "買います"
    }
  ],
  "grammarNote": "-க்காக 系は受益者・目的を示します。ここでは友達が利益を受ける人です。",
  "vocabulary": [
    "நண்பர்",
    "டிக்கெட்",
    "வாங்கறேன்"
  ],
  "audioGroup": "lesson05-core",
  "featured": true
}),
    make({
  "id": "l5-04",
  "targetTamil": "கோவில் பக்கத்துல கடை இருக்கு.",
  "structuredRoman": "kōvil pakkatt-ula kaṭai irukku.",
  "pronunciationRoman": "kōvil pakkattula kaḍai irukku.",
  "katakana": "コーヴィル パッカットゥラ カダイ イルック。",
  "meaningJa": "寺院の近くに店があります。",
  "literalJapanese": "寺院＋近く・場所＋店＋ある",
  "morphemes": [
    {
      "surfaceTamil": "கோவில்",
      "gloss": "寺院"
    },
    {
      "surfaceTamil": "பக்கத்துல",
      "analysis": "பக்கத்த- + -உல",
      "gloss": "近くに"
    },
    {
      "surfaceTamil": "கடை",
      "gloss": "店"
    },
    {
      "surfaceTamil": "இருக்கு",
      "gloss": "ある"
    }
  ],
  "grammarNote": "பக்கம்『側・近く』は接続形 பக்கத்த- を取り、場所形と組んで『〜の近くに』を作ります。",
  "vocabulary": [
    "கோவில்",
    "பக்கம்",
    "கடை",
    "இருக்கு"
  ],
  "audioGroup": "lesson05-bank"
}),
    make({
  "id": "l5-05",
  "targetTamil": "இந்த டிக்கெட் தவிர வேற டிக்கெட் இல்லை.",
  "structuredRoman": "inta ṭikkeṭ tavira vēṟa ṭikkeṭ illai.",
  "pronunciationRoman": "inda ṭikkeṭ tavira vēra ṭikkeṭ illai.",
  "katakana": "インダ ティッケット タヴィラ ヴェーラ ティッケット イッライ。",
  "meaningJa": "この切符以外に別の切符はありません。",
  "literalJapanese": "この切符＋以外＋別の切符＋ない",
  "morphemes": [
    {
      "surfaceTamil": "இந்த டிக்கெட்",
      "gloss": "この切符"
    },
    {
      "surfaceTamil": "தவிர",
      "gloss": "〜以外／除いて"
    },
    {
      "surfaceTamil": "வேற டிக்கெட்",
      "gloss": "別の切符"
    },
    {
      "surfaceTamil": "இல்லை",
      "gloss": "ない"
    }
  ],
  "grammarNote": "தவிர は前の名詞を集合から除外します。正反対の『〜まで』とは役割が異なります。",
  "vocabulary": [
    "டிக்கெட்",
    "தவிர",
    "வேற",
    "இல்லை"
  ],
  "audioGroup": "lesson05-bank"
}),
    make({
  "id": "l5-06",
  "targetTamil": "இந்த கோவில் பற்றி வழிகாட்டி பேசறார்.",
  "structuredRoman": "inta kōvil paṟṟi vaḻikāṭṭi pēcaṟ-ār.",
  "pronunciationRoman": "inda kōvil patti vaḻigāṭṭi pēsaṟār.",
  "katakana": "インダ コーヴィル パッティ ヴァリガーッティ ペーサラール。",
  "meaningJa": "ガイドがこの寺院について話しています。",
  "literalJapanese": "この寺院＋について＋ガイド＋話す・敬意",
  "morphemes": [
    {
      "surfaceTamil": "இந்த கோவில்",
      "gloss": "この寺院"
    },
    {
      "surfaceTamil": "பற்றி",
      "gloss": "〜について"
    },
    {
      "surfaceTamil": "வழிகாட்டி",
      "gloss": "ガイド"
    },
    {
      "surfaceTamil": "பேசறார்",
      "gloss": "話しています"
    }
  ],
  "grammarNote": "話題の句は、話す人の前に置いても、句全体で『何について』を示します。",
  "vocabulary": [
    "கோவில்",
    "பற்றி",
    "வழிகாட்டி",
    "பேசறார்"
  ],
  "audioGroup": "lesson05-bank"
}),
    make({
  "id": "l5-07",
  "targetTamil": "நாம கடற்கரை வரை நடக்கலாம்.",
  "structuredRoman": "nāma kaṭaṟkarai varai naṭakkalām.",
  "pronunciationRoman": "nāma kaḍaṟkare vare naḍakkalām.",
  "katakana": "ナーマ カダルカレ ヴァレ ナダッカラーム。",
  "meaningJa": "私たちは海岸まで歩きましょう。",
  "literalJapanese": "私たち＋海岸＋まで＋歩きましょう",
  "morphemes": [
    {
      "surfaceTamil": "நாம",
      "gloss": "私たち（包括）"
    },
    {
      "surfaceTamil": "கடற்கரை",
      "gloss": "海岸"
    },
    {
      "surfaceTamil": "வரை",
      "gloss": "〜まで"
    },
    {
      "surfaceTamil": "நடக்கலாம்",
      "gloss": "歩きましょう"
    }
  ],
  "grammarNote": "வரை は地名・場所名の後ろに置き、移動範囲の終点を示します。",
  "vocabulary": [
    "நாம",
    "கடற்கரை",
    "வரை",
    "நடக்கலாம்"
  ],
  "audioGroup": "lesson05-bank"
}),
    make({
  "id": "l5-08",
  "targetTamil": "உங்களுக்காக தண்ணி வாங்கறேன்.",
  "structuredRoman": "uṅkaḷ-ukkāka taṇṇi vāṅkaṟ-ēṉ.",
  "pronunciationRoman": "ungaḷukkāga taṇṇi vāṅgarēn.",
  "katakana": "ウンガルッカーガ タンニ ヴァーンガレーン。",
  "meaningJa": "あなたのために水を買います。",
  "literalJapanese": "あなた・のために＋水＋買う・私",
  "morphemes": [
    {
      "surfaceTamil": "உங்களுக்காக",
      "analysis": "உங்கள் + -உக்காக",
      "gloss": "あなたのために"
    },
    {
      "surfaceTamil": "தண்ணி",
      "gloss": "水"
    },
    {
      "surfaceTamil": "வாங்கறேன்",
      "gloss": "買います"
    }
  ],
  "grammarNote": "敬意の相手を受益者として示す完成形です。உங்களுக்கு と混同せず、目的の -க்காக を含みます。",
  "vocabulary": [
    "உங்களுக்காக",
    "தண்ணி",
    "வாங்கறேன்"
  ],
  "audioGroup": "lesson05-bank"
}),
    make({
  "id": "l5-09",
  "targetTamil": "ஹோட்டல் பக்கத்துல காபி கடை இருக்கு.",
  "structuredRoman": "hōṭṭal pakkatt-ula kāpi kaṭai irukku.",
  "pronunciationRoman": "hōṭṭal pakkattula kābi kaḍai irukku.",
  "katakana": "ホーッタル パッカットゥラ カービ カダイ イルック。",
  "meaningJa": "ホテルの近くにコーヒー店があります。",
  "literalJapanese": "ホテル＋近く・場所＋コーヒー店＋ある",
  "morphemes": [
    {
      "surfaceTamil": "ஹோட்டல்",
      "gloss": "ホテル"
    },
    {
      "surfaceTamil": "பக்கத்துல",
      "gloss": "近くに"
    },
    {
      "surfaceTamil": "காபி கடை",
      "gloss": "コーヒー店"
    },
    {
      "surfaceTamil": "இருக்கு",
      "gloss": "ある"
    }
  ],
  "grammarNote": "旅行で使いやすい『場所＋பக்கத்துல＋存在』の枠です。",
  "vocabulary": [
    "ஹோட்டல்",
    "பக்கத்துல",
    "காபி",
    "கடை"
  ],
  "audioGroup": "lesson05-bank"
}),
    make({
  "id": "l5-10",
  "targetTamil": "ரவி தவிர எல்லாரும் வர்றாங்க.",
  "structuredRoman": "ravi tavira ellārum varṟ-āṅka.",
  "pronunciationRoman": "ravi tavira ellārum varrāṅga.",
  "katakana": "ラヴィ タヴィラ エッラールム ヴァッラーンガ。",
  "meaningJa": "ラヴィ以外はみんな来ます。",
  "literalJapanese": "ラヴィ＋以外＋みんなも＋来る・複数",
  "morphemes": [
    {
      "surfaceTamil": "ரவி",
      "gloss": "ラヴィ"
    },
    {
      "surfaceTamil": "தவிர",
      "gloss": "〜以外"
    },
    {
      "surfaceTamil": "எல்லாரும்",
      "gloss": "みんな"
    },
    {
      "surfaceTamil": "வர்றாங்க",
      "gloss": "来ます"
    }
  ],
  "grammarNote": "人にも தவிர を使えます。除外される人と、残る集合を分けて読みます。",
  "vocabulary": [
    "ரவி",
    "தவிர",
    "எல்லாரும்",
    "வர்றாங்க"
  ],
  "audioGroup": "lesson05-bank"
})
  ];

  const patterns = [
    make({
  "id": "l5-form-patam-parri",
  "targetTamil": "படம் பற்றி",
  "structuredRoman": "paṭam paṟṟi",
  "pronunciationRoman": "paḍam patti",
  "katakana": "パダム パッティ",
  "meaningJa": "映画について",
  "literalJapanese": "映画＋話題",
  "grammarNote": "話題を作る完成句。",
  "vocabulary": [
    "படம்",
    "பற்றி"
  ],
  "audioGroup": "lesson05-forms",
  "kind": "話題",
  "group": "後置詞の完成句",
  "note": "前の名詞句全体をテーマにする。"
}),
    make({
  "id": "l5-form-kovil-parri",
  "targetTamil": "கோவில் பற்றி",
  "structuredRoman": "kōvil paṟṟi",
  "pronunciationRoman": "kōvil patti",
  "katakana": "コーヴィル パッティ",
  "meaningJa": "寺院について",
  "literalJapanese": "寺院＋話題",
  "grammarNote": "場所名も話題にできる。",
  "vocabulary": [
    "கோவில்",
    "பற்றி"
  ],
  "audioGroup": "lesson05-forms",
  "kind": "話題",
  "group": "後置詞の完成句",
  "note": "名詞と一緒に覚える。"
}),
    make({
  "id": "l5-form-inge-varai",
  "targetTamil": "இங்கே வரை",
  "structuredRoman": "iṅkē varai",
  "pronunciationRoman": "ingē vare",
  "katakana": "インゲー ヴァレ",
  "meaningJa": "ここまで",
  "literalJapanese": "ここ＋終点",
  "grammarNote": "場所範囲の終点。",
  "vocabulary": [
    "இங்கே",
    "வரை"
  ],
  "audioGroup": "lesson05-forms",
  "kind": "終点",
  "group": "後置詞の完成句",
  "note": "どこで範囲が止まるか。"
}),
    make({
  "id": "l5-form-aintu-mani-varai",
  "targetTamil": "ஐந்து மணி வரை",
  "structuredRoman": "aintu maṇi varai",
  "pronunciationRoman": "aindu maṇi vare",
  "katakana": "アインドゥ マニ ヴァレ",
  "meaningJa": "5時まで",
  "literalJapanese": "5＋時＋終点",
  "grammarNote": "時間範囲の終点。",
  "vocabulary": [
    "ஐந்து",
    "மணி",
    "வரை"
  ],
  "audioGroup": "lesson05-forms",
  "kind": "終点",
  "group": "後置詞の完成句",
  "note": "場所だけでなく時間にも使う。"
}),
    make({
  "id": "l5-form-nanparukkaka",
  "targetTamil": "நண்பருக்காக",
  "structuredRoman": "naṇpar-ukkāka",
  "pronunciationRoman": "naṇbarukkāga",
  "katakana": "ナンバルッカーガ",
  "meaningJa": "友達のために",
  "literalJapanese": "友達＋受益／目的",
  "grammarNote": "人を受益者にする。",
  "vocabulary": [
    "நண்பர்"
  ],
  "audioGroup": "lesson05-forms",
  "kind": "受益",
  "group": "後置詞の完成句",
  "note": "誰の利益・目的か。"
}),
    make({
  "id": "l5-form-unkalukkaka",
  "targetTamil": "உங்களுக்காக",
  "structuredRoman": "uṅkaḷ-ukkāka",
  "pronunciationRoman": "ungaḷukkāga",
  "katakana": "ウンガルッカーガ",
  "meaningJa": "あなたのために",
  "literalJapanese": "あなた＋受益／目的",
  "grammarNote": "敬意の相手を受益者にする。",
  "vocabulary": [
    "உங்கள்"
  ],
  "audioGroup": "lesson05-forms",
  "kind": "受益",
  "group": "後置詞の完成句",
  "note": "உங்களுக்கு との形の差を見る。"
}),
    make({
  "id": "l5-form-kovil-pakkattula",
  "targetTamil": "கோவில் பக்கத்துல",
  "structuredRoman": "kōvil pakkatt-ula",
  "pronunciationRoman": "kōvil pakkattula",
  "katakana": "コーヴィル パッカットゥラ",
  "meaningJa": "寺院の近くに",
  "literalJapanese": "寺院＋側・場所",
  "grammarNote": "場所との位置関係を作る。",
  "vocabulary": [
    "கோவில்",
    "பக்கம்"
  ],
  "audioGroup": "lesson05-forms",
  "kind": "近接",
  "group": "位置関係",
  "note": "存在文と組みやすい。"
}),
    make({
  "id": "l5-form-hottal-pakkattula",
  "targetTamil": "ஹோட்டல் பக்கத்துல",
  "structuredRoman": "hōṭṭal pakkatt-ula",
  "pronunciationRoman": "hōṭṭal pakkattula",
  "katakana": "ホーッタル パッカットゥラ",
  "meaningJa": "ホテルの近くに",
  "literalJapanese": "ホテル＋側・場所",
  "grammarNote": "旅行場面の近接句。",
  "vocabulary": [
    "ஹோட்டல்",
    "பக்கம்"
  ],
  "audioGroup": "lesson05-forms",
  "kind": "近接",
  "group": "位置関係",
  "note": "店・駅・寺院へ置換できる。"
}),
    make({
  "id": "l5-form-ticket-tavira",
  "targetTamil": "இந்த டிக்கெட் தவிர",
  "structuredRoman": "inta ṭikkeṭ tavira",
  "pronunciationRoman": "inda ṭikkeṭ tavira",
  "katakana": "インダ ティッケット タヴィラ",
  "meaningJa": "この切符以外",
  "literalJapanese": "この切符＋除外",
  "grammarNote": "物を集合から除く。",
  "vocabulary": [
    "டிக்கெட்",
    "தவிர"
  ],
  "audioGroup": "lesson05-forms",
  "kind": "除外",
  "group": "除外",
  "note": "後ろに残りの集合を置く。"
}),
    make({
  "id": "l5-form-ravi-tavira",
  "targetTamil": "ரவி தவிர",
  "structuredRoman": "ravi tavira",
  "pronunciationRoman": "ravi tavira",
  "katakana": "ラヴィ タヴィラ",
  "meaningJa": "ラヴィ以外",
  "literalJapanese": "ラヴィ＋除外",
  "grammarNote": "人を集合から除く。",
  "vocabulary": [
    "ரவி",
    "தவிர"
  ],
  "audioGroup": "lesson05-forms",
  "kind": "除外",
  "group": "除外",
  "note": "物にも人にも使える。"
})
  ];

  window.TAMIL_LESSONS_V30 = window.TAMIL_LESSONS_V30 || [];
  window.TAMIL_LESSONS_V30.push(Object.freeze({
    id: "lesson05-postpositions-v32",
    number: 5,
    navTitle: "後置詞＋格",
    title: "名詞の後ろに、話題・終点・受益・除外を置く",
    tamilTitle: "பற்றி, வரை, காக, தவிர",
    deck: "படம் பற்றி、இங்கே வரை、நண்பருக்காக のように、後置詞を前の名詞句と一組で読みます。பக்கத்துல と தவிர も旅行場面へつなげます。",
    targets: Object.freeze([
  "話題 பற்றி",
  "終点 வரை",
  "受益 -க்காக",
  "近接 பக்கத்துல",
  "除外 தவிர"
]),
    heroExample: examples[0],
    readSections: Object.freeze([
  {
    "kicker": "POSTPOSITION CHUNKS",
    "heading": "後置詞だけでなく、前の名詞を含む完成句で覚える",
    "paragraphs": [
      "<span class=\"ta-inline\" lang=\"ta\">படம் பற்றி</span>、<span class=\"ta-inline\" lang=\"ta\">இங்கே வரை</span>、<span class=\"ta-inline\" lang=\"ta\">நண்பருக்காக</span> のように、後置詞は前の名詞句と一まとまりで働きます。",
      "日本語訳を一語ずつ貼るのではなく、話題・終点・受益・除外という関係を文全体の中で判定します。"
    ],
    "caseMap": {
      "rows": [
        {
          "role": "話題",
          "targetForm": "பற்றி",
          "pronunciation": "patti",
          "kana": "パッティ",
          "exampleTa": "இந்த படம் பற்றி பேசலாம்",
          "exampleRoman": "inta paṭam paṟṟi pēcalām",
          "cue": "何について話すか"
        },
        {
          "role": "終点",
          "targetForm": "வரை",
          "pronunciation": "vare",
          "kana": "ヴァレ",
          "exampleTa": "இங்கே வரை நடக்கலாம்",
          "exampleRoman": "iṅkē varai naṭakkalām",
          "cue": "範囲がどこで止まるか"
        },
        {
          "role": "受益・目的",
          "targetForm": "-க்காக 系",
          "pronunciation": "-kkāga",
          "kana": "-ッカーガ",
          "exampleTa": "நண்பருக்காக டிக்கெட் வாங்கறேன்",
          "exampleRoman": "naṇpar-ukkāka ṭikkeṭ vāṅkaṟ-ēṉ",
          "cue": "誰の利益・目的か"
        },
        {
          "role": "除外",
          "targetForm": "தவிர",
          "pronunciation": "tavira",
          "kana": "タヴィラ",
          "exampleTa": "இந்த டிக்கெட் தவிர வேற டிக்கெட் இல்லை",
          "exampleRoman": "inta ṭikkeṭ tavira vēṟa ṭikkeṭ illai",
          "cue": "何を集合から外すか"
        }
      ]
    }
  },
  {
    "kicker": "RELATIONAL NOUN",
    "heading": "『近く』は、位置関係を作る名詞と場所形の組合せ",
    "paragraphs": [
      "<span class=\"ta-inline\" lang=\"ta\">கோவில் பக்கத்துல</span> は『寺院の近くに』です。பக்கம்『側・近く』が接続形 பக்கத்த- になり、場所形 -ல 系と結びつきます。",
      "単独の訳語カードではなく、場所名＋பக்கத்துல＋存在文という枠で覚えると旅行場面へ広げやすくなります。"
    ],
    "formula": {
      "label": "寺院の近くに",
      "slots": [
        "கோவில்",
        "பக்கம்",
        "பக்கத்த-",
        "-உல",
        "கோவில் பக்கத்துல"
      ],
      "note": "基準点 → 関係名詞 → 接続形 → 場所 → 完成句"
    }
  },
  {
    "kicker": "REGISTER",
    "heading": "綴りと聞こえ方を、同じ欄へ混ぜない",
    "paragraphs": [
      "主表示は <strong>பற்றி</strong> とし、発音層では patti を登録します。会話綴りの பத்தி は対応形として保持します。",
      "これは文字を一律置換する規則ではありません。項目ごとの対象発音とレジスターを別々に管理します。"
    ],
    "note": {
      "tone": "blue",
      "title": "ここで混ぜない",
      "body": "பற்றி を単独で『について』とだけ覚えず、前の名詞句と後ろの述語まで含めて役割を確認します。"
    }
  },
  {
    "kicker": "SHORT READING",
    "heading": "話題を示し、終点まで歩き、近くの店を見つける",
    "paragraphs": [
      "寺院について説明を聞き、海岸まで歩き、ホテルの近くの店を確認する三文です。",
      "<span class=\"ta-inline\" lang=\"ta\">இந்த கோவில் பற்றி வழிகாட்டி பேசறார்.</span><br><span class=\"ta-inline\" lang=\"ta\">நாம கடற்கரை வரை நடக்கலாம்.</span><br><span class=\"ta-inline\" lang=\"ta\">ஹோட்டல் பக்கத்துல காபி கடை இருக்கு.</span>"
    ],
    "miniReading": {
      "intro": "話題・終点・近接を、一つの移動場面で読み分けます。",
      "ids": [
        "l5-06",
        "l5-07",
        "l5-09"
      ]
    }
  }
]),
    formConfig: Object.freeze({
      mode: "grammar",
      title: "後置詞を、前の名詞を含む完成句で並べる",
      intro: "話題・終点・受益・近接・除外を、単独の訳語ではなく実際の句で反復します。",
      patterns: Object.freeze(patterns),
      checkpoint: "படம் பற்றி／இங்கே வரை／நண்பருக்காக／கோவில் பக்கத்துல／ரவி தவிர の役割を説明できれば合格です。"
    }),
    examples: Object.freeze(examples),
    quiz: Object.freeze([
  {
    "q": "『この映画について』という話題の句は？",
    "options": [
      "இந்த படம் பற்றி",
      "இங்கே வரை",
      "நண்பருக்காக",
      "இந்த டிக்கெட் தவிர"
    ],
    "answer": 0,
    "feedback": "பற்றி が前の名詞句を話題にします。",
    "tags": [
      "正解",
      "終点",
      "受益",
      "除外"
    ]
  },
  {
    "q": "『ここまで歩きましょう』の終点を示す句は？",
    "options": [
      "இங்கே வரை",
      "இந்த படம் பற்றி",
      "கோவில் பக்கத்துல",
      "ரவி தவிர"
    ],
    "answer": 0,
    "feedback": "வரை が移動範囲の終点を示します。",
    "tags": [
      "正解",
      "話題",
      "近接",
      "除外"
    ]
  },
  {
    "q": "『友達のために切符を買う』の受益者を示す形は？",
    "options": [
      "நண்பருக்காக",
      "நண்பரோட",
      "நண்பருக்கு",
      "நண்பர் தவிர"
    ],
    "answer": 0,
    "feedback": "-க்காக 系が『〜のために』という受益・目的を示します。ほかも実在する形ですが役割が異なります。",
    "tags": [
      "正解",
      "同行／所有",
      "与格",
      "除外"
    ]
  },
  {
    "q": "『ホテルの近くに』という位置関係は？",
    "options": [
      "ஹோட்டல் பக்கத்துல",
      "ஹோட்டலுக்கு",
      "ஹோட்டல் வரை",
      "ஹோட்டல் பற்றி"
    ],
    "answer": 0,
    "feedback": "பக்கத்துல が基準点の近くという位置関係を作ります。",
    "tags": [
      "正解",
      "到達",
      "終点",
      "話題"
    ]
  },
  {
    "q": "『ラヴィ以外』という除外の句は？",
    "options": [
      "ரவி தவிர",
      "ரவி பற்றி",
      "ரவிக்காக",
      "ரவிக்கிட்ட"
    ],
    "answer": 0,
    "feedback": "தவிர がラヴィを集合から除外します。",
    "tags": [
      "正解",
      "話題",
      "受益",
      "人の所"
    ]
  }
])
  }));
})();

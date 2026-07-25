(() => {
  "use strict";

  const { entry: E, confidence: C } = window.TAMIL_V30;
  const PREDICATE_SOURCES = [
  "TAMIL-INTEGRATED-v2.0-rc.1 §§23-25,31-32",
  "TAMIL-GRAMMAR-GARDEN Lesson 06",
  "SCHIFFMAN-SPOKEN-TAMIL: nominal, existential and dative-experiencer predicates",
  "SCHIFFMAN-CASE-SYSTEM",
  "CMC-COMMON-SPOKEN-TAMIL: existence, possession and experience predicates"
];
  const make = input => E({ ...input, sourceRefs: PREDICATE_SOURCES, confidence: C("B", "B", "C", "B") });

  const examples = [
    make({
  "id": "l6-01",
  "targetTamil": "இது என் வீடு.",
  "structuredRoman": "itu eṉ vīṭu.",
  "pronunciationRoman": "idu en vīḍu.",
  "katakana": "イドゥ エン ヴィードゥ。",
  "meaningJa": "これは私の家です。",
  "literalJapanese": "これ＋私の＋家",
  "morphemes": [
    {
      "surfaceTamil": "இது",
      "gloss": "これ"
    },
    {
      "surfaceTamil": "என் வீடு",
      "gloss": "私の家／述語名詞"
    }
  ],
  "grammarNote": "現在の同一・分類を述べる名詞文では、英語のbe動詞に当たる語を置かないことがあります。",
  "vocabulary": [
    "இது",
    "என்",
    "வீடு"
  ],
  "audioGroup": "lesson06-core",
  "featured": true
}),
    make({
  "id": "l6-02",
  "targetTamil": "இது ஹோட்டல் இல்லை.",
  "structuredRoman": "itu hōṭṭal illai.",
  "pronunciationRoman": "idu hōṭṭal illai.",
  "katakana": "イドゥ ホーッタル イッライ。",
  "meaningJa": "これはホテルではありません。",
  "literalJapanese": "これ＋ホテル＋ではない",
  "morphemes": [
    {
      "surfaceTamil": "இது",
      "gloss": "これ"
    },
    {
      "surfaceTamil": "ஹோட்டல்",
      "gloss": "ホテル"
    },
    {
      "surfaceTamil": "இல்லை",
      "gloss": "ではない／ない"
    }
  ],
  "grammarNote": "名詞文の否定にも இல்லை を使えます。肯定に இருக்கு を足す規則ではありません。",
  "vocabulary": [
    "இது",
    "ஹோட்டல்",
    "இல்லை"
  ],
  "audioGroup": "lesson06-core",
  "featured": true
}),
    make({
  "id": "l6-03",
  "targetTamil": "தண்ணி இருக்கு.",
  "structuredRoman": "taṇṇi irukku.",
  "pronunciationRoman": "taṇṇi irukku.",
  "katakana": "タンニ イルック。",
  "meaningJa": "水があります。",
  "literalJapanese": "水＋ある",
  "morphemes": [
    {
      "surfaceTamil": "தண்ணி",
      "gloss": "水"
    },
    {
      "surfaceTamil": "இருக்கு",
      "gloss": "ある"
    }
  ],
  "grammarNote": "存在を述べるときは இருக்கு を使います。名詞文のゼロコピュラと分けます。",
  "vocabulary": [
    "தண்ணி",
    "இருக்கு"
  ],
  "audioGroup": "lesson06-core",
  "featured": true
}),
    make({
  "id": "l6-04",
  "targetTamil": "தண்ணி இல்லை.",
  "structuredRoman": "taṇṇi illai.",
  "pronunciationRoman": "taṇṇi illai.",
  "katakana": "タンニ イッライ。",
  "meaningJa": "水がありません。",
  "literalJapanese": "水＋ない",
  "morphemes": [
    {
      "surfaceTamil": "தண்ணி",
      "gloss": "水"
    },
    {
      "surfaceTamil": "இல்லை",
      "gloss": "ない"
    }
  ],
  "grammarNote": "存在の否定は இல்லை。肯定の இருக்கு と対比します。",
  "vocabulary": [
    "தண்ணி",
    "இல்லை"
  ],
  "audioGroup": "lesson06-bank"
}),
    make({
  "id": "l6-05",
  "targetTamil": "அவர் வீட்டுல இருக்கார்.",
  "structuredRoman": "avar vīṭṭ-ula irukk-ār.",
  "pronunciationRoman": "avar vīṭṭula irukkār.",
  "katakana": "アヴァル ヴィーットゥラ イルッカール。",
  "meaningJa": "その方は家にいます。",
  "literalJapanese": "その方＋家・場所＋いる・敬意",
  "morphemes": [
    {
      "surfaceTamil": "அவர்",
      "gloss": "その方"
    },
    {
      "surfaceTamil": "வீட்டுல",
      "gloss": "家に"
    },
    {
      "surfaceTamil": "இருக்கார்",
      "gloss": "いらっしゃいます"
    }
  ],
  "grammarNote": "人の所在も存在動詞の体系で表し、敬意形 இருக்கார் を使います。",
  "vocabulary": [
    "அவர்",
    "வீடு",
    "இருக்கார்"
  ],
  "audioGroup": "lesson06-bank"
}),
    make({
  "id": "l6-06",
  "targetTamil": "என்கிட்ட டிக்கெட் இருக்கு.",
  "structuredRoman": "eṉ-kiṭṭa ṭikkeṭ irukku.",
  "pronunciationRoman": "eṅgiṭṭa ṭikkeṭ irukku.",
  "katakana": "エンギッタ ティッケット イルック。",
  "meaningJa": "私は切符を持っています。",
  "literalJapanese": "私の手元に＋切符＋ある",
  "morphemes": [
    {
      "surfaceTamil": "என்கிட்ட",
      "analysis": "என் + -கிட்ட",
      "gloss": "私の所・手元に"
    },
    {
      "surfaceTamil": "டிக்கெட்",
      "gloss": "切符"
    },
    {
      "surfaceTamil": "இருக்கு",
      "gloss": "ある"
    }
  ],
  "grammarNote": "所持を『私の手元に切符がある』という存在構文で表します。",
  "vocabulary": [
    "என்கிட்ட",
    "டிக்கெட்",
    "இருக்கு"
  ],
  "audioGroup": "lesson06-bank",
  "counterparts": [
    {
      "relation": "literary-counterpart",
      "primaryRegister": "LT-WR",
      "targetTamil": "என்னிடம் டிக்கெட் இருக்கிறது.",
      "structuredRoman": "eṉṉ-iṭam ṭikkeṭ irukkiṟatu."
    }
  ]
}),
    make({
  "id": "l6-07",
  "targetTamil": "என்கிட்ட பணம் இல்லை.",
  "structuredRoman": "eṉ-kiṭṭa paṇam illai.",
  "pronunciationRoman": "eṅgiṭṭa paṇam illai.",
  "katakana": "エンギッタ パナム イッライ。",
  "meaningJa": "私はお金を持っていません。",
  "literalJapanese": "私の手元に＋お金＋ない",
  "morphemes": [
    {
      "surfaceTamil": "என்கிட்ட",
      "gloss": "私の手元に"
    },
    {
      "surfaceTamil": "பணம்",
      "gloss": "お金"
    },
    {
      "surfaceTamil": "இல்லை",
      "gloss": "ない"
    }
  ],
  "grammarNote": "所持の否定も『手元に存在しない』として இல்லை を使います。",
  "vocabulary": [
    "என்கிட்ட",
    "பணம்",
    "இல்லை"
  ],
  "audioGroup": "lesson06-bank"
}),
    make({
  "id": "l6-08",
  "targetTamil": "எனக்கு தமிழ் படம் பிடிக்கும்.",
  "structuredRoman": "eṉ-akku tamiḻ paṭam piṭikkum.",
  "pronunciationRoman": "enakku tamiḻ paḍam piḍikkum.",
  "katakana": "エナック タミル パダム ピディックム。",
  "meaningJa": "私はタミル映画が好きです。",
  "literalJapanese": "私には＋タミル映画＋好ましい",
  "morphemes": [
    {
      "surfaceTamil": "எனக்கு",
      "analysis": "என் + -அக்கு",
      "gloss": "私には／経験者"
    },
    {
      "surfaceTamil": "தமிழ் படம்",
      "gloss": "タミル映画"
    },
    {
      "surfaceTamil": "பிடிக்கும்",
      "gloss": "好ましい／好き"
    }
  ],
  "grammarNote": "好きだと感じる人を与格で置きます。日本語の自然訳では『私は』になります。",
  "vocabulary": [
    "எனக்கு",
    "தமிழ்",
    "படம்",
    "பிடிக்கும்"
  ],
  "audioGroup": "lesson06-bank"
}),
    make({
  "id": "l6-09",
  "targetTamil": "எனக்கு தமிழ் புரியும்.",
  "structuredRoman": "eṉ-akku tamiḻ puriyum.",
  "pronunciationRoman": "enakku tamiḻ puriyum.",
  "katakana": "エナック タミル プリユム。",
  "meaningJa": "私はタミル語が分かります。",
  "literalJapanese": "私には＋タミル語＋理解できる／分かる",
  "morphemes": [
    {
      "surfaceTamil": "எனக்கு",
      "gloss": "私には／経験者"
    },
    {
      "surfaceTamil": "தமிழ்",
      "gloss": "タミル語"
    },
    {
      "surfaceTamil": "புரியும்",
      "gloss": "分かる"
    }
  ],
  "grammarNote": "理解する人も与格で置く中心例です。",
  "vocabulary": [
    "எனக்கு",
    "தமிழ்",
    "புரியும்"
  ],
  "audioGroup": "lesson06-bank"
}),
    make({
  "id": "l6-10",
  "targetTamil": "எனக்கு இந்த வழி புரியல.",
  "structuredRoman": "eṉ-akku inta vaḻi puriyala.",
  "pronunciationRoman": "enakku inda vaḻi puriyala.",
  "katakana": "エナック インダ ヴァリ プリヤラ。",
  "meaningJa": "私はこの道が分かりません。",
  "literalJapanese": "私には＋この道＋分からない",
  "morphemes": [
    {
      "surfaceTamil": "எனக்கு",
      "gloss": "私には／経験者"
    },
    {
      "surfaceTamil": "இந்த வழி",
      "gloss": "この道"
    },
    {
      "surfaceTamil": "புரியல",
      "gloss": "分からない"
    }
  ],
  "grammarNote": "புரியல は会話的な否定形です。存在の இல்லை をそのまま置き換えた形ではありません。",
  "vocabulary": [
    "எனக்கு",
    "இந்த",
    "வழி",
    "புரியல"
  ],
  "audioGroup": "lesson06-bank"
}),
    make({
  "id": "l6-11",
  "targetTamil": "அவருக்கு தண்ணி வேணும்.",
  "structuredRoman": "avar-ukku taṇṇi vēṇum.",
  "pronunciationRoman": "avarukku taṇṇi vēṇum.",
  "katakana": "アヴァルック タンニ ヴェーヌム。",
  "meaningJa": "その方には水が必要です。",
  "literalJapanese": "その方には＋水＋必要",
  "morphemes": [
    {
      "surfaceTamil": "அவருக்கு",
      "analysis": "அவர் + -உக்கு",
      "gloss": "その方には／経験者"
    },
    {
      "surfaceTamil": "தண்ணி",
      "gloss": "水"
    },
    {
      "surfaceTamil": "வேணும்",
      "gloss": "必要だ／欲しい"
    }
  ],
  "grammarNote": "必要を感じる人も与格で置きます。第2課の与格経験者を述語の型として整理します。",
  "vocabulary": [
    "அவர்",
    "தண்ணி",
    "வேணும்"
  ],
  "audioGroup": "lesson06-bank"
})
  ];

  const patterns = [
    make({
  "id": "l6-form-nominal",
  "targetTamil": "இது என் வீடு",
  "structuredRoman": "itu eṉ vīṭu",
  "pronunciationRoman": "idu en vīḍu",
  "katakana": "イドゥ エン ヴィードゥ",
  "meaningJa": "これは私の家です",
  "literalJapanese": "これ＋私の家",
  "grammarNote": "現在の肯定名詞文。",
  "vocabulary": [
    "இது",
    "என்",
    "வீடு"
  ],
  "audioGroup": "lesson06-forms",
  "kind": "名詞述語",
  "group": "四つの述語骨格",
  "note": "肯定ではコピュラを置かない。"
}),
    make({
  "id": "l6-form-nominal-neg",
  "targetTamil": "இது ஹோட்டல் இல்லை",
  "structuredRoman": "itu hōṭṭal illai",
  "pronunciationRoman": "idu hōṭṭal illai",
  "katakana": "イドゥ ホーッタル イッライ",
  "meaningJa": "これはホテルではありません",
  "literalJapanese": "これ＋ホテル＋ではない",
  "grammarNote": "名詞文の否定。",
  "vocabulary": [
    "இது",
    "ஹோட்டல்",
    "இல்லை"
  ],
  "audioGroup": "lesson06-forms",
  "kind": "名詞述語否定",
  "group": "四つの述語骨格",
  "note": "肯定に இருக்கு を足す発想ではない。"
}),
    make({
  "id": "l6-form-exist",
  "targetTamil": "தண்ணி இருக்கு",
  "structuredRoman": "taṇṇi irukku",
  "pronunciationRoman": "taṇṇi irukku",
  "katakana": "タンニ イルック",
  "meaningJa": "水があります",
  "literalJapanese": "水＋ある",
  "grammarNote": "物の存在。",
  "vocabulary": [
    "தண்ணி",
    "இருக்கு"
  ],
  "audioGroup": "lesson06-forms",
  "kind": "存在",
  "group": "四つの述語骨格",
  "note": "何が存在するか。"
}),
    make({
  "id": "l6-form-exist-neg",
  "targetTamil": "தண்ணி இல்லை",
  "structuredRoman": "taṇṇi illai",
  "pronunciationRoman": "taṇṇi illai",
  "katakana": "タンニ イッライ",
  "meaningJa": "水がありません",
  "literalJapanese": "水＋ない",
  "grammarNote": "存在の否定。",
  "vocabulary": [
    "தண்ணி",
    "இல்லை"
  ],
  "audioGroup": "lesson06-forms",
  "kind": "不在",
  "group": "四つの述語骨格",
  "note": "存在しないこと。"
}),
    make({
  "id": "l6-form-possession",
  "targetTamil": "என்கிட்ட டிக்கெட் இருக்கு",
  "structuredRoman": "eṉ-kiṭṭa ṭikkeṭ irukku",
  "pronunciationRoman": "eṅgiṭṭa ṭikkeṭ irukku",
  "katakana": "エンギッタ ティッケット イルック",
  "meaningJa": "私は切符を持っています",
  "literalJapanese": "私の手元に＋切符＋ある",
  "grammarNote": "手元の所有。",
  "vocabulary": [
    "என்கிட்ட",
    "டிக்கெட்",
    "இருக்கு"
  ],
  "audioGroup": "lesson06-forms",
  "kind": "所有",
  "group": "所有と経験を分ける",
  "note": "人の所・手元＋存在。"
}),
    make({
  "id": "l6-form-possession-neg",
  "targetTamil": "என்கிட்ட பணம் இல்லை",
  "structuredRoman": "eṉ-kiṭṭa paṇam illai",
  "pronunciationRoman": "eṅgiṭṭa paṇam illai",
  "katakana": "エンギッタ パナム イッライ",
  "meaningJa": "私はお金を持っていません",
  "literalJapanese": "私の手元に＋お金＋ない",
  "grammarNote": "手元の所有否定。",
  "vocabulary": [
    "என்கிட்ட",
    "பணம்",
    "இல்லை"
  ],
  "audioGroup": "lesson06-forms",
  "kind": "非所有",
  "group": "所有と経験を分ける",
  "note": "手元に存在しない。"
}),
    make({
  "id": "l6-form-like",
  "targetTamil": "எனக்கு படம் பிடிக்கும்",
  "structuredRoman": "eṉ-akku paṭam piṭikkum",
  "pronunciationRoman": "enakku paḍam piḍikkum",
  "katakana": "エナック パダム ピディックム",
  "meaningJa": "私は映画が好きです",
  "literalJapanese": "私には＋映画＋好ましい",
  "grammarNote": "好みの経験者。",
  "vocabulary": [
    "எனக்கு",
    "படம்",
    "பிடிக்கும்"
  ],
  "audioGroup": "lesson06-forms",
  "kind": "好み",
  "group": "所有と経験を分ける",
  "note": "主格ではなく与格経験者。"
}),
    make({
  "id": "l6-form-understand",
  "targetTamil": "எனக்கு தமிழ் புரியும்",
  "structuredRoman": "eṉ-akku tamiḻ puriyum",
  "pronunciationRoman": "enakku tamiḻ puriyum",
  "katakana": "エナック タミル プリユム",
  "meaningJa": "私はタミル語が分かります",
  "literalJapanese": "私には＋タミル語＋分かる",
  "grammarNote": "理解の経験者。",
  "vocabulary": [
    "எனக்கு",
    "தமிழ்",
    "புரியும்"
  ],
  "audioGroup": "lesson06-forms",
  "kind": "理解",
  "group": "所有と経験を分ける",
  "note": "分かる人を与格で置く。"
}),
    make({
  "id": "l6-form-need",
  "targetTamil": "அவருக்கு தண்ணி வேணும்",
  "structuredRoman": "avar-ukku taṇṇi vēṇum",
  "pronunciationRoman": "avarukku taṇṇi vēṇum",
  "katakana": "アヴァルック タンニ ヴェーヌム",
  "meaningJa": "その方には水が必要です",
  "literalJapanese": "その方には＋水＋必要",
  "grammarNote": "必要の経験者。",
  "vocabulary": [
    "அவர்",
    "தண்ணி",
    "வேணும்"
  ],
  "audioGroup": "lesson06-forms",
  "kind": "必要",
  "group": "所有と経験を分ける",
  "note": "必要を感じる人を与格で置く。"
}),
    make({
  "id": "l6-form-location",
  "targetTamil": "அவர் வீட்டுல இருக்கார்",
  "structuredRoman": "avar vīṭṭ-ula irukk-ār",
  "pronunciationRoman": "avar vīṭṭula irukkār",
  "katakana": "アヴァル ヴィーットゥラ イルッカール",
  "meaningJa": "その方は家にいます",
  "literalJapanese": "その方＋家に＋いる",
  "grammarNote": "人の所在。",
  "vocabulary": [
    "அவர்",
    "வீடு",
    "இருக்கார்"
  ],
  "audioGroup": "lesson06-forms",
  "kind": "所在",
  "group": "存在と所在",
  "note": "人にも存在動詞体系を使う。"
})
  ];

  window.TAMIL_LESSONS_V30 = window.TAMIL_LESSONS_V30 || [];
  window.TAMIL_LESSONS_V30.push(Object.freeze({
    id: "lesson06-nominal-existential-v32",
    number: 6,
    navTitle: "名詞述語・存在・所有・好き",
    title: "『です・ある・持つ・好き』を四つの骨格に分ける",
    tamilTitle: "பெயர்ப்பயனிலை, இருப்பு, உடைமை, அனுபவம்",
    deck: "இது என் வீடு、தண்ணி இருக்கு、என்கிட்ட டிக்கெட் இருக்கு、எனக்கு படம் பிடிக்கும் を比較し、同じ『私は／です』に見える文を分けます。",
    targets: Object.freeze([
  "名詞述語 ∅",
  "存在 இருக்கு",
  "不在 இல்லை",
  "所有 -கிட்ட",
  "経験者 -க்கு"
]),
    heroExample: examples[0],
    readSections: Object.freeze([
  {
    "kicker": "FOUR PREDICATES",
    "heading": "日本語の『です・ある・持つ・好き』を一つにまとめない",
    "paragraphs": [
      "<span class=\"ta-inline\" lang=\"ta\">இது என் வீடு</span> は名詞述語、<span class=\"ta-inline\" lang=\"ta\">தண்ணி இருக்கு</span> は存在、<span class=\"ta-inline\" lang=\"ta\">என்கிட்ட டிக்கெட் இருக்கு</span> は手元の所有、<span class=\"ta-inline\" lang=\"ta\">எனக்கு படம் பிடிக்கும்</span> は経験者構文です。",
      "自然な日本語訳が似ていても、タミル語の骨格が違います。右端の述語と、人物が எங்கிட்ட／எனக்கு のどちらで置かれるかを見ます。"
    ],
    "caseMap": {
      "rows": [
        {
          "role": "名詞述語",
          "targetForm": "名詞＋名詞",
          "pronunciation": "zero copula",
          "kana": "語を足さない",
          "exampleTa": "இது என் வீடு",
          "exampleRoman": "itu eṉ vīṭu",
          "cue": "何であるか／どの分類か"
        },
        {
          "role": "存在・所在",
          "targetForm": "இருக்கு / இருக்கார்",
          "pronunciation": "irukku / irukkār",
          "kana": "イルック／イルッカール",
          "exampleTa": "தண்ணி இருக்கு",
          "exampleRoman": "taṇṇi irukku",
          "cue": "何がある・誰がいるか"
        },
        {
          "role": "手元の所有",
          "targetForm": "-கிட்ட＋存在",
          "pronunciation": "-kiṭṭa + irukku",
          "kana": "-キッタ＋イルック",
          "exampleTa": "என்கிட்ட டிக்கெட் இருக்கு",
          "exampleRoman": "eṉ-kiṭṭa ṭikkeṭ irukku",
          "cue": "誰の所・手元にあるか"
        },
        {
          "role": "経験者",
          "targetForm": "与格＋状態述語",
          "pronunciation": "-kku + predicate",
          "kana": "-ック＋述語",
          "exampleTa": "எனக்கு படம் பிடிக்கும்",
          "exampleRoman": "eṉ-akku paṭam piṭikkum",
          "cue": "誰が好む・分かる・必要とするか"
        }
      ]
    }
  },
  {
    "kicker": "ZERO COPULA",
    "heading": "名詞文の肯定に、存在の இருக்கு を無差別に入れない",
    "paragraphs": [
      "現在の肯定名詞文 <span class=\"ta-inline\" lang=\"ta\">இது என் வீடு</span> は、主語と述語名詞を並べて成立します。",
      "<span class=\"ta-inline\" lang=\"ta\">தண்ணி இருக்கு</span> は水の存在を述べる文です。『これは家です』と『水があります』は別の設計です。"
    ],
    "formula": {
      "label": "これは私の家です",
      "slots": [
        "இது",
        "என் வீடு",
        "∅"
      ],
      "note": "主語 → 述語名詞 → 現在肯定ではコピュラなし"
    }
  },
  {
    "kicker": "POSSESSION & EXPERIENCER",
    "heading": "手元にある人は -கிட்ட、感じる人は与格で置く",
    "paragraphs": [
      "<span class=\"ta-inline\" lang=\"ta\">என்கிட்ட டிக்கெட் இருக்கு</span> は『私の手元に切符がある』、<span class=\"ta-inline\" lang=\"ta\">எனக்கு தமிழ் புரியும்</span> は『私にはタミル語が分かる』です。",
      "どちらも日本語では『私は』と訳せますが、所有領域と経験者は同じ形ではありません。"
    ],
    "note": {
      "tone": "blue",
      "title": "否定も分ける",
      "body": "存在・非所有は இல்லை、理解できない会話形は புரியல。すべてを一つの否定語へ置き換えません。"
    }
  },
  {
    "kicker": "SHORT READING",
    "heading": "切符はある。でもお金と道の理解が足りない",
    "paragraphs": [
      "旅行中の所持・非所持・理解不足を三文で読みます。",
      "<span class=\"ta-inline\" lang=\"ta\">என்கிட்ட டிக்கெட் இருக்கு.</span><br><span class=\"ta-inline\" lang=\"ta\">என்கிட்ட பணம் இல்லை.</span><br><span class=\"ta-inline\" lang=\"ta\">எனக்கு இந்த வழி புரியல.</span>"
    ],
    "miniReading": {
      "intro": "同じ『私は』でも、手元の所有と経験者を読み分けます。",
      "ids": [
        "l6-06",
        "l6-07",
        "l6-10"
      ]
    }
  }
]),
    formConfig: Object.freeze({
      mode: "grammar",
      title: "四つの述語骨格と、それぞれの否定を並べる",
      intro: "名詞文・存在文・所有文・経験者文を、人物の置き方と右端の述語で比較します。",
      patterns: Object.freeze(patterns),
      checkpoint: "இது என் வீடு に இருக்கு を足さず、என்கிட்ட と எனக்கு の違い、இல்லை と புரியல の役割を説明できれば合格です。"
    }),
    examples: Object.freeze(examples),
    quiz: Object.freeze([
  {
    "q": "現在の肯定名詞文『これは私の家です』は？",
    "options": [
      "இது என் வீடு",
      "தண்ணி இருக்கு",
      "என்கிட்ட டிக்கெட் இருக்கு",
      "எனக்கு படம் பிடிக்கும்"
    ],
    "answer": 0,
    "feedback": "名詞述語を並べるだけで成立し、存在の இருக்கு は置きません。",
    "tags": [
      "正解",
      "存在",
      "所有",
      "経験者"
    ]
  },
  {
    "q": "物の存在『水があります』は？",
    "options": [
      "தண்ணி இருக்கு",
      "தண்ணி இல்லை",
      "இது தண்ணி",
      "எனக்கு தண்ணி வேணும்"
    ],
    "answer": 0,
    "feedback": "存在は இருக்கு。ほかは不在、名詞文、必要です。",
    "tags": [
      "正解",
      "不在",
      "名詞述語",
      "必要"
    ]
  },
  {
    "q": "『私は切符を持っています』を手元の存在として表す文は？",
    "options": [
      "என்கிட்ட டிக்கெட் இருக்கு",
      "எனக்கு டிக்கெட் வேணும்",
      "இது என் டிக்கெட்",
      "டிக்கெட் இல்லை"
    ],
    "answer": 0,
    "feedback": "என்கிட்ட が私の所・手元を示し、切符が存在すると組み立てます。",
    "tags": [
      "正解",
      "必要",
      "所有名詞句",
      "不在"
    ]
  },
  {
    "q": "『私は映画が好きです』の経験者を置く形は？",
    "options": [
      "எனக்கு படம் பிடிக்கும்",
      "நான் படம் பாக்கறேன்",
      "என்கிட்ட படம் இருக்கு",
      "இது என் படம்"
    ],
    "answer": 0,
    "feedback": "好みを経験する人は எனக்கு で置きます。",
    "tags": [
      "正解",
      "動作主",
      "手元の所有",
      "名詞述語"
    ]
  },
  {
    "q": "『私はこの道が分かりません』の会話的な文は？",
    "options": [
      "எனக்கு இந்த வழி புரியல",
      "எனக்கு தமிழ் புரியும்",
      "என்கிட்ட பணம் இல்லை",
      "இது ஹோட்டல் இல்லை"
    ],
    "answer": 0,
    "feedback": "理解の経験者は எனக்கு、会話的な否定述語は புரியல です。",
    "tags": [
      "正解",
      "理解肯定",
      "非所有",
      "名詞文否定"
    ]
  }
])
  }));
})();

(() => {
  "use strict";

  const { entry: E, confidence: C } = window.TAMIL_V30;
  const VERB_SOURCES = [
  "TAMIL-INTEGRATED-v2.0-rc.1 §§23-25,31-32",
  "PREDICATE-ENGINE-v1.1 §4",
  "TAMIL-GRAMMAR-GARDEN Lesson 07",
  "SCHIFFMAN-SPOKEN-TAMIL: verb classes, tense markers and personal endings",
  "CMC-COMMON-SPOKEN-TAMIL: common spoken verb paradigms"
];
  const make = input => E({ ...input, sourceRefs: VERB_SOURCES, confidence: C("B", "B", "C", "B") });

  const examples = [
    make({
  "id": "l7-01",
  "targetTamil": "நான் படம் பாக்கறேன்.",
  "structuredRoman": "nāṉ paṭam pākkaṟ-ēṉ.",
  "pronunciationRoman": "nāṉ paḍam pākkarēn.",
  "katakana": "ナーン パダム パーッカレーン。",
  "meaningJa": "私は映画を見ます／見ています。",
  "literalJapanese": "私＋映画＋見る・現在・私",
  "morphemes": [
    {
      "surfaceTamil": "நான்",
      "gloss": "私／一人称単数"
    },
    {
      "surfaceTamil": "படம்",
      "gloss": "映画"
    },
    {
      "surfaceTamil": "பாக்கறேன்",
      "analysis": "பாக்கற- + -ேன்",
      "gloss": "見ます／見ています・私"
    }
  ],
  "grammarNote": "完成形の右端 -ேன் が一人称単数を示します。現在の機能分析は morphemes で示し、structuredRoman は表面綴りを保ちます。",
  "vocabulary": [
    "நான்",
    "படம்",
    "பாக்கறேன்"
  ],
  "audioGroup": "lesson07-core",
  "featured": true,
  "counterparts": [
    {
      "relation": "literary-counterpart",
      "primaryRegister": "LT-WR",
      "targetTamil": "நான் படம் பார்க்கிறேன்.",
      "structuredRoman": "nāṉ paṭam pārkkiṟ-ēṉ."
    }
  ]
}),
    make({
  "id": "l7-02",
  "targetTamil": "நான் படம் பாத்தேன்.",
  "structuredRoman": "nāṉ paṭam pātt-ēṉ.",
  "pronunciationRoman": "nāṉ paḍam pāttēn.",
  "katakana": "ナーン パダム パーッテーン。",
  "meaningJa": "私は映画を見ました。",
  "literalJapanese": "私＋映画＋見る・過去・私",
  "morphemes": [
    {
      "surfaceTamil": "நான்",
      "gloss": "私"
    },
    {
      "surfaceTamil": "படம்",
      "gloss": "映画"
    },
    {
      "surfaceTamil": "பாத்தேன்",
      "analysis": "பாத்த- + -ேன்",
      "gloss": "見ました・私"
    }
  ],
  "grammarNote": "பாக்கறேன் と同じ動詞でも、過去では பாத்த- という完成した過去幹を使います。",
  "vocabulary": [
    "நான்",
    "படம்",
    "பாத்தேன்"
  ],
  "audioGroup": "lesson07-core",
  "featured": true,
  "counterparts": [
    {
      "relation": "literary-counterpart",
      "primaryRegister": "LT-WR",
      "targetTamil": "நான் படம் பார்த்தேன்.",
      "structuredRoman": "nāṉ paṭam pārtt-ēṉ."
    }
  ]
}),
    make({
  "id": "l7-03",
  "targetTamil": "நான் படம் பாப்பேன்.",
  "structuredRoman": "nāṉ paṭam pāpp-ēṉ.",
  "pronunciationRoman": "nāṉ paḍam pāppēn.",
  "katakana": "ナーン パダム パーッペーン。",
  "meaningJa": "私は映画を見るつもりです。",
  "literalJapanese": "私＋映画＋見る・未来／意志・私",
  "morphemes": [
    {
      "surfaceTamil": "நான்",
      "gloss": "私"
    },
    {
      "surfaceTamil": "படம்",
      "gloss": "映画"
    },
    {
      "surfaceTamil": "பாப்பேன்",
      "analysis": "பாப்ப- + -ேன்",
      "gloss": "見るつもりです・私"
    }
  ],
  "grammarNote": "一人称未来は予測だけでなく、予定・意志として自然に使われます。",
  "vocabulary": [
    "நான்",
    "படம்",
    "பாப்பேன்"
  ],
  "audioGroup": "lesson07-core",
  "featured": true,
  "counterparts": [
    {
      "relation": "literary-counterpart",
      "primaryRegister": "LT-WR",
      "targetTamil": "நான் படம் பார்ப்பேன்.",
      "structuredRoman": "nāṉ paṭam pārpp-ēṉ."
    }
  ]
}),
    make({
  "id": "l7-04",
  "targetTamil": "நான் வீட்டுக்கு போறேன்.",
  "structuredRoman": "nāṉ vīṭṭ-ukku pōṟ-ēṉ.",
  "pronunciationRoman": "nāṉ vīṭṭukku pōrēn.",
  "katakana": "ナーン ヴィーットゥック ポーレーン。",
  "meaningJa": "私は家へ行きます。",
  "literalJapanese": "私＋家・到達＋行く・現在・私",
  "morphemes": [
    {
      "surfaceTamil": "நான்",
      "gloss": "私"
    },
    {
      "surfaceTamil": "வீட்டுக்கு",
      "analysis": "வீட்ட- + -உக்கு",
      "gloss": "家へ"
    },
    {
      "surfaceTamil": "போறேன்",
      "analysis": "போற- + -ேன்",
      "gloss": "行きます・私"
    }
  ],
  "grammarNote": "போறேன் でも末尾 -ேன் が人物を示します。動詞ごとに現在の表面形は異なります。",
  "vocabulary": [
    "நான்",
    "வீடு",
    "போறேன்"
  ],
  "audioGroup": "lesson07-bank",
  "counterparts": [
    {
      "relation": "literary-counterpart",
      "primaryRegister": "LT-WR",
      "targetTamil": "நான் வீட்டுக்கு போகிறேன்.",
      "structuredRoman": "nāṉ vīṭṭ-ukku pōkiṟ-ēṉ."
    }
  ]
}),
    make({
  "id": "l7-05",
  "targetTamil": "நான் வீட்டுக்கு போனேன்.",
  "structuredRoman": "nāṉ vīṭṭ-ukku pōṉ-ēṉ.",
  "pronunciationRoman": "nāṉ vīṭṭukku pōnēn.",
  "katakana": "ナーン ヴィーットゥック ポーネーン。",
  "meaningJa": "私は家へ行きました。",
  "literalJapanese": "私＋家・到達＋行く・過去・私",
  "morphemes": [
    {
      "surfaceTamil": "நான்",
      "gloss": "私"
    },
    {
      "surfaceTamil": "வீட்டுக்கு",
      "gloss": "家へ"
    },
    {
      "surfaceTamil": "போனேன்",
      "analysis": "போன- + -ேன்",
      "gloss": "行きました・私"
    }
  ],
  "grammarNote": "போ『行く』の過去は போன-。பாத்த- と同じ過去標識を機械的に貼りません。",
  "vocabulary": [
    "நான்",
    "வீடு",
    "போனேன்"
  ],
  "audioGroup": "lesson07-bank"
}),
    make({
  "id": "l7-06",
  "targetTamil": "நான் வீட்டுக்கு போவேன்.",
  "structuredRoman": "nāṉ vīṭṭ-ukku pōv-ēṉ.",
  "pronunciationRoman": "nāṉ vīṭṭukku pōvēn.",
  "katakana": "ナーン ヴィーットゥック ポーヴェーン。",
  "meaningJa": "私は家へ行くつもりです。",
  "literalJapanese": "私＋家・到達＋行く・未来／意志・私",
  "morphemes": [
    {
      "surfaceTamil": "நான்",
      "gloss": "私"
    },
    {
      "surfaceTamil": "வீட்டுக்கு",
      "gloss": "家へ"
    },
    {
      "surfaceTamil": "போவேன்",
      "analysis": "போவ- + -ேன்",
      "gloss": "行くつもりです・私"
    }
  ],
  "grammarNote": "未来の -வ- 系と一人称 -ேன் が続きます。",
  "vocabulary": [
    "நான்",
    "வீடு",
    "போவேன்"
  ],
  "audioGroup": "lesson07-bank"
}),
    make({
  "id": "l7-07",
  "targetTamil": "நான் காபி குடிக்கறேன்.",
  "structuredRoman": "nāṉ kāpi kuṭikkaṟ-ēṉ.",
  "pronunciationRoman": "nāṉ kābi kuḍikkarēn.",
  "katakana": "ナーン カービ クディッカレーン。",
  "meaningJa": "私はコーヒーを飲みます／飲んでいます。",
  "literalJapanese": "私＋コーヒー＋飲む・現在・私",
  "morphemes": [
    {
      "surfaceTamil": "நான்",
      "gloss": "私"
    },
    {
      "surfaceTamil": "காபி",
      "gloss": "コーヒー"
    },
    {
      "surfaceTamil": "குடிக்கறேன்",
      "analysis": "குடிக்கற- + -ேன்",
      "gloss": "飲みます・私"
    }
  ],
  "grammarNote": "現在形は進行中にも習慣にもなれます。時間語と場面が読みを支えます。",
  "vocabulary": [
    "நான்",
    "காபி",
    "குடிக்கறேன்"
  ],
  "audioGroup": "lesson07-bank",
  "counterparts": [
    {
      "relation": "literary-counterpart",
      "primaryRegister": "LT-WR",
      "targetTamil": "நான் காபி குடிக்கிறேன்.",
      "structuredRoman": "nāṉ kāpi kuṭikkiṟ-ēṉ."
    }
  ]
}),
    make({
  "id": "l7-08",
  "targetTamil": "நான் காபி குடிச்சேன்.",
  "structuredRoman": "nāṉ kāpi kuṭicc-ēṉ.",
  "pronunciationRoman": "nāṉ kābi kuḍiccēn.",
  "katakana": "ナーン カービ クディッセーン。",
  "meaningJa": "私はコーヒーを飲みました。",
  "literalJapanese": "私＋コーヒー＋飲む・過去・私",
  "morphemes": [
    {
      "surfaceTamil": "நான்",
      "gloss": "私"
    },
    {
      "surfaceTamil": "காபி",
      "gloss": "コーヒー"
    },
    {
      "surfaceTamil": "குடிச்சேன்",
      "analysis": "குடிச்ச- + -ேன்",
      "gloss": "飲みました・私"
    }
  ],
  "grammarNote": "குடி の過去は குடிச்ச-。過去幹は頻出動詞ごとに三点セットで覚えます。",
  "vocabulary": [
    "நான்",
    "காபி",
    "குடிச்சேன்"
  ],
  "audioGroup": "lesson07-bank"
}),
    make({
  "id": "l7-09",
  "targetTamil": "நான் காபி குடிப்பேன்.",
  "structuredRoman": "nāṉ kāpi kuṭipp-ēṉ.",
  "pronunciationRoman": "nāṉ kābi kuḍippēn.",
  "katakana": "ナーン カービ クディッペーン。",
  "meaningJa": "私はコーヒーを飲むつもりです。",
  "literalJapanese": "私＋コーヒー＋飲む・未来／意志・私",
  "morphemes": [
    {
      "surfaceTamil": "நான்",
      "gloss": "私"
    },
    {
      "surfaceTamil": "காபி",
      "gloss": "コーヒー"
    },
    {
      "surfaceTamil": "குடிப்பேன்",
      "analysis": "குடிப்ப- + -ேன்",
      "gloss": "飲むつもりです・私"
    }
  ],
  "grammarNote": "குடி の未来では குடிப்ப- が現れます。",
  "vocabulary": [
    "நான்",
    "காபி",
    "குடிப்பேன்"
  ],
  "audioGroup": "lesson07-bank"
}),
    make({
  "id": "l7-10",
  "targetTamil": "நான் நாளைக்கு வருவேன்.",
  "structuredRoman": "nāṉ nāḷai-kku varuv-ēṉ.",
  "pronunciationRoman": "nāṉ nāḷaikku varuvēn.",
  "katakana": "ナーン ナーライック ヴァルヴェーン。",
  "meaningJa": "私は明日来ます。",
  "literalJapanese": "私＋明日・時点＋来る・未来／意志・私",
  "morphemes": [
    {
      "surfaceTamil": "நான்",
      "gloss": "私"
    },
    {
      "surfaceTamil": "நாளைக்கு",
      "analysis": "நாளை + -க்கு",
      "gloss": "明日"
    },
    {
      "surfaceTamil": "வருவேன்",
      "analysis": "வருவ- + -ேன்",
      "gloss": "来ます・私"
    }
  ],
  "grammarNote": "வரு『来る』は未来で வருவ-。一つのテンプレートから全動詞を無照合生成しません。",
  "vocabulary": [
    "நான்",
    "நாளைக்கு",
    "வருவேன்"
  ],
  "audioGroup": "lesson07-bank"
})
  ];

  const patterns = [
    make({
  "id": "l7-form-paakkaren",
  "targetTamil": "பாக்கறேன்",
  "structuredRoman": "pākkaṟ-ēṉ",
  "pronunciationRoman": "pākkarēn",
  "katakana": "パーッカレーン",
  "meaningJa": "私は見ます／見ています",
  "literalJapanese": "現在＋一人称単数",
  "grammarNote": "末尾 -ேன் は一人称単数。",
  "vocabulary": [
    "பாக்கறேன்"
  ],
  "audioGroup": "lesson07-forms",
  "kind": "現在",
  "group": "பார் の三点",
  "note": "末尾 -ேன் は一人称単数。"
}),
    make({
  "id": "l7-form-paatten",
  "targetTamil": "பாத்தேன்",
  "structuredRoman": "pātt-ēṉ",
  "pronunciationRoman": "pāttēn",
  "katakana": "パーッテーン",
  "meaningJa": "私は見ました",
  "literalJapanese": "過去＋一人称単数",
  "grammarNote": "過去幹 பாத்த- を使う。",
  "vocabulary": [
    "பாத்தேன்"
  ],
  "audioGroup": "lesson07-forms",
  "kind": "過去",
  "group": "பார் の三点",
  "note": "過去幹 பாத்த- を使う。"
}),
    make({
  "id": "l7-form-paappen",
  "targetTamil": "பாப்பேன்",
  "structuredRoman": "pāpp-ēṉ",
  "pronunciationRoman": "pāppēn",
  "katakana": "パーッペーン",
  "meaningJa": "私は見るつもりです",
  "literalJapanese": "未来＋一人称単数",
  "grammarNote": "未来・意志の பாப்ப-。",
  "vocabulary": [
    "பாப்பேன்"
  ],
  "audioGroup": "lesson07-forms",
  "kind": "未来",
  "group": "பார் の三点",
  "note": "未来・意志の பாப்ப-。"
}),
    make({
  "id": "l7-form-poren",
  "targetTamil": "போறேன்",
  "structuredRoman": "pōṟ-ēṉ",
  "pronunciationRoman": "pōrēn",
  "katakana": "ポーレーン",
  "meaningJa": "私は行きます",
  "literalJapanese": "現在＋一人称単数",
  "grammarNote": "口語現在形。",
  "vocabulary": [
    "போறேன்"
  ],
  "audioGroup": "lesson07-forms",
  "kind": "現在",
  "group": "போ の三点",
  "note": "口語現在形。"
}),
    make({
  "id": "l7-form-ponen",
  "targetTamil": "போனேன்",
  "structuredRoman": "pōṉ-ēṉ",
  "pronunciationRoman": "pōnēn",
  "katakana": "ポーネーン",
  "meaningJa": "私は行きました",
  "literalJapanese": "過去＋一人称単数",
  "grammarNote": "過去幹 போன-。",
  "vocabulary": [
    "போனேன்"
  ],
  "audioGroup": "lesson07-forms",
  "kind": "過去",
  "group": "போ の三点",
  "note": "過去幹 போன-。"
}),
    make({
  "id": "l7-form-poven",
  "targetTamil": "போவேன்",
  "structuredRoman": "pōv-ēṉ",
  "pronunciationRoman": "pōvēn",
  "katakana": "ポーヴェーン",
  "meaningJa": "私は行くつもりです",
  "literalJapanese": "未来＋一人称単数",
  "grammarNote": "未来の -வ- 系。",
  "vocabulary": [
    "போவேன்"
  ],
  "audioGroup": "lesson07-forms",
  "kind": "未来",
  "group": "போ の三点",
  "note": "未来の -வ- 系。"
}),
    make({
  "id": "l7-form-kudikkaren",
  "targetTamil": "குடிக்கறேன்",
  "structuredRoman": "kuṭikkaṟ-ēṉ",
  "pronunciationRoman": "kuḍikkarēn",
  "katakana": "クディッカレーン",
  "meaningJa": "私は飲みます",
  "literalJapanese": "現在＋一人称単数",
  "grammarNote": "現在の完成形。",
  "vocabulary": [
    "குடிக்கறேன்"
  ],
  "audioGroup": "lesson07-forms",
  "kind": "現在",
  "group": "குடி の三点",
  "note": "現在の完成形。"
}),
    make({
  "id": "l7-form-kudiccen",
  "targetTamil": "குடிச்சேன்",
  "structuredRoman": "kuṭicc-ēṉ",
  "pronunciationRoman": "kuḍiccēn",
  "katakana": "クディッセーン",
  "meaningJa": "私は飲みました",
  "literalJapanese": "過去＋一人称単数",
  "grammarNote": "過去幹 குடிச்ச-。",
  "vocabulary": [
    "குடிச்சேன்"
  ],
  "audioGroup": "lesson07-forms",
  "kind": "過去",
  "group": "குடி の三点",
  "note": "過去幹 குடிச்ச-。"
}),
    make({
  "id": "l7-form-kudippen",
  "targetTamil": "குடிப்பேன்",
  "structuredRoman": "kuṭipp-ēṉ",
  "pronunciationRoman": "kuḍippēn",
  "katakana": "クディッペーン",
  "meaningJa": "私は飲むつもりです",
  "literalJapanese": "未来＋一人称単数",
  "grammarNote": "未来幹 குடிப்ப-。",
  "vocabulary": [
    "குடிப்பேன்"
  ],
  "audioGroup": "lesson07-forms",
  "kind": "未来",
  "group": "குடி の三点",
  "note": "未来幹 குடிப்ப-。"
}),
    make({
  "id": "l7-form-varuven",
  "targetTamil": "வருவேன்",
  "structuredRoman": "varuv-ēṉ",
  "pronunciationRoman": "varuvēn",
  "katakana": "ヴァルヴェーン",
  "meaningJa": "私は来ます",
  "literalJapanese": "未来＋一人称単数",
  "grammarNote": "வரு＋未来＋一人称。",
  "vocabulary": [
    "வருவேன்"
  ],
  "audioGroup": "lesson07-forms",
  "kind": "未来",
  "group": "別クラスを見る",
  "note": "வரு＋未来＋一人称。"
})
  ];

  window.TAMIL_LESSONS_V30 = window.TAMIL_LESSONS_V30 || [];
  window.TAMIL_LESSONS_V30.push(Object.freeze({
    id: "lesson07-verb-blueprint-v33",
    number: 7,
    navTitle: "動詞の設計図",
    title: "長い動詞を「意味・時間・人物」の順で読む",
    tamilTitle: "வினைச்சொல்லின் வடிவமைப்பு",
    deck: "பாக்கறேன்／பாத்தேன்／பாப்பேன் を並べ、右端 -ேன் と動詞ごとの時制幹を見分けます。全動詞を一つの規則で生成せず、頻出動詞の三点セットを作ります。",
    targets: Object.freeze([
  "動詞の核",
  "TAM／時制幹",
  "一人称 -ேன்",
  "活用クラス差",
  "表面形と分析の分離"
]),
    heroExample: examples[0],
    readSections: Object.freeze([
  {
    "kicker": "VERB BLUEPRINT",
    "heading": "動詞の右端から、人物・時間・意味へ戻る",
    "paragraphs": [
      "<span class=\"ta-inline\" lang=\"ta\">பாக்கறேன்</span>、<span class=\"ta-inline\" lang=\"ta\">பாத்தேன்</span>、<span class=\"ta-inline\" lang=\"ta\">பாப்பேன்</span> は、すべて最後の <strong>-ேன்</strong> が「私」を示します。",
      "その左側は現在・過去・未来で変わります。まず右端で人物を拾い、次に時間、最後に動詞の意味へ戻ると、長い活用形を読みやすくなります。"
    ],
    "caseMap": {
      "rows": [
        {
          "role": "意味の核",
          "targetForm": "பார்／பாக்க-",
          "pronunciation": "pār / pākk-",
          "kana": "パール／パーック",
          "exampleTa": "பாக்கறேன்",
          "exampleRoman": "pākkaṟ-ēṉ",
          "cue": "何をする動詞か"
        },
        {
          "role": "時間・TAM",
          "targetForm": "現在形／過去幹／未来幹",
          "pronunciation": "varies by class",
          "kana": "動詞ごとに確認",
          "exampleTa": "பாத்தேன் / பாப்பேன்",
          "exampleRoman": "pātt-ēṉ / pāpp-ēṉ",
          "cue": "いつ・どの見方か"
        },
        {
          "role": "人物",
          "targetForm": "-ேன்",
          "pronunciation": "-ēn",
          "kana": "-エーン",
          "exampleTa": "பாக்கறேன்",
          "exampleRoman": "pākkaṟ-ēṉ",
          "cue": "一人称単数"
        }
      ]
    }
  },
  {
    "kicker": "SURFACE FIRST",
    "heading": "構造表示に、表面にない語幹や接辞を足さない",
    "paragraphs": [
      "口語綴り <span class=\"ta-inline\" lang=\"ta\">பாக்கறேன்</span> の structuredRoman は <strong>pākkaṟ-ēṉ</strong> とし、ハイフンを除けば厳密文字転写と一致させます。",
      "より深い機能分析は morphemes や underlyingAnalysis に置きます。書記形 பார்க்கிறேன் を、口語表面形の中へ混ぜません。"
    ],
    "formula": {
      "label": "私は見ます",
      "slots": [
        "பாக்கற-",
        "-ேன்",
        "பாக்கறேன்"
      ],
      "note": "表面の動詞幹 → 一人称語尾 → 完成形"
    }
  },
  {
    "kicker": "CLASS DIFFERENCE",
    "heading": "過去・未来は、動詞クラスごとの道筋を覚える",
    "paragraphs": [
      "பார் 系は பாத்தேன்／பாப்பேன்、போ 系は போனேன்／போவேன்、குடி 系は குடிச்சேன்／குடிப்பேன் です。",
      "「過去接辞を一つ貼る」方式ではなく、頻出動詞を現在・過去・未来の三点セットで反復します。"
    ],
    "note": {
      "tone": "blue",
      "title": "発明禁止",
      "body": "確認済みの完成形からのみ教材を作り、未知動詞の過去・未来を機械的に生成しません。"
    }
  },
  {
    "kicker": "SHORT READING",
    "heading": "三つの動詞で、設計図を横断する",
    "paragraphs": [
      "見る・行く・飲むの完成形を読み、共通する人物語尾と異なる時制幹を探します。",
      "<span class=\"ta-inline\" lang=\"ta\">நான் படம் பாக்கறேன்.</span><br><span class=\"ta-inline\" lang=\"ta\">நான் வீட்டுக்கு போனேன்.</span><br><span class=\"ta-inline\" lang=\"ta\">நான் காபி குடிப்பேன்.</span>"
    ],
    "miniReading": {
      "intro": "末尾 -ேன் を固定し、中央の形だけを比べます。",
      "ids": [
        "l7-01",
        "l7-05",
        "l7-09"
      ]
    }
  }
]),
    formConfig: Object.freeze({
      mode: "grammar",
      title: "三つの動詞を、現在・過去・未来で束ねる",
      intro: "பார்、போ、குடி の完成形を三点セットで並べ、人物語尾とクラス差を分離します。",
      patterns: Object.freeze(patterns),
      checkpoint: "பாக்கறேன்／பாத்தேன்／பாப்பேன் に共通する -ேன் と、போனேன்・குடிச்சேன் が別の過去幹を使う理由を説明できれば合格です。"
    }),
    examples: Object.freeze(examples),
    quiz: Object.freeze([
  {
    "q": "பாக்கறேன் の右端 -ேன் は何を示す？",
    "options": [
      "一人称単数",
      "過去時制",
      "目的語",
      "場所"
    ],
    "answer": 0,
    "feedback": "-ேன் は「私」。時制はその左側の動詞形から読みます。",
    "tags": [
      "正解",
      "TAM",
      "格",
      "場所"
    ]
  },
  {
    "q": "「私は映画を見ました」に合う実在形は？",
    "options": [
      "பாத்தேன்",
      "பாக்கறேன்",
      "பாப்பேன்",
      "போனேன்"
    ],
    "answer": 0,
    "feedback": "பாத்தேன் は பார் 系の一人称過去です。",
    "tags": [
      "正解",
      "現在",
      "未来",
      "別動詞"
    ]
  },
  {
    "q": "போ「行く」の一人称過去は？",
    "options": [
      "போனேன்",
      "பாத்தேன்",
      "குடிச்சேன்",
      "போவேன்"
    ],
    "answer": 0,
    "feedback": "போ の過去幹は போன-。ほかの動詞の過去幹を流用しません。",
    "tags": [
      "正解",
      "別クラス",
      "別クラス",
      "未来"
    ]
  },
  {
    "q": "structuredRoman の原則に合うものは？",
    "options": [
      "pākkaṟ-ēṉ",
      "pār-kiṟ-ēṉ",
      "pākka-v-ēṉ",
      "pātt-ōm"
    ],
    "answer": 0,
    "feedback": "口語表面形 பாக்கறேன் を保存し、表面にない書記語幹や未来標識を足しません。",
    "tags": [
      "正解",
      "表面外要素",
      "TAM混同",
      "人称混同"
    ]
  },
  {
    "q": "未知の動詞の過去形を作るときの方針は？",
    "options": [
      "資料で完成形を確認する",
      "பாத்தேன் の型を全動詞へ貼る",
      "日本語訳から推測する",
      "カナから逆生成する"
    ],
    "answer": 0,
    "feedback": "活用クラス差があるため、検証済み完成形を使います。",
    "tags": [
      "正解",
      "過剰一般化",
      "L1干渉",
      "逆生成"
    ]
  }
])
  }));
})();

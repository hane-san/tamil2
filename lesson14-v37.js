(() => {
  "use strict";

  const { entry: E, confidence: C } = window.TAMIL_V30;
  const SOURCES = [
  "TAMIL-INTEGRATED-v2.0-rc.1 §§23-25,31-32",
  "PREDICATE-ENGINE-v1.1 §§1.2,3,4",
  "TAMIL-GRAMMAR-GARDEN Lesson 14",
  "SCHIFFMAN-SPOKEN-TAMIL: person-number-gender agreement"
];
  const make = input => E({ ...input, sourceRefs: SOURCES, confidence: input.confidence ?? C("B", "B", "C", "B") });

  const examples = [
  {
    "id": "l14-01",
    "targetTamil": "நான் சென்னைக்கு போறேன்.",
    "structuredRoman": "nāṉ ceṉṉai-kku pōṟ-ēṉ.",
    "pronunciationRoman": "nān sennaikku pōrēn.",
    "katakana": "ナーン センナイック ポーレーン。",
    "meaningJa": "私はチェンナイへ行きます。",
    "literalJapanese": "私＋チェンナイへ＋行く・現在・私",
    "morphemes": [
      {
        "surfaceTamil": "நான்",
        "gloss": "私"
      },
      {
        "surfaceTamil": "சென்னைக்கு",
        "gloss": "チェンナイへ"
      },
      {
        "surfaceTamil": "போறேன்",
        "gloss": "行きます・私"
      }
    ],
    "grammarNote": "右端 -ேன் が一人称単数を示します。",
    "vocabulary": [
      "நான்",
      "சென்னைக்கு",
      "போறேன்"
    ],
    "audioGroup": "lesson14-core",
    "featured": true,
    "counterparts": [
      {
        "primaryRegister": "LT-WR",
        "targetTamil": "நான் சென்னைக்கு போகிறேன்.",
        "note": "現代文語・保守的表記"
      }
    ]
  },
  {
    "id": "l14-02",
    "targetTamil": "நாங்க போறோம்.",
    "structuredRoman": "nāṅka pōṟ-ōm.",
    "pronunciationRoman": "nānga pōrōm.",
    "katakana": "ナーンガ ポーローム。",
    "meaningJa": "私たちは行きます（聞き手を含まない）。",
    "literalJapanese": "私たち・除外＋行く・現在・私たち",
    "morphemes": [
      {
        "surfaceTamil": "நாங்க",
        "gloss": "私たち・聞き手を含まない"
      },
      {
        "surfaceTamil": "போறோம்",
        "gloss": "行きます・私たち"
      }
    ],
    "grammarNote": "நாங்க は聞き手を含まない「私たち」。動詞末尾は -ோம் です。",
    "vocabulary": [
      "நாங்க",
      "போறோம்"
    ],
    "audioGroup": "lesson14-core",
    "featured": true
  },
  {
    "id": "l14-03",
    "targetTamil": "நாம போறோம்.",
    "structuredRoman": "nāma pōṟ-ōm.",
    "pronunciationRoman": "nāma pōrōm.",
    "katakana": "ナーマ ポーローム。",
    "meaningJa": "私たちは行きます（聞き手を含む）。",
    "literalJapanese": "私たち・包括＋行く・現在・私たち",
    "morphemes": [
      {
        "surfaceTamil": "நாம",
        "gloss": "私たち・聞き手を含む"
      },
      {
        "surfaceTamil": "போறோம்",
        "gloss": "行きます・私たち"
      }
    ],
    "grammarNote": "நாம は聞き手を含む「私たち」。語尾は நாங்க と同じ -ோம் なので、代名詞で範囲を読みます。",
    "vocabulary": [
      "நாம",
      "போறோம்"
    ],
    "audioGroup": "lesson14-bank",
    "featured": false
  },
  {
    "id": "l14-04",
    "targetTamil": "நீ போற.",
    "structuredRoman": "nī pōṟ-a.",
    "pronunciationRoman": "nī pōra.",
    "katakana": "ニー ポーラ。",
    "meaningJa": "きみは行きます。",
    "literalJapanese": "きみ＋行く・現在・親しい単数",
    "morphemes": [
      {
        "surfaceTamil": "நீ",
        "gloss": "きみ・親しい単数"
      },
      {
        "surfaceTamil": "போற",
        "gloss": "行きます・親しい二人称単数"
      }
    ],
    "grammarNote": "親しい一人への形です。相手との関係によってはぞんざいに聞こえるため、旅行では முதன்மையாக நீங்க を使います。",
    "vocabulary": [
      "நீ",
      "போற"
    ],
    "audioGroup": "lesson14-bank",
    "featured": false,
    "styleTags": [
      "familiar"
    ],
    "confidence": {
      "registerNaturalness": "C"
    }
  },
  {
    "id": "l14-05",
    "targetTamil": "நீங்க சென்னைக்கு போறீங்க.",
    "structuredRoman": "nīṅka ceṉṉai-kku pōṟ-īṅka.",
    "pronunciationRoman": "nīnga sennaikku pōrīnga.",
    "katakana": "ニーンガ センナイック ポーリーンガ。",
    "meaningJa": "あなたは／あなたたちはチェンナイへ行きます。",
    "literalJapanese": "あなた／あなたたち＋チェンナイへ＋行く・丁寧／複数",
    "morphemes": [
      {
        "surfaceTamil": "நீங்க",
        "gloss": "あなた／あなたたち"
      },
      {
        "surfaceTamil": "சென்னைக்கு",
        "gloss": "チェンナイへ"
      },
      {
        "surfaceTamil": "போறீங்க",
        "gloss": "行きます・丁寧／複数"
      }
    ],
    "grammarNote": "旅行や初対面で中心にする二人称です。右端 -ீங்க が丁寧単数・複数を示します。",
    "vocabulary": [
      "நீங்க",
      "சென்னைக்கு",
      "போறீங்க"
    ],
    "audioGroup": "lesson14-core",
    "featured": true,
    "counterparts": [
      {
        "primaryRegister": "LT-WR",
        "targetTamil": "நீங்கள் சென்னைக்கு போகிறீர்கள்.",
        "note": "現代文語・保守的表記"
      }
    ]
  },
  {
    "id": "l14-06",
    "targetTamil": "அவன் போறான்.",
    "structuredRoman": "avaṉ pōṟ-āṉ.",
    "pronunciationRoman": "avan pōrān.",
    "katakana": "アヴァン ポーラーン。",
    "meaningJa": "彼は行きます。",
    "literalJapanese": "彼＋行く・現在・男性単数",
    "morphemes": [
      {
        "surfaceTamil": "அவன்",
        "gloss": "彼・男性単数"
      },
      {
        "surfaceTamil": "போறான்",
        "gloss": "行きます・男性単数"
      }
    ],
    "grammarNote": "右端 -ான் が敬意を特に示さない男性単数です。",
    "vocabulary": [
      "அவன்",
      "போறான்"
    ],
    "audioGroup": "lesson14-bank",
    "featured": false
  },
  {
    "id": "l14-07",
    "targetTamil": "அவள் போறா.",
    "structuredRoman": "avaḷ pōṟ-ā.",
    "pronunciationRoman": "avaḷ pōrā.",
    "katakana": "アヴァル ポーラー。",
    "meaningJa": "彼女は行きます。",
    "literalJapanese": "彼女＋行く・現在・女性単数",
    "morphemes": [
      {
        "surfaceTamil": "அவள்",
        "gloss": "彼女・女性単数"
      },
      {
        "surfaceTamil": "போறா",
        "gloss": "行きます・女性単数"
      }
    ],
    "grammarNote": "口語の女性単数は -ா。書記形 -ாள் と同じものとして一文字置換しません。",
    "vocabulary": [
      "அவள்",
      "போறா"
    ],
    "audioGroup": "lesson14-bank",
    "featured": false,
    "counterparts": [
      {
        "primaryRegister": "LT-WR",
        "targetTamil": "அவள் போகிறாள்.",
        "note": "現代文語・保守的表記"
      }
    ]
  },
  {
    "id": "l14-08",
    "targetTamil": "அவர் சென்னைக்கு போறார்.",
    "structuredRoman": "avar ceṉṉai-kku pōṟ-ār.",
    "pronunciationRoman": "avar sennaikku pōrār.",
    "katakana": "アヴァル センナイック ポーラール。",
    "meaningJa": "その方はチェンナイへ行きます。",
    "literalJapanese": "その方＋チェンナイへ＋行く・敬意",
    "morphemes": [
      {
        "surfaceTamil": "அவர்",
        "gloss": "その方・敬意"
      },
      {
        "surfaceTamil": "சென்னைக்கு",
        "gloss": "チェンナイへ"
      },
      {
        "surfaceTamil": "போறார்",
        "gloss": "行きます・敬意"
      }
    ],
    "grammarNote": "性別を前面に出さず、一人の人へ敬意を示す中立的な形です。",
    "vocabulary": [
      "அவர்",
      "சென்னைக்கு",
      "போறார்"
    ],
    "audioGroup": "lesson14-core",
    "featured": true,
    "counterparts": [
      {
        "primaryRegister": "LT-WR",
        "targetTamil": "அவர் சென்னைக்கு போகிறார்.",
        "note": "現代文語・保守的表記"
      }
    ]
  },
  {
    "id": "l14-09",
    "targetTamil": "அவங்க போறாங்க.",
    "structuredRoman": "avaṅka pōṟ-āṅka.",
    "pronunciationRoman": "avanga pōrānga.",
    "katakana": "アヴァンガ ポーラーンガ。",
    "meaningJa": "その人たちは行きます／その方は行きます。",
    "literalJapanese": "その人たち／その方＋行く・現在・複数／敬意",
    "morphemes": [
      {
        "surfaceTamil": "அவங்க",
        "gloss": "その人たち／その方"
      },
      {
        "surfaceTamil": "போறாங்க",
        "gloss": "行きます・人間複数／会話的敬意"
      }
    ],
    "grammarNote": "会話では人間複数と敬意単数の両方になり得ます。人数は文脈から判断します。",
    "vocabulary": [
      "அவங்க",
      "போறாங்க"
    ],
    "audioGroup": "lesson14-core",
    "featured": true,
    "counterparts": [
      {
        "primaryRegister": "LT-WR",
        "targetTamil": "அவர்கள் போகிறார்கள்.",
        "note": "人間複数の現代文語・保守的表記"
      }
    ]
  },
  {
    "id": "l14-10",
    "targetTamil": "நண்பர்கள் வர்றாங்க.",
    "structuredRoman": "naṇparkaḷ varṟ-āṅka.",
    "pronunciationRoman": "naṇbargaḷ varrānga.",
    "katakana": "ナンバルガル ヴァッラーンガ。",
    "meaningJa": "友達たちは来ます。",
    "literalJapanese": "友達・複数＋来る・現在・人間複数",
    "morphemes": [
      {
        "surfaceTamil": "நண்பர்கள்",
        "gloss": "友達たち・人間複数"
      },
      {
        "surfaceTamil": "வர்றாங்க",
        "gloss": "来ます・人間複数"
      }
    ],
    "grammarNote": "主語が明示的な人間複数なら、-ாங்க を人数の一致として読みます。",
    "vocabulary": [
      "நண்பர்கள்",
      "வர்றாங்க"
    ],
    "audioGroup": "lesson14-bank",
    "featured": false
  },
  {
    "id": "l14-11",
    "targetTamil": "பஸ் சென்னைக்கு போகுது.",
    "structuredRoman": "pas ceṉṉai-kku pōku-tu.",
    "pronunciationRoman": "bas sennaikku pōgudu.",
    "katakana": "バス センナイック ポーグドゥ。",
    "meaningJa": "バスはチェンナイへ行きます。",
    "literalJapanese": "バス＋チェンナイへ＋行く・非人間",
    "morphemes": [
      {
        "surfaceTamil": "பஸ்",
        "gloss": "バス・非人間"
      },
      {
        "surfaceTamil": "சென்னைக்கு",
        "gloss": "チェンナイへ"
      },
      {
        "surfaceTamil": "போகுது",
        "gloss": "行きます・非人間"
      }
    ],
    "grammarNote": "非人間は人間三人称とは別のレーンです。現在の代表形は -து を含む போகுது。",
    "vocabulary": [
      "பஸ்",
      "சென்னைக்கு",
      "போகுது"
    ],
    "audioGroup": "lesson14-core",
    "featured": true,
    "counterparts": [
      {
        "primaryRegister": "LT-WR",
        "targetTamil": "பஸ் சென்னைக்கு போகிறது.",
        "note": "現代文語・保守的表記"
      }
    ]
  },
  {
    "id": "l14-12",
    "targetTamil": "பஸ்கள் போகுது.",
    "structuredRoman": "pas-kaḷ pōku-tu.",
    "pronunciationRoman": "basgaḷ pōgudu.",
    "katakana": "バスガル ポーグドゥ。",
    "meaningJa": "バスは複数台、走っています。",
    "literalJapanese": "バス・複数＋行く・非人間",
    "morphemes": [
      {
        "surfaceTamil": "பஸ்கள்",
        "gloss": "バス・複数"
      },
      {
        "surfaceTamil": "போகுது",
        "gloss": "行きます・非人間"
      }
    ],
    "grammarNote": "標準口語では非人間複数でも、動詞が非人間単数と同じ形になることがあります。名詞の複数を見ます。",
    "vocabulary": [
      "பஸ்கள்",
      "போகுது"
    ],
    "audioGroup": "lesson14-bank",
    "featured": false
  }
].map(make);

  const patterns = [
  {
    "id": "l14-form-naan",
    "targetTamil": "நான் போறேன்",
    "structuredRoman": "nāṉ pōṟ-ēṉ",
    "pronunciationRoman": "nān pōrēn",
    "katakana": "ナーン ポーレーン",
    "meaningJa": "私は行きます",
    "literalJapanese": "私＋現在＋一人称単数",
    "grammarNote": "-ேன் は一人称単数。",
    "vocabulary": [
      "நான் போறேன்"
    ],
    "audioGroup": "l14-forms",
    "kind": "一人称単数",
    "group": "話し手",
    "note": "-ேன் は一人称単数。"
  },
  {
    "id": "l14-form-naanga",
    "targetTamil": "நாங்க போறோம்",
    "structuredRoman": "nāṅka pōṟ-ōm",
    "pronunciationRoman": "nānga pōrōm",
    "katakana": "ナーンガ ポーローム",
    "meaningJa": "私たちは行きます（除外）",
    "literalJapanese": "私たち・聞き手を含まない＋一人称複数",
    "grammarNote": "-ோம் は一人称複数。நாங்க は聞き手を含まない。",
    "vocabulary": [
      "நாங்க போறோம்"
    ],
    "audioGroup": "l14-forms",
    "kind": "一人称複数・除外",
    "group": "話し手",
    "note": "-ோம் は一人称複数。நாங்க は聞き手を含まない。"
  },
  {
    "id": "l14-form-naama",
    "targetTamil": "நாம போறோம்",
    "structuredRoman": "nāma pōṟ-ōm",
    "pronunciationRoman": "nāma pōrōm",
    "katakana": "ナーマ ポーローム",
    "meaningJa": "私たちは行きます（包括）",
    "literalJapanese": "私たち・聞き手を含む＋一人称複数",
    "grammarNote": "語尾は同じ -ோம்。参加範囲は நாம で示す。",
    "vocabulary": [
      "நாம போறோம்"
    ],
    "audioGroup": "l14-forms",
    "kind": "一人称複数・包括",
    "group": "話し手",
    "note": "語尾は同じ -ோம்。参加範囲は நாம で示す。"
  },
  {
    "id": "l14-form-nii",
    "targetTamil": "நீ போற",
    "structuredRoman": "nī pōṟ-a",
    "pronunciationRoman": "nī pōra",
    "katakana": "ニー ポーラ",
    "meaningJa": "きみは行きます",
    "literalJapanese": "親しい二人称単数",
    "grammarNote": "親しい相手向け。旅行では無標の初手にしない。",
    "vocabulary": [
      "நீ போற"
    ],
    "audioGroup": "l14-forms",
    "kind": "親しい二人称",
    "group": "聞き手",
    "note": "親しい相手向け。旅行では無標の初手にしない。"
  },
  {
    "id": "l14-form-niinga",
    "targetTamil": "நீங்க போறீங்க",
    "structuredRoman": "nīṅka pōṟ-īṅka",
    "pronunciationRoman": "nīnga pōrīnga",
    "katakana": "ニーンガ ポーリーンガ",
    "meaningJa": "あなた／あなたたちは行きます",
    "literalJapanese": "丁寧単数・二人称複数",
    "grammarNote": "-ீங்க は丁寧単数・複数。旅行の基本形。",
    "vocabulary": [
      "நீங்க போறீங்க"
    ],
    "audioGroup": "l14-forms",
    "kind": "丁寧・複数二人称",
    "group": "聞き手",
    "note": "-ீங்க は丁寧単数・複数。旅行の基本形。"
  },
  {
    "id": "l14-form-avan",
    "targetTamil": "அவன் போறான்",
    "structuredRoman": "avaṉ pōṟ-āṉ",
    "pronunciationRoman": "avan pōrān",
    "katakana": "アヴァン ポーラーン",
    "meaningJa": "彼は行きます",
    "literalJapanese": "男性単数",
    "grammarNote": "-ான் は敬意を特に示さない男性単数。",
    "vocabulary": [
      "அவன் போறான்"
    ],
    "audioGroup": "l14-forms",
    "kind": "男性単数",
    "group": "人間三人称",
    "note": "-ான் は敬意を特に示さない男性単数。"
  },
  {
    "id": "l14-form-aval",
    "targetTamil": "அவள் போறா",
    "structuredRoman": "avaḷ pōṟ-ā",
    "pronunciationRoman": "avaḷ pōrā",
    "katakana": "アヴァル ポーラー",
    "meaningJa": "彼女は行きます",
    "literalJapanese": "女性単数",
    "grammarNote": "口語の女性単数は -ா。",
    "vocabulary": [
      "அவள் போறா"
    ],
    "audioGroup": "l14-forms",
    "kind": "女性単数",
    "group": "人間三人称",
    "note": "口語の女性単数は -ா。"
  },
  {
    "id": "l14-form-avar",
    "targetTamil": "அவர் போறார்",
    "structuredRoman": "avar pōṟ-ār",
    "pronunciationRoman": "avar pōrār",
    "katakana": "アヴァル ポーラール",
    "meaningJa": "その方は行きます",
    "literalJapanese": "敬意単数",
    "grammarNote": "-ார் は一人への敬意を明示する。",
    "vocabulary": [
      "அவர் போறார்"
    ],
    "audioGroup": "l14-forms",
    "kind": "敬意単数",
    "group": "人間三人称",
    "note": "-ார் は一人への敬意を明示する。"
  },
  {
    "id": "l14-form-avanga",
    "targetTamil": "அவங்க போறாங்க",
    "structuredRoman": "avaṅka pōṟ-āṅka",
    "pronunciationRoman": "avanga pōrānga",
    "katakana": "アヴァンガ ポーラーンガ",
    "meaningJa": "その人たち／その方は行きます",
    "literalJapanese": "人間複数／会話的敬意",
    "grammarNote": "-ாங்க は人間複数。会話では敬意単数にもなる。",
    "vocabulary": [
      "அவங்க போறாங்க"
    ],
    "audioGroup": "l14-forms",
    "kind": "人間複数・敬意",
    "group": "人間三人称",
    "note": "-ாங்க は人間複数。会話では敬意単数にもなる。"
  },
  {
    "id": "l14-form-bus",
    "targetTamil": "பஸ் போகுது",
    "structuredRoman": "pas pōku-tu",
    "pronunciationRoman": "bas pōgudu",
    "katakana": "バス ポーグドゥ",
    "meaningJa": "バスは行きます",
    "literalJapanese": "非人間",
    "grammarNote": "人間の -ான்/-ா/-ார்/-ாங்க と別レーン。",
    "vocabulary": [
      "பஸ் போகுது"
    ],
    "audioGroup": "l14-forms",
    "kind": "非人間",
    "group": "非人間",
    "note": "人間の -ான்/-ா/-ார்/-ாங்க と別レーン。"
  }
].map(make);

  const lesson = {
  "id": "lesson14-v37",
  "number": 14,
  "navTitle": "全人称・数・性・敬意",
  "title": "動詞の最後から、人物・数・性・敬意を読み戻す",
  "tamilTitle": "-ேன், -ீங்க, -ான், -ா, -ார், -ாங்க, -து",
  "deck": "現在形の骨格を固定し、話し手・聞き手・人間三人称・非人間で右端がどう変わるかを比べます。",
  "targets": [
    "一人称単数・複数",
    "丁寧な二人称",
    "人間三人称",
    "敬意と人間複数",
    "非人間"
  ],
  "heroExample": examples[0],
  "criticalPoints": [
    "時制を固定し、<span class=\"ta-inline\" lang=\"ta\">-ேன் / -ீங்க / -ான் / -ா / -ார் / -ாங்க</span> <span class=\"roman-inline\">(-ēṉ / -īṅka / -āṉ / -ā / -ār / -āṅka)</span> の右端だけを比較する。",
    "旅行の二人称は <span class=\"ta-inline\" lang=\"ta\">நீங்க</span> <span class=\"roman-inline\">(nīṅka)</span>＋<span class=\"ta-inline\" lang=\"ta\">-ீங்க</span> <span class=\"roman-inline\">(-īṅka)</span> を中心にし、親しい <span class=\"ta-inline\" lang=\"ta\">நீ</span> <span class=\"roman-inline\">(nī)</span> は相手との距離を選ぶ。",
    "<span class=\"ta-inline\" lang=\"ta\">அவங்க</span> <span class=\"roman-inline\">(avaṅka)</span>＋<span class=\"ta-inline\" lang=\"ta\">-ாங்க</span> <span class=\"roman-inline\">(-āṅka)</span> は複数にも敬意単数にもなり得る。非人間は <span class=\"ta-inline\" lang=\"ta\">போகுது</span> <span class=\"roman-inline\">(pōku-tu)</span> の別レーン。"
  ],
  "readSections": [
    {
      "kicker": "まず結論",
      "heading": "時制を固定し、動詞の最後だけで人物・数・性・敬意を読む",
      "takeaway": "<span class=\"ta-inline\" lang=\"ta\">-ேன்</span> <span class=\"roman-inline\">(-ēṉ)</span> は私、<span class=\"ta-inline\" lang=\"ta\">-ீங்க</span> <span class=\"roman-inline\">(-īṅka)</span> は丁寧なあなた／複数、<span class=\"ta-inline\" lang=\"ta\">-ான்</span> <span class=\"roman-inline\">(-āṉ)</span>・<span class=\"ta-inline\" lang=\"ta\">-ா</span> <span class=\"roman-inline\">(-ā)</span> は男性・女性、<span class=\"ta-inline\" lang=\"ta\">-ார்</span> <span class=\"roman-inline\">(-ār)</span> は敬意、<span class=\"ta-inline\" lang=\"ta\">-ாங்க</span> <span class=\"roman-inline\">(-āṅka)</span> は人間複数・会話的敬意です。",
      "paragraphs": [
        "第14課では現在形を固定し、<span class=\"ta-inline\" lang=\"ta\">போறேன்</span> <span class=\"roman-inline\">(pōṟ-ēṉ)</span>・<span class=\"ta-inline\" lang=\"ta\">போறீங்க</span> <span class=\"roman-inline\">(pōṟ-īṅka)</span>・<span class=\"ta-inline\" lang=\"ta\">போறான்</span> <span class=\"roman-inline\">(pōṟ-āṉ)</span> の右端だけを比べます。語幹と時制を同時に変えないので、人物語尾が見えます。",
        "非人間は別レーンです。<span class=\"ta-inline\" lang=\"ta\">பஸ் போகுது</span> <span class=\"roman-inline\">(pas pōku-tu)</span> のように、人間三人称の語尾を機械的に付けません。"
      ]
    },
    {
      "kicker": "形を読む",
      "heading": "話し手・聞き手・人間三人称・非人間の四群へ分ける",
      "takeaway": "<span class=\"ta-inline\" lang=\"ta\">நான் / நாங்க / நாம</span> <span class=\"roman-inline\">(nāṉ / nāṅka / nāma)</span>、<span class=\"ta-inline\" lang=\"ta\">நீ / நீங்க</span> <span class=\"roman-inline\">(nī / nīṅka)</span>、<span class=\"ta-inline\" lang=\"ta\">அவன் / அவள் / அவர் / அவங்க</span> <span class=\"roman-inline\">(avaṉ / avaḷ / avar / avaṅka)</span>、非人間の順で整理します。",
      "paragraphs": [
        "一人称は <span class=\"ta-inline\" lang=\"ta\">போறேன்</span> <span class=\"roman-inline\">(pōṟ-ēṉ)</span> と <span class=\"ta-inline\" lang=\"ta\">போறோம்</span> <span class=\"roman-inline\">(pōṟ-ōm)</span>。二人称は親しい <span class=\"ta-inline\" lang=\"ta\">நீ போற</span> <span class=\"roman-inline\">(nī pōṟ-a)</span> と、丁寧・複数の <span class=\"ta-inline\" lang=\"ta\">நீங்க போறீங்க</span> <span class=\"roman-inline\">(nīṅka pōṟ-īṅka)</span> を分けます。",
        "人間三人称は <span class=\"ta-inline\" lang=\"ta\">போறான்</span> <span class=\"roman-inline\">(pōṟ-āṉ)</span>・<span class=\"ta-inline\" lang=\"ta\">போறா</span> <span class=\"roman-inline\">(pōṟ-ā)</span>・<span class=\"ta-inline\" lang=\"ta\">போறார்</span> <span class=\"roman-inline\">(pōṟ-ār)</span>・<span class=\"ta-inline\" lang=\"ta\">போறாங்க</span> <span class=\"roman-inline\">(pōṟ-āṅka)</span>。同じ現在の骨格でも、右端が主体の扱いを変えます。"
      ]
    },
    {
      "kicker": "なぜ？",
      "heading": "主語を省いても語尾が残るが、語尾だけで全部は決まらない",
      "takeaway": "<span class=\"ta-inline\" lang=\"ta\">போறீங்க</span> <span class=\"roman-inline\">(pōṟ-īṅka)</span> だけでも「あなた／あなたたち」が読めますが、<span class=\"ta-inline\" lang=\"ta\">போறாங்க</span> <span class=\"roman-inline\">(pōṟ-āṅka)</span> は複数か敬意単数かを文脈で決めます。",
      "paragraphs": [
        "日本語は主語を省くと人物をほぼ文脈へ預けます。タミル語では有限動詞の語尾にも人物情報が残るため、<span class=\"ta-inline\" lang=\"ta\">போறேன்</span> <span class=\"roman-inline\">(pōṟ-ēṉ)</span> を聞けば一人称だと分かります。",
        "ただし一対一ではありません。<span class=\"ta-inline\" lang=\"ta\">அவங்க</span> <span class=\"roman-inline\">(avaṅka)</span>＋<span class=\"ta-inline\" lang=\"ta\">-ாங்க</span> <span class=\"roman-inline\">(-āṅka)</span> は「その人たち」にも、会話で一人の「その方」にも使われます。人数と敬意は場面から補います。"
      ]
    },
    {
      "kicker": "実際に使う",
      "heading": "旅行では நீங்க と அவர் を安全な初手にする",
      "takeaway": "初対面の相手には <span class=\"ta-inline\" lang=\"ta\">நீங்க</span> <span class=\"roman-inline\">(nīṅka)</span>＋<span class=\"ta-inline\" lang=\"ta\">-ீங்க</span> <span class=\"roman-inline\">(-īṅka)</span>、一人の第三者へ敬意を示すなら <span class=\"ta-inline\" lang=\"ta\">அவர்</span> <span class=\"roman-inline\">(avar)</span>＋<span class=\"ta-inline\" lang=\"ta\">-ார்</span> <span class=\"roman-inline\">(-ār)</span> を中心にします。",
      "paragraphs": [
        "<span class=\"ta-inline\" lang=\"ta\">நீங்க சென்னைக்கு போறீங்க</span> <span class=\"roman-inline\">(nīṅka ceṉṉai-kku pōṟ-īṅka)</span> は「あなたはチェンナイへ行きます」。親しい <span class=\"ta-inline\" lang=\"ta\">நீ போற</span> <span class=\"roman-inline\">(nī pōṟ-a)</span> は正しい形でも、相手との距離を選びます。",
        "<span class=\"ta-inline\" lang=\"ta\">அவர் சென்னைக்கு போறார்</span> <span class=\"roman-inline\">(avar ceṉṉai-kku pōṟ-ār)</span> は性別を前面に出さず「その方」と言えます。映画の会話で <span class=\"ta-inline\" lang=\"ta\">அவங்க போறாங்க</span> <span class=\"roman-inline\">(avaṅka pōṟ-āṅka)</span> が一人を指しても、誤文と決めつけません。"
      ]
    },
    {
      "kicker": "混ぜない",
      "heading": "நாங்க と நாம、அவர் と அவங்க、人間と非人間を同じ軸にしない",
      "takeaway": "<span class=\"ta-inline\" lang=\"ta\">நாங்க</span> <span class=\"roman-inline\">(nāṅka)</span> は聞き手を除き、<span class=\"ta-inline\" lang=\"ta\">நாம</span> <span class=\"roman-inline\">(nāma)</span> は含みます。どちらも動詞は <span class=\"ta-inline\" lang=\"ta\">-ோம்</span> <span class=\"roman-inline\">(-ōm)</span> なので、代名詞を見ます。",
      "paragraphs": [
        "<span class=\"ta-inline\" lang=\"ta\">அவர் போறார்</span> <span class=\"roman-inline\">(avar pōṟ-ār)</span> は一人への敬意を明示し、<span class=\"ta-inline\" lang=\"ta\">அவங்க போறாங்க</span> <span class=\"roman-inline\">(avaṅka pōṟ-āṅka)</span> は人間複数または会話的な敬意単数です。正しい別形を一律に誤り扱いしません。",
        "非人間複数でも、標準口語では <span class=\"ta-inline\" lang=\"ta\">பஸ்கள் போகுது</span> <span class=\"roman-inline\">(pas-kaḷ pōku-tu)</span> のように動詞が単数と同じ形になることがあります。人間複数の <span class=\"ta-inline\" lang=\"ta\">-ாங்க</span> <span class=\"roman-inline\">(-āṅka)</span> を自動で付けません。"
      ],
      "note": {
        "tone": "pink",
        "title": "この課の最重要ミス",
        "body": "<span class=\"ta-inline\" lang=\"ta\">அவங்க</span> <span class=\"roman-inline\">(avaṅka)</span> を常に複数、<span class=\"ta-inline\" lang=\"ta\">நீ</span> <span class=\"roman-inline\">(nī)</span> を誰にでも使える中立形だと思わない。人数と距離を場面で確認します。"
      }
    },
    {
      "kicker": "3文で復習",
      "heading": "同じ行き先で、あなた・その方・バスの語尾を比べる",
      "takeaway": "行き先 <span class=\"ta-inline\" lang=\"ta\">சென்னைக்கு</span> <span class=\"roman-inline\">(ceṉṉai-kku)</span> を固定し、右端を <span class=\"ta-inline\" lang=\"ta\">-ீங்க / -ார் / -து</span> <span class=\"roman-inline\">(-īṅka / -ār / -tu)</span> と読み分けます。",
      "paragraphs": [
        "<span class=\"ta-inline\" lang=\"ta\">நீங்க சென்னைக்கு போறீங்க.</span> <span class=\"roman-inline\">(nīṅka ceṉṉai-kku pōṟ-īṅka.)</span><br><span class=\"reading-ja\">あなたはチェンナイへ行きます。</span><br><br><span class=\"ta-inline\" lang=\"ta\">அவர் சென்னைக்கு போறார்.</span> <span class=\"roman-inline\">(avar ceṉṉai-kku pōṟ-ār.)</span><br><span class=\"reading-ja\">その方はチェンナイへ行きます。</span><br><br><span class=\"ta-inline\" lang=\"ta\">பஸ் சென்னைக்கு போகுது.</span> <span class=\"roman-inline\">(pas ceṉṉai-kku pōku-tu.)</span><br><span class=\"reading-ja\">バスはチェンナイへ行きます。</span>"
      ],
      "miniReading": {
        "intro": "同じ行き先で、聞き手・敬意ある人・非人間を比較します。",
        "ids": [
          "l14-05",
          "l14-08",
          "l14-11"
        ]
      }
    }
  ],
  "formConfig": {
    "mode": "grammar",
    "title": "話し手・聞き手・人間三人称・非人間を一枚で比較する",
    "intro": "巨大な三時制表ではなく、現在の「行く」を固定して人物語尾だけを横に並べます。正しい別レジスター形は用途を注記します。",
    "patterns": Object.freeze(patterns),
    "checkpoint": "語尾から人物を復元し、நாங்க／நாம、அவர்／அவங்க、人間／非人間を混同せず説明できれば合格です。"
  },
  "examples": Object.freeze(examples),
  "quiz": [
    {
      "focus": "形態分解",
      "q": "<span class=\"ta-inline\" lang=\"ta\">நீங்க சென்னைக்கு போறீங்க</span> <span class=\"roman-inline\">(nīṅka ceṉṉai-kku pōṟ-īṅka)</span> の右端 <span class=\"ta-inline\" lang=\"ta\">-ீங்க</span> <span class=\"roman-inline\">(-īṅka)</span> が示すものは？",
      "options": [
        "丁寧な二人称単数／二人称複数",
        "一人称単数",
        "男性三人称単数",
        "非人間"
      ],
      "answer": 0,
      "feedback": "<span class=\"ta-inline\" lang=\"ta\">-ீங்க</span> <span class=\"roman-inline\">(-īṅka)</span> は丁寧な「あなた」または複数の「あなたたち」です。",
      "rule": "二人称の旅行基本形は நீங்க＋-ீங்க。",
      "tags": [
        "正解",
        "一人称との混同",
        "男性三人称との混同",
        "非人間との混同"
      ]
    },
    {
      "focus": "機能選択",
      "q": "初対面の一人へ「あなたはチェンナイへ行きます」と丁寧に言う文は？",
      "options": [
        "<span class=\"quiz-option-ta\" lang=\"ta\">நீங்க சென்னைக்கு போறீங்க.</span><span class=\"quiz-option-roman\">nīṅka ceṉṉai-kku pōṟ-īṅka.</span><span class=\"quiz-option-ja\">あなたはチェンナイへ行きます</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">நீ சென்னைக்கு போற.</span><span class=\"quiz-option-roman\">nī ceṉṉai-kku pōṟ-a.</span><span class=\"quiz-option-ja\">きみはチェンナイへ行きます</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">அவர் சென்னைக்கு போறார்.</span><span class=\"quiz-option-roman\">avar ceṉṉai-kku pōṟ-ār.</span><span class=\"quiz-option-ja\">その方はチェンナイへ行きます</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">நான் சென்னைக்கு போறேன்.</span><span class=\"quiz-option-roman\">nāṉ ceṉṉai-kku pōṟ-ēṉ.</span><span class=\"quiz-option-ja\">私はチェンナイへ行きます</span>"
      ],
      "answer": 0,
      "feedback": "初対面には <span class=\"ta-inline\" lang=\"ta\">நீங்க</span> <span class=\"roman-inline\">(nīṅka)</span>＋<span class=\"ta-inline\" lang=\"ta\">-ீங்க</span> <span class=\"roman-inline\">(-īṅka)</span> を中心にします。",
      "rule": "正しい形でも、二人称は相手との距離で選ぶ。",
      "tags": [
        "正解",
        "親しさ・丁寧度",
        "三人称との混同",
        "一人称との混同"
      ]
    },
    {
      "focus": "実用場面",
      "q": "年長者や初対面の第三者について「その方はチェンナイへ行きます」と言う文は？",
      "options": [
        "<span class=\"quiz-option-ta\" lang=\"ta\">அவர் சென்னைக்கு போறார்.</span><span class=\"quiz-option-roman\">avar ceṉṉai-kku pōṟ-ār.</span><span class=\"quiz-option-ja\">その方はチェンナイへ行きます</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">அவன் சென்னைக்கு போறான்.</span><span class=\"quiz-option-roman\">avaṉ ceṉṉai-kku pōṟ-āṉ.</span><span class=\"quiz-option-ja\">彼はチェンナイへ行きます</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">அவள் சென்னைக்கு போறா.</span><span class=\"quiz-option-roman\">avaḷ ceṉṉai-kku pōṟ-ā.</span><span class=\"quiz-option-ja\">彼女はチェンナイへ行きます</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">பஸ் சென்னைக்கு போகுது.</span><span class=\"quiz-option-roman\">pas ceṉṉai-kku pōku-tu.</span><span class=\"quiz-option-ja\">バスはチェンナイへ行きます</span>"
      ],
      "answer": 0,
      "feedback": "<span class=\"ta-inline\" lang=\"ta\">அவர்</span> <span class=\"roman-inline\">(avar)</span>＋<span class=\"ta-inline\" lang=\"ta\">-ார்</span> <span class=\"roman-inline\">(-ār)</span> は性別を前面に出さず、一人へ敬意を示します。",
      "rule": "敬意ある一人の第三者は அவர்＋-ார் が明確。",
      "tags": [
        "正解",
        "男性非敬意",
        "女性非敬意",
        "非人間"
      ]
    },
    {
      "focus": "混同防止",
      "q": "<span class=\"ta-inline\" lang=\"ta\">அவங்க போறாங்க</span> <span class=\"roman-inline\">(avaṅka pōṟ-āṅka)</span> について正しい説明は？",
      "options": [
        "人間複数にも、会話的な敬意単数にもなり得る",
        "必ず女性一人だけを指す",
        "必ず非人間複数だけを指す",
        "必ず話し手を含む私たちを指す"
      ],
      "answer": 0,
      "feedback": "<span class=\"ta-inline\" lang=\"ta\">அவங்க</span> <span class=\"roman-inline\">(avaṅka)</span>＋<span class=\"ta-inline\" lang=\"ta\">-ாங்க</span> <span class=\"roman-inline\">(-āṅka)</span> は人数・敬意の解釈を文脈へ残します。",
      "rule": "அவங்க を見たら、人数と敬意を場面で確認する。",
      "tags": [
        "正解",
        "女性単数への固定",
        "非人間との混同",
        "一人称複数との混同"
      ]
    },
    {
      "focus": "総合復習",
      "q": "<span class=\"ta-inline\" lang=\"ta\">நாங்க போறோம்</span> <span class=\"roman-inline\">(nāṅka pōṟ-ōm)</span> と <span class=\"ta-inline\" lang=\"ta\">நாம போறோம்</span> <span class=\"roman-inline\">(nāma pōṟ-ōm)</span> の違いは？",
      "options": [
        "நாங்க は聞き手を含まず、நாம は聞き手を含む",
        "நாங்க は単数、நாம は複数",
        "நாங்க は過去、நாம は未来",
        "நாங்க は非人間、நாம は人間"
      ],
      "answer": 0,
      "feedback": "動詞語尾はどちらも <span class=\"ta-inline\" lang=\"ta\">-ோம்</span> <span class=\"roman-inline\">(-ōm)</span>。参加範囲は <span class=\"ta-inline\" lang=\"ta\">நாங்க</span> <span class=\"roman-inline\">(nāṅka)</span> と <span class=\"ta-inline\" lang=\"ta\">நாம</span> <span class=\"roman-inline\">(nāma)</span> の代名詞で分かれます。",
      "rule": "一人称複数の包括・除外は、語尾でなく代名詞を読む。",
      "tags": [
        "正解",
        "数の誤読",
        "時制との混同",
        "人間性との混同"
      ]
    }
  ]
};

  lesson.targets = Object.freeze(lesson.targets);
  lesson.criticalPoints = Object.freeze(lesson.criticalPoints);
  lesson.readSections = Object.freeze(lesson.readSections);
  lesson.formConfig = Object.freeze(lesson.formConfig);
  lesson.quiz = Object.freeze(lesson.quiz);
  window.TAMIL_LESSONS_V30 = window.TAMIL_LESSONS_V30 || [];
  window.TAMIL_LESSONS_V30.push(Object.freeze(lesson));
})();

(() => {
  "use strict";

  const { entry: E, confidence: C } = window.TAMIL_V30;
  const SOURCES = [
  "TAMIL-INTEGRATED-v2.0-rc.1 §§23-25,31-32",
  "PREDICATE-ENGINE-v1.1 §§1.4,4,7",
  "TAMIL-GRAMMAR-GARDEN Lesson 12",
  "SCHIFFMAN-ASPECT-1999: aspectual verbs after verbal participles"
];
  const make = input => E({ ...input, sourceRefs: SOURCES, confidence: C("B", "B", "C", "B") });

  const examples = [
  {
    "id": "l12-01",
    "targetTamil": "நான் இப்போ படம் பாத்துக்கிட்டு இருக்கேன்.",
    "structuredRoman": "nāṉ ippō paṭam pāttu-kkiṭṭu irukk-ēṉ.",
    "pronunciationRoman": "nāṉ ippō paḍam pāttukkiṭṭu irukkēn.",
    "katakana": "ナーン イッポー パダム パーットゥッキットゥ イルッケーン。",
    "meaningJa": "私は今、映画を見ています。",
    "literalJapanese": "私＋今＋映画＋見て・進行＋いる・私",
    "morphemes": [
      {
        "surfaceTamil": "நான்",
        "gloss": "私"
      },
      {
        "surfaceTamil": "இப்போ",
        "gloss": "今"
      },
      {
        "surfaceTamil": "படம்",
        "gloss": "映画"
      },
      {
        "surfaceTamil": "பாத்துக்கிட்டு",
        "gloss": "見て・進行中"
      },
      {
        "surfaceTamil": "இருக்கேன்",
        "gloss": "います・私"
      }
    ],
    "grammarNote": "பாத்துக்கிட்டு＋இருக்கேன் で進行中を明示します。右端の இருக்கேன் が一人称を示します。",
    "vocabulary": [
      "நான்",
      "இப்போ",
      "படம்",
      "பாத்துக்கிட்டு",
      "இருக்கேன்"
    ],
    "audioGroup": "lesson12-core",
    "featured": true,
    "counterparts": [
      {
        "primaryRegister": "LT-WR",
        "targetTamil": "நான் இப்போது படம் பார்த்துக்கொண்டிருக்கிறேன்.",
        "note": "現代文語・保守的表記"
      }
    ]
  },
  {
    "id": "l12-02",
    "targetTamil": "நான் இன்னும் சாப்பிட்டுக்கிட்டு இருக்கேன்.",
    "structuredRoman": "nāṉ iṉṉum cāppiṭṭu-kkiṭṭu irukk-ēṉ.",
    "pronunciationRoman": "nāṉ innum sāppiṭṭukkiṭṭu irukkēn.",
    "katakana": "ナーン インヌム サーッピットゥッキットゥ イルッケーン。",
    "meaningJa": "私はまだ食べています。",
    "literalJapanese": "私＋まだ＋食べて・進行＋いる・私",
    "morphemes": [
      {
        "surfaceTamil": "நான்",
        "gloss": "私"
      },
      {
        "surfaceTamil": "இன்னும்",
        "gloss": "まだ"
      },
      {
        "surfaceTamil": "சாப்பிட்டுக்கிட்டு",
        "gloss": "食べて・進行中"
      },
      {
        "surfaceTamil": "இருக்கேன்",
        "gloss": "います・私"
      }
    ],
    "grammarNote": "இன்னும் と進行形を組み合わせ、「まだ続いている」を表します。",
    "vocabulary": [
      "நான்",
      "இன்னும்",
      "சாப்பிட்டுக்கிட்டு",
      "இருக்கேன்"
    ],
    "audioGroup": "lesson12-core",
    "featured": true
  },
  {
    "id": "l12-03",
    "targetTamil": "நான் காபி குடிச்சுக்கிட்டு இருக்கேன்.",
    "structuredRoman": "nāṉ kāpi kuṭiccu-kkiṭṭu irukk-ēṉ.",
    "pronunciationRoman": "nāṉ kābi kuḍiccukkiṭṭu irukkēn.",
    "katakana": "ナーン カービ クディッチュッキットゥ イルッケーン。",
    "meaningJa": "私はコーヒーを飲んでいます。",
    "literalJapanese": "私＋コーヒー＋飲んで・進行＋いる・私",
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
        "surfaceTamil": "குடிச்சுக்கிட்டு",
        "gloss": "飲んで・進行中"
      },
      {
        "surfaceTamil": "இருக்கேன்",
        "gloss": "います・私"
      }
    ],
    "grammarNote": "口語の குடிச்சுக்கிட்டு を、進行の完成形として登録します。",
    "vocabulary": [
      "நான்",
      "காபி",
      "குடிச்சுக்கிட்டு",
      "இருக்கேன்"
    ],
    "audioGroup": "lesson12-core",
    "featured": true
  },
  {
    "id": "l12-04",
    "targetTamil": "நான் படம் பாத்துட்டேன்.",
    "structuredRoman": "nāṉ paṭam pāttuṭṭ-ēṉ.",
    "pronunciationRoman": "nāṉ paḍam pāttuṭṭēn.",
    "katakana": "ナーン パダム パーットゥッテーン。",
    "meaningJa": "私は映画を見終えました／もう見ました。",
    "literalJapanese": "私＋映画＋見て・完了・私",
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
        "surfaceTamil": "பாத்துட்டேன்",
        "gloss": "見終えました／もう見ました・私"
      }
    ],
    "grammarNote": "பாத்துட்டேன் は完了・既済を示す登録済みの口語形です。",
    "vocabulary": [
      "நான்",
      "படம்",
      "பாத்துட்டேன்"
    ],
    "audioGroup": "lesson12-core",
    "featured": true,
    "counterparts": [
      {
        "primaryRegister": "LT-WR",
        "targetTamil": "நான் படம் பார்த்துவிட்டேன்.",
        "note": "現代文語・保守的表記"
      }
    ]
  },
  {
    "id": "l12-05",
    "targetTamil": "நான் சாப்பிட்டுட்டேன்.",
    "structuredRoman": "nāṉ cāppiṭṭuṭṭ-ēṉ.",
    "pronunciationRoman": "nāṉ sāppiṭṭuṭṭēn.",
    "katakana": "ナーン サーッピットゥッテーン。",
    "meaningJa": "私はもう食べました／食べ終えました。",
    "literalJapanese": "私＋食べて・完了・私",
    "morphemes": [
      {
        "surfaceTamil": "நான்",
        "gloss": "私"
      },
      {
        "surfaceTamil": "சாப்பிட்டுட்டேன்",
        "gloss": "もう食べました・私"
      }
    ],
    "grammarNote": "食事が完了したことを短く伝える、日常的な形です。",
    "vocabulary": [
      "நான்",
      "சாப்பிட்டுட்டேன்"
    ],
    "audioGroup": "lesson12-bank",
    "featured": false
  },
  {
    "id": "l12-06",
    "targetTamil": "நான் வேலை செஞ்சுட்டேன்.",
    "structuredRoman": "nāṉ vēlai ceñcuṭṭ-ēṉ.",
    "pronunciationRoman": "nāṉ vēlai señjuṭṭēn.",
    "katakana": "ナーン ヴェーライ センジュッテーン。",
    "meaningJa": "私は仕事を終えました／もう済ませました。",
    "literalJapanese": "私＋仕事＋して・完了・私",
    "morphemes": [
      {
        "surfaceTamil": "நான்",
        "gloss": "私"
      },
      {
        "surfaceTamil": "வேலை",
        "gloss": "仕事"
      },
      {
        "surfaceTamil": "செஞ்சுட்டேன்",
        "gloss": "済ませました・私"
      }
    ],
    "grammarNote": "செஞ்சுட்டேன் は「してしまった／済ませた」の完了を表します。",
    "vocabulary": [
      "நான்",
      "வேலை",
      "செஞ்சுட்டேன்"
    ],
    "audioGroup": "lesson12-bank",
    "featured": false
  },
  {
    "id": "l12-07",
    "targetTamil": "நான் டிக்கெட் வாங்கி வெச்சேன்.",
    "structuredRoman": "nāṉ ṭikkeṭ vāṅki vecc-ēṉ.",
    "pronunciationRoman": "nāṉ ṭikkeṭ vāṅgi veccēn.",
    "katakana": "ナーン ティッケトゥ ヴァーンギ ヴェッチェーン。",
    "meaningJa": "私は切符を買っておきました。",
    "literalJapanese": "私＋切符＋買って＋保持・準備した・私",
    "morphemes": [
      {
        "surfaceTamil": "நான்",
        "gloss": "私"
      },
      {
        "surfaceTamil": "டிக்கெட்",
        "gloss": "切符"
      },
      {
        "surfaceTamil": "வாங்கி",
        "gloss": "買って"
      },
      {
        "surfaceTamil": "வெச்சேன்",
        "gloss": "置いておきました／準備しました・私"
      }
    ],
    "grammarNote": "வாங்கி＋வெச்சேன் は、買った結果を後のために保持する「買っておいた」です。",
    "vocabulary": [
      "நான்",
      "டிக்கெட்",
      "வாங்கி",
      "வெச்சேன்"
    ],
    "audioGroup": "lesson12-core",
    "featured": true,
    "counterparts": [
      {
        "primaryRegister": "LT-WR",
        "targetTamil": "நான் டிக்கெட் வாங்கி வைத்தேன்.",
        "note": "現代文語・保守的表記"
      }
    ]
  },
  {
    "id": "l12-08",
    "targetTamil": "நான் நண்பருக்காக டிக்கெட் வாங்கி வெச்சேன்.",
    "structuredRoman": "nāṉ naṇpar-ukkāka ṭikkeṭ vāṅki vecc-ēṉ.",
    "pronunciationRoman": "nāṉ naṇbarukkāga ṭikkeṭ vāṅgi veccēn.",
    "katakana": "ナーン ナンバルッカーガ ティッケトゥ ヴァーンギ ヴェッチェーン。",
    "meaningJa": "私は友達のために切符を買っておきました。",
    "literalJapanese": "私＋友達のために＋切符＋買って＋準備した・私",
    "morphemes": [
      {
        "surfaceTamil": "நான்",
        "gloss": "私"
      },
      {
        "surfaceTamil": "நண்பருக்காக",
        "gloss": "友達のために"
      },
      {
        "surfaceTamil": "டிக்கெட்",
        "gloss": "切符"
      },
      {
        "surfaceTamil": "வாங்கி",
        "gloss": "買って"
      },
      {
        "surfaceTamil": "வெச்சேன்",
        "gloss": "準備しておきました・私"
      }
    ],
    "grammarNote": "第5課の -க்காக と組み合わせた、旅行準備の実用文です。",
    "vocabulary": [
      "நான்",
      "நண்பர்",
      "டிக்கெட்",
      "வாங்கி",
      "வெச்சேன்"
    ],
    "audioGroup": "lesson12-bank",
    "featured": false
  },
  {
    "id": "l12-09",
    "targetTamil": "நான் தண்ணி வாங்கி வெச்சேன்.",
    "structuredRoman": "nāṉ taṇṇi vāṅki vecc-ēṉ.",
    "pronunciationRoman": "nāṉ taṇṇi vāṅgi veccēn.",
    "katakana": "ナーン タンニ ヴァーンギ ヴェッチェーン。",
    "meaningJa": "私は水を買っておきました。",
    "literalJapanese": "私＋水＋買って＋準備した・私",
    "morphemes": [
      {
        "surfaceTamil": "நான்",
        "gloss": "私"
      },
      {
        "surfaceTamil": "தண்ணி",
        "gloss": "水"
      },
      {
        "surfaceTamil": "வாங்கி",
        "gloss": "買って"
      },
      {
        "surfaceTamil": "வெச்சேன்",
        "gloss": "準備しておきました・私"
      }
    ],
    "grammarNote": "後で使うために水を確保した、結果保持の文です。",
    "vocabulary": [
      "நான்",
      "தண்ணி",
      "வாங்கி",
      "வெச்சேன்"
    ],
    "audioGroup": "lesson12-bank",
    "featured": false
  },
  {
    "id": "l12-10",
    "targetTamil": "நான் கதவை திறந்து வெச்சேன்.",
    "structuredRoman": "nāṉ katav-ai tiṟantu vecc-ēṉ.",
    "pronunciationRoman": "nāṉ kadave tiṟandu veccēn.",
    "katakana": "ナーン カダヴェ ティランドゥ ヴェッチェーン。",
    "meaningJa": "私はドアを開けておきました。",
    "literalJapanese": "私＋ドアを＋開けて＋その状態にした・私",
    "morphemes": [
      {
        "surfaceTamil": "நான்",
        "gloss": "私"
      },
      {
        "surfaceTamil": "கதவை",
        "gloss": "ドアを"
      },
      {
        "surfaceTamil": "திறந்து",
        "gloss": "開けて"
      },
      {
        "surfaceTamil": "வெச்சேன்",
        "gloss": "その状態にしておきました・私"
      }
    ],
    "grammarNote": "வெச்சேன் が「置く」の字義だけでなく、開いた結果を保つ働きを示します。",
    "vocabulary": [
      "நான்",
      "கதவு",
      "திறந்து",
      "வெச்சேன்"
    ],
    "audioGroup": "lesson12-bank",
    "featured": false
  }
].map(make);

  const patterns = [
  {
    "id": "l12-form-paattukkittu",
    "targetTamil": "பாத்துக்கிட்டு",
    "structuredRoman": "pāttu-kkiṭṭu",
    "pronunciationRoman": "pāttukkiṭṭu",
    "katakana": "パーットゥッキットゥ",
    "meaningJa": "見ている途中で",
    "literalJapanese": "見る・進行連結",
    "grammarNote": "右の இருக்கேன் と組んで進行を明示する。",
    "vocabulary": [
      "பாத்துக்கிட்டு"
    ],
    "audioGroup": "l12-forms",
    "kind": "進行",
    "group": "相の中心形",
    "note": "右の இருக்கேன் と組んで進行を明示する。"
  },
  {
    "id": "l12-form-caappittukkittu",
    "targetTamil": "சாப்பிட்டுக்கிட்டு",
    "structuredRoman": "cāppiṭṭu-kkiṭṭu",
    "pronunciationRoman": "sāppiṭṭukkiṭṭu",
    "katakana": "サーッピットゥッキットゥ",
    "meaningJa": "食べている途中で",
    "literalJapanese": "食べる・進行連結",
    "grammarNote": "இன்னும் と組み「まだ食べている」。",
    "vocabulary": [
      "சாப்பிட்டுக்கிட்டு"
    ],
    "audioGroup": "l12-forms",
    "kind": "進行",
    "group": "相の中心形",
    "note": "இன்னும் と組み「まだ食べている」。"
  },
  {
    "id": "l12-form-kuticcukkittu",
    "targetTamil": "குடிச்சுக்கிட்டு",
    "structuredRoman": "kuṭiccu-kkiṭṭu",
    "pronunciationRoman": "kuḍiccukkiṭṭu",
    "katakana": "クディッチュッキットゥ",
    "meaningJa": "飲んでいる途中で",
    "literalJapanese": "飲む・進行連結",
    "grammarNote": "口語の完成形として登録する。",
    "vocabulary": [
      "குடிச்சுக்கிட்டு"
    ],
    "audioGroup": "l12-forms",
    "kind": "進行",
    "group": "相の中心形",
    "note": "口語の完成形として登録する。"
  },
  {
    "id": "l12-form-paattutteen",
    "targetTamil": "பாத்துட்டேன்",
    "structuredRoman": "pāttuṭṭ-ēṉ",
    "pronunciationRoman": "pāttuṭṭēn",
    "katakana": "パーットゥッテーン",
    "meaningJa": "見終えました／もう見ました",
    "literalJapanese": "見る・完了・私",
    "grammarNote": "表面にない要素をstructuredRomanへ補わない。",
    "vocabulary": [
      "பாத்துட்டேன்"
    ],
    "audioGroup": "l12-forms",
    "kind": "完了・既済",
    "group": "相の中心形",
    "note": "表面にない要素をstructuredRomanへ補わない。"
  },
  {
    "id": "l12-form-caappittutteen",
    "targetTamil": "சாப்பிட்டுட்டேன்",
    "structuredRoman": "cāppiṭṭuṭṭ-ēṉ",
    "pronunciationRoman": "sāppiṭṭuṭṭēn",
    "katakana": "サーッピットゥッテーン",
    "meaningJa": "もう食べました",
    "literalJapanese": "食べる・完了・私",
    "grammarNote": "食事完了を伝える日常形。",
    "vocabulary": [
      "சாப்பிட்டுட்டேன்"
    ],
    "audioGroup": "l12-forms",
    "kind": "完了・既済",
    "group": "相の中心形",
    "note": "食事完了を伝える日常形。"
  },
  {
    "id": "l12-form-cencutteen",
    "targetTamil": "செஞ்சுட்டேன்",
    "structuredRoman": "ceñcuṭṭ-ēṉ",
    "pronunciationRoman": "señjuṭṭēn",
    "katakana": "センジュッテーン",
    "meaningJa": "済ませました",
    "literalJapanese": "する・完了・私",
    "grammarNote": "仕事や準備を済ませた文で使う。",
    "vocabulary": [
      "செஞ்சுட்டேன்"
    ],
    "audioGroup": "l12-forms",
    "kind": "完了・既済",
    "group": "相の中心形",
    "note": "仕事や準備を済ませた文で使う。"
  },
  {
    "id": "l12-form-vaanki-veccen",
    "targetTamil": "வாங்கி வெச்சேன்",
    "structuredRoman": "vāṅki vecc-ēṉ",
    "pronunciationRoman": "vāṅgi veccēn",
    "katakana": "ヴァーンギ ヴェッチェーン",
    "meaningJa": "買っておきました",
    "literalJapanese": "買って＋結果保持・私",
    "grammarNote": "後で使える状態を保つ。",
    "vocabulary": [
      "வாங்கி வெச்சேன்"
    ],
    "audioGroup": "l12-forms",
    "kind": "準備・結果保持",
    "group": "相の中心形",
    "note": "後で使える状態を保つ。"
  },
  {
    "id": "l12-form-tirantu-veccen",
    "targetTamil": "திறந்து வெச்சேன்",
    "structuredRoman": "tiṟantu vecc-ēṉ",
    "pronunciationRoman": "tiṟandu veccēn",
    "katakana": "ティランドゥ ヴェッチェーン",
    "meaningJa": "開けておきました",
    "literalJapanese": "開けて＋状態保持・私",
    "grammarNote": "結果状態を保つ用法。",
    "vocabulary": [
      "திறந்து வெச்சேன்"
    ],
    "audioGroup": "l12-forms",
    "kind": "準備・結果保持",
    "group": "相の中心形",
    "note": "結果状態を保つ用法。"
  }
].map(make);

  const lesson = {
  "id": "lesson12-v36",
  "number": 12,
  "navTitle": "進行・完了・準備",
  "title": "補助動詞で、進行・完了・結果保持を言い分ける",
  "tamilTitle": "பாத்துக்கிட்டு இருக்கேன், பாத்துட்டேன், வெச்சேன்",
  "deck": "主動詞の後ろへ補助動詞を重ね、出来事の最中・終了後・準備済みを区別します。長い形は右端から読みます。",
  "targets": [
    "進行の明示",
    "完了・既済",
    "準備・結果保持",
    "単純時制との違い",
    "右端からの解析"
  ],
  "heroExample": examples[0],
  "criticalPoints": [
    "<span class=\"ta-inline\" lang=\"ta\">-க்கிட்டு இருக்கேன்</span> <span class=\"roman-inline\">(-kkiṭṭu irukk-ēṉ)</span> は進行中を明示し、単純現在より意味を絞る。",
    "<span class=\"ta-inline\" lang=\"ta\">பாத்துட்டேன்</span> <span class=\"roman-inline\">(pāttuṭṭ-ēṉ)</span> は完了・既済。表面にない要素をstructuredRomanへ補わない。",
    "<span class=\"ta-inline\" lang=\"ta\">வாங்கி வெச்சேன்</span> <span class=\"roman-inline\">(vāṅki vecc-ēṉ)</span> は買った結果を後まで保つ準備で、単なる「置いた」ではない。"
  ],
  "readSections": [
    {
      "kicker": "まず結論",
      "heading": "右端の補助動詞から、動作が進行中か完了済みかを読む",
      "takeaway": "<span class=\"ta-inline\" lang=\"ta\">பாத்துக்கிட்டு இருக்கேன்</span> <span class=\"roman-inline\">(pāttu-kkiṭṭu irukk-ēṉ)</span> は進行、<span class=\"ta-inline\" lang=\"ta\">பாத்துட்டேன்</span> <span class=\"roman-inline\">(pāttuṭṭ-ēṉ)</span> は完了・既済、<span class=\"ta-inline\" lang=\"ta\">வாங்கி வெச்சேன்</span> <span class=\"roman-inline\">(vāṅki vecc-ēṉ)</span> は準備・結果保持です。",
      "paragraphs": [
        "主動詞の意味が「見る」「買う」でも、後ろに何が重なるかで、出来事の見え方が変わります。",
        "長い形は右端から読みます。<span class=\"ta-inline\" lang=\"ta\">இருக்கேன்</span> <span class=\"roman-inline\">(irukk-ēṉ)</span> なら今続いている、<span class=\"ta-inline\" lang=\"ta\">வெச்சேன்</span> <span class=\"roman-inline\">(vecc-ēṉ)</span> なら結果を後まで保つ、と先に骨格を取ります。"
      ]
    },
    {
      "kicker": "形を読む",
      "heading": "進行・完了・結果保持を、登録済みの完成形で比較する",
      "takeaway": "<span class=\"ta-inline\" lang=\"ta\">பாத்துக்கிட்டு இருக்கேன்</span> <span class=\"roman-inline\">(pāttu-kkiṭṭu irukk-ēṉ)</span>・<span class=\"ta-inline\" lang=\"ta\">பாத்துட்டேன்</span> <span class=\"roman-inline\">(pāttuṭṭ-ēṉ)</span>・<span class=\"ta-inline\" lang=\"ta\">வாங்கி வெச்சேன்</span> <span class=\"roman-inline\">(vāṅki vecc-ēṉ)</span> を三本柱にします。",
      "paragraphs": [
        "進行は主動詞の連結部＋<span class=\"ta-inline\" lang=\"ta\">-க்கிட்டு</span> <span class=\"roman-inline\">(-kkiṭṭu)</span>＋<span class=\"ta-inline\" lang=\"ta\">இரு</span> <span class=\"roman-inline\">(iru)</span> 系、準備は副動詞＋<span class=\"ta-inline\" lang=\"ta\">வெச்சேன்</span> <span class=\"roman-inline\">(vecc-ēṉ)</span> のように複数語で現れます。",
        "完了の <span class=\"ta-inline\" lang=\"ta\">பாத்துட்டேன்</span> <span class=\"roman-inline\">(pāttuṭṭ-ēṉ)</span> は融合した表面形です。表面にない語幹や接辞を構造ローマ字へ捏造せず、基底説明は別の分析欄で扱います。"
      ]
    },
    {
      "kicker": "なぜ？",
      "heading": "補助動詞は、主動詞の字義ではなく出来事の見方を足す",
      "takeaway": "<span class=\"ta-inline\" lang=\"ta\">படம் பாக்கறேன்</span> <span class=\"roman-inline\">(paṭam pākkaṟ-ēṉ)</span> は広く「見ます／見ています」、<span class=\"ta-inline\" lang=\"ta\">படம் பாத்துக்கிட்டு இருக்கேன்</span> <span class=\"roman-inline\">(paṭam pāttu-kkiṭṭu irukk-ēṉ)</span> は進行中を明示します。",
      "paragraphs": [
        "<span class=\"ta-inline\" lang=\"ta\">வெச்சேன்</span> <span class=\"roman-inline\">(vecc-ēṉ)</span> を常に字義どおり「置いた」と訳すと、<span class=\"ta-inline\" lang=\"ta\">டிக்கெட் வாங்கி வெச்சேன்</span> <span class=\"roman-inline\">(ṭikkeṭ vāṅki vecc-ēṉ)</span> の「買って準備してある」という働きを見失います。",
        "補助動詞として使われると、主動詞の後ろで継続・完了・結果保持などの文法的意味を足します。"
      ]
    },
    {
      "kicker": "実際に使う",
      "heading": "旅の前・最中・後を、三つの相で言い分ける",
      "takeaway": "準備なら <span class=\"ta-inline\" lang=\"ta\">டிக்கெட் வாங்கி வெச்சேன்</span> <span class=\"roman-inline\">(ṭikkeṭ vāṅki vecc-ēṉ)</span>、最中なら <span class=\"ta-inline\" lang=\"ta\">படம் பாத்துக்கிட்டு இருக்கேன்</span> <span class=\"roman-inline\">(paṭam pāttu-kkiṭṭu irukk-ēṉ)</span>、終了後なら <span class=\"ta-inline\" lang=\"ta\">படம் பாத்துட்டேன்</span> <span class=\"roman-inline\">(paṭam pāttuṭṭ-ēṉ)</span> です。",
      "paragraphs": [
        "<span class=\"ta-inline\" lang=\"ta\">நண்பருக்காக டிக்கெட் வாங்கி வெச்சேன்</span> <span class=\"roman-inline\">(naṇpar-ukkāka ṭikkeṭ vāṅki vecc-ēṉ)</span> は「友達のために切符を買っておきました」。既習の後置詞と補助動詞を組み合わせます。",
        "<span class=\"ta-inline\" lang=\"ta\">கதவை திறந்து வெச்சேன்</span> <span class=\"roman-inline\">(katav-ai tiṟantu vecc-ēṉ)</span> では、開けた結果がそのまま保たれることを表します。"
      ]
    },
    {
      "kicker": "混ぜない",
      "heading": "単純現在・単純過去と、相を明示する形を同義にしない",
      "takeaway": "<span class=\"ta-inline\" lang=\"ta\">பாக்கறேன்</span> <span class=\"roman-inline\">(pākkaṟ-ēṉ)</span> は習慣・予定・進行など広い現在、<span class=\"ta-inline\" lang=\"ta\">பாத்துக்கிட்டு இருக்கேன்</span> <span class=\"roman-inline\">(pāttu-kkiṭṭu irukk-ēṉ)</span> は今の進行を明示します。",
      "paragraphs": [
        "<span class=\"ta-inline\" lang=\"ta\">பாத்தேன்</span> <span class=\"roman-inline\">(pātt-ēṉ)</span> は単純に「見た」、<span class=\"ta-inline\" lang=\"ta\">பாத்துட்டேன்</span> <span class=\"roman-inline\">(pāttuṭṭ-ēṉ)</span> は「もう見た／見終えた」という完了・既済の含みを持ちます。",
        "ただし、すべての動詞へ見た目だけで同じ完了形を自動生成しません。教材に登録された完成形と場面で確認します。"
      ],
      "note": {
        "tone": "pink",
        "title": "この課の最重要ミス",
        "body": "<span class=\"ta-inline\" lang=\"ta\">வெச்சேன்</span> <span class=\"roman-inline\">(vecc-ēṉ)</span> をいつも「置いた」と直訳しない。前の動詞の結果を保つ働きかを確認します。"
      }
    },
    {
      "kicker": "3文で復習",
      "heading": "準備・進行・完了の時間の流れを読む",
      "takeaway": "右端の補助要素を見て、出来事の前・最中・後のどこを見ているか判断します。",
      "paragraphs": [
        "<span class=\"ta-inline\" lang=\"ta\">நான் டிக்கெட் வாங்கி வெச்சேன்.</span> <span class=\"roman-inline\">(nāṉ ṭikkeṭ vāṅki vecc-ēṉ.)</span><br><span class=\"reading-ja\">私は切符を買っておきました。</span><br><br><span class=\"ta-inline\" lang=\"ta\">நான் இப்போ படம் பாத்துக்கிட்டு இருக்கேன்.</span> <span class=\"roman-inline\">(nāṉ ippō paṭam pāttu-kkiṭṭu irukk-ēṉ.)</span><br><span class=\"reading-ja\">私は今、映画を見ています。</span><br><br><span class=\"ta-inline\" lang=\"ta\">நான் படம் பாத்துட்டேன்.</span> <span class=\"roman-inline\">(nāṉ paṭam pāttuṭṭ-ēṉ.)</span><br><span class=\"reading-ja\">私は映画を見終えました／もう見ました。</span>"
      ],
      "miniReading": {
        "intro": "準備→進行→完了の三段階を読みます。",
        "ids": [
          "l12-07",
          "l12-01",
          "l12-04"
        ]
      }
    }
  ],
  "formConfig": {
    "mode": "grammar",
    "title": "第12課の補助動詞を、出来事の前・最中・後で比較する",
    "intro": "進行・完了・結果保持を、右端の補助動詞と実用場面の両方から判断します。",
    "patterns": Object.freeze(patterns),
    "checkpoint": "単純現在・単純過去と、進行・完了・準備済みを区別し、右端から意味を説明できれば合格です。"
  },
  "examples": Object.freeze(examples),
  "quiz": [
    {
      "focus": "形態分解",
      "q": "<span class=\"ta-inline\" lang=\"ta\">பாத்துக்கிட்டு இருக்கேன்</span> <span class=\"roman-inline\">(pāttu-kkiṭṭu irukk-ēṉ)</span> を正しく分けたものは？",
      "options": [
        "見る・進行連結＋いる・現在・私",
        "見た・過去＋家にいる",
        "見る・不定詞＋しない・私",
        "映画＋複数＋場所"
      ],
      "answer": 0,
      "feedback": "<span class=\"ta-inline\" lang=\"ta\">பாத்துக்கிட்டு</span> <span class=\"roman-inline\">(pāttu-kkiṭṭu)</span> が進行中の主動作、<span class=\"ta-inline\" lang=\"ta\">இருக்கேன்</span> <span class=\"roman-inline\">(irukk-ēṉ)</span> が補助動詞＋一人称です。",
      "rule": "長い相の形は、右端の補助動詞から読む。",
      "tags": [
        "正解",
        "単純過去・存在との混同",
        "否定構文との混同",
        "名詞形態との混同"
      ]
    },
    {
      "focus": "機能選択",
      "q": "「もう映画を見ました／見終えました」に最も合う文は？",
      "options": [
        "<span class=\"quiz-option-ta\" lang=\"ta\">நான் படம் பாத்துட்டேன்.</span><span class=\"quiz-option-roman\">nāṉ paṭam pāttuṭṭ-ēṉ.</span><span class=\"quiz-option-ja\">もう見ました／見終えました</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">நான் படம் பாத்துக்கிட்டு இருக்கேன்.</span><span class=\"quiz-option-roman\">nāṉ paṭam pāttu-kkiṭṭu irukk-ēṉ.</span><span class=\"quiz-option-ja\">今見ています</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">நான் படம் பாக்கறேன்.</span><span class=\"quiz-option-roman\">nāṉ paṭam pākkaṟ-ēṉ.</span><span class=\"quiz-option-ja\">見ます／見ています</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">நான் படம் பாக்கல.</span><span class=\"quiz-option-roman\">nāṉ paṭam pākka-la.</span><span class=\"quiz-option-ja\">見なかった／まだ見ていない</span>"
      ],
      "answer": 0,
      "feedback": "<span class=\"ta-inline\" lang=\"ta\">பாத்துட்டேன்</span> <span class=\"roman-inline\">(pāttuṭṭ-ēṉ)</span> が完了・既済です。",
      "rule": "進行・広い現在・完了・否定を、右端の形で分ける。",
      "tags": [
        "正解",
        "進行との混同",
        "単純現在との混同",
        "否定との混同"
      ]
    },
    {
      "focus": "実用場面",
      "q": "友達の切符を事前に用意したと伝える文は？",
      "options": [
        "<span class=\"quiz-option-ta\" lang=\"ta\">நான் நண்பருக்காக டிக்கெட் வாங்கி வெச்சேன்.</span><span class=\"quiz-option-roman\">nāṉ naṇpar-ukkāka ṭikkeṭ vāṅki vecc-ēṉ.</span><span class=\"quiz-option-ja\">友達のために切符を買っておきました</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">நான் நண்பரோட டிக்கெட் வாங்கறேன்.</span><span class=\"quiz-option-roman\">nāṉ naṇpar-ōṭa ṭikkeṭ vāṅkaṟ-ēṉ.</span><span class=\"quiz-option-ja\">友達と切符を買います</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">என்கிட்ட டிக்கெட் இருக்கு.</span><span class=\"quiz-option-roman\">eṉ-kiṭṭa ṭikkeṭ irukku.</span><span class=\"quiz-option-ja\">私は切符を持っています</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">நான் டிக்கெட் வாங்கி உள்ளே போனேன்.</span><span class=\"quiz-option-roman\">nāṉ ṭikkeṭ vāṅki uḷḷē pōṉ-ēṉ.</span><span class=\"quiz-option-ja\">切符を買って中へ入りました</span>"
      ],
      "answer": 0,
      "feedback": "<span class=\"ta-inline\" lang=\"ta\">-க்காக</span> <span class=\"roman-inline\">(-ukkāka)</span> が受益者、<span class=\"ta-inline\" lang=\"ta\">வாங்கி வெச்சேன்</span> <span class=\"roman-inline\">(vāṅki vecc-ēṉ)</span> が事前準備です。",
      "rule": "準備済みは、副動詞＋வெச்சேன் で結果を後まで保つ。",
      "tags": [
        "正解",
        "同行・現在",
        "単純所有",
        "動作連結のみ"
      ]
    },
    {
      "focus": "混同防止",
      "q": "<span class=\"ta-inline\" lang=\"ta\">பாக்கறேன்</span> <span class=\"roman-inline\">(pākkaṟ-ēṉ)</span> と <span class=\"ta-inline\" lang=\"ta\">பாத்துக்கிட்டு இருக்கேன்</span> <span class=\"roman-inline\">(pāttu-kkiṭṭu irukk-ēṉ)</span> の違いは？",
      "options": [
        "前者は広い現在、後者は進行中を明示する",
        "どちらも完了済みだけを表す",
        "前者は過去、後者は未来",
        "前者は名詞、後者は場所格"
      ],
      "answer": 0,
      "feedback": "<span class=\"ta-inline\" lang=\"ta\">பாக்கறேன்</span> <span class=\"roman-inline\">(pākkaṟ-ēṉ)</span> は習慣・予定・進行にもなり、<span class=\"ta-inline\" lang=\"ta\">பாத்துக்கிட்டு இருக்கேன்</span> <span class=\"roman-inline\">(pāttu-kkiṭṭu irukk-ēṉ)</span> は進行を明示します。",
      "rule": "単純現在を必ず進行と訳さず、進行明示形と対比する。",
      "tags": [
        "正解",
        "完了との混同",
        "時制逆転",
        "品詞・格の混同"
      ]
    },
    {
      "focus": "総合復習",
      "q": "「ドアを開け、その状態にしておきました」に合う文は？",
      "options": [
        "<span class=\"quiz-option-ta\" lang=\"ta\">நான் கதவை திறந்து வெச்சேன்.</span><span class=\"quiz-option-roman\">nāṉ katav-ai tiṟantu vecc-ēṉ.</span><span class=\"quiz-option-ja\">ドアを開けておきました</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">நான் கதவை திறந்தேன்.</span><span class=\"quiz-option-roman\">nāṉ katav-ai tiṟant-ēṉ.</span><span class=\"quiz-option-ja\">ドアを開けました</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">நான் கதவை திறந்துக்கிட்டு இருக்கேன்.</span><span class=\"quiz-option-roman\">nāṉ katav-ai tiṟantu-kkiṭṭu irukk-ēṉ.</span><span class=\"quiz-option-ja\">ドアを開けている途中です</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">நான் கதவை திறக்க மாட்டேன்.</span><span class=\"quiz-option-roman\">nāṉ katav-ai tiṟakka māṭṭ-ēṉ.</span><span class=\"quiz-option-ja\">ドアを開けません</span>"
      ],
      "answer": 0,
      "feedback": "<span class=\"ta-inline\" lang=\"ta\">திறந்து</span> <span class=\"roman-inline\">(tiṟantu)</span> が前の動作、<span class=\"ta-inline\" lang=\"ta\">வெச்சேன்</span> <span class=\"roman-inline\">(vecc-ēṉ)</span> が結果状態の保持を示します。",
      "rule": "単純過去・進行・拒否と、結果保持を場面で区別する。",
      "tags": [
        "正解",
        "単純過去",
        "進行との混同",
        "意志否定"
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

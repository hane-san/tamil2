(() => {
  "use strict";

  const { entry: E, confidence: C } = window.TAMIL_V30;
  const SOURCES = [
  "TAMIL-INTEGRATED-v2.0-rc.1 §§23-25,31-32",
  "PREDICATE-ENGINE-v1.1 §§1.2,3,4",
  "TAMIL-GRAMMAR-GARDEN Lesson 17",
  "SCHIFFMAN-SPOKEN-TAMIL: relative participles and noun modification"
];
  const make = input => E({ ...input, sourceRefs: SOURCES, confidence: input.confidence ?? C("B", "B", "C", "B") });

  const examples = [
  {
    "id": "l17-01",
    "targetTamil": "நான் நேத்து பாத்த படம் நல்லா இருந்தது.",
    "structuredRoman": "nāṉ nēttu pātta paṭam nallā iruntatu.",
    "pronunciationRoman": "nāṉ nēttu pātta paḍam nallā irundadu.",
    "katakana": "ナーン ネーットゥ パーッタ パダム ナッラー イルンダドゥ。",
    "meaningJa": "私が昨日見た映画は良かったです。",
    "literalJapanese": "私＋昨日＋見た＋映画＋良く＋ありました",
    "morphemes": [
      {
        "surfaceTamil": "நான்",
        "gloss": "私が"
      },
      {
        "surfaceTamil": "நேத்து",
        "gloss": "昨日"
      },
      {
        "surfaceTamil": "பாத்த",
        "gloss": "見た・過去の連体形"
      },
      {
        "surfaceTamil": "படம்",
        "gloss": "映画・中心名詞"
      },
      {
        "surfaceTamil": "நல்லா இருந்தது",
        "gloss": "良かったです"
      }
    ],
    "grammarNote": "பாத்த は文を終えず、直後の படம் を説明します。連体形には一人称語尾 -ேன் を付けません。",
    "vocabulary": [
      "நான்",
      "நேத்து",
      "பாத்த",
      "படம்",
      "நல்லா இருந்தது"
    ],
    "audioGroup": "lesson17-core",
    "featured": true,
    "counterparts": [
      {
        "primaryRegister": "LT-WR",
        "targetTamil": "நான் நேற்று பார்த்த படம் நன்றாக இருந்தது.",
        "note": "現代文語・保守的表記"
      }
    ]
  },
  {
    "id": "l17-02",
    "targetTamil": "சென்னைக்கு போற பஸ் எது?",
    "structuredRoman": "ceṉṉai-kku pōṟ-a pas etu?",
    "pronunciationRoman": "sennaikku pōra bas edu?",
    "katakana": "センナイック ポーラ バス エドゥ？",
    "meaningJa": "チェンナイへ行くバスはどれですか。",
    "literalJapanese": "チェンナイへ＋行く＋バス＋どれ",
    "morphemes": [
      {
        "surfaceTamil": "சென்னைக்கு",
        "gloss": "チェンナイへ"
      },
      {
        "surfaceTamil": "போற",
        "gloss": "行く／行っている・連体形"
      },
      {
        "surfaceTamil": "பஸ்",
        "gloss": "バス・中心名詞"
      },
      {
        "surfaceTamil": "எது",
        "gloss": "どれ"
      }
    ],
    "grammarNote": "போற பஸ் を一まとまりで読み、最後の பஸ் が疑問文全体の中心名詞です。",
    "vocabulary": [
      "சென்னைக்கு",
      "போற",
      "பஸ்",
      "எது"
    ],
    "audioGroup": "lesson17-core",
    "featured": true,
    "counterparts": [
      {
        "primaryRegister": "LT-WR",
        "targetTamil": "சென்னைக்கு போகிற பஸ் எது?",
        "note": "現代文語・保守的表記"
      }
    ]
  },
  {
    "id": "l17-03",
    "targetTamil": "நான் இன்னும் பாக்காத படம் இது.",
    "structuredRoman": "nāṉ iṉṉum pākk-āta paṭam itu.",
    "pronunciationRoman": "nāṉ innum pākkāda paḍam idu.",
    "katakana": "ナーン インヌム パーッカーダ パダム イドゥ。",
    "meaningJa": "これは私がまだ見ていない映画です。",
    "literalJapanese": "私＋まだ＋見ていない＋映画＋これ",
    "morphemes": [
      {
        "surfaceTamil": "நான்",
        "gloss": "私が"
      },
      {
        "surfaceTamil": "இன்னும்",
        "gloss": "まだ"
      },
      {
        "surfaceTamil": "பாக்காத",
        "gloss": "見ていない・否定連体形"
      },
      {
        "surfaceTamil": "படம்",
        "gloss": "映画・中心名詞"
      },
      {
        "surfaceTamil": "இது",
        "gloss": "これです"
      }
    ],
    "grammarNote": "பாக்காத は「見ていない」という否定を後ろの படம் へつなぎます。",
    "vocabulary": [
      "நான்",
      "இன்னும்",
      "பாக்காத",
      "படம்",
      "இது"
    ],
    "audioGroup": "lesson17-core",
    "featured": true,
    "counterparts": [
      {
        "primaryRegister": "LT-WR",
        "targetTamil": "நான் இன்னும் பார்க்காத படம் இது.",
        "note": "現代文語・保守的表記"
      }
    ]
  },
  {
    "id": "l17-04",
    "targetTamil": "நேத்து வந்த நண்பர் இன்னிக்கு வீட்டுல இருக்கார்.",
    "structuredRoman": "nēttu vanta naṇpar iṉṉikku vīṭṭ-ula irukk-ār.",
    "pronunciationRoman": "nēttu vanda naṇbar innikku vīṭṭula irukkār.",
    "katakana": "ネーットゥ ヴァンダ ナンバル インニック ヴィーットゥラ イルッカール。",
    "meaningJa": "昨日来た友達は、今日は家にいます。",
    "literalJapanese": "昨日＋来た＋友達＋今日＋家に＋います",
    "morphemes": [
      {
        "surfaceTamil": "நேத்து",
        "gloss": "昨日"
      },
      {
        "surfaceTamil": "வந்த",
        "gloss": "来た・過去連体形"
      },
      {
        "surfaceTamil": "நண்பர்",
        "gloss": "友達・中心名詞"
      },
      {
        "surfaceTamil": "இன்னிக்கு",
        "gloss": "今日"
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
    "grammarNote": "வந்த நண்பர் では、来た人物が中心名詞 நண்பர் です。文全体の述語は最後の இருக்கார் です。",
    "vocabulary": [
      "நேத்து",
      "வந்த",
      "நண்பர்",
      "இன்னிக்கு",
      "வீட்டுல",
      "இருக்கார்"
    ],
    "audioGroup": "lesson17-bank",
    "featured": false
  },
  {
    "id": "l17-05",
    "targetTamil": "ரவி வாங்கின டிக்கெட் என்கிட்ட இருக்கு.",
    "structuredRoman": "ravi vāṅkiṉa ṭikkeṭ eṉ-kiṭṭa irukku.",
    "pronunciationRoman": "ravi vāngina ṭikkeṭ enkiṭṭa irukku.",
    "katakana": "ラヴィ ヴァーンギナ ティッケトゥ エンキッタ イルック。",
    "meaningJa": "ラヴィが買った切符は私の手元にあります。",
    "literalJapanese": "ラヴィ＋買った＋切符＋私の所に＋あります",
    "morphemes": [
      {
        "surfaceTamil": "ரவி",
        "gloss": "ラヴィが"
      },
      {
        "surfaceTamil": "வாங்கின",
        "gloss": "買った・過去連体形"
      },
      {
        "surfaceTamil": "டிக்கெட்",
        "gloss": "切符・中心名詞"
      },
      {
        "surfaceTamil": "என்கிட்ட",
        "gloss": "私の手元に"
      },
      {
        "surfaceTamil": "இருக்கு",
        "gloss": "あります"
      }
    ],
    "grammarNote": "வாங்கின は後ろの டிக்கெட் を説明します。切符の所在は文末の என்கிட்ட இருக்கு で述べます。",
    "vocabulary": [
      "ரவி",
      "வாங்கின",
      "டிக்கெட்",
      "என்கிட்ட",
      "இருக்கு"
    ],
    "audioGroup": "lesson17-bank",
    "featured": false
  },
  {
    "id": "l17-06",
    "targetTamil": "நான் தங்கற ஹோட்டல் கடலுக்கு பக்கத்துல இருக்கு.",
    "structuredRoman": "nāṉ taṅkaṟa hōṭṭal kaṭal-ukku pakkatt-ula irukku.",
    "pronunciationRoman": "nāṉ tangara hōṭṭal kaḍalukku pakkattula irukku.",
    "katakana": "ナーン タンガラ ホーッタル カダルック パッカットゥラ イルック。",
    "meaningJa": "私が泊まるホテルは海の近くにあります。",
    "literalJapanese": "私＋泊まる＋ホテル＋海の近くに＋あります",
    "morphemes": [
      {
        "surfaceTamil": "நான்",
        "gloss": "私が"
      },
      {
        "surfaceTamil": "தங்கற",
        "gloss": "泊まる・連体形"
      },
      {
        "surfaceTamil": "ஹோட்டல்",
        "gloss": "ホテル・中心名詞"
      },
      {
        "surfaceTamil": "கடலுக்கு பக்கத்துல",
        "gloss": "海の近くに"
      },
      {
        "surfaceTamil": "இருக்கு",
        "gloss": "あります"
      }
    ],
    "grammarNote": "場所を説明する場合も関係代名詞を置かず、தங்கற の後ろに中心名詞 ஹோட்டல் を置きます。",
    "vocabulary": [
      "நான்",
      "தங்கற",
      "ஹோட்டல்",
      "கடலுக்கு பக்கத்துல",
      "இருக்கு"
    ],
    "audioGroup": "lesson17-bank",
    "featured": false
  },
  {
    "id": "l17-07",
    "targetTamil": "அவர் சொன்ன விஷயம் எனக்கு புரியல.",
    "structuredRoman": "avar coṉṉa viṣayam eṉ-akku puriyala.",
    "pronunciationRoman": "avar sonna viṣayam enakku puriyala.",
    "katakana": "アヴァル ソンナ ヴィシャヤム エナック プリヤラ。",
    "meaningJa": "その方が言ったことは、私には分かりませんでした／分かりません。",
    "literalJapanese": "その方＋言った＋事柄＋私には＋分からない",
    "morphemes": [
      {
        "surfaceTamil": "அவர்",
        "gloss": "その方が"
      },
      {
        "surfaceTamil": "சொன்ன",
        "gloss": "言った・過去連体形"
      },
      {
        "surfaceTamil": "விஷயம்",
        "gloss": "事柄・中心名詞"
      },
      {
        "surfaceTamil": "எனக்கு",
        "gloss": "私には"
      },
      {
        "surfaceTamil": "புரியல",
        "gloss": "分かりません"
      }
    ],
    "grammarNote": "சொன்ன விஷயம் は中心名詞が表面にある連体修飾です。第18課の சொன்னது／சொன்னதை と対比します。",
    "vocabulary": [
      "அவர்",
      "சொன்ன",
      "விஷயம்",
      "எனக்கு",
      "புரியல"
    ],
    "audioGroup": "lesson17-bank",
    "featured": false
  },
  {
    "id": "l17-08",
    "targetTamil": "இங்கே நிக்கற பஸ் அடையாறுக்கு போகுது.",
    "structuredRoman": "iṅkē nikkaṟa pas aṭaiyāṟ-ukku pōku-tu.",
    "pronunciationRoman": "ingē nikkara bas aḍaiyārukku pōgudu.",
    "katakana": "インゲー ニッカラ バス アダイヤールック ポーグドゥ。",
    "meaningJa": "ここに止まっているバスはアダイヤールへ行きます。",
    "literalJapanese": "ここに＋止まっている＋バス＋アダイヤールへ＋行きます",
    "morphemes": [
      {
        "surfaceTamil": "இங்கே",
        "gloss": "ここに"
      },
      {
        "surfaceTamil": "நிக்கற",
        "gloss": "止まっている・連体形"
      },
      {
        "surfaceTamil": "பஸ்",
        "gloss": "バス・中心名詞"
      },
      {
        "surfaceTamil": "அடையாறுக்கு",
        "gloss": "アダイヤールへ"
      },
      {
        "surfaceTamil": "போகுது",
        "gloss": "行きます・非人間"
      }
    ],
    "grammarNote": "நிக்கற பஸ் が主語となり、文末の போகுது が非人間の有限述語です。",
    "vocabulary": [
      "இங்கே",
      "நிக்கற",
      "பஸ்",
      "அடையாறுக்கு",
      "போகுது"
    ],
    "audioGroup": "lesson17-bank",
    "featured": false,
    "counterparts": [
      {
        "primaryRegister": "LT-WR",
        "targetTamil": "இங்கே நிற்கிற பஸ் அடையாறுக்கு போகிறது.",
        "note": "現代文語・保守的表記"
      }
    ]
  },
  {
    "id": "l17-09",
    "targetTamil": "நான் நேத்து பாத்த படத்தை இன்னிக்கு மறுபடியும் பாக்கறேன்.",
    "structuredRoman": "nāṉ nēttu pātta paṭatt-ai iṉṉikku maṟupaṭiyum pākkaṟ-ēṉ.",
    "pronunciationRoman": "nāṉ nēttu pātta paḍattai innikku marubaḍiyum pākkarēn.",
    "katakana": "ナーン ネーットゥ パーッタ パダッタイ インニック マルバディユム パーッカレーン。",
    "meaningJa": "私は昨日見た映画を、今日もう一度見ます。",
    "literalJapanese": "私＋昨日＋見た＋映画を＋今日＋もう一度＋見ます",
    "morphemes": [
      {
        "surfaceTamil": "நான் நேத்து பாத்த",
        "gloss": "私が昨日見た"
      },
      {
        "surfaceTamil": "படத்தை",
        "gloss": "映画を・中心名詞＋対格"
      },
      {
        "surfaceTamil": "இன்னிக்கு",
        "gloss": "今日"
      },
      {
        "surfaceTamil": "மறுபடியும்",
        "gloss": "もう一度"
      },
      {
        "surfaceTamil": "பாக்கறேன்",
        "gloss": "見ます・私"
      }
    ],
    "grammarNote": "対格は連体形 பாத்த ではなく、最後の中心名詞 படம் に付き படத்தை になります。",
    "vocabulary": [
      "நான்",
      "நேத்து",
      "பாத்த",
      "படத்தை",
      "இன்னிக்கு",
      "மறுபடியும்",
      "பாக்கறேன்"
    ],
    "audioGroup": "lesson17-bank",
    "featured": false
  },
  {
    "id": "l17-10",
    "targetTamil": "நாளைக்கு வர்ற நண்பருக்கு ஒரு ரூம் வேணும்.",
    "structuredRoman": "nāḷai-kku varṟa naṇpar-ukku oru rūm vēṇum.",
    "pronunciationRoman": "nāḷaikku varra naṇbarukku oru rūm vēṇum.",
    "katakana": "ナーレック ヴァッラ ナンバルック オル ルーム ヴェーヌム。",
    "meaningJa": "明日来る友達には部屋が一つ必要です。",
    "literalJapanese": "明日＋来る＋友達に＋一つの部屋＋必要です",
    "morphemes": [
      {
        "surfaceTamil": "நாளைக்கு",
        "gloss": "明日"
      },
      {
        "surfaceTamil": "வர்ற",
        "gloss": "来る・連体形"
      },
      {
        "surfaceTamil": "நண்பருக்கு",
        "gloss": "友達に・中心名詞＋与格"
      },
      {
        "surfaceTamil": "ஒரு ரூம்",
        "gloss": "部屋一つ"
      },
      {
        "surfaceTamil": "வேணும்",
        "gloss": "必要です"
      }
    ],
    "grammarNote": "与格 -க்கு も連体形ではなく中心名詞 நண்பர் に付きます。",
    "vocabulary": [
      "நாளைக்கு",
      "வர்ற",
      "நண்பருக்கு",
      "ஒரு",
      "ரூம்",
      "வேணும்"
    ],
    "audioGroup": "lesson17-bank",
    "featured": false
  },
  {
    "id": "l17-11",
    "targetTamil": "நாம போற ஹோட்டலுக்கு பக்கத்துல ஒரு கடை இருக்கு.",
    "structuredRoman": "nāma pōṟa hōṭṭal-ukku pakkatt-ula oru kaṭai irukku.",
    "pronunciationRoman": "nāma pōra hōṭṭalukku pakkattula oru kaḍai irukku.",
    "katakana": "ナーマ ポーラ ホーッタルック パッカットゥラ オル カダイ イルック。",
    "meaningJa": "私たちが行くホテルの近くに店があります。",
    "literalJapanese": "私たち＋行く＋ホテルの近くに＋一つの店＋あります",
    "morphemes": [
      {
        "surfaceTamil": "நாம",
        "gloss": "私たちが・聞き手を含む"
      },
      {
        "surfaceTamil": "போற",
        "gloss": "行く・連体形"
      },
      {
        "surfaceTamil": "ஹோட்டலுக்கு பக்கத்துல",
        "gloss": "ホテルの近くに"
      },
      {
        "surfaceTamil": "ஒரு கடை",
        "gloss": "店が一軒"
      },
      {
        "surfaceTamil": "இருக்கு",
        "gloss": "あります"
      }
    ],
    "grammarNote": "長い名詞句でも、போற ஹோட்டல் を一まとまりにし、後置詞句は中心名詞側から作ります。",
    "vocabulary": [
      "நாம",
      "போற",
      "ஹோட்டலுக்கு",
      "பக்கத்துல",
      "ஒரு",
      "கடை",
      "இருக்கு"
    ],
    "audioGroup": "lesson17-bank",
    "featured": false
  },
  {
    "id": "l17-12",
    "targetTamil": "நான் தேடற புத்தகம் இங்கே இருக்கு.",
    "structuredRoman": "nāṉ tēṭaṟa puttakam iṅkē irukku.",
    "pronunciationRoman": "nāṉ tēḍara puttagam ingē irukku.",
    "katakana": "ナーン テーダラ プッタガム インゲー イルック。",
    "meaningJa": "私が探している本はここにあります。",
    "literalJapanese": "私＋探している＋本＋ここに＋あります",
    "morphemes": [
      {
        "surfaceTamil": "நான்",
        "gloss": "私が"
      },
      {
        "surfaceTamil": "தேடற",
        "gloss": "探している・連体形"
      },
      {
        "surfaceTamil": "புத்தகம்",
        "gloss": "本・中心名詞"
      },
      {
        "surfaceTamil": "இங்கே",
        "gloss": "ここに"
      },
      {
        "surfaceTamil": "இருக்கு",
        "gloss": "あります"
      }
    ],
    "grammarNote": "中心名詞 புத்தகம் が出るまで、நான் தேடற を「本を説明する範囲」として保留します。",
    "vocabulary": [
      "நான்",
      "தேடற",
      "புத்தகம்",
      "இங்கே",
      "இருக்கு"
    ],
    "audioGroup": "lesson17-bank",
    "featured": false
  }
].map(make);

  const patterns = [
  {
    "id": "l17-form-paakkara",
    "targetTamil": "பாக்கற படம்",
    "structuredRoman": "pākkaṟa paṭam",
    "pronunciationRoman": "pākkara paḍam",
    "katakana": "パーッカラ パダム",
    "meaningJa": "見ている／見る映画",
    "literalJapanese": "見る・非過去連体＋映画",
    "grammarNote": "非過去・進行・習慣を文脈から読む口語連体形。",
    "vocabulary": [
      "பாக்கற படம்"
    ],
    "audioGroup": "l17-form-forms",
    "kind": "非過去連体",
    "group": "時制・否定",
    "note": "非過去・進行・習慣を文脈から読む口語連体形。"
  },
  {
    "id": "l17-form-paatta",
    "targetTamil": "பாத்த படம்",
    "structuredRoman": "pātta paṭam",
    "pronunciationRoman": "pātta paḍam",
    "katakana": "パーッタ パダム",
    "meaningJa": "見た映画",
    "literalJapanese": "見た・過去連体＋映画",
    "grammarNote": "過去の出来事を後ろの名詞へつなぐ。",
    "vocabulary": [
      "பாத்த படம்"
    ],
    "audioGroup": "l17-form-forms",
    "kind": "過去連体",
    "group": "時制・否定",
    "note": "過去の出来事を後ろの名詞へつなぐ。"
  },
  {
    "id": "l17-form-paakkaata",
    "targetTamil": "பாக்காத படம்",
    "structuredRoman": "pākk-āta paṭam",
    "pronunciationRoman": "pākkāda paḍam",
    "katakana": "パーッカーダ パダム",
    "meaningJa": "見ていない映画",
    "literalJapanese": "見る＋否定連体＋映画",
    "grammarNote": "否定を後ろの中心名詞へつなぐ。",
    "vocabulary": [
      "பாக்காத படம்"
    ],
    "audioGroup": "l17-form-forms",
    "kind": "否定連体",
    "group": "時制・否定",
    "note": "否定を後ろの中心名詞へつなぐ。"
  },
  {
    "id": "l17-form-pora",
    "targetTamil": "போற பஸ்",
    "structuredRoman": "pōṟa pas",
    "pronunciationRoman": "pōra bas",
    "katakana": "ポーラ バス",
    "meaningJa": "行くバス",
    "literalJapanese": "行く・連体＋バス",
    "grammarNote": "行き先・予定・通常運行を文脈から読む。",
    "vocabulary": [
      "போற பஸ்"
    ],
    "audioGroup": "l17-form-forms",
    "kind": "移動連体",
    "group": "旅行",
    "note": "行き先・予定・通常運行を文脈から読む。"
  },
  {
    "id": "l17-form-vanta",
    "targetTamil": "வந்த நண்பர்",
    "structuredRoman": "vanta naṇpar",
    "pronunciationRoman": "vanda naṇbar",
    "katakana": "ヴァンダ ナンバル",
    "meaningJa": "来た友達",
    "literalJapanese": "来た・過去連体＋友達",
    "grammarNote": "中心名詞が連体節内の行為者になる代表。",
    "vocabulary": [
      "வந்த நண்பர்"
    ],
    "audioGroup": "l17-form-forms",
    "kind": "主語関係",
    "group": "中心名詞の役割",
    "note": "中心名詞が連体節内の行為者になる代表。"
  },
  {
    "id": "l17-form-vaangina",
    "targetTamil": "வாங்கின டிக்கெட்",
    "structuredRoman": "vāṅkiṉa ṭikkeṭ",
    "pronunciationRoman": "vāngina ṭikkeṭ",
    "katakana": "ヴァーンギナ ティッケトゥ",
    "meaningJa": "買った切符",
    "literalJapanese": "買った・過去連体＋切符",
    "grammarNote": "中心名詞が連体節内の対象になる代表。",
    "vocabulary": [
      "வாங்கின டிக்கெட்"
    ],
    "audioGroup": "l17-form-forms",
    "kind": "目的語関係",
    "group": "中心名詞の役割",
    "note": "中心名詞が連体節内の対象になる代表。"
  },
  {
    "id": "l17-form-sonna",
    "targetTamil": "சொன்ன விஷயம்",
    "structuredRoman": "coṉṉa viṣayam",
    "pronunciationRoman": "sonna viṣayam",
    "katakana": "ソンナ ヴィシャヤム",
    "meaningJa": "言った事柄",
    "literalJapanese": "言った・過去連体＋事柄",
    "grammarNote": "中心名詞が明示される連体修飾。",
    "vocabulary": [
      "சொன்ன விஷயம்"
    ],
    "audioGroup": "l17-form-forms",
    "kind": "内容名詞",
    "group": "中心名詞の役割",
    "note": "中心名詞が明示される連体修飾。"
  },
  {
    "id": "l17-form-tangara",
    "targetTamil": "தங்கற ஹோட்டல்",
    "structuredRoman": "taṅkaṟa hōṭṭal",
    "pronunciationRoman": "tangara hōṭṭal",
    "katakana": "タンガラ ホーッタル",
    "meaningJa": "泊まるホテル",
    "literalJapanese": "泊まる・連体＋ホテル",
    "grammarNote": "場所を表す中心名詞も関係代名詞なしで修飾する。",
    "vocabulary": [
      "தங்கற ஹோட்டல்"
    ],
    "audioGroup": "l17-form-forms",
    "kind": "場所関係",
    "group": "中心名詞の役割",
    "note": "場所を表す中心名詞も関係代名詞なしで修飾する。"
  },
  {
    "id": "l17-form-acc",
    "targetTamil": "பாத்த படத்தை",
    "structuredRoman": "pātta paṭatt-ai",
    "pronunciationRoman": "pātta paḍattai",
    "katakana": "パーッタ パダッタイ",
    "meaningJa": "見た映画を",
    "literalJapanese": "連体節＋中心名詞＋対格",
    "grammarNote": "格は連体形ではなく最後の中心名詞へ付く。",
    "vocabulary": [
      "பாத்த படத்தை"
    ],
    "audioGroup": "l17-form-forms",
    "kind": "対格付き名詞句",
    "group": "格",
    "note": "格は連体形ではなく最後の中心名詞へ付く。"
  },
  {
    "id": "l17-form-dat",
    "targetTamil": "வர்ற நண்பருக்கு",
    "structuredRoman": "varṟa naṇpar-ukku",
    "pronunciationRoman": "varra naṇbarukku",
    "katakana": "ヴァッラ ナンバルック",
    "meaningJa": "来る友達に",
    "literalJapanese": "連体節＋中心名詞＋与格",
    "grammarNote": "与格も最後の中心名詞へ付く。",
    "vocabulary": [
      "வர்ற நண்பருக்கு"
    ],
    "audioGroup": "l17-form-forms",
    "kind": "与格付き名詞句",
    "group": "格",
    "note": "与格も最後の中心名詞へ付く。"
  }
].map(make);

  const lesson = {
  "id": "lesson17-v39",
  "number": 17,
  "navTitle": "連体修飾",
  "title": "動詞を「後ろの名詞を待つ形」にして、長い名詞句を作る",
  "tamilTitle": "பாக்கற படம் · பாத்த படம் · பாக்காத படம்",
  "deck": "関係代名詞を置かず、連体形を中心名詞の前へ置きます。人称語尾の有無と、格語尾が最後の中心名詞へ付くことを重点的に確認します。",
  "targets": [
    "非過去・過去・否定の連体形",
    "人称語尾を付けない",
    "中心名詞を最後に読む",
    "格は中心名詞へ",
    "旅行の長い名詞句"
  ],
  "criticalPoints": [
    "<span class=\"ta-inline\" lang=\"ta\">பாத்த படம்</span> <span class=\"roman-inline\">(pātta paṭam)</span> のように、連体形を中心名詞の前へ置く。英語型の関係代名詞を挿入しない。",
    "連体形 <span class=\"ta-inline\" lang=\"ta\">பாத்த / போற / பாக்காத</span> <span class=\"roman-inline\">(pātta / pōṟa / pākk-āta)</span> は人称語尾で文を終えず、後ろの名詞を待つ。",
    "名詞句全体の格は <span class=\"ta-inline\" lang=\"ta\">படத்தை / நண்பருக்கு</span> <span class=\"roman-inline\">(paṭatt-ai / naṇpar-ukku)</span> のように最後の中心名詞へ付く。"
  ],
  "readSections": [
    {
      "kicker": "まず結論",
      "heading": "「私が昨日見た映画」は、日本語と同じく説明を名詞の前へ置く",
      "takeaway": "<span class=\"ta-inline\" lang=\"ta\">நான் நேத்து பாத்த படம்</span> <span class=\"roman-inline\">(nāṉ nēttu pātta paṭam)</span> は「私が＋昨日＋見た＋映画」の順です。",
      "paragraphs": [
        "タミル語は英語の who・that・which に相当する独立した関係代名詞を必要としません。<span class=\"ta-inline\" lang=\"ta\">பாத்த</span> <span class=\"roman-inline\">(pātta)</span> を中心名詞 <span class=\"ta-inline\" lang=\"ta\">படம்</span> <span class=\"roman-inline\">(paṭam)</span> の前へ置けば、「見た映画」になります。",
        "長くなっても最後の中心名詞を待ちます。<span class=\"ta-inline\" lang=\"ta\">நான் தங்கற ஹோட்டல்</span> <span class=\"roman-inline\">(nāṉ taṅkaṟa hōṭṭal)</span> なら、最後の <span class=\"ta-inline\" lang=\"ta\">ஹோட்டல்</span> <span class=\"roman-inline\">(hōṭṭal)</span> が出た時点で、前の語を「ホテルを説明する範囲」としてまとめます。"
      ]
    },
    {
      "kicker": "形を読む",
      "heading": "非過去・過去・否定を、後ろの同じ名詞へつないで比べる",
      "takeaway": "<span class=\"ta-inline\" lang=\"ta\">பாக்கற படம் / பாத்த படம் / பாக்காத படம்</span> <span class=\"roman-inline\">(pākkaṟa paṭam / pātta paṭam / pākk-āta paṭam)</span> を三点セットで覚えます。",
      "paragraphs": [
        "<span class=\"ta-inline\" lang=\"ta\">பாக்கற</span> <span class=\"roman-inline\">(pākkaṟa)</span> は見ている・見る・普段見るなどを文脈から読みます。<span class=\"ta-inline\" lang=\"ta\">பாத்த</span> <span class=\"roman-inline\">(pātta)</span> は見た、<span class=\"ta-inline\" lang=\"ta\">பாக்காத</span> <span class=\"roman-inline\">(pākk-āta)</span> は見ていないという否定です。",
        "初級では一つの語尾から未知動詞の連体形を量産しません。<span class=\"ta-inline\" lang=\"ta\">வந்த நண்பர்</span> <span class=\"roman-inline\">(vanta naṇpar)</span>、<span class=\"ta-inline\" lang=\"ta\">வாங்கின டிக்கெட்</span> <span class=\"roman-inline\">(vāṅkiṉa ṭikkeṭ)</span> のような頻出完成形を例文で増やします。"
      ]
    },
    {
      "kicker": "なぜ？",
      "heading": "連体形は文を終えないので、人称語尾を持たない",
      "takeaway": "<span class=\"ta-inline\" lang=\"ta\">பாத்தேன்</span> <span class=\"roman-inline\">(pātt-ēṉ)</span> は「私は見た」で文を終え、<span class=\"ta-inline\" lang=\"ta\">பாத்த படம்</span> <span class=\"roman-inline\">(pātta paṭam)</span> の பாத்த は名詞を待ちます。",
      "paragraphs": [
        "有限動詞 <span class=\"ta-inline\" lang=\"ta\">பாத்தேன்</span> <span class=\"roman-inline\">(pātt-ēṉ)</span> には一人称の <span class=\"ta-inline\" lang=\"ta\">-ேன்</span> <span class=\"roman-inline\">(-ēṉ)</span> があります。連体形 <span class=\"ta-inline\" lang=\"ta\">பாத்த</span> <span class=\"roman-inline\">(pātta)</span> には人物語尾がなく、誰が見たかは前の主語か文脈から読みます。",
        "<span class=\"ta-inline\" lang=\"ta\">அவர் சொன்ன விஷயம்</span> <span class=\"roman-inline\">(avar coṉṉa viṣayam)</span> では அவர் が「言った」の主語です。一方、<span class=\"ta-inline\" lang=\"ta\">வந்த நண்பர்</span> <span class=\"roman-inline\">(vanta naṇpar)</span> では中心名詞 நண்பர் 自身が「来た」人です。"
      ]
    },
    {
      "kicker": "実際に使う",
      "heading": "バス、ホテル、切符、人を探す場面で中心名詞を最後に置く",
      "takeaway": "<span class=\"ta-inline\" lang=\"ta\">சென்னைக்கு போற பஸ்</span> <span class=\"roman-inline\">(ceṉṉai-kku pōṟa pas)</span> と <span class=\"ta-inline\" lang=\"ta\">நான் தங்கற ஹோட்டல்</span> <span class=\"roman-inline\">(nāṉ taṅkaṟa hōṭṭal)</span> は旅行でそのまま使えます。",
      "paragraphs": [
        "交通では <span class=\"ta-inline\" lang=\"ta\">சென்னைக்கு போற பஸ் எது</span> <span class=\"roman-inline\">(ceṉṉai-kku pōṟa pas etu)</span> のように、行き先を含む説明を பஸ் の前へ置きます。",
        "ホテルでは <span class=\"ta-inline\" lang=\"ta\">நாம போற ஹோட்டலுக்கு பக்கத்துல</span> <span class=\"roman-inline\">(nāma pōṟa hōṭṭal-ukku pakkatt-ula)</span> のように、連体節を含む名詞句全体を後置詞句へ伸ばせます。"
      ]
    },
    {
      "kicker": "混ぜない",
      "heading": "有限動詞と連体形、連体形と格語尾の位置を混ぜない",
      "takeaway": "<span class=\"ta-inline\" lang=\"ta\">பாத்தேன்</span> <span class=\"roman-inline\">(pātt-ēṉ)</span> は文末、<span class=\"ta-inline\" lang=\"ta\">பாத்த படம்</span> <span class=\"roman-inline\">(pātta paṭam)</span> は名詞句。対格は <span class=\"ta-inline\" lang=\"ta\">படத்தை</span> <span class=\"roman-inline\">(paṭatt-ai)</span> に付きます。",
      "paragraphs": [
        "「私が見た映画を」は <span class=\"ta-inline\" lang=\"ta\">நான் பாத்த படத்தை</span> <span class=\"roman-inline\">(nāṉ pātta paṭatt-ai)</span> です。連体形へ対格を付けず、最後の中心名詞を格変化させます。",
        "<span class=\"ta-inline\" lang=\"ta\">சொன்ன விஷயம்</span> <span class=\"roman-inline\">(coṉṉa viṣayam)</span> は中心名詞 விஷயம் が表面にあります。次課の <span class=\"ta-inline\" lang=\"ta\">சொன்னது</span> <span class=\"roman-inline\">(coṉṉa-tu)</span> は中心名詞を置かず、動詞側が「こと・もの」を担います。"
      ],
      "note": {
        "tone": "pink",
        "title": "この課の最重要ミス",
        "body": "連体形へ人称語尾を足して文を終えない。格語尾を連体形へ付けない。最後の中心名詞が出るまで意味を確定しない。"
      }
    },
    {
      "kicker": "3文で復習",
      "heading": "見た映画を評価し、行くバスを尋ね、来る友達の部屋を用意する",
      "takeaway": "<span class=\"ta-inline\" lang=\"ta\">பாத்த படம்</span> <span class=\"roman-inline\">(pātta paṭam)</span>、<span class=\"ta-inline\" lang=\"ta\">போற பஸ்</span> <span class=\"roman-inline\">(pōṟa pas)</span>、<span class=\"ta-inline\" lang=\"ta\">வர்ற நண்பருக்கு</span> <span class=\"roman-inline\">(varṟa naṇpar-ukku)</span> を順に読みます。",
      "paragraphs": [
        "<span class=\"ta-inline\" lang=\"ta\">நான் நேத்து பாத்த படம் நல்லா இருந்தது.</span> <span class=\"roman-inline\">(nāṉ nēttu pātta paṭam nallā iruntatu.)</span><br><span class=\"reading-ja\">私が昨日見た映画は良かったです。</span><br><br><span class=\"ta-inline\" lang=\"ta\">சென்னைக்கு போற பஸ் எது?</span> <span class=\"roman-inline\">(ceṉṉai-kku pōṟa pas etu?)</span><br><span class=\"reading-ja\">チェンナイへ行くバスはどれですか。</span><br><br><span class=\"ta-inline\" lang=\"ta\">நாளைக்கு வர்ற நண்பருக்கு ஒரு ரூம் வேணும்.</span> <span class=\"roman-inline\">(nāḷai-kku varṟa naṇpar-ukku oru rūm vēṇum.)</span><br><span class=\"reading-ja\">明日来る友達には部屋が一つ必要です。</span>"
      ],
      "miniReading": {
        "intro": "連体形＋中心名詞、疑問、中心名詞＋与格を一つずつ読みます。",
        "ids": [
          "l17-01",
          "l17-02",
          "l17-10"
        ]
      }
    }
  ],
  "formConfig": {
    "mode": "grammar",
    "title": "連体形・中心名詞・格の位置を一枚で照合する",
    "intro": "非過去・過去・否定の連体形、中心名詞が担う関係、名詞句全体への対格・与格を並べます。",
    "checkpoint": "人称語尾のない連体形を見つけ、最後の中心名詞と格語尾の位置を説明できれば合格です。",
    "patterns": Object.freeze(patterns)
  },
  "quiz": [
    {
      "focus": "形態分解",
      "q": "<span class=\"ta-inline\" lang=\"ta\">நான் நேத்து பாத்த படம்</span> <span class=\"roman-inline\">(nāṉ nēttu pātta paṭam)</span> の骨格は？",
      "options": [
        "私が＋昨日＋見た＋映画",
        "私＋昨日＋見ました・私",
        "昨日＋映画を＋見ませんでした",
        "私たち＋行く＋バス"
      ],
      "answer": 0,
      "feedback": "<span class=\"ta-inline\" lang=\"ta\">பாத்த</span> <span class=\"roman-inline\">(pātta)</span> は後ろの <span class=\"ta-inline\" lang=\"ta\">படம்</span> <span class=\"roman-inline\">(paṭam)</span> を待つ連体形です。",
      "rule": "連体節を中心名詞の前へ置き、最後の名詞を待つ。",
      "tags": [
        "正解",
        "有限動詞との混同",
        "否定過去との混同",
        "主語・語彙の混同"
      ]
    },
    {
      "focus": "機能選択",
      "q": "「チェンナイへ行くバスはどれですか」に合う文は？",
      "options": [
        "<span class=\"quiz-option-ta\" lang=\"ta\">சென்னைக்கு போற பஸ் எது?</span><span class=\"quiz-option-roman\">ceṉṉai-kku pōṟa pas etu?</span><span class=\"quiz-option-ja\">チェンナイへ行くバスはどれですか</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">பஸ் எங்கே நிக்கும்?</span><span class=\"quiz-option-roman\">pas eṅkē nikkum?</span><span class=\"quiz-option-ja\">バスはどこに止まりますか</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">டிக்கெட் இருக்கா?</span><span class=\"quiz-option-roman\">ṭikkeṭ irukk-ā?</span><span class=\"quiz-option-ja\">切符はありますか</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">நாம போகலாமா?</span><span class=\"quiz-option-roman\">nāma pōka-lām-ā?</span><span class=\"quiz-option-ja\">行きましょうか</span>"
      ],
      "answer": 0,
      "feedback": "行き先を含む <span class=\"ta-inline\" lang=\"ta\">சென்னைக்கு போற</span> <span class=\"roman-inline\">(ceṉṉai-kku pōṟa)</span> が中心名詞 பஸ் を説明します。",
      "rule": "旅行の「〜する名詞」は、連体形＋中心名詞で作る。",
      "tags": [
        "正解",
        "場所疑問",
        "存在疑問",
        "勧誘"
      ]
    },
    {
      "focus": "実用場面",
      "q": "「ラヴィが買った切符は私の手元にあります」は？",
      "options": [
        "<span class=\"quiz-option-ta\" lang=\"ta\">ரவி வாங்கின டிக்கெட் என்கிட்ட இருக்கு.</span><span class=\"quiz-option-roman\">ravi vāṅkiṉa ṭikkeṭ eṉ-kiṭṭa irukku.</span><span class=\"quiz-option-ja\">ラヴィが買った切符は私の手元にあります</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">என்கிட்ட ஒரு டிக்கெட் இருக்கு.</span><span class=\"quiz-option-roman\">eṉ-kiṭṭa oru ṭikkeṭ irukku.</span><span class=\"quiz-option-ja\">私は切符を一枚持っています</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">ரவி டிக்கெட் வாங்கினான்.</span><span class=\"quiz-option-roman\">ravi ṭikkeṭ vāṅkiṉ-āṉ.</span><span class=\"quiz-option-ja\">ラヴィは切符を買いました</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">டிக்கெட் எவ்வளவு?</span><span class=\"quiz-option-roman\">ṭikkeṭ evvaḷavu?</span><span class=\"quiz-option-ja\">切符はいくらですか</span>"
      ],
      "answer": 0,
      "feedback": "<span class=\"ta-inline\" lang=\"ta\">ரவி வாங்கின</span> <span class=\"roman-inline\">(ravi vāṅkiṉa)</span> が டிக்கெட் を説明し、என்கிட்ட இருக்கு が所在を述べます。",
      "rule": "連体節と文全体の述語を別々に見つける。",
      "tags": [
        "正解",
        "所有だけ",
        "独立した過去文",
        "値段疑問"
      ]
    },
    {
      "focus": "混同防止",
      "q": "<span class=\"ta-inline\" lang=\"ta\">பாத்தேன்</span> <span class=\"roman-inline\">(pātt-ēṉ)</span> と <span class=\"ta-inline\" lang=\"ta\">பாத்த படம்</span> <span class=\"roman-inline\">(pātta paṭam)</span> の違いは？",
      "options": [
        "前者は一人称で文を終え、後者は映画を修飾する",
        "前者は名詞、後者は命令",
        "前者は未来、後者は否定",
        "どちらも同じ文末形"
      ],
      "answer": 0,
      "feedback": "<span class=\"ta-inline\" lang=\"ta\">-ேன்</span> <span class=\"roman-inline\">(-ēṉ)</span> は有限動詞の一人称語尾です。連体形 பாத்த は後ろの名詞を待ちます。",
      "rule": "人称語尾があれば文末候補、連体形なら中心名詞を待つ。",
      "tags": [
        "正解",
        "品詞の混同",
        "時制・否定の混同",
        "同一視"
      ]
    },
    {
      "focus": "総合復習",
      "q": "「私が昨日見た映画を、今日もう一度見ます」で対格が付く場所は？",
      "options": [
        "<span class=\"quiz-option-ta\" lang=\"ta\">நான் நேத்து பாத்த படத்தை இன்னிக்கு மறுபடியும் பாக்கறேன்.</span><span class=\"quiz-option-roman\">nāṉ nēttu pātta paṭatt-ai iṉṉikku maṟupaṭiyum pākkaṟ-ēṉ.</span><span class=\"quiz-option-ja\">中心名詞 படம் に対格を付ける</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">நான் நேத்தை பாத்த படம் இன்னிக்கு மறுபடியும் பாக்கறேன்.</span><span class=\"quiz-option-roman\">nāṉ nētt-ai pātta paṭam iṉṉikku maṟupaṭiyum pākkaṟ-ēṉ.</span><span class=\"quiz-option-ja\">昨日に対格を付ける</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">நான் நேத்து பாத்தை படம் இன்னிக்கு மறுபடியும் பாக்கறேன்.</span><span class=\"quiz-option-roman\">nāṉ nēttu pātt-ai paṭam iṉṉikku maṟupaṭiyum pākkaṟ-ēṉ.</span><span class=\"quiz-option-ja\">連体形に対格を付ける</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">நான் நேத்து பாத்த படம் இன்னிக்கு மறுபடியும் பாக்கறேன்.</span><span class=\"quiz-option-roman\">nāṉ nēttu pātta paṭam iṉṉikku maṟupaṭiyum pākkaṟ-ēṉ.</span><span class=\"quiz-option-ja\">目的語でも格を示さない</span>"
      ],
      "answer": 0,
      "feedback": "長い名詞句全体の文中役割は、最後の中心名詞 <span class=\"ta-inline\" lang=\"ta\">படம்</span> <span class=\"roman-inline\">(paṭam)</span> へ対格を付けて示します。",
      "rule": "連体節を含む名詞句の格は、最後の中心名詞へ付く。",
      "tags": [
        "正解",
        "時間語への誤付加",
        "連体形への誤付加",
        "対格の見落とし"
      ]
    }
  ],
  "heroExample": examples[0],
  "examples": Object.freeze(examples)
};

  lesson.targets = Object.freeze(lesson.targets);
  lesson.criticalPoints = Object.freeze(lesson.criticalPoints);
  lesson.readSections = Object.freeze(lesson.readSections);
  lesson.formConfig = Object.freeze(lesson.formConfig);
  lesson.quiz = Object.freeze(lesson.quiz);
  window.TAMIL_LESSONS_V30 = window.TAMIL_LESSONS_V30 || [];
  window.TAMIL_LESSONS_V30.push(Object.freeze(lesson));
})();

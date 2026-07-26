(() => {
  "use strict";

  const { entry: E, confidence: C } = window.TAMIL_V30;
  const SOURCES = [
  "TAMIL-INTEGRATED-v2.0-rc.1 §§23-25,31-32",
  "PREDICATE-ENGINE-v1.1 §§1.4,4,7",
  "TAMIL-GRAMMAR-GARDEN Lesson 11",
  "SCHIFFMAN-SPOKEN-TAMIL: adverbial participles and finite verb chaining"
];
  const make = input => E({ ...input, sourceRefs: SOURCES, confidence: C("B", "B", "C", "B") });

  const examples = [
  {
    "id": "l11-01",
    "targetTamil": "கடைக்கு போய் தண்ணி வாங்கினேன்.",
    "structuredRoman": "kaṭai-kku pōy taṇṇi vāṅkiṉ-ēṉ.",
    "pronunciationRoman": "kaḍaikku pōy taṇṇi vāṅginēn.",
    "katakana": "カダイック ポーイ タンニ ヴァーンギネーン。",
    "meaningJa": "店へ行って水を買いました。",
    "literalJapanese": "店へ＋行って＋水＋買った・私",
    "morphemes": [
      {
        "surfaceTamil": "கடைக்கு",
        "gloss": "店へ"
      },
      {
        "surfaceTamil": "போய்",
        "gloss": "行って"
      },
      {
        "surfaceTamil": "தண்ணி",
        "gloss": "水"
      },
      {
        "surfaceTamil": "வாங்கினேன்",
        "gloss": "買いました・私"
      }
    ],
    "grammarNote": "போய் は前の動作をつなぎ、最後の வாங்கினேன் だけが過去・一人称を示します。",
    "vocabulary": [
      "கடை",
      "போய்",
      "தண்ணி",
      "வாங்கினேன்"
    ],
    "audioGroup": "lesson11-core",
    "featured": true
  },
  {
    "id": "l11-02",
    "targetTamil": "சாப்பிட்டு வீட்டுக்கு போனேன்.",
    "structuredRoman": "cāppiṭṭu vīṭṭ-ukku pōṉ-ēṉ.",
    "pronunciationRoman": "sāppiṭṭu vīṭṭukku pōnēn.",
    "katakana": "サーッピットゥ ヴィーットゥック ポーネーン。",
    "meaningJa": "食べてから家へ行きました。",
    "literalJapanese": "食べて＋家へ＋行った・私",
    "morphemes": [
      {
        "surfaceTamil": "சாப்பிட்டு",
        "gloss": "食べて／食べてから"
      },
      {
        "surfaceTamil": "வீட்டுக்கு",
        "gloss": "家へ"
      },
      {
        "surfaceTamil": "போனேன்",
        "gloss": "行きました・私"
      }
    ],
    "grammarNote": "順序は文脈から読みます。時制と人物は最後の போனேன் にあります。",
    "vocabulary": [
      "சாப்பிட்டு",
      "வீட்டுக்கு",
      "போனேன்"
    ],
    "audioGroup": "lesson11-core",
    "featured": true
  },
  {
    "id": "l11-03",
    "targetTamil": "படம் பாத்து வீட்டுக்கு வந்தேன்.",
    "structuredRoman": "paṭam pāttu vīṭṭ-ukku vant-ēṉ.",
    "pronunciationRoman": "paḍam pāttu vīṭṭukku vandēn.",
    "katakana": "パダム パーットゥ ヴィーットゥック ヴァンデーン。",
    "meaningJa": "映画を見て家へ来ました。",
    "literalJapanese": "映画＋見て＋家へ＋来た・私",
    "morphemes": [
      {
        "surfaceTamil": "படம்",
        "gloss": "映画"
      },
      {
        "surfaceTamil": "பாத்து",
        "gloss": "見て"
      },
      {
        "surfaceTamil": "வீட்டுக்கு",
        "gloss": "家へ"
      },
      {
        "surfaceTamil": "வந்தேன்",
        "gloss": "来ました・私"
      }
    ],
    "grammarNote": "பாத்து は標準口語の連結形です。最後の வந்தேன் が文全体を完成させます。",
    "vocabulary": [
      "படம்",
      "பாத்து",
      "வீட்டுக்கு",
      "வந்தேன்"
    ],
    "audioGroup": "lesson11-core",
    "featured": true,
    "counterparts": [
      {
        "primaryRegister": "LT-WR",
        "targetTamil": "படம் பார்த்து வீட்டுக்கு வந்தேன்.",
        "note": "現代文語・保守的表記"
      }
    ]
  },
  {
    "id": "l11-04",
    "targetTamil": "டிக்கெட் வாங்கி உள்ளே போனேன்.",
    "structuredRoman": "ṭikkeṭ vāṅki uḷḷē pōṉ-ēṉ.",
    "pronunciationRoman": "ṭikkeṭ vāṅgi uḷḷē pōnēn.",
    "katakana": "ティッケトゥ ヴァーンギ ウッレー ポーネーン。",
    "meaningJa": "切符を買って中へ入りました。",
    "literalJapanese": "切符＋買って＋中へ＋行った・私",
    "morphemes": [
      {
        "surfaceTamil": "டிக்கெட்",
        "gloss": "切符"
      },
      {
        "surfaceTamil": "வாங்கி",
        "gloss": "買って"
      },
      {
        "surfaceTamil": "உள்ளே",
        "gloss": "中へ"
      },
      {
        "surfaceTamil": "போனேன்",
        "gloss": "行きました・私"
      }
    ],
    "grammarNote": "旅行場面で使いやすい「準備の動作＋移動」の連結です。",
    "vocabulary": [
      "டிக்கெட்",
      "வாங்கி",
      "உள்ளே",
      "போனேன்"
    ],
    "audioGroup": "lesson11-bank",
    "featured": false
  },
  {
    "id": "l11-05",
    "targetTamil": "காபி குடிச்சு வேலை செஞ்சேன்.",
    "structuredRoman": "kāpi kuṭiccu vēlai ceñc-ēṉ.",
    "pronunciationRoman": "kābi kuḍiccu vēlai señjēn.",
    "katakana": "カービ クディッチュ ヴェーライ センジェーン。",
    "meaningJa": "コーヒーを飲んで仕事をしました。",
    "literalJapanese": "コーヒー＋飲んで＋仕事＋した・私",
    "morphemes": [
      {
        "surfaceTamil": "காபி",
        "gloss": "コーヒー"
      },
      {
        "surfaceTamil": "குடிச்சு",
        "gloss": "飲んで"
      },
      {
        "surfaceTamil": "வேலை",
        "gloss": "仕事"
      },
      {
        "surfaceTamil": "செஞ்சேன்",
        "gloss": "しました・私"
      }
    ],
    "grammarNote": "குடிச்சு と செஞ்சேன் は口語主表示です。前者は連結、後者は有限動詞です。",
    "vocabulary": [
      "காபி",
      "குடிச்சு",
      "வேலை",
      "செஞ்சேன்"
    ],
    "audioGroup": "lesson11-bank",
    "featured": false,
    "counterparts": [
      {
        "primaryRegister": "LT-WR",
        "targetTamil": "காபி குடித்து வேலை செய்தேன்.",
        "note": "現代文語・保守的表記"
      }
    ]
  },
  {
    "id": "l11-06",
    "targetTamil": "வீட்டுக்கு வந்து ஓய்வு எடுத்தேன்.",
    "structuredRoman": "vīṭṭ-ukku vantu ōyvu eṭutt-ēṉ.",
    "pronunciationRoman": "vīṭṭukku vandu ōyvu eḍuttēn.",
    "katakana": "ヴィーットゥック ヴァンドゥ オーイヴ エドゥッテーン。",
    "meaningJa": "家へ来て休みました。",
    "literalJapanese": "家へ＋来て＋休息＋取った・私",
    "morphemes": [
      {
        "surfaceTamil": "வீட்டுக்கு",
        "gloss": "家へ"
      },
      {
        "surfaceTamil": "வந்து",
        "gloss": "来て"
      },
      {
        "surfaceTamil": "ஓய்வு",
        "gloss": "休息"
      },
      {
        "surfaceTamil": "எடுத்தேன்",
        "gloss": "取りました／休みました・私"
      }
    ],
    "grammarNote": "வந்து の後ろに、文を完成させる எடுத்தேன் が続きます。",
    "vocabulary": [
      "வீட்டுக்கு",
      "வந்து",
      "ஓய்வு",
      "எடுத்தேன்"
    ],
    "audioGroup": "lesson11-bank",
    "featured": false
  },
  {
    "id": "l11-07",
    "targetTamil": "ஹோட்டலுக்கு போய் சாப்பிட்டேன்.",
    "structuredRoman": "hōṭṭal-ukku pōy cāppiṭṭ-ēṉ.",
    "pronunciationRoman": "hōṭṭalukku pōy sāppiṭṭēn.",
    "katakana": "ホーッタルック ポーイ サーッピッテーン。",
    "meaningJa": "店へ行って食べました。",
    "literalJapanese": "店へ＋行って＋食べた・私",
    "morphemes": [
      {
        "surfaceTamil": "ஹோட்டலுக்கு",
        "gloss": "店／ホテルへ"
      },
      {
        "surfaceTamil": "போய்",
        "gloss": "行って"
      },
      {
        "surfaceTamil": "சாப்பிட்டேன்",
        "gloss": "食べました・私"
      }
    ],
    "grammarNote": "場所へ移動してから行った中心動作を、最後の சாப்பிட்டேன் で示します。",
    "vocabulary": [
      "ஹோட்டல்",
      "போய்",
      "சாப்பிட்டேன்"
    ],
    "audioGroup": "lesson11-bank",
    "featured": false
  },
  {
    "id": "l11-08",
    "targetTamil": "பஸ்ல ஏறி உட்கார்ந்தேன்.",
    "structuredRoman": "pas-la ēṟi uṭkārnt-ēṉ.",
    "pronunciationRoman": "basla ēri ukkāndēn.",
    "katakana": "バスラ エーリ ウッカーンドゥエーン。",
    "meaningJa": "バスに乗って座りました。",
    "literalJapanese": "バスで／バスに＋乗って＋座った・私",
    "morphemes": [
      {
        "surfaceTamil": "பஸ்ல",
        "gloss": "バスに／バスで"
      },
      {
        "surfaceTamil": "ஏறி",
        "gloss": "乗って"
      },
      {
        "surfaceTamil": "உட்கார்ந்தேன்",
        "gloss": "座りました・私"
      }
    ],
    "grammarNote": "ஏறி は乗車をつなぎ、最後の உட்கார்ந்தேன் が過去・一人称を示します。",
    "vocabulary": [
      "பஸ்",
      "ஏறி",
      "உட்கார்ந்தேன்"
    ],
    "audioGroup": "lesson11-bank",
    "featured": false
  },
  {
    "id": "l11-09",
    "targetTamil": "வெளியே வந்து படம் பற்றி பேசினேன்.",
    "structuredRoman": "veḷiyē vantu paṭam paṟṟi pēciṉ-ēṉ.",
    "pronunciationRoman": "veḷiyē vandu paḍam patti pēsinēn.",
    "katakana": "ヴェリイェー ヴァンドゥ パダム パッティ ペーシネーン。",
    "meaningJa": "外へ出て映画について話しました。",
    "literalJapanese": "外へ＋来て＋映画＋について＋話した・私",
    "morphemes": [
      {
        "surfaceTamil": "வெளியே",
        "gloss": "外へ"
      },
      {
        "surfaceTamil": "வந்து",
        "gloss": "出て／来て"
      },
      {
        "surfaceTamil": "படம் பற்றி",
        "gloss": "映画について"
      },
      {
        "surfaceTamil": "பேசினேன்",
        "gloss": "話しました・私"
      }
    ],
    "grammarNote": "前の移動と後ろの会話を一つの出来事として連結します。",
    "vocabulary": [
      "வெளியே",
      "வந்து",
      "படம்",
      "பற்றி",
      "பேசினேன்"
    ],
    "audioGroup": "lesson11-bank",
    "featured": false
  },
  {
    "id": "l11-10",
    "targetTamil": "கடைக்கு போய் டிக்கெட் வாங்கி வீட்டுக்கு வந்தேன்.",
    "structuredRoman": "kaṭai-kku pōy ṭikkeṭ vāṅki vīṭṭ-ukku vant-ēṉ.",
    "pronunciationRoman": "kaḍaikku pōy ṭikkeṭ vāṅgi vīṭṭukku vandēn.",
    "katakana": "カダイック ポーイ ティッケトゥ ヴァーンギ ヴィーットゥック ヴァンデーン。",
    "meaningJa": "店へ行き、切符を買って、家へ戻りました。",
    "literalJapanese": "店へ＋行って＋切符＋買って＋家へ＋来た・私",
    "morphemes": [
      {
        "surfaceTamil": "கடைக்கு",
        "gloss": "店へ"
      },
      {
        "surfaceTamil": "போய்",
        "gloss": "行って"
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
        "surfaceTamil": "வீட்டுக்கு",
        "gloss": "家へ"
      },
      {
        "surfaceTamil": "வந்தேன்",
        "gloss": "来ました／戻りました・私"
      }
    ],
    "grammarNote": "副動詞を二つ並べても、時制・人物は最後の வந்தேன் に一度だけ現れます。",
    "vocabulary": [
      "கடை",
      "போய்",
      "டிக்கெட்",
      "வாங்கி",
      "வீட்டுக்கு",
      "வந்தேன்"
    ],
    "audioGroup": "lesson11-bank",
    "featured": false
  }
].map(make);

  const patterns = [
  {
    "id": "l11-form-poy",
    "targetTamil": "போய்",
    "structuredRoman": "pōy",
    "pronunciationRoman": "pōy",
    "katakana": "ポーイ",
    "meaningJa": "行って",
    "literalJapanese": "行く・連結形",
    "grammarNote": "போ の副動詞。後ろの有限動詞へつなぐ。",
    "vocabulary": [
      "போய்"
    ],
    "audioGroup": "l11-forms",
    "kind": "移動",
    "group": "頻出副動詞",
    "note": "போ の副動詞。後ろの有限動詞へつなぐ。"
  },
  {
    "id": "l11-form-vantu",
    "targetTamil": "வந்து",
    "structuredRoman": "vantu",
    "pronunciationRoman": "vandu",
    "katakana": "ヴァンドゥ",
    "meaningJa": "来て／出て",
    "literalJapanese": "来る・連結形",
    "grammarNote": "வா の連結形。場面により「来て／出て」と自然に訳す。",
    "vocabulary": [
      "வந்து"
    ],
    "audioGroup": "l11-forms",
    "kind": "移動",
    "group": "頻出副動詞",
    "note": "வா の連結形。場面により「来て／出て」と自然に訳す。"
  },
  {
    "id": "l11-form-caappittu",
    "targetTamil": "சாப்பிட்டு",
    "structuredRoman": "cāppiṭṭu",
    "pronunciationRoman": "sāppiṭṭu",
    "katakana": "サーッピットゥ",
    "meaningJa": "食べて／食べてから",
    "literalJapanese": "食べる・連結形",
    "grammarNote": "順序は後続動作と文脈から読む。",
    "vocabulary": [
      "சாப்பிட்டு"
    ],
    "audioGroup": "l11-forms",
    "kind": "順序",
    "group": "頻出副動詞",
    "note": "順序は後続動作と文脈から読む。"
  },
  {
    "id": "l11-form-paattu",
    "targetTamil": "பாத்து",
    "structuredRoman": "pāttu",
    "pronunciationRoman": "pāttu",
    "katakana": "パーットゥ",
    "meaningJa": "見て",
    "literalJapanese": "見る・連結形",
    "grammarNote": "標準口語主表示。書記形 பார்த்து は対応層。",
    "vocabulary": [
      "பாத்து"
    ],
    "audioGroup": "l11-forms",
    "kind": "知覚",
    "group": "頻出副動詞",
    "note": "標準口語主表示。書記形 பார்த்து は対応層。"
  },
  {
    "id": "l11-form-vaanki",
    "targetTamil": "வாங்கி",
    "structuredRoman": "vāṅki",
    "pronunciationRoman": "vāṅgi",
    "katakana": "ヴァーンギ",
    "meaningJa": "買って",
    "literalJapanese": "買う・連結形",
    "grammarNote": "旅行の準備動作で頻出。",
    "vocabulary": [
      "வாங்கி"
    ],
    "audioGroup": "l11-forms",
    "kind": "準備",
    "group": "頻出副動詞",
    "note": "旅行の準備動作で頻出。"
  },
  {
    "id": "l11-form-kuticcu",
    "targetTamil": "குடிச்சு",
    "structuredRoman": "kuṭiccu",
    "pronunciationRoman": "kuḍiccu",
    "katakana": "クディッチュ",
    "meaningJa": "飲んで",
    "literalJapanese": "飲む・連結形",
    "grammarNote": "口語主表示。書記形 குடித்து は対応層。",
    "vocabulary": [
      "குடிச்சு"
    ],
    "audioGroup": "l11-forms",
    "kind": "順序",
    "group": "頻出副動詞",
    "note": "口語主表示。書記形 குடித்து は対応層。"
  },
  {
    "id": "l11-form-cencu",
    "targetTamil": "செஞ்சு",
    "structuredRoman": "ceñcu",
    "pronunciationRoman": "señju",
    "katakana": "センジュ",
    "meaningJa": "して",
    "literalJapanese": "する・連結形",
    "grammarNote": "口語主表示。書記形 செய்து は対応層。",
    "vocabulary": [
      "செஞ்சு"
    ],
    "audioGroup": "l11-forms",
    "kind": "一般動作",
    "group": "頻出副動詞",
    "note": "口語主表示。書記形 செய்து は対応層。"
  },
  {
    "id": "l11-form-eeri",
    "targetTamil": "ஏறி",
    "structuredRoman": "ēṟi",
    "pronunciationRoman": "ēri",
    "katakana": "エーリ",
    "meaningJa": "乗って／上がって",
    "literalJapanese": "乗る・連結形",
    "grammarNote": "乗車場面で後ろの動作へつなぐ。",
    "vocabulary": [
      "ஏறி"
    ],
    "audioGroup": "l11-forms",
    "kind": "移動",
    "group": "頻出副動詞",
    "note": "乗車場面で後ろの動作へつなぐ。"
  }
].map(make);

  const lesson = {
  "id": "lesson11-v36",
  "number": 11,
  "navTitle": "副動詞・動作連結",
  "title": "副動詞で、複数の動作を一つの流れにする",
  "tamilTitle": "போய், வந்து, சாப்பிட்டு: செயல்களை இணைப்பது",
  "deck": "前の動詞を副動詞にし、最後の有限動詞だけで時制と人物を完成させます。旅行中の行動を、短く自然な一文へまとめます。",
  "targets": [
    "最後の有限動詞",
    "頻出副動詞の完成形",
    "共有される主語",
    "動作間の意味関係",
    "不定詞との違い"
  ],
  "heroExample": examples[0],
  "criticalPoints": [
    "<span class=\"ta-inline\" lang=\"ta\">போய்</span> <span class=\"roman-inline\">(pōy)</span>・<span class=\"ta-inline\" lang=\"ta\">வாங்கி</span> <span class=\"roman-inline\">(vāṅki)</span> には時制・人物がなく、最後の有限動詞にだけ現れる。",
    "<span class=\"ta-inline\" lang=\"ta\">கடைக்கு போய் தண்ணி வாங்கினேன்</span> <span class=\"roman-inline\">(kaṭai-kku pōy taṇṇi vāṅkiṉ-ēṉ)</span> の基本的な読みでは、同じ主語が動作を続ける。",
    "<span class=\"ta-inline\" lang=\"ta\">சாப்பிட்டு</span> <span class=\"roman-inline\">(cāppiṭṭu)</span> を常に「〜してから」と固定せず、順序・準備・方法を場面から読む。"
  ],
  "readSections": [
    {
      "kicker": "まず結論",
      "heading": "時制と人物は、最後の有限動詞で一度だけ完成する",
      "takeaway": "<span class=\"ta-inline\" lang=\"ta\">போய்</span> <span class=\"roman-inline\">(pōy)</span>・<span class=\"ta-inline\" lang=\"ta\">சாப்பிட்டு</span> <span class=\"roman-inline\">(cāppiṭṭu)</span>・<span class=\"ta-inline\" lang=\"ta\">பாத்து</span> <span class=\"roman-inline\">(pāttu)</span> は前の動作をつなぎ、最後の <span class=\"ta-inline\" lang=\"ta\">வாங்கினேன்</span> <span class=\"roman-inline\">(vāṅkiṉ-ēṉ)</span> などが文を完成させます。",
      "paragraphs": [
        "<span class=\"ta-inline\" lang=\"ta\">கடைக்கு போய் தண்ணி வாங்கினேன்</span> <span class=\"roman-inline\">(kaṭai-kku pōy taṇṇi vāṅkiṉ-ēṉ)</span> では、「行った」の人物・時制を <span class=\"ta-inline\" lang=\"ta\">போய்</span> <span class=\"roman-inline\">(pōy)</span> 自体へ探しません。最後の <span class=\"ta-inline\" lang=\"ta\">வாங்கினேன்</span> <span class=\"roman-inline\">(vāṅkiṉ-ēṉ)</span> が過去・一人称です。",
        "聞き取りでは、まず右端の有限動詞を確保し、それから左へ戻って「その前に何をしたか」を足します。"
      ]
    },
    {
      "kicker": "形を読む",
      "heading": "副動詞は、完成した頻出形として一つずつ覚える",
      "takeaway": "<span class=\"ta-inline\" lang=\"ta\">போ</span> <span class=\"roman-inline\">(pō)</span> → <span class=\"ta-inline\" lang=\"ta\">போய்</span> <span class=\"roman-inline\">(pōy)</span>、<span class=\"ta-inline\" lang=\"ta\">வா</span> <span class=\"roman-inline\">(vā)</span> → <span class=\"ta-inline\" lang=\"ta\">வந்து</span> <span class=\"roman-inline\">(vantu)</span>、<span class=\"ta-inline\" lang=\"ta\">பார்</span> <span class=\"roman-inline\">(pār)</span> → <span class=\"ta-inline\" lang=\"ta\">பாத்து</span> <span class=\"roman-inline\">(pāttu)</span> を対で覚えます。",
      "paragraphs": [
        "連結形には <span class=\"ta-inline\" lang=\"ta\">-ட்டு</span> <span class=\"roman-inline\">(-ṭṭu)</span>・<span class=\"ta-inline\" lang=\"ta\">-ச்சு</span> <span class=\"roman-inline\">(-ccu)</span>・<span class=\"ta-inline\" lang=\"ta\">-இ</span> <span class=\"roman-inline\">(-i)</span> など複数の姿があります。全動詞を一つの置換規則で自動生成しません。",
        "初級では <span class=\"ta-inline\" lang=\"ta\">சாப்பிட்டு</span> <span class=\"roman-inline\">(cāppiṭṭu)</span>・<span class=\"ta-inline\" lang=\"ta\">குடிச்சு</span> <span class=\"roman-inline\">(kuṭiccu)</span>・<span class=\"ta-inline\" lang=\"ta\">வாங்கி</span> <span class=\"roman-inline\">(vāṅki)</span>・<span class=\"ta-inline\" lang=\"ta\">செஞ்சு</span> <span class=\"roman-inline\">(ceñcu)</span> を音声付きの完成形として反復します。"
      ]
    },
    {
      "kicker": "なぜ？",
      "heading": "最後へ時制を集めると、複数の動作を一つの出来事として扱える",
      "takeaway": "<span class=\"ta-inline\" lang=\"ta\">கடைக்கு போய் டிக்கெட் வாங்கி வீட்டுக்கு வந்தேன்</span> <span class=\"roman-inline\">(kaṭai-kku pōy ṭikkeṭ vāṅki vīṭṭ-ukku vant-ēṉ)</span> では、三つの動作を一つの流れとして述べます。",
      "paragraphs": [
        "<span class=\"ta-inline\" lang=\"ta\">போய்</span> <span class=\"roman-inline\">(pōy)</span> と <span class=\"ta-inline\" lang=\"ta\">வாங்கி</span> <span class=\"roman-inline\">(vāṅki)</span> は未完成のまま次へ渡り、最後の <span class=\"ta-inline\" lang=\"ta\">வந்தேன்</span> <span class=\"roman-inline\">(vant-ēṉ)</span> にだけ過去・一人称が現れます。",
        "基礎的な連鎖では、特に断りがなければ同じ主語が動作を続けると読みます。各副動詞に別の主語を勝手に補いません。"
      ]
    },
    {
      "kicker": "実際に使う",
      "heading": "旅行では「準備して、移動して、中心動作をする」を一文にする",
      "takeaway": "<span class=\"ta-inline\" lang=\"ta\">டிக்கெட் வாங்கி உள்ளே போனேன்</span> <span class=\"roman-inline\">(ṭikkeṭ vāṅki uḷḷē pōṉ-ēṉ)</span> は「切符を買って中へ入りました」という、そのまま使える順序です。",
      "paragraphs": [
        "<span class=\"ta-inline\" lang=\"ta\">பஸ்ல ஏறி உட்கார்ந்தேன்</span> <span class=\"roman-inline\">(pas-la ēṟi uṭkārnt-ēṉ)</span> なら、乗車してから座った流れを表します。",
        "<span class=\"ta-inline\" lang=\"ta\">வீட்டுக்கு வந்து ஓய்வு எடுத்தேன்</span> <span class=\"roman-inline\">(vīṭṭ-ukku vantu ōyvu eṭutt-ēṉ)</span> のように、場所・移動・後続動作を既習の格と組み合わせます。"
      ]
    },
    {
      "kicker": "混ぜない",
      "heading": "日本語の「〜して」に一対一固定せず、動作どうしの関係を読む",
      "takeaway": "<span class=\"ta-inline\" lang=\"ta\">சாப்பிட்டு வீட்டுக்கு போனேன்</span> <span class=\"roman-inline\">(cāppiṭṭu vīṭṭ-ukku pōṉ-ēṉ)</span> は自然には「食べてから家へ行きました」と訳せますが、<span class=\"ta-inline\" lang=\"ta\">சாப்பிட்டு</span> <span class=\"roman-inline\">(cāppiṭṭu)</span> 自体が常に「〜してから」だけを意味するわけではありません。",
      "paragraphs": [
        "<span class=\"ta-inline\" lang=\"ta\">போய்</span> <span class=\"roman-inline\">(pōy)</span> は順序・準備、<span class=\"ta-inline\" lang=\"ta\">வந்து</span> <span class=\"roman-inline\">(vantu)</span> は移動後の展開など、後続動詞と場面を合わせて読みます。",
        "また、副動詞と第10課の不定詞を混ぜません。不定詞は目的・否定・可能へ渡し、副動詞は出来事を連結します。"
      ],
      "note": {
        "tone": "pink",
        "title": "この課の最重要ミス",
        "body": "<span class=\"ta-inline\" lang=\"ta\">போய்</span> <span class=\"roman-inline\">(pōy)</span> を「私は行った」と完成させない。人物と時制は最後の有限動詞まで保留します。"
      }
    },
    {
      "kicker": "3文で復習",
      "heading": "右端を先に拾い、前の動作を順に戻す",
      "takeaway": "三文とも、最後の有限動詞を先に確認してから、副動詞が何を足すかを読みます。",
      "paragraphs": [
        "<span class=\"ta-inline\" lang=\"ta\">கடைக்கு போய் தண்ணி வாங்கினேன்.</span> <span class=\"roman-inline\">(kaṭai-kku pōy taṇṇi vāṅkiṉ-ēṉ.)</span><br><span class=\"reading-ja\">店へ行って水を買いました。</span><br><br><span class=\"ta-inline\" lang=\"ta\">டிக்கெட் வாங்கி உள்ளே போனேன்.</span> <span class=\"roman-inline\">(ṭikkeṭ vāṅki uḷḷē pōṉ-ēṉ.)</span><br><span class=\"reading-ja\">切符を買って中へ入りました。</span><br><br><span class=\"ta-inline\" lang=\"ta\">கடைக்கு போய் டிக்கெட் வாங்கி வீட்டுக்கு வந்தேன்.</span> <span class=\"roman-inline\">(kaṭai-kku pōy ṭikkeṭ vāṅki vīṭṭ-ukku vant-ēṉ.)</span><br><span class=\"reading-ja\">店へ行き、切符を買って、家へ戻りました。</span>"
      ],
      "miniReading": {
        "intro": "最後の有限動詞から、前の動作を復元します。",
        "ids": [
          "l11-01",
          "l11-04",
          "l11-10"
        ]
      }
    }
  ],
  "formConfig": {
    "mode": "grammar",
    "title": "第11課の連結形を、最後の有限動詞と対にして読む",
    "intro": "前の動詞が出来事をつなぎ、最後の動詞だけが時制・人物を持つことを、旅行の行動順で確認します。",
    "patterns": Object.freeze(patterns),
    "checkpoint": "副動詞と有限動詞を区別し、同じ主語の行動を二つ以上つないで読めれば合格です。"
  },
  "examples": Object.freeze(examples),
  "quiz": [
    {
      "focus": "形態分解",
      "q": "<span class=\"ta-inline\" lang=\"ta\">போய் தண்ணி வாங்கினேன்</span> <span class=\"roman-inline\">(pōy taṇṇi vāṅkiṉ-ēṉ)</span> を正しく分けたものは？",
      "options": [
        "行って・連結＋水＋買った・過去・私",
        "行った・過去・私＋水＋買う・不定詞",
        "行く場所＋水の所有＋私",
        "行けない＋水＋買わない"
      ],
      "answer": 0,
      "feedback": "<span class=\"ta-inline\" lang=\"ta\">போய்</span> <span class=\"roman-inline\">(pōy)</span> は連結形、<span class=\"ta-inline\" lang=\"ta\">வாங்கினேன்</span> <span class=\"roman-inline\">(vāṅkiṉ-ēṉ)</span> が過去・一人称の有限動詞です。",
      "rule": "前の動詞はつなぎ、最後の動詞が時制と人物を完成させる。",
      "tags": [
        "正解",
        "両方を有限と誤認",
        "名詞句との混同",
        "否定との混同"
      ]
    },
    {
      "focus": "機能選択",
      "q": "「食べてから家へ行きました」に合う文は？",
      "options": [
        "<span class=\"quiz-option-ta\" lang=\"ta\">சாப்பிட்டு வீட்டுக்கு போனேன்.</span><span class=\"quiz-option-roman\">cāppiṭṭu vīṭṭ-ukku pōṉ-ēṉ.</span><span class=\"quiz-option-ja\">食べて家へ行きました</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">சாப்பிட வீட்டுக்கு போனேன்.</span><span class=\"quiz-option-roman\">cāppiṭa vīṭṭ-ukku pōṉ-ēṉ.</span><span class=\"quiz-option-ja\">食べる目的で家へ行きました</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">சாப்பிட்டேன் வீட்டுக்கு போய்.</span><span class=\"quiz-option-roman\">cāppiṭṭ-ēṉ vīṭṭ-ukku pōy.</span><span class=\"quiz-option-ja\">有限動詞の後ろに未完成形</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">சாப்பிட்டு வீட்டுல இருக்கேன்.</span><span class=\"quiz-option-roman\">cāppiṭṭu vīṭṭ-ula irukk-ēṉ.</span><span class=\"quiz-option-ja\">食べて家にいます</span>"
      ],
      "answer": 0,
      "feedback": "順序をつなぐ <span class=\"ta-inline\" lang=\"ta\">சாப்பிட்டு</span> <span class=\"roman-inline\">(cāppiṭṭu)</span> と、最後の <span class=\"ta-inline\" lang=\"ta\">போனேன்</span> <span class=\"roman-inline\">(pōṉ-ēṉ)</span> を使います。",
      "rule": "動作の順序は副動詞＋最後の有限動詞で作る。",
      "tags": [
        "正解",
        "不定詞との混同",
        "語順逆転",
        "後続動詞の機能違い"
      ]
    },
    {
      "focus": "実用場面",
      "q": "映画館で「切符を買って中へ入りました」と言う文は？",
      "options": [
        "<span class=\"quiz-option-ta\" lang=\"ta\">டிக்கெட் வாங்கி உள்ளே போனேன்.</span><span class=\"quiz-option-roman\">ṭikkeṭ vāṅki uḷḷē pōṉ-ēṉ.</span><span class=\"quiz-option-ja\">切符を買って中へ入りました</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">டிக்கெட் வாங்க உள்ளே போறேன்.</span><span class=\"quiz-option-roman\">ṭikkeṭ vāṅka uḷḷē pōṟ-ēṉ.</span><span class=\"quiz-option-ja\">切符を買うため中へ行きます</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">டிக்கெட் வாங்கல உள்ளே போனேன்.</span><span class=\"quiz-option-roman\">ṭikkeṭ vāṅka-la uḷḷē pōṉ-ēṉ.</span><span class=\"quiz-option-ja\">切符を買わず／買わなかった＋中へ</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">டிக்கெட் என்கிட்ட இருக்கு.</span><span class=\"quiz-option-roman\">ṭikkeṭ eṉ-kiṭṭa irukku.</span><span class=\"quiz-option-ja\">切符を持っています</span>"
      ],
      "answer": 0,
      "feedback": "<span class=\"ta-inline\" lang=\"ta\">வாங்கி</span> <span class=\"roman-inline\">(vāṅki)</span> が「買って」、<span class=\"ta-inline\" lang=\"ta\">போனேன்</span> <span class=\"roman-inline\">(pōṉ-ēṉ)</span> が「入りました」です。",
      "rule": "旅行の行動は、準備の副動詞＋移動の有限動詞でまとめられる。",
      "tags": [
        "正解",
        "目的の不定詞",
        "否定形",
        "所有文"
      ]
    },
    {
      "focus": "混同防止",
      "q": "<span class=\"ta-inline\" lang=\"ta\">போய்</span> <span class=\"roman-inline\">(pōy)</span> と <span class=\"ta-inline\" lang=\"ta\">போக</span> <span class=\"roman-inline\">(pōka)</span> の違いは？",
      "options": [
        "போய் は動作連結、போக は目的・否定などへ渡す不定詞",
        "どちらも一人称過去の完全形",
        "போய் は未来、போக は過去",
        "போய் は名詞、போக は格語尾"
      ],
      "answer": 0,
      "feedback": "<span class=\"ta-inline\" lang=\"ta\">போய்</span> <span class=\"roman-inline\">(pōy)</span> は「行って」と出来事をつなぎ、<span class=\"ta-inline\" lang=\"ta\">போக</span> <span class=\"roman-inline\">(pōka)</span> は「行くために／行くことを」と後続述語へ渡します。",
      "rule": "副動詞は出来事をつなぎ、不定詞は目的・モダルへ渡す。",
      "tags": [
        "正解",
        "有限形との混同",
        "時制の誤認",
        "品詞・格の混同"
      ]
    },
    {
      "focus": "総合復習",
      "q": "「店へ行き、切符を買って、家へ戻りました」の骨格として正しい文は？",
      "options": [
        "<span class=\"quiz-option-ta\" lang=\"ta\">கடைக்கு போய் டிக்கெட் வாங்கி வீட்டுக்கு வந்தேன்.</span><span class=\"quiz-option-roman\">kaṭai-kku pōy ṭikkeṭ vāṅki vīṭṭ-ukku vant-ēṉ.</span><span class=\"quiz-option-ja\">行って＋買って＋最後に戻った</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">கடைக்கு போனேன் டிக்கெட் வாங்கினேன் வீட்டுக்கு வந்தேன்.</span><span class=\"quiz-option-roman\">kaṭai-kku pōṉ-ēṉ ṭikkeṭ vāṅkiṉ-ēṉ vīṭṭ-ukku vant-ēṉ.</span><span class=\"quiz-option-ja\">有限動詞を三つ独立に並べる</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">கடைக்கு போக டிக்கெட் வாங்க வீட்டுக்கு வந்தேன்.</span><span class=\"quiz-option-roman\">kaṭai-kku pōka ṭikkeṭ vāṅka vīṭṭ-ukku vant-ēṉ.</span><span class=\"quiz-option-ja\">目的の不定詞を二つ並べる</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">கடையில டிக்கெட் இருக்கு வீட்டுக்கு வந்தேன்.</span><span class=\"quiz-option-roman\">kaṭai-y-ila ṭikkeṭ irukku vīṭṭ-ukku vant-ēṉ.</span><span class=\"quiz-option-ja\">店に切符がある＋戻った</span>"
      ],
      "answer": 0,
      "feedback": "<span class=\"ta-inline\" lang=\"ta\">போய்</span> <span class=\"roman-inline\">(pōy)</span> と <span class=\"ta-inline\" lang=\"ta\">வாங்கி</span> <span class=\"roman-inline\">(vāṅki)</span> を連結形にし、最後の <span class=\"ta-inline\" lang=\"ta\">வந்தேன்</span> <span class=\"roman-inline\">(vant-ēṉ)</span> だけを有限化します。",
      "rule": "一つの動作連鎖では、時制・人物を右端へ一度だけ置く。",
      "tags": [
        "正解",
        "独立文の羅列",
        "不定詞との混同",
        "存在文との混同"
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

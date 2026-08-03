(() => {
  "use strict";

  const { entry: E, confidence: C } = window.TAMIL_V30;
  const SOURCES = [
    "TAMIL-INTEGRATED-v2.0-rc.1 §§23-25,31-32",
    "PREDICATE-ENGINE-v1.1 §§1.4,4,7",
    "TAMIL-GRAMMAR-GARDEN Lesson 10",
    "SCHIFFMAN-SPOKEN-TAMIL: infinitive forms and non-finite complements"
  ];
  const make = input => E({ ...input, sourceRefs: SOURCES, confidence: C("B", "B", "C", "B") });

  const examples = [
    {
      "id": "l10-01",
      "targetTamil": "நான் சாப்பிட போறேன்.",
      "structuredRoman": "nāṉ cāppiṭa pōṟ-ēṉ.",
      "pronunciationRoman": "nān sāppiḍa pōrēn.",
      "katakana": "ナーン サーッピダ ポーレーン。",
      "meaningJa": "私は食べに行きます／これから食べます。",
      "literalJapanese": "私＋食べる・後続へ渡す形＋行く・現在・私",
      "morphemes": [
        {
          "surfaceTamil": "நான்",
          "gloss": "私"
        },
        {
          "surfaceTamil": "சாப்பிட",
          "gloss": "食べる・後続へ渡す形"
        },
        {
          "surfaceTamil": "போறேன்",
          "gloss": "行きます／これからします・私"
        }
      ],
      "grammarNote": "不定詞 சாப்பிட は時制・人称を持たず、最後の போறேன் が文を完成させます。",
      "vocabulary": [
        "நான்",
        "சாப்பிட",
        "போறேன்"
      ],
      "audioGroup": "lesson10-core",
      "featured": true
    },
    {
      "id": "l10-02",
      "targetTamil": "நான் தண்ணி வாங்க கடைக்கு போறேன்.",
      "structuredRoman": "nāṉ taṇṇi vāṅka kaṭai-kku pōṟ-ēṉ.",
      "pronunciationRoman": "nān taṇṇi vānga kaḍaikku pōrēn.",
      "katakana": "ナーン タンニ ヴァーンガ カダイック ポーレーン。",
      "meaningJa": "私は水を買いに店へ行きます。",
      "literalJapanese": "私＋水＋買うために＋店へ＋行く・私",
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
          "surfaceTamil": "வாங்க",
          "gloss": "買う・目的"
        },
        {
          "surfaceTamil": "கடைக்கு",
          "gloss": "店へ"
        },
        {
          "surfaceTamil": "போறேன்",
          "gloss": "行きます・私"
        }
      ],
      "grammarNote": "目的の不定詞 வாங்க、到達点 கடைக்கு、有限動詞 போறேன் の順を読む実用文です。",
      "vocabulary": [
        "நான்",
        "தண்ணி",
        "வாங்க",
        "கடைக்கு",
        "போறேன்"
      ],
      "audioGroup": "lesson10-core",
      "featured": true
    },
    {
      "id": "l10-03",
      "targetTamil": "நான் படம் பாக்க தியேட்டருக்கு போறேன்.",
      "structuredRoman": "nāṉ paṭam pākka tiyēṭṭar-ukku pōṟ-ēṉ.",
      "pronunciationRoman": "nān paḍam pākka tiyēṭṭarukku pōrēn.",
      "katakana": "ナーン パダム パーッカ ティエーッタルック ポーレーン。",
      "meaningJa": "私は映画を見に映画館へ行きます。",
      "literalJapanese": "私＋映画＋見るために＋映画館へ＋行く・私",
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
          "surfaceTamil": "பாக்க",
          "gloss": "見る・目的"
        },
        {
          "surfaceTamil": "தியேட்டருக்கு",
          "gloss": "映画館へ"
        },
        {
          "surfaceTamil": "போறேன்",
          "gloss": "行きます・私"
        }
      ],
      "grammarNote": "映画・旅行場面で使いやすい、目的＋到達点＋移動の基本形です。",
      "vocabulary": [
        "நான்",
        "படம்",
        "பாக்க",
        "தியேட்டர்",
        "போறேன்"
      ],
      "audioGroup": "lesson10-core",
      "featured": true
    },
    {
      "id": "l10-04",
      "targetTamil": "நான் நண்பரை பாக்க போறேன்.",
      "structuredRoman": "nāṉ naṇpar-ai pākka pōṟ-ēṉ.",
      "pronunciationRoman": "nān naṇbare pākka pōrēn.",
      "katakana": "ナーン ナンバレ パーッカ ポーレーン。",
      "meaningJa": "私は友達に会いに行きます。",
      "literalJapanese": "私＋友達を＋見るために＋行く・私",
      "morphemes": [
        {
          "surfaceTamil": "நான்",
          "gloss": "私"
        },
        {
          "surfaceTamil": "நண்பரை",
          "gloss": "友達を／会う対象"
        },
        {
          "surfaceTamil": "பாக்க",
          "gloss": "見る・会うために"
        },
        {
          "surfaceTamil": "போறேன்",
          "gloss": "行きます・私"
        }
      ],
      "grammarNote": "人を目的語にした பாக்க は、文脈により自然な日本語では「会う」と訳せます。",
      "vocabulary": [
        "நான்",
        "நண்பர்",
        "பாக்க",
        "போறேன்"
      ],
      "audioGroup": "lesson10-bank",
      "featured": false
    },
    {
      "id": "l10-05",
      "targetTamil": "நான் காபி குடிக்க போறேன்.",
      "structuredRoman": "nāṉ kāpi kuṭikka pōṟ-ēṉ.",
      "pronunciationRoman": "nān kābi kuḍikka pōrēn.",
      "katakana": "ナーン カービ クディッカ ポーレーン。",
      "meaningJa": "私はコーヒーを飲みに行きます／これから飲みます。",
      "literalJapanese": "私＋コーヒー＋飲む・後続へ渡す形＋行く・私",
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
          "surfaceTamil": "குடிக்க",
          "gloss": "飲む・後続へ渡す形"
        },
        {
          "surfaceTamil": "போறேன்",
          "gloss": "行きます／これからします・私"
        }
      ],
      "grammarNote": "குடிக்க のような -க்க 形も、完成した不定詞として後続へ渡します。",
      "vocabulary": [
        "நான்",
        "காபி",
        "குடிக்க",
        "போறேன்"
      ],
      "audioGroup": "lesson10-bank",
      "featured": false
    },
    {
      "id": "l10-06",
      "targetTamil": "நான் டிக்கெட் வாங்க போறேன்.",
      "structuredRoman": "nāṉ ṭikkeṭ vāṅka pōṟ-ēṉ.",
      "pronunciationRoman": "nān ṭikkeṭ vānga pōrēn.",
      "katakana": "ナーン ティッケトゥ ヴァーンガ ポーレーン。",
      "meaningJa": "私は切符を買いに行きます／これから買います。",
      "literalJapanese": "私＋切符＋買うために＋行く・私",
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
          "surfaceTamil": "வாங்க",
          "gloss": "買う・目的"
        },
        {
          "surfaceTamil": "போறேன்",
          "gloss": "行きます／これからします・私"
        }
      ],
      "grammarNote": "旅行で頻出する「切符を買いに行く」を、不定詞＋移動で作ります。",
      "vocabulary": [
        "நான்",
        "டிக்கெட்",
        "வாங்க",
        "போறேன்"
      ],
      "audioGroup": "lesson10-bank",
      "featured": false
    },
    {
      "id": "l10-07",
      "targetTamil": "நான் வேலை செய்ய போறேன்.",
      "structuredRoman": "nāṉ vēlai ceyya pōṟ-ēṉ.",
      "pronunciationRoman": "nān vēlai seyya pōrēn.",
      "katakana": "ナーン ヴェーライ セイヤ ポーレーン。",
      "meaningJa": "私は仕事をしに行きます／これから仕事をします。",
      "literalJapanese": "私＋仕事＋する・後続へ渡す形＋行く・私",
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
          "surfaceTamil": "செய்ய",
          "gloss": "する・後続へ渡す形"
        },
        {
          "surfaceTamil": "போறேன்",
          "gloss": "行きます／これからします・私"
        }
      ],
      "grammarNote": "செய் の不定詞 செய்ய は、規則を一律適用せず完成形で覚えます。",
      "vocabulary": [
        "நான்",
        "வேலை",
        "செய்ய",
        "போறேன்"
      ],
      "audioGroup": "lesson10-bank",
      "featured": false
    },
    {
      "id": "l10-08",
      "targetTamil": "நான் நாளைக்கு வர மாட்டேன்.",
      "structuredRoman": "nāṉ nāḷai-kku vara māṭṭ-ēṉ.",
      "pronunciationRoman": "nān nāḷaikku vara māṭṭēn.",
      "katakana": "ナーン ナーライック ヴァラ マーッテーン。",
      "meaningJa": "私は明日は来ません。",
      "literalJapanese": "私＋明日＋来る・後続へ渡す形＋しない意志・私",
      "morphemes": [
        {
          "surfaceTamil": "நான்",
          "gloss": "私"
        },
        {
          "surfaceTamil": "நாளைக்கு",
          "gloss": "明日"
        },
        {
          "surfaceTamil": "வர",
          "gloss": "来る・後続へ渡す形"
        },
        {
          "surfaceTamil": "மாட்டேன்",
          "gloss": "来ない／来るつもりがない・私"
        }
      ],
      "grammarNote": "第9課で学んだ மாட்டேன் の前にも不定詞 வர が置かれます。",
      "vocabulary": [
        "நான்",
        "நாளைக்கு",
        "வர",
        "மாட்டேன்"
      ],
      "audioGroup": "lesson10-bank",
      "featured": false
    },
    {
      "id": "l10-09",
      "targetTamil": "என்னால தமிழ் படிக்க முடியாது.",
      "structuredRoman": "eṉṉ-āla tamiḻ paṭikka muṭiyātu.",
      "pronunciationRoman": "ennāla tamiḻ paḍikka muḍiyādu.",
      "katakana": "エンナーラ タミル パディッカ ムディヤードゥ。",
      "meaningJa": "私はタミル語を読めません。",
      "literalJapanese": "私の力では＋タミル語＋読む・後続へ渡す形＋できない",
      "morphemes": [
        {
          "surfaceTamil": "என்னால",
          "gloss": "私には／私の力では"
        },
        {
          "surfaceTamil": "தமிழ்",
          "gloss": "タミル語"
        },
        {
          "surfaceTamil": "படிக்க",
          "gloss": "読む・後続へ渡す形"
        },
        {
          "surfaceTamil": "முடியாது",
          "gloss": "できない"
        }
      ],
      "grammarNote": "第9課の可能否定でも、不定詞 படிக்க が後続述語へ動詞の意味を渡します。",
      "vocabulary": [
        "என்னால",
        "தமிழ்",
        "படிக்க",
        "முடியாது"
      ],
      "audioGroup": "lesson10-bank",
      "featured": false
    },
    {
      "id": "l10-10",
      "targetTamil": "நான் வீட்டுக்கு போக போறேன்.",
      "structuredRoman": "nāṉ vīṭṭ-ukku pōka pōṟ-ēṉ.",
      "pronunciationRoman": "nān vīṭṭukku pōga pōrēn.",
      "katakana": "ナーン ヴィーットゥック ポーガ ポーレーン。",
      "meaningJa": "私は家へ行くつもりです／これから家へ行きます。",
      "literalJapanese": "私＋家へ＋行く・後続へ渡す形＋行く・現在・私",
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
          "surfaceTamil": "போக",
          "gloss": "行く・後続へ渡す形"
        },
        {
          "surfaceTamil": "போறேன்",
          "gloss": "これからします・私"
        }
      ],
      "grammarNote": "同じ「行く」が続いても、最初の போக は不定詞、最後の போறேன் が時制・人称を担います。",
      "vocabulary": [
        "நான்",
        "வீட்டுக்கு",
        "போக",
        "போறேன்"
      ],
      "audioGroup": "lesson10-bank",
      "featured": false
    }
  ].map(make);

  const patterns = [
    {
      "id": "l10-form-caappida",
      "targetTamil": "சாப்பிட",
      "structuredRoman": "cāppiṭa",
      "pronunciationRoman": "sāppiḍa",
      "katakana": "サーッピダ",
      "meaningJa": "食べるために／食べることへ",
      "literalJapanese": "食べる・後続へ渡す形",
      "grammarNote": "சாப்பிடு から作る完成形として覚える。",
      "vocabulary": [
        "சாப்பிட"
      ],
      "audioGroup": "l10-forms",
      "kind": "-அ 型",
      "group": "頻出不定詞",
      "note": "சாப்பிடு から作る完成形として覚える。"
    },
    {
      "id": "l10-form-paakka",
      "targetTamil": "பாக்க",
      "structuredRoman": "pākka",
      "pronunciationRoman": "pākka",
      "katakana": "パーッカ",
      "meaningJa": "見るために／会うために",
      "literalJapanese": "見る・後続へ渡す形",
      "grammarNote": "口語主表示の பாக்க を完成形で覚える。",
      "vocabulary": [
        "பாக்க"
      ],
      "audioGroup": "l10-forms",
      "kind": "-க்க 型",
      "group": "頻出不定詞",
      "note": "口語主表示の பாக்க を完成形で覚える。"
    },
    {
      "id": "l10-form-poka",
      "targetTamil": "போக",
      "structuredRoman": "pōka",
      "pronunciationRoman": "pōga",
      "katakana": "ポーガ",
      "meaningJa": "行くために／行くことへ",
      "literalJapanese": "行く・後続へ渡す形",
      "grammarNote": "மாட்டேன் や போறேன் の前にも置かれる。",
      "vocabulary": [
        "போக"
      ],
      "audioGroup": "l10-forms",
      "kind": "-க 型",
      "group": "頻出不定詞",
      "note": "மாட்டேன் や போறேன் の前にも置かれる。"
    },
    {
      "id": "l10-form-vara",
      "targetTamil": "வர",
      "structuredRoman": "vara",
      "pronunciationRoman": "vara",
      "katakana": "ヴァラ",
      "meaningJa": "来るために／来ることへ",
      "literalJapanese": "来る・後続へ渡す形",
      "grammarNote": "வா から一律には予測せず வா／வர の対で覚える。",
      "vocabulary": [
        "வர"
      ],
      "audioGroup": "l10-forms",
      "kind": "特別型",
      "group": "頻出不定詞",
      "note": "வா から一律には予測せず வா／வர の対で覚える。"
    },
    {
      "id": "l10-form-ceyya",
      "targetTamil": "செய்ய",
      "structuredRoman": "ceyya",
      "pronunciationRoman": "seyya",
      "katakana": "セイヤ",
      "meaningJa": "するために／することへ",
      "literalJapanese": "する・後続へ渡す形",
      "grammarNote": "செய்／செய்ய を完成した対で覚える。",
      "vocabulary": [
        "செய்ய"
      ],
      "audioGroup": "l10-forms",
      "kind": "-ய்ய 型",
      "group": "頻出不定詞",
      "note": "செய்／செய்ய を完成した対で覚える。"
    },
    {
      "id": "l10-form-kudikka",
      "targetTamil": "குடிக்க",
      "structuredRoman": "kuṭikka",
      "pronunciationRoman": "kuḍikka",
      "katakana": "クディッカ",
      "meaningJa": "飲むために／飲むことへ",
      "literalJapanese": "飲む・後続へ渡す形",
      "grammarNote": "後ろの போறேன்・மாட்டேன் などへつなぐ。",
      "vocabulary": [
        "குடிக்க"
      ],
      "audioGroup": "l10-forms",
      "kind": "-க்க 型",
      "group": "頻出不定詞",
      "note": "後ろの போறேன்・மாட்டேன் などへつなぐ。"
    },
    {
      "id": "l10-form-vaanka",
      "targetTamil": "வாங்க",
      "structuredRoman": "vāṅka",
      "pronunciationRoman": "vānga",
      "katakana": "ヴァーンガ",
      "meaningJa": "買うために／買うことへ",
      "literalJapanese": "買う・後続へ渡す形",
      "grammarNote": "旅行場面の டிக்கெட் வாங்க で反復する。",
      "vocabulary": [
        "வாங்க"
      ],
      "audioGroup": "l10-forms",
      "kind": "-க 型",
      "group": "頻出不定詞",
      "note": "旅行場面の டிக்கெட் வாங்க で反復する。"
    },
    {
      "id": "l10-form-padikka",
      "targetTamil": "படிக்க",
      "structuredRoman": "paṭikka",
      "pronunciationRoman": "paḍikka",
      "katakana": "パディッカ",
      "meaningJa": "読むために／学ぶことへ",
      "literalJapanese": "読む・学ぶ・後続へ渡す形",
      "grammarNote": "முடியாது の前で「読めない」を作る。",
      "vocabulary": [
        "படிக்க"
      ],
      "audioGroup": "l10-forms",
      "kind": "-க்க 型",
      "group": "頻出不定詞",
      "note": "முடியாது の前で「読めない」を作る。"
    }
  ].map(make);

  const lesson = {
    "id": "lesson10-v35",
    "number": 10,
    "navTitle": "不定詞",
    "title": "動詞を不定詞にして、目的・否定・可能の後ろへ渡す",
    "tamilTitle": "சாப்பிட, பாக்க, வர: இணைக்கும் வினை வடிவம்",
    "deck": "不定詞を「時制・人称を付けない動詞」として読み、最後の有限動詞・述語が文を完成させる流れをつかみます。",
    "targets": [
      "不定詞と有限動詞",
      "目的＋移動",
      "頻出不定詞の完成形",
      "வர・செய்ய の特別型",
      "第9課の否定との接続"
    ],
    "heroExample": examples[0],
    "criticalPoints": [
      "<span class=\"ta-inline\" lang=\"ta\">சாப்பிட</span> <span class=\"roman-inline\">(cāppiṭa)</span>・<span class=\"ta-inline\" lang=\"ta\">பாக்க</span> <span class=\"roman-inline\">(pākka)</span> などの不定詞は、時制・人物をまだ決めない。",
      "目的文では <span class=\"ta-inline\" lang=\"ta\">வாங்க கடைக்கு போறேன்</span> <span class=\"roman-inline\">(vāṅka kaṭai-kku pōṟ-ēṉ)</span> のように、目的→到達点→有限動詞の順。",
      "<span class=\"ta-inline\" lang=\"ta\">வர</span> <span class=\"roman-inline\">(vara)</span>・<span class=\"ta-inline\" lang=\"ta\">செய்ய</span> <span class=\"roman-inline\">(ceyya)</span> は一律変換せず、完成した頻出形として覚える。"
    ],
    "readSections": [
      {
        "kicker": "まず結論",
        "heading": "不定詞は、動詞を完成させず後ろへ渡す",
        "takeaway": "<span class=\"ta-inline\" lang=\"ta\">சாப்பிட</span> <span class=\"roman-inline\">(cāppiṭa)</span> は「食べる」の意味だけを持ち、最後の <span class=\"ta-inline\" lang=\"ta\">போறேன்</span> <span class=\"roman-inline\">(pōṟ-ēṉ)</span> が時制と一人称を完成させます。",
        "paragraphs": [
          "<span class=\"ta-inline\" lang=\"ta\">நான் சாப்பிட போறேன்</span> <span class=\"roman-inline\">(nāṉ cāppiṭa pōṟ-ēṉ)</span> では、最初の動詞は「何をしに／これから何をするか」、最後の動詞は「私は行く／これからする」を示します。",
          "長い文では、まず右端の有限動詞を探します。その左に <span class=\"ta-inline\" lang=\"ta\">பாக்க</span> <span class=\"roman-inline\">(pākka)</span>・<span class=\"ta-inline\" lang=\"ta\">வர</span> <span class=\"roman-inline\">(vara)</span>・<span class=\"ta-inline\" lang=\"ta\">செய்ய</span> <span class=\"roman-inline\">(ceyya)</span> があれば、後続へ意味を渡す不定詞として読みます。"
        ]
      },
      {
        "kicker": "形を読む",
        "heading": "一つの語尾を貼るのでなく、完成した不定詞の組を覚える",
        "takeaway": "<span class=\"ta-inline\" lang=\"ta\">சாப்பிடு</span> <span class=\"roman-inline\">(cāppiṭu)</span> → <span class=\"ta-inline\" lang=\"ta\">சாப்பிட</span> <span class=\"roman-inline\">(cāppiṭa)</span>、<span class=\"ta-inline\" lang=\"ta\">வா</span> <span class=\"roman-inline\">(vā)</span> → <span class=\"ta-inline\" lang=\"ta\">வர</span> <span class=\"roman-inline\">(vara)</span>、<span class=\"ta-inline\" lang=\"ta\">செய்</span> <span class=\"roman-inline\">(cey)</span> → <span class=\"ta-inline\" lang=\"ta\">செய்ய</span> <span class=\"roman-inline\">(ceyya)</span> を対で覚えます。",
        "paragraphs": [
          "不定詞は見た目が <span class=\"ta-inline\" lang=\"ta\">-அ</span> <span class=\"roman-inline\">(-a)</span>・<span class=\"ta-inline\" lang=\"ta\">-க்க</span> <span class=\"roman-inline\">(-kka)</span>・<span class=\"ta-inline\" lang=\"ta\">-ய்ய</span> <span class=\"roman-inline\">(-yya)</span> などに分かれます。すべての動詞へ同じ文字を足す規則ではありません。",
          "初級では <span class=\"ta-inline\" lang=\"ta\">பாக்க</span> <span class=\"roman-inline\">(pākka)</span>・<span class=\"ta-inline\" lang=\"ta\">போக</span> <span class=\"roman-inline\">(pōka)</span>・<span class=\"ta-inline\" lang=\"ta\">வர</span> <span class=\"roman-inline\">(vara)</span>・<span class=\"ta-inline\" lang=\"ta\">குடிக்க</span> <span class=\"roman-inline\">(kuṭikka)</span>・<span class=\"ta-inline\" lang=\"ta\">வாங்க</span> <span class=\"roman-inline\">(vāṅka)</span> を、音声付きの完成形として反復します。"
        ]
      },
      {
        "kicker": "なぜ？",
        "heading": "時制と人物を最後へ集めると、文の中心が見える",
        "takeaway": "<span class=\"ta-inline\" lang=\"ta\">தண்ணி வாங்க கடைக்கு போறேன்</span> <span class=\"roman-inline\">(taṇṇi vāṅka kaṭai-kku pōṟ-ēṉ)</span> の有限動詞は最後の <span class=\"ta-inline\" lang=\"ta\">போறேன்</span> <span class=\"roman-inline\">(pōṟ-ēṉ)</span> だけです。",
        "paragraphs": [
          "<span class=\"ta-inline\" lang=\"ta\">வாங்க</span> <span class=\"roman-inline\">(vāṅka)</span> 自体には「私・昨日・明日」がありません。目的「買いに」を示し、<span class=\"ta-inline\" lang=\"ta\">கடைக்கு</span> <span class=\"roman-inline\">(kaṭai-kku)</span> が行き先、<span class=\"ta-inline\" lang=\"ta\">போறேன்</span> <span class=\"roman-inline\">(pōṟ-ēṉ)</span> が時制と人物を回収します。",
          "読む順番は「最後の動詞で文を確定 → 左へ戻って目的・対象・行き先を足す」です。"
        ]
      },
      {
        "kicker": "実際に使う",
        "heading": "旅行では「何をしに、どこへ行く」を一つの型にする",
        "takeaway": "<span class=\"ta-inline\" lang=\"ta\">படம் பாக்க தியேட்டருக்கு போறேன்</span> <span class=\"roman-inline\">(paṭam pākka tiyēṭṭar-ukku pōṟ-ēṉ)</span> の順を保ち、目的と到達点を差し替えます。",
        "paragraphs": [
          "<span class=\"ta-inline\" lang=\"ta\">டிக்கெட் வாங்க போறேன்</span> <span class=\"roman-inline\">(ṭikkeṭ vāṅka pōṟ-ēṉ)</span> は「切符を買いに行きます／これから買います」。<span class=\"ta-inline\" lang=\"ta\">நண்பரை பாக்க போறேன்</span> <span class=\"roman-inline\">(naṇpar-ai pākka pōṟ-ēṉ)</span> は「友達に会いに行きます」です。",
          "日本語訳で「会う」「これから〜する」と自然に調整しても、タミル語の骨格は不定詞＋後続動詞です。"
        ]
      },
      {
        "kicker": "混ぜない",
        "heading": "不定詞と、最後の活用動詞を同じ扱いにしない",
        "takeaway": "<span class=\"ta-inline\" lang=\"ta\">போக</span> <span class=\"roman-inline\">(pōka)</span> には時制・人称がなく、<span class=\"ta-inline\" lang=\"ta\">போறேன்</span> <span class=\"roman-inline\">(pōṟ-ēṉ)</span> には現在・一人称が入っています。",
        "paragraphs": [
          "<span class=\"ta-inline\" lang=\"ta\">நான் வீட்டுக்கு போக போறேன்</span> <span class=\"roman-inline\">(nāṉ vīṭṭ-ukku pōka pōṟ-ēṉ)</span> では「行く」が二度見えますが、最初は後続へ渡す形、最後は文を完成させる形です。",
          "第9課の <span class=\"ta-inline\" lang=\"ta\">வர மாட்டேன்</span> <span class=\"roman-inline\">(vara māṭṭ-ēṉ)</span> と <span class=\"ta-inline\" lang=\"ta\">வர முடியாது</span> <span class=\"roman-inline\">(vara muṭiyātu)</span> でも、<span class=\"ta-inline\" lang=\"ta\">வர</span> <span class=\"roman-inline\">(vara)</span> が後ろの否定述語へ意味を渡します。"
        ],
        "note": {
          "tone": "pink",
          "title": "この課の最重要ミス",
          "body": "<span class=\"ta-inline\" lang=\"ta\">பாக்க</span> <span class=\"roman-inline\">(pākka)</span> だけを「私は見る」と訳さない。人物と時間は後ろの有限動詞・述語まで読んで決めます。"
        }
      },
      {
        "kicker": "3文で復習",
        "heading": "目的・到達点・最後の動詞を追う",
        "takeaway": "各文で不定詞を丸で囲み、最後の <span class=\"ta-inline\" lang=\"ta\">போறேன்</span> <span class=\"roman-inline\">(pōṟ-ēṉ)</span> が文を完成させることを確認します。",
        "paragraphs": [
          "<span class=\"ta-inline\" lang=\"ta\">நான் சாப்பிட போறேன்.</span> <span class=\"roman-inline\">(nāṉ cāppiṭa pōṟ-ēṉ.)</span><br><span class=\"reading-ja\">私は食べに行きます／これから食べます。</span><br><br><span class=\"ta-inline\" lang=\"ta\">நான் தண்ணி வாங்க கடைக்கு போறேன்.</span> <span class=\"roman-inline\">(nāṉ taṇṇi vāṅka kaṭai-kku pōṟ-ēṉ.)</span><br><span class=\"reading-ja\">私は水を買いに店へ行きます。</span><br><br><span class=\"ta-inline\" lang=\"ta\">நான் படம் பாக்க தியேட்டருக்கு போறேன்.</span> <span class=\"roman-inline\">(nāṉ paṭam pākka tiyēṭṭar-ukku pōṟ-ēṉ.)</span><br><span class=\"reading-ja\">私は映画を見に映画館へ行きます。</span>"
        ],
        "miniReading": {
          "intro": "不定詞と最後の有限動詞を分けます。",
          "ids": [
            "l10-01",
            "l10-02",
            "l10-03"
          ]
        }
      }
    ],
    "formConfig": {
      "mode": "grammar",
      "title": "第10課の形を、意味と構造で照合する",
      "intro": "不定詞を「時制・人称を付けない動詞」として読み、最後の有限動詞・述語が文を完成させる流れをつかみます。",
      "patterns": Object.freeze(patterns),
      "checkpoint": "不定詞と最後の有限動詞を見分け、目的→到達点→移動の語順と、வர・செய்ய の完成形を説明できれば合格です。"
    },
    "examples": Object.freeze(examples),
    "quiz": [
      {
        "focus": "形態分解",
        "q": "<span class=\"ta-inline\" lang=\"ta\">சாப்பிட போறேன்</span> <span class=\"roman-inline\">(cāppiṭa pōṟ-ēṉ)</span> を正しく分けたものは？",
        "options": [
          "食べる・後続へ渡す形＋行く／これからする・現在・私",
          "食べた・過去＋行った・過去",
          "食べる場所＋私の所有",
          "食べられない＋私"
        ],
        "answer": 0,
        "feedback": "<span class=\"ta-inline\" lang=\"ta\">சாப்பிட</span> <span class=\"roman-inline\">(cāppiṭa)</span> は不定詞、<span class=\"ta-inline\" lang=\"ta\">போறேன்</span> <span class=\"roman-inline\">(pōṟ-ēṉ)</span> が時制・一人称を持つ有限動詞です。",
        "rule": "不定詞は意味を渡し、最後の有限動詞が文を完成させる。",
        "tags": [
          "正解",
          "二つとも有限と誤認",
          "名詞句との混同",
          "可能否定との混同"
        ]
      },
      {
        "focus": "機能選択",
        "q": "「映画を見に映画館へ行きます」に合う語順は？",
        "options": [
          "<span class=\"quiz-option-ta\" lang=\"ta\">நான் படம் பாக்க தியேட்டருக்கு போறேன்.</span><span class=\"quiz-option-roman\">nāṉ paṭam pākka tiyēṭṭar-ukku pōṟ-ēṉ.</span><span class=\"quiz-option-ja\">映画を見る目的＋映画館へ＋行く</span>",
          "<span class=\"quiz-option-ta\" lang=\"ta\">நான் தியேட்டருக்கு போறேன் படம் பாக்க.</span><span class=\"quiz-option-roman\">nāṉ tiyēṭṭar-ukku pōṟ-ēṉ paṭam pākka.</span><span class=\"quiz-option-ja\">有限動詞の後ろへ目的を置く</span>",
          "<span class=\"quiz-option-ta\" lang=\"ta\">நான் படம் பாத்தேன் தியேட்டருக்கு.</span><span class=\"quiz-option-roman\">nāṉ paṭam pātt-ēṉ tiyēṭṭar-ukku.</span><span class=\"quiz-option-ja\">映画を見た＋映画館へ</span>",
          "<span class=\"quiz-option-ta\" lang=\"ta\">நான் படம் பாக்கல தியேட்டருக்கு.</span><span class=\"quiz-option-roman\">nāṉ paṭam pākka-la tiyēṭṭar-ukku.</span><span class=\"quiz-option-ja\">映画を見なかった＋映画館へ</span>"
        ],
        "answer": 0,
        "feedback": "目的の <span class=\"ta-inline\" lang=\"ta\">பாக்க</span> <span class=\"roman-inline\">(pākka)</span>、到達点の <span class=\"ta-inline\" lang=\"ta\">தியேட்டருக்கு</span> <span class=\"roman-inline\">(tiyēṭṭar-ukku)</span>、最後の <span class=\"ta-inline\" lang=\"ta\">போறேன்</span> <span class=\"roman-inline\">(pōṟ-ēṉ)</span> の順です。",
        "rule": "目的 → 行き先 → 移動動詞の順で積み上げる。",
        "tags": [
          "正解",
          "語順逆転",
          "過去形との混同",
          "否定形との混同"
        ]
      },
      {
        "focus": "実用場面",
        "q": "旅行中に「水を買いに店へ行きます」と言う文は？",
        "options": [
          "<span class=\"quiz-option-ta\" lang=\"ta\">நான் தண்ணி வாங்க கடைக்கு போறேன்.</span><span class=\"quiz-option-roman\">nāṉ taṇṇi vāṅka kaṭai-kku pōṟ-ēṉ.</span><span class=\"quiz-option-ja\">水を買いに店へ行きます</span>",
          "<span class=\"quiz-option-ta\" lang=\"ta\">நான் தண்ணி கடையில இருக்கு.</span><span class=\"quiz-option-roman\">nāṉ taṇṇi kaṭai-y-ila irukku.</span><span class=\"quiz-option-ja\">私＋水＋店にある</span>",
          "<span class=\"quiz-option-ta\" lang=\"ta\">நான் கடைக்கு தண்ணி பாக்கறேன்.</span><span class=\"quiz-option-roman\">nāṉ kaṭai-kku taṇṇi pākkaṟ-ēṉ.</span><span class=\"quiz-option-ja\">店へ水を見ます</span>",
          "<span class=\"quiz-option-ta\" lang=\"ta\">என்னால தண்ணி வாங்க முடியாது.</span><span class=\"quiz-option-roman\">eṉṉ-āla taṇṇi vāṅka muṭiyātu.</span><span class=\"quiz-option-ja\">水を買えません</span>"
        ],
        "answer": 0,
        "feedback": "<span class=\"ta-inline\" lang=\"ta\">வாங்க</span> <span class=\"roman-inline\">(vāṅka)</span> が目的、<span class=\"ta-inline\" lang=\"ta\">கடைக்கு</span> <span class=\"roman-inline\">(kaṭai-kku)</span> が行き先、<span class=\"ta-inline\" lang=\"ta\">போறேன்</span> <span class=\"roman-inline\">(pōṟ-ēṉ)</span> が移動です。",
        "rule": "実用文では「何を＋何しに＋どこへ＋行く」を順に置く。",
        "tags": [
          "正解",
          "存在文の崩れ",
          "動詞選択の誤り",
          "可能否定"
        ]
      },
      {
        "focus": "混同防止",
        "q": "<span class=\"ta-inline\" lang=\"ta\">வர</span> <span class=\"roman-inline\">(vara)</span> と <span class=\"ta-inline\" lang=\"ta\">வர்றேன்</span> <span class=\"roman-inline\">(varṟ-ēṉ)</span> の違いは？",
        "options": [
          "வர は時制・人物なし、வர்றேன் は現在・一人称を含む",
          "どちらも「私は来ます」の完全な同義形",
          "வர は過去、வர்றேன் は未来",
          "வர は名詞、வர்றேன் は格語尾"
        ],
        "answer": 0,
        "feedback": "<span class=\"ta-inline\" lang=\"ta\">வர</span> <span class=\"roman-inline\">(vara)</span> は後続へ渡す不定詞。<span class=\"ta-inline\" lang=\"ta\">வர்றேன்</span> <span class=\"roman-inline\">(varṟ-ēṉ)</span> は文を完成させる一人称現在です。",
        "rule": "Tamil文字が似ていても、右端の時制・人称語尾を確認する。",
        "tags": [
          "正解",
          "非定形と有限の混同",
          "時制逆転",
          "品詞・格の混同"
        ]
      },
      {
        "focus": "総合復習",
        "q": "第9課の否定と第10課の不定詞を両方正しく使う文は？",
        "options": [
          "<span class=\"quiz-option-ta\" lang=\"ta\">நான் நாளைக்கு வர மாட்டேன்.</span><span class=\"quiz-option-roman\">nāṉ nāḷai-kku vara māṭṭ-ēṉ.</span><span class=\"quiz-option-ja\">明日は来ません</span>",
          "<span class=\"quiz-option-ta\" lang=\"ta\">நான் நாளைக்கு வர்றேன் மாட்டேன்.</span><span class=\"quiz-option-roman\">nāṉ nāḷai-kku varṟ-ēṉ māṭṭ-ēṉ.</span><span class=\"quiz-option-ja\">有限動詞を二つ重ねる</span>",
          "<span class=\"quiz-option-ta\" lang=\"ta\">நான் நாளைக்கு வந்தேன் மாட்டேன்.</span><span class=\"quiz-option-roman\">nāṉ nāḷai-kku vant-ēṉ māṭṭ-ēṉ.</span><span class=\"quiz-option-ja\">過去形＋未来否定</span>",
          "<span class=\"quiz-option-ta\" lang=\"ta\">என்னை நாளைக்கு வர இல்லை.</span><span class=\"quiz-option-roman\">eṉṉ-ai nāḷai-kku vara illai.</span><span class=\"quiz-option-ja\">対格＋不在否定</span>"
        ],
        "answer": 0,
        "feedback": "<span class=\"ta-inline\" lang=\"ta\">வர</span> <span class=\"roman-inline\">(vara)</span> が不定詞、<span class=\"ta-inline\" lang=\"ta\">மாட்டேன்</span> <span class=\"roman-inline\">(māṭṭ-ēṉ)</span> が意志的な未来否定と一人称を担います。",
        "rule": "மாட்டேன்・முடியாது の前では、動詞を不定詞で渡す。",
        "tags": [
          "正解",
          "有限動詞の重複",
          "時制の衝突",
          "格・否定装置の混同"
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

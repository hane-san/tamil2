(() => {
  "use strict";

  const { entry: E, confidence: C } = window.TAMIL_V30;
  const SOURCE_REFS = [
    "TAMIL-INTEGRATED-v2.0-rc.1 §§20-25,31-32",
    "CORE-CURRICULUM-v1.1 §3",
    "PREDICATE-ENGINE-v1.1 §§1.2,3-4",
    "TN-SST-v4.1 lessons02,16,18",
    "SCHIFFMAN-SPOKEN-TAMIL: clitic -um; emphatic particles -ē, tāṉ and maṭṭum",
    "PENN-PLC-TAMIL: Tamil clitics and emphatic particles",
    "LANGUAGE-IN-INDIA: interrogative-based indefinite pronouns with -ō, -āvatu and -um",
    "legacy grammar-v28.js chapter36 (migration source only)"
  ];
  const make = input => E({ ...input, sourceRefs: SOURCE_REFS, confidence: input.confidence ?? C("B", "B", "C", "B") });

  const examples = [
    make({
      id: "se-01",
      targetTamil: "நானும் வர்றேன்.",
      structuredRoman: "nāṉ-um varṟ-ēṉ.",
      pronunciationRoman: "nānum varrēn.",
      katakana: "ナーヌム ヴァッレーン。",
      meaningJa: "私も来ます。",
      literalJapanese: "私・も＋来る・現在・私",
      morphemes: [
        { surfaceTamil: "நானும்", analysis: "நான் + -உம்", gloss: "私も" },
        { surfaceTamil: "வர்றேன்", gloss: "来ます・私" }
      ],
      grammarNote: "普通名詞・代名詞に付く -உம் は、すでにある集合へ対象を追加します。",
      vocabulary: ["நான்", "-உம்", "வர்றேன்"],
      audioGroup: "supplement-e-core",
      featured: true
    }),
    make({
      id: "se-02",
      targetTamil: "நான் மட்டும் வர்றேன்.",
      structuredRoman: "nāṉ maṭṭum varṟ-ēṉ.",
      pronunciationRoman: "nān maṭṭum varrēn.",
      katakana: "ナーン マットゥム ヴァッレーン。",
      meaningJa: "私だけ来ます。",
      literalJapanese: "私＋だけ＋来る・現在・私",
      morphemes: [
        { surfaceTamil: "நான்", gloss: "私" },
        { surfaceTamil: "மட்டும்", gloss: "だけ・限定" },
        { surfaceTamil: "வர்றேன்", gloss: "来ます・私" }
      ],
      grammarNote: "மட்டும் は候補の範囲を限定します。追加の -உம் と逆方向の働きです。",
      vocabulary: ["நான்", "மட்டும்", "வர்றேன்"],
      audioGroup: "supplement-e-core",
      featured: true
    }),
    make({
      id: "se-03",
      targetTamil: "நான் தான் வர்றேன்.",
      structuredRoman: "nāṉ tāṉ varṟ-ēṉ.",
      pronunciationRoman: "nān tān varrēn.",
      katakana: "ナーン ターン ヴァッレーン。",
      meaningJa: "来るのは私です。",
      literalJapanese: "私＋焦点＋来る・現在・私",
      morphemes: [
        { surfaceTamil: "நான்", gloss: "私" },
        { surfaceTamil: "தான்", gloss: "私だ、と焦点化" },
        { surfaceTamil: "வர்றேன்", gloss: "来ます・私" }
      ],
      grammarNote: "தான் は訂正・同定・新旧情報のつながりを作る焦点要素です。常に日本語の『だけ』へ固定しません。",
      vocabulary: ["நான்", "தான்", "வர்றேன்"],
      audioGroup: "supplement-e-core",
      featured: true
    }),
    make({
      id: "se-04",
      targetTamil: "நானே வர்றேன்.",
      structuredRoman: "nāṉ-ē varṟ-ēṉ.",
      pronunciationRoman: "nānē varrēn.",
      katakana: "ナーネー ヴァッレーン。",
      meaningJa: "私自身が来ます／ほかならぬ私が来ます。",
      literalJapanese: "私・強い指定＋来る・現在・私",
      morphemes: [
        { surfaceTamil: "நானே", analysis: "நான் + -ஏ", gloss: "私自身が／ほかならぬ私が" },
        { surfaceTamil: "வர்றேன்", gloss: "来ます・私" }
      ],
      grammarNote: "-ஏ は候補間の対照や強い指定に働きます。தான் と重なる場面はありますが、完全な同義ではありません。",
      vocabulary: ["நான்", "-ஏ", "வர்றேன்"],
      audioGroup: "supplement-e-bank"
    }),
    make({
      id: "se-05",
      targetTamil: "தண்ணி மட்டும் போதும்.",
      structuredRoman: "taṇṇi maṭṭum pōtum.",
      pronunciationRoman: "taṇṇi maṭṭum pōdum.",
      katakana: "タンニ マットゥム ポードゥム。",
      meaningJa: "水だけで十分です。",
      literalJapanese: "水＋だけ＋十分",
      morphemes: [
        { surfaceTamil: "தண்ணி", gloss: "水" },
        { surfaceTamil: "மட்டும்", gloss: "だけ" },
        { surfaceTamil: "போதும்", gloss: "十分です" }
      ],
      grammarNote: "限定したい名詞の直後に மட்டும் を置きます。தண்ணியும் なら『水も』へ意味が変わります。",
      vocabulary: ["தண்ணி", "மட்டும்", "போதும்"],
      audioGroup: "supplement-e-core"
    }),
    make({
      id: "se-06",
      targetTamil: "யாரோ கதவைத் தட்டுறாங்க.",
      structuredRoman: "yār-ō katav-ai-t taṭṭu-ṟ-āṅka.",
      pronunciationRoman: "yārō kadave taṭṭurānga.",
      katakana: "ヤーロー カダヴェ タットゥラーンガ。",
      meaningJa: "誰かがドアをたたいています。",
      literalJapanese: "誰・不明な特定存在＋ドア・を＋たたく・現在・人間複数／敬意",
      morphemes: [
        { surfaceTamil: "யாரோ", analysis: "யார் + -ஓ", gloss: "誰か・存在は分かるが同定できない" },
        { surfaceTamil: "கதவைத்", analysis: "கதவு + -ஐ + -த்", gloss: "ドアを・接続" },
        { surfaceTamil: "தட்டுறாங்க", gloss: "たたいています・人間複数／会話的敬意" }
      ],
      grammarNote: "யாரோ は、ある人物の存在は分かるものの、誰か同定できないときに使います。",
      vocabulary: ["யாரோ", "கதவு", "தட்டுறாங்க"],
      audioGroup: "supplement-e-core",
      featured: true
    }),
    make({
      id: "se-07",
      targetTamil: "ஏதோ பிரச்சனை இருக்கு.",
      structuredRoman: "ēt-ō piraccaṉai irukku.",
      pronunciationRoman: "ēdō piraccanai irukku.",
      katakana: "エードー ピラッチャナイ イルック。",
      meaningJa: "何か問題があります。",
      literalJapanese: "何か・不明な特定内容＋問題＋ある",
      morphemes: [
        { surfaceTamil: "ஏதோ", analysis: "ஏது + -ஓ", gloss: "何か・内容は特定できない" },
        { surfaceTamil: "பிரச்சனை", gloss: "問題" },
        { surfaceTamil: "இருக்கு", gloss: "あります" }
      ],
      grammarNote: "ஏதோ は、何かが存在することは分かるが内容を特定できない場合の不定表現です。",
      vocabulary: ["ஏதோ", "பிரச்சனை", "இருக்கு"],
      audioGroup: "supplement-e-bank"
    }),
    make({
      id: "se-08",
      targetTamil: "யாராவது கதவைத் திறக்க முடியுமா?",
      structuredRoman: "yār-āvatu katav-ai-t tiṟakka muṭiy-um-ā?",
      pronunciationRoman: "yārāvadu kadave tirakka muḍiyumā?",
      katakana: "ヤーラーヴァドゥ カダヴェ ティラッカ ムディユマー？",
      meaningJa: "どなたかドアを開けられますか。",
      literalJapanese: "誰か・誰でもよい一人＋ドア・を＋開ける＋できる・疑問",
      morphemes: [
        { surfaceTamil: "யாராவது", analysis: "யார் + -ஆவது", gloss: "誰か・候補を特定しない" },
        { surfaceTamil: "கதவைத்", gloss: "ドアを" },
        { surfaceTamil: "திறக்க", gloss: "開ける・不定詞" },
        { surfaceTamil: "முடியுமா", gloss: "できますか" }
      ],
      grammarNote: "யாராவது は、特定の人物を知っているのではなく、候補の誰でもよいので一人を求める表現です。",
      vocabulary: ["யாராவது", "கதவு", "திறக்க", "முடியுமா"],
      audioGroup: "supplement-e-core"
    }),
    make({
      id: "se-09",
      targetTamil: "ஏதாவது சாப்பிடணும்.",
      structuredRoman: "ēt-āvatu cāppiṭa-ṇum.",
      pronunciationRoman: "ēdāvadu sāppiḍaṇum.",
      katakana: "エーダーヴァドゥ サーッピダヌム。",
      meaningJa: "何か食べないといけません。",
      literalJapanese: "何か・どれでもよい一つ＋食べる・必要",
      morphemes: [
        { surfaceTamil: "ஏதாவது", analysis: "ஏது + -ஆவது", gloss: "何か・候補を特定しない" },
        { surfaceTamil: "சாப்பிடணும்", analysis: "சாப்பிட + -ணும்", gloss: "食べる必要がある" }
      ],
      grammarNote: "ஏதாவது は、候補の中から内容を指定せず『何か一つ』を求める表現です。ஏதோ の既知の存在とは異なります。",
      vocabulary: ["ஏதாவது", "சாப்பிடணும்"],
      audioGroup: "supplement-e-bank"
    }),
    make({
      id: "se-10",
      targetTamil: "ரூம்ல யாரும் இல்ல.",
      structuredRoman: "rūm-la yār-um illa.",
      pronunciationRoman: "rūmla yārum illa.",
      katakana: "ルームラ ヤールム イッラ。",
      meaningJa: "部屋には誰もいません。",
      literalJapanese: "部屋・場所＋誰・も＋いない",
      morphemes: [
        { surfaceTamil: "ரூம்ல", analysis: "ரூம் + -ல", gloss: "部屋に" },
        { surfaceTamil: "யாரும்", analysis: "யார் + -உம்", gloss: "誰も・否定と呼応" },
        { surfaceTamil: "இல்ல", gloss: "いない" }
      ],
      grammarNote: "疑問詞＋-உம் が否定と組むと全称否定になります。普通名詞への追加の -உம் と同じ訳規則にしません。",
      vocabulary: ["ரூம்", "யாரும்", "இல்ல"],
      audioGroup: "supplement-e-core"
    }),
    make({
      id: "se-11",
      targetTamil: "எனக்கு எதுவும் வேணாம்.",
      structuredRoman: "eṉ-akku etuv-um vēṇām.",
      pronunciationRoman: "enakku eduvum vēṇām.",
      katakana: "エナック エドゥヴム ヴェーナーム。",
      meaningJa: "私は何も要りません。",
      literalJapanese: "私・に＋何・も＋要らない",
      morphemes: [
        { surfaceTamil: "எனக்கு", analysis: "என் + -அக்கு", gloss: "私には" },
        { surfaceTamil: "எதுவும்", analysis: "எது + -உம்", gloss: "何も・否定と呼応" },
        { surfaceTamil: "வேணாம்", gloss: "要りません" }
      ],
      grammarNote: "எதுவும்＋否定で『何も〜ない』を作ります。肯定文の追加『〜も』とは機能を分けて読みます。",
      vocabulary: ["எனக்கு", "எதுவும்", "வேணாம்"],
      audioGroup: "supplement-e-bank"
    }),
    make({
      id: "se-12",
      targetTamil: "நான் மட்டும் இங்க இருக்கேன்.",
      structuredRoman: "nāṉ maṭṭum iṅka irukk-ēṉ.",
      pronunciationRoman: "nān maṭṭum inga irukkēn.",
      katakana: "ナーン マットゥム インガ イルッケーン。",
      meaningJa: "ここにいるのは私だけです。",
      literalJapanese: "私＋だけ＋ここ＋いる・私",
      morphemes: [
        { surfaceTamil: "நான்", gloss: "私" },
        { surfaceTamil: "மட்டும்", gloss: "だけ" },
        { surfaceTamil: "இங்க", gloss: "ここ" },
        { surfaceTamil: "இருக்கேன்", gloss: "います・私" }
      ],
      grammarNote: "限定する主体の直後へ மட்டும் を置きます。短い読み取りでは、ドアを開ける候補が一人しかいない状況を作ります。",
      vocabulary: ["நான்", "மட்டும்", "இங்க", "இருக்கேன்"],
      audioGroup: "supplement-e-bank"
    })
  ];

  const patterns = [
    make({
      id: "se-form-additive",
      targetTamil: "நானும்.",
      structuredRoman: "nāṉ-um.",
      pronunciationRoman: "nānum.",
      katakana: "ナーヌム。",
      meaningJa: "私も",
      literalJapanese: "私・追加",
      grammarNote: "普通名詞・代名詞への -உம் は追加を示します。",
      vocabulary: ["நான்", "-உம்"],
      audioGroup: "supplement-e-forms",
      kind: "追加",
      group: "焦点助詞",
      note: "疑問詞＋-உம்＋否定とは機能を分ける。"
    }),
    make({
      id: "se-form-limit",
      targetTamil: "நான் மட்டும்.",
      structuredRoman: "nāṉ maṭṭum.",
      pronunciationRoman: "nān maṭṭum.",
      katakana: "ナーン マットゥム。",
      meaningJa: "私だけ",
      literalJapanese: "私＋限定",
      grammarNote: "மட்டும் は候補の範囲を一つに限定します。",
      vocabulary: ["நான்", "மட்டும்"],
      audioGroup: "supplement-e-forms",
      kind: "限定",
      group: "焦点助詞",
      note: "追加の -உம் と対比する。"
    }),
    make({
      id: "se-form-focus",
      targetTamil: "நான் தான்.",
      structuredRoman: "nāṉ tāṉ.",
      pronunciationRoman: "nān tān.",
      katakana: "ナーン ターン。",
      meaningJa: "私が／私こそ",
      literalJapanese: "私＋焦点",
      grammarNote: "தான் は同定・訂正・談話上の焦点を示します。",
      vocabulary: ["நான்", "தான்"],
      audioGroup: "supplement-e-forms",
      kind: "焦点",
      group: "焦点助詞",
      note: "常に『だけ』とは訳さない。"
    }),
    make({
      id: "se-form-emphatic",
      targetTamil: "இங்கேயே.",
      structuredRoman: "iṅkē-y-ē.",
      pronunciationRoman: "ingēyē.",
      katakana: "インゲーイェー。",
      meaningJa: "まさにここで／ここに",
      literalJapanese: "ここ・強い指定",
      grammarNote: "場所形に追加の -ஏ を付け、対照的に強く指定します。",
      vocabulary: ["இங்கே", "-ஏ"],
      audioGroup: "supplement-e-forms",
      kind: "強い指定",
      group: "焦点助詞",
      note: "普通の場所形 இங்கே の語末 ē と、追加の強調 -ē を区別する。"
    }),
    make({
      id: "se-form-specific-indefinite",
      targetTamil: "யாரோ, ஏதோ.",
      structuredRoman: "yār-ō, ēt-ō.",
      pronunciationRoman: "yārō, ēdō.",
      katakana: "ヤーロー、エードー。",
      meaningJa: "誰か／何か（存在は分かるが同定できない）",
      literalJapanese: "疑問語・不明な特定存在",
      grammarNote: "-ஓ は、存在は前提にあるが同定できない不定表現を作ります。",
      vocabulary: ["யாரோ", "ஏதோ"],
      audioGroup: "supplement-e-forms",
      kind: "不明な存在",
      group: "不定表現",
      note: "候補を自由に選ぶ -ஆவது と分ける。"
    }),
    make({
      id: "se-form-nonspecific-indefinite",
      targetTamil: "யாராவது, ஏதாவது.",
      structuredRoman: "yār-āvatu, ēt-āvatu.",
      pronunciationRoman: "yārāvadu, ēdāvadu.",
      katakana: "ヤーラーヴァドゥ、エーダーヴァドゥ。",
      meaningJa: "誰か／何か（候補を特定しない）",
      literalJapanese: "疑問語・非特定の候補",
      grammarNote: "-ஆவது は、候補の中から誰・何でもよい一つを求めます。",
      vocabulary: ["யாராவது", "ஏதாவது"],
      audioGroup: "supplement-e-forms",
      kind: "非特定・自由選択",
      group: "不定表現",
      note: "既に存在する不明対象の -ஓ と分ける。"
    }),
    make({
      id: "se-form-negative-person",
      targetTamil: "யாரும் இல்ல.",
      structuredRoman: "yār-um illa.",
      pronunciationRoman: "yārum illa.",
      katakana: "ヤールム イッラ。",
      meaningJa: "誰もいない",
      literalJapanese: "誰・も＋いない",
      grammarNote: "疑問詞＋-உம் が否定と呼応して全称否定を作ります。",
      vocabulary: ["யாரும்", "இல்ல"],
      audioGroup: "supplement-e-forms",
      kind: "人の全称否定",
      group: "否定極性",
      note: "肯定文では別の読みが可能なため、否定との組を中心に学ぶ。"
    }),
    make({
      id: "se-form-negative-thing",
      targetTamil: "எதுவும் வேணாம்.",
      structuredRoman: "etuv-um vēṇām.",
      pronunciationRoman: "eduvum vēṇām.",
      katakana: "エドゥヴム ヴェーナーム。",
      meaningJa: "何も要らない",
      literalJapanese: "何・も＋要らない",
      grammarNote: "物・内容の全称否定は எதுவும்＋否定で作れます。",
      vocabulary: ["எதுவும்", "வேணாம்"],
      audioGroup: "supplement-e-forms",
      kind: "物の全称否定",
      group: "否定極性",
      note: "普通名詞への追加 -உம் と同じ日本語訳へ固定しない。"
    })
  ];

  const readSections = [
    {
      kicker: "まず結論",
      heading: "追加・限定・焦点は、同じ候補集合を違う向きから見る",
      takeaway: "<span class=\"ta-inline\" lang=\"ta\">நானும் / நான் மட்டும் / நான் தான்</span> <span class=\"roman-inline\">(nāṉ-um / nāṉ maṭṭum / nāṉ tāṉ)</span> は、追加・限定・焦点です。",
      paragraphs: [
        "<span class=\"ta-inline\" lang=\"ta\">நானும் வர்றேன்</span> <span class=\"roman-inline\">(nāṉ-um varṟ-ēṉ)</span> は、すでに来る人へ私を追加します。",
        "<span class=\"ta-inline\" lang=\"ta\">நான் மட்டும் வர்றேன்</span> <span class=\"roman-inline\">(nāṉ maṭṭum varṟ-ēṉ)</span> は私だけに限定し、<span class=\"ta-inline\" lang=\"ta\">நான் தான் வர்றேன்</span> <span class=\"roman-inline\">(nāṉ tāṉ varṟ-ēṉ)</span> は『来るのは私だ』と焦点を当てます。"
      ]
    },
    {
      kicker: "形を読む",
      heading: "தான் と -ஏ は、訳ではなく対照の作り方を見る",
      takeaway: "<span class=\"ta-inline\" lang=\"ta\">நான் தான்</span> <span class=\"roman-inline\">(nāṉ tāṉ)</span> は焦点、<span class=\"ta-inline\" lang=\"ta\">நானே</span> <span class=\"roman-inline\">(nāṉ-ē)</span> は強い指定です。",
      paragraphs: [
        "தான் は訂正・同定・新しい情報と既知情報の結び付けなど、談話上の焦点を作ります。文脈によって『こそ』『が』『まさに』などと訳が変わります。",
        "-ஏ は一つを他の候補から強く対照させます。場所なら <span class=\"ta-inline\" lang=\"ta\">இங்கேயே</span> <span class=\"roman-inline\">(iṅkē-y-ē)</span>『まさにここ』のように使えます。"
      ]
    },
    {
      kicker: "なぜ？",
      heading: "-ஓ は存在を知っているが、誰・何か分からない",
      takeaway: "<span class=\"ta-inline\" lang=\"ta\">யாரோ / ஏதோ</span> <span class=\"roman-inline\">(yār-ō / ēt-ō)</span> は、不明な既存人物・内容です。",
      paragraphs: [
        "ドアをたたく音を聞けば、人がいることは分かります。しかし人物を同定できないので <span class=\"ta-inline\" lang=\"ta\">யாரோ</span> <span class=\"roman-inline\">(yār-ō)</span> を使います。",
        "<span class=\"ta-inline\" lang=\"ta\">ஏதோ பிரச்சனை இருக்கு</span> <span class=\"roman-inline\">(ēt-ō piraccaṉai irukku)</span> も、問題の存在は感じるが内容はまだ特定できないという組み立てです。"
      ]
    },
    {
      kicker: "実際に使う",
      heading: "-ஆவது は、誰・何でもよいので候補を求める",
      takeaway: "<span class=\"ta-inline\" lang=\"ta\">யாராவது / ஏதாவது</span> <span class=\"roman-inline\">(yār-āvatu / ēt-āvatu)</span> は、非特定の候補です。",
      paragraphs: [
        "助けを求める相手をまだ選んでいないなら <span class=\"ta-inline\" lang=\"ta\">யாராவது</span> <span class=\"roman-inline\">(yār-āvatu)</span>。食べる物を指定しないなら <span class=\"ta-inline\" lang=\"ta\">ஏதாவது</span> <span class=\"roman-inline\">(ēt-āvatu)</span> です。",
        "-ஓ は『いる／あるが同定できない』、-ஆவது は『どの候補でもよいので一つ』。日本語ではどちらも『誰か・何か』になり得るため、場面から区別します。"
      ]
    },
    {
      kicker: "混ぜない",
      heading: "普通名詞の -உம் と、疑問詞＋-உம்＋否定は同じ機能ではない",
      takeaway: "<span class=\"ta-inline\" lang=\"ta\">நானும்</span> <span class=\"roman-inline\">(nāṉ-um)</span> は追加、<span class=\"ta-inline\" lang=\"ta\">யாரும் இல்ல</span> <span class=\"roman-inline\">(yār-um illa)</span> は全称否定です。",
      paragraphs: [
        "普通名詞・代名詞へ付く -உம் は『〜も』ですが、疑問詞へ付き否定と呼応すると <span class=\"ta-inline\" lang=\"ta\">யாரும் இல்ல / எதுவும் வேணாம்</span> <span class=\"roman-inline\">(yār-um illa / etuv-um vēṇām)</span> のように『誰も／何も〜ない』となります。",
        "したがって -உம் を一つの日本語訳へ固定しません。何に付き、肯定・否定のどちらと組んでいるかを確認します。"
      ],
      note: {
        tone: "pink",
        title: "この補講の最重要ミス",
        body: "யாரோ と யாராவது を同じ『誰か』として交換しない。-உம் も、普通名詞への追加と疑問詞＋否定の全称否定を分けます。"
      }
    },
    {
      kicker: "3文で復習",
      heading: "誰かが来たが、開ける人はまだ決まっていない",
      takeaway: "<span class=\"ta-inline\" lang=\"ta\">யாரோ</span> <span class=\"roman-inline\">(yār-ō)</span> で不明な来訪者、<span class=\"ta-inline\" lang=\"ta\">யாராவது</span> <span class=\"roman-inline\">(yār-āvatu)</span> で非特定の協力者を示します。",
      paragraphs: [
        "<span class=\"ta-inline\" lang=\"ta\">யாரோ கதவைத் தட்டுறாங்க.</span> <span class=\"roman-inline\">(yār-ō katav-ai-t taṭṭu-ṟ-āṅka.)</span>",
        "<span class=\"ta-inline\" lang=\"ta\">யாராவது கதவைத் திறக்க முடியுமா?</span> <span class=\"roman-inline\">(yār-āvatu katav-ai-t tiṟakka muṭiy-um-ā?)</span>",
        "<span class=\"ta-inline\" lang=\"ta\">நான் மட்டும் இங்க இருக்கேன்.</span> <span class=\"roman-inline\">(nāṉ maṭṭum iṅka irukk-ēṉ.)</span>"
      ],
      miniReading: { ids: ["se-06", "se-08", "se-12"] }
    }
  ];

  const option = (ta, roman, ja) => `<span class="quiz-option-ta" lang="ta">${ta}</span><span class="quiz-option-roman">${roman}</span><span class="quiz-option-ja">${ja}</span>`;
  const quiz = [
    {
      focus: "形態分解",
      q: "他の人に『私も』を追加する形は？",
      options: [
        option("நானும்", "nāṉ-um", "私も"),
        option("நான் மட்டும்", "nāṉ maṭṭum", "私だけ"),
        option("நான் தான்", "nāṉ tāṉ", "私が／私こそ"),
        option("நானே", "nāṉ-ē", "私自身が")
      ],
      answer: 0,
      feedback: "普通名詞・代名詞に付く <span class=\"ta-inline\" lang=\"ta\">-உம்</span> <span class=\"roman-inline\">(-um)</span> は追加です。",
      rule: "追加は名詞・代名詞＋-உம்。",
      tags: ["正解", "限定", "焦点", "強い指定"]
    },
    {
      focus: "機能選択",
      q: "『水だけで十分です』と範囲を限定する文は？",
      options: [
        option("தண்ணி மட்டும் போதும்.", "taṇṇi maṭṭum pōtum.", "水だけで十分です"),
        option("தண்ணியும் போதும்.", "taṇṇi-y-um pōtum.", "水も十分です"),
        option("தண்ணி தான் போதும்.", "taṇṇi tāṉ pōtum.", "十分なのは水です"),
        option("தண்ணியே போதும்.", "taṇṇi-y-ē pōtum.", "ほかならぬ水で十分です")
      ],
      answer: 0,
      feedback: "<span class=\"ta-inline\" lang=\"ta\">மட்டும்</span> <span class=\"roman-inline\">(maṭṭum)</span> は候補を水だけへ限定します。",
      rule: "限定したい要素の直後へ மட்டும்。",
      tags: ["正解", "追加", "焦点", "強い指定"]
    },
    {
      focus: "実用場面",
      q: "誰でもよいので、誰かにドアを開けてほしいときは？",
      options: [
        option("யாராவது கதவைத் திறக்க முடியுமா?", "yār-āvatu katav-ai-t tiṟakka muṭiy-um-ā?", "どなたか開けられますか"),
        option("யாரோ கதவைத் திறக்க முடியுமா?", "yār-ō katav-ai-t tiṟakka muṭiy-um-ā?", "不明な特定人物が開けられますか"),
        option("யாரும் கதவைத் திறக்க முடியுமா?", "yār-um katav-ai-t tiṟakka muṭiy-um-ā?", "誰でも／誰も・極性依存"),
        option("யார் கதவைத் திறக்க முடியுமா?", "yār katav-ai-t tiṟakka muṭiy-um-ā?", "誰が開けられますか・疑問構造不整合")
      ],
      answer: 0,
      feedback: "候補を特定せず誰か一人を求めるので <span class=\"ta-inline\" lang=\"ta\">யாராவது</span> <span class=\"roman-inline\">(yār-āvatu)</span> です。",
      rule: "誰でもよいので一人なら யாராவது。",
      tags: ["正解", "既存不明人物", "極性依存", "内容疑問混在"]
    },
    {
      focus: "混同防止",
      q: "人の存在は分かるが、誰か同定できない『誰かがたたいている』は？",
      options: [
        option("யாரோ கதவைத் தட்டுறாங்க.", "yār-ō katav-ai-t taṭṭu-ṟ-āṅka.", "誰か不明の人がたたいています"),
        option("யாராவது கதவைத் தட்டுறாங்க.", "yār-āvatu katav-ai-t taṭṭu-ṟ-āṅka.", "誰でもよい誰かがたたいています"),
        option("யாரும் கதவைத் தட்டுறாங்க.", "yār-um katav-ai-t taṭṭu-ṟ-āṅka.", "誰でも／誰も・極性依存"),
        option("யார் கதவைத் தட்டுறாங்க?", "yār katav-ai-t taṭṭu-ṟ-āṅka?", "誰がたたいていますか")
      ],
      answer: 0,
      feedback: "存在を知っているが人物を同定できないため <span class=\"ta-inline\" lang=\"ta\">யாரோ</span> <span class=\"roman-inline\">(yār-ō)</span> です。",
      rule: "既存だが不明なら -ஓ、候補未指定なら -ஆவது。",
      tags: ["正解", "非特定候補", "極性依存", "内容疑問"]
    },
    {
      focus: "総合復習",
      q: "『部屋には誰もいません』と否定する形は？",
      options: [
        option("ரூம்ல யாரும் இல்ல.", "rūm-la yār-um illa.", "部屋には誰もいません"),
        option("ரூம்ல யாரோ இல்ல.", "rūm-la yār-ō illa.", "不明なある人がいません"),
        option("ரூம்ல யாராவது இல்ல.", "rūm-la yār-āvatu illa.", "非特定の誰かがいません"),
        option("ரூம்ல யார் இல்ல?", "rūm-la yār illa?", "部屋にいないのは誰ですか")
      ],
      answer: 0,
      feedback: "疑問詞＋<span class=\"ta-inline\" lang=\"ta\">-உம்</span> <span class=\"roman-inline\">(-um)</span> が否定と呼応して『誰も〜ない』になります。",
      rule: "全称否定は疑問詞＋-உம்＋否定。",
      tags: ["正解", "不明な特定存在", "非特定候補", "内容疑問"]
    }
  ];

  const supplement = {
    id: "supplement-e-v44",
    code: "E",
    release: "v4.4",
    navTitle: "も・だけ・こそ・誰か・何も",
    title: "小さな助詞で、追加・限定・焦点・不特定を切り替える",
    tamilTitle: "நானும் · நான் மட்டும் · நான் தான்",
    deck: "同じ名詞や疑問詞に付く小さな要素を、追加・限定・焦点・不明な存在・非特定候補・全称否定へ分けます。",
    entryQuestion: "小さな助詞一つで、追加・限定・焦点・不特定はどう変わる？",
    prerequisites: [2, 16, 18],
    returnToLessons: [2, 16, 18],
    targets: ["追加 -உம்", "限定 மட்டும்", "焦点 தான்／-ஏ", "不定 -ஓ／-ஆவது", "疑問詞＋-உம்＋否定"],
    criticalPoints: [
      "<span class=\"ta-inline\" lang=\"ta\">நானும் / நான் மட்டும் / நான் தான்</span> <span class=\"roman-inline\">(nāṉ-um / nāṉ maṭṭum / nāṉ tāṉ)</span> は、追加・限定・焦点。",
      "<span class=\"ta-inline\" lang=\"ta\">யாரோ</span> <span class=\"roman-inline\">(yār-ō)</span> は既存だが不明、<span class=\"ta-inline\" lang=\"ta\">யாராவது</span> <span class=\"roman-inline\">(yār-āvatu)</span> は候補を特定しない。",
      "普通名詞への <span class=\"ta-inline\" lang=\"ta\">-உம்</span> <span class=\"roman-inline\">(-um)</span> は追加、疑問詞＋-உம்＋否定は『誰も／何も〜ない』。"
    ],
    heroExample: examples[0],
    examples: Object.freeze(examples),
    readSections: Object.freeze(readSections),
    formConfig: {
      mode: "grammar",
      title: "追加・限定・焦点・不特定の対照表",
      intro: "同じ日本語訳になりやすい形を、付く位置・存在の前提・候補の選び方・肯否から分けます。",
      patterns: Object.freeze(patterns),
      checkpoint: "-உம் / மட்டும் / தான் / -ஏ、-ஓ / -ஆவது / 疑問詞＋-உம்＋否定を一機能ずつ即答する。"
    },
    quiz: Object.freeze(quiz),
    legacyRefs: ["grammar-v28.js:36", "G36-01..G36-09", "36-01..36-12"],
    status: "drafting",
    public: false
  };

  supplement.targets = Object.freeze(supplement.targets);
  supplement.prerequisites = Object.freeze(supplement.prerequisites);
  supplement.returnToLessons = Object.freeze(supplement.returnToLessons);
  supplement.criticalPoints = Object.freeze(supplement.criticalPoints);
  supplement.legacyRefs = Object.freeze(supplement.legacyRefs);
  window.TAMIL_SUPPLEMENTS_V42 = window.TAMIL_SUPPLEMENTS_V42 || [];
  window.TAMIL_SUPPLEMENTS_V42.push(Object.freeze(supplement));
})();
(() => {
  "use strict";

  const { entry: E, confidence: C } = window.TAMIL_V30;
  const SOURCE_REFS = [
    "TAMIL-INTEGRATED-v2.0-rc.1 §§23-25,31-32",
    "CORE-CURRICULUM-v1.1 §3 item23",
    "PREDICATE-ENGINE-v1.1 §§1.4,3-4,7",
    "TN-SST-v4.1 lessons07,11,12",
    "SCHIFFMAN-SPOKEN-TAMIL: transitivity, causation and verb classes",
    "LANGUAGE-IN-INDIA: grammaticalization of vai as a causative auxiliary",
    "legacy grammar-v28.js chapter38 examples38-01..38-04 (migration source only)"
  ];
  const make = input => E({ ...input, sourceRefs: SOURCE_REFS, confidence: input.confidence ?? C("B", "B", "C", "B") });

  const examples = [
    make({
      id: "sg-01",
      targetTamil: "அம்மா குழந்தையை படிக்க வைக்கறாங்க.",
      structuredRoman: "ammā kuḻantai-y-ai paṭikka vai-kkaṟ-āṅka.",
      underlyingAnalysis: "படிக்க + வை + நிகழ்காலம் + மனிதப் பன்மை/மரியாதை",
      pronunciationRoman: "ammā kuḻandaiye paḍikka vekkarānga.",
      katakana: "アンマー クランダイェ パディッカ ヴェッカラーンガ。",
      meaningJa: "母親は子どもを勉強させています。",
      literalJapanese: "母親＋子ども・を＋勉強する＋させる・現在・敬意",
      morphemes: [
        { surfaceTamil: "அம்மா", gloss: "母親・使役者" },
        { surfaceTamil: "குழந்தையை", analysis: "குழந்தை + -ஐ", gloss: "子どもを・動作をする側" },
        { surfaceTamil: "படிக்க", gloss: "勉強する・不定詞" },
        { surfaceTamil: "வைக்கறாங்க", analysis: "வை + -க்கற- + -ஆங்க", gloss: "させています・敬意／複数" }
      ],
      grammarNote: "検証済みの基本型では、動作をする人を対格にし、不定詞＋வை を続けます。ただし使役対象の格をすべて対格へ一般化しません。",
      vocabulary: ["அம்மா", "குழந்தை", "படிக்க", "வைக்கறாங்க"],
      audioGroup: "supplement-g-core",
      featured: true
    }),
    make({
      id: "sg-02",
      targetTamil: "இந்த படம் குழந்தையை சிரிக்க வைக்குது.",
      structuredRoman: "inta paṭam kuḻantai-y-ai cirikka vaikk-utu.",
      underlyingAnalysis: "சிரிக்க + வை + நடுநிலை நிகழ்காலம்",
      pronunciationRoman: "inda paḍam kuḻandaiye sirikka vekkudu.",
      katakana: "インダ パダム クランダイェ シリッカ ヴェックドゥ。",
      meaningJa: "この映画は子どもを笑わせます。",
      literalJapanese: "この＋映画＋子ども・を＋笑う＋させる・中性",
      morphemes: [
        { surfaceTamil: "இந்த படம்", gloss: "この映画・原因" },
        { surfaceTamil: "குழந்தையை", gloss: "子どもを" },
        { surfaceTamil: "சிரிக்க", gloss: "笑う・不定詞" },
        { surfaceTamil: "வைக்குது", analysis: "வை + -க்குது", gloss: "させます・中性" }
      ],
      grammarNote: "人だけでなく、映画・音・出来事なども原因として不定詞＋வை を取れます。右端は中性の வைக்குது です。",
      vocabulary: ["இந்த படம்", "குழந்தை", "சிரிக்க", "வைக்குது"],
      audioGroup: "supplement-g-core",
      featured: true
    }),
    make({
      id: "sg-03",
      targetTamil: "பஸ் இங்க நின்னது.",
      structuredRoman: "pas iṅka niṉṉ-atu.",
      pronunciationRoman: "bas inga ninnadu.",
      katakana: "バス インガ ニンナドゥ。",
      meaningJa: "バスはここで止まりました。",
      literalJapanese: "バス＋ここ＋止まった・中性",
      morphemes: [
        { surfaceTamil: "பஸ்", gloss: "バス・変化した物" },
        { surfaceTamil: "இங்க", gloss: "ここで" },
        { surfaceTamil: "நின்னது", analysis: "நில் + 過去・中性", gloss: "止まりました" }
      ],
      grammarNote: "止まった物そのものを主語にする自動詞文です。行為者や直接目的語を置きません。",
      vocabulary: ["பஸ்", "இங்க", "நின்னது"],
      audioGroup: "supplement-g-core",
      featured: true
    }),
    make({
      id: "sg-04",
      targetTamil: "அவர் பஸ்ஸை நிறுத்தினாரு.",
      structuredRoman: "avar pass-ai niṟuttiṉ-āru.",
      pronunciationRoman: "avar basse niruttināru.",
      katakana: "アヴァル バッセ ニルッティナール。",
      meaningJa: "その方はバスを止めました。",
      literalJapanese: "その方＋バス・を＋止めた・敬意",
      morphemes: [
        { surfaceTamil: "அவர்", gloss: "その方・行為者" },
        { surfaceTamil: "பஸ்ஸை", analysis: "பஸ் + -ஐ", gloss: "バスを・対象" },
        { surfaceTamil: "நிறுத்தினாரு", analysis: "நிறுத்து + 過去 + 敬意", gloss: "止めました" }
      ],
      grammarNote: "行為者が対象を止める他動詞文です。நில்／நிறுத்து は頻出の語彙対として登録し、万能な派生規則にはしません。",
      vocabulary: ["அவர்", "பஸ்", "நிறுத்தினாரு"],
      audioGroup: "supplement-g-core",
      featured: true
    }),
    make({
      id: "sg-05",
      targetTamil: "குழந்தை வேகமா ஓடுது.",
      structuredRoman: "kuḻantai vēkam-ā ōṭu-tu.",
      pronunciationRoman: "kuḻandai vēgamā ōḍudu.",
      katakana: "クランダイ ヴェーガマー オードゥドゥ。",
      meaningJa: "子どもは速く走っています。",
      literalJapanese: "子ども＋速く＋走る・中性",
      morphemes: [
        { surfaceTamil: "குழந்தை", gloss: "子ども・走る主体" },
        { surfaceTamil: "வேகமா", analysis: "வேகம் + -ஆ", gloss: "速く" },
        { surfaceTamil: "ஓடுது", analysis: "ஓடு + -து", gloss: "走ります／走っています" }
      ],
      grammarNote: "ஓடு は主体自身が走る自動詞です。車などが『動く・稼働する』意味にもなれますが、ここでは人の走行です。",
      vocabulary: ["குழந்தை", "வேகமா", "ஓடுது"],
      audioGroup: "supplement-g-bank"
    }),
    make({
      id: "sg-06",
      targetTamil: "அவர் காரை ஓட்டுறாரு.",
      structuredRoman: "avar kār-ai ōṭṭu-ṟ-āru.",
      pronunciationRoman: "avar kāre ōṭṭurāru.",
      katakana: "アヴァル カーレ オーットゥラール。",
      meaningJa: "その方は車を運転しています。",
      literalJapanese: "その方＋車・を＋運転する・現在・敬意",
      morphemes: [
        { surfaceTamil: "அவர்", gloss: "その方・運転者" },
        { surfaceTamil: "காரை", analysis: "கார் + -ஐ", gloss: "車を" },
        { surfaceTamil: "ஓட்டுறாரு", analysis: "ஓட்டு + -ற்- + -ஆரு", gloss: "運転しています" }
      ],
      grammarNote: "ஓட்டு は対象を動かす『運転する』他動詞です。ஓடு と形は近いですが、項構造と意味をセットで覚えます。",
      vocabulary: ["அவர்", "கார்", "ஓட்டுறாரு"],
      audioGroup: "supplement-g-core"
    }),
    make({
      id: "sg-07",
      targetTamil: "ரயில் நேரம் மாறிடுச்சு.",
      structuredRoman: "rayil nēram māṟ-iṭuccu.",
      pronunciationRoman: "rayil nēram māriḍuccu.",
      katakana: "ライル ネーラム マーリドゥッチュ。",
      meaningJa: "列車の時刻が変わりました。",
      literalJapanese: "列車＋時刻＋変わって・変化完了",
      morphemes: [
        { surfaceTamil: "ரயில் நேரம்", gloss: "列車の時刻・変化したもの" },
        { surfaceTamil: "மாறிடுச்சு", analysis: "மாறு + -இடுச்சு", gloss: "変わりました" }
      ],
      grammarNote: "時刻そのものが変わったと報告する自動詞側です。誰が変更したかは前面に出しません。",
      vocabulary: ["ரயில்", "நேரம்", "மாறிடுச்சு"],
      audioGroup: "supplement-g-core"
    }),
    make({
      id: "sg-08",
      targetTamil: "அவங்க ரயில் நேரத்தை மாத்தினாங்க.",
      structuredRoman: "avaṅka rayil nērat-t-ai māttiṉ-āṅka.",
      underlyingAnalysis: "நேரம் + -ஐ → நேரத்தை; மாற்று のSST形 மாத்து",
      pronunciationRoman: "avanga rayil nērattē māttinānga.",
      katakana: "アヴァンガ ライル ネーラッテ マーッティナーンガ。",
      meaningJa: "その人たちは列車の時刻を変更しました。",
      literalJapanese: "その人たち＋列車＋時刻・を＋変えた・複数",
      morphemes: [
        { surfaceTamil: "அவங்க", gloss: "その人たち／あの人たち・行為者" },
        { surfaceTamil: "ரயில் நேரத்தை", analysis: "ரயில் நேரம் + -ஐ", gloss: "列車の時刻を" },
        { surfaceTamil: "மாத்தினாங்க", analysis: "மாத்து + 過去 + -ஆங்க", gloss: "変更しました" }
      ],
      grammarNote: "行為者が時刻を変更した他動詞側です。மாறு／மாத்து はSSTで頻出する対として保持し、別の動詞へ機械適用しません。",
      vocabulary: ["அவங்க", "ரயில் நேரம்", "மாத்தினாங்க"],
      audioGroup: "supplement-g-core",
      confidence: C("B", "B", "C", "C")
    }),
    make({
      id: "sg-09",
      targetTamil: "கதவு திறந்தது.",
      structuredRoman: "katavu tiṟant-atu.",
      pronunciationRoman: "kadavu tirandadu.",
      katakana: "カダヴ ティランダドゥ。",
      meaningJa: "ドアが開きました。",
      literalJapanese: "ドア＋開いた・中性",
      morphemes: [
        { surfaceTamil: "கதவு", gloss: "ドア・変化したもの" },
        { surfaceTamil: "திறந்தது", analysis: "திற + 過去・中性", gloss: "開きました" }
      ],
      grammarNote: "ドアを主語にし、開く変化を述べます。自他で必ず別の語幹になるわけではないことを見る例です。",
      vocabulary: ["கதவு", "திறந்தது"],
      audioGroup: "supplement-g-bank"
    }),
    make({
      id: "sg-10",
      targetTamil: "நான் கதவைத் திறந்தேன்.",
      structuredRoman: "nāṉ katav-ai-t tiṟant-ēṉ.",
      pronunciationRoman: "nān kadave tirandēn.",
      katakana: "ナーン カダヴェ ティランデーン。",
      meaningJa: "私はドアを開けました。",
      literalJapanese: "私＋ドア・を＋開けた・私",
      morphemes: [
        { surfaceTamil: "நான்", gloss: "私・行為者" },
        { surfaceTamil: "கதவைத்", analysis: "கதவு + -ஐ + -த்", gloss: "ドアを・接続" },
        { surfaceTamil: "திறந்தேன்", analysis: "திற + 過去 + -ஏன்", gloss: "開けました" }
      ],
      grammarNote: "同じ திற- 系でも、行為者＋対格目的語を置けば『開ける』になります。形だけでなく参加者と格を見る必要があります。",
      vocabulary: ["நான்", "கதவு", "திறந்தேன்"],
      audioGroup: "supplement-g-core"
    }),
    make({
      id: "sg-11",
      targetTamil: "குழந்தை எழுந்தது.",
      structuredRoman: "kuḻantai eḻunt-atu.",
      pronunciationRoman: "kuḻandai eḻundadu.",
      katakana: "クランダイ エルンダドゥ。",
      meaningJa: "子どもが起きました。",
      literalJapanese: "子ども＋起きた・中性",
      morphemes: [
        { surfaceTamil: "குழந்தை", gloss: "子ども・起きた主体" },
        { surfaceTamil: "எழுந்தது", analysis: "எழு + 過去・中性", gloss: "起きました" }
      ],
      grammarNote: "子ども自身が起きた自動詞文です。次の எழுப்பினாங்க と参加者の数を比べます。",
      vocabulary: ["குழந்தை", "எழுந்தது"],
      audioGroup: "supplement-g-bank"
    }),
    make({
      id: "sg-12",
      targetTamil: "அம்மா குழந்தையை எழுப்பினாங்க.",
      structuredRoman: "ammā kuḻantai-y-ai eḻuppiṉ-āṅka.",
      pronunciationRoman: "ammā kuḻandaiye eḻuppinānga.",
      katakana: "アンマー クランダイェ エルッピナーンガ。",
      meaningJa: "母親は子どもを起こしました。",
      literalJapanese: "母親＋子ども・を＋起こした・敬意／複数",
      morphemes: [
        { surfaceTamil: "அம்மா", gloss: "母親・行為者" },
        { surfaceTamil: "குழந்தையை", gloss: "子どもを" },
        { surfaceTamil: "எழுப்பினாங்க", analysis: "எழுப்பு + 過去 + -ஆங்க", gloss: "起こしました" }
      ],
      grammarNote: "எழு／எழுப்பு は『起きる／起こす』の語彙対です。形の対応は覚えますが、すべての動詞へ -ப்பு を付ける規則にはしません。",
      vocabulary: ["அம்மா", "குழந்தை", "எழுப்பினாங்க"],
      audioGroup: "supplement-g-core"
    })
  ];

  const patterns = [
    make({
      id: "sg-form-causative-study",
      targetTamil: "படிக்க வைக்கறாங்க.",
      structuredRoman: "paṭikka vai-kkaṟ-āṅka.",
      pronunciationRoman: "paḍikka vekkarānga.",
      katakana: "パディッカ ヴェッカラーンガ。",
      meaningJa: "勉強させています",
      literalJapanese: "勉強する＋させる・敬意／複数",
      grammarNote: "不定詞＋வை の迂言的使役です。",
      vocabulary: ["படிக்க", "வைக்கறாங்க"],
      audioGroup: "supplement-g-forms",
      kind: "迂言的使役",
      group: "使役",
      note: "使役対象の格は動詞と場面を照合する。"
    }),
    make({
      id: "sg-form-causative-laugh",
      targetTamil: "சிரிக்க வைக்குது.",
      structuredRoman: "cirikka vaikk-utu.",
      pronunciationRoman: "sirikka vekkudu.",
      katakana: "シリッカ ヴェックドゥ。",
      meaningJa: "笑わせます",
      literalJapanese: "笑う＋させる・中性",
      grammarNote: "物・出来事が原因になる中性使役です。",
      vocabulary: ["சிரிக்க", "வைக்குது"],
      audioGroup: "supplement-g-forms",
      kind: "原因使役",
      group: "使役",
      note: "右端の一致は原因となる主語に対応する。"
    }),
    make({
      id: "sg-form-stop-intransitive",
      targetTamil: "நின்னது.",
      structuredRoman: "niṉṉ-atu.",
      pronunciationRoman: "ninnadu.",
      katakana: "ニンナドゥ。",
      meaningJa: "止まりました",
      literalJapanese: "止まる・中性過去",
      grammarNote: "変化する物を主語にする自動詞です。",
      vocabulary: ["நின்னது"],
      audioGroup: "supplement-g-forms",
      kind: "自動詞",
      group: "止まる／止める",
      note: "直接目的語を取らない。"
    }),
    make({
      id: "sg-form-stop-transitive",
      targetTamil: "நிறுத்தினாரு.",
      structuredRoman: "niṟuttiṉ-āru.",
      pronunciationRoman: "niruttināru.",
      katakana: "ニルッティナール。",
      meaningJa: "止めました",
      literalJapanese: "止める・敬意過去",
      grammarNote: "行為者が対象を止める他動詞です。",
      vocabulary: ["நிறுத்தினாரு"],
      audioGroup: "supplement-g-forms",
      kind: "他動詞",
      group: "止まる／止める",
      note: "நில் からの万能な生成規則にはしない。"
    }),
    make({
      id: "sg-form-run",
      targetTamil: "ஓடுது.",
      structuredRoman: "ōṭu-tu.",
      pronunciationRoman: "ōḍudu.",
      katakana: "オードゥドゥ。",
      meaningJa: "走ります／動きます",
      literalJapanese: "走る・中性",
      grammarNote: "主体自身が走る・動く自動詞です。",
      vocabulary: ["ஓடுது"],
      audioGroup: "supplement-g-forms",
      kind: "自動詞",
      group: "走る／運転する",
      note: "人の走行と機械の稼働は文脈で分ける。"
    }),
    make({
      id: "sg-form-drive",
      targetTamil: "ஓட்டுறாரு.",
      structuredRoman: "ōṭṭu-ṟ-āru.",
      pronunciationRoman: "ōṭṭurāru.",
      katakana: "オーットゥラール。",
      meaningJa: "運転しています",
      literalJapanese: "運転する・敬意現在",
      grammarNote: "対象を動かす他動詞です。",
      vocabulary: ["ஓட்டுறாரு"],
      audioGroup: "supplement-g-forms",
      kind: "他動詞",
      group: "走る／運転する",
      note: "ஓடு／ஓட்டு は語彙対として保持する。"
    }),
    make({
      id: "sg-form-change-intransitive",
      targetTamil: "மாறிடுச்சு.",
      structuredRoman: "māṟ-iṭuccu.",
      pronunciationRoman: "māriḍuccu.",
      katakana: "マーリドゥッチュ。",
      meaningJa: "変わりました",
      literalJapanese: "変わる・変化完了",
      grammarNote: "変化した物そのものを主語にします。",
      vocabulary: ["மாறிடுச்சு"],
      audioGroup: "supplement-g-forms",
      kind: "自動詞",
      group: "変わる／変える",
      note: "行為者を前面に出さない。"
    }),
    make({
      id: "sg-form-change-transitive",
      targetTamil: "மாத்தினாங்க.",
      structuredRoman: "māttiṉ-āṅka.",
      pronunciationRoman: "māttinānga.",
      katakana: "マーッティナーンガ。",
      meaningJa: "変更しました",
      literalJapanese: "変える・人間複数過去",
      grammarNote: "行為者が対象を変更するSST他動詞です。",
      vocabulary: ["மாத்தினாங்க"],
      audioGroup: "supplement-g-forms",
      kind: "他動詞",
      group: "変わる／変える",
      note: "文語対応 மாற்று と口語主表示 மாத்து を分ける。",
      confidence: C("B", "B", "C", "C")
    })
  ];

  const readSections = [
    {
      kicker: "まず結論",
      heading: "誰が動き、誰が別のものを動かすかを見る",
      takeaway: "<span class=\"ta-inline\" lang=\"ta\">நின்னது / நிறுத்தினாரு</span> <span class=\"roman-inline\">(niṉṉ-atu / niṟuttiṉ-āru)</span> は、止まる物と止める行為者を分けます。",
      paragraphs: [
        "自動詞文では、変化した物・動いた人を主語にします。<span class=\"ta-inline\" lang=\"ta\">பஸ் இங்க நின்னது</span> ではバス自体が止まります。",
        "他動詞文では、行為者が対格目的語へ働きかけます。<span class=\"ta-inline\" lang=\"ta\">அவர் பஸ்ஸை நிறுத்தினாரு</span> では、その方がバスを止めます。"
      ]
    },
    {
      kicker: "形を読む",
      heading: "迂言的使役は、不定詞＋வை で原因を追加する",
      takeaway: "<span class=\"ta-inline\" lang=\"ta\">படிக்க வைக்கறாங்க</span> <span class=\"roman-inline\">(paṭikka vai-kkaṟ-āṅka)</span> は『勉強するようにさせる』です。",
      paragraphs: [
        "まず本来の動作を不定詞にし、その後ろへ வை 系を置きます。右端の வைக்கறாங்க が時制・人物を担います。",
        "本補講の基本例では குழந்தையை のように使役対象を対格で示しますが、すべての使役構文の格を一律化しません。"
      ]
    },
    {
      kicker: "なぜ？",
      heading: "நில்／நிறுத்து、ஓடு／ஓட்டு は頻出の語彙対として覚える",
      takeaway: "<span class=\"ta-inline\" lang=\"ta\">ஓடுது / ஓட்டுறாரு</span> <span class=\"roman-inline\">(ōṭu-tu / ōṭṭu-ṟ-āru)</span> は『走る／運転する』です。",
      paragraphs: [
        "形が近くても、自動詞側と他動詞側では参加者の数と格が違います。ஓடு は主体自身が走り、ஓட்டு は行為者が車などを動かします。",
        "強い動詞・弱い動詞と他動性には傾向がありますが、学習者が未登録動詞を自動生成する規則にはしません。"
      ]
    },
    {
      kicker: "実際に使う",
      heading: "மாறு／மாத்து は、変化した物と変更した人を入れ替えない",
      takeaway: "<span class=\"ta-inline\" lang=\"ta\">நேரம் மாறிடுச்சு / நேரத்தை மாத்தினாங்க</span> <span class=\"roman-inline\">(nēram māṟ-iṭuccu / nērat-t-ai māttiṉ-āṅka)</span> を対比します。",
      paragraphs: [
        "時刻そのものが変わったなら நேரம் を主語にし、மாறிடுச்சு とします。",
        "誰かが時刻を変更したなら行為者を置き、நேரத்தை を対格目的語にして மாத்தினாங்க とします。"
      ]
    },
    {
      kicker: "混ぜない",
      heading: "自他で必ず別の語幹になるわけではない",
      takeaway: "<span class=\"ta-inline\" lang=\"ta\">கதவு திறந்தது / கதவைத் திறந்தேன்</span> <span class=\"roman-inline\">(katavu tiṟant-atu / katav-ai-t tiṟant-ēṉ)</span> は、格と参加者で読み分けます。",
      paragraphs: [
        "திற- 系では、同じように見える語幹が自動詞・他動詞の両方に現れます。したがって語幹の形だけで自他を判定できません。",
        "一方、எழு／எழுப்பு のように異なる語彙形を使う対もあります。対ごとに語形・格・例文を登録します。"
      ],
      note: {
        tone: "pink",
        title: "この補講の最重要ミス",
        body: "使役は不定詞＋வை、自他対は語彙ごとの登録です。-ப்பு・-த்து・子音重複を未確認の動詞へ機械適用しません。"
      }
    },
    {
      kicker: "3文で復習",
      heading: "起きる、勉強させる、笑わせる",
      takeaway: "<span class=\"ta-inline\" lang=\"ta\">எழுந்தது / படிக்க வைக்கறாங்க / சிரிக்க வைக்குது</span> は、自発的変化と二種類の原因使役です。",
      paragraphs: [
        "<span class=\"ta-inline\" lang=\"ta\">குழந்தை எழுந்தது.</span> <span class=\"roman-inline\">(kuḻantai eḻunt-atu.)</span>",
        "<span class=\"ta-inline\" lang=\"ta\">அம்மா குழந்தையை படிக்க வைக்கறாங்க.</span> <span class=\"roman-inline\">(ammā kuḻantai-y-ai paṭikka vai-kkaṟ-āṅka.)</span>",
        "<span class=\"ta-inline\" lang=\"ta\">இந்த படம் குழந்தையை சிரிக்க வைக்குது.</span> <span class=\"roman-inline\">(inta paṭam kuḻantai-y-ai cirikka vaikk-utu.)</span>"
      ],
      miniReading: { ids: ["sg-11", "sg-01", "sg-02"] }
    }
  ];

  const option = (ta, roman, ja) => `<span class="quiz-option-ta" lang="ta">${ta}</span><span class="quiz-option-roman">${roman}</span><span class="quiz-option-ja">${ja}</span>`;
  const quiz = [
    {
      focus: "形態分解",
      q: "『子どもを勉強させています』の使役中心部は？",
      options: [
        option("படிக்க வைக்கறாங்க", "paṭikka vai-kkaṟ-āṅka", "勉強させています"),
        option("படிக்க வைக்குது", "paṭikka vaikk-utu", "それが勉強させます"),
        option("படிக்கறாங்க", "paṭikkaṟ-āṅka", "勉強しています"),
        option("படிக்க வைக்கறேன்", "paṭikka vai-kkaṟ-ēṉ", "私は勉強させています")
      ],
      answer: 0,
      feedback: "不定詞 <span class=\"ta-inline\" lang=\"ta\">படிக்க</span> の後ろに வை 系を置き、右端で敬意／複数を示します。",
      rule: "迂言的使役は V不定詞＋வை 系。右端の有限動詞が一致を担う。",
      tags: ["正解", "中性一致", "使役欠落", "一人称一致"]
    },
    {
      focus: "機能選択",
      q: "行為者を置かず、『バスがここで止まった』と言うなら？",
      options: [
        option("பஸ் இங்க நின்னது.", "pas iṅka niṉṉ-atu.", "バスはここで止まりました"),
        option("அவர் பஸ்ஸை நிறுத்தினாரு.", "avar pass-ai niṟuttiṉ-āru.", "その方がバスを止めました"),
        option("பஸ் இங்க ஓடுது.", "pas iṅka ōṭu-tu.", "バスはここで動いています"),
        option("அவர் காரை ஓட்டுறாரு.", "avar kār-ai ōṭṭu-ṟ-āru.", "その方が車を運転しています")
      ],
      answer: 0,
      feedback: "止まる物を主語にする自動詞は <span class=\"ta-inline\" lang=\"ta\">நின்னது</span> です。",
      rule: "自動詞文は変化した物を主語にし、直接目的語を置かない。",
      tags: ["正解", "他動詞", "別の自動詞", "別の他動詞"]
    },
    {
      focus: "実用場面",
      q: "『この映画は子どもを笑わせます』に合う文は？",
      options: [
        option("இந்த படம் குழந்தையை சிரிக்க வைக்குது.", "inta paṭam kuḻantai-y-ai cirikka vaikk-utu.", "この映画は子どもを笑わせます"),
        option("குழந்தை சிரிக்குது.", "kuḻantai cirikk-utu.", "子どもが笑っています"),
        option("அம்மா குழந்தையை படிக்க வைக்கறாங்க.", "ammā kuḻantai-y-ai paṭikka vai-kkaṟ-āṅka.", "母親が子どもを勉強させています"),
        option("அம்மா குழந்தையை எழுப்பினாங்க.", "ammā kuḻantai-y-ai eḻuppiṉ-āṅka.", "母親が子どもを起こしました")
      ],
      answer: 0,
      feedback: "映画が原因なので右端は中性の <span class=\"ta-inline\" lang=\"ta\">வைக்குது</span> になります。",
      rule: "原因となる主語と、実際の動作をする使役対象を分ける。",
      tags: ["正解", "自発動作", "別の使役動詞", "語彙的使役"]
    },
    {
      focus: "混同防止",
      q: "『その方は車を運転しています』の他動詞は？",
      options: [
        option("அவர் காரை ஓட்டுறாரு.", "avar kār-ai ōṭṭu-ṟ-āru.", "その方は車を運転しています"),
        option("குழந்தை வேகமா ஓடுது.", "kuḻantai vēkam-ā ōṭu-tu.", "子どもが速く走っています"),
        option("அவர் காரை நிறுத்தினாரு.", "avar kār-ai niṟuttiṉ-āru.", "その方は車を止めました"),
        option("கார் ஓடுது.", "kār ōṭu-tu.", "車が動いています")
      ],
      answer: 0,
      feedback: "対象の காரை を取り『運転する』のは <span class=\"ta-inline\" lang=\"ta\">ஓட்டு</span> 系です。",
      rule: "ஓடு は走る／動く、ஓட்டு は対象を運転する。",
      tags: ["正解", "自動詞・人", "別の他動詞", "自動詞・機械"]
    },
    {
      focus: "総合復習",
      q: "誰が開けたかを言わず、『ドアが開いた』という変化を述べるなら？",
      options: [
        option("கதவு திறந்தது.", "katavu tiṟant-atu.", "ドアが開きました"),
        option("நான் கதவைத் திறந்தேன்.", "nāṉ katav-ai-t tiṟant-ēṉ.", "私はドアを開けました"),
        option("கதவு திறந்திருக்கு.", "katavu tiṟant-irukku.", "ドアは開いています"),
        option("அம்மா குழந்தையை எழுப்பினாங்க.", "ammā kuḻantai-y-ai eḻuppiṉ-āṅka.", "母親が子どもを起こしました")
      ],
      answer: 0,
      feedback: "<span class=\"ta-inline\" lang=\"ta\">கதவு திறந்தது</span> はドアを主語にする変化文です。",
      rule: "同じ語幹でも、主語・対格目的語・結果状態の有無から機能を読む。",
      tags: ["正解", "能動他動詞", "結果状態", "別の語彙的使役"]
    }
  ];

  const supplement = {
    id: "supplement-g-v45",
    code: "G",
    release: "v4.5",
    navTitle: "使役と自動詞・他動詞",
    title: "誰が動き、誰が動かすかを項構造から読む",
    tamilTitle: "அம்மா குழந்தையை படிக்க வைக்கறாங்க",
    deck: "不定詞＋வை の使役と、நில்／நிறுத்து・ஓடு／ஓட்டு などの語彙的な自他対を分けます。",
    entryQuestion: "『バスが止まる』『人がバスを止める』『子どもを勉強させる』は、参加者がどう違う？",
    prerequisites: [7, 11, 12],
    returnToLessons: [7, 11, 12],
    targets: ["V不定詞＋வை", "நில்／நிறுத்து", "ஓடு／ஓட்டு", "மாறு／மாத்து", "自他共通に見える語幹"],
    criticalPoints: [
      "<span class=\"ta-inline\" lang=\"ta\">படிக்க வைக்கறாங்க</span> <span class=\"roman-inline\">(paṭikka vai-kkaṟ-āṅka)</span> は、不定詞＋வை の迂言的使役。",
      "<span class=\"ta-inline\" lang=\"ta\">நின்னது / நிறுத்தினாரு</span>、<span class=\"ta-inline\" lang=\"ta\">ஓடுது / ஓட்டுறாரு</span> は、自動詞・他動詞の頻出語彙対。",
      "<span class=\"ta-inline\" lang=\"ta\">கதவு திறந்தது / கதவைத் திறந்தேன்</span> のように、同じ語幹でも格と参加者で自他が分かれる場合がある。"
    ],
    heroExample: examples[0],
    examples: Object.freeze(examples),
    readSections: Object.freeze(readSections),
    formConfig: {
      mode: "grammar",
      title: "使役・自動詞・他動詞の対照表",
      intro: "語尾の見た目だけでなく、原因を追加したか、誰が変化し、対格目的語があるかを読みます。",
      patterns: Object.freeze(patterns),
      checkpoint: "V不定詞＋வை、நில்／நிறுத்து、ஓடு／ஓட்டு、மாறு／மாத்து と、同形語幹の項構造を即答する。"
    },
    quiz: Object.freeze(quiz),
    legacyRefs: ["grammar-v28.js:38", "G38-01..G38-04", "38-01..38-04"],
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

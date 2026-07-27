(() => {
  "use strict";

  const { entry: E, confidence: C } = window.TAMIL_V30;
  const SOURCE_REFS = [
    "TAMIL-INTEGRATED-v2.0-rc.1 §§23-25,31-32",
    "CORE-CURRICULUM-v1.1 §3 item30",
    "TN-SST-v4.1 lesson01 and lesson16",
    "SCHIFFMAN-SPOKEN-TAMIL: numerals, quantity expressions and time expressions",
    "legacy grammar-v28.js chapters32 and34 (migration source only)"
  ];
  const make = input => E({ ...input, sourceRefs: SOURCE_REFS, confidence: input.confidence ?? C("B", "B", "C", "B") });

  const lessonExamples = new Map(
    (window.TAMIL_LESSONS_V30 || []).flatMap(lesson => lesson.examples || []).map(example => [example.id, example])
  );
  const reuse = id => {
    const example = lessonExamples.get(id);
    if (!example) throw new Error(`supplement C cannot resolve existing example ${id}`);
    return example;
  };

  const newExamples = [
    make({
      id: "sc-03",
      targetTamil: "மூணு பேர் வர்றாங்க.",
      structuredRoman: "mūṇu pēr varṟ-āṅka.",
      pronunciationRoman: "mūṇu pēr varrānga.",
      katakana: "ムーヌ ペール ヴァッラーンガ。",
      meaningJa: "3人来ます。",
      literalJapanese: "三＋人＋来る・現在・人間複数",
      morphemes: [
        { surfaceTamil: "மூணு", gloss: "三" },
        { surfaceTamil: "பேர்", gloss: "人・人数を数える語" },
        { surfaceTamil: "வர்றாங்க", gloss: "来ます・人間複数／会話的敬意" }
      ],
      grammarNote: "人を人数として数えるときは数詞＋பேர்を使います。人間複数なので述語も -ாங்க を取ります。",
      vocabulary: ["மூணு", "பேர்", "வர்றாங்க"],
      audioGroup: "supplement-c-core",
      featured: true
    }),
    make({
      id: "sc-04",
      targetTamil: "எத்தனை டிக்கெட் வேணும்?",
      structuredRoman: "ettaṉai ṭikkeṭ vēṇum?",
      pronunciationRoman: "ettane ṭikkeṭ vēṇum?",
      katakana: "エッタネ ティッケトゥ ヴェーヌム？",
      meaningJa: "切符は何枚必要ですか。",
      literalJapanese: "いくつ＋切符＋必要",
      morphemes: [
        { surfaceTamil: "எத்தனை", gloss: "いくつ／何個" },
        { surfaceTamil: "டிக்கெட்", gloss: "切符" },
        { surfaceTamil: "வேணும்", gloss: "必要だ／欲しい" }
      ],
      grammarNote: "数えられる物の個数は எத்தனை で尋ねます。名詞は数詞・数量語の後ろで単数形のまま置けます。",
      vocabulary: ["எத்தனை", "டிக்கெட்", "வேணும்"],
      audioGroup: "supplement-c-core",
      featured: true
    }),
    make({
      id: "sc-05",
      targetTamil: "எத்தனை பேர் வர்றாங்க?",
      structuredRoman: "ettaṉai pēr varṟ-āṅka?",
      pronunciationRoman: "ettane pēr varrānga?",
      katakana: "エッタネ ペール ヴァッラーンガ？",
      meaningJa: "何人来ますか。",
      literalJapanese: "何＋人＋来る・現在・人間複数",
      morphemes: [
        { surfaceTamil: "எத்தனை", gloss: "いくつ／何人" },
        { surfaceTamil: "பேர்", gloss: "人・人数" },
        { surfaceTamil: "வர்றாங்க", gloss: "来ます・人間複数／会話的敬意" }
      ],
      grammarNote: "人数の疑問は எத்தனை பேர்。数量語だけで人を数えず、பேர் を明示します。",
      vocabulary: ["எத்தனை", "பேர்", "வர்றாங்க"],
      audioGroup: "supplement-c-bank"
    }),
    make({
      id: "sc-06",
      targetTamil: "எவ்வளவு தண்ணி வேணும்?",
      structuredRoman: "evvaḷavu taṇṇi vēṇum?",
      pronunciationRoman: "evvaḷavu taṇṇi vēṇum?",
      katakana: "エッヴァラヴ タンニ ヴェーヌム？",
      meaningJa: "水はどのくらい必要ですか。",
      literalJapanese: "どのくらい＋水＋必要",
      morphemes: [
        { surfaceTamil: "எவ்வளவு", gloss: "どのくらい／いくら" },
        { surfaceTamil: "தண்ணி", gloss: "水" },
        { surfaceTamil: "வேணும்", gloss: "必要だ／欲しい" }
      ],
      grammarNote: "水のように量として測るものは எவ்வளவு で尋ねます。数えられる個数の எத்தனை と分けます。",
      vocabulary: ["எவ்வளவு", "தண்ணி", "வேணும்"],
      audioGroup: "supplement-c-core",
      featured: true
    }),
    make({
      id: "sc-07",
      targetTamil: "அஞ்சு மணிக்கு வர்றேன்.",
      structuredRoman: "añcu maṇi-kku varṟ-ēṉ.",
      pronunciationRoman: "anju maṇikku varrēn.",
      katakana: "アンジュ マニック ヴァッレーン。",
      meaningJa: "5時に来ます。",
      literalJapanese: "五＋時・時点＋来る・現在・私",
      morphemes: [
        { surfaceTamil: "அஞ்சு", gloss: "五" },
        { surfaceTamil: "மணிக்கு", analysis: "மணி + -க்கு", gloss: "時に・時点" },
        { surfaceTamil: "வர்றேன்", gloss: "来ます・私" }
      ],
      grammarNote: "時計の時点は மணி に -க்கு を付けて மணிக்கு とします。時間の長さではこの -க்கு を付けません。",
      vocabulary: ["அஞ்சு", "மணி", "வர்றேன்"],
      audioGroup: "supplement-c-core"
    }),
    make({
      id: "sc-08",
      targetTamil: "ரெண்டு மணி நேரம் ஆகும்.",
      structuredRoman: "reṇṭu maṇi nēram āk-um.",
      pronunciationRoman: "reṇḍu maṇi nēram āgum.",
      katakana: "レンドゥ マニ ネーラム アーグム。",
      meaningJa: "2時間かかります。",
      literalJapanese: "二＋時間＋なる・未来／一般",
      morphemes: [
        { surfaceTamil: "ரெண்டு", gloss: "二" },
        { surfaceTamil: "மணி நேரம்", gloss: "時間・長さ" },
        { surfaceTamil: "ஆகும்", gloss: "かかります／なります" }
      ],
      grammarNote: "長さは மணி நேரம் とし、時点の -க்கு を付けません。ஆகும் と組み合わせて所要時間を述べます。",
      vocabulary: ["ரெண்டு", "மணி நேரம்", "ஆகும்"],
      audioGroup: "supplement-c-core"
    }),
    make({
      id: "sc-09",
      targetTamil: "சுமார் பத்து நிமிஷம் ஆகும்.",
      structuredRoman: "cumār pattu nimiṣam āk-um.",
      pronunciationRoman: "sumār pattu nimisham āgum.",
      katakana: "スマール パットゥ ニミシャム アーグム。",
      meaningJa: "約10分かかります。",
      literalJapanese: "約＋十＋分＋なる・未来／一般",
      morphemes: [
        { surfaceTamil: "சுமார்", gloss: "約／およそ" },
        { surfaceTamil: "பத்து", gloss: "十" },
        { surfaceTamil: "நிமிஷம்", gloss: "分・時間の長さ" },
        { surfaceTamil: "ஆகும்", gloss: "かかります" }
      ],
      grammarNote: "概数は சுமார் を数量句の前へ置きます。時刻ではなく長さなので -க்கு は付きません。",
      vocabulary: ["சுமார்", "பத்து", "நிமிஷம்", "ஆகும்"],
      audioGroup: "supplement-c-bank"
    }),
    make({
      id: "sc-10",
      targetTamil: "நான் மூணு நாள் இங்க இருப்பேன்.",
      structuredRoman: "nāṉ mūṇu nāḷ iṅka irupp-ēṉ.",
      pronunciationRoman: "nān mūṇu nāḷ inga iruppēn.",
      katakana: "ナーン ムーヌ ナール インガ イルッペーン。",
      meaningJa: "私はここに3日います。",
      literalJapanese: "私＋三＋日＋ここ＋いる・未来・私",
      morphemes: [
        { surfaceTamil: "நான்", gloss: "私" },
        { surfaceTamil: "மூணு நாள்", gloss: "三日・期間" },
        { surfaceTamil: "இங்க", gloss: "ここ" },
        { surfaceTamil: "இருப்பேன்", gloss: "いるつもりです・私" }
      ],
      grammarNote: "日数は数詞＋நாள் で期間を作ります。時刻の -க்கு を付けず、滞在の長さとして読みます。",
      vocabulary: ["நான்", "மூணு", "நாள்", "இங்க", "இருப்பேன்"],
      audioGroup: "supplement-c-bank"
    }),
    make({
      id: "sc-11",
      targetTamil: "ரயில் எத்தனை மணிக்கு வரும்?",
      structuredRoman: "rayil ettaṉai maṇi-kku var-um?",
      pronunciationRoman: "rayil ettane maṇikku varum?",
      katakana: "ライル エッタネ マニック ヴァルム？",
      meaningJa: "列車は何時に来ますか。",
      literalJapanese: "列車＋何＋時・時点＋来る・未来／一般",
      morphemes: [
        { surfaceTamil: "ரயில்", gloss: "列車" },
        { surfaceTamil: "எத்தனை மணிக்கு", gloss: "何時に" },
        { surfaceTamil: "வரும்", gloss: "来ます" }
      ],
      grammarNote: "正確な時計時刻を尋ねるときは எத்தனை மணிக்கு を使います。単に『いつ』なら எப்போ です。",
      vocabulary: ["ரயில்", "எத்தனை", "மணி", "வரும்"],
      audioGroup: "supplement-c-bank"
    })
  ];

  const examples = Object.freeze([
    reuse("l1-09"),
    reuse("l16-01"),
    newExamples[0],
    newExamples[1],
    newExamples[2],
    newExamples[3],
    newExamples[4],
    newExamples[5],
    newExamples[6],
    newExamples[7],
    newExamples[8],
    reuse("l16-08")
  ]);

  const patterns = [
    make({
      id: "sc-form-one-five",
      targetTamil: "ஒண்ணு, ரெண்டு, மூணு, நாலு, அஞ்சு.",
      structuredRoman: "oṇṇu, reṇṭu, mūṇu, nālu, añcu.",
      pronunciationRoman: "oṇṇu, reṇḍu, mūṇu, nālu, anju.",
      katakana: "オンヌ、レンドゥ、ムーヌ、ナール、アンジュ。",
      meaningJa: "1・2・3・4・5の口語形",
      literalJapanese: "一・二・三・四・五",
      grammarNote: "会話で頻出する一から五の形です。",
      vocabulary: ["ஒண்ணு", "ரெண்டு", "மூணு", "நாலு", "அஞ்சு"],
      audioGroup: "supplement-c-forms",
      kind: "数詞1〜5",
      group: "口語数詞",
      note: "ஒண்ணு は文語 ஒன்று と同じ語を単純な文字置換で作った形ではない。"
    }),
    make({
      id: "sc-form-six-ten",
      targetTamil: "ஆறு, ஏழு, எட்டு, ஒன்பது, பத்து.",
      structuredRoman: "āṟu, ēḻu, eṭṭu, oṉpatu, pattu.",
      pronunciationRoman: "āru, ēḻu, eṭṭu, onbadu, pattu.",
      katakana: "アール、エール、エットゥ、オンバドゥ、パットゥ。",
      meaningJa: "6・7・8・9・10",
      literalJapanese: "六・七・八・九・十",
      grammarNote: "長母音と重子音を保って読みます。",
      vocabulary: ["ஆறு", "ஏழு", "எட்டு", "ஒன்பது", "பத்து"],
      audioGroup: "supplement-c-forms",
      kind: "数詞6〜10",
      group: "基本数詞",
      note: "厳密転写へ発音上の有声化を混ぜない。"
    }),
    make({
      id: "sc-form-count-person",
      targetTamil: "ரெண்டு புத்தகம்; மூணு பேர்.",
      structuredRoman: "reṇṭu puttakam; mūṇu pēr.",
      pronunciationRoman: "reṇḍu puttagam; mūṇu pēr.",
      katakana: "レンドゥ プッタガム、ムーヌ ペール。",
      meaningJa: "本2冊／3人",
      literalJapanese: "二＋本／三＋人",
      grammarNote: "物は数詞＋名詞、人は数詞＋பேர் を中心にします。",
      vocabulary: ["ரெண்டு", "புத்தகம்", "மூணு", "பேர்"],
      audioGroup: "supplement-c-forms",
      kind: "物と人",
      group: "数える対象",
      note: "無生物名詞に複数語尾を一律追加しない。"
    }),
    make({
      id: "sc-form-question",
      targetTamil: "எத்தனை டிக்கெட்? எவ்வளவு தண்ணி?",
      structuredRoman: "ettaṉai ṭikkeṭ? evvaḷavu taṇṇi?",
      pronunciationRoman: "ettane ṭikkeṭ? evvaḷavu taṇṇi?",
      katakana: "エッタネ ティッケトゥ？ エッヴァラヴ タンニ？",
      meaningJa: "切符はいくつ？／水はどのくらい？",
      literalJapanese: "個数の疑問／量の疑問",
      grammarNote: "数えられる個数は எத்தனை、量・価格・程度は எவ்வளவு。",
      vocabulary: ["எத்தனை", "டிக்கெட்", "எவ்வளவு", "தண்ணி"],
      audioGroup: "supplement-c-forms",
      kind: "個数と量",
      group: "疑問数量",
      note: "日本語の『どのくらい』一語から決めず、数えるか測るかを見る。"
    }),
    make({
      id: "sc-form-clock-duration",
      targetTamil: "அஞ்சு மணிக்கு; ரெண்டு மணி நேரம்.",
      structuredRoman: "añcu maṇi-kku; reṇṭu maṇi nēram.",
      pronunciationRoman: "anju maṇikku; reṇḍu maṇi nēram.",
      katakana: "アンジュ マニック、レンドゥ マニ ネーラム。",
      meaningJa: "5時に／2時間",
      literalJapanese: "時計の時点／時間の長さ",
      grammarNote: "時点は மணிக்கு、長さは மணி நேரம்。",
      vocabulary: ["அஞ்சு", "மணி", "ரெண்டு", "நேரம்"],
      audioGroup: "supplement-c-forms",
      kind: "時点と長さ",
      group: "時間",
      note: "-க்கு の有無で時点と期間を分ける。"
    }),
    make({
      id: "sc-form-duration",
      targetTamil: "பத்து நிமிஷம்; மூணு நாள்.",
      structuredRoman: "pattu nimiṣam; mūṇu nāḷ.",
      pronunciationRoman: "pattu nimisham; mūṇu nāḷ.",
      katakana: "パットゥ ニミシャム、ムーヌ ナール。",
      meaningJa: "10分／3日",
      literalJapanese: "十＋分／三＋日",
      grammarNote: "分・日などの単位を数詞の後ろへ置いて期間を作ります。",
      vocabulary: ["பத்து", "நிமிஷம்", "மூணு", "நாள்"],
      audioGroup: "supplement-c-forms",
      kind: "期間",
      group: "時間の長さ",
      note: "期間そのものには時点の -க்கு を付けない。"
    }),
    make({
      id: "sc-form-approx",
      targetTamil: "சுமார் பத்து நிமிஷம்.",
      structuredRoman: "cumār pattu nimiṣam.",
      pronunciationRoman: "sumār pattu nimisham.",
      katakana: "スマール パットゥ ニミシャム。",
      meaningJa: "約10分",
      literalJapanese: "約＋十＋分",
      grammarNote: "概数は சுமார் を数量句の前へ置きます。",
      vocabulary: ["சுமார்", "பத்து", "நிமிஷம்"],
      audioGroup: "supplement-c-forms",
      kind: "概数",
      group: "数量の幅",
      note: "正確な値と概数を訳だけで混同しない。"
    }),
    make({
      id: "sc-form-ordinal",
      targetTamil: "முதல், ரெண்டாவது.",
      structuredRoman: "mutal, reṇṭ-āvatu.",
      pronunciationRoman: "mudal, reṇḍāvadu.",
      katakana: "ムダル、レンダーヴァドゥ。",
      meaningJa: "最初の／2番目の",
      literalJapanese: "第一／第二",
      grammarNote: "第一は முதல்、一般の序数は数詞＋-ஆவது を使えます。",
      vocabulary: ["முதல்", "ரெண்டாவது"],
      audioGroup: "supplement-c-forms",
      kind: "順序",
      group: "序数",
      note: "すべての基数へ無監査で機械生成しない。"
    })
  ];

  const readSections = [
    {
      kicker: "まず結論",
      heading: "数字そのものより、後ろに何を置いたかを読む",
      takeaway: "物なら <span class=\"ta-inline\" lang=\"ta\">ரெண்டு புத்தகம்</span> <span class=\"roman-inline\">(reṇṭu puttakam)</span>、人なら <span class=\"ta-inline\" lang=\"ta\">மூணு பேர்</span> <span class=\"roman-inline\">(mūṇu pēr)</span> です。",
      paragraphs: [
        "同じ数詞でも、数える対象によって後ろが変わります。無生物なら数詞＋名詞を中心にし、人の人数なら <span class=\"ta-inline\" lang=\"ta\">பேர்</span> <span class=\"roman-inline\">(pēr)</span> を使います。",
        "したがって『三』だけを覚えるのではなく、<span class=\"ta-inline\" lang=\"ta\">மூணு டிக்கெட்</span> <span class=\"roman-inline\">(mūṇu ṭikkeṭ)</span> と <span class=\"ta-inline\" lang=\"ta\">மூணு பேர்</span> <span class=\"roman-inline\">(mūṇu pēr)</span> のように、単位まで一緒に読みます。"
      ]
    },
    {
      kicker: "形を読む",
      heading: "数詞の後ろで、無生物名詞を必ず複数形にしない",
      takeaway: "<span class=\"ta-inline\" lang=\"ta\">ரெண்டு புத்தகம் இருக்கு</span> <span class=\"roman-inline\">(reṇṭu puttakam irukku)</span> では、数詞が複数性を示します。",
      paragraphs: [
        "数詞がある無生物名詞は、<span class=\"ta-inline\" lang=\"ta\">ரெண்டு புத்தகம்</span> <span class=\"roman-inline\">(reṇṭu puttakam)</span> のように名詞を無標のまま置けます。日本語の助数詞や英語の複数語尾をそのまま移植しません。",
        "一方、人間複数では <span class=\"ta-inline\" lang=\"ta\">மூணு பேர் வர்றாங்க</span> <span class=\"roman-inline\">(mūṇu pēr varṟ-āṅka)</span> のように、人数語と人間複数の述語を組み合わせます。"
      ]
    },
    {
      kicker: "なぜ？",
      heading: "எத்தனை は数える問い、எவ்வளவு は測る問い",
      takeaway: "<span class=\"ta-inline\" lang=\"ta\">எத்தனை டிக்கெட்?</span> <span class=\"roman-inline\">(ettaṉai ṭikkeṭ?)</span> と <span class=\"ta-inline\" lang=\"ta\">எவ்வளவு தண்ணி?</span> <span class=\"roman-inline\">(evvaḷavu taṇṇi?)</span> を分けます。",
      paragraphs: [
        "切符・人・日など、単位を一つずつ数えられるものは <span class=\"ta-inline\" lang=\"ta\">எத்தனை</span> <span class=\"roman-inline\">(ettaṉai)</span>。水・価格・距離・程度など量として尋ねるものは <span class=\"ta-inline\" lang=\"ta\">எவ்வளவு</span> <span class=\"roman-inline\">(evvaḷavu)</span> です。",
        "日本語ではどちらも『どのくらい』と訳せるため、訳から選ばず、対象を個体として数えるか連続量として測るかを先に判断します。"
      ]
    },
    {
      kicker: "実際に使う",
      heading: "時計の時点は மணிக்கு、長さは மணி நேரம்",
      takeaway: "<span class=\"ta-inline\" lang=\"ta\">அஞ்சு மணிக்கு</span> <span class=\"roman-inline\">(añcu maṇi-kku)</span> は5時に、<span class=\"ta-inline\" lang=\"ta\">ரெண்டு மணி நேரம்</span> <span class=\"roman-inline\">(reṇṭu maṇi nēram)</span> は2時間です。",
      paragraphs: [
        "出来事が起きる時計時刻には <span class=\"ta-inline\" lang=\"ta\">மணிக்கு</span> <span class=\"roman-inline\">(maṇi-kku)</span> を使います。列車の時刻なら <span class=\"ta-inline\" lang=\"ta\">எத்தனை மணிக்கு வரும்?</span> <span class=\"roman-inline\">(ettaṉai maṇi-kku var-um?)</span> と尋ねます。",
        "所要時間は <span class=\"ta-inline\" lang=\"ta\">மணி நேரம்</span> <span class=\"roman-inline\">(maṇi nēram)</span>、分なら <span class=\"ta-inline\" lang=\"ta\">நிமிஷம்</span> <span class=\"roman-inline\">(nimiṣam)</span>。長さには時点の -க்கு を付けません。"
      ]
    },
    {
      kicker: "混ぜない",
      heading: "時刻・期間・概数・順序を同じ『数字表現』へ潰さない",
      takeaway: "<span class=\"ta-inline\" lang=\"ta\">சுமார் பத்து நிமிஷம்</span> <span class=\"roman-inline\">(cumār pattu nimiṣam)</span> は概数、<span class=\"ta-inline\" lang=\"ta\">ரெண்டாவது படம்</span> <span class=\"roman-inline\">(reṇṭ-āvatu paṭam)</span> は順序です。",
      paragraphs: [
        "約・およそを示すなら <span class=\"ta-inline\" lang=\"ta\">சுமார்</span> <span class=\"roman-inline\">(cumār)</span> を数量句の前へ置きます。正確な十と、約十を同じ意味にしません。",
        "順序は <span class=\"ta-inline\" lang=\"ta\">முதல்</span> <span class=\"roman-inline\">(mutal)</span> や <span class=\"ta-inline\" lang=\"ta\">ரெண்டாவது</span> <span class=\"roman-inline\">(reṇṭ-āvatu)</span>。個数を示す基数とは文中の役割が違います。"
      ],
      note: {
        tone: "pink",
        title: "この補講の最重要ミス",
        body: "『二』を見て全部同じ形だと思わない。物・人・時点・期間・順序のどれかを、後ろの語と -க்கு の有無から判断します。"
      }
    },
    {
      kicker: "3文で復習",
      heading: "人数を聞き、時刻を伝え、所要時間を答える",
      takeaway: "<span class=\"ta-inline\" lang=\"ta\">எத்தனை பேர்</span> <span class=\"roman-inline\">(ettaṉai pēr)</span>、<span class=\"ta-inline\" lang=\"ta\">அஞ்சு மணிக்கு</span> <span class=\"roman-inline\">(añcu maṇi-kku)</span>、<span class=\"ta-inline\" lang=\"ta\">ரெண்டு மணி நேரம்</span> <span class=\"roman-inline\">(reṇṭu maṇi nēram)</span> を場面ごとに選びます。",
      paragraphs: [
        "<span class=\"ta-inline\" lang=\"ta\">எத்தனை பேர் வர்றாங்க?</span> <span class=\"roman-inline\">(ettaṉai pēr varṟ-āṅka?)</span>",
        "<span class=\"ta-inline\" lang=\"ta\">அஞ்சு மணிக்கு வர்றேன்.</span> <span class=\"roman-inline\">(añcu maṇi-kku varṟ-ēṉ.)</span>",
        "<span class=\"ta-inline\" lang=\"ta\">ரெண்டு மணி நேரம் ஆகும்.</span> <span class=\"roman-inline\">(reṇṭu maṇi nēram āk-um.)</span>"
      ],
      miniReading: { ids: ["sc-05", "sc-07", "sc-08"] }
    }
  ];

  const quiz = [
    {
      focus: "形態分解",
      q: "<span class=\"ta-inline\" lang=\"ta\">அஞ்சு மணிக்கு</span> <span class=\"roman-inline\">(añcu maṇi-kku)</span> の -க்கு は何を示す？",
      options: ["時計の時点『5時に』", "時間の長さ『5時間』", "人数『5人』", "順序『5番目』"],
      answer: 0,
      feedback: "<span class=\"ta-inline\" lang=\"ta\">மணிக்கு</span> <span class=\"roman-inline\">(maṇi-kku)</span> の -க்கு は、出来事が起きる時計時刻を示します。",
      rule: "மணிக்கு は時点、மணி நேரம் は長さ。",
      tags: ["正解", "期間との混同", "人数との混同", "序数との混同"]
    },
    {
      focus: "機能選択",
      q: "数えられる切符の枚数を尋ねる文は？",
      options: [
        "<span class=\"quiz-option-ta\" lang=\"ta\">எத்தனை டிக்கெட் வேணும்?</span><span class=\"quiz-option-roman\">ettaṉai ṭikkeṭ vēṇum?</span><span class=\"quiz-option-ja\">切符は何枚必要ですか</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">எவ்வளவு தண்ணி வேணும்?</span><span class=\"quiz-option-roman\">evvaḷavu taṇṇi vēṇum?</span><span class=\"quiz-option-ja\">水はどのくらい必要ですか</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">எந்த டிக்கெட்?</span><span class=\"quiz-option-roman\">enta ṭikkeṭ?</span><span class=\"quiz-option-ja\">どの切符ですか</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">டிக்கெட் எவ்வளவு?</span><span class=\"quiz-option-roman\">ṭikkeṭ evvaḷavu?</span><span class=\"quiz-option-ja\">切符はいくらですか</span>"
      ],
      answer: 0,
      feedback: "個数を一つずつ数えられる切符には <span class=\"ta-inline\" lang=\"ta\">எத்தனை</span> <span class=\"roman-inline\">(ettaṉai)</span> を使います。",
      rule: "数える個数は எத்தனை、測る量・価格は எவ்வளவு。",
      tags: ["正解", "量との混同", "選択疑問との混同", "価格との混同"]
    },
    {
      focus: "実用場面",
      q: "列車が来る正確な時刻を尋ねる文は？",
      options: [
        "<span class=\"quiz-option-ta\" lang=\"ta\">ரயில் எத்தனை மணிக்கு வரும்?</span><span class=\"quiz-option-roman\">rayil ettaṉai maṇi-kku var-um?</span><span class=\"quiz-option-ja\">列車は何時に来ますか</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">ரயில் எப்போ வரும்?</span><span class=\"quiz-option-roman\">rayil eppō var-um?</span><span class=\"quiz-option-ja\">列車はいつ来ますか</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">ரயில் எங்கே வரும்?</span><span class=\"quiz-option-roman\">rayil eṅkē var-um?</span><span class=\"quiz-option-ja\">列車はどこへ来ますか</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">ரயில் அஞ்சு மணிக்கு வரும்.</span><span class=\"quiz-option-roman\">rayil añcu maṇi-kku var-um.</span><span class=\"quiz-option-ja\">列車は5時に来ます</span>"
      ],
      answer: 0,
      feedback: "正確な時計時刻なら <span class=\"ta-inline\" lang=\"ta\">எத்தனை மணிக்கு</span> <span class=\"roman-inline\">(ettaṉai maṇi-kku)</span>。எப்போ はより広い『いつ』です。",
      rule: "正確な時刻は எத்தனை மணிக்கு、広い時点は எப்போ。",
      tags: ["正解", "広い時点", "場所疑問", "平叙文"]
    },
    {
      focus: "混同防止",
      q: "『2時間かかります』という時間の長さは？",
      options: [
        "<span class=\"quiz-option-ta\" lang=\"ta\">ரெண்டு மணி நேரம் ஆகும்.</span><span class=\"quiz-option-roman\">reṇṭu maṇi nēram āk-um.</span><span class=\"quiz-option-ja\">2時間かかります</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">ரெண்டு மணிக்கு வர்றேன்.</span><span class=\"quiz-option-roman\">reṇṭu maṇi-kku varṟ-ēṉ.</span><span class=\"quiz-option-ja\">2時に来ます</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">ரெண்டு பேர் வர்றாங்க.</span><span class=\"quiz-option-roman\">reṇṭu pēr varṟ-āṅka.</span><span class=\"quiz-option-ja\">2人来ます</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">ரெண்டு டிக்கெட் வேணும்.</span><span class=\"quiz-option-roman\">reṇṭu ṭikkeṭ vēṇum.</span><span class=\"quiz-option-ja\">切符が2枚必要です</span>"
      ],
      answer: 0,
      feedback: "長さは <span class=\"ta-inline\" lang=\"ta\">மணி நேரம்</span> <span class=\"roman-inline\">(maṇi nēram)</span>。<span class=\"ta-inline\" lang=\"ta\">மணிக்கு</span> <span class=\"roman-inline\">(maṇi-kku)</span> は時計時刻です。",
      rule: "同じ数字でも、単位と -க்கு の有無を読む。",
      tags: ["正解", "時点との混同", "人数との混同", "個数との混同"]
    },
    {
      focus: "総合復習",
      q: "人が3人来る文は？",
      options: [
        "<span class=\"quiz-option-ta\" lang=\"ta\">மூணு பேர் வர்றாங்க.</span><span class=\"quiz-option-roman\">mūṇu pēr varṟ-āṅka.</span><span class=\"quiz-option-ja\">3人来ます</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">மூணு நாள் இங்க இருப்பேன்.</span><span class=\"quiz-option-roman\">mūṇu nāḷ iṅka irupp-ēṉ.</span><span class=\"quiz-option-ja\">ここに3日います</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">மூணு மணிக்கு வர்றேன்.</span><span class=\"quiz-option-roman\">mūṇu maṇi-kku varṟ-ēṉ.</span><span class=\"quiz-option-ja\">3時に来ます</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">மூணு டிக்கெட் வேணும்.</span><span class=\"quiz-option-roman\">mūṇu ṭikkeṭ vēṇum.</span><span class=\"quiz-option-ja\">切符が3枚必要です</span>"
      ],
      answer: 0,
      feedback: "人の人数には <span class=\"ta-inline\" lang=\"ta\">பேர்</span> <span class=\"roman-inline\">(pēr)</span> を置き、人間複数の <span class=\"ta-inline\" lang=\"ta\">வர்றாங்க</span> <span class=\"roman-inline\">(varṟ-āṅka)</span> を使います。",
      rule: "人は数詞＋பேர்、述語も人間複数へ合わせる。",
      tags: ["正解", "期間", "時点", "個数"]
    }
  ];

  const supplement = {
    id: "supplement-c-v43",
    code: "C",
    release: "v4.3",
    navTitle: "数・量・人数・時刻・期間",
    title: "数字の後ろを替えて、物・人・時刻・長さを言い分ける",
    tamilTitle: "அஞ்சு மணிக்கு வர்றேன்",
    deck: "数詞の暗記表ではなく、数える対象・測る量・時計の時点・期間・順序を、後ろの語と格から読み分けます。",
    entryQuestion: "同じ数字でも、物・人・時刻・時間の長さで後ろはどう変わる？",
    prerequisites: [1, 16],
    returnToLessons: [1, 16],
    targets: ["数詞＋物名詞", "数詞＋பேர்", "எத்தனை／எவ்வளவு", "மணிக்கு／மணி நேரம்"],
    criticalPoints: [
      "数詞だけで判断せず、後ろが物名詞・<span class=\"ta-inline\" lang=\"ta\">பேர்</span> <span class=\"roman-inline\">(pēr)</span>・時間単位のどれかを見る。",
      "数えられる個数は <span class=\"ta-inline\" lang=\"ta\">எத்தனை</span> <span class=\"roman-inline\">(ettaṉai)</span>、量・価格・程度は <span class=\"ta-inline\" lang=\"ta\">எவ்வளவு</span> <span class=\"roman-inline\">(evvaḷavu)</span>。",
      "時計の時点は <span class=\"ta-inline\" lang=\"ta\">மணிக்கு</span> <span class=\"roman-inline\">(maṇi-kku)</span>、時間の長さは <span class=\"ta-inline\" lang=\"ta\">மணி நேரம்</span> <span class=\"roman-inline\">(maṇi nēram)</span>。"
    ],
    heroExample: examples[6],
    examples,
    readSections,
    formConfig: {
      mode: "grammar",
      title: "数える・測る・時を指定する型",
      intro: "一から十の音を確認したら、個数・人数・量・時刻・期間・概数・序数へ分けます。",
      patterns: Object.freeze(patterns),
      checkpoint: "数詞の後ろと -க்கு の有無を見て、物・人・時点・期間を即答する。"
    },
    quiz,
    legacyRefs: ["grammar-v28.js:32", "grammar-v28.js:34", "G34-01..G34-10", "34-01..34-12"],
    status: "drafting",
    public: false
  };

  supplement.targets = Object.freeze(supplement.targets);
  supplement.prerequisites = Object.freeze(supplement.prerequisites);
  supplement.returnToLessons = Object.freeze(supplement.returnToLessons);
  supplement.criticalPoints = Object.freeze(supplement.criticalPoints);
  supplement.readSections = Object.freeze(supplement.readSections);
  supplement.quiz = Object.freeze(supplement.quiz);
  supplement.legacyRefs = Object.freeze(supplement.legacyRefs);
  window.TAMIL_SUPPLEMENTS_V42 = window.TAMIL_SUPPLEMENTS_V42 || [];
  window.TAMIL_SUPPLEMENTS_V42.push(Object.freeze(supplement));
})();

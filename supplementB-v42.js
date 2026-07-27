(() => {
  "use strict";

  const { entry: E, confidence: C } = window.TAMIL_V30;
  const SOURCE_REFS = [
    "TAMIL-INTEGRATED-v2.0-rc.1 §§11,24-25,31",
    "TN-SST-v4.1 lesson02 and lesson15",
    "SCHIFFMAN-SPOKEN-TAMIL: demonstratives and interrogatives",
    "legacy grammar-v28.js chapter33 (migration source only)"
  ];
  const make = input => E({ ...input, sourceRefs: SOURCE_REFS, confidence: input.confidence ?? C("B", "B", "C", "B") });

  const lessonExamples = new Map(
    (window.TAMIL_LESSONS_V30 || []).flatMap(lesson => lesson.examples || []).map(example => [example.id, example])
  );
  const reuse = id => {
    const example = lessonExamples.get(id);
    if (!example) throw new Error(`supplement B cannot resolve existing example ${id}`);
    return example;
  };

  const newExamples = [
    make({
      id: "sb-01",
      targetTamil: "இது நல்லா இருக்கு.",
      structuredRoman: "itu nall-ā iru-kku.",
      pronunciationRoman: "idu nallā irukku.",
      katakana: "イドゥ ナッラー イルック。",
      meaningJa: "これは良いです。",
      literalJapanese: "これ＋良く＋ある",
      morphemes: [
        { surfaceTamil: "இது", gloss: "これ・話し手側" },
        { surfaceTamil: "நல்லா", gloss: "良く" },
        { surfaceTamil: "இருக்கு", gloss: "ある／そういう状態だ" }
      ],
      grammarNote: "இது は単独で名詞の代わりになる近称の中性指示代名詞です。厳密転写 itu と発音 idu を分けます。",
      vocabulary: ["இது", "நல்லா", "இருக்கு"],
      audioGroup: "supplement-b-core",
      featured: true
    }),
    make({
      id: "sb-03",
      targetTamil: "எது உங்க டிக்கெட்?",
      structuredRoman: "etu uṅka ṭikkeṭ?",
      pronunciationRoman: "edu unga ṭikkeṭ?",
      katakana: "エドゥ ウンガ ティッケトゥ？",
      meaningJa: "どれがあなたの切符ですか。",
      literalJapanese: "どれ＋あなたの＋切符",
      morphemes: [
        { surfaceTamil: "எது", gloss: "どれ・未知の物" },
        { surfaceTamil: "உங்க", gloss: "あなたの・敬意／複数" },
        { surfaceTamil: "டிக்கெட்", gloss: "切符" }
      ],
      grammarNote: "எது は選択肢の中から単独で『どれ』と尋ねます。名詞の前に置く எந்த とは位置が違います。",
      vocabulary: ["எது", "உங்க", "டிக்கெட்"],
      audioGroup: "supplement-b-core",
      featured: true
    }),
    make({
      id: "sb-04",
      targetTamil: "இந்த பஸ் சென்னைக்கு போகுமா?",
      structuredRoman: "inta pas ceṉṉai-kku pōk-um-ā?",
      pronunciationRoman: "inda bas sennaikku pōgumā?",
      katakana: "インダ バス センナイック ポーグマー？",
      meaningJa: "このバスはチェンナイへ行きますか。",
      literalJapanese: "この＋バス＋チェンナイ・へ＋行く・未来／一般・疑問",
      morphemes: [
        { surfaceTamil: "இந்த", gloss: "この・話し手側" },
        { surfaceTamil: "பஸ்", gloss: "バス" },
        { surfaceTamil: "சென்னைக்கு", gloss: "チェンナイへ" },
        { surfaceTamil: "போகுமா", gloss: "行きますか" }
      ],
      grammarNote: "இந்த は必ず後ろの名詞を限定します。単独の இது と入れ替えず、இந்த＋பஸ் を一つの名詞句として読みます。",
      vocabulary: ["இந்த", "பஸ்", "சென்னை", "போகுமா"],
      audioGroup: "supplement-b-core",
      featured: true,
      japaneseEstablishedName: "チェンナイ"
    }),
    make({
      id: "sb-05",
      targetTamil: "அந்த பஸ் சென்னைக்கு போகும்.",
      structuredRoman: "anta pas ceṉṉai-kku pōk-um.",
      pronunciationRoman: "anda bas sennaikku pōgum.",
      katakana: "アンダ バス センナイック ポーグム。",
      meaningJa: "その／あのバスはチェンナイへ行きます。",
      literalJapanese: "離れた側の＋バス＋チェンナイ・へ＋行く・未来／一般",
      morphemes: [
        { surfaceTamil: "அந்த", gloss: "その／あの・離れた側" },
        { surfaceTamil: "பஸ்", gloss: "バス" },
        { surfaceTamil: "சென்னைக்கு", gloss: "チェンナイへ" },
        { surfaceTamil: "போகும்", gloss: "行きます" }
      ],
      grammarNote: "அந்த は話し手側ではない対象を指します。日本語の『その』と『あの』を常に別のタミル語へ分けません。",
      vocabulary: ["அந்த", "பஸ்", "சென்னை", "போகும்"],
      audioGroup: "supplement-b-core",
      japaneseEstablishedName: "チェンナイ"
    }),
    make({
      id: "sb-06",
      targetTamil: "எந்த பஸ் சீக்கிரம் போகும்?",
      structuredRoman: "enta pas cīkkiram pōk-um?",
      pronunciationRoman: "enda bas sīkkiram pōgum?",
      katakana: "エンダ バス シーッキラム ポーグム？",
      meaningJa: "どのバスが早く行きますか。",
      literalJapanese: "どの＋バス＋早く＋行く・未来／一般",
      morphemes: [
        { surfaceTamil: "எந்த", gloss: "どの・未知の選択" },
        { surfaceTamil: "பஸ்", gloss: "バス" },
        { surfaceTamil: "சீக்கிரம்", gloss: "早く" },
        { surfaceTamil: "போகும்", gloss: "行きます" }
      ],
      grammarNote: "எந்த は後ろに名詞を要求する『どの〜』です。単独で選択肢を尋ねる எது と分けます。",
      vocabulary: ["எந்த", "பஸ்", "சீக்கிரம்", "போகும்"],
      audioGroup: "supplement-b-core"
    }),
    make({
      id: "sb-09",
      targetTamil: "இப்போ போறேன்.",
      structuredRoman: "ippō pōṟ-ēṉ.",
      pronunciationRoman: "ippō pōrēn.",
      katakana: "イッポー ポーレーン。",
      meaningJa: "今、行きます。",
      literalJapanese: "今＋行く・現在・私",
      morphemes: [
        { surfaceTamil: "இப்போ", gloss: "今" },
        { surfaceTamil: "போறேன்", gloss: "行きます・私" }
      ],
      grammarNote: "時間の i- 系は இப்போ『今』です。場所の இங்க、物の இது と語尾は違いますが、話し手側という軸を共有します。",
      vocabulary: ["இப்போ", "போறேன்"],
      audioGroup: "supplement-b-bank"
    }),
    make({
      id: "sb-10",
      targetTamil: "அது எப்போ வரும்?",
      structuredRoman: "atu eppō var-um?",
      pronunciationRoman: "adu eppō varum?",
      katakana: "アドゥ エッポー ヴァルム？",
      meaningJa: "それはいつ来ますか。",
      literalJapanese: "それ＋いつ＋来る・未来／一般",
      morphemes: [
        { surfaceTamil: "அது", gloss: "それ／あれ" },
        { surfaceTamil: "எப்போ", gloss: "いつ" },
        { surfaceTamil: "வரும்", gloss: "来ます" }
      ],
      grammarNote: "未知の時点は எப்போ へ置き換えます。内容疑問なので、はい・いいえ疑問の -ஆ をさらに足しません。",
      vocabulary: ["அது", "எப்போ", "வரும்"],
      audioGroup: "supplement-b-bank"
    }),
    make({
      id: "sb-11",
      targetTamil: "எப்படி போகணும்?",
      structuredRoman: "eppaṭi pōka-ṇum?",
      pronunciationRoman: "eppadi pōgaṇum?",
      katakana: "エッパディ ポーガヌム？",
      meaningJa: "どう行けばいいですか。",
      literalJapanese: "どう＋行く・必要",
      morphemes: [
        { surfaceTamil: "எப்படி", gloss: "どう・どのように" },
        { surfaceTamil: "போகணும்", gloss: "行く必要がある／行けばよい" }
      ],
      grammarNote: "方法・様子が未知なら எப்படி を使います。場所の எங்கே、時の எப்போ、量の எவ்வளவு と質問する領域を分けます。",
      vocabulary: ["எப்படி", "போகணும்"],
      audioGroup: "supplement-b-bank"
    })
  ];

  const examples = Object.freeze([
    newExamples[0],
    reuse("l2-09"),
    newExamples[1],
    newExamples[2],
    newExamples[3],
    newExamples[4],
    reuse("l2-11"),
    reuse("l15-11"),
    newExamples[5],
    newExamples[6],
    newExamples[7],
    reuse("l15-12")
  ]);

  const patterns = [
    make({
      id: "sb-form-object",
      targetTamil: "இது, அது, எது.",
      structuredRoman: "itu, atu, etu.",
      pronunciationRoman: "idu, adu, edu.",
      katakana: "イドゥ、アドゥ、エドゥ。",
      meaningJa: "これ・それ／あれ・どれ",
      literalJapanese: "近称・遠称・疑問の物",
      grammarNote: "単独で名詞の代わりになる系列です。",
      vocabulary: ["இது", "அது", "எது"],
      audioGroup: "supplement-b-forms",
      kind: "単独の物",
      group: "i- / a- / e-",
      note: "名詞を後ろに置かず、これ・それ／あれ・どれを表す。"
    }),
    make({
      id: "sb-form-determiner",
      targetTamil: "இந்த, அந்த, எந்த.",
      structuredRoman: "inta, anta, enta.",
      pronunciationRoman: "inda, anda, enda.",
      katakana: "インダ、アンダ、エンダ。",
      meaningJa: "この・その／あの・どの",
      literalJapanese: "近称・遠称・疑問の名詞前",
      grammarNote: "必ず後ろの名詞を限定する系列です。",
      vocabulary: ["இந்த", "அந்த", "எந்த"],
      audioGroup: "supplement-b-forms",
      kind: "名詞の前",
      group: "i- / a- / e-",
      note: "இது / அது / எது と統語的位置を入れ替えない。"
    }),
    make({
      id: "sb-form-place",
      targetTamil: "இங்க, அங்க, எங்க.",
      structuredRoman: "iṅka, aṅka, eṅka.",
      pronunciationRoman: "inga, anga, enga.",
      katakana: "インガ、アンガ、エンガ。",
      meaningJa: "ここ・そこ／あそこ・どこ",
      literalJapanese: "近称・遠称・疑問の場所",
      grammarNote: "口語の短い場所系列です。現行本課の இங்கே / எங்கே のような長い形も併存します。",
      vocabulary: ["இங்க", "அங்க", "எங்க"],
      audioGroup: "supplement-b-forms",
      kind: "場所",
      group: "i- / a- / e-",
      note: "短形と長形へ、根拠のない意味差を割り当てない。",
      counterparts: [
        {
          relation: "spoken-variant",
          primaryRegister: "SST",
          regionalProfile: "TN-GENERAL",
          targetTamil: "இங்கே, அங்கே, எங்கே.",
          orthographicRoman: "iṅkē, aṅkē, eṅkē.",
          structuredRoman: "iṅkē, aṅkē, eṅkē.",
          note: "現行第15課でも用いる長い場所形"
        }
      ]
    }),
    make({
      id: "sb-form-time",
      targetTamil: "இப்போ, அப்போ, எப்போ.",
      structuredRoman: "ippō, appō, eppō.",
      pronunciationRoman: "ippō, appō, eppō.",
      katakana: "イッポー、アッポー、エッポー。",
      meaningJa: "今・その時／あの時・いつ",
      literalJapanese: "近称・遠称・疑問の時",
      grammarNote: "時点を指す系列です。",
      vocabulary: ["இப்போ", "அப்போ", "எப்போ"],
      audioGroup: "supplement-b-forms",
      kind: "時",
      group: "i- / a- / e-",
      note: "場所の系列と語尾を混ぜない。"
    }),
    make({
      id: "sb-form-manner",
      targetTamil: "இப்படி, அப்படி, எப்படி.",
      structuredRoman: "ippaṭi, appaṭi, eppaṭi.",
      pronunciationRoman: "ippadi, appadi, eppadi.",
      katakana: "イッパディ、アッパディ、エッパディ。",
      meaningJa: "こう・そう／ああ・どう",
      literalJapanese: "近称・遠称・疑問の方法・様子",
      grammarNote: "方法や様子を指す系列です。",
      vocabulary: ["இப்படி", "அப்படி", "எப்படி"],
      audioGroup: "supplement-b-forms",
      kind: "方法・様子",
      group: "i- / a- / e-",
      note: "எங்கே『どこ』や எப்போ『いつ』と質問領域を分ける。"
    }),
    make({
      id: "sb-form-degree",
      targetTamil: "இவ்வளவு, அவ்வளவு, எவ்வளவு.",
      structuredRoman: "ivvaḷavu, avvaḷavu, evvaḷavu.",
      pronunciationRoman: "ivvaḷavu, avvaḷavu, evvaḷavu.",
      katakana: "イッヴァラヴ、アッヴァラヴ、エッヴァラヴ。",
      meaningJa: "これほど・それほど／あれほど・どれほど／いくら",
      literalJapanese: "近称・遠称・疑問の量・程度",
      grammarNote: "量・値段・程度を指す系列です。",
      vocabulary: ["இவ்வளவு", "அவ்வளவு", "எவ்வளவு"],
      audioGroup: "supplement-b-forms",
      kind: "量・程度",
      group: "i- / a- / e-",
      note: "数えられる個数の எத்தனை とは別に扱う。"
    })
  ];

  const readSections = [
    {
      kicker: "まず結論",
      heading: "i- は話し手側、a- は離れた側、e- は未知",
      takeaway: "<span class=\"ta-inline\" lang=\"ta\">இது / அது / எது</span> <span class=\"roman-inline\">(itu / atu / etu)</span> は、近称・遠称・疑問を同じ列で比べる入口です。",
      paragraphs: [
        "日本語の『これ・それ・あれ』を三語へ一対一対応させません。現代口語では、話し手側の <span class=\"ta-inline\" lang=\"ta\">இது</span> <span class=\"roman-inline\">(itu)</span> と、そこから離れた側の <span class=\"ta-inline\" lang=\"ta\">அது</span> <span class=\"roman-inline\">(atu)</span> が中心です。",
        "何を指すか未知なら頭が e- の <span class=\"ta-inline\" lang=\"ta\">எது</span> <span class=\"roman-inline\">(etu)</span> を使います。ただし、語尾まで機械的に作るのではなく、完成した系列として登録します。"
      ]
    },
    {
      kicker: "形を読む",
      heading: "単独の இது と、名詞前の இந்த を分ける",
      takeaway: "<span class=\"ta-inline\" lang=\"ta\">இது</span> <span class=\"roman-inline\">(itu)</span> は『これ』、<span class=\"ta-inline\" lang=\"ta\">இந்த பஸ்</span> <span class=\"roman-inline\">(inta pas)</span> は『このバス』です。",
      paragraphs: [
        "単独で名詞の代わりになるのは <span class=\"ta-inline\" lang=\"ta\">இது / அது / எது</span> <span class=\"roman-inline\">(itu / atu / etu)</span>。後ろの名詞を限定するのは <span class=\"ta-inline\" lang=\"ta\">இந்த / அந்த / எந்த</span> <span class=\"roman-inline\">(inta / anta / enta)</span> です。",
        "『どれ』は <span class=\"ta-inline\" lang=\"ta\">எது</span> <span class=\"roman-inline\">(etu)</span>、『どのバス』は <span class=\"ta-inline\" lang=\"ta\">எந்த பஸ்</span> <span class=\"roman-inline\">(enta pas)</span>。正しい語でも置く位置が違えば、問いの形が変わります。"
      ]
    },
    {
      kicker: "なぜ？",
      heading: "同じ三系列が、場所・時・方法・程度へ広がる",
      takeaway: "場所は <span class=\"ta-inline\" lang=\"ta\">இங்க / அங்க / எங்க</span> <span class=\"roman-inline\">(iṅka / aṅka / eṅka)</span>、時は <span class=\"ta-inline\" lang=\"ta\">இப்போ / அப்போ / எப்போ</span> <span class=\"roman-inline\">(ippō / appō / eppō)</span> です。",
      paragraphs: [
        "頭の i- / a- / e- は共通しても、後半は領域ごとに異なります。方法なら <span class=\"ta-inline\" lang=\"ta\">இப்படி / அப்படி / எப்படி</span> <span class=\"roman-inline\">(ippaṭi / appaṭi / eppaṭi)</span>、量なら <span class=\"ta-inline\" lang=\"ta\">இவ்வளவு / அவ்வளவு / எவ்வளவு</span> <span class=\"roman-inline\">(ivvaḷavu / avvaḷavu / evvaḷavu)</span> です。",
        "つまり、頭だけ替える感覚は役立ちますが、未知語を自由に生成する規則ではありません。物・場所・時・方法・程度の完成した行を一つずつ覚えます。"
      ]
    },
    {
      kicker: "実際に使う",
      heading: "旅行では、どのバス・どこ・いつ・どう・いくらを選ぶ",
      takeaway: "<span class=\"ta-inline\" lang=\"ta\">எந்த பஸ்?</span> <span class=\"roman-inline\">(enta pas?)</span>、<span class=\"ta-inline\" lang=\"ta\">எங்கே?</span> <span class=\"roman-inline\">(eṅkē?)</span>、<span class=\"ta-inline\" lang=\"ta\">எப்போ?</span> <span class=\"roman-inline\">(eppō?)</span> を知りたい領域ごとに選びます。",
      paragraphs: [
        "選択肢なら <span class=\"ta-inline\" lang=\"ta\">எது / எந்த</span> <span class=\"roman-inline\">(etu / enta)</span>、場所なら <span class=\"ta-inline\" lang=\"ta\">எங்க / எங்கே</span> <span class=\"roman-inline\">(eṅka / eṅkē)</span>、時なら <span class=\"ta-inline\" lang=\"ta\">எப்போ</span> <span class=\"roman-inline\">(eppō)</span> です。",
        "経路や方法は <span class=\"ta-inline\" lang=\"ta\">எப்படி போகணும்?</span> <span class=\"roman-inline\">(eppaṭi pōka-ṇum?)</span>、値段は <span class=\"ta-inline\" lang=\"ta\">டிக்கெட் எவ்வளவு?</span> <span class=\"roman-inline\">(ṭikkeṭ evvaḷavu?)</span> と尋ねます。"
      ]
    },
    {
      kicker: "混ぜない",
      heading: "எது『どれ』、எந்த『どの』、என்ன『何』を一つにしない",
      takeaway: "<span class=\"ta-inline\" lang=\"ta\">எது உங்க டிக்கெட்?</span> <span class=\"roman-inline\">(etu uṅka ṭikkeṭ?)</span> は選択、<span class=\"ta-inline\" lang=\"ta\">அது என்ன?</span> <span class=\"roman-inline\">(atu eṉṉa?)</span> は内容を尋ねます。",
      paragraphs: [
        "目の前の複数候補から一つを選ぶなら <span class=\"ta-inline\" lang=\"ta\">எது</span> <span class=\"roman-inline\">(etu)</span>。名詞を続けるなら <span class=\"ta-inline\" lang=\"ta\">எந்த</span> <span class=\"roman-inline\">(enta)</span>。物の正体・内容を尋ねるなら <span class=\"ta-inline\" lang=\"ta\">என்ன</span> <span class=\"roman-inline\">(eṉṉa)</span> です。",
        "内容疑問詞を置いた文へ、はい・いいえ疑問の <span class=\"ta-inline\" lang=\"ta\">-ஆ</span> <span class=\"roman-inline\">(-ā)</span> を機械的に重ねません。知りたい位置を疑問語へ置き換えます。"
      ],
      note: {
        tone: "pink",
        title: "この補講の最重要ミス",
        body: "日本語訳だけを見て இது / இந்த、எது / எந்த / என்ன を交換しない。単独か名詞前か、選択か内容かを先に判断します。"
      }
    },
    {
      kicker: "3文で復習",
      heading: "このバス・あのバス・いつ来るをつなげる",
      takeaway: "<span class=\"ta-inline\" lang=\"ta\">இந்த / அந்த</span> <span class=\"roman-inline\">(inta / anta)</span> で対象を切り替え、未知の時を <span class=\"ta-inline\" lang=\"ta\">எப்போ</span> <span class=\"roman-inline\">(eppō)</span> で尋ねます。",
      paragraphs: [
        "<span class=\"ta-inline\" lang=\"ta\">இந்த பஸ் சென்னைக்கு போகுமா?</span> <span class=\"roman-inline\">(inta pas ceṉṉai-kku pōk-um-ā?)</span>",
        "<span class=\"ta-inline\" lang=\"ta\">அந்த பஸ் சென்னைக்கு போகும்.</span> <span class=\"roman-inline\">(anta pas ceṉṉai-kku pōk-um.)</span>",
        "<span class=\"ta-inline\" lang=\"ta\">அது எப்போ வரும்?</span> <span class=\"roman-inline\">(atu eppō var-um?)</span>"
      ],
      miniReading: { ids: ["sb-04", "sb-05", "sb-10"] }
    }
  ];

  const quiz = [
    {
      focus: "形態分解",
      q: "名詞の前で『どのバス』を作る形は？",
      options: [
        "<span class=\"quiz-option-ta\" lang=\"ta\">எந்த பஸ்</span><span class=\"quiz-option-roman\">enta pas</span><span class=\"quiz-option-ja\">どのバス</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">இந்த பஸ்</span><span class=\"quiz-option-roman\">inta pas</span><span class=\"quiz-option-ja\">このバス</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">அந்த பஸ்</span><span class=\"quiz-option-roman\">anta pas</span><span class=\"quiz-option-ja\">その／あのバス</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">எது?</span><span class=\"quiz-option-roman\">etu?</span><span class=\"quiz-option-ja\">どれ？</span>"
      ],
      answer: 0,
      feedback: "名詞の前では <span class=\"ta-inline\" lang=\"ta\">எந்த</span> <span class=\"roman-inline\">(enta)</span> を使います。単独の『どれ』は எது です。",
      rule: "単独なら எது、名詞前なら எந்த。",
      tags: ["正解", "近称", "遠称", "単独形"]
    },
    {
      focus: "機能選択",
      q: "複数の切符から『どれがあなたの切符ですか』と尋ねる文は？",
      options: [
        "<span class=\"quiz-option-ta\" lang=\"ta\">எது உங்க டிக்கெட்?</span><span class=\"quiz-option-roman\">etu uṅka ṭikkeṭ?</span><span class=\"quiz-option-ja\">どれがあなたの切符ですか</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">இது உங்க டிக்கெட்.</span><span class=\"quiz-option-roman\">itu uṅka ṭikkeṭ.</span><span class=\"quiz-option-ja\">これがあなたの切符です</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">அது உங்க டிக்கெட்.</span><span class=\"quiz-option-roman\">atu uṅka ṭikkeṭ.</span><span class=\"quiz-option-ja\">それがあなたの切符です</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">அது என்ன?</span><span class=\"quiz-option-roman\">atu eṉṉa?</span><span class=\"quiz-option-ja\">それは何ですか</span>"
      ],
      answer: 0,
      feedback: "選択肢の中から一つを尋ねるので <span class=\"ta-inline\" lang=\"ta\">எது</span> <span class=\"roman-inline\">(etu)</span> を使います。",
      rule: "選択の『どれ』と、内容の『何』を分ける。",
      tags: ["正解", "近称の断定", "遠称の断定", "内容疑問"]
    },
    {
      focus: "実用場面",
      q: "停留所で『バスはどこに止まりますか』と尋ねる文は？",
      options: [
        "<span class=\"quiz-option-ta\" lang=\"ta\">பஸ் எங்கே நிக்கும்?</span><span class=\"quiz-option-roman\">pas eṅkē nikk-um?</span><span class=\"quiz-option-ja\">バスはどこに止まりますか</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">பஸ் இங்கே நிக்கும்.</span><span class=\"quiz-option-roman\">pas iṅkē nikk-um.</span><span class=\"quiz-option-ja\">バスはここに止まります</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">பஸ் அங்கே நிக்கும்.</span><span class=\"quiz-option-roman\">pas aṅkē nikk-um.</span><span class=\"quiz-option-ja\">バスはそこ／あそこに止まります</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">பஸ் எப்போ நிக்கும்?</span><span class=\"quiz-option-roman\">pas eppō nikk-um?</span><span class=\"quiz-option-ja\">バスはいつ止まりますか</span>"
      ],
      answer: 0,
      feedback: "未知の場所は <span class=\"ta-inline\" lang=\"ta\">எங்கே</span> <span class=\"roman-inline\">(eṅkē)</span>。時を尋ねる எப்போ とは領域が違います。",
      rule: "場所は எங்கே、時は எப்போ。",
      tags: ["正解", "近称場所", "遠称場所", "時間疑問"]
    },
    {
      focus: "混同防止",
      q: "現代口語の <span class=\"ta-inline\" lang=\"ta\">அது / அந்த</span> について正しい説明は？",
      options: [
        "日本語の『それ』『あれ』の両方に対応し得て、文脈で距離を読む",
        "必ず日本語の『それ』だけに対応する",
        "必ず日本語の『あれ』だけに対応する",
        "疑問を作る e- 系である"
      ],
      answer: 0,
      feedback: "a- 系は話し手側から離れた対象を指し、日本語訳では『それ』『あれ』のどちらにもなり得ます。",
      rule: "日本語の三距離を、タミル語へそのまま移植しない。",
      tags: ["正解", "日本語三距離の固定", "日本語三距離の固定", "系列の取り違え"]
    },
    {
      focus: "総合復習",
      q: "『今・その時／あの時・いつ』の順に並ぶ系列は？",
      options: [
        "<span class=\"quiz-option-ta\" lang=\"ta\">இப்போ · அப்போ · எப்போ</span><span class=\"quiz-option-roman\">ippō · appō · eppō</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">இங்க · அங்க · எங்க</span><span class=\"quiz-option-roman\">iṅka · aṅka · eṅka</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">இப்படி · அப்படி · எப்படி</span><span class=\"quiz-option-roman\">ippaṭi · appaṭi · eppaṭi</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">இவ்வளவு · அவ்வளவு · எவ்வளவு</span><span class=\"quiz-option-roman\">ivvaḷavu · avvaḷavu · evvaḷavu</span>"
      ],
      answer: 0,
      feedback: "時の系列は <span class=\"ta-inline\" lang=\"ta\">இப்போ / அப்போ / எப்போ</span> <span class=\"roman-inline\">(ippō / appō / eppō)</span> です。",
      rule: "i-/a-/e- が同じでも、後半で物・場所・時・方法・程度を読む。",
      tags: ["正解", "場所系列", "方法系列", "程度系列"]
    }
  ];

  const supplement = Object.freeze({
    id: "supplement-b-v42",
    code: "B",
    public: false,
    navTitle: "i・a・e の指示・疑問系列",
    title: "これ・それ／あれ・どれ、ここ・どこを一枚の体系で読む",
    tamilTitle: "இது · அது · எது",
    deck: "i-＝話し手側、a-＝離れた側、e-＝未知を軸に、物・名詞前・場所・時・方法・程度を横断します。",
    entryQuestion: "頭の i-・a-・e- を替えると、物・場所・時・方法・程度はどう連動する？",
    prerequisites: Object.freeze([2, 15]),
    returnToLessons: Object.freeze([2, 15]),
    sourceLessons: Object.freeze(["lesson02-v30.js", "lesson15-v38.js"]),
    legacyRefs: Object.freeze(["grammar-v28.js:33", "G33-01..G33-08", "33-01..33-12"]),
    targets: Object.freeze(["近称 i-", "遠称 a-", "疑問 e-", "単独形と名詞前", "場所・時・方法・程度"]),
    criticalPoints: Object.freeze([
      "<span class=\"ta-inline\" lang=\"ta\">i- / a- / e-</span> を近称・遠称・疑問の軸として読み、日本語の三距離をそのまま移植しない。",
      "<span class=\"ta-inline\" lang=\"ta\">இது / அது / எது</span> <span class=\"roman-inline\">(itu / atu / etu)</span> は単独、<span class=\"ta-inline\" lang=\"ta\">இந்த / அந்த / எந்த</span> <span class=\"roman-inline\">(inta / anta / enta)</span> は名詞前。",
      "<span class=\"ta-inline\" lang=\"ta\">எங்கே / எப்போ / எப்படி / எவ்வளவு</span> <span class=\"roman-inline\">(eṅkē / eppō / eppaṭi / evvaḷavu)</span> を、場所・時・方法・程度で選ぶ。"
    ]),
    examples,
    heroExample: examples[0],
    readSections: Object.freeze(readSections),
    formConfig: Object.freeze({
      mode: "supplement",
      title: "同じ三列を、六つの領域で読む",
      intro: "頭の i- / a- / e- を手掛かりにしつつ、後半まで含む完成した系列として覚えます。",
      patterns: Object.freeze(patterns),
      checkpoint: "単独か名詞前かを先に決め、次に物・場所・時・方法・程度のどこが未知かを選ぶ。"
    }),
    quiz: Object.freeze(quiz)
  });

  window.TAMIL_SUPPLEMENTS_V42 = window.TAMIL_SUPPLEMENTS_V42 || [];
  window.TAMIL_SUPPLEMENTS_V42.push(supplement);
})();

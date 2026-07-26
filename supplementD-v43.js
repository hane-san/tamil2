(() => {
  "use strict";

  const { entry: E, confidence: C } = window.TAMIL_V30;
  const SOURCE_REFS = [
    "TAMIL-INTEGRATED-v2.0-rc.1 §§20-22,31-32",
    "CORE-CURRICULUM-v1.1 §3 item22",
    "TN-SST-v4.1 lesson16",
    "SCHIFFMAN-SPOKEN-TAMIL: comparison of adjectives and superlatives",
    "PENN-PLC-TAMIL: comparative with accusative + viṭa; superlative with locative + emphatic",
    "legacy grammar-v28.js chapter35 (migration source only)"
  ];
  const make = input => E({ ...input, sourceRefs: SOURCE_REFS, confidence: input.confidence ?? C("B", "B", "C", "B") });

  const lessonExamples = new Map(
    (window.TAMIL_LESSONS_V30 || []).flatMap(lesson => lesson.examples || []).map(example => [example.id, example])
  );
  const reuse = id => {
    const example = lessonExamples.get(id);
    if (!example) throw new Error(`supplement D cannot resolve existing example ${id}`);
    return example;
  };

  const newExamples = [
    make({
      id: "sd-03",
      targetTamil: "இந்த ரூம் அந்த ரூம் அளவுக்கு பெரிசா இருக்கு.",
      structuredRoman: "inta rūm anta rūm aḷav-ukku peric-ā irukku.",
      pronunciationRoman: "inda rūm anda rūm aḷavukku perisā irukku.",
      katakana: "インダ ルーム アンダ ルーム アラヴック ペリサー イルック。",
      meaningJa: "この部屋はあの部屋と同じくらい大きいです。",
      literalJapanese: "この＋部屋＋あの＋部屋＋程度・に＋大きく＋ある",
      morphemes: [
        { surfaceTamil: "இந்த ரூம்", gloss: "この部屋" },
        { surfaceTamil: "அந்த ரூம்", gloss: "あの部屋・程度の基準" },
        { surfaceTamil: "அளவுக்கு", analysis: "அளவு + -க்கு", gloss: "〜と同じ程度に／〜ほど" },
        { surfaceTamil: "பெரிசா இருக்கு", gloss: "大きいです" }
      ],
      grammarNote: "同じ程度を明示するときは基準＋அளவுக்கு を使います。似た様子を表す மாதிரி と同義にはしません。",
      vocabulary: ["இந்த ரூம்", "அந்த ரூம்", "அளவுக்கு", "பெரிசா இருக்கு"],
      audioGroup: "supplement-d-core",
      featured: true
    }),
    make({
      id: "sd-04",
      targetTamil: "இந்த ஹோட்டல் அந்த ஹோட்டல் அளவுக்கு மலிவா இருக்கு.",
      structuredRoman: "inta hōṭṭal anta hōṭṭal aḷav-ukku maliv-ā irukku.",
      pronunciationRoman: "inda hōṭṭal anda hōṭṭal aḷavukku malivā irukku.",
      katakana: "インダ ホーッタル アンダ ホーッタル アラヴック マリヴァー イルック。",
      meaningJa: "このホテルはあのホテルと同じくらい安いです。",
      literalJapanese: "この＋ホテル＋あの＋ホテル＋程度・に＋安く＋ある",
      morphemes: [
        { surfaceTamil: "இந்த ஹோட்டல்", gloss: "このホテル" },
        { surfaceTamil: "அந்த ஹோட்டல்", gloss: "あのホテル・程度の基準" },
        { surfaceTamil: "அளவுக்கு", gloss: "同じ程度に／〜ほど" },
        { surfaceTamil: "மலிவா இருக்கு", gloss: "安いです" }
      ],
      grammarNote: "அளவுக்கு は値段・大きさなどの程度をそろえる比較に使えます。比較方向を示す -ஐவிட とは別です。",
      vocabulary: ["இந்த ஹோட்டல்", "அந்த ஹோட்டல்", "அளவுக்கு", "மலிவா இருக்கு"],
      audioGroup: "supplement-d-core"
    }),
    make({
      id: "sd-05",
      targetTamil: "இந்த ரூம் அந்த ரூம் மாதிரி சுத்தமா இருக்கு.",
      structuredRoman: "inta rūm anta rūm mātiri cuttam-ā irukku.",
      pronunciationRoman: "inda rūm anda rūm mādiri suttamā irukku.",
      katakana: "インダ ルーム アンダ ルーム マーディリ スッタマー イルック。",
      meaningJa: "この部屋はあの部屋のように清潔です。",
      literalJapanese: "この＋部屋＋あの＋部屋＋ように＋清潔に＋ある",
      morphemes: [
        { surfaceTamil: "இந்த ரூம்", gloss: "この部屋" },
        { surfaceTamil: "அந்த ரூம்", gloss: "あの部屋・似方の基準" },
        { surfaceTamil: "மாதிரி", gloss: "〜のように／〜みたいに" },
        { surfaceTamil: "சுத்தமா இருக்கு", gloss: "清潔です" }
      ],
      grammarNote: "மாதிரி は似た様子・やり方を表します。同じ数値・程度を厳密にそろえる அளவுக்கு より広い類似表現です。",
      vocabulary: ["இந்த ரூம்", "அந்த ரூம்", "மாதிரி", "சுத்தமா இருக்கு"],
      audioGroup: "supplement-d-bank"
    }),
    make({
      id: "sd-06",
      targetTamil: "இந்த ஊர்லேயே இந்த ஹோட்டல் தான் மலிவா இருக்கு.",
      structuredRoman: "inta ūr-lē-yē inta hōṭṭal tāṉ maliv-ā irukku.",
      pronunciationRoman: "inda ūrleyē inda hōṭṭal tān malivā irukku.",
      katakana: "インダ ウールレイェー インダ ホーッタル ターン マリヴァー イルック。",
      meaningJa: "この町では、このホテルがいちばん安いです。",
      literalJapanese: "この＋町・中で・強調＋この＋ホテル＋焦点＋安く＋ある",
      morphemes: [
        { surfaceTamil: "இந்த ஊர்லேயே", analysis: "இந்த ஊர் + -லே + -ஏ", gloss: "この町の中でこそ／この町でいちばんの範囲" },
        { surfaceTamil: "இந்த ஹோட்டல்", gloss: "このホテル" },
        { surfaceTamil: "தான்", gloss: "これが、と候補を焦点化" },
        { surfaceTamil: "மலிவா இருக்கு", gloss: "安いです" }
      ],
      grammarNote: "最上級はまず ஊர்லேயே のように比較範囲を示します。தான் は候補を焦点化しますが、それ単独が『いちばん』を作るわけではありません。",
      vocabulary: ["ஊர்", "ஊர்லேயே", "ஹோட்டல்", "தான்", "மலிவா இருக்கு"],
      audioGroup: "supplement-d-core",
      featured: true
    }),
    make({
      id: "sd-07",
      targetTamil: "இந்த மெனுவ்லேயே இது தான் காரம் கம்மி.",
      structuredRoman: "inta meṉuv-lē-yē itu tāṉ kāram kammi.",
      pronunciationRoman: "inda menuvleyē idu tān kāram kammi.",
      katakana: "インダ メヌヴレイェー イドゥ ターン カーラム カンミ。",
      meaningJa: "このメニューでは、これがいちばん辛さ控えめです。",
      literalJapanese: "この＋メニュー・中で・強調＋これ＋焦点＋辛さ＋少ない",
      morphemes: [
        { surfaceTamil: "இந்த மெனுவ்லேயே", gloss: "このメニューの中で" },
        { surfaceTamil: "இது", gloss: "これ" },
        { surfaceTamil: "தான்", gloss: "これが、と焦点化" },
        { surfaceTamil: "காரம் கம்மி", gloss: "辛さが少ない" }
      ],
      grammarNote: "『最も辛くない』を一語の最上級へ変えず、比較範囲＋候補＋காரம் கம்மி で具体的な評価軸を示します。",
      vocabulary: ["மெனு", "மெனுவ்லேயே", "இது", "தான்", "காரம் கம்மி"],
      audioGroup: "supplement-d-core",
      featured: true
    }),
    make({
      id: "sd-08",
      targetTamil: "ஆட்டோ டாக்ஸியைவிட கொஞ்சம் மலிவா இருக்கு.",
      structuredRoman: "āṭṭō ṭāksi-y-ai-viṭa koñcam maliv-ā irukku.",
      pronunciationRoman: "āṭṭō ṭāksiyeviḍa konjam malivā irukku.",
      katakana: "アーットー タークシエヴィダ コンジャム マリヴァー イルック。",
      meaningJa: "オートリキシャはタクシーより少し安いです。",
      literalJapanese: "オート＋タクシー・を・より＋少し＋安く＋ある",
      morphemes: [
        { surfaceTamil: "ஆட்டோ", gloss: "オートリキシャ" },
        { surfaceTamil: "டாக்ஸியைவிட", analysis: "டாக்ஸி + -ய்- + -ஐ + விட", gloss: "タクシーより" },
        { surfaceTamil: "கொஞ்சம்", gloss: "少し" },
        { surfaceTamil: "மலிவா இருக்கு", gloss: "安いです" }
      ],
      grammarNote: "கொஞ்சம் は比較差を小さく示します。比較基準は டாக்ஸியைவிட にあり、程度語は差の大きさだけを調整します。",
      vocabulary: ["ஆட்டோ", "டாக்ஸி", "கொஞ்சம்", "மலிவா இருக்கு"],
      audioGroup: "supplement-d-bank"
    }),
    make({
      id: "sd-09",
      targetTamil: "இந்த வழி அந்த வழியைவிட ரொம்ப சுலபம்.",
      structuredRoman: "inta vaḻi anta vaḻi-y-ai-viṭa rompa culapam.",
      pronunciationRoman: "inda vaḻi anda vaḻiyeviḍa romba sulabam.",
      katakana: "インダ ヴァリ アンダ ヴァリエヴィダ ロンバ スラバム。",
      meaningJa: "この道はあの道よりずっと簡単です。",
      literalJapanese: "この＋道＋あの＋道・を・より＋とても／ずっと＋簡単",
      morphemes: [
        { surfaceTamil: "இந்த வழி", gloss: "この道" },
        { surfaceTamil: "அந்த வழியைவிட", analysis: "அந்த வழி + -ய்- + -ஐ + விட", gloss: "あの道より" },
        { surfaceTamil: "ரொம்ப", gloss: "とても／ずっと" },
        { surfaceTamil: "சுலபம்", gloss: "簡単です" }
      ],
      grammarNote: "ரொம்ப は差を大きく示します。厳密転写 rompa と発音 romba を別層で保持します。",
      vocabulary: ["இந்த வழி", "அந்த வழி", "ரொம்ப", "சுலபம்"],
      audioGroup: "supplement-d-bank"
    }),
    make({
      id: "sd-10",
      targetTamil: "இந்த ரூம் அந்த ரூம் அளவுக்கு சுத்தமா இல்ல.",
      structuredRoman: "inta rūm anta rūm aḷav-ukku cuttam-ā illa.",
      pronunciationRoman: "inda rūm anda rūm aḷavukku suttamā illa.",
      katakana: "インダ ルーム アンダ ルーム アラヴック スッタマー イッラ。",
      meaningJa: "この部屋はあの部屋ほど清潔ではありません。",
      literalJapanese: "この＋部屋＋あの＋部屋＋程度・に＋清潔に＋ない",
      morphemes: [
        { surfaceTamil: "இந்த ரூம்", gloss: "この部屋" },
        { surfaceTamil: "அந்த ரூம் அளவுக்கு", gloss: "あの部屋ほど" },
        { surfaceTamil: "சுத்தமா", gloss: "清潔に" },
        { surfaceTamil: "இல்ல", gloss: "ない／そうではない" }
      ],
      grammarNote: "基準＋அளவுக்கு＋否定で『〜ほど…ではない』を作れます。単純な優劣ではなく、基準へ届かない程度を述べます。",
      vocabulary: ["அளவுக்கு", "சுத்தமா", "இல்ல"],
      audioGroup: "supplement-d-bank"
    }),
    make({
      id: "sd-11",
      targetTamil: "இந்த ஊர்லேயே எந்த ஹோட்டல் மலிவா இருக்கு?",
      structuredRoman: "inta ūr-lē-yē enta hōṭṭal maliv-ā irukku?",
      pronunciationRoman: "inda ūrleyē enda hōṭṭal malivā irukku?",
      katakana: "インダ ウールレイェー エンダ ホーッタル マリヴァー イルック？",
      meaningJa: "この町では、どのホテルがいちばん安いですか。",
      literalJapanese: "この＋町・中で・強調＋どの＋ホテル＋安く＋ある",
      morphemes: [
        { surfaceTamil: "இந்த ஊர்லேயே", gloss: "この町の中で" },
        { surfaceTamil: "எந்த ஹோட்டல்", gloss: "どのホテル" },
        { surfaceTamil: "மலிவா இருக்கு", gloss: "安いです" }
      ],
      grammarNote: "最上級の質問でも、まず比較範囲を置き、その中の候補を எந்த＋名詞 で尋ねます。",
      vocabulary: ["ஊர்லேயே", "எந்த ஹோட்டல்", "மலிவா இருக்கு"],
      audioGroup: "supplement-d-bank"
    }),
    make({
      id: "sd-12",
      targetTamil: "நேத்தவிட இன்னைக்கு உடம்பு நல்லா இருக்கு.",
      structuredRoman: "nētta-viṭa iṉṉaikku uṭampu nall-ā irukku.",
      pronunciationRoman: "nēttaviḍa innaikku uḍambu nallā irukku.",
      katakana: "ネーッタヴィダ インネック ウダンブ ナッラー イルック。",
      meaningJa: "昨日より今日は体調が良いです。",
      literalJapanese: "昨日・より＋今日＋身体＋良く＋ある",
      morphemes: [
        { surfaceTamil: "நேத்தவிட", analysis: "நேத்து + விட", gloss: "昨日より" },
        { surfaceTamil: "இன்னைக்கு", gloss: "今日" },
        { surfaceTamil: "உடம்பு", gloss: "身体／体調" },
        { surfaceTamil: "நல்லா இருக்கு", gloss: "良いです" }
      ],
      grammarNote: "比較基準は物だけでなく時点にも置けます。口語の நேத்தவிட は形・発音・地域自然さを公開前に追加監査します。",
      vocabulary: ["நேத்தவிட", "இன்னைக்கு", "உடம்பு", "நல்லா இருக்கு"],
      audioGroup: "supplement-d-bank",
      confidence: C("B", "B", "C", "C")
    })
  ];

  const examples = Object.freeze([
    reuse("l16-03"),
    reuse("l16-10"),
    ...newExamples
  ]);

  const patterns = [
    make({
      id: "sd-form-comparative",
      targetTamil: "அந்த ரூமைவிட.",
      structuredRoman: "anta rūm-ai-viṭa.",
      pronunciationRoman: "anda rūmeviḍa.",
      katakana: "アンダ ルーメヴィダ。",
      meaningJa: "あの部屋より",
      literalJapanese: "あの部屋・対格・より",
      grammarNote: "比較の基準へ対格＋விட を付けます。",
      vocabulary: ["அந்த ரூமைவிட"],
      audioGroup: "supplement-d-forms",
      kind: "差を比べる基準",
      group: "比較",
      note: "AとBのうち、基準になるB側へ付ける。"
    }),
    make({
      id: "sd-form-pronoun-comparative",
      targetTamil: "இதைவிட.",
      structuredRoman: "it-ai-viṭa.",
      pronunciationRoman: "ideviḍa.",
      katakana: "イデヴィダ。",
      meaningJa: "これより",
      literalJapanese: "これ・対格・より",
      grammarNote: "指示代名詞も対格形を経て比較基準になります。",
      vocabulary: ["இதைவிட"],
      audioGroup: "supplement-d-forms",
      kind: "指示語の比較",
      group: "比較",
      note: "文字 itai と発音 ide を別層で保つ。"
    }),
    make({
      id: "sd-form-equative",
      targetTamil: "அந்த ரூம் அளவுக்கு.",
      structuredRoman: "anta rūm aḷav-ukku.",
      pronunciationRoman: "anda rūm aḷavukku.",
      katakana: "アンダ ルーム アラヴック。",
      meaningJa: "あの部屋と同じくらい／あの部屋ほど",
      literalJapanese: "あの部屋＋程度・に",
      grammarNote: "同じ程度や基準へ届く度合いを示します。",
      vocabulary: ["அந்த ரூம்", "அளவுக்கு"],
      audioGroup: "supplement-d-forms",
      kind: "同程度",
      group: "等程度",
      note: "類似の மாதிரி と区別する。"
    }),
    make({
      id: "sd-form-similarity",
      targetTamil: "அந்த ரூம் மாதிரி.",
      structuredRoman: "anta rūm mātiri.",
      pronunciationRoman: "anda rūm mādiri.",
      katakana: "アンダ ルーム マーディリ。",
      meaningJa: "あの部屋のように／あの部屋みたいに",
      literalJapanese: "あの部屋＋ように",
      grammarNote: "様子・種類・やり方の類似を示します。",
      vocabulary: ["அந்த ரூம்", "மாதிரி"],
      audioGroup: "supplement-d-forms",
      kind: "類似",
      group: "似方",
      note: "数値上の同程度を必ず意味するわけではない。"
    }),
    make({
      id: "sd-form-domain",
      targetTamil: "இந்த ஊர்லேயே.",
      structuredRoman: "inta ūr-lē-yē.",
      pronunciationRoman: "inda ūrleyē.",
      katakana: "インダ ウールレイェー。",
      meaningJa: "この町の中でこそ／この町でいちばんの範囲",
      literalJapanese: "この町・中で・強調",
      grammarNote: "最上級の比較範囲を場所形＋強調で示します。",
      vocabulary: ["இந்த ஊர்லேயே"],
      audioGroup: "supplement-d-forms",
      kind: "最上級の範囲",
      group: "範囲",
      note: "何の中で一番かを先に示す。"
    }),
    make({
      id: "sd-form-focus",
      targetTamil: "இது தான்.",
      structuredRoman: "itu tāṉ.",
      pronunciationRoman: "idu tān.",
      katakana: "イドゥ ターン。",
      meaningJa: "これが／これこそ",
      literalJapanese: "これ＋焦点",
      grammarNote: "候補を一つに焦点化します。",
      vocabulary: ["இது", "தான்"],
      audioGroup: "supplement-d-forms",
      kind: "候補の焦点",
      group: "最上級の候補",
      note: "தான் 単独を『いちばん』の語尾とみなさない。"
    }),
    make({
      id: "sd-form-small-gap",
      targetTamil: "கொஞ்சம் மலிவு.",
      structuredRoman: "koñcam malivu.",
      pronunciationRoman: "konjam malivu.",
      katakana: "コンジャム マリヴ。",
      meaningJa: "少し安い",
      literalJapanese: "少し＋安い",
      grammarNote: "差を小さく示す程度語です。",
      vocabulary: ["கொஞ்சம்", "மலிவு"],
      audioGroup: "supplement-d-forms",
      kind: "小さい差",
      group: "程度差",
      note: "比較基準そのものは別に置く。"
    }),
    make({
      id: "sd-form-large-gap",
      targetTamil: "ரொம்ப சுலபம்.",
      structuredRoman: "rompa culapam.",
      pronunciationRoman: "romba sulabam.",
      katakana: "ロンバ スラバム。",
      meaningJa: "ずっと簡単／とても簡単",
      literalJapanese: "とても＋簡単",
      grammarNote: "差や状態を強く示す程度語です。",
      vocabulary: ["ரொம்ப", "சுலபம்"],
      audioGroup: "supplement-d-forms",
      kind: "大きい差",
      group: "程度差",
      note: "厳密転写 rompa と発音 romba を分ける。"
    })
  ];

  const readSections = [
    {
      kicker: "まず結論",
      heading: "比較は、差・同程度・類似・範囲の四つへ分ける",
      takeaway: "差は <span class=\"ta-inline\" lang=\"ta\">அந்த ரூமைவிட</span> <span class=\"roman-inline\">(anta rūm-ai-viṭa)</span>、同程度は <span class=\"ta-inline\" lang=\"ta\">அந்த ரூம் அளவுக்கு</span> <span class=\"roman-inline\">(anta rūm aḷav-ukku)</span> です。",
      paragraphs: [
        "第16課の比較では、基準になる側へ <span class=\"ta-inline\" lang=\"ta\">-ஐவிட</span> <span class=\"roman-inline\">(-ai-viṭa)</span> を付けました。補講Dでは、同じ程度・似た様子・範囲内の一番へ広げます。",
        "日本語の『同じくらい』『〜みたい』『いちばん』を一つの比較表現へまとめず、何を比べたいかで型を選びます。"
      ]
    },
    {
      kicker: "形を読む",
      heading: "-ஐவிட は基準側に付き、形容詞を比較級へ変えない",
      takeaway: "<span class=\"ta-inline\" lang=\"ta\">இந்த படம் அந்த படத்தைவிட நல்லா இருக்கு</span> <span class=\"roman-inline\">(inta paṭam anta paṭatt-ai-viṭa nallā irukku)</span> では、基準はあの映画です。",
      paragraphs: [
        "比較の方向は語順と格で読みます。AがBより良いなら、B側を <span class=\"ta-inline\" lang=\"ta\">B-ஐவிட</span> <span class=\"roman-inline\">(B-ai-viṭa)</span> にします。",
        "性質語そのものへ英語の -er のような語尾を付けません。<span class=\"ta-inline\" lang=\"ta\">கொஞ்சம் / ரொம்ப</span> <span class=\"roman-inline\">(koñcam / rompa)</span> は差の大きさを調整します。"
      ]
    },
    {
      kicker: "なぜ？",
      heading: "அளவுக்கு は同程度、மாதிரி は似た様子",
      takeaway: "<span class=\"ta-inline\" lang=\"ta\">அந்த ரூம் அளவுக்கு</span> <span class=\"roman-inline\">(anta rūm aḷav-ukku)</span> は程度、<span class=\"ta-inline\" lang=\"ta\">அந்த ரூம் மாதிரி</span> <span class=\"roman-inline\">(anta rūm mātiri)</span> は類似です。",
      paragraphs: [
        "大きさ・値段・清潔さなど、同じ尺度上の程度をそろえるなら <span class=\"ta-inline\" lang=\"ta\">அளவுக்கு</span> <span class=\"roman-inline\">(aḷav-ukku)</span> を使います。否定と組み合わせれば『〜ほど…ではない』にもなります。",
        "<span class=\"ta-inline\" lang=\"ta\">மாதிரி</span> <span class=\"roman-inline\">(mātiri)</span> は『〜のように』という似方です。見た目や様子が似ていても、数値上まったく同じ程度とは限りません。"
      ]
    },
    {
      kicker: "実際に使う",
      heading: "最上級は、まず比較範囲を示す",
      takeaway: "<span class=\"ta-inline\" lang=\"ta\">இந்த ஊர்லேயே</span> <span class=\"roman-inline\">(inta ūr-lē-yē)</span> のように、『何の中で』を先に置きます。",
      paragraphs: [
        "町・メニュー・候補一覧などの範囲へ場所形と強調を重ね、<span class=\"ta-inline\" lang=\"ta\">ஊர்லேயே / மெனுவ்லேயே</span> <span class=\"roman-inline\">(ūr-lē-yē / meṉuv-lē-yē)</span> とします。",
        "その後で <span class=\"ta-inline\" lang=\"ta\">இது தான்</span> <span class=\"roman-inline\">(itu tāṉ)</span> のように候補を焦点化できます。தான் は候補を選ぶ語であり、それだけで比較範囲を作りません。"
      ]
    },
    {
      kicker: "混ぜない",
      heading: "『いちばん』と『とても』と『少し差がある』を分ける",
      takeaway: "<span class=\"ta-inline\" lang=\"ta\">ஊர்லேயே</span> <span class=\"roman-inline\">(ūr-lē-yē)</span> は範囲、<span class=\"ta-inline\" lang=\"ta\">ரொம்ப / கொஞ்சம்</span> <span class=\"roman-inline\">(rompa / koñcam)</span> は程度です。",
      paragraphs: [
        "<span class=\"ta-inline\" lang=\"ta\">ரொம்ப நல்லா இருக்கு</span> <span class=\"roman-inline\">(rompa nallā irukku)</span> は『とても良い』で、範囲内の最上級とは限りません。",
        "また <span class=\"ta-inline\" lang=\"ta\">தான்</span> <span class=\"roman-inline\">(tāṉ)</span> は焦点です。比較範囲がなければ、単に『これが』『これこそ』という訂正・選択にもなります。"
      ],
      note: {
        tone: "pink",
        title: "この補講の最重要ミス",
        body: "மாதிரி を厳密な同程度、தான் を単独の最上級語尾、ரொம்ப を『いちばん』と決めつけない。基準・尺度・範囲を先に確認します。"
      }
    },
    {
      kicker: "3文で復習",
      heading: "同じ大きさか、清潔さも同じか、もっと良い部屋があるか",
      takeaway: "<span class=\"ta-inline\" lang=\"ta\">அளவுக்கு</span> <span class=\"roman-inline\">(aḷav-ukku)</span> と否定、<span class=\"ta-inline\" lang=\"ta\">இதைவிட</span> <span class=\"roman-inline\">(it-ai-viṭa)</span> をつなげます。",
      paragraphs: [
        "<span class=\"ta-inline\" lang=\"ta\">இந்த ரூம் அந்த ரூம் அளவுக்கு பெரிசா இருக்கு.</span> <span class=\"roman-inline\">(inta rūm anta rūm aḷav-ukku peric-ā irukku.)</span>",
        "<span class=\"ta-inline\" lang=\"ta\">இந்த ரூம் அந்த ரூம் அளவுக்கு சுத்தமா இல்ல.</span> <span class=\"roman-inline\">(inta rūm anta rūm aḷav-ukku cuttam-ā illa.)</span>",
        "<span class=\"ta-inline\" lang=\"ta\">இதைவிட நல்ல ரூம் இருக்கா?</span> <span class=\"roman-inline\">(it-ai-viṭa nalla rūm irukk-ā?)</span>"
      ],
      miniReading: { ids: ["sd-03", "sd-10", "l16-10"] }
    }
  ];

  const quiz = [
    {
      focus: "形態分解",
      q: "『あの部屋より』と比較基準を示す形は？",
      options: [
        "<span class=\"quiz-option-ta\" lang=\"ta\">அந்த ரூமைவிட</span><span class=\"quiz-option-roman\">anta rūm-ai-viṭa</span><span class=\"quiz-option-ja\">あの部屋より</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">அந்த ரூம் அளவுக்கு</span><span class=\"quiz-option-roman\">anta rūm aḷav-ukku</span><span class=\"quiz-option-ja\">あの部屋と同じくらい</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">அந்த ரூம் மாதிரி</span><span class=\"quiz-option-roman\">anta rūm mātiri</span><span class=\"quiz-option-ja\">あの部屋のように</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">அந்த ரூம்லேயே</span><span class=\"quiz-option-roman\">anta rūm-lē-yē</span><span class=\"quiz-option-ja\">あの部屋の中でこそ</span>"
      ],
      answer: 0,
      feedback: "差を比べる基準には対格＋விடを使います。",
      rule: "BよりAなら、基準Bを B-ஐவிட にする。",
      tags: ["正解", "同程度", "類似", "範囲"]
    },
    {
      focus: "機能選択",
      q: "『このホテルはあのホテルと同じくらい安い』に必要な形は？",
      options: [
        "<span class=\"quiz-option-ta\" lang=\"ta\">அந்த ஹோட்டல் அளவுக்கு</span><span class=\"quiz-option-roman\">anta hōṭṭal aḷav-ukku</span><span class=\"quiz-option-ja\">あのホテルと同じくらい</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">அந்த ஹோட்டலைவிட</span><span class=\"quiz-option-roman\">anta hōṭṭal-ai-viṭa</span><span class=\"quiz-option-ja\">あのホテルより</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">அந்த ஹோட்டல் மாதிரி</span><span class=\"quiz-option-roman\">anta hōṭṭal mātiri</span><span class=\"quiz-option-ja\">あのホテルのように</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">அந்த ஹோட்டல்லேயே</span><span class=\"quiz-option-roman\">anta hōṭṭal-lē-yē</span><span class=\"quiz-option-ja\">あのホテルの中でこそ</span>"
      ],
      answer: 0,
      feedback: "同じ尺度上の程度をそろえるなら அளவுக்கு です。",
      rule: "同程度は அளவுக்கு、似た様子は மாதிரி。",
      tags: ["正解", "比較方向", "類似", "範囲"]
    },
    {
      focus: "実用場面",
      q: "町のホテル全体から『このホテルがいちばん安い』と言う文は？",
      options: [
        "<span class=\"quiz-option-ta\" lang=\"ta\">இந்த ஊர்லேயே இந்த ஹோட்டல் தான் மலிவா இருக்கு.</span><span class=\"quiz-option-roman\">inta ūr-lē-yē inta hōṭṭal tāṉ maliv-ā irukku.</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">இந்த ஹோட்டல் அந்த ஹோட்டலைவிட மலிவா இருக்கு.</span><span class=\"quiz-option-roman\">inta hōṭṭal anta hōṭṭal-ai-viṭa maliv-ā irukku.</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">இந்த ஹோட்டல் அந்த ஹோட்டல் அளவுக்கு மலிவா இருக்கு.</span><span class=\"quiz-option-roman\">inta hōṭṭal anta hōṭṭal aḷav-ukku maliv-ā irukku.</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">இந்த ஹோட்டல் ரொம்ப மலிவா இருக்கு.</span><span class=\"quiz-option-roman\">inta hōṭṭal rompa maliv-ā irukku.</span>"
      ],
      answer: 0,
      feedback: "最上級では比較範囲 ஊர்லேயே を明示し、その中の候補を焦点化します。",
      rule: "いちばんは、まず何の中で一番かを言う。",
      tags: ["正解", "二項比較", "同程度", "程度のみ"]
    },
    {
      focus: "混同防止",
      q: "தான் の役割について正しい説明は？",
      options: [
        "候補を『これが／これこそ』と焦点化する。",
        "形容詞を比較級へ変える。",
        "同じ程度を表す。",
        "比較範囲そのものを示す。"
      ],
      answer: 0,
      feedback: "தான் は焦点です。最上級の範囲は ஊர்லேயே などで別に示します。",
      rule: "தான்＝焦点。『いちばん』を単独で作る語尾ではない。",
      tags: ["正解", "英語式比較級", "同程度", "範囲"]
    },
    {
      focus: "総合復習",
      q: "『同じくらい大きいが、同じくらい清潔ではない』に合う組み合わせは？",
      options: [
        "<span class=\"quiz-option-ta\" lang=\"ta\">அளவுக்கு பெரிசா இருக்கு / அளவுக்கு சுத்தமா இல்ல</span><span class=\"quiz-option-roman\">aḷav-ukku peric-ā irukku / aḷav-ukku cuttam-ā illa</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">மாதிரி பெரிசா இருக்கு / ரூமைவிட சுத்தமா இல்ல</span><span class=\"quiz-option-roman\">mātiri peric-ā irukku / rūm-ai-viṭa cuttam-ā illa</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">ரூமைவிட பெரிசா இருக்கு / ஊர்லேயே சுத்தமா இல்ல</span><span class=\"quiz-option-roman\">rūm-ai-viṭa peric-ā irukku / ūr-lē-yē cuttam-ā illa</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">ரொம்ப பெரிசா இருக்கு / தான் சுத்தமா இல்ல</span><span class=\"quiz-option-roman\">rompa peric-ā irukku / tāṉ cuttam-ā illa</span>"
      ],
      answer: 0,
      feedback: "同じ程度にも、その基準へ届かない否定にも அளவுக்கு を使えます。",
      rule: "同じ尺度の到達度は அளவுக்கு。肯定か否定かは述語側で決める。",
      tags: ["正解", "類似と比較混同", "比較と範囲混同", "程度と焦点混同"]
    }
  ];

  const supplement = {
    id: "supplement-d-v43",
    code: "D",
    release: "v4.3",
    navTitle: "比較をもう一段深く読む",
    title: "より・同じくらい・似ている・範囲内の一番を分ける",
    tamilTitle: "இந்த ஊர்லேயே இந்த ஹோட்டல் தான் மலிவு",
    deck: "第16課の基本比較を土台に、差・同程度・類似・程度差・範囲付き最上級を一つずつ選び分けます。",
    entryQuestion: "『より』だけでなく、『同じくらい』『似ている』『範囲の中でいちばん』をどう作る？",
    prerequisites: [16],
    returnToLessons: [16],
    targets: ["-ஐவிட の比較基準", "அளவுக்கு の同程度", "மாதிரி の類似", "-லேயே の比較範囲"],
    criticalPoints: [
      "差を比べるときは基準側へ <span class=\"ta-inline\" lang=\"ta\">-ஐவிட</span> <span class=\"roman-inline\">(-ai-viṭa)</span> を付ける。",
      "同程度は <span class=\"ta-inline\" lang=\"ta\">அளவுக்கு</span> <span class=\"roman-inline\">(aḷav-ukku)</span>、似た様子は <span class=\"ta-inline\" lang=\"ta\">மாதிரி</span> <span class=\"roman-inline\">(mātiri)</span>。",
      "最上級は <span class=\"ta-inline\" lang=\"ta\">ஊர்லேயே</span> <span class=\"roman-inline\">(ūr-lē-yē)</span> のように比較範囲を示し、<span class=\"ta-inline\" lang=\"ta\">தான்</span> <span class=\"roman-inline\">(tāṉ)</span> は候補の焦点として読む。"
    ],
    heroExample: examples[5],
    examples,
    readSections,
    formConfig: {
      mode: "grammar",
      title: "比較対象・同程度・類似・範囲・程度差の型",
      intro: "英語式の比較級語尾を作らず、基準・尺度・範囲・焦点を別々の形で置きます。",
      patterns: Object.freeze(patterns),
      checkpoint: "-ஐவிட・அளவுக்கு・மாதிரி・-லேயே のどれかを、差・同程度・類似・範囲から即答する。"
    },
    quiz,
    legacyRefs: ["grammar-v28.js:35", "G35-01..G35-08", "35-01..35-12"],
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
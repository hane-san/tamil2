(() => {
  "use strict";

  const { entry: E, confidence: C } = window.TAMIL_V30;
  const SOURCE_REFS = [
    "TAMIL-INTEGRATED-v2.0-rc.1 §§23-25,31-32",
    "CORE-CURRICULUM-v1.1 §3",
    "PREDICATE-ENGINE-v1.1 §§1.4,4,7",
    "TN-SST-v4.1 lessons11,12,18",
    "SCHIFFMAN-ASPECT-1999: aspectual verbs after verbal participles",
    "SCHIFFMAN-SPOKEN-TAMIL: perfect, resultative and change-of-state constructions",
    "legacy grammar-v28.js chapters36 and38 (migration source only)"
  ];
  const make = input => E({ ...input, sourceRefs: SOURCE_REFS, confidence: input.confidence ?? C("B", "B", "C", "B") });

  const lessonExamples = new Map(
    (window.TAMIL_LESSONS_V30 || []).flatMap(lesson => lesson.examples || []).map(example => [example.id, example])
  );
  const reuse = id => {
    const example = lessonExamples.get(id);
    if (!example) throw new Error(`supplement F cannot resolve existing example ${id}`);
    return example;
  };

  const newExamples = [
    make({
      id: "sf-02",
      targetTamil: "இந்த படம் முன்பே பாத்திருக்கேன்.",
      structuredRoman: "inta paṭam muṉpē pātt-irukk-ēṉ.",
      underlyingAnalysis: "பாத்து + இருக்கு + ஏன் → பாத்திருக்கேன்",
      pronunciationRoman: "inda paḍam munbē pāttirukkēn.",
      katakana: "インダ パダム ムンベー パーッティルッケーン。",
      meaningJa: "この映画は前に見たことがあります。",
      literalJapanese: "この＋映画＋以前に＋見て・現在とのつながり・私",
      morphemes: [
        { surfaceTamil: "இந்த படம்", gloss: "この映画" },
        { surfaceTamil: "முன்பே", analysis: "முன்பு + -ஏ", gloss: "以前に／前にすでに" },
        { surfaceTamil: "பாத்திருக்கேன்", analysis: "பாத்து + இருக்கு + -ஏன்", gloss: "見たことがあります／見てあります・私" }
      ],
      grammarNote: "முன்பே と பாத்திருக்கேன் を組み合わせ、過去の一回だけでなく現在まで有効な経験として述べます。",
      vocabulary: ["இந்த படம்", "முன்பே", "பாத்திருக்கேன்"],
      audioGroup: "supplement-f-core",
      featured: true
    }),
    make({
      id: "sf-03",
      targetTamil: "இதை எங்கேயோ பாத்திருக்கேன்.",
      structuredRoman: "it-ai eṅkē-y-ō pātt-irukk-ēṉ.",
      underlyingAnalysis: "பாத்து + இருக்கு + ஏன் → பாத்திருக்கேன்",
      pronunciationRoman: "ide engēyō pāttirukkēn.",
      katakana: "イデ エンゲーヨー パーッティルッケーン。",
      meaningJa: "これをどこかで見たことがあります。",
      literalJapanese: "これ・を＋どこかで＋見て・現在とのつながり・私",
      morphemes: [
        { surfaceTamil: "இதை", analysis: "இது + -ஐ", gloss: "これを" },
        { surfaceTamil: "எங்கேயோ", analysis: "எங்கே + -ஓ", gloss: "どこかで" },
        { surfaceTamil: "பாத்திருக்கேன்", gloss: "見たことがあります・私" }
      ],
      grammarNote: "場所を思い出せなくても、見た経験自体は現在の判断に残っています。単純完了 பாத்துட்டேன் と分けます。",
      vocabulary: ["இதை", "எங்கேயோ", "பாத்திருக்கேன்"],
      audioGroup: "supplement-f-core"
    }),
    make({
      id: "sf-05",
      targetTamil: "டிக்கெட் வாங்கி வெச்சிருக்கேன்.",
      structuredRoman: "ṭikkeṭ vāṅki vecc-irukk-ēṉ.",
      underlyingAnalysis: "வாங்கி + வெச்சு + இருக்கு + ஏன் → வாங்கி வெச்சிருக்கேன்",
      pronunciationRoman: "ṭikkeṭ vāṅgi veccirukkēn.",
      katakana: "ティッケトゥ ヴァーンギ ヴェッチルッケーン。",
      meaningJa: "切符は買って用意してあります。",
      literalJapanese: "切符＋買って＋準備した結果がある・私",
      morphemes: [
        { surfaceTamil: "டிக்கெட்", gloss: "切符" },
        { surfaceTamil: "வாங்கி", gloss: "買って" },
        { surfaceTamil: "வெச்சிருக்கேன்", analysis: "வெச்சு + இருக்கு + -ஏன்", gloss: "用意した状態にしてあります・私" }
      ],
      grammarNote: "வாங்கி வெச்சேன் は過去に準備した出来事、வாங்கி வெச்சிருக்கேன் はその準備結果が今も利用できることを前面に出します。",
      vocabulary: ["டிக்கெட்", "வாங்கி", "வெச்சிருக்கேன்"],
      audioGroup: "supplement-f-core",
      featured: true
    }),
    make({
      id: "sf-06",
      targetTamil: "கதவு திறந்திருக்கு.",
      structuredRoman: "katavu tiṟant-irukku.",
      underlyingAnalysis: "திறந்து + இருக்கு → திறந்திருக்கு",
      pronunciationRoman: "kadavu tirandirukku.",
      katakana: "カダヴ ティランディルック。",
      meaningJa: "ドアは開いています。",
      literalJapanese: "ドア＋開いた状態・ある",
      morphemes: [
        { surfaceTamil: "கதவு", gloss: "ドア" },
        { surfaceTamil: "திறந்திருக்கு", analysis: "திறந்து + இருக்கு", gloss: "開いた状態です" }
      ],
      grammarNote: "出来事が起きたことより、現在の開いた状態を述べます。変化の கதவு திறந்துடுச்சு と対比します。",
      vocabulary: ["கதவு", "திறந்திருக்கு"],
      audioGroup: "supplement-f-core"
    }),
    make({
      id: "sf-07",
      targetTamil: "ரூம் சுத்தம் பண்ணி வெச்சிருக்கு.",
      structuredRoman: "rūm cuttam paṇṇi vecc-irukku.",
      underlyingAnalysis: "பண்ணி + வெச்சு + இருக்கு → பண்ணி வெச்சிருக்கு",
      pronunciationRoman: "rūm suttam paṇṇi veccirukku.",
      katakana: "ルーム スッタム パンニ ヴェッチルック。",
      meaningJa: "部屋は掃除して用意してあります。",
      literalJapanese: "部屋＋清潔＋して＋準備した結果がある",
      morphemes: [
        { surfaceTamil: "ரூம்", gloss: "部屋" },
        { surfaceTamil: "சுத்தம் பண்ணி", gloss: "掃除して／きれいにして" },
        { surfaceTamil: "வெச்சிருக்கு", analysis: "வெச்சு + இருக்கு", gloss: "その状態にしてあります" }
      ],
      grammarNote: "準備行為だけでなく、部屋を使える状態にしてある現在結果を示します。",
      vocabulary: ["ரூம்", "சுத்தம் பண்ணி", "வெச்சிருக்கு"],
      audioGroup: "supplement-f-bank"
    }),
    make({
      id: "sf-08",
      targetTamil: "புக்கிங் கேன்சல் ஆயிடுச்சு.",
      structuredRoman: "pukkiṅ kēṉcal āy-iṭuccu.",
      pronunciationRoman: "bukking kēnsal āyiḍuccu.",
      katakana: "ブッキング ケーンセル アーイデゥッチュ。",
      meaningJa: "予約がキャンセルになってしまいました。",
      literalJapanese: "予約＋キャンセル＋なって・変化完了",
      morphemes: [
        { surfaceTamil: "புக்கிங்", gloss: "予約" },
        { surfaceTamil: "கேன்சல்", gloss: "キャンセル" },
        { surfaceTamil: "ஆயிடுச்சு", analysis: "ஆய் + -இடுச்சு", gloss: "〜になりました／変わりました" }
      ],
      grammarNote: "誰がキャンセルしたかを前面に出さず、予約の状態変化を出来事として報告します。受け身語尾と同一視しません。",
      vocabulary: ["புக்கிங்", "கேன்சல்", "ஆயிடுச்சு"],
      audioGroup: "supplement-f-core",
      featured: true,
      styleTags: ["neutral", "loanword-heavy"]
    }),
    make({
      id: "sf-09",
      targetTamil: "என் பேக் காணாம போயிடுச்சு.",
      structuredRoman: "eṉ pēk kāṇ-āma pōy-iṭuccu.",
      pronunciationRoman: "en bēg kāṇāma pōyiḍuccu.",
      katakana: "エン ベーグ カーナーマ ポーイデゥッチュ。",
      meaningJa: "私のバッグがなくなってしまいました。",
      literalJapanese: "私の＋バッグ＋見えず＋行って・変化完了",
      morphemes: [
        { surfaceTamil: "என்", gloss: "私の" },
        { surfaceTamil: "பேக்", gloss: "バッグ" },
        { surfaceTamil: "காணாம", analysis: "காண் + -ஆம", gloss: "見えなく／なくなって" },
        { surfaceTamil: "போயிடுச்சு", analysis: "போய் + -இடுச்சு", gloss: "なくなりました／行ってしまいました" }
      ],
      grammarNote: "போயிடுச்சு は消失・逸失など、元の状態から離れた変化を出来事として示します。常に後悔の感情まで含むとは限りません。",
      vocabulary: ["என்", "பேக்", "காணாம", "போயிடுச்சு"],
      audioGroup: "supplement-f-core",
      styleTags: ["neutral", "loanword"]
    }),
    make({
      id: "sf-10",
      targetTamil: "ரயில் நேரம் மாறிடுச்சு.",
      structuredRoman: "rayil nēram māṟ-iṭuccu.",
      pronunciationRoman: "rayil nēram māriḍuccu.",
      katakana: "ライル ネーラム マーリデゥッチュ。",
      meaningJa: "列車の時刻が変わりました。",
      literalJapanese: "列車＋時刻＋変わって・変化完了",
      morphemes: [
        { surfaceTamil: "ரயில் நேரம்", gloss: "列車の時刻" },
        { surfaceTamil: "மாறிடுச்சு", analysis: "மாறு + -இடுச்சு", gloss: "変わりました" }
      ],
      grammarNote: "மாறிடுச்சு は変更後の状態へ移ったことを短く報告します。変更した人物を明示する文とは別です。",
      vocabulary: ["ரயில்", "நேரம்", "மாறிடுச்சு"],
      audioGroup: "supplement-f-bank"
    }),
    make({
      id: "sf-11",
      targetTamil: "கதவு திறந்துடுச்சு.",
      structuredRoman: "katavu tiṟantuṭuccu.",
      underlyingAnalysis: "திறந்து + இடுச்சு → திறந்துடுச்சு",
      pronunciationRoman: "kadavu tiranduḍuccu.",
      katakana: "カダヴ ティランドゥデゥッチュ。",
      meaningJa: "ドアが開きました／開いてしまいました。",
      literalJapanese: "ドア＋開いて・変化完了",
      morphemes: [
        { surfaceTamil: "கதவு", gloss: "ドア" },
        { surfaceTamil: "திறந்துடுச்சு", analysis: "திறந்து + -இடுச்சு", gloss: "開きました／開いてしまいました" }
      ],
      grammarNote: "திறந்திருக்கு は現在の開いた状態、திறந்துடுச்சு は開く変化が起きたことを前面に出します。",
      vocabulary: ["கதவு", "திறந்துடுச்சு"],
      audioGroup: "supplement-f-bank"
    }),
    make({
      id: "sf-12",
      targetTamil: "பிரச்சனை சரியாயிடுச்சு.",
      structuredRoman: "piraccaṉai cari-y-āy-iṭuccu.",
      pronunciationRoman: "piraccanai sariyāyiḍuccu.",
      katakana: "ピラッチャナイ サリヤーイデゥッチュ。",
      meaningJa: "問題は解決しました／大丈夫になりました。",
      literalJapanese: "問題＋正しく・なって・変化完了",
      morphemes: [
        { surfaceTamil: "பிரச்சனை", gloss: "問題" },
        { surfaceTamil: "சரியாயிடுச்சு", analysis: "சரி + ஆய் + -இடுச்சு", gloss: "解決しました／大丈夫になりました" }
      ],
      grammarNote: "悪い変化だけでなく、問題が解決したような好ましい状態変化にも ஆயிடுச்சு 系を使えます。",
      vocabulary: ["பிரச்சனை", "சரியாயிடுச்சு"],
      audioGroup: "supplement-f-bank"
    })
  ];

  const examples = Object.freeze([
    reuse("l12-04"),
    newExamples[0],
    newExamples[1],
    reuse("l12-07"),
    ...newExamples.slice(2)
  ]);

  const patterns = [
    make({
      id: "sf-form-completed",
      targetTamil: "பாத்துட்டேன்.",
      structuredRoman: "pāttuṭṭ-ēṉ.",
      pronunciationRoman: "pāttuṭṭēn.",
      katakana: "パーットゥッテーン。",
      meaningJa: "見終えました／もう見ました",
      literalJapanese: "見て・完了・私",
      grammarNote: "一回の行為が完了したことを述べます。",
      vocabulary: ["பாத்துட்டேன்"],
      audioGroup: "supplement-f-forms",
      kind: "単純完了",
      group: "出来事と現在",
      note: "経験の பாத்திருக்கேன் と分ける。"
    }),
    make({
      id: "sf-form-experience",
      targetTamil: "பாத்திருக்கேன்.",
      structuredRoman: "pātt-irukk-ēṉ.",
      pronunciationRoman: "pāttirukkēn.",
      katakana: "パーッティルッケーン。",
      meaningJa: "見たことがあります／見てあります",
      literalJapanese: "見て・現在とのつながり・私",
      grammarNote: "過去の経験・結果を現在の状態や判断へつなげます。",
      vocabulary: ["பாத்திருக்கேன்"],
      audioGroup: "supplement-f-forms",
      kind: "経験・現在関連",
      group: "出来事と現在",
      note: "時間語と文脈で経験読みを支える。"
    }),
    make({
      id: "sf-form-prepared-past",
      targetTamil: "வாங்கி வெச்சேன்.",
      structuredRoman: "vāṅki vecc-ēṉ.",
      pronunciationRoman: "vāṅgi veccēn.",
      katakana: "ヴァーンギ ヴェッチェーン。",
      meaningJa: "買っておきました",
      literalJapanese: "買って＋準備した・私",
      grammarNote: "後のために準備した過去の行為を示します。",
      vocabulary: ["வாங்கி", "வெச்சேன்"],
      audioGroup: "supplement-f-forms",
      kind: "準備した出来事",
      group: "準備と結果",
      note: "結果が今も残ることを強調するなら வெச்சிருக்கேன்。"
    }),
    make({
      id: "sf-form-prepared-result",
      targetTamil: "வாங்கி வெச்சிருக்கேன்.",
      structuredRoman: "vāṅki vecc-irukk-ēṉ.",
      pronunciationRoman: "vāṅgi veccirukkēn.",
      katakana: "ヴァーンギ ヴェッチルッケーン。",
      meaningJa: "買って用意してあります",
      literalJapanese: "買って＋準備した結果がある・私",
      grammarNote: "準備した結果が現在も利用可能であることを示します。",
      vocabulary: ["வாங்கி", "வெச்சிருக்கேன்"],
      audioGroup: "supplement-f-forms",
      kind: "準備結果",
      group: "準備と結果",
      note: "単なる過去の வெச்சேன் と分ける。"
    }),
    make({
      id: "sf-form-result-state",
      targetTamil: "திறந்திருக்கு.",
      structuredRoman: "tiṟant-irukku.",
      pronunciationRoman: "tirandirukku.",
      katakana: "ティランディルック。",
      meaningJa: "開いています",
      literalJapanese: "開いた状態・ある",
      grammarNote: "現在の結果状態を述べます。",
      vocabulary: ["திறந்திருக்கு"],
      audioGroup: "supplement-f-forms",
      kind: "結果状態",
      group: "状態と変化",
      note: "開いた変化の திறந்துடுச்சு と対比する。"
    }),
    make({
      id: "sf-form-become",
      targetTamil: "கேன்சல் ஆயிடுச்சு.",
      structuredRoman: "kēṉcal āy-iṭuccu.",
      pronunciationRoman: "kēnsal āyiḍuccu.",
      katakana: "ケーンセル アーイデゥッチュ。",
      meaningJa: "キャンセルになりました",
      literalJapanese: "キャンセル＋なって・変化完了",
      grammarNote: "名詞・状態へ移った変化を報告します。",
      vocabulary: ["கேன்சல்", "ஆயிடுச்சு"],
      audioGroup: "supplement-f-forms",
      kind: "状態変化",
      group: "状態と変化",
      note: "行為者を言わない出来事報告として使える。"
    }),
    make({
      id: "sf-form-disappearance",
      targetTamil: "காணாம போயிடுச்சு.",
      structuredRoman: "kāṇ-āma pōy-iṭuccu.",
      pronunciationRoman: "kāṇāma pōyiḍuccu.",
      katakana: "カーナーマ ポーイデゥッチュ。",
      meaningJa: "なくなりました",
      literalJapanese: "見えなく＋行って・変化完了",
      grammarNote: "元の状態から失われた変化を示します。",
      vocabulary: ["காணாம", "போயிடுச்சு"],
      audioGroup: "supplement-f-forms",
      kind: "消失・逸失",
      group: "状態と変化",
      note: "必ず話し手の後悔を含むとは説明しない。"
    }),
    make({
      id: "sf-form-change",
      targetTamil: "மாறிடுச்சு.",
      structuredRoman: "māṟ-iṭuccu.",
      pronunciationRoman: "māriḍuccu.",
      katakana: "マーリデゥッチュ。",
      meaningJa: "変わりました",
      literalJapanese: "変わって・変化完了",
      grammarNote: "変更後の状態へ移ったことを短く報告します。",
      vocabulary: ["மாறிடுச்சு"],
      audioGroup: "supplement-f-forms",
      kind: "変更",
      group: "状態と変化",
      note: "誰が変えたかを示す他動詞文とは別。"
    })
  ];

  const readSections = [
    {
      kicker: "まず結論",
      heading: "『もうした』を、完了・経験・準備結果・変化へ分ける",
      takeaway: "<span class=\"ta-inline\" lang=\"ta\">பாத்துட்டேன் / பாத்திருக்கேன்</span> <span class=\"roman-inline\">(pāttuṭṭ-ēṉ / pātt-irukk-ēṉ)</span> は、一回の完了と現在につながる経験です。",
      paragraphs: [
        "<span class=\"ta-inline\" lang=\"ta\">படம் பாத்துட்டேன்</span> <span class=\"roman-inline\">(paṭam pāttuṭṭ-ēṉ)</span> は、見る行為が済んだことを述べます。",
        "<span class=\"ta-inline\" lang=\"ta\">இந்த படம் முன்பே பாத்திருக்கேன்</span> <span class=\"roman-inline\">(inta paṭam muṉpē pātt-irukk-ēṉ)</span> は、その経験が現在の判断に関係する形です。"
      ]
    },
    {
      kicker: "形を読む",
      heading: "右端の இருக்கு が、過去の出来事を現在へつなぐ",
      takeaway: "<span class=\"ta-inline\" lang=\"ta\">பாத்திருக்கேன்</span> <span class=\"roman-inline\">(pātt-irukk-ēṉ)</span> は、表面上の பாத்திரு を一語の過去形として暗記しません。",
      paragraphs: [
        "基底では『見て＋いる』の連結ですが、表面形にない母音を structuredRoman へ捏造しません。教材表示は <span class=\"roman-inline\">pātt-irukk-ēṉ</span>、基底分析は別欄へ置きます。",
        "経験読みは முன்பே『以前に』や எங்கேயோ『どこかで』など、時間・場所と文脈で支えます。"
      ]
    },
    {
      kicker: "なぜ？",
      heading: "வெச்சேன் は準備した出来事、வெச்சிருக்கேன் は残っている結果",
      takeaway: "<span class=\"ta-inline\" lang=\"ta\">வாங்கி வெச்சேன் / வாங்கி வெச்சிருக்கேன்</span> <span class=\"roman-inline\">(vāṅki vecc-ēṉ / vāṅki vecc-irukk-ēṉ)</span> を分けます。",
      paragraphs: [
        "<span class=\"ta-inline\" lang=\"ta\">டிக்கெட் வாங்கி வெச்சேன்</span> は『買っておいた』という過去の準備行為です。",
        "<span class=\"ta-inline\" lang=\"ta\">டிக்கெட் வாங்கி வெச்சிருக்கேன்</span> は、切符が今も用意された状態にあることを前面に出します。"
      ]
    },
    {
      kicker: "実際に使う",
      heading: "現在の状態と、状態が変わった出来事を分ける",
      takeaway: "<span class=\"ta-inline\" lang=\"ta\">கதவு திறந்திருக்கு / கதவு திறந்துடுச்சு</span> <span class=\"roman-inline\">(katavu tiṟant-irukku / katavu tiṟantuṭuccu)</span> は、状態と変化です。",
      paragraphs: [
        "திறந்திருக்கு は『今、開いている』という結果状態を述べます。いつ開いたかや誰が開けたかは中心ではありません。",
        "திறந்துடுச்சு は『開く変化が起きた』ことを伝えます。同じ日本語の『開いた』でも、どこへ焦点を置くかが違います。"
      ]
    },
    {
      kicker: "混ぜない",
      heading: "ஆயிடுச்சு / போயிடுச்சு を、受け身や後悔へ一律変換しない",
      takeaway: "<span class=\"ta-inline\" lang=\"ta\">கேன்சல் ஆயிடுச்சு / காணாம போயிடுச்சு</span> <span class=\"roman-inline\">(kēṉcal āy-iṭuccu / kāṇ-āma pōy-iṭuccu)</span> は変化を報告します。",
      paragraphs: [
        "<span class=\"ta-inline\" lang=\"ta\">புக்கிங் கேன்சல் ஆயிடுச்சு</span> は、行為者を明示せず予約の状態変化を述べます。文法的受け身の語尾ではありません。",
        "-இடுச்சு 系は好ましくない変化にも多いですが、<span class=\"ta-inline\" lang=\"ta\">பிரச்சனை சரியாயிடுச்சு</span> <span class=\"roman-inline\">(piraccaṉai cari-y-āy-iṭuccu)</span> のような好ましい解決にも使えます。"
      ],
      note: {
        tone: "pink",
        title: "この補講の最重要ミス",
        body: "பாத்துட்டேன் と பாத்திருக்கேன்、வெச்சேன் と வெச்சிருக்கேன்、திறந்திருக்கு と திறந்துடுச்சு を、日本語訳だけで交換しません。"
      }
    },
    {
      kicker: "3文で復習",
      heading: "切符は用意したが予約が変わり、最後に問題が解決する",
      takeaway: "準備結果・望まない変化・解決への変化を、<span class=\"roman-inline\">vecc-irukku / āy-iṭuccu</span> 系で読み分けます。",
      paragraphs: [
        "<span class=\"ta-inline\" lang=\"ta\">டிக்கெட் வாங்கி வெச்சிருக்கேன்.</span> <span class=\"roman-inline\">(ṭikkeṭ vāṅki vecc-irukk-ēṉ.)</span>",
        "<span class=\"ta-inline\" lang=\"ta\">புக்கிங் கேன்சல் ஆயிடுச்சு.</span> <span class=\"roman-inline\">(pukkiṅ kēṉcal āy-iṭuccu.)</span>",
        "<span class=\"ta-inline\" lang=\"ta\">பிரச்சனை சரியாயிடுச்சு.</span> <span class=\"roman-inline\">(piraccaṉai cari-y-āy-iṭuccu.)</span>"
      ],
      miniReading: { ids: ["sf-05", "sf-08", "sf-12"] }
    }
  ];

  const option = (ta, roman, ja) => `<span class="quiz-option-ta" lang="ta">${ta}</span><span class="quiz-option-roman">${roman}</span><span class="quiz-option-ja">${ja}</span>`;
  const quiz = [
    {
      focus: "形態分解",
      q: "以前に見た経験が現在の判断に残っている形は？",
      options: [
        option("பாத்திருக்கேன்", "pātt-irukk-ēṉ", "見たことがあります"),
        option("பாத்துட்டேன்", "pāttuṭṭ-ēṉ", "見終えました"),
        option("பாத்துக்கிட்டு இருக்கேன்", "pāttu-kkiṭṭu irukk-ēṉ", "見ています"),
        option("பாக்கறேன்", "pākkaṟ-ēṉ", "見ます")
      ],
      answer: 0,
      feedback: "<span class=\"ta-inline\" lang=\"ta\">பாத்திருக்கேன்</span> <span class=\"roman-inline\">(pātt-irukk-ēṉ)</span> は、経験・結果を現在へつなげます。",
      rule: "経験・現在関連は V-ட்டு＋இருக்கு 系を文脈と一緒に読む。",
      tags: ["正解", "単純完了", "進行", "単純現在"]
    },
    {
      focus: "機能選択",
      q: "切符が今も用意された状態にあることを伝えるなら？",
      options: [
        option("டிக்கெட் வாங்கி வெச்சிருக்கேன்.", "ṭikkeṭ vāṅki vecc-irukk-ēṉ.", "切符は買って用意してあります"),
        option("டிக்கெட் வாங்கி வெச்சேன்.", "ṭikkeṭ vāṅki vecc-ēṉ.", "切符を買っておきました"),
        option("டிக்கெட் வாங்கினேன்.", "ṭikkeṭ vāṅkiṉ-ēṉ.", "切符を買いました"),
        option("டிக்கெட் வாங்கறேன்.", "ṭikkeṭ vāṅkaṟ-ēṉ.", "切符を買います")
      ],
      answer: 0,
      feedback: "வெச்சிருக்கேன் は、準備した結果が現在も残っていることを示します。",
      rule: "過去の準備は வெச்சேன்、現在の準備結果は வெச்சிருக்கேன்。",
      tags: ["正解", "過去の準備", "単純過去", "単純現在"]
    },
    {
      focus: "実用場面",
      q: "誰が行ったかを言わず、『予約がキャンセルになりました』と変化を報告するなら？",
      options: [
        option("புக்கிங் கேன்சல் ஆயிடுச்சு.", "pukkiṅ kēṉcal āy-iṭuccu.", "予約がキャンセルになりました"),
        option("புக்கிங் கேன்சல் பண்ணினேன்.", "pukkiṅ kēṉcal paṇṇiṉ-ēṉ.", "私は予約をキャンセルしました"),
        option("புக்கிங் கேன்சல் பண்ணுங்க.", "pukkiṅ kēṉcal paṇṇ-uṅka.", "予約をキャンセルしてください"),
        option("புக்கிங் கேன்சல் ஆகுமா?", "pukkiṅ kēṉcal āk-um-ā?", "予約はキャンセルになりますか")
      ],
      answer: 0,
      feedback: "ஆயிடுச்சு は、行為者より予約の状態変化を前面に出します。",
      rule: "N＋ஆயிடுச்சு で『Nになった』という変化を報告できる。",
      tags: ["正解", "能動一人称", "命令", "未来疑問"]
    },
    {
      focus: "混同防止",
      q: "『ドアは今、開いています』という結果状態は？",
      options: [
        option("கதவு திறந்திருக்கு.", "katavu tiṟant-irukku.", "ドアは開いています"),
        option("கதவு திறந்துடுச்சு.", "katavu tiṟantuṭuccu.", "ドアが開きました"),
        option("கதவை திறந்தேன்.", "katav-ai tiṟant-ēṉ.", "私はドアを開けました"),
        option("கதவு திறக்குமா?", "katavu tiṟakk-um-ā?", "ドアは開きますか")
      ],
      answer: 0,
      feedback: "திறந்திருக்கு は現在の開いた状態、திறந்துடுச்சு は開く変化です。",
      rule: "状態は V-ந்து＋இருக்கு、変化は V-ந்து＋இடுச்சு 系を対比する。",
      tags: ["正解", "変化完了", "能動過去", "未来疑問"]
    },
    {
      focus: "総合復習",
      q: "経験・準備結果・状態変化の対応がすべて正しい組は？",
      options: [
        option("பாத்திருக்கேன் · வெச்சிருக்கேன் · ஆயிடுச்சு", "pātt-irukk-ēṉ · vecc-irukk-ēṉ · āy-iṭuccu", "経験・準備結果・状態変化"),
        option("பாத்துட்டேன் · வெச்சேன் · திறந்திருக்கு", "pāttuṭṭ-ēṉ · vecc-ēṉ · tiṟant-irukku", "単純完了・過去準備・結果状態"),
        option("பாத்துக்கிட்டு இருக்கேன் · வெச்சிருக்கேன் · மாறிடுச்சு", "pāttu-kkiṭṭu irukk-ēṉ · vecc-irukk-ēṉ · māṟ-iṭuccu", "進行・準備結果・変更"),
        option("பாக்கறேன் · வாங்கினேன் · போயிடுச்சு", "pākkaṟ-ēṉ · vāṅkiṉ-ēṉ · pōy-iṭuccu", "単純現在・単純過去・消失")
      ],
      answer: 0,
      feedback: "経験は பாத்திருக்கேன்、現在の準備結果は வெச்சிருக்கேன்、状態変化は ஆயிடுச்சு です。",
      rule: "日本語の『した／してある／なった』ではなく、出来事と現在の関係を読む。",
      tags: ["正解", "別の三機能", "進行混入", "単純時制混入"]
    }
  ];

  const supplement = {
    id: "supplement-f-v44",
    code: "F",
    release: "v4.4",
    navTitle: "経験・結果・変化",
    title: "した経験、残る結果、起きた変化を別々に読む",
    tamilTitle: "இந்த படம் முன்பே பாத்திருக்கேன்",
    deck: "『もうした』を一つの完了へまとめず、単純完了、経験・現在関連、準備結果、結果状態、状態変化へ分けます。",
    entryQuestion: "『見終えた』『見たことがある』『用意してある』『そうなった』は、どこが違う？",
    prerequisites: [11, 12, 18],
    returnToLessons: [11, 12, 18],
    targets: ["V-ட்டேன்／V-ட்டிருக்கேன்", "V-இ வெச்சேன்／வெச்சிருக்கேன்", "V-ந்து இருக்கு", "ஆயிடுச்சு／போயிடுச்சு"],
    criticalPoints: [
      "<span class=\"ta-inline\" lang=\"ta\">பாத்துட்டேன் / பாத்திருக்கேன்</span> <span class=\"roman-inline\">(pāttuṭṭ-ēṉ / pātt-irukk-ēṉ)</span> は、単純完了と経験・現在関連。",
      "<span class=\"ta-inline\" lang=\"ta\">வெச்சேன் / வெச்சிருக்கேன்</span> <span class=\"roman-inline\">(vecc-ēṉ / vecc-irukk-ēṉ)</span> は、準備した出来事と現在も残る準備結果。",
      "<span class=\"ta-inline\" lang=\"ta\">திறந்திருக்கு / ஆயிடுச்சு / போயிடுச்சு</span> は、結果状態・状態変化・消失変化を分ける。"
    ],
    heroExample: examples[1],
    examples,
    readSections: Object.freeze(readSections),
    formConfig: {
      mode: "grammar",
      title: "完了・経験・準備結果・変化の対照表",
      intro: "出来事が終わっただけか、現在へつながるか、結果を意図的に残したか、状態そのものが変わったかを読み分けます。",
      patterns: Object.freeze(patterns),
      checkpoint: "பாத்துட்டேன் / பாத்திருக்கேன்、வெச்சேன் / வெச்சிருக்கேன்、திறந்திருக்கு / ஆயிடுச்சு を即答する。"
    },
    quiz: Object.freeze(quiz),
    legacyRefs: ["grammar-v28.js:36 example36-08", "grammar-v28.js:38 examples38-10..38-12", "lesson12-v36.js:l12-04,l12-07"],
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
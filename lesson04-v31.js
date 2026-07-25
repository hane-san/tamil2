(() => {
  "use strict";

  const { entry: E, confidence: C } = window.TAMIL_V30;
  const SPACE_SOURCES = [
    "TAMIL-INTEGRATED-v2.0-rc.1 §§23-25,31-32",
    "SCHIFFMAN-SPOKEN-TAMIL §§2.2.4-2.2.6",
    "SCHIFFMAN-CASE-SYSTEM",
    "CMC-COMMON-SPOKEN-TAMIL Lessons 19,27-28"
  ];

  const examples = [
    E({
      id: "l4-01",
      targetTamil: "வீட்டுல இருக்கேன்.",
      structuredRoman: "vīṭṭ-ula irukk-ēṉ.",
      underlyingAnalysis: "vīṭu + SST.LOC → vīṭṭula",
      pronunciationRoman: "vīṭṭula irukkēn.",
      pronunciationVariants: ["vīṭṭule irukkēn."],
      katakana: "ヴィーットゥラ イルッケーン。",
      kanaVariants: ["ヴィーットゥレ イルッケーン。"],
      meaningJa: "私は家にいます。",
      literalJapanese: "家・場所＋いる・私",
      morphemes: [
        { surfaceTamil: "வீட்டுல", analysis: "வீட்ட- + -உல", gloss: "家に／家で" },
        { surfaceTamil: "இருக்கேன்", analysis: "இருக்க- + -ஏன்", gloss: "います" }
      ],
      grammarNote: "無生物の場所を表すSST形。静止・所在の矢印を作る。",
      vocabulary: ["வீடு", "இருக்கேன்"],
      audioGroup: "lesson04-core",
      sourceRefs: SPACE_SOURCES,
      confidence: C("B", "B", "C", "B"),
      featured: true
    }),
    E({
      id: "l4-02",
      targetTamil: "வீட்டுக்கு போறேன்.",
      structuredRoman: "vīṭṭ-ukku pōṟ-ēṉ.",
      underlyingAnalysis: "vīṭu + -ukku",
      pronunciationRoman: "vīṭṭukku pōrēn.",
      katakana: "ヴィーットゥック ポーレーン。",
      meaningJa: "私は家へ行きます。",
      literalJapanese: "家・到達＋行く・私",
      morphemes: [
        { surfaceTamil: "வீட்டுக்கு", analysis: "வீட்ட- + -உக்கு", gloss: "家へ" },
        { surfaceTamil: "போறேன்", gloss: "行きます" }
      ],
      grammarNote: "同じ வீட்ட- に与格が続き、移動の到達点を示す。",
      vocabulary: ["வீடு", "போறேன்"],
      audioGroup: "lesson04-core",
      sourceRefs: SPACE_SOURCES,
      confidence: C("B", "B", "C", "B"),
      featured: true
    }),
    E({
      id: "l4-03",
      targetTamil: "வீட்டுலேருந்து வர்றேன்.",
      structuredRoman: "vīṭṭ-ulēruntu varṟ-ēṉ.",
      underlyingAnalysis: "vīṭu + SST.LOC + iruntu → vīṭṭulēruntu",
      pronunciationRoman: "vīṭṭulērundu varrēn.",
      katakana: "ヴィーットゥレールンドゥ ヴァッレーン。",
      meaningJa: "私は家から来ます。",
      literalJapanese: "家・場所・そこから＋来る・私",
      morphemes: [
        { surfaceTamil: "வீட்டுலேருந்து", analysis: "வீட்ட- + -உலேருந்து", gloss: "家から" },
        { surfaceTamil: "வர்றேன்", analysis: "வர்- + -ற்- + -ஏன்", gloss: "来ます" }
      ],
      grammarNote: "場所形を起点へ変える -லேருந்து 系。表面形を一語として保存する。",
      vocabulary: ["வீடு", "வர்றேன்"],
      audioGroup: "lesson04-core",
      sourceRefs: SPACE_SOURCES,
      confidence: C("B", "B", "C", "B"),
      featured: true,
      counterparts: [
        {
          relation: "literary-counterpart",
          primaryRegister: "LT-WR",
          targetTamil: "வீட்டிலிருந்து வருகிறேன்.",
          orthographicRoman: "vīṭṭiliruntu varukiṟēṉ.",
          structuredRoman: "vīṭṭ-il-iruntu varu-kiṟ-ēṉ."
        }
      ]
    }),
    E({
      id: "l4-04",
      targetTamil: "கடைல இருக்கார்.",
      structuredRoman: "kaṭai-la irukk-ār.",
      pronunciationRoman: "kaḍaila irukkār.",
      pronunciationVariants: ["kaḍaile irukkār."],
      katakana: "カダイラ イルッカール。",
      kanaVariants: ["カダイレ イルッカール。"],
      meaningJa: "その方は店にいます。",
      literalJapanese: "店・場所＋いる・敬意",
      morphemes: [
        { surfaceTamil: "கடைல", analysis: "கடை + -ல", gloss: "店に／店で" },
        { surfaceTamil: "இருக்கார்", analysis: "இருக்க- + -ஆர்", gloss: "いらっしゃいます" }
      ],
      grammarNote: "母音で終わる கடை に口語場所形 -ல が続く。",
      vocabulary: ["கடை", "இருக்கார்"],
      audioGroup: "lesson04-bank",
      sourceRefs: SPACE_SOURCES,
      confidence: C("B", "B", "C", "B")
    }),
    E({
      id: "l4-05",
      targetTamil: "கடைக்கு போங்க.",
      structuredRoman: "kaṭai-kku pōṅka.",
      pronunciationRoman: "kaḍaikku pōṅga.",
      katakana: "カダイック ポーンガ。",
      meaningJa: "店へ行ってください。",
      literalJapanese: "店・到達＋行ってください",
      morphemes: [
        { surfaceTamil: "கடைக்கு", analysis: "கடை + -க்கு", gloss: "店へ" },
        { surfaceTamil: "போங்க", gloss: "行ってください" }
      ],
      grammarNote: "移動の行き先は与格 -க்கு 系で示す。",
      vocabulary: ["கடை", "போங்க"],
      audioGroup: "lesson04-bank",
      sourceRefs: SPACE_SOURCES,
      confidence: C("B", "B", "C", "B")
    }),
    E({
      id: "l4-06",
      targetTamil: "கடைலேருந்து வர்றேன்.",
      structuredRoman: "kaṭai-lēruntu varṟ-ēṉ.",
      pronunciationRoman: "kaḍailērundu varrēn.",
      katakana: "カダイレールンドゥ ヴァッレーン。",
      meaningJa: "私は店から来ます。",
      literalJapanese: "店・そこから＋来る・私",
      morphemes: [
        { surfaceTamil: "கடைலேருந்து", analysis: "கடை + -லேருந்து", gloss: "店から" },
        { surfaceTamil: "வர்றேன்", gloss: "来ます" }
      ],
      grammarNote: "同じ கடை を、場所・到達・起点の三方向で比較する。",
      vocabulary: ["கடை", "வர்றேன்"],
      audioGroup: "lesson04-bank",
      sourceRefs: SPACE_SOURCES,
      confidence: C("B", "B", "C", "B")
    }),
    E({
      id: "l4-07",
      targetTamil: "சென்னையில இருக்கேன்.",
      structuredRoman: "ceṉṉai-y-ila irukk-ēṉ.",
      pronunciationRoman: "sennaiyila irukkēn.",
      pronunciationVariants: ["sennaiyile irukkēn."],
      katakana: "センナイイラ イルッケーン。",
      kanaVariants: ["センナイイレ イルッケーン。"],
      japaneseEstablishedName: "チェンナイ",
      meaningJa: "私はチェンナイにいます。",
      literalJapanese: "チェンナイ・場所＋いる・私",
      morphemes: [
        { surfaceTamil: "சென்னையில", analysis: "சென்னை + -ய்- + -இல", gloss: "チェンナイに" },
        { surfaceTamil: "இருக்கேன்", gloss: "います" }
      ],
      grammarNote: "学習カナはTamil発音層から作り、日本語慣用名『チェンナイ』は別フィールドに保持する。",
      vocabulary: ["சென்னை", "இருக்கேன்"],
      audioGroup: "lesson04-bank",
      sourceRefs: SPACE_SOURCES,
      confidence: C("B", "B", "C", "B")
    }),
    E({
      id: "l4-08",
      targetTamil: "சென்னைக்கு போறேன்.",
      structuredRoman: "ceṉṉai-kku pōṟ-ēṉ.",
      pronunciationRoman: "sennaikku pōrēn.",
      katakana: "センナイック ポーレーン。",
      japaneseEstablishedName: "チェンナイ",
      meaningJa: "私はチェンナイへ行きます。",
      literalJapanese: "チェンナイ・到達＋行く・私",
      morphemes: [
        { surfaceTamil: "சென்னைக்கு", analysis: "சென்னை + -க்கு", gloss: "チェンナイへ" },
        { surfaceTamil: "போறேன்", gloss: "行きます" }
      ],
      grammarNote: "地名にも到達点の -க்கு 系を付ける。",
      vocabulary: ["சென்னை", "போறேன்"],
      audioGroup: "lesson04-bank",
      sourceRefs: SPACE_SOURCES,
      confidence: C("B", "B", "C", "B")
    }),
    E({
      id: "l4-09",
      targetTamil: "சென்னையிலேருந்து வர்றேன்.",
      structuredRoman: "ceṉṉai-y-ilēruntu varṟ-ēṉ.",
      pronunciationRoman: "sennaiyilērundu varrēn.",
      katakana: "センナイイレールンドゥ ヴァッレーン。",
      japaneseEstablishedName: "チェンナイ",
      meaningJa: "私はチェンナイから来ます。",
      literalJapanese: "チェンナイ・そこから＋来る・私",
      morphemes: [
        { surfaceTamil: "சென்னையிலேருந்து", analysis: "சென்னை + -ய்- + -இலேருந்து", gloss: "チェンナイから" },
        { surfaceTamil: "வர்றேன்", gloss: "来ます" }
      ],
      grammarNote: "地名の起点形。場所形に由来する部分を保って読む。",
      vocabulary: ["சென்னை", "வர்றேன்"],
      audioGroup: "lesson04-bank",
      sourceRefs: SPACE_SOURCES,
      confidence: C("B", "B", "C", "B")
    }),
    E({
      id: "l4-10",
      targetTamil: "ரவிக்கிட்ட டிக்கெட் இருக்கு.",
      structuredRoman: "ravi-kkiṭṭa ṭikkeṭ irukku.",
      pronunciationRoman: "ravikkiṭṭa ṭikkeṭ irukku.",
      katakana: "ラヴィッキッタ ティッケット イルック。",
      meaningJa: "ラヴィは切符を持っています。",
      literalJapanese: "ラヴィ・人の所／手元＋切符＋ある",
      morphemes: [
        { surfaceTamil: "ரவிக்கிட்ட", analysis: "ரவி + -க்கிட்ட", gloss: "ラヴィの所・手元に" },
        { surfaceTamil: "டிக்கெட்", gloss: "切符" },
        { surfaceTamil: "இருக்கு", gloss: "ある" }
      ],
      grammarNote: "人の所在・手元・所持には -கிட்ட 系を使う。無生物場所の -ல と区別する。",
      vocabulary: ["ரவி", "கிட்ட", "டிக்கெட்", "இருக்கு"],
      audioGroup: "lesson04-bank",
      sourceRefs: SPACE_SOURCES,
      confidence: C("B", "B", "C", "B")
    })
  ];

  const patterns = [
    E({
      id: "l4-form-vittula",
      targetTamil: "வீட்டுல",
      structuredRoman: "vīṭṭ-ula",
      pronunciationRoman: "vīṭṭula",
      pronunciationVariants: ["vīṭṭule"],
      katakana: "ヴィーットゥラ",
      kanaVariants: ["ヴィーットゥレ"],
      meaningJa: "家に／家で",
      literalJapanese: "家・場所",
      grammarNote: "静止・所在を示すSST場所形。",
      vocabulary: ["வீடு"],
      audioGroup: "lesson04-forms",
      sourceRefs: SPACE_SOURCES,
      confidence: C("B", "B", "C", "B"),
      kind: "場所",
      group: "வீடு の三方向",
      note: "どこにいる・あるか。"
    }),
    E({
      id: "l4-form-vittukku",
      targetTamil: "வீட்டுக்கு",
      structuredRoman: "vīṭṭ-ukku",
      pronunciationRoman: "vīṭṭukku",
      katakana: "ヴィーットゥック",
      meaningJa: "家へ",
      literalJapanese: "家・到達",
      grammarNote: "移動の到達点。",
      vocabulary: ["வீடு"],
      audioGroup: "lesson04-forms",
      sourceRefs: SPACE_SOURCES,
      confidence: C("B", "B", "C", "B"),
      kind: "方向",
      group: "வீடு の三方向",
      note: "どこへ向かうか。"
    }),
    E({
      id: "l4-form-vittuleruntu",
      targetTamil: "வீட்டுலேருந்து",
      structuredRoman: "vīṭṭ-ulēruntu",
      pronunciationRoman: "vīṭṭulērundu",
      katakana: "ヴィーットゥレールンドゥ",
      meaningJa: "家から",
      literalJapanese: "家・場所・そこから",
      grammarNote: "移動の起点。",
      vocabulary: ["வீடு"],
      audioGroup: "lesson04-forms",
      sourceRefs: SPACE_SOURCES,
      confidence: C("B", "B", "C", "B"),
      kind: "起点",
      group: "வீடு の三方向",
      note: "どこから離れるか。"
    }),
    E({
      id: "l4-form-kataila",
      targetTamil: "கடைல",
      structuredRoman: "kaṭai-la",
      pronunciationRoman: "kaḍaila",
      pronunciationVariants: ["kaḍaile"],
      katakana: "カダイラ",
      kanaVariants: ["カダイレ"],
      meaningJa: "店に／店で",
      literalJapanese: "店・場所",
      grammarNote: "母音終わりの名詞の場所形。",
      vocabulary: ["கடை"],
      audioGroup: "lesson04-forms",
      sourceRefs: SPACE_SOURCES,
      confidence: C("B", "B", "C", "B"),
      kind: "場所",
      group: "கடை の三方向",
      note: "店という場所に静止。"
    }),
    E({
      id: "l4-form-kataikku",
      targetTamil: "கடைக்கு",
      structuredRoman: "kaṭai-kku",
      pronunciationRoman: "kaḍaikku",
      katakana: "カダイック",
      meaningJa: "店へ",
      literalJapanese: "店・到達",
      grammarNote: "店を移動の到達点にする。",
      vocabulary: ["கடை"],
      audioGroup: "lesson04-forms",
      sourceRefs: SPACE_SOURCES,
      confidence: C("B", "B", "C", "B"),
      kind: "方向",
      group: "கடை の三方向",
      note: "行く・来る等の行き先。"
    }),
    E({
      id: "l4-form-kataileruntu",
      targetTamil: "கடைலேருந்து",
      structuredRoman: "kaṭai-lēruntu",
      pronunciationRoman: "kaḍailērundu",
      katakana: "カダイレールンドゥ",
      meaningJa: "店から",
      literalJapanese: "店・そこから",
      grammarNote: "店を移動の起点にする。",
      vocabulary: ["கடை"],
      audioGroup: "lesson04-forms",
      sourceRefs: SPACE_SOURCES,
      confidence: C("B", "B", "C", "B"),
      kind: "起点",
      group: "கடை の三方向",
      note: "来る・戻る等の出発地点。"
    }),
    E({
      id: "l4-form-sennaiyila",
      targetTamil: "சென்னையில",
      structuredRoman: "ceṉṉai-y-ila",
      pronunciationRoman: "sennaiyila",
      pronunciationVariants: ["sennaiyile"],
      katakana: "センナイイラ",
      kanaVariants: ["センナイイレ"],
      japaneseEstablishedName: "チェンナイ",
      meaningJa: "チェンナイに／で",
      literalJapanese: "チェンナイ・場所",
      grammarNote: "地名の場所形。",
      vocabulary: ["சென்னை"],
      audioGroup: "lesson04-forms",
      sourceRefs: SPACE_SOURCES,
      confidence: C("B", "B", "C", "B"),
      kind: "場所",
      group: "சென்னை の三方向",
      note: "学習カナと日本語慣用名を分けます。"
    }),
    E({
      id: "l4-form-sennaikku",
      targetTamil: "சென்னைக்கு",
      structuredRoman: "ceṉṉai-kku",
      pronunciationRoman: "sennaikku",
      katakana: "センナイック",
      japaneseEstablishedName: "チェンナイ",
      meaningJa: "チェンナイへ",
      literalJapanese: "チェンナイ・到達",
      grammarNote: "地名の到達形。",
      vocabulary: ["சென்னை"],
      audioGroup: "lesson04-forms",
      sourceRefs: SPACE_SOURCES,
      confidence: C("B", "B", "C", "B"),
      kind: "方向",
      group: "சென்னை の三方向",
      note: "旅行で頻出する行き先の形です。"
    }),
    E({
      id: "l4-form-sennaiyileruntu",
      targetTamil: "சென்னையிலேருந்து",
      structuredRoman: "ceṉṉai-y-ilēruntu",
      pronunciationRoman: "sennaiyilērundu",
      katakana: "センナイイレールンドゥ",
      japaneseEstablishedName: "チェンナイ",
      meaningJa: "チェンナイから",
      literalJapanese: "チェンナイ・そこから",
      grammarNote: "地名の起点形。",
      vocabulary: ["சென்னை"],
      audioGroup: "lesson04-forms",
      sourceRefs: SPACE_SOURCES,
      confidence: C("B", "B", "C", "B"),
      kind: "起点",
      group: "சென்னை の三方向",
      note: "場所を作ってから起点へ変える発想です。"
    }),
    E({
      id: "l4-form-ravikkitta",
      targetTamil: "ரவிக்கிட்ட",
      structuredRoman: "ravi-kkiṭṭa",
      pronunciationRoman: "ravikkiṭṭa",
      katakana: "ラヴィッキッタ",
      meaningJa: "ラヴィの所に／手元に／ラヴィに",
      literalJapanese: "ラヴィ・人の所／領域",
      grammarNote: "人の所在・所持・接触相手を示す。",
      vocabulary: ["ரவி", "கிட்ட"],
      audioGroup: "lesson04-forms",
      sourceRefs: SPACE_SOURCES,
      confidence: C("B", "B", "C", "B"),
      kind: "人の所",
      group: "人と物の場所を分ける",
      note: "無生物場所の -ல と同じものとして扱いません。"
    })
  ];

  window.TAMIL_LESSONS_V30 = window.TAMIL_LESSONS_V30 || [];
  window.TAMIL_LESSONS_V30.push(Object.freeze({
    id: "lesson04-location-direction-source-v31",
    number: 4,
    navTitle: "場所・方向・起点",
    title: "同じ場所を、いる・行く・来るで三方向に読む",
    tamilTitle: "இடம், திசை, தொடக்கப்புள்ளி",
    deck: "வீட்டுல／வீட்டுக்கு／வீட்டுலேருந்து を同じ地図に置きます。人の所・手元を表す -கிட்ட も、無生物の -ல と対比します。",
    targets: ["場所 -ல", "到達 -க்கு", "起点 -லேருந்து", "人の所 -கிட்ட"],
    heroExample: examples[2],
    readSections: [
      {
        kicker: "THREE ARROWS",
        heading: "同じ名詞でも、静止・到達・起点で右端が変わる",
        paragraphs: [
          "<span class=\"ta-inline\" lang=\"ta\">வீட்டுல இருக்கேன்</span> は現在地、<span class=\"ta-inline\" lang=\"ta\">வீட்டுக்கு போறேன்</span> は行き先、<span class=\"ta-inline\" lang=\"ta\">வீட்டுலேருந்து வர்றேன்</span> は出発点です。",
          "三つとも名詞 வீடு の接続形 <strong>வீட்ட-</strong> を使います。名詞を覚え直すのではなく、右端が地図のどの矢印を作るかを読みます。"
        ],
        caseMap: {
          rows: [
            { role: "場所・静止", targetForm: "-ல / -லே 系", pronunciation: "-la / -le", kana: "-ラ／-レ", exampleTa: "வீட்டுல இருக்கேன்", exampleRoman: "vīṭṭ-ula irukk-ēṉ", cue: "どこにいる・あるか" },
            { role: "到達・方向", targetForm: "-க்கு 系", pronunciation: "-kku", kana: "-ック", exampleTa: "வீட்டுக்கு போறேன்", exampleRoman: "vīṭṭ-ukku pōṟ-ēṉ", cue: "どこへ向かうか" },
            { role: "起点", targetForm: "-லேருந்து 系", pronunciation: "-lērundu", kana: "-レールンドゥ", exampleTa: "வீட்டுலேருந்து வர்றேன்", exampleRoman: "vīṭṭ-ulēruntu varṟ-ēṉ", cue: "どこから離れるか" },
            { role: "人の所・手元", targetForm: "-கிட்ட 系", pronunciation: "-kiṭṭa", kana: "-キッタ", exampleTa: "ரவிக்கிட்ட டிக்கெட் இருக்கு", exampleRoman: "ravi-kkiṭṭa ṭikkeṭ irukku", cue: "誰のそば・手元・領域か" }
          ]
        }
      },
      {
        kicker: "SOURCE",
        heading: "起点は、場所を作ってから『そこから』へ変える",
        paragraphs: [
          "起点表現は、単なる日本語の『から』の置換ではありません。<strong>場所を表す部分＋இருந்து</strong> に由来する構造として理解すると、家・店・都市へ横展開できます。",
          "SSTの速い発話では <strong>-லேருந்து</strong> 系が現れます。文語対応形の -இலிருந்து を文字置換で口語化せず、登録済みの表面形として保持します。"
        ],
        formula: {
          label: "家から",
          slots: ["வீடு", "வீட்ட-", "-உலேருந்து", "வீட்டுலேருந்து"],
          note: "辞書形 → 接続形 → 場所から → 表面形"
        }
      },
      {
        kicker: "ANIMATE LOCATION",
        heading: "人は、単なる地図の座標ではなく『所・手元』になる",
        paragraphs: [
          "無生物の家・店・都市には -ல 系を使いますが、人のそば、手元、管理範囲、接触相手には <strong>-கிட்ட</strong> 系が中心になります。",
          "<span class=\"ta-inline\" lang=\"ta\">ரவிக்கிட்ட டிக்கெட் இருக்கு</span> は、直訳では『ラヴィの所に切符がある』です。自然な日本語では『ラヴィは切符を持っている』になります。"
        ],
        note: {
          tone: "blue",
          title: "第6課への橋",
          body: "-கிட்ட の一時的・手元の所有と、与格による広い所有・状態は、存在・所有の課で改めて比較します。"
        }
      },
      {
        kicker: "SHORT READING",
        heading: "三文で、現在地から行き先へ動かす",
        paragraphs: [
          "家を起点にしてチェンナイへ向かう移動線を、場所・起点・到達の順で読みます。",
          "<span class=\"ta-inline\" lang=\"ta\">வீட்டுல இருக்கேன்.</span><br><span class=\"ta-inline\" lang=\"ta\">வீட்டுலேருந்து வர்றேன்.</span><br><span class=\"ta-inline\" lang=\"ta\">சென்னைக்கு போறேன்.</span>"
        ],
        miniReading: {
          intro: "現在地を示し、そこを離れ、目的地へ向かいます。",
          ids: ["l4-01", "l4-03", "l4-08"]
        }
      }
    ],
    formConfig: {
      mode: "grammar",
      title: "場所・到達・起点を、同じ名詞で並べる",
      intro: "வீடு、கடை、சென்னை を三方向で反復し、人の所を表す -கிட்ட を別レーンに置きます。",
      patterns,
      checkpoint: "வீட்டுல／வீட்டுக்கு／வீட்டுலேருந்து の矢印と、ரவிக்கிட்ட が人の所・手元を示すことを説明できれば合格です。"
    },
    examples,
    quiz: [
      {
        q: "『家にいます』の場所形は？",
        options: ["வீட்டுல", "வீட்டுக்கு", "வீட்டுலேருந்து", "ரவிக்கிட்ட"],
        answer: 0,
        feedback: "静止・所在は வீட்டுல。ほかは到達、起点、人の所です。",
        tags: ["正解", "到達", "起点", "人の所"]
      },
      {
        q: "『家へ行きます』の到達点は？",
        options: ["வீட்டுக்கு", "வீட்டுல", "வீட்டுலேருந்து", "மழையால"],
        answer: 0,
        feedback: "移動の行き先は வீட்டுக்கு。場所・起点・原因と分けます。",
        tags: ["正解", "場所", "起点", "原因"]
      },
      {
        q: "『家から来ます』の起点形は？",
        options: ["வீட்டுலேருந்து", "வீட்டுல", "வீட்டுக்கு", "என்னோட"],
        answer: 0,
        feedback: "வீட்டுலேருந்து が家を出発点にします。",
        tags: ["正解", "場所", "到達", "同行／所有"]
      },
      {
        q: "人の手元・所持を表す中心形は？",
        options: ["ரவிக்கிட்ட", "கடைல", "கடைக்கு", "கையால"],
        answer: 0,
        feedback: "人のそば・手元・接触相手には -கிட்ட 系を使います。",
        tags: ["正解", "無生物場所", "到達", "手段"]
      },
      {
        q: "சென்னைக்கு போறேன் の சென்னைக்கு は何を表す？",
        options: ["チェンナイという到達点", "チェンナイでの静止", "チェンナイからの起点", "チェンナイの所有"],
        answer: 0,
        feedback: "-க்கு 系が移動の到達点を示します。",
        tags: ["正解", "場所", "起点", "所有"]
      }
    ]
  }));
})();

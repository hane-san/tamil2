(() => {
  "use strict";

  const { entry: E, confidence: C } = window.TAMIL_V30;
  const FORM_SOURCES = [
    "TAMIL-INTEGRATED-v2.0-rc.1 §§10-15,25",
    "SCHIFFMAN-SPOKEN-TAMIL §§2.2-2.3"
  ];

  const examples = [
    E({
      id: "l1-01",
      targetTamil: "இது வீடு.",
      structuredRoman: "itu vīṭu.",
      pronunciationRoman: "idu vīḍu.",
      katakana: "イドゥ ヴィードゥ。",
      meaningJa: "これは家です。",
      literalJapanese: "これ＋家",
      morphemes: [
        { surfaceTamil: "இது", gloss: "これ" },
        { surfaceTamil: "வீடு", gloss: "家" }
      ],
      grammarNote: "名詞述語の現在文では、英語の be に当たる語を置かない基本形。",
      vocabulary: ["இது", "வீடு"],
      audioGroup: "lesson01-core",
      sourceRefs: FORM_SOURCES,
      confidence: C("B", "B", "C", "B"),
      featured: true
    }),
    E({
      id: "l1-02",
      targetTamil: "இது மரம்.",
      structuredRoman: "itu maram.",
      pronunciationRoman: "idu maram.",
      katakana: "イドゥ マラム。",
      meaningJa: "これは木です。",
      literalJapanese: "これ＋木",
      morphemes: [
        { surfaceTamil: "இது", gloss: "これ" },
        { surfaceTamil: "மரம்", gloss: "木" }
      ],
      grammarNote: "辞書形の語末 -am は、格語尾が付くと別の接続形になる。",
      vocabulary: ["இது", "மரம்"],
      audioGroup: "lesson01-core",
      sourceRefs: FORM_SOURCES,
      confidence: C("B", "B", "C", "B")
    }),
    E({
      id: "l1-03",
      targetTamil: "வீட்டுல தண்ணி இருக்கு.",
      structuredRoman: "vīṭṭ-ula taṇṇi irukku.",
      underlyingAnalysis: "vīṭu + SST.LOC → vīṭṭula; registered variants -ula/-le",
      pronunciationRoman: "vīṭṭula taṇṇi irukku.",
      pronunciationVariants: ["vīṭṭule taṇṇi irukku."],
      katakana: "ヴィーットゥラ タンニ イルック。",
      kanaVariants: ["ヴィーットゥレ タンニ イルック。"],
      meaningJa: "家に水があります。",
      literalJapanese: "家・場所＋水＋ある",
      morphemes: [
        { surfaceTamil: "வீட்டுல", analysis: "வீட்ட- + -உல", gloss: "家で／家に" },
        { surfaceTamil: "தண்ணி", gloss: "水" },
        { surfaceTamil: "இருக்கு", gloss: "ある" }
      ],
      grammarNote: "வீடு は場所形の前で வீட்ட- という接続形を見せる。無生物場所の -ula/-le 差は変種として分ける。",
      vocabulary: ["வீடு", "தண்ணி", "இருக்கு"],
      audioGroup: "lesson01-core",
      sourceRefs: FORM_SOURCES,
      confidence: C("B", "B", "C", "B"),
      counterparts: [
        {
          relation: "literary-counterpart",
          primaryRegister: "LT-WR",
          targetTamil: "வீட்டில் தண்ணீர் இருக்கிறது.",
          orthographicRoman: "vīṭṭil taṇṇīr irukkiṟatu.",
          structuredRoman: "vīṭṭ-il taṇṇīr irukkiṟ-atu."
        }
      ],
      featured: true
    }),
    E({
      id: "l1-04",
      targetTamil: "வீட்டுக்கு போறேன்.",
      structuredRoman: "vīṭṭ-ukku pōṟ-ēṉ.",
      underlyingAnalysis: "vīṭu + -ukku → vīṭṭukku",
      pronunciationRoman: "vīṭṭukku pōrēn.",
      katakana: "ヴィーットゥック ポーレーン。",
      meaningJa: "家へ行きます。",
      literalJapanese: "家・到達＋行く・私",
      morphemes: [
        { surfaceTamil: "வீட்டுக்கு", analysis: "வீட்ட- + -உக்கு", gloss: "家へ" },
        { surfaceTamil: "போறேன்", analysis: "போ- + -ற்- + -ஏன்", gloss: "行く・私" }
      ],
      grammarNote: "到達点を表す与格の前でも வீட்ட- が現れる。",
      vocabulary: ["வீடு", "போறேன்"],
      audioGroup: "lesson01-core",
      sourceRefs: FORM_SOURCES,
      confidence: C("B", "B", "C", "B"),
      counterparts: [
        {
          relation: "literary-counterpart",
          primaryRegister: "LT-WR",
          targetTamil: "வீட்டுக்குப் போகிறேன்.",
          orthographicRoman: "vīṭṭukkup pōkiṟēṉ.",
          structuredRoman: "vīṭṭ-ukku-p pō-kiṟ-ēṉ."
        }
      ],
      featured: true
    }),
    E({
      id: "l1-05",
      targetTamil: "மரத்துல பறவை இருக்கு.",
      structuredRoman: "maratt-ula paṟavai irukku.",
      underlyingAnalysis: "maram + -le → marattula",
      pronunciationRoman: "marattula paravai irukku.",
      pronunciationVariants: ["marattule paravai irukku."],
      katakana: "マラットゥラ パラヴァイ イルック。",
      kanaVariants: ["マラットゥレ パラヴァイ イルック。"],
      meaningJa: "木に鳥がいます。",
      literalJapanese: "木・場所＋鳥＋いる",
      morphemes: [
        { surfaceTamil: "மரத்துல", analysis: "மரத்த- + -உல", gloss: "木に" },
        { surfaceTamil: "பறவை", gloss: "鳥" },
        { surfaceTamil: "இருக்கு", gloss: "いる" }
      ],
      grammarNote: "மரம் は格語尾の前で மரத்த- になる代表的な -am 名詞。",
      vocabulary: ["மரம்", "பறவை", "இருக்கு"],
      audioGroup: "lesson01-bank",
      sourceRefs: FORM_SOURCES,
      confidence: C("B", "B", "C", "B")
    }),
    E({
      id: "l1-06",
      targetTamil: "மரத்துக்கு பக்கத்துல வீடு இருக்கு.",
      structuredRoman: "maratt-ukku pakkatt-ula vīṭu irukku.",
      pronunciationRoman: "marattukku pakkattula vīḍu irukku.",
      pronunciationVariants: ["marattukku pakkattule vīḍu irukku."],
      katakana: "マラットゥック パッカットゥラ ヴィードゥ イルック。",
      kanaVariants: ["マラットゥック パッカットゥレ ヴィードゥ イルック。"],
      meaningJa: "木の近くに家があります。",
      literalJapanese: "木・到達＋近く・場所＋家＋ある",
      morphemes: [
        { surfaceTamil: "மரத்துக்கு", analysis: "மரத்த- + -உக்கு", gloss: "木に／木の方へ" },
        { surfaceTamil: "பக்கத்துல", analysis: "பக்கத்த- + -உல", gloss: "近くに" },
        { surfaceTamil: "வீடு", gloss: "家" },
        { surfaceTamil: "இருக்கு", gloss: "ある" }
      ],
      grammarNote: "後置詞に近い பக்கம்「側」も格形を取り、場所関係を組み立てる。",
      vocabulary: ["மரம்", "பக்கம்", "வீடு", "இருக்கு"],
      audioGroup: "lesson01-bank",
      sourceRefs: FORM_SOURCES,
      confidence: C("B", "B", "C", "B")
    }),
    E({
      id: "l1-07",
      targetTamil: "அது புத்தகம்.",
      structuredRoman: "atu puttakam.",
      pronunciationRoman: "adu puttagam.",
      katakana: "アドゥ プッタガム。",
      meaningJa: "それは本です。",
      literalJapanese: "それ＋本",
      morphemes: [
        { surfaceTamil: "அது", gloss: "それ" },
        { surfaceTamil: "புத்தகம்", gloss: "本" }
      ],
      grammarNote: "厳密転写は atu puttakam、発音表示は adu puttagam。文字層へ有声化を混ぜない。",
      vocabulary: ["அது", "புத்தகம்"],
      audioGroup: "lesson01-bank",
      sourceRefs: FORM_SOURCES,
      confidence: C("B", "B", "C", "B")
    }),
    E({
      id: "l1-08",
      targetTamil: "புத்தகம் மேசைல இருக்கு.",
      structuredRoman: "puttakam mēcai-la irukku.",
      pronunciationRoman: "puttagam mēsaila irukku.",
      pronunciationVariants: ["puttagam mēsaile irukku."],
      katakana: "プッタガム メーサイラ イルック。",
      kanaVariants: ["プッタガム メーサイレ イルック。"],
      meaningJa: "本は机の上にあります。",
      literalJapanese: "本＋机・場所＋ある",
      morphemes: [
        { surfaceTamil: "புத்தகம்", gloss: "本" },
        { surfaceTamil: "மேசைல", analysis: "மேசை + -ல", gloss: "机で／机に" },
        { surfaceTamil: "இருக்கு", gloss: "ある" }
      ],
      grammarNote: "母音で終わる語にも口語の場所標識 -ல が付く。日本語訳は場面に合わせて「机の上に」とする。",
      vocabulary: ["புத்தகம்", "மேசை", "இருக்கு"],
      audioGroup: "lesson01-bank",
      sourceRefs: FORM_SOURCES,
      confidence: C("B", "B", "C", "B")
    }),
    E({
      id: "l1-09",
      targetTamil: "ரெண்டு புத்தகம் இருக்கு.",
      structuredRoman: "reṇṭu puttakam irukku.",
      pronunciationRoman: "reṇḍu puttagam irukku.",
      katakana: "レンドゥ プッタガム イルック。",
      meaningJa: "本が2冊あります。",
      literalJapanese: "二＋本＋ある",
      morphemes: [
        { surfaceTamil: "ரெண்டு", gloss: "二つ" },
        { surfaceTamil: "புத்தகம்", gloss: "本" },
        { surfaceTamil: "இருக்கு", gloss: "ある" }
      ],
      grammarNote: "無生物名詞は数詞が複数性を示すと、名詞を単数形のまま置けることが多い。",
      vocabulary: ["ரெண்டு", "புத்தகம்", "இருக்கு"],
      audioGroup: "lesson01-bank",
      sourceRefs: [
        ...FORM_SOURCES,
        "CMC-COMMON-SPOKEN-TAMIL §3.1"
      ],
      confidence: C("B", "B", "C", "B")
    }),
    E({
      id: "l1-10",
      targetTamil: "இந்த வீடு பெரிசு.",
      structuredRoman: "inta vīṭu pericu.",
      pronunciationRoman: "inda vīḍu perisu.",
      katakana: "インダ ヴィードゥ ペリス。",
      meaningJa: "この家は大きいです。",
      literalJapanese: "この＋家＋大きい",
      morphemes: [
        { surfaceTamil: "இந்த", gloss: "この" },
        { surfaceTamil: "வீடு", gloss: "家" },
        { surfaceTamil: "பெரிசு", gloss: "大きい" }
      ],
      grammarNote: "SSTの名詞・形容述語では、現在の「です」に当たる語を置かない基本形がある。",
      vocabulary: ["இந்த", "வீடு", "பெரிசு"],
      audioGroup: "lesson01-bank",
      sourceRefs: FORM_SOURCES,
      confidence: C("B", "B", "C", "B")
    })
  ];

  const patterns = [
    E({
      id: "l1-form-vitu",
      targetTamil: "வீடு",
      structuredRoman: "vīṭu",
      pronunciationRoman: "vīḍu",
      katakana: "ヴィードゥ",
      meaningJa: "家（辞書形）",
      literalJapanese: "家",
      grammarNote: "語尾なしの基本形。",
      vocabulary: ["வீடு"],
      audioGroup: "lesson01-forms",
      sourceRefs: FORM_SOURCES,
      confidence: C("B", "B", "C", "B"),
      kind: "辞書形",
      group: "வீடு 型",
      note: "厳密転写 vīṭu と発音 vīḍu を分けます。"
    }),
    E({
      id: "l1-form-vittukku",
      targetTamil: "வீட்டுக்கு",
      structuredRoman: "vīṭṭ-ukku",
      underlyingAnalysis: "vīṭu + -ukku",
      pronunciationRoman: "vīṭṭukku",
      katakana: "ヴィーットゥック",
      meaningJa: "家へ／家に",
      literalJapanese: "家・与格",
      grammarNote: "வீடு → வீட்ட- + -உக்கு。",
      vocabulary: ["வீடு"],
      audioGroup: "lesson01-forms",
      sourceRefs: FORM_SOURCES,
      confidence: C("B", "B", "C", "B"),
      kind: "到達",
      group: "வீடு 型",
      note: "辞書形へそのまま -ukku を貼らず、接続形を確認します。"
    }),
    E({
      id: "l1-form-vittula",
      targetTamil: "வீட்டுல",
      structuredRoman: "vīṭṭ-ula",
      underlyingAnalysis: "vīṭu + SST.LOC",
      pronunciationRoman: "vīṭṭula",
      pronunciationVariants: ["vīṭṭule"],
      katakana: "ヴィーットゥラ",
      kanaVariants: ["ヴィーットゥレ"],
      meaningJa: "家で／家に",
      literalJapanese: "家・場所",
      grammarNote: "வீடு → வீட்ட- + SST場所形。",
      vocabulary: ["வீடு"],
      audioGroup: "lesson01-forms",
      sourceRefs: FORM_SOURCES,
      confidence: C("B", "B", "C", "B"),
      kind: "場所",
      group: "வீடு 型",
      note: "無生物の場所を示す中心形です。"
    }),
    E({
      id: "l1-form-maram",
      targetTamil: "மரம்",
      structuredRoman: "maram",
      pronunciationRoman: "maram",
      katakana: "マラム",
      meaningJa: "木（辞書形）",
      literalJapanese: "木",
      grammarNote: "-am で終わる代表名詞。",
      vocabulary: ["மரம்"],
      audioGroup: "lesson01-forms",
      sourceRefs: FORM_SOURCES,
      confidence: C("B", "B", "C", "B"),
      kind: "辞書形",
      group: "மரம் 型",
      note: "格語尾の前で மரத்த- が現れます。"
    }),
    E({
      id: "l1-form-marattukku",
      targetTamil: "மரத்துக்கு",
      structuredRoman: "maratt-ukku",
      underlyingAnalysis: "maram + -ukku",
      pronunciationRoman: "marattukku",
      katakana: "マラットゥック",
      meaningJa: "木へ／木に",
      literalJapanese: "木・与格",
      grammarNote: "மரம் → மரத்த- + -உக்கு。",
      vocabulary: ["மரம்"],
      audioGroup: "lesson01-forms",
      sourceRefs: FORM_SOURCES,
      confidence: C("B", "B", "C", "B"),
      kind: "到達",
      group: "மரம் 型",
      note: "-am が消え、-tt- を含む接続形になります。"
    }),
    E({
      id: "l1-form-marattula",
      targetTamil: "மரத்துல",
      structuredRoman: "maratt-ula",
      underlyingAnalysis: "maram + -le",
      pronunciationRoman: "marattula",
      pronunciationVariants: ["marattule"],
      katakana: "マラットゥラ",
      kanaVariants: ["マラットゥレ"],
      meaningJa: "木で／木に",
      literalJapanese: "木・場所",
      grammarNote: "மரம் → மரத்த- + SST場所形。",
      vocabulary: ["மரம்"],
      audioGroup: "lesson01-forms",
      sourceRefs: FORM_SOURCES,
      confidence: C("B", "B", "C", "B"),
      kind: "場所",
      group: "மரம் 型",
      note: "接続形は同じで、右端の格が役割を決めます。"
    }),
    E({
      id: "l1-form-puttakam",
      targetTamil: "புத்தகம்",
      structuredRoman: "puttakam",
      pronunciationRoman: "puttagam",
      katakana: "プッタガム",
      meaningJa: "本",
      literalJapanese: "本",
      grammarNote: "厳密転写の k と発音層の g を混ぜない。",
      vocabulary: ["புத்தகம்"],
      audioGroup: "lesson01-forms",
      sourceRefs: FORM_SOURCES,
      confidence: C("B", "B", "C", "B"),
      kind: "音の層",
      group: "層を分ける",
      note: "puttakam（綴り）／puttagam（発音）。"
    }),
    E({
      id: "l1-form-two-books",
      targetTamil: "ரெண்டு புத்தகம்",
      structuredRoman: "reṇṭu puttakam",
      pronunciationRoman: "reṇḍu puttagam",
      katakana: "レンドゥ プッタガム",
      meaningJa: "本を2冊",
      literalJapanese: "二＋本",
      grammarNote: "数詞が複数性を担う無生物名詞句。",
      vocabulary: ["ரெண்டு", "புத்தகம்"],
      audioGroup: "lesson01-forms",
      sourceRefs: [
        ...FORM_SOURCES,
        "CMC-COMMON-SPOKEN-TAMIL §3.1"
      ],
      confidence: C("B", "B", "C", "B"),
      kind: "数＋名詞",
      group: "複数の見え方",
      note: "無生物では複数接尾辞を毎回付けるとは限りません。"
    })
  ];

  window.TAMIL_LESSONS_V30 = window.TAMIL_LESSONS_V30 || [];
  window.TAMIL_LESSONS_V30.push(Object.freeze({
    id: "lesson01-noun-shapes-v30",
    number: 1,
    navTitle: "名詞の形",
    title: "名詞は、語尾の前で姿を変える",
    tamilTitle: "பெயர்ச்சொல்லின் வடிவம்",
    deck: "まず名詞そのものを見て、次に格語尾へつなぐ接続形を見ます。வீடு→வீட்ட-、மரம்→மரத்த- を軸に、綴り・構造・発音を分けます。",
    targets: ["辞書形", "斜格語幹", "無生物の数", "文字転写と発音"],
    heroExample: examples[2],
    readSections: [
      {
        kicker: "NOUN FIRST",
        heading: "最初に覚えるのは、名詞の辞書形",
        paragraphs: [
          "<span class=\"ta-inline\" lang=\"ta\">வீடு</span>「家」、<span class=\"ta-inline\" lang=\"ta\">மரம்</span>「木」、<span class=\"ta-inline\" lang=\"ta\">புத்தகம்</span>「本」のような形が出発点です。SSTの現在の名詞文では、<span class=\"ta-inline\" lang=\"ta\">இது வீடு</span>「これは家」のように、英語の be に当たる語を置かない基本形があります。",
          "厳密文字転写は綴りを保存します。<strong>வீடு = vīṭu</strong>、<strong>புத்தகம் = puttakam</strong>です。実用発音の <strong>vīḍu / puttagam</strong> は別の発音行に置きます。"
        ],
        formula: {
          label: "同じ語を三層で見る",
          slots: ["வீடு", "vīṭu", "vīḍu", "ヴィードゥ"],
          note: "タミル文字 → 厳密文字転写 → 発音ローマ字 → 学習カナ"
        }
      },
      {
        kicker: "OBLIQUE STEM",
        heading: "格語尾の前では、接続用の形を確かめる",
        paragraphs: [
          "格語尾を辞書形へ機械的に貼るとは限りません。<span class=\"ta-inline\" lang=\"ta\">வீடு</span> は <strong>வீட்ட- vīṭṭ-</strong>、<span class=\"ta-inline\" lang=\"ta\">மரம்</span> は <strong>மரத்த- maratt-</strong> を経て、<span class=\"ta-inline\" lang=\"ta\">வீட்டுக்கு / வீட்டுல / மரத்துக்கு / மரத்துல</span> になります。",
          "画面の「構造」行は、実際の表面形を壊さない位置へだけハイフンを置きます。語源や基底形の説明は別欄で扱い、表面にない文字を構造表示へ足しません。"
        ],
        formula: {
          label: "右端から役割を読む",
          slots: ["வீடு", "வீட்ட-", "-உக்கு", "வீட்டுக்கு"],
          note: "辞書形 → 接続形 → 到達・受け手の格 → 表面形"
        }
      },
      {
        kicker: "NUMBER",
        heading: "無生物の複数は、数詞だけで見えることがある",
        paragraphs: [
          "<span class=\"ta-inline\" lang=\"ta\">ரெண்டு புத்தகம்</span>「本を2冊」のように、無生物名詞は数詞が複数性を十分に示すと、名詞を単数形のまま置けます。複数接尾辞を日本語の「たち」のように毎回追加しません。",
          "SSTの複数形には <strong>-ங்க(ள்) -ṅka(ḷ)</strong> 系もありますが、語の種類、強調、格語尾の有無で形が変わります。第1課では「数詞があれば無標識も自然」という読み方を先に固めます。"
        ],
        note: {
          tone: "blue",
          title: "ここでの安全な判断",
          body: "辞書形を覚える → 右に語尾が来たら接続形を確認する → 数がある無生物は複数接尾辞を自動追加しない、の順で見ます。"
        }
      }
    ],
    formConfig: {
      mode: "grammar",
      title: "辞書形・接続形・格形を並べる",
      intro: "同じ名詞を、単独・到達・場所で比べます。発音の有声化は発音行だけに置き、構造行は文字対立を保ちます。",
      patterns,
      checkpoint: "வீடு→வீட்ட-、மரம்→மரத்த- を説明でき、vīṭu と vīḍu を同じ欄へ混ぜなければ合格です。"
    },
    examples,
    quiz: [
      {
        q: "வீடு「家」を到達点にするとき、この課で確認した形は？",
        options: ["வீட்டுக்கு", "வீட்டுல", "மரத்துக்கு", "வீடு"],
        answer: 0,
        feedback: "வீடு は接続形 வீட்ட- を取り、到達・受け手の -உக்கு が続いて வீட்டுக்கு になります。",
        tags: ["正解", "場所形", "別の名詞", "無標識"]
      },
      {
        q: "மரம்「木」を場所として示す形は？",
        options: ["மரத்துல", "மரத்துக்கு", "வீட்டுல", "மரம்"],
        answer: 0,
        feedback: "மரம்→மரத்த- の接続形に、SSTの場所形が続きます。",
        tags: ["正解", "到達形", "別の名詞", "無標識"]
      },
      {
        q: "ரெண்டு புத்தகம் で புத்தகம் が単数形のまま置ける中心理由は？",
        options: ["数詞が無生物名詞の複数性を示すから", "場所格だから", "人を表すから", "文語だけの規則だから"],
        answer: 0,
        feedback: "無生物では数詞が複数性を担い、名詞に複数接尾辞を付けない形がよく現れます。",
        tags: ["正解", "格との混同", "有生性の逆転", "レジスターの誤認"]
      },
      {
        q: "இது の厳密文字転写はどれ？",
        options: ["itu", "idu", "inta", "atu"],
        answer: 0,
        feedback: "厳密転写は文字 த を t として保存するので itu。idu は発音層です。",
        tags: ["正解", "発音層との混同", "இந்தとの混同", "அதுとの混同"]
      },
      {
        q: "வீடு の ட と実際の有声化を正しく分業した組合せは？",
        options: ["厳密 vīṭu／発音 vīḍu", "厳密 vīḍu／発音 vīṭu", "両方 vīḍu", "両方 vīṭu"],
        answer: 0,
        feedback: "厳密転写は文字を、発音ローマ字は対象発音を示します。一つの roman 欄へ統合しません。",
        tags: ["正解", "層の反転", "発音への統合", "綴りへの統合"]
      }
    ]
  }));
})();

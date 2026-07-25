(() => {
  "use strict";

  const { entry: E, confidence: C } = window.TAMIL_V30;
  const CASE_SOURCES = [
    "TAMIL-INTEGRATED-v2.0-rc.1 §§10-15,25,31",
    "SCHIFFMAN-SPOKEN-TAMIL §§2.2-2.3",
    "SCHIFFMAN-CASE-SYSTEM",
    "CMC-COMMON-SPOKEN-TAMIL §§3.1-3.3"
  ];

  const vowels = Object.freeze([
    { ta: "அ", sign: "", roman: "a", kana: "ア" },
    { ta: "ஆ", sign: "ா", roman: "ā", kana: "アー" },
    { ta: "இ", sign: "ி", roman: "i", kana: "イ" },
    { ta: "ஈ", sign: "ீ", roman: "ī", kana: "イー" },
    { ta: "உ", sign: "ு", roman: "u", kana: "ウ" },
    { ta: "ஊ", sign: "ூ", roman: "ū", kana: "ウー" },
    { ta: "எ", sign: "ெ", roman: "e", kana: "エ" },
    { ta: "ஏ", sign: "ே", roman: "ē", kana: "エー" },
    { ta: "ஐ", sign: "ை", roman: "ai", kana: "アイ" },
    { ta: "ஒ", sign: "ொ", roman: "o", kana: "オ" },
    { ta: "ஓ", sign: "ோ", roman: "ō", kana: "オー" },
    { ta: "ஔ", sign: "ௌ", roman: "au", kana: "アウ" }
  ]);

  const consonants = Object.freeze([
    { base: "க", pure: "க்", roman: "k" },
    { base: "ங", pure: "ங்", roman: "ṅ" },
    { base: "ச", pure: "ச்", roman: "c" },
    { base: "ஞ", pure: "ஞ்", roman: "ñ" },
    { base: "ட", pure: "ட்", roman: "ṭ" },
    { base: "ண", pure: "ண்", roman: "ṇ" },
    { base: "த", pure: "த்", roman: "t" },
    { base: "ந", pure: "ந்", roman: "n" },
    { base: "ப", pure: "ப்", roman: "p" },
    { base: "ம", pure: "ம்", roman: "m" },
    { base: "ய", pure: "ய்", roman: "y" },
    { base: "ர", pure: "ர்", roman: "r" },
    { base: "ல", pure: "ல்", roman: "l" },
    { base: "வ", pure: "வ்", roman: "v" },
    { base: "ழ", pure: "ழ்", roman: "ḻ" },
    { base: "ள", pure: "ள்", roman: "ḷ" },
    { base: "ற", pure: "ற்", roman: "ṟ" },
    { base: "ன", pure: "ன்", roman: "ṉ" }
  ]);

  const examples = [
    E({
      id: "r0-01",
      targetTamil: "எனக்கு தண்ணி வேணும்.",
      spokenOrthographyStatus: "conventional-spoken",
      structuredRoman: "eṉ-akku taṇṇi vēṇum.",
      underlyingAnalysis: "eṉ + -akku",
      pronunciationRoman: "enakku taṇṇi vēṇum.",
      katakana: "エナック タンニ ヴェーヌム。",
      meaningJa: "私は水が欲しいです。",
      literalJapanese: "私・与格＋水＋必要",
      morphemes: [
        { surfaceTamil: "எனக்கு", analysis: "என் + -அக்கு", gloss: "私に／私には" },
        { surfaceTamil: "தண்ணி", gloss: "水" },
        { surfaceTamil: "வேணும்", gloss: "必要だ／欲しい" }
      ],
      grammarNote: "与格は到達だけでなく、必要・好み・知識などの経験者を示す。",
      vocabulary: ["எனக்கு", "தண்ணி", "வேணும்"],
      audioGroup: "part0-cases",
      sourceRefs: CASE_SOURCES,
      confidence: C("B", "B", "C", "B"),
      featured: true
    }),
    E({
      id: "r0-02",
      targetTamil: "வீட்டுக்கு போறேன்.",
      structuredRoman: "vīṭṭ-ukku pōṟ-ēṉ.",
      underlyingAnalysis: "vīṭu + -ukku",
      pronunciationRoman: "vīṭṭukku pōrēn.",
      katakana: "ヴィーットゥック ポーレーン。",
      meaningJa: "家へ行きます。",
      literalJapanese: "家・到達＋行く・私",
      morphemes: [
        { surfaceTamil: "வீட்டுக்கு", analysis: "வீட்ட- + -உக்கு", gloss: "家へ" },
        { surfaceTamil: "போறேன்", gloss: "行きます" }
      ],
      grammarNote: "வீடு は格語尾の前で வீட்ட- という接続形を取る。",
      vocabulary: ["வீடு", "போறேன்"],
      audioGroup: "part0-cases",
      sourceRefs: CASE_SOURCES,
      confidence: C("B", "B", "C", "B"),
      featured: true
    }),
    E({
      id: "r0-03",
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
      grammarNote: "無生物の場所を表すSST形。現代口語には -ula/-le の実現差があるため別変種で保持する。",
      vocabulary: ["வீடு", "தண்ணி", "இருக்கு"],
      audioGroup: "part0-cases",
      sourceRefs: CASE_SOURCES,
      confidence: C("B", "B", "C", "B"),
      featured: true
    }),
    E({
      id: "r0-04",
      targetTamil: "ரவியை பாத்தேன்.",
      structuredRoman: "ravi-y-ai pātt-ēṉ.",
      pronunciationRoman: "raviye pāttēn.",
      katakana: "ラヴィイェ パーッテーン。",
      meaningJa: "ラヴィを見ました。",
      literalJapanese: "ラヴィ・対格＋見た・私",
      morphemes: [
        { surfaceTamil: "ரவியை", analysis: "ரவி + -ய்- + -ஐ", gloss: "ラヴィを" },
        { surfaceTamil: "பாத்தேன்", gloss: "見ました" }
      ],
      grammarNote: "人である特定目的語は対格を明示する。綴り raviyai と登録発音 raviye を分ける。",
      vocabulary: ["ரவி", "பாத்தேன்"],
      audioGroup: "part0-object",
      sourceRefs: CASE_SOURCES,
      confidence: C("B", "B", "C", "B")
    }),
    E({
      id: "r0-05",
      targetTamil: "அந்த படத்தை பாத்தேன்.",
      structuredRoman: "anta paṭatt-ai pātt-ēṉ.",
      underlyingAnalysis: "paṭam + -ai → paṭattai",
      pronunciationRoman: "anda paḍatte pāttēn.",
      katakana: "アンダ パダッテ パーッテーン。",
      meaningJa: "その映画を見ました。",
      literalJapanese: "その＋映画・対格＋見た・私",
      morphemes: [
        { surfaceTamil: "அந்த", gloss: "その" },
        { surfaceTamil: "படத்தை", analysis: "படத்த- + -ஐ", gloss: "映画を" },
        { surfaceTamil: "பாத்தேன்", gloss: "見ました" }
      ],
      grammarNote: "指示詞で特定された無生物目的語に対格を明示した例。",
      vocabulary: ["அந்த", "படம்", "பாத்தேன்"],
      audioGroup: "part0-object",
      sourceRefs: CASE_SOURCES,
      confidence: C("B", "B", "C", "B")
    }),
    E({
      id: "r0-06",
      targetTamil: "ஒரு படம் பாத்தேன்.",
      structuredRoman: "oru paṭam pātt-ēṉ.",
      pronunciationRoman: "oru paḍam pāttēn.",
      katakana: "オル パダム パーッテーン。",
      meaningJa: "映画を一本見ました。",
      literalJapanese: "一つの＋映画＋見た・私",
      morphemes: [
        { surfaceTamil: "ஒரு", gloss: "一つの" },
        { surfaceTamil: "படம்", gloss: "映画" },
        { surfaceTamil: "பாத்தேன்", gloss: "見ました" }
      ],
      grammarNote: "非人間で不特定の目的語は、対格を無標識にできる代表例。",
      vocabulary: ["ஒரு", "படம்", "பாத்தேன்"],
      audioGroup: "part0-object",
      sourceRefs: CASE_SOURCES,
      confidence: C("B", "B", "C", "B")
    }),
    E({
      id: "r0-07",
      targetTamil: "ரவிக்கிட்ட கேட்டேன்.",
      structuredRoman: "ravi-kkiṭṭa kēṭṭ-ēṉ.",
      pronunciationRoman: "ravikkiṭṭa kēṭṭēn.",
      katakana: "ラヴィッキッタ ケーッテーン。",
      meaningJa: "ラヴィに尋ねました。",
      literalJapanese: "ラヴィ・人の所／相手＋尋ねた・私",
      morphemes: [
        { surfaceTamil: "ரவிக்கிட்ட", analysis: "ரவி + -க்கிட்ட", gloss: "ラヴィの所で／ラヴィに" },
        { surfaceTamil: "கேட்டேன்", gloss: "尋ねました" }
      ],
      grammarNote: "人の所・手元・接触相手には -கிட்ட 系を使う。無生物の場所 -ல と分ける。",
      vocabulary: ["ரவி", "கிட்ட", "கேட்டேன்"],
      audioGroup: "part0-cases",
      sourceRefs: CASE_SOURCES,
      confidence: C("B", "B", "C", "B")
    }),
    E({
      id: "r0-08",
      targetTamil: "என்னோட பை இங்க இருக்கு.",
      structuredRoman: "eṉṉ-ōṭa pai iṅka irukku.",
      pronunciationRoman: "ennōḍa pai inga irukku.",
      katakana: "エンノーダ パイ インガ イルック。",
      meaningJa: "私のかばんはここにあります。",
      literalJapanese: "私・所有＋かばん＋ここ＋ある",
      morphemes: [
        { surfaceTamil: "என்னோட", analysis: "என்ன- + -ஓட", gloss: "私の" },
        { surfaceTamil: "பை", gloss: "かばん" },
        { surfaceTamil: "இங்க", gloss: "ここ" },
        { surfaceTamil: "இருக்கு", gloss: "ある" }
      ],
      grammarNote: "-ஓட 系はSSTで所有・同行関係を表す。文脈で関係を判定する。",
      vocabulary: ["என்னோட", "பை", "இங்க", "இருக்கு"],
      audioGroup: "part0-cases",
      sourceRefs: CASE_SOURCES,
      confidence: C("B", "B", "C", "B")
    })
  ];

  window.TAMIL_REFERENCE = Object.freeze({
    id: "part-zero-reference-v30",
    number: 0,
    navTitle: "文字と名詞格の早見",
    title: "文字・形・音を分けて、名詞の役割を読む",
    tamilTitle: "எழுத்தும் வேற்றுமையும்",
    deck: "固定文字転写、発音、カナを混ぜずに確認し、名詞＋複数＋接続形＋格の順を一枚で見渡す参照ページです。",
    targets: ["12母音×18子音", "固定文字転写", "斜格語幹", "対格の標示選択", "TTS"],
    heroExample: examples[0],
    readSections: [
      {
        kicker: "FOUR LAYERS",
        heading: "文字・構造・発音・カナは、別々の仕事をする",
        paragraphs: [
          "タミル文字と <strong>orthographicRoman</strong> は綴りを保存し、<strong>structuredRoman</strong> は検証済みの形態境界だけを加えます。<strong>pronunciationRoman</strong> は対象レジスターの広い実用発音、カナはその発音から作る音読補助です。",
          "たとえば <span class=\"ta-inline\" lang=\"ta\">புத்தகம்</span> は、厳密転写 <strong>puttakam</strong>、発音表示 <strong>puttagam</strong>。<span class=\"ta-inline\" lang=\"ta\">சாப்பிடு</span> は <strong>cāppiṭu</strong>／<strong>sāppiḍu</strong> です。有声化を厳密転写へ戻しません。"
        ],
        formula: {
          label: "表示の責任分担",
          slots: ["タミル文字", "構造", "発音", "カナ"],
          note: "カナから文字を逆生成せず、発音が未確認なら推測で埋めない"
        }
      },
      {
        kicker: "CASE MAP",
        heading: "日本語の助詞より先に、名詞の役割を決める",
        paragraphs: [
          "格は日本語訳との一対一置換ではありません。同じ「に」でも到達・受け手・経験者は与格、人の所・手元は <strong>-கிட்ட</strong> 系です。同じ「で」でも場所・道具・原因を区別します。",
          "下の形はTN-SSTの中心形を示す早見です。狭いチェンナイ俗語ではなく、現代チェンナイでも通じる地域横断的なSSTを主表示にしています。"
        ],
        caseMap: {
          rows: [
            { role: "主語・名詞述語", targetForm: "Ø（無標識）", pronunciation: "Ø", kana: "語尾なし", exampleTa: "நான் தயார்", exampleRoman: "nāṉ tayār", cue: "誰・何が文の中心か" },
            { role: "直接対象", targetForm: "-ஐ（登録語ごとに確認）", pronunciation: "-e等／無標識も条件付き", kana: "登録発音から作る", exampleTa: "ரவியை பாத்தேன்", exampleRoman: "ravi-y-ai pātt-ēṉ", cue: "有生性・特定性・定性・動詞" },
            { role: "到達・受け手・経験者", targetForm: "-(உ)க்கு 系", pronunciation: "-(u)kku / -akku", kana: "-（ウ）ック／-アック", exampleTa: "வீட்டுக்கு / எனக்கு", exampleRoman: "vīṭṭ-ukku / eṉ-akku", cue: "どこへ届くか／誰にそう感じられるか" },
            { role: "無生物の場所", targetForm: "-ல / -லே 系", pronunciation: "-la / -le", kana: "-ラ／-レ", exampleTa: "வீட்டுல", exampleRoman: "vīṭṭ-ula", cue: "出来事が起こる場所" },
            { role: "人の所・手元・相手", targetForm: "-கிட்ட 系", pronunciation: "-kiṭṭa", kana: "-キッタ", exampleTa: "ரவிக்கிட்ட", exampleRoman: "ravi-kkiṭṭa", cue: "人の近く・所持・接触相手" },
            { role: "起点", targetForm: "-லேருந்து 系", pronunciation: "-lērundu", kana: "-レールンドゥ", exampleTa: "வீட்டுலேருந்து", exampleRoman: "vīṭṭ-ulēruntu", cue: "どこから来る・動くか" },
            { role: "所有・同行", targetForm: "-ஓட 系", pronunciation: "-ōḍa", kana: "-オーダ", exampleTa: "என்னோட", exampleRoman: "eṉṉ-ōṭa", cue: "誰の物か／誰と一緒か" },
            { role: "道具・原因", targetForm: "-ஆல / -ஆலே 系", pronunciation: "-āla / -āle", kana: "-アーラ／-アーレ", exampleTa: "காரால", exampleRoman: "kār-āla", cue: "何を使って／何が原因で" }
          ]
        }
      },
      {
        kicker: "OBJECT MARKING",
        heading: "対格は、綴りと発音だけでなく「付けるか」も判断する",
        paragraphs: [
          "<strong>-ai と -e を全語で機械変換しません。</strong> Tamil表記が -ஐ を保つ登録語でも、発音層は語彙・形態・レジスターごとに確認します。さらに、無標識目的語は音の脱落ではなく、目的語標示そのものの選択です。",
          "初期段階では、人・代名詞・指示詞で特定された物には対格を明示する形を優先します。非人間で不特定、または活動としてまとまる物は無標識を候補にします。"
        ],
        objectMap: {
          rows: [
            { signal: "人・代名詞", form: "対格を明示", exampleTa: "ரவியை பாத்தேன்", exampleRoman: "raviyai / raviye", meaning: "ラヴィを見た", rule: "有生の直接対象" },
            { signal: "この／その既知の物", form: "対格を明示", exampleTa: "அந்த படத்தை பாத்தேன்", exampleRoman: "paṭattai / paḍatte", meaning: "その映画を見た", rule: "指示詞で特定" },
            { signal: "不特定の非人間", form: "無標識も可能", exampleTa: "ஒரு படம் பாத்தேன்", exampleRoman: "oru paṭam pāttēṉ", meaning: "映画を一本見た", rule: "特定性が低い" },
            { signal: "種類・活動としての物", form: "無標識がよく現れる", exampleTa: "படம் பாத்தேன்", exampleRoman: "paṭam pāttēṉ", meaning: "映画を見た", rule: "動詞と活動を作る" }
          ]
        },
        note: {
          tone: "pink",
          title: "禁止する短絡",
          body: "書記 -ai／口語 -e／省略 Ø の三択変換として教えません。表記、対象発音、目的語標示の三つを別々に記録します。"
        }
      },
      {
        kicker: "STEM + NUMBER + CASE",
        heading: "名詞は、右側へ伸びる順を追う",
        paragraphs: [
          "基本の観察順は <strong>名詞＋（複数）＋接続形＋格・後置要素</strong> です。<span class=\"ta-inline\" lang=\"ta\">வீடு</span>→<strong>வீட்ட-</strong>、<span class=\"ta-inline\" lang=\"ta\">மரம்</span>→<strong>மரத்த-</strong> のような斜格語幹を、格語尾と分けます。",
          "SSTの複数には <strong>-ங்க(ள்) -ṅka(ḷ)</strong> 系があり、格が続くと語末要素が再び現れることがあります。一方、無生物は数詞が複数性を示すと名詞を無標識にできるため、複数接尾辞を自動追加しません。"
        ],
        formula: {
          label: "例：家へ",
          slots: ["வீடு", "வீட்ட-", "-உக்கு", "வீட்டுக்கு"],
          note: "辞書形 → 接続形 → 格 → 表面形。構造表示は vīṭṭ-ukku"
        }
      }
    ],
    formConfig: {
      mode: "alphabet",
      title: "12母音 × 18子音のタミル文字表",
      intro: "横の母音と縦の子音が交わると一つの音節文字になります。表示するローマ字は第6〜8節の固定文字転写で、位置異音やカナを混ぜません。",
      vowels,
      consonants,
      aytham: { ta: "ஃ", roman: "ḵ", kana: "文字名：アーイタム" },
      borrowed: [
        { ta: "ஜ்", roman: "j", note: "借用音。例：ஜா jā" },
        { ta: "ஶ்", roman: "ś", note: "サンスクリット系" },
        { ta: "ஷ்", roman: "ṣ", note: "サンスクリット系・借用語" },
        { ta: "ஸ்", roman: "s", note: "借用音。例：ஸா sā" },
        { ta: "ஹ்", roman: "h", note: "借用音。例：ஹோ hō" },
        { ta: "க்ஷ்", roman: "kṣ", note: "結合文字列" },
        { ta: "ஃப", roman: "ḵpa", note: "文字層は構成を保存。発音層では f" }
      ]
    },
    examples,
    quiz: [
      {
        q: "சாப்பிடு の厳密文字転写と発音表示の組合せは？",
        options: ["cāppiṭu／sāppiḍu", "sāppiḍu／cāppiṭu", "cāppiḍu／sāppiṭu", "sāppiṭu／cāppiḍu"],
        answer: 0,
        feedback: "厳密文字転写は ச=c、ட=ṭ を保存し、発音層だけに s・ḍ を置きます。",
        tags: ["正解", "層の反転", "混合1", "混合2"]
      },
      {
        q: "வீட்டுக்கு の構造表示は？",
        options: ["vīṭṭ-ukku", "vīṭṭ-ula", "maratt-ukku", "vīṭu"],
        answer: 0,
        feedback: "家の接続形 vīṭṭ- と与格 -ukku を分けます。",
        tags: ["正解", "場所形", "別名詞の与格", "辞書形"]
      },
      {
        q: "எனக்கு の構造表示は？",
        options: ["eṉ-akku", "eṉṉ-ai", "uṉ-akku", "at-ai"],
        answer: 0,
        feedback: "検証済みの形態分析に基づき、一人称斜格語幹 eṉ と与格 -akku を分けます。",
        tags: ["正解", "一人称対格", "二人称与格", "中性対格"]
      },
      {
        q: "ஒரு படம் பாத்தேன் の படம் が無標識になりやすい中心理由は？",
        options: ["非人間で不特定の目的語だから", "-ai が必ず e に変わるから", "場所を表すから", "人を表すから"],
        answer: 0,
        feedback: "無標識は発音変化ではなく、非人間・不特定などに関わる目的語標示の選択です。",
        tags: ["正解", "音変化との混同", "場所格との混同", "有生性の逆転"]
      },
      {
        q: "TTSへ渡してよいものは？",
        options: ["自然なタミル文字 ttsText", "形態素ハイフン付きローマ字", "学習カナ", "日本語訳"],
        answer: 0,
        feedback: "TTSへ渡すのは対象レジスターの自然なタミル文字だけです。",
        tags: ["正解", "構造層", "カナ層", "訳層"]
      }
    ]
  });
})();

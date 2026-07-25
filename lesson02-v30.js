(() => {
  "use strict";

  const { entry: E, confidence: C } = window.TAMIL_V30;
  const PRONOUN_SOURCES = [
    "TAMIL-INTEGRATED-v2.0-rc.1 §§11,25,31",
    "SCHIFFMAN-SPOKEN-TAMIL §§2.3.1-2.3.6",
    "CMC-COMMON-SPOKEN-TAMIL §§3.2-3.3"
  ];

  const examples = [
    E({
      id: "l2-01",
      targetTamil: "நான் தயார்.",
      structuredRoman: "nāṉ tayār.",
      pronunciationRoman: "nān tayār.",
      katakana: "ナーン タヤール。",
      meaningJa: "私は準備できています。",
      literalJapanese: "私＋準備済み",
      morphemes: [
        { surfaceTamil: "நான்", gloss: "私" },
        { surfaceTamil: "தயார்", gloss: "準備できた" }
      ],
      grammarNote: "主語の形は無標識。現在の名詞・状態述語ではコピュラを置かない基本形。",
      vocabulary: ["நான்", "தயார்"],
      audioGroup: "lesson02-core",
      sourceRefs: PRONOUN_SOURCES,
      confidence: C("B", "B", "C", "B"),
      featured: true
    }),
    E({
      id: "l2-02",
      targetTamil: "நீ தயாரா?",
      structuredRoman: "nī tayār-ā?",
      pronunciationRoman: "nī tayārā?",
      katakana: "ニー タヤーラー？",
      meaningJa: "君、準備できた？",
      literalJapanese: "君＋準備済み・疑問",
      morphemes: [
        { surfaceTamil: "நீ", gloss: "君" },
        { surfaceTamil: "தயாரா", analysis: "தயார் + -ஆ", gloss: "準備できた・疑問" }
      ],
      grammarNote: "நீ は親しい相手への単数形。初対面・店・年上には நீங்க を優先する。",
      vocabulary: ["நீ", "தயார்"],
      audioGroup: "lesson02-bank",
      sourceRefs: PRONOUN_SOURCES,
      confidence: C("B", "B", "C", "B"),
      styleTags: ["intimate"]
    }),
    E({
      id: "l2-03",
      targetTamil: "நீங்க தயாரா?",
      structuredRoman: "nīṅka tayār-ā?",
      pronunciationRoman: "nīṅga tayārā?",
      katakana: "ニーンガ タヤーラー？",
      meaningJa: "準備はできましたか？",
      literalJapanese: "あなた・敬意／複数＋準備済み・疑問",
      morphemes: [
        { surfaceTamil: "நீங்க", gloss: "あなた（敬意）／あなたたち" },
        { surfaceTamil: "தயாரா", analysis: "தயார் + -ஆ", gloss: "準備できた・疑問" }
      ],
      grammarNote: "நீங்க は敬意のある二人称単数と二人称複数に使うSST形。",
      vocabulary: ["நீங்க", "தயார்"],
      audioGroup: "lesson02-core",
      sourceRefs: PRONOUN_SOURCES,
      confidence: C("B", "B", "C", "B")
    }),
    E({
      id: "l2-04",
      targetTamil: "என்னை கூப்பிடுங்க.",
      structuredRoman: "eṉṉ-ai kūppiṭ-uṅka.",
      underlyingAnalysis: "eṉ + -ai; kūppiṭu + -ṅka",
      pronunciationRoman: "enne kūppiḍuṅga.",
      katakana: "エンネ クーッピドゥンガ。",
      meaningJa: "私を呼んでください。",
      literalJapanese: "私・対格＋呼ぶ・丁寧命令",
      morphemes: [
        { surfaceTamil: "என்னை", analysis: "என் + -ஐ", gloss: "私を" },
        { surfaceTamil: "கூப்பிடுங்க", analysis: "கூப்பிடு + -ங்க", gloss: "呼んでください" }
      ],
      grammarNote: "人を直接目的語にすると対格を明示する。綴り eṉṉai と発音 enne を別層で保持する。",
      vocabulary: ["என்னை", "கூப்பிடுங்க"],
      audioGroup: "lesson02-core",
      sourceRefs: PRONOUN_SOURCES,
      confidence: C("B", "B", "C", "B"),
      featured: true
    }),
    E({
      id: "l2-05",
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
      grammarNote: "必要・欲求の経験者を与格で示す。எனக்கு の構造表示は eṉ-akku。",
      vocabulary: ["எனக்கு", "தண்ணி", "வேணும்"],
      audioGroup: "lesson02-core",
      sourceRefs: PRONOUN_SOURCES,
      confidence: C("B", "B", "C", "B"),
      counterparts: [
        {
          relation: "literary-counterpart",
          primaryRegister: "LT-WR",
          targetTamil: "எனக்குத் தண்ணீர் வேண்டும்.",
          orthographicRoman: "eṉakkut taṇṇīr vēṇṭum.",
          structuredRoman: "eṉ-akku-t taṇṇīr vēṇṭ-um."
        }
      ],
      featured: true
    }),
    E({
      id: "l2-06",
      targetTamil: "உனக்கு தமிழ் தெரியுமா?",
      structuredRoman: "uṉ-akku tamiḻ teri-y-um-ā?",
      underlyingAnalysis: "uṉ + -akku",
      pronunciationRoman: "unakku tamiḻ teriyumā?",
      katakana: "ウナック タミル テリユマー？",
      meaningJa: "君はタミル語が分かる？",
      literalJapanese: "君・与格＋タミル語＋分かる・疑問",
      morphemes: [
        { surfaceTamil: "உனக்கு", analysis: "உன் + -அக்கு", gloss: "君に／君には" },
        { surfaceTamil: "தமிழ்", gloss: "タミル語" },
        { surfaceTamil: "தெரியுமா", analysis: "தெரி + -உம் + -ஆ", gloss: "分かる・疑問" }
      ],
      grammarNote: "知識・認識の経験者も与格で示せる。நீ から単純に語尾を足すのでなく、斜格語幹 உன் を使う。",
      vocabulary: ["உனக்கு", "தமிழ்", "தெரியுமா"],
      audioGroup: "lesson02-bank",
      sourceRefs: PRONOUN_SOURCES,
      confidence: C("B", "B", "C", "B"),
      styleTags: ["intimate"]
    }),
    E({
      id: "l2-07",
      targetTamil: "நீங்க எங்க போறீங்க?",
      structuredRoman: "nīṅka eṅka pōṟ-īṅka?",
      pronunciationRoman: "nīṅga enga pōrīnga?",
      katakana: "ニーンガ エンガ ポーリーンガ？",
      meaningJa: "どこへ行きますか？",
      literalJapanese: "あなた・敬意＋どこ＋行く・あなた",
      morphemes: [
        { surfaceTamil: "நீங்க", gloss: "あなた（敬意）" },
        { surfaceTamil: "எங்க", gloss: "どこ" },
        { surfaceTamil: "போறீங்க", analysis: "போ + -ற்- + -ஈங்க", gloss: "行く・あなた" }
      ],
      grammarNote: "敬意の主語と述語語尾が呼応する。第2課では代名詞の使い分けを中心に見る。",
      vocabulary: ["நீங்க", "எங்க", "போறீங்க"],
      audioGroup: "lesson02-bank",
      sourceRefs: PRONOUN_SOURCES,
      confidence: C("B", "B", "C", "B")
    }),
    E({
      id: "l2-08",
      targetTamil: "உங்களுக்கு தண்ணி வேணுமா?",
      structuredRoman: "uṅkaḷ-ukku taṇṇi vēṇum-ā?",
      pronunciationRoman: "ungaḷukku taṇṇi vēṇumā?",
      pronunciationVariants: ["oṅgaḷukku taṇṇi vēṇumā?"],
      katakana: "ウンガルック タンニ ヴェーヌマー？",
      kanaVariants: ["オンガルック タンニ ヴェーヌマー？"],
      meaningJa: "お水は要りますか？",
      literalJapanese: "あなた・敬意・与格＋水＋必要・疑問",
      morphemes: [
        { surfaceTamil: "உங்களுக்கு", analysis: "உங்கள் + -உக்கு", gloss: "あなたに／あなたには" },
        { surfaceTamil: "தண்ணி", gloss: "水" },
        { surfaceTamil: "வேணுமா", analysis: "வேணும் + -ஆ", gloss: "必要・疑問" }
      ],
      grammarNote: "敬意の二人称与格。初頭母音には自然な変異があるため、主形と変種を分けて保持する。",
      vocabulary: ["உங்களுக்கு", "தண்ணி", "வேணுமா"],
      audioGroup: "lesson02-bank",
      sourceRefs: PRONOUN_SOURCES,
      confidence: C("B", "B", "C", "C")
    }),
    E({
      id: "l2-09",
      targetTamil: "அது என்ன?",
      structuredRoman: "atu eṉṉa?",
      pronunciationRoman: "adu enna?",
      katakana: "アドゥ エンナ？",
      meaningJa: "それは何ですか？",
      literalJapanese: "それ＋何",
      morphemes: [
        { surfaceTamil: "அது", gloss: "それ" },
        { surfaceTamil: "என்ன", gloss: "何" }
      ],
      grammarNote: "中性の遠称 அது。厳密転写 atu と発音 adu を分ける。",
      vocabulary: ["அது", "என்ன"],
      audioGroup: "lesson02-bank",
      sourceRefs: PRONOUN_SOURCES,
      confidence: C("B", "B", "C", "B")
    }),
    E({
      id: "l2-10",
      targetTamil: "எனக்கு அது பிடிக்கும்.",
      structuredRoman: "eṉ-akku atu piṭikk-um.",
      pronunciationRoman: "enakku adu piḍikkum.",
      katakana: "エナック アドゥ ピディックム。",
      meaningJa: "私はそれが好きです。",
      literalJapanese: "私・与格＋それ＋好ましく感じる",
      morphemes: [
        { surfaceTamil: "எனக்கு", analysis: "என் + -அக்கு", gloss: "私には" },
        { surfaceTamil: "அது", gloss: "それ" },
        { surfaceTamil: "பிடிக்கும்", analysis: "பிடிக்க் + -உம்", gloss: "好ましく感じる" }
      ],
      grammarNote: "「好き」の経験者も与格で示す中心構文。日本語訳の「私」はタミル語では主格ではない。",
      vocabulary: ["எனக்கு", "அது", "பிடிக்கும்"],
      audioGroup: "lesson02-bank",
      sourceRefs: PRONOUN_SOURCES,
      confidence: C("B", "B", "C", "B")
    }),
    E({
      id: "l2-11",
      targetTamil: "அதை இங்க வைங்க.",
      structuredRoman: "at-ai iṅka vaiṅka.",
      pronunciationRoman: "ade inga vainga.",
      katakana: "アデ インガ ヴァインガ。",
      meaningJa: "それをここに置いてください。",
      literalJapanese: "それ・対格＋ここ＋置いてください",
      morphemes: [
        { surfaceTamil: "அதை", analysis: "அத் + -ஐ", gloss: "それを" },
        { surfaceTamil: "இங்க", gloss: "ここ" },
        { surfaceTamil: "வைங்க", gloss: "置いてください" }
      ],
      grammarNote: "அதை の文字転写 atai と対象発音 ade を分ける。-ai を全語で機械的に -e へ置換する規則にはしない。",
      vocabulary: ["அதை", "இங்க", "வைங்க"],
      audioGroup: "lesson02-bank",
      sourceRefs: PRONOUN_SOURCES,
      confidence: C("B", "B", "C", "B")
    })
  ];

  const patterns = [
    E({
      id: "l2-form-naan",
      targetTamil: "நான்",
      structuredRoman: "nāṉ",
      pronunciationRoman: "nān",
      katakana: "ナーン",
      meaningJa: "私（主語）",
      literalJapanese: "私",
      grammarNote: "一人称単数の主格・無標識形。",
      vocabulary: ["நான்"],
      audioGroup: "lesson02-forms",
      sourceRefs: PRONOUN_SOURCES,
      confidence: C("A", "A", "C", "A"),
      kind: "主語",
      group: "1人称単数",
      note: "格語尾の前では என் 系の斜格語幹を使います。"
    }),
    E({
      id: "l2-form-ennai",
      targetTamil: "என்னை",
      structuredRoman: "eṉṉ-ai",
      underlyingAnalysis: "eṉ + -ai",
      pronunciationRoman: "enne",
      katakana: "エンネ",
      meaningJa: "私を",
      literalJapanese: "私・対格",
      grammarNote: "人を直接目的語にする対格形。",
      vocabulary: ["என்னை"],
      audioGroup: "lesson02-forms",
      sourceRefs: PRONOUN_SOURCES,
      confidence: C("A", "A", "C", "A"),
      kind: "対象",
      group: "1人称単数",
      note: "文字 eṉṉai／発音 enne。"
    }),
    E({
      id: "l2-form-enakku",
      targetTamil: "எனக்கு",
      structuredRoman: "eṉ-akku",
      underlyingAnalysis: "eṉ + -akku",
      pronunciationRoman: "enakku",
      katakana: "エナック",
      meaningJa: "私に／私には",
      literalJapanese: "私・与格",
      grammarNote: "受け手・経験者・必要の持ち主を示す。",
      vocabulary: ["எனக்கு"],
      audioGroup: "lesson02-forms",
      sourceRefs: PRONOUN_SOURCES,
      confidence: C("A", "A", "C", "A"),
      kind: "到達・経験",
      group: "1人称単数",
      note: "本プロジェクトの構造表示は eṉ-akku。"
    }),
    E({
      id: "l2-form-nii",
      targetTamil: "நீ",
      structuredRoman: "nī",
      pronunciationRoman: "nī",
      katakana: "ニー",
      meaningJa: "君（親称）",
      literalJapanese: "君",
      grammarNote: "親しい相手への二人称単数。",
      vocabulary: ["நீ"],
      audioGroup: "lesson02-forms",
      sourceRefs: PRONOUN_SOURCES,
      confidence: C("A", "A", "C", "A"),
      styleTags: ["intimate"],
      kind: "主語",
      group: "2人称・親称",
      note: "初対面や年上には通常 நீங்க を選びます。"
    }),
    E({
      id: "l2-form-unnai",
      targetTamil: "உன்னை",
      structuredRoman: "uṉṉ-ai",
      underlyingAnalysis: "uṉ + -ai",
      pronunciationRoman: "unne",
      katakana: "ウンネ",
      meaningJa: "君を",
      literalJapanese: "君・対格",
      grammarNote: "親称二人称の対格形。",
      vocabulary: ["உன்னை"],
      audioGroup: "lesson02-forms",
      sourceRefs: PRONOUN_SOURCES,
      confidence: C("A", "A", "C", "A"),
      styleTags: ["intimate"],
      kind: "対象",
      group: "2人称・親称",
      note: "文字 uṉṉai／発音 unne。"
    }),
    E({
      id: "l2-form-unakku",
      targetTamil: "உனக்கு",
      structuredRoman: "uṉ-akku",
      underlyingAnalysis: "uṉ + -akku",
      pronunciationRoman: "unakku",
      katakana: "ウナック",
      meaningJa: "君に／君には",
      literalJapanese: "君・与格",
      grammarNote: "親称二人称の与格形。",
      vocabulary: ["உனக்கு"],
      audioGroup: "lesson02-forms",
      sourceRefs: PRONOUN_SOURCES,
      confidence: C("A", "A", "C", "A"),
      styleTags: ["intimate"],
      kind: "到達・経験",
      group: "2人称・親称",
      note: "நீ に語尾を直接貼らず、உன் 系を使います。"
    }),
    E({
      id: "l2-form-niinga",
      targetTamil: "நீங்க",
      structuredRoman: "nīṅka",
      pronunciationRoman: "nīṅga",
      katakana: "ニーンガ",
      meaningJa: "あなた／あなたたち",
      literalJapanese: "二人称・敬意／複数",
      grammarNote: "敬意単数と二人称複数を担うSST形。",
      vocabulary: ["நீங்க"],
      audioGroup: "lesson02-forms",
      sourceRefs: PRONOUN_SOURCES,
      confidence: C("A", "A", "C", "A"),
      kind: "主語",
      group: "2人称・敬意",
      note: "場面と述語一致から単数敬意か複数かを判断します。"
    }),
    E({
      id: "l2-form-ungkalai",
      targetTamil: "உங்களை",
      structuredRoman: "uṅkaḷ-ai",
      pronunciationRoman: "ungaḷe",
      pronunciationVariants: ["oṅgaḷe"],
      katakana: "ウンガレ",
      kanaVariants: ["オンガレ"],
      meaningJa: "あなたを／あなたたちを",
      literalJapanese: "二人称・敬意／複数・対格",
      grammarNote: "敬意・複数二人称の対格形。",
      vocabulary: ["உங்களை"],
      audioGroup: "lesson02-forms",
      sourceRefs: PRONOUN_SOURCES,
      confidence: C("A", "A", "C", "B"),
      kind: "対象",
      group: "2人称・敬意",
      note: "主形と初頭母音の変種を別フィールドで保持します。"
    }),
    E({
      id: "l2-form-ungkalukku",
      targetTamil: "உங்களுக்கு",
      structuredRoman: "uṅkaḷ-ukku",
      pronunciationRoman: "ungaḷukku",
      pronunciationVariants: ["oṅgaḷukku"],
      katakana: "ウンガルック",
      kanaVariants: ["オンガルック"],
      meaningJa: "あなたに／あなたには",
      literalJapanese: "二人称・敬意／複数・与格",
      grammarNote: "敬意・複数二人称の与格形。",
      vocabulary: ["உங்களுக்கு"],
      audioGroup: "lesson02-forms",
      sourceRefs: PRONOUN_SOURCES,
      confidence: C("A", "A", "C", "B"),
      kind: "到達・経験",
      group: "2人称・敬意",
      note: "受け手、経験者、必要の持ち主に使います。"
    }),
    E({
      id: "l2-form-atu",
      targetTamil: "அது",
      structuredRoman: "atu",
      pronunciationRoman: "adu",
      katakana: "アドゥ",
      meaningJa: "それ",
      literalJapanese: "それ",
      grammarNote: "遠称の中性指示代名詞。",
      vocabulary: ["அது"],
      audioGroup: "lesson02-forms",
      sourceRefs: PRONOUN_SOURCES,
      confidence: C("A", "A", "C", "A"),
      kind: "主語",
      group: "中性指示",
      note: "厳密転写 atu／発音 adu。"
    }),
    E({
      id: "l2-form-atai",
      targetTamil: "அதை",
      structuredRoman: "at-ai",
      pronunciationRoman: "ade",
      katakana: "アデ",
      meaningJa: "それを",
      literalJapanese: "それ・対格",
      grammarNote: "中性指示代名詞の対格形。",
      vocabulary: ["அதை"],
      audioGroup: "lesson02-forms",
      sourceRefs: PRONOUN_SOURCES,
      confidence: C("A", "A", "C", "A"),
      kind: "対象",
      group: "中性指示",
      note: "この登録語では atai／ade。全語への文字置換規則ではありません。"
    }),
    E({
      id: "l2-form-atukku",
      targetTamil: "அதுக்கு",
      structuredRoman: "at-ukku",
      pronunciationRoman: "adukku",
      katakana: "アドゥック",
      meaningJa: "それに／そのために",
      literalJapanese: "それ・与格",
      grammarNote: "中性指示代名詞のSST与格形。",
      vocabulary: ["அதுக்கு"],
      audioGroup: "lesson02-forms",
      sourceRefs: PRONOUN_SOURCES,
      confidence: C("B", "B", "C", "B"),
      kind: "到達",
      group: "中性指示",
      note: "文語対応形とはレジスターを分けて保持します。"
    })
  ];

  window.TAMIL_LESSONS_V30 = window.TAMIL_LESSONS_V30 || [];
  window.TAMIL_LESSONS_V30.push(Object.freeze({
    id: "lesson02-pronouns-core-cases-v30",
    number: 2,
    navTitle: "代名詞と中心格",
    title: "「私」は、文中の役割で形を替える",
    tamilTitle: "பதிலிப்பெயரும் முக்கிய வேற்றுமையும்",
    deck: "நான்・என்னை・எனக்கு を中心に、主語・直接対象・受け手／経験者を分けます。நீ／நீங்க の社会距離も同じ表で確認します。",
    targets: ["நான் / என்னை / எனக்கு", "நீ / நீங்க", "対格", "与格経験者"],
    heroExample: examples[4],
    readSections: [
      {
        kicker: "THREE ROLES",
        heading: "主語・対象・経験者は、同じ形ではない",
        paragraphs: [
          "一人称単数は、主語なら <span class=\"ta-inline\" lang=\"ta\">நான்</span>、直接対象なら <span class=\"ta-inline\" lang=\"ta\">என்னை</span>、受け手・経験者なら <span class=\"ta-inline\" lang=\"ta\">எனக்கு</span> です。<strong>நான் に毎回同じ語尾を貼る</strong>のではなく、格の前に現れる斜格語幹を一組で覚えます。",
          "構造行は <strong>eṉṉ-ai / eṉ-akku</strong> と表面形を分けます。特に <span class=\"ta-inline\" lang=\"ta\">எனக்கு</span> は、本規格で <strong>eṉ-akku</strong> と分析します。"
        ],
        caseMap: {
          rows: [
            { role: "私", targetForm: "நான் → என்னை → எனக்கு", pronunciation: "nān → enne → enakku", kana: "ナーン → エンネ → エナック", exampleTa: "எனக்கு தண்ணி வேணும்", exampleRoman: "eṉ-akku taṇṇi vēṇum", cue: "主語／直接対象／受け手・経験者" },
            { role: "君・親称", targetForm: "நீ → உன்னை → உனக்கு", pronunciation: "nī → unne → unakku", kana: "ニー → ウンネ → ウナック", exampleTa: "உனக்கு தமிழ் தெரியுமா", exampleRoman: "uṉ-akku tamiḻ teri-y-um-ā", cue: "親しい単数相手に限る" },
            { role: "あなた・敬意", targetForm: "நீங்க → உங்களை → உங்களுக்கு", pronunciation: "nīṅga → ungaḷe → ungaḷukku", kana: "ニーンガ → ウンガレ → ウンガルック", exampleTa: "உங்களுக்கு தண்ணி வேணுமா", exampleRoman: "uṅkaḷ-ukku taṇṇi vēṇum-ā", cue: "初対面・年上・複数" },
            { role: "それ", targetForm: "அது → அதை → அதுக்கு", pronunciation: "adu → ade → adukku", kana: "アドゥ → アデ → アドゥック", exampleTa: "அதை இங்க வைங்க", exampleRoman: "at-ai iṅka vaiṅka", cue: "中性の指示対象" }
          ]
        }
      },
      {
        kicker: "ACCUSATIVE",
        heading: "対格は「-ai を -e にするだけ」ではない",
        paragraphs: [
          "人を直接扱う <span class=\"ta-inline\" lang=\"ta\">என்னை கூப்பிடுங்க</span> では対格を明示します。物では、有生性・特定性・定性・動詞とのまとまり・レジスターによって、対格標示の有無と表面発音が変わります。",
          "この教材は登録済みの <span class=\"ta-inline\" lang=\"ta\">என்னை</span> を <strong>eṉṉai（綴り）／enne（発音）</strong>、<span class=\"ta-inline\" lang=\"ta\">அதை</span> を <strong>atai／ade</strong> と示します。ただし、あらゆる非語頭 <strong>ai</strong> を一律 <strong>e</strong> にする変換器は作りません。"
        ],
        note: {
          tone: "pink",
          title: "対格の初期判断",
          body: "人・代名詞・明確に特定された物は、対格を明示する形をまず選びます。非人間の無標識目的語は、単なる「をの省略」ではなく別の標示選択として扱います。"
        }
      },
      {
        kicker: "DATIVE EXPERIENCER",
        heading: "与格は「〜へ」だけでなく、感じる人も示す",
        paragraphs: [
          "<span class=\"ta-inline\" lang=\"ta\">எனக்கு தண்ணி வேணும்</span>「私は水が欲しい」、<span class=\"ta-inline\" lang=\"ta\">எனக்கு அது பிடிக்கும்</span>「私はそれが好き」の <span class=\"ta-inline\" lang=\"ta\">எனக்கு</span> は、必要・好みを経験する人です。日本語訳で「私は」となっても、タミル語側を主格へ直しません。",
          "同じ与格は、到達点、受け手、所有の持ち主、知識・感覚の経験者にも広がります。まず右側の述語が何を要求するかを見て、単純な日本語助詞対応を避けます。"
        ],
        formula: {
          label: "意味役割から選ぶ",
          slots: ["எனக்கு", "தண்ணி", "வேணும்", "欲求の経験者"],
          note: "日本語の「私は」ではなく、タミル語の述語が作る役割を見る"
        }
      },
      {
        kicker: "SOCIAL DISTANCE",
        heading: "நீ と நீங்க は、数だけでなく距離を示す",
        paragraphs: [
          "<span class=\"ta-inline\" lang=\"ta\">நீ</span> は親しい単数相手、<span class=\"ta-inline\" lang=\"ta\">நீங்க</span> は敬意のある単数相手または複数相手です。旅行、店、初対面、年上には <strong>நீங்க</strong> を無標の安全形とします。",
          "正しい親称形を誤文扱いせず、<strong>この場面では社会距離が合わない</strong>と説明します。レジスターと敬意は、文法的な正誤と分けて診断します。"
        ]
      }
    ],
    formConfig: {
      mode: "grammar",
      title: "代名詞を、主語・対象・与格で並べる",
      intro: "横一列の文字置換で作らず、各代名詞の主格・対格・与格を検証済みの組として保持します。",
      patterns,
      checkpoint: "நான்／என்னை／எனக்கு と நீ／உன்னை／உனக்கு を役割から選び、நீ と நீங்க の社会距離を説明できれば合格です。"
    },
    examples,
    quiz: [
      {
        q: "எனக்கு の構造表示として、この規格が採る形は？",
        options: ["eṉ-akku", "eṉṉ-ai", "uṉ-akku", "at-ukku"],
        answer: 0,
        feedback: "一人称単数の斜格語幹 eṉ と、この環境の与格形 -akku を分けます。",
        tags: ["正解", "一人称対格", "二人称与格", "中性与格"]
      },
      {
        q: "「私は水が欲しい」を、経験者の与格で表す例は？",
        options: ["எனக்கு தண்ணி வேணும்.", "நான் தயார்.", "என்னை கூப்பிடுங்க.", "அதை இங்க வைங்க."],
        answer: 0,
        feedback: "வேணும் が示す必要・欲求の経験者を எனக்கு で表します。",
        tags: ["正解", "主格の状態文", "対格の人", "中性対格"]
      },
      {
        q: "「私を呼んでください」の「私を」に当たる形は？",
        options: ["என்னை", "எனக்கு", "நான்", "உன்னை"],
        answer: 0,
        feedback: "人である一人称単数を直接対象にするため、対格 என்னை を使います。",
        tags: ["正解", "一人称与格", "一人称主格", "二人称対格"]
      },
      {
        q: "初対面の相手に「準備できましたか」と尋ねる安全な主語は？",
        options: ["நீங்க", "நீ", "நான்", "அது"],
        answer: 0,
        feedback: "நீங்க は敬意単数／複数。நீ も文法的には正しい形ですが、初対面という設問条件では社会距離が合いません。",
        tags: ["正解", "親称で場面不一致", "一人称", "中性指示"]
      },
      {
        q: "அதை の二つの層を正しく組み合わせたものは？",
        options: ["厳密 atai／発音 ade", "厳密 ade／発音 atai", "厳密 atu／発音 adu", "厳密 adukku／発音 atukku"],
        answer: 0,
        feedback: "文字転写は த と ஐ を保存して atai、登録済みの発音層は ade です。",
        tags: ["正解", "層の反転", "主格との混同", "与格との混同"]
      }
    ]
  }));
})();

(() => {
  "use strict";

  const { entry: E, confidence: C } = window.TAMIL_V30;
  const RELATION_SOURCES = [
    "TAMIL-INTEGRATED-v2.0-rc.1 §§23-25,31-32",
    "SCHIFFMAN-SPOKEN-TAMIL §§2.1.4,2.2.7",
    "SCHIFFMAN-CASE-SYSTEM",
    "CMC-COMMON-SPOKEN-TAMIL Lessons 10,25-26"
  ];

  const examples = [
    E({
      id: "l3-01",
      targetTamil: "இது என் வீடு.",
      structuredRoman: "itu eṉ vīṭu.",
      pronunciationRoman: "idu en vīḍu.",
      katakana: "イドゥ エン ヴィードゥ。",
      meaningJa: "これは私の家です。",
      literalJapanese: "これ＋私の＋家",
      morphemes: [
        { surfaceTamil: "இது", gloss: "これ" },
        { surfaceTamil: "என்", gloss: "私の" },
        { surfaceTamil: "வீடு", gloss: "家" }
      ],
      grammarNote: "一人称単数の短い所有形 என் が、後ろの名詞 வீடு を説明する。",
      vocabulary: ["இது", "என்", "வீடு"],
      audioGroup: "lesson03-core",
      sourceRefs: RELATION_SOURCES,
      confidence: C("A", "A", "C", "A"),
      featured: true
    }),
    E({
      id: "l3-02",
      targetTamil: "இது உங்க போன்.",
      structuredRoman: "itu uṅka pōṉ.",
      pronunciationRoman: "idu unga pōn.",
      katakana: "イドゥ ウンガ ポーン。",
      meaningJa: "これはあなたの電話です。",
      literalJapanese: "これ＋あなたの・敬意／複数＋電話",
      morphemes: [
        { surfaceTamil: "இது", gloss: "これ" },
        { surfaceTamil: "உங்க", gloss: "あなたの／あなたたちの" },
        { surfaceTamil: "போன்", gloss: "電話" }
      ],
      grammarNote: "உங்க は敬意単数／複数の所有形。初対面や店では安全な形になる。",
      vocabulary: ["உங்க", "போன்"],
      audioGroup: "lesson03-core",
      sourceRefs: RELATION_SOURCES,
      confidence: C("A", "A", "C", "A"),
      featured: true
    }),
    E({
      id: "l3-03",
      targetTamil: "இது ரவியோட கார்.",
      structuredRoman: "itu ravi-y-ōṭa kār.",
      underlyingAnalysis: "ravi + -ōṭa",
      pronunciationRoman: "idu raviyōḍa kār.",
      katakana: "イドゥ ラヴィヨーダ カール。",
      meaningJa: "これはラヴィの車です。",
      literalJapanese: "これ＋ラヴィ・関係＋車",
      morphemes: [
        { surfaceTamil: "இது", gloss: "これ" },
        { surfaceTamil: "ரவியோட", analysis: "ரவி + -ய்- + -ஓட", gloss: "ラヴィの" },
        { surfaceTamil: "கார்", gloss: "車" }
      ],
      grammarNote: "-ஓட の後ろに名詞 கார் が続き、所有・関係を作る。",
      vocabulary: ["ரவி", "ஓட", "கார்"],
      audioGroup: "lesson03-core",
      sourceRefs: RELATION_SOURCES,
      confidence: C("B", "B", "C", "B"),
      featured: true,
      counterparts: [
        {
          relation: "literary-counterpart",
          primaryRegister: "LT-WR",
          targetTamil: "இது ரவியுடைய கார்.",
          orthographicRoman: "itu raviyuṭaiya kār.",
          structuredRoman: "itu ravi-y-uṭaiya kār."
        }
      ]
    }),
    E({
      id: "l3-04",
      targetTamil: "இது நண்பரோட டிக்கெட்.",
      structuredRoman: "itu naṇpar-ōṭa ṭikkeṭ.",
      pronunciationRoman: "idu naṇbarōḍa ṭikkeṭ.",
      katakana: "イドゥ ナンバロード ティッケット。",
      meaningJa: "これは友達の切符です。",
      literalJapanese: "これ＋友達・関係＋切符",
      morphemes: [
        { surfaceTamil: "இது", gloss: "これ" },
        { surfaceTamil: "நண்பரோட", analysis: "நண்பர் + -ஓட", gloss: "友達の" },
        { surfaceTamil: "டிக்கெட்", gloss: "切符" }
      ],
      grammarNote: "人を表す名詞にも -ஓட を付け、後ろの名詞との所属関係を示せる。",
      vocabulary: ["நண்பர்", "டிக்கெட்"],
      audioGroup: "lesson03-bank",
      sourceRefs: RELATION_SOURCES,
      confidence: C("B", "B", "C", "B")
    }),
    E({
      id: "l3-05",
      targetTamil: "என்னோட வாங்க.",
      structuredRoman: "eṉṉ-ōṭa vāṅka.",
      underlyingAnalysis: "eṉ + -ōṭa → eṉṉōṭa",
      pronunciationRoman: "ennōḍa vāṅga.",
      katakana: "エンノーダ ヴァーンガ。",
      meaningJa: "私と一緒に来てください。",
      literalJapanese: "私・同行＋来てください",
      morphemes: [
        { surfaceTamil: "என்னோட", analysis: "என்ன- + -ஓட", gloss: "私と一緒に" },
        { surfaceTamil: "வாங்க", gloss: "来てください" }
      ],
      grammarNote: "後ろが動作 வாங்க なので、-ஓட は同行する相手を示す。",
      vocabulary: ["என்னோட", "வாங்க"],
      audioGroup: "lesson03-bank",
      sourceRefs: RELATION_SOURCES,
      confidence: C("B", "B", "C", "B")
    }),
    E({
      id: "l3-06",
      targetTamil: "நான் ரவியோட போறேன்.",
      structuredRoman: "nāṉ ravi-y-ōṭa pōṟ-ēṉ.",
      pronunciationRoman: "nān raviyōḍa pōrēn.",
      katakana: "ナーン ラヴィヨーダ ポーレーン。",
      meaningJa: "私はラヴィと一緒に行きます。",
      literalJapanese: "私＋ラヴィ・同行＋行く・私",
      morphemes: [
        { surfaceTamil: "நான்", gloss: "私" },
        { surfaceTamil: "ரவியோட", analysis: "ரவி + -ய்- + -ஓட", gloss: "ラヴィと" },
        { surfaceTamil: "போறேன்", analysis: "போ- + -ற்- + -ஏன்", gloss: "行きます" }
      ],
      grammarNote: "同じ -ஓட でも、文末の移動動詞へつながるため同行関係になる。",
      vocabulary: ["நான்", "ரவி", "போறேன்"],
      audioGroup: "lesson03-bank",
      sourceRefs: RELATION_SOURCES,
      confidence: C("B", "B", "C", "B")
    }),
    E({
      id: "l3-07",
      targetTamil: "நான் கையால சாப்பிடுறேன்.",
      structuredRoman: "nāṉ kai-y-āla cāppiṭu-ṟ-ēṉ.",
      pronunciationRoman: "nān kaiyāla sāppiḍurēn.",
      katakana: "ナーン カイヤーラ サーッピドゥレーン。",
      meaningJa: "私は手で食べます。",
      literalJapanese: "私＋手・手段＋食べる・私",
      morphemes: [
        { surfaceTamil: "நான்", gloss: "私" },
        { surfaceTamil: "கையால", analysis: "கை + -ய்- + -ஆல", gloss: "手で" },
        { surfaceTamil: "சாப்பிடுறேன்", analysis: "சாப்பிடு- + -ற்- + -ஏன்", gloss: "食べます" }
      ],
      grammarNote: "-ஆல は動作を行う手段を示す。同行者を表す -ஓட と分ける。",
      vocabulary: ["கை", "சாப்பிடுறேன்"],
      audioGroup: "lesson03-bank",
      sourceRefs: RELATION_SOURCES,
      confidence: C("B", "B", "C", "B")
    }),
    E({
      id: "l3-08",
      targetTamil: "நான் பேனாவால எழுதுறேன்.",
      structuredRoman: "nāṉ pēṉā-v-āla eḻutu-ṟ-ēṉ.",
      pronunciationRoman: "nān pēnāvāla eḻudurēn.",
      katakana: "ナーン ペーナーヴァーラ エルドゥレーン。",
      meaningJa: "私はペンで書きます。",
      literalJapanese: "私＋ペン・手段＋書く・私",
      morphemes: [
        { surfaceTamil: "நான்", gloss: "私" },
        { surfaceTamil: "பேனாவால", analysis: "பேனா + -வ்- + -ஆல", gloss: "ペンで" },
        { surfaceTamil: "எழுதுறேன்", analysis: "எழுது- + -ற்- + -ஏன்", gloss: "書きます" }
      ],
      grammarNote: "母音で終わる பேனா と -ஆல の間に வ் が現れる表面形。",
      vocabulary: ["பேனா", "எழுதுறேன்"],
      audioGroup: "lesson03-bank",
      sourceRefs: RELATION_SOURCES,
      confidence: C("B", "B", "C", "B")
    }),
    E({
      id: "l3-09",
      targetTamil: "நான் பஸ்ல போறேன்.",
      structuredRoman: "nāṉ pas-la pōṟ-ēṉ.",
      pronunciationRoman: "nān basla pōrēn.",
      katakana: "ナーン バスラ ポーレーン。",
      meaningJa: "私はバスで行きます。",
      literalJapanese: "私＋バス・場所／乗り物＋行く・私",
      morphemes: [
        { surfaceTamil: "நான்", gloss: "私" },
        { surfaceTamil: "பஸ்ல", analysis: "பஸ் + -ல", gloss: "バスで" },
        { surfaceTamil: "போறேன்", gloss: "行きます" }
      ],
      grammarNote: "乗り物による移動では、SSTで場所形 -ல がよく使われる。日本語の「で」から -ஆல を自動選択しない。",
      vocabulary: ["பஸ்", "போறேன்"],
      audioGroup: "lesson03-bank",
      sourceRefs: RELATION_SOURCES,
      confidence: C("B", "B", "C", "B")
    }),
    E({
      id: "l3-10",
      targetTamil: "மழையால ரயில் லேட்.",
      structuredRoman: "maḻai-y-āla rayil lēṭ.",
      pronunciationRoman: "maḻaiyāla rayil lēṭ.",
      katakana: "マライヤーラ ライル レート。",
      meaningJa: "雨のため、列車が遅れています。",
      literalJapanese: "雨・原因＋列車＋遅い",
      morphemes: [
        { surfaceTamil: "மழையால", analysis: "மழை + -ய்- + -ஆல", gloss: "雨のために" },
        { surfaceTamil: "ரயில்", gloss: "列車" },
        { surfaceTamil: "லேட்", gloss: "遅い／遅れている" }
      ],
      grammarNote: "-ஆல は道具だけでなく原因にも広がる。日本語訳の「で」一語へ固定しない。",
      vocabulary: ["மழை", "ரயில்", "லேட்"],
      audioGroup: "lesson03-bank",
      sourceRefs: RELATION_SOURCES,
      confidence: C("B", "B", "C", "B")
    })
  ];

  const patterns = [
    E({
      id: "l3-form-en",
      targetTamil: "என் வீடு",
      structuredRoman: "eṉ vīṭu",
      pronunciationRoman: "en vīḍu",
      katakana: "エン ヴィードゥ",
      meaningJa: "私の家",
      literalJapanese: "私の＋家",
      grammarNote: "一人称単数の短い所有形。",
      vocabulary: ["என்", "வீடு"],
      audioGroup: "lesson03-forms",
      sourceRefs: RELATION_SOURCES,
      confidence: C("A", "A", "C", "A"),
      kind: "所有",
      group: "短い所有形",
      note: "後ろの名詞を直接説明します。"
    }),
    E({
      id: "l3-form-un",
      targetTamil: "உன் போன்",
      structuredRoman: "uṉ pōṉ",
      pronunciationRoman: "un pōn",
      katakana: "ウン ポーン",
      meaningJa: "君の電話",
      literalJapanese: "君の＋電話",
      grammarNote: "親称二人称の短い所有形。",
      vocabulary: ["உன்", "போன்"],
      audioGroup: "lesson03-forms",
      sourceRefs: RELATION_SOURCES,
      confidence: C("A", "A", "C", "A"),
      styleTags: ["intimate"],
      kind: "所有",
      group: "短い所有形",
      note: "親しい単数相手に使います。"
    }),
    E({
      id: "l3-form-unga",
      targetTamil: "உங்க டிக்கெட்",
      structuredRoman: "uṅka ṭikkeṭ",
      pronunciationRoman: "unga ṭikkeṭ",
      katakana: "ウンガ ティッケット",
      meaningJa: "あなたの切符",
      literalJapanese: "あなたの・敬意／複数＋切符",
      grammarNote: "敬意単数／複数の所有形。",
      vocabulary: ["உங்க", "டிக்கெட்"],
      audioGroup: "lesson03-forms",
      sourceRefs: RELATION_SOURCES,
      confidence: C("A", "A", "C", "A"),
      kind: "所有",
      group: "短い所有形",
      note: "旅行・初対面で使いやすい形です。"
    }),
    E({
      id: "l3-form-ennoda",
      targetTamil: "என்னோட பை",
      structuredRoman: "eṉṉ-ōṭa pai",
      pronunciationRoman: "ennōḍa pai",
      katakana: "エンノーダ パイ",
      meaningJa: "私のかばん",
      literalJapanese: "私・関係＋かばん",
      grammarNote: "口語で所有を明示する -ஓட 系。",
      vocabulary: ["என்னோட", "பை"],
      audioGroup: "lesson03-forms",
      sourceRefs: RELATION_SOURCES,
      confidence: C("B", "B", "C", "B"),
      kind: "所有",
      group: "-ஓட の二つの働き",
      note: "後ろに名詞が続くので所有です。"
    }),
    E({
      id: "l3-form-raviyoda-car",
      targetTamil: "ரவியோட கார்",
      structuredRoman: "ravi-y-ōṭa kār",
      pronunciationRoman: "raviyōḍa kār",
      katakana: "ラヴィヨーダ カール",
      meaningJa: "ラヴィの車",
      literalJapanese: "ラヴィ・関係＋車",
      grammarNote: "名詞＋-ஓட＋名詞の所有・関係。",
      vocabulary: ["ரவி", "கார்"],
      audioGroup: "lesson03-forms",
      sourceRefs: RELATION_SOURCES,
      confidence: C("B", "B", "C", "B"),
      kind: "所有",
      group: "-ஓட の二つの働き",
      note: "右側の名詞 கார் が判定の手掛かりです。"
    }),
    E({
      id: "l3-form-ennoda-vanga",
      targetTamil: "என்னோட வாங்க",
      structuredRoman: "eṉṉ-ōṭa vāṅka",
      pronunciationRoman: "ennōḍa vāṅga",
      katakana: "エンノーダ ヴァーンガ",
      meaningJa: "私と一緒に来てください",
      literalJapanese: "私・同行＋来てください",
      grammarNote: "-ஓட が動作の同行者を示す。",
      vocabulary: ["என்னோட", "வாங்க"],
      audioGroup: "lesson03-forms",
      sourceRefs: RELATION_SOURCES,
      confidence: C("B", "B", "C", "B"),
      kind: "同行",
      group: "-ஓட の二つの働き",
      note: "右側の動作 வாங்க が判定の手掛かりです。"
    }),
    E({
      id: "l3-form-kaiyala",
      targetTamil: "கையால",
      structuredRoman: "kai-y-āla",
      pronunciationRoman: "kaiyāla",
      katakana: "カイヤーラ",
      meaningJa: "手で／手によって",
      literalJapanese: "手・手段",
      grammarNote: "身体を手段として使う形。",
      vocabulary: ["கை"],
      audioGroup: "lesson03-forms",
      sourceRefs: RELATION_SOURCES,
      confidence: C("B", "B", "C", "B"),
      kind: "手段",
      group: "-ஆல",
      note: "同行者ではなく、動作に使うものです。"
    }),
    E({
      id: "l3-form-penavala",
      targetTamil: "பேனாவால",
      structuredRoman: "pēṉā-v-āla",
      pronunciationRoman: "pēnāvāla",
      katakana: "ペーナーヴァーラ",
      meaningJa: "ペンで／ペンによって",
      literalJapanese: "ペン・手段",
      grammarNote: "母音終わりの名詞と -ஆல の接続。",
      vocabulary: ["பேனா"],
      audioGroup: "lesson03-forms",
      sourceRefs: RELATION_SOURCES,
      confidence: C("B", "B", "C", "B"),
      kind: "道具",
      group: "-ஆல",
      note: "表面の வ் を構造行でも保存します。"
    }),
    E({
      id: "l3-form-busla",
      targetTamil: "பஸ்ல",
      structuredRoman: "pas-la",
      pronunciationRoman: "basla",
      katakana: "バスラ",
      meaningJa: "バスで",
      literalJapanese: "バス・場所／乗り物",
      grammarNote: "乗り物での移動に使うSST場所形。",
      vocabulary: ["பஸ்"],
      audioGroup: "lesson03-forms",
      sourceRefs: RELATION_SOURCES,
      confidence: C("B", "B", "C", "B"),
      kind: "乗り物",
      group: "日本語の「で」を分ける",
      note: "道具の -ஆல を機械的に選びません。"
    }),
    E({
      id: "l3-form-mazhaiyala",
      targetTamil: "மழையால",
      structuredRoman: "maḻai-y-āla",
      pronunciationRoman: "maḻaiyāla",
      katakana: "マライヤーラ",
      meaningJa: "雨のために",
      literalJapanese: "雨・原因",
      grammarNote: "-ஆல の原因用法。",
      vocabulary: ["மழை"],
      audioGroup: "lesson03-forms",
      sourceRefs: RELATION_SOURCES,
      confidence: C("B", "B", "C", "B"),
      kind: "原因",
      group: "日本語の「で」を分ける",
      note: "道具と原因は文全体の意味で判定します。"
    })
  ];

  window.TAMIL_LESSONS_V30 = window.TAMIL_LESSONS_V30 || [];
  window.TAMIL_LESSONS_V30.push(Object.freeze({
    id: "lesson03-possession-association-instrument-v31",
    number: 3,
    navTitle: "所有・共同・道具",
    title: "『の・と・で』を、関係の違いから選ぶ",
    tamilTitle: "உடைமை, உடனிகழ்ச்சி, கருவி",
    deck: "என்／உங்க の短い所有形、所有と同行を担う -ஓட、道具・原因を担う -ஆல を分けます。乗り物の -ல も対比します。",
    targets: ["短い所有形", "-ஓட", "-ஆல", "乗り物の -ல"],
    heroExample: examples[2],
    readSections: [
      {
        kicker: "POSSESSION",
        heading: "後ろの名詞を説明するとき、所有関係になる",
        paragraphs: [
          "<span class=\"ta-inline\" lang=\"ta\">என் வீடு</span>、<span class=\"ta-inline\" lang=\"ta\">உங்க போன்</span> の <strong>என்／உங்க</strong> は短い所有形です。一方、普通名詞や所有を明示したい代名詞には <strong>-ஓட</strong> 系を使えます。",
          "<span class=\"ta-inline\" lang=\"ta\">ரவியோட கார்</span> では、-ஓட の直後に名詞 கார் が続きます。したがって『ラヴィと車』ではなく、ラヴィと車の<strong>所属・関係</strong>を作ります。"
        ],
        formula: {
          label: "所有を作る",
          slots: ["ரவி", "-ஓட", "கார்", "ரவியோட கார்"],
          note: "人・関係標識・物 → 『ラヴィの車』"
        }
      },
      {
        kicker: "ONE FORM, TWO RELATIONS",
        heading: "-ஓட の後ろが名詞か動作かを見る",
        paragraphs: [
          "<span class=\"ta-inline\" lang=\"ta\">ரவியோட கார்</span> は所有、<span class=\"ta-inline\" lang=\"ta\">ரவியோட போறேன்</span> は同行です。同じ形でも、右側の語が何を作るかで関係が決まります。",
          "映画や速い会話で -ஓட が聞こえたら、すぐ日本語の『の』へ固定せず、次に名詞が来るか、動詞へ向かうかを待って判定します。正しい別レジスターの -உடைய／-உடன் は、文語・別層として保持します。"
        ],
        caseMap: {
          rows: [
            { role: "短い所有", targetForm: "என் / உன் / உங்க", pronunciation: "en / un / unga", kana: "エン／ウン／ウンガ", exampleTa: "என் வீடு", exampleRoman: "eṉ vīṭu", cue: "後ろの名詞は誰に関係するか" },
            { role: "所有・関係", targetForm: "-ஓட 系", pronunciation: "-ōḍa", kana: "-オーダ", exampleTa: "ரவியோட கார்", exampleRoman: "ravi-y-ōṭa kār", cue: "後ろに別の名詞が続くか" },
            { role: "同行・共同", targetForm: "-ஓட 系", pronunciation: "-ōḍa", kana: "-オーダ", exampleTa: "ரவியோட போறேன்", exampleRoman: "ravi-y-ōṭa pōṟ-ēṉ", cue: "同じ動作へ参加する相手か" },
            { role: "道具・原因", targetForm: "-ஆல 系", pronunciation: "-āla", kana: "-アーラ", exampleTa: "கையால / மழையால", exampleRoman: "kai-y-āla / maḻai-y-āla", cue: "何を使うか／何が原因か" },
            { role: "乗り物", targetForm: "-ல 系", pronunciation: "-la", kana: "-ラ", exampleTa: "பஸ்ல போறேன்", exampleRoman: "pas-la pōṟ-ēṉ", cue: "乗り物という場所・容器で移動するか" }
          ]
        }
      },
      {
        kicker: "INSTRUMENT",
        heading: "日本語の『で』から、格を一対一で選ばない",
        paragraphs: [
          "<span class=\"ta-inline\" lang=\"ta\">கையால சாப்பிடுறேன்</span> は手段、<span class=\"ta-inline\" lang=\"ta\">மழையால ரயில் லேட்</span> は原因です。-ஆல の意味は、名詞と述語がどんな関係を作るかで決まります。",
          "一方、<span class=\"ta-inline\" lang=\"ta\">பஸ்ல போறேன்</span> の乗り物は -ல で表すのが広く見られます。『手で』『雨で』『バスで』が日本語では同じ助詞でも、タミル語側の関係は別です。"
        ],
        note: {
          tone: "pink",
          title: "道具表現は変異が大きい",
          body: "-ஆல、-ஓட、-ல、後置詞や副動詞構文の分布には地域差があります。この課では、検証済みの中心例だけを産出対象にします。"
        }
      },
      {
        kicker: "SHORT READING",
        heading: "三文で、所有から同行へ動かす",
        paragraphs: [
          "同じ ரவி と கார் を繰り返し、-ஓட が名詞を結ぶ場合と動作へ参加させる場合を読み分けます。",
          "<span class=\"ta-inline\" lang=\"ta\">இது ரவியோட கார்.</span><br><span class=\"ta-inline\" lang=\"ta\">நான் ரவியோட போறேன்.</span><br><span class=\"ta-inline\" lang=\"ta\">நான் பஸ்ல போறேன்.</span>"
        ],
        miniReading: {
          intro: "車の持ち主を確認し、その人と一緒に移動します。",
          ids: ["l3-03", "l3-06", "l3-09"]
        }
      }
    ],
    formConfig: {
      mode: "grammar",
      title: "所有・同行・手段を、右側の語から判定する",
      intro: "同じ日本語助詞へ飛びつかず、名詞同士の関係、動作への共同参加、道具・原因、乗り物を別々に並べます。",
      patterns,
      checkpoint: "ரவியோட கார் と ரவியோட போறேன் の違い、கையால と பஸ்ல の違いを説明できれば合格です。"
    },
    examples,
    quiz: [
      {
        q: "என் வீடு の என் は、どんな働き？",
        options: ["後ろの名詞を説明する短い所有形", "同行者を示す形", "道具を示す形", "到達点を示す形"],
        answer: 0,
        feedback: "என் は一人称単数の短い所有形で、後ろの வீடு を説明します。",
        tags: ["正解", "-ஓட同行", "-ஆல手段", "与格"]
      },
      {
        q: "ரவியோட கார் の -ஓட は、ここでは何を表す？",
        options: ["ラヴィの車という所有・関係", "ラヴィと一緒に行くこと", "ラヴィを道具にすること", "ラヴィから来ること"],
        answer: 0,
        feedback: "-ஓட の後ろに名詞 கார் が続くため、所有・関係を作ります。",
        tags: ["正解", "同行との混同", "手段との混同", "起点との混同"]
      },
      {
        q: "ரவியோட போறேன் の -ஓட は、ここでは何を表す？",
        options: ["ラヴィと一緒に行くこと", "ラヴィの所有物", "ラヴィによる原因", "ラヴィへの到達"],
        answer: 0,
        feedback: "文末の移動動詞へつながり、ラヴィを同じ移動に参加する相手として示します。",
        tags: ["正解", "所有との混同", "原因との混同", "与格との混同"]
      },
      {
        q: "『手で食べます』の手段に当たる形は？",
        options: ["கையால", "என்னோட", "பஸ்ல", "வீட்டுக்கு"],
        answer: 0,
        feedback: "手を動作の手段として使うので கையால。ほかの選択肢も実在形ですが、役割が違います。",
        tags: ["正解", "同行", "乗り物場所", "到達"]
      },
      {
        q: "『バスで行きます』の中心例は？",
        options: ["பஸ்ல போறேன்.", "கையால சாப்பிடுறேன்.", "ரவியோட போறேன்.", "வீட்டுக்கு போறேன்."],
        answer: 0,
        feedback: "乗り物による移動は、この課では場所形 -ல の பஸ்ல を使います。日本語の『で』だけから -ஆல を選びません。",
        tags: ["正解", "手段", "同行", "到達"]
      }
    ]
  }));
})();

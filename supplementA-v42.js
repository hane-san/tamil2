(() => {
  "use strict";

  const { entry: E, confidence: C } = window.TAMIL_V30;
  const SOURCE_REFS = [
    "TAMIL-INTEGRATED-v2.0-rc.1 §§11,23-25,31-32",
    "PREDICATE-ENGINE-v1.1 §§1.4,4",
    "TN-SST-v4.1 lesson08 and lesson14",
    "SCHIFFMAN-SPOKEN-TAMIL: PNG agreement and poo paradigm"
  ];
  const make = input => E({ ...input, sourceRefs: SOURCE_REFS, confidence: input.confidence ?? C("B", "B", "C", "B") });

  const lessonExamples = new Map(
    (window.TAMIL_LESSONS_V30 || []).flatMap(lesson => lesson.examples || []).map(example => [example.id, example])
  );
  const reuse = id => {
    const example = lessonExamples.get(id);
    if (!example) throw new Error(`supplement A cannot resolve existing example ${id}`);
    return example;
  };

  const newExamples = [
    make({
      id: "sa-03",
      targetTamil: "நாங்க நேத்து சென்னைக்கு போனோம்.",
      structuredRoman: "nāṅka nēttu ceṉṉai-kku pōṉ-ōm.",
      pronunciationRoman: "nānga nēttu sennaikku pōnōm.",
      katakana: "ナーンガ ネーットゥ センナイック ポーノーム。",
      meaningJa: "私たちは昨日チェンナイへ行きました（聞き手を含まない）。",
      literalJapanese: "私たち・除外＋昨日＋チェンナイ・へ＋行く・過去・一人称複数",
      morphemes: [
        { surfaceTamil: "நாங்க", gloss: "私たち・聞き手を含まない" },
        { surfaceTamil: "நேத்து", gloss: "昨日" },
        { surfaceTamil: "சென்னைக்கு", gloss: "チェンナイへ" },
        { surfaceTamil: "போனோம்", gloss: "行きました・一人称複数" }
      ],
      grammarNote: "過去骨格 போன- に一人称複数 -ோம் が続きます。聞き手を含むかは語尾でなく நாங்க / நாம で読みます。",
      vocabulary: ["நாங்க", "நேத்து", "சென்னை", "போனோம்"],
      audioGroup: "supplement-a-core"
    }),
    make({
      id: "sa-04",
      targetTamil: "நாம நாளைக்கு சென்னைக்கு போவோம்.",
      structuredRoman: "nāma nāḷai-kku ceṉṉai-kku pōv-ōm.",
      pronunciationRoman: "nāma nāḷaikku sennaikku pōvōm.",
      katakana: "ナーマ ナーライック センナイック ポーヴォーム。",
      meaningJa: "私たちは明日チェンナイへ行きます／行きましょう（聞き手を含む）。",
      literalJapanese: "私たち・包括＋明日＋チェンナイ・へ＋行く・未来／意志・一人称複数",
      morphemes: [
        { surfaceTamil: "நாம", gloss: "私たち・聞き手を含む" },
        { surfaceTamil: "நாளைக்கு", gloss: "明日" },
        { surfaceTamil: "சென்னைக்கு", gloss: "チェンナイへ" },
        { surfaceTamil: "போவோம்", gloss: "行きます／行きましょう・一人称複数" }
      ],
      grammarNote: "未来骨格 போவ- に一人称複数 -ோம் が続きます。நாம では聞き手を含むため、文脈により勧誘にもなります。",
      vocabulary: ["நாம", "நாளைக்கு", "சென்னை", "போவோம்"],
      audioGroup: "supplement-a-core"
    }),
    make({
      id: "sa-05",
      targetTamil: "நீங்க நேத்து சென்னைக்கு போனீங்க.",
      structuredRoman: "nīṅka nēttu ceṉṉai-kku pōṉ-īṅka.",
      pronunciationRoman: "nīnga nēttu sennaikku pōnīnga.",
      katakana: "ニーンガ ネーットゥ センナイック ポーニーンガ。",
      meaningJa: "あなたは／あなたたちは昨日チェンナイへ行きました。",
      literalJapanese: "あなた／あなたたち＋昨日＋チェンナイ・へ＋行く・過去・丁寧／複数",
      morphemes: [
        { surfaceTamil: "நீங்க", gloss: "あなた／あなたたち" },
        { surfaceTamil: "நேத்து", gloss: "昨日" },
        { surfaceTamil: "சென்னைக்கு", gloss: "チェンナイへ" },
        { surfaceTamil: "போனீங்க", gloss: "行きました・丁寧／複数" }
      ],
      grammarNote: "過去骨格 போன- に丁寧単数・二人称複数の -ீங்க が続きます。旅行・初対面の中心形です。",
      vocabulary: ["நீங்க", "நேத்து", "சென்னை", "போனீங்க"],
      audioGroup: "supplement-a-core",
      featured: true
    }),
    make({
      id: "sa-06",
      targetTamil: "நீங்க நாளைக்கு சென்னைக்கு போவீங்க.",
      structuredRoman: "nīṅka nāḷai-kku ceṉṉai-kku pōv-īṅka.",
      pronunciationRoman: "nīnga nāḷaikku sennaikku pōvīnga.",
      katakana: "ニーンガ ナーライック センナイック ポーヴィーンガ。",
      meaningJa: "あなたは／あなたたちは明日チェンナイへ行きます。",
      literalJapanese: "あなた／あなたたち＋明日＋チェンナイ・へ＋行く・未来・丁寧／複数",
      morphemes: [
        { surfaceTamil: "நீங்க", gloss: "あなた／あなたたち" },
        { surfaceTamil: "நாளைக்கு", gloss: "明日" },
        { surfaceTamil: "சென்னைக்கு", gloss: "チェンナイへ" },
        { surfaceTamil: "போவீங்க", gloss: "行きます・未来・丁寧／複数" }
      ],
      grammarNote: "未来骨格 போவ- に -ீங்க が続きます。主語を省いても語尾から丁寧な聞き手／複数を読み戻せます。",
      vocabulary: ["நீங்க", "நாளைக்கு", "சென்னை", "போவீங்க"],
      audioGroup: "supplement-a-core"
    }),
    make({
      id: "sa-07",
      targetTamil: "அவர் நேத்து சென்னைக்கு போனார்.",
      structuredRoman: "avar nēttu ceṉṉai-kku pōṉ-ār.",
      pronunciationRoman: "avar nēttu sennaikku pōnār.",
      katakana: "アヴァル ネーットゥ センナイック ポーナール。",
      meaningJa: "その方は昨日チェンナイへ行きました。",
      literalJapanese: "その方・敬意＋昨日＋チェンナイ・へ＋行く・過去・敬意",
      morphemes: [
        { surfaceTamil: "அவர்", gloss: "その方・敬意" },
        { surfaceTamil: "நேத்து", gloss: "昨日" },
        { surfaceTamil: "சென்னைக்கு", gloss: "チェンナイへ" },
        { surfaceTamil: "போனார்", gloss: "行きました・敬意" }
      ],
      grammarNote: "過去骨格 போன- に敬意単数 -ார் が続きます。旧資料の -ாரு 表示は主表示へ自動移植せず、現行第14課の系列へ合わせます。",
      vocabulary: ["அவர்", "நேத்து", "சென்னை", "போனார்"],
      audioGroup: "supplement-a-core",
      confidence: C("B", "B", "C", "C")
    }),
    make({
      id: "sa-08",
      targetTamil: "அவர் நாளைக்கு சென்னைக்கு போவார்.",
      structuredRoman: "avar nāḷai-kku ceṉṉai-kku pōv-ār.",
      pronunciationRoman: "avar nāḷaikku sennaikku pōvār.",
      katakana: "アヴァル ナーライック センナイック ポーヴァール。",
      meaningJa: "その方は明日チェンナイへ行きます。",
      literalJapanese: "その方・敬意＋明日＋チェンナイ・へ＋行く・未来・敬意",
      morphemes: [
        { surfaceTamil: "அவர்", gloss: "その方・敬意" },
        { surfaceTamil: "நாளைக்கு", gloss: "明日" },
        { surfaceTamil: "சென்னைக்கு", gloss: "チェンナイへ" },
        { surfaceTamil: "போவார்", gloss: "行きます・未来・敬意" }
      ],
      grammarNote: "未来骨格 போவ- に敬意単数 -ார் が続きます。性別を前面に出さず、一人の第三者へ敬意を示します。",
      vocabulary: ["அவர்", "நாளைக்கு", "சென்னை", "போவார்"],
      audioGroup: "supplement-a-core",
      featured: true,
      confidence: C("B", "B", "C", "C")
    }),
    make({
      id: "sa-09",
      targetTamil: "அவங்க நேத்து சென்னைக்கு போனாங்க.",
      structuredRoman: "avaṅka nēttu ceṉṉai-kku pōṉ-āṅka.",
      pronunciationRoman: "avanga nēttu sennaikku pōnānga.",
      katakana: "アヴァンガ ネーットゥ センナイック ポーナーンガ。",
      meaningJa: "その人たちは／その方は昨日チェンナイへ行きました。",
      literalJapanese: "その人たち／その方＋昨日＋チェンナイ・へ＋行く・過去・人間複数／会話的敬意",
      morphemes: [
        { surfaceTamil: "அவங்க", gloss: "その人たち／その方" },
        { surfaceTamil: "நேத்து", gloss: "昨日" },
        { surfaceTamil: "சென்னைக்கு", gloss: "チェンナイへ" },
        { surfaceTamil: "போனாங்க", gloss: "行きました・人間複数／会話的敬意" }
      ],
      grammarNote: "過去骨格 போன- に -ாங்க が続きます。人間複数か会話的敬意単数かは文脈で決めます。",
      vocabulary: ["அவங்க", "நேத்து", "சென்னை", "போனாங்க"],
      audioGroup: "supplement-a-core"
    }),
    make({
      id: "sa-10",
      targetTamil: "அவங்க நாளைக்கு சென்னைக்கு போவாங்க.",
      structuredRoman: "avaṅka nāḷai-kku ceṉṉai-kku pōv-āṅka.",
      pronunciationRoman: "avanga nāḷaikku sennaikku pōvānga.",
      katakana: "アヴァンガ ナーライック センナイック ポーヴァーンガ。",
      meaningJa: "その人たちは／その方は明日チェンナイへ行きます。",
      literalJapanese: "その人たち／その方＋明日＋チェンナイ・へ＋行く・未来・人間複数／会話的敬意",
      morphemes: [
        { surfaceTamil: "அவங்க", gloss: "その人たち／その方" },
        { surfaceTamil: "நாளைக்கு", gloss: "明日" },
        { surfaceTamil: "சென்னைக்கு", gloss: "チェンナイへ" },
        { surfaceTamil: "போவாங்க", gloss: "行きます・未来・人間複数／会話的敬意" }
      ],
      grammarNote: "未来骨格 போவ- に -ாங்க が続きます。人数と敬意を語尾だけで一意に決めません。",
      vocabulary: ["அவங்க", "நாளைக்கு", "சென்னை", "போவாங்க"],
      audioGroup: "supplement-a-core"
    })
  ];

  const examples = Object.freeze([
    reuse("l8-08"),
    reuse("l8-09"),
    ...newExamples
  ]);

  const patterns = Object.freeze([
    make({ id: "sa-form-ponen", targetTamil: "போனேன்", structuredRoman: "pōṉ-ēṉ", pronunciationRoman: "pōnēn", katakana: "ポーネーン", meaningJa: "私は行きました", literalJapanese: "行く・過去・私", morphemes: [{ surfaceTamil: "போனேன்", gloss: "行く・過去・私" }], grammarNote: "過去骨格＋一人称単数。", vocabulary: ["போனேன்"], audioGroup: "supplement-a-forms", kind: "過去", group: "私", note: "-ேன் は一人称単数。" }),
    make({ id: "sa-form-poven", targetTamil: "போவேன்", structuredRoman: "pōv-ēṉ", pronunciationRoman: "pōvēn", katakana: "ポーヴェーン", meaningJa: "私は行きます／行くつもりです", literalJapanese: "行く・未来・私", morphemes: [{ surfaceTamil: "போவேன்", gloss: "行く・未来・私" }], grammarNote: "未来骨格＋一人称単数。", vocabulary: ["போவேன்"], audioGroup: "supplement-a-forms", kind: "未来", group: "私", note: "-ேன் は一人称単数。" }),
    make({ id: "sa-form-ponom", targetTamil: "போனோம்", structuredRoman: "pōṉ-ōm", pronunciationRoman: "pōnōm", katakana: "ポーノーム", meaningJa: "私たちは行きました", literalJapanese: "行く・過去・私たち", morphemes: [{ surfaceTamil: "போனோம்", gloss: "行く・過去・私たち" }], grammarNote: "過去骨格＋一人称複数。", vocabulary: ["போனோம்"], audioGroup: "supplement-a-forms", kind: "過去", group: "私たち", note: "-ோம் は一人称複数。" }),
    make({ id: "sa-form-povom", targetTamil: "போவோம்", structuredRoman: "pōv-ōm", pronunciationRoman: "pōvōm", katakana: "ポーヴォーム", meaningJa: "私たちは行きます／行きましょう", literalJapanese: "行く・未来・私たち", morphemes: [{ surfaceTamil: "போவோம்", gloss: "行く・未来・私たち" }], grammarNote: "未来骨格＋一人称複数。", vocabulary: ["போவோம்"], audioGroup: "supplement-a-forms", kind: "未来", group: "私たち", note: "நாம なら勧誘にもなる。" }),
    make({ id: "sa-form-poninga", targetTamil: "போனீங்க", structuredRoman: "pōṉ-īṅka", pronunciationRoman: "pōnīnga", katakana: "ポーニーンガ", meaningJa: "あなたは／あなたたちは行きました", literalJapanese: "行く・過去・丁寧／複数", morphemes: [{ surfaceTamil: "போனீங்க", gloss: "行く・過去・丁寧／複数" }], grammarNote: "過去骨格＋丁寧単数／二人称複数。", vocabulary: ["போனீங்க"], audioGroup: "supplement-a-forms", kind: "過去", group: "丁寧な聞き手", note: "-ீங்க は丁寧単数・二人称複数。" }),
    make({ id: "sa-form-povinga", targetTamil: "போவீங்க", structuredRoman: "pōv-īṅka", pronunciationRoman: "pōvīnga", katakana: "ポーヴィーンガ", meaningJa: "あなたは／あなたたちは行きます", literalJapanese: "行く・未来・丁寧／複数", morphemes: [{ surfaceTamil: "போவீங்க", gloss: "行く・未来・丁寧／複数" }], grammarNote: "未来骨格＋丁寧単数／二人称複数。", vocabulary: ["போவீங்க"], audioGroup: "supplement-a-forms", kind: "未来", group: "丁寧な聞き手", note: "旅行で優先する二人称。" }),
    make({ id: "sa-form-ponar", targetTamil: "போனார்", structuredRoman: "pōṉ-ār", pronunciationRoman: "pōnār", katakana: "ポーナール", meaningJa: "その方は行きました", literalJapanese: "行く・過去・敬意", morphemes: [{ surfaceTamil: "போனார்", gloss: "行く・過去・敬意" }], grammarNote: "過去骨格＋敬意単数。", vocabulary: ["போனார்"], audioGroup: "supplement-a-forms", kind: "過去", group: "敬意ある第三者", note: "現行第14課と同じ -ார் を主表示。", confidence: C("B", "B", "C", "C") }),
    make({ id: "sa-form-povar", targetTamil: "போவார்", structuredRoman: "pōv-ār", pronunciationRoman: "pōvār", katakana: "ポーヴァール", meaningJa: "その方は行きます", literalJapanese: "行く・未来・敬意", morphemes: [{ surfaceTamil: "போவார்", gloss: "行く・未来・敬意" }], grammarNote: "未来骨格＋敬意単数。", vocabulary: ["போவார்"], audioGroup: "supplement-a-forms", kind: "未来", group: "敬意ある第三者", note: "性別を前面に出さない。", confidence: C("B", "B", "C", "C") }),
    make({ id: "sa-form-ponanga", targetTamil: "போனாங்க", structuredRoman: "pōṉ-āṅka", pronunciationRoman: "pōnānga", katakana: "ポーナーンガ", meaningJa: "その人たち／その方は行きました", literalJapanese: "行く・過去・人間複数／会話的敬意", morphemes: [{ surfaceTamil: "போனாங்க", gloss: "行く・過去・人間複数／会話的敬意" }], grammarNote: "過去骨格＋人間複数／会話的敬意。", vocabulary: ["போனாங்க"], audioGroup: "supplement-a-forms", kind: "過去", group: "人間複数・会話的敬意", note: "人数は文脈で判断。" }),
    make({ id: "sa-form-povanga", targetTamil: "போவாங்க", structuredRoman: "pōv-āṅka", pronunciationRoman: "pōvānga", katakana: "ポーヴァーンガ", meaningJa: "その人たち／その方は行きます", literalJapanese: "行く・未来・人間複数／会話的敬意", morphemes: [{ surfaceTamil: "போவாங்க", gloss: "行く・未来・人間複数／会話的敬意" }], grammarNote: "未来骨格＋人間複数／会話的敬意。", vocabulary: ["போவாங்க"], audioGroup: "supplement-a-forms", kind: "未来", group: "人間複数・会話的敬意", note: "複数と敬意単数を兼ね得る。" })
  ]);

  const supplement = {
    id: "supplement-a-v42",
    code: "A",
    navTitle: "全人称の過去・未来",
    title: "第8課の時制と第14課の人称を掛け合わせる",
    tamilTitle: "போனீங்க · போவீங்க · போனாங்க · போவாங்க",
    deck: "一人称で学んだ過去・未来を、丁寧な聞き手、敬意ある第三者、人間複数へ広げます。語幹・時制・人称を同時にばらばらにせず、போ『行く』一語で比較します。",
    entryQuestion: "『私は行った』から、『あなたは行った』『その方は行くだろう』へ、どこを替える？",
    prerequisites: Object.freeze([8, 14]),
    returnToLessons: Object.freeze([8, 14]),
    legacyRefs: Object.freeze(["curriculum-v28.js:coreVerbs.po"]),
    targets: Object.freeze(["過去骨格＋人物語尾", "未来骨格＋人物語尾", "丁寧・敬意・人間複数", "நாங்க / நாம の範囲"]),
    featuredExampleIds: Object.freeze(["l8-08", "sa-05", "sa-08"]),
    heroExample: reuse("l8-08"),
    criticalPoints: Object.freeze([
      "まず <span class=\"ta-inline\" lang=\"ta\">போன- / போவ-</span> <span class=\"roman-inline\">(pōṉ- / pōv-)</span> で過去・未来を決め、その後に右端の人物語尾を読む。",
      "<span class=\"ta-inline\" lang=\"ta\">-ீங்க</span> <span class=\"roman-inline\">(-īṅka)</span> は丁寧単数・二人称複数、<span class=\"ta-inline\" lang=\"ta\">-ாங்க</span> <span class=\"roman-inline\">(-āṅka)</span> は人間複数・会話的敬意になり得る。",
      "<span class=\"ta-inline\" lang=\"ta\">நாங்க / நாம</span> <span class=\"roman-inline\">(nāṅka / nāma)</span> はどちらも <span class=\"ta-inline\" lang=\"ta\">-ோம்</span> <span class=\"roman-inline\">(-ōm)</span>。聞き手を含むかは代名詞で読む。"
    ]),
    readSections: Object.freeze([
      {
        kicker: "まず結論",
        heading: "時制を先に、人物を後から読む",
        takeaway: "<span class=\"ta-inline\" lang=\"ta\">போனீங்க</span> <span class=\"roman-inline\">(pōṉ-īṅka)</span> は過去＋丁寧な聞き手、<span class=\"ta-inline\" lang=\"ta\">போவாங்க</span> <span class=\"roman-inline\">(pōv-āṅka)</span> は未来＋人間複数／会話的敬意です。",
        paragraphs: [
          "第8課では <span class=\"ta-inline\" lang=\"ta\">போனேன் / போவேன்</span> <span class=\"roman-inline\">(pōṉ-ēṉ / pōv-ēṉ)</span> のように一人称で時制を動かしました。第14課では現在を固定し、人物語尾を比べました。",
          "補講Aでは二つを掛け合わせます。最初に <span class=\"ta-inline\" lang=\"ta\">போன- / போவ-</span> <span class=\"roman-inline\">(pōṉ- / pōv-)</span> を見つけ、最後の <span class=\"ta-inline\" lang=\"ta\">-ேன் / -ோம் / -ீங்க / -ார் / -ாங்க</span> <span class=\"roman-inline\">(-ēṉ / -ōm / -īṅka / -ār / -āṅka)</span> を読みます。"
        ]
      },
      {
        kicker: "形を分ける",
        heading: "同じ過去・未来の骨格に、人物語尾を付け替える",
        takeaway: "<span class=\"ta-inline\" lang=\"ta\">போனோம் / போவோம்</span> <span class=\"roman-inline\">(pōṉ-ōm / pōv-ōm)</span>、<span class=\"ta-inline\" lang=\"ta\">போனீங்க / போவீங்க</span> <span class=\"roman-inline\">(pōṉ-īṅka / pōv-īṅka)</span> のように縦に比べます。",
        paragraphs: [
          "過去では <span class=\"ta-inline\" lang=\"ta\">போனேன்・போனோம்・போனீங்க・போனார்・போனாங்க</span> <span class=\"roman-inline\">(pōṉ-ēṉ・pōṉ-ōm・pōṉ-īṅka・pōṉ-ār・pōṉ-āṅka)</span> と、過去骨格を保ったまま右端を替えます。",
          "未来では <span class=\"ta-inline\" lang=\"ta\">போவேன்・போவோம்・போவீங்க・போவார்・போவாங்க</span> <span class=\"roman-inline\">(pōv-ēṉ・pōv-ōm・pōv-īṅka・pōv-ār・pōv-āṅka)</span>。形の差を一度に一軸だけ動かします。"
        ]
      },
      {
        kicker: "なぜ？",
        heading: "タミル語の有限動詞は、時制と人物を文末へ畳み込む",
        takeaway: "主語が省かれても <span class=\"ta-inline\" lang=\"ta\">போவீங்க</span> <span class=\"roman-inline\">(pōv-īṅka)</span> から未来と丁寧な聞き手を読み戻せます。",
        paragraphs: [
          "日本語では『行きました』だけから主語を特定できません。タミル語では <span class=\"ta-inline\" lang=\"ta\">போனீங்க</span> <span class=\"roman-inline\">(pōṉ-īṅka)</span> の右端に聞き手情報が残ります。",
          "ただし語尾は一対一ではありません。<span class=\"ta-inline\" lang=\"ta\">-ீங்க</span> <span class=\"roman-inline\">(-īṅka)</span> は丁寧な一人にも複数にも使われ、<span class=\"ta-inline\" lang=\"ta\">-ாங்க</span> <span class=\"roman-inline\">(-āṅka)</span> も複数か敬意単数かを文脈へ残します。"
        ]
      },
      {
        kicker: "対比",
        heading: "நாங்க と நாம、அவர் と அவங்க を同じ違いだと思わない",
        takeaway: "<span class=\"ta-inline\" lang=\"ta\">நாங்க / நாம</span> <span class=\"roman-inline\">(nāṅka / nāma)</span> は参加範囲、<span class=\"ta-inline\" lang=\"ta\">அவர் / அவங்க</span> <span class=\"roman-inline\">(avar / avaṅka)</span> は敬意と人数の見せ方が違います。",
        paragraphs: [
          "<span class=\"ta-inline\" lang=\"ta\">நாங்க போனோம்</span> <span class=\"roman-inline\">(nāṅka pōṉ-ōm)</span> は聞き手を含まず、<span class=\"ta-inline\" lang=\"ta\">நாம போவோம்</span> <span class=\"roman-inline\">(nāma pōv-ōm)</span> は聞き手を含みます。違いは -ோம் ではなく代名詞です。",
          "<span class=\"ta-inline\" lang=\"ta\">அவர் போவார்</span> <span class=\"roman-inline\">(avar pōv-ār)</span> は一人への敬意を明示します。<span class=\"ta-inline\" lang=\"ta\">அவங்க போவாங்க</span> <span class=\"roman-inline\">(avaṅka pōv-āṅka)</span> は人間複数にも会話的敬意単数にもなり得ます。"
        ]
      },
      {
        kicker: "実際に使う",
        heading: "旅行では நீங்க、第三者には அவர் を安全な中心にする",
        takeaway: "初対面の相手には <span class=\"ta-inline\" lang=\"ta\">நீங்க போனீங்க / போவீங்க</span> <span class=\"roman-inline\">(nīṅka pōṉ-īṅka / pōv-īṅka)</span> を優先します。",
        paragraphs: [
          "相手の昨日の行動なら <span class=\"ta-inline\" lang=\"ta\">நீங்க நேத்து சென்னைக்கு போனீங்க</span> <span class=\"roman-inline\">(nīṅka nēttu ceṉṉai-kku pōṉ-īṅka)</span>。明日の予定なら <span class=\"ta-inline\" lang=\"ta\">நீங்க நாளைக்கு சென்னைக்கு போவீங்க</span> <span class=\"roman-inline\">(nīṅka nāḷai-kku ceṉṉai-kku pōv-īṅka)</span> です。",
          "一人の第三者に敬意を示すなら <span class=\"ta-inline\" lang=\"ta\">அவர் போனார் / போவார்</span> <span class=\"roman-inline\">(avar pōṉ-ār / pōv-ār)</span>。旧資料にある語末 -ரு を機械的に主表示へ戻さず、現行第14課の表示体系へ接続します。"
        ]
      },
      {
        kicker: "3文で復習",
        heading: "昨日のあなた、明日のその方、明日のその人たち",
        takeaway: "時間語、主語、動詞末尾の三か所を対応させれば、過去・未来と人物を同時に読めます。",
        paragraphs: [
          "<span class=\"ta-inline\" lang=\"ta\">நீங்க நேத்து சென்னைக்கு போனீங்க</span> <span class=\"roman-inline\">(nīṅka nēttu ceṉṉai-kku pōṉ-īṅka)</span> は、昨日＋丁寧な聞き手です。",
          "<span class=\"ta-inline\" lang=\"ta\">அவர் நாளைக்கு சென்னைக்கு போவார்</span> <span class=\"roman-inline\">(avar nāḷai-kku ceṉṉai-kku pōv-ār)</span> は、明日＋敬意ある一人です。",
          "<span class=\"ta-inline\" lang=\"ta\">அவங்க நாளைக்கு சென்னைக்கு போவாங்க</span> <span class=\"roman-inline\">(avaṅka nāḷai-kku ceṉṉai-kku pōv-āṅka)</span> は、明日＋人間複数／会話的敬意です。"
        ],
        miniReading: { ids: ["sa-05", "sa-08", "sa-10"] }
      }
    ]),
    formConfig: Object.freeze({
      mode: "supplement",
      title: "போ『行く』の過去・未来を人物別に比べる",
      intro: "動詞を一語に固定し、時制骨格と人物語尾だけを縦に比較します。親しい二人称・男性／女性単数・非人間は、別の監査を終えてから追加します。",
      patterns,
      checkpoint: "போன- / போவ- を先に判定し、-ேன் / -ோம் / -ீங்க / -ார் / -ாங்க を後から読む。"
    }),
    examples,
    quiz: Object.freeze([
      {
        focus: "形態分解",
        q: "<span class=\"ta-inline\" lang=\"ta\">போவீங்க</span> <span class=\"roman-inline\">(pōv-īṅka)</span> の組み合わせは？",
        options: ["未来＋丁寧単数／二人称複数", "過去＋丁寧単数／二人称複数", "未来＋人間複数／会話的敬意", "未来＋一人称単数"],
        answer: 0,
        feedback: "<span class=\"ta-inline\" lang=\"ta\">போவ-</span> <span class=\"roman-inline\">(pōv-)</span> が未来、<span class=\"ta-inline\" lang=\"ta\">-ீங்க</span> <span class=\"roman-inline\">(-īṅka)</span> が丁寧単数／二人称複数です。",
        rule: "時制骨格を先に、人物語尾を後から読む。",
        tags: ["正解", "TAM", "一致", "一人称との混同"]
      },
      {
        focus: "機能選択",
        q: "丁寧な相手について『あなたは昨日チェンナイへ行きました』と言う文は？",
        options: [
          "<span class=\"quiz-option-ta\" lang=\"ta\">நீங்க நேத்து சென்னைக்கு போனீங்க.</span><span class=\"quiz-option-roman\">nīṅka nēttu ceṉṉai-kku pōṉ-īṅka.</span>",
          "<span class=\"quiz-option-ta\" lang=\"ta\">நீங்க நாளைக்கு சென்னைக்கு போவீங்க.</span><span class=\"quiz-option-roman\">nīṅka nāḷai-kku ceṉṉai-kku pōv-īṅka.</span>",
          "<span class=\"quiz-option-ta\" lang=\"ta\">அவங்க நேத்து சென்னைக்கு போனாங்க.</span><span class=\"quiz-option-roman\">avaṅka nēttu ceṉṉai-kku pōṉ-āṅka.</span>",
          "<span class=\"quiz-option-ta\" lang=\"ta\">நான் நேத்து சென்னைக்கு போனேன்.</span><span class=\"quiz-option-roman\">nāṉ nēttu ceṉṉai-kku pōṉ-ēṉ.</span>"
        ],
        answer: 0,
        feedback: "主語 <span class=\"ta-inline\" lang=\"ta\">நீங்க</span> <span class=\"roman-inline\">(nīṅka)</span>、時間語 <span class=\"ta-inline\" lang=\"ta\">நேத்து</span> <span class=\"roman-inline\">(nēttu)</span>、過去丁寧形 <span class=\"ta-inline\" lang=\"ta\">போனீங்க</span> <span class=\"roman-inline\">(pōṉ-īṅka)</span> が対応します。",
        rule: "主語・時間語・動詞末尾の三つを一致させる。",
        tags: ["正解", "TAM", "人物一致", "一人称との混同"]
      },
      {
        focus: "実用場面",
        q: "敬意を示す一人の第三者について『その方は明日チェンナイへ行きます』と言う文は？",
        options: [
          "<span class=\"quiz-option-ta\" lang=\"ta\">அவர் நாளைக்கு சென்னைக்கு போவார்.</span><span class=\"quiz-option-roman\">avar nāḷai-kku ceṉṉai-kku pōv-ār.</span>",
          "<span class=\"quiz-option-ta\" lang=\"ta\">அவர் நேத்து சென்னைக்கு போனார்.</span><span class=\"quiz-option-roman\">avar nēttu ceṉṉai-kku pōṉ-ār.</span>",
          "<span class=\"quiz-option-ta\" lang=\"ta\">அவங்க நாளைக்கு சென்னைக்கு போவாங்க.</span><span class=\"quiz-option-roman\">avaṅka nāḷai-kku ceṉṉai-kku pōv-āṅka.</span>",
          "<span class=\"quiz-option-ta\" lang=\"ta\">நீங்க நாளைக்கு சென்னைக்கு போவீங்க.</span><span class=\"quiz-option-roman\">nīṅka nāḷai-kku ceṉṉai-kku pōv-īṅka.</span>"
        ],
        answer: 0,
        feedback: "<span class=\"ta-inline\" lang=\"ta\">அவர்</span> <span class=\"roman-inline\">(avar)</span> と敬意単数 <span class=\"ta-inline\" lang=\"ta\">-ார்</span> <span class=\"roman-inline\">(-ār)</span> を、未来骨格 <span class=\"ta-inline\" lang=\"ta\">போவ-</span> <span class=\"roman-inline\">(pōv-)</span> に合わせます。",
        rule: "一人への敬意は அவர்＋-ார் を中心にする。",
        tags: ["正解", "TAM", "人間複数・会話的敬意", "二人称との混同"]
      },
      {
        focus: "混同防止",
        q: "<span class=\"ta-inline\" lang=\"ta\">அவங்க போனாங்க</span> <span class=\"roman-inline\">(avaṅka pōṉ-āṅka)</span> について正しい説明は？",
        options: ["人間複数にも、会話的な敬意単数にもなり得る", "必ず敬意のない男性一人だけを指す", "必ず聞き手を含む私たちを指す", "必ず非人間複数だけを指す"],
        answer: 0,
        feedback: "<span class=\"ta-inline\" lang=\"ta\">அவங்க</span> <span class=\"roman-inline\">(avaṅka)</span>＋<span class=\"ta-inline\" lang=\"ta\">-ாங்க</span> <span class=\"roman-inline\">(-āṅka)</span> は、人数・敬意の解釈を文脈へ残します。",
        rule: "-ாங்க を見たら、人数と敬意を場面で確認する。",
        tags: ["正解", "男性単数への固定", "一人称複数との混同", "非人間との混同"]
      },
      {
        focus: "総合復習",
        q: "<span class=\"ta-inline\" lang=\"ta\">நாம நாளைக்கு சென்னைக்கு போவோம்</span> <span class=\"roman-inline\">(nāma nāḷai-kku ceṉṉai-kku pōv-ōm)</span> の読みは？",
        options: ["聞き手を含む私たちが、明日行く／一緒に行こう", "聞き手を含まない私たちが、昨日行った", "丁寧な相手が、明日行く", "その人たちが、昨日行った"],
        answer: 0,
        feedback: "<span class=\"ta-inline\" lang=\"ta\">நாம</span> <span class=\"roman-inline\">(nāma)</span> が聞き手を含み、<span class=\"ta-inline\" lang=\"ta\">நாளைக்கு</span> <span class=\"roman-inline\">(nāḷai-kku)</span> と <span class=\"ta-inline\" lang=\"ta\">போவோம்</span> <span class=\"roman-inline\">(pōv-ōm)</span> が未来・勧誘を支えます。",
        rule: "包括・除外は代名詞、時制は時間語と動詞骨格で読む。",
        tags: ["正解", "包括・除外＋TAM", "二人称との混同", "三人称＋TAM"]
      }
    ])
  };

  window.TAMIL_SUPPLEMENTS_V42 = window.TAMIL_SUPPLEMENTS_V42 || [];
  window.TAMIL_SUPPLEMENTS_V42.push(Object.freeze(supplement));
})();

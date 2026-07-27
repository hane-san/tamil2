(() => {
  "use strict";

  const { entry: E, confidence: C } = window.TAMIL_V30;
  const SOURCE_REFS = [
    "TAMIL-INTEGRATED-v2.0-rc.1 §§23-25,31-32",
    "CORE-CURRICULUM-v1.1 §2 items24-25",
    "PREDICATE-ENGINE-v1.1 §§1.4,4,7",
    "TN-SST-v4.1 lessons03,12,17",
    "SCHIFFMAN-ASPECT-1999: koo self-affective and self-benefactive action",
    "SCHIFFMAN-SPOKEN-TAMIL: reflexive pronoun, reciprocal relations and padu passive",
    "legacy grammar-v28.js chapter38 examples38-05..38-12 (migration source only)"
  ];
  const make = input => E({ ...input, sourceRefs: SOURCE_REFS, confidence: input.confidence ?? C("B", "B", "C", "B") });
  const makeLiterary = input => E({
    ...input,
    primaryRegister: "LT-WR",
    regionalProfile: "TN-GENERAL",
    styleTags: ["formal", "reading-only"],
    sourceRefs: SOURCE_REFS,
    confidence: input.confidence ?? C("B", "B", "C", "B")
  });

  const supplementExamples = new Map(
    (window.TAMIL_SUPPLEMENTS_V42 || []).flatMap(supplement => supplement.examples || []).map(example => [example.id, example])
  );
  const reuse = id => {
    const example = supplementExamples.get(id);
    if (!example) throw new Error(`supplement H cannot resolve existing example ${id}`);
    return example;
  };

  const newExamples = [
    make({
      id: "sh-01",
      targetTamil: "இந்த நம்பரை எழுதிக்கோங்க.",
      structuredRoman: "inta nampar-ai eḻuti-kkōṅka.",
      underlyingAnalysis: "எழுதி + கொள் + -உங்கள் → எழுதிக்கோங்க",
      pronunciationRoman: "inda nambare eḻudikkōnga.",
      katakana: "インダ ナンバレ エルディッコーンガ。",
      meaningJa: "この番号を自分用に書き留めてください。",
      literalJapanese: "この＋番号・を＋書いて・自分に関わるように・丁寧命令",
      morphemes: [
        { surfaceTamil: "இந்த நம்பரை", analysis: "இந்த நம்பர் + -ஐ", gloss: "この番号を" },
        { surfaceTamil: "எழுதிக்கோங்க", analysis: "எழுதி + கொள் + -உங்கள்", gloss: "自分用に書き留めてください" }
      ],
      grammarNote: "எழுதுங்க は単純な『書いてください』、எழுதிக்கோங்க は自分用に確保・記録する方向を加えます。-க்கோ を日本語の再帰代名詞へ一律対応させません。",
      vocabulary: ["இந்த நம்பர்", "எழுதிக்கோங்க"],
      audioGroup: "supplement-h-core",
      featured: true
    }),
    make({
      id: "sh-02",
      targetTamil: "இந்த நம்பரை எழுதுங்க.",
      structuredRoman: "inta nampar-ai eḻutu-ṅka.",
      pronunciationRoman: "inda nambare eḻudunga.",
      katakana: "インダ ナンバレ エルドゥンガ。",
      meaningJa: "この番号を書いてください。",
      literalJapanese: "この＋番号・を＋書く・丁寧命令",
      morphemes: [
        { surfaceTamil: "இந்த நம்பரை", gloss: "この番号を" },
        { surfaceTamil: "எழுதுங்க", analysis: "எழுது + -உங்கள்", gloss: "書いてください" }
      ],
      grammarNote: "単純な丁寧命令です。自分用に書き留める含みを必ず持つ எழுதிக்கோங்க と対比します。",
      vocabulary: ["இந்த நம்பர்", "எழுதுங்க"],
      audioGroup: "supplement-h-core"
    }),
    make({
      id: "sh-03",
      targetTamil: "இந்த டிக்கெட்டை வாங்கிக்கோங்க.",
      structuredRoman: "inta ṭikkeṭṭ-ai vāṅki-kkōṅka.",
      underlyingAnalysis: "வாங்கி + கொள் + -உங்கள் → வாங்கிக்கோங்க",
      pronunciationRoman: "inda ṭikkeṭṭe vāngikkōnga.",
      katakana: "インダ ティッケッテ ヴァーンギッコーンガ。",
      meaningJa: "この切符を自分用に買っておいてください。",
      literalJapanese: "この＋切符・を＋買って・自分用に確保する・丁寧命令",
      morphemes: [
        { surfaceTamil: "இந்த டிக்கெட்டை", analysis: "இந்த டிக்கெட் + -ஐ", gloss: "この切符を" },
        { surfaceTamil: "வாங்கிக்கோங்க", analysis: "வாங்கி + கொள் + -உங்கள்", gloss: "自分用に買って確保してください" }
      ],
      grammarNote: "வாங்கிக்கோங்க は単なる購入命令より、受け手自身のために確保する方向を出せます。文脈によって『受け取って』にも広がるため一語訳へ固定しません。",
      vocabulary: ["டிக்கெட்", "வாங்கிக்கோங்க"],
      audioGroup: "supplement-h-core",
      featured: true
    }),
    make({
      id: "sh-04",
      targetTamil: "உடம்பைப் பாத்துக்கோங்க.",
      structuredRoman: "uṭamp-ai-p pāttu-kkōṅka.",
      underlyingAnalysis: "பாத்து + கொள் + -உங்கள் → பாத்துக்கோங்க",
      pronunciationRoman: "uḍambe pāttukkōnga.",
      katakana: "ウダンベ パーットゥッコーンガ。",
      meaningJa: "お体に気をつけてください。",
      literalJapanese: "身体・を＋見て・自分に関わるように・丁寧命令",
      morphemes: [
        { surfaceTamil: "உடம்பைப்", analysis: "உடம்பு + -ஐ + -ப்", gloss: "身体を" },
        { surfaceTamil: "பாத்துக்கோங்க", analysis: "பாத்து + கொள் + -உங்கள்", gloss: "気をつけてください／世話してください" }
      ],
      grammarNote: "பாத்துக்கோங்க は『見る』の直訳だけでは足りず、世話をする・気をつけるという語用的にまとまった読みを持ちます。",
      vocabulary: ["உடம்பு", "பாத்துக்கோங்க"],
      audioGroup: "supplement-h-core",
      featured: true
    }),
    make({
      id: "sh-05",
      targetTamil: "நான் ஒரு ரூம் புக் பண்ணிக்கிட்டேன்.",
      structuredRoman: "nāṉ oru rūm puk paṇṇi-kkiṭṭ-ēṉ.",
      underlyingAnalysis: "பண்ணி + கொண்டு + -ஏன் → பண்ணிக்கிட்டேன்",
      pronunciationRoman: "nān oru rūm buk paṇṇikkiṭṭēn.",
      katakana: "ナーン オル ルーム ブック パンニッキッテーン。",
      meaningJa: "私は自分用に部屋を予約しました。",
      literalJapanese: "私＋一つの＋部屋＋予約＋して・自分に関わるように・私",
      morphemes: [
        { surfaceTamil: "நான்", gloss: "私" },
        { surfaceTamil: "ஒரு ரூம்", gloss: "一部屋" },
        { surfaceTamil: "புக் பண்ணிக்கிட்டேன்", analysis: "புக் பண்ணி + கொண்டு + -ஏன்", gloss: "自分用に予約しました" }
      ],
      grammarNote: "-க்கிட்டேன் は主体に関わる結果・確保・完遂を示し得ます。常に利益だけを表すわけではないため、場面と動詞を一緒に読みます。",
      vocabulary: ["ரூம்", "புக் பண்ணிக்கிட்டேன்"],
      audioGroup: "supplement-h-bank",
      styleTags: ["neutral", "loanword-heavy"],
      confidence: C("B", "B", "C", "C")
    }),
    make({
      id: "sh-06",
      targetTamil: "அவங்க ஒருத்தருக்கு ஒருத்தர் உதவி பண்ணறாங்க.",
      structuredRoman: "avaṅka oruttar-ukku oruttar utavi paṇṇaṟ-āṅka.",
      pronunciationRoman: "avanga oruttarukku oruttar udavi paṇṇarānga.",
      katakana: "アヴァンガ オルッタルック オルッタル ウダヴィ パンナラーンガ。",
      meaningJa: "あの人たちは互いに助け合っています。",
      literalJapanese: "あの人たち＋一人・に＋一人＋助け＋する・複数",
      morphemes: [
        { surfaceTamil: "அவங்க", gloss: "あの人たち" },
        { surfaceTamil: "ஒருத்தருக்கு ஒருத்தர்", analysis: "ஒருத்தர் + -க்கு + ஒருத்தர்", gloss: "一人がもう一人に／互いに" },
        { surfaceTamil: "உதவி பண்ணறாங்க", gloss: "助けています" }
      ],
      grammarNote: "உதவி பண்ணு では助けの受け手を与格で捉えるため ஒருத்தருக்கு ஒருத்தர் を使います。相互を一つの固定接尾辞とは教えません。",
      vocabulary: ["ஒருத்தர்", "உதவி பண்ணறாங்க"],
      audioGroup: "supplement-h-core",
      featured: true
    }),
    make({
      id: "sh-07",
      targetTamil: "அவங்க ஒருத்தரை ஒருத்தர் பாத்தாங்க.",
      structuredRoman: "avaṅka oruttar-ai oruttar pātt-āṅka.",
      pronunciationRoman: "avanga oruttare oruttar pāttānga.",
      katakana: "アヴァンガ オルッタレ オルッタル パーッターンガ。",
      meaningJa: "あの人たちは互いを見ました／会いました。",
      literalJapanese: "あの人たち＋一人・を＋一人＋見た・複数",
      morphemes: [
        { surfaceTamil: "அவங்க", gloss: "あの人たち" },
        { surfaceTamil: "ஒருத்தரை ஒருத்தர்", analysis: "ஒருத்தர் + -ஐ + ஒருத்தர்", gloss: "一人がもう一人を／互いを" },
        { surfaceTamil: "பாத்தாங்க", gloss: "見ました／会いました" }
      ],
      grammarNote: "பார் は見る対象を対格で取るため ஒருத்தரை ஒருத்தர் になります。相互表現の格は動詞との関係に従います。",
      vocabulary: ["ஒருத்தரை ஒருத்தர்", "பாத்தாங்க"],
      audioGroup: "supplement-h-bank",
      confidence: C("B", "B", "C", "C")
    }),
    make({
      id: "sh-08",
      targetTamil: "யாரோ கதவைத் திறந்தாங்க.",
      structuredRoman: "yār-ō katav-ai-t tiṟant-āṅka.",
      pronunciationRoman: "yārō kadave tirandānga.",
      katakana: "ヤーロー カダヴェ ティランダーンガ。",
      meaningJa: "誰かがドアを開けました。",
      literalJapanese: "誰か・不明＋ドア・を＋開けた・人間複数／敬意",
      morphemes: [
        { surfaceTamil: "யாரோ", analysis: "யார் + -ஓ", gloss: "誰か・人物は不明" },
        { surfaceTamil: "கதவைத்", analysis: "கதவு + -ஐ + -த்", gloss: "ドアを" },
        { surfaceTamil: "திறந்தாங்க", gloss: "開けました" }
      ],
      grammarNote: "行為者が誰か分からなくても யாரோ で人物の存在を明示しています。行為者を文の中心から外す திறந்துடுச்சு と分けます。",
      vocabulary: ["யாரோ", "கதவு", "திறந்தாங்க"],
      audioGroup: "supplement-h-core"
    }),
    makeLiterary({
      id: "sh-11",
      targetTamil: "கதவு திறக்கப்பட்டது.",
      structuredRoman: "katavu tiṟakka-p-paṭṭ-atu.",
      pronunciationRoman: "kadavu tirakkappaṭṭadu.",
      katakana: "カダヴ ティラッカッパッタドゥ。",
      meaningJa: "ドアが開けられました。",
      literalJapanese: "ドア＋開ける・受け身・中性過去",
      morphemes: [
        { surfaceTamil: "கதவு", gloss: "ドア・受け手" },
        { surfaceTamil: "திறக்கப்பட்டது", analysis: "திறக்க + படு + 過去・中性", gloss: "開けられました" }
      ],
      grammarNote: "-ப்படு の受け身は掲示・説明・報道などのLT-WR読解層です。日常会話で何でもこの形へ変換する生成規則にはしません。",
      vocabulary: ["கதவு", "திறக்கப்பட்டது"],
      audioGroup: "supplement-h-reading",
      featured: true
    }),
    makeLiterary({
      id: "sh-12",
      targetTamil: "கடிதம் எழுதப்பட்டது.",
      structuredRoman: "kaṭitam eḻuta-p-paṭṭ-atu.",
      pronunciationRoman: "kaḍidam eḻudappaṭṭadu.",
      katakana: "カディダム エルダッパッタドゥ。",
      meaningJa: "手紙が書かれました。",
      literalJapanese: "手紙＋書く・受け身・中性過去",
      morphemes: [
        { surfaceTamil: "கடிதம்", gloss: "手紙・受け手" },
        { surfaceTamil: "எழுதப்பட்டது", analysis: "எழுத + படு + 過去・中性", gloss: "書かれました" }
      ],
      grammarNote: "形式的な受け身を読むための例です。会話では行為者を述べる能動文や、出来事・結果を中心にした別の構文が自然な場合があります。",
      vocabulary: ["கடிதம்", "எழுதப்பட்டது"],
      audioGroup: "supplement-h-reading"
    })
  ];

  const examples = Object.freeze([
    ...newExamples.slice(0, 8),
    reuse("sf-11"),
    reuse("sg-10"),
    ...newExamples.slice(8)
  ]);

  const patterns = [
    make({
      id: "sh-form-plain-command",
      targetTamil: "எழுதுங்க.",
      structuredRoman: "eḻutu-ṅka.",
      pronunciationRoman: "eḻudunga.",
      katakana: "エルドゥンガ。",
      meaningJa: "書いてください",
      literalJapanese: "書く・丁寧命令",
      grammarNote: "行為を依頼する単純命令です。",
      vocabulary: ["எழுதுங்க"],
      audioGroup: "supplement-h-forms",
      kind: "単純命令",
      group: "普通／自分に関わる",
      note: "主体への確保・自己関与を必ず含まない。"
    }),
    make({
      id: "sh-form-benefactive-write",
      targetTamil: "எழுதிக்கோங்க.",
      structuredRoman: "eḻuti-kkōṅka.",
      pronunciationRoman: "eḻudikkōnga.",
      katakana: "エルディッコーンガ。",
      meaningJa: "自分用に書き留めてください",
      literalJapanese: "書いて・自分に関わるように・丁寧命令",
      grammarNote: "AVP＋கொள் の口語縮約で、自己関与・確保を加えます。",
      vocabulary: ["எழுதிக்கோங்க"],
      audioGroup: "supplement-h-forms",
      kind: "自己関与",
      group: "普通／自分に関わる",
      note: "単純な再帰代名詞ではない。"
    }),
    make({
      id: "sh-form-benefactive-buy",
      targetTamil: "வாங்கிக்கோங்க.",
      structuredRoman: "vāṅki-kkōṅka.",
      pronunciationRoman: "vāngikkōnga.",
      katakana: "ヴァーンギッコーンガ。",
      meaningJa: "自分用に買って／受け取ってください",
      literalJapanese: "買って・確保して・丁寧命令",
      grammarNote: "動詞と場面により購入・受領・確保へ意味が広がります。",
      vocabulary: ["வாங்கிக்கோங்க"],
      audioGroup: "supplement-h-forms",
      kind: "確保",
      group: "-க்கோ",
      note: "一つの日本語訳へ固定しない。"
    }),
    make({
      id: "sh-form-care",
      targetTamil: "பாத்துக்கோங்க.",
      structuredRoman: "pāttu-kkōṅka.",
      pronunciationRoman: "pāttukkōnga.",
      katakana: "パーットゥッコーンガ。",
      meaningJa: "気をつけて／世話してください",
      literalJapanese: "見て・自分に関わるように・丁寧命令",
      grammarNote: "語用的に『気をつける・世話する』へまとまった形です。",
      vocabulary: ["பாத்துக்கோங்க"],
      audioGroup: "supplement-h-forms",
      kind: "語彙化",
      group: "-க்கோ",
      note: "பார் の直訳だけで読まない。"
    }),
    make({
      id: "sh-form-reciprocal-dative",
      targetTamil: "ஒருத்தருக்கு ஒருத்தர்.",
      structuredRoman: "oruttar-ukku oruttar.",
      pronunciationRoman: "oruttarukku oruttar.",
      katakana: "オルッタルック オルッタル。",
      meaningJa: "互いに・一人がもう一人に",
      literalJapanese: "一人・に＋一人",
      grammarNote: "受け手を与格で示す関係に使います。",
      vocabulary: ["ஒருத்தருக்கு ஒருத்தர்"],
      audioGroup: "supplement-h-forms",
      kind: "相互・与格",
      group: "相互関係",
      note: "உதவி பண்ணு などと組む。"
    }),
    make({
      id: "sh-form-reciprocal-accusative",
      targetTamil: "ஒருத்தரை ஒருத்தர்.",
      structuredRoman: "oruttar-ai oruttar.",
      pronunciationRoman: "oruttare oruttar.",
      katakana: "オルッタレ オルッタル。",
      meaningJa: "互いを・一人がもう一人を",
      literalJapanese: "一人・を＋一人",
      grammarNote: "見る対象などを対格で示す関係に使います。",
      vocabulary: ["ஒருத்தரை ஒருத்தர்"],
      audioGroup: "supplement-h-forms",
      kind: "相互・対格",
      group: "相互関係",
      note: "相互だから格が消えるわけではない。",
      confidence: C("B", "B", "C", "C")
    }),
    make({
      id: "sh-form-agentless-event",
      targetTamil: "திறந்துடுச்சு.",
      structuredRoman: "tiṟantuṭuccu.",
      pronunciationRoman: "tiranduḍuccu.",
      katakana: "ティランドゥデゥッチュ。",
      meaningJa: "開きました／開いてしまいました",
      literalJapanese: "開いて・変化完了",
      grammarNote: "行為者より変化の出来事を前面に出す口語型です。",
      vocabulary: ["திறந்துடுச்சு"],
      audioGroup: "supplement-h-forms",
      kind: "行為者を前面に出さない",
      group: "行為者の見せ方",
      note: "文法的受け身語尾ではない。"
    }),
    makeLiterary({
      id: "sh-form-passive-reading",
      targetTamil: "திறக்கப்பட்டது.",
      structuredRoman: "tiṟakka-p-paṭṭ-atu.",
      pronunciationRoman: "tirakkappaṭṭadu.",
      katakana: "ティラッカッパッタドゥ。",
      meaningJa: "開けられました",
      literalJapanese: "開ける・受け身・中性過去",
      grammarNote: "LT-WR・形式的文体の受け身を読むための形です。",
      vocabulary: ["திறக்கப்பட்டது"],
      audioGroup: "supplement-h-forms",
      kind: "受け身読解",
      group: "行為者の見せ方",
      note: "日常会話の無標生成形にしない。"
    })
  ];

  const readSections = [
    {
      kicker: "まず結論",
      heading: "普通にする、自分に関わるようにする、互いにするを分ける",
      takeaway: "<span class=\"ta-inline\" lang=\"ta\">எழுதுங்க / எழுதிக்கோங்க</span> <span class=\"roman-inline\">(eḻutu-ṅka / eḻuti-kkōṅka)</span> は、単純命令と自己関与です。",
      paragraphs: [
        "<span class=\"ta-inline\" lang=\"ta\">இந்த நம்பரை எழுதுங்க</span> は、番号を書く行為だけを依頼します。",
        "<span class=\"ta-inline\" lang=\"ta\">இந்த நம்பரை எழுதிக்கோங்க</span> は、自分用に記録・確保する方向を加えます。"
      ]
    },
    {
      kicker: "形を読む",
      heading: "-க்கோ は再帰代名詞ではなく、主体への関わりを加える補助動詞系",
      takeaway: "<span class=\"ta-inline\" lang=\"ta\">எழுதிக்கோங்க</span> <span class=\"roman-inline\">(eḻuti-kkōṅka)</span> は、基底の எழுதி＋கொள் が縮約した形です。",
      paragraphs: [
        "主体自身のための確保・完遂・自己関与を表せますが、いつも明確な利益だけを表すわけではありません。",
        "Spoken Tamilでは தான் を日本語の『自分』へ機械置換せず、自己関与は動詞と -க்கோ 系の組み合わせから読みます。"
      ]
    },
    {
      kicker: "なぜ？",
      heading: "相互表現でも、動詞が求める格は残る",
      takeaway: "<span class=\"ta-inline\" lang=\"ta\">ஒருத்தருக்கு ஒருத்தர் / ஒருத்தரை ஒருத்தர்</span> <span class=\"roman-inline\">(oruttar-ukku oruttar / oruttar-ai oruttar)</span> は、与格と対格の相互です。",
      paragraphs: [
        "உதவி பண்ணு の受け手は与格なので ஒருத்தருக்கு ஒருத்தர்、பார் の対象は対格なので ஒருத்தரை ஒருத்தர் となります。",
        "『お互い』という一語を足すのではなく、二人の関係と動詞の格を一緒に組み立てます。"
      ]
    },
    {
      kicker: "実際に使う",
      heading: "知らない行為者、行為者を前面に出さない出来事、能動文を分ける",
      takeaway: "<span class=\"ta-inline\" lang=\"ta\">யாரோ திறந்தாங்க / திறந்துடுச்சு / நான் திறந்தேன்</span> は、行為者の見せ方が違います。",
      paragraphs: [
        "<span class=\"ta-inline\" lang=\"ta\">யாரோ கதவைத் திறந்தாங்க</span> は、誰か不明でも行為者の存在を示します。",
        "<span class=\"ta-inline\" lang=\"ta\">கதவு திறந்துடுச்சு</span> は変化したドアを中心にし、<span class=\"ta-inline\" lang=\"ta\">நான் கதவைத் திறந்தேன்</span> は行為者を明示します。"
      ]
    },
    {
      kicker: "混ぜない",
      heading: "-ப்படு 受け身は、形式的な読解層へ置く",
      takeaway: "<span class=\"ta-inline\" lang=\"ta\">கதவு திறக்கப்பட்டது</span> <span class=\"roman-inline\">(katavu tiṟakka-p-paṭṭ-atu)</span> はLT-WR寄りの受け身です。",
      paragraphs: [
        "掲示・説明・報道などでは -ப்படு 系を見かけますが、日常会話で英語や日本語の受け身をすべてこの形へ変換しません。",
        "行為者が不要なら、会話では自動詞・状態変化・能動の不定人称など別の選択肢を先に検討します。"
      ],
      note: {
        tone: "pink",
        title: "この補講の最重要ミス",
        body: "-க்கோ を単純な再帰、ஒருத்தருக்கு ஒருத்தர் を固定形、திறந்துடுச்சு を受け身、-ப்படு を日常会話の万能形として扱いません。"
      }
    },
    {
      kicker: "3文で復習",
      heading: "同じドアの出来事を、三つの視点で読む",
      takeaway: "<span class=\"ta-inline\" lang=\"ta\">யாரோ திறந்தாங்க / திறந்துடுச்சு / திறக்கப்பட்டது</span> は、不明な行為者・変化中心・形式的受け身です。",
      paragraphs: [
        "<span class=\"ta-inline\" lang=\"ta\">யாரோ கதவைத் திறந்தாங்க.</span> <span class=\"roman-inline\">(yār-ō katav-ai-t tiṟant-āṅka.)</span>",
        "<span class=\"ta-inline\" lang=\"ta\">கதவு திறந்துடுச்சு.</span> <span class=\"roman-inline\">(katavu tiṟantuṭuccu.)</span>",
        "<span class=\"ta-inline\" lang=\"ta\">கதவு திறக்கப்பட்டது.</span> <span class=\"roman-inline\">(katavu tiṟakka-p-paṭṭ-atu.)</span>"
      ],
      miniReading: { ids: ["sh-08", "sf-11", "sh-11"] }
    }
  ];

  const option = (ta, roman, ja) => `<span class="quiz-option-ta" lang="ta">${ta}</span><span class="quiz-option-roman">${roman}</span><span class="quiz-option-ja">${ja}</span>`;
  const quiz = [
    {
      focus: "形態分解",
      q: "『この番号を自分用に書き留めてください』は？",
      options: [
        option("இந்த நம்பரை எழுதிக்கோங்க.", "inta nampar-ai eḻuti-kkōṅka.", "自分用に書き留めてください"),
        option("இந்த நம்பரை எழுதுங்க.", "inta nampar-ai eḻutu-ṅka.", "書いてください"),
        option("இந்த நம்பரை எழுதிக்கிட்டேன்.", "inta nampar-ai eḻuti-kkiṭṭ-ēṉ.", "私は自分用に書き留めました"),
        option("இந்த நம்பரை எழுதினாங்க.", "inta nampar-ai eḻutiṉ-āṅka.", "その人たちは書きました")
      ],
      answer: 0,
      feedback: "<span class=\"ta-inline\" lang=\"ta\">எழுதிக்கோங்க</span> は、書く行為に自己関与・確保の方向を加えます。",
      rule: "単純命令 V-உங்க と、自己関与 AVP＋-க்கோங்க を分ける。",
      tags: ["正解", "単純命令", "一人称過去", "人間複数過去"]
    },
    {
      focus: "機能選択",
      q: "『互いに助け合っています』で、助けの受け手を示す形は？",
      options: [
        option("ஒருத்தருக்கு ஒருத்தர் உதவி பண்ணறாங்க.", "oruttar-ukku oruttar utavi paṇṇaṟ-āṅka.", "互いに助け合っています"),
        option("ஒருத்தரை ஒருத்தர் பாத்தாங்க.", "oruttar-ai oruttar pātt-āṅka.", "互いを見ました"),
        option("ஒருத்தரோட ஒருத்தர் போறாங்க.", "oruttar-ōṭa oruttar pōṟ-āṅka.", "互いと一緒に行きます"),
        option("ஒருத்தர் மட்டும் உதவி பண்ணறாங்க.", "oruttar maṭṭum utavi paṇṇaṟ-āṅka.", "一人だけが助けています")
      ],
      answer: 0,
      feedback: "உதவி பண்ணு の受け手は与格なので <span class=\"ta-inline\" lang=\"ta\">ஒருத்தருக்கு ஒருத்தர்</span> です。",
      rule: "相互表現でも、格は動詞との意味関係に従う。",
      tags: ["正解", "対格相互", "同行", "限定"]
    },
    {
      focus: "実用場面",
      q: "誰が開けたかを前面に出さず、『ドアが開きました』と変化を伝えるなら？",
      options: [
        option("கதவு திறந்துடுச்சு.", "katavu tiṟantuṭuccu.", "ドアが開きました"),
        option("யாரோ கதவைத் திறந்தாங்க.", "yār-ō katav-ai-t tiṟant-āṅka.", "誰かがドアを開けました"),
        option("நான் கதவைத் திறந்தேன்.", "nāṉ katav-ai-t tiṟant-ēṉ.", "私はドアを開けました"),
        option("கதவு திறக்கப்பட்டது.", "katavu tiṟakka-p-paṭṭ-atu.", "ドアが開けられました・形式的")
      ],
      answer: 0,
      feedback: "திறந்துடுச்சு は、行為者よりドアの変化を出来事として示します。",
      rule: "不明な行為者・明示された行為者・行為者なしの変化・形式的受け身を分ける。",
      tags: ["正解", "不明行為者", "能動一人称", "LT-WR受け身"]
    },
    {
      focus: "混同防止",
      q: "掲示や説明文で『ドアが開けられました』という受け身を読む形は？",
      options: [
        option("கதவு திறக்கப்பட்டது.", "katavu tiṟakka-p-paṭṭ-atu.", "ドアが開けられました"),
        option("கதவு திறந்துடுச்சு.", "katavu tiṟantuṭuccu.", "ドアが開きました"),
        option("யாரோ கதவைத் திறந்தாங்க.", "yār-ō katav-ai-t tiṟant-āṅka.", "誰かがドアを開けました"),
        option("நான் கதவைத் திறந்தேன்.", "nāṉ katav-ai-t tiṟant-ēṉ.", "私はドアを開けました")
      ],
      answer: 0,
      feedback: "<span class=\"ta-inline\" lang=\"ta\">-ப்படு</span> 系はLT-WR・形式的文体の受け身読解です。",
      rule: "-ப்படு は認識対象。日常会話の無標生成形にはしない。",
      tags: ["正解", "変化出来事", "不明行為者", "能動"]
    },
    {
      focus: "総合復習",
      q: "自己関与・相互・行為者なし・形式的受け身の対応がすべて正しい組は？",
      options: [
        option("எழுதிக்கோங்க · ஒருத்தருக்கு ஒருத்தர் · திறந்துடுச்சு · திறக்கப்பட்டது", "eḻuti-kkōṅka · oruttar-ukku oruttar · tiṟantuṭuccu · tiṟakka-p-paṭṭ-atu", "自己関与・相互・変化中心・受け身読解"),
        option("எழுதுங்க · ஒருத்தரை ஒருத்தர் · நான் திறந்தேன் · திறந்துடுச்சு", "eḻutu-ṅka · oruttar-ai oruttar · nāṉ tiṟant-ēṉ · tiṟantuṭuccu", "単純命令・対格相互・能動・変化"),
        option("பாத்துக்கோங்க · யாரோ · திறக்கப்பட்டது · எழுதுங்க", "pāttu-kkōṅka · yār-ō · tiṟakka-p-paṭṭ-atu · eḻutu-ṅka", "自己関与・不明人物・受け身・単純命令"),
        option("வாங்கிக்கோங்க · மட்டும் · திறந்துடுச்சு · யாரோ", "vāṅki-kkōṅka · maṭṭum · tiṟantuṭuccu · yār-ō", "確保・限定・変化・不明人物")
      ],
      answer: 0,
      feedback: "-க்கோ 系、格付き相互、変化中心、-ப்படு 受け身を一つずつ対応させます。",
      rule: "『自分・お互い・される』の日本語訳ではなく、動詞・格・行為者の見せ方を読む。",
      tags: ["正解", "別機能の組", "不明人物混入", "限定混入"]
    }
  ];

  const supplement = {
    id: "supplement-h-v45",
    code: "H",
    release: "v4.5",
    navTitle: "自分のため・互いに・行為者を言わない文",
    title: "自己関与、相互、出来事中心、受け身読解を分ける",
    tamilTitle: "இந்த நம்பரை எழுதிக்கோங்க",
    deck: "-க்கோ 系を単純な再帰へせず、相互表現の格、行為者を前面に出さない口語、LT-WRの -ப்படு 受け身を別々に学びます。",
    entryQuestion: "自分用にする、互いにする、誰がしたか言わない、受け身を読む――どこが違う？",
    prerequisites: [3, 12, 17],
    returnToLessons: [3, 12, 17],
    targets: ["AVP＋-க்கோ", "ஒருத்தருக்கு／ஒருத்தரை ஒருத்தர்", "行為者なしの変化", "-ப்படு受け身読解"],
    criticalPoints: [
      "<span class=\"ta-inline\" lang=\"ta\">எழுதுங்க / எழுதிக்கோங்க</span> <span class=\"roman-inline\">(eḻutu-ṅka / eḻuti-kkōṅka)</span> は、単純命令と自己関与。",
      "<span class=\"ta-inline\" lang=\"ta\">ஒருத்தருக்கு ஒருத்தர் / ஒருத்தரை ஒருத்தர்</span> は、相互でも動詞との関係に応じて格を保つ。",
      "<span class=\"ta-inline\" lang=\"ta\">யாரோ திறந்தாங்க / திறந்துடுச்சு / திறக்கப்பட்டது</span> は、不明な行為者・変化中心・形式的受け身。"
    ],
    heroExample: examples[0],
    examples,
    readSections: Object.freeze(readSections),
    formConfig: {
      mode: "grammar",
      title: "自己関与・相互・行為者・受け身の対照表",
      intro: "主体への関わり、二人の格関係、行為者の明示度、会話と形式文体を分けます。",
      patterns: Object.freeze(patterns),
      checkpoint: "எழுதுங்க / எழுதிக்கோங்க、ஒருத்தருக்கு / ஒருத்தரை ஒருத்தர்、யாரோ / திறந்துடுச்சு / திறக்கப்பட்டது を即答する。"
    },
    quiz: Object.freeze(quiz),
    legacyRefs: ["grammar-v28.js:38", "G38-05..G38-09", "38-05..38-12", "supplementF-v44.js:sf-11", "supplementG-v45.js:sg-10"],
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
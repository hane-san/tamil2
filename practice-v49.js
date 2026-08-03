(() => {
  "use strict";

  // GENERATED FILE — edit tools/practice-spec-v49.mjs and run
  // `npm run build:practice`. Every sentence below is assembled from word forms
  // that are either already audited in PART 0 + lessons 1-20, or derived from an
  // audited base word by a rule the lesson itself teaches. See
  // PRACTICE_PACK_AUDIT.md for the derivation list and review status.

  const { entry: E, confidence: C } = window.TAMIL_V30;
  const lessons = window.TAMIL_LESSONS_V30 || [];
  const SOURCE_REFS = Object.freeze([
    "TAMIL-INTEGRATED-v2.0-rc.1",
    "TN-SST-PRACTICE-PACK-v4.9: 監査済み語形の再結合"
  ]);

  // Naturalness sits at C: each word form is audited, but the combinations are
  // new and still wait on native review.
  // The core normalizer keeps only the fields it knows about, so the scene label
  // is put back on the frozen entry afterwards.
  const P = input => Object.freeze({
    ...E({
      ...input,
      kind: "scene-phrase",
      group: input.scene,
      audioGroup: `practice-${input.id.split("-")[0]}`,
      sourceRefs: SOURCE_REFS,
      confidence: C("B", "B", "C", "C")
    }),
    scene: input.scene
  });

  const D = input => Object.freeze({
    ...input,
    options: Object.freeze(input.options.map(option => Object.freeze({ ...option })))
  });

  function attach(number, pack) {
    const index = lessons.findIndex(lesson => lesson.number === number);
    if (index < 0) throw new Error(`practice-v49: lesson ${number} not found`);
    lessons[index] = Object.freeze({
      ...lessons[index],
      scenePhrases: Object.freeze(pack.phrases),
      drills: Object.freeze(pack.drills)
    });
  }

  attach(1, {
    phrases: [
      P({ id: "sp1-01", scene: "買い物", targetTamil: "கடைல தண்ணி இருக்கு.", structuredRoman: "kaṭai-la taṇṇi irukku.", pronunciationRoman: "kaḍaila taṇṇi irukku.", katakana: "カダイラ タンニ イルック。", meaningJa: "店に水があります。", literalJapanese: "店・場所＋水＋ある", note: "「どこに何がある」は〈場所-ல ＋ もの ＋ இருக்கு〉の順です。" }),
      P({ id: "sp1-02", scene: "移動・オート", targetTamil: "ஹோட்டலுக்கு போறேன்.", structuredRoman: "hōṭṭal-ukku pōṟ-ēṉ.", pronunciationRoman: "hōṭṭalukku pōrēn.", katakana: "ホーッタルック ポーレーン。", meaningJa: "ホテルへ行きます。", literalJapanese: "ホテル・到達＋行く・私", note: "行き先には -உக்கு。オートの運転手にこれだけ言えば通じます。" }),
      P({ id: "sp1-03", scene: "空港・駅", targetTamil: "ரெண்டு டிக்கெட் இருக்கு.", structuredRoman: "reṇṭu ṭikkeṭ irukku.", pronunciationRoman: "reṇḍu ṭikkeṭ irukku.", katakana: "レンドゥ ティッケトゥ イルック。", meaningJa: "切符が2枚あります。", literalJapanese: "二＋切符＋ある", note: "数詞があるので டிக்கெட் は単数形のままです。" }),
      P({ id: "sp1-04", scene: "ホテル", targetTamil: "ரூம்ல தண்ணி இருக்கு.", structuredRoman: "rūm-la taṇṇi irukku.", pronunciationRoman: "rūmla taṇṇi irukku.", katakana: "ルームラ タンニ イルック。", meaningJa: "部屋に水があります。", literalJapanese: "部屋・場所＋水＋ある", note: "ரூம் のような外来語にも、同じ -ல がそのまま付きます。" }),
      P({ id: "sp1-05", scene: "道をきく", targetTamil: "கடைக்கு பக்கத்துல கோவில் இருக்கு.", structuredRoman: "kaṭai-kku pakkatt-ula kōvil irukku.", pronunciationRoman: "kaḍaikku pakkattula kōvil irukku.", katakana: "カダイック パッカットゥラ コーヴィル イルック。", meaningJa: "店の近くに寺院があります。", literalJapanese: "店・到達＋近く・場所＋寺院＋ある", note: "「Aの近くにB」は〈A-க்கு பக்கத்துல B இருக்கு〉。" }),
      P({ id: "sp1-06", scene: "困ったとき", targetTamil: "பைல பணம் இல்லை.", structuredRoman: "pai-la paṇam illai.", pronunciationRoman: "paila paṇam illai.", katakana: "パイラ パナム イッライ。", meaningJa: "かばんにお金がありません。", literalJapanese: "かばん・場所＋お金＋ない", note: "இருக்கு の否定は இல்லை。語尾は変わりません。" })
    ],
    drills: [
      D({
        id: "dr1-01",
        type: "場面選択",
        scene: "移動・オート",
        prompt: "オートに乗って「店へ行きたい」と伝えます。運転手に言う一文はどれですか。",
        options: [
        { targetTamil: "கடைக்கு போறேன்.", structuredRoman: "kaṭai-kku pōṟ-ēṉ.", pronunciationRoman: "kaḍaikku pōrēn.", katakana: "カダイック ポーレーン。", ja: "店へ行きます", tag: "正解" },
        { targetTamil: "கடைல தண்ணி இருக்கு.", structuredRoman: "kaṭai-la taṇṇi irukku.", pronunciationRoman: "kaḍaila taṇṇi irukku.", katakana: "カダイラ タンニ イルック。", ja: "店に水があります", tag: "行き先ではなく場所の話" },
        { targetTamil: "கடைலேருந்து வர்றேன்.", structuredRoman: "kaṭai-lēruntu varṟ-ēṉ.", pronunciationRoman: "kaḍailērundu varrēn.", katakana: "カダイレールンドゥ ヴァッレーン。", ja: "店から来ます", tag: "起点と行き先の取り違え" },
        { targetTamil: "இது கடை.", structuredRoman: "itu kaṭai.", pronunciationRoman: "idu kaḍai.", katakana: "イドゥ カダイ。", ja: "これは店です", tag: "移動の情報がない" }
        ],
        answer: 0,
        feedback: "行き先は -உக்கு／-க்கு です。கடை は கடைக்கு になります。",
        hint: "「どこにある」ではなく「どこへ行く」を選びます。"
      }),
      D({
        id: "dr1-02",
        type: "語形選択",
        scene: "道をきく",
        prompt: "「木の所に鳥がいます」と言うとき、மரம் はどの形になりますか。",
        options: [
        { targetTamil: "மரத்துல பறவை இருக்கு.", structuredRoman: "maratt-ula paṟavai irukku.", pronunciationRoman: "marattula paravai irukku.", katakana: "マラットゥラ パラヴァイ イルック。", ja: "木に鳥がいます", tag: "正解" },
        { targetTamil: "மரத்துக்கு பறவை இருக்கு.", structuredRoman: "maratt-ukku paṟavai irukku.", pronunciationRoman: "marattukku paravai irukku.", katakana: "マラットゥック パラヴァイ イルック。", ja: "木へ＋鳥がいる", tag: "到達形との混同" },
        { targetTamil: "மரம் பறவை இருக்கு.", structuredRoman: "maram paṟavai irukku.", pronunciationRoman: "maram paravai irukku.", katakana: "マラム パラヴァイ イルック。", ja: "木＋鳥がいる（関係が出ない）", tag: "格語尾なし" },
        { targetTamil: "மரத்துல பறவை இல்லை.", structuredRoman: "maratt-ula paṟavai illai.", pronunciationRoman: "marattula paravai illai.", katakana: "マラットゥラ パラヴァイ イッライ。", ja: "木に鳥がいません", tag: "肯定と否定の取り違え" }
        ],
        answer: 0,
        feedback: "மரம் は語尾の前で மரத்த- になり、場所の -உல が続いて மரத்துல です。",
        hint: "いる場所を示すのは -ல 系です。"
      }),
      D({
        id: "dr1-03",
        type: "場面選択",
        scene: "ホテル",
        prompt: "宿の人に「部屋に水があります」と確認された場面です。同じ内容の一文はどれですか。",
        options: [
        { targetTamil: "ரூம்ல தண்ணி இருக்கு.", structuredRoman: "rūm-la taṇṇi irukku.", pronunciationRoman: "rūmla taṇṇi irukku.", katakana: "ルームラ タンニ イルック。", ja: "部屋に水があります", tag: "正解" },
        { targetTamil: "ரூமுக்கு தண்ணி இருக்கு.", structuredRoman: "rūm-ukku taṇṇi irukku.", pronunciationRoman: "rūmukku taṇṇi irukku.", katakana: "ルームック タンニ イルック。", ja: "部屋へ＋水がある", tag: "到達形との混同" },
        { targetTamil: "ரூம்ல தண்ணி இல்லை.", structuredRoman: "rūm-la taṇṇi illai.", pronunciationRoman: "rūmla taṇṇi illai.", katakana: "ルームラ タンニ イッライ。", ja: "部屋に水がありません", tag: "否定との取り違え" },
        { targetTamil: "மேசைல தண்ணி இருக்கு.", structuredRoman: "mēcai-la taṇṇi irukku.", pronunciationRoman: "mēsaila taṇṇi irukku.", katakana: "メーサイラ タンニ イルック。", ja: "机の上に水があります", tag: "場所が違う" }
        ],
        answer: 0,
        feedback: "「〜にある」は場所の -ல。ரூம்ல தண்ணி இருக்கு です。",
        hint: "水が置かれている場所を言います。"
      }),
      D({
        id: "dr1-04",
        type: "場面選択",
        scene: "買い物",
        prompt: "店に本が2冊あるのを見て伝えます。数まで含めて正しいのはどれですか。",
        options: [
        { targetTamil: "ரெண்டு புத்தகம் இருக்கு.", structuredRoman: "reṇṭu puttakam irukku.", pronunciationRoman: "reṇḍu puttagam irukku.", katakana: "レンドゥ プッタガム イルック。", ja: "本が2冊あります", tag: "正解" },
        { targetTamil: "புத்தகம் மேசைல இருக்கு.", structuredRoman: "puttakam mēcai-la irukku.", pronunciationRoman: "puttagam mēsaila irukku.", katakana: "プッタガム メーサイラ イルック。", ja: "本は机の上にあります", tag: "数の情報がない" },
        { targetTamil: "ரெண்டு டிக்கெட் இருக்கு.", structuredRoman: "reṇṭu ṭikkeṭ irukku.", pronunciationRoman: "reṇḍu ṭikkeṭ irukku.", katakana: "レンドゥ ティッケトゥ イルック。", ja: "切符が2枚あります", tag: "ものが違う" },
        { targetTamil: "ரெண்டு புத்தகம் இல்லை.", structuredRoman: "reṇṭu puttakam illai.", pronunciationRoman: "reṇḍu puttagam illai.", katakana: "レンドゥ プッタガム イッライ。", ja: "本は2冊ありません", tag: "否定との取り違え" }
        ],
        answer: 0,
        feedback: "無生物は数詞が複数を示すので、புத்தகம் を複数形に変えません。",
        hint: "「2冊」という数の情報が入っているものを選びます。"
      }),
      D({
        id: "dr1-05",
        type: "空欄補充",
        scene: "困ったとき",
        prompt: "「かばんにお金がありません」。空欄に入るのはどれですか。 ___ பணம் இல்லை.",
        options: [
        { targetTamil: "பைல", structuredRoman: "pai-la", pronunciationRoman: "paila", katakana: "パイラ", ja: "かばんに（場所）", tag: "正解" },
        { targetTamil: "பை", structuredRoman: "pai", pronunciationRoman: "pai", katakana: "パイ", ja: "かばん（辞書形）", tag: "格語尾なし" },
        { targetTamil: "மேசைல", structuredRoman: "mēcai-la", pronunciationRoman: "mēsaila", katakana: "メーサイラ", ja: "机の上に", tag: "場所が違う" },
        { targetTamil: "வீட்டுக்கு", structuredRoman: "vīṭṭ-ukku", pronunciationRoman: "vīṭṭukku", katakana: "ヴィーットゥック", ja: "家へ", tag: "到達形との混同" }
        ],
        answer: 0,
        feedback: "「どこにない」も、あるときと同じ場所形 -ல で示します。",
        hint: "否定文でも場所の示し方は変わりません。"
      })
    ]
  });

  attach(2, {
    phrases: [
      P({ id: "sp2-01", scene: "ホテル", targetTamil: "எனக்கு ஒரு ரூம் வேணும்.", structuredRoman: "eṉ-akku oru rūm vēṇum.", pronunciationRoman: "enakku oru rūm vēṇum.", katakana: "エナック オル ルーム ヴェーヌム。", meaningJa: "部屋が一つ欲しいです。", literalJapanese: "私・与格＋一つ＋部屋＋要る", note: "欲しい人は எனக்கு。நான் ではありません。" }),
      P({ id: "sp2-02", scene: "買い物", targetTamil: "அது எவ்வளவு?", structuredRoman: "atu evvaḷavu?", pronunciationRoman: "adu evvaḷavu?", katakana: "アドゥ エッヴァラヴ？", meaningJa: "それはいくらですか。", literalJapanese: "それ＋いくら", note: "値段をきく最短の形。指を差しながら使えます。" }),
      P({ id: "sp2-03", scene: "人と話す", targetTamil: "உங்களுக்கு தமிழ் தெரியுமா?", structuredRoman: "uṅkaḷ-ukku tamiḻ teri-y-um-ā?", pronunciationRoman: "ungaḷukku tamiḻ teriyumā?", katakana: "ウンガルック タミル テリユマー？", meaningJa: "タミル語が分かりますか。", literalJapanese: "あなた・与格＋タミル語＋分かる・か", note: "分かる人も எனக்கு／உங்களுக்கு の側に立ちます。" }),
      P({ id: "sp2-04", scene: "移動・オート", targetTamil: "நான் ஹோட்டலுக்கு போறேன்.", structuredRoman: "nāṉ hōṭṭal-ukku pōṟ-ēṉ.", pronunciationRoman: "nān hōṭṭalukku pōrēn.", katakana: "ナーン ホーッタルック ポーレーン。", meaningJa: "私はホテルへ行きます。", literalJapanese: "私＋ホテル・到達＋行く・私", note: "動く人は நான்。動詞の右端 -ஏன் も「私」を示します。" }),
      P({ id: "sp2-05", scene: "食事", targetTamil: "எனக்கு காபி வேணும்.", structuredRoman: "eṉ-akku kāpi vēṇum.", pronunciationRoman: "enakku kābi vēṇum.", katakana: "エナック カービ ヴェーヌム。", meaningJa: "コーヒーをください。", literalJapanese: "私・与格＋コーヒー＋要る", note: "注文はこの形が一番使えます。" }),
      P({ id: "sp2-06", scene: "困ったとき", targetTamil: "எனக்கு தமிழ் புரியல.", structuredRoman: "eṉ-akku tamiḻ puriyala.", pronunciationRoman: "enakku tamiḻ puriyala.", katakana: "エナック タミル プリヤラ。", meaningJa: "タミル語が分かりません。", literalJapanese: "私・与格＋タミル語＋分からない", note: "困ったときにそのまま言える一文です。" })
    ],
    drills: [
      D({
        id: "dr2-01",
        type: "場面選択",
        scene: "食事",
        prompt: "食堂でコーヒーを注文します。自然な一文はどれですか。",
        options: [
        { targetTamil: "எனக்கு காபி வேணும்.", structuredRoman: "eṉ-akku kāpi vēṇum.", pronunciationRoman: "enakku kābi vēṇum.", katakana: "エナック カービ ヴェーヌム。", ja: "コーヒーをください", tag: "正解" },
        { targetTamil: "நான் காபி வேணும்.", structuredRoman: "nāṉ kāpi vēṇum.", pronunciationRoman: "nān kābi vēṇum.", katakana: "ナーン カービ ヴェーヌム。", ja: "私は＋コーヒーが要る（主語の形が合わない）", tag: "主格と与格の取り違え" },
        { targetTamil: "எனக்கு காபி பிடிக்கும்.", structuredRoman: "eṉ-akku kāpi piṭikkum.", pronunciationRoman: "enakku kābi piḍikkum.", katakana: "エナック カービ ピディックム。", ja: "私はコーヒーが好きです", tag: "好みであって注文ではない" },
        { targetTamil: "எனக்கு காபி புரியும்.", structuredRoman: "eṉ-akku kāpi puriyum.", pronunciationRoman: "enakku kābi puriyum.", katakana: "エナック カービ プリユム。", ja: "私はコーヒーが分かります", tag: "動詞が場面に合わない" }
        ],
        answer: 0,
        feedback: "欲しい人は எனக்கு の形で置きます。வேணும் は「要る・欲しい」です。",
        hint: "欲しがっている人は、主語ではなく受け手の形になります。"
      }),
      D({
        id: "dr2-02",
        type: "語形選択",
        scene: "人と話す",
        prompt: "「私を呼んでください」。என் の正しい形はどれですか。",
        options: [
        { targetTamil: "என்னை கூப்பிடுங்க.", structuredRoman: "eṉṉ-ai kūppiṭ-uṅka.", pronunciationRoman: "enne kūppiḍunga.", katakana: "エンネ クーッピドゥンガ。", ja: "私を呼んでください", tag: "正解" },
        { targetTamil: "எனக்கு கூப்பிடுங்க.", structuredRoman: "eṉ-akku kūppiṭ-uṅka.", pronunciationRoman: "enakku kūppiḍunga.", katakana: "エナック クーッピドゥンガ。", ja: "私に＋呼ぶ", tag: "与格との混同" },
        { targetTamil: "நான் கூப்பிடுங்க.", structuredRoman: "nāṉ kūppiṭ-uṅka.", pronunciationRoman: "nān kūppiḍunga.", katakana: "ナーン クーッピドゥンガ。", ja: "私は＋呼んでください", tag: "主格のまま" },
        { targetTamil: "உங்களை கூப்பிடுங்க.", structuredRoman: "uṅkaḷ-ai kūppiṭ-uṅka.", pronunciationRoman: "ungaḷe kūppiḍunga.", katakana: "ウンガレ クーッピドゥンガ。", ja: "あなたを呼んでください", tag: "人が違う" }
        ],
        answer: 0,
        feedback: "動作が向かう相手は என்னை。நான் に語尾を貼るのではなく、完成形で覚えます。",
        hint: "「〜を」に当たる形を選びます。"
      }),
      D({
        id: "dr2-03",
        type: "場面選択",
        scene: "買い物",
        prompt: "屋台で値段を知りたいときの一文はどれですか。",
        options: [
        { targetTamil: "அது எவ்வளவு?", structuredRoman: "atu evvaḷavu?", pronunciationRoman: "adu evvaḷavu?", katakana: "アドゥ エッヴァラヴ？", ja: "それはいくらですか", tag: "正解" },
        { targetTamil: "அது என்ன?", structuredRoman: "atu eṉṉa?", pronunciationRoman: "adu enna?", katakana: "アドゥ エンナ？", ja: "それは何ですか", tag: "品名をきいている" },
        { targetTamil: "அது எங்கே?", structuredRoman: "atu eṅkē?", pronunciationRoman: "adu engē?", katakana: "アドゥ エンゲー？", ja: "それはどこですか", tag: "場所をきいている" },
        { targetTamil: "எனக்கு அது பிடிக்கும்.", structuredRoman: "eṉ-akku atu piṭikkum.", pronunciationRoman: "enakku adu piḍikkum.", katakana: "エナック アドゥ ピディックム。", ja: "私はそれが好きです", tag: "質問になっていない" }
        ],
        answer: 0,
        feedback: "எவ்வளவு は「どれくらい・いくら」。値段にも量にも使えます。",
        hint: "求めている答えは数字です。"
      }),
      D({
        id: "dr2-04",
        type: "場面選択",
        scene: "人と話す",
        prompt: "初対面の相手に丁寧に「どこへ行きますか」ときく形はどれですか。",
        options: [
        { targetTamil: "நீங்க எங்க போறீங்க?", structuredRoman: "nīṅka eṅka pōṟ-īṅka?", pronunciationRoman: "nīnga enga pōrīnga?", katakana: "ニーンガ エンガ ポーリーンガ？", ja: "どこへ行きますか", tag: "正解" },
        { targetTamil: "நீ எங்க போற?", structuredRoman: "nī eṅka pōṟ-a?", pronunciationRoman: "nī enga pōra?", katakana: "ニー エンガ ポーラ？", ja: "どこ行くの？（親しい相手向け）", tag: "親称で距離が近すぎる" },
        { targetTamil: "நான் எங்க போறேன்?", structuredRoman: "nāṉ eṅka pōṟ-ēṉ?", pronunciationRoman: "nān enga pōrēn?", katakana: "ナーン エンガ ポーレーン？", ja: "私はどこへ行くのか", tag: "人が違う" },
        { targetTamil: "அவர் எங்கே போறார்?", structuredRoman: "avar eṅkē pōṟ-ār?", pronunciationRoman: "avar engē pōrār?", katakana: "アヴァル エンゲー ポーラール？", ja: "その方はどこへ行きますか", tag: "話し相手ではなく第三者" }
        ],
        answer: 0,
        feedback: "旅行では நீங்க が安全です。動詞も -ஈங்க で揃えます。",
        hint: "相手が初対面かどうかで、二人称の形を選びます。"
      }),
      D({
        id: "dr2-05",
        type: "空欄補充",
        scene: "困ったとき",
        prompt: "「タミル語が分かりません」。空欄に入るのはどれですか。 ___ தமிழ் புரியல.",
        options: [
        { targetTamil: "எனக்கு", structuredRoman: "eṉ-akku", pronunciationRoman: "enakku", katakana: "エナック", ja: "私に（与格）", tag: "正解" },
        { targetTamil: "நான்", structuredRoman: "nāṉ", pronunciationRoman: "nān", katakana: "ナーン", ja: "私は（主格）", tag: "主格との混同" },
        { targetTamil: "என்னை", structuredRoman: "eṉṉ-ai", pronunciationRoman: "enne", katakana: "エンネ", ja: "私を（対格）", tag: "対格との混同" },
        { targetTamil: "என்னோட", structuredRoman: "eṉṉ-ōṭa", pronunciationRoman: "ennōḍa", katakana: "エンノーダ", ja: "私の", tag: "所有形との混同" }
        ],
        answer: 0,
        feedback: "分かる・分からないを感じる人は、与格 எனக்கு の側に置きます。",
        hint: "「好き」「必要」「分かる」は同じ側に人が来ます。"
      })
    ]
  });

  attach(3, {
    phrases: [
      P({ id: "sp3-01", scene: "空港・駅", targetTamil: "இது என் டிக்கெட்.", structuredRoman: "itu eṉ ṭikkeṭ.", pronunciationRoman: "idu en ṭikkeṭ.", katakana: "イドゥ エン ティッケトゥ。", meaningJa: "これは私の切符です。", literalJapanese: "これ＋私の＋切符", note: "名詞の前に置く என் は、そのままで「私の」です。" }),
      P({ id: "sp3-02", scene: "ホテル", targetTamil: "இது உங்க ரூம்.", structuredRoman: "itu uṅka rūm.", pronunciationRoman: "idu unga rūm.", katakana: "イドゥ ウンガ ルーム。", meaningJa: "これはあなたの部屋です。", literalJapanese: "これ＋あなたの＋部屋", note: "உங்க は丁寧な「あなたの」。旅行ではこちらを使います。" }),
      P({ id: "sp3-03", scene: "移動・オート", targetTamil: "நான் ஆட்டோல போறேன்.", structuredRoman: "nāṉ āṭṭō-la pōṟ-ēṉ.", pronunciationRoman: "nān āṭṭōla pōrēn.", katakana: "ナーン アーットーラ ポーレーン。", meaningJa: "私はオートで行きます。", literalJapanese: "私＋オート・手段＋行く・私", note: "乗り物の「〜で」は -ல。バスなら பஸ்ல です。" }),
      P({ id: "sp3-04", scene: "人と話す", targetTamil: "நான் நண்பரோட போறேன்.", structuredRoman: "nāṉ naṇpar-ōṭa pōṟ-ēṉ.", pronunciationRoman: "nān naṇbarōḍa pōrēn.", katakana: "ナーン ナンバロード ポーレーン。", meaningJa: "私は友達と一緒に行きます。", literalJapanese: "私＋友達・共同＋行く・私", note: "-ஓட は名詞の前なら「の」、動詞の前なら「と一緒に」。" }),
      P({ id: "sp3-05", scene: "困ったとき", targetTamil: "மழையால பஸ் லேட்.", structuredRoman: "maḻai-y-āla pas lēṭ.", pronunciationRoman: "maḻaiyāla bas lēṭ.", katakana: "マライヤーラ バス レート。", meaningJa: "雨のためバスが遅れています。", literalJapanese: "雨・原因＋バス＋遅れ", note: "原因の -ஆல。遅延の理由を一言で説明できます。" }),
      P({ id: "sp3-06", scene: "食事", targetTamil: "இது ரவியோட காபி.", structuredRoman: "itu ravi-y-ōṭa kāpi.", pronunciationRoman: "idu raviyōḍa kābi.", katakana: "イドゥ ラヴィヨーダ カービ。", meaningJa: "これはラヴィのコーヒーです。", literalJapanese: "これ＋ラヴィの＋コーヒー", note: "人名には -ஓட を付けて「〜の」を作ります。" })
    ],
    drills: [
      D({
        id: "dr3-01",
        type: "場面選択",
        scene: "移動・オート",
        prompt: "「友達と一緒に行きます」と言いたい場面です。正しいのはどれですか。",
        options: [
        { targetTamil: "நான் நண்பரோட போறேன்.", structuredRoman: "nāṉ naṇpar-ōṭa pōṟ-ēṉ.", pronunciationRoman: "nān naṇbarōḍa pōrēn.", katakana: "ナーン ナンバロード ポーレーン。", ja: "友達と一緒に行きます", tag: "正解" },
        { targetTamil: "இது நண்பரோட டிக்கெட்.", structuredRoman: "itu naṇpar-ōṭa ṭikkeṭ.", pronunciationRoman: "idu naṇbarōḍa ṭikkeṭ.", katakana: "イドゥ ナンバロード ティッケトゥ。", ja: "これは友達の切符です", tag: "「の」の読みになっている" },
        { targetTamil: "நான் நண்பருக்காக போறேன்.", structuredRoman: "nāṉ naṇpar-ukkāka pōṟ-ēṉ.", pronunciationRoman: "nān naṇbarukkāga pōrēn.", katakana: "ナーン ナンバルッカーガ ポーレーン。", ja: "友達のために行きます", tag: "目的との混同" },
        { targetTamil: "நான் பஸ்ல போறேன்.", structuredRoman: "nāṉ pas-la pōṟ-ēṉ.", pronunciationRoman: "nān basla pōrēn.", katakana: "ナーン バスラ ポーレーン。", ja: "私はバスで行きます", tag: "手段の話になっている" }
        ],
        answer: 0,
        feedback: "-ஓட の後ろが動詞なら「と一緒に」、名詞なら「の」です。",
        hint: "-ஓட の直後に何が来るかまで見ます。"
      }),
      D({
        id: "dr3-02",
        type: "語形選択",
        scene: "空港・駅",
        prompt: "「これは私の切符です」。空欄に入るのはどれですか。 இது ___ டிக்கெட்.",
        options: [
        { targetTamil: "என்", structuredRoman: "eṉ", pronunciationRoman: "en", katakana: "エン", ja: "私の", tag: "正解" },
        { targetTamil: "எனக்கு", structuredRoman: "eṉ-akku", pronunciationRoman: "enakku", katakana: "エナック", ja: "私に", tag: "与格との混同" },
        { targetTamil: "என்னை", structuredRoman: "eṉṉ-ai", pronunciationRoman: "enne", katakana: "エンネ", ja: "私を", tag: "対格との混同" },
        { targetTamil: "நான்", structuredRoman: "nāṉ", pronunciationRoman: "nān", katakana: "ナーン", ja: "私は", tag: "主格のまま" }
        ],
        answer: 0,
        feedback: "名詞の直前で「〜の」を作るのは என் です。",
        hint: "直後に名詞 டிக்கெட் が来ています。"
      }),
      D({
        id: "dr3-03",
        type: "場面選択",
        scene: "困ったとき",
        prompt: "バスが遅れている理由を「雨のため」と説明します。どれですか。",
        options: [
        { targetTamil: "மழையால பஸ் லேட்.", structuredRoman: "maḻai-y-āla pas lēṭ.", pronunciationRoman: "maḻaiyāla bas lēṭ.", katakana: "マライヤーラ バス レート。", ja: "雨のためバスが遅れています", tag: "正解" },
        { targetTamil: "மழை பஸ் லேட்.", structuredRoman: "maḻai pas lēṭ.", pronunciationRoman: "maḻai bas lēṭ.", katakana: "マライ バス レート。", ja: "雨＋バス＋遅れ（関係が出ない）", tag: "原因の語尾がない" },
        { targetTamil: "பஸ்ல மழை இருக்கு.", structuredRoman: "pas-la maḻai irukku.", pronunciationRoman: "basla maḻai irukku.", katakana: "バスラ マライ イルック。", ja: "バスに雨があります", tag: "場所の話になっている" },
        { targetTamil: "மழையால ரயில் லேட்.", structuredRoman: "maḻai-y-āla rayil lēṭ.", pronunciationRoman: "maḻaiyāla rayil lēṭ.", katakana: "マライヤーラ ライル レート。", ja: "雨のため列車が遅れています", tag: "乗り物が違う" }
        ],
        answer: 0,
        feedback: "原因は -ஆல。மழை が மழையால になります。",
        hint: "「〜のせいで」に当たる語尾を探します。"
      }),
      D({
        id: "dr3-04",
        type: "場面選択",
        scene: "食事",
        prompt: "「私は手で食べます」と伝えます。手段を正しく示しているのはどれですか。",
        options: [
        { targetTamil: "நான் கையால சாப்பிடுறேன்.", structuredRoman: "nāṉ kai-y-āla cāppiṭu-ṟ-ēṉ.", pronunciationRoman: "nān kaiyāla sāppiḍurēn.", katakana: "ナーン カイヤーラ サーッピドゥレーン。", ja: "私は手で食べます", tag: "正解" },
        { targetTamil: "நான் பேனாவால எழுதுறேன்.", structuredRoman: "nāṉ pēṉā-v-āla eḻutu-ṟ-ēṉ.", pronunciationRoman: "nān pēnāvāla eḻudurēn.", katakana: "ナーン ペーナーヴァーラ エルドゥレーン。", ja: "私はペンで書きます", tag: "道具も動作も違う" },
        { targetTamil: "நான் நண்பரோட சாப்பிடுறேன்.", structuredRoman: "nāṉ naṇpar-ōṭa cāppiṭu-ṟ-ēṉ.", pronunciationRoman: "nān naṇbarōḍa sāppiḍurēn.", katakana: "ナーン ナンバロード サーッピドゥレーン。", ja: "私は友達と食べます", tag: "共同の読み" },
        { targetTamil: "இது என் கார்.", structuredRoman: "itu eṉ kār.", pronunciationRoman: "idu en kār.", katakana: "イドゥ エン カール。", ja: "これは私の車です", tag: "手段の文ではない" }
        ],
        answer: 0,
        feedback: "道具・手段も原因と同じ -ஆல で示します。கை → கையால。",
        hint: "何を使って食べるかを示す語尾です。"
      }),
      D({
        id: "dr3-05",
        type: "空欄補充",
        scene: "ホテル",
        prompt: "宿で自分の部屋を確認されました。「これはあなたの部屋です」の空欄はどれですか。 இது ___ ரூம்.",
        options: [
        { targetTamil: "உங்க", structuredRoman: "uṅka", pronunciationRoman: "unga", katakana: "ウンガ", ja: "あなたの（丁寧）", tag: "正解" },
        { targetTamil: "உன்", structuredRoman: "uṉ", pronunciationRoman: "un", katakana: "ウン", ja: "君の（親称）", tag: "距離が近すぎる" },
        { targetTamil: "உங்களுக்கு", structuredRoman: "uṅkaḷ-ukku", pronunciationRoman: "ungaḷukku", katakana: "ウンガルック", ja: "あなたに", tag: "与格との混同" },
        { targetTamil: "உங்களை", structuredRoman: "uṅkaḷ-ai", pronunciationRoman: "ungaḷe", katakana: "ウンガレ", ja: "あなたを", tag: "対格との混同" }
        ],
        answer: 0,
        feedback: "名詞の前で「あなたの」を作るのは உங்க です。",
        hint: "初対面の相手に使える丁寧な形を選びます。"
      })
    ]
  });

  attach(4, {
    phrases: [
      P({ id: "sp4-01", scene: "移動・オート", targetTamil: "நான் கடற்கரைக்கு போறேன்.", structuredRoman: "nāṉ kaṭaṟkarai-kku pōṟ-ēṉ.", pronunciationRoman: "nān kaḍarkaraikku pōrēn.", katakana: "ナーン カダルカライック ポーレーン。", meaningJa: "私は海岸へ行きます。", literalJapanese: "私＋海岸・到達＋行く・私", note: "行き先は -க்கு。目的地を言うときの基本形です。" }),
      P({ id: "sp4-02", scene: "道をきく", targetTamil: "கோவில் எங்கே?", structuredRoman: "kōvil eṅkē?", pronunciationRoman: "kōvil engē?", katakana: "コーヴィル エンゲー？", meaningJa: "寺院はどこですか。", literalJapanese: "寺院＋どこ", note: "地名や建物名＋எங்கே だけで道をきけます。" }),
      P({ id: "sp4-03", scene: "ホテル", targetTamil: "நான் ஹோட்டல்ல இருக்கேன்.", structuredRoman: "nāṉ hōṭṭal-la irukk-ēṉ.", pronunciationRoman: "nān hōṭṭalla irukkēn.", katakana: "ナーン ホーッタッラ イルッケーン。", meaningJa: "私はホテルにいます。", literalJapanese: "私＋ホテル・場所＋いる・私", note: "電話で今いる場所を伝えるときの形です。" }),
      P({ id: "sp4-04", scene: "空港・駅", targetTamil: "ரயில் எங்கே நிக்கும்?", structuredRoman: "rayil eṅkē nikk-um?", pronunciationRoman: "rayil engē nikkum?", katakana: "ライル エンゲー ニックム？", meaningJa: "列車はどこに止まりますか。", literalJapanese: "列車＋どこ＋止まる", note: "நிக்கும் は「止まる」。バスにもそのまま使えます。" }),
      P({ id: "sp4-05", scene: "移動・オート", targetTamil: "நான் கடைலேருந்து ஹோட்டலுக்கு போறேன்.", structuredRoman: "nāṉ kaṭai-lēruntu hōṭṭal-ukku pōṟ-ēṉ.", pronunciationRoman: "nān kaḍailērundu hōṭṭalukku pōrēn.", katakana: "ナーン カダイレールンドゥ ホーッタルック ポーレーン。", meaningJa: "私は店からホテルへ行きます。", literalJapanese: "私＋店・起点＋ホテル・到達＋行く・私", note: "起点 -லேருந்து と行き先 -உக்கு は一文に同居できます。" }),
      P({ id: "sp4-06", scene: "困ったとき", targetTamil: "என்னோட பை எங்கே?", structuredRoman: "eṉṉ-ōṭa pai eṅkē?", pronunciationRoman: "ennōḍa pai engē?", katakana: "エンノーダ パイ エンゲー？", meaningJa: "私のかばんはどこですか。", literalJapanese: "私の＋かばん＋どこ", note: "荷物が見つからないときにそのまま使えます。" })
    ],
    drills: [
      D({
        id: "dr4-01",
        type: "場面選択",
        scene: "移動・オート",
        prompt: "今どこにいるかを電話で伝えます。「ホテルにいます」はどれですか。",
        options: [
        { targetTamil: "நான் ஹோட்டல்ல இருக்கேன்.", structuredRoman: "nāṉ hōṭṭal-la irukk-ēṉ.", pronunciationRoman: "nān hōṭṭalla irukkēn.", katakana: "ナーン ホーッタッラ イルッケーン。", ja: "私はホテルにいます", tag: "正解" },
        { targetTamil: "நான் ஹோட்டலுக்கு போறேன்.", structuredRoman: "nāṉ hōṭṭal-ukku pōṟ-ēṉ.", pronunciationRoman: "nān hōṭṭalukku pōrēn.", katakana: "ナーン ホーッタルック ポーレーン。", ja: "私はホテルへ行きます", tag: "移動中の話になっている" },
        { targetTamil: "நான் ஹோட்டல்லேருந்து வர்றேன்.", structuredRoman: "nāṉ hōṭṭal-lēruntu varṟ-ēṉ.", pronunciationRoman: "nān hōṭṭallērundu varrēn.", katakana: "ナーン ホーッタッレールンドゥ ヴァッレーン。", ja: "私はホテルから来ます", tag: "起点の話になっている" },
        { targetTamil: "ஹோட்டல் எங்கே?", structuredRoman: "hōṭṭal eṅkē?", pronunciationRoman: "hōṭṭal engē?", katakana: "ホーッタル エンゲー？", ja: "ホテルはどこですか", tag: "質問になっている" }
        ],
        answer: 0,
        feedback: "いる場所は -ல、行き先は -உக்கு、出発点は -லேருந்து です。",
        hint: "動いているのか、留まっているのかを見分けます。"
      }),
      D({
        id: "dr4-02",
        type: "語形選択",
        scene: "空港・駅",
        prompt: "「チェンナイから来ました」。சென்னை はどの形になりますか。",
        options: [
        { targetTamil: "நான் சென்னையிலேருந்து வர்றேன்.", structuredRoman: "nāṉ ceṉṉai-y-ilēruntu varṟ-ēṉ.", pronunciationRoman: "nān sennaiyilērundu varrēn.", katakana: "ナーン センナイイレールンドゥ ヴァッレーン。", ja: "私はチェンナイから来ます", tag: "正解" },
        { targetTamil: "நான் சென்னைக்கு போறேன்.", structuredRoman: "nāṉ ceṉṉai-kku pōṟ-ēṉ.", pronunciationRoman: "nān sennaikku pōrēn.", katakana: "ナーン センナイック ポーレーン。", ja: "私はチェンナイへ行きます", tag: "行き先との取り違え" },
        { targetTamil: "நான் சென்னையில இருக்கேன்.", structuredRoman: "nāṉ ceṉṉai-y-ila irukk-ēṉ.", pronunciationRoman: "nān sennaiyila irukkēn.", katakana: "ナーン センナイイラ イルッケーン。", ja: "私はチェンナイにいます", tag: "所在との取り違え" },
        { targetTamil: "சென்னை எங்கே?", structuredRoman: "ceṉṉai eṅkē?", pronunciationRoman: "sennai engē?", katakana: "センナイ エンゲー？", ja: "チェンナイはどこですか", tag: "質問になっている" }
        ],
        answer: 0,
        feedback: "起点は -லேருந்து。場所形 -ல に「から」が乗った形と考えます。",
        hint: "出発点を示す語尾を探します。"
      }),
      D({
        id: "dr4-03",
        type: "場面選択",
        scene: "道をきく",
        prompt: "駅で「列車はどこに止まりますか」ときく形はどれですか。",
        options: [
        { targetTamil: "ரயில் எங்கே நிக்கும்?", structuredRoman: "rayil eṅkē nikk-um?", pronunciationRoman: "rayil engē nikkum?", katakana: "ライル エンゲー ニックム？", ja: "列車はどこに止まりますか", tag: "正解" },
        { targetTamil: "ரயில் எவ்வளவு?", structuredRoman: "rayil evvaḷavu?", pronunciationRoman: "rayil evvaḷavu?", katakana: "ライル エッヴァラヴ？", ja: "列車はいくらですか", tag: "値段をきいている" },
        { targetTamil: "ரயில் எங்கே?", structuredRoman: "rayil eṅkē?", pronunciationRoman: "rayil engē?", katakana: "ライル エンゲー？", ja: "列車はどこですか", tag: "止まる場所まではきけていない" },
        { targetTamil: "ரயில் லேட்.", structuredRoman: "rayil lēṭ.", pronunciationRoman: "rayil lēṭ.", katakana: "ライル レート。", ja: "列車が遅れています", tag: "質問になっていない" }
        ],
        answer: 0,
        feedback: "எங்கே が場所、நிக்கும் が「止まる」です。二つ揃えて停車位置をきけます。",
        hint: "知りたいのは「止まる場所」です。"
      }),
      D({
        id: "dr4-04",
        type: "場面選択",
        scene: "困ったとき",
        prompt: "荷物が見当たりません。持ち主を含めて自然にきけるのはどれですか。",
        options: [
        { targetTamil: "என்னோட பை எங்கே?", structuredRoman: "eṉṉ-ōṭa pai eṅkē?", pronunciationRoman: "ennōḍa pai engē?", katakana: "エンノーダ パイ エンゲー？", ja: "私のかばんはどこですか", tag: "正解" },
        { targetTamil: "பை எங்கே?", structuredRoman: "pai eṅkē?", pronunciationRoman: "pai engē?", katakana: "パイ エンゲー？", ja: "かばんはどこですか", tag: "誰のものか分からない" },
        { targetTamil: "என்னோட பை இருக்கு.", structuredRoman: "eṉṉ-ōṭa pai irukku.", pronunciationRoman: "ennōḍa pai irukku.", katakana: "エンノーダ パイ イルック。", ja: "私のかばんはあります", tag: "質問になっていない" },
        { targetTamil: "என்னோட பைல பணம் இருக்கு.", structuredRoman: "eṉṉ-ōṭa pai-la paṇam irukku.", pronunciationRoman: "ennōḍa paila paṇam irukku.", katakana: "エンノーダ パイラ パナム イルック。", ja: "私のかばんにお金があります", tag: "きいている内容が違う" }
        ],
        answer: 0,
        feedback: "என்னோட で持ち主を示し、எங்கே で場所をきけます。",
        hint: "自分の荷物だと分かる情報を入れます。"
      }),
      D({
        id: "dr4-05",
        type: "空欄補充",
        scene: "移動・オート",
        prompt: "「店からホテルへ行きます」。空欄に入るのはどれですか。 நான் ___ ஹோட்டலுக்கு போறேன்.",
        options: [
        { targetTamil: "கடைலேருந்து", structuredRoman: "kaṭai-lēruntu", pronunciationRoman: "kaḍailērundu", katakana: "カダイレールンドゥ", ja: "店から（起点）", tag: "正解" },
        { targetTamil: "கடைக்கு", structuredRoman: "kaṭai-kku", pronunciationRoman: "kaḍaikku", katakana: "カダイック", ja: "店へ（到達）", tag: "行き先が二つになる" },
        { targetTamil: "கடைல", structuredRoman: "kaṭai-la", pronunciationRoman: "kaḍaila", katakana: "カダイラ", ja: "店で（場所）", tag: "起点になっていない" },
        { targetTamil: "கடை", structuredRoman: "kaṭai", pronunciationRoman: "kaḍai", katakana: "カダイ", ja: "店（辞書形）", tag: "格語尾なし" }
        ],
        answer: 0,
        feedback: "文中にすでに行き先 ஹோட்டலுக்கு があるので、残りは出発点です。",
        hint: "後ろの ஹோட்டலுக்கு が何を担っているかを先に確かめます。"
      })
    ]
  });

  attach(5, {
    phrases: [
      P({ id: "sp5-01", scene: "道をきく", targetTamil: "ஹோட்டல் வரை நடக்கலாம்.", structuredRoman: "hōṭṭal varai naṭakkalām.", pronunciationRoman: "hōṭṭal varai naḍakkalām.", katakana: "ホーッタル ヴァライ ナダッカラーム。", meaningJa: "ホテルまで歩きましょう。", literalJapanese: "ホテル＋まで＋歩こう", note: "வரை は終点。「どこまで」を一語で示します。" }),
      P({ id: "sp5-02", scene: "食事", targetTamil: "நண்பருக்காக காபி வாங்கறேன்.", structuredRoman: "naṇpar-ukkāka kāpi vāṅkaṟ-ēṉ.", pronunciationRoman: "naṇbarukkāga kābi vāngarēn.", katakana: "ナンバルッカーガ カービ ヴァーンガレーン。", meaningJa: "友達のためにコーヒーを買います。", literalJapanese: "友達・のため＋コーヒー＋買う・私", note: "-உக்காக は「〜のために」。人にも目的にも使えます。" }),
      P({ id: "sp5-03", scene: "ホテル", targetTamil: "கடற்கரை பக்கத்துல ஹோட்டல் இருக்கு.", structuredRoman: "kaṭaṟkarai pakkatt-ula hōṭṭal irukku.", pronunciationRoman: "kaḍarkarai pakkattula hōṭṭal irukku.", katakana: "カダルカライ パッカットゥラ ホーッタル イルック。", meaningJa: "海岸の近くにホテルがあります。", literalJapanese: "海岸＋近く・場所＋ホテル＋ある", note: "பக்கத்துல は「〜の近くに」。目印から説明できます。" }),
      P({ id: "sp5-04", scene: "人と話す", targetTamil: "இந்த கோவில் பற்றி சொல்லுங்க.", structuredRoman: "inta kōvil paṟṟi collu-ṅka.", pronunciationRoman: "inda kōvil patti sollunga.", katakana: "インダ コーヴィル パッティ ソッルンガ。", meaningJa: "この寺院について教えてください。", literalJapanese: "この＋寺院＋について＋言ってください", note: "பற்றி は「〜について」。話題を指定できます。" }),
      P({ id: "sp5-05", scene: "空港・駅", targetTamil: "ஐந்து மணி வரை இங்கே காத்திருங்க.", structuredRoman: "aintu maṇi varai iṅkē kāttiru-ṅka.", pronunciationRoman: "aindu maṇi varai ingē kāttirunga.", katakana: "アインドゥ マニ ヴァライ インゲー カーッティルンガ。", meaningJa: "5時までここで待っていてください。", literalJapanese: "五＋時＋まで＋ここ＋待ってください", note: "வரை は時間の終点にも使えます。" }),
      P({ id: "sp5-06", scene: "移動・オート", targetTamil: "ஹோட்டல் பக்கத்துல ஆட்டோ இருக்கு.", structuredRoman: "hōṭṭal pakkatt-ula āṭṭō irukku.", pronunciationRoman: "hōṭṭal pakkattula āṭṭō irukku.", katakana: "ホーッタル パッカットゥラ アーットー イルック。", meaningJa: "ホテルの近くにオートがあります。", literalJapanese: "ホテル＋近く・場所＋オート＋ある", note: "乗り場を説明するときの言い方です。" })
    ],
    drills: [
      D({
        id: "dr5-01",
        type: "場面選択",
        scene: "道をきく",
        prompt: "「海岸まで歩きましょう」と誘います。終点を正しく示しているのはどれですか。",
        options: [
        { targetTamil: "நாம கடற்கரை வரை நடக்கலாம்.", structuredRoman: "nāma kaṭaṟkarai varai naṭakkalām.", pronunciationRoman: "nāma kaḍarkarai varai naḍakkalām.", katakana: "ナーマ カダルカライ ヴァライ ナダッカラーム。", ja: "海岸まで歩きましょう", tag: "正解" },
        { targetTamil: "நாம கடற்கரைக்கு நடக்கலாம்.", structuredRoman: "nāma kaṭaṟkarai-kku naṭakkalām.", pronunciationRoman: "nāma kaḍarkaraikku naḍakkalām.", katakana: "ナーマ カダルカライック ナダッカラーム。", ja: "海岸へ歩きましょう", tag: "終点ではなく到達点" },
        { targetTamil: "கடற்கரை பக்கத்துல ஹோட்டல் இருக்கு.", structuredRoman: "kaṭaṟkarai pakkatt-ula hōṭṭal irukku.", pronunciationRoman: "kaḍarkarai pakkattula hōṭṭal irukku.", katakana: "カダルカライ パッカットゥラ ホーッタル イルック。", ja: "海岸の近くにホテルがあります", tag: "誘いになっていない" },
        { targetTamil: "நாம கடற்கரை பற்றி பேசலாம்.", structuredRoman: "nāma kaṭaṟkarai paṟṟi pēcalām.", pronunciationRoman: "nāma kaḍarkarai patti pēsalām.", katakana: "ナーマ カダルカライ パッティ ペーサラーム。", ja: "海岸について話しましょう", tag: "話題の指定になっている" }
        ],
        answer: 0,
        feedback: "வரை は「そこまで」という終点。-க்கு は単に行き先です。",
        hint: "どこまで歩くのかという範囲を示します。"
      }),
      D({
        id: "dr5-02",
        type: "語形選択",
        scene: "食事",
        prompt: "「あなたのために水を買います」。空欄はどれですか。 ___ தண்ணி வாங்கறேன்.",
        options: [
        { targetTamil: "உங்களுக்காக", structuredRoman: "uṅkaḷ-ukkāka", pronunciationRoman: "ungaḷukkāga", katakana: "ウンガルッカーガ", ja: "あなたのために", tag: "正解" },
        { targetTamil: "உங்களுக்கு", structuredRoman: "uṅkaḷ-ukku", pronunciationRoman: "ungaḷukku", katakana: "ウンガルック", ja: "あなたに", tag: "受け手であって目的ではない" },
        { targetTamil: "உங்களை", structuredRoman: "uṅkaḷ-ai", pronunciationRoman: "ungaḷe", katakana: "ウンガレ", ja: "あなたを", tag: "対格との混同" },
        { targetTamil: "உங்க", structuredRoman: "uṅka", pronunciationRoman: "unga", katakana: "ウンガ", ja: "あなたの", tag: "所有形との混同" }
        ],
        answer: 0,
        feedback: "「〜のために」は -உக்காக。与格 -உக்கு に目的の意味が乗った形です。",
        hint: "誰のための行動かを示します。"
      }),
      D({
        id: "dr5-03",
        type: "場面選択",
        scene: "人と話す",
        prompt: "ガイドに「この映画について話しましょう」と言います。どれですか。",
        options: [
        { targetTamil: "இந்த படம் பற்றி பேசலாம்.", structuredRoman: "inta paṭam paṟṟi pēcalām.", pronunciationRoman: "inda paḍam patti pēsalām.", katakana: "インダ パダム パッティ ペーサラーム。", ja: "この映画について話しましょう", tag: "正解" },
        { targetTamil: "இந்த படம் வரை பேசலாம்.", structuredRoman: "inta paṭam varai pēcalām.", pronunciationRoman: "inda paḍam varai pēsalām.", katakana: "インダ パダム ヴァライ ペーサラーム。", ja: "この映画まで話しましょう", tag: "終点との混同" },
        { targetTamil: "இந்த படம் தவிர வேற டிக்கெட் இல்லை.", structuredRoman: "inta paṭam tavira vēṟa ṭikkeṭ illai.", pronunciationRoman: "inda paḍam tavira vēra ṭikkeṭ illai.", katakana: "インダ パダム タヴィラ ヴェーラ ティッケトゥ イッライ。", ja: "この映画以外に別の切符はありません", tag: "除外の読み" },
        { targetTamil: "இந்த படம் பக்கத்துல இருக்கு.", structuredRoman: "inta paṭam pakkatt-ula irukku.", pronunciationRoman: "inda paḍam pakkattula irukku.", katakana: "インダ パダム パッカットゥラ イルック。", ja: "この映画の近くにあります", tag: "位置関係の読み" }
        ],
        answer: 0,
        feedback: "話題を指定するのは பற்றி です。",
        hint: "何についての話かを示す後置詞を選びます。"
      }),
      D({
        id: "dr5-04",
        type: "場面選択",
        scene: "空港・駅",
        prompt: "同行者に「5時までここで待っていてください」と伝えます。どれですか。",
        options: [
        { targetTamil: "ஐந்து மணி வரை இங்கே காத்திருங்க.", structuredRoman: "aintu maṇi varai iṅkē kāttiru-ṅka.", pronunciationRoman: "aindu maṇi varai ingē kāttirunga.", katakana: "アインドゥ マニ ヴァライ インゲー カーッティルンガ。", ja: "5時までここで待っていてください", tag: "正解" },
        { targetTamil: "ஐந்து மணி வரை இங்கே வாங்க.", structuredRoman: "aintu maṇi varai iṅkē vāṅka.", pronunciationRoman: "aindu maṇi varai ingē vānga.", katakana: "アインドゥ マニ ヴァライ インゲー ヴァーンガ。", ja: "5時までここへ来てください", tag: "動作が違う" },
        { targetTamil: "இங்கே வரை நடக்கலாம்.", structuredRoman: "iṅkē varai naṭakkalām.", pronunciationRoman: "ingē varai naḍakkalām.", katakana: "インゲー ヴァライ ナダッカラーム。", ja: "ここまで歩きましょう", tag: "時間ではなく距離" },
        { targetTamil: "கொஞ்சம் காத்திருங்க.", structuredRoman: "koñcam kāttiru-ṅka.", pronunciationRoman: "konjam kāttirunga.", katakana: "コンジャム カーッティルンガ。", ja: "少し待ってください", tag: "終わりの時刻がない" }
        ],
        answer: 0,
        feedback: "வரை は時間にも距離にも使えます。ここでは ஐந்து மணி வரை が終了時刻です。",
        hint: "いつまで待つのかが入っているものを選びます。"
      }),
      D({
        id: "dr5-05",
        type: "空欄補充",
        scene: "ホテル",
        prompt: "「寺院の近くに店があります」。空欄はどれですか。 கோவில் ___ கடை இருக்கு.",
        options: [
        { targetTamil: "பக்கத்துல", structuredRoman: "pakkatt-ula", pronunciationRoman: "pakkattula", katakana: "パッカットゥラ", ja: "近くに", tag: "正解" },
        { targetTamil: "பற்றி", structuredRoman: "paṟṟi", pronunciationRoman: "patti", katakana: "パッティ", ja: "について", tag: "話題の指定" },
        { targetTamil: "வரை", structuredRoman: "varai", pronunciationRoman: "varai", katakana: "ヴァライ", ja: "まで", tag: "終点の指定" },
        { targetTamil: "தவிர", structuredRoman: "tavira", pronunciationRoman: "tavira", katakana: "タヴィラ", ja: "以外", tag: "除外の指定" }
        ],
        answer: 0,
        feedback: "位置関係を作るのは பக்கத்துல です。後置詞ごとに担当が違います。",
        hint: "距離が近いことを示す語を選びます。"
      })
    ]
  });

  attach(6, {
    phrases: [
      P({ id: "sp6-01", scene: "困ったとき", targetTamil: "இது என் ரூம் இல்லை.", structuredRoman: "itu eṉ rūm illai.", pronunciationRoman: "idu en rūm illai.", katakana: "イドゥ エン ルーム イッライ。", meaningJa: "これは私の部屋ではありません。", literalJapanese: "これ＋私の＋部屋＋ではない", note: "名詞で言い切る文の否定は இல்லை を後ろに置くだけです。" }),
      P({ id: "sp6-02", scene: "買い物", targetTamil: "என்கிட்ட கார்டு இருக்கு.", structuredRoman: "eṉ-kiṭṭa kārṭu irukku.", pronunciationRoman: "engiṭṭa kārḍu irukku.", katakana: "エンギッタ カールドゥ イルック。", meaningJa: "カードを持っています。", literalJapanese: "私の手元＋カード＋ある", note: "持ち物は「私の手元にある」という組み立てで言います。" }),
      P({ id: "sp6-03", scene: "食事", targetTamil: "எனக்கு காபி பிடிக்கும்.", structuredRoman: "eṉ-akku kāpi piṭikkum.", pronunciationRoman: "enakku kābi piḍikkum.", katakana: "エナック カービ ピディックム。", meaningJa: "私はコーヒーが好きです。", literalJapanese: "私・与格＋コーヒー＋好き", note: "好きな人は எனக்கு の側。好きな対象がそのまま並びます。" }),
      P({ id: "sp6-04", scene: "人と話す", targetTamil: "எனக்கு கொஞ்சம் தமிழ் புரியும்.", structuredRoman: "eṉ-akku koñcam tamiḻ puriyum.", pronunciationRoman: "enakku konjam tamiḻ puriyum.", katakana: "エナック コンジャム タミル プリユム。", meaningJa: "タミル語が少し分かります。", literalJapanese: "私・与格＋少し＋タミル語＋分かる", note: "会話の最初に言っておくと、相手が速度を落としてくれます。" }),
      P({ id: "sp6-05", scene: "ホテル", targetTamil: "அவர் ரூம்ல இருக்கார்.", structuredRoman: "avar rūm-la irukk-ār.", pronunciationRoman: "avar rūmla irukkār.", katakana: "アヴァル ルームラ イルッカール。", meaningJa: "その方は部屋にいます。", literalJapanese: "その方＋部屋・場所＋いる・敬意", note: "人がいる場合も இரு-。動詞の右端が敬意を示します。" }),
      P({ id: "sp6-06", scene: "空港・駅", targetTamil: "உங்ககிட்ட டிக்கெட் இருக்கா?", structuredRoman: "uṅka-kiṭṭa ṭikkeṭ irukk-ā?", pronunciationRoman: "ungagiṭṭa ṭikkeṭ irukkā?", katakana: "ウンガギッタ ティッケトゥ イルッカー？", meaningJa: "切符をお持ちですか。", literalJapanese: "あなたの手元＋切符＋ある・か", note: "-கிட்ட ＋ இருக்கா で「持っていますか」になります。" })
    ],
    drills: [
      D({
        id: "dr6-01",
        type: "場面選択",
        scene: "買い物",
        prompt: "支払いのときに「カードを持っています」と伝えます。どれですか。",
        options: [
        { targetTamil: "என்கிட்ட கார்டு இருக்கு.", structuredRoman: "eṉ-kiṭṭa kārṭu irukku.", pronunciationRoman: "engiṭṭa kārḍu irukku.", katakana: "エンギッタ カールドゥ イルック。", ja: "カードを持っています", tag: "正解" },
        { targetTamil: "எனக்கு கார்டு வேணும்.", structuredRoman: "eṉ-akku kārṭu vēṇum.", pronunciationRoman: "enakku kārḍu vēṇum.", katakana: "エナック カールドゥ ヴェーヌム。", ja: "カードが欲しいです", tag: "所有ではなく要求" },
        { targetTamil: "எனக்கு கார்டு பிடிக்கும்.", structuredRoman: "eṉ-akku kārṭu piṭikkum.", pronunciationRoman: "enakku kārḍu piḍikkum.", katakana: "エナック カールドゥ ピディックム。", ja: "カードが好きです", tag: "所有ではなく好み" },
        { targetTamil: "என்கிட்ட கார்டு இல்லை.", structuredRoman: "eṉ-kiṭṭa kārṭu illai.", pronunciationRoman: "engiṭṭa kārḍu illai.", katakana: "エンギッタ カールドゥ イッライ。", ja: "カードを持っていません", tag: "否定との取り違え" }
        ],
        answer: 0,
        feedback: "持ち物は -கிட்ட ＋ இருக்கு。「私に必要」の எனக்கு とは別の文型です。",
        hint: "今すでに手元にあることを言います。"
      }),
      D({
        id: "dr6-02",
        type: "語形選択",
        scene: "ホテル",
        prompt: "「これはホテルではありません」。正しい否定はどれですか。",
        options: [
        { targetTamil: "இது ஹோட்டல் இல்லை.", structuredRoman: "itu hōṭṭal illai.", pronunciationRoman: "idu hōṭṭal illai.", katakana: "イドゥ ホーッタル イッライ。", ja: "これはホテルではありません", tag: "正解" },
        { targetTamil: "இது ஹோட்டல் இருக்கு.", structuredRoman: "itu hōṭṭal irukku.", pronunciationRoman: "idu hōṭṭal irukku.", katakana: "イドゥ ホーッタル イルック。", ja: "これはホテルがあります", tag: "存在文になっている" },
        { targetTamil: "ஹோட்டல் இல்லை.", structuredRoman: "hōṭṭal illai.", pronunciationRoman: "hōṭṭal illai.", katakana: "ホーッタル イッライ。", ja: "ホテルがありません", tag: "「これは」が抜けている" },
        { targetTamil: "இது என் ஹோட்டல்.", structuredRoman: "itu eṉ hōṭṭal.", pronunciationRoman: "idu en hōṭṭal.", katakana: "イドゥ エン ホーッタル。", ja: "これは私のホテルです", tag: "否定になっていない" }
        ],
        answer: 0,
        feedback: "名詞で言い切る文も、存在文も、否定はどちらも இல்லை です。前の名詞で読み分けます。",
        hint: "「AはBではない」という言い切りの形です。"
      }),
      D({
        id: "dr6-03",
        type: "場面選択",
        scene: "食事",
        prompt: "「コーヒーが好きです」と「コーヒーをください」を区別します。好みを言うのはどれですか。",
        options: [
        { targetTamil: "எனக்கு காபி பிடிக்கும்.", structuredRoman: "eṉ-akku kāpi piṭikkum.", pronunciationRoman: "enakku kābi piḍikkum.", katakana: "エナック カービ ピディックム。", ja: "コーヒーが好きです", tag: "正解" },
        { targetTamil: "எனக்கு காபி வேணும்.", structuredRoman: "eṉ-akku kāpi vēṇum.", pronunciationRoman: "enakku kābi vēṇum.", katakana: "エナック カービ ヴェーヌム。", ja: "コーヒーをください", tag: "その場の要求" },
        { targetTamil: "என்கிட்ட காபி இருக்கு.", structuredRoman: "eṉ-kiṭṭa kāpi irukku.", pronunciationRoman: "engiṭṭa kābi irukku.", katakana: "エンギッタ カービ イルック。", ja: "コーヒーを持っています", tag: "所有" },
        { targetTamil: "எனக்கு காபி புரியும்.", structuredRoman: "eṉ-akku kāpi puriyum.", pronunciationRoman: "enakku kābi puriyum.", katakana: "エナック カービ プリユム。", ja: "コーヒーが分かります", tag: "動詞が場面に合わない" }
        ],
        answer: 0,
        feedback: "பிடிக்கும் は継続的な好み、வேணும் はその場で欲しいものです。",
        hint: "今欲しいのか、いつも好きなのかで選びます。"
      }),
      D({
        id: "dr6-04",
        type: "場面選択",
        scene: "空港・駅",
        prompt: "改札で相手に切符を持っているか尋ねます。どれですか。",
        options: [
        { targetTamil: "உங்ககிட்ட டிக்கெட் இருக்கா?", structuredRoman: "uṅka-kiṭṭa ṭikkeṭ irukk-ā?", pronunciationRoman: "ungagiṭṭa ṭikkeṭ irukkā?", katakana: "ウンガギッタ ティッケトゥ イルッカー？", ja: "切符をお持ちですか", tag: "正解" },
        { targetTamil: "என்கிட்ட டிக்கெட் இருக்கு.", structuredRoman: "eṉ-kiṭṭa ṭikkeṭ irukku.", pronunciationRoman: "engiṭṭa ṭikkeṭ irukku.", katakana: "エンギッタ ティッケトゥ イルック。", ja: "私は切符を持っています", tag: "自分の話になっている" },
        { targetTamil: "உங்களுக்கு டிக்கெட் வேணுமா?", structuredRoman: "uṅkaḷ-ukku ṭikkeṭ vēṇum-ā?", pronunciationRoman: "ungaḷukku ṭikkeṭ vēṇumā?", katakana: "ウンガルック ティッケトゥ ヴェーヌマー？", ja: "切符は要りますか", tag: "所有ではなく必要をきいている" },
        { targetTamil: "டிக்கெட் எவ்வளவு?", structuredRoman: "ṭikkeṭ evvaḷavu?", pronunciationRoman: "ṭikkeṭ evvaḷavu?", katakana: "ティッケトゥ エッヴァラヴ？", ja: "切符はいくらですか", tag: "値段をきいている" }
        ],
        answer: 0,
        feedback: "所有をきくときは -கிட்ட ＋ இருக்கா。相手側に -கிட்ட を付けます。",
        hint: "誰の手元にあるかをきいています。"
      }),
      D({
        id: "dr6-05",
        type: "空欄補充",
        scene: "人と話す",
        prompt: "「タミル語が少し分かります」。空欄はどれですか。 எனக்கு ___ தமிழ் புரியும்.",
        options: [
        { targetTamil: "கொஞ்சம்", structuredRoman: "koñcam", pronunciationRoman: "konjam", katakana: "コンジャム", ja: "少し", tag: "正解" },
        { targetTamil: "ரொம்ப", structuredRoman: "rompa", pronunciationRoman: "romba", katakana: "ロンバ", ja: "とても", tag: "程度が逆" },
        { targetTamil: "இன்னும்", structuredRoman: "iṉṉum", pronunciationRoman: "innum", katakana: "インヌム", ja: "まだ", tag: "時間の副詞" },
        { targetTamil: "மறுபடியும்", structuredRoman: "maṟupaṭiyum", pronunciationRoman: "marubaḍiyum", katakana: "マルバディユム", ja: "もう一度", tag: "回数の副詞" }
        ],
        answer: 0,
        feedback: "கொஞ்சம் は量にも程度にも使えます。会話の最初に添えると角が立ちません。",
        hint: "分かる量が多くないことを示します。"
      })
    ]
  });

  attach(7, {
    phrases: [
      P({ id: "sp7-01", scene: "食事", targetTamil: "நான் இப்போ சாப்பிடுறேன்.", structuredRoman: "nāṉ ippō cāppiṭu-ṟ-ēṉ.", pronunciationRoman: "nān ippō sāppiḍurēn.", katakana: "ナーン イッポー サーッピドゥレーン。", meaningJa: "私は今食べます。", literalJapanese: "私＋今＋食べる・私", note: "現在形は「今している」「これからする」の両方を担います。" }),
      P({ id: "sp7-02", scene: "移動・オート", targetTamil: "நான் ஆட்டோல போனேன்.", structuredRoman: "nāṉ āṭṭō-la pōṉ-ēṉ.", pronunciationRoman: "nān āṭṭōla pōnēn.", katakana: "ナーン アーットーラ ポーネーン。", meaningJa: "私はオートで行きました。", literalJapanese: "私＋オート・手段＋行った・私", note: "過去は動詞の真ん中が変わります。右端の -ஏன் は同じです。" }),
      P({ id: "sp7-03", scene: "買い物", targetTamil: "நான் டிக்கெட் வாங்கறேன்.", structuredRoman: "nāṉ ṭikkeṭ vāṅkaṟ-ēṉ.", pronunciationRoman: "nān ṭikkeṭ vāngarēn.", katakana: "ナーン ティッケトゥ ヴァーンガレーン。", meaningJa: "私は切符を買います。", literalJapanese: "私＋切符＋買う・私", note: "窓口で意思を伝えるときに使えます。" }),
      P({ id: "sp7-04", scene: "人と話す", targetTamil: "நான் அவரோட பேசினேன்.", structuredRoman: "nāṉ avar-ōṭa pēciṉ-ēṉ.", pronunciationRoman: "nān avarōḍa pēsinēn.", katakana: "ナーン アヴァローダ ペーシネーン。", meaningJa: "私はその方と話しました。", literalJapanese: "私＋その方・共同＋話した・私", note: "-ஓட の後ろが動詞なので「と一緒に」の読みです。" }),
      P({ id: "sp7-05", scene: "空港・駅", targetTamil: "நான் நேத்து டிக்கெட் வாங்கினேன்.", structuredRoman: "nāṉ nēttu ṭikkeṭ vāṅkiṉ-ēṉ.", pronunciationRoman: "nān nēttu ṭikkeṭ vānginēn.", katakana: "ナーン ネーットゥ ティッケトゥ ヴァーンギネーン。", meaningJa: "私は昨日切符を買いました。", literalJapanese: "私＋昨日＋切符＋買った・私", note: "時間語 நேத்து があると、過去だと一目で分かります。" }),
      P({ id: "sp7-06", scene: "道をきく", targetTamil: "நான் கோவிலுக்கு போவேன்.", structuredRoman: "nāṉ kōvil-ukku pōv-ēṉ.", pronunciationRoman: "nān kōvilukku pōvēn.", katakana: "ナーン コーヴィルック ポーヴェーン。", meaningJa: "私は寺院へ行くつもりです。", literalJapanese: "私＋寺院・到達＋行く・未来・私", note: "未来形は予定や意志を示します。" })
    ],
    drills: [
      D({
        id: "dr7-01",
        type: "聞き分け",
        scene: "食事",
        prompt: "「昨日コーヒーを飲みました」に当たるのはどれですか。",
        options: [
        { targetTamil: "நான் நேத்து காபி குடிச்சேன்.", structuredRoman: "nāṉ nēttu kāpi kuṭicc-ēṉ.", pronunciationRoman: "nān nēttu kābi kuḍiccēn.", katakana: "ナーン ネーットゥ カービ クディッセーン。", ja: "私は昨日コーヒーを飲みました", tag: "正解" },
        { targetTamil: "நான் இன்னிக்கு காபி குடிக்கறேன்.", structuredRoman: "nāṉ iṉṉikku kāpi kuṭikkaṟ-ēṉ.", pronunciationRoman: "nān innikku kābi kuḍikkarēn.", katakana: "ナーン インニック カービ クディッカレーン。", ja: "私は今日コーヒーを飲みます", tag: "現在との取り違え" },
        { targetTamil: "நான் நாளைக்கு காபி குடிப்பேன்.", structuredRoman: "nāṉ nāḷai-kku kāpi kuṭipp-ēṉ.", pronunciationRoman: "nān nāḷaikku kābi kuḍippēn.", katakana: "ナーン ナーライック カービ クディッペーン。", ja: "私は明日コーヒーを飲みます", tag: "未来との取り違え" },
        { targetTamil: "நான் காபி குடிக்க மாட்டேன்.", structuredRoman: "nāṉ kāpi kuṭikka māṭṭ-ēṉ.", pronunciationRoman: "nān kābi kuḍikka māṭṭēn.", katakana: "ナーン カービ クディッカ マーッテーン。", ja: "私はコーヒーを飲みません", tag: "否定との取り違え" }
        ],
        answer: 0,
        feedback: "குடிச்சேன் が過去、குடிக்கறேன் が現在、குடிப்பேன் が未来です。",
        hint: "時間語と動詞の真ん中を一組で見ます。"
      }),
      D({
        id: "dr7-02",
        type: "語形選択",
        scene: "移動・オート",
        prompt: "「私は行きました」。போ- の過去形はどれですか。",
        options: [
        { targetTamil: "நான் போனேன்.", structuredRoman: "nāṉ pōṉ-ēṉ.", pronunciationRoman: "nān pōnēn.", katakana: "ナーン ポーネーン。", ja: "私は行きました", tag: "正解" },
        { targetTamil: "நான் போறேன்.", structuredRoman: "nāṉ pōṟ-ēṉ.", pronunciationRoman: "nān pōrēn.", katakana: "ナーン ポーレーン。", ja: "私は行きます", tag: "現在形" },
        { targetTamil: "நான் போவேன்.", structuredRoman: "nāṉ pōv-ēṉ.", pronunciationRoman: "nān pōvēn.", katakana: "ナーン ポーヴェーン。", ja: "私は行くつもりです", tag: "未来形" },
        { targetTamil: "நான் போக மாட்டேன்.", structuredRoman: "nāṉ pōka māṭṭ-ēṉ.", pronunciationRoman: "nān pōga māṭṭēn.", katakana: "ナーン ポーガ マーッテーン。", ja: "私は行きません", tag: "否定形" }
        ],
        answer: 0,
        feedback: "போ- は過去で போன- になります。右端の -ஏன் は三つとも同じです。",
        hint: "変わるのは動詞の真ん中です。"
      }),
      D({
        id: "dr7-03",
        type: "場面選択",
        scene: "買い物",
        prompt: "窓口で「切符を買います」と伝えます。どれですか。",
        options: [
        { targetTamil: "நான் டிக்கெட் வாங்கறேன்.", structuredRoman: "nāṉ ṭikkeṭ vāṅkaṟ-ēṉ.", pronunciationRoman: "nān ṭikkeṭ vāngarēn.", katakana: "ナーン ティッケトゥ ヴァーンガレーン。", ja: "私は切符を買います", tag: "正解" },
        { targetTamil: "நான் டிக்கெட் வாங்கினேன்.", structuredRoman: "nāṉ ṭikkeṭ vāṅkiṉ-ēṉ.", pronunciationRoman: "nān ṭikkeṭ vānginēn.", katakana: "ナーン ティッケトゥ ヴァーンギネーン。", ja: "私は切符を買いました", tag: "もう済んだことになる" },
        { targetTamil: "எனக்கு டிக்கெட் வேணும்.", structuredRoman: "eṉ-akku ṭikkeṭ vēṇum.", pronunciationRoman: "enakku ṭikkeṭ vēṇum.", katakana: "エナック ティッケトゥ ヴェーヌム。", ja: "切符が欲しいです", tag: "要求であって行為の宣言ではない" },
        { targetTamil: "என்கிட்ட டிக்கெட் இருக்கு.", structuredRoman: "eṉ-kiṭṭa ṭikkeṭ irukku.", pronunciationRoman: "engiṭṭa ṭikkeṭ irukku.", katakana: "エンギッタ ティッケトゥ イルック。", ja: "切符を持っています", tag: "所有の話" }
        ],
        answer: 0,
        feedback: "これからする行為は現在形で言えます。過去形にすると「もう買った」になります。",
        hint: "まだ買っていない場面です。"
      }),
      D({
        id: "dr7-04",
        type: "場面選択",
        scene: "人と話す",
        prompt: "「その方と話しました」と伝えます。どれですか。",
        options: [
        { targetTamil: "நான் அவரோட பேசினேன்.", structuredRoman: "nāṉ avar-ōṭa pēciṉ-ēṉ.", pronunciationRoman: "nān avarōḍa pēsinēn.", katakana: "ナーン アヴァローダ ペーシネーン。", ja: "その方と話しました", tag: "正解" },
        { targetTamil: "நான் அவரோட பேசலாம்.", structuredRoman: "nāṉ avar-ōṭa pēcalām.", pronunciationRoman: "nān avarōḍa pēsalām.", katakana: "ナーン アヴァローダ ペーサラーム。", ja: "その方と話しましょう", tag: "勧誘になっている" },
        { targetTamil: "அவர் என்னோட பேசினார்.", structuredRoman: "avar eṉṉ-ōṭa pēciṉ-ār.", pronunciationRoman: "avar ennōḍa pēsinār.", katakana: "アヴァル エンノーダ ペーシナール。", ja: "その方が私と話しました", tag: "主語が入れ替わっている" },
        { targetTamil: "நான் அவரோட போனேன்.", structuredRoman: "nāṉ avar-ōṭa pōṉ-ēṉ.", pronunciationRoman: "nān avarōḍa pōnēn.", katakana: "ナーン アヴァローダ ポーネーン。", ja: "その方と一緒に行きました", tag: "動作が違う" }
        ],
        answer: 0,
        feedback: "பேசினேன் が「私が話した」。右端の -ஏன் が話し手を示します。",
        hint: "誰が話したのかを動詞の右端で確かめます。"
      }),
      D({
        id: "dr7-05",
        type: "空欄補充",
        scene: "道をきく",
        prompt: "「明日、寺院へ行くつもりです」。空欄はどれですか。 நான் நாளைக்கு கோவிலுக்கு ___",
        options: [
        { targetTamil: "போவேன்.", structuredRoman: "pōv-ēṉ.", pronunciationRoman: "pōvēn.", katakana: "ポーヴェーン。", ja: "行くつもりです（未来）", tag: "正解" },
        { targetTamil: "போனேன்.", structuredRoman: "pōṉ-ēṉ.", pronunciationRoman: "pōnēn.", katakana: "ポーネーン。", ja: "行きました（過去）", tag: "時間語と食い違う" },
        { targetTamil: "போறேன்.", structuredRoman: "pōṟ-ēṉ.", pronunciationRoman: "pōrēn.", katakana: "ポーレーン。", ja: "行きます（現在）", tag: "予定としては弱い" },
        { targetTamil: "போகல.", structuredRoman: "pōka-la.", pronunciationRoman: "pōgala.", katakana: "ポーガラ。", ja: "行きませんでした", tag: "否定" }
        ],
        answer: 0,
        feedback: "நாளைக்கு があるので未来形 போவேன் が合います。",
        hint: "時間語が指している時と、動詞を合わせます。"
      })
    ]
  });

  attach(8, {
    phrases: [
      P({ id: "sp8-01", scene: "ホテル", targetTamil: "நான் இன்னிக்கு ஹோட்டலுக்கு போறேன்.", structuredRoman: "nāṉ iṉṉikku hōṭṭal-ukku pōṟ-ēṉ.", pronunciationRoman: "nān innikku hōṭṭalukku pōrēn.", katakana: "ナーン インニック ホーッタルック ポーレーン。", meaningJa: "私は今日ホテルへ行きます。", literalJapanese: "私＋今日＋ホテル・到達＋行く・私", note: "இன்னிக்கு と現在形をひと組で覚えます。" }),
      P({ id: "sp8-02", scene: "食事", targetTamil: "நான் நேத்து ஹோட்டல்ல சாப்பிட்டேன்.", structuredRoman: "nāṉ nēttu hōṭṭal-la cāppiṭṭ-ēṉ.", pronunciationRoman: "nān nēttu hōṭṭalla sāppiṭṭēn.", katakana: "ナーン ネーットゥ ホーッタッラ サーッピッテーン。", meaningJa: "私は昨日ホテルで食べました。", literalJapanese: "私＋昨日＋ホテル・場所＋食べた・私", note: "நேத்து と過去形をひと組で覚えます。" }),
      P({ id: "sp8-03", scene: "買い物", targetTamil: "நான் நேத்து கடைல புத்தகம் வாங்கினேன்.", structuredRoman: "nāṉ nēttu kaṭai-la puttakam vāṅkiṉ-ēṉ.", pronunciationRoman: "nān nēttu kaḍaila puttagam vānginēn.", katakana: "ナーン ネーットゥ カダイラ プッタガム ヴァーンギネーン。", meaningJa: "私は昨日、店で本を買いました。", literalJapanese: "私＋昨日＋店・場所＋本＋買った・私", note: "場所 -ல と時間語は、動詞の前に並べます。" }),
      P({ id: "sp8-04", scene: "移動・オート", targetTamil: "நான் நாளைக்கு ஆட்டோல போவேன்.", structuredRoman: "nāṉ nāḷai-kku āṭṭō-la pōv-ēṉ.", pronunciationRoman: "nān nāḷaikku āṭṭōla pōvēn.", katakana: "ナーン ナーライック アーットーラ ポーヴェーン。", meaningJa: "私は明日オートで行きます。", literalJapanese: "私＋明日＋オート・手段＋行く・未来・私", note: "நாளைக்கு と未来形をひと組で覚えます。" }),
      P({ id: "sp8-05", scene: "人と話す", targetTamil: "நான் இன்னிக்கு அவரோட பேசினேன்.", structuredRoman: "nāṉ iṉṉikku avar-ōṭa pēciṉ-ēṉ.", pronunciationRoman: "nān innikku avarōḍa pēsinēn.", katakana: "ナーン インニック アヴァローダ ペーシネーン。", meaningJa: "私は今日その方と話しました。", literalJapanese: "私＋今日＋その方・共同＋話した・私", note: "「今日」でも、済んだ動作なら過去形になります。" }),
      P({ id: "sp8-06", scene: "道をきく", targetTamil: "நான் நாளைக்கு கோவிலுக்கு போவேன்.", structuredRoman: "nāṉ nāḷai-kku kōvil-ukku pōv-ēṉ.", pronunciationRoman: "nān nāḷaikku kōvilukku pōvēn.", katakana: "ナーン ナーライック コーヴィルック ポーヴェーン。", meaningJa: "私は明日、寺院へ行くつもりです。", literalJapanese: "私＋明日＋寺院・到達＋行く・未来・私", note: "予定を伝えるときの基本形です。" })
    ],
    drills: [
      D({
        id: "dr8-01",
        type: "聞き分け",
        scene: "食事",
        prompt: "「今日はホテルで食べます」に当たるのはどれですか。",
        options: [
        { targetTamil: "நான் இன்னிக்கு ஹோட்டல்ல சாப்பிடுறேன்.", structuredRoman: "nāṉ iṉṉikku hōṭṭal-la cāppiṭu-ṟ-ēṉ.", pronunciationRoman: "nān innikku hōṭṭalla sāppiḍurēn.", katakana: "ナーン インニック ホーッタッラ サーッピドゥレーン。", ja: "今日はホテルで食べます", tag: "正解" },
        { targetTamil: "நான் நேத்து ஹோட்டல்ல சாப்பிட்டேன்.", structuredRoman: "nāṉ nēttu hōṭṭal-la cāppiṭṭ-ēṉ.", pronunciationRoman: "nān nēttu hōṭṭalla sāppiṭṭēn.", katakana: "ナーン ネーットゥ ホーッタッラ サーッピッテーン。", ja: "昨日ホテルで食べました", tag: "過去との取り違え" },
        { targetTamil: "நான் நாளைக்கு ஹோட்டல்ல சாப்பிடுவேன்.", structuredRoman: "nāṉ nāḷai-kku hōṭṭal-la cāppiṭ-uv-ēṉ.", pronunciationRoman: "nān nāḷaikku hōṭṭalla sāppiḍuvēn.", katakana: "ナーン ナーライック ホーッタッラ サーッピドゥヴェーン。", ja: "明日ホテルで食べます", tag: "未来との取り違え" },
        { targetTamil: "நான் ஹோட்டலுக்கு போறேன்.", structuredRoman: "nāṉ hōṭṭal-ukku pōṟ-ēṉ.", pronunciationRoman: "nān hōṭṭalukku pōrēn.", katakana: "ナーン ホーッタルック ポーレーン。", ja: "ホテルへ行きます", tag: "動作が違う" }
        ],
        answer: 0,
        feedback: "இன்னிக்கு には現在形。時間語と動詞をセットで確認します。",
        hint: "時間語を先に見つけます。"
      }),
      D({
        id: "dr8-02",
        type: "場面選択",
        scene: "買い物",
        prompt: "「昨日、店で本を買いました」と伝えます。どれですか。",
        options: [
        { targetTamil: "நான் நேத்து கடைல புத்தகம் வாங்கினேன்.", structuredRoman: "nāṉ nēttu kaṭai-la puttakam vāṅkiṉ-ēṉ.", pronunciationRoman: "nān nēttu kaḍaila puttagam vānginēn.", katakana: "ナーン ネーットゥ カダイラ プッタガム ヴァーンギネーン。", ja: "昨日、店で本を買いました", tag: "正解" },
        { targetTamil: "நான் நேத்து கடைக்கு புத்தகம் வாங்கினேன்.", structuredRoman: "nāṉ nēttu kaṭai-kku puttakam vāṅkiṉ-ēṉ.", pronunciationRoman: "nān nēttu kaḍaikku puttagam vānginēn.", katakana: "ナーン ネーットゥ カダイック プッタガム ヴァーンギネーン。", ja: "昨日、店へ＋本を買いました", tag: "場所ではなく到達形" },
        { targetTamil: "நான் இன்னிக்கு கடைல புத்தகம் வாங்கறேன்.", structuredRoman: "nāṉ iṉṉikku kaṭai-la puttakam vāṅkaṟ-ēṉ.", pronunciationRoman: "nān innikku kaḍaila puttagam vāngarēn.", katakana: "ナーン インニック カダイラ プッタガム ヴァーンガレーン。", ja: "今日、店で本を買います", tag: "時間が違う" },
        { targetTamil: "கடைல புத்தகம் இருக்கு.", structuredRoman: "kaṭai-la puttakam irukku.", pronunciationRoman: "kaḍaila puttagam irukku.", katakana: "カダイラ プッタガム イルック。", ja: "店に本があります", tag: "存在文になっている" }
        ],
        answer: 0,
        feedback: "動作が起きた場所は -ல。買った先ではなく、買った場所です。",
        hint: "移動ではなく、そこで行った動作です。"
      }),
      D({
        id: "dr8-03",
        type: "語形選択",
        scene: "移動・オート",
        prompt: "「明日オートで行きます」。空欄はどれですか。 நான் நாளைக்கு ஆட்டோல ___",
        options: [
        { targetTamil: "போவேன்.", structuredRoman: "pōv-ēṉ.", pronunciationRoman: "pōvēn.", katakana: "ポーヴェーン。", ja: "行きます（未来）", tag: "正解" },
        { targetTamil: "போனேன்.", structuredRoman: "pōṉ-ēṉ.", pronunciationRoman: "pōnēn.", katakana: "ポーネーン。", ja: "行きました（過去）", tag: "時間語と食い違う" },
        { targetTamil: "போகல.", structuredRoman: "pōka-la.", pronunciationRoman: "pōgala.", katakana: "ポーガラ。", ja: "行きませんでした", tag: "否定" },
        { targetTamil: "போறோம்.", structuredRoman: "pōṟ-ōm.", pronunciationRoman: "pōrōm.", katakana: "ポーローム。", ja: "私たちは行きます", tag: "人が違う" }
        ],
        answer: 0,
        feedback: "நாளைக்கு ＋ 未来形。人は右端の -ஏன் で「私」です。",
        hint: "時間と人の両方を合わせます。"
      }),
      D({
        id: "dr8-04",
        type: "場面選択",
        scene: "人と話す",
        prompt: "「今日その方と話しました」。今日のことでも、済んだ動作はどう言いますか。",
        options: [
        { targetTamil: "நான் இன்னிக்கு அவரோட பேசினேன்.", structuredRoman: "nāṉ iṉṉikku avar-ōṭa pēciṉ-ēṉ.", pronunciationRoman: "nān innikku avarōḍa pēsinēn.", katakana: "ナーン インニック アヴァローダ ペーシネーン。", ja: "今日その方と話しました", tag: "正解" },
        { targetTamil: "நான் இன்னிக்கு அவரோட பேசுவேன்.", structuredRoman: "nāṉ iṉṉikku avar-ōṭa pēc-uv-ēṉ.", pronunciationRoman: "nān innikku avarōḍa pēsuvēn.", katakana: "ナーン インニック アヴァローダ ペースヴェーン。", ja: "今日その方と話すつもりです", tag: "まだ話していないことになる" },
        { targetTamil: "நான் நேத்து அவரோட பேசினேன்.", structuredRoman: "nāṉ nēttu avar-ōṭa pēciṉ-ēṉ.", pronunciationRoman: "nān nēttu avarōḍa pēsinēn.", katakana: "ナーン ネーットゥ アヴァローダ ペーシネーン。", ja: "昨日その方と話しました", tag: "日が違う" },
        { targetTamil: "அவர் இன்னிக்கு பேசினார்.", structuredRoman: "avar iṉṉikku pēciṉ-ār.", pronunciationRoman: "avar innikku pēsinār.", katakana: "アヴァル インニック ペーシナール。", ja: "その方は今日話しました", tag: "話し手が違う" }
        ],
        answer: 0,
        feedback: "இன்னிக்கு は「今日」であって「現在形」ではありません。動作が済んでいれば過去形です。",
        hint: "時間語だけで時制を決めません。"
      }),
      D({
        id: "dr8-05",
        type: "空欄補充",
        scene: "ホテル",
        prompt: "「私は今日ホテルへ行きます」。空欄はどれですか。 நான் ___ ஹோட்டலுக்கு போறேன்.",
        options: [
        { targetTamil: "இன்னிக்கு", structuredRoman: "iṉṉikku", pronunciationRoman: "innikku", katakana: "インニック", ja: "今日", tag: "正解" },
        { targetTamil: "நேத்து", structuredRoman: "nēttu", pronunciationRoman: "nēttu", katakana: "ネーットゥ", ja: "昨日", tag: "現在形と食い違う" },
        { targetTamil: "நாளைக்கு", structuredRoman: "nāḷai-kku", pronunciationRoman: "nāḷaikku", katakana: "ナーライック", ja: "明日", tag: "未来形が自然になる" },
        { targetTamil: "இப்போ", structuredRoman: "ippō", pronunciationRoman: "ippō", katakana: "イッポー", ja: "今", tag: "一日単位ではない" }
        ],
        answer: 0,
        feedback: "現在形 போறேன் と自然に並ぶ時間語は இன்னிக்கு です。",
        hint: "動詞の形から、合う時間語を逆算します。"
      })
    ]
  });

  attach(9, {
    phrases: [
      P({ id: "sp9-01", scene: "困ったとき", targetTamil: "எனக்கு வழி தெரியாது.", structuredRoman: "eṉ-akku vaḻi teriyātu.", pronunciationRoman: "enakku vaḻi teriyādu.", katakana: "エナック ヴァリ テリヤードゥ。", meaningJa: "道が分かりません。", literalJapanese: "私・与格＋道＋知らない", note: "知識がないときは தெரியாது。道に迷ったらこの一文です。" }),
      P({ id: "sp9-02", scene: "人と話す", targetTamil: "என்னால தமிழ் பேச முடியாது.", structuredRoman: "eṉṉ-āla tamiḻ pēca muṭiyātu.", pronunciationRoman: "ennāla tamiḻ pēsa muḍiyādu.", katakana: "エンナーラ タミル ペーサ ムディヤードゥ。", meaningJa: "私はタミル語を話せません。", literalJapanese: "私・によって＋タミル語＋話す＋できない", note: "能力の否定は முடியாது。主語は என்னால の形になります。" }),
      P({ id: "sp9-03", scene: "食事", targetTamil: "நான் இன்னிக்கு சாப்பிட மாட்டேன்.", structuredRoman: "nāṉ iṉṉikku cāppiṭa māṭṭ-ēṉ.", pronunciationRoman: "nān innikku sāppiḍa māṭṭēn.", katakana: "ナーン インニック サーッピダ マーッテーン。", meaningJa: "今日は食べません。", literalJapanese: "私＋今日＋食べる＋しない・私", note: "மாட்டேன் は「するつもりがない」という意志の否定です。" }),
      P({ id: "sp9-04", scene: "移動・オート", targetTamil: "நான் நேத்து கடற்கரைக்கு போகல.", structuredRoman: "nāṉ nēttu kaṭaṟkarai-kku pōka-la.", pronunciationRoman: "nān nēttu kaḍarkaraikku pōgala.", katakana: "ナーン ネーットゥ カダルカライック ポーガラ。", meaningJa: "私は昨日、海岸へ行きませんでした。", literalJapanese: "私＋昨日＋海岸・到達＋行かなかった", note: "起きなかった事実は -ல の形で示します。" }),
      P({ id: "sp9-05", scene: "買い物", targetTamil: "நான் இன்னிக்கு கடைக்கு போக மாட்டேன்.", structuredRoman: "nāṉ iṉṉikku kaṭai-kku pōka māṭṭ-ēṉ.", pronunciationRoman: "nān innikku kaḍaikku pōga māṭṭēn.", katakana: "ナーン インニック カダイック ポーガ マーッテーン。", meaningJa: "今日は店へ行きません。", literalJapanese: "私＋今日＋店・到達＋行く＋しない・私", note: "同じ「行かない」でも、意志なら மாட்டேன் です。" }),
      P({ id: "sp9-06", scene: "困ったとき", targetTamil: "எனக்கு இந்த விஷயம் புரியல.", structuredRoman: "eṉ-akku inta viṣayam puriyala.", pronunciationRoman: "enakku inda viṣayam puriyala.", katakana: "エナック インダ ヴィシャヤム プリヤラ。", meaningJa: "この件が分かりません。", literalJapanese: "私・与格＋この＋事柄＋分からない", note: "理解できないときは புரியல。தெரியாது とは別の「分からない」です。" })
    ],
    drills: [
      D({
        id: "dr9-01",
        type: "混同防止",
        scene: "困ったとき",
        prompt: "日本語の「分かりません」を二つに分けます。道順の知識がないときはどれですか。",
        options: [
        { targetTamil: "எனக்கு வழி தெரியாது.", structuredRoman: "eṉ-akku vaḻi teriyātu.", pronunciationRoman: "enakku vaḻi teriyādu.", katakana: "エナック ヴァリ テリヤードゥ。", ja: "道が分かりません（知識がない）", tag: "正解" },
        { targetTamil: "எனக்கு இந்த வழி புரியல.", structuredRoman: "eṉ-akku inta vaḻi puriyala.", pronunciationRoman: "enakku inda vaḻi puriyala.", katakana: "エナック インダ ヴァリ プリヤラ。", ja: "この道が分かりません（説明が飲み込めない）", tag: "理解の側" },
        { targetTamil: "என்னால நடக்க முடியாது.", structuredRoman: "eṉṉ-āla naṭakka muṭiyātu.", pronunciationRoman: "ennāla naḍakka muḍiyādu.", katakana: "エンナーラ ナダッカ ムディヤードゥ。", ja: "歩けません", tag: "能力の否定" },
        { targetTamil: "நான் போக மாட்டேன்.", structuredRoman: "nāṉ pōka māṭṭ-ēṉ.", pronunciationRoman: "nān pōga māṭṭēn.", katakana: "ナーン ポーガ マーッテーン。", ja: "行きません", tag: "意志の否定" }
        ],
        answer: 0,
        feedback: "தெரியாது は知識がない、புரியல は目の前の内容が飲み込めない、です。",
        hint: "そもそも知らないのか、聞いても飲み込めないのかを分けます。"
      }),
      D({
        id: "dr9-02",
        type: "混同防止",
        scene: "移動・オート",
        prompt: "「今日は来られません」と「今日は来ません」を分けます。事情があって不可能なのはどれですか。",
        options: [
        { targetTamil: "என்னால இன்னிக்கு வர முடியாது.", structuredRoman: "eṉṉ-āla iṉṉikku vara muṭiyātu.", pronunciationRoman: "ennāla innikku vara muḍiyādu.", katakana: "エンナーラ インニック ヴァラ ムディヤードゥ。", ja: "今日は来られません（不可能）", tag: "正解" },
        { targetTamil: "நான் இன்னிக்கு வர மாட்டேன்.", structuredRoman: "nāṉ iṉṉikku vara māṭṭ-ēṉ.", pronunciationRoman: "nān innikku vara māṭṭēn.", katakana: "ナーン インニック ヴァラ マーッテーン。", ja: "今日は来ません（意志）", tag: "意志の否定" },
        { targetTamil: "நான் நேத்து வரல.", structuredRoman: "nāṉ nēttu vara-la.", pronunciationRoman: "nān nēttu varala.", katakana: "ナーン ネーットゥ ヴァララ。", ja: "昨日来ませんでした", tag: "起きなかった事実" },
        { targetTamil: "எனக்கு தெரியாது.", structuredRoman: "eṉ-akku teriyātu.", pronunciationRoman: "enakku teriyādu.", katakana: "エナック テリヤードゥ。", ja: "分かりません", tag: "知識の否定" }
        ],
        answer: 0,
        feedback: "முடியாது は能力・状況としての不可能。主語は என்னால になります。",
        hint: "自分の意志の問題か、事情の問題かで選びます。"
      }),
      D({
        id: "dr9-03",
        type: "語形選択",
        scene: "食事",
        prompt: "「昨日はコーヒーを飲みませんでした」。起きなかった事実を示すのはどれですか。",
        options: [
        { targetTamil: "நான் நேத்து காபி குடிக்கல.", structuredRoman: "nāṉ nēttu kāpi kuṭikka-la.", pronunciationRoman: "nān nēttu kābi kuḍikkala.", katakana: "ナーン ネーットゥ カービ クディッカラ。", ja: "昨日はコーヒーを飲みませんでした", tag: "正解" },
        { targetTamil: "நான் காபி குடிக்க மாட்டேன்.", structuredRoman: "nāṉ kāpi kuṭikka māṭṭ-ēṉ.", pronunciationRoman: "nān kābi kuḍikka māṭṭēn.", katakana: "ナーン カービ クディッカ マーッテーン。", ja: "コーヒーは飲みません", tag: "意志の否定" },
        { targetTamil: "என்னால காபி குடிக்க முடியாது.", structuredRoman: "eṉṉ-āla kāpi kuṭikka muṭiyātu.", pronunciationRoman: "ennāla kābi kuḍikka muḍiyādu.", katakana: "エンナーラ カービ クディッカ ムディヤードゥ。", ja: "コーヒーは飲めません", tag: "能力の否定" },
        { targetTamil: "எனக்கு காபி பிடிக்கும்.", structuredRoman: "eṉ-akku kāpi piṭikkum.", pronunciationRoman: "enakku kābi piḍikkum.", katakana: "エナック カービ ピディックム。", ja: "コーヒーが好きです", tag: "否定になっていない" }
        ],
        answer: 0,
        feedback: "-ல は「その出来事が成立しなかった」。過去の事実を述べます。",
        hint: "昨日という時間語に合う否定を選びます。"
      }),
      D({
        id: "dr9-04",
        type: "場面選択",
        scene: "人と話す",
        prompt: "相手にタミル語で話しかけられました。話せないことを伝えるのはどれですか。",
        options: [
        { targetTamil: "என்னால தமிழ் பேச முடியாது.", structuredRoman: "eṉṉ-āla tamiḻ pēca muṭiyātu.", pronunciationRoman: "ennāla tamiḻ pēsa muḍiyādu.", katakana: "エンナーラ タミル ペーサ ムディヤードゥ。", ja: "タミル語を話せません", tag: "正解" },
        { targetTamil: "எனக்கு தமிழ் புரியும்.", structuredRoman: "eṉ-akku tamiḻ puriyum.", pronunciationRoman: "enakku tamiḻ puriyum.", katakana: "エナック タミル プリユム。", ja: "タミル語が分かります", tag: "意味が逆" },
        { targetTamil: "நான் தமிழ் பேச மாட்டேன்.", structuredRoman: "nāṉ tamiḻ pēca māṭṭ-ēṉ.", pronunciationRoman: "nān tamiḻ pēsa māṭṭēn.", katakana: "ナーン タミル ペーサ マーッテーン。", ja: "タミル語は話しません", tag: "話せるのに拒んでいる読み" },
        { targetTamil: "எனக்கு தமிழ் படம் பிடிக்கும்.", structuredRoman: "eṉ-akku tamiḻ paṭam piṭikkum.", pronunciationRoman: "enakku tamiḻ paḍam piḍikkum.", katakana: "エナック タミル パダム ピディックム。", ja: "タミル映画が好きです", tag: "場面に合わない" }
        ],
        answer: 0,
        feedback: "できないことは முடியாது。மாட்டேன் だと「できるのにしない」に聞こえます。",
        hint: "能力の問題であることを伝えます。"
      }),
      D({
        id: "dr9-05",
        type: "空欄補充",
        scene: "買い物",
        prompt: "「今日は店へ行きません」（自分でそう決めた）。空欄はどれですか。 நான் இன்னிக்கு கடைக்கு போக ___",
        options: [
        { targetTamil: "மாட்டேன்.", structuredRoman: "māṭṭ-ēṉ.", pronunciationRoman: "māṭṭēn.", katakana: "マーッテーン。", ja: "しません（意志）", tag: "正解" },
        { targetTamil: "முடியாது.", structuredRoman: "muṭiyātu.", pronunciationRoman: "muḍiyādu.", katakana: "ムディヤードゥ。", ja: "できません（不可能）", tag: "事情の否定になる" },
        { targetTamil: "இல்லை.", structuredRoman: "illai.", pronunciationRoman: "illai.", katakana: "イッライ。", ja: "ない（存在の否定）", tag: "動詞の否定にならない" },
        { targetTamil: "தெரியாது.", structuredRoman: "teriyātu.", pronunciationRoman: "teriyādu.", katakana: "テリヤードゥ。", ja: "知りません", tag: "知識の否定" }
        ],
        answer: 0,
        feedback: "自分で決めた「しない」は மாட்டேன் です。",
        hint: "行けないのではなく、行かないと決めています。"
      })
    ]
  });

  attach(10, {
    phrases: [
      P({ id: "sp10-01", scene: "食事", targetTamil: "நான் சாப்பிட ஹோட்டலுக்கு போறேன்.", structuredRoman: "nāṉ cāppiṭa hōṭṭal-ukku pōṟ-ēṉ.", pronunciationRoman: "nān sāppiḍa hōṭṭalukku pōrēn.", katakana: "ナーン サーッピダ ホーッタルック ポーレーン。", meaningJa: "私は食べにホテルへ行きます。", literalJapanese: "私＋食べる・不定＋ホテル・到達＋行く・私", note: "最初の動詞は時間も人も決めず、最後の動詞へ渡します。" }),
      P({ id: "sp10-02", scene: "買い物", targetTamil: "நான் டிக்கெட் வாங்க கடைக்கு போறேன்.", structuredRoman: "nāṉ ṭikkeṭ vāṅka kaṭai-kku pōṟ-ēṉ.", pronunciationRoman: "nān ṭikkeṭ vānga kaḍaikku pōrēn.", katakana: "ナーン ティッケトゥ ヴァーンガ カダイック ポーレーン。", meaningJa: "私は切符を買いに店へ行きます。", literalJapanese: "私＋切符＋買う・不定＋店・到達＋行く・私", note: "「〜しに行く」は〈不定詞 ＋ 行き先 ＋ போ-〉。" }),
      P({ id: "sp10-03", scene: "移動・オート", targetTamil: "நான் நண்பரை பாக்க ஆட்டோல போறேன்.", structuredRoman: "nāṉ naṇpar-ai pākka āṭṭō-la pōṟ-ēṉ.", pronunciationRoman: "nān naṇbare pākka āṭṭōla pōrēn.", katakana: "ナーン ナンバレ パーッカ アーットーラ ポーレーン。", meaningJa: "私は友達に会いにオートで行きます。", literalJapanese: "私＋友達・を＋会う・不定＋オート・手段＋行く・私", note: "பாக்க は「見る」も「会う」も担います。" }),
      P({ id: "sp10-04", scene: "人と話す", targetTamil: "நான் தமிழ் படிக்க வந்தேன்.", structuredRoman: "nāṉ tamiḻ paṭikka vant-ēṉ.", pronunciationRoman: "nān tamiḻ paḍikka vandēn.", katakana: "ナーン タミル パディッカ ヴァンデーン。", meaningJa: "私はタミル語を学びに来ました。", literalJapanese: "私＋タミル語＋学ぶ・不定＋来た・私", note: "自己紹介でそのまま使えます。" }),
      P({ id: "sp10-05", scene: "ホテル", targetTamil: "நான் ஓய்வு எடுக்க ரூமுக்கு போறேன்.", structuredRoman: "nāṉ ōyvu eṭukka rūm-ukku pōṟ-ēṉ.", pronunciationRoman: "nān ōyvu eḍukka rūmukku pōrēn.", katakana: "ナーン オーイヴ エドゥッカ ルームック ポーレーン。", meaningJa: "私は休むために部屋へ行きます。", literalJapanese: "私＋休み＋取る・不定＋部屋・到達＋行く・私", note: "ஓய்வு எடு- で「休みを取る」という組み合わせです。" }),
      P({ id: "sp10-06", scene: "困ったとき", targetTamil: "என்னால இன்னிக்கு வெளியே போக முடியாது.", structuredRoman: "eṉṉ-āla iṉṉikku veḷiyē pōka muṭiyātu.", pronunciationRoman: "ennāla innikku veḷiyē pōga muḍiyādu.", katakana: "エンナーラ インニック ヴェリイェー ポーガ ムディヤードゥ。", meaningJa: "今日は外へ出られません。", literalJapanese: "私・によって＋今日＋外へ＋行く・不定＋できない", note: "முடியாது の前も不定詞です。時間も人も付けません。" })
    ],
    drills: [
      D({
        id: "dr10-01",
        type: "場面選択",
        scene: "買い物",
        prompt: "「切符を買いに店へ行きます」と伝えます。どれですか。",
        options: [
        { targetTamil: "நான் டிக்கெட் வாங்க கடைக்கு போறேன்.", structuredRoman: "nāṉ ṭikkeṭ vāṅka kaṭai-kku pōṟ-ēṉ.", pronunciationRoman: "nān ṭikkeṭ vānga kaḍaikku pōrēn.", katakana: "ナーン ティッケトゥ ヴァーンガ カダイック ポーレーン。", ja: "切符を買いに店へ行きます", tag: "正解" },
        { targetTamil: "நான் டிக்கெட் வாங்கறேன்.", structuredRoman: "nāṉ ṭikkeṭ vāṅkaṟ-ēṉ.", pronunciationRoman: "nān ṭikkeṭ vāngarēn.", katakana: "ナーン ティッケトゥ ヴァーンガレーン。", ja: "切符を買います", tag: "移動の情報がない" },
        { targetTamil: "நான் கடைக்கு போறேன்.", structuredRoman: "nāṉ kaṭai-kku pōṟ-ēṉ.", pronunciationRoman: "nān kaḍaikku pōrēn.", katakana: "ナーン カダイック ポーレーン。", ja: "店へ行きます", tag: "目的の情報がない" },
        { targetTamil: "நான் டிக்கெட் வாங்கினேன்.", structuredRoman: "nāṉ ṭikkeṭ vāṅkiṉ-ēṉ.", pronunciationRoman: "nān ṭikkeṭ vānginēn.", katakana: "ナーン ティッケトゥ ヴァーンギネーン。", ja: "切符を買いました", tag: "もう済んだことになる" }
        ],
        answer: 0,
        feedback: "目的の動詞は不定詞のまま。時間と人は最後の போறேன் が担います。",
        hint: "目的と移動の両方が入っているものを選びます。"
      }),
      D({
        id: "dr10-02",
        type: "語形選択",
        scene: "食事",
        prompt: "「食べに行きます」。最初の動詞はどの形になりますか。",
        options: [
        { targetTamil: "நான் சாப்பிட போறேன்.", structuredRoman: "nāṉ cāppiṭa pōṟ-ēṉ.", pronunciationRoman: "nān sāppiḍa pōrēn.", katakana: "ナーン サーッピダ ポーレーン。", ja: "食べに行きます", tag: "正解" },
        { targetTamil: "நான் சாப்பிடுறேன் போறேன்.", structuredRoman: "nāṉ cāppiṭu-ṟ-ēṉ pōṟ-ēṉ.", pronunciationRoman: "nān sāppiḍurēn pōrēn.", katakana: "ナーン サーッピドゥレーン ポーレーン。", ja: "食べます＋行きます", tag: "有限動詞が二つ並んでいる" },
        { targetTamil: "நான் சாப்பிட்டு போறேன்.", structuredRoman: "nāṉ cāppiṭṭu pōṟ-ēṉ.", pronunciationRoman: "nān sāppiṭṭu pōrēn.", katakana: "ナーン サーッピットゥ ポーレーン。", ja: "食べてから行きます", tag: "副動詞＝順番の読み" },
        { targetTamil: "நான் சாப்பிட்டேன்.", structuredRoman: "nāṉ cāppiṭṭ-ēṉ.", pronunciationRoman: "nān sāppiṭṭēn.", katakana: "ナーン サーッピッテーン。", ja: "食べました", tag: "移動がない" }
        ],
        answer: 0,
        feedback: "不定詞 சாப்பிட は「これから食べる」という目的、சாப்பிட்டு は「食べ終えてから」です。",
        hint: "文を終えられるのは最後の動詞だけです。"
      }),
      D({
        id: "dr10-03",
        type: "場面選択",
        scene: "人と話す",
        prompt: "自己紹介で「タミル語を学びに来ました」と言います。どれですか。",
        options: [
        { targetTamil: "நான் தமிழ் படிக்க வந்தேன்.", structuredRoman: "nāṉ tamiḻ paṭikka vant-ēṉ.", pronunciationRoman: "nān tamiḻ paḍikka vandēn.", katakana: "ナーン タミル パディッカ ヴァンデーン。", ja: "タミル語を学びに来ました", tag: "正解" },
        { targetTamil: "நான் தமிழ் படிக்கறது பிடிக்கும்.", structuredRoman: "nāṉ tamiḻ paṭikkaṟa-tu piṭikkum.", pronunciationRoman: "nān tamiḻ paḍikkaradu piḍikkum.", katakana: "ナーン タミル パディッカラドゥ ピディックム。", ja: "タミル語を学ぶのが好きです", tag: "好みの話" },
        { targetTamil: "எனக்கு தமிழ் புரியும்.", structuredRoman: "eṉ-akku tamiḻ puriyum.", pronunciationRoman: "enakku tamiḻ puriyum.", katakana: "エナック タミル プリユム。", ja: "タミル語が分かります", tag: "理解の話" },
        { targetTamil: "என்னால தமிழ் படிக்க முடியாது.", structuredRoman: "eṉṉ-āla tamiḻ paṭikka muṭiyātu.", pronunciationRoman: "ennāla tamiḻ paḍikka muḍiyādu.", katakana: "エンナーラ タミル パディッカ ムディヤードゥ。", ja: "タミル語を読めません", tag: "意味が逆" }
        ],
        answer: 0,
        feedback: "来た目的は不定詞で示し、வந்தேன் が「来た・私」を担います。",
        hint: "来た理由を言っています。"
      }),
      D({
        id: "dr10-04",
        type: "場面選択",
        scene: "ホテル",
        prompt: "「休むために部屋へ行きます」と伝えます。どれですか。",
        options: [
        { targetTamil: "நான் ஓய்வு எடுக்க ரூமுக்கு போறேன்.", structuredRoman: "nāṉ ōyvu eṭukka rūm-ukku pōṟ-ēṉ.", pronunciationRoman: "nān ōyvu eḍukka rūmukku pōrēn.", katakana: "ナーン オーイヴ エドゥッカ ルームック ポーレーン。", ja: "休むために部屋へ行きます", tag: "正解" },
        { targetTamil: "நான் ரூம்ல ஓய்வு எடுத்தேன்.", structuredRoman: "nāṉ rūm-la ōyvu eṭutt-ēṉ.", pronunciationRoman: "nān rūmla ōyvu eḍuttēn.", katakana: "ナーン ルームラ オーイヴ エドゥッテーン。", ja: "部屋で休みました", tag: "もう済んだことになる" },
        { targetTamil: "நான் ரூமுக்கு போறேன்.", structuredRoman: "nāṉ rūm-ukku pōṟ-ēṉ.", pronunciationRoman: "nān rūmukku pōrēn.", katakana: "ナーン ルームック ポーレーン。", ja: "部屋へ行きます", tag: "目的がない" },
        { targetTamil: "எனக்கு ஒரு ரூம் வேணும்.", structuredRoman: "eṉ-akku oru rūm vēṇum.", pronunciationRoman: "enakku oru rūm vēṇum.", katakana: "エナック オル ルーム ヴェーヌム。", ja: "部屋が一つ欲しいです", tag: "要求の話" }
        ],
        answer: 0,
        feedback: "எடுக்க が不定詞。行き先 ரூமுக்கு と動詞 போறேன் が後ろに続きます。",
        hint: "目的・行き先・動詞の三つが揃っているものを選びます。"
      }),
      D({
        id: "dr10-05",
        type: "空欄補充",
        scene: "困ったとき",
        prompt: "「今日は外へ出られません」。空欄はどれですか。 என்னால இன்னிக்கு வெளியே ___ முடியாது.",
        options: [
        { targetTamil: "போக", structuredRoman: "pōka", pronunciationRoman: "pōga", katakana: "ポーガ", ja: "行く（不定詞）", tag: "正解" },
        { targetTamil: "போறேன்", structuredRoman: "pōṟ-ēṉ", pronunciationRoman: "pōrēn", katakana: "ポーレーン", ja: "行きます（現在・私）", tag: "有限動詞が入っている" },
        { targetTamil: "போனேன்", structuredRoman: "pōṉ-ēṉ", pronunciationRoman: "pōnēn", katakana: "ポーネーン", ja: "行きました（過去・私）", tag: "有限動詞が入っている" },
        { targetTamil: "போய்", structuredRoman: "pōy", pronunciationRoman: "pōy", katakana: "ポーイ", ja: "行って（副動詞）", tag: "順番の読みになる" }
        ],
        answer: 0,
        feedback: "முடியும் / முடியாது の前は必ず不定詞です。人称語尾を付けません。",
        hint: "後ろの முடியாது がすでに文を終えています。"
      })
    ]
  });

  attach(11, {
    phrases: [
      P({ id: "sp11-01", scene: "食事", targetTamil: "ஹோட்டலுக்கு போய் காபி குடிச்சேன்.", structuredRoman: "hōṭṭal-ukku pōy kāpi kuṭicc-ēṉ.", pronunciationRoman: "hōṭṭalukku pōy kābi kuḍiccēn.", katakana: "ホーッタルック ポーイ カービ クディッセーン。", meaningJa: "ホテルへ行ってコーヒーを飲みました。", literalJapanese: "ホテル・到達＋行って＋コーヒー＋飲んだ・私", note: "前の動作は போய் のまま。時間と人は最後の動詞だけが示します。" }),
      P({ id: "sp11-02", scene: "移動・オート", targetTamil: "பஸ்ல ஏறி சென்னைக்கு போனேன்.", structuredRoman: "pas-la ēṟi ceṉṉai-kku pōṉ-ēṉ.", pronunciationRoman: "basla ēri sennaikku pōnēn.", katakana: "バスラ エーリ センナイック ポーネーン。", meaningJa: "バスに乗ってチェンナイへ行きました。", literalJapanese: "バス・手段＋乗って＋チェンナイ・到達＋行った・私", note: "乗り物に「乗る」は ஏறு-。副動詞は ஏறி です。" }),
      P({ id: "sp11-03", scene: "ホテル", targetTamil: "ரூமுக்கு வந்து ஓய்வு எடுத்தேன்.", structuredRoman: "rūm-ukku vantu ōyvu eṭutt-ēṉ.", pronunciationRoman: "rūmukku vandu ōyvu eḍuttēn.", katakana: "ルームック ヴァンドゥ オーイヴ エドゥッテーン。", meaningJa: "部屋へ来て休みました。", literalJapanese: "部屋・到達＋来て＋休み＋取った・私", note: "動作の順番どおりに左から並べます。" }),
      P({ id: "sp11-04", scene: "空港・駅", targetTamil: "டிக்கெட் வாங்கி பஸ்ல போனேன்.", structuredRoman: "ṭikkeṭ vāṅki pas-la pōṉ-ēṉ.", pronunciationRoman: "ṭikkeṭ vāngi basla pōnēn.", katakana: "ティッケトゥ ヴァーンギ バスラ ポーネーン。", meaningJa: "切符を買ってバスで行きました。", literalJapanese: "切符＋買って＋バス・手段＋行った・私", note: "வாங்கி は「買って」。次の動作へつなぐ形です。" }),
      P({ id: "sp11-05", scene: "人と話す", targetTamil: "நண்பரை பாத்து பேசினேன்.", structuredRoman: "naṇpar-ai pāttu pēciṉ-ēṉ.", pronunciationRoman: "naṇbare pāttu pēsinēn.", katakana: "ナンバレ パーットゥ ペーシネーン。", meaningJa: "友達に会って話しました。", literalJapanese: "友達・を＋会って＋話した・私", note: "பாத்து は「見て・会って」。順番を示します。" }),
      P({ id: "sp11-06", scene: "買い物", targetTamil: "கடைல தண்ணி வாங்கி ஹோட்டலுக்கு வந்தேன்.", structuredRoman: "kaṭai-la taṇṇi vāṅki hōṭṭal-ukku vant-ēṉ.", pronunciationRoman: "kaḍaila taṇṇi vāngi hōṭṭalukku vandēn.", katakana: "カダイラ タンニ ヴァーンギ ホーッタルック ヴァンデーン。", meaningJa: "店で水を買ってホテルへ戻りました。", literalJapanese: "店・場所＋水＋買って＋ホテル・到達＋来た・私", note: "動作が三つ以上でも、文を終えるのは最後の一つだけです。" })
    ],
    drills: [
      D({
        id: "dr11-01",
        type: "場面選択",
        scene: "移動・オート",
        prompt: "「バスに乗って座りました」という順番を正しく示しているのはどれですか。",
        options: [
        { targetTamil: "பஸ்ல ஏறி உட்கார்ந்தேன்.", structuredRoman: "pas-la ēṟi uṭkārnt-ēṉ.", pronunciationRoman: "basla ēri ukkāndēn.", katakana: "バスラ エーリ ウッカーンデーン。", ja: "バスに乗って座りました", tag: "正解" },
        { targetTamil: "பஸ்ல ஏறினேன்.", structuredRoman: "pas-la ēṟiṉ-ēṉ.", pronunciationRoman: "basla ērinēn.", katakana: "バスラ エーリネーン。", ja: "バスに乗りました", tag: "二つ目の動作がない" },
        { targetTamil: "பஸ்ல ஏற உட்கார்ந்தேன்.", structuredRoman: "pas-la ēṟa uṭkārnt-ēṉ.", pronunciationRoman: "basla ēra ukkāndēn.", katakana: "バスラ エーラ ウッカーンデーン。", ja: "バスに乗るために座りました", tag: "不定詞＝目的の読み" },
        { targetTamil: "பஸ்ல போனேன்.", structuredRoman: "pas-la pōṉ-ēṉ.", pronunciationRoman: "basla pōnēn.", katakana: "バスラ ポーネーン。", ja: "バスで行きました", tag: "動作が違う" }
        ],
        answer: 0,
        feedback: "副動詞 ஏறி は「〜して、それから」。不定詞 ஏற なら目的の読みになります。",
        hint: "先に起きた動作をつなぐ形を選びます。"
      }),
      D({
        id: "dr11-02",
        type: "混同防止",
        scene: "食事",
        prompt: "「食べてから行きました」と「食べに行きました」を分けます。順番を示すのはどれですか。",
        options: [
        { targetTamil: "சாப்பிட்டு வீட்டுக்கு போனேன்.", structuredRoman: "cāppiṭṭu vīṭṭ-ukku pōṉ-ēṉ.", pronunciationRoman: "sāppiṭṭu vīṭṭukku pōnēn.", katakana: "サーッピットゥ ヴィーットゥック ポーネーン。", ja: "食べてから家へ行きました", tag: "正解" },
        { targetTamil: "நான் சாப்பிட போறேன்.", structuredRoman: "nāṉ cāppiṭa pōṟ-ēṉ.", pronunciationRoman: "nān sāppiḍa pōrēn.", katakana: "ナーン サーッピダ ポーレーン。", ja: "食べに行きます", tag: "不定詞＝目的" },
        { targetTamil: "நான் சாப்பிட்டுட்டேன்.", structuredRoman: "nāṉ cāppiṭṭuṭṭ-ēṉ.", pronunciationRoman: "nān sāppiṭṭuṭṭēn.", katakana: "ナーン サーッピットゥッテーン。", ja: "もう食べました", tag: "完了の話" },
        { targetTamil: "நான் சாப்பிட்டுக்கிட்டு இருக்கேன்.", structuredRoman: "nāṉ cāppiṭṭu-kkiṭṭu irukk-ēṉ.", pronunciationRoman: "nān sāppiṭṭukkiṭṭu irukkēn.", katakana: "ナーン サーッピットゥッキットゥ イルッケーン。", ja: "食べています", tag: "進行の話" }
        ],
        answer: 0,
        feedback: "-டு / -இ / -து で終わる副動詞は順番、-அ で終わる不定詞は目的です。",
        hint: "動作が二つとも実際に起きたかどうかを見ます。"
      }),
      D({
        id: "dr11-03",
        type: "場面選択",
        scene: "買い物",
        prompt: "「店で水を買ってホテルへ戻りました」と伝えます。どれですか。",
        options: [
        { targetTamil: "கடைல தண்ணி வாங்கி ஹோட்டலுக்கு வந்தேன்.", structuredRoman: "kaṭai-la taṇṇi vāṅki hōṭṭal-ukku vant-ēṉ.", pronunciationRoman: "kaḍaila taṇṇi vāngi hōṭṭalukku vandēn.", katakana: "カダイラ タンニ ヴァーンギ ホーッタルック ヴァンデーン。", ja: "店で水を買ってホテルへ戻りました", tag: "正解" },
        { targetTamil: "கடைல தண்ணி வாங்கினேன்.", structuredRoman: "kaṭai-la taṇṇi vāṅkiṉ-ēṉ.", pronunciationRoman: "kaḍaila taṇṇi vānginēn.", katakana: "カダイラ タンニ ヴァーンギネーン。", ja: "店で水を買いました", tag: "戻った動作がない" },
        { targetTamil: "கடைக்கு போய் தண்ணி வாங்கினேன்.", structuredRoman: "kaṭai-kku pōy taṇṇi vāṅkiṉ-ēṉ.", pronunciationRoman: "kaḍaikku pōy taṇṇi vānginēn.", katakana: "カダイック ポーイ タンニ ヴァーンギネーン。", ja: "店へ行って水を買いました", tag: "順番が違う" },
        { targetTamil: "ஹோட்டலுக்கு போய் தண்ணி வாங்கினேன்.", structuredRoman: "hōṭṭal-ukku pōy taṇṇi vāṅkiṉ-ēṉ.", pronunciationRoman: "hōṭṭalukku pōy taṇṇi vānginēn.", katakana: "ホーッタルック ポーイ タンニ ヴァーンギネーン。", ja: "ホテルへ行って水を買いました", tag: "場所が入れ替わっている" }
        ],
        answer: 0,
        feedback: "副動詞 வாங்கி が先の動作、வந்தேன் が文を終える動作です。",
        hint: "最後に起きたことが、文の最後の動詞になります。"
      }),
      D({
        id: "dr11-04",
        type: "語形選択",
        scene: "人と話す",
        prompt: "「友達に会って話しました」。空欄はどれですか。 நண்பரை ___ பேசினேன்.",
        options: [
        { targetTamil: "பாத்து", structuredRoman: "pāttu", pronunciationRoman: "pāttu", katakana: "パーットゥ", ja: "会って（副動詞）", tag: "正解" },
        { targetTamil: "பாக்க", structuredRoman: "pākka", pronunciationRoman: "pākka", katakana: "パーッカ", ja: "会うために（不定詞）", tag: "目的の読みになる" },
        { targetTamil: "பாத்தேன்", structuredRoman: "pātt-ēṉ", pronunciationRoman: "pāttēn", katakana: "パーッテーン", ja: "会いました（有限動詞）", tag: "文を終える形が二つ" },
        { targetTamil: "பாக்கற", structuredRoman: "pākkaṟa", pronunciationRoman: "pākkara", katakana: "パーッカラ", ja: "会う（連体形）", tag: "後ろに名詞が要る" }
        ],
        answer: 0,
        feedback: "会ってから話した、という順番なので副動詞 பாத்து です。",
        hint: "二つの動作の前後関係を示す形です。"
      }),
      D({
        id: "dr11-05",
        type: "空欄補充",
        scene: "ホテル",
        prompt: "「部屋へ来て休みました」。空欄はどれですか。 ரூமுக்கு ___ ஓய்வு எடுத்தேன்.",
        options: [
        { targetTamil: "வந்து", structuredRoman: "vantu", pronunciationRoman: "vandu", katakana: "ヴァンドゥ", ja: "来て", tag: "正解" },
        { targetTamil: "வர", structuredRoman: "vara", pronunciationRoman: "vara", katakana: "ヴァラ", ja: "来るために", tag: "目的の読みになる" },
        { targetTamil: "வந்தேன்", structuredRoman: "vant-ēṉ", pronunciationRoman: "vandēn", katakana: "ヴァンデーン", ja: "来ました", tag: "文を終える形が二つ" },
        { targetTamil: "வர்ற", structuredRoman: "varṟa", pronunciationRoman: "varra", katakana: "ヴァッラ", ja: "来る（連体形）", tag: "後ろに名詞が要る" }
        ],
        answer: 0,
        feedback: "வந்து は「来て、それから」。時間と人は எடுத்தேன் が示します。",
        hint: "先に起きた動作の形を選びます。"
      })
    ]
  });

  attach(12, {
    phrases: [
      P({ id: "sp12-01", scene: "食事", targetTamil: "நான் இப்போ சாப்பிட்டுக்கிட்டு இருக்கேன்.", structuredRoman: "nāṉ ippō cāppiṭṭu-kkiṭṭu irukk-ēṉ.", pronunciationRoman: "nān ippō sāppiṭṭukkiṭṭu irukkēn.", katakana: "ナーン イッポー サーッピットゥッキットゥ イルッケーン。", meaningJa: "私は今、食べているところです。", literalJapanese: "私＋今＋食べ・進行＋いる・私", note: "電話で「今食事中です」と伝えるときの形です。" }),
      P({ id: "sp12-02", scene: "空港・駅", targetTamil: "நான் ரெண்டு டிக்கெட் வாங்கி வெச்சேன்.", structuredRoman: "nāṉ reṇṭu ṭikkeṭ vāṅki vecc-ēṉ.", pronunciationRoman: "nān reṇḍu ṭikkeṭ vāngi veccēn.", katakana: "ナーン レンドゥ ティッケトゥ ヴァーンギ ヴェッチェーン。", meaningJa: "私は切符を2枚買っておきました。", literalJapanese: "私＋二＋切符＋買って＋置いた・私", note: "வெச்சேன் は「後で使えるように準備してある」ことを示します。" }),
      P({ id: "sp12-03", scene: "ホテル", targetTamil: "நான் ரூம்ல பை வெச்சேன்.", structuredRoman: "nāṉ rūm-la pai vecc-ēṉ.", pronunciationRoman: "nān rūmla pai veccēn.", katakana: "ナーン ルームラ パイ ヴェッチェーン。", meaningJa: "私は部屋にかばんを置きました。", literalJapanese: "私＋部屋・場所＋かばん＋置いた・私", note: "வை- は「置く」。荷物の場所を伝えられます。" }),
      P({ id: "sp12-04", scene: "買い物", targetTamil: "நான் கடைல தண்ணி வாங்கி வெச்சேன்.", structuredRoman: "nāṉ kaṭai-la taṇṇi vāṅki vecc-ēṉ.", pronunciationRoman: "nān kaḍaila taṇṇi vāngi veccēn.", katakana: "ナーン カダイラ タンニ ヴァーンギ ヴェッチェーン。", meaningJa: "私は店で水を買っておきました。", literalJapanese: "私＋店・場所＋水＋買って＋置いた・私", note: "「もう買ってある」と伝えると、相手が重ねて買いません。" }),
      P({ id: "sp12-05", scene: "人と話す", targetTamil: "நான் அவருக்காக டிக்கெட் வாங்கி வெச்சேன்.", structuredRoman: "nāṉ avar-ukkāka ṭikkeṭ vāṅki vecc-ēṉ.", pronunciationRoman: "nān avarukkāga ṭikkeṭ vāngi veccēn.", katakana: "ナーン アヴァルッカーガ ティッケトゥ ヴァーンギ ヴェッチェーン。", meaningJa: "私はその方のために切符を買っておきました。", literalJapanese: "私＋その方・のため＋切符＋買って＋置いた・私", note: "誰のための準備かは -உக்காக で示します。" }),
      P({ id: "sp12-06", scene: "困ったとき", targetTamil: "நான் இன்னிக்கு வேலை செஞ்சுட்டேன்.", structuredRoman: "nāṉ iṉṉikku vēlai ceñcuṭṭ-ēṉ.", pronunciationRoman: "nān innikku vēlai señjuṭṭēn.", katakana: "ナーン インニック ヴェーライ センジュッテーン。", meaningJa: "私は今日の仕事を終えました。", literalJapanese: "私＋今日＋仕事＋してしまった・私", note: "-ட்டேன் は「もう済んだ」。準備の வெச்சேன் とは別です。" })
    ],
    drills: [
      D({
        id: "dr12-01",
        type: "混同防止",
        scene: "食事",
        prompt: "「食べている途中」「もう食べた」「食べる準備がしてある」を分けます。途中なのはどれですか。",
        options: [
        { targetTamil: "நான் சாப்பிட்டுக்கிட்டு இருக்கேன்.", structuredRoman: "nāṉ cāppiṭṭu-kkiṭṭu irukk-ēṉ.", pronunciationRoman: "nān sāppiṭṭukkiṭṭu irukkēn.", katakana: "ナーン サーッピットゥッキットゥ イルッケーン。", ja: "食べているところです", tag: "正解" },
        { targetTamil: "நான் சாப்பிட்டுட்டேன்.", structuredRoman: "nāṉ cāppiṭṭuṭṭ-ēṉ.", pronunciationRoman: "nān sāppiṭṭuṭṭēn.", katakana: "ナーン サーッピットゥッテーン。", ja: "もう食べました", tag: "完了" },
        { targetTamil: "நான் சாப்பிட்டேன்.", structuredRoman: "nāṉ cāppiṭṭ-ēṉ.", pronunciationRoman: "nān sāppiṭṭēn.", katakana: "ナーン サーッピッテーン。", ja: "食べました", tag: "単なる過去" },
        { targetTamil: "நான் சாப்பிட போறேன்.", structuredRoman: "nāṉ cāppiṭa pōṟ-ēṉ.", pronunciationRoman: "nān sāppiḍa pōrēn.", katakana: "ナーン サーッピダ ポーレーン。", ja: "これから食べます", tag: "これからの動作" }
        ],
        answer: 0,
        feedback: "-க்கிட்டு இரு- が進行、-ட்டு が完了。長い動詞は右端から読みます。",
        hint: "今まさに続いている動作を選びます。"
      }),
      D({
        id: "dr12-02",
        type: "場面選択",
        scene: "空港・駅",
        prompt: "同行者に「切符はもう買ってあるよ」と伝えます。どれですか。",
        options: [
        { targetTamil: "நான் டிக்கெட் வாங்கி வெச்சேன்.", structuredRoman: "nāṉ ṭikkeṭ vāṅki vecc-ēṉ.", pronunciationRoman: "nān ṭikkeṭ vāngi veccēn.", katakana: "ナーン ティッケトゥ ヴァーンギ ヴェッチェーン。", ja: "切符を買っておきました", tag: "正解" },
        { targetTamil: "நான் டிக்கெட் வாங்கினேன்.", structuredRoman: "nāṉ ṭikkeṭ vāṅkiṉ-ēṉ.", pronunciationRoman: "nān ṭikkeṭ vānginēn.", katakana: "ナーン ティッケトゥ ヴァーンギネーン。", ja: "切符を買いました", tag: "準備の含みがない" },
        { targetTamil: "நான் டிக்கெட் வாங்கப் போறேன்.", structuredRoman: "nāṉ ṭikkeṭ vāṅka-p pōṟ-ēṉ.", pronunciationRoman: "nān ṭikkeṭ vāngap pōrēn.", katakana: "ナーン ティッケトゥ ヴァーンガッ ポーレーン。", ja: "切符を買うつもりです", tag: "まだ買っていない" },
        { targetTamil: "எனக்கு டிக்கெட் வேணும்.", structuredRoman: "eṉ-akku ṭikkeṭ vēṇum.", pronunciationRoman: "enakku ṭikkeṭ vēṇum.", katakana: "エナック ティッケトゥ ヴェーヌム。", ja: "切符が欲しいです", tag: "要求の話" }
        ],
        answer: 0,
        feedback: "வாங்கி வெச்சேன் は「買って、その結果が今も使える」ことを示します。",
        hint: "買った結果が今も残っていることを伝えます。"
      }),
      D({
        id: "dr12-03",
        type: "場面選択",
        scene: "ホテル",
        prompt: "「かばんを部屋に置きました」と伝えます。どれですか。",
        options: [
        { targetTamil: "நான் ரூம்ல பை வெச்சேன்.", structuredRoman: "nāṉ rūm-la pai vecc-ēṉ.", pronunciationRoman: "nān rūmla pai veccēn.", katakana: "ナーン ルームラ パイ ヴェッチェーン。", ja: "部屋にかばんを置きました", tag: "正解" },
        { targetTamil: "ரூம்ல பை இருக்கு.", structuredRoman: "rūm-la pai irukku.", pronunciationRoman: "rūmla pai irukku.", katakana: "ルームラ パイ イルック。", ja: "部屋にかばんがあります", tag: "誰が置いたか出ない" },
        { targetTamil: "நான் ரூமுக்கு பை வெச்சேன்.", structuredRoman: "nāṉ rūm-ukku pai vecc-ēṉ.", pronunciationRoman: "nān rūmukku pai veccēn.", katakana: "ナーン ルームック パイ ヴェッチェーン。", ja: "部屋へ＋かばんを置きました", tag: "場所ではなく到達形" },
        { targetTamil: "என்னோட பை எங்கே?", structuredRoman: "eṉṉ-ōṭa pai eṅkē?", pronunciationRoman: "ennōḍa pai engē?", katakana: "エンノーダ パイ エンゲー？", ja: "私のかばんはどこですか", tag: "質問になっている" }
        ],
        answer: 0,
        feedback: "置いた場所は -ல。வெச்சேன் が「私が置いた」を担います。",
        hint: "動作をした人まで入っているものを選びます。"
      }),
      D({
        id: "dr12-04",
        type: "混同防止",
        scene: "困ったとき",
        prompt: "「もう終わらせた」と「後のために用意した」を分けます。終わらせたのはどれですか。",
        options: [
        { targetTamil: "நான் வேலை செஞ்சுட்டேன்.", structuredRoman: "nāṉ vēlai ceñcuṭṭ-ēṉ.", pronunciationRoman: "nān vēlai señjuṭṭēn.", katakana: "ナーン ヴェーライ センジュッテーン。", ja: "仕事を終えました", tag: "正解" },
        { targetTamil: "நான் டிக்கெட் வாங்கி வெச்சேன்.", structuredRoman: "nāṉ ṭikkeṭ vāṅki vecc-ēṉ.", pronunciationRoman: "nān ṭikkeṭ vāngi veccēn.", katakana: "ナーン ティッケトゥ ヴァーンギ ヴェッチェーン。", ja: "切符を買っておきました", tag: "準備の結果" },
        { targetTamil: "நான் வேலை செஞ்சேன்.", structuredRoman: "nāṉ vēlai ceñc-ēṉ.", pronunciationRoman: "nān vēlai señjēn.", katakana: "ナーン ヴェーライ センジェーン。", ja: "仕事をしました", tag: "単なる過去" },
        { targetTamil: "நான் வேலை செய்ய போறேன்.", structuredRoman: "nāṉ vēlai ceyya pōṟ-ēṉ.", pronunciationRoman: "nān vēlai seyya pōrēn.", katakana: "ナーン ヴェーライ セイヤ ポーレーン。", ja: "仕事をしに行きます", tag: "これからの動作" }
        ],
        answer: 0,
        feedback: "-ட்டேன் は完了、வெச்சேன் は「後で使えるように残してある」です。",
        hint: "その動作自体が片づいたかどうかを見ます。"
      }),
      D({
        id: "dr12-05",
        type: "空欄補充",
        scene: "人と話す",
        prompt: "「その方のために切符を買っておきました」。空欄はどれですか。 நான் ___ டிக்கெட் வாங்கி வெச்சேன்.",
        options: [
        { targetTamil: "அவருக்காக", structuredRoman: "avar-ukkāka", pronunciationRoman: "avarukkāga", katakana: "アヴァルッカーガ", ja: "その方のために", tag: "正解" },
        { targetTamil: "அவருக்கு", structuredRoman: "avar-ukku", pronunciationRoman: "avarukku", katakana: "アヴァルック", ja: "その方に", tag: "受け手であって目的ではない" },
        { targetTamil: "அவரோட", structuredRoman: "avar-ōṭa", pronunciationRoman: "avarōḍa", katakana: "アヴァローダ", ja: "その方と／その方の", tag: "共同か所有の読み" },
        { targetTamil: "அவர்", structuredRoman: "avar", pronunciationRoman: "avar", katakana: "アヴァル", ja: "その方（主格）", tag: "格語尾なし" }
        ],
        answer: 0,
        feedback: "誰のための準備かは -உக்காக で示します。",
        hint: "受け取る人ではなく、目的としての相手です。"
      })
    ]
  });

  attach(13, {
    phrases: [
      P({ id: "sp13-01", scene: "空港・駅", targetTamil: "எனக்கு ரெண்டு டிக்கெட் வேணும்.", structuredRoman: "eṉ-akku reṇṭu ṭikkeṭ vēṇum.", pronunciationRoman: "enakku reṇḍu ṭikkeṭ vēṇum.", katakana: "エナック レンドゥ ティッケトゥ ヴェーヌム。", meaningJa: "切符が2枚欲しいです。", literalJapanese: "私・与格＋二＋切符＋要る", note: "窓口で数と品物を並べるだけで通じます。" }),
      P({ id: "sp13-02", scene: "ホテル", targetTamil: "எனக்கு ஒரு நல்ல ரூம் வேணும்.", structuredRoman: "eṉ-akku oru nalla rūm vēṇum.", pronunciationRoman: "enakku oru nalla rūm vēṇum.", katakana: "エナック オル ナッラ ルーム ヴェーヌム。", meaningJa: "良い部屋を一つお願いします。", literalJapanese: "私・与格＋一つ＋良い＋部屋＋要る", note: "நல்ல を足すと希望の条件を伝えられます。" }),
      P({ id: "sp13-03", scene: "移動・オート", targetTamil: "எனக்கு இன்னிக்கு கடற்கரைக்கு போகணும்.", structuredRoman: "eṉ-akku iṉṉikku kaṭaṟkarai-kku pōka-ṇum.", pronunciationRoman: "enakku innikku kaḍarkaraikku pōgaṇum.", katakana: "エナック インニック カダルカライック ポーガヌム。", meaningJa: "今日は海岸へ行く必要があります。", literalJapanese: "私・与格＋今日＋海岸・到達＋行く・必要", note: "-ணும் は必要にも強い希望にも使えます。" }),
      P({ id: "sp13-04", scene: "困ったとき", targetTamil: "என்னால சீக்கிரம் வர முடியாது.", structuredRoman: "eṉṉ-āla cīkkiram vara muṭiyātu.", pronunciationRoman: "ennāla sīkkiram vara muḍiyādu.", katakana: "エンナーラ シーッキラム ヴァラ ムディヤードゥ。", meaningJa: "早くは来られません。", literalJapanese: "私・によって＋早く＋来る＋できない", note: "遅れそうなときにそのまま使えます。" }),
      P({ id: "sp13-05", scene: "人と話す", targetTamil: "எனக்கு தமிழ் பேச ஆசை இருக்கு.", structuredRoman: "eṉ-akku tamiḻ pēca ācai irukku.", pronunciationRoman: "enakku tamiḻ pēsa āsai irukku.", katakana: "エナック タミル ペーサ アーサイ イルック。", meaningJa: "タミル語を話したいです。", literalJapanese: "私・与格＋タミル語＋話す＋願い＋ある", note: "ஆசை இருக்கு は「したい」という気持ちを表します。" }),
      P({ id: "sp13-06", scene: "買い物", targetTamil: "நான் நாளைக்கு டிக்கெட் வாங்கப் போறேன்.", structuredRoman: "nāṉ nāḷai-kku ṭikkeṭ vāṅka-p pōṟ-ēṉ.", pronunciationRoman: "nān nāḷaikku ṭikkeṭ vāngap pōrēn.", katakana: "ナーン ナーライック ティッケトゥ ヴァーンガッ ポーレーン。", meaningJa: "明日、切符を買うつもりです。", literalJapanese: "私＋明日＋切符＋買う＋行く・私", note: "〈不定詞 ＋ போறேன்〉は具体的な計画を示します。" })
    ],
    drills: [
      D({
        id: "dr13-01",
        type: "混同防止",
        scene: "ホテル",
        prompt: "「部屋が欲しい」と「部屋を見たい」を分けます。物そのものを求めるのはどれですか。",
        options: [
        { targetTamil: "எனக்கு ஒரு ரூம் வேணும்.", structuredRoman: "eṉ-akku oru rūm vēṇum.", pronunciationRoman: "enakku oru rūm vēṇum.", katakana: "エナック オル ルーム ヴェーヌム。", ja: "部屋を一つお願いします", tag: "正解" },
        { targetTamil: "எனக்கு ரூம் பாக்க ஆசை இருக்கு.", structuredRoman: "eṉ-akku rūm pākka ācai irukku.", pronunciationRoman: "enakku rūm pākka āsai irukku.", katakana: "エナック ルーム パーッカ アーサイ イルック。", ja: "部屋を見たいです", tag: "願望の表現" },
        { targetTamil: "எனக்கு ரூம் பிடிக்கும்.", structuredRoman: "eṉ-akku rūm piṭikkum.", pronunciationRoman: "enakku rūm piḍikkum.", katakana: "エナック ルーム ピディックム。", ja: "部屋が好きです", tag: "好みの表現" },
        { targetTamil: "என்கிட்ட ரூம் இருக்கு.", structuredRoman: "eṉ-kiṭṭa rūm irukku.", pronunciationRoman: "engiṭṭa rūm irukku.", katakana: "エンギッタ ルーム イルック。", ja: "部屋を持っています", tag: "所有の表現" }
        ],
        answer: 0,
        feedback: "வேணும் は名詞を直接求めます。動作をしたいときは〈不定詞 ＋ ஆசை இருக்கு〉です。",
        hint: "求めているのが物か動作かを見ます。"
      }),
      D({
        id: "dr13-02",
        type: "場面選択",
        scene: "困ったとき",
        prompt: "遅れそうなことを伝えます。「早くは来られません」はどれですか。",
        options: [
        { targetTamil: "என்னால சீக்கிரம் வர முடியாது.", structuredRoman: "eṉṉ-āla cīkkiram vara muṭiyātu.", pronunciationRoman: "ennāla sīkkiram vara muḍiyādu.", katakana: "エンナーラ シーッキラム ヴァラ ムディヤードゥ。", ja: "早くは来られません", tag: "正解" },
        { targetTamil: "நான் சீக்கிரம் வர மாட்டேன்.", structuredRoman: "nāṉ cīkkiram vara māṭṭ-ēṉ.", pronunciationRoman: "nān sīkkiram vara māṭṭēn.", katakana: "ナーン シーッキラム ヴァラ マーッテーン。", ja: "早くは来ません（意志）", tag: "できるのに来ない読み" },
        { targetTamil: "எனக்கு சீக்கிரம் வரணும்.", structuredRoman: "eṉ-akku cīkkiram vara-ṇum.", pronunciationRoman: "enakku sīkkiram varaṇum.", katakana: "エナック シーッキラム ヴァラヌム。", ja: "早く来る必要があります", tag: "意味が逆" },
        { targetTamil: "நான் சீக்கிரம் வருவேன்.", structuredRoman: "nāṉ cīkkiram varuv-ēṉ.", pronunciationRoman: "nān sīkkiram varuvēn.", katakana: "ナーン シーッキラム ヴァルヴェーン。", ja: "早く来ます", tag: "意味が逆" }
        ],
        answer: 0,
        feedback: "事情としての不可能は முடியாது。主語は என்னால です。",
        hint: "自分の意志ではなく事情の問題です。"
      }),
      D({
        id: "dr13-03",
        type: "場面選択",
        scene: "買い物",
        prompt: "ここでカードが使えるか知りたい場面です。使えると言われた一文はどれですか。",
        options: [
        { targetTamil: "இங்கே கார்டு பயன்படுத்த முடியும்.", structuredRoman: "iṅkē kārṭu payaṉpaṭutta muṭiyum.", pronunciationRoman: "ingē kārḍu payanbaḍutta muḍiyum.", katakana: "インゲー カールドゥ パヤンバドゥッタ ムディユム。", ja: "ここではカードを使えます", tag: "正解" },
        { targetTamil: "இங்கே கார்டு பயன்படுத்தக் கூடாது.", structuredRoman: "iṅkē kārṭu payaṉpaṭutta-k kūṭātu.", pronunciationRoman: "ingē kārḍu payanbaḍuttak kūḍādu.", katakana: "インゲー カールドゥ パヤンバドゥッタック クーダードゥ。", ja: "ここではカードを使ってはいけません", tag: "禁止" },
        { targetTamil: "எனக்கு கார்டு வேணும்.", structuredRoman: "eṉ-akku kārṭu vēṇum.", pronunciationRoman: "enakku kārḍu vēṇum.", katakana: "エナック カールドゥ ヴェーヌム。", ja: "カードが欲しいです", tag: "要求" },
        { targetTamil: "என்கிட்ட கார்டு இருக்கு.", structuredRoman: "eṉ-kiṭṭa kārṭu irukku.", pronunciationRoman: "engiṭṭa kārḍu irukku.", katakana: "エンギッタ カールドゥ イルック。", ja: "カードを持っています", tag: "所有" }
        ],
        answer: 0,
        feedback: "முடியும் は可能、கூடாது は禁止。右端で読み分けます。",
        hint: "できるかどうかを答えている文を選びます。"
      }),
      D({
        id: "dr13-04",
        type: "混同防止",
        scene: "移動・オート",
        prompt: "「行く必要があります」と「行くつもりです」を分けます。必要を示すのはどれですか。",
        options: [
        { targetTamil: "எனக்கு கடற்கரைக்கு போகணும்.", structuredRoman: "eṉ-akku kaṭaṟkarai-kku pōka-ṇum.", pronunciationRoman: "enakku kaḍarkaraikku pōgaṇum.", katakana: "エナック カダルカライック ポーガヌム。", ja: "海岸へ行く必要があります", tag: "正解" },
        { targetTamil: "நான் கடற்கரைக்கு போகப் போறேன்.", structuredRoman: "nāṉ kaṭaṟkarai-kku pōka-p pōṟ-ēṉ.", pronunciationRoman: "nān kaḍarkaraikku pōgap pōrēn.", katakana: "ナーン カダルカライック ポーガッ ポーレーン。", ja: "海岸へ行くつもりです", tag: "計画の表現" },
        { targetTamil: "எனக்கு கடற்கரைக்கு போக ஆசை இருக்கு.", structuredRoman: "eṉ-akku kaṭaṟkarai-kku pōka ācai irukku.", pronunciationRoman: "enakku kaḍarkaraikku pōga āsai irukku.", katakana: "エナック カダルカライック ポーガ アーサイ イルック。", ja: "海岸へ行きたいです", tag: "願望の表現" },
        { targetTamil: "என்னால கடற்கரைக்கு போக முடியாது.", structuredRoman: "eṉṉ-āla kaṭaṟkarai-kku pōka muṭiyātu.", pronunciationRoman: "ennāla kaḍarkaraikku pōga muḍiyādu.", katakana: "エンナーラ カダルカライック ポーガ ムディヤードゥ。", ja: "海岸へ行けません", tag: "不可能" }
        ],
        answer: 0,
        feedback: "-ணும் が必要・義務、〈不定詞 ＋ போறேன்〉が具体的な計画です。",
        hint: "しなければならないのか、そうすると決めているのかで選びます。"
      }),
      D({
        id: "dr13-05",
        type: "空欄補充",
        scene: "困ったとき",
        prompt: "「ここでは写真を撮ってはいけません」。空欄はどれですか。 இங்கே படம் ___ கூடாது.",
        options: [
        { targetTamil: "எடுக்கக்", structuredRoman: "eṭukka-k", pronunciationRoman: "eḍukkak", katakana: "エドゥッカック", ja: "撮る（禁止の前の形）", tag: "正解" },
        { targetTamil: "எடுத்தேன்", structuredRoman: "eṭutt-ēṉ", pronunciationRoman: "eḍuttēn", katakana: "エドゥッテーン", ja: "撮りました", tag: "有限動詞" },
        { targetTamil: "எடுக்க", structuredRoman: "eṭukka", pronunciationRoman: "eḍukka", katakana: "エドゥッカ", ja: "撮るために", tag: "禁止の前では -க் が付く" },
        { targetTamil: "பாக்க", structuredRoman: "pākka", pronunciationRoman: "pākka", katakana: "パーッカ", ja: "見るために", tag: "動作が違う" }
        ],
        answer: 0,
        feedback: "கூடாது の前は不定詞。この語では -க் が付いて எடுக்கக் になります。",
        hint: "後ろの கூடாது がすでに文を終えています。"
      })
    ]
  });

  attach(14, {
    phrases: [
      P({ id: "sp14-01", scene: "人と話す", targetTamil: "அவர் ஹோட்டல்ல இருக்கார்.", structuredRoman: "avar hōṭṭal-la irukk-ār.", pronunciationRoman: "avar hōṭṭalla irukkār.", katakana: "アヴァル ホーッタッラ イルッカール。", meaningJa: "その方はホテルにいます。", literalJapanese: "その方＋ホテル・場所＋いる・敬意", note: "அவர் と -ஆர் を一組で覚えます。" }),
      P({ id: "sp14-02", scene: "移動・オート", targetTamil: "அவங்க ஆட்டோல போறாங்க.", structuredRoman: "avaṅka āṭṭō-la pōṟ-āṅka.", pronunciationRoman: "avanga āṭṭōla pōrānga.", katakana: "アヴァンガ アーットーラ ポーラーンガ。", meaningJa: "その人たちはオートで行きます。", literalJapanese: "その人たち＋オート・手段＋行く・複数", note: "அவங்க は複数にも、より丁寧な一人にも使えます。" }),
      P({ id: "sp14-03", scene: "空港・駅", targetTamil: "பஸ் கடற்கரைக்கு போகுது.", structuredRoman: "pas kaṭaṟkarai-kku pōku-tu.", pronunciationRoman: "bas kaḍarkaraikku pōgudu.", katakana: "バス カダルカライック ポーグドゥ。", meaningJa: "バスは海岸へ行きます。", literalJapanese: "バス＋海岸・到達＋行く・非人間", note: "人ではないものは -உது の形になります。" }),
      P({ id: "sp14-04", scene: "道をきく", targetTamil: "நாம கடற்கரைக்கு போறோம்.", structuredRoman: "nāma kaṭaṟkarai-kku pōṟ-ōm.", pronunciationRoman: "nāma kaḍarkaraikku pōrōm.", katakana: "ナーマ カダルカライック ポーローム。", meaningJa: "私たちは海岸へ行きます。", literalJapanese: "私たち・包括＋海岸・到達＋行く・私たち", note: "நாம は聞き手を含む「私たち」です。" }),
      P({ id: "sp14-05", scene: "ホテル", targetTamil: "நண்பர்கள் நாளைக்கு வர்றாங்க.", structuredRoman: "naṇparkaḷ nāḷai-kku varṟ-āṅka.", pronunciationRoman: "naṇbargaḷ nāḷaikku varrānga.", katakana: "ナンバルガル ナーライック ヴァッラーンガ。", meaningJa: "友達たちは明日来ます。", literalJapanese: "友達たち＋明日＋来る・複数", note: "人の複数は -ஆங்க で受けます。" }),
      P({ id: "sp14-06", scene: "買い物", targetTamil: "அவர் கடைக்கு போறார்.", structuredRoman: "avar kaṭai-kku pōṟ-ār.", pronunciationRoman: "avar kaḍaikku pōrār.", katakana: "アヴァル カダイック ポーラール。", meaningJa: "その方は店へ行きます。", literalJapanese: "その方＋店・到達＋行く・敬意", note: "第三者の行動を伝えるときの基本形です。" })
    ],
    drills: [
      D({
        id: "dr14-01",
        type: "語形選択",
        scene: "人と話す",
        prompt: "「その方はチェンナイへ行きます」。敬意のある三人称単数はどれですか。",
        options: [
        { targetTamil: "அவர் சென்னைக்கு போறார்.", structuredRoman: "avar ceṉṉai-kku pōṟ-ār.", pronunciationRoman: "avar sennaikku pōrār.", katakana: "アヴァル センナイック ポーラール。", ja: "その方はチェンナイへ行きます", tag: "正解" },
        { targetTamil: "அவன் சென்னைக்கு போறான்.", structuredRoman: "avaṉ ceṉṉai-kku pōṟ-āṉ.", pronunciationRoman: "avan sennaikku pōrān.", katakana: "アヴァン センナイック ポーラーン。", ja: "彼はチェンナイへ行きます", tag: "敬意がない形" },
        { targetTamil: "அவங்க சென்னைக்கு போறாங்க.", structuredRoman: "avaṅka ceṉṉai-kku pōṟ-āṅka.", pronunciationRoman: "avanga sennaikku pōrānga.", katakana: "アヴァンガ センナイック ポーラーンガ。", ja: "その人たちはチェンナイへ行きます", tag: "複数または更に丁寧" },
        { targetTamil: "நீங்க சென்னைக்கு போறீங்க.", structuredRoman: "nīṅka ceṉṉai-kku pōṟ-īṅka.", pronunciationRoman: "nīnga sennaikku pōrīnga.", katakana: "ニーンガ センナイック ポーリーンガ。", ja: "あなたはチェンナイへ行きます", tag: "二人称" }
        ],
        answer: 0,
        feedback: "அவர் と -ஆர் が一組。代名詞と動詞の右端は必ず揃えます。",
        hint: "代名詞と動詞の右端をセットで見ます。"
      }),
      D({
        id: "dr14-02",
        type: "混同防止",
        scene: "道をきく",
        prompt: "相手も一緒に行く「私たち」はどちらですか。",
        options: [
        { targetTamil: "நாம கடற்கரைக்கு போறோம்.", structuredRoman: "nāma kaṭaṟkarai-kku pōṟ-ōm.", pronunciationRoman: "nāma kaḍarkaraikku pōrōm.", katakana: "ナーマ カダルカライック ポーローム。", ja: "私たち（あなたも含む）は海岸へ行きます", tag: "正解" },
        { targetTamil: "நாங்க கடற்கரைக்கு போறோம்.", structuredRoman: "nāṅka kaṭaṟkarai-kku pōṟ-ōm.", pronunciationRoman: "nānga kaḍarkaraikku pōrōm.", katakana: "ナーンガ カダルカライック ポーローム。", ja: "私たち（あなたは含まない）は海岸へ行きます", tag: "聞き手を含まない" },
        { targetTamil: "நான் கடற்கரைக்கு போறேன்.", structuredRoman: "nāṉ kaṭaṟkarai-kku pōṟ-ēṉ.", pronunciationRoman: "nān kaḍarkaraikku pōrēn.", katakana: "ナーン カダルカライック ポーレーン。", ja: "私は海岸へ行きます", tag: "単数" },
        { targetTamil: "அவங்க கடற்கரைக்கு போறாங்க.", structuredRoman: "avaṅka kaṭaṟkarai-kku pōṟ-āṅka.", pronunciationRoman: "avanga kaḍarkaraikku pōrānga.", katakana: "アヴァンガ カダルカライック ポーラーンガ。", ja: "その人たちは海岸へ行きます", tag: "三人称" }
        ],
        answer: 0,
        feedback: "நாம は聞き手を含み、நாங்க は含みません。動詞は同じ -ஓம் です。",
        hint: "誘っているのか、報告しているのかで選びます。"
      }),
      D({
        id: "dr14-03",
        type: "場面選択",
        scene: "空港・駅",
        prompt: "バスの行き先を説明します。人ではないものの形はどれですか。",
        options: [
        { targetTamil: "பஸ் கடற்கரைக்கு போகுது.", structuredRoman: "pas kaṭaṟkarai-kku pōku-tu.", pronunciationRoman: "bas kaḍarkaraikku pōgudu.", katakana: "バス カダルカライック ポーグドゥ。", ja: "バスは海岸へ行きます", tag: "正解" },
        { targetTamil: "பஸ் கடற்கரைக்கு போறார்.", structuredRoman: "pas kaṭaṟkarai-kku pōṟ-ār.", pronunciationRoman: "bas kaḍarkaraikku pōrār.", katakana: "バス カダルカライック ポーラール。", ja: "バスは＋敬意のある人の形", tag: "有生性が合わない" },
        { targetTamil: "பஸ் கடற்கரைக்கு போறாங்க.", structuredRoman: "pas kaṭaṟkarai-kku pōṟ-āṅka.", pronunciationRoman: "bas kaḍarkaraikku pōrānga.", katakana: "バス カダルカライック ポーラーンガ。", ja: "バスは＋人の複数の形", tag: "有生性が合わない" },
        { targetTamil: "நான் கடற்கரைக்கு போறேன்.", structuredRoman: "nāṉ kaṭaṟkarai-kku pōṟ-ēṉ.", pronunciationRoman: "nān kaḍarkaraikku pōrēn.", katakana: "ナーン カダルカライック ポーレーン。", ja: "私は海岸へ行きます", tag: "主語が違う" }
        ],
        answer: 0,
        feedback: "人ではない主語には -உது。பஸ் போகுது です。",
        hint: "主語が人かどうかで動詞の右端が変わります。"
      }),
      D({
        id: "dr14-04",
        type: "場面選択",
        scene: "移動・オート",
        prompt: "初対面の相手に「どこへ行きますか」と丁寧にきく形はどれですか。",
        options: [
        { targetTamil: "நீங்க எங்க போறீங்க?", structuredRoman: "nīṅka eṅka pōṟ-īṅka?", pronunciationRoman: "nīnga enga pōrīnga?", katakana: "ニーンガ エンガ ポーリーンガ？", ja: "どこへ行きますか", tag: "正解" },
        { targetTamil: "நீ எங்க போற?", structuredRoman: "nī eṅka pōṟ-a?", pronunciationRoman: "nī enga pōra?", katakana: "ニー エンガ ポーラ？", ja: "どこ行くの？", tag: "親称で距離が近すぎる" },
        { targetTamil: "அவங்க எங்க போறாங்க?", structuredRoman: "avaṅka eṅka pōṟ-āṅka?", pronunciationRoman: "avanga enga pōrānga?", katakana: "アヴァンガ エンガ ポーラーンガ？", ja: "その人たちはどこへ行きますか", tag: "相手ではなく第三者" },
        { targetTamil: "நாம எங்க போறோம்?", structuredRoman: "nāma eṅka pōṟ-ōm?", pronunciationRoman: "nāma enga pōrōm?", katakana: "ナーマ エンガ ポーローム？", ja: "私たちはどこへ行きますか", tag: "人が違う" }
        ],
        answer: 0,
        feedback: "旅行では நீங்க ＋ -ஈங்க が安全な組み合わせです。",
        hint: "相手との距離で二人称を選びます。"
      }),
      D({
        id: "dr14-05",
        type: "空欄補充",
        scene: "ホテル",
        prompt: "「友達たちは明日来ます」。空欄はどれですか。 நண்பர்கள் நாளைக்கு ___",
        options: [
        { targetTamil: "வர்றாங்க.", structuredRoman: "varṟ-āṅka.", pronunciationRoman: "varrānga.", katakana: "ヴァッラーンガ。", ja: "来ます（人の複数）", tag: "正解" },
        { targetTamil: "வர்றேன்.", structuredRoman: "varṟ-ēṉ.", pronunciationRoman: "varrēn.", katakana: "ヴァッレーン。", ja: "来ます（私）", tag: "人が違う" },
        { targetTamil: "போகுது.", structuredRoman: "pōku-tu.", pronunciationRoman: "pōgudu.", katakana: "ポーグドゥ。", ja: "行きます（非人間）", tag: "有生性が合わない" },
        { targetTamil: "வருவேன்.", structuredRoman: "varuv-ēṉ.", pronunciationRoman: "varuvēn.", katakana: "ヴァルヴェーン。", ja: "来ます（私・未来）", tag: "人が違う" }
        ],
        answer: 0,
        feedback: "人の複数は -ஆங்க。主語 நண்பர்கள் と揃えます。",
        hint: "主語が誰かを見てから動詞の右端を決めます。"
      })
    ]
  });

  attach(15, {
    phrases: [
      P({ id: "sp15-01", scene: "移動・オート", targetTamil: "ஆட்டோல போகலாமா?", structuredRoman: "āṭṭō-la pōka-lām-ā?", pronunciationRoman: "āṭṭōla pōgalāmā?", katakana: "アーットーラ ポーガラーマー？", meaningJa: "オートで行きましょうか。", literalJapanese: "オート・手段＋行こう・か", note: "-லாமா? は提案と許可の両方に使えます。" }),
      P({ id: "sp15-02", scene: "買い物", targetTamil: "இது எவ்வளவு?", structuredRoman: "itu evvaḷavu?", pronunciationRoman: "idu evvaḷavu?", katakana: "イドゥ エッヴァラヴ？", meaningJa: "これはいくらですか。", literalJapanese: "これ＋いくら", note: "指を差しながら使える最短の質問です。" }),
      P({ id: "sp15-03", scene: "食事", targetTamil: "நாம ஹோட்டல்ல சாப்பிடலாம்.", structuredRoman: "nāma hōṭṭal-la cāppiṭa-lām.", pronunciationRoman: "nāma hōṭṭalla sāppiḍalām.", katakana: "ナーマ ホーッタッラ サーッピダラーム。", meaningJa: "ホテルで食べましょう。", literalJapanese: "私たち＋ホテル・場所＋食べよう", note: "நாம ＋ -லாம் で自然な誘いになります。" }),
      P({ id: "sp15-04", scene: "道をきく", targetTamil: "கோவில் எங்கே இருக்கு?", structuredRoman: "kōvil eṅkē irukku?", pronunciationRoman: "kōvil engē irukku?", katakana: "コーヴィル エンゲー イルック？", meaningJa: "寺院はどこにありますか。", literalJapanese: "寺院＋どこ＋ある", note: "எங்கே だけでも通じますが、இருக்கு を足すと丁寧です。" }),
      P({ id: "sp15-05", scene: "困ったとき", targetTamil: "இங்கே போகாதீங்க.", structuredRoman: "iṅkē pōk-ātīṅka.", pronunciationRoman: "ingē pōgādīnga.", katakana: "インゲー ポーガーディーンガ。", meaningJa: "ここへは行かないでください。", literalJapanese: "ここ＋行かないでください", note: "-ஆதீங்க は丁寧な禁止。-ஆதே は親しい相手向けです。" }),
      P({ id: "sp15-06", scene: "ホテル", targetTamil: "ரூம் இருக்கா?", structuredRoman: "rūm irukk-ā?", pronunciationRoman: "rūm irukkā?", katakana: "ルーム イルッカー？", meaningJa: "部屋はありますか。", literalJapanese: "部屋＋ある・か", note: "はい・いいえで答えられる質問は -ஆ を付けるだけです。" })
    ],
    drills: [
      D({
        id: "dr15-01",
        type: "場面選択",
        scene: "ホテル",
        prompt: "宿の前で空室を尋ねます。はい・いいえで答えられる形はどれですか。",
        options: [
        { targetTamil: "ரூம் இருக்கா?", structuredRoman: "rūm irukk-ā?", pronunciationRoman: "rūm irukkā?", katakana: "ルーム イルッカー？", ja: "部屋はありますか", tag: "正解" },
        { targetTamil: "ரூம் எங்கே?", structuredRoman: "rūm eṅkē?", pronunciationRoman: "rūm engē?", katakana: "ルーム エンゲー？", ja: "部屋はどこですか", tag: "場所をきいている" },
        { targetTamil: "ரூம் எவ்வளவு?", structuredRoman: "rūm evvaḷavu?", pronunciationRoman: "rūm evvaḷavu?", katakana: "ルーム エッヴァラヴ？", ja: "部屋はいくらですか", tag: "値段をきいている" },
        { targetTamil: "எனக்கு ரூம் வேணும்.", structuredRoman: "eṉ-akku rūm vēṇum.", pronunciationRoman: "enakku rūm vēṇum.", katakana: "エナック ルーム ヴェーヌム。", ja: "部屋が欲しいです", tag: "質問になっていない" }
        ],
        answer: 0,
        feedback: "-ஆ を付けるだけで、はい・いいえの質問になります。",
        hint: "欲しい答えが「ある／ない」のものを選びます。"
      }),
      D({
        id: "dr15-02",
        type: "混同防止",
        scene: "移動・オート",
        prompt: "「行きましょうか」と「行かないでください」を分けます。相手を誘うのはどれですか。",
        options: [
        { targetTamil: "நாம போகலாமா?", structuredRoman: "nāma pōka-lām-ā?", pronunciationRoman: "nāma pōgalāmā?", katakana: "ナーマ ポーガラーマー？", ja: "行きましょうか", tag: "正解" },
        { targetTamil: "போகாதீங்க.", structuredRoman: "pōk-ātīṅka.", pronunciationRoman: "pōgādīnga.", katakana: "ポーガーディーンガ。", ja: "行かないでください", tag: "丁寧な禁止" },
        { targetTamil: "போகாதே.", structuredRoman: "pōk-ātē.", pronunciationRoman: "pōgādē.", katakana: "ポーガーデー。", ja: "行かないで", tag: "親しい相手への禁止" },
        { targetTamil: "போங்க.", structuredRoman: "pōṅka.", pronunciationRoman: "pōnga.", katakana: "ポーンガ。", ja: "行ってください", tag: "依頼であって誘いではない" }
        ],
        answer: 0,
        feedback: "நாம ＋ -லாமா? は「一緒にどうですか」という誘いです。",
        hint: "自分も一緒に動くかどうかを見ます。"
      }),
      D({
        id: "dr15-03",
        type: "場面選択",
        scene: "困ったとき",
        prompt: "初対面の相手に丁寧に「少し待ってください」と頼みます。どれですか。",
        options: [
        { targetTamil: "கொஞ்சம் காத்திருங்க.", structuredRoman: "koñcam kāttiru-ṅka.", pronunciationRoman: "konjam kāttirunga.", katakana: "コンジャム カーッティルンガ。", ja: "少し待ってください", tag: "正解" },
        { targetTamil: "இங்கே வா.", structuredRoman: "iṅkē vā.", pronunciationRoman: "ingē vā.", katakana: "インゲー ヴァー。", ja: "ここへ来て", tag: "親称で距離が近すぎる" },
        { targetTamil: "போகாதீங்க.", structuredRoman: "pōk-ātīṅka.", pronunciationRoman: "pōgādīnga.", katakana: "ポーガーディーンガ。", ja: "行かないでください", tag: "禁止であって依頼ではない" },
        { targetTamil: "நாம காத்திருக்கலாம்.", structuredRoman: "nāma kāttirukka-lām.", pronunciationRoman: "nāma kāttirukkalām.", katakana: "ナーマ カーッティルッカラーム。", ja: "待ちましょう", tag: "誘いになっている" }
        ],
        answer: 0,
        feedback: "-உங்க が丁寧な依頼。கொஞ்சம் を添えると柔らかくなります。",
        hint: "相手にしてほしい動作を丁寧に頼みます。"
      }),
      D({
        id: "dr15-04",
        type: "場面選択",
        scene: "道をきく",
        prompt: "「バスはどこに止まりますか」と「バスはいくらですか」を分けます。停車位置をきくのはどれですか。",
        options: [
        { targetTamil: "பஸ் எங்கே நிக்கும்?", structuredRoman: "pas eṅkē nikk-um?", pronunciationRoman: "bas engē nikkum?", katakana: "バス エンゲー ニックム？", ja: "バスはどこに止まりますか", tag: "正解" },
        { targetTamil: "பஸ் எவ்வளவு?", structuredRoman: "pas evvaḷavu?", pronunciationRoman: "bas evvaḷavu?", katakana: "バス エッヴァラヴ？", ja: "バスはいくらですか", tag: "値段をきいている" },
        { targetTamil: "பஸ் இருக்கா?", structuredRoman: "pas irukk-ā?", pronunciationRoman: "bas irukkā?", katakana: "バス イルッカー？", ja: "バスはありますか", tag: "有無をきいている" },
        { targetTamil: "பஸ் எது?", structuredRoman: "pas etu?", pronunciationRoman: "bas edu?", katakana: "バス エドゥ？", ja: "どのバスですか", tag: "選択をきいている" }
        ],
        answer: 0,
        feedback: "எங்கே が場所、எவ்வளவு が量や値段、எது が選択です。",
        hint: "疑問語ごとに欲しい答えの種類が違います。"
      }),
      D({
        id: "dr15-05",
        type: "空欄補充",
        scene: "食事",
        prompt: "「ホテルで食べましょう」。空欄はどれですか。 நாம ஹோட்டல்ல ___",
        options: [
        { targetTamil: "சாப்பிடலாம்.", structuredRoman: "cāppiṭa-lām.", pronunciationRoman: "sāppiḍalām.", katakana: "サーッピダラーム。", ja: "食べましょう", tag: "正解" },
        { targetTamil: "சாப்பிடுறேன்.", structuredRoman: "cāppiṭu-ṟ-ēṉ.", pronunciationRoman: "sāppiḍurēn.", katakana: "サーッピドゥレーン。", ja: "私は食べます", tag: "誘いになっていない" },
        { targetTamil: "சாப்பிட்டேன்.", structuredRoman: "cāppiṭṭ-ēṉ.", pronunciationRoman: "sāppiṭṭēn.", katakana: "サーッピッテーン。", ja: "食べました", tag: "過去" },
        { targetTamil: "சாப்பிடுங்க.", structuredRoman: "cāppiṭ-uṅka.", pronunciationRoman: "sāppiḍunga.", katakana: "サーッピドゥンガ。", ja: "食べてください", tag: "自分は含まれない" }
        ],
        answer: 0,
        feedback: "நாம と -லாம் が揃うと「一緒にしましょう」になります。",
        hint: "自分も一緒に食べる形を選びます。"
      })
    ]
  });

  attach(16, {
    phrases: [
      P({ id: "sp16-01", scene: "ホテル", targetTamil: "இதைவிட மலிவா ரூம் இருக்கா?", structuredRoman: "it-ai-viṭa maliv-ā rūm irukk-ā?", pronunciationRoman: "ideviḍa malivā rūm irukkā?", katakana: "イデヴィダ マリヴァー ルーム イルッカー？", meaningJa: "これより安い部屋はありますか。", literalJapanese: "これ・より＋安く＋部屋＋ある・か", note: "-ஐவிட が比較の基準側。値段交渉でそのまま使えます。" }),
      P({ id: "sp16-02", scene: "買い物", targetTamil: "எனக்கு ரெண்டு சின்ன பை வேணும்.", structuredRoman: "eṉ-akku reṇṭu ciṉṉa pai vēṇum.", pronunciationRoman: "enakku reṇḍu sinna pai vēṇum.", katakana: "エナック レンドゥ シンナ パイ ヴェーヌム。", meaningJa: "小さいかばんが2つ欲しいです。", literalJapanese: "私・与格＋二＋小さい＋かばん＋要る", note: "〈数詞 ＋ 性質 ＋ 名詞〉の順に積みます。" }),
      P({ id: "sp16-03", scene: "食事", targetTamil: "எனக்கு ஒரு சூடான காபி வேணும்.", structuredRoman: "eṉ-akku oru cūṭ-āṉa kāpi vēṇum.", pronunciationRoman: "enakku oru sūḍāna kābi vēṇum.", katakana: "エナック オル スーダーナ カービ ヴェーヌム。", meaningJa: "温かいコーヒーを一つください。", literalJapanese: "私・与格＋一つ＋温かい＋コーヒー＋要る", note: "性質は必ず名詞の前に置きます。" }),
      P({ id: "sp16-04", scene: "空港・駅", targetTamil: "முதல் பஸ் எவ்வளவு?", structuredRoman: "mutal pas evvaḷavu?", pronunciationRoman: "mudal bas evvaḷavu?", katakana: "ムダル バス エッヴァラヴ？", meaningJa: "始発のバスはいくらですか。", literalJapanese: "最初の＋バス＋いくら", note: "முதல் / ரெண்டாவது は順番を示します。" }),
      P({ id: "sp16-05", scene: "道をきく", targetTamil: "இந்த வழி நல்லா இருக்கு.", structuredRoman: "inta vaḻi nallā irukku.", pronunciationRoman: "inda vaḻi nallā irukku.", katakana: "インダ ヴァリ ナッラー イルック。", meaningJa: "この道は良いです。", literalJapanese: "この＋道＋良く＋ある", note: "நல்லா இருக்கு は「良い状態だ」という述語です。" }),
      P({ id: "sp16-06", scene: "買い物", targetTamil: "இந்த பை அந்த பையைவிட மலிவா இருக்கு.", structuredRoman: "inta pai anta pai-y-ai-viṭa maliv-ā irukku.", pronunciationRoman: "inda pai anda paiyeviḍa malivā irukku.", katakana: "インダ パイ アンダ パイイェヴィダ マリヴァー イルック。", meaningJa: "このかばんはあのかばんより安いです。", literalJapanese: "この＋かばん＋あの＋かばん・より＋安く＋ある", note: "比べられる側に -ஐவிட が付きます。" })
    ],
    drills: [
      D({
        id: "dr16-01",
        type: "場面選択",
        scene: "ホテル",
        prompt: "提示された部屋より安いものを探します。どれですか。",
        options: [
        { targetTamil: "இதைவிட மலிவா ரூம் இருக்கா?", structuredRoman: "it-ai-viṭa maliv-ā rūm irukk-ā?", pronunciationRoman: "ideviḍa malivā rūm irukkā?", katakana: "イデヴィダ マリヴァー ルーム イルッカー？", ja: "これより安い部屋はありますか", tag: "正解" },
        { targetTamil: "இதைவிட நல்ல ரூம் இருக்கா?", structuredRoman: "it-ai-viṭa nalla rūm irukk-ā?", pronunciationRoman: "ideviḍa nalla rūm irukkā?", katakana: "イデヴィダ ナッラ ルーム イルッカー？", ja: "これより良い部屋はありますか", tag: "条件が違う" },
        { targetTamil: "இந்த ரூம் மலிவா இருக்கு.", structuredRoman: "inta rūm maliv-ā irukku.", pronunciationRoman: "inda rūm malivā irukku.", katakana: "インダ ルーム マリヴァー イルック。", ja: "この部屋は安いです", tag: "質問になっていない" },
        { targetTamil: "எனக்கு ஒரு ரூம் வேணும்.", structuredRoman: "eṉ-akku oru rūm vēṇum.", pronunciationRoman: "enakku oru rūm vēṇum.", katakana: "エナック オル ルーム ヴェーヌム。", ja: "部屋が一つ欲しいです", tag: "比較がない" }
        ],
        answer: 0,
        feedback: "比較の基準は -ஐவிட の側。இதைவிட は「これより」です。",
        hint: "「より安い」という条件が入っているものを選びます。"
      }),
      D({
        id: "dr16-02",
        type: "語形選択",
        scene: "買い物",
        prompt: "「小さいかばんが2つ欲しい」。語順が正しいのはどれですか。",
        options: [
        { targetTamil: "எனக்கு ரெண்டு சின்ன பை வேணும்.", structuredRoman: "eṉ-akku reṇṭu ciṉṉa pai vēṇum.", pronunciationRoman: "enakku reṇḍu sinna pai vēṇum.", katakana: "エナック レンドゥ シンナ パイ ヴェーヌム。", ja: "小さいかばんが2つ欲しいです", tag: "正解" },
        { targetTamil: "எனக்கு சின்ன ரெண்டு பை வேணும்.", structuredRoman: "eṉ-akku ciṉṉa reṇṭu pai vēṇum.", pronunciationRoman: "enakku sinna reṇḍu pai vēṇum.", katakana: "エナック シンナ レンドゥ パイ ヴェーヌム。", ja: "小さい＋二つ＋かばん", tag: "数と性質の順が逆" },
        { targetTamil: "எனக்கு பை ரெண்டு சின்ன வேணும்.", structuredRoman: "eṉ-akku pai reṇṭu ciṉṉa vēṇum.", pronunciationRoman: "enakku pai reṇḍu sinna vēṇum.", katakana: "エナック パイ レンドゥ シンナ ヴェーヌム。", ja: "かばん＋二つ＋小さい", tag: "中心名詞が先に来ている" },
        { targetTamil: "எனக்கு ரெண்டு பை வேணும்.", structuredRoman: "eṉ-akku reṇṭu pai vēṇum.", pronunciationRoman: "enakku reṇḍu pai vēṇum.", katakana: "エナック レンドゥ パイ ヴェーヌム。", ja: "かばんが2つ欲しいです", tag: "性質の情報がない" }
        ],
        answer: 0,
        feedback: "〈数詞 → 性質 → 中心名詞〉の順です。中心名詞はいつも最後です。",
        hint: "最後に来るのは、結局何が欲しいのかという名詞です。"
      }),
      D({
        id: "dr16-03",
        type: "場面選択",
        scene: "食事",
        prompt: "「温かいコーヒーを一つ」と注文します。どれですか。",
        options: [
        { targetTamil: "எனக்கு ஒரு சூடான காபி வேணும்.", structuredRoman: "eṉ-akku oru cūṭ-āṉa kāpi vēṇum.", pronunciationRoman: "enakku oru sūḍāna kābi vēṇum.", katakana: "エナック オル スーダーナ カービ ヴェーヌム。", ja: "温かいコーヒーを一つください", tag: "正解" },
        { targetTamil: "எனக்கு காபி வேணும்.", structuredRoman: "eṉ-akku kāpi vēṇum.", pronunciationRoman: "enakku kābi vēṇum.", katakana: "エナック カービ ヴェーヌム。", ja: "コーヒーをください", tag: "温度の指定がない" },
        { targetTamil: "எனக்கு காபி பிடிக்கும்.", structuredRoman: "eṉ-akku kāpi piṭikkum.", pronunciationRoman: "enakku kābi piḍikkum.", katakana: "エナック カービ ピディックム。", ja: "コーヒーが好きです", tag: "注文になっていない" },
        { targetTamil: "காபி எவ்வளவு?", structuredRoman: "kāpi evvaḷavu?", pronunciationRoman: "kābi evvaḷavu?", katakana: "カービ エッヴァラヴ？", ja: "コーヒーはいくらですか", tag: "値段をきいている" }
        ],
        answer: 0,
        feedback: "性質 சூடான は名詞 காபி の前に置きます。",
        hint: "温度の指定が入っているものを選びます。"
      }),
      D({
        id: "dr16-04",
        type: "混同防止",
        scene: "道をきく",
        prompt: "「この道はあの道より簡単です」で、比べられている側はどちらですか。",
        options: [
        { targetTamil: "இந்த வழி அந்த வழியைவிட சுலபம்.", structuredRoman: "inta vaḻi anta vaḻi-y-ai-viṭa culapam.", pronunciationRoman: "inda vaḻi anda vaḻiyeviḍa sulabam.", katakana: "インダ ヴァリ アンダ ヴァリエヴィダ スラバム。", ja: "この道はあの道より簡単です", tag: "正解" },
        { targetTamil: "அந்த வழி இந்த வழியைவிட சுலபம்.", structuredRoman: "anta vaḻi inta vaḻi-y-ai-viṭa culapam.", pronunciationRoman: "anda vaḻi inda vaḻiyeviḍa sulabam.", katakana: "アンダ ヴァリ インダ ヴァリエヴィダ スラバム。", ja: "あの道はこの道より簡単です", tag: "比較の向きが逆" },
        { targetTamil: "இந்த வழி சுலபம்.", structuredRoman: "inta vaḻi culapam.", pronunciationRoman: "inda vaḻi sulabam.", katakana: "インダ ヴァリ スラバム。", ja: "この道は簡単です", tag: "比較がない" },
        { targetTamil: "இந்த வழி நல்லா இருக்கு.", structuredRoman: "inta vaḻi nallā irukku.", pronunciationRoman: "inda vaḻi nallā irukku.", katakana: "インダ ヴァリ ナッラー イルック。", ja: "この道は良いです", tag: "比較がない" }
        ],
        answer: 0,
        feedback: "-ஐவிட が付いている側が基準です。付いていない側が主役になります。",
        hint: "-ஐவிட がどちらに付いているかを見ます。"
      }),
      D({
        id: "dr16-05",
        type: "空欄補充",
        scene: "空港・駅",
        prompt: "「始発のバスはいくらですか」。空欄はどれですか。 ___ பஸ் எவ்வளவு?",
        options: [
        { targetTamil: "முதல்", structuredRoman: "mutal", pronunciationRoman: "mudal", katakana: "ムダル", ja: "最初の", tag: "正解" },
        { targetTamil: "ரெண்டாவது", structuredRoman: "reṇṭ-āvatu", pronunciationRoman: "reṇḍāvadu", katakana: "レンダーヴァドゥ", ja: "二番目の", tag: "順番が違う" },
        { targetTamil: "ரெண்டு", structuredRoman: "reṇṭu", pronunciationRoman: "reṇḍu", katakana: "レンドゥ", ja: "二つの", tag: "順番ではなく数" },
        { targetTamil: "சின்ன", structuredRoman: "ciṉṉa", pronunciationRoman: "sinna", katakana: "シンナ", ja: "小さい", tag: "順番ではなく性質" }
        ],
        answer: 0,
        feedback: "முதல் が「最初の」。ரெண்டு は数、ரெண்டாவது が「二番目の」です。",
        hint: "数と順番は別の語で示します。"
      })
    ]
  });

  attach(17, {
    phrases: [
      P({ id: "sp17-01", scene: "ホテル", targetTamil: "நான் தங்கற ஹோட்டல் கடற்கரைக்கு பக்கத்துல இருக்கு.", structuredRoman: "nāṉ taṅkaṟa hōṭṭal kaṭaṟkarai-kku pakkatt-ula irukku.", pronunciationRoman: "nān tangara hōṭṭal kaḍarkaraikku pakkattula irukku.", katakana: "ナーン タンガラ ホーッタル カダルカライック パッカットゥラ イルック。", meaningJa: "私が泊まるホテルは海岸の近くにあります。", literalJapanese: "私＋泊まる＋ホテル＋海岸・到達＋近く・場所＋ある", note: "動詞＋名詞が続いたら、その名詞までを一まとまりで読みます。" }),
      P({ id: "sp17-02", scene: "空港・駅", targetTamil: "கடற்கரைக்கு போற பஸ் எது?", structuredRoman: "kaṭaṟkarai-kku pōṟ-a pas etu?", pronunciationRoman: "kaḍarkaraikku pōra bas edu?", katakana: "カダルカライック ポーラ バス エドゥ？", meaningJa: "海岸へ行くバスはどれですか。", literalJapanese: "海岸・到達＋行く＋バス＋どれ", note: "行き先＋போற＋乗り物で、乗り場を特定できます。" }),
      P({ id: "sp17-03", scene: "買い物", targetTamil: "நான் நேத்து வாங்கின டிக்கெட் என்கிட்ட இருக்கு.", structuredRoman: "nāṉ nēttu vāṅkiṉa ṭikkeṭ eṉ-kiṭṭa irukku.", pronunciationRoman: "nān nēttu vāngina ṭikkeṭ engiṭṭa irukku.", katakana: "ナーン ネーットゥ ヴァーンギナ ティッケトゥ エンギッタ イルック。", meaningJa: "私が昨日買った切符は手元にあります。", literalJapanese: "私＋昨日＋買った＋切符＋私の手元＋ある", note: "வாங்கின は「買った」という連体形。後ろの名詞を説明します。" }),
      P({ id: "sp17-04", scene: "食事", targetTamil: "நாம நேத்து சாப்பிட்ட ஹோட்டல் நல்லா இருந்தது.", structuredRoman: "nāma nēttu cāppiṭṭa hōṭṭal nallā iruntatu.", pronunciationRoman: "nāma nēttu sāppiṭṭa hōṭṭal nallā irundadu.", katakana: "ナーマ ネーットゥ サーッピッタ ホーッタル ナッラー イルンダドゥ。", meaningJa: "私たちが昨日食べた店は良かったです。", literalJapanese: "私たち＋昨日＋食べた＋店＋良く＋あった", note: "連体形は時間も人も示しません。文末の動詞が担います。" }),
      P({ id: "sp17-05", scene: "移動・オート", targetTamil: "இங்கே நிக்கற ஆட்டோ கடற்கரைக்கு போகுது.", structuredRoman: "iṅkē nikkaṟa āṭṭō kaṭaṟkarai-kku pōku-tu.", pronunciationRoman: "ingē nikkara āṭṭō kaḍarkaraikku pōgudu.", katakana: "インゲー ニッカラ アーットー カダルカライック ポーグドゥ。", meaningJa: "ここに止まっているオートは海岸へ行きます。", literalJapanese: "ここ＋止まっている＋オート＋海岸・到達＋行く", note: "நிக்கற は「止まっている」。目の前のものを指せます。" }),
      P({ id: "sp17-06", scene: "人と話す", targetTamil: "நேத்து வந்த நண்பர் இன்னிக்கு ஹோட்டல்ல இருக்கார்.", structuredRoman: "nēttu vanta naṇpar iṉṉikku hōṭṭal-la irukk-ār.", pronunciationRoman: "nēttu vanda naṇbar innikku hōṭṭalla irukkār.", katakana: "ネーットゥ ヴァンダ ナンバル インニック ホーッタッラ イルッカール。", meaningJa: "昨日来た友達は、今日はホテルにいます。", literalJapanese: "昨日＋来た＋友達＋今日＋ホテル・場所＋いる・敬意", note: "連体形の中の時間と、文末の時間は別々に読みます。" })
    ],
    drills: [
      D({
        id: "dr17-01",
        type: "場面選択",
        scene: "空港・駅",
        prompt: "バス停で「海岸へ行くバスはどれですか」ときく形はどれですか。",
        options: [
        { targetTamil: "கடற்கரைக்கு போற பஸ் எது?", structuredRoman: "kaṭaṟkarai-kku pōṟ-a pas etu?", pronunciationRoman: "kaḍarkaraikku pōra bas edu?", katakana: "カダルカライック ポーラ バス エドゥ？", ja: "海岸へ行くバスはどれですか", tag: "正解" },
        { targetTamil: "பஸ் கடற்கரைக்கு போகுது.", structuredRoman: "pas kaṭaṟkarai-kku pōku-tu.", pronunciationRoman: "bas kaḍarkaraikku pōgudu.", katakana: "バス カダルカライック ポーグドゥ。", ja: "バスは海岸へ行きます", tag: "質問になっていない" },
        { targetTamil: "கடற்கரை எங்கே?", structuredRoman: "kaṭaṟkarai eṅkē?", pronunciationRoman: "kaḍarkarai engē?", katakana: "カダルカライ エンゲー？", ja: "海岸はどこですか", tag: "行き先の場所をきいている" },
        { targetTamil: "பஸ் எவ்வளவு?", structuredRoman: "pas evvaḷavu?", pronunciationRoman: "bas evvaḷavu?", katakana: "バス エッヴァラヴ？", ja: "バスはいくらですか", tag: "値段をきいている" }
        ],
        answer: 0,
        feedback: "போற が後ろの பஸ் を説明し、எது で「どれ」と選ばせます。",
        hint: "どのバスかを選ばせる形を探します。"
      }),
      D({
        id: "dr17-02",
        type: "語形選択",
        scene: "食事",
        prompt: "「私が昨日見た映画」。空欄はどれですか。 நான் நேத்து ___ படம்",
        options: [
        { targetTamil: "பாத்த", structuredRoman: "pātta", pronunciationRoman: "pātta", katakana: "パーッタ", ja: "見た（連体形）", tag: "正解" },
        { targetTamil: "பாத்தேன்", structuredRoman: "pātt-ēṉ", pronunciationRoman: "pāttēn", katakana: "パーッテーン", ja: "見ました（有限動詞）", tag: "後ろの名詞につながらない" },
        { targetTamil: "பாக்கற", structuredRoman: "pākkaṟa", pronunciationRoman: "pākkara", katakana: "パーッカラ", ja: "見る（連体形・現在）", tag: "時間が合わない" },
        { targetTamil: "பாக்காத", structuredRoman: "pākk-āta", pronunciationRoman: "pākkāda", katakana: "パーッカーダ", ja: "見ていない（連体形・否定）", tag: "意味が逆" }
        ],
        answer: 0,
        feedback: "後ろに名詞 படம் があるので連体形。過去なら பாத்த です。",
        hint: "直後に名詞が来るかどうかで形が決まります。"
      }),
      D({
        id: "dr17-03",
        type: "混同防止",
        scene: "移動・オート",
        prompt: "「まだ見ていない映画」を示すのはどれですか。",
        options: [
        { targetTamil: "நான் இன்னும் பாக்காத படம்", structuredRoman: "nāṉ iṉṉum pākk-āta paṭam", pronunciationRoman: "nān innum pākkāda paḍam", katakana: "ナーン インヌム パーッカーダ パダム", ja: "私がまだ見ていない映画", tag: "正解" },
        { targetTamil: "நான் நேத்து பாத்த படம்", structuredRoman: "nāṉ nēttu pātta paṭam", pronunciationRoman: "nān nēttu pātta paḍam", katakana: "ナーン ネーットゥ パーッタ パダム", ja: "私が昨日見た映画", tag: "見たものになっている" },
        { targetTamil: "நான் பாக்கற படம்", structuredRoman: "nāṉ pākkaṟa paṭam", pronunciationRoman: "nān pākkara paḍam", katakana: "ナーン パーッカラ パダム", ja: "私が見る映画", tag: "否定になっていない" },
        { targetTamil: "நான் படம் பாக்கல.", structuredRoman: "nāṉ paṭam pākka-la.", pronunciationRoman: "nān paḍam pākkala.", katakana: "ナーン パダム パーッカラ。", ja: "私は映画を見ませんでした", tag: "名詞句ではなく文" }
        ],
        answer: 0,
        feedback: "連体形の否定は -ஆத。後ろの名詞まで含めて一まとまりです。",
        hint: "後ろに名詞が続く形かどうかを確かめます。"
      }),
      D({
        id: "dr17-04",
        type: "場面選択",
        scene: "ホテル",
        prompt: "「私が泊まるホテル」を含む一文はどれですか。",
        options: [
        { targetTamil: "நான் தங்கற ஹோட்டல் கடற்கரைக்கு பக்கத்துல இருக்கு.", structuredRoman: "nāṉ taṅkaṟa hōṭṭal kaṭaṟkarai-kku pakkatt-ula irukku.", pronunciationRoman: "nān tangara hōṭṭal kaḍarkaraikku pakkattula irukku.", katakana: "ナーン タンガラ ホーッタル カダルカライック パッカットゥラ イルック。", ja: "私が泊まるホテルは海岸の近くにあります", tag: "正解" },
        { targetTamil: "நான் ஹோட்டல்ல இருக்கேன்.", structuredRoman: "nāṉ hōṭṭal-la irukk-ēṉ.", pronunciationRoman: "nān hōṭṭalla irukkēn.", katakana: "ナーン ホーッタッラ イルッケーン。", ja: "私はホテルにいます", tag: "連体修飾がない" },
        { targetTamil: "ஹோட்டல் கடற்கரைக்கு பக்கத்துல இருக்கு.", structuredRoman: "hōṭṭal kaṭaṟkarai-kku pakkatt-ula irukku.", pronunciationRoman: "hōṭṭal kaḍarkaraikku pakkattula irukku.", katakana: "ホーッタル カダルカライック パッカットゥラ イルック。", ja: "ホテルは海岸の近くにあります", tag: "どのホテルか出ない" },
        { targetTamil: "நான் ஹோட்டலுக்கு போறேன்.", structuredRoman: "nāṉ hōṭṭal-ukku pōṟ-ēṉ.", pronunciationRoman: "nān hōṭṭalukku pōrēn.", katakana: "ナーン ホーッタルック ポーレーン。", ja: "私はホテルへ行きます", tag: "位置の情報がない" }
        ],
        answer: 0,
        feedback: "தங்கற が ஹோட்டல் を説明し、そこまでが一つの名詞句です。",
        hint: "どのホテルかを説明している部分を探します。"
      }),
      D({
        id: "dr17-05",
        type: "空欄補充",
        scene: "人と話す",
        prompt: "「昨日来た友達」。空欄はどれですか。 நேத்து ___ நண்பர்",
        options: [
        { targetTamil: "வந்த", structuredRoman: "vanta", pronunciationRoman: "vanda", katakana: "ヴァンダ", ja: "来た（連体形）", tag: "正解" },
        { targetTamil: "வந்தேன்", structuredRoman: "vant-ēṉ", pronunciationRoman: "vandēn", katakana: "ヴァンデーン", ja: "来ました（私）", tag: "有限動詞" },
        { targetTamil: "வர்ற", structuredRoman: "varṟa", pronunciationRoman: "varra", katakana: "ヴァッラ", ja: "来る（連体形・現在）", tag: "時間が合わない" },
        { targetTamil: "வந்து", structuredRoman: "vantu", pronunciationRoman: "vandu", katakana: "ヴァンドゥ", ja: "来て（副動詞）", tag: "名詞につながらない" }
        ],
        answer: 0,
        feedback: "நண்பர் という名詞が後ろにあるので連体形 வந்த です。",
        hint: "直後が名詞かどうかで、連体形か副動詞かが決まります。"
      })
    ]
  });

  attach(18, {
    phrases: [
      P({ id: "sp18-01", scene: "移動・オート", targetTamil: "கடற்கரைக்கு போறது சுலபம்.", structuredRoman: "kaṭaṟkarai-kku pōṟa-tu culapam.", pronunciationRoman: "kaḍarkaraikku pōradu sulabam.", katakana: "カダルカライック ポーラドゥ スラバム。", meaningJa: "海岸へ行くのは簡単です。", literalJapanese: "海岸・到達＋行くこと＋簡単", note: "-றது で動作を「〜すること」に変え、主語にできます。" }),
      P({ id: "sp18-02", scene: "買い物", targetTamil: "எனக்கு கடைல பாக்கறது பிடிக்கும்.", structuredRoman: "eṉ-akku kaṭai-la pākkaṟa-tu piṭikkum.", pronunciationRoman: "enakku kaḍaila pākkaradu piḍikkum.", katakana: "エナック カダイラ パーッカラドゥ ピディックム。", meaningJa: "私は店で見て回るのが好きです。", literalJapanese: "私・与格＋店・場所＋見ること＋好き", note: "好きな対象が動作のときは -றது を使います。" }),
      P({ id: "sp18-03", scene: "人と話す", targetTamil: "அவர் சொன்னது எனக்கு புரியல.", structuredRoman: "avar coṉṉa-tu eṉ-akku puriyala.", pronunciationRoman: "avar sonnadu enakku puriyala.", katakana: "アヴァル ソンナドゥ エナック プリヤラ。", meaningJa: "その方が言ったことが分かりませんでした。", literalJapanese: "その方＋言ったこと＋私・与格＋分からない", note: "சொன்னது は「言ったこと」。中身をひとかたまりで扱います。" }),
      P({ id: "sp18-04", scene: "ホテル", targetTamil: "நான் தங்கறது இந்த ஹோட்டல்.", structuredRoman: "nāṉ taṅkaṟa-tu inta hōṭṭal.", pronunciationRoman: "nān tangaradu inda hōṭṭal.", katakana: "ナーン タンガラドゥ インダ ホーッタル。", meaningJa: "私が泊まるのはこのホテルです。", literalJapanese: "私＋泊まるもの＋この＋ホテル", note: "後ろに中心名詞がないので「〜するもの」になります。" }),
      P({ id: "sp18-05", scene: "困ったとき", targetTamil: "எனக்கு தமிழ் படிக்கறது சுலபம் இல்லை.", structuredRoman: "eṉ-akku tamiḻ paṭikkaṟa-tu culapam illai.", pronunciationRoman: "enakku tamiḻ paḍikkaradu sulabam illai.", katakana: "エナック タミル パディッカラドゥ スラバム イッライ。", meaningJa: "私にはタミル語を学ぶのは簡単ではありません。", literalJapanese: "私・与格＋タミル語＋学ぶこと＋簡単＋ではない", note: "名詞述語の否定なので இல்லை を後ろに置きます。" }),
      P({ id: "sp18-06", scene: "食事", targetTamil: "எனக்கு காபி குடிக்கறது பிடிக்கும்.", structuredRoman: "eṉ-akku kāpi kuṭikkaṟa-tu piṭikkum.", pronunciationRoman: "enakku kābi kuḍikkaradu piḍikkum.", katakana: "エナック カービ クディッカラドゥ ピディックム。", meaningJa: "私はコーヒーを飲むのが好きです。", literalJapanese: "私・与格＋コーヒー＋飲むこと＋好き", note: "「コーヒーが好き」と「飲むのが好き」を言い分けられます。" })
    ],
    drills: [
      D({
        id: "dr18-01",
        type: "混同防止",
        scene: "食事",
        prompt: "「コーヒーが好き」と「コーヒーを飲むのが好き」を分けます。動作が好きなのはどれですか。",
        options: [
        { targetTamil: "எனக்கு காபி குடிக்கறது பிடிக்கும்.", structuredRoman: "eṉ-akku kāpi kuṭikkaṟa-tu piṭikkum.", pronunciationRoman: "enakku kābi kuḍikkaradu piḍikkum.", katakana: "エナック カービ クディッカラドゥ ピディックム。", ja: "コーヒーを飲むのが好きです", tag: "正解" },
        { targetTamil: "எனக்கு காபி பிடிக்கும்.", structuredRoman: "eṉ-akku kāpi piṭikkum.", pronunciationRoman: "enakku kābi piḍikkum.", katakana: "エナック カービ ピディックム。", ja: "コーヒーが好きです", tag: "物そのものが好き" },
        { targetTamil: "எனக்கு காபி வேணும்.", structuredRoman: "eṉ-akku kāpi vēṇum.", pronunciationRoman: "enakku kābi vēṇum.", katakana: "エナック カービ ヴェーヌム。", ja: "コーヒーをください", tag: "その場の要求" },
        { targetTamil: "நான் காபி குடிக்கறேன்.", structuredRoman: "nāṉ kāpi kuṭikkaṟ-ēṉ.", pronunciationRoman: "nān kābi kuḍikkarēn.", katakana: "ナーン カービ クディッカレーン。", ja: "私はコーヒーを飲みます", tag: "好みの話ではない" }
        ],
        answer: 0,
        feedback: "-றது を付けると、動作そのものが「こと」として扱えます。",
        hint: "好きなのが物か、行為かを見ます。"
      }),
      D({
        id: "dr18-02",
        type: "場面選択",
        scene: "移動・オート",
        prompt: "「海岸へ行くのは簡単です」と伝えます。どれですか。",
        options: [
        { targetTamil: "கடற்கரைக்கு போறது சுலபம்.", structuredRoman: "kaṭaṟkarai-kku pōṟa-tu culapam.", pronunciationRoman: "kaḍarkaraikku pōradu sulabam.", katakana: "カダルカライック ポーラドゥ スラバム。", ja: "海岸へ行くのは簡単です", tag: "正解" },
        { targetTamil: "நான் கடற்கரைக்கு போறேன்.", structuredRoman: "nāṉ kaṭaṟkarai-kku pōṟ-ēṉ.", pronunciationRoman: "nān kaḍarkaraikku pōrēn.", katakana: "ナーン カダルカライック ポーレーン。", ja: "私は海岸へ行きます", tag: "評価になっていない" },
        { targetTamil: "கடற்கரைக்கு போற பஸ் எது?", structuredRoman: "kaṭaṟkarai-kku pōṟ-a pas etu?", pronunciationRoman: "kaḍarkaraikku pōra bas edu?", katakana: "カダルカライック ポーラ バス エドゥ？", ja: "海岸へ行くバスはどれですか", tag: "連体修飾で質問になっている" },
        { targetTamil: "என்னால கடற்கரைக்கு போக முடியாது.", structuredRoman: "eṉṉ-āla kaṭaṟkarai-kku pōka muṭiyātu.", pronunciationRoman: "ennāla kaḍarkaraikku pōga muḍiyādu.", katakana: "エンナーラ カダルカライック ポーガ ムディヤードゥ。", ja: "海岸へ行けません", tag: "意味が逆" }
        ],
        answer: 0,
        feedback: "போறது が主語になり、சுலபம் が述語になります。",
        hint: "「〜すること」が文の主語になっているものを選びます。"
      }),
      D({
        id: "dr18-03",
        type: "混同防止",
        scene: "人と話す",
        prompt: "「その方が言ったこと」と「その方が言った話題」を分けます。中心名詞がないのはどれですか。",
        options: [
        { targetTamil: "அவர் சொன்னது", structuredRoman: "avar coṉṉa-tu", pronunciationRoman: "avar sonnadu", katakana: "アヴァル ソンナドゥ", ja: "その方が言ったこと", tag: "正解" },
        { targetTamil: "அவர் சொன்ன விஷயம்", structuredRoman: "avar coṉṉa viṣayam", pronunciationRoman: "avar sonna viṣayam", katakana: "アヴァル ソンナ ヴィシャヤム", ja: "その方が言った事柄", tag: "中心名詞 விஷயம் がある" },
        { targetTamil: "அவர் சொன்னார்.", structuredRoman: "avar coṉṉ-ār.", pronunciationRoman: "avar sonnār.", katakana: "アヴァル ソンナール。", ja: "その方が言いました", tag: "文であって名詞句ではない" },
        { targetTamil: "அவர் சொல்லுங்க.", structuredRoman: "avar collu-ṅka.", pronunciationRoman: "avar sollunga.", katakana: "アヴァル ソッルンガ。", ja: "その方＋言ってください", tag: "依頼になっている" }
        ],
        answer: 0,
        feedback: "-து は後ろに名詞がないときに現れ、動作そのものを「こと・もの」にします。",
        hint: "後ろに名詞が続いているかどうかを見ます。"
      }),
      D({
        id: "dr18-04",
        type: "場面選択",
        scene: "ホテル",
        prompt: "「私が泊まるのはこのホテルです」と伝えます。どれですか。",
        options: [
        { targetTamil: "நான் தங்கறது இந்த ஹோட்டல்.", structuredRoman: "nāṉ taṅkaṟa-tu inta hōṭṭal.", pronunciationRoman: "nān tangaradu inda hōṭṭal.", katakana: "ナーン タンガラドゥ インダ ホーッタル。", ja: "私が泊まるのはこのホテルです", tag: "正解" },
        { targetTamil: "நான் தங்கற ஹோட்டல் இது.", structuredRoman: "nāṉ taṅkaṟa hōṭṭal itu.", pronunciationRoman: "nān tangara hōṭṭal idu.", katakana: "ナーン タンガラ ホーッタル イドゥ。", ja: "私が泊まるホテルはこれです", tag: "中心名詞がある言い方" },
        { targetTamil: "நான் ஹோட்டல்ல இருக்கேன்.", structuredRoman: "nāṉ hōṭṭal-la irukk-ēṉ.", pronunciationRoman: "nān hōṭṭalla irukkēn.", katakana: "ナーン ホーッタッラ イルッケーン。", ja: "私はホテルにいます", tag: "所在の話" },
        { targetTamil: "எனக்கு ஒரு ரூம் வேணும்.", structuredRoman: "eṉ-akku oru rūm vēṇum.", pronunciationRoman: "enakku oru rūm vēṇum.", katakana: "エナック オル ルーム ヴェーヌム。", ja: "部屋が一つ欲しいです", tag: "要求の話" }
        ],
        answer: 0,
        feedback: "தங்கறது は「泊まるもの・泊まること」。後ろに名詞を置きません。",
        hint: "動詞のすぐ後ろに名詞があるかどうかで選びます。"
      }),
      D({
        id: "dr18-05",
        type: "空欄補充",
        scene: "買い物",
        prompt: "「切符を買うためにカードを使えます」。空欄はどれですか。 டிக்கெட் ___ கார்டு பயன்படுத்தலாம்.",
        options: [
        { targetTamil: "வாங்கறதுக்கு", structuredRoman: "vāṅkaṟa-t-ukku", pronunciationRoman: "vāngaradukku", katakana: "ヴァーンガラドゥック", ja: "買うために", tag: "正解" },
        { targetTamil: "வாங்கறது", structuredRoman: "vāṅkaṟa-tu", pronunciationRoman: "vāngaradu", katakana: "ヴァーンガラドゥ", ja: "買うこと", tag: "格関係が出ない" },
        { targetTamil: "வாங்க", structuredRoman: "vāṅka", pronunciationRoman: "vānga", katakana: "ヴァーンガ", ja: "買うために（不定詞）", tag: "この構文では -துக்கு を使う" },
        { targetTamil: "வாங்கினேன்", structuredRoman: "vāṅkiṉ-ēṉ", pronunciationRoman: "vānginēn", katakana: "ヴァーンギネーン", ja: "買いました", tag: "有限動詞" }
        ],
        answer: 0,
        feedback: "「こと」にした上で与格 -உக்கு を付けると、用途や目的を示せます。",
        hint: "何のために使うのかという関係を作ります。"
      })
    ]
  });

  attach(19, {
    phrases: [
      P({ id: "sp19-01", scene: "人と話す", targetTamil: "அவங்க நாளைக்கு வர்றேன்னு சொன்னாங்க.", structuredRoman: "avaṅka nāḷai-kku varṟ-ēṉ-ṉu coṉṉ-āṅka.", pronunciationRoman: "avanga nāḷaikku varrēnnu sonnanga.", katakana: "アヴァンガ ナーライック ヴァッレーンヌ ソンナーンガ。", meaningJa: "その人たちは「明日来ます」と言いました。", literalJapanese: "その人たち＋明日＋来ます・と＋言った・複数", note: "-ன்னு の左が言われた中身、右が言う側です。" }),
      P({ id: "sp19-02", scene: "ホテル", targetTamil: "ரூம் இருக்கான்னு கேட்டேன்.", structuredRoman: "rūm irukk-ā-ṉṉu kēṭṭ-ēṉ.", pronunciationRoman: "rūm irukkānnu kēṭṭēn.", katakana: "ルーム イルッカーンヌ ケーッテーン。", meaningJa: "部屋があるか尋ねました。", literalJapanese: "部屋＋ある・か・と＋尋ねた・私", note: "はい・いいえの質問をそのまま箱に入れられます。" }),
      P({ id: "sp19-03", scene: "買い物", targetTamil: "டிக்கெட் எவ்வளவுன்னு கேட்டேன்.", structuredRoman: "ṭikkeṭ evvaḷavu-ṉṉu kēṭṭ-ēṉ.", pronunciationRoman: "ṭikkeṭ evvaḷavunnu kēṭṭēn.", katakana: "ティッケトゥ エッヴァラヴンヌ ケーッテーン。", meaningJa: "切符がいくらか尋ねました。", literalJapanese: "切符＋いくら・と＋尋ねた・私", note: "疑問語のある質問も -ன்னு でまとめられます。" }),
      P({ id: "sp19-04", scene: "空港・駅", targetTamil: "பஸ் எங்கே நிக்கும்னு கேட்டேன்.", structuredRoman: "pas eṅkē nikk-um-ṉu kēṭṭ-ēṉ.", pronunciationRoman: "bas engē nikkumnu kēṭṭēn.", katakana: "バス エンゲー ニックムヌ ケーッテーン。", meaningJa: "バスがどこに止まるか尋ねました。", literalJapanese: "バス＋どこ＋止まる・と＋尋ねた・私", note: "きいた内容を後から人に伝えるときの形です。" }),
      P({ id: "sp19-05", scene: "困ったとき", targetTamil: "இங்கே போன் பயன்படுத்தக் கூடாதுன்னு சொன்னாங்க.", structuredRoman: "iṅkē pōṉ payaṉpaṭutta-k kūṭātu-ṉṉu coṉṉ-āṅka.", pronunciationRoman: "ingē pōn payanbaḍuttak kūḍādunnu sonnanga.", katakana: "インゲー ポーン パヤンバドゥッタック クーダードゥンヌ ソンナーンガ。", meaningJa: "ここでは電話を使ってはいけないと言われました。", literalJapanese: "ここ＋電話＋使う＋いけない・と＋言った・複数", note: "禁止の内容もそのまま引用できます。" }),
      P({ id: "sp19-06", scene: "食事", targetTamil: "இந்த ஹோட்டல் நல்லதுன்னு கேள்விப்பட்டேன்.", structuredRoman: "inta hōṭṭal nallatu-ṉṉu kēḷvippaṭṭ-ēṉ.", pronunciationRoman: "inda hōṭṭal nalladunnu kēḷvippaṭṭēn.", katakana: "インダ ホーッタル ナッラドゥンヌ ケールヴィッパッテーン。", meaningJa: "このホテルは良いと聞きました。", literalJapanese: "この＋ホテル＋良いもの・と＋聞いて知った・私", note: "கேள்விப்பட்டேன் は人から聞いて知ったことを示します。" })
    ],
    drills: [
      D({
        id: "dr19-01",
        type: "場面選択",
        scene: "ホテル",
        prompt: "「部屋があるか尋ねました」と伝えます。どれですか。",
        options: [
        { targetTamil: "ரூம் இருக்கான்னு கேட்டேன்.", structuredRoman: "rūm irukk-ā-ṉṉu kēṭṭ-ēṉ.", pronunciationRoman: "rūm irukkānnu kēṭṭēn.", katakana: "ルーム イルッカーンヌ ケーッテーン。", ja: "部屋があるか尋ねました", tag: "正解" },
        { targetTamil: "ரூம் இருக்கா?", structuredRoman: "rūm irukk-ā?", pronunciationRoman: "rūm irukkā?", katakana: "ルーム イルッカー？", ja: "部屋はありますか", tag: "その場の質問であって報告ではない" },
        { targetTamil: "ரூம் இருக்குன்னு சொன்னாங்க.", structuredRoman: "rūm irukku-ṉṉu coṉṉ-āṅka.", pronunciationRoman: "rūm irukkunnu sonnanga.", katakana: "ルーム イルックンヌ ソンナーンガ。", ja: "部屋があると言われました", tag: "尋ねたのではなく言われた" },
        { targetTamil: "எனக்கு ரூம் வேணும்.", structuredRoman: "eṉ-akku rūm vēṇum.", pronunciationRoman: "enakku rūm vēṇum.", katakana: "エナック ルーム ヴェーヌム。", ja: "部屋が欲しいです", tag: "要求の話" }
        ],
        answer: 0,
        feedback: "-ன்னு の右が கேட்டேன் なら「尋ねた」、சொன்னார் なら「言った」です。",
        hint: "自分がした動作が「尋ねる」であるものを選びます。"
      }),
      D({
        id: "dr19-02",
        type: "混同防止",
        scene: "人と話す",
        prompt: "「明日来ると言いました」で、引用の中の「来ます」は誰のことですか。",
        options: [
        { targetTamil: "அவர் நாளைக்கு வர்றேன்னு சொன்னார்.", structuredRoman: "avar nāḷai-kku varṟ-ēṉ-ṉu coṉṉ-ār.", pronunciationRoman: "avar nāḷaikku varrēnnu sonnār.", katakana: "アヴァル ナーライック ヴァッレーンヌ ソンナール。", ja: "その方は「明日来ます」と言いました", tag: "正解" },
        { targetTamil: "அவர் நாளைக்கு வருவார்னு நினைக்கறேன்.", structuredRoman: "avar nāḷai-kku varuv-ār-ṉu niṉaikkaṟ-ēṉ.", pronunciationRoman: "avar nāḷaikku varuvārnu ninaikkarēn.", katakana: "アヴァル ナーライック ヴァルヴァールヌ ニナイッカレーン。", ja: "その方は明日来ると思います", tag: "話し手の推測" },
        { targetTamil: "அவர் வர சொன்னார்.", structuredRoman: "avar vara coṉṉ-ār.", pronunciationRoman: "avar vara sonnār.", katakana: "アヴァル ヴァラ ソンナール。", ja: "その方は来るように言いました", tag: "指示の読み" },
        { targetTamil: "அவர் நாளைக்கு வர மாட்டாங்க.", structuredRoman: "avar nāḷai-kku vara māṭṭ-āṅka.", pronunciationRoman: "avar nāḷaikku vara māṭṭānga.", katakana: "アヴァル ナーライック ヴァラ マーッターンガ。", ja: "その方は明日来ません", tag: "否定" }
        ],
        answer: 0,
        feedback: "வர்றேன் は引用の中の「私」、つまり அவர் 自身です。人称もそのまま箱に入ります。",
        hint: "引用の中の人称は、外の話し手とは別に読みます。"
      }),
      D({
        id: "dr19-03",
        type: "場面選択",
        scene: "困ったとき",
        prompt: "撮影が禁止だと注意されました。それを後で人に伝えるのはどれですか。",
        options: [
        { targetTamil: "இங்கே படம் எடுக்கக் கூடாதுன்னு சொன்னாங்க.", structuredRoman: "iṅkē paṭam eṭukka-k kūṭātu-ṉṉu coṉṉ-āṅka.", pronunciationRoman: "ingē paḍam eḍukkak kūḍādunnu sonnanga.", katakana: "インゲー パダム エドゥッカック クーダードゥンヌ ソンナーンガ。", ja: "ここでは写真を撮ってはいけないと言われました", tag: "正解" },
        { targetTamil: "இங்கே படம் எடுக்கக் கூடாது.", structuredRoman: "iṅkē paṭam eṭukka-k kūṭātu.", pronunciationRoman: "ingē paḍam eḍukkak kūḍādu.", katakana: "インゲー パダム エドゥッカック クーダードゥ。", ja: "ここでは写真を撮ってはいけません", tag: "規則そのもので、伝聞ではない" },
        { targetTamil: "இங்கே படம் எடுக்கலாம்.", structuredRoman: "iṅkē paṭam eṭukka-lām.", pronunciationRoman: "ingē paḍam eḍukkalām.", katakana: "インゲー パダム エドゥッカラーム。", ja: "ここでは写真を撮ってもよいです", tag: "意味が逆" },
        { targetTamil: "இங்கே படம் எடுக்கக் கூடாதுன்னு கேட்டேன்.", structuredRoman: "iṅkē paṭam eṭukka-k kūṭātu-ṉṉu kēṭṭ-ēṉ.", pronunciationRoman: "ingē paḍam eḍukkak kūḍādunnu kēṭṭēn.", katakana: "インゲー パダム エドゥッカック クーダードゥンヌ ケーッテーン。", ja: "撮ってはいけないのかと尋ねました", tag: "尋ねたことになっている" }
        ],
        answer: 0,
        feedback: "禁止の内容を -ன்னு で包み、சொன்னாங்க で「言われた」を示します。",
        hint: "誰かに言われた、という情報が入っているものを選びます。"
      }),
      D({
        id: "dr19-04",
        type: "場面選択",
        scene: "食事",
        prompt: "評判を人から聞いたことを伝えます。どれですか。",
        options: [
        { targetTamil: "இந்த ஹோட்டல் நல்லதுன்னு கேள்விப்பட்டேன்.", structuredRoman: "inta hōṭṭal nallatu-ṉṉu kēḷvippaṭṭ-ēṉ.", pronunciationRoman: "inda hōṭṭal nalladunnu kēḷvippaṭṭēn.", katakana: "インダ ホーッタル ナッラドゥンヌ ケールヴィッパッテーン。", ja: "このホテルは良いと聞きました", tag: "正解" },
        { targetTamil: "இந்த ஹோட்டல் நல்லதுன்னு நினைக்கறேன்.", structuredRoman: "inta hōṭṭal nallatu-ṉṉu niṉaikkaṟ-ēṉ.", pronunciationRoman: "inda hōṭṭal nalladunnu ninaikkarēn.", katakana: "インダ ホーッタル ナッラドゥンヌ ニナイッカレーン。", ja: "このホテルは良いと思います", tag: "自分の判断" },
        { targetTamil: "இந்த ஹோட்டல் நல்லா இருக்கு.", structuredRoman: "inta hōṭṭal nallā irukku.", pronunciationRoman: "inda hōṭṭal nallā irukku.", katakana: "インダ ホーッタル ナッラー イルック。", ja: "このホテルは良いです", tag: "情報源が出ない" },
        { targetTamil: "இந்த ஹோட்டல் நல்லதுன்னு சொன்னேன்.", structuredRoman: "inta hōṭṭal nallatu-ṉṉu coṉṉ-ēṉ.", pronunciationRoman: "inda hōṭṭal nalladunnu sonnēn.", katakana: "インダ ホーッタル ナッラドゥンヌ ソンネーン。", ja: "このホテルは良いと言いました", tag: "自分が言った" }
        ],
        answer: 0,
        feedback: "கேள்விப்பட்டேன் は「人から聞いて知った」。情報源が自分ではないことを示します。",
        hint: "自分の判断か、人から聞いたかで選びます。"
      }),
      D({
        id: "dr19-05",
        type: "空欄補充",
        scene: "空港・駅",
        prompt: "「バスがどこに止まるか尋ねました」。空欄はどれですか。 பஸ் எங்கே ___ கேட்டேன்.",
        options: [
        { targetTamil: "நிக்கும்னு", structuredRoman: "nikk-um-ṉu", pronunciationRoman: "nikkumnu", katakana: "ニックムヌ", ja: "止まるかと", tag: "正解" },
        { targetTamil: "நிக்கும்", structuredRoman: "nikk-um", pronunciationRoman: "nikkum", katakana: "ニックム", ja: "止まります", tag: "引用の印がない" },
        { targetTamil: "நிக்கற", structuredRoman: "nikkaṟa", pronunciationRoman: "nikkara", katakana: "ニッカラ", ja: "止まっている（連体形）", tag: "後ろに名詞が要る" },
        { targetTamil: "இருக்கான்னு", structuredRoman: "irukk-ā-ṉṉu", pronunciationRoman: "irukkānnu", katakana: "イルッカーンヌ", ja: "あるかと", tag: "動作が違う" }
        ],
        answer: 0,
        feedback: "引用の終わりには -ன்னு / -னு を付けます。その右に கேட்டேன் が来ます。",
        hint: "尋ねた中身の終わりを示す印を探します。"
      })
    ]
  });

  attach(20, {
    phrases: [
      P({ id: "sp20-01", scene: "移動・オート", targetTamil: "பஸ் வரலனா நடக்கலாம்.", structuredRoman: "pas vara-la-ṉā naṭakkalām.", pronunciationRoman: "bas varalanā naḍakkalām.", katakana: "バス ヴァララナー ナダッカラーム。", meaningJa: "バスが来なければ歩きましょう。", literalJapanese: "バス＋来なければ＋歩こう", note: "否定条件は「〜なければ」。主文は最後に置きます。" }),
      P({ id: "sp20-02", scene: "空港・駅", targetTamil: "நேரம் இருந்தா கடற்கரைக்கு போகலாம்.", structuredRoman: "nēram irunt-ā kaṭaṟkarai-kku pōka-lām.", pronunciationRoman: "nēram irundā kaḍarkaraikku pōgalām.", katakana: "ネーラム イルンダー カダルカライック ポーガラーム。", meaningJa: "時間があれば海岸へ行きましょう。", literalJapanese: "時間＋あれば＋海岸・到達＋行こう", note: "-ஆ が条件。左が条件、右が主文です。" }),
      P({ id: "sp20-03", scene: "困ったとき", targetTamil: "மழை பெய்தா ஹோட்டல்ல இருக்கலாம்.", structuredRoman: "maḻai peyt-ā hōṭṭal-la irukka-lām.", pronunciationRoman: "maḻai peidā hōṭṭalla irukkalām.", katakana: "マライ ペイダー ホーッタッラ イルッカラーム。", meaningJa: "雨が降ったらホテルにいましょう。", literalJapanese: "雨＋降ったら＋ホテル・場所＋いよう", note: "天気の話は旅程の相談でよく出ます。" }),
      P({ id: "sp20-04", scene: "買い物", targetTamil: "டிக்கெட் வாங்கறதுக்காக கடைக்கு போறேன்.", structuredRoman: "ṭikkeṭ vāṅkaṟa-t-ukkāka kaṭai-kku pōṟ-ēṉ.", pronunciationRoman: "ṭikkeṭ vāngaradukkāga kaḍaikku pōrēn.", katakana: "ティッケトゥ ヴァーンガラドゥッカーガ カダイック ポーレーン。", meaningJa: "切符を買うために店へ行きます。", literalJapanese: "切符＋買うため＋店・到達＋行く・私", note: "-துக்காக は目的。「〜するために」を作ります。" }),
      P({ id: "sp20-05", scene: "人と話す", targetTamil: "நண்பர் வர்றப்போ நாம சாப்பிடலாம்.", structuredRoman: "naṇpar varṟa-ppō nāma cāppiṭa-lām.", pronunciationRoman: "naṇbar varrappō nāma sāppiḍalām.", katakana: "ナンバル ヴァッラッポー ナーマ サーッピダラーム。", meaningJa: "友達が来たら一緒に食べましょう。", literalJapanese: "友達＋来るとき＋私たち＋食べよう", note: "-ப்போ は「〜するとき」。時間の節を作ります。" }),
      P({ id: "sp20-06", scene: "ホテル", targetTamil: "வேலை இருக்கறதால நாளைக்கு வர முடியாது.", structuredRoman: "vēlai irukkaṟa-t-āla nāḷai-kku vara muṭiyātu.", pronunciationRoman: "vēlai irukkaradāla nāḷaikku vara muḍiyādu.", katakana: "ヴェーライ イルッカラダーラ ナーライック ヴァラ ムディヤードゥ。", meaningJa: "仕事があるので明日は来られません。", literalJapanese: "仕事＋あることにより＋明日＋来る＋できない", note: "-தால が理由。断るときに使えます。" })
    ],
    drills: [
      D({
        id: "dr20-01",
        type: "混同防止",
        scene: "移動・オート",
        prompt: "「バスが来なければ」と「バスが来るとき」を分けます。条件を示すのはどれですか。",
        options: [
        { targetTamil: "பஸ் வரலனா நடக்கலாம்.", structuredRoman: "pas vara-la-ṉā naṭakkalām.", pronunciationRoman: "bas varalanā naḍakkalām.", katakana: "バス ヴァララナー ナダッカラーム。", ja: "バスが来なければ歩きましょう", tag: "正解" },
        { targetTamil: "பஸ் வர்றப்போ நடக்கலாம்.", structuredRoman: "pas varṟa-ppō naṭakkalām.", pronunciationRoman: "bas varrappō naḍakkalām.", katakana: "バス ヴァッラッポー ナダッカラーム。", ja: "バスが来るとき歩きましょう", tag: "時間の節" },
        { targetTamil: "பஸ் வர்ற வரை நடக்கலாம்.", structuredRoman: "pas varṟa varai naṭakkalām.", pronunciationRoman: "bas varra varai naḍakkalām.", katakana: "バス ヴァッラ ヴァライ ナダッカラーム。", ja: "バスが来るまで歩きましょう", tag: "終点の指定" },
        { targetTamil: "பஸ் வரலனா நடக்க முடியாது.", structuredRoman: "pas vara-la-ṉā naṭakka muṭiyātu.", pronunciationRoman: "bas varalanā naḍakka muḍiyādu.", katakana: "バス ヴァララナー ナダッカ ムディヤードゥ。", ja: "バスが来なければ歩けません", tag: "主文が違う" }
        ],
        answer: 0,
        feedback: "-னா が条件、-ப்போ が時間、வரை が終点です。左側の形で読み分けます。",
        hint: "成立するかどうかが問題になっているものを選びます。"
      }),
      D({
        id: "dr20-02",
        type: "場面選択",
        scene: "ホテル",
        prompt: "誘いを断ります。「仕事があるので明日は来られません」はどれですか。",
        options: [
        { targetTamil: "வேலை இருக்கறதால நாளைக்கு வர முடியாது.", structuredRoman: "vēlai irukkaṟa-t-āla nāḷai-kku vara muṭiyātu.", pronunciationRoman: "vēlai irukkaradāla nāḷaikku vara muḍiyādu.", katakana: "ヴェーライ イルッカラダーラ ナーライック ヴァラ ムディヤードゥ。", ja: "仕事があるので明日は来られません", tag: "正解" },
        { targetTamil: "வேலை இருந்தா நாளைக்கு வர முடியாது.", structuredRoman: "vēlai irunt-ā nāḷai-kku vara muṭiyātu.", pronunciationRoman: "vēlai irundā nāḷaikku vara muḍiyādu.", katakana: "ヴェーライ イルンダー ナーライック ヴァラ ムディヤードゥ。", ja: "仕事があれば明日は来られません", tag: "条件になっている" },
        { targetTamil: "நாளைக்கு வர மாட்டேன்.", structuredRoman: "nāḷai-kku vara māṭṭ-ēṉ.", pronunciationRoman: "nāḷaikku vara māṭṭēn.", katakana: "ナーライック ヴァラ マーッテーン。", ja: "明日は来ません", tag: "理由が出ない" },
        { targetTamil: "வேலை இருக்கு.", structuredRoman: "vēlai irukku.", pronunciationRoman: "vēlai irukku.", katakana: "ヴェーライ イルック。", ja: "仕事があります", tag: "断りになっていない" }
        ],
        answer: 0,
        feedback: "-தால は理由。すでに成立している事情を述べます。条件の -ஆ とは別です。",
        hint: "仕事があることは、すでに決まっている事実です。"
      }),
      D({
        id: "dr20-03",
        type: "場面選択",
        scene: "買い物",
        prompt: "「切符を買うために店へ行きます」と伝えます。どれですか。",
        options: [
        { targetTamil: "டிக்கெட் வாங்கறதுக்காக கடைக்கு போறேன்.", structuredRoman: "ṭikkeṭ vāṅkaṟa-t-ukkāka kaṭai-kku pōṟ-ēṉ.", pronunciationRoman: "ṭikkeṭ vāngaradukkāga kaḍaikku pōrēn.", katakana: "ティッケトゥ ヴァーンガラドゥッカーガ カダイック ポーレーン。", ja: "切符を買うために店へ行きます", tag: "正解" },
        { targetTamil: "டிக்கெட் வாங்க கடைக்கு போறேன்.", structuredRoman: "ṭikkeṭ vāṅka kaṭai-kku pōṟ-ēṉ.", pronunciationRoman: "ṭikkeṭ vānga kaḍaikku pōrēn.", katakana: "ティッケトゥ ヴァーンガ カダイック ポーレーン。", ja: "切符を買いに店へ行きます", tag: "不定詞でも言えるが目的の強調が弱い" },
        { targetTamil: "டிக்கெட் வாங்கறதுக்கு நேரம் இல்லை.", structuredRoman: "ṭikkeṭ vāṅkaṟa-t-ukku nēram illai.", pronunciationRoman: "ṭikkeṭ vāngaradukku nēram illai.", katakana: "ティッケトゥ ヴァーンガラドゥック ネーラム イッライ。", ja: "切符を買う時間がありません", tag: "意味が違う" },
        { targetTamil: "கடைல டிக்கெட் இருக்கு.", structuredRoman: "kaṭai-la ṭikkeṭ irukku.", pronunciationRoman: "kaḍaila ṭikkeṭ irukku.", katakana: "カダイラ ティッケトゥ イルック。", ja: "店に切符があります", tag: "移動の話ではない" }
        ],
        answer: 0,
        feedback: "-துக்காக は目的をはっきり示します。不定詞より説明的です。",
        hint: "「〜のために」を明示している形を選びます。"
      }),
      D({
        id: "dr20-04",
        type: "混同防止",
        scene: "人と話す",
        prompt: "「友達が来たら」と「友達が来ても」を分けます。主文の結果が変わらないのはどれですか。",
        options: [
        { targetTamil: "மழை பெய்தாலும் நான் போவேன்.", structuredRoman: "maḻai peyt-ālum nāṉ pōv-ēṉ.", pronunciationRoman: "maḻai peidālum nān pōvēn.", katakana: "マライ ペイダールム ナーン ポーヴェーン。", ja: "雨が降っても私は行きます", tag: "正解" },
        { targetTamil: "மழை பெய்தா நாம உள்ளே இருக்கலாம்.", structuredRoman: "maḻai peyt-ā nāma uḷḷē irukka-lām.", pronunciationRoman: "maḻai peidā nāma uḷḷē irukkalām.", katakana: "マライ ペイダー ナーマ ウッレー イルッカラーム。", ja: "雨が降ったら中にいましょう", tag: "条件で結果が変わる" },
        { targetTamil: "நண்பர் வர்றப்போ நாம போகலாம்.", structuredRoman: "naṇpar varṟa-ppō nāma pōka-lām.", pronunciationRoman: "naṇbar varrappō nāma pōgalām.", katakana: "ナンバル ヴァッラッポー ナーマ ポーガラーム。", ja: "友達が来たら行きましょう", tag: "時間の節" },
        { targetTamil: "நேரம் இருந்தா படம் பாக்கலாம்.", structuredRoman: "nēram irunt-ā paṭam pākka-lām.", pronunciationRoman: "nēram irundā paḍam pākkalām.", katakana: "ネーラム イルンダー パダム パーッカラーム。", ja: "時間があれば映画を見ましょう", tag: "条件で結果が変わる" }
        ],
        answer: 0,
        feedback: "-ஆலும் は譲歩。条件が成立してもしなくても主文は変わりません。",
        hint: "「〜ても」に当たる形を探します。"
      }),
      D({
        id: "dr20-05",
        type: "空欄補充",
        scene: "空港・駅",
        prompt: "「時間があれば海岸へ行きましょう」。空欄はどれですか。 நேரம் ___ கடற்கரைக்கு போகலாம்.",
        options: [
        { targetTamil: "இருந்தா", structuredRoman: "irunt-ā", pronunciationRoman: "irundā", katakana: "イルンダー", ja: "あれば（条件）", tag: "正解" },
        { targetTamil: "இருக்கறதால", structuredRoman: "irukkaṟa-t-āla", pronunciationRoman: "irukkaradāla", katakana: "イルッカラダーラ", ja: "あるので（理由）", tag: "すでに成立している読み" },
        { targetTamil: "இருக்கு", structuredRoman: "irukku", pronunciationRoman: "irukku", katakana: "イルック", ja: "あります", tag: "節にならない" },
        { targetTamil: "இல்லை", structuredRoman: "illai", pronunciationRoman: "illai", katakana: "イッライ", ja: "ありません", tag: "意味が逆" }
        ],
        answer: 0,
        feedback: "-ஆ が条件を作ります。まだ分からないことを前提に置く形です。",
        hint: "時間があるかどうかは、まだ決まっていません。"
      })
    ]
  });

  window.TAMIL_PRACTICE_V49 = Object.freeze({
    version: "4.9-preview",
    reviewStatus: "machine-checked",
    scenes: Object.freeze(["空港・駅","移動・オート","買い物","食事","ホテル","道をきく","人と話す","困ったとき"]),
    phraseCount: 120,
    drillCount: 100
  });
})();

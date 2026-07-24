/*
 * PART 0 — quick reference
 *
 * This page sits outside the numbered 38-chapter progression so existing
 * chapter links, saved positions, and completion records do not shift.
 */
(() => {
  "use strict";

  const E = (id, ta, roman, morph, kana, ja, literal, featured = false) => ({
    id, ta, roman, morph, kana, ja, literal, featured
  });

  const vowels = [
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
  ];

  const consonants = [
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
  ];

  const examples = [
    E(
      "0-01",
      "நான் அந்தப் படத்தை பாத்தேன்.",
      "nāṉ anda paḍattai pāttēṉ.",
      "nāṉ anda paḍatt-ai pātt-ēṉ.",
      "ナーン アンダ パダッテ パーッテーン。",
      "私はその映画を見ました。",
      "私＋その映画・特定目的語＋見た・私",
      true
    ),
    E(
      "0-02",
      "நான் ஒரு படம் பாத்தேன்.",
      "nāṉ oru paḍam pāttēṉ.",
      "nāṉ oru paḍam pātt-ēṉ.",
      "ナーン オル パダム パーッテーン。",
      "私は映画を一本見ました。",
      "私＋ある映画・無標識目的語＋見た・私",
      true
    ),
    E(
      "0-03",
      "நான் ரவியை பாத்தேன்.",
      "nāṉ raviyai pāttēṉ.",
      "nāṉ ravi-y-ai pātt-ēṉ.",
      "ナーン ラヴィイェ パーッテーン。",
      "私はラヴィを見かけました。",
      "私＋ラヴィ・人の目的語＋見た・私",
      true
    ),
    E(
      "0-04",
      "நான் படம் பாத்தேன்.",
      "nāṉ paḍam pāttēṉ.",
      "nāṉ paḍam pātt-ēṉ.",
      "ナーン パダム パーッテーン。",
      "私は映画を見ました。",
      "私＋映画・無標識目的語＋見た・私"
    ),
    E(
      "0-05",
      "நான் சென்னைக்கு போறேன்.",
      "nāṉ ceṉṉaikku pōrēṉ.",
      "nāṉ ceṉṉai-kku pō-r-ēṉ.",
      "ナーン チェンネック ポーレーン。",
      "私はチェンナイへ行きます。",
      "私＋チェンナイ・到達点＋行く・私"
    ),
    E(
      "0-06",
      "நான் கடைல காபி வாங்கினேன்.",
      "nāṉ kaḍai-le kāpi vāṅkiṉēn.",
      "nāṉ kaḍai-le kāpi vāṅk-in-ēṉ.",
      "ナーン カデレ カーピ ヴァーンギネーン。",
      "私は店でコーヒーを買いました。",
      "私＋店・場所＋コーヒー＋買った・私"
    ),
    E(
      "0-07",
      "நான் கார்டால பணம் கட்டினேன்.",
      "nāṉ kārḍāle paṇam kaṭṭiṉēn.",
      "nāṉ kārḍ-āle paṇam kaṭṭ-in-ēṉ.",
      "ナーン カールダーレ パナム カッティネーン。",
      "私はカードで支払いました。",
      "私＋カード・手段＋お金＋支払った・私"
    ),
    E(
      "0-08",
      "நான் நண்பரோட போறேன்.",
      "nāṉ naṇbarōḍa pōrēṉ.",
      "nāṉ naṇbar-ōḍa pō-r-ēṉ.",
      "ナーン ナンバローダ ポーレーン。",
      "私は友達と行きます。",
      "私＋友達・同行＋行く・私"
    ),
    E(
      "0-09",
      "எனக்கு தமிழ் தெரியும்.",
      "eṉakku tamiḻ teriyum.",
      "eṉ-akku tamiḻ teri-y-um.",
      "イェナック タミル テリユム。",
      "私はタミル語が分かります。",
      "私に＋タミル語＋分かる"
    ),
    E(
      "0-10",
      "நான் ரவிக்கிட்ட கேட்டேன்.",
      "nāṉ ravikkiṭṭa kēṭṭēṉ.",
      "nāṉ ravi-kiṭṭa kēṭṭ-ēṉ.",
      "ナーン ラヴィキッタ ケーッテーン。",
      "私はラヴィに尋ねました。",
      "私＋ラヴィ・人の所／相手＋尋ねた・私"
    )
  ];

  window.TAMIL_REFERENCE = Object.freeze({
    id: "part-zero-reference",
    number: 0,
    navTitle: "文字と名詞格の早見",
    title: "文字の音と、名詞の役割を一枚でつなぐ",
    tamilTitle: "எழுத்தும் வேற்றுமையும்",
    deck: "格語尾の「書く形・聞こえる形・付けない形」を見分け、12母音×18子音の文字を一音ずつ確認する、いつでも戻れる参照ページです。",
    targets: ["-ai / -e / Ø", "格語尾の役割", "斜格語幹", "12母音×18子音", "一文字音声"],
    heroExample: examples[0],
    readSections: [
      {
        kicker: "NOUN + ROLE",
        heading: "格は、名詞の前ではなく後ろへ付く",
        paragraphs: [
          "英語の in / to / with のような関係を、タミル語では名詞の後ろの語尾で示します。ただし翻訳語を一対一で置き換えるのではなく、<strong>対象・到達点・場所・手段・同行</strong>のどれかを先に決めます。",
          "基本の列は<strong>名詞＋（複数）＋接続に使う語幹＋格語尾</strong>です。複数と格が両方あるなら、複数が先です。語尾を付けると名詞の末尾が変わることもあります。"
        ],
        formula: {
          label: "名詞を伸ばす順序",
          slots: ["名詞", "（複数）", "接続形", "格・後置要素"],
          note: "vīḍu → vīṭṭ-ukku / vīṭṭu-le　家 → 家へ／家で"
        }
      },
      {
        kicker: "CASE MAP",
        heading: "日本語の助詞ではなく、文中の仕事から選ぶ",
        paragraphs: [
          "同じ日本語の「で」でも、場所なら <strong>-le</strong>、道具なら <strong>-āle</strong>、人の所なら <strong>-kiṭṭa</strong> です。反対に、一つの与格 <strong>-(u)kku</strong> が「〜に・〜へ」だけでなく、経験者や必要の持ち主まで表します。"
        ],
        caseMap: {
          rows: [
            { role: "主語・無標識", written: "Ø", spoken: "Ø", kana: "なし", exampleTa: "ரவி வந்தான்", exampleRoman: "ravi vandāṉ", cue: "誰・何が出来事の中心か" },
            { role: "特定目的語", written: "-ஐ / -ai", spoken: "-e", kana: "-エ", exampleTa: "ரவியை பாத்தேன்", exampleRoman: "raviye pāttēn", cue: "人、または特定できる物を直接扱う" },
            { role: "到達点・受け手・経験者", written: "-(உ)க்கு", spoken: "-(u)kku", kana: "-（ウ）ック", exampleTa: "சென்னைக்கு / எனக்கு", exampleRoman: "ceṉṉekku / eṉakku", cue: "どこ・誰へ届くか／誰にそう感じられるか" },
            { role: "場所・乗り物", written: "-இல் / -il", spoken: "-le", kana: "-レ", exampleTa: "கடைல / பஸ்ல", exampleRoman: "kaḍele / pasle", cue: "出来事が起こる場所・乗り物" },
            { role: "起点", written: "-இலிருந்து", spoken: "-lerundu", kana: "-レールンドゥ", exampleTa: "வீட்டுலேருந்து", exampleRoman: "vīṭṭulerundu", cue: "どこから来る・動くか" },
            { role: "道具・原因", written: "-ஆல் / -āl", spoken: "-āle", kana: "-アーレ", exampleTa: "கார்டால", exampleRoman: "kārḍāle", cue: "何を使って／何が原因で" },
            { role: "所有・同行", written: "-உடைய / -ஓடு", spoken: "-ōḍa", kana: "-オーダ", exampleTa: "என்னோட / நண்பரோட", exampleRoman: "eṉṉōḍa / naṇbarōḍa", cue: "誰の物か／誰と一緒か" },
            { role: "人の所・手元・相手", written: "-இடம்", spoken: "-kiṭṭa", kana: "-キッタ", exampleTa: "ரவிக்கிட்ட", exampleRoman: "ravikkiṭṭa", cue: "人の近く・所持・尋ねる相手" }
          ]
        }
      },
      {
        kicker: "-AI / -E / ZERO",
        heading: "「〜を」は、書く形・聞こえる形・付けない形を分ける",
        paragraphs: [
          "まず <strong>-ai と -e は別の格ではありません</strong>。同じ対格の、書記形とこの教材で採る口語音です。たとえば <span class=\"ta-inline\" lang=\"ta\">படத்தை</span> は構造上 <strong>paḍatt-ai</strong>、会話では <strong>paḍatte</strong> と捉えます。",
          "一方、語尾がない <strong>Ø</strong> は発音変化ではありません。タミル語の目的語標示には差があり、人や特定された物は明示し、非人間で不特定・種類として捉える物は無標識にできる、という別の選択です。"
        ],
        objectMap: {
          rows: [
            { signal: "人・人名・代名詞", form: "-ai → 口語 -e", exampleTa: "ரவியை பாத்தேன்", exampleRoman: "raviye pāttēn", meaning: "ラヴィを見た", rule: "基本的に明示する" },
            { signal: "この／その物・既知の物", form: "-ai → 口語 -e", exampleTa: "அந்தப் படத்தை பாத்தேன்", exampleRoman: "anda paḍatte pāttēn", meaning: "その映画を見た", rule: "特定物なので明示する" },
            { signal: "不特定の非人間", form: "Ø も可能", exampleTa: "ஒரு படம் பாத்தேன்", exampleRoman: "oru paḍam pāttēn", meaning: "映画を一本見た", rule: "特定性が低ければ無標識が自然" },
            { signal: "活動・種類としての物", form: "Ø がよく現れる", exampleTa: "படம் பாத்தேன்", exampleRoman: "paḍam pāttēn", meaning: "映画を見た", rule: "「映画を見る」という活動としてまとまる" }
          ]
        },
        note: {
          tone: "pink",
          title: "学習者の安全な初期判断",
          body: "人／代名詞／「この・その」で特定した物には対格を付ける。非人間で「何か一つ」「その種類の活動」と言うときは無標識をまず候補にする。実際の会話では特定性・語順・動詞・方言による揺れがあるので、単なる「をの省略」とは考えません。"
        }
      },
      {
        kicker: "STEM BEFORE SUFFIX",
        heading: "語尾を足す前に、名詞側が接続形へ変わることがある",
        paragraphs: [
          "格語尾は、辞書形へいつもそのまま貼るわけではありません。<strong>maram → maratt-</strong>、<strong>vīḍu → vīṭṭ-</strong> のように、接続用の形（斜格語幹）が現れます。そのため「語末が変わった部分」と「格語尾」を分けて見ます。",
          "複数が入るときは <strong>名詞＋複数＋格</strong>。文を読むときは右端の格を先に見つけ、そこから左へ「何に付いたか」を戻ると、長い名詞句でも迷いにくくなります。"
        ],
        formula: {
          label: "表面形を二段で見る",
          slots: ["மரம் maram", "மரத்த- maratt-", "-ஐ -ai", "மரத்தை maratte"],
          note: "辞書形 → 接続形 → 格 → 口語で聞こえる全体"
        }
      }
    ],
    formConfig: {
      mode: "alphabet",
      title: "12母音 × 18子音のタミル文字表",
      intro: "横の母音と縦の子音が交わると、一つの音節文字になります。母音見出し、子音見出し、各交点のどこを押しても、その文字だけを再生します。",
      vowels,
      consonants,
      aytham: { ta: "ஃ", roman: "āytam", kana: "アーイダム" },
      borrowed: [
        { ta: "ஜ்", roman: "j", note: "ஜா jā など" },
        { ta: "ஷ்", roman: "ṣ / sh", note: "ஷா ṣā など" },
        { ta: "ஸ்", roman: "s", note: "ஸா sā など" },
        { ta: "ஹ்", roman: "h", note: "ஹோ hō など" },
        { ta: "க்ஷ்", roman: "kṣ", note: "க்ஷா kṣā など" }
      ]
    },
    examples,
    quiz: [
      {
        q: "அந்தப் படம்「その映画」を目的語にして「見た」と言うとき、最も安全な形は？",
        options: ["அந்தப் படத்தை பாத்தேன்.", "அந்தப் படம் பாத்தேன்.", "அந்தப் படத்துக்கு பாத்தேன்.", "அந்தப் படத்தால பாத்தேன்."],
        answer: 0,
        feedback: "「その」で特定された直接目的語なので、書記形 -ai（会話ではこの教材の基準で -e）を明示します。",
        tags: ["正解", "特定目的語の無標識", "与格", "手段格"]
      },
      {
        q: "ஒரு படம் பாத்தேன். で படம் が無標識になりやすい理由は？",
        options: ["非人間で、不特定の一本として捉えている", "人名だから", "場所を表すから", "複数だから"],
        answer: 0,
        feedback: "非人間の不特定目的語では対格標示が必須でないことがあります。目的語そのものが消えたわけではありません。",
        tags: ["正解", "人の目的語", "場所格", "数"]
      },
      {
        q: "この教材で、書記形 -ai に対応する中心的な口語音は？",
        options: ["-e", "-le", "-āle", "-kku"],
        answer: 0,
        feedback: "-ai と -e は別の意味ではなく、書記形と口語音の対応です。",
        tags: ["正解", "場所格", "手段格", "与格"]
      },
      {
        q: "日本語の「カードで払う」の「で」に合うのは？",
        options: ["-āle（道具）", "-le（場所）", "-kiṭṭa（人の所）", "-e（目的語）"],
        answer: 0,
        feedback: "カードは行為の道具なので手段 -āle。日本語訳だけでなく役割から選びます。",
        tags: ["正解", "場所", "人の所", "対格"]
      }
    ]
  });
})();

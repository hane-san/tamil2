window.TAMIL_LESSONS = window.TAMIL_LESSONS || [];

window.TAMIL_LESSONS.push({
  id: "lesson01",
  number: 1,
  title: "名詞の形",
  question: "名詞は、複数や場所の語尾が付くとき、どこまで姿を変えるのでしょうか。",
  heroId: "l1-02",
  firstIds: ["l1-01", "l1-02", "l1-03", "l1-04"],
  examples: [
    {
      id: "l1-01",
      tamil: "இது ஒரு வீடு.",
      ttsText: "இது ஒரு வீடு.",
      romanised: "itu oru vīṭu.",
      katakana: "イドゥ　オル　ヴィードゥ。",
      japanese: "これは家です。",
      morphemes: [
        ["itu", "これ", "動作をしない文でも、文の中心を置ける"],
        ["oru", "一つ／ある", "単数の名詞を一つ取り出す"],
        ["vīṭu", "家", "語尾のない基本形"]
      ],
      grammarNote: "単数には専用の単数語尾がありません。基本形のままで、一つの家を表せます。",
      vocabulary: ["வீடு"],
      audioGroup: "core"
    },
    {
      id: "l1-02",
      tamil: "இங்கே இரண்டு வீடுகள் இருக்கு.",
      ttsText: "இங்கே இரண்டு வீடுகள் இருக்கு.",
      romanised: "iṅkē iraṇṭu vīṭu-kaḷ iru-kku.",
      katakana: "インゲー　イランドゥ　ヴィードゥガル　イルック。",
      japanese: "ここには家が二軒あります。",
      morphemes: [
        ["iṅkē", "ここに", "場所"],
        ["iraṇṭu", "二つ", "数"],
        ["vīṭu-kaḷ", "家-複数", "基本形の後ろに複数語尾"],
        ["iru-kku", "ある", "物の存在を表す口語形"]
      ],
      grammarNote: "複数語尾 -kaḷ は名詞のすぐ後ろに付きます。数詞があっても、ここでは複数形を明示しています。",
      vocabulary: ["வீடு", "இங்கே"],
      audioGroup: "core"
    },
    {
      id: "l1-03",
      tamil: "நண்பர்கள் வீட்டில் இருக்காங்க.",
      ttsText: "நண்பர்கள் வீட்டில் இருக்காங்க.",
      romanised: "naṇpar-kaḷ vīṭṭ-il iru-kk-āṅka.",
      katakana: "ナンバルガル　ヴィーッティル　イルッカーンガ。",
      japanese: "友達は家にいます。",
      morphemes: [
        ["naṇpar-kaḷ", "友達-複数", "人を表す複数"],
        ["vīṭṭ-il", "家-場所格", "vīṭu ではなく vīṭṭ- が接続に現れる"],
        ["iru-kk-āṅka", "いる-人の複数／敬意", "人に合わせた口語形"]
      ],
      grammarNote: "வீடு vīṭu は、場所の -il が付くと வீட்டில் vīṭṭ-il になります。辞書形をそのまま並べるだけではありません。",
      vocabulary: ["நண்பர்", "வீடு"],
      audioGroup: "core"
    },
    {
      id: "l1-04",
      tamil: "கடையில் புத்தகங்கள் இருக்கு.",
      ttsText: "கடையில் புத்தகங்கள் இருக்கு.",
      surfaceRomanised: "kaṭaiyil puttakaṅkaḷ irukku.",
      romanised: "kaṭai-y-il puttakam + -kaḷ → puttakaṅkaḷ iru-kku.",
      katakana: "カダイイル　プッタガンガル　イルック。",
      japanese: "店に本があります。",
      morphemes: [
        ["kaṭai-y-il", "店-つなぎ-y-場所格", "母音で終わる語と -il をつなぐ"],
        ["puttakam + -kaḷ", "本＋複数", "実際の表面形は puttakaṅkaḷ"],
        ["iru-kku", "ある", "物の存在"]
      ],
      grammarNote: "புத்தகம் puttakam に -kaḷ が付くと、音がなじんで புத்தகங்கள் puttakaṅkaḷ になります。構造と表面形を分けて見ます。",
      vocabulary: ["கடை", "புத்தகம்"],
      audioGroup: "core"
    },
    {
      id: "l1-05",
      tamil: "இது ஒரு கடை.",
      ttsText: "இது ஒரு கடை.",
      romanised: "itu oru kaṭai.",
      katakana: "イドゥ　オル　カダイ。",
      japanese: "これは店です。",
      grammarNote: "கடை kaṭai は母音で終わる名詞です。基本形は変わりません。",
      vocabulary: ["கடை"],
      audioGroup: "expand"
    },
    {
      id: "l1-06",
      tamil: "இந்தத் தெருவில் கடைகள் இருக்கு.",
      ttsText: "இந்தத் தெருவில் கடைகள் இருக்கு.",
      romanised: "inta-t teru-v-il kaṭai-kaḷ iru-kku.",
      katakana: "インダッ　テルヴィル　カダイガル　イルック。",
      japanese: "この通りには店があります。",
      grammarNote: "கடை + -kaḷ は கடைகள் kaṭaikaḷ。複数語尾が付いても、語の中心は kaṭai と見分けられます。",
      vocabulary: ["கடை", "தெரு"],
      audioGroup: "expand"
    },
    {
      id: "l1-07",
      tamil: "இந்தப் புத்தகம் புதுசு.",
      ttsText: "இந்தப் புத்தகம் புதுசு.",
      romanised: "inta-p puttakam putucu.",
      katakana: "インダップ　プッタガム　プドゥス。",
      japanese: "この本は新しいです。",
      grammarNote: "単数の புத்தகம் puttakam は基本形のままです。புதுசு putucu は「新しい」の口語形です。",
      vocabulary: ["புத்தகம்"],
      audioGroup: "expand"
    },
    {
      id: "l1-08",
      tamil: "மேசையில் புத்தகங்கள் இருக்கு.",
      ttsText: "மேசையில் புத்தகங்கள் இருக்கு.",
      surfaceRomanised: "mēcaiyil puttakaṅkaḷ irukku.",
      romanised: "mēcai-y-il puttakam + -kaḷ → puttakaṅkaḷ iru-kku.",
      katakana: "メーサイイル　プッタガンガル　イルック。",
      japanese: "机の上に本があります。",
      grammarNote: "மேசை mēcai の後ろでも、-il の前に y が現れます。",
      vocabulary: ["மேசை", "புத்தகம்"],
      audioGroup: "expand"
    },
    {
      id: "l1-09",
      tamil: "குழந்தைகள் வீட்டில் இருக்காங்க.",
      ttsText: "குழந்தைகள் வீட்டில் இருக்காங்க.",
      romanised: "kuḻantai-kaḷ vīṭṭ-il iru-kk-āṅka.",
      katakana: "クランダイガル　ヴィーッティル　イルッカーンガ。",
      japanese: "子どもたちは家にいます。",
      grammarNote: "人を表す複数なので、存在の形も இருக்காங்க irukkāṅka になります。",
      vocabulary: ["குழந்தை", "வீடு"],
      audioGroup: "expand"
    },
    {
      id: "l1-10",
      tamil: "வெளியில் ஒரு கார் இருக்கு.",
      ttsText: "வெளியில் ஒரு கார் இருக்கு.",
      romanised: "veḷi-y-il oru kār iru-kku.",
      katakana: "ヴェリイル　オル　カール　イルック。",
      japanese: "外に車が一台あります。",
      grammarNote: "கார் kār は借用語ですが、タミル語の語尾を後ろに付けられます。",
      vocabulary: ["கார்", "வெளி"],
      audioGroup: "expand"
    },
    {
      id: "l1-11",
      tamil: "இந்தப் படத்தில் இரண்டு கார்கள் இருக்கு.",
      ttsText: "இந்தப் படத்தில் இரண்டு கார்கள் இருக்கு.",
      romanised: "inta-p paṭatt-il iraṇṭu kār-kaḷ iru-kku.",
      katakana: "インダップ　パダッティル　イランドゥ　カールガル　イルック。",
      japanese: "この映画には車が二台出てきます。",
      literalJapanese: "この映画の中に、車が二台あります。",
      grammarNote: "படம் paṭam は、-il の前で படத்து- paṭatt(u)- という接続形を使い、表面形は படத்தில் paṭattil になります。",
      vocabulary: ["படம்", "கார்"],
      audioGroup: "expand"
    },
    {
      id: "l1-12",
      tamil: "வீட்டில் தண்ணீர் இருக்கு.",
      ttsText: "வீட்டில் தண்ணீர் இருக்கு.",
      romanised: "vīṭṭ-il taṇṇīr iru-kku.",
      katakana: "ヴィーッティル　タンニール　イルック。",
      japanese: "家に水があります。",
      grammarNote: "தண்ணீர் taṇṇīr は量として扱うことが多く、普通は複数語尾を付けません。",
      vocabulary: ["வீடு", "தண்ணீர்"],
      audioGroup: "expand"
    },
    {
      id: "l1-13",
      tamil: "உணவகத்தில் சாப்பாடு இருக்கு.",
      ttsText: "உணவகத்தில் சாப்பாடு இருக்கு.",
      romanised: "uṇavakatt-il cāppāṭu iru-kku.",
      katakana: "ウナヴァガッティル　サーッパードゥ　イルック。",
      japanese: "食堂に食事があります。",
      grammarNote: "உணவகம் uṇavakam も -am 型で、உணவகத்து- uṇavakatt(u)- を経て உணவகத்தில் になります。",
      vocabulary: ["உணவகம்", "சாப்பாடு"],
      audioGroup: "expand"
    },
    {
      id: "l1-14",
      tamil: "மேசையில் ஒரு போன் இருக்கு.",
      ttsText: "மேசையில் ஒரு போன் இருக்கு.",
      romanised: "mēcai-y-il oru pōṉ iru-kku.",
      katakana: "メーサイイル　オル　ポーン　イルック。",
      japanese: "机の上に電話があります。",
      grammarNote: "போன் pōṉ も借用語です。基本形の後ろに格語尾を続けられます。",
      vocabulary: ["மேசை", "போன்"],
      audioGroup: "expand"
    },
    {
      id: "l1-15",
      tamil: "காரில் நண்பர்கள் இருக்காங்க.",
      ttsText: "காரில் நண்பர்கள் இருக்காங்க.",
      romanised: "kār-il naṇpar-kaḷ iru-kk-āṅka.",
      katakana: "カーリル　ナンバルガル　イルッカーンガ。",
      japanese: "車の中に友達がいます。",
      grammarNote: "கார் kār は接続時にも大きく変わらず、காரில் kāril になります。",
      vocabulary: ["கார்", "நண்பர்"],
      audioGroup: "expand"
    },
    {
      id: "l1-r1",
      tamil: "இது ஒரு வீடு.",
      ttsText: "இது ஒரு வீடு.",
      romanised: "itu oru vīṭu.",
      katakana: "イドゥ　オル　ヴィードゥ。",
      japanese: "これは家です。",
      audioGroup: "reading"
    },
    {
      id: "l1-r2",
      tamil: "வீட்டில் இரண்டு அறைகள் இருக்கு.",
      ttsText: "வீட்டில் இரண்டு அறைகள் இருக்கு.",
      romanised: "vīṭṭ-il iraṇṭu aṟai-kaḷ iru-kku.",
      katakana: "ヴィーッティル　イランドゥ　アライガル　イルック。",
      japanese: "家には部屋が二つあります。",
      audioGroup: "reading"
    },
    {
      id: "l1-r3",
      tamil: "மேசையில் புத்தகங்கள் இருக்கு.",
      ttsText: "மேசையில் புத்தகங்கள் இருக்கு.",
      surfaceRomanised: "mēcaiyil puttakaṅkaḷ irukku.",
      romanised: "mēcai-y-il puttakam + -kaḷ → puttakaṅkaḷ iru-kku.",
      katakana: "メーサイイル　プッタガンガル　イルック。",
      japanese: "机の上に本があります。",
      audioGroup: "reading"
    },
    {
      id: "l1-r4",
      tamil: "நண்பர்கள் வீட்டில் இருக்காங்க.",
      ttsText: "நண்பர்கள் வீட்டில் இருக்காங்க.",
      romanised: "naṇpar-kaḷ vīṭṭ-il iru-kk-āṅka.",
      katakana: "ナンバルガル　ヴィーッティル　イルッカーンガ。",
      japanese: "友達は家にいます。",
      audioGroup: "reading"
    }
  ],
  explanation: [
    {
      title: "一つなら、まず基本形のまま",
      paragraphs: [
        "タミル語の名詞は、単数だからといって専用の語尾を付けません。வீடு vīṭu「家」、கடை kaṭai「店」、படம் paṭam「映画／絵」が、そのまま一つのものを表します。",
        "ここでいう基本形は、辞書で見出しになる形であり、文の中心として語尾なしで置ける形です。"
      ],
      patterns: [
        { tamil: "வீடு", roman: "vīṭu", japanese: "家（単数・基本形）" },
        { tamil: "கடை", roman: "kaṭai", japanese: "店（単数・基本形）" },
        { tamil: "படம்", roman: "paṭam", japanese: "映画／絵（単数・基本形）" }
      ]
    },
    {
      title: "複数は、名詞の後ろに -கள்",
      paragraphs: [
        "複数を明示するときは、名詞の後ろに -கள் -kaḷ を置きます。名詞→複数→格語尾、という順序は後の課でも変わりません。",
        "ただし、実際の音と文字は境目でなじみます。புத்தகம் + கள் は、単純に文字を横へ並べた形ではなく புத்தகங்கள் puttakaṅkaḷ になります。構造を知るための分解と、実際に現れる形を同じものとして扱わないことが大切です。"
      ],
      patterns: [
        { tamil: "வீடு → வீடுகள்", roman: "vīṭu → vīṭu-kaḷ", japanese: "家 → 家々" },
        { tamil: "கடை → கடைகள்", roman: "kaṭai → kaṭai-kaḷ", japanese: "店 → 店々" },
        { tamil: "புத்தகம் → புத்தகங்கள்", roman: "puttakam + -kaḷ → puttakaṅkaḷ", japanese: "本 → 本（複数）", note: "鼻音が後続音に同化する" },
        { tamil: "நண்பர் → நண்பர்கள்", roman: "naṇpar → naṇpar-kaḷ", japanese: "友達 → 友達（複数）", note: "人を表す語では -ர்／-ர்கள் が敬意とも関わる" }
      ]
    },
    {
      title: "語尾を受け取るための接続形",
      paragraphs: [
        "場所の -இல் -il、方向や相手の -க்கு -kku などを後ろに付けるとき、名詞は語尾を受け取りやすい形を使います。この形を斜格語幹、ここでは分かりやすく「接続形」と呼びます。",
        "多くの名詞は基本形とほぼ同じです。それでも、வீடு vīṭu や படம் paṭam のように、接続部分がはっきり変わる語があります。接続形は意味を増やす独立語ではなく、後ろの語尾を安定してつなぐ土台です。"
      ],
      patterns: [
        { tamil: "வீடு → வீட்டு- → வீட்டில்", roman: "vīṭu → vīṭṭ(u)- + -il → vīṭṭ-il", japanese: "家 → 家の接続形 → 家で／家に" },
        { tamil: "படம் → படத்து- → படத்தில்", roman: "paṭam → paṭatt(u)- + -il → paṭatt-il", japanese: "映画 → 映画の接続形 → 映画の中で" },
        { tamil: "கடை → கடை- → கடையில்", roman: "kaṭai + -y- + -il → kaṭai-y-il", japanese: "店 → 店で／店に", note: "母音同士を y でつなぐ" },
        { tamil: "கார் → கார்- → காரில்", roman: "kār + -il → kār-il", japanese: "車 → 車で／車の中に" }
      ]
    },
    {
      title: "複数が先、格語尾が後",
      paragraphs: [
        "一つの名詞に「複数」と「場所」の両方を入れるときは、まず何個あるかを決め、その外側に文中の役割を付けます。だから வீடு-கள்-இல் vīṭu-kaḷ-il「家-複数-場所」の順です。",
        "この順序が見えると、長い語でも後ろからほどけます。最後の -il が場所、その一つ前の -kaḷ が複数、残った vīṭu が語彙の中心です。"
      ],
      patterns: [
        { tamil: "வீடுகளில்", roman: "vīṭu-kaḷ-il", japanese: "家々の中で／家々に" },
        { tamil: "கார்களை", roman: "kār-kaḷ-ai", japanese: "車々を" },
        { tamil: "நண்பர்களுக்கு", roman: "naṇpar-kaḷ-ukku", japanese: "友達たちに" }
      ]
    },
    {
      title: "人と物では、文の反応も少し違う",
      paragraphs: [
        "物があるときは இருக்கு irukku、人がいるときは இருக்காங்க irukkāṅka が自然です。名詞の形だけでなく、文末も人か物かを受け取っています。",
        "この違いは、第2課の対格、第14課の人称・数・性の語尾へつながります。いまは「人の複数は、文の別の部分にも影響しやすい」と押さえれば十分です。"
      ],
      patterns: [
        { tamil: "வீடுகள் இருக்கு.", roman: "vīṭu-kaḷ iru-kku.", japanese: "家があります。" },
        { tamil: "நண்பர்கள் இருக்காங்க.", roman: "naṇpar-kaḷ iru-kk-āṅka.", japanese: "友達がいます。" }
      ]
    }
  ],
  comparisons: [
    {
      title: "基本形と接続形",
      rows: [
        { tamil: "வீடு", roman: "vīṭu", japanese: "家", note: "語尾なしの基本形" },
        { tamil: "வீட்டில்", roman: "vīṭṭ-il", japanese: "家で／家に", note: "接続形 vīṭṭ- に場所の -il" }
      ]
    },
    {
      title: "単数と複数",
      rows: [
        { tamil: "ஒரு கார்", roman: "oru kār", japanese: "一台の車", note: "単数は専用語尾なし" },
        { tamil: "கார்கள்", roman: "kār-kaḷ", japanese: "車（複数）", note: "-kaḷ を追加" }
      ]
    },
    {
      title: "一つの語に二つの情報",
      rows: [
        { tamil: "வீடுகள்", roman: "vīṭu-kaḷ", japanese: "家々", note: "語彙＋複数" },
        { tamil: "வீடுகளில்", roman: "vīṭu-kaḷ-il", japanese: "家々に／家々の中で", note: "語彙＋複数＋場所" }
      ]
    },
    {
      title: "物と人",
      rows: [
        { tamil: "புத்தகங்கள் இருக்கு.", roman: "puttakaṅkaḷ iru-kku.", japanese: "本があります。", note: "物の存在" },
        { tamil: "குழந்தைகள் இருக்காங்க.", roman: "kuḻantai-kaḷ iru-kk-āṅka.", japanese: "子どもたちがいます。", note: "人の複数に合わせる" }
      ]
    }
  ],
  expandIds: ["l1-05", "l1-06", "l1-07", "l1-08", "l1-09", "l1-10", "l1-11", "l1-12", "l1-13", "l1-14", "l1-15"],
  readingIds: ["l1-r1", "l1-r2", "l1-r3", "l1-r4"],
  quizzes: [
    {
      prompt: "வீடு vīṭu「家」を複数にする形はどれですか。",
      options: ["வீட்டில்", "வீடுகள்", "வீட்டை"],
      answer: 1,
      explanation: "வீடு + -கள் → வீடுகள்。வீட்டில் は「家に／家で」です。"
    },
    {
      prompt: "வீட்டில் vīṭṭ-il を、形の順番どおりに分けるとどれですか。",
      options: ["வீடு-複数", "வீட்டு-接続形＋場所の -இல்", "家＋人の語尾"],
      answer: 1,
      explanation: "வீடு は語尾の前で வீட்டு- となり、-இல் が付きます。"
    },
    {
      prompt: "வீடுகளில் vīṭu-kaḷ-il の情報の順番はどれですか。",
      options: ["家＋場所＋複数", "家＋複数＋場所", "複数＋家＋場所"],
      answer: 1,
      explanation: "名詞→複数→格語尾です。後ろから -il、-kaḷ、vīṭu とほどけます。"
    },
    {
      prompt: "人の複数がいる文として自然なのはどれですか。",
      options: ["நண்பர்கள் இருக்காங்க.", "நண்பர்கள் இருக்கு.", "நண்பர் வீடுகள்."],
      answer: 0,
      explanation: "標準的な口語では、人の複数に இருக்காங்க irukkāṅka を合わせます。"
    },
    {
      prompt: "普通は複数語尾を付けず、量として扱いやすい語はどれですか。",
      options: ["தண்ணீர்（水）", "கார்（車）", "புத்தகம்（本）"],
      answer: 0,
      explanation: "水は数える個体より量として扱うため、通常は -kaḷ を付けません。"
    }
  ],
  map: [
    ["基本形", "語尾なしで単数・文の中心になれる"],
    ["複数", "名詞の後ろに -kaḷ。表面で音が変わる場合がある"],
    ["接続形", "格語尾を受け取るための土台。vīṭu→vīṭṭ-、paṭam→paṭatt-"],
    ["語尾の順", "名詞→複数→格"],
    ["次の課へ", "その格が、中心・対象・相手をどう分けるかを見る"]
  ],
  vocabulary: [
    ["வீடு", "vīṭu", "家"],
    ["கடை", "kaṭai", "店"],
    ["படம்", "paṭam", "映画／絵"],
    ["புத்தகம்", "puttakam", "本"],
    ["நண்பர்", "naṇpar", "友達"],
    ["குழந்தை", "kuḻantai", "子ども"],
    ["கார்", "kār", "車"],
    ["தண்ணீர்", "taṇṇīr", "水"],
    ["சாப்பாடு", "cāppāṭu", "食事"],
    ["போன்", "pōṉ", "電話"],
    ["மேசை", "mēcai", "机"],
    ["உணவகம்", "uṇavakam", "食堂／レストラン"],
    ["அறை", "aṟai", "部屋"]
  ]
});

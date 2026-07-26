(() => {
  "use strict";

  const { entry: E, confidence: C } = window.TAMIL_V30;
  const SOURCES = [
  "TAMIL-INTEGRATED-v2.0-rc.1 §§20-22,31-32",
  "CORE-CURRICULUM-v1.1 §§3,5",
  "TAMIL-GRAMMAR-GARDEN Lesson 16",
  "SCHIFFMAN-SPOKEN-TAMIL: adjectives, demonstratives, numerals and comparison"
];
  const make = input => E({ ...input, sourceRefs: SOURCES, confidence: input.confidence ?? C("B", "B", "C", "B") });

  const examples = [
  {
    "id": "l16-01",
    "targetTamil": "அந்த ரெண்டு புதிய தமிழ் படம் நல்லா இருக்கு.",
    "structuredRoman": "anta reṇṭu putiya tamiḻ paṭam nallā irukku.",
    "pronunciationRoman": "anda reṇḍu pudiya tamiḻ paḍam nallā irukku.",
    "katakana": "アンダ レンドゥ プディヤ タミル パダム ナッラー イルック。",
    "meaningJa": "あの二本の新しいタミル映画は良いです。",
    "literalJapanese": "あの＋二つ＋新しい＋タミル＋映画＋良く＋あります",
    "morphemes": [
      {
        "surfaceTamil": "அந்த",
        "gloss": "あの"
      },
      {
        "surfaceTamil": "ரெண்டு",
        "gloss": "二つ"
      },
      {
        "surfaceTamil": "புதிய",
        "gloss": "新しい"
      },
      {
        "surfaceTamil": "தமிழ்",
        "gloss": "タミル"
      },
      {
        "surfaceTamil": "படம்",
        "gloss": "映画・中心名詞"
      },
      {
        "surfaceTamil": "நல்லா இருக்கு",
        "gloss": "良いです"
      }
    ],
    "grammarNote": "指示・数・性質・種類を中心名詞 படம் の前へ置きます。無生物は数詞が複数性を示すと名詞を無標のまま置けます。",
    "vocabulary": [
      "அந்த",
      "ரெண்டு",
      "புதிய",
      "தமிழ்",
      "படம்",
      "நல்லா இருக்கு"
    ],
    "audioGroup": "lesson16-core",
    "featured": true
  },
  {
    "id": "l16-02",
    "targetTamil": "என்னோட சின்ன பை இங்கே இருக்கு.",
    "structuredRoman": "eṉṉ-ōṭa ciṉṉa pai iṅkē irukku.",
    "pronunciationRoman": "ennōḍa sinna pai ingē irukku.",
    "katakana": "エンノーダ シンナ パイ インゲー イルック。",
    "meaningJa": "私の小さい鞄はここにあります。",
    "literalJapanese": "私の＋小さい＋鞄＋ここに＋あります",
    "morphemes": [
      {
        "surfaceTamil": "என்னோட",
        "gloss": "私の"
      },
      {
        "surfaceTamil": "சின்ன",
        "gloss": "小さい"
      },
      {
        "surfaceTamil": "பை",
        "gloss": "鞄・中心名詞"
      },
      {
        "surfaceTamil": "இங்கே",
        "gloss": "ここに"
      },
      {
        "surfaceTamil": "இருக்கு",
        "gloss": "あります"
      }
    ],
    "grammarNote": "所有者と性質は中心名詞 பை の前に置き、場所は述語側で示します。",
    "vocabulary": [
      "என்னோட",
      "சின்ன",
      "பை",
      "இங்கே",
      "இருக்கு"
    ],
    "audioGroup": "lesson16-core",
    "featured": true
  },
  {
    "id": "l16-03",
    "targetTamil": "இந்த படம் அந்த படத்தைவிட நல்லா இருக்கு.",
    "structuredRoman": "inta paṭam anta paṭatt-ai-viṭa nallā irukku.",
    "pronunciationRoman": "inda paḍam anda paḍatteviḍa nallā irukku.",
    "katakana": "インダ パダム アンダ パダッテヴィダ ナッラー イルック。",
    "meaningJa": "この映画はあの映画より良いです。",
    "literalJapanese": "この映画＋あの映画を＋より＋良く＋あります",
    "morphemes": [
      {
        "surfaceTamil": "இந்த படம்",
        "gloss": "この映画"
      },
      {
        "surfaceTamil": "அந்த படத்தைவிட",
        "gloss": "あの映画より"
      },
      {
        "surfaceTamil": "நல்லா இருக்கு",
        "gloss": "良いです"
      }
    ],
    "grammarNote": "比較の基準を対格＋விட で置き、性質は நல்லா இருக்கு のように述べます。",
    "vocabulary": [
      "இந்த படம்",
      "அந்த படத்தைவிட",
      "நல்லா இருக்கு"
    ],
    "audioGroup": "lesson16-core",
    "featured": true
  },
  {
    "id": "l16-04",
    "targetTamil": "இது ஒரு சின்ன கடை.",
    "structuredRoman": "itu oru ciṉṉa kaṭai.",
    "pronunciationRoman": "idu oru sinna kaḍai.",
    "katakana": "イドゥ オル シンナ カダイ。",
    "meaningJa": "これは小さな店です。",
    "literalJapanese": "これ＋一つの／ある＋小さい＋店",
    "morphemes": [
      {
        "surfaceTamil": "இது",
        "gloss": "これ"
      },
      {
        "surfaceTamil": "ஒரு",
        "gloss": "一つの／ある"
      },
      {
        "surfaceTamil": "சின்ன",
        "gloss": "小さい"
      },
      {
        "surfaceTamil": "கடை",
        "gloss": "店・中心名詞"
      }
    ],
    "grammarNote": "ஒரு と சின்ன を中心名詞 கடை の前へ置きます。現在の名詞述語なので万能な be 動詞を追加しません。",
    "vocabulary": [
      "இது",
      "ஒரு",
      "சின்ன",
      "கடை"
    ],
    "audioGroup": "lesson16-bank",
    "featured": false
  },
  {
    "id": "l16-05",
    "targetTamil": "அந்த பெரிய கட்டிடம் ஒரு ஹோட்டல்.",
    "structuredRoman": "anta periya kaṭṭiṭam oru hōṭṭal.",
    "pronunciationRoman": "anda periya kaṭṭiḍam oru hōṭṭal.",
    "katakana": "アンダ ペリヤ カッティダム オル ホーッタル。",
    "meaningJa": "あの大きな建物はホテルです。",
    "literalJapanese": "あの＋大きい＋建物＋一つのホテル",
    "morphemes": [
      {
        "surfaceTamil": "அந்த",
        "gloss": "あの"
      },
      {
        "surfaceTamil": "பெரிய",
        "gloss": "大きい"
      },
      {
        "surfaceTamil": "கட்டிடம்",
        "gloss": "建物・中心名詞"
      },
      {
        "surfaceTamil": "ஒரு ஹோட்டல்",
        "gloss": "ホテル"
      }
    ],
    "grammarNote": "指示語と基本形容詞 பெரிய は名詞の前に置き、性・数による一致変化をしません。",
    "vocabulary": [
      "அந்த",
      "பெரிய",
      "கட்டிடம்",
      "ஒரு ஹோட்டல்"
    ],
    "audioGroup": "lesson16-bank",
    "featured": false
  },
  {
    "id": "l16-06",
    "targetTamil": "கொஞ்சம் சூடான காபி வேணும்.",
    "structuredRoman": "koñcam cūṭ-āṉa kāpi vēṇum.",
    "pronunciationRoman": "konjam sūḍāna kāpi vēṇum.",
    "katakana": "コンジャム スーダーナ カーピ ヴェーヌム。",
    "meaningJa": "少し熱いコーヒーが欲しいです。",
    "literalJapanese": "少し＋熱い＋コーヒー＋必要です",
    "morphemes": [
      {
        "surfaceTamil": "கொஞ்சம்",
        "gloss": "少し"
      },
      {
        "surfaceTamil": "சூடான",
        "gloss": "熱い／温かい"
      },
      {
        "surfaceTamil": "காபி",
        "gloss": "コーヒー・中心名詞"
      },
      {
        "surfaceTamil": "வேணும்",
        "gloss": "欲しい／必要"
      }
    ],
    "grammarNote": "சூடான は性質を名詞 காபி の前へつなぐ -ஆன 系の形です。すべての形容詞へ機械的に付けません。",
    "vocabulary": [
      "கொஞ்சம்",
      "சூடான",
      "காபி",
      "வேணும்"
    ],
    "audioGroup": "lesson16-bank",
    "featured": false,
    "counterparts": [
      {
        "primaryRegister": "LT-WR",
        "targetTamil": "கொஞ்சம் சூடான காபி வேண்டும்.",
        "note": "現代文語・保守的表記"
      }
    ]
  },
  {
    "id": "l16-07",
    "targetTamil": "முதல் படம் ரொம்ப நல்லா இருக்கு.",
    "structuredRoman": "mutal paṭam rompa nallā irukku.",
    "pronunciationRoman": "mudal paḍam romba nallā irukku.",
    "katakana": "ムダル パダム ロンバ ナッラー イルック。",
    "meaningJa": "最初の映画はとても良いです。",
    "literalJapanese": "最初の＋映画＋とても＋良く＋あります",
    "morphemes": [
      {
        "surfaceTamil": "முதல்",
        "gloss": "最初の"
      },
      {
        "surfaceTamil": "படம்",
        "gloss": "映画"
      },
      {
        "surfaceTamil": "ரொம்ப",
        "gloss": "とても"
      },
      {
        "surfaceTamil": "நல்லா இருக்கு",
        "gloss": "良いです"
      }
    ],
    "grammarNote": "順序を表す முதல் を名詞の前へ置きます。ரொம்ப は会話で頻出する程度表現です。",
    "vocabulary": [
      "முதல்",
      "படம்",
      "ரொம்ப",
      "நல்லா இருக்கு"
    ],
    "audioGroup": "lesson16-bank",
    "featured": false
  },
  {
    "id": "l16-08",
    "targetTamil": "ரெண்டாவது படம் கொஞ்சம் நீளமா இருக்கு.",
    "structuredRoman": "reṇṭ-āvatu paṭam koñcam nīḷam-ā irukku.",
    "pronunciationRoman": "reṇḍāvadu paḍam konjam nīḷamā irukku.",
    "katakana": "レンダーヴァドゥ パダム コンジャム ニーラマー イルック。",
    "meaningJa": "二本目の映画は少し長いです。",
    "literalJapanese": "第二の＋映画＋少し＋長く＋あります",
    "morphemes": [
      {
        "surfaceTamil": "ரெண்டாவது",
        "gloss": "第二の／二本目の"
      },
      {
        "surfaceTamil": "படம்",
        "gloss": "映画"
      },
      {
        "surfaceTamil": "கொஞ்சம்",
        "gloss": "少し"
      },
      {
        "surfaceTamil": "நீளமா இருக்கு",
        "gloss": "長いです"
      }
    ],
    "grammarNote": "序数 ரெண்டாவது は中心名詞 படம் の前、述語の性質は நீளமா இருக்கு と別の形で置きます。",
    "vocabulary": [
      "ரெண்டாவது",
      "படம்",
      "கொஞ்சம்",
      "நீளமா இருக்கு"
    ],
    "audioGroup": "lesson16-bank",
    "featured": false,
    "counterparts": [
      {
        "primaryRegister": "LT-WR",
        "targetTamil": "இரண்டாவது படம் கொஞ்சம் நீளமாக இருக்கிறது.",
        "note": "現代文語・保守的表記"
      }
    ]
  },
  {
    "id": "l16-09",
    "targetTamil": "இந்த ஹோட்டல் அந்த ஹோட்டலைவிட மலிவா இருக்கு.",
    "structuredRoman": "inta hōṭṭal anta hōṭṭal-ai-viṭa maliv-ā irukku.",
    "pronunciationRoman": "inda hōṭṭal anda hōṭṭaleviḍa malivā irukku.",
    "katakana": "インダ ホーッタル アンダ ホーッタレヴィダ マリヴァー イルック。",
    "meaningJa": "このホテルはあのホテルより安いです。",
    "literalJapanese": "このホテル＋あのホテルを＋より＋安く＋あります",
    "morphemes": [
      {
        "surfaceTamil": "இந்த ஹோட்டல்",
        "gloss": "このホテル"
      },
      {
        "surfaceTamil": "அந்த ஹோட்டலைவிட",
        "gloss": "あのホテルより"
      },
      {
        "surfaceTamil": "மலிவா இருக்கு",
        "gloss": "安いです"
      }
    ],
    "grammarNote": "比較される基準 அந்த ஹோட்டல் に対格＋விட を付け、後ろで性質を述べます。",
    "vocabulary": [
      "இந்த ஹோட்டல்",
      "அந்த ஹோட்டலைவிட",
      "மலிவா இருக்கு"
    ],
    "audioGroup": "lesson16-bank",
    "featured": false
  },
  {
    "id": "l16-10",
    "targetTamil": "இதைவிட நல்ல ரூம் இருக்கா?",
    "structuredRoman": "it-ai-viṭa nalla rūm irukk-ā?",
    "pronunciationRoman": "ideviḍa nalla rūm irukkā?",
    "katakana": "イデヴィダ ナッラ ルーム イルッカー？",
    "meaningJa": "これより良い部屋はありますか。",
    "literalJapanese": "これを＋より＋良い＋部屋＋ありますか",
    "morphemes": [
      {
        "surfaceTamil": "இதைவிட",
        "gloss": "これより"
      },
      {
        "surfaceTamil": "நல்ல",
        "gloss": "良い"
      },
      {
        "surfaceTamil": "ரூம்",
        "gloss": "部屋・中心名詞"
      },
      {
        "surfaceTamil": "இருக்கா",
        "gloss": "ありますか"
      }
    ],
    "grammarNote": "比較句 இதைவிட を先に置き、நல்ல ரூம் という名詞句の存在を極性疑問で尋ねます。",
    "vocabulary": [
      "இதைவிட",
      "நல்ல",
      "ரூம்",
      "இருக்கா"
    ],
    "audioGroup": "lesson16-bank",
    "featured": false
  },
  {
    "id": "l16-11",
    "targetTamil": "இந்த வழி அந்த வழியைவிட சுலபம்.",
    "structuredRoman": "inta vaḻi anta vaḻi-y-ai-viṭa culapam.",
    "pronunciationRoman": "inda vaḻi anda vaḻiyeviḍa sulabam.",
    "katakana": "インダ ヴァリ アンダ ヴァリエヴィダ スラバム。",
    "meaningJa": "この道はあの道より簡単です。",
    "literalJapanese": "この道＋あの道を＋より＋簡単",
    "morphemes": [
      {
        "surfaceTamil": "இந்த வழி",
        "gloss": "この道"
      },
      {
        "surfaceTamil": "அந்த வழியைவிட",
        "gloss": "あの道より"
      },
      {
        "surfaceTamil": "சுலபம்",
        "gloss": "簡単です"
      }
    ],
    "grammarNote": "母音終わり வழி の対格では接続要素 y が現れます。比較の基準全体を一つの句として読みます。",
    "vocabulary": [
      "இந்த வழி",
      "அந்த வழியைவிட",
      "சுலபம்"
    ],
    "audioGroup": "lesson16-bank",
    "featured": false
  },
  {
    "id": "l16-12",
    "targetTamil": "ரெண்டு டிக்கெட் வேணும்.",
    "structuredRoman": "reṇṭu ṭikkeṭ vēṇum.",
    "pronunciationRoman": "reṇḍu ṭikkeṭ vēṇum.",
    "katakana": "レンドゥ ティッケトゥ ヴェーヌム。",
    "meaningJa": "切符が二枚必要です。",
    "literalJapanese": "二つ＋切符＋必要です",
    "morphemes": [
      {
        "surfaceTamil": "ரெண்டு",
        "gloss": "二つ"
      },
      {
        "surfaceTamil": "டிக்கெட்",
        "gloss": "切符"
      },
      {
        "surfaceTamil": "வேணும்",
        "gloss": "必要です／欲しいです"
      }
    ],
    "grammarNote": "無生物名詞は数詞が複数性を明示すると、複数接尾辞を付けない形が自然に現れます。",
    "vocabulary": [
      "ரெண்டு",
      "டிக்கெட்",
      "வேணும்"
    ],
    "audioGroup": "lesson16-bank",
    "featured": false,
    "counterparts": [
      {
        "primaryRegister": "LT-WR",
        "targetTamil": "இரண்டு டிக்கெட்டுகள் வேண்டும்.",
        "note": "複数を明示した現代文語・保守的表記"
      }
    ]
  }
].map(make);

  const patterns = [
  {
    "id": "l16-form-stack",
    "targetTamil": "அந்த ரெண்டு புதிய தமிழ் படம்",
    "structuredRoman": "anta reṇṭu putiya tamiḻ paṭam",
    "pronunciationRoman": "anda reṇḍu pudiya tamiḻ paḍam",
    "katakana": "アンダ レンドゥ プディヤ タミル パダム",
    "meaningJa": "あの二本の新しいタミル映画",
    "literalJapanese": "指示＋数＋性質＋種類＋中心名詞",
    "grammarNote": "中心名詞は最後。前の情報を後ろからまとめて読む。",
    "vocabulary": [
      "அந்த ரெண்டு புதிய தமிழ் படம்"
    ],
    "audioGroup": "l16-form-forms",
    "kind": "名詞句の順序",
    "group": "名詞句",
    "note": "中心名詞は最後。前の情報を後ろからまとめて読む。"
  },
  {
    "id": "l16-form-possessive",
    "targetTamil": "என்னோட சின்ன பை",
    "structuredRoman": "eṉṉ-ōṭa ciṉṉa pai",
    "pronunciationRoman": "ennōḍa sinna pai",
    "katakana": "エンノーダ シンナ パイ",
    "meaningJa": "私の小さい鞄",
    "literalJapanese": "所有＋性質＋中心名詞",
    "grammarNote": "所有者と形容詞を中心名詞の前へ置く。",
    "vocabulary": [
      "என்னோட சின்ன பை"
    ],
    "audioGroup": "l16-form-forms",
    "kind": "所有＋性質",
    "group": "名詞句",
    "note": "所有者と形容詞を中心名詞の前へ置く。"
  },
  {
    "id": "l16-form-two-tickets",
    "targetTamil": "ரெண்டு டிக்கெட்",
    "structuredRoman": "reṇṭu ṭikkeṭ",
    "pronunciationRoman": "reṇḍu ṭikkeṭ",
    "katakana": "レンドゥ ティッケトゥ",
    "meaningJa": "切符二枚",
    "literalJapanese": "数＋無生物名詞",
    "grammarNote": "数詞が複数性を担うと名詞を無標のまま置ける。",
    "vocabulary": [
      "ரெண்டு டிக்கெட்"
    ],
    "audioGroup": "l16-form-two-forms",
    "kind": "数詞＋名詞",
    "group": "数・順序",
    "note": "数詞が複数性を担うと名詞を無標のまま置ける。"
  },
  {
    "id": "l16-form-good-film",
    "targetTamil": "நல்ல படம்",
    "structuredRoman": "nalla paṭam",
    "pronunciationRoman": "nalla paḍam",
    "katakana": "ナッラ パダム",
    "meaningJa": "良い映画",
    "literalJapanese": "基本形容詞＋名詞",
    "grammarNote": "நல்ல は性・数へ一致せず、そのまま名詞の前へ置く。",
    "vocabulary": [
      "நல்ல படம்"
    ],
    "audioGroup": "l16-form-good-forms",
    "kind": "基本形容詞",
    "group": "形容",
    "note": "நல்ல は性・数へ一致せず、そのまま名詞の前へ置く。"
  },
  {
    "id": "l16-form-hot-coffee",
    "targetTamil": "சூடான காபி",
    "structuredRoman": "cūṭ-āṉa kāpi",
    "pronunciationRoman": "sūḍāna kāpi",
    "katakana": "スーダーナ カーピ",
    "meaningJa": "熱い／温かいコーヒー",
    "literalJapanese": "性質＋-ஆன＋名詞",
    "grammarNote": "-ஆன 系で性質を名詞修飾へつなぐ。全語へ自動付加しない。",
    "vocabulary": [
      "சூடான காபி"
    ],
    "audioGroup": "l16-form-hot-forms",
    "kind": "派生形容",
    "group": "形容",
    "note": "-ஆன 系で性質を名詞修飾へつなぐ。全語へ自動付加しない。"
  },
  {
    "id": "l16-form-first-film",
    "targetTamil": "முதல் படம்",
    "structuredRoman": "mutal paṭam",
    "pronunciationRoman": "mudal paḍam",
    "katakana": "ムダル パダム",
    "meaningJa": "最初の映画",
    "literalJapanese": "第一＋名詞",
    "grammarNote": "முதல் を中心名詞の前へ置く。",
    "vocabulary": [
      "முதல் படம்"
    ],
    "audioGroup": "l16-form-first-forms",
    "kind": "第一",
    "group": "数・順序",
    "note": "முதல் を中心名詞の前へ置く。"
  },
  {
    "id": "l16-form-second-film",
    "targetTamil": "ரெண்டாவது படம்",
    "structuredRoman": "reṇṭ-āvatu paṭam",
    "pronunciationRoman": "reṇḍāvadu paḍam",
    "katakana": "レンダーヴァドゥ パダム",
    "meaningJa": "二本目の映画",
    "literalJapanese": "二＋序数＋名詞",
    "grammarNote": "ரெண்டாவது は口語の序数。中心名詞の前へ置く。",
    "vocabulary": [
      "ரெண்டாவது படம்"
    ],
    "audioGroup": "l16-form-second-forms",
    "kind": "序数",
    "group": "数・順序",
    "note": "ரெண்டாவது は口語の序数。中心名詞の前へ置く。"
  },
  {
    "id": "l16-form-good-predicate",
    "targetTamil": "நல்லா இருக்கு",
    "structuredRoman": "nall-ā irukku",
    "pronunciationRoman": "nallā irukku",
    "katakana": "ナッラー イルック",
    "meaningJa": "良いです",
    "literalJapanese": "良く＋あります",
    "grammarNote": "名詞前の நல்ல と、述語の நல்லா இருக்கு を混同しない。",
    "vocabulary": [
      "நல்லா இருக்கு"
    ],
    "audioGroup": "l16-form-good-forms",
    "kind": "性質述語",
    "group": "形容",
    "note": "名詞前の நல்ல と、述語の நல்லா இருக்கு を混同しない。"
  },
  {
    "id": "l16-form-compare",
    "targetTamil": "படத்தைவிட",
    "structuredRoman": "paṭatt-ai-viṭa",
    "pronunciationRoman": "paḍatteviḍa",
    "katakana": "パダッテヴィダ",
    "meaningJa": "映画より",
    "literalJapanese": "映画・対格＋より",
    "grammarNote": "比較の基準を対格＋விட で示す。",
    "vocabulary": [
      "படத்தைவிட"
    ],
    "audioGroup": "l16-form-forms",
    "kind": "比較基準",
    "group": "比較",
    "note": "比較の基準を対格＋விட で示す。"
  },
  {
    "id": "l16-form-better-room",
    "targetTamil": "இதைவிட நல்ல ரூம்",
    "structuredRoman": "it-ai-viṭa nalla rūm",
    "pronunciationRoman": "ideviḍa nalla rūm",
    "katakana": "イデヴィダ ナッラ ルーム",
    "meaningJa": "これより良い部屋",
    "literalJapanese": "これ・対格＋より＋良い＋部屋",
    "grammarNote": "比較句の後ろに求める名詞句を置く。",
    "vocabulary": [
      "இதைவிட நல்ல ரூம்"
    ],
    "audioGroup": "l16-form-better-forms",
    "kind": "比較＋名詞句",
    "group": "比較",
    "note": "比較句の後ろに求める名詞句を置く。"
  }
].map(make);

  const lesson = {
  "id": "lesson16-v38",
  "number": 16,
  "navTitle": "名詞句・形容・数・比較",
  "title": "中心名詞の前へ情報を積み、比較の基準を விட で置く",
  "tamilTitle": "அந்த ரெண்டு புதிய படம் · படத்தைவிட நல்லா",
  "deck": "指示・所有・数・順序・性質を中心名詞の前へ並べ、無生物の数詞句、形容詞と性質述語、対格＋விடの比較を分けます。",
  "targets": [
    "名詞句の語順",
    "基本形容詞と-ஆன",
    "数詞と無生物名詞",
    "序数",
    "対格＋விடの比較"
  ],
  "criticalPoints": [
    "名詞句は <span class=\"ta-inline\" lang=\"ta\">அந்த＋ரெண்டு＋புதிய＋தமிழ்＋படம்</span> <span class=\"roman-inline\">(anta reṇṭu putiya tamiḻ paṭam)</span> のように、指示・数・性質・種類を中心名詞の前へ置く。",
    "無生物では <span class=\"ta-inline\" lang=\"ta\">ரெண்டு டிக்கெட்</span> <span class=\"roman-inline\">(reṇṭu ṭikkeṭ)</span> のように、数詞が複数性を示せば名詞を無標のまま置ける。形容詞は性・数に一致しない。",
    "比較は基準を <span class=\"ta-inline\" lang=\"ta\">படத்தைவிட</span> <span class=\"roman-inline\">(paṭatt-ai-viṭa)</span> と対格＋விடで置き、比較級専用の形容詞語尾を作らない。"
  ],
  "readSections": [
    {
      "kicker": "まず結論",
      "heading": "中心名詞を最後に待ち、前の情報を一つずつ重ねる",
      "takeaway": "<span class=\"ta-inline\" lang=\"ta\">அந்த ரெண்டு புதிய தமிழ் படம்</span> <span class=\"roman-inline\">(anta reṇṭu putiya tamiḻ paṭam)</span> は「あの＋二本＋新しい＋タミル＋映画」です。中心は最後の படம்。",
      "paragraphs": [
        "日本語の「あの二本の新しいタミル映画」と同じく、説明を名詞の前へ重ねます。<span class=\"ta-inline\" lang=\"ta\">அந்த</span> <span class=\"roman-inline\">(anta)</span>、<span class=\"ta-inline\" lang=\"ta\">ரெண்டு</span> <span class=\"roman-inline\">(reṇṭu)</span>、<span class=\"ta-inline\" lang=\"ta\">புதிய</span> <span class=\"roman-inline\">(putiya)</span> を読んでも、最後の中心名詞まで意味を確定しません。",
        "所有者も前です。<span class=\"ta-inline\" lang=\"ta\">என்னோட சின்ன பை</span> <span class=\"roman-inline\">(eṉṉ-ōṭa ciṉṉa pai)</span> は「私の＋小さい＋鞄」。複数や格が必要なら、前の修飾語でなく中心名詞側へ関係します。"
      ]
    },
    {
      "kicker": "形を読む",
      "heading": "基本形容詞、-ஆன系、数詞・序数を別の部品として置く",
      "takeaway": "<span class=\"ta-inline\" lang=\"ta\">நல்ல படம்</span> <span class=\"roman-inline\">(nalla paṭam)</span>、<span class=\"ta-inline\" lang=\"ta\">சூடான காபி</span> <span class=\"roman-inline\">(cūṭ-āṉa kāpi)</span>、<span class=\"ta-inline\" lang=\"ta\">ரெண்டாவது படம்</span> <span class=\"roman-inline\">(reṇṭ-āvatu paṭam)</span> を完成形として区別します。",
      "paragraphs": [
        "<span class=\"ta-inline\" lang=\"ta\">நல்ல / பெரிய / சின்ன / புதிய</span> <span class=\"roman-inline\">(nalla / periya / ciṉṉa / putiya)</span> はそのまま名詞の前へ置く基本形容詞です。名詞の性・数へ一致して語尾を変えません。",
        "<span class=\"ta-inline\" lang=\"ta\">சூடான</span> <span class=\"roman-inline\">(cūṭ-āṉa)</span> のような -ஆன 系は性質を名詞修飾へつなぎます。ただし日本語の形容詞をすべて -ஆன へ変換しません。順序は <span class=\"ta-inline\" lang=\"ta\">முதல் / ரெண்டாவது</span> <span class=\"roman-inline\">(mutal / reṇṭ-āvatu)</span> を名詞の前へ置きます。"
      ]
    },
    {
      "kicker": "なぜ？",
      "heading": "数詞が複数性を示すと、無生物名詞は複数語尾なしでも読める",
      "takeaway": "<span class=\"ta-inline\" lang=\"ta\">ரெண்டு டிக்கெட்</span> <span class=\"roman-inline\">(reṇṭu ṭikkeṭ)</span> では ரெண்டு が二枚だと示すため、டிக்கெட் を複数形へ自動変換しません。",
      "paragraphs": [
        "第1課の <span class=\"ta-inline\" lang=\"ta\">ரெண்டு புத்தகம்</span> <span class=\"roman-inline\">(reṇṭu puttakam)</span> と同じです。無生物では数詞が複数性を十分に示すと、名詞が単数形のまま自然に置かれます。",
        "これは「複数接尾辞が存在しない」という意味ではありません。語・強調・格・レジスターで複数形も現れます。初級では、数詞を見たら必ず -கள் を追加する誤生成を止めます。"
      ]
    },
    {
      "kicker": "実際に使う",
      "heading": "買い物・ホテル・映画で、名詞句と性質述語を行き来する",
      "takeaway": "名詞前では <span class=\"ta-inline\" lang=\"ta\">நல்ல ரூம்</span> <span class=\"roman-inline\">(nalla rūm)</span>、性質を述べるときは <span class=\"ta-inline\" lang=\"ta\">ரூம் நல்லா இருக்கு</span> <span class=\"roman-inline\">(rūm nall-ā irukku)</span> と形が変わります。",
      "paragraphs": [
        "<span class=\"ta-inline\" lang=\"ta\">இதைவிட நல்ல ரூம் இருக்கா</span> <span class=\"roman-inline\">(it-ai-viṭa nalla rūm irukk-ā)</span> は「これより良い部屋はありますか」。比較句・名詞句・存在疑問を組み合わせたホテル表現です。",
        "映画の感想では <span class=\"ta-inline\" lang=\"ta\">முதல் படம் ரொம்ப நல்லா இருக்கு</span> <span class=\"roman-inline\">(mutal paṭam rompa nallā irukku)</span>、<span class=\"ta-inline\" lang=\"ta\">ரெண்டாவது படம் கொஞ்சம் நீளமா இருக்கு</span> <span class=\"roman-inline\">(reṇṭ-āvatu paṭam koñcam nīḷam-ā irukku)</span> のように順序と性質を組み合わせます。"
      ]
    },
    {
      "kicker": "混ぜない",
      "heading": "名詞前の形容詞、述語の-ஆ、比較の対格＋விடを一つにしない",
      "takeaway": "<span class=\"ta-inline\" lang=\"ta\">நல்ல படம்</span> <span class=\"roman-inline\">(nalla paṭam)</span> は名詞句、<span class=\"ta-inline\" lang=\"ta\">படம் நல்லா இருக்கு</span> <span class=\"roman-inline\">(paṭam nall-ā irukku)</span> は性質述語、<span class=\"ta-inline\" lang=\"ta\">படத்தைவிட</span> <span class=\"roman-inline\">(paṭatt-ai-viṭa)</span> は比較基準です。",
      "paragraphs": [
        "<span class=\"ta-inline\" lang=\"ta\">நல்ல</span> <span class=\"roman-inline\">(nalla)</span> と <span class=\"ta-inline\" lang=\"ta\">நல்லா</span> <span class=\"roman-inline\">(nall-ā)</span> は置き場所が違います。前者は後ろの名詞を待ち、後者は <span class=\"ta-inline\" lang=\"ta\">இருக்கு</span> <span class=\"roman-inline\">(irukku)</span> と性質を述べます。",
        "比較では基準側へ対格＋<span class=\"ta-inline\" lang=\"ta\">விட</span> <span class=\"roman-inline\">(viṭa)</span> を置きます。英語の -er のような比較級接辞を形容詞へ発明せず、<span class=\"ta-inline\" lang=\"ta\">அந்த படத்தைவிட</span> <span class=\"roman-inline\">(anta paṭatt-ai-viṭa)</span> を一まとまりで読みます。"
      ],
      "note": {
        "tone": "pink",
        "title": "この課の最重要ミス",
        "body": "数詞の後ろへ複数接尾辞を必ず足さない。形容詞を性・数に一致させない。<span class=\"ta-inline\" lang=\"ta\">விட</span> <span class=\"roman-inline\">(viṭa)</span> の前の対格を落とす単純規則も作らない。"
      }
    },
    {
      "kicker": "3文で復習",
      "heading": "小さな店を見て、ホテルを比べ、より良い部屋を尋ねる",
      "takeaway": "<span class=\"ta-inline\" lang=\"ta\">ஒரு சின்ன கடை</span> <span class=\"roman-inline\">(oru ciṉṉa kaṭai)</span>、<span class=\"ta-inline\" lang=\"ta\">ஹோட்டலைவிட மலிவா</span> <span class=\"roman-inline\">(hōṭṭal-ai-viṭa maliv-ā)</span>、<span class=\"ta-inline\" lang=\"ta\">இதைவிட நல்ல ரூம்</span> <span class=\"roman-inline\">(it-ai-viṭa nalla rūm)</span> を順に読みます。",
      "paragraphs": [
        "<span class=\"ta-inline\" lang=\"ta\">இது ஒரு சின்ன கடை.</span> <span class=\"roman-inline\">(itu oru ciṉṉa kaṭai.)</span><br><span class=\"reading-ja\">これは小さな店です。</span><br><br><span class=\"ta-inline\" lang=\"ta\">இந்த ஹோட்டல் அந்த ஹோட்டலைவிட மலிவா இருக்கு.</span> <span class=\"roman-inline\">(inta hōṭṭal anta hōṭṭal-ai-viṭa maliv-ā irukku.)</span><br><span class=\"reading-ja\">このホテルはあのホテルより安いです。</span><br><br><span class=\"ta-inline\" lang=\"ta\">இதைவிட நல்ல ரூம் இருக்கா?</span> <span class=\"roman-inline\">(it-ai-viṭa nalla rūm irukk-ā?)</span><br><span class=\"reading-ja\">これより良い部屋はありますか。</span>"
      ],
      "miniReading": {
        "intro": "名詞句、比較述語、比較＋存在疑問を一つずつ読みます。",
        "ids": [
          "l16-04",
          "l16-09",
          "l16-10"
        ]
      }
    }
  ],
  "formConfig": {
    "mode": "grammar",
    "title": "中心名詞・数・性質・比較基準を一枚で照合する",
    "intro": "名詞句の前置修飾、無生物の数詞句、基本形容詞と-ஆன系、名詞前と述語の形、対格＋விடを別々に並べます。",
    "checkpoint": "中心名詞を最後に見つけ、数詞後の無標名詞、நல்ல／நல்லா、対格＋விடを説明できれば合格です。",
    "patterns": Object.freeze(patterns)
  },
  "quiz": [
    {
      "focus": "形態分解",
      "q": "<span class=\"ta-inline\" lang=\"ta\">அந்த ரெண்டு புதிய தமிழ் படம்</span> <span class=\"roman-inline\">(anta reṇṭu putiya tamiḻ paṭam)</span> の並びとして正しい説明は？",
      "options": [
        "指示＋数＋性質＋種類＋中心名詞",
        "中心名詞＋格＋数＋指示",
        "性質＋述語＋時制＋人称",
        "比較基準＋禁止＋疑問"
      ],
      "answer": 0,
      "feedback": "最後の <span class=\"ta-inline\" lang=\"ta\">படம்</span> <span class=\"roman-inline\">(paṭam)</span> が中心で、前の語が順に詳しくします。",
      "rule": "長い名詞句は最後の中心名詞を待つ。",
      "tags": [
        "正解",
        "語順逆転",
        "動詞構造との混同",
        "比較・モダリティとの混同"
      ]
    },
    {
      "focus": "機能選択",
      "q": "TN-SSTで「切符が二枚必要です」と言う中心例は？",
      "options": [
        "<span class=\"quiz-option-ta\" lang=\"ta\">ரெண்டு டிக்கெட் வேணும்.</span><span class=\"quiz-option-roman\">reṇṭu ṭikkeṭ vēṇum.</span><span class=\"quiz-option-ja\">切符が二枚必要です</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">ஒரு டிக்கெட் வேணும்.</span><span class=\"quiz-option-roman\">oru ṭikkeṭ vēṇum.</span><span class=\"quiz-option-ja\">切符が一枚必要です</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">டிக்கெட் இருக்கா?</span><span class=\"quiz-option-roman\">ṭikkeṭ irukk-ā?</span><span class=\"quiz-option-ja\">切符はありますか</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">டிக்கெட் எவ்வளவு?</span><span class=\"quiz-option-roman\">ṭikkeṭ evvaḷavu?</span><span class=\"quiz-option-ja\">切符はいくらですか</span>"
      ],
      "answer": 0,
      "feedback": "無生物では <span class=\"ta-inline\" lang=\"ta\">ரெண்டு</span> <span class=\"roman-inline\">(reṇṭu)</span> が複数性を示し、<span class=\"ta-inline\" lang=\"ta\">டிக்கெட்</span> <span class=\"roman-inline\">(ṭikkeṭ)</span> を無標で置けます。",
      "rule": "数詞がある無生物へ複数語尾を自動追加しない。",
      "tags": [
        "正解",
        "数の誤り",
        "存在疑問",
        "値段疑問"
      ]
    },
    {
      "focus": "実用場面",
      "q": "ホテルで「これより良い部屋はありますか」と尋ねる文は？",
      "options": [
        "<span class=\"quiz-option-ta\" lang=\"ta\">இதைவிட நல்ல ரூம் இருக்கா?</span><span class=\"quiz-option-roman\">it-ai-viṭa nalla rūm irukk-ā?</span><span class=\"quiz-option-ja\">これより良い部屋はありますか</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">இந்த ரூம் நல்லா இருக்கு.</span><span class=\"quiz-option-roman\">inta rūm nall-ā irukku.</span><span class=\"quiz-option-ja\">この部屋は良いです</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">ரெண்டு டிக்கெட் வேணும்.</span><span class=\"quiz-option-roman\">reṇṭu ṭikkeṭ vēṇum.</span><span class=\"quiz-option-ja\">切符が二枚必要です</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">கொஞ்சம் சூடான காபி வேணும்.</span><span class=\"quiz-option-roman\">koñcam cūṭ-āṉa kāpi vēṇum.</span><span class=\"quiz-option-ja\">少し熱いコーヒーが欲しいです</span>"
      ],
      "answer": 0,
      "feedback": "<span class=\"ta-inline\" lang=\"ta\">இதைவிட</span> <span class=\"roman-inline\">(it-ai-viṭa)</span> が比較基準、<span class=\"ta-inline\" lang=\"ta\">நல்ல ரூம்</span> <span class=\"roman-inline\">(nalla rūm)</span> が求める名詞句です。",
      "rule": "比較句＋求める名詞句＋存在疑問を組み合わせる。",
      "tags": [
        "正解",
        "単純評価",
        "数量要求",
        "飲食要求"
      ]
    },
    {
      "focus": "混同防止",
      "q": "<span class=\"ta-inline\" lang=\"ta\">நல்ல படம்</span> <span class=\"roman-inline\">(nalla paṭam)</span> と <span class=\"ta-inline\" lang=\"ta\">படம் நல்லா இருக்கு</span> <span class=\"roman-inline\">(paṭam nall-ā irukku)</span> の違いは？",
      "options": [
        "前者は名詞を修飾し、後者は映画の性質を述べる",
        "前者は過去、後者は未来",
        "前者は複数、後者は単数",
        "前者は禁止、後者は許可"
      ],
      "answer": 0,
      "feedback": "<span class=\"ta-inline\" lang=\"ta\">நல்ல</span> <span class=\"roman-inline\">(nalla)</span> は後ろの名詞を待ち、<span class=\"ta-inline\" lang=\"ta\">நல்லா இருக்கு</span> <span class=\"roman-inline\">(nall-ā irukku)</span> は性質を述べます。",
      "rule": "名詞前の形と性質述語の形を置き場所で分ける。",
      "tags": [
        "正解",
        "時制との混同",
        "数との混同",
        "モダリティとの混同"
      ]
    },
    {
      "focus": "総合復習",
      "q": "「この映画はあの映画より良いです」のTN-SST中心例は？",
      "options": [
        "<span class=\"quiz-option-ta\" lang=\"ta\">இந்த படம் அந்த படத்தைவிட நல்லா இருக்கு.</span><span class=\"quiz-option-roman\">inta paṭam anta paṭatt-ai-viṭa nall-ā irukku.</span><span class=\"quiz-option-ja\">この映画はあの映画より良いです</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">அந்த ரெண்டு புதிய தமிழ் படம் நல்லா இருக்கு.</span><span class=\"quiz-option-roman\">anta reṇṭu putiya tamiḻ paṭam nallā irukku.</span><span class=\"quiz-option-ja\">あの二本の新しいタミル映画は良いです</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">முதல் படம் ரொம்ப நல்லா இருக்கு.</span><span class=\"quiz-option-roman\">mutal paṭam rompa nallā irukku.</span><span class=\"quiz-option-ja\">最初の映画はとても良いです</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">ரெண்டாவது படம் கொஞ்சம் நீளமா இருக்கு.</span><span class=\"quiz-option-roman\">reṇṭ-āvatu paṭam koñcam nīḷam-ā irukku.</span><span class=\"quiz-option-ja\">二本目の映画は少し長いです</span>"
      ],
      "answer": 0,
      "feedback": "基準の <span class=\"ta-inline\" lang=\"ta\">அந்த படம்</span> <span class=\"roman-inline\">(anta paṭam)</span> を対格＋<span class=\"ta-inline\" lang=\"ta\">விட</span> <span class=\"roman-inline\">(viṭa)</span> で置きます。",
      "rule": "比較は基準＋対格＋விட、その後ろで性質を述べる。",
      "tags": [
        "正解",
        "名詞句のみ",
        "程度評価のみ",
        "序数評価のみ"
      ]
    }
  ],
  "heroExample": examples[0],
  "examples": Object.freeze(examples)
};

  lesson.targets = Object.freeze(lesson.targets);
  lesson.criticalPoints = Object.freeze(lesson.criticalPoints);
  lesson.readSections = Object.freeze(lesson.readSections);
  lesson.formConfig = Object.freeze(lesson.formConfig);
  lesson.quiz = Object.freeze(lesson.quiz);
  window.TAMIL_LESSONS_V30 = window.TAMIL_LESSONS_V30 || [];
  window.TAMIL_LESSONS_V30.push(Object.freeze(lesson));
})();

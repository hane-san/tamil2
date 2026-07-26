(() => {
  "use strict";

  const { entry: E, confidence: C } = window.TAMIL_V30;
  const SOURCES = [
  "TAMIL-INTEGRATED-v2.0-rc.1 §§23-25,31-32",
  "PREDICATE-ENGINE-v1.1 §§1.2,3,4",
  "TAMIL-GRAMMAR-GARDEN Lesson 15",
  "SCHIFFMAN-SPOKEN-TAMIL: imperatives, hortatives and interrogatives"
];
  const make = input => E({ ...input, sourceRefs: SOURCES, confidence: input.confidence ?? C("B", "B", "C", "B") });

  const examples = [
  {
    "id": "l15-01",
    "targetTamil": "கொஞ்சம் சொல்லுங்க.",
    "structuredRoman": "koñcam collu-ṅka.",
    "pronunciationRoman": "konjam sollunga.",
    "katakana": "コンジャム ソッルンガ。",
    "meaningJa": "少し教えてください。",
    "literalJapanese": "少し＋言ってください",
    "morphemes": [
      {
        "surfaceTamil": "கொஞ்சம்",
        "gloss": "少し・依頼を和らげる"
      },
      {
        "surfaceTamil": "சொல்லுங்க",
        "gloss": "言ってください／教えてください"
      }
    ],
    "grammarNote": "கொஞ்சம் で依頼を和らげ、-ங்க を含む口語の丁寧・複数命令形 சொல்லுங்க を使います。",
    "vocabulary": [
      "கொஞ்சம்",
      "சொல்லுங்க"
    ],
    "audioGroup": "lesson15-core",
    "featured": true,
    "counterparts": [
      {
        "primaryRegister": "LT-WR",
        "targetTamil": "கொஞ்சம் சொல்லுங்கள்.",
        "note": "現代文語・保守的表記"
      }
    ]
  },
  {
    "id": "l15-02",
    "targetTamil": "நாம போகலாமா?",
    "structuredRoman": "nāma pōka-lām-ā?",
    "pronunciationRoman": "nāma pōgalāmā?",
    "katakana": "ナーマ ポーガラーマー？",
    "meaningJa": "私たち、行きましょうか。",
    "literalJapanese": "聞き手を含む私たち＋行く＋勧誘＋疑問",
    "morphemes": [
      {
        "surfaceTamil": "நாம",
        "gloss": "私たち・聞き手を含む"
      },
      {
        "surfaceTamil": "போக",
        "gloss": "行く・不定詞"
      },
      {
        "surfaceTamil": "லாம்",
        "gloss": "〜しよう／してもよい"
      },
      {
        "surfaceTamil": "ஆ",
        "gloss": "疑問"
      }
    ],
    "grammarNote": "நாம が聞き手を含み、-லாம் が勧誘、文末 -ஆ が提案を尋ねる形にします。",
    "vocabulary": [
      "நாம",
      "போகலாமா"
    ],
    "audioGroup": "lesson15-core",
    "featured": true
  },
  {
    "id": "l15-03",
    "targetTamil": "டிக்கெட் இருக்கா?",
    "structuredRoman": "ṭikkeṭ irukk-ā?",
    "pronunciationRoman": "ṭikkeṭ irukkā?",
    "katakana": "ティッケトゥ イルッカー？",
    "meaningJa": "切符はありますか。",
    "literalJapanese": "切符＋あります＋疑問",
    "morphemes": [
      {
        "surfaceTamil": "டிக்கெட்",
        "gloss": "切符"
      },
      {
        "surfaceTamil": "இருக்கா",
        "gloss": "ありますか"
      }
    ],
    "grammarNote": "肯定文 டிக்கெட் இருக்கு の骨格を保ち、述語末の -ஆ ではい・いいえ疑問を作ります。",
    "vocabulary": [
      "டிக்கெட்",
      "இருக்கா"
    ],
    "audioGroup": "lesson15-core",
    "featured": true
  },
  {
    "id": "l15-04",
    "targetTamil": "இங்கே வா.",
    "structuredRoman": "iṅkē vā.",
    "pronunciationRoman": "ingē vā.",
    "katakana": "インゲー ヴァー。",
    "meaningJa": "ここへ来て。",
    "literalJapanese": "ここへ＋来て",
    "morphemes": [
      {
        "surfaceTamil": "இங்கே",
        "gloss": "ここへ／ここに"
      },
      {
        "surfaceTamil": "வா",
        "gloss": "来て・親しい単数命令"
      }
    ],
    "grammarNote": "வா は親しい一人へ直接渡す命令形です。旅行で初対面の相手への無標の初手にはしません。",
    "vocabulary": [
      "இங்கே",
      "வா"
    ],
    "audioGroup": "lesson15-bank",
    "featured": false,
    "styleTags": [
      "familiar"
    ],
    "confidence": {
      "form": "B",
      "morphology": "B",
      "pronunciation": "C",
      "registerNaturalness": "C"
    }
  },
  {
    "id": "l15-05",
    "targetTamil": "இங்கே வாங்க.",
    "structuredRoman": "iṅkē vāṅka.",
    "pronunciationRoman": "ingē vānga.",
    "katakana": "インゲー ヴァーンガ。",
    "meaningJa": "こちらへ来てください／どうぞ。",
    "literalJapanese": "こちらへ＋来てください",
    "morphemes": [
      {
        "surfaceTamil": "இங்கே",
        "gloss": "こちらへ"
      },
      {
        "surfaceTamil": "வாங்க",
        "gloss": "来てください／どうぞ"
      }
    ],
    "grammarNote": "வாங்க は口語の丁寧・複数命令で、来訪を促す「どうぞ」にも広がります。",
    "vocabulary": [
      "இங்கே",
      "வாங்க"
    ],
    "audioGroup": "lesson15-bank",
    "featured": false,
    "counterparts": [
      {
        "primaryRegister": "LT-WR",
        "targetTamil": "இங்கே வாருங்கள்.",
        "note": "現代文語・保守的表記"
      }
    ]
  },
  {
    "id": "l15-06",
    "targetTamil": "கொஞ்சம் காத்திருங்க.",
    "structuredRoman": "koñcam kāttiru-ṅka.",
    "pronunciationRoman": "konjam kāttirunga.",
    "katakana": "コンジャム カーッティルンガ。",
    "meaningJa": "少し待ってください。",
    "literalJapanese": "少し＋待ってください",
    "morphemes": [
      {
        "surfaceTamil": "கொஞ்சம்",
        "gloss": "少し"
      },
      {
        "surfaceTamil": "காத்திருங்க",
        "gloss": "待ってください"
      }
    ],
    "grammarNote": "丁寧・複数命令形へ கொஞ்சம் を添え、旅行場面で使いやすい依頼にします。",
    "vocabulary": [
      "கொஞ்சம்",
      "காத்திருங்க"
    ],
    "audioGroup": "lesson15-bank",
    "featured": false,
    "counterparts": [
      {
        "primaryRegister": "LT-WR",
        "targetTamil": "கொஞ்சம் காத்திருங்கள்.",
        "note": "現代文語・保守的表記"
      }
    ]
  },
  {
    "id": "l15-07",
    "targetTamil": "போகாதே.",
    "structuredRoman": "pōk-ātē.",
    "pronunciationRoman": "pōgādē.",
    "katakana": "ポーガーデー。",
    "meaningJa": "行かないで。",
    "literalJapanese": "行く＋しないで・親しい単数",
    "morphemes": [
      {
        "surfaceTamil": "போகாதே",
        "gloss": "行かないで・親しい単数"
      }
    ],
    "grammarNote": "-ஆதே は親しい一人へ行動を止める否定命令です。自分の意志を述べる போக மாட்டேன் とは主語も機能も違います。",
    "vocabulary": [
      "போகாதே"
    ],
    "audioGroup": "lesson15-bank",
    "featured": false,
    "styleTags": [
      "familiar"
    ],
    "confidence": {
      "form": "B",
      "morphology": "B",
      "pronunciation": "C",
      "registerNaturalness": "C"
    }
  },
  {
    "id": "l15-08",
    "targetTamil": "போகாதீங்க.",
    "structuredRoman": "pōk-ātīṅka.",
    "pronunciationRoman": "pōgādīnga.",
    "katakana": "ポーガーディーンガ。",
    "meaningJa": "行かないでください。",
    "literalJapanese": "行く＋しないでください",
    "morphemes": [
      {
        "surfaceTamil": "போகாதீங்க",
        "gloss": "行かないでください"
      }
    ],
    "grammarNote": "-ஆதீங்க は丁寧・複数の否定命令です。禁止の கூடாது とも区別し、ここでは相手への依頼として使います。",
    "vocabulary": [
      "போகாதீங்க"
    ],
    "audioGroup": "lesson15-bank",
    "featured": false,
    "counterparts": [
      {
        "primaryRegister": "LT-WR",
        "targetTamil": "போகாதீர்கள்.",
        "note": "現代文語・保守的表記"
      }
    ]
  },
  {
    "id": "l15-09",
    "targetTamil": "நாம படம் பாக்கலாம்.",
    "structuredRoman": "nāma paṭam pākka-lām.",
    "pronunciationRoman": "nāma paḍam pākkalām.",
    "katakana": "ナーマ パダム パーッカラーム。",
    "meaningJa": "私たちは映画を見ましょう。",
    "literalJapanese": "聞き手を含む私たち＋映画＋見る＋勧誘",
    "morphemes": [
      {
        "surfaceTamil": "நாம",
        "gloss": "私たち・聞き手を含む"
      },
      {
        "surfaceTamil": "படம்",
        "gloss": "映画"
      },
      {
        "surfaceTamil": "பாக்கலாம்",
        "gloss": "見ましょう"
      }
    ],
    "grammarNote": "聞き手を含む நாம と -லாம் を組み合わせ、共同の勧誘を明確にします。",
    "vocabulary": [
      "நாம",
      "படம்",
      "பாக்கலாம்"
    ],
    "audioGroup": "lesson15-bank",
    "featured": false
  },
  {
    "id": "l15-10",
    "targetTamil": "நான் இங்கே உட்காரலாமா?",
    "structuredRoman": "nāṉ iṅkē uṭkāra-lām-ā?",
    "pronunciationRoman": "nāṉ ingē uṭkāralāmā?",
    "katakana": "ナーン インゲー ウッカーラーマー？",
    "meaningJa": "私はここに座ってもよいですか。",
    "literalJapanese": "私＋ここに＋座る＋許可＋疑問",
    "morphemes": [
      {
        "surfaceTamil": "நான்",
        "gloss": "私"
      },
      {
        "surfaceTamil": "இங்கே",
        "gloss": "ここに"
      },
      {
        "surfaceTamil": "உட்காரலாமா",
        "gloss": "座ってもよいですか"
      }
    ],
    "grammarNote": "主語が நான் なら -லாமா は共同提案より、自分の行為への許可を尋ねる読みになります。",
    "vocabulary": [
      "நான்",
      "இங்கே",
      "உட்காரலாமா"
    ],
    "audioGroup": "lesson15-bank",
    "featured": false
  },
  {
    "id": "l15-11",
    "targetTamil": "பஸ் எங்கே நிக்கும்?",
    "structuredRoman": "pas eṅkē nikk-um?",
    "pronunciationRoman": "bas engē nikkum?",
    "katakana": "バス エンゲー ニックム？",
    "meaningJa": "バスはどこに止まりますか。",
    "literalJapanese": "バス＋どこに＋止まる・未来／一般",
    "morphemes": [
      {
        "surfaceTamil": "பஸ்",
        "gloss": "バス"
      },
      {
        "surfaceTamil": "எங்கே",
        "gloss": "どこに"
      },
      {
        "surfaceTamil": "நிக்கும்",
        "gloss": "止まります"
      }
    ],
    "grammarNote": "内容疑問では未知の場所を எங்கே で示します。はい・いいえ疑問の -ஆ を追加しません。",
    "vocabulary": [
      "பஸ்",
      "எங்கே",
      "நிக்கும்"
    ],
    "audioGroup": "lesson15-bank",
    "featured": false,
    "counterparts": [
      {
        "primaryRegister": "LT-WR",
        "targetTamil": "பஸ் எங்கே நிற்கும்?",
        "note": "現代文語・保守的表記"
      }
    ]
  },
  {
    "id": "l15-12",
    "targetTamil": "டிக்கெட் எவ்வளவு?",
    "structuredRoman": "ṭikkeṭ evvaḷavu?",
    "pronunciationRoman": "ṭikkeṭ evvaḷavu?",
    "katakana": "ティッケトゥ エッヴァラヴ？",
    "meaningJa": "切符はいくらですか。",
    "literalJapanese": "切符＋どれくらい／いくら",
    "morphemes": [
      {
        "surfaceTamil": "டிக்கெட்",
        "gloss": "切符"
      },
      {
        "surfaceTamil": "எவ்வளவு",
        "gloss": "どれくらい／いくら"
      }
    ],
    "grammarNote": "値段という未知の量を எவ்வளவு で尋ねます。述語を省いた短い旅行質問として登録します。",
    "vocabulary": [
      "டிக்கெட்",
      "எவ்வளவு"
    ],
    "audioGroup": "lesson15-bank",
    "featured": false
  }
].map(make);

  const patterns = [
  {
    "id": "l15-form-vaa",
    "targetTamil": "வா",
    "structuredRoman": "vā",
    "pronunciationRoman": "vā",
    "katakana": "ヴァー",
    "meaningJa": "来て",
    "literalJapanese": "親しい一人への命令",
    "grammarNote": "親しい単数命令。相手との距離を選ぶ。",
    "vocabulary": [
      "வா"
    ],
    "audioGroup": "l15-form-forms",
    "kind": "直接命令",
    "group": "命令・依頼",
    "note": "親しい単数命令。相手との距離を選ぶ。"
  },
  {
    "id": "l15-form-vaanga",
    "targetTamil": "வாங்க",
    "structuredRoman": "vāṅka",
    "pronunciationRoman": "vānga",
    "katakana": "ヴァーンガ",
    "meaningJa": "来てください／どうぞ",
    "literalJapanese": "丁寧・複数命令",
    "grammarNote": "口語の丁寧・複数命令。来訪を促す「どうぞ」にもなる。",
    "vocabulary": [
      "வாங்க"
    ],
    "audioGroup": "l15-form-forms",
    "kind": "丁寧命令",
    "group": "命令・依頼",
    "note": "口語の丁寧・複数命令。来訪を促す「どうぞ」にもなる。"
  },
  {
    "id": "l15-form-sollunga",
    "targetTamil": "சொல்லுங்க",
    "structuredRoman": "collu-ṅka",
    "pronunciationRoman": "sollunga",
    "katakana": "ソッルンガ",
    "meaningJa": "言ってください／教えてください",
    "literalJapanese": "言う＋丁寧・複数",
    "grammarNote": "-ங்க を含む口語の丁寧・複数命令。",
    "vocabulary": [
      "சொல்லுங்க"
    ],
    "audioGroup": "l15-form-forms",
    "kind": "丁寧依頼",
    "group": "命令・依頼",
    "note": "-ங்க を含む口語の丁寧・複数命令。"
  },
  {
    "id": "l15-form-pogaade",
    "targetTamil": "போகாதே",
    "structuredRoman": "pōk-ātē",
    "pronunciationRoman": "pōgādē",
    "katakana": "ポーガーデー",
    "meaningJa": "行かないで",
    "literalJapanese": "行く＋親しい否定命令",
    "grammarNote": "親しい一人へ行動を止める。",
    "vocabulary": [
      "போகாதே"
    ],
    "audioGroup": "l15-form-forms",
    "kind": "親しい否定命令",
    "group": "否定命令",
    "note": "親しい一人へ行動を止める。"
  },
  {
    "id": "l15-form-pogaadiinga",
    "targetTamil": "போகாதீங்க",
    "structuredRoman": "pōk-ātīṅka",
    "pronunciationRoman": "pōgādīnga",
    "katakana": "ポーガーディーンガ",
    "meaningJa": "行かないでください",
    "literalJapanese": "行く＋丁寧否定命令",
    "grammarNote": "丁寧・複数の否定命令。",
    "vocabulary": [
      "போகாதீங்க"
    ],
    "audioGroup": "l15-form-forms",
    "kind": "丁寧否定命令",
    "group": "否定命令",
    "note": "丁寧・複数の否定命令。"
  },
  {
    "id": "l15-form-paakkalaam",
    "targetTamil": "பாக்கலாம்",
    "structuredRoman": "pākka-lām",
    "pronunciationRoman": "pākkalām",
    "katakana": "パーッカラーム",
    "meaningJa": "見ましょう／見てもよい",
    "literalJapanese": "見る＋勧誘・許可",
    "grammarNote": "参加者と文脈により勧誘・許可を表す。",
    "vocabulary": [
      "பாக்கலாம்"
    ],
    "audioGroup": "l15-form-forms",
    "kind": "勧誘・許可",
    "group": "勧誘・許可",
    "note": "参加者と文脈により勧誘・許可を表す。"
  },
  {
    "id": "l15-form-pogalaamaa",
    "targetTamil": "போகலாமா",
    "structuredRoman": "pōka-lām-ā",
    "pronunciationRoman": "pōgalāmā",
    "katakana": "ポーガラーマー",
    "meaningJa": "行きましょうか／行ってもよいですか",
    "literalJapanese": "行く＋勧誘・許可＋疑問",
    "grammarNote": "主語と参加者から提案か許可かを読む。",
    "vocabulary": [
      "போகலாமா"
    ],
    "audioGroup": "l15-form-forms",
    "kind": "提案・許可質問",
    "group": "勧誘・許可",
    "note": "主語と参加者から提案か許可かを読む。"
  },
  {
    "id": "l15-form-irukkaa",
    "targetTamil": "இருக்கா",
    "structuredRoman": "irukk-ā",
    "pronunciationRoman": "irukkā",
    "katakana": "イルッカー",
    "meaningJa": "ありますか",
    "literalJapanese": "ある＋極性疑問",
    "grammarNote": "肯定文の骨格を保ち、-ஆ ではい・いいえ疑問を作る。",
    "vocabulary": [
      "இருக்கா"
    ],
    "audioGroup": "l15-form-forms",
    "kind": "極性疑問",
    "group": "疑問",
    "note": "肯定文の骨格を保ち、-ஆ ではい・いいえ疑問を作る。"
  },
  {
    "id": "l15-form-enge",
    "targetTamil": "எங்கே",
    "structuredRoman": "eṅkē",
    "pronunciationRoman": "engē",
    "katakana": "エンゲー",
    "meaningJa": "どこ",
    "literalJapanese": "場所の内容疑問",
    "grammarNote": "未知の場所を示す。追加の -ஆ は付けない。",
    "vocabulary": [
      "எங்கே"
    ],
    "audioGroup": "l15-form-forms",
    "kind": "場所疑問",
    "group": "疑問",
    "note": "未知の場所を示す。追加の -ஆ は付けない。"
  },
  {
    "id": "l15-form-evvalavu",
    "targetTamil": "எவ்வளவு",
    "structuredRoman": "evvaḷavu",
    "pronunciationRoman": "evvaḷavu",
    "katakana": "エッヴァラヴ",
    "meaningJa": "どれくらい／いくら",
    "literalJapanese": "量・値段の内容疑問",
    "grammarNote": "量や値段を尋ねる疑問詞。",
    "vocabulary": [
      "எவ்வளவு"
    ],
    "audioGroup": "l15-form-forms",
    "kind": "量・値段疑問",
    "group": "疑問",
    "note": "量や値段を尋ねる疑問詞。"
  }
].map(make);

  const lesson = {
  "id": "lesson15-v38",
  "number": 15,
  "navTitle": "命令・依頼・勧誘・疑問",
  "title": "相手との距離と、尋ねたい情報から文末を選ぶ",
  "tamilTitle": "வா · வாங்க · -லாமா · -ஆ · எங்கே",
  "deck": "親しい命令、丁寧な依頼、否定命令、共同の提案、自分への許可、はい・いいえ疑問、内容疑問を場面別に整理します。",
  "targets": [
    "親しい命令と丁寧依頼",
    "否定命令",
    "勧誘と許可",
    "極性疑問",
    "内容疑問"
  ],
  "criticalPoints": [
    "親しい一人への <span class=\"ta-inline\" lang=\"ta\">வா</span> <span class=\"roman-inline\">(vā)</span> と、旅行の安全形 <span class=\"ta-inline\" lang=\"ta\">வாங்க / சொல்லுங்க</span> <span class=\"roman-inline\">(vāṅka / collu-ṅka)</span> を距離で選ぶ。",
    "<span class=\"ta-inline\" lang=\"ta\">-லாம்</span> <span class=\"roman-inline\">(-lām)</span> は勧誘・許可、<span class=\"ta-inline\" lang=\"ta\">-ஆ</span> <span class=\"roman-inline\">(-ā)</span> は極性疑問。<span class=\"ta-inline\" lang=\"ta\">போகலாமா</span> <span class=\"roman-inline\">(pōka-lām-ā)</span> は参加者から提案か許可かを読む。",
    "内容疑問は <span class=\"ta-inline\" lang=\"ta\">எங்கே / எவ்வளவு</span> <span class=\"roman-inline\">(eṅkē / evvaḷavu)</span> を知りたい位置に置き、疑問詞があるのに -ஆ を機械的に足さない。"
  ],
  "readSections": [
    {
      "kicker": "まず結論",
      "heading": "命令・依頼は相手との距離、疑問は答えの種類で形を選ぶ",
      "takeaway": "親しい <span class=\"ta-inline\" lang=\"ta\">வா</span> <span class=\"roman-inline\">(vā)</span>、丁寧な <span class=\"ta-inline\" lang=\"ta\">வாங்க</span> <span class=\"roman-inline\">(vāṅka)</span>、提案・許可の <span class=\"ta-inline\" lang=\"ta\">-லாமா</span> <span class=\"roman-inline\">(-lām-ā)</span>、極性疑問の <span class=\"ta-inline\" lang=\"ta\">-ஆ</span> <span class=\"roman-inline\">(-ā)</span> を別々に選びます。",
      "paragraphs": [
        "同じ「来る」でも、親しい一人には <span class=\"ta-inline\" lang=\"ta\">வா</span> <span class=\"roman-inline\">(vā)</span>、初対面・店・年上には <span class=\"ta-inline\" lang=\"ta\">வாங்க</span> <span class=\"roman-inline\">(vāṅka)</span> を中心にします。文法的な正しさだけでなく、人間関係を選ぶ形です。",
        "質問は「はい／いいえで答えるのか」「場所・値段など中身を答えるのか」で分けます。<span class=\"ta-inline\" lang=\"ta\">டிக்கெட் இருக்கா</span> <span class=\"roman-inline\">(ṭikkeṭ irukk-ā)</span> と <span class=\"ta-inline\" lang=\"ta\">டிக்கெட் எவ்வளவு</span> <span class=\"roman-inline\">(ṭikkeṭ evvaḷavu)</span> は、答えの種類が違います。"
      ]
    },
    {
      "kicker": "形を読む",
      "heading": "短い命令、-ங்க、-ஆதே／-ஆதீங்க、-லாம்、-ஆを見分ける",
      "takeaway": "<span class=\"ta-inline\" lang=\"ta\">சொல்லுங்க</span> <span class=\"roman-inline\">(collu-ṅka)</span> の -ங்க は丁寧・複数、<span class=\"ta-inline\" lang=\"ta\">போகாதீங்க</span> <span class=\"roman-inline\">(pōk-ātīṅka)</span> は丁寧な否定命令です。",
      "paragraphs": [
        "親しい肯定命令は <span class=\"ta-inline\" lang=\"ta\">வா</span> <span class=\"roman-inline\">(vā)</span> のような短い完成形です。丁寧・複数では <span class=\"ta-inline\" lang=\"ta\">சொல்லுங்க</span> <span class=\"roman-inline\">(collu-ṅka)</span>・<span class=\"ta-inline\" lang=\"ta\">காத்திருங்க</span> <span class=\"roman-inline\">(kāttiru-ṅka)</span> のように -ங்க が聞こえます。",
        "否定命令は <span class=\"ta-inline\" lang=\"ta\">போகாதே</span> <span class=\"roman-inline\">(pōk-ātē)</span> と <span class=\"ta-inline\" lang=\"ta\">போகாதீங்க</span> <span class=\"roman-inline\">(pōk-ātīṅka)</span>。肯定命令へ否定語を足すのではなく、検証済みの否定命令形として覚えます。"
      ]
    },
    {
      "kicker": "なぜ？",
      "heading": "-லாமாは一つの日本語訳に固定せず、参加者から読む",
      "takeaway": "<span class=\"ta-inline\" lang=\"ta\">நாம போகலாமா</span> <span class=\"roman-inline\">(nāma pōka-lām-ā)</span> は共同提案、<span class=\"ta-inline\" lang=\"ta\">நான் உட்காரலாமா</span> <span class=\"roman-inline\">(nāṉ uṭkāra-lām-ā)</span> は自分への許可です。",
      "paragraphs": [
        "<span class=\"ta-inline\" lang=\"ta\">-லாம்</span> <span class=\"roman-inline\">(-lām)</span> は「〜しよう」「〜してもよい」にまたがります。聞き手を含む <span class=\"ta-inline\" lang=\"ta\">நாம</span> <span class=\"roman-inline\">(nāma)</span> なら共同の勧誘が見えます。",
        "主語が <span class=\"ta-inline\" lang=\"ta\">நான்</span> <span class=\"roman-inline\">(nāṉ)</span> なら、自分の行為を許してよいか尋ねる読みが自然です。語尾だけで機能を決めず、誰が行為をするかを確認します。"
      ]
    },
    {
      "kicker": "実際に使う",
      "heading": "旅行では கொஞ்சம்＋丁寧形、短い極性疑問、疑問詞を優先する",
      "takeaway": "依頼は <span class=\"ta-inline\" lang=\"ta\">கொஞ்சம் சொல்லுங்க</span> <span class=\"roman-inline\">(koñcam collu-ṅka)</span>、有無は <span class=\"ta-inline\" lang=\"ta\">இருக்கா</span> <span class=\"roman-inline\">(irukk-ā)</span>、場所は <span class=\"ta-inline\" lang=\"ta\">எங்கே</span> <span class=\"roman-inline\">(eṅkē)</span> で始められます。",
      "paragraphs": [
        "<span class=\"ta-inline\" lang=\"ta\">கொஞ்சம்</span> <span class=\"roman-inline\">(koñcam)</span> は量の「少し」だけでなく、依頼を和らげます。<span class=\"ta-inline\" lang=\"ta\">கொஞ்சம் காத்திருங்க</span> <span class=\"roman-inline\">(koñcam kāttiru-ṅka)</span> は「少し待ってください」です。",
        "旅行では <span class=\"ta-inline\" lang=\"ta\">டிக்கெட் இருக்கா</span> <span class=\"roman-inline\">(ṭikkeṭ irukk-ā)</span>、<span class=\"ta-inline\" lang=\"ta\">பஸ் எங்கே நிக்கும்</span> <span class=\"roman-inline\">(pas eṅkē nikk-um)</span>、<span class=\"ta-inline\" lang=\"ta\">டிக்கெட் எவ்வளவு</span> <span class=\"roman-inline\">(ṭikkeṭ evvaḷavu)</span> のような短い質問がそのまま使えます。"
      ]
    },
    {
      "kicker": "混ぜない",
      "heading": "否定命令・不可能・禁止、極性疑問・内容疑問を分ける",
      "takeaway": "<span class=\"ta-inline\" lang=\"ta\">போகாதீங்க</span> <span class=\"roman-inline\">(pōk-ātīṅka)</span> は相手への否定依頼、<span class=\"ta-inline\" lang=\"ta\">போக முடியாது</span> <span class=\"roman-inline\">(pōka muṭiyātu)</span> は不可能、<span class=\"ta-inline\" lang=\"ta\">போகக் கூடாது</span> <span class=\"roman-inline\">(pōka-k kūṭātu)</span> は禁止です。",
      "paragraphs": [
        "「行かないでください」は <span class=\"ta-inline\" lang=\"ta\">போகாதீங்க</span> <span class=\"roman-inline\">(pōk-ātīṅka)</span>。第13課の <span class=\"ta-inline\" lang=\"ta\">முடியாது</span> <span class=\"roman-inline\">(muṭiyātu)</span> と <span class=\"ta-inline\" lang=\"ta\">கூடாது</span> <span class=\"roman-inline\">(kūṭātu)</span> は、事情上の不可能・規則上の禁止であり、相手への命令と同じではありません。",
        "<span class=\"ta-inline\" lang=\"ta\">இருக்கா</span> <span class=\"roman-inline\">(irukk-ā)</span> は yes/no、<span class=\"ta-inline\" lang=\"ta\">எங்கே</span> <span class=\"roman-inline\">(eṅkē)</span> は場所を答えます。疑問なら必ず -ஆ と考えず、求める答えを先に決めます。"
      ],
      "note": {
        "tone": "pink",
        "title": "この課の最重要ミス",
        "body": "正しい親しい形 <span class=\"ta-inline\" lang=\"ta\">வா / போகாதே</span> <span class=\"roman-inline\">(vā / pōk-ātē)</span> を、初対面でも中立だと扱わない。疑問詞がある文へ -ஆ を重ねない。"
      }
    },
    {
      "kicker": "3文で復習",
      "heading": "依頼・許可・場所質問を一つの旅行場面で読む",
      "takeaway": "相手へ頼む <span class=\"ta-inline\" lang=\"ta\">சொல்லுங்க</span> <span class=\"roman-inline\">(collu-ṅka)</span>、自分の許可を尋ねる <span class=\"ta-inline\" lang=\"ta\">உட்காரலாமா</span> <span class=\"roman-inline\">(uṭkāra-lām-ā)</span>、場所を尋ねる <span class=\"ta-inline\" lang=\"ta\">எங்கே</span> <span class=\"roman-inline\">(eṅkē)</span> を続けて読みます。",
      "paragraphs": [
        "<span class=\"ta-inline\" lang=\"ta\">கொஞ்சம் சொல்லுங்க.</span> <span class=\"roman-inline\">(koñcam collu-ṅka.)</span><br><span class=\"reading-ja\">少し教えてください。</span><br><br><span class=\"ta-inline\" lang=\"ta\">நான் இங்கே உட்காரலாமா?</span> <span class=\"roman-inline\">(nāṉ iṅkē uṭkāra-lām-ā?)</span><br><span class=\"reading-ja\">私はここに座ってもよいですか。</span><br><br><span class=\"ta-inline\" lang=\"ta\">பஸ் எங்கே நிக்கும்?</span> <span class=\"roman-inline\">(pas eṅkē nikk-um?)</span><br><span class=\"reading-ja\">バスはどこに止まりますか。</span>"
      ],
      "miniReading": {
        "intro": "丁寧な依頼、自分への許可、内容疑問を一つずつ読み分けます。",
        "ids": [
          "l15-01",
          "l15-10",
          "l15-11"
        ]
      }
    }
  ],
  "formConfig": {
    "mode": "grammar",
    "title": "命令・依頼・勧誘・疑問を発話機能で並べる",
    "intro": "日本語訳が近くても、相手との距離、行為者、求める答えが違えば形を分けます。親しい形は注記付きで扱います。",
    "checkpoint": "வா／வாங்க、போகாதே／போகாதீங்க、-லாமா、-ஆ、எங்கே／எவ்வளவுを場面から選べれば合格です。",
    "patterns": Object.freeze(patterns)
  },
  "quiz": [
    {
      "focus": "形態分解",
      "q": "<span class=\"ta-inline\" lang=\"ta\">போகலாமா</span> <span class=\"roman-inline\">(pōka-lām-ā)</span> の分解として正しいものは？",
      "options": [
        "போக＋-லாம்＋-ஆ",
        "போ＋-கூடாது",
        "போக＋-முடியாது",
        "போ＋-ஆதீங்க"
      ],
      "answer": 0,
      "feedback": "<span class=\"ta-inline\" lang=\"ta\">போக</span> <span class=\"roman-inline\">(pōka)</span>＋<span class=\"ta-inline\" lang=\"ta\">-லாம்</span> <span class=\"roman-inline\">(-lām)</span>＋疑問 <span class=\"ta-inline\" lang=\"ta\">-ஆ</span> <span class=\"roman-inline\">(-ā)</span> です。",
      "rule": "-லாமாは、行為＋勧誘・許可＋疑問。",
      "tags": [
        "正解",
        "禁止との混同",
        "不可能との混同",
        "否定命令との混同"
      ]
    },
    {
      "focus": "機能選択",
      "q": "初対面の相手へ「少し教えてください」と丁寧に頼む文は？",
      "options": [
        "<span class=\"quiz-option-ta\" lang=\"ta\">கொஞ்சம் சொல்லுங்க.</span><span class=\"quiz-option-roman\">koñcam collu-ṅka.</span><span class=\"quiz-option-ja\">少し教えてください</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">இங்கே வா.</span><span class=\"quiz-option-roman\">iṅkē vā.</span><span class=\"quiz-option-ja\">ここへ来て</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">போகாதே.</span><span class=\"quiz-option-roman\">pōk-ātē.</span><span class=\"quiz-option-ja\">行かないで</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">டிக்கெட் இருக்கா?</span><span class=\"quiz-option-roman\">ṭikkeṭ irukk-ā?</span><span class=\"quiz-option-ja\">切符はありますか</span>"
      ],
      "answer": 0,
      "feedback": "<span class=\"ta-inline\" lang=\"ta\">கொஞ்சம்</span> <span class=\"roman-inline\">(koñcam)</span> で和らげ、丁寧・複数の <span class=\"ta-inline\" lang=\"ta\">சொல்லுங்க</span> <span class=\"roman-inline\">(collu-ṅka)</span> を使います。",
      "rule": "旅行の依頼は கொஞ்சம்＋-ங்க形が安全。",
      "tags": [
        "正解",
        "親しい直接命令",
        "親しい否定命令",
        "極性疑問"
      ]
    },
    {
      "focus": "実用場面",
      "q": "店や施設で「私はここに座ってもよいですか」と許可を尋ねる文は？",
      "options": [
        "<span class=\"quiz-option-ta\" lang=\"ta\">நான் இங்கே உட்காரலாமா?</span><span class=\"quiz-option-roman\">nāṉ iṅkē uṭkāra-lām-ā?</span><span class=\"quiz-option-ja\">私はここに座ってもよいですか</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">நாம இங்கே உட்காரலாம்.</span><span class=\"quiz-option-roman\">nāma iṅkē uṭkāra-lām.</span><span class=\"quiz-option-ja\">私たちはここに座りましょう</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">இங்கே வாங்க.</span><span class=\"quiz-option-roman\">iṅkē vāṅka.</span><span class=\"quiz-option-ja\">こちらへ来てください</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">கொஞ்சம் காத்திருங்க.</span><span class=\"quiz-option-roman\">koñcam kāttiru-ṅka.</span><span class=\"quiz-option-ja\">少し待ってください</span>"
      ],
      "answer": 0,
      "feedback": "主語が <span class=\"ta-inline\" lang=\"ta\">நான்</span> <span class=\"roman-inline\">(nāṉ)</span> なので、<span class=\"ta-inline\" lang=\"ta\">-லாமா</span> <span class=\"roman-inline\">(-lām-ā)</span> は自分への許可を尋ねます。",
      "rule": "-லாமாの提案・許可は、行為者を見る。",
      "tags": [
        "正解",
        "共同勧誘",
        "丁寧命令",
        "丁寧依頼"
      ]
    },
    {
      "focus": "混同防止",
      "q": "<span class=\"ta-inline\" lang=\"ta\">போகாதீங்க</span> <span class=\"roman-inline\">(pōk-ātīṅka)</span> の機能は？",
      "options": [
        "相手へ「行かないでください」と頼む丁寧な否定命令",
        "事情があって「行けない」と述べる",
        "規則として「行ってはいけない」と述べる",
        "自分の意志として「行かない」と述べる"
      ],
      "answer": 0,
      "feedback": "<span class=\"ta-inline\" lang=\"ta\">போகாதீங்க</span> <span class=\"roman-inline\">(pōk-ātīṅka)</span> は相手の行動を止める丁寧な否定命令です。",
      "rule": "否定命令・不可能・禁止・意志否定を主語と機能で分ける。",
      "tags": [
        "正解",
        "முடியாதுとの混同",
        "கூடாதுとの混同",
        "மாட்டேன்との混同"
      ]
    },
    {
      "focus": "総合復習",
      "q": "極性疑問と内容疑問の組合せとして正しい説明は？",
      "options": [
        "டிக்கெட் இருக்கா? は有無、பஸ் எங்கே நிக்கும்? は場所を尋ねる",
        "どちらも必ず「はい／いいえ」だけで答える",
        "どちらにも疑問詞の後ろへ -ஆ を重ねる",
        "எங்கே は値段、எவ்வளவு は場所を尋ねる"
      ],
      "answer": 0,
      "feedback": "<span class=\"ta-inline\" lang=\"ta\">இருக்கா</span> <span class=\"roman-inline\">(irukk-ā)</span> は極性、<span class=\"ta-inline\" lang=\"ta\">எங்கே</span> <span class=\"roman-inline\">(eṅkē)</span> は場所の内容疑問です。",
      "rule": "疑問文は、求める答えが yes/no か中身かを先に決める。",
      "tags": [
        "正解",
        "答えの種類の混同",
        "-ஆの過剰付加",
        "疑問詞の取り違え"
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

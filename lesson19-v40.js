(() => {
  "use strict";

  const { entry: E, confidence: C } = window.TAMIL_V30;
  const SOURCES = [
  "TAMIL-INTEGRATED-v2.0-rc.1 §§23-25,31-32",
  "PREDICATE-ENGINE-v1.1 §§1.2,3,4",
  "TAMIL-GRAMMAR-GARDEN Lesson 19",
  "SCHIFFMAN-SPOKEN-TAMIL: quotation, complement clauses and complex clauses"
];
  const make = input => E({ ...input, sourceRefs: SOURCES, confidence: input.confidence ?? C("B", "B", "C", "B") });

  const examples = [
  {
    "id": "l19-01",
    "targetTamil": "அவர் நாளைக்கு வர்றேன்னு சொன்னார்.",
    "structuredRoman": "avar nāḷai-kku varṟ-ēṉ-ṉu coṉṉ-ār.",
    "pronunciationRoman": "avar nāḷaikku varrēnnu sonnār.",
    "katakana": "アヴァル ナーレック ヴァッレーンヌ ソンナール。",
    "meaningJa": "その方は「明日来ます」と言いました。",
    "literalJapanese": "その方＋明日＋来ます・私＋引用＋言いました・敬意",
    "morphemes": [
      {
        "surfaceTamil": "அவர்",
        "gloss": "その方が"
      },
      {
        "surfaceTamil": "நாளைக்கு வர்றேன்",
        "gloss": "「明日来ます」・引用内容"
      },
      {
        "surfaceTamil": "ன்னு",
        "gloss": "引用の終わり"
      },
      {
        "surfaceTamil": "சொன்னார்",
        "gloss": "言いました・敬意"
      }
    ],
    "grammarNote": "-ன்னு の左側が引用内容、右側の சொன்னார் が外側の発言動詞です。引用内の -ேன் は引用された話し手の「私」です。",
    "vocabulary": [
      "அவர்",
      "நாளைக்கு",
      "வர்றேன்",
      "ன்னு",
      "சொன்னார்"
    ],
    "audioGroup": "lesson19-core",
    "featured": true,
    "counterparts": [
      {
        "primaryRegister": "LT-WR",
        "targetTamil": "அவர் நாளைக்கு வருவேன் என்று சொன்னார்.",
        "note": "現代文語・保守的表記"
      }
    ]
  },
  {
    "id": "l19-02",
    "targetTamil": "இந்த படம் நல்லதுன்னு நினைக்கறேன்.",
    "structuredRoman": "inta paṭam nallatu-ṉṉu niṉaikkaṟ-ēṉ.",
    "pronunciationRoman": "inda paḍam nalladunnu ninaikkarēn.",
    "katakana": "インダ パダム ナッラドゥンヌ ニナイッカレーン。",
    "meaningJa": "この映画は良いと思います。",
    "literalJapanese": "この映画＋良いこと＋引用＋思います・私",
    "morphemes": [
      {
        "surfaceTamil": "இந்த படம் நல்லது",
        "gloss": "この映画は良い・判断内容"
      },
      {
        "surfaceTamil": "ன்னு",
        "gloss": "引用の終わり"
      },
      {
        "surfaceTamil": "நினைக்கறேன்",
        "gloss": "思います・私"
      }
    ],
    "grammarNote": "判断内容を -ன்னு でまとめ、நினைக்கறேன்「思う」へ渡します。発言だけでなく思考も引用できます。",
    "vocabulary": [
      "இந்த",
      "படம்",
      "நல்லது",
      "ன்னு",
      "நினைக்கறேன்"
    ],
    "audioGroup": "lesson19-core",
    "featured": true,
    "counterparts": [
      {
        "primaryRegister": "LT-WR",
        "targetTamil": "இந்த படம் நல்லது என்று நினைக்கிறேன்.",
        "note": "現代文語・保守的表記"
      }
    ]
  },
  {
    "id": "l19-03",
    "targetTamil": "அவர் வருவாரான்னு கேட்டேன்.",
    "structuredRoman": "avar varuv-ār-ā-ṉṉu kēṭṭ-ēṉ.",
    "pronunciationRoman": "avar varuvārānnu kēṭṭēn.",
    "katakana": "アヴァル ヴァルヴァーラーヌ ケーッテーン。",
    "meaningJa": "その方が来るか尋ねました。",
    "literalJapanese": "その方＋来る・敬意＋疑問＋引用＋尋ねました・私",
    "morphemes": [
      {
        "surfaceTamil": "அவர் வருவாரா",
        "gloss": "その方は来ますか・引用内疑問"
      },
      {
        "surfaceTamil": "ன்னு",
        "gloss": "引用の終わり"
      },
      {
        "surfaceTamil": "கேட்டேன்",
        "gloss": "尋ねました・私"
      }
    ],
    "grammarNote": "引用内の -ஆ がはい・いいえ疑問、-ன்னு の後ろの கேட்டேன் が外側の「尋ねた」です。",
    "vocabulary": [
      "அவர்",
      "வருவாரா",
      "ன்னு",
      "கேட்டேன்"
    ],
    "audioGroup": "lesson19-core",
    "featured": true,
    "counterparts": [
      {
        "primaryRegister": "LT-WR",
        "targetTamil": "அவர் வருவாரா என்று கேட்டேன்.",
        "note": "現代文語・保守的表記"
      }
    ]
  },
  {
    "id": "l19-04",
    "targetTamil": "அவர் வான்னு சொன்னார்.",
    "structuredRoman": "avar vā-ṉṉu coṉṉ-ār.",
    "pronunciationRoman": "avar vānnu sonnār.",
    "katakana": "アヴァル ヴァーンヌ ソンナール。",
    "meaningJa": "その方は「来て」と言いました。",
    "literalJapanese": "その方＋来て・引用＋言いました",
    "morphemes": [
      {
        "surfaceTamil": "அவர்",
        "gloss": "その方が"
      },
      {
        "surfaceTamil": "வா",
        "gloss": "「来て」・直接の命令"
      },
      {
        "surfaceTamil": "ன்னு",
        "gloss": "引用"
      },
      {
        "surfaceTamil": "சொன்னார்",
        "gloss": "言いました"
      }
    ],
    "grammarNote": "命令 வா をそのまま引用箱へ入れた直接引用です。",
    "vocabulary": [
      "அவர்",
      "வா",
      "ன்னு",
      "சொன்னார்"
    ],
    "audioGroup": "lesson19-bank",
    "featured": false
  },
  {
    "id": "l19-05",
    "targetTamil": "அவர் வர சொன்னார்.",
    "structuredRoman": "avar vara coṉṉ-ār.",
    "pronunciationRoman": "avar vara sonnār.",
    "katakana": "アヴァル ヴァラ ソンナール。",
    "meaningJa": "その方は来るように言いました。",
    "literalJapanese": "その方＋来る・不定詞＋言いました",
    "morphemes": [
      {
        "surfaceTamil": "அவர்",
        "gloss": "その方が"
      },
      {
        "surfaceTamil": "வர",
        "gloss": "来る・不定詞"
      },
      {
        "surfaceTamil": "சொன்னார்",
        "gloss": "言いました／指示しました"
      }
    ],
    "grammarNote": "引用標識を置かず、不定詞 வர を சொன்னார் へ渡すと「来るように言った」という指示になります。",
    "vocabulary": [
      "அவர்",
      "வர",
      "சொன்னார்"
    ],
    "audioGroup": "lesson19-bank",
    "featured": false
  },
  {
    "id": "l19-06",
    "targetTamil": "அவங்க இன்னிக்கு வர மாட்டாங்கன்னு சொன்னாங்க.",
    "structuredRoman": "avaṅka iṉṉikku vara māṭṭ-āṅka-ṉṉu coṉṉ-āṅka.",
    "pronunciationRoman": "avanga innikku vara māṭṭāngannu sonnanga.",
    "katakana": "アヴァンガ インニック ヴァラ マーッターンガンヌ ソンナーンガ。",
    "meaningJa": "その人たちは「今日は来ない」と言いました。",
    "literalJapanese": "その人たち＋今日＋来ない・人間複数＋引用＋言いました・人間複数",
    "morphemes": [
      {
        "surfaceTamil": "அவங்க",
        "gloss": "その人たちが"
      },
      {
        "surfaceTamil": "இன்னிக்கு வர மாட்டாங்க",
        "gloss": "「今日は来ない」"
      },
      {
        "surfaceTamil": "ன்னு",
        "gloss": "引用"
      },
      {
        "surfaceTamil": "சொன்னாங்க",
        "gloss": "言いました・複数／敬意"
      }
    ],
    "grammarNote": "引用内の -ாங்க と外側の -ாங்க を別々に読みます。内側は来ない主体、外側は発言主体です。",
    "vocabulary": [
      "அவங்க",
      "இன்னிக்கு",
      "வர",
      "மாட்டாங்க",
      "ன்னு",
      "சொன்னாங்க"
    ],
    "audioGroup": "lesson19-bank",
    "featured": false
  },
  {
    "id": "l19-07",
    "targetTamil": "அவர் எங்கே போறார்னு கேட்டேன்.",
    "structuredRoman": "avar eṅkē pōṟ-ār-ṉu kēṭṭ-ēṉ.",
    "pronunciationRoman": "avar engē pōrārnu kēṭṭēn.",
    "katakana": "アヴァル エンゲー ポーラールヌ ケーッテーン。",
    "meaningJa": "その方がどこへ行くのか尋ねました。",
    "literalJapanese": "その方＋どこへ＋行く・敬意＋引用＋尋ねました",
    "morphemes": [
      {
        "surfaceTamil": "அவர் எங்கே போறார்",
        "gloss": "その方はどこへ行きますか・内容疑問"
      },
      {
        "surfaceTamil": "னு",
        "gloss": "引用の短い表面形"
      },
      {
        "surfaceTamil": "கேட்டேன்",
        "gloss": "尋ねました・私"
      }
    ],
    "grammarNote": "内容疑問語 எங்கே は引用箱の中に残り、後ろの கேட்டேன் が質問行為を完成させます。",
    "vocabulary": [
      "அவர்",
      "எங்கே",
      "போறார்",
      "னு",
      "கேட்டேன்"
    ],
    "audioGroup": "lesson19-bank",
    "featured": false
  },
  {
    "id": "l19-08",
    "targetTamil": "இது எவ்வளவுன்னு கேட்டேன்.",
    "structuredRoman": "itu evvaḷavu-ṉṉu kēṭṭ-ēṉ.",
    "pronunciationRoman": "idu evvaḷavunnu kēṭṭēn.",
    "katakana": "イドゥ エッヴァラヴンヌ ケーッテーン。",
    "meaningJa": "これがいくらか尋ねました。",
    "literalJapanese": "これ＋いくら＋引用＋尋ねました",
    "morphemes": [
      {
        "surfaceTamil": "இது எவ்வளவு",
        "gloss": "これはいくら・引用内容"
      },
      {
        "surfaceTamil": "ன்னு",
        "gloss": "引用"
      },
      {
        "surfaceTamil": "கேட்டேன்",
        "gloss": "尋ねました・私"
      }
    ],
    "grammarNote": "値段疑問 எவ்வளவு を引用内容として கேட்டேன் に渡します。",
    "vocabulary": [
      "இது",
      "எவ்வளவு",
      "ன்னு",
      "கேட்டேன்"
    ],
    "audioGroup": "lesson19-bank",
    "featured": false
  },
  {
    "id": "l19-09",
    "targetTamil": "கடை நாளைக்கு திறக்கும்னு கேள்விப்பட்டேன்.",
    "structuredRoman": "kaṭai nāḷai-kku tiṟakkum-ṉu kēḷvippaṭṭ-ēṉ.",
    "pronunciationRoman": "kaḍai nāḷaikku tirakkumnu kēḷvippaṭṭēn.",
    "katakana": "カダイ ナーレック ティラックムヌ ケールヴィッパッテーン。",
    "meaningJa": "店は明日開くと聞きました。",
    "literalJapanese": "店＋明日＋開く＋引用＋伝聞で聞きました",
    "morphemes": [
      {
        "surfaceTamil": "கடை நாளைக்கு திறக்கும்",
        "gloss": "店は明日開く・伝聞内容"
      },
      {
        "surfaceTamil": "னு",
        "gloss": "引用の短い表面形"
      },
      {
        "surfaceTamil": "கேள்விப்பட்டேன்",
        "gloss": "聞きました／伝聞で知りました"
      }
    ],
    "grammarNote": "கேள்விப்பட்டேன் は誰かから聞いて知った伝聞を示します。自分が直接尋ねた கேட்டேன் と分けます。",
    "vocabulary": [
      "கடை",
      "நாளைக்கு",
      "திறக்கும்",
      "னு",
      "கேள்விப்பட்டேன்"
    ],
    "audioGroup": "lesson19-bank",
    "featured": false
  },
  {
    "id": "l19-10",
    "targetTamil": "ரவி வர்றேன்னு சொன்னான்.",
    "structuredRoman": "ravi varṟ-ēṉ-ṉu coṉṉ-āṉ.",
    "pronunciationRoman": "ravi varrēnnu sonnān.",
    "katakana": "ラヴィ ヴァッレーンヌ ソンナーン。",
    "meaningJa": "ラヴィは「来ます」と言いました。",
    "literalJapanese": "ラヴィ＋来ます・私＋引用＋言いました・男性単数",
    "morphemes": [
      {
        "surfaceTamil": "ரவி",
        "gloss": "ラヴィが"
      },
      {
        "surfaceTamil": "வர்றேன்",
        "gloss": "「来ます」・引用された本人の一人称"
      },
      {
        "surfaceTamil": "ன்னு",
        "gloss": "引用"
      },
      {
        "surfaceTamil": "சொன்னான்",
        "gloss": "言いました・男性単数"
      }
    ],
    "grammarNote": "外側の主語は三人称の ரவி ですが、直接引用内では本人の発話時の一人称 -ேன் を保ちます。",
    "vocabulary": [
      "ரவி",
      "வர்றேன்",
      "ன்னு",
      "சொன்னான்"
    ],
    "audioGroup": "lesson19-bank",
    "featured": false
  },
  {
    "id": "l19-11",
    "targetTamil": "அவர் நாளைக்கு வருவார்னு நினைக்கறேன்.",
    "structuredRoman": "avar nāḷai-kku varuv-ār-ṉu niṉaikkaṟ-ēṉ.",
    "pronunciationRoman": "avar nāḷaikku varuvārnu ninaikkarēn.",
    "katakana": "アヴァル ナーレック ヴァルヴァールヌ ニナイッカレーン。",
    "meaningJa": "その方は明日来ると思います。",
    "literalJapanese": "その方＋明日＋来る・敬意＋引用＋思います・私",
    "morphemes": [
      {
        "surfaceTamil": "அவர் நாளைக்கு வருவார்",
        "gloss": "その方は明日来る・判断内容"
      },
      {
        "surfaceTamil": "னு",
        "gloss": "引用"
      },
      {
        "surfaceTamil": "நினைக்கறேன்",
        "gloss": "思います・私"
      }
    ],
    "grammarNote": "引用内容の主体が第三者なら、内側は -ார்。外側の நினைக்கறேன் は考えている私を示します。",
    "vocabulary": [
      "அவர்",
      "நாளைக்கு",
      "வருவார்",
      "னு",
      "நினைக்கறேன்"
    ],
    "audioGroup": "lesson19-bank",
    "featured": false
  },
  {
    "id": "l19-12",
    "targetTamil": "இங்கே படம் எடுக்கக் கூடாதுன்னு சொன்னாங்க.",
    "structuredRoman": "iṅkē paṭam eṭukka-k kūṭātu-ṉṉu coṉṉ-āṅka.",
    "pronunciationRoman": "ingē paḍam eḍukkak kūḍādunnu sonnanga.",
    "katakana": "インゲー パダム エドゥッカック クーダードゥンヌ ソンナーンガ。",
    "meaningJa": "ここでは写真を撮ってはいけないと言われました。",
    "literalJapanese": "ここで＋写真＋撮る＋禁止＋引用＋言いました・複数／敬意",
    "morphemes": [
      {
        "surfaceTamil": "இங்கே படம் எடுக்கக் கூடாது",
        "gloss": "ここでは写真を撮ってはいけない・内容"
      },
      {
        "surfaceTamil": "ன்னு",
        "gloss": "引用"
      },
      {
        "surfaceTamil": "சொன்னாங்க",
        "gloss": "言いました／言われました"
      }
    ],
    "grammarNote": "第13課の禁止内容を引用箱へ入れています。引用標識自体は禁止を表さず、左側の内容を後ろへ渡します。",
    "vocabulary": [
      "இங்கே",
      "படம்",
      "எடுக்கக்",
      "கூடாது",
      "ன்னு",
      "சொன்னாங்க"
    ],
    "audioGroup": "lesson19-bank",
    "featured": false
  }
].map(make);

  const patterns = [
  {
    "id": "l19-form-nnu",
    "targetTamil": "ன்னு",
    "structuredRoman": "ṉṉu",
    "pronunciationRoman": "nnu",
    "katakana": "ンヌ",
    "meaningJa": "引用の終わり",
    "literalJapanese": "引用境界",
    "morphemes": [],
    "grammarNote": "左側を一つの内容として、後ろの発言・思考・質問動詞へ渡す。",
    "vocabulary": [
      "ன்னு"
    ],
    "audioGroup": "l19-forms",
    "featured": false,
    "kind": "引用標識",
    "group": "引用箱",
    "note": "左側を一つの内容として、後ろの発言・思考・質問動詞へ渡す。"
  },
  {
    "id": "l19-form-nallatunnu",
    "targetTamil": "நல்லதுன்னு",
    "structuredRoman": "nallatu-ṉṉu",
    "pronunciationRoman": "nalladunnu",
    "katakana": "ナッラドゥンヌ",
    "meaningJa": "良いと",
    "literalJapanese": "良いこと＋引用",
    "morphemes": [],
    "grammarNote": "名詞述語の内容を引用箱として閉じる。",
    "vocabulary": [
      "நல்லதுன்னு"
    ],
    "audioGroup": "l19-forms",
    "featured": false,
    "kind": "判断引用",
    "group": "引用箱",
    "note": "名詞述語の内容を引用箱として閉じる。"
  },
  {
    "id": "l19-form-sonnaar",
    "targetTamil": "சொன்னார்",
    "structuredRoman": "coṉṉ-ār",
    "pronunciationRoman": "sonnār",
    "katakana": "ソンナール",
    "meaningJa": "言いました",
    "literalJapanese": "言う・過去・敬意",
    "morphemes": [],
    "grammarNote": "引用内容の外側で、誰が発言したかを完成させる有限動詞。",
    "vocabulary": [
      "சொன்னார்"
    ],
    "audioGroup": "l19-forms",
    "featured": false,
    "kind": "発言",
    "group": "箱の外",
    "note": "引用内容の外側で、誰が発言したかを完成させる有限動詞。"
  },
  {
    "id": "l19-form-ninaikkareen",
    "targetTamil": "நினைக்கறேன்",
    "structuredRoman": "niṉaikkaṟ-ēṉ",
    "pronunciationRoman": "ninaikkarēn",
    "katakana": "ニナイッカレーン",
    "meaningJa": "思います",
    "literalJapanese": "思う・現在・私",
    "morphemes": [],
    "grammarNote": "引用内容を判断・考えとして受け取る。",
    "vocabulary": [
      "நினைக்கறேன்"
    ],
    "audioGroup": "l19-forms",
    "featured": false,
    "kind": "思考",
    "group": "箱の外",
    "note": "引用内容を判断・考えとして受け取る。"
  },
  {
    "id": "l19-form-keetteen",
    "targetTamil": "கேட்டேன்",
    "structuredRoman": "kēṭṭ-ēṉ",
    "pronunciationRoman": "kēṭṭēn",
    "katakana": "ケーッテーン",
    "meaningJa": "尋ねました／聞きました",
    "literalJapanese": "尋ねる・過去・私",
    "morphemes": [],
    "grammarNote": "疑問内容を引用箱へ入れ、外側で質問行為を示す。",
    "vocabulary": [
      "கேட்டேன்"
    ],
    "audioGroup": "l19-forms",
    "featured": false,
    "kind": "質問",
    "group": "箱の外",
    "note": "疑問内容を引用箱へ入れ、外側で質問行為を示す。"
  },
  {
    "id": "l19-form-keelvippatteen",
    "targetTamil": "கேள்விப்பட்டேன்",
    "structuredRoman": "kēḷvippaṭṭ-ēṉ",
    "pronunciationRoman": "kēḷvippaṭṭēn",
    "katakana": "ケールヴィッパッテーン",
    "meaningJa": "聞いて知りました",
    "literalJapanese": "伝聞・過去・私",
    "morphemes": [],
    "grammarNote": "誰かから聞いて知った伝聞。直接質問の கேட்டேன் と分ける。",
    "vocabulary": [
      "கேள்விப்பட்டேன்"
    ],
    "audioGroup": "l19-forms",
    "featured": false,
    "kind": "伝聞",
    "group": "箱の外",
    "note": "誰かから聞いて知った伝聞。直接質問の கேட்டேன் と分ける。"
  },
  {
    "id": "l19-form-vaannu",
    "targetTamil": "வான்னு",
    "structuredRoman": "vā-ṉṉu",
    "pronunciationRoman": "vānnu",
    "katakana": "ヴァーンヌ",
    "meaningJa": "「来て」と",
    "literalJapanese": "命令＋引用",
    "morphemes": [],
    "grammarNote": "命令 வா をそのまま引用する直接引用。",
    "vocabulary": [
      "வான்னு"
    ],
    "audioGroup": "l19-forms",
    "featured": false,
    "kind": "直接引用",
    "group": "指示",
    "note": "命令 வா をそのまま引用する直接引用。"
  },
  {
    "id": "l19-form-vara-sonnaar",
    "targetTamil": "வர சொன்னார்",
    "structuredRoman": "vara coṉṉ-ār",
    "pronunciationRoman": "vara sonnār",
    "katakana": "ヴァラ ソンナール",
    "meaningJa": "来るように言いました",
    "literalJapanese": "不定詞＋言う",
    "morphemes": [],
    "grammarNote": "引用標識なしで不定詞を சொன்னார் へ渡し、指示内容を表す。",
    "vocabulary": [
      "வர சொன்னார்"
    ],
    "audioGroup": "l19-forms",
    "featured": false,
    "kind": "間接的指示",
    "group": "指示",
    "note": "引用標識なしで不定詞を சொன்னார் へ渡し、指示内容を表す。"
  },
  {
    "id": "l19-form-vaaran-nu",
    "targetTamil": "வருவாரான்னு",
    "structuredRoman": "varuv-ār-ā-ṉṉu",
    "pronunciationRoman": "varuvārānnu",
    "katakana": "ヴァルヴァーラーヌ",
    "meaningJa": "来るかと",
    "literalJapanese": "敬意未来＋疑問＋引用",
    "morphemes": [],
    "grammarNote": "引用内の -ஆ がはい・いいえ疑問。",
    "vocabulary": [
      "வருவாரான்னு"
    ],
    "audioGroup": "l19-forms",
    "featured": false,
    "kind": "疑問引用",
    "group": "質問",
    "note": "引用内の -ஆ がはい・いいえ疑問。"
  },
  {
    "id": "l19-form-enge-pooraar-nu",
    "targetTamil": "எங்கே போறார்னு",
    "structuredRoman": "eṅkē pōṟ-ār-ṉu",
    "pronunciationRoman": "engē pōrārnu",
    "katakana": "エンゲー ポーラールヌ",
    "meaningJa": "どこへ行くのかと",
    "literalJapanese": "内容疑問＋引用",
    "morphemes": [],
    "grammarNote": "疑問語は引用箱内に残し、後ろの கேட்டேன் で尋ねる。",
    "vocabulary": [
      "எங்கே போறார்னு"
    ],
    "audioGroup": "l19-forms",
    "featured": false,
    "kind": "内容疑問引用",
    "group": "質問",
    "note": "疑問語は引用箱内に残し、後ろの கேட்டேன் で尋ねる。"
  }
].map(make);

  const lesson = {
    ...{
  "id": "lesson19-v40",
  "number": 19,
  "navTitle": "引用・発言",
  "title": "-ன்னுを境界にして、引用箱の中と外を別々に読む",
  "tamilTitle": "வர்றேன்னு சொன்னார் · நல்லதுன்னு நினைக்கறேன் · வருவாரான்னு கேட்டேன்",
  "deck": "-ன்னு の左側を一つの引用内容としてまとめ、後ろの「言う・思う・尋ねる・聞いて知る」へ渡します。引用内外の人称と時制を混ぜません。",
  "targets": [
    "引用境界 -ன்னு",
    "引用内外の人称",
    "発言・思考・質問・伝聞",
    "直接引用と指示",
    "疑問内容の引用"
  ],
  "criticalPoints": [
    "<span class=\"ta-inline\" lang=\"ta\">-ன்னு</span> <span class=\"roman-inline\">(-ṉṉu)</span> を見つけたら、左側を引用箱、右側を発言・思考・質問の外側として切り分ける。",
    "<span class=\"ta-inline\" lang=\"ta\">வர்றேன்</span> <span class=\"roman-inline\">(varṟ-ēṉ)</span> の -ேன் は引用された話し手の「私」、<span class=\"ta-inline\" lang=\"ta\">சொன்னார்</span> <span class=\"roman-inline\">(coṉṉ-ār)</span> の -ார் は外側の発言者。箱の内外で人物を別々に読む。",
    "<span class=\"ta-inline\" lang=\"ta\">வான்னு சொன்னார்</span> <span class=\"roman-inline\">(vā-ṉṉu coṉṉ-ār)</span> は「来て」と言った直接引用、<span class=\"ta-inline\" lang=\"ta\">வர சொன்னார்</span> <span class=\"roman-inline\">(vara coṉṉ-ār)</span> は「来るように言った」指示。引用標識の有無を見る。"
  ],
  "readSections": [
    {
      "kicker": "まず結論",
      "heading": "-ன்னுを先に見つけ、左側を一つの引用内容として囲む",
      "takeaway": "<span class=\"ta-inline\" lang=\"ta\">அவர் நாளைக்கு வர்றேன்னு சொன்னார்</span> <span class=\"roman-inline\">(avar nāḷai-kku varṟ-ēṉ-ṉu coṉṉ-ār)</span> は、「明日来ます」までが引用箱です。",
      "paragraphs": [
        "標準口語の <span class=\"ta-inline\" lang=\"ta\">-ன்னு</span> <span class=\"roman-inline\">(-ṉṉu)</span> は、日本語の「〜って／〜と」に近い引用境界です。まずこの形を探すと、長い文でも内容と外側の述語を分けられます。",
        "<span class=\"ta-inline\" lang=\"ta\">நாளைக்கு வர்றேன்</span> <span class=\"roman-inline\">(nāḷai-kku varṟ-ēṉ)</span> が引用内容、<span class=\"ta-inline\" lang=\"ta\">சொன்னார்</span> <span class=\"roman-inline\">(coṉṉ-ār)</span> が外側の「言いました」です。最初から逐語訳せず、境界の左右を二つの箱として読みます。"
      ]
    },
    {
      "kicker": "形を読む",
      "heading": "発言・思考・質問・伝聞は、引用の後ろの動詞で決まる",
      "takeaway": "<span class=\"ta-inline\" lang=\"ta\">சொன்னார் / நினைக்கறேன் / கேட்டேன் / கேள்விப்பட்டேன்</span> <span class=\"roman-inline\">(coṉṉ-ār / niṉaikkaṟ-ēṉ / kēṭṭ-ēṉ / kēḷvippaṭṭ-ēṉ)</span> を区別します。",
      "paragraphs": [
        "<span class=\"ta-inline\" lang=\"ta\">சொன்னார்</span> <span class=\"roman-inline\">(coṉṉ-ār)</span> は言った、<span class=\"ta-inline\" lang=\"ta\">நினைக்கறேன்</span> <span class=\"roman-inline\">(niṉaikkaṟ-ēṉ)</span> は思う、<span class=\"ta-inline\" lang=\"ta\">கேட்டேன்</span> <span class=\"roman-inline\">(kēṭṭ-ēṉ)</span> は尋ねた、<span class=\"ta-inline\" lang=\"ta\">கேள்விப்பட்டேன்</span> <span class=\"roman-inline\">(kēḷvippaṭṭ-ēṉ)</span> は聞いて知った伝聞です。",
        "<span class=\"ta-inline\" lang=\"ta\">-ன்னு</span> <span class=\"roman-inline\">(-ṉṉu)</span> 自体は「言った」という意味ではありません。左側の内容を、右側のどの認識・発話動詞へ渡すかで文全体の関係が変わります。"
      ]
    },
    {
      "kicker": "なぜ？",
      "heading": "直接引用では、引用された発話時の人称をそのまま残す",
      "takeaway": "<span class=\"ta-inline\" lang=\"ta\">ரவி வர்றேன்னு சொன்னான்</span> <span class=\"roman-inline\">(ravi varṟ-ēṉ-ṉu coṉṉ-āṉ)</span> では、内側は一人称、外側は三人称です。",
      "paragraphs": [
        "外側の主語は <span class=\"ta-inline\" lang=\"ta\">ரவி</span> <span class=\"roman-inline\">(ravi)</span> ですが、ラヴィ本人の発話「来ます」には <span class=\"ta-inline\" lang=\"ta\">-ேன்</span> <span class=\"roman-inline\">(-ēṉ)</span> が残ります。日本語訳で「彼は来ると言った」と整えても、タミル語の引用箱内を勝手に三人称へ変えません。",
        "<span class=\"ta-inline\" lang=\"ta\">அவங்க ... மாட்டாங்கன்னு சொன்னாங்க</span> <span class=\"roman-inline\">(avaṅka ... māṭṭ-āṅka-ṉṉu coṉṉ-āṅka)</span> のように内外で同じ -ாங்க が現れても、それぞれ別の述語に属します。"
      ]
    },
    {
      "kicker": "実際に使う",
      "heading": "値段・場所・予定・施設ルールを引用して確認する",
      "takeaway": "<span class=\"ta-inline\" lang=\"ta\">இது எவ்வளவுன்னு கேட்டேன்</span> <span class=\"roman-inline\">(itu evvaḷavu-ṉṉu kēṭṭ-ēṉ)</span> のように疑問語も引用箱へ入れられます。",
      "paragraphs": [
        "値段なら <span class=\"ta-inline\" lang=\"ta\">எவ்வளவு</span> <span class=\"roman-inline\">(evvaḷavu)</span>、場所なら <span class=\"ta-inline\" lang=\"ta\">எங்கே</span> <span class=\"roman-inline\">(eṅkē)</span> を引用内容に残し、後ろへ <span class=\"ta-inline\" lang=\"ta\">கேட்டேன்</span> <span class=\"roman-inline\">(kēṭṭ-ēṉ)</span> を置きます。",
        "旅行では <span class=\"ta-inline\" lang=\"ta\">இங்கே படம் எடுக்கக் கூடாதுன்னு சொன்னாங்க</span> <span class=\"roman-inline\">(iṅkē paṭam eṭukka-k kūṭātu-ṉṉu coṉṉ-āṅka)</span> のように、施設の禁止内容を「そう言われた」と伝えられます。"
      ]
    },
    {
      "kicker": "混ぜない",
      "heading": "直接引用・指示・伝聞を同じ「言った」で潰さない",
      "takeaway": "<span class=\"ta-inline\" lang=\"ta\">வான்னு சொன்னார்</span> <span class=\"roman-inline\">(vā-ṉṉu coṉṉ-ār)</span> と <span class=\"ta-inline\" lang=\"ta\">வர சொன்னார்</span> <span class=\"roman-inline\">(vara coṉṉ-ār)</span> は構造が違います。",
      "paragraphs": [
        "前者は命令 <span class=\"ta-inline\" lang=\"ta\">வா</span> <span class=\"roman-inline\">(vā)</span> をそのまま引用します。後者は不定詞 <span class=\"ta-inline\" lang=\"ta\">வர</span> <span class=\"roman-inline\">(vara)</span> を「言う」へ渡し、「来るように言った」という指示を作ります。",
        "<span class=\"ta-inline\" lang=\"ta\">கேட்டேன்</span> <span class=\"roman-inline\">(kēṭṭ-ēṉ)</span> は自分が尋ねたこと、<span class=\"ta-inline\" lang=\"ta\">கேள்விப்பட்டேன்</span> <span class=\"roman-inline\">(kēḷvippaṭṭ-ēṉ)</span> は伝聞で知ったことです。日本語の「聞いた」だけで同一視しません。"
      ],
      "note": {
        "tone": "pink",
        "title": "この課の最重要ミス",
        "body": "引用箱の内側の人称を、外側の主語に合わせて自動変換しない。まず -ன்னு の境界を確定する。"
      }
    },
    {
      "kicker": "3文で復習",
      "heading": "言った・思った・尋ねたを、引用境界から読む",
      "takeaway": "<span class=\"ta-inline\" lang=\"ta\">-ன்னு</span> <span class=\"roman-inline\">(-ṉṉu)</span> の左を内容、右を外側の述語として読みます。",
      "paragraphs": [
        "<span class=\"ta-inline\" lang=\"ta\">அவர் நாளைக்கு வர்றேன்னு சொன்னார்.</span> <span class=\"roman-inline\">(avar nāḷai-kku varṟ-ēṉ-ṉu coṉṉ-ār.)</span><br><span class=\"reading-ja\">その方は「明日来ます」と言いました。</span><br><br><span class=\"ta-inline\" lang=\"ta\">இந்த படம் நல்லதுன்னு நினைக்கறேன்.</span> <span class=\"roman-inline\">(inta paṭam nallatu-ṉṉu niṉaikkaṟ-ēṉ.)</span><br><span class=\"reading-ja\">この映画は良いと思います。</span><br><br><span class=\"ta-inline\" lang=\"ta\">அவர் வருவாரான்னு கேட்டேன்.</span> <span class=\"roman-inline\">(avar varuv-ār-ā-ṉṉu kēṭṭ-ēṉ.)</span><br><span class=\"reading-ja\">その方が来るか尋ねました。</span>"
      ],
      "miniReading": {
        "intro": "発言・思考・質問を一文ずつ読み、引用箱の内外を確認します。",
        "ids": [
          "l19-01",
          "l19-02",
          "l19-03"
        ]
      }
    }
  ],
  "quiz": [
    {
      "focus": "形態分解",
      "q": "<span class=\"ta-inline\" lang=\"ta\">வர்றேன்னு</span> <span class=\"roman-inline\">(varṟ-ēṉ-ṉu)</span> の最後の -ன்னு は？",
      "options": [
        "引用内容の終わり",
        "一人称単数語尾",
        "敬意単数語尾",
        "過去時制標識"
      ],
      "answer": 0,
      "feedback": "<span class=\"ta-inline\" lang=\"ta\">-ன்னு</span> <span class=\"roman-inline\">(-ṉṉu)</span> は左側の引用内容を閉じ、後ろの発言・思考・質問動詞へ渡します。-ேன் はその手前です。",
      "rule": "-ன்னுを見たら、まず引用箱の右端として切る。",
      "tags": [
        "正解",
        "人称との混同",
        "敬意との混同",
        "時制との混同"
      ]
    },
    {
      "focus": "機能選択",
      "q": "<span class=\"ta-inline\" lang=\"ta\">ரவி வர்றேன்னு சொன்னான்</span> <span class=\"roman-inline\">(ravi varṟ-ēṉ-ṉu coṉṉ-āṉ)</span> の -ேன் は誰を示す？",
      "options": [
        "引用された発話の話し手であるラヴィ",
        "文を報告している外側の話し手",
        "聞き手",
        "敬意を受ける第三者"
      ],
      "answer": 0,
      "feedback": "直接引用内の -ேன் は発話時の「私」です。外側は சொன்னான் の -ான் でラヴィを三人称として示します。",
      "rule": "直接引用の人称は、外側の文へ自動的に変えない。",
      "tags": [
        "正解",
        "外側話者との混同",
        "二人称との混同",
        "敬意との混同"
      ]
    },
    {
      "focus": "実用場面",
      "q": "「その方がどこへ行くのか尋ねました」に合う文は？",
      "options": [
        "<span class=\"quiz-option-ta\" lang=\"ta\">அவர் எங்கே போறார்னு கேட்டேன்.</span><span class=\"quiz-option-roman\">avar eṅkē pōṟ-ār-ṉu kēṭṭ-ēṉ.</span><span class=\"quiz-option-ja\">その方がどこへ行くのか尋ねました</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">அவர் எங்கே போறார்.</span><span class=\"quiz-option-roman\">avar eṅkē pōṟ-ār.</span><span class=\"quiz-option-ja\">その方はどこへ行きますか／行きます</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">அவர் வருவாரான்னு கேட்டேன்.</span><span class=\"quiz-option-roman\">avar varuv-ār-ā-ṉṉu kēṭṭ-ēṉ.</span><span class=\"quiz-option-ja\">その方が来るか尋ねました</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">கடை நாளைக்கு திறக்கும்னு கேள்விப்பட்டேன்.</span><span class=\"quiz-option-roman\">kaṭai nāḷai-kku tiṟakkum-ṉu kēḷvippaṭṭ-ēṉ.</span><span class=\"quiz-option-ja\">店は明日開くと聞きました</span>"
      ],
      "answer": 0,
      "feedback": "内容疑問語 <span class=\"ta-inline\" lang=\"ta\">எங்கே</span> <span class=\"roman-inline\">(eṅkē)</span> を引用箱内に残し、<span class=\"ta-inline\" lang=\"ta\">கேட்டேன்</span> <span class=\"roman-inline\">(kēṭṭ-ēṉ)</span> で質問行為を示します。",
      "rule": "疑問語＋引用＋கேட்டேன்で、尋ねた内容を報告する。",
      "tags": [
        "正解",
        "引用なし",
        "はい・いいえ疑問",
        "伝聞"
      ]
    },
    {
      "focus": "混同防止",
      "q": "<span class=\"ta-inline\" lang=\"ta\">வான்னு சொன்னார்</span> <span class=\"roman-inline\">(vā-ṉṉu coṉṉ-ār)</span> と <span class=\"ta-inline\" lang=\"ta\">வர சொன்னார்</span> <span class=\"roman-inline\">(vara coṉṉ-ār)</span> の違いは？",
      "options": [
        "前者は「来て」と直接引用、後者は来るように指示",
        "前者は過去、後者は未来",
        "前者は質問、後者は伝聞",
        "どちらも同じ引用構造"
      ],
      "answer": 0,
      "feedback": "வா は引用箱内の命令、வர は不定詞として சொன்னார் へ渡されます。",
      "rule": "直接引用は -ன்னு、指示の不定詞は引用標識なしという対比を見る。",
      "tags": [
        "正解",
        "時制の混同",
        "発話行為の混同",
        "境界の見落とし"
      ]
    },
    {
      "focus": "総合復習",
      "q": "「この映画は良いと思います」に合う文は？",
      "options": [
        "<span class=\"quiz-option-ta\" lang=\"ta\">இந்த படம் நல்லதுன்னு நினைக்கறேன்.</span><span class=\"quiz-option-roman\">inta paṭam nallatu-ṉṉu niṉaikkaṟ-ēṉ.</span><span class=\"quiz-option-ja\">この映画は良いと思います</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">இந்த படம் நல்லா இருக்கு.</span><span class=\"quiz-option-roman\">inta paṭam nallā irukku.</span><span class=\"quiz-option-ja\">この映画は良いです</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">இந்த படம் நல்லதுன்னு கேட்டேன்.</span><span class=\"quiz-option-roman\">inta paṭam nallatu-ṉṉu kēṭṭ-ēṉ.</span><span class=\"quiz-option-ja\">この映画が良いのか尋ねました</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">இந்த படம் பற்றி பேசலாம்.</span><span class=\"quiz-option-roman\">inta paṭam paṟṟi pēca-lām.</span><span class=\"quiz-option-ja\">この映画について話しましょう</span>"
      ],
      "answer": 0,
      "feedback": "判断内容を <span class=\"ta-inline\" lang=\"ta\">-ன்னு</span> <span class=\"roman-inline\">(-ṉṉu)</span> でまとめ、<span class=\"ta-inline\" lang=\"ta\">நினைக்கறேன்</span> <span class=\"roman-inline\">(niṉaikkaṟ-ēṉ)</span> へ渡します。",
      "rule": "「思う」は引用内容＋-ன்னு＋நினைக்கறேன்で組む。",
      "tags": [
        "正解",
        "単純な性質述語",
        "質問との混同",
        "話題後置詞"
      ]
    }
  ]
},
    formConfig: Object.freeze({
      ...{
  "mode": "grammar",
  "title": "引用境界と外側の動詞を一枚で照合する",
  "intro": "-ன்னு／என்று、言う・思う・尋ねる・伝聞、直接引用と指示を並べます。",
  "checkpoint": "引用箱の境界と、内外それぞれの人称・時制を説明できれば合格です。"
},
      patterns: Object.freeze(patterns)
    }),
    heroExample: examples[0],
    examples: Object.freeze(examples)
  };

  lesson.targets = Object.freeze(lesson.targets);
  lesson.criticalPoints = Object.freeze(lesson.criticalPoints);
  lesson.readSections = Object.freeze(lesson.readSections);
  lesson.formConfig = Object.freeze(lesson.formConfig);
  lesson.quiz = Object.freeze(lesson.quiz);
  window.TAMIL_LESSONS_V30 = window.TAMIL_LESSONS_V30 || [];
  window.TAMIL_LESSONS_V30.push(Object.freeze(lesson));
})();

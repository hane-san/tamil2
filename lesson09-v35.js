(() => {
  "use strict";

  const { entry: E, confidence: C } = window.TAMIL_V30;
  const SOURCES = [
    "TAMIL-INTEGRATED-v2.0-rc.1 §§23-25,31-32",
    "PREDICATE-ENGINE-v1.1 §§1.4,4,7",
    "TAMIL-GRAMMAR-GARDEN Lesson 09",
    "SCHIFFMAN-SPOKEN-TAMIL: colloquial negative constructions and first-person modal negatives"
  ];
  const make = input => E({ ...input, sourceRefs: SOURCES, confidence: C("B", "B", "C", "B") });

  const examples = [
    {
      "id": "l9-01",
      "targetTamil": "நான் நேத்து படம் பாக்கல.",
      "structuredRoman": "nāṉ nēttu paṭam pākka-la.",
      "pronunciationRoman": "nāṉ nēttu paḍam pākkala.",
      "katakana": "ナーン ネーットゥ パダム パーッカラ。",
      "meaningJa": "私は昨日、映画を見ませんでした。",
      "literalJapanese": "私＋昨日＋映画＋見る・事実不成立",
      "morphemes": [
        {
          "surfaceTamil": "நான்",
          "gloss": "私"
        },
        {
          "surfaceTamil": "நேத்து",
          "gloss": "昨日"
        },
        {
          "surfaceTamil": "படம்",
          "gloss": "映画"
        },
        {
          "surfaceTamil": "பாக்கல",
          "gloss": "見なかった"
        }
      ],
      "grammarNote": "நேத்து があるため、-ல の形を過去の事実否定として読みます。",
      "vocabulary": [
        "நான்",
        "நேத்து",
        "படம்",
        "பாக்கல"
      ],
      "audioGroup": "lesson09-core",
      "featured": true
    },
    {
      "id": "l9-02",
      "targetTamil": "நான் இன்னும் அந்த படம் பாக்கல.",
      "structuredRoman": "nāṉ iṉṉum anta paṭam pākka-la.",
      "pronunciationRoman": "nāṉ innum anda paḍam pākkala.",
      "katakana": "ナーン インヌム アンダ パダム パーッカラ。",
      "meaningJa": "私はまだその映画を見ていません。",
      "literalJapanese": "私＋まだ＋その映画＋見る・未成立",
      "morphemes": [
        {
          "surfaceTamil": "நான்",
          "gloss": "私"
        },
        {
          "surfaceTamil": "இன்னும்",
          "gloss": "まだ"
        },
        {
          "surfaceTamil": "அந்த படம்",
          "gloss": "その映画"
        },
        {
          "surfaceTamil": "பாக்கல",
          "gloss": "まだ見ていない"
        }
      ],
      "grammarNote": "இன்னும் と組むと、同じ -ல が未完了「まだ〜していない」を表します。",
      "vocabulary": [
        "நான்",
        "இன்னும்",
        "அந்த",
        "படம்",
        "பாக்கல"
      ],
      "audioGroup": "lesson09-core",
      "featured": true
    },
    {
      "id": "l9-03",
      "targetTamil": "நான் நாளைக்கு வெளியே போக மாட்டேன்.",
      "structuredRoman": "nāṉ nāḷai-kku veḷiyē pōka māṭṭ-ēṉ.",
      "pronunciationRoman": "nāṉ nāḷaikku veḷiyē pōga māṭṭēn.",
      "katakana": "ナーン ナーライック ヴェリイェー ポーガ マーッテーン。",
      "meaningJa": "私は明日、外へ行きません。",
      "literalJapanese": "私＋明日＋外へ＋行く・しない意志・私",
      "morphemes": [
        {
          "surfaceTamil": "நான்",
          "gloss": "私"
        },
        {
          "surfaceTamil": "நாளைக்கு",
          "gloss": "明日"
        },
        {
          "surfaceTamil": "வெளியே",
          "gloss": "外へ"
        },
        {
          "surfaceTamil": "போக",
          "gloss": "行く・後続へ渡す形"
        },
        {
          "surfaceTamil": "மாட்டேன்",
          "gloss": "しない／するつもりがない・私"
        }
      ],
      "grammarNote": "மாட்டேன் は未来の非実現、意志的な「しない」、習慣としての非実行を表します。",
      "vocabulary": [
        "நான்",
        "நாளைக்கு",
        "வெளியே",
        "போக",
        "மாட்டேன்"
      ],
      "audioGroup": "lesson09-core",
      "featured": true
    },
    {
      "id": "l9-04",
      "targetTamil": "என்னால இன்னிக்கு வர முடியாது.",
      "structuredRoman": "eṉṉ-āla iṉṉikku vara muṭiyātu.",
      "pronunciationRoman": "ennāla innikku vara muḍiyādu.",
      "katakana": "エンナーラ インニック ヴァラ ムディヤードゥ。",
      "meaningJa": "私は今日は来られません。",
      "literalJapanese": "私の力・事情では＋今日＋来る＋できない",
      "morphemes": [
        {
          "surfaceTamil": "என்னால",
          "gloss": "私には／私の事情では"
        },
        {
          "surfaceTamil": "இன்னிக்கு",
          "gloss": "今日"
        },
        {
          "surfaceTamil": "வர",
          "gloss": "来る・後続へ渡す形"
        },
        {
          "surfaceTamil": "முடியாது",
          "gloss": "できない"
        }
      ],
      "grammarNote": "能力や状況の制約は、意志的拒否の மாட்டேன் ではなく முடியாது で表します。",
      "vocabulary": [
        "என்னால",
        "இன்னிக்கு",
        "வர",
        "முடியாது"
      ],
      "audioGroup": "lesson09-bank",
      "featured": false
    },
    {
      "id": "l9-05",
      "targetTamil": "நான் இப்போ காபி குடிக்கல.",
      "structuredRoman": "nāṉ ippō kāpi kuṭikka-la.",
      "pronunciationRoman": "nāṉ ippō kābi kuḍikkala.",
      "katakana": "ナーン イッポー カービ クディッカラ。",
      "meaningJa": "私は今、コーヒーを飲んでいません。",
      "literalJapanese": "私＋今＋コーヒー＋飲む・現在不成立",
      "morphemes": [
        {
          "surfaceTamil": "நான்",
          "gloss": "私"
        },
        {
          "surfaceTamil": "இப்போ",
          "gloss": "今"
        },
        {
          "surfaceTamil": "காபி",
          "gloss": "コーヒー"
        },
        {
          "surfaceTamil": "குடிக்கல",
          "gloss": "今は飲んでいない"
        }
      ],
      "grammarNote": "இப்போ があるため、-ல を現在の不成立として読みます。",
      "vocabulary": [
        "நான்",
        "இப்போ",
        "காபி",
        "குடிக்கல"
      ],
      "audioGroup": "lesson09-bank",
      "featured": false
    },
    {
      "id": "l9-06",
      "targetTamil": "நான் காபி குடிக்க மாட்டேன்.",
      "structuredRoman": "nāṉ kāpi kuṭikka māṭṭ-ēṉ.",
      "pronunciationRoman": "nāṉ kābi kuḍikka māṭṭēn.",
      "katakana": "ナーン カービ クディッカ マーッテーン。",
      "meaningJa": "私はコーヒーを飲みません。",
      "literalJapanese": "私＋コーヒー＋飲む＋しない習慣／意志・私",
      "morphemes": [
        {
          "surfaceTamil": "நான்",
          "gloss": "私"
        },
        {
          "surfaceTamil": "காபி",
          "gloss": "コーヒー"
        },
        {
          "surfaceTamil": "குடிக்க",
          "gloss": "飲む・後続へ渡す形"
        },
        {
          "surfaceTamil": "மாட்டேன்",
          "gloss": "飲まない／飲むつもりがない・私"
        }
      ],
      "grammarNote": "時間語がなければ、மாட்டேன் は習慣的にしないことや話し手の意志として読めます。",
      "vocabulary": [
        "நான்",
        "காபி",
        "குடிக்க",
        "மாட்டேன்"
      ],
      "audioGroup": "lesson09-bank",
      "featured": false
    },
    {
      "id": "l9-07",
      "targetTamil": "என்னால வேகமா நடக்க முடியாது.",
      "structuredRoman": "eṉṉ-āla vēkamā naṭakka muṭiyātu.",
      "pronunciationRoman": "ennāla vēgamā naḍakka muḍiyādu.",
      "katakana": "エンナーラ ヴェーガマー ナダッカ ムディヤードゥ。",
      "meaningJa": "私は速く歩けません。",
      "literalJapanese": "私の力では＋速く＋歩く＋できない",
      "morphemes": [
        {
          "surfaceTamil": "என்னால",
          "gloss": "私には／私の力では"
        },
        {
          "surfaceTamil": "வேகமா",
          "gloss": "速く"
        },
        {
          "surfaceTamil": "நடக்க",
          "gloss": "歩く・後続へ渡す形"
        },
        {
          "surfaceTamil": "முடியாது",
          "gloss": "できない"
        }
      ],
      "grammarNote": "身体能力やその場の事情による不可能を表す実用例です。",
      "vocabulary": [
        "என்னால",
        "வேகமா",
        "நடக்க",
        "முடியாது"
      ],
      "audioGroup": "lesson09-bank",
      "featured": false
    },
    {
      "id": "l9-08",
      "targetTamil": "என்னால இந்த பெயர் படிக்க முடியாது.",
      "structuredRoman": "eṉṉ-āla inta peyar paṭikka muṭiyātu.",
      "pronunciationRoman": "ennāla inda peyar paḍikka muḍiyādu.",
      "katakana": "エンナーラ インダ ペヤル パディッカ ムディヤードゥ。",
      "meaningJa": "私はこの名前を読めません。",
      "literalJapanese": "私の力では＋この名前＋読む＋できない",
      "morphemes": [
        {
          "surfaceTamil": "என்னால",
          "gloss": "私には／私の力では"
        },
        {
          "surfaceTamil": "இந்த பெயர்",
          "gloss": "この名前"
        },
        {
          "surfaceTamil": "படிக்க",
          "gloss": "読む・後続へ渡す形"
        },
        {
          "surfaceTamil": "முடியாது",
          "gloss": "できない"
        }
      ],
      "grammarNote": "文字や表示を読めない場面で使える、旅行中にも実用的な可能否定です。",
      "vocabulary": [
        "என்னால",
        "இந்த",
        "பெயர்",
        "படிக்க",
        "முடியாது"
      ],
      "audioGroup": "lesson09-bank",
      "featured": false
    },
    {
      "id": "l9-09",
      "targetTamil": "எனக்கு பதில் தெரியாது.",
      "structuredRoman": "eṉ-akku patil teriyātu.",
      "pronunciationRoman": "enakku padil teriyādu.",
      "katakana": "エナック パディル テリヤードゥ。",
      "meaningJa": "私は答えが分かりません。",
      "literalJapanese": "私には＋答え＋知られていない",
      "morphemes": [
        {
          "surfaceTamil": "எனக்கு",
          "gloss": "私には／経験者"
        },
        {
          "surfaceTamil": "பதில்",
          "gloss": "答え"
        },
        {
          "surfaceTamil": "தெரியாது",
          "gloss": "分からない／知らない"
        }
      ],
      "grammarNote": "頻出の தெரியாது は完成形として覚え、すべての否定を -ல から作ろうとしません。",
      "vocabulary": [
        "எனக்கு",
        "பதில்",
        "தெரியாது"
      ],
      "audioGroup": "lesson09-bank",
      "featured": false
    },
    {
      "id": "l9-10",
      "targetTamil": "எனக்கு இந்த வழி புரியல.",
      "structuredRoman": "eṉ-akku inta vaḻi puriyala.",
      "pronunciationRoman": "enakku inda vaḻi puriyala.",
      "katakana": "エナック インダ ヴァリ プリヤラ。",
      "meaningJa": "私はこの道が分かりません。",
      "literalJapanese": "私には＋この道＋分からない",
      "morphemes": [
        {
          "surfaceTamil": "எனக்கு",
          "gloss": "私には／経験者"
        },
        {
          "surfaceTamil": "இந்த வழி",
          "gloss": "この道"
        },
        {
          "surfaceTamil": "புரியல",
          "gloss": "分からない"
        }
      ],
      "grammarNote": "第6課の与格経験者と、会話的な理解否定 புரியல を組み合わせた累積復習です。",
      "vocabulary": [
        "எனக்கு",
        "இந்த",
        "வழி",
        "புரியல"
      ],
      "audioGroup": "lesson09-bank",
      "featured": false
    }
  ].map(make);

  const patterns = [
    {
      "id": "l9-form-paakkala",
      "targetTamil": "பாக்கல",
      "structuredRoman": "pākka-la",
      "pronunciationRoman": "pākkala",
      "katakana": "パーッカラ",
      "meaningJa": "見なかった／見ていない",
      "literalJapanese": "見る・事実不成立",
      "grammarNote": "時間語と文脈で過去・未完了・現在不成立を読む。",
      "vocabulary": [
        "பாக்கல"
      ],
      "audioGroup": "l9-forms",
      "kind": "-ல",
      "group": "出来事の不成立",
      "note": "時間語と文脈で過去・未完了・現在不成立を読む。"
    },
    {
      "id": "l9-form-kudikkala",
      "targetTamil": "குடிக்கல",
      "structuredRoman": "kuṭikka-la",
      "pronunciationRoman": "kuḍikkala",
      "katakana": "クディッカラ",
      "meaningJa": "飲まなかった／飲んでいない",
      "literalJapanese": "飲む・事実不成立",
      "grammarNote": "இப்போ・நேத்து などの時間語と一緒に読む。",
      "vocabulary": [
        "குடிக்கல"
      ],
      "audioGroup": "l9-forms",
      "kind": "-ல",
      "group": "出来事の不成立",
      "note": "இப்போ・நேத்து などの時間語と一緒に読む。"
    },
    {
      "id": "l9-form-pokala",
      "targetTamil": "போகல",
      "structuredRoman": "pōka-la",
      "pronunciationRoman": "pōgala",
      "katakana": "ポーガラ",
      "meaningJa": "行かなかった／行っていない",
      "literalJapanese": "行く・事実不成立",
      "grammarNote": "未来の意志的否定には自動的に使わない。",
      "vocabulary": [
        "போகல"
      ],
      "audioGroup": "l9-forms",
      "kind": "-ல",
      "group": "出来事の不成立",
      "note": "未来の意志的否定には自動的に使わない。"
    },
    {
      "id": "l9-form-poka-maatten",
      "targetTamil": "போக மாட்டேன்",
      "structuredRoman": "pōka māṭṭ-ēṉ",
      "pronunciationRoman": "pōga māṭṭēn",
      "katakana": "ポーガ マーッテーン",
      "meaningJa": "私は行きません／行くつもりはありません",
      "literalJapanese": "行く＋非実現／拒否・私",
      "grammarNote": "話し手の意志や将来の非実現を表す。",
      "vocabulary": [
        "போக மாட்டேன்"
      ],
      "audioGroup": "l9-forms",
      "kind": "மாட்டேன்",
      "group": "意志・予定・習慣",
      "note": "話し手の意志や将来の非実現を表す。"
    },
    {
      "id": "l9-form-kudikka-maatten",
      "targetTamil": "குடிக்க மாட்டேன்",
      "structuredRoman": "kuṭikka māṭṭ-ēṉ",
      "pronunciationRoman": "kuḍikka māṭṭēn",
      "katakana": "クディッカ マーッテーン",
      "meaningJa": "私は飲みません",
      "literalJapanese": "飲む＋非実現／非習慣・私",
      "grammarNote": "習慣的にしないことにも使える。",
      "vocabulary": [
        "குடிக்க மாட்டேன்"
      ],
      "audioGroup": "l9-forms",
      "kind": "மாட்டேன்",
      "group": "意志・予定・習慣",
      "note": "習慣的にしないことにも使える。"
    },
    {
      "id": "l9-form-vara-mudiyatu",
      "targetTamil": "வர முடியாது",
      "structuredRoman": "vara muṭiyātu",
      "pronunciationRoman": "vara muḍiyādu",
      "katakana": "ヴァラ ムディヤードゥ",
      "meaningJa": "来られません",
      "literalJapanese": "来る＋できない",
      "grammarNote": "拒否ではなく、能力や事情で不可能。",
      "vocabulary": [
        "வர முடியாது"
      ],
      "audioGroup": "l9-forms",
      "kind": "முடியாது",
      "group": "能力・状況の不可能",
      "note": "拒否ではなく、能力や事情で不可能。"
    },
    {
      "id": "l9-form-padikka-mudiyatu",
      "targetTamil": "படிக்க முடியாது",
      "structuredRoman": "paṭikka muṭiyātu",
      "pronunciationRoman": "paḍikka muḍiyādu",
      "katakana": "パディッカ ムディヤードゥ",
      "meaningJa": "読めません",
      "literalJapanese": "読む＋できない",
      "grammarNote": "文字や名前を読めない場面で使える。",
      "vocabulary": [
        "படிக்க முடியாது"
      ],
      "audioGroup": "l9-forms",
      "kind": "முடியாது",
      "group": "能力・状況の不可能",
      "note": "文字や名前を読めない場面で使える。"
    },
    {
      "id": "l9-form-teriyatu",
      "targetTamil": "தெரியாது",
      "structuredRoman": "teriyātu",
      "pronunciationRoman": "teriyādu",
      "katakana": "テリヤードゥ",
      "meaningJa": "分かりません／知りません",
      "literalJapanese": "知られていない",
      "grammarNote": "一つの規則から作らず、頻出の完成形として覚える。",
      "vocabulary": [
        "தெரியாது"
      ],
      "audioGroup": "l9-forms",
      "kind": "頻出完成形",
      "group": "知識の不成立",
      "note": "一つの規則から作らず、頻出の完成形として覚える。"
    },
    {
      "id": "l9-form-puriyala",
      "targetTamil": "புரியல",
      "structuredRoman": "puriya-la",
      "pronunciationRoman": "puriyala",
      "katakana": "プリヤラ",
      "meaningJa": "分かりません",
      "literalJapanese": "理解する・不成立",
      "grammarNote": "経験者 எனக்கு と組みやすい。",
      "vocabulary": [
        "புரியல"
      ],
      "audioGroup": "l9-forms",
      "kind": "頻出会話形",
      "group": "理解の不成立",
      "note": "経験者 எனக்கு と組みやすい。"
    }
  ].map(make);

  const lesson = {
    "id": "lesson09-v35",
    "number": 9,
    "navTitle": "一人称の否定",
    "title": "「ない」の意味を分け、事実・意志・不可能を選ぶ",
    "tamilTitle": "முதல் நபர் எதிர்மறை",
    "deck": "日本語の「〜ない」を一つにまとめず、-ல・மாட்டேன்・முடியாது・頻出完成形を意味領域で選びます。",
    "targets": [
      "-ல と時間語",
      "மாட்டேன் の意志・予定",
      "முடியாது の不可能",
      "否定と人称情報",
      "இல்லை・தெரியாது・புரியல"
    ],
    "heroExample": examples[0],
    "criticalPoints": [
      "<span class=\"ta-inline\" lang=\"ta\">-ல</span> <span class=\"roman-inline\">(-la)</span> は時間語と文脈で事実不成立・未完了・現在不成立を読む。",
      "<span class=\"ta-inline\" lang=\"ta\">மாட்டேன்</span> <span class=\"roman-inline\">(māṭṭ-ēṉ)</span> は意志・予定・非習慣、<span class=\"ta-inline\" lang=\"ta\">முடியாது</span> <span class=\"roman-inline\">(muṭiyātu)</span> は能力・状況の不可能。",
      "<span class=\"ta-inline\" lang=\"ta\">இல்லை</span> <span class=\"roman-inline\">(illai)</span>・<span class=\"ta-inline\" lang=\"ta\">தெரியாது</span> <span class=\"roman-inline\">(teriyātu)</span>・<span class=\"ta-inline\" lang=\"ta\">புரியல</span> <span class=\"roman-inline\">(puriya-la)</span> を一つの否定語として扱わない。"
    ],
    "readSections": [
      {
        "kicker": "まず結論",
        "heading": "日本語の「ない」を、三つの意味へ分ける",
        "takeaway": "<span class=\"ta-inline\" lang=\"ta\">பாக்கல</span> <span class=\"roman-inline\">(pākka-la)</span> は出来事の不成立、<span class=\"ta-inline\" lang=\"ta\">போக மாட்டேன்</span> <span class=\"roman-inline\">(pōka māṭṭ-ēṉ)</span> は意志・予定、<span class=\"ta-inline\" lang=\"ta\">வர முடியாது</span> <span class=\"roman-inline\">(vara muṭiyātu)</span> は不可能です。",
        "paragraphs": [
          "最初に「何が否定されているか」を決めます。昨日実際に起きなかったこと、これからしない意志、能力や事情でできないことは、同じ形では言いません。",
          "<span class=\"ta-inline\" lang=\"ta\">நான் நேத்து படம் பாக்கல</span> <span class=\"roman-inline\">(nāṉ nēttu paṭam pākka-la)</span> は過去の事実、<span class=\"ta-inline\" lang=\"ta\">நான் நாளைக்கு போக மாட்டேன்</span> <span class=\"roman-inline\">(nāṉ nāḷai-kku pōka māṭṭ-ēṉ)</span> は未来の非実現です。"
        ]
      },
      {
        "kicker": "形を読む",
        "heading": "-ல は時間語と一緒に読む",
        "takeaway": "<span class=\"ta-inline\" lang=\"ta\">பாக்கல</span> <span class=\"roman-inline\">(pākka-la)</span> だけで日本語の時制を一つに固定せず、<span class=\"ta-inline\" lang=\"ta\">நேத்து</span> <span class=\"roman-inline\">(nēttu)</span>・<span class=\"ta-inline\" lang=\"ta\">இன்னும்</span> <span class=\"roman-inline\">(iṉṉum)</span>・<span class=\"ta-inline\" lang=\"ta\">இப்போ</span> <span class=\"roman-inline\">(ippō)</span> を見ます。",
        "paragraphs": [
          "<span class=\"ta-inline\" lang=\"ta\">நேத்து படம் பாக்கல</span> <span class=\"roman-inline\">(nēttu paṭam pākka-la)</span> は「昨日、見なかった」、<span class=\"ta-inline\" lang=\"ta\">இன்னும் படம் பாக்கல</span> <span class=\"roman-inline\">(iṉṉum paṭam pākka-la)</span> は「まだ見ていない」です。",
          "<span class=\"ta-inline\" lang=\"ta\">இப்போ காபி குடிக்கல</span> <span class=\"roman-inline\">(ippō kāpi kuṭikka-la)</span> なら「今は飲んでいない」。-ல は肯定三時制を一対一で裏返す語尾ではありません。"
        ]
      },
      {
        "kicker": "なぜ？",
        "heading": "否定構文ごとに、人物情報の置き場所も違う",
        "takeaway": "<span class=\"ta-inline\" lang=\"ta\">மாட்டேன்</span> <span class=\"roman-inline\">(māṭṭ-ēṉ)</span> には一人称 <span class=\"ta-inline\" lang=\"ta\">-ேன்</span> <span class=\"roman-inline\">(-ēṉ)</span> が見えますが、<span class=\"ta-inline\" lang=\"ta\">பாக்கல</span> <span class=\"roman-inline\">(pākka-la)</span> や <span class=\"ta-inline\" lang=\"ta\">முடியாது</span> <span class=\"roman-inline\">(muṭiyātu)</span> は主語や文脈から人物を読みます。",
        "paragraphs": [
          "肯定形の <span class=\"ta-inline\" lang=\"ta\">பாத்தேன்</span> <span class=\"roman-inline\">(pātt-ēṉ)</span> は末尾だけでも「私」が分かります。否定では、すべての形が同じように人称語尾を持つわけではありません。",
          "そのため、<span class=\"ta-inline\" lang=\"ta\">நான்</span> <span class=\"roman-inline\">(nāṉ)</span> や <span class=\"ta-inline\" lang=\"ta\">என்னால</span> <span class=\"roman-inline\">(eṉṉ-āla)</span> を含む文全体を読み、否定語だけを切り取って活用表にしません。"
        ]
      },
      {
        "kicker": "実際に使う",
        "heading": "断るときは、意志か事情かで形を選ぶ",
        "takeaway": "自分の選択として「しません」なら <span class=\"ta-inline\" lang=\"ta\">மாட்டேன்</span> <span class=\"roman-inline\">(māṭṭ-ēṉ)</span>、事情を説明して「できません」なら <span class=\"ta-inline\" lang=\"ta\">முடியாது</span> <span class=\"roman-inline\">(muṭiyātu)</span> が中心です。",
        "paragraphs": [
          "<span class=\"ta-inline\" lang=\"ta\">நாளைக்கு வர மாட்டேன்</span> <span class=\"roman-inline\">(nāḷai-kku vara māṭṭ-ēṉ)</span> は「明日は来ません」。話し手の予定や意志が前面に出ます。",
          "<span class=\"ta-inline\" lang=\"ta\">என்னால இன்னிக்கு வர முடியாது</span> <span class=\"roman-inline\">(eṉṉ-āla iṉṉikku vara muṭiyātu)</span> は「今日は来られません」。能力・時間・交通などの事情による不可能を示せます。"
        ]
      },
      {
        "kicker": "混ぜない",
        "heading": "不在・知識・理解の否定も、同じ一語にしない",
        "takeaway": "<span class=\"ta-inline\" lang=\"ta\">இல்லை</span> <span class=\"roman-inline\">(illai)</span> は不在、<span class=\"ta-inline\" lang=\"ta\">தெரியாது</span> <span class=\"roman-inline\">(teriyātu)</span> は知らない、<span class=\"ta-inline\" lang=\"ta\">புரியல</span> <span class=\"roman-inline\">(puriya-la)</span> は分からないという登録済みの形です。",
        "paragraphs": [
          "<span class=\"ta-inline\" lang=\"ta\">எனக்கு பதில் தெரியாது</span> <span class=\"roman-inline\">(eṉ-akku patil teriyātu)</span> は「答えを知りません」。<span class=\"ta-inline\" lang=\"ta\">எனக்கு இந்த வழி புரியல</span> <span class=\"roman-inline\">(eṉ-akku inta vaḻi puriyala)</span> は「この道が分かりません」です。",
          "日本語訳がどれも「〜ない」でも、存在・知識・理解・意志・可能を一つの否定規則へ押し込みません。"
        ],
        "note": {
          "tone": "pink",
          "title": "この課の最重要ミス",
          "body": "「昨日行かなかった」に <span class=\"ta-inline\" lang=\"ta\">மாட்டேன்</span> <span class=\"roman-inline\">(māṭṭ-ēṉ)</span>、「事情で行けない」に <span class=\"ta-inline\" lang=\"ta\">போகல</span> <span class=\"roman-inline\">(pōka-la)</span> を選ばない。まず意味領域を決めます。"
        }
      },
      {
        "kicker": "3文で復習",
        "heading": "事実・意志・不可能を一度に見分ける",
        "takeaway": "<span class=\"ta-inline\" lang=\"ta\">பாக்கல</span> <span class=\"roman-inline\">(pākka-la)</span> → <span class=\"ta-inline\" lang=\"ta\">மாட்டேன்</span> <span class=\"roman-inline\">(māṭṭ-ēṉ)</span> → <span class=\"ta-inline\" lang=\"ta\">முடியாது</span> <span class=\"roman-inline\">(muṭiyātu)</span> の順に、話し手の意味の違いを声に出します。",
        "paragraphs": [
          "<span class=\"ta-inline\" lang=\"ta\">நான் நேத்து படம் பாக்கல.</span> <span class=\"roman-inline\">(nāṉ nēttu paṭam pākka-la.)</span><br><span class=\"reading-ja\">私は昨日、映画を見ませんでした。</span><br><br><span class=\"ta-inline\" lang=\"ta\">நான் நாளைக்கு வெளியே போக மாட்டேன்.</span> <span class=\"roman-inline\">(nāṉ nāḷai-kku veḷiyē pōka māṭṭ-ēṉ.)</span><br><span class=\"reading-ja\">私は明日、外へ行きません。</span><br><br><span class=\"ta-inline\" lang=\"ta\">என்னால இன்னிக்கு வர முடியாது.</span> <span class=\"roman-inline\">(eṉṉ-āla iṉṉikku vara muṭiyātu.)</span><br><span class=\"reading-ja\">私は今日は来られません。</span>"
        ],
        "miniReading": {
          "intro": "三つの否定装置が何を否定しているか確認します。",
          "ids": [
            "l9-01",
            "l9-03",
            "l9-04"
          ]
        }
      }
    ],
    "formConfig": {
      "mode": "grammar",
      "title": "第9課の形を、意味と構造で照合する",
      "intro": "日本語の「〜ない」を一つにまとめず、-ல・மாட்டேன்・முடியாது・頻出完成形を意味領域で選びます。",
      "patterns": Object.freeze(patterns),
      "checkpoint": "昨日の不成立、明日の意志的否定、事情による不可能を、時間語と否定装置から説明できれば合格です。"
    },
    "examples": Object.freeze(examples),
    "quiz": [
      {
        "focus": "形態分解",
        "q": "<span class=\"ta-inline\" lang=\"ta\">போக மாட்டேன்</span> <span class=\"roman-inline\">(pōka māṭṭ-ēṉ)</span> を正しく分けたものは？",
        "options": [
          "行く・後続へ渡す形＋しない意志／非実現・私",
          "行った・過去＋私",
          "行く場所＋不在",
          "行ける能力＋私"
        ],
        "answer": 0,
        "feedback": "<span class=\"ta-inline\" lang=\"ta\">போக</span> <span class=\"roman-inline\">(pōka)</span> が「行く」を後続へ渡し、<span class=\"ta-inline\" lang=\"ta\">மாட்டேன்</span> <span class=\"roman-inline\">(māṭṭ-ēṉ)</span> が非実現・拒否と一人称を示します。",
        "rule": "மாட்டேன் の前は不定詞、末尾 -ேன் は「私」。",
        "tags": [
          "正解",
          "過去形との混同",
          "場所・存在との混同",
          "可能との混同"
        ]
      },
      {
        "focus": "機能選択",
        "q": "「私は昨日、映画を見ませんでした」に合う文は？",
        "options": [
          "<span class=\"quiz-option-ta\" lang=\"ta\">நான் நேத்து படம் பாக்கல.</span><span class=\"quiz-option-roman\">nāṉ nēttu paṭam pākka-la.</span><span class=\"quiz-option-ja\">昨日、見なかった</span>",
          "<span class=\"quiz-option-ta\" lang=\"ta\">நான் நாளைக்கு படம் பாக்க மாட்டேன்.</span><span class=\"quiz-option-roman\">nāṉ nāḷai-kku paṭam pākka māṭṭ-ēṉ.</span><span class=\"quiz-option-ja\">明日、見ない</span>",
          "<span class=\"quiz-option-ta\" lang=\"ta\">என்னால படம் பாக்க முடியாது.</span><span class=\"quiz-option-roman\">eṉṉ-āla paṭam pākka muṭiyātu.</span><span class=\"quiz-option-ja\">映画を見られない</span>",
          "<span class=\"quiz-option-ta\" lang=\"ta\">எனக்கு படம் பிடிக்கும்.</span><span class=\"quiz-option-roman\">eṉ-akku paṭam piṭikkum.</span><span class=\"quiz-option-ja\">映画が好き</span>"
        ],
        "answer": 0,
        "feedback": "過去の事実否定なので、<span class=\"ta-inline\" lang=\"ta\">நேத்து</span> <span class=\"roman-inline\">(nēttu)</span> と <span class=\"ta-inline\" lang=\"ta\">பாக்கல</span> <span class=\"roman-inline\">(pākka-la)</span> を組みます。",
        "rule": "起きなかった事実は -ல、これからしない意志は மாட்டேன்。",
        "tags": [
          "正解",
          "未来の意志",
          "不可能",
          "与格経験者"
        ]
      },
      {
        "focus": "実用場面",
        "q": "「今日は事情があって来られません」と伝える文は？",
        "options": [
          "<span class=\"quiz-option-ta\" lang=\"ta\">என்னால இன்னிக்கு வர முடியாது.</span><span class=\"quiz-option-roman\">eṉṉ-āla iṉṉikku vara muṭiyātu.</span><span class=\"quiz-option-ja\">今日は来られません</span>",
          "<span class=\"quiz-option-ta\" lang=\"ta\">நான் இன்னிக்கு வர மாட்டேன்.</span><span class=\"quiz-option-roman\">nāṉ iṉṉikku vara māṭṭ-ēṉ.</span><span class=\"quiz-option-ja\">今日は来ません</span>",
          "<span class=\"quiz-option-ta\" lang=\"ta\">நான் நேத்து வரல.</span><span class=\"quiz-option-roman\">nāṉ nēttu vara-la.</span><span class=\"quiz-option-ja\">昨日来なかった</span>",
          "<span class=\"quiz-option-ta\" lang=\"ta\">எனக்கு இன்னிக்கு வர பிடிக்கும்.</span><span class=\"quiz-option-roman\">eṉ-akku iṉṉikku vara piṭikkum.</span><span class=\"quiz-option-ja\">今日は来るのが好き</span>"
        ],
        "answer": 0,
        "feedback": "能力・予定・交通などの事情による不可能は <span class=\"ta-inline\" lang=\"ta\">முடியாது</span> <span class=\"roman-inline\">(muṭiyātu)</span>。能力者を <span class=\"ta-inline\" lang=\"ta\">என்னால</span> <span class=\"roman-inline\">(eṉṉ-āla)</span> で示せます。",
        "rule": "柔らかく事情を示す「できない」は முடியாது。",
        "tags": [
          "正解",
          "意志的拒否",
          "過去事実",
          "好き構文との混同"
        ]
      },
      {
        "focus": "混同防止",
        "q": "<span class=\"ta-inline\" lang=\"ta\">நான் இன்னும் அந்த படம் பாக்கல</span> <span class=\"roman-inline\">(nāṉ iṉṉum anta paṭam pākka-la)</span> の意味は？",
        "options": [
          "私はまだその映画を見ていません",
          "私はその映画を今後絶対に見ません",
          "私はその映画を見る能力がありません",
          "その映画は存在しません"
        ],
        "answer": 0,
        "feedback": "<span class=\"ta-inline\" lang=\"ta\">இன்னும்</span> <span class=\"roman-inline\">(iṉṉum)</span>「まだ」が、<span class=\"ta-inline\" lang=\"ta\">பாக்கல</span> <span class=\"roman-inline\">(pākka-la)</span> を未完了として読ませます。",
        "rule": "-ல の時間解釈は時間語・副詞と一緒に決める。",
        "tags": [
          "正解",
          "拒否へ過剰解釈",
          "可能否定へ誤読",
          "存在否定へ誤読"
        ]
      },
      {
        "focus": "総合復習",
        "q": "「私はこの道が分かりません」で、第6課と第9課の急所を両方満たす文は？",
        "options": [
          "<span class=\"quiz-option-ta\" lang=\"ta\">எனக்கு இந்த வழி புரியல.</span><span class=\"quiz-option-roman\">eṉ-akku inta vaḻi puriyala.</span><span class=\"quiz-option-ja\">私にはこの道が分からない</span>",
          "<span class=\"quiz-option-ta\" lang=\"ta\">என்கிட்ட இந்த வழி இல்லை.</span><span class=\"quiz-option-roman\">eṉ-kiṭṭa inta vaḻi illai.</span><span class=\"quiz-option-ja\">私の手元にこの道がない</span>",
          "<span class=\"quiz-option-ta\" lang=\"ta\">நான் இந்த வழி மாட்டேன்.</span><span class=\"quiz-option-roman\">nāṉ inta vaḻi māṭṭēṉ.</span><span class=\"quiz-option-ja\">私はこの道をしない</span>",
          "<span class=\"quiz-option-ta\" lang=\"ta\">என்னை இந்த வழி முடியாது.</span><span class=\"quiz-option-roman\">eṉṉ-ai inta vaḻi muṭiyātu.</span><span class=\"quiz-option-ja\">私をこの道ができない</span>"
        ],
        "answer": 0,
        "feedback": "理解する人は与格の <span class=\"ta-inline\" lang=\"ta\">எனக்கு</span> <span class=\"roman-inline\">(eṉ-akku)</span>、理解否定は登録済みの <span class=\"ta-inline\" lang=\"ta\">புரியல</span> <span class=\"roman-inline\">(puriya-la)</span> です。",
        "rule": "経験者の格と、否定述語の種類を別々に選ぶ。",
        "tags": [
          "正解",
          "所有・不在との混同",
          "拒否述語の誤用",
          "対格・可能の誤用"
        ]
      }
    ]
  };

  lesson.targets = Object.freeze(lesson.targets);
  lesson.criticalPoints = Object.freeze(lesson.criticalPoints);
  lesson.readSections = Object.freeze(lesson.readSections);
  lesson.formConfig = Object.freeze(lesson.formConfig);
  lesson.quiz = Object.freeze(lesson.quiz);
  window.TAMIL_LESSONS_V30 = window.TAMIL_LESSONS_V30 || [];
  window.TAMIL_LESSONS_V30.push(Object.freeze(lesson));
})();

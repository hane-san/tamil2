(() => {
  "use strict";

  const { entry: E, confidence: C } = window.TAMIL_V30;
  const TENSE_SOURCES = [
  "TAMIL-INTEGRATED-v2.0-rc.1 §§23-25,31-32",
  "PREDICATE-ENGINE-v1.1 §§1.4,4",
  "TAMIL-GRAMMAR-GARDEN Lesson 08",
  "SCHIFFMAN-SPOKEN-TAMIL: first-person present, past and future paradigms",
  "CMC-COMMON-SPOKEN-TAMIL: time words and first-person tense usage"
];
  const make = input => E({ ...input, sourceRefs: TENSE_SOURCES, confidence: C("B", "B", "C", "B") });

  const examples = [
    make({
  "id": "l8-01",
  "targetTamil": "நான் இன்னிக்கு காபி குடிக்கறேன்.",
  "structuredRoman": "nāṉ iṉṉikku kāpi kuṭikkaṟ-ēṉ.",
  "pronunciationRoman": "nāṉ innikku kābi kuḍikkarēn.",
  "katakana": "ナーン インニック カービ クディッカレーン。",
  "meaningJa": "私は今日コーヒーを飲みます。",
  "literalJapanese": "私＋今日＋コーヒー＋飲む・現在・私",
  "morphemes": [
    {
      "surfaceTamil": "நான்",
      "gloss": "私"
    },
    {
      "surfaceTamil": "இன்னிக்கு",
      "gloss": "今日"
    },
    {
      "surfaceTamil": "காபி",
      "gloss": "コーヒー"
    },
    {
      "surfaceTamil": "குடிக்கறேன்",
      "gloss": "飲みます・私"
    }
  ],
  "grammarNote": "時間語と動詞形を一緒に読み、現在・過去・未来の解釈を固定します。",
  "vocabulary": [
    "நான்",
    "இன்னிக்கு",
    "காபி",
    "குடிக்கறேன்"
  ],
  "audioGroup": "lesson08-core",
  "featured": true
}),
    make({
  "id": "l8-02",
  "targetTamil": "நான் நேத்து காபி குடிச்சேன்.",
  "structuredRoman": "nāṉ nēttu kāpi kuṭicc-ēṉ.",
  "pronunciationRoman": "nāṉ nēttu kābi kuḍiccēn.",
  "katakana": "ナーン ネーットゥ カービ クディッセーン。",
  "meaningJa": "私は昨日コーヒーを飲みました。",
  "literalJapanese": "私＋昨日＋コーヒー＋飲む・過去・私",
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
      "surfaceTamil": "காபி",
      "gloss": "コーヒー"
    },
    {
      "surfaceTamil": "குடிச்சேன்",
      "gloss": "飲みました・私"
    }
  ],
  "grammarNote": "時間語と動詞形を一緒に読み、現在・過去・未来の解釈を固定します。",
  "vocabulary": [
    "நான்",
    "நேத்து",
    "காபி",
    "குடிச்சேன்"
  ],
  "audioGroup": "lesson08-core",
  "featured": true
}),
    make({
  "id": "l8-03",
  "targetTamil": "நான் நாளைக்கு காபி குடிப்பேன்.",
  "structuredRoman": "nāṉ nāḷai-kku kāpi kuṭipp-ēṉ.",
  "pronunciationRoman": "nāṉ nāḷaikku kābi kuḍippēn.",
  "katakana": "ナーン ナーライック カービ クディッペーン。",
  "meaningJa": "私は明日コーヒーを飲むつもりです。",
  "literalJapanese": "私＋明日＋コーヒー＋飲む・未来／意志・私",
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
      "surfaceTamil": "காபி",
      "gloss": "コーヒー"
    },
    {
      "surfaceTamil": "குடிப்பேன்",
      "gloss": "飲むつもりです・私"
    }
  ],
  "grammarNote": "時間語と動詞形を一緒に読み、現在・過去・未来の解釈を固定します。",
  "vocabulary": [
    "நான்",
    "நாளைக்கு",
    "காபி",
    "குடிப்பேன்"
  ],
  "audioGroup": "lesson08-core",
  "featured": true
}),
    make({
  "id": "l8-04",
  "targetTamil": "நான் இன்னிக்கு படம் பாக்கறேன்.",
  "structuredRoman": "nāṉ iṉṉikku paṭam pākkaṟ-ēṉ.",
  "pronunciationRoman": "nāṉ innikku paḍam pākkarēn.",
  "katakana": "ナーン インニック パダム パーッカレーン。",
  "meaningJa": "私は今日映画を見ます。",
  "literalJapanese": "私＋今日＋映画＋見る・現在・私",
  "morphemes": [
    {
      "surfaceTamil": "நான்",
      "gloss": "私"
    },
    {
      "surfaceTamil": "இன்னிக்கு",
      "gloss": "今日"
    },
    {
      "surfaceTamil": "படம்",
      "gloss": "映画"
    },
    {
      "surfaceTamil": "பாக்கறேன்",
      "gloss": "見ます・私"
    }
  ],
  "grammarNote": "時間語と動詞形を一緒に読み、現在・過去・未来の解釈を固定します。",
  "vocabulary": [
    "நான்",
    "இன்னிக்கு",
    "படம்",
    "பாக்கறேன்"
  ],
  "audioGroup": "lesson08-bank"
}),
    make({
  "id": "l8-05",
  "targetTamil": "நான் நேத்து படம் பாத்தேன்.",
  "structuredRoman": "nāṉ nēttu paṭam pātt-ēṉ.",
  "pronunciationRoman": "nāṉ nēttu paḍam pāttēn.",
  "katakana": "ナーン ネーットゥ パダム パーッテーン。",
  "meaningJa": "私は昨日映画を見ました。",
  "literalJapanese": "私＋昨日＋映画＋見る・過去・私",
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
      "surfaceTamil": "பாத்தேன்",
      "gloss": "見ました・私"
    }
  ],
  "grammarNote": "時間語と動詞形を一緒に読み、現在・過去・未来の解釈を固定します。",
  "vocabulary": [
    "நான்",
    "நேத்து",
    "படம்",
    "பாத்தேன்"
  ],
  "audioGroup": "lesson08-bank"
}),
    make({
  "id": "l8-06",
  "targetTamil": "நான் நாளைக்கு படம் பாப்பேன்.",
  "structuredRoman": "nāṉ nāḷai-kku paṭam pāpp-ēṉ.",
  "pronunciationRoman": "nāṉ nāḷaikku paḍam pāppēn.",
  "katakana": "ナーン ナーライック パダム パーッペーン。",
  "meaningJa": "私は明日映画を見るつもりです。",
  "literalJapanese": "私＋明日＋映画＋見る・未来／意志・私",
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
      "surfaceTamil": "படம்",
      "gloss": "映画"
    },
    {
      "surfaceTamil": "பாப்பேன்",
      "gloss": "見るつもりです・私"
    }
  ],
  "grammarNote": "時間語と動詞形を一緒に読み、現在・過去・未来の解釈を固定します。",
  "vocabulary": [
    "நான்",
    "நாளைக்கு",
    "படம்",
    "பாப்பேன்"
  ],
  "audioGroup": "lesson08-bank"
}),
    make({
  "id": "l8-07",
  "targetTamil": "நான் இன்னிக்கு சென்னைக்கு போறேன்.",
  "structuredRoman": "nāṉ iṉṉikku ceṉṉai-kku pōṟ-ēṉ.",
  "pronunciationRoman": "nāṉ innikku sennaikku pōrēn.",
  "katakana": "ナーン インニック センナイック ポーレーン。",
  "meaningJa": "私は今日チェンナイへ行きます。",
  "literalJapanese": "私＋今日＋チェンナイ・到達＋行く・現在・私",
  "morphemes": [
    {
      "surfaceTamil": "நான்",
      "gloss": "私"
    },
    {
      "surfaceTamil": "இன்னிக்கு",
      "gloss": "今日"
    },
    {
      "surfaceTamil": "சென்னைக்கு",
      "gloss": "チェンナイへ"
    },
    {
      "surfaceTamil": "போறேன்",
      "gloss": "行きます・私"
    }
  ],
  "grammarNote": "時間語と動詞形を一緒に読み、現在・過去・未来の解釈を固定します。",
  "vocabulary": [
    "நான்",
    "இன்னிக்கு",
    "சென்னை",
    "போறேன்"
  ],
  "audioGroup": "lesson08-bank",
  "japaneseEstablishedName": "チェンナイ"
}),
    make({
  "id": "l8-08",
  "targetTamil": "நான் நேத்து சென்னைக்கு போனேன்.",
  "structuredRoman": "nāṉ nēttu ceṉṉai-kku pōṉ-ēṉ.",
  "pronunciationRoman": "nāṉ nēttu sennaikku pōnēn.",
  "katakana": "ナーン ネーットゥ センナイック ポーネーン。",
  "meaningJa": "私は昨日チェンナイへ行きました。",
  "literalJapanese": "私＋昨日＋チェンナイ・到達＋行く・過去・私",
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
      "surfaceTamil": "சென்னைக்கு",
      "gloss": "チェンナイへ"
    },
    {
      "surfaceTamil": "போனேன்",
      "gloss": "行きました・私"
    }
  ],
  "grammarNote": "時間語と動詞形を一緒に読み、現在・過去・未来の解釈を固定します。",
  "vocabulary": [
    "நான்",
    "நேத்து",
    "சென்னை",
    "போனேன்"
  ],
  "audioGroup": "lesson08-bank",
  "japaneseEstablishedName": "チェンナイ"
}),
    make({
  "id": "l8-09",
  "targetTamil": "நான் நாளைக்கு சென்னைக்கு போவேன்.",
  "structuredRoman": "nāṉ nāḷai-kku ceṉṉai-kku pōv-ēṉ.",
  "pronunciationRoman": "nāṉ nāḷaikku sennaikku pōvēn.",
  "katakana": "ナーン ナーライック センナイック ポーヴェーン。",
  "meaningJa": "私は明日チェンナイへ行くつもりです。",
  "literalJapanese": "私＋明日＋チェンナイ・到達＋行く・未来／意志・私",
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
      "surfaceTamil": "சென்னைக்கு",
      "gloss": "チェンナイへ"
    },
    {
      "surfaceTamil": "போவேன்",
      "gloss": "行くつもりです・私"
    }
  ],
  "grammarNote": "時間語と動詞形を一緒に読み、現在・過去・未来の解釈を固定します。",
  "vocabulary": [
    "நான்",
    "நாளைக்கு",
    "சென்னை",
    "போவேன்"
  ],
  "audioGroup": "lesson08-bank",
  "japaneseEstablishedName": "チェンナイ"
}),
    make({
  "id": "l8-10",
  "targetTamil": "நாங்க இன்னிக்கு படம் பாக்கறோம்.",
  "structuredRoman": "nāṅka iṉṉikku paṭam pākkaṟ-ōm.",
  "pronunciationRoman": "nāṅga innikku paḍam pākkarōm.",
  "katakana": "ナーンガ インニック パダム パーッカローム。",
  "meaningJa": "私たちは今日映画を見ます。",
  "literalJapanese": "私たち（聞き手を含まない）＋今日＋映画＋見る・現在・私たち",
  "morphemes": [
    {
      "surfaceTamil": "நாங்க",
      "gloss": "私たち（聞き手を含まない）"
    },
    {
      "surfaceTamil": "இன்னிக்கு",
      "gloss": "今日"
    },
    {
      "surfaceTamil": "படம்",
      "gloss": "映画"
    },
    {
      "surfaceTamil": "பாக்கறோம்",
      "gloss": "見ます・私たち"
    }
  ],
  "grammarNote": "時間語と動詞形を一緒に読み、現在・過去・未来の解釈を固定します。",
  "vocabulary": [
    "நாங்க",
    "இன்னிக்கு",
    "படம்",
    "பாக்கறோம்"
  ],
  "audioGroup": "lesson08-bank"
}),
    make({
  "id": "l8-11",
  "targetTamil": "நாங்க நேத்து படம் பாத்தோம்.",
  "structuredRoman": "nāṅka nēttu paṭam pātt-ōm.",
  "pronunciationRoman": "nāṅga nēttu paḍam pāttōm.",
  "katakana": "ナーンガ ネーットゥ パダム パーットーム。",
  "meaningJa": "私たちは昨日映画を見ました。",
  "literalJapanese": "私たち（聞き手を含まない）＋昨日＋映画＋見る・過去・私たち",
  "morphemes": [
    {
      "surfaceTamil": "நாங்க",
      "gloss": "私たち（聞き手を含まない）"
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
      "surfaceTamil": "பாத்தோம்",
      "gloss": "見ました・私たち"
    }
  ],
  "grammarNote": "時間語と動詞形を一緒に読み、現在・過去・未来の解釈を固定します。",
  "vocabulary": [
    "நாங்க",
    "நேத்து",
    "படம்",
    "பாத்தோம்"
  ],
  "audioGroup": "lesson08-bank"
}),
    make({
  "id": "l8-12",
  "targetTamil": "நாம நாளைக்கு படம் பாப்போம்.",
  "structuredRoman": "nāma nāḷai-kku paṭam pāpp-ōm.",
  "pronunciationRoman": "nāma nāḷaikku paḍam pāppōm.",
  "katakana": "ナーマ ナーライック パダム パーッポーム。",
  "meaningJa": "私たちは明日映画を見ましょう。",
  "literalJapanese": "私たち（聞き手を含む）＋明日＋映画＋見る・未来／勧誘・私たち",
  "morphemes": [
    {
      "surfaceTamil": "நாம",
      "gloss": "私たち（聞き手を含む）"
    },
    {
      "surfaceTamil": "நாளைக்கு",
      "gloss": "明日"
    },
    {
      "surfaceTamil": "படம்",
      "gloss": "映画"
    },
    {
      "surfaceTamil": "பாப்போம்",
      "gloss": "見ましょう／見ます・私たち"
    }
  ],
  "grammarNote": "時間語と動詞形を一緒に読み、現在・過去・未来の解釈を固定します。",
  "vocabulary": [
    "நாம",
    "நாளைக்கு",
    "படம்",
    "பாப்போம்"
  ],
  "audioGroup": "lesson08-bank"
})
  ];

  const patterns = [
    make({
  "id": "l8-form-innikku",
  "targetTamil": "இன்னிக்கு",
  "structuredRoman": "iṉṉikku",
  "pronunciationRoman": "innikku",
  "katakana": "インニック",
  "meaningJa": "今日",
  "literalJapanese": "今日",
  "grammarNote": "現在形の読みを支える時間語。",
  "vocabulary": [
    "இன்னிக்கு"
  ],
  "audioGroup": "lesson08-forms",
  "kind": "時間語",
  "group": "昨日・今日・明日",
  "note": "話す日。"
}),
    make({
  "id": "l8-form-nettu",
  "targetTamil": "நேத்து",
  "structuredRoman": "nēttu",
  "pronunciationRoman": "nēttu",
  "katakana": "ネーットゥ",
  "meaningJa": "昨日",
  "literalJapanese": "昨日",
  "grammarNote": "過去形と結びつく中心時間語。",
  "vocabulary": [
    "நேத்து"
  ],
  "audioGroup": "lesson08-forms",
  "kind": "時間語",
  "group": "昨日・今日・明日",
  "note": "話す日の前日。"
}),
    make({
  "id": "l8-form-nalaikku",
  "targetTamil": "நாளைக்கு",
  "structuredRoman": "nāḷai-kku",
  "pronunciationRoman": "nāḷaikku",
  "katakana": "ナーライック",
  "meaningJa": "明日",
  "literalJapanese": "明日・時点",
  "grammarNote": "未来・予定と結びつく中心時間語。",
  "vocabulary": [
    "நாளைக்கு"
  ],
  "audioGroup": "lesson08-forms",
  "kind": "時間語",
  "group": "昨日・今日・明日",
  "note": "話す日の翌日。"
}),
    make({
  "id": "l8-form-kudikkaren",
  "targetTamil": "குடிக்கறேன்",
  "structuredRoman": "kuṭikkaṟ-ēṉ",
  "pronunciationRoman": "kuḍikkarēn",
  "katakana": "クディッカレーン",
  "meaningJa": "私は飲みます／飲んでいます",
  "literalJapanese": "飲む・現在・私",
  "grammarNote": "現在は今の動作にも習慣にも使えます。",
  "vocabulary": [
    "குடிக்கறேன்"
  ],
  "audioGroup": "lesson08-forms",
  "kind": "現在",
  "group": "குடி の三時制",
  "note": "-ேன் は一人称単数。"
}),
    make({
  "id": "l8-form-kudiccen",
  "targetTamil": "குடிச்சேன்",
  "structuredRoman": "kuṭicc-ēṉ",
  "pronunciationRoman": "kuḍiccēn",
  "katakana": "クディッセーン",
  "meaningJa": "私は飲みました",
  "literalJapanese": "飲む・過去・私",
  "grammarNote": "完了した過去。",
  "vocabulary": [
    "குடிச்சேன்"
  ],
  "audioGroup": "lesson08-forms",
  "kind": "過去",
  "group": "குடி の三時制",
  "note": "過去幹を個別に覚える。"
}),
    make({
  "id": "l8-form-kudippen",
  "targetTamil": "குடிப்பேன்",
  "structuredRoman": "kuṭipp-ēṉ",
  "pronunciationRoman": "kuḍippēn",
  "katakana": "クディッペーン",
  "meaningJa": "私は飲むつもりです",
  "literalJapanese": "飲む・未来／意志・私",
  "grammarNote": "一人称未来は予定・意志を表しやすい。",
  "vocabulary": [
    "குடிப்பேன்"
  ],
  "audioGroup": "lesson08-forms",
  "kind": "未来",
  "group": "குடி の三時制",
  "note": "-ேன் は変わらない。"
}),
    make({
  "id": "l8-form-paakkaren",
  "targetTamil": "பாக்கறேன்",
  "structuredRoman": "pākkaṟ-ēṉ",
  "pronunciationRoman": "pākkarēn",
  "katakana": "パーッカレーン",
  "meaningJa": "私は見ます／見ています",
  "literalJapanese": "見る・現在・私",
  "grammarNote": "現在の完成形。",
  "vocabulary": [
    "பாக்கறேன்"
  ],
  "audioGroup": "lesson08-forms",
  "kind": "現在",
  "group": "பார் の三時制",
  "note": "時間語で現在の読みを絞る。"
}),
    make({
  "id": "l8-form-paatten",
  "targetTamil": "பாத்தேன்",
  "structuredRoman": "pātt-ēṉ",
  "pronunciationRoman": "pāttēn",
  "katakana": "パーッテーン",
  "meaningJa": "私は見ました",
  "literalJapanese": "見る・過去・私",
  "grammarNote": "பார் 系の過去。",
  "vocabulary": [
    "பாத்தேன்"
  ],
  "audioGroup": "lesson08-forms",
  "kind": "過去",
  "group": "பார் の三時制",
  "note": "நேத்து と結びつけて反復。"
}),
    make({
  "id": "l8-form-paappen",
  "targetTamil": "பாப்பேன்",
  "structuredRoman": "pāpp-ēṉ",
  "pronunciationRoman": "pāppēn",
  "katakana": "パーッペーン",
  "meaningJa": "私は見るつもりです",
  "literalJapanese": "見る・未来／意志・私",
  "grammarNote": "一人称未来。",
  "vocabulary": [
    "பாப்பேன்"
  ],
  "audioGroup": "lesson08-forms",
  "kind": "未来",
  "group": "பார் の三時制",
  "note": "நாளைக்கு と結びつける。"
}),
    make({
  "id": "l8-form-paappom",
  "targetTamil": "பாப்போம்",
  "structuredRoman": "pāpp-ōm",
  "pronunciationRoman": "pāppōm",
  "katakana": "パーッポーム",
  "meaningJa": "私たちは見ます／見ましょう",
  "literalJapanese": "見る・未来／勧誘・私たち",
  "grammarNote": "-ோம் は一人称複数。நாம と組むと勧誘になりやすい。",
  "vocabulary": [
    "பாப்போம்"
  ],
  "audioGroup": "lesson08-forms",
  "kind": "一人称複数",
  "group": "人物語尾",
  "note": "包括性は代名詞で示す。"
})
  ];

  window.TAMIL_LESSONS_V30 = window.TAMIL_LESSONS_V30 || [];
  window.TAMIL_LESSONS_V30.push(Object.freeze({
    id: "lesson08-first-person-tense-v33",
    number: 8,
    navTitle: "一人称の現在・過去・未来",
    title: "時間語を置き、同じ一人称で出来事を動かす",
    tamilTitle: "முதல் நபர்: நிகழ்காலம், இறந்தகாலம், எதிர்காலம்",
    deck: "இன்னிக்கு／நேத்து／நாளைக்கு と -ேன்／-ோம் を手掛かりに、現在・過去・未来を同時に変えず観察します。未来は予定・意志にもなります。",
    targets: Object.freeze([
  "இன்னிக்கு 今日",
  "நேத்து 昨日",
  "நாளைக்கு 明日",
  "一人称単数 -ேன்",
  "一人称複数 -ோம்",
  "未来の予定・意志"
]),
    heroExample: examples[0],
    readSections: Object.freeze([
  {
    "kicker": "TIME TRIANGLE",
    "heading": "昨日・今日・明日を、同じ動詞で往復する",
    "paragraphs": [
      "<span class=\"ta-inline\" lang=\"ta\">குடிக்கறேன்</span>、<span class=\"ta-inline\" lang=\"ta\">குடிச்சேன்</span>、<span class=\"ta-inline\" lang=\"ta\">குடிப்பேன்</span> を、இன்னிக்கு・நேத்து・நாளைக்கு と組み合わせます。",
      "人物を一人称単数に固定することで、変わった部分が時間なのか人物なのかを混同しません。"
    ],
    "caseMap": {
      "rows": [
        {
          "role": "今日・現在",
          "targetForm": "இன்னிக்கு＋現在形",
          "pronunciation": "innikku + present",
          "kana": "インニック＋現在",
          "exampleTa": "இன்னிக்கு குடிக்கறேன்",
          "exampleRoman": "iṉṉikku kuṭikkaṟ-ēṉ",
          "cue": "今・今日・習慣・予定"
        },
        {
          "role": "昨日・過去",
          "targetForm": "நேத்து＋過去形",
          "pronunciation": "nēttu + past",
          "kana": "ネーットゥ＋過去",
          "exampleTa": "நேத்து குடிச்சேன்",
          "exampleRoman": "nēttu kuṭicc-ēṉ",
          "cue": "完了した出来事"
        },
        {
          "role": "明日・未来",
          "targetForm": "நாளைக்கு＋未来形",
          "pronunciation": "nāḷaikku + future",
          "kana": "ナーライック＋未来",
          "exampleTa": "நாளைக்கு குடிப்பேன்",
          "exampleRoman": "nāḷai-kku kuṭipp-ēṉ",
          "cue": "予定・意志・約束"
        }
      ]
    }
  },
  {
    "kicker": "PRESENT RANGE",
    "heading": "現在形を必ず「今〜している」と訳さない",
    "paragraphs": [
      "<span class=\"ta-inline\" lang=\"ta\">நான் இன்னிக்கு காபி குடிக்கறேன்</span> は、場面によって「今飲んでいます」「今日は飲みます」のどちらにもなれます。",
      "単純現在は進行中、習慣、予定された行為などを覆います。明示的な進行構文は第12課で扱います。"
    ],
    "note": {
      "tone": "blue",
      "title": "時間語が助ける",
      "body": "形だけで日本語訳を一つに固定せず、இப்போ、தினமும்、இன்னிக்கு などの文脈と一緒に読みます。"
    }
  },
  {
    "kicker": "FIRST PERSON",
    "heading": "時制が変わっても、人物語尾は最後に残る",
    "paragraphs": [
      "一人称単数では現在・過去・未来のすべてで <strong>-ேன்</strong> が残ります。一人称複数は <strong>-ோம்</strong> です。",
      "நாங்க は聞き手を含まない「私たち」、நாம は聞き手を含む「私たち」。動詞語尾が同じでも、参加者の範囲は代名詞と文脈で決まります。"
    ],
    "formula": {
      "label": "明日、私たちは見ましょう",
      "slots": [
        "நாம",
        "நாளைக்கு",
        "பாப்போம்"
      ],
      "note": "包括一人称 → 明日 → 未来／勧誘・一人称複数"
    }
  },
  {
    "kicker": "SHORT READING",
    "heading": "昨日・今日・明日を三文でつなぐ",
    "paragraphs": [
      "昨日の映画、今日のコーヒー、明日の移動を一人称語尾から追います。",
      "<span class=\"ta-inline\" lang=\"ta\">நான் நேத்து படம் பாத்தேன்.</span><br><span class=\"ta-inline\" lang=\"ta\">நான் இன்னிக்கு காபி குடிக்கறேன்.</span><br><span class=\"ta-inline\" lang=\"ta\">நான் நாளைக்கு சென்னைக்கு போவேன்.</span>"
    ],
    "miniReading": {
      "intro": "時間語と中央の動詞形を対応させます。",
      "ids": [
        "l8-05",
        "l8-01",
        "l8-09"
      ]
    }
  }
]),
    formConfig: Object.freeze({
      mode: "grammar",
      title: "時間語・時制・人物語尾を三列に分ける",
      intro: "இன்னிக்கு／நேத்து／நாளைக்கு と、குடி・பார் の三時制、一人称複数 -ோம் を並べます。",
      patterns: Object.freeze(patterns),
      checkpoint: "நேத்து＋பாத்தேன்、நாளைக்கு＋பாப்பேன் を選び、-ேன் と -ோம் の人物差、未来の意志・予定の読みを説明できれば合格です。"
    }),
    examples: Object.freeze(examples),
    quiz: Object.freeze([
  {
    "q": "「今日」を表す中心形は？",
    "options": [
      "இன்னிக்கு",
      "நேத்து",
      "நாளைக்கு",
      "வீட்டுக்கு"
    ],
    "answer": 0,
    "feedback": "இன்னிக்கு が今日。ほかは昨日、明日、家への到達です。",
    "tags": [
      "正解",
      "過去時間",
      "未来時間",
      "場所格"
    ]
  },
  {
    "q": "「私は昨日映画を見ました」は？",
    "options": [
      "நான் நேத்து படம் பாத்தேன்",
      "நான் இன்னிக்கு படம் பாக்கறேன்",
      "நான் நாளைக்கு படம் பாப்பேன்",
      "நாங்க நேத்து படம் பாத்தோம்"
    ],
    "answer": 0,
    "feedback": "நேத்து と一人称単数過去 பாத்தேன் を組みます。",
    "tags": [
      "正解",
      "現在",
      "未来",
      "人数"
    ]
  },
  {
    "q": "一人称未来が表しやすい意味は？",
    "options": [
      "予定・意志・約束",
      "必ず過去の経験",
      "名詞の所有だけ",
      "場所での静止だけ"
    ],
    "answer": 0,
    "feedback": "நாளைக்கு போவேன் のように、話し手の予定や意志を自然に表します。",
    "tags": [
      "正解",
      "時制逆転",
      "述語型混同",
      "格混同"
    ]
  },
  {
    "q": "一人称複数の手掛かりになる末尾は？",
    "options": [
      "-ோம்",
      "-ேன்",
      "-ார்",
      "-க்கு"
    ],
    "answer": 0,
    "feedback": "-ோம் が「私たち」。-ேன் は私、-ார் は敬意、-க்கு は格です。",
    "tags": [
      "正解",
      "単数",
      "敬意",
      "格"
    ]
  },
  {
    "q": "நாம நாளைக்கு படம் பாப்போம் の読みとして最も自然なのは？",
    "options": [
      "私たちは明日映画を見ましょう",
      "私は昨日映画を見ました",
      "その方は明日映画を見ます",
      "私たちは今日映画を見ています"
    ],
    "answer": 0,
    "feedback": "நாம は聞き手を含む私たちで、未来一人称複数が勧誘として読まれます。",
    "tags": [
      "正解",
      "人称時制",
      "敬意人称",
      "時間時制"
    ]
  }
])
  }));
})();

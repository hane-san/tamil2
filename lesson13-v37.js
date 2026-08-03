(() => {
  "use strict";

  const { entry: E, confidence: C } = window.TAMIL_V30;
  const SOURCES = [
  "TAMIL-INTEGRATED-v2.0-rc.1 §§23-25,31-32",
  "PREDICATE-ENGINE-v1.1 §§1.4,3,4",
  "TAMIL-GRAMMAR-GARDEN Lessons 09-10,13",
  "SCHIFFMAN-SPOKEN-TAMIL: infinitives, dative statives, modals and prohibitives"
];
  const make = input => E({ ...input, sourceRefs: SOURCES, confidence: input.confidence ?? C("B", "B", "C", "B") });

  const examples = [
  {
    "id": "l13-01",
    "targetTamil": "என்னால தமிழ் பேச முடியும்.",
    "structuredRoman": "eṉṉ-āla tamiḻ pēca muṭiyum.",
    "pronunciationRoman": "ennāla tamiḻ pēsa muḍiyum.",
    "katakana": "エンナーラ タミル ペーサ ムディユム。",
    "meaningJa": "私はタミル語を話せます。",
    "literalJapanese": "私の力では＋タミル語＋話す＋可能です",
    "morphemes": [
      {
        "surfaceTamil": "என்னால",
        "gloss": "私には／私の力では"
      },
      {
        "surfaceTamil": "தமிழ்",
        "gloss": "タミル語"
      },
      {
        "surfaceTamil": "பேச",
        "gloss": "話す・不定詞"
      },
      {
        "surfaceTamil": "முடியும்",
        "gloss": "できます"
      }
    ],
    "grammarNote": "不定詞 பேச の後ろに முடியும் を置き、能力・状況として可能だと述べます。",
    "vocabulary": [
      "என்னால",
      "தமிழ்",
      "பேச",
      "முடியும்"
    ],
    "audioGroup": "lesson13-core",
    "featured": true
  },
  {
    "id": "l13-02",
    "targetTamil": "என்னால இன்னிக்கு வர முடியாது.",
    "structuredRoman": "eṉṉ-āla iṉṉikku vara muṭiyātu.",
    "pronunciationRoman": "ennāla innikku vara muḍiyādu.",
    "katakana": "エンナーラ インニック ヴァラ ムディヤードゥ。",
    "meaningJa": "私は今日は来られません。",
    "literalJapanese": "私の力／状況では＋今日＋来る＋不可能です",
    "morphemes": [
      {
        "surfaceTamil": "என்னால",
        "gloss": "私には／私の状況では"
      },
      {
        "surfaceTamil": "இன்னிக்கு",
        "gloss": "今日"
      },
      {
        "surfaceTamil": "வர",
        "gloss": "来る・不定詞"
      },
      {
        "surfaceTamil": "முடியாது",
        "gloss": "できません"
      }
    ],
    "grammarNote": "முடியாது は能力・時間・交通などの条件による不可能で、禁止の கூடாது とは別です。",
    "vocabulary": [
      "என்னால",
      "இன்னிக்கு",
      "வர",
      "முடியாது"
    ],
    "audioGroup": "lesson13-core",
    "featured": true
  },
  {
    "id": "l13-03",
    "targetTamil": "இங்கே கார்டு பயன்படுத்த முடியும்.",
    "structuredRoman": "iṅkē kārṭu payaṉpaṭutta muṭiyum.",
    "pronunciationRoman": "ingē kārḍu payanbaḍutta muḍiyum.",
    "katakana": "インゲー カールドゥ パヤンバドゥッタ ムディユム。",
    "meaningJa": "ここではカードを使えます。",
    "literalJapanese": "ここで＋カード＋使う＋可能です",
    "morphemes": [
      {
        "surfaceTamil": "இங்கே",
        "gloss": "ここで"
      },
      {
        "surfaceTamil": "கார்டு",
        "gloss": "カード"
      },
      {
        "surfaceTamil": "பயன்படுத்த",
        "gloss": "使う・不定詞"
      },
      {
        "surfaceTamil": "முடியும்",
        "gloss": "可能です"
      }
    ],
    "grammarNote": "人の能力だけでなく、店や設備の条件として「使える」場合にも முடியும் を使えます。",
    "vocabulary": [
      "இங்கே",
      "கார்டு",
      "பயன்படுத்த",
      "முடியும்"
    ],
    "audioGroup": "lesson13-bank",
    "featured": false
  },
  {
    "id": "l13-04",
    "targetTamil": "எனக்கு தமிழ் படம் பாக்க ஆசை இருக்கு.",
    "structuredRoman": "eṉ-akku tamiḻ paṭam pākka ācai irukku.",
    "pronunciationRoman": "enakku tamiḻ paḍam pākka āsai irukku.",
    "katakana": "エナック タミル パダム パーッカ アーサイ イルック。",
    "meaningJa": "私はタミル映画を見たいです。",
    "literalJapanese": "私には＋タミル映画＋見る＋願い＋あります",
    "morphemes": [
      {
        "surfaceTamil": "எனக்கு",
        "gloss": "私には／願いを持つ人"
      },
      {
        "surfaceTamil": "தமிழ் படம்",
        "gloss": "タミル映画"
      },
      {
        "surfaceTamil": "பாக்க",
        "gloss": "見る・不定詞"
      },
      {
        "surfaceTamil": "ஆசை இருக்கு",
        "gloss": "願いがあります"
      }
    ],
    "grammarNote": "個人的な願いを明確にする透明な構造です。願いを持つ人は எனக்கு で置きます。",
    "vocabulary": [
      "எனக்கு",
      "தமிழ் படம்",
      "பாக்க",
      "ஆசை இருக்கு"
    ],
    "audioGroup": "lesson13-core",
    "featured": true
  },
  {
    "id": "l13-05",
    "targetTamil": "எனக்கு சென்னைக்கு போக ஆசை இருக்கு.",
    "structuredRoman": "eṉ-akku ceṉṉai-kku pōka ācai irukku.",
    "pronunciationRoman": "enakku sennaikku pōga āsai irukku.",
    "katakana": "エナック センナイック ポーガ アーサイ イルック。",
    "meaningJa": "私はチェンナイへ行きたいです。",
    "literalJapanese": "私には＋チェンナイへ＋行く＋願い＋あります",
    "morphemes": [
      {
        "surfaceTamil": "எனக்கு",
        "gloss": "私には"
      },
      {
        "surfaceTamil": "சென்னைக்கு",
        "gloss": "チェンナイへ"
      },
      {
        "surfaceTamil": "போக",
        "gloss": "行く・不定詞"
      },
      {
        "surfaceTamil": "ஆசை இருக்கு",
        "gloss": "願いがあります"
      }
    ],
    "grammarNote": "旅行の希望を、到達点 -க்கு と願望構文で組み立てます。",
    "vocabulary": [
      "எனக்கு",
      "சென்னைக்கு",
      "போக",
      "ஆசை இருக்கு"
    ],
    "audioGroup": "lesson13-bank",
    "featured": false
  },
  {
    "id": "l13-06",
    "targetTamil": "இன்னிக்கு டிக்கெட் வாங்கணும்.",
    "structuredRoman": "iṉṉikku ṭikkeṭ vāṅka-ṇum.",
    "pronunciationRoman": "innikku ṭikkeṭ vāngaṇum.",
    "katakana": "インニック ティッケトゥ ヴァーンガヌム。",
    "meaningJa": "今日は切符を買う必要があります。",
    "literalJapanese": "今日＋切符＋買う・必要",
    "morphemes": [
      {
        "surfaceTamil": "இன்னிக்கு",
        "gloss": "今日"
      },
      {
        "surfaceTamil": "டிக்கெட்",
        "gloss": "切符"
      },
      {
        "surfaceTamil": "வாங்கணும்",
        "gloss": "買う必要があります"
      }
    ],
    "grammarNote": "-ணும் は会話で非常に頻出する必要・義務の形です。文脈により強い希望にもなります。",
    "vocabulary": [
      "இன்னிக்கு",
      "டிக்கெட்",
      "வாங்கணும்"
    ],
    "audioGroup": "lesson13-core",
    "featured": true
  },
  {
    "id": "l13-07",
    "targetTamil": "எனக்கு நாளைக்கு சீக்கிரம் வரணும்.",
    "structuredRoman": "eṉ-akku nāḷai-kku cīkkiram vara-ṇum.",
    "pronunciationRoman": "enakku nāḷaikku sīkkiram varaṇum.",
    "katakana": "エナック ナーライック シーッキラム ヴァラヌム。",
    "meaningJa": "私は明日、早く来る必要があります。",
    "literalJapanese": "私には＋明日＋早く＋来る・必要",
    "morphemes": [
      {
        "surfaceTamil": "எனக்கு",
        "gloss": "私には"
      },
      {
        "surfaceTamil": "நாளைக்கு",
        "gloss": "明日"
      },
      {
        "surfaceTamil": "சீக்கிரம்",
        "gloss": "早く"
      },
      {
        "surfaceTamil": "வரணும்",
        "gloss": "来る必要があります"
      }
    ],
    "grammarNote": "必要を負う人を明示するとき、経験者・当事者を எனக்கு で置けます。",
    "vocabulary": [
      "எனக்கு",
      "நாளைக்கு",
      "சீக்கிரம்",
      "வரணும்"
    ],
    "audioGroup": "lesson13-bank",
    "featured": false
  },
  {
    "id": "l13-08",
    "targetTamil": "எனக்கு ஒரு டிக்கெட் வேணும்.",
    "structuredRoman": "eṉ-akku oru ṭikkeṭ vēṇum.",
    "pronunciationRoman": "enakku oru ṭikkeṭ vēṇum.",
    "katakana": "エナック オル ティッケトゥ ヴェーヌム。",
    "meaningJa": "私は切符が一枚必要です／欲しいです。",
    "literalJapanese": "私には＋一つの切符＋必要です",
    "morphemes": [
      {
        "surfaceTamil": "எனக்கு",
        "gloss": "私には"
      },
      {
        "surfaceTamil": "ஒரு டிக்கெட்",
        "gloss": "切符一枚"
      },
      {
        "surfaceTamil": "வேணும்",
        "gloss": "必要です／欲しいです"
      }
    ],
    "grammarNote": "名詞＋வேணும் は「その物が必要／欲しい」。動詞＋-ணும் と区別します。",
    "vocabulary": [
      "எனக்கு",
      "ஒரு",
      "டிக்கெட்",
      "வேணும்"
    ],
    "audioGroup": "lesson13-bank",
    "featured": false,
    "counterparts": [
      {
        "primaryRegister": "LT-WR",
        "targetTamil": "எனக்கு ஒரு டிக்கெட் வேண்டும்.",
        "note": "現代文語・保守的表記"
      }
    ]
  },
  {
    "id": "l13-09",
    "targetTamil": "இங்கே போன் பயன்படுத்தக் கூடாது.",
    "structuredRoman": "iṅkē pōṉ payaṉpaṭutta-k kūṭātu.",
    "pronunciationRoman": "ingē pōn payanbaḍuttak kūḍādu.",
    "katakana": "インゲー ポーン パヤンバドゥッタック クーダードゥ。",
    "meaningJa": "ここでは電話を使ってはいけません。",
    "literalJapanese": "ここで＋電話＋使う＋禁止",
    "morphemes": [
      {
        "surfaceTamil": "இங்கே",
        "gloss": "ここで"
      },
      {
        "surfaceTamil": "போன்",
        "gloss": "電話"
      },
      {
        "surfaceTamil": "பயன்படுத்தக்",
        "gloss": "使う・接合形"
      },
      {
        "surfaceTamil": "கூடாது",
        "gloss": "してはいけません"
      }
    ],
    "grammarNote": "கூடாது は規則・許可・判断上の禁止です。できない முடியாது と混同しません。",
    "vocabulary": [
      "இங்கே",
      "போன்",
      "பயன்படுத்தக்",
      "கூடாது"
    ],
    "audioGroup": "lesson13-core",
    "featured": true
  },
  {
    "id": "l13-10",
    "targetTamil": "இங்கே படம் எடுக்கக் கூடாது.",
    "structuredRoman": "iṅkē paṭam eṭukka-k kūṭātu.",
    "pronunciationRoman": "ingē paḍam eḍukkak kūḍādu.",
    "katakana": "インゲー パダム エドゥッカック クーダードゥ。",
    "meaningJa": "ここでは写真を撮ってはいけません。",
    "literalJapanese": "ここで＋写真＋撮る＋禁止",
    "morphemes": [
      {
        "surfaceTamil": "இங்கே",
        "gloss": "ここで"
      },
      {
        "surfaceTamil": "படம்",
        "gloss": "写真／映像"
      },
      {
        "surfaceTamil": "எடுக்கக்",
        "gloss": "撮る・接合形"
      },
      {
        "surfaceTamil": "கூடாது",
        "gloss": "してはいけません"
      }
    ],
    "grammarNote": "寺院・劇場・施設の表示で実用性が高い禁止表現です。",
    "vocabulary": [
      "இங்கே",
      "படம்",
      "எடுக்கக்",
      "கூடாது"
    ],
    "audioGroup": "lesson13-bank",
    "featured": false
  },
  {
    "id": "l13-11",
    "targetTamil": "நான் இன்னிக்கு டிக்கெட் வாங்கப் போறேன்.",
    "structuredRoman": "nāṉ iṉṉikku ṭikkeṭ vāṅka-p pōṟ-ēṉ.",
    "pronunciationRoman": "nān innikku ṭikkeṭ vāngap pōrēn.",
    "katakana": "ナーン インニック ティッケトゥ ヴァーンガッ ポーレーン。",
    "meaningJa": "私は今日、切符を買うつもりです。",
    "literalJapanese": "私＋今日＋切符＋買う＋これから行く・私",
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
        "surfaceTamil": "டிக்கெட்",
        "gloss": "切符"
      },
      {
        "surfaceTamil": "வாங்கப்",
        "gloss": "買う・接合形"
      },
      {
        "surfaceTamil": "போறேன்",
        "gloss": "するつもりです／これからします・私"
      }
    ],
    "grammarNote": "不定詞＋போறேன் で近い計画・意志を明示します。単純未来も予定を表せますが、ここでは計画の輪郭をはっきりさせます。",
    "vocabulary": [
      "நான்",
      "இன்னிக்கு",
      "டிக்கெட்",
      "வாங்கப்",
      "போறேன்"
    ],
    "audioGroup": "lesson13-core",
    "featured": true
  }
].map(make);

  const patterns = [
  {
    "id": "l13-form-mudiyum",
    "targetTamil": "பேச முடியும்",
    "structuredRoman": "pēca muṭiyum",
    "pronunciationRoman": "pēsa muḍiyum",
    "katakana": "ペーサ ムディユム",
    "meaningJa": "話せます",
    "literalJapanese": "話す＋可能",
    "grammarNote": "不定詞の後ろに置き、能力・状況として可能だと示す。",
    "vocabulary": [
      "பேச முடியும்"
    ],
    "audioGroup": "l13-forms",
    "kind": "可能",
    "group": "可能・不可能",
    "note": "不定詞の後ろに置き、能力・状況として可能だと示す。"
  },
  {
    "id": "l13-form-mudiyatu",
    "targetTamil": "வர முடியாது",
    "structuredRoman": "vara muṭiyātu",
    "pronunciationRoman": "vara muḍiyādu",
    "katakana": "ヴァラ ムディヤードゥ",
    "meaningJa": "来られません",
    "literalJapanese": "来る＋不可能",
    "grammarNote": "能力・時間・交通などの条件により実現できない。",
    "vocabulary": [
      "வர முடியாது"
    ],
    "audioGroup": "l13-forms",
    "kind": "不可能",
    "group": "可能・不可能",
    "note": "能力・時間・交通などの条件により実現できない。"
  },
  {
    "id": "l13-form-aasai",
    "targetTamil": "பாக்க ஆசை இருக்கு",
    "structuredRoman": "pākka ācai irukku",
    "pronunciationRoman": "pākka āsai irukku",
    "katakana": "パーッカ アーサイ イルック",
    "meaningJa": "見たいです",
    "literalJapanese": "見る＋願い＋ある",
    "grammarNote": "個人的な願いを透明に示す。願う人は与格で置く。",
    "vocabulary": [
      "பாக்க ஆசை இருக்கு"
    ],
    "audioGroup": "l13-forms",
    "kind": "個人的な願い",
    "group": "希望・必要",
    "note": "個人的な願いを透明に示す。願う人は与格で置く。"
  },
  {
    "id": "l13-form-vankanum",
    "targetTamil": "வாங்கணும்",
    "structuredRoman": "vāṅka-ṇum",
    "pronunciationRoman": "vāngaṇum",
    "katakana": "ヴァーンガヌム",
    "meaningJa": "買う必要があります／買いたいです",
    "literalJapanese": "買う・必要／希望",
    "grammarNote": "会話で頻出。文脈により必要・義務または強い希望。",
    "vocabulary": [
      "வாங்கணும்"
    ],
    "audioGroup": "l13-forms",
    "kind": "必要・義務",
    "group": "希望・必要",
    "note": "会話で頻出。文脈により必要・義務または強い希望。"
  },
  {
    "id": "l13-form-venum",
    "targetTamil": "டிக்கெட் வேணும்",
    "structuredRoman": "ṭikkeṭ vēṇum",
    "pronunciationRoman": "ṭikkeṭ vēṇum",
    "katakana": "ティッケトゥ ヴェーヌム",
    "meaningJa": "切符が必要です／欲しいです",
    "literalJapanese": "切符＋必要",
    "grammarNote": "名詞の必要・欲求を示す。動詞に密着する -ணும் と区別。",
    "vocabulary": [
      "டிக்கெட் வேணும்"
    ],
    "audioGroup": "l13-forms",
    "kind": "物の必要",
    "group": "希望・必要",
    "note": "名詞の必要・欲求を示す。動詞に密着する -ணும் と区別。"
  },
  {
    "id": "l13-form-kudatu",
    "targetTamil": "பயன்படுத்தக் கூடாது",
    "structuredRoman": "payaṉpaṭutta-k kūṭātu",
    "pronunciationRoman": "payanbaḍuttak kūḍādu",
    "katakana": "パヤンバドゥッタック クーダードゥ",
    "meaningJa": "使ってはいけません",
    "literalJapanese": "使う＋禁止",
    "grammarNote": "規則・許可・判断上の禁止。 முடியாது の不可能とは別。",
    "vocabulary": [
      "பயன்படுத்தக் கூடாது"
    ],
    "audioGroup": "l13-forms",
    "kind": "禁止",
    "group": "禁止・意志",
    "note": "規則・許可・判断上の禁止。 முடியாது の不可能とは別。"
  },
  {
    "id": "l13-form-poreen",
    "targetTamil": "வாங்கப் போறேன்",
    "structuredRoman": "vāṅka-p pōṟ-ēṉ",
    "pronunciationRoman": "vāngap pōrēn",
    "katakana": "ヴァーンガッ ポーレーン",
    "meaningJa": "買うつもりです",
    "literalJapanese": "買う＋これからする・私",
    "grammarNote": "近い計画・意志を明示する。",
    "vocabulary": [
      "வாங்கப் போறேன்"
    ],
    "audioGroup": "l13-forms",
    "kind": "計画・意志",
    "group": "禁止・意志",
    "note": "近い計画・意志を明示する。"
  },
  {
    "id": "l13-form-contrast",
    "targetTamil": "வரணும்",
    "structuredRoman": "vara-ṇum",
    "pronunciationRoman": "varaṇum",
    "katakana": "ヴァラヌム",
    "meaningJa": "来る必要があります",
    "literalJapanese": "来る・必要",
    "grammarNote": "வர முடியும்・வரக் கூடாது と右端を比較する中心形。",
    "vocabulary": [
      "வரணும்"
    ],
    "audioGroup": "l13-forms",
    "kind": "三項対比",
    "group": "可能・必要・禁止",
    "note": "வர முடியும்・வரக் கூடாது と右端を比較する中心形。"
  }
].map(make);

  const lesson = {
  "id": "lesson13-v37",
  "number": 13,
  "navTitle": "可能・希望・必要・禁止",
  "title": "できる・したい・必要・禁止・計画を、右端で言い分ける",
  "tamilTitle": "முடியும், ஆசை இருக்கு, -ணும், கூடாது",
  "deck": "日本語では近く見える「できる・したい・ねば・してはいけない・するつもり」を、別の構造として読み分けます。",
  "targets": [
    "可能と不可能",
    "個人的な願い",
    "必要・義務",
    "禁止",
    "計画・意志"
  ],
  "heroExample": examples[0],
  "criticalPoints": [
    "<span class=\"ta-inline\" lang=\"ta\">முடியும்</span> <span class=\"roman-inline\">(muṭiyum)</span>／<span class=\"ta-inline\" lang=\"ta\">முடியாது</span> <span class=\"roman-inline\">(muṭiyātu)</span> は能力・状況として可能／不可能。禁止ではない。",
    "<span class=\"ta-inline\" lang=\"ta\">ஆசை இருக்கு</span> <span class=\"roman-inline\">(ācai irukku)</span> は個人的な願いを明示し、<span class=\"ta-inline\" lang=\"ta\">-ணும்</span> <span class=\"roman-inline\">(-ṇum)</span> は必要・義務から強い希望まで文脈幅がある。",
    "<span class=\"ta-inline\" lang=\"ta\">கூடாது</span> <span class=\"roman-inline\">(kūṭātu)</span> は規則・判断上の禁止、<span class=\"ta-inline\" lang=\"ta\">-ப் போறேன்</span> <span class=\"roman-inline\">(-p pōṟ-ēṉ)</span> は具体的な計画・意志。"
  ],
  "readSections": [
    {
      "kicker": "まず結論",
      "heading": "日本語の「できる・したい・ねば・禁止・つもり」を、一つの語尾にまとめない",
      "takeaway": "<span class=\"ta-inline\" lang=\"ta\">முடியும்</span> <span class=\"roman-inline\">(muṭiyum)</span> は可能、<span class=\"ta-inline\" lang=\"ta\">ஆசை இருக்கு</span> <span class=\"roman-inline\">(ācai irukku)</span> は個人的な願い、<span class=\"ta-inline\" lang=\"ta\">-ணும்</span> <span class=\"roman-inline\">(-ṇum)</span> は必要・強い希望、<span class=\"ta-inline\" lang=\"ta\">கூடாது</span> <span class=\"roman-inline\">(kūṭātu)</span> は禁止です。",
      "paragraphs": [
        "同じ不定詞の後ろでも、右側の述語を替えると、出来事に対する話し手の立場が変わります。<span class=\"ta-inline\" lang=\"ta\">வர முடியும்</span> <span class=\"roman-inline\">(vara muṭiyum)</span> は「来られる」、<span class=\"ta-inline\" lang=\"ta\">வரணும்</span> <span class=\"roman-inline\">(vara-ṇum)</span> は「来る必要がある」、<span class=\"ta-inline\" lang=\"ta\">வரக் கூடாது</span> <span class=\"roman-inline\">(vara-k kūṭātu)</span> は「来てはいけない」です。",
        "計画を明示するときは <span class=\"ta-inline\" lang=\"ta\">வாங்கப் போறேன்</span> <span class=\"roman-inline\">(vāṅka-p pōṟ-ēṉ)</span> のように言えます。第8課の単純未来も予定を表しますが、ここでは「これからする計画」を前面に出します。"
      ]
    },
    {
      "kicker": "形を読む",
      "heading": "不定詞の後ろを見て、可能・願い・必要・禁止・計画を決める",
      "takeaway": "<span class=\"ta-inline\" lang=\"ta\">பேச முடியும்</span> <span class=\"roman-inline\">(pēca muṭiyum)</span>・<span class=\"ta-inline\" lang=\"ta\">பாக்க ஆசை இருக்கு</span> <span class=\"roman-inline\">(pākka ācai irukku)</span>・<span class=\"ta-inline\" lang=\"ta\">வாங்கணும்</span> <span class=\"roman-inline\">(vāṅka-ṇum)</span>・<span class=\"ta-inline\" lang=\"ta\">பயன்படுத்தக் கூடாது</span> <span class=\"roman-inline\">(payaṉpaṭutta-k kūṭātu)</span> を完成した型で覚えます。",
      "paragraphs": [
        "<span class=\"ta-inline\" lang=\"ta\">பேச</span> <span class=\"roman-inline\">(pēca)</span> や <span class=\"ta-inline\" lang=\"ta\">வர</span> <span class=\"roman-inline\">(vara)</span> は第10課の不定詞です。時制や人物を完成させず、後ろの <span class=\"ta-inline\" lang=\"ta\">முடியும்</span> <span class=\"roman-inline\">(muṭiyum)</span>・<span class=\"ta-inline\" lang=\"ta\">முடியாது</span> <span class=\"roman-inline\">(muṭiyātu)</span> へ動作の意味を渡します。",
        "<span class=\"ta-inline\" lang=\"ta\">வாங்கணும்</span> <span class=\"roman-inline\">(vāṅka-ṇum)</span> は一語に密着して聞こえます。表面にない長い形を構造ローマ字へ補わず、書記形 <span class=\"ta-inline\" lang=\"ta\">வாங்க வேண்டும்</span> <span class=\"roman-inline\">(vāṅka vēṇṭum)</span> は対応層へ分けます。"
      ]
    },
    {
      "kicker": "なぜ？",
      "heading": "願う人・可能な人・必要を負う人は、主語だけでは表せない",
      "takeaway": "<span class=\"ta-inline\" lang=\"ta\">என்னால</span> <span class=\"roman-inline\">(eṉṉ-āla)</span> は能力・条件側、<span class=\"ta-inline\" lang=\"ta\">எனக்கு</span> <span class=\"roman-inline\">(eṉ-akku)</span> は願い・必要を経験する人を示します。",
      "paragraphs": [
        "<span class=\"ta-inline\" lang=\"ta\">என்னால தமிழ் பேச முடியும்</span> <span class=\"roman-inline\">(eṉṉ-āla tamiḻ pēca muṭiyum)</span> は、構造に近くは「私の力・条件では、タミル語を話すことが可能」です。人の能力だけでなく、時間や設備の条件にも使えます。",
        "<span class=\"ta-inline\" lang=\"ta\">எனக்கு படம் பாக்க ஆசை இருக்கு</span> <span class=\"roman-inline\">(eṉ-akku paṭam pākka ācai irukku)</span> は「私には、映画を見る願いがある」。日本語の「〜たい」を一つの活用語尾だと思わず、願う人＋動作＋願いの三部分で読みます。"
      ]
    },
    {
      "kicker": "実際に使う",
      "heading": "旅行では、希望→必要→計画→現地の禁止の順に現れる",
      "takeaway": "希望は <span class=\"ta-inline\" lang=\"ta\">சென்னைக்கு போக ஆசை இருக்கு</span> <span class=\"roman-inline\">(ceṉṉai-kku pōka ācai irukku)</span>、準備は <span class=\"ta-inline\" lang=\"ta\">டிக்கெட் வாங்கணும்</span> <span class=\"roman-inline\">(ṭikkeṭ vāṅka-ṇum)</span>、計画は <span class=\"ta-inline\" lang=\"ta\">டிக்கெட் வாங்கப் போறேன்</span> <span class=\"roman-inline\">(ṭikkeṭ vāṅka-p pōṟ-ēṉ)</span> です。",
      "paragraphs": [
        "切符売場では <span class=\"ta-inline\" lang=\"ta\">எனக்கு ஒரு டிக்கெட் வேணும்</span> <span class=\"roman-inline\">(eṉ-akku oru ṭikkeṭ vēṇum)</span> がそのまま使えます。名詞＋<span class=\"ta-inline\" lang=\"ta\">வேணும்</span> <span class=\"roman-inline\">(vēṇum)</span> は「その物が必要／欲しい」です。",
        "施設では <span class=\"ta-inline\" lang=\"ta\">இங்கே போன் பயன்படுத்தக் கூடாது</span> <span class=\"roman-inline\">(iṅkē pōṉ payaṉpaṭutta-k kūṭātu)</span> や <span class=\"ta-inline\" lang=\"ta\">இங்கே படம் எடுக்கக் கூடாது</span> <span class=\"roman-inline\">(iṅkē paṭam eṭukka-k kūṭātu)</span> のような禁止表示を先に拾います。"
      ]
    },
    {
      "kicker": "混ぜない",
      "heading": "できない முடியாது と、してはいけない கூடாது を最優先で分ける",
      "takeaway": "<span class=\"ta-inline\" lang=\"ta\">வர முடியாது</span> <span class=\"roman-inline\">(vara muṭiyātu)</span> は実現不可能、<span class=\"ta-inline\" lang=\"ta\">வரக் கூடாது</span> <span class=\"roman-inline\">(vara-k kūṭātu)</span> は規則・判断上の禁止です。",
      "paragraphs": [
        "電車がなくて来られないなら <span class=\"ta-inline\" lang=\"ta\">வர முடியாது</span> <span class=\"roman-inline\">(vara muṭiyātu)</span>、立入禁止で来てはいけないなら <span class=\"ta-inline\" lang=\"ta\">வரக் கூடாது</span> <span class=\"roman-inline\">(vara-k kūṭātu)</span> です。日本語ではどちらも否定を含みますが、原因が違います。",
        "<span class=\"ta-inline\" lang=\"ta\">பாக்கணும்</span> <span class=\"roman-inline\">(pākka-ṇum)</span> は場面により「見たい」「見る必要がある」の幅があります。個人的な願いを曖昧にしたくないときは <span class=\"ta-inline\" lang=\"ta\">பாக்க ஆசை இருக்கு</span> <span class=\"roman-inline\">(pākka ācai irukku)</span> を使います。"
      ],
      "note": {
        "tone": "pink",
        "title": "この課の最重要ミス",
        "body": "<span class=\"ta-inline\" lang=\"ta\">முடியாது</span> <span class=\"roman-inline\">(muṭiyātu)</span> を禁止、<span class=\"ta-inline\" lang=\"ta\">கூடாது</span> <span class=\"roman-inline\">(kūṭātu)</span> を能力不足として読まない。まず「できない理由」を確認します。"
      }
    },
    {
      "kicker": "3文で復習",
      "heading": "チェンナイ旅行の希望を、必要と計画へつなげる",
      "takeaway": "<span class=\"ta-inline\" lang=\"ta\">ஆசை இருக்கு</span> <span class=\"roman-inline\">(ācai irukku)</span> → <span class=\"ta-inline\" lang=\"ta\">-ணும்</span> <span class=\"roman-inline\">(-ṇum)</span> → <span class=\"ta-inline\" lang=\"ta\">-ப் போறேன்</span> <span class=\"roman-inline\">(-p pōṟ-ēṉ)</span> の順に、願い・必要・実行計画を読み分けます。",
      "paragraphs": [
        "<span class=\"ta-inline\" lang=\"ta\">எனக்கு சென்னைக்கு போக ஆசை இருக்கு.</span> <span class=\"roman-inline\">(eṉ-akku ceṉṉai-kku pōka ācai irukku.)</span><br><span class=\"reading-ja\">私はチェンナイへ行きたいです。</span><br><br><span class=\"ta-inline\" lang=\"ta\">இன்னிக்கு டிக்கெட் வாங்கணும்.</span> <span class=\"roman-inline\">(iṉṉikku ṭikkeṭ vāṅka-ṇum.)</span><br><span class=\"reading-ja\">今日は切符を買う必要があります。</span><br><br><span class=\"ta-inline\" lang=\"ta\">நான் இன்னிக்கு டிக்கெட் வாங்கப் போறேன்.</span> <span class=\"roman-inline\">(nāṉ iṉṉikku ṭikkeṭ vāṅka-p pōṟ-ēṉ.)</span><br><span class=\"reading-ja\">私は今日、切符を買うつもりです。</span>"
      ],
      "miniReading": {
        "intro": "願いから準備と計画へ進む三文です。",
        "ids": [
          "l13-05",
          "l13-06",
          "l13-11"
        ]
      }
    }
  ],
  "formConfig": {
    "mode": "grammar",
    "title": "第13課のモダリティを、右端の意味で比較する",
    "intro": "<span class=\"ta-inline\" lang=\"ta\">வர முடியும்</span> <span class=\"roman-inline\">(vara muṭiyum)</span>・<span class=\"ta-inline\" lang=\"ta\">வரணும்</span> <span class=\"roman-inline\">(vara-ṇum)</span>・<span class=\"ta-inline\" lang=\"ta\">வரக் கூடாது</span> <span class=\"roman-inline\">(vara-k kūṭātu)</span> のように、同じ動作の後ろを替えて機能を照合します。",
    "patterns": Object.freeze(patterns),
    "checkpoint": "可能・願い・必要・禁止・計画を、単なる日本語訳ではなく、誰の立場とどんな制約を表すかまで説明できれば合格です。"
  },
  "examples": Object.freeze(examples),
  "quiz": [
    {
      "focus": "形態分解",
      "q": "<span class=\"ta-inline\" lang=\"ta\">என்னால தமிழ் பேச முடியும்</span> <span class=\"roman-inline\">(eṉṉ-āla tamiḻ pēca muṭiyum)</span> の右端で「可能」を示す部分は？",
      "options": [
        "முடியும்",
        "ஆசை இருக்கு",
        "வாங்கணும்",
        "கூடாது"
      ],
      "answer": 0,
      "feedback": "<span class=\"ta-inline\" lang=\"ta\">பேச</span> <span class=\"roman-inline\">(pēca)</span> は動作を渡す不定詞、<span class=\"ta-inline\" lang=\"ta\">முடியும்</span> <span class=\"roman-inline\">(muṭiyum)</span> が「可能です」を示します。",
      "rule": "可能は、不定詞＋முடியும் の右端で読む。",
      "tags": [
        "正解",
        "願望との混同",
        "必要との混同",
        "禁止との混同"
      ]
    },
    {
      "focus": "機能選択",
      "q": "「私は今日は来られません」に合う文は？",
      "options": [
        "<span class=\"quiz-option-ta\" lang=\"ta\">என்னால இன்னிக்கு வர முடியாது.</span><span class=\"quiz-option-roman\">eṉṉ-āla iṉṉikku vara muṭiyātu.</span><span class=\"quiz-option-ja\">今日は来られません</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">எனக்கு இன்னிக்கு வர ஆசை இருக்கு.</span><span class=\"quiz-option-roman\">eṉ-akku iṉṉikku vara ācai irukku.</span><span class=\"quiz-option-ja\">今日は来たいです</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">எனக்கு இன்னிக்கு வரணும்.</span><span class=\"quiz-option-roman\">eṉ-akku iṉṉikku vara-ṇum.</span><span class=\"quiz-option-ja\">今日は来る必要があります</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">நான் இன்னிக்கு வரப் போறேன்.</span><span class=\"quiz-option-roman\">nāṉ iṉṉikku vara-p pōṟ-ēṉ.</span><span class=\"quiz-option-ja\">今日は来るつもりです</span>"
      ],
      "answer": 0,
      "feedback": "能力・時間・状況のため実現できないので、<span class=\"ta-inline\" lang=\"ta\">முடியாது</span> <span class=\"roman-inline\">(muṭiyātu)</span> を選びます。",
      "rule": "願い・必要・計画ではなく、実現不可能なら முடியாது。",
      "tags": [
        "正解",
        "願望",
        "必要・義務",
        "計画・意志"
      ]
    },
    {
      "focus": "実用場面",
      "q": "寺院や劇場で「ここでは写真を撮ってはいけません」と伝える文は？",
      "options": [
        "<span class=\"quiz-option-ta\" lang=\"ta\">இங்கே படம் எடுக்கக் கூடாது.</span><span class=\"quiz-option-roman\">iṅkē paṭam eṭukka-k kūṭātu.</span><span class=\"quiz-option-ja\">ここでは写真を撮ってはいけません</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">இங்கே படம் எடுக்க முடியாது.</span><span class=\"quiz-option-roman\">iṅkē paṭam eṭukka muṭiyātu.</span><span class=\"quiz-option-ja\">ここでは写真を撮れません</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">இங்கே படம் எடுக்கணும்.</span><span class=\"quiz-option-roman\">iṅkē paṭam eṭukka-ṇum.</span><span class=\"quiz-option-ja\">ここでは写真を撮る必要があります</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">இங்கே படம் எடுக்க ஆசை இருக்கு.</span><span class=\"quiz-option-roman\">iṅkē paṭam eṭukka ācai irukku.</span><span class=\"quiz-option-ja\">ここで写真を撮りたいです</span>"
      ],
      "answer": 0,
      "feedback": "施設の規則として禁止するので、<span class=\"ta-inline\" lang=\"ta\">எடுக்கக் கூடாது</span> <span class=\"roman-inline\">(eṭukka-k kūṭātu)</span> を使います。",
      "rule": "規則・許可上の禁止は கூடாது。",
      "tags": [
        "正解",
        "不可能との混同",
        "義務の逆転",
        "願望との混同"
      ]
    },
    {
      "focus": "混同防止",
      "q": "<span class=\"ta-inline\" lang=\"ta\">முடியாது</span> <span class=\"roman-inline\">(muṭiyātu)</span> と <span class=\"ta-inline\" lang=\"ta\">கூடாது</span> <span class=\"roman-inline\">(kūṭātu)</span> の違いを正しく説明したものは？",
      "options": [
        "முடியாது は能力・状況上の不可能、கூடாது は規則・判断上の禁止",
        "முடியாது は願望、கூடாது は予定",
        "どちらも常に同じ「したくない」",
        "முடியாது は過去、கூடாது は未来"
      ],
      "answer": 0,
      "feedback": "<span class=\"ta-inline\" lang=\"ta\">வர முடியாது</span> <span class=\"roman-inline\">(vara muṭiyātu)</span> は「来られない」、<span class=\"ta-inline\" lang=\"ta\">வரக் கூடாது</span> <span class=\"roman-inline\">(vara-k kūṭātu)</span> は「来てはいけない」です。",
      "rule": "できない理由が条件か規則かを先に判定する。",
      "tags": [
        "正解",
        "願望・予定との混同",
        "意味の同一視",
        "時制との混同"
      ]
    },
    {
      "focus": "総合復習",
      "q": "<span class=\"ta-inline\" lang=\"ta\">எனக்கு சென்னைக்கு போக ஆசை இருக்கு</span> <span class=\"roman-inline\">(eṉ-akku ceṉṉai-kku pōka ācai irukku)</span> に続き、「だから今日は切符を買うつもりです」と言う文は？",
      "options": [
        "<span class=\"quiz-option-ta\" lang=\"ta\">நான் இன்னிக்கு டிக்கெட் வாங்கப் போறேன்.</span><span class=\"quiz-option-roman\">nāṉ iṉṉikku ṭikkeṭ vāṅka-p pōṟ-ēṉ.</span><span class=\"quiz-option-ja\">今日は切符を買うつもりです</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">என்னால இன்னிக்கு டிக்கெட் வாங்க முடியாது.</span><span class=\"quiz-option-roman\">eṉṉ-āla iṉṉikku ṭikkeṭ vāṅka muṭiyātu.</span><span class=\"quiz-option-ja\">今日は切符を買えません</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">இங்கே டிக்கெட் வாங்கக் கூடாது.</span><span class=\"quiz-option-roman\">iṅkē ṭikkeṭ vāṅka-k kūṭātu.</span><span class=\"quiz-option-ja\">ここでは切符を買ってはいけません</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">எனக்கு டிக்கெட் வாங்க ஆசை இருக்கு.</span><span class=\"quiz-option-roman\">eṉ-akku ṭikkeṭ vāṅka ācai irukku.</span><span class=\"quiz-option-ja\">切符を買いたいです</span>"
      ],
      "answer": 0,
      "feedback": "<span class=\"ta-inline\" lang=\"ta\">வாங்கப் போறேன்</span> <span class=\"roman-inline\">(vāṅka-p pōṟ-ēṉ)</span> が、具体的な実行計画を示します。",
      "rule": "願い→必要→計画を、右端の述語で段階分けする。",
      "tags": [
        "正解",
        "不可能",
        "禁止",
        "願望の繰り返し"
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

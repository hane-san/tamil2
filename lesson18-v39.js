(() => {
  "use strict";

  const { entry: E, confidence: C } = window.TAMIL_V30;
  const SOURCES = [
  "TAMIL-INTEGRATED-v2.0-rc.1 §§23-25,31-32",
  "PREDICATE-ENGINE-v1.1 §§1.2,3,4",
  "TAMIL-GRAMMAR-GARDEN Lesson 18",
  "SCHIFFMAN-SPOKEN-TAMIL: verbal nouns, nominalization and case"
];
  const make = input => E({ ...input, sourceRefs: SOURCES, confidence: input.confidence ?? C("B", "B", "C", "B") });

  const examples = [
  {
    "id": "l18-01",
    "targetTamil": "தமிழ் படிக்கறது சுவாரஸ்யம்.",
    "structuredRoman": "tamiḻ paṭikkaṟa-tu cuvārasyam.",
    "pronunciationRoman": "tamiḻ paḍikkaradu suvārasiyam.",
    "katakana": "タミル パディッカラドゥ スヴァーラシヤム。",
    "meaningJa": "タミル語を学ぶことは面白いです。",
    "literalJapanese": "タミル語＋学ぶこと＋面白さ",
    "morphemes": [
      {
        "surfaceTamil": "தமிழ்",
        "gloss": "タミル語"
      },
      {
        "surfaceTamil": "படிக்கறது",
        "gloss": "学ぶこと・非過去名詞化"
      },
      {
        "surfaceTamil": "சுவாரஸ்யம்",
        "gloss": "面白いこと／面白さ"
      }
    ],
    "grammarNote": "படிக்கறது は動作全体を「こと」としてまとめ、文の主語になります。",
    "vocabulary": [
      "தமிழ்",
      "படிக்கறது",
      "சுவாரஸ்யம்"
    ],
    "audioGroup": "lesson18-core",
    "featured": true,
    "counterparts": [
      {
        "primaryRegister": "LT-WR",
        "targetTamil": "தமிழ் படிப்பது சுவாரஸ்யம்.",
        "note": "現代文語・保守的表記"
      }
    ]
  },
  {
    "id": "l18-02",
    "targetTamil": "அவர் சொன்னதை புரிஞ்சுக்கிட்டேன்.",
    "structuredRoman": "avar coṉṉa-t-ai puriñcu-kkiṭṭ-ēṉ.",
    "pronunciationRoman": "avar sonnadai purinjukkiṭṭēn.",
    "katakana": "アヴァル ソンナダイ プリンジュッキッテーン。",
    "meaningJa": "その方が言ったことを理解しました。",
    "literalJapanese": "その方＋言ったことを＋理解しました・私",
    "morphemes": [
      {
        "surfaceTamil": "அவர்",
        "gloss": "その方が"
      },
      {
        "surfaceTamil": "சொன்னதை",
        "gloss": "言ったことを・名詞化＋対格"
      },
      {
        "surfaceTamil": "புரிஞ்சுக்கிட்டேன்",
        "gloss": "理解しました・私"
      }
    ],
    "grammarNote": "சொன்னது に対格 -ஐ が付き、表面形は சொன்னதை になります。節全体が目的語です。",
    "vocabulary": [
      "அவர்",
      "சொன்னதை",
      "புரிஞ்சுக்கிட்டேன்"
    ],
    "audioGroup": "lesson18-core",
    "featured": true,
    "counterparts": [
      {
        "primaryRegister": "LT-WR",
        "targetTamil": "அவர் சொன்னதை புரிந்துகொண்டேன்.",
        "note": "現代文語・保守的表記"
      }
    ]
  },
  {
    "id": "l18-03",
    "targetTamil": "படம் பாக்கறதுக்கு நேரம் இல்லை.",
    "structuredRoman": "paṭam pākkaṟa-t-ukku nēram illai.",
    "pronunciationRoman": "paḍam pākkaradukku nēram illai.",
    "katakana": "パダム パーッカラドゥック ネーラム イッライ。",
    "meaningJa": "映画を見る時間がありません。",
    "literalJapanese": "映画＋見ることのために＋時間＋ありません",
    "morphemes": [
      {
        "surfaceTamil": "படம்",
        "gloss": "映画"
      },
      {
        "surfaceTamil": "பாக்கறதுக்கு",
        "gloss": "見ることに／見るために・名詞化＋与格"
      },
      {
        "surfaceTamil": "நேரம்",
        "gloss": "時間"
      },
      {
        "surfaceTamil": "இல்லை",
        "gloss": "ありません"
      }
    ],
    "grammarNote": "名詞化 பாக்கறது に与格 -க்கு が付き、பாக்கறதுக்கு となります。自然な日本語では「見る時間」です。",
    "vocabulary": [
      "படம்",
      "பாக்கறதுக்கு",
      "நேரம்",
      "இல்லை"
    ],
    "audioGroup": "lesson18-core",
    "featured": true,
    "counterparts": [
      {
        "primaryRegister": "LT-WR",
        "targetTamil": "படம் பார்ப்பதற்கு நேரம் இல்லை.",
        "note": "現代文語・保守的表記"
      }
    ]
  },
  {
    "id": "l18-04",
    "targetTamil": "எனக்கு தமிழ் படம் பாக்கறது பிடிக்கும்.",
    "structuredRoman": "eṉ-akku tamiḻ paṭam pākkaṟa-tu piṭikkum.",
    "pronunciationRoman": "enakku tamiḻ paḍam pākkaradu piḍikkum.",
    "katakana": "エナック タミル パダム パーッカラドゥ ピディックム。",
    "meaningJa": "私はタミル映画を見ることが好きです。",
    "literalJapanese": "私には＋タミル映画＋見ること＋好ましく感じます",
    "morphemes": [
      {
        "surfaceTamil": "எனக்கு",
        "gloss": "私には・経験者"
      },
      {
        "surfaceTamil": "தமிழ் படம்",
        "gloss": "タミル映画"
      },
      {
        "surfaceTamil": "பாக்கறது",
        "gloss": "見ること"
      },
      {
        "surfaceTamil": "பிடிக்கும்",
        "gloss": "好きです"
      }
    ],
    "grammarNote": "好きな対象が動作なら、名詞化した பாக்கறது を பிடிக்கும் の対象として置けます。",
    "vocabulary": [
      "எனக்கு",
      "தமிழ் படம்",
      "பாக்கறது",
      "பிடிக்கும்"
    ],
    "audioGroup": "lesson18-bank",
    "featured": false
  },
  {
    "id": "l18-05",
    "targetTamil": "நான் நேத்து பாத்தது ஒரு பழைய படம்.",
    "structuredRoman": "nāṉ nēttu pātta-tu oru paḻaiya paṭam.",
    "pronunciationRoman": "nāṉ nēttu pāttadu oru paḻaiya paḍam.",
    "katakana": "ナーン ネーットゥ パーッタドゥ オル パライヤ パダム。",
    "meaningJa": "私が昨日見たものは古い映画でした。",
    "literalJapanese": "私＋昨日＋見たもの＋一つの古い映画",
    "morphemes": [
      {
        "surfaceTamil": "நான்",
        "gloss": "私が"
      },
      {
        "surfaceTamil": "நேத்து",
        "gloss": "昨日"
      },
      {
        "surfaceTamil": "பாத்தது",
        "gloss": "見たもの／こと・過去名詞化"
      },
      {
        "surfaceTamil": "ஒரு பழைய படம்",
        "gloss": "古い映画一本"
      }
    ],
    "grammarNote": "中心名詞を置かず、பாத்தது 自体が「見たもの」を担います。",
    "vocabulary": [
      "நான்",
      "நேத்து",
      "பாத்தது",
      "ஒரு",
      "பழைய",
      "படம்"
    ],
    "audioGroup": "lesson18-bank",
    "featured": false
  },
  {
    "id": "l18-06",
    "targetTamil": "அவர் வந்தது எனக்கு தெரியும்.",
    "structuredRoman": "avar vanta-tu eṉ-akku teriyum.",
    "pronunciationRoman": "avar vandadu enakku teriyum.",
    "katakana": "アヴァル ヴァンダドゥ エナック テリユム。",
    "meaningJa": "その方が来たことを私は知っています。",
    "literalJapanese": "その方＋来たこと＋私には＋分かります",
    "morphemes": [
      {
        "surfaceTamil": "அவர்",
        "gloss": "その方が"
      },
      {
        "surfaceTamil": "வந்தது",
        "gloss": "来たこと・過去名詞化"
      },
      {
        "surfaceTamil": "எனக்கு",
        "gloss": "私には"
      },
      {
        "surfaceTamil": "தெரியும்",
        "gloss": "知っています"
      }
    ],
    "grammarNote": "வந்தது が出来事全体を名詞化します。தெரியும் では日本語の「を」に対応する対格が必ず表面に出るわけではありません。",
    "vocabulary": [
      "அவர்",
      "வந்தது",
      "எனக்கு",
      "தெரியும்"
    ],
    "audioGroup": "lesson18-bank",
    "featured": false
  },
  {
    "id": "l18-07",
    "targetTamil": "நண்பர் இன்னும் வராதது எனக்கு கவலை.",
    "structuredRoman": "naṇpar iṉṉum var-āta-tu eṉ-akku kavalai.",
    "pronunciationRoman": "naṇbar innum varādadu enakku kavalai.",
    "katakana": "ナンバル インヌム ヴァラーダドゥ エナック カヴァライ。",
    "meaningJa": "友達がまだ来ていないことが心配です。",
    "literalJapanese": "友達＋まだ＋来ていないこと＋私には＋心配",
    "morphemes": [
      {
        "surfaceTamil": "நண்பர்",
        "gloss": "友達が"
      },
      {
        "surfaceTamil": "இன்னும்",
        "gloss": "まだ"
      },
      {
        "surfaceTamil": "வராதது",
        "gloss": "来ていないこと・否定名詞化"
      },
      {
        "surfaceTamil": "எனக்கு",
        "gloss": "私には"
      },
      {
        "surfaceTamil": "கவலை",
        "gloss": "心配です"
      }
    ],
    "grammarNote": "否定連体形 வராத に -து が加わり、中心名詞なしで否定された出来事を表します。",
    "vocabulary": [
      "நண்பர்",
      "இன்னும்",
      "வராதது",
      "எனக்கு",
      "கவலை"
    ],
    "audioGroup": "lesson18-bank",
    "featured": false
  },
  {
    "id": "l18-08",
    "targetTamil": "சென்னையில ஆட்டோல போறது சுலபம்.",
    "structuredRoman": "ceṉṉai-y-ila āṭṭō-la pōṟa-tu culapam.",
    "pronunciationRoman": "sennaiyila āṭṭōla pōradu sulabam.",
    "katakana": "センナイヤラ アーットーラ ポーラドゥ スラバム。",
    "meaningJa": "チェンナイでオートに乗って移動するのは簡単です。",
    "literalJapanese": "チェンナイで＋オートで＋行くこと＋簡単",
    "morphemes": [
      {
        "surfaceTamil": "சென்னையில",
        "gloss": "チェンナイで"
      },
      {
        "surfaceTamil": "ஆட்டோல",
        "gloss": "オートで"
      },
      {
        "surfaceTamil": "போறது",
        "gloss": "行くこと／移動すること"
      },
      {
        "surfaceTamil": "சுலபம்",
        "gloss": "簡単です"
      }
    ],
    "grammarNote": "移動手段を含む小さな節全体を போறது で名詞化し、性質を述べます。",
    "vocabulary": [
      "சென்னையில",
      "ஆட்டோல",
      "போறது",
      "சுலபம்"
    ],
    "audioGroup": "lesson18-bank",
    "featured": false
  },
  {
    "id": "l18-09",
    "targetTamil": "கார்டு பயன்படுத்தறது சுலபம்.",
    "structuredRoman": "kārṭu payaṉpaṭuttaṟa-tu culapam.",
    "pronunciationRoman": "kārḍu payanbaḍuttaradu sulabam.",
    "katakana": "カールドゥ パヤンバドゥッタラドゥ スラバム。",
    "meaningJa": "カードを使うのは簡単です。",
    "literalJapanese": "カード＋使うこと＋簡単",
    "morphemes": [
      {
        "surfaceTamil": "கார்டு",
        "gloss": "カード"
      },
      {
        "surfaceTamil": "பயன்படுத்தறது",
        "gloss": "使うこと"
      },
      {
        "surfaceTamil": "சுலபம்",
        "gloss": "簡単です"
      }
    ],
    "grammarNote": "目的語 கார்டு を名詞化された動作の中に残せます。",
    "vocabulary": [
      "கார்டு",
      "பயன்படுத்தறது",
      "சுலபம்"
    ],
    "audioGroup": "lesson18-bank",
    "featured": false
  },
  {
    "id": "l18-10",
    "targetTamil": "டிக்கெட் வாங்கறதுக்கு கார்டு பயன்படுத்தலாம்.",
    "structuredRoman": "ṭikkeṭ vāṅkaṟa-t-ukku kārṭu payaṉpaṭutta-lām.",
    "pronunciationRoman": "ṭikkeṭ vāngaradukku kārḍu payanbaḍuttalām.",
    "katakana": "ティッケトゥ ヴァーンガラドゥック カールドゥ パヤンバドゥッタラーム。",
    "meaningJa": "切符を買うためにカードを使えます。",
    "literalJapanese": "切符＋買うことのために＋カード＋使ってもよい／使える",
    "morphemes": [
      {
        "surfaceTamil": "டிக்கெட்",
        "gloss": "切符"
      },
      {
        "surfaceTamil": "வாங்கறதுக்கு",
        "gloss": "買うために・名詞化＋与格"
      },
      {
        "surfaceTamil": "கார்டு",
        "gloss": "カード"
      },
      {
        "surfaceTamil": "பயன்படுத்தலாம்",
        "gloss": "使えます／使ってもよい"
      }
    ],
    "grammarNote": "名詞化＋与格は目的・用途へ広がります。ここでは「切符を買うために」と読みます。",
    "vocabulary": [
      "டிக்கெட்",
      "வாங்கறதுக்கு",
      "கார்டு",
      "பயன்படுத்தலாம்"
    ],
    "audioGroup": "lesson18-bank",
    "featured": false
  },
  {
    "id": "l18-11",
    "targetTamil": "நீங்க சொன்னதை மறுபடியும் சொல்லுங்க.",
    "structuredRoman": "nīṅka coṉṉa-t-ai maṟupaṭiyum collu-ṅka.",
    "pronunciationRoman": "nīnga sonnadai marubaḍiyum sollunga.",
    "katakana": "ニーンガ ソンナダイ マルバディユム ソッルンガ。",
    "meaningJa": "あなたが言ったことを、もう一度言ってください。",
    "literalJapanese": "あなたが＋言ったことを＋もう一度＋言ってください",
    "morphemes": [
      {
        "surfaceTamil": "நீங்க",
        "gloss": "あなたが"
      },
      {
        "surfaceTamil": "சொன்னதை",
        "gloss": "言ったことを・名詞化＋対格"
      },
      {
        "surfaceTamil": "மறுபடியும்",
        "gloss": "もう一度"
      },
      {
        "surfaceTamil": "சொல்லுங்க",
        "gloss": "言ってください"
      }
    ],
    "grammarNote": "聞き取れなかった場面で、名詞化された内容を対格目的語として丁寧命令へ渡します。",
    "vocabulary": [
      "நீங்க",
      "சொன்னதை",
      "மறுபடியும்",
      "சொல்லுங்க"
    ],
    "audioGroup": "lesson18-bank",
    "featured": false
  },
  {
    "id": "l18-12",
    "targetTamil": "நான் இன்னும் பாக்காதது இந்த படம்.",
    "structuredRoman": "nāṉ iṉṉum pākk-āta-tu inta paṭam.",
    "pronunciationRoman": "nāṉ innum pākkādadu inda paḍam.",
    "katakana": "ナーン インヌム パーッカーダドゥ インダ パダム。",
    "meaningJa": "私がまだ見ていないものはこの映画です。",
    "literalJapanese": "私＋まだ＋見ていないもの＋この映画",
    "morphemes": [
      {
        "surfaceTamil": "நான்",
        "gloss": "私が"
      },
      {
        "surfaceTamil": "இன்னும்",
        "gloss": "まだ"
      },
      {
        "surfaceTamil": "பாக்காதது",
        "gloss": "見ていないもの・否定名詞化"
      },
      {
        "surfaceTamil": "இந்த படம்",
        "gloss": "この映画です"
      }
    ],
    "grammarNote": "பாக்காத படம் なら「見ていない映画」、பாக்காதது なら中心名詞を置かず「見ていないもの」です。",
    "vocabulary": [
      "நான்",
      "இன்னும்",
      "பாக்காதது",
      "இந்த",
      "படம்"
    ],
    "audioGroup": "lesson18-bank",
    "featured": false
  }
].map(make);

  const patterns = [
  {
    "id": "l18-form-paakkaratu",
    "targetTamil": "பாக்கறது",
    "structuredRoman": "pākkaṟa-tu",
    "pronunciationRoman": "pākkaradu",
    "katakana": "パーッカラドゥ",
    "meaningJa": "見ること／見ているもの",
    "literalJapanese": "見る・非過去名詞化",
    "grammarNote": "非過去・一般・進行の動作を名詞として扱う。",
    "vocabulary": [
      "பாக்கறது"
    ],
    "audioGroup": "l18-form-forms",
    "kind": "非過去名詞化",
    "group": "基本",
    "note": "非過去・一般・進行の動作を名詞として扱う。"
  },
  {
    "id": "l18-form-paattatu",
    "targetTamil": "பாத்தது",
    "structuredRoman": "pātta-tu",
    "pronunciationRoman": "pāttadu",
    "katakana": "パーッタドゥ",
    "meaningJa": "見たこと／見たもの",
    "literalJapanese": "見た・過去名詞化",
    "grammarNote": "過去の出来事または結果のものを名詞として扱う。",
    "vocabulary": [
      "பாத்தது"
    ],
    "audioGroup": "l18-form-forms",
    "kind": "過去名詞化",
    "group": "基本",
    "note": "過去の出来事または結果のものを名詞として扱う。"
  },
  {
    "id": "l18-form-paakkaatatu",
    "targetTamil": "பாக்காதது",
    "structuredRoman": "pākk-āta-tu",
    "pronunciationRoman": "pākkādadu",
    "katakana": "パーッカーダドゥ",
    "meaningJa": "見ていないこと／もの",
    "literalJapanese": "見る＋否定＋名詞化",
    "grammarNote": "否定された出来事・対象を中心名詞なしで表す。",
    "vocabulary": [
      "பாக்காதது"
    ],
    "audioGroup": "l18-form-forms",
    "kind": "否定名詞化",
    "group": "基本",
    "note": "否定された出来事・対象を中心名詞なしで表す。"
  },
  {
    "id": "l18-form-sonnatu",
    "targetTamil": "சொன்னது",
    "structuredRoman": "coṉṉa-tu",
    "pronunciationRoman": "sonnadu",
    "katakana": "ソンナドゥ",
    "meaningJa": "言ったこと／もの",
    "literalJapanese": "言った＋名詞化",
    "grammarNote": "内容を中心名詞なしで名詞化する。",
    "vocabulary": [
      "சொன்னது"
    ],
    "audioGroup": "l18-form-forms",
    "kind": "内容名詞化",
    "group": "基本",
    "note": "内容を中心名詞なしで名詞化する。"
  },
  {
    "id": "l18-form-sonnatai",
    "targetTamil": "சொன்னதை",
    "structuredRoman": "coṉṉa-t-ai",
    "pronunciationRoman": "sonnadai",
    "katakana": "ソンナダイ",
    "meaningJa": "言ったことを",
    "literalJapanese": "言った＋名詞化＋対格",
    "grammarNote": "-து＋-ஐ の表面形が -தை になる。",
    "vocabulary": [
      "சொன்னதை"
    ],
    "audioGroup": "l18-form-forms",
    "kind": "対格名詞化",
    "group": "格",
    "note": "-து＋-ஐ の表面形が -தை になる。"
  },
  {
    "id": "l18-form-paakkaratukku",
    "targetTamil": "பாக்கறதுக்கு",
    "structuredRoman": "pākkaṟa-t-ukku",
    "pronunciationRoman": "pākkaradukku",
    "katakana": "パーッカラドゥック",
    "meaningJa": "見ることに／見るために",
    "literalJapanese": "見る＋名詞化＋与格",
    "grammarNote": "時間・目的・用途などを後続語から読む。",
    "vocabulary": [
      "பாக்கறதுக்கு"
    ],
    "audioGroup": "l18-form-forms",
    "kind": "与格名詞化",
    "group": "格",
    "note": "時間・目的・用途などを後続語から読む。"
  },
  {
    "id": "l18-form-varratu",
    "targetTamil": "வர்றது",
    "structuredRoman": "varṟa-tu",
    "pronunciationRoman": "varradu",
    "katakana": "ヴァッラドゥ",
    "meaningJa": "来ること",
    "literalJapanese": "来る・非過去名詞化",
    "grammarNote": "来るという動作・出来事を名詞化する。",
    "vocabulary": [
      "வர்றது"
    ],
    "audioGroup": "l18-form-forms",
    "kind": "非過去出来事",
    "group": "来る",
    "note": "来るという動作・出来事を名詞化する。"
  },
  {
    "id": "l18-form-vantatu",
    "targetTamil": "வந்தது",
    "structuredRoman": "vanta-tu",
    "pronunciationRoman": "vandadu",
    "katakana": "ヴァンダドゥ",
    "meaningJa": "来たこと",
    "literalJapanese": "来た・過去名詞化",
    "grammarNote": "過去に来たという出来事を名詞化する。",
    "vocabulary": [
      "வந்தது"
    ],
    "audioGroup": "l18-form-forms",
    "kind": "過去出来事",
    "group": "来る",
    "note": "過去に来たという出来事を名詞化する。"
  },
  {
    "id": "l18-form-varaatatu",
    "targetTamil": "வராதது",
    "structuredRoman": "var-āta-tu",
    "pronunciationRoman": "varādadu",
    "katakana": "ヴァラーダドゥ",
    "meaningJa": "来ていないこと",
    "literalJapanese": "来る＋否定＋名詞化",
    "grammarNote": "来ていないという否定された出来事を名詞化する。",
    "vocabulary": [
      "வராதது"
    ],
    "audioGroup": "l18-form-forms",
    "kind": "否定出来事",
    "group": "来る",
    "note": "来ていないという否定された出来事を名詞化する。"
  },
  {
    "id": "l18-form-patikkaratu",
    "targetTamil": "படிக்கறது",
    "structuredRoman": "paṭikkaṟa-tu",
    "pronunciationRoman": "paḍikkaradu",
    "katakana": "パディッカラドゥ",
    "meaningJa": "学ぶこと／読むこと",
    "literalJapanese": "学ぶ・非過去名詞化",
    "grammarNote": "学習行為を主語や対象として扱う。",
    "vocabulary": [
      "படிக்கறது"
    ],
    "audioGroup": "l18-form-forms",
    "kind": "行為名詞化",
    "group": "学習",
    "note": "学習行為を主語や対象として扱う。"
  }
].map(make);

  const lesson = {
  "id": "lesson18-v39",
  "number": 18,
  "navTitle": "名詞化",
  "title": "中心名詞を置かず、動作や出来事そのものを「こと・もの」にする",
  "tamilTitle": "பாக்கறது · பாத்தது · சொன்னதை · பாக்கறதுக்கு",
  "deck": "-துで動作・出来事を名詞として扱い、主語・対象・対格・与格へ広げます。第17課の連体修飾との違いを中心に整理します。",
  "targets": [
    "非過去・過去・否定の名詞化",
    "こと／ものは文脈で読む",
    "名詞化＋対格",
    "名詞化＋与格",
    "連体修飾との対比"
  ],
  "criticalPoints": [
    "<span class=\"ta-inline\" lang=\"ta\">பாக்கறது / பாத்தது / பாக்காதது</span> <span class=\"roman-inline\">(pākkaṟa-tu / pātta-tu / pākk-āta-tu)</span> は、中心名詞を置かず動作・出来事を「こと・もの」として扱う。",
    "<span class=\"ta-inline\" lang=\"ta\">சொன்னதை</span> <span class=\"roman-inline\">(coṉṉa-t-ai)</span> は名詞化＋対格、<span class=\"ta-inline\" lang=\"ta\">பாக்கறதுக்கு</span> <span class=\"roman-inline\">(pākkaṟa-t-ukku)</span> は名詞化＋与格。右端から役割を読む。",
    "<span class=\"ta-inline\" lang=\"ta\">பாத்த படம்</span> <span class=\"roman-inline\">(pātta paṭam)</span> は「見た映画」、<span class=\"ta-inline\" lang=\"ta\">பாத்தது</span> <span class=\"roman-inline\">(pātta-tu)</span> は「見たもの／こと」。中心名詞の有無を確認する。"
  ],
  "readSections": [
    {
      "kicker": "まず結論",
      "heading": "-துで、動作や出来事を文の主語・対象にする",
      "takeaway": "<span class=\"ta-inline\" lang=\"ta\">தமிழ் படிக்கறது சுவாரஸ்யம்</span> <span class=\"roman-inline\">(tamiḻ paṭikkaṟa-tu cuvārasyam)</span> では、「タミル語を学ぶこと」全体が主語です。",
      "paragraphs": [
        "第17課では <span class=\"ta-inline\" lang=\"ta\">பாத்த படம்</span> <span class=\"roman-inline\">(pātta paṭam)</span> のように中心名詞 படம் を置きました。第18課では中心名詞を置かず、<span class=\"ta-inline\" lang=\"ta\">பாத்தது</span> <span class=\"roman-inline\">(pātta-tu)</span> 自体を「見たもの／見たこと」として使います。",
        "日本語の「こと」と「もの」はタミル語で常に別形になるわけではありません。<span class=\"ta-inline\" lang=\"ta\">பாத்தது</span> <span class=\"roman-inline\">(pātta-tu)</span> が出来事か物かは、前後の述語と場面から読みます。"
      ]
    },
    {
      "kicker": "形を読む",
      "heading": "非過去・過去・否定の名詞化を三点セットで比べる",
      "takeaway": "<span class=\"ta-inline\" lang=\"ta\">பாக்கறது / பாத்தது / பாக்காதது</span> <span class=\"roman-inline\">(pākkaṟa-tu / pātta-tu / pākk-āta-tu)</span> は「見ること／見たこと／見ていないこと」です。",
      "paragraphs": [
        "<span class=\"ta-inline\" lang=\"ta\">பாக்கறது</span> <span class=\"roman-inline\">(pākkaṟa-tu)</span> は一般的な行為・進行中の行為・対象を文脈から読みます。<span class=\"ta-inline\" lang=\"ta\">பாத்தது</span> <span class=\"roman-inline\">(pātta-tu)</span> は過去、<span class=\"ta-inline\" lang=\"ta\">பாக்காதது</span> <span class=\"roman-inline\">(pākk-āta-tu)</span> は否定です。",
        "<span class=\"ta-inline\" lang=\"ta\">அவர் வந்தது</span> <span class=\"roman-inline\">(avar vanta-tu)</span> のように主語を名詞化の前へ残せます。動作の対象も <span class=\"ta-inline\" lang=\"ta\">தமிழ் படம் பாக்கறது</span> <span class=\"roman-inline\">(tamiḻ paṭam pākkaṟa-tu)</span> の中へ残せます。"
      ]
    },
    {
      "kicker": "なぜ？",
      "heading": "名詞化した節は普通の名詞のように格を取れる",
      "takeaway": "<span class=\"ta-inline\" lang=\"ta\">சொன்னது＋-ஐ → சொன்னதை</span> <span class=\"roman-inline\">(coṉṉa-tu + -ai → coṉṉa-t-ai)</span>、<span class=\"ta-inline\" lang=\"ta\">பாக்கறது＋-க்கு → பாக்கறதுக்கு</span> <span class=\"roman-inline\">(pākkaṟa-tu + -ukku → pākkaṟa-t-ukku)</span> です。",
      "paragraphs": [
        "<span class=\"ta-inline\" lang=\"ta\">அவர் சொன்னதை புரிஞ்சுக்கிட்டேன்</span> <span class=\"roman-inline\">(avar coṉṉa-t-ai puriñcu-kkiṭṭ-ēṉ)</span> では、名詞化された内容全体が対格目的語です。",
        "<span class=\"ta-inline\" lang=\"ta\">படம் பாக்கறதுக்கு நேரம் இல்லை</span> <span class=\"roman-inline\">(paṭam pākkaṟa-t-ukku nēram illai)</span> では、与格が時間・用途の関係を作ります。日本語では自然に「映画を見る時間がない」と訳します。"
      ]
    },
    {
      "kicker": "実際に使う",
      "heading": "好き・理解・時間・移動の話に名詞化を使う",
      "takeaway": "<span class=\"ta-inline\" lang=\"ta\">பாக்கறது பிடிக்கும்</span> <span class=\"roman-inline\">(pākkaṟa-tu piṭikkum)</span>、<span class=\"ta-inline\" lang=\"ta\">சொன்னதை புரிஞ்சுக்கிட்டேன்</span> <span class=\"roman-inline\">(coṉṉa-t-ai puriñcu-kkiṭṭ-ēṉ)</span> は会話で使いやすい骨格です。",
      "paragraphs": [
        "好みは <span class=\"ta-inline\" lang=\"ta\">எனக்கு தமிழ் படம் பாக்கறது பிடிக்கும்</span> <span class=\"roman-inline\">(eṉ-akku tamiḻ paṭam pākkaṟa-tu piṭikkum)</span> と言えます。第6課の与格経験者に、動作を名詞化した対象を組み合わせます。",
        "旅行では <span class=\"ta-inline\" lang=\"ta\">சென்னையில ஆட்டோல போறது சுலபம்</span> <span class=\"roman-inline\">(ceṉṉai-y-ila āṭṭō-la pōṟa-tu culapam)</span>、<span class=\"ta-inline\" lang=\"ta\">டிக்கெட் வாங்கறதுக்கு கார்டு பயன்படுத்தலாம்</span> <span class=\"roman-inline\">(ṭikkeṭ vāṅkaṟa-t-ukku kārṭu payaṉpaṭutta-lām)</span> のように移動・用途をまとめられます。"
      ]
    },
    {
      "kicker": "混ぜない",
      "heading": "連体修飾は中心名詞を待ち、名詞化は自分で名詞の役割を担う",
      "takeaway": "<span class=\"ta-inline\" lang=\"ta\">பாத்த படம்</span> <span class=\"roman-inline\">(pātta paṭam)</span> は「見た映画」、<span class=\"ta-inline\" lang=\"ta\">பாத்தது</span> <span class=\"roman-inline\">(pātta-tu)</span> は「見たもの／こと」です。",
      "paragraphs": [
        "<span class=\"ta-inline\" lang=\"ta\">அவர் சொன்ன விஷயம்</span> <span class=\"roman-inline\">(avar coṉṉa viṣayam)</span> は விஷயம் という中心名詞があります。<span class=\"ta-inline\" lang=\"ta\">அவர் சொன்னது</span> <span class=\"roman-inline\">(avar coṉṉa-tu)</span> は中心名詞を置かず、名詞化が内容を担います。",
        "対格の <span class=\"ta-inline\" lang=\"ta\">சொன்னதை</span> <span class=\"roman-inline\">(coṉṉa-t-ai)</span> を、連体形 சொன்ன＋別の名詞と誤読しません。右端の -தை を見て、名詞化された節全体が目的語だと判断します。"
      ],
      "note": {
        "tone": "pink",
        "title": "この課の最重要ミス",
        "body": "-துを単なる「こと」という訳語カードにしない。中心名詞の有無、時制・否定、右端の格、後ろの述語を一緒に読む。"
      }
    },
    {
      "kicker": "3文で復習",
      "heading": "学ぶことを評価し、言ったことを理解し、映画を見る時間を確認する",
      "takeaway": "<span class=\"ta-inline\" lang=\"ta\">படிக்கறது</span> <span class=\"roman-inline\">(paṭikkaṟa-tu)</span>、<span class=\"ta-inline\" lang=\"ta\">சொன்னதை</span> <span class=\"roman-inline\">(coṉṉa-t-ai)</span>、<span class=\"ta-inline\" lang=\"ta\">பாக்கறதுக்கு</span> <span class=\"roman-inline\">(pākkaṟa-t-ukku)</span> を右端から読みます。",
      "paragraphs": [
        "<span class=\"ta-inline\" lang=\"ta\">தமிழ் படிக்கறது சுவாரஸ்யம்.</span> <span class=\"roman-inline\">(tamiḻ paṭikkaṟa-tu cuvārasyam.)</span><br><span class=\"reading-ja\">タミル語を学ぶことは面白いです。</span><br><br><span class=\"ta-inline\" lang=\"ta\">அவர் சொன்னதை புரிஞ்சுக்கிட்டேன்.</span> <span class=\"roman-inline\">(avar coṉṉa-t-ai puriñcu-kkiṭṭ-ēṉ.)</span><br><span class=\"reading-ja\">その方が言ったことを理解しました。</span><br><br><span class=\"ta-inline\" lang=\"ta\">படம் பாக்கறதுக்கு நேரம் இல்லை.</span> <span class=\"roman-inline\">(paṭam pākkaṟa-t-ukku nēram illai.)</span><br><span class=\"reading-ja\">映画を見る時間がありません。</span>"
      ],
      "miniReading": {
        "intro": "主語になる名詞化、対格名詞化、与格名詞化を一つずつ読みます。",
        "ids": [
          "l18-01",
          "l18-02",
          "l18-03"
        ]
      }
    }
  ],
  "formConfig": {
    "mode": "grammar",
    "title": "時制・否定・格を持つ名詞化を一枚で照合する",
    "intro": "非過去・過去・否定の-து名詞化、対格-தை、与格-துக்கு、連体修飾との違いを並べます。",
    "checkpoint": "中心名詞の有無を見分け、-தைと-துக்குを右端から説明できれば合格です。",
    "patterns": Object.freeze(patterns)
  },
  "quiz": [
    {
      "focus": "形態分解",
      "q": "<span class=\"ta-inline\" lang=\"ta\">அவர் சொன்னதை</span> <span class=\"roman-inline\">(avar coṉṉa-t-ai)</span> の -தை は？",
      "options": [
        "名詞化 -து＋対格 -ஐ の表面形",
        "過去＋一人称語尾",
        "丁寧な命令語尾",
        "中心名詞 படம் の省略"
      ],
      "answer": 0,
      "feedback": "<span class=\"ta-inline\" lang=\"ta\">சொன்னது</span> <span class=\"roman-inline\">(coṉṉa-tu)</span> に対格が付き、表面上 <span class=\"ta-inline\" lang=\"ta\">சொன்னதை</span> <span class=\"roman-inline\">(coṉṉa-t-ai)</span> になります。",
      "rule": "-தைを見たら、名詞化された節＋対格を候補にする。",
      "tags": [
        "正解",
        "有限動詞との混同",
        "命令との混同",
        "連体修飾との混同"
      ]
    },
    {
      "focus": "機能選択",
      "q": "「タミル語を学ぶことは面白いです」で、主語全体は？",
      "options": [
        "<span class=\"quiz-option-ta\" lang=\"ta\">தமிழ் படிக்கறது</span><span class=\"quiz-option-roman\">tamiḻ paṭikkaṟa-tu</span><span class=\"quiz-option-ja\">タミル語を学ぶこと</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">தமிழ்</span><span class=\"quiz-option-roman\">tamiḻ</span><span class=\"quiz-option-ja\">タミル語だけ</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">சுவாரஸ்யம்</span><span class=\"quiz-option-roman\">cuvārasyam</span><span class=\"quiz-option-ja\">面白さだけ</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">படிக்கற</span><span class=\"quiz-option-roman\">paṭikkaṟa</span><span class=\"quiz-option-ja\">学ぶ・連体形だけ</span>"
      ],
      "answer": 0,
      "feedback": "<span class=\"ta-inline\" lang=\"ta\">படிக்கறது</span> <span class=\"roman-inline\">(paṭikkaṟa-tu)</span> が動作を名詞化し、தமிழ் を含む節全体が主語になります。",
      "rule": "名詞化は動作の参加者を含む節全体を名詞として扱える。",
      "tags": [
        "正解",
        "語彙だけ",
        "述語だけ",
        "連体形との混同"
      ]
    },
    {
      "focus": "実用場面",
      "q": "「映画を見る時間がありません」に合う文は？",
      "options": [
        "<span class=\"quiz-option-ta\" lang=\"ta\">படம் பாக்கறதுக்கு நேரம் இல்லை.</span><span class=\"quiz-option-roman\">paṭam pākkaṟa-t-ukku nēram illai.</span><span class=\"quiz-option-ja\">映画を見る時間がありません</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">நான் இன்னும் படம் பாக்கல.</span><span class=\"quiz-option-roman\">nāṉ iṉṉum paṭam pākkala.</span><span class=\"quiz-option-ja\">私はまだ映画を見ていません</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">படம் பாக்க ஆசை இருக்கு.</span><span class=\"quiz-option-roman\">paṭam pākka ācai irukku.</span><span class=\"quiz-option-ja\">映画を見たいです</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">நாம படம் பாக்கலாமா?</span><span class=\"quiz-option-roman\">nāma paṭam pākka-lām-ā?</span><span class=\"quiz-option-ja\">映画を見ましょうか</span>"
      ],
      "answer": 0,
      "feedback": "<span class=\"ta-inline\" lang=\"ta\">பாக்கறதுக்கு</span> <span class=\"roman-inline\">(pākkaṟa-t-ukku)</span> が「見ることに／見るために」という時間枠を作ります。",
      "rule": "時間・用途の名詞と結ぶとき、名詞化＋与格を確認する。",
      "tags": [
        "正解",
        "未完了否定",
        "願望",
        "勧誘"
      ]
    },
    {
      "focus": "混同防止",
      "q": "<span class=\"ta-inline\" lang=\"ta\">பாத்த படம்</span> <span class=\"roman-inline\">(pātta paṭam)</span> と <span class=\"ta-inline\" lang=\"ta\">பாத்தது</span> <span class=\"roman-inline\">(pātta-tu)</span> の違いは？",
      "options": [
        "前者は「見た映画」、後者は「見たもの／こと」",
        "前者は現在、後者は未来",
        "前者は命令、後者は禁止",
        "どちらも中心名詞 படம் を持つ"
      ],
      "answer": 0,
      "feedback": "前者には中心名詞 <span class=\"ta-inline\" lang=\"ta\">படம்</span> <span class=\"roman-inline\">(paṭam)</span> があり、後者では -து が名詞の役割を引き受けます。",
      "rule": "連体修飾か名詞化かは、後ろに中心名詞があるかで見分ける。",
      "tags": [
        "正解",
        "時制の混同",
        "発話機能の混同",
        "中心名詞の見落とし"
      ]
    },
    {
      "focus": "総合復習",
      "q": "聞き取れず「あなたが言ったことを、もう一度言ってください」と頼む文は？",
      "options": [
        "<span class=\"quiz-option-ta\" lang=\"ta\">நீங்க சொன்னதை மறுபடியும் சொல்லுங்க.</span><span class=\"quiz-option-roman\">nīṅka coṉṉa-t-ai maṟupaṭiyum collu-ṅka.</span><span class=\"quiz-option-ja\">あなたが言ったことを、もう一度言ってください</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">கொஞ்சம் சொல்லுங்க.</span><span class=\"quiz-option-roman\">koñcam collu-ṅka.</span><span class=\"quiz-option-ja\">少し教えてください</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">அவர் சொன்ன விஷயம் எனக்கு புரியல.</span><span class=\"quiz-option-roman\">avar coṉṉa viṣayam eṉ-akku puriyala.</span><span class=\"quiz-option-ja\">その方が言った事柄が分かりません</span>",
        "<span class=\"quiz-option-ta\" lang=\"ta\">டிக்கெட் எவ்வளவு?</span><span class=\"quiz-option-roman\">ṭikkeṭ evvaḷavu?</span><span class=\"quiz-option-ja\">切符はいくらですか</span>"
      ],
      "answer": 0,
      "feedback": "<span class=\"ta-inline\" lang=\"ta\">சொன்னதை</span> <span class=\"roman-inline\">(coṉṉa-t-ai)</span> が内容目的語、<span class=\"ta-inline\" lang=\"ta\">சொல்லுங்க</span> <span class=\"roman-inline\">(collu-ṅka)</span> が丁寧依頼です。",
      "rule": "名詞化＋対格を、既習の丁寧命令へ目的語として渡す。",
      "tags": [
        "正解",
        "一般依頼",
        "連体修飾＋理解否定",
        "値段疑問"
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

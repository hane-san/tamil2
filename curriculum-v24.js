/*
 * Canonical curriculum data — Tamil Verb Engine v2.4
 * Register: educated Chennai / Standard Spoken Tamil.
 * TTS must receive only the `ta` field. Romanization and kana are display aids.
 */
window.TAMIL_BOOK = {
  meta: {
    title: "わたしから始める タミル語動詞エンジン",
    edition: "長文化・完成編 v2.4",
    register: "チェンナイ口語（Standard Spoken Tamil を基準）",
    chapterCount: 18
  },

  coreVerbs: [
    {
      id: "po",
      meaning: "行く",
      classLabel: "母音語幹・特別型",
      lemma: { ta: "போ", roman: "pō", kana: "ポー" },
      present: { ta: "போறேன்", roman: "pō-r-ēn", kana: "ポーレーン" },
      past: { ta: "போனேன்", roman: "pō-n-ēn", kana: "ポーネーン" },
      future: { ta: "போவேன்", roman: "pō-v-ēn", kana: "ポーヴェーン" },
      politePresent: { ta: "போறீங்க", roman: "pō-r-īṅka", kana: "ポーリーンガ" },
      politePast: { ta: "போனீங்க", roman: "pō-n-īṅka", kana: "ポーニーンガ" },
      politeFuture: { ta: "போவீங்க", roman: "pō-v-īṅka", kana: "ポーヴィーンガ" },
      politePresentQuestion: { ta: "போறீங்களா?", roman: "pō-r-īṅkaḷ-ā?", kana: "ポーリーンガラー？" },
      politePastQuestion: { ta: "போனீங்களா?", roman: "pō-n-īṅkaḷ-ā?", kana: "ポーニーンガラー？" },
      politeFutureQuestion: { ta: "போவீங்களா?", roman: "pō-v-īṅkaḷ-ā?", kana: "ポーヴィーンガラー？" },
      masculinePresent: { ta: "போறான்", roman: "pō-r-āṉ", kana: "ポーラーン" },
      masculinePast: { ta: "போனான்", roman: "pō-n-āṉ", kana: "ポーナーン" },
      masculineFuture: { ta: "போவான்", roman: "pō-v-āṉ", kana: "ポーヴァーン" },
      femininePresent: { ta: "போறா", roman: "pō-r-ā", kana: "ポーラー" },
      femininePast: { ta: "போனா", roman: "pō-n-ā", kana: "ポーナー" },
      feminineFuture: { ta: "போவா", roman: "pō-v-ā", kana: "ポーヴァー" },
      honorificPresent: { ta: "போறாரு", roman: "pō-r-āru", kana: "ポーラール" },
      honorificPast: { ta: "போனாரு", roman: "pō-n-āru", kana: "ポーナール" },
      honorificFuture: { ta: "போவாரு", roman: "pō-v-āru", kana: "ポーヴァール" },
      pluralPresent: { ta: "போறாங்க", roman: "pō-r-āṅka", kana: "ポーラーンガ" },
      pluralPast: { ta: "போனாங்க", roman: "pō-n-āṅka", kana: "ポーナーンガ" },
      pluralFuture: { ta: "போவாங்க", roman: "pō-v-āṅka", kana: "ポーヴァーンガ" },
      neuterPresent: { ta: "போறது", roman: "pō-r-adu", kana: "ポーラドゥ" },
      neuterPast: { ta: "போச்சு", roman: "pōccu", kana: "ポーッチュ" },
      neuterFuture: { ta: "போகும்", roman: "pōk-um", kana: "ポーグム" },
      progressive: { ta: "போய்க்கிட்டு இருக்கேன்", roman: "pōy-kkiṭṭu irukk-ēn", kana: "ポーイッキットゥ イルッケーン" },
      perfect: { ta: "போயிருக்கேன்", roman: "pōy-irukk-ēn", kana: "ポーイルッケーン" },
      completive: { ta: "போயிட்டேன்", roman: "pōy-iṭṭ-ēn", kana: "ポーイッテーン" },
      politeImperative: { ta: "போங்க", roman: "pō-ṅka", kana: "ポーンガ" },
      politeNegativeImperative: { ta: "போகாதீங்க", roman: "pōk-ā-d-īṅka", kana: "ポーガーディーンガ" },
      familiarPresent: { ta: "போறே", roman: "pō-r-ē", kana: "ポーレー" },
      familiarPast: { ta: "போனே", roman: "pō-n-ē", kana: "ポーネー" },
      familiarFuture: { ta: "போவே", roman: "pō-v-ē", kana: "ポーヴェー" },
      firstPluralPresent: { ta: "போறோம்", roman: "pō-r-ōm", kana: "ポーローム" },
      firstPluralPast: { ta: "போனோம்", roman: "pō-n-ōm", kana: "ポーノーム" },
      firstPluralFuture: { ta: "போவோம்", roman: "pō-v-ōm", kana: "ポーヴォーム" },
      hortative: { ta: "போகலாம்", roman: "pōka-lām", kana: "ポーガラーム" },
      quotePresent: { ta: "போறேன்னு", roman: "pō-r-ēn-nu", kana: "ポーレーンヌ" },
      quotePast: { ta: "போனேன்னு", roman: "pō-n-ēn-nu", kana: "ポーネーンヌ" },
      quoteFuture: { ta: "போவேன்னு", roman: "pō-v-ēn-nu", kana: "ポーヴェーンヌ" },
      intent: { ta: "போகலாம்னு இருக்கேன்", roman: "pōka-lām-nnu irukk-ēn", kana: "ポーガラームンヌ イルッケーン" },
      reportive: { ta: "போவாராம்", roman: "pō-v-ār-ām", kana: "ポーヴァーラーム" },
      conditional: { ta: "போனா", roman: "pō-n-ā", kana: "ポーナー" },
      concessive: { ta: "போனாலும்", roman: "pō-n-āl-um", kana: "ポーナールム" },
      relativePresent: { ta: "போற", roman: "pō-r-a", kana: "ポーラ" },
      relativePast: { ta: "போன", roman: "pō-n-a", kana: "ポーナ" },
      reasonForm: { ta: "போறதுனால", roman: "pō-r-ad-u-nāle", kana: "ポーラドゥナーレ" },
      infinitive: { ta: "போக", roman: "pōka", kana: "ポーガ" },
      avp: { ta: "போய்", roman: "pōyi", kana: "ポーイ" },
      nonfutureNegative: { ta: "போகல", roman: "pōka-la", kana: "ポーガラ" },
      futureNegative: { ta: "போகமாட்டேன்", roman: "pōka-māṭṭ-ēn", kana: "ポーガマーッテーン" }
    },
    {
      id: "va",
      meaning: "来る",
      classLabel: "語幹交替・特別型",
      lemma: { ta: "வா", roman: "vā", kana: "ヴァー" },
      present: { ta: "வர்றேன்", roman: "var-r-ēn", kana: "ヴァッレーン" },
      past: { ta: "வந்தேன்", roman: "vand-ēn", kana: "ヴァンデーン" },
      future: { ta: "வருவேன்", roman: "varu-v-ēn", kana: "ヴァルヴェーン" },
      politePresent: { ta: "வர்றீங்க", roman: "var-r-īṅka", kana: "ヴァッリーンガ" },
      politePast: { ta: "வந்தீங்க", roman: "vand-īṅka", kana: "ヴァンディーンガ" },
      politeFuture: { ta: "வருவீங்க", roman: "varu-v-īṅka", kana: "ヴァルヴィーンガ" },
      politePresentQuestion: { ta: "வர்றீங்களா?", roman: "var-r-īṅkaḷ-ā?", kana: "ヴァッリーンガラー？" },
      politePastQuestion: { ta: "வந்தீங்களா?", roman: "vand-īṅkaḷ-ā?", kana: "ヴァンディーンガラー？" },
      politeFutureQuestion: { ta: "வருவீங்களா?", roman: "varu-v-īṅkaḷ-ā?", kana: "ヴァルヴィーンガラー？" },
      masculinePresent: { ta: "வர்றான்", roman: "var-r-āṉ", kana: "ヴァッラーン" },
      masculinePast: { ta: "வந்தான்", roman: "vand-āṉ", kana: "ヴァンダーン" },
      masculineFuture: { ta: "வருவான்", roman: "varu-v-āṉ", kana: "ヴァルヴァーン" },
      femininePresent: { ta: "வர்றா", roman: "var-r-ā", kana: "ヴァッラー" },
      femininePast: { ta: "வந்தா", roman: "vand-ā", kana: "ヴァンダー" },
      feminineFuture: { ta: "வருவா", roman: "varu-v-ā", kana: "ヴァルヴァー" },
      honorificPresent: { ta: "வர்றாரு", roman: "var-r-āru", kana: "ヴァッラール" },
      honorificPast: { ta: "வந்தாரு", roman: "vand-āru", kana: "ヴァンダール" },
      honorificFuture: { ta: "வருவாரு", roman: "varu-v-āru", kana: "ヴァルヴァール" },
      pluralPresent: { ta: "வர்றாங்க", roman: "var-r-āṅka", kana: "ヴァッラーンガ" },
      pluralPast: { ta: "வந்தாங்க", roman: "vand-āṅka", kana: "ヴァンダーンガ" },
      pluralFuture: { ta: "வருவாங்க", roman: "varu-v-āṅka", kana: "ヴァルヴァーンガ" },
      neuterPresent: { ta: "வர்றது", roman: "var-r-adu", kana: "ヴァッラドゥ" },
      neuterPast: { ta: "வந்தது", roman: "vand-adu", kana: "ヴァンダドゥ" },
      neuterFuture: { ta: "வரும்", roman: "var-um", kana: "ヴァルム" },
      progressive: { ta: "வந்துக்கிட்டு இருக்கேன்", roman: "vand-u-kkiṭṭu irukk-ēn", kana: "ヴァンドゥッキットゥ イルッケーン" },
      perfect: { ta: "வந்திருக்கேன்", roman: "vand-irukk-ēn", kana: "ヴァンディルッケーン" },
      completive: { ta: "வந்துட்டேன்", roman: "vand-uṭṭ-ēn", kana: "ヴァンドゥッテーン" },
      politeImperative: { ta: "வாங்க", roman: "vā-ṅka", kana: "ヴァーンガ" },
      politeNegativeImperative: { ta: "வராதீங்க", roman: "var-ā-d-īṅka", kana: "ヴァラーディーンガ" },
      familiarPresent: { ta: "வர்றே", roman: "var-r-ē", kana: "ヴァッレー" },
      familiarPast: { ta: "வந்தே", roman: "vand-ē", kana: "ヴァンデー" },
      familiarFuture: { ta: "வருவே", roman: "varu-v-ē", kana: "ヴァルヴェー" },
      firstPluralPresent: { ta: "வர்றோம்", roman: "var-r-ōm", kana: "ヴァッローム" },
      firstPluralPast: { ta: "வந்தோம்", roman: "vand-ōm", kana: "ヴァンドーム" },
      firstPluralFuture: { ta: "வருவோம்", roman: "varu-v-ōm", kana: "ヴァルヴォーム" },
      hortative: { ta: "வரலாம்", roman: "vara-lām", kana: "ヴァララーム" },
      quotePresent: { ta: "வர்றேன்னு", roman: "var-r-ēn-nu", kana: "ヴァッレーンヌ" },
      quotePast: { ta: "வந்தேன்னு", roman: "vand-ēn-nu", kana: "ヴァンデーンヌ" },
      quoteFuture: { ta: "வருவேன்னு", roman: "varu-v-ēn-nu", kana: "ヴァルヴェーンヌ" },
      intent: { ta: "வரலாம்னு இருக்கேன்", roman: "vara-lām-nnu irukk-ēn", kana: "ヴァララームンヌ イルッケーン" },
      reportive: { ta: "வருவாராம்", roman: "varu-v-ār-ām", kana: "ヴァルヴァーラーム" },
      conditional: { ta: "வந்தா", roman: "vand-ā", kana: "ヴァンダー" },
      concessive: { ta: "வந்தாலும்", roman: "vand-āl-um", kana: "ヴァンダールム" },
      relativePresent: { ta: "வர்ற", roman: "var-r-a", kana: "ヴァッラ" },
      relativePast: { ta: "வந்த", roman: "vand-a", kana: "ヴァンダ" },
      reasonForm: { ta: "வர்றதுனால", roman: "var-r-ad-u-nāle", kana: "ヴァッラドゥナーレ" },
      infinitive: { ta: "வர", roman: "vara", kana: "ヴァラ" },
      avp: { ta: "வந்து", roman: "vandu", kana: "ヴァンドゥ" },
      nonfutureNegative: { ta: "வரல", roman: "vara-la", kana: "ヴァララ" },
      futureNegative: { ta: "வரமாட்டேன்", roman: "vara-māṭṭ-ēn", kana: "ヴァラマーッテーン" }
    },
    {
      id: "saappidu",
      meaning: "食べる",
      classLabel: "弱変化・ṭṭ過去",
      lemma: { ta: "சாப்பிடு", roman: "sāppiḍu", kana: "サーッピドゥ" },
      present: { ta: "சாப்பிடறேன்", roman: "sāppiḍ-r-ēn", kana: "サーッピダレーン" },
      past: { ta: "சாப்பிட்டேன்", roman: "sāppiṭṭ-ēn", kana: "サーッピッテーン" },
      future: { ta: "சாப்பிடுவேன்", roman: "sāppiḍu-v-ēn", kana: "サーッピドゥヴェーン" },
      politePresent: { ta: "சாப்பிடறீங்க", roman: "sāppiḍ-r-īṅka", kana: "サーッピダリーンガ" },
      politePast: { ta: "சாப்பிட்டீங்க", roman: "sāppiṭṭ-īṅka", kana: "サーッピッティーンガ" },
      politeFuture: { ta: "சாப்பிடுவீங்க", roman: "sāppiḍu-v-īṅka", kana: "サーッピドゥヴィーンガ" },
      politePresentQuestion: { ta: "சாப்பிடறீங்களா?", roman: "sāppiḍ-r-īṅkaḷ-ā?", kana: "サーッピダリーンガラー？" },
      politePastQuestion: { ta: "சாப்பிட்டீங்களா?", roman: "sāppiṭṭ-īṅkaḷ-ā?", kana: "サーッピッティーンガラー？" },
      politeFutureQuestion: { ta: "சாப்பிடுவீங்களா?", roman: "sāppiḍu-v-īṅkaḷ-ā?", kana: "サーッピドゥヴィーンガラー？" },
      masculinePresent: { ta: "சாப்பிடறான்", roman: "sāppiḍ-r-āṉ", kana: "サーッピダラーン" },
      masculinePast: { ta: "சாப்பிட்டான்", roman: "sāppiṭṭ-āṉ", kana: "サーッピッターン" },
      masculineFuture: { ta: "சாப்பிடுவான்", roman: "sāppiḍu-v-āṉ", kana: "サーッピドゥヴァーン" },
      femininePresent: { ta: "சாப்பிடறா", roman: "sāppiḍ-r-ā", kana: "サーッピダラー" },
      femininePast: { ta: "சாப்பிட்டா", roman: "sāppiṭṭ-ā", kana: "サーッピッター" },
      feminineFuture: { ta: "சாப்பிடுவா", roman: "sāppiḍu-v-ā", kana: "サーッピドゥヴァー" },
      honorificPresent: { ta: "சாப்பிடறாரு", roman: "sāppiḍ-r-āru", kana: "サーッピダラール" },
      honorificPast: { ta: "சாப்பிட்டாரு", roman: "sāppiṭṭ-āru", kana: "サーッピッタール" },
      honorificFuture: { ta: "சாப்பிடுவாரு", roman: "sāppiḍu-v-āru", kana: "サーッピドゥヴァール" },
      pluralPresent: { ta: "சாப்பிடறாங்க", roman: "sāppiḍ-r-āṅka", kana: "サーッピダラーンガ" },
      pluralPast: { ta: "சாப்பிட்டாங்க", roman: "sāppiṭṭ-āṅka", kana: "サーッピッターンガ" },
      pluralFuture: { ta: "சாப்பிடுவாங்க", roman: "sāppiḍu-v-āṅka", kana: "サーッピドゥヴァーンガ" },
      neuterPresent: { ta: "சாப்பிடறது", roman: "sāppiḍ-r-adu", kana: "サーッピダラドゥ" },
      neuterPast: { ta: "சாப்பிட்டது", roman: "sāppiṭṭ-adu", kana: "サーッピッタドゥ" },
      neuterFuture: { ta: "சாப்பிடும்", roman: "sāppiḍ-um", kana: "サーッピドゥム" },
      progressive: { ta: "சாப்பிட்டுக்கிட்டு இருக்கேன்", roman: "sāppiṭṭ-u-kkiṭṭu irukk-ēn", kana: "サーッピットゥッキットゥ イルッケーン" },
      perfect: { ta: "சாப்பிட்டிருக்கேன்", roman: "sāppiṭṭ-irukk-ēn", kana: "サーッピッティルッケーン" },
      completive: { ta: "சாப்பிட்டுட்டேன்", roman: "sāppiṭṭ-uṭṭ-ēn", kana: "サーッピットゥッテーン" },
      politeImperative: { ta: "சாப்பிடுங்க", roman: "sāppiḍ-uṅka", kana: "サーッピドゥンガ" },
      politeNegativeImperative: { ta: "சாப்பிடாதீங்க", roman: "sāppiḍ-ā-d-īṅka", kana: "サーッピダーディーンガ" },
      familiarPresent: { ta: "சாப்பிடறே", roman: "sāppiḍ-r-ē", kana: "サーッピダレー" },
      familiarPast: { ta: "சாப்பிட்டே", roman: "sāppiṭṭ-ē", kana: "サーッピッテー" },
      familiarFuture: { ta: "சாப்பிடுவே", roman: "sāppiḍu-v-ē", kana: "サーッピドゥヴェー" },
      firstPluralPresent: { ta: "சாப்பிடறோம்", roman: "sāppiḍ-r-ōm", kana: "サーッピダローム" },
      firstPluralPast: { ta: "சாப்பிட்டோம்", roman: "sāppiṭṭ-ōm", kana: "サーッピットーム" },
      firstPluralFuture: { ta: "சாப்பிடுவோம்", roman: "sāppiḍu-v-ōm", kana: "サーッピドゥヴォーム" },
      hortative: { ta: "சாப்பிடலாம்", roman: "sāppiḍa-lām", kana: "サーッピダラーム" },
      quotePresent: { ta: "சாப்பிடறேன்னு", roman: "sāppiḍ-r-ēn-nu", kana: "サーッピダレーンヌ" },
      quotePast: { ta: "சாப்பிட்டேன்னு", roman: "sāppiṭṭ-ēn-nu", kana: "サーッピッテーンヌ" },
      quoteFuture: { ta: "சாப்பிடுவேன்னு", roman: "sāppiḍu-v-ēn-nu", kana: "サーッピドゥヴェーンヌ" },
      intent: { ta: "சாப்பிடலாம்னு இருக்கேன்", roman: "sāppiḍa-lām-nnu irukk-ēn", kana: "サーッピダラームンヌ イルッケーン" },
      reportive: { ta: "சாப்பிடுவாராம்", roman: "sāppiḍu-v-ār-ām", kana: "サーッピドゥヴァーラーム" },
      conditional: { ta: "சாப்பிட்டா", roman: "sāppiṭṭ-ā", kana: "サーッピッター" },
      concessive: { ta: "சாப்பிட்டாலும்", roman: "sāppiṭṭ-āl-um", kana: "サーッピッタールム" },
      relativePresent: { ta: "சாப்பிடற", roman: "sāppiḍ-r-a", kana: "サーッピダラ" },
      relativePast: { ta: "சாப்பிட்ட", roman: "sāppiṭṭ-a", kana: "サーッピッタ" },
      reasonForm: { ta: "சாப்பிடறதுனால", roman: "sāppiḍ-r-ad-u-nāle", kana: "サーッピダラドゥナーレ" },
      infinitive: { ta: "சாப்பிட", roman: "sāppiḍa", kana: "サーッピダ" },
      avp: { ta: "சாப்பிட்டு", roman: "sāppiṭṭu", kana: "サーッピットゥ" },
      nonfutureNegative: { ta: "சாப்பிடல", roman: "sāppiḍa-la", kana: "サーッピダラ" },
      futureNegative: { ta: "சாப்பிடமாட்டேன்", roman: "sāppiḍa-māṭṭ-ēn", kana: "サーッピダマーッテーン" }
    },
    {
      id: "vaangu",
      meaning: "買う・受け取る",
      classLabel: "弱変化・in過去",
      lemma: { ta: "வாங்கு", roman: "vāṅku", kana: "ヴァーング" },
      present: { ta: "வாங்குறேன்", roman: "vāṅku-r-ēn", kana: "ヴァーングレーン" },
      past: { ta: "வாங்கினேன்", roman: "vāṅk-in-ēn", kana: "ヴァーンギネーン" },
      future: { ta: "வாங்குவேன்", roman: "vāṅku-v-ēn", kana: "ヴァーングヴェーン" },
      politePresent: { ta: "வாங்குறீங்க", roman: "vāṅku-r-īṅka", kana: "ヴァーングリーンガ" },
      politePast: { ta: "வாங்கினீங்க", roman: "vāṅk-in-īṅka", kana: "ヴァーンギニーンガ" },
      politeFuture: { ta: "வாங்குவீங்க", roman: "vāṅku-v-īṅka", kana: "ヴァーングヴィーンガ" },
      politePresentQuestion: { ta: "வாங்குறீங்களா?", roman: "vāṅku-r-īṅkaḷ-ā?", kana: "ヴァーングリーンガラー？" },
      politePastQuestion: { ta: "வாங்கினீங்களா?", roman: "vāṅk-in-īṅkaḷ-ā?", kana: "ヴァーンギニーンガラー？" },
      politeFutureQuestion: { ta: "வாங்குவீங்களா?", roman: "vāṅku-v-īṅkaḷ-ā?", kana: "ヴァーングヴィーンガラー？" },
      masculinePresent: { ta: "வாங்குறான்", roman: "vāṅku-r-āṉ", kana: "ヴァーングラーン" },
      masculinePast: { ta: "வாங்கினான்", roman: "vāṅk-in-āṉ", kana: "ヴァーンギナーン" },
      masculineFuture: { ta: "வாங்குவான்", roman: "vāṅku-v-āṉ", kana: "ヴァーングヴァーン" },
      femininePresent: { ta: "வாங்குறா", roman: "vāṅku-r-ā", kana: "ヴァーングラー" },
      femininePast: { ta: "வாங்கினா", roman: "vāṅk-in-ā", kana: "ヴァーンギナー" },
      feminineFuture: { ta: "வாங்குவா", roman: "vāṅku-v-ā", kana: "ヴァーングヴァー" },
      honorificPresent: { ta: "வாங்குறாரு", roman: "vāṅku-r-āru", kana: "ヴァーングラール" },
      honorificPast: { ta: "வாங்கினாரு", roman: "vāṅk-in-āru", kana: "ヴァーンギナール" },
      honorificFuture: { ta: "வாங்குவாரு", roman: "vāṅku-v-āru", kana: "ヴァーングヴァール" },
      pluralPresent: { ta: "வாங்குறாங்க", roman: "vāṅku-r-āṅka", kana: "ヴァーングラーンガ" },
      pluralPast: { ta: "வாங்கினாங்க", roman: "vāṅk-in-āṅka", kana: "ヴァーンギナーンガ" },
      pluralFuture: { ta: "வாங்குவாங்க", roman: "vāṅku-v-āṅka", kana: "ヴァーングヴァーンガ" },
      neuterPresent: { ta: "வாங்குறது", roman: "vāṅku-r-adu", kana: "ヴァーングラドゥ" },
      neuterPast: { ta: "வாங்கினது", roman: "vāṅk-in-adu", kana: "ヴァーンギナドゥ" },
      neuterFuture: { ta: "வாங்கும்", roman: "vāṅk-um", kana: "ヴァーングム" },
      progressive: { ta: "வாங்கிக்கிட்டு இருக்கேன்", roman: "vāṅki-kkiṭṭu irukk-ēn", kana: "ヴァーンギッキットゥ イルッケーン" },
      perfect: { ta: "வாங்கியிருக்கேன்", roman: "vāṅki-y-irukk-ēn", kana: "ヴァーンギイルッケーン" },
      completive: { ta: "வாங்கிட்டேன்", roman: "vāṅk-iṭṭ-ēn", kana: "ヴァーンギッテーン" },
      politeImperative: { ta: "வாங்குங்க", roman: "vāṅku-ṅka", kana: "ヴァーングンガ" },
      politeNegativeImperative: { ta: "வாங்காதீங்க", roman: "vāṅk-ā-d-īṅka", kana: "ヴァーンガーディーンガ" },
      familiarPresent: { ta: "வாங்குறே", roman: "vāṅku-r-ē", kana: "ヴァーングレー" },
      familiarPast: { ta: "வாங்கினே", roman: "vāṅk-in-ē", kana: "ヴァーンギネー" },
      familiarFuture: { ta: "வாங்குவே", roman: "vāṅku-v-ē", kana: "ヴァーングヴェー" },
      firstPluralPresent: { ta: "வாங்குறோம்", roman: "vāṅku-r-ōm", kana: "ヴァーングローム" },
      firstPluralPast: { ta: "வாங்கினோம்", roman: "vāṅk-in-ōm", kana: "ヴァーンギノーム" },
      firstPluralFuture: { ta: "வாங்குவோம்", roman: "vāṅku-v-ōm", kana: "ヴァーングヴォーム" },
      hortative: { ta: "வாங்கலாம்", roman: "vāṅka-lām", kana: "ヴァーンガラーム" },
      quotePresent: { ta: "வாங்குறேன்னு", roman: "vāṅku-r-ēn-nu", kana: "ヴァーングレーンヌ" },
      quotePast: { ta: "வாங்கினேன்னு", roman: "vāṅk-in-ēn-nu", kana: "ヴァーンギネーンヌ" },
      quoteFuture: { ta: "வாங்குவேன்னு", roman: "vāṅku-v-ēn-nu", kana: "ヴァーングヴェーンヌ" },
      intent: { ta: "வாங்கலாம்னு இருக்கேன்", roman: "vāṅka-lām-nnu irukk-ēn", kana: "ヴァーンガラームンヌ イルッケーン" },
      reportive: { ta: "வாங்குவாராம்", roman: "vāṅku-v-ār-ām", kana: "ヴァーングヴァーラーム" },
      conditional: { ta: "வாங்கினா", roman: "vāṅk-in-ā", kana: "ヴァーンギナー" },
      concessive: { ta: "வாங்கினாலும்", roman: "vāṅk-in-āl-um", kana: "ヴァーンギナールム" },
      relativePresent: { ta: "வாங்குற", roman: "vāṅku-r-a", kana: "ヴァーングラ" },
      relativePast: { ta: "வாங்கின", roman: "vāṅk-in-a", kana: "ヴァーンギナ" },
      reasonForm: { ta: "வாங்குறதுனால", roman: "vāṅku-r-ad-u-nāle", kana: "ヴァーングラドゥナーレ" },
      infinitive: { ta: "வாங்க", roman: "vāṅka", kana: "ヴァーンガ" },
      avp: { ta: "வாங்கி", roman: "vāṅki", kana: "ヴァーンギ" },
      nonfutureNegative: { ta: "வாங்கல", roman: "vāṅka-la", kana: "ヴァーンガラ" },
      futureNegative: { ta: "வாங்கமாட்டேன்", roman: "vāṅka-māṭṭ-ēn", kana: "ヴァーンガマーッテーン" }
    },
    {
      id: "paaru",
      meaning: "見る",
      classLabel: "強変化・tt過去",
      lemma: { ta: "பாரு", roman: "pāru", kana: "パール" },
      present: { ta: "பாக்கறேன்", roman: "pāk-k-r-ēn", kana: "パーッカレーン" },
      past: { ta: "பாத்தேன்", roman: "pātt-ēn", kana: "パーッテーン" },
      future: { ta: "பாப்பேன்", roman: "pā-pp-ēn", kana: "パーッペーン" },
      politePresent: { ta: "பாக்கறீங்க", roman: "pāk-k-r-īṅka", kana: "パーッカリーンガ" },
      politePast: { ta: "பாத்தீங்க", roman: "pātt-īṅka", kana: "パーッティーンガ" },
      politeFuture: { ta: "பாப்பீங்க", roman: "pā-pp-īṅka", kana: "パーッピーンガ" },
      politePresentQuestion: { ta: "பாக்கறீங்களா?", roman: "pāk-k-r-īṅkaḷ-ā?", kana: "パーッカリーンガラー？" },
      politePastQuestion: { ta: "பாத்தீங்களா?", roman: "pātt-īṅkaḷ-ā?", kana: "パーッティーンガラー？" },
      politeFutureQuestion: { ta: "பாப்பீங்களா?", roman: "pā-pp-īṅkaḷ-ā?", kana: "パーッピーンガラー？" },
      masculinePresent: { ta: "பாக்கறான்", roman: "pāk-k-r-āṉ", kana: "パーッカラーン" },
      masculinePast: { ta: "பாத்தான்", roman: "pātt-āṉ", kana: "パーッターン" },
      masculineFuture: { ta: "பாப்பான்", roman: "pā-pp-āṉ", kana: "パーッパーン" },
      femininePresent: { ta: "பாக்கறா", roman: "pāk-k-r-ā", kana: "パーッカラー" },
      femininePast: { ta: "பாத்தா", roman: "pātt-ā", kana: "パーッター" },
      feminineFuture: { ta: "பாப்பா", roman: "pā-pp-ā", kana: "パーッパー" },
      honorificPresent: { ta: "பாக்கறாரு", roman: "pāk-k-r-āru", kana: "パーッカラール" },
      honorificPast: { ta: "பாத்தாரு", roman: "pātt-āru", kana: "パーッタール" },
      honorificFuture: { ta: "பாப்பாரு", roman: "pā-pp-āru", kana: "パーッパール" },
      pluralPresent: { ta: "பாக்கறாங்க", roman: "pāk-k-r-āṅka", kana: "パーッカラーンガ" },
      pluralPast: { ta: "பாத்தாங்க", roman: "pātt-āṅka", kana: "パーッターンガ" },
      pluralFuture: { ta: "பாப்பாங்க", roman: "pā-pp-āṅka", kana: "パーッパーンガ" },
      neuterPresent: { ta: "பாக்கறது", roman: "pāk-k-r-adu", kana: "パーッカラドゥ" },
      neuterPast: { ta: "பாத்தது", roman: "pātt-adu", kana: "パーッタドゥ" },
      neuterFuture: { ta: "பாக்கும்", roman: "pāk-k-um", kana: "パーックム" },
      progressive: { ta: "பாத்துக்கிட்டு இருக்கேன்", roman: "pātt-u-kkiṭṭu irukk-ēn", kana: "パーットゥッキットゥ イルッケーン" },
      perfect: { ta: "பாத்திருக்கேன்", roman: "pātt-irukk-ēn", kana: "パーッティルッケーン" },
      completive: { ta: "பாத்துட்டேன்", roman: "pātt-uṭṭ-ēn", kana: "パーットゥッテーン" },
      politeImperative: { ta: "பாருங்க", roman: "pāru-ṅka", kana: "パールンガ" },
      politeNegativeImperative: { ta: "பாக்காதீங்க", roman: "pāk-k-ā-d-īṅka", kana: "パーッカーディーンガ" },
      familiarPresent: { ta: "பாக்கறே", roman: "pāk-k-r-ē", kana: "パーッカレー" },
      familiarPast: { ta: "பாத்தே", roman: "pātt-ē", kana: "パーッテー" },
      familiarFuture: { ta: "பாப்பே", roman: "pā-pp-ē", kana: "パーッペー" },
      firstPluralPresent: { ta: "பாக்கறோம்", roman: "pāk-k-r-ōm", kana: "パーッカローム" },
      firstPluralPast: { ta: "பாத்தோம்", roman: "pātt-ōm", kana: "パーットーム" },
      firstPluralFuture: { ta: "பாப்போம்", roman: "pā-pp-ōm", kana: "パーッポーム" },
      hortative: { ta: "பாக்கலாம்", roman: "pākka-lām", kana: "パーッカラーム" },
      quotePresent: { ta: "பாக்கறேன்னு", roman: "pāk-k-r-ēn-nu", kana: "パーッカレーンヌ" },
      quotePast: { ta: "பாத்தேன்னு", roman: "pātt-ēn-nu", kana: "パーッテーンヌ" },
      quoteFuture: { ta: "பாப்பேன்னு", roman: "pā-pp-ēn-nu", kana: "パーッペーンヌ" },
      intent: { ta: "பாக்கலாம்னு இருக்கேன்", roman: "pākka-lām-nnu irukk-ēn", kana: "パーッカラームンヌ イルッケーン" },
      reportive: { ta: "பாப்பாராம்", roman: "pā-pp-ār-ām", kana: "パーッパーラーム" },
      conditional: { ta: "பாத்தா", roman: "pātt-ā", kana: "パーッター" },
      concessive: { ta: "பாத்தாலும்", roman: "pātt-āl-um", kana: "パーッタールム" },
      relativePresent: { ta: "பாக்கற", roman: "pāk-k-r-a", kana: "パーッカラ" },
      relativePast: { ta: "பாத்த", roman: "pātt-a", kana: "パーッタ" },
      reasonForm: { ta: "பாக்கறதுனால", roman: "pāk-k-r-ad-u-nāle", kana: "パーッカラドゥナーレ" },
      infinitive: { ta: "பாக்க", roman: "pākka", kana: "パーッカ" },
      avp: { ta: "பாத்து", roman: "pāttu", kana: "パーットゥ" },
      nonfutureNegative: { ta: "பாக்கல", roman: "pākka-la", kana: "パーッカラ" },
      futureNegative: { ta: "பாக்கமாட்டேன்", roman: "pākka-māṭṭ-ēn", kana: "パーッカマーッテーン" }
    },
    {
      id: "padi",
      meaning: "読む・勉強する",
      classLabel: "強変化・cc過去",
      lemma: { ta: "படி", roman: "paḍi", kana: "パディ" },
      present: { ta: "படிக்கறேன்", roman: "paḍi-kk-r-ēn", kana: "パディッカレーン" },
      past: { ta: "படிச்சேன்", roman: "paḍi-cc-ēn", kana: "パディッチェーン" },
      future: { ta: "படிப்பேன்", roman: "paḍi-pp-ēn", kana: "パディッペーン" },
      politePresent: { ta: "படிக்கறீங்க", roman: "paḍi-kk-r-īṅka", kana: "パディッカリーンガ" },
      politePast: { ta: "படிச்சீங்க", roman: "paḍi-cc-īṅka", kana: "パディッチーンガ" },
      politeFuture: { ta: "படிப்பீங்க", roman: "paḍi-pp-īṅka", kana: "パディッピーンガ" },
      politePresentQuestion: { ta: "படிக்கறீங்களா?", roman: "paḍi-kk-r-īṅkaḷ-ā?", kana: "パディッカリーンガラー？" },
      politePastQuestion: { ta: "படிச்சீங்களா?", roman: "paḍi-cc-īṅkaḷ-ā?", kana: "パディッチーンガラー？" },
      politeFutureQuestion: { ta: "படிப்பீங்களா?", roman: "paḍi-pp-īṅkaḷ-ā?", kana: "パディッピーンガラー？" },
      masculinePresent: { ta: "படிக்கறான்", roman: "paḍi-kk-r-āṉ", kana: "パディッカラーン" },
      masculinePast: { ta: "படிச்சான்", roman: "paḍi-cc-āṉ", kana: "パディッチャーン" },
      masculineFuture: { ta: "படிப்பான்", roman: "paḍi-pp-āṉ", kana: "パディッパーン" },
      femininePresent: { ta: "படிக்கறா", roman: "paḍi-kk-r-ā", kana: "パディッカラー" },
      femininePast: { ta: "படிச்சா", roman: "paḍi-cc-ā", kana: "パディッチャー" },
      feminineFuture: { ta: "படிப்பா", roman: "paḍi-pp-ā", kana: "パディッパー" },
      honorificPresent: { ta: "படிக்கறாரு", roman: "paḍi-kk-r-āru", kana: "パディッカラール" },
      honorificPast: { ta: "படிச்சாரு", roman: "paḍi-cc-āru", kana: "パディッチャール" },
      honorificFuture: { ta: "படிப்பாரு", roman: "paḍi-pp-āru", kana: "パディッパール" },
      pluralPresent: { ta: "படிக்கறாங்க", roman: "paḍi-kk-r-āṅka", kana: "パディッカラーンガ" },
      pluralPast: { ta: "படிச்சாங்க", roman: "paḍi-cc-āṅka", kana: "パディッチャーンガ" },
      pluralFuture: { ta: "படிப்பாங்க", roman: "paḍi-pp-āṅka", kana: "パディッパーンガ" },
      neuterPresent: { ta: "படிக்கறது", roman: "paḍi-kk-r-adu", kana: "パディッカラドゥ" },
      neuterPast: { ta: "படிச்சது", roman: "paḍi-cc-adu", kana: "パディッチャドゥ" },
      neuterFuture: { ta: "படிக்கும்", roman: "paḍi-kk-um", kana: "パディックム" },
      progressive: { ta: "படிச்சுக்கிட்டு இருக்கேன்", roman: "paḍi-cc-u-kkiṭṭu irukk-ēn", kana: "パディッチュッキットゥ イルッケーン" },
      perfect: { ta: "படிச்சிருக்கேன்", roman: "paḍi-cc-irukk-ēn", kana: "パディッチルッケーン" },
      completive: { ta: "படிச்சுட்டேன்", roman: "paḍi-cc-uṭṭ-ēn", kana: "パディッチュッテーン" },
      politeImperative: { ta: "படிங்க", roman: "paḍi-ṅka", kana: "パディンガ" },
      politeNegativeImperative: { ta: "படிக்காதீங்க", roman: "paḍi-kk-ā-d-īṅka", kana: "パディッカーディーンガ" },
      familiarPresent: { ta: "படிக்கறே", roman: "paḍi-kk-r-ē", kana: "パディッカレー" },
      familiarPast: { ta: "படிச்சே", roman: "paḍi-cc-ē", kana: "パディッチェー" },
      familiarFuture: { ta: "படிப்பே", roman: "paḍi-pp-ē", kana: "パディッペー" },
      firstPluralPresent: { ta: "படிக்கறோம்", roman: "paḍi-kk-r-ōm", kana: "パディッカローム" },
      firstPluralPast: { ta: "படிச்சோம்", roman: "paḍi-cc-ōm", kana: "パディッチョーム" },
      firstPluralFuture: { ta: "படிப்போம்", roman: "paḍi-pp-ōm", kana: "パディッポーム" },
      hortative: { ta: "படிக்கலாம்", roman: "paḍikka-lām", kana: "パディッカラーム" },
      quotePresent: { ta: "படிக்கறேன்னு", roman: "paḍi-kk-r-ēn-nu", kana: "パディッカレーンヌ" },
      quotePast: { ta: "படிச்சேன்னு", roman: "paḍi-cc-ēn-nu", kana: "パディッチェーンヌ" },
      quoteFuture: { ta: "படிப்பேன்னு", roman: "paḍi-pp-ēn-nu", kana: "パディッペーンヌ" },
      intent: { ta: "படிக்கலாம்னு இருக்கேன்", roman: "paḍikka-lām-nnu irukk-ēn", kana: "パディッカラームンヌ イルッケーン" },
      reportive: { ta: "படிப்பாராம்", roman: "paḍi-pp-ār-ām", kana: "パディッパーラーム" },
      conditional: { ta: "படிச்சா", roman: "paḍi-cc-ā", kana: "パディッチャー" },
      concessive: { ta: "படிச்சாலும்", roman: "paḍi-cc-āl-um", kana: "パディッチャールム" },
      relativePresent: { ta: "படிக்கற", roman: "paḍi-kk-r-a", kana: "パディッカラ" },
      relativePast: { ta: "படிச்ச", roman: "paḍi-cc-a", kana: "パディッチャ" },
      reasonForm: { ta: "படிக்கறதுனால", roman: "paḍi-kk-r-ad-u-nāle", kana: "パディッカラドゥナーレ" },
      infinitive: { ta: "படிக்க", roman: "paḍikka", kana: "パディッカ" },
      avp: { ta: "படிச்சு", roman: "paḍiccu", kana: "パディッチュ" },
      nonfutureNegative: { ta: "படிக்கல", roman: "paḍikka-la", kana: "パディッカラ" },
      futureNegative: { ta: "படிக்கமாட்டேன்", roman: "paḍikka-māṭṭ-ēn", kana: "パディッカマーッテーン" }
    },
    {
      id: "iru",
      meaning: "いる・ある・滞在する",
      classLabel: "強変化・存在動詞",
      lemma: { ta: "இரு", roman: "iru", kana: "イル" },
      present: { ta: "இருக்கேன்", roman: "iru-kk-ēn", kana: "イルッケーン" },
      past: { ta: "இருந்தேன்", roman: "irund-ēn", kana: "イルンデーン" },
      future: { ta: "இருப்பேன்", roman: "iru-pp-ēn", kana: "イルッペーン" },
      politePresent: { ta: "இருக்கீங்க", roman: "iru-kk-īṅka", kana: "イルッキーンガ" },
      politePast: { ta: "இருந்தீங்க", roman: "irund-īṅka", kana: "イルンディーンガ" },
      politeFuture: { ta: "இருப்பீங்க", roman: "iru-pp-īṅka", kana: "イルッピーンガ" },
      politePresentQuestion: { ta: "இருக்கீங்களா?", roman: "iru-kk-īṅkaḷ-ā?", kana: "イルッキーンガラー？" },
      politePastQuestion: { ta: "இருந்தீங்களா?", roman: "irund-īṅkaḷ-ā?", kana: "イルンディーンガラー？" },
      politeFutureQuestion: { ta: "இருப்பீங்களா?", roman: "iru-pp-īṅkaḷ-ā?", kana: "イルッピーンガラー？" },
      masculinePresent: { ta: "இருக்கான்", roman: "iru-kk-āṉ", kana: "イルッカーン" },
      masculinePast: { ta: "இருந்தான்", roman: "irund-āṉ", kana: "イルンダーン" },
      masculineFuture: { ta: "இருப்பான்", roman: "iru-pp-āṉ", kana: "イルッパーン" },
      femininePresent: { ta: "இருக்கா", roman: "iru-kk-ā", kana: "イルッカー" },
      femininePast: { ta: "இருந்தா", roman: "irund-ā", kana: "イルンダー" },
      feminineFuture: { ta: "இருப்பா", roman: "iru-pp-ā", kana: "イルッパー" },
      honorificPresent: { ta: "இருக்காரு", roman: "iru-kk-āru", kana: "イルッカール" },
      honorificPast: { ta: "இருந்தாரு", roman: "irund-āru", kana: "イルンダール" },
      honorificFuture: { ta: "இருப்பாரு", roman: "iru-pp-āru", kana: "イルッパール" },
      pluralPresent: { ta: "இருக்காங்க", roman: "iru-kk-āṅka", kana: "イルッカーンガ" },
      pluralPast: { ta: "இருந்தாங்க", roman: "irund-āṅka", kana: "イルンダーンガ" },
      pluralFuture: { ta: "இருப்பாங்க", roman: "iru-pp-āṅka", kana: "イルッパーンガ" },
      neuterPresent: { ta: "இருக்கு", roman: "iru-kku", kana: "イルック" },
      neuterPast: { ta: "இருந்தது", roman: "irund-adu", kana: "イルンダドゥ" },
      neuterFuture: { ta: "இருக்கும்", roman: "iru-kk-um", kana: "イルックム" },
      progressive: { ta: "இருந்துக்கிட்டு இருக்கேன்", roman: "irund-u-kkiṭṭu irukk-ēn", kana: "イルンドゥッキットゥ イルッケーン" },
      perfect: { ta: "இருந்திருக்கேன்", roman: "irund-irukk-ēn", kana: "イルンディルッケーン" },
      completive: { ta: "இருந்துட்டேன்", roman: "irund-uṭṭ-ēn", kana: "イルンドゥッテーン" },
      politeImperative: { ta: "இருங்க", roman: "iru-ṅka", kana: "イルンガ" },
      politeNegativeImperative: { ta: "இருக்காதீங்க", roman: "iru-kk-ā-d-īṅka", kana: "イルッカーディーンガ" },
      familiarPresent: { ta: "இருக்கே", roman: "iru-kk-ē", kana: "イルッケー" },
      familiarPast: { ta: "இருந்தே", roman: "irund-ē", kana: "イルンデー" },
      familiarFuture: { ta: "இருப்பே", roman: "iru-pp-ē", kana: "イルッペー" },
      firstPluralPresent: { ta: "இருக்கோம்", roman: "iru-kk-ōm", kana: "イルッコーム" },
      firstPluralPast: { ta: "இருந்தோம்", roman: "irund-ōm", kana: "イルンドーム" },
      firstPluralFuture: { ta: "இருப்போம்", roman: "iru-pp-ōm", kana: "イルッポーム" },
      hortative: { ta: "இருக்கலாம்", roman: "irukka-lām", kana: "イルッカラーム" },
      quotePresent: { ta: "இருக்கேன்னு", roman: "iru-kk-ēn-nu", kana: "イルッケーンヌ" },
      quotePast: { ta: "இருந்தேன்னு", roman: "irund-ēn-nu", kana: "イルンデーンヌ" },
      quoteFuture: { ta: "இருப்பேன்னு", roman: "iru-pp-ēn-nu", kana: "イルッペーンヌ" },
      intent: { ta: "இருக்கலாம்னு இருக்கேன்", roman: "irukka-lām-nnu irukk-ēn", kana: "イルッカラームンヌ イルッケーン" },
      reportive: { ta: "இருப்பாராம்", roman: "iru-pp-ār-ām", kana: "イルッパーラーム" },
      conditional: { ta: "இருந்தா", roman: "irund-ā", kana: "イルンダー" },
      concessive: { ta: "இருந்தாலும்", roman: "irund-āl-um", kana: "イルンダールム" },
      relativePresent: { ta: "இருக்கற", roman: "iru-kk-r-a", kana: "イルッカラ" },
      relativePast: { ta: "இருந்த", roman: "irund-a", kana: "イルンダ" },
      reasonForm: { ta: "இருக்கறதுனால", roman: "iru-kk-r-ad-u-nāle", kana: "イルッカラドゥナーレ" },
      infinitive: { ta: "இருக்க", roman: "irukka", kana: "イルッカ" },
      avp: { ta: "இருந்து", roman: "irundu", kana: "イルンドゥ" },
      nonfutureNegative: { ta: "இல்ல", roman: "illa", kana: "イッラ" },
      futureNegative: { ta: "இருக்கமாட்டேன்", roman: "irukka-māṭṭ-ēn", kana: "イルッカマーッテーン" }
    }
  ],

  chapters: [
    {
      id: "self-present",
      number: 1,
      navTitle: "私はする",
      title: "文末に「私」を置く",
      tamilTitle: "நான் …றேன் · நான் …க்கறேன்",
      deck: "最初に覚えるのは人称表ではなく、文を終わらせる一人称語尾 <strong>-ēn</strong>。6動詞を入れ替えながら、タミル語の文末エンジンを手で回します。",
      targets: ["一人称 -ēn", "現在・直近未来・習慣", "弱変化 / 強変化", "主語の省略"],
      heroExample: {
        id: "1-01",
        ta: "நான் இப்போ போறேன்.",
        roman: "nāṉ ippō pōrēn.",
        morph: "nāṉ ippō pō-r-ēn.",
        kana: "ナーン イッポー ポーレーン。",
        ja: "私は今、行きます。",
        literal: "私＋今＋行く・現在・私"
      },
      readSections: [
        {
          kicker: "THE ENGINE",
          heading: "文の最後を見るだけで、話し手がわかる",
          paragraphs: [
            "タミル語の基本語順は、ざっくり言えば<strong>「私は＋目的地や物＋動詞」</strong>です。いちばん大事な情報は文末へ集まり、動詞の最後に <code>-ēn</code> があれば、主語は「私」だとわかります。",
            "だから最初から人称変化を全部並べません。まず <span class=\"ta-inline\" lang=\"ta\">நான்</span> <strong>nāṉ「私」</strong>と <code>-ēn</code> を固定し、動詞の中ほどだけを観察します。英語の I を毎回言う感覚より、文末の <code>-ēn</code> が小さな「私」だと思うほうが早いです。"
          ],
          formula: {
            label: "一人称の終止形",
            slots: ["語幹", "現在の形", "-ēn"],
            note: "例：pō-r-ēn／paḍi-kk-r-ēn。強い動詞では -kk- が現れます。"
          }
        },
        {
          kicker: "ONE FORM, THREE READINGS",
          heading: "「現在形」は、今・直近の予定・習慣を運ぶ",
          paragraphs: [
            "<span class=\"ta-inline\" lang=\"ta\">போறேன்</span> <strong>pōrēn</strong> は、文脈によって「行きます」「今から行きます」「ふだん行きます」になります。日本語訳を一つに固定せず、<strong>時間語とセット</strong>で意味を取ります。",
            "ただし「まさに動作中」を細かく描く進行形とは別です。第1章では、旅行会話で圧倒的に使いやすい単純現在を先に固めます。"
          ],
          note: { tone: "blue", title: "時間語が操縦桿", body: "இப்போ ippō「今」／நாளைக்கு nāḷaikki「明日」／தினமும் tiṉamum「毎日」を入れると、同じ現在形の読みが自然に決まります。" }
        },
        {
          kicker: "WEAK & STRONG",
          heading: "クラス差は過去形だけではない",
          paragraphs: [
            "弱変化の <span class=\"ta-inline\" lang=\"ta\">போறேன்</span> <strong>pō-r-ēn</strong> に対し、強変化の <span class=\"ta-inline\" lang=\"ta\">படிக்கறேன்</span> は <strong>paḍi-kk-r-ēn</strong>。現在形の時点ですでに <code>-kk-</code> が顔を出します。",
            "この差は未来形や不定詞にも続きます。したがって、動詞は「辞書形＋過去」だけでなく、<strong>現在・過去・未来・不定詞・副動詞の小さな家族</strong>として覚えるのが安全です。"
          ],
          note: { tone: "pink", title: "口語の綴りについて", body: "話し言葉の綴りは完全には標準化されていません。本教材では、形が見えやすいチェンナイ口語表記（போறேன்、வர்றேன்、படிக்கறேன் など）に統一しています。" }
        },
        {
          kicker: "DROP THE PRONOUN",
          heading: "一度フルで言ったら、நான் は消せる",
          paragraphs: [
            "<code>-ēn</code> が「私」を示すため、文脈が明らかなら <span class=\"ta-inline\" lang=\"ta\">நான்</span> は省略できます。<span class=\"ta-inline\" lang=\"ta\">இப்போ போறேன்.</span> だけで「今、行きます」です。",
            "ただし強調したいとき、話題を切り替えるとき、主語が曖昧になりそうなときは <span class=\"ta-inline\" lang=\"ta\">நான்</span> を残します。最初はフル形を一度言い、二文目から落とす練習がちょうどよいです。"
          ]
        }
      ],
      formConfig: {
        title: "6動詞＋存在動詞の現在形",
        intro: "語尾 -ēn は固定。弱変化の -r- と、強変化の -kk-r- を見比べます。",
        keys: ["lemma", "present"],
        labels: { lemma: "辞書形", present: "現在1単" }
      },
      examples: [
        { id: "1-01", featured: true, ta: "நான் இப்போ போறேன்.", roman: "nāṉ ippō pōrēn.", morph: "nāṉ ippō pō-r-ēn.", kana: "ナーン イッポー ポーレーン。", ja: "私は今、行きます。", literal: "私＋今＋行く・現在・私" },
        { id: "1-02", featured: true, ta: "நான் வீட்டுக்கு வர்றேன்.", roman: "nāṉ vīṭṭukku varrēn.", morph: "nāṉ vīṭṭu-kku var-r-ēn.", kana: "ナーン ヴィーットゥック ヴァッレーン。", ja: "私は家に来ます／帰ってきます。", literal: "私＋家・へ＋来る・現在・私" },
        { id: "1-03", featured: true, ta: "நான் இட்லி சாப்பிடறேன்.", roman: "nāṉ iṭli sāppiḍrēn.", morph: "nāṉ iṭli sāppiḍ-r-ēn.", kana: "ナーン イドリ サーッピダレーン。", ja: "私はイドリを食べます。", literal: "私＋イドリ＋食べる・現在・私" },
        { id: "1-04", ta: "நான் கடையில வாழைப்பழம் வாங்குறேன்.", roman: "nāṉ kaḍai-le vāḻaippaḻam vāṅkurēn.", morph: "nāṉ kaḍai-le vāḻaippaḻam vāṅku-r-ēn.", kana: "ナーン カダイレ ヴァーレッパラム ヴァーングレーン。", ja: "私は店でバナナを買います。", literal: "私＋店・で＋バナナ＋買う・現在・私" },
        { id: "1-05", ta: "நான் அந்தப் படத்தைப் பாக்கறேன்.", roman: "nāṉ anda paḍatte pākkrēn.", morph: "nāṉ anda paḍatt-e pāk-k-r-ēn.", kana: "ナーン アンダ パダッテ パーッカレーン。", ja: "私はその映画を見ます。", literal: "私＋その＋映画・を＋見る・強現在・私" },
        { id: "1-06", ta: "நான் இந்தப் புத்தகத்தைப் படிக்கறேன்.", roman: "nāṉ inda puttahatte paḍikkrēn.", morph: "nāṉ inda puttahatt-e paḍi-kk-r-ēn.", kana: "ナーン インダ プッタガッテ パディッカレーン。", ja: "私はこの本を読みます。", literal: "私＋この＋本・を＋読む・強現在・私" },
        { id: "1-07", ta: "இப்போ போறேன்.", roman: "ippō pōrēn.", morph: "ippō pō-r-ēn.", kana: "イッポー ポーレーン。", ja: "今、行きます。", literal: "今＋行く・現在・私" },
        { id: "1-08", ta: "நாளைக்கு வர்றேன்.", roman: "nāḷaikki varrēn.", morph: "nāḷaikki var-r-ēn.", kana: "ナーレッキ ヴァッレーン。", ja: "明日、来ます。", literal: "明日＋来る・現在・私" },
        { id: "1-09", ta: "தினமும் தமிழ் படிக்கறேன்.", roman: "tiṉamum tamiḻ paḍikkrēn.", morph: "tiṉamum tamiḻ paḍi-kk-r-ēn.", kana: "ティナムム タミル パディッカレーン。", ja: "毎日タミル語を勉強しています。", literal: "毎日＋タミル語＋勉強する・強現在・私" },
        { id: "1-10", ta: "இங்க இருக்கேன்.", roman: "iṅge irukkēn.", morph: "iṅge iru-kk-ēn.", kana: "インゲ イルッケーン。", ja: "ここにいます。", literal: "ここ＋いる・現在・私" },
        { id: "1-11", ta: "நான் சென்னைல இருக்கேன்.", roman: "nāṉ ceṉṉai-le irukkēn.", morph: "nāṉ ceṉṉai-le iru-kk-ēn.", kana: "ナーン チェンネラ イルッケーン。", ja: "私はチェンナイにいます。", literal: "私＋チェンナイ・で＋いる・現在・私" },
        { id: "1-12", ta: "நான் இப்போ புத்தகம் படிக்கறேன்.", roman: "nāṉ ippō puttaham paḍikkrēn.", morph: "nāṉ ippō puttaham paḍi-kk-r-ēn.", kana: "ナーン イッポー プッタガム パディッカレーン。", ja: "私は今、本を読んでいます。", literal: "私＋今＋本＋読む・強現在・私" }
      ],
      quiz: [
        { q: "「私は今、行きます」に合う文末は？", options: ["போறேன்", "போனேன்", "போவேன்", "வர்றேன்"], answer: 0, feedback: "இப்போ「今」と単純現在 போறேன் の組み合わせです。", tags: ["正解", "過去", "未来", "動詞語彙"] },
        { q: "一人称単数を示す最後の部品は？", options: ["-ēn", "-r-", "-kk-", "-v-"], answer: 0, feedback: "-ēn が「私」。-r- は現在、-kk- は強変化、-v- は未来側の部品です。", tags: ["正解", "TAM", "クラス", "TAM"] },
        { q: "強変化の現在形はどれ？", options: ["படிக்கறேன்", "போறேன்", "வாங்குறேன்", "சாப்பிடறேன்"], answer: 0, feedback: "படி は paḍi-kk-r-ēn。-kk- が強変化の目印です。", tags: ["正解", "弱変化", "弱変化", "弱変化"] },
        { q: "主語を省略しても「私」とわかる文は？", options: ["இப்போ போறேன்.", "இப்போ போறான்.", "இப்போ போறீங்க.", "இப்போ போகலாம்."], answer: 0, feedback: "போறேன் の -ēn が一人称を保持します。", tags: ["正解", "3人称", "2人称敬", "人称なし"] }
      ]
    },

    {
      id: "self-past",
      number: 2,
      navTitle: "私はした",
      title: "過去形を、副動詞とペアで覚える",
      tamilTitle: "நான் வந்தேன் · வந்து…",
      deck: "過去は動詞ごとの分岐がもっとも大きい場所。ただし、一つずつ孤立暗記せず「〜した」と「〜して」を同じ過去語幹から組にします。",
      targets: ["過去クラス", "過去語幹＋-ēn", "副動詞 AVP", "動作をつなぐ"],
      heroExample: {
        id: "2-03",
        ta: "நான் வந்து சாப்பிட்டேன்.",
        roman: "nāṉ vandu sāppiṭṭēn.",
        morph: "nāṉ vand-u sāppiṭṭ-ēn.",
        kana: "ナーン ヴァンドゥ サーッピッテーン。",
        ja: "私は来て、食べました。",
        literal: "私＋来て＋食べた・私"
      },
      readSections: [
        {
          kicker: "PAST STEMS",
          heading: "-ēn はそのまま、直前だけが大きく割れる",
          paragraphs: [
            "過去でも一人称の最後は <code>-ēn</code> のままです。変わるのはその前。<strong>pō-n-ēn / vand-ēn / sāppiṭṭ-ēn / vāṅk-in-ēn / pātt-ēn / paḍi-cc-ēn</strong> のように、過去語幹が動詞クラスごとに分かれます。",
            "ここは完全な計算問題ではありません。規則はありますが、初学者が辞書形だけから必ず当てるのは危険です。新しい動詞を覚えるときは、過去1単を同時登録します。"
          ],
          formula: {
            label: "過去1単",
            slots: ["過去語幹", "-ēn"],
            note: "pātt-ēn「見た」／paḍi-cc-ēn「読んだ」。最後は同じ、過去語幹が違います。"
          }
        },
        {
          kicker: "THE PAIRING TRICK",
          heading: "「した」と「して」は、同じ顔をしている",
          paragraphs: [
            "副動詞（AVP）は「〜して、それから」の形です。<strong>vand-u ↔ vand-ēn、pātt-u ↔ pātt-ēn、paḍi-cc-u ↔ paḍi-cc-ēn</strong> のように、過去語幹を共有します。",
            "つまり過去形を覚えるたびに、文を伸ばす部品もほぼ同時に手に入ります。<span class=\"ta-inline\" lang=\"ta\">வந்து சாப்பிட்டேன்</span>「来て食べた」、<span class=\"ta-inline\" lang=\"ta\">சாப்பிட்டு போனேன்</span>「食べて行った」のように、最後の動詞だけが人称と時制を背負います。"
          ],
          note: { tone: "blue", title: "副動詞は単純な -i ではない", body: "போய் pōyi、வந்து vandu、பாத்து pāttu、படிச்சு paḍiccu のように形が分かれます。過去形とのペアが最短の記憶法です。" }
        },
        {
          kicker: "JUST-IN-TIME CASE",
          heading: "名詞の格は、動詞が必要とした瞬間に入れる",
          paragraphs: [
            "「チェンナイへ行った」なら目的地に <code>-kku</code>：<span class=\"ta-inline\" lang=\"ta\">சென்னைக்கு போனேன்</span>。「その映画を見た」なら特定目的語に口語対格 <code>-e</code>：<span class=\"ta-inline\" lang=\"ta\">அந்தப் படத்தைப் பாத்தேன்</span>。",
            "格語尾を一覧だけで暗記せず、<strong>行く→目的地、見る→目的語</strong>という動詞の要求と結びます。動詞エンジンは名詞を捨てる設計ではなく、必要になった名詞を正しい場所へ挿す設計です。"
          ]
        }
      ],
      formConfig: {
        title: "過去1単と「〜して」のペア",
        intro: "右の二つで同じ部分を探してください。そこが過去語幹です。",
        keys: ["past", "avp"],
        labels: { past: "〜した", avp: "〜して" }
      },
      examples: [
        { id: "2-01", featured: true, ta: "நான் நேத்து வந்தேன்.", roman: "nāṉ nēttu vandēn.", morph: "nāṉ nēttu vand-ēn.", kana: "ナーン ネーットゥ ヴァンデーン。", ja: "私は昨日来ました。", literal: "私＋昨日＋来た・私" },
        { id: "2-02", featured: true, ta: "நான் காலைல இட்லி சாப்பிட்டேன்.", roman: "nāṉ kālaile iṭli sāppiṭṭēn.", morph: "nāṉ kālai-le iṭli sāppiṭṭ-ēn.", kana: "ナーン カーレレ イドリ サーッピッテーン。", ja: "私は朝、イドリを食べました。", literal: "私＋朝・に＋イドリ＋食べた・私" },
        { id: "2-03", featured: true, ta: "நான் வந்து சாப்பிட்டேன்.", roman: "nāṉ vandu sāppiṭṭēn.", morph: "nāṉ vand-u sāppiṭṭ-ēn.", kana: "ナーン ヴァンドゥ サーッピッテーン。", ja: "私は来て、食べました。", literal: "私＋来て＋食べた・私" },
        { id: "2-04", ta: "நான் ஒரு புத்தகம் வாங்கினேன்.", roman: "nāṉ oru puttaham vāṅkinēn.", morph: "nāṉ oru puttaham vāṅk-in-ēn.", kana: "ナーン オル プッタガム ヴァーンギネーン。", ja: "私は本を一冊買いました。", literal: "私＋一つの＋本＋買う・過去・私" },
        { id: "2-05", ta: "நான் அந்தப் படத்தைப் பாத்தேன்.", roman: "nāṉ anda paḍatte pāttēn.", morph: "nāṉ anda paḍatt-e pātt-ēn.", kana: "ナーン アンダ パダッテ パーッテーン。", ja: "私はその映画を見ました。", literal: "私＋その＋映画・を＋見た・私" },
        { id: "2-06", ta: "நான் நேத்து தமிழ் படிச்சேன்.", roman: "nāṉ nēttu tamiḻ paḍiccēn.", morph: "nāṉ nēttu tamiḻ paḍi-cc-ēn.", kana: "ナーン ネーットゥ タミル パディッチェーン。", ja: "私は昨日タミル語を勉強しました。", literal: "私＋昨日＋タミル語＋勉強した・私" },
        { id: "2-07", ta: "நான் சென்னைக்கு போனேன்.", roman: "nāṉ ceṉṉaikku pōnēn.", morph: "nāṉ ceṉṉai-kku pō-n-ēn.", kana: "ナーン チェンネック ポーネーン。", ja: "私はチェンナイへ行きました。", literal: "私＋チェンナイ・へ＋行く・過去・私" },
        { id: "2-08", ta: "நான் சாப்பிட்டு போனேன்.", roman: "nāṉ sāppiṭṭu pōnēn.", morph: "nāṉ sāppiṭṭ-u pō-n-ēn.", kana: "ナーン サーッピットゥ ポーネーン。", ja: "私は食べてから行きました。", literal: "私＋食べて＋行った・私" },
        { id: "2-09", ta: "நான் புத்தகம் வாங்கி படிச்சேன்.", roman: "nāṉ puttaham vāṅki paḍiccēn.", morph: "nāṉ puttaham vāṅk-i paḍi-cc-ēn.", kana: "ナーン プッタガム ヴァーンギ パディッチェーン。", ja: "私は本を買って読みました。", literal: "私＋本＋買って＋読んだ・私" },
        { id: "2-10", ta: "நான் பாத்து வாங்கினேன்.", roman: "nāṉ pāttu vāṅkinēn.", morph: "nāṉ pātt-u vāṅk-in-ēn.", kana: "ナーン パーットゥ ヴァーンギネーン。", ja: "私は見て確かめてから買いました。", literal: "私＋見て＋買う・過去・私" },
        { id: "2-11", ta: "நான் சென்னைலேருந்து வந்தேன்.", roman: "nāṉ ceṉṉailērundu vandēn.", morph: "nāṉ ceṉṉai-lērundu vand-ēn.", kana: "ナーン チェンネレールンドゥ ヴァンデーン。", ja: "私はチェンナイから来ました。", literal: "私＋チェンナイ・から＋来た・私" },
        { id: "2-12", ta: "நேத்து போனேன்.", roman: "nēttu pōnēn.", morph: "nēttu pō-n-ēn.", kana: "ネーットゥ ポーネーン。", ja: "昨日、行きました。", literal: "昨日＋行く・過去・私" }
      ],
      quiz: [
        { q: "「私はその映画を見た」に合う過去形は？", options: ["பாத்தேன்", "பாக்கறேன்", "பாப்பேன்", "படிச்சேன்"], answer: 0, feedback: "பாரு の口語過去1単は பாத்தேன் pāttēn です。", tags: ["正解", "現在", "未来", "動詞語彙"] },
        { q: "வந்தேன் と過去語幹を共有する副動詞は？", options: ["வந்து", "வர", "வர்றேன்", "வருவேன்"], answer: 0, feedback: "vand-u ↔ vand-ēn。副動詞と過去形をペアで記憶します。", tags: ["正解", "不定詞", "現在", "未来"] },
        { q: "「食べて行った」の自然な並びは？", options: ["சாப்பிட்டு போனேன்", "சாப்பிட்டேன் போய்", "சாப்பிட போனேன்", "போய் சாப்பிடுவேன்"], answer: 0, feedback: "先行動作は副動詞 சாப்பிட்டு、最後だけが過去1単 போனேன் になります。", tags: ["正解", "節連鎖", "目的", "未来"] },
        { q: "paḍi「読む・勉強する」の過去1単は？", options: ["படிச்சேன்", "படித்தேன்", "படிக்கறேன்", "படிப்பேன்"], answer: 0, feedback: "この教材は口語。paḍi-cc-ēn → படிச்சேன் です。படித்தேன் は文語寄りの形です。", tags: ["正解", "レジスター", "現在", "未来"] }
      ]
    },

    {
      id: "self-future-negative",
      number: 3,
      navTitle: "私はする・しない",
      title: "未来と否定を、別々の線路に置く",
      tamilTitle: "போவேன் · போகல · போகமாட்டேன்",
      deck: "未来の -v- / -pp-、時制を中和する V-la、未来・意志を明示する V-a māṭṭēn。日本語の「しない」一語を三つに分解します。",
      targets: ["未来 -v- / -pp-", "非未来否定 V-la", "未来否定 māṭṭēn", "存在否定 illa"],
      heroExample: {
        id: "3-03",
        ta: "நான் நாளைக்கு போகமாட்டேன்.",
        roman: "nāṉ nāḷaikki pōkamāṭṭēn.",
        morph: "nāṉ nāḷaikki pōka-māṭṭ-ēn.",
        kana: "ナーン ナーレッキ ポーガマーッテーン。",
        ja: "私は明日は行きません。",
        literal: "私＋明日＋行く・未来否定・私"
      },
      readSections: [
        {
          kicker: "FUTURE / HABITUAL",
          heading: "未来は、弱変化 -v- と強変化 -pp-",
          paragraphs: [
            "弱変化は <strong>pō-v-ēn、varu-v-ēn、sāppiḍu-v-ēn</strong>。強変化は <strong>pā-pp-ēn、paḍi-pp-ēn</strong>。現在にあった -kk- と未来の -pp- は、同じ強変化グループの仲間です。",
            "この形は遠めの未来だけでなく習慣にも使われます。<span class=\"ta-inline\" lang=\"ta\">நாளைக்கு போவேன்</span> は「明日行く」、<span class=\"ta-inline\" lang=\"ta\">தினமும் படிப்பேன்</span> は「毎日勉強する」。やはり時間語が意味を決めます。"
          ],
          formula: {
            label: "未来1単",
            slots: ["弱：語幹＋-v-", "強：語幹＋-pp-", "-ēn"],
            note: "pō-v-ēn／paḍi-pp-ēn。強弱は不定詞にもつながります。"
          }
        },
        {
          kicker: "NON-FUTURE NEGATIVE",
          heading: "V-la は「いつ」を自分では言わない",
          paragraphs: [
            "口語の <strong>V-la</strong> は、ふつう現在・過去の否定に使われます。<span class=\"ta-inline\" lang=\"ta\">நேத்து போகல</span>「昨日行かなかった」、<span class=\"ta-inline\" lang=\"ta\">இன்னும் சாப்பிடல</span>「まだ食べていない」。形そのものは時制を区別せず、時間語と文脈が補います。",
            "したがって <strong>V-la＝過去否定</strong> と一対一で暗記しないこと。これは、肯定形と否定形が鏡写しにならないタミル語の重要な癖です。"
          ],
          note: { tone: "pink", title: "訳語を先に決めない", body: "போகல pōkala は文脈により「行かなかった／行っていない」。日本語訳より、非未来否定という機能を先に置きます。" }
        },
        {
          kicker: "FUTURE / VOLITIONAL NEGATIVE",
          heading: "未来をはっきり否定するなら māṭṭēn",
          paragraphs: [
            "明日の予定や話し手の意志として「行かない」と言うなら、<strong>不定詞＋māṭṭ-ēn</strong>：<span class=\"ta-inline\" lang=\"ta\">போகமாட்டேன்</span> <strong>pōka-māṭṭ-ēn</strong>。ここでは -ēn が戻り、誰の意志かもはっきりします。",
            "一方、存在動詞 <span class=\"ta-inline\" lang=\"ta\">இரு</span> の現在・過去側の否定は特別に <span class=\"ta-inline\" lang=\"ta\">இல்ல</span> <strong>illa</strong>。「私はそこにいない」は <span class=\"ta-inline\" lang=\"ta\">நான் அங்க இல்ல</span> です。"
          ],
          formula: {
            label: "未来・意志の否定",
            slots: ["不定詞", "māṭṭ", "-ēn"],
            note: "pōka-māṭṭ-ēn「私は行かない／行くつもりがない」。"
          }
        }
      ],
      formConfig: {
        title: "未来と二つの否定",
        intro: "未来形と未来否定には -ēn があり、V-la には人称語尾がありません。",
        keys: ["future", "nonfutureNegative", "futureNegative"],
        labels: { future: "する／するだろう", nonfutureNegative: "していない／しなかった", futureNegative: "しないだろう・しない意志" }
      },
      examples: [
        { id: "3-01", featured: true, ta: "நான் நாளைக்கு போவேன்.", roman: "nāṉ nāḷaikki pōvēn.", morph: "nāṉ nāḷaikki pō-v-ēn.", kana: "ナーン ナーレッキ ポーヴェーン。", ja: "私は明日行きます。", literal: "私＋明日＋行く・未来・私" },
        { id: "3-02", featured: true, ta: "நான் நேத்து போகல.", roman: "nāṉ nēttu pōkala.", morph: "nāṉ nēttu pōka-la.", kana: "ナーン ネーットゥ ポーガラ。", ja: "私は昨日行きませんでした。", literal: "私＋昨日＋行く・非未来否定" },
        { id: "3-03", featured: true, ta: "நான் நாளைக்கு போகமாட்டேன்.", roman: "nāṉ nāḷaikki pōkamāṭṭēn.", morph: "nāṉ nāḷaikki pōka-māṭṭ-ēn.", kana: "ナーン ナーレッキ ポーガマーッテーン。", ja: "私は明日は行きません。", literal: "私＋明日＋行く・未来否定・私" },
        { id: "3-04", ta: "நான் அடுத்த வாரம் வருவேன்.", roman: "nāṉ aḍutta vāram varuvēn.", morph: "nāṉ aḍutta vāram varu-v-ēn.", kana: "ナーン アドゥッタ ヴァーラム ヴァルヴェーン。", ja: "私は来週来ます。", literal: "私＋次の＋週＋来る・未来・私" },
        { id: "3-05", ta: "நான் பிறகு சாப்பிடுவேன்.", roman: "nāṉ piṟahu sāppiḍuvēn.", morph: "nāṉ piṟahu sāppiḍu-v-ēn.", kana: "ナーン ピラグ サーッピドゥヴェーン。", ja: "私はあとで食べます。", literal: "私＋あとで＋食べる・未来・私" },
        { id: "3-06", ta: "நான் அந்தப் புத்தகம் வாங்குவேன்.", roman: "nāṉ anda puttaham vāṅkuvēn.", morph: "nāṉ anda puttaham vāṅku-v-ēn.", kana: "ナーン アンダ プッタガム ヴァーングヴェーン。", ja: "私はその本を買います。", literal: "私＋その＋本＋買う・未来・私" },
        { id: "3-07", ta: "நான் அந்தப் படம் பாப்பேன்.", roman: "nāṉ anda paḍam pāppēn.", morph: "nāṉ anda paḍam pā-pp-ēn.", kana: "ナーン アンダ パダム パーッペーン。", ja: "私はその映画を見ます。", literal: "私＋その＋映画＋見る・強未来・私" },
        { id: "3-08", ta: "நான் தினமும் தமிழ் படிப்பேன்.", roman: "nāṉ tiṉamum tamiḻ paḍippēn.", morph: "nāṉ tiṉamum tamiḻ paḍi-pp-ēn.", kana: "ナーン ティナムム タミル パディッペーン。", ja: "私は毎日タミル語を勉強します。", literal: "私＋毎日＋タミル語＋勉強する・習慣・私" },
        { id: "3-09", ta: "நான் இன்னும் சாப்பிடல.", roman: "nāṉ iṉṉum sāppiḍala.", morph: "nāṉ iṉṉum sāppiḍa-la.", kana: "ナーン インヌム サーッピダラ。", ja: "私はまだ食べていません。", literal: "私＋まだ＋食べる・非未来否定" },
        { id: "3-10", ta: "நான் அந்தப் படம் பாக்கல.", roman: "nāṉ anda paḍam pākkala.", morph: "nāṉ anda paḍam pākka-la.", kana: "ナーン アンダ パダム パーッカラ。", ja: "私はその映画を見ませんでした／見ていません。", literal: "私＋その＋映画＋見る・非未来否定" },
        { id: "3-11", ta: "நான் நாளைக்கு வரமாட்டேன்.", roman: "nāṉ nāḷaikki varamāṭṭēn.", morph: "nāṉ nāḷaikki vara-māṭṭ-ēn.", kana: "ナーン ナーレッキ ヴァラマーッテーン。", ja: "私は明日は来ません。", literal: "私＋明日＋来る・未来否定・私" },
        { id: "3-12", ta: "நான் இனிமே தாமதமா வரமாட்டேன்.", roman: "nāṉ iṉimē tāmadamā varamāṭṭēn.", morph: "nāṉ iṉimē tāmadam-ā vara-māṭṭ-ēn.", kana: "ナーン イニメー ターマダマー ヴァラマーッテーン。", ja: "私はもう遅れて来ません。", literal: "私＋今後＋遅く＋来る・未来否定・私" },
        { id: "3-13", ta: "நான் அங்க இல்ல.", roman: "nāṉ aṅge illa.", morph: "nāṉ aṅge illa.", kana: "ナーン アンゲ イッラ。", ja: "私はそこにいません。", literal: "私＋そこ＋存在しない" },
        { id: "3-14", ta: "நாளைக்கு வாங்கமாட்டேன்.", roman: "nāḷaikki vāṅkamāṭṭēn.", morph: "nāḷaikki vāṅka-māṭṭ-ēn.", kana: "ナーレッキ ヴァーンガマーッテーン。", ja: "明日は買いません。", literal: "明日＋買う・未来否定・私" }
      ],
      quiz: [
        { q: "paḍi「勉強する」の未来1単は？", options: ["படிப்பேன்", "படிக்கறேன்", "படிச்சேன்", "படிக்கல"], answer: 0, feedback: "強変化は未来で -pp-：paḍi-pp-ēn です。", tags: ["正解", "現在", "過去", "否定"] },
        { q: "「昨日、行かなかった」に合う形は？", options: ["நேத்து போகல", "நேத்து போகமாட்டேன்", "நேத்து போவேன்", "நேத்து போறேன்"], answer: 0, feedback: "過去の時間語 நேத்து と非未来否定 V-la を組み合わせます。", tags: ["正解", "未来否定", "未来", "現在"] },
        { q: "「明日は来ない（予定・意志）」は？", options: ["நாளைக்கு வரமாட்டேன்", "நாளைக்கு வரல", "நாளைக்கு வந்தேன்", "நாளைக்கு வர்றேன்"], answer: 0, feedback: "未来を明示する否定は vara-māṭṭ-ēn。", tags: ["正解", "非未来否定", "過去", "現在直近"] },
        { q: "「私はそこにいない」の存在否定は？", options: ["நான் அங்க இல்ல", "நான் அங்க இருக்கல", "நான் அங்க போகல", "நான் அங்க வரல"], answer: 0, feedback: "இரு の存在否定は特別に இல்ல illa を使います。", tags: ["正解", "過剰一般化", "動詞語彙", "動詞語彙"] }
      ]
    },

    {
      id: "self-modal",
      number: 4,
      navTitle: "私はしたい・できる",
      title: "「私」を nāṉ から外へ出す",
      tamilTitle: "எனக்கு போகணும் · என்னால போக முடியும்",
      deck: "意志的な動作は nāṉ＋活用動詞。欲求・必要・能力は eṉakku／eṉṉāle＋不定詞。二本の自己表現レーンを並べて完成させます。",
      targets: ["不定詞の作り分け", "-ṇum 欲求・必要", "muḍiyum 可能", "nāṉ / eṉakku / eṉṉāle"],
      heroExample: {
        id: "4-08",
        ta: "எனக்கு தமிழ் படிக்கணும்.",
        roman: "eṉakku tamiḻ paḍikkaṇum.",
        morph: "eṉakku tamiḻ paḍikka-ṇum.",
        kana: "イェナック タミル パディッカヌム。",
        ja: "私はタミル語を勉強したい／しなければ。",
        literal: "私に＋タミル語＋勉強する・必要"
      },
      readSections: [
        {
          kicker: "THE INFINITIVE HUB",
          heading: "法助動詞の前には、不定詞を置く",
          paragraphs: [
            "欲求・必要・可能・許可は、<strong>不定詞＋法助動詞</strong>で作ります。ただし不定詞は辞書形に機械的な -a を足すだけではありません。<strong>pōka、vara、sāppiḍa、vāṅka、pākka、paḍikka、irukka</strong> と分かれます。",
            "強変化の <strong>pākka / paḍikka</strong> には -kk- があり、現在形の pāk-k-r-ēn / paḍi-kk-r-ēn と同じ家族だと見抜けます。pōka と vara は個別に覚える特別型です。"
          ],
          formula: {
            label: "モダリティの基本",
            slots: ["不定詞", "-ṇum / -lām / muḍiyum"],
            note: "この型そのものには、通常の一人称語尾 -ēn が付きません。"
          }
        },
        {
          kicker: "TWO SELF LANES",
          heading: "nāṉ は行為者、eṉakku は状態の持ち主",
          paragraphs: [
            "<span class=\"ta-inline\" lang=\"ta\">நான் நாளைக்கு வருவேன்</span> は「私は明日来る」――意志的な出来事なので <strong>nāṉ＋有限動詞 -ēn</strong>。一方、<span class=\"ta-inline\" lang=\"ta\">எனக்கு வரணும்</span> は直訳すると「私に、来る必要／欲求がある」で、<strong>eṉakku＋不定詞＋-ṇum</strong> です。",
            "-ṇum は文脈によって「〜したい」「〜しないと」「〜すべき」をまたぎます。純粋な希望を明示したいなら <span class=\"ta-inline\" lang=\"ta\">எனக்கு தமிழ் படிக்க ஆசை</span>「私はタミル語を勉強したい」のように <strong>āsai</strong> を使えます。"
          ],
          note: { tone: "pink", title: "日本語の「私は」に引っ張られない", body: "意味上の主語が自分でも、タミル語では nāṉ ではなく eṉakku「私に」になる構文があります。ここが第4章の主役です。" }
        },
        {
          kicker: "ABILITY",
          heading: "できる：eṉakku と eṉṉāle の違い",
          paragraphs: [
            "可能は <strong>不定詞＋muḍiyum</strong>。能力・状況可能の持ち主を <span class=\"ta-inline\" lang=\"ta\">எனக்கு</span> eṉakku「私に」で表せます。手段・働きかける主体として「私によって可能だ」を前に出すと <span class=\"ta-inline\" lang=\"ta\">என்னால</span> eṉṉāle を使います。",
            "参照文法では、eṉṉāle は「努力する意志も含めてできる」、eṉakku は純粋な能力に寄りやすいという差が示されています。会話では文脈差もあるので、最初は <strong>eṉṉāle V-a muḍiyum</strong> を「私は実行できる」の安全な塊として音読します。"
          ],
          formula: {
            label: "可能",
            slots: ["eṉakku / eṉṉāle", "不定詞", "muḍiyum / muḍiyādu"],
            note: "eṉṉāle paḍikka muḍiyum「私なら勉強できる」。"
          }
        },
        {
          kicker: "PERMISSION & A PREVIEW",
          heading: "-lām で「してよい／しよう」",
          paragraphs: [
            "不定詞＋<strong>-lām</strong> は許可「〜してよい」と勧誘「〜しよう」を表します。<span class=\"ta-inline\" lang=\"ta\">இப்போ போகலாம்</span> は状況により「今行ってよい／今行こう」。",
            "最後に疑問の <code>-ā?</code> を付けると <span class=\"ta-inline\" lang=\"ta\">நான் போகலாமா?</span>「行ってもいいですか」。疑問文は次の二人称編の入口ですが、疑問標識そのものは二人称専用ではありません。"
          ]
        }
      ],
      formConfig: {
        title: "不定詞から伸びる自己表現",
        intro: "まず各動詞の不定詞を確認し、そのまま -ṇum / -lām / muḍiyum へ接続します。",
        keys: ["infinitive"],
        labels: { infinitive: "不定詞" },
        modalRows: [
          { label: "したい・必要", ta: "போகணும்", roman: "pōka-ṇum", kana: "ポーガヌム", ja: "行きたい／行く必要がある" },
          { label: "してよい・しよう", ta: "போகலாம்", roman: "pōka-lām", kana: "ポーガラーム", ja: "行ってよい／行こう" },
          { label: "できる", ta: "போக முடியும்", roman: "pōka muḍiyum", kana: "ポーガ ムディユム", ja: "行くことができる" },
          { label: "できない", ta: "போக முடியாது", roman: "pōka muḍiyādu", kana: "ポーガ ムディヤードゥ", ja: "行くことができない" },
          { label: "純粋な希望", ta: "போக ஆசை", roman: "pōka āsai", kana: "ポーガ アーセ", ja: "行きたいという希望" }
        ]
      },
      examples: [
        { id: "4-01", featured: true, ta: "எனக்கு சென்னைக்கு போகணும்.", roman: "eṉakku ceṉṉaikku pōkaṇum.", morph: "eṉakku ceṉṉai-kku pōka-ṇum.", kana: "イェナック チェンネック ポーガヌム。", ja: "私はチェンナイへ行きたい／行く必要があります。", literal: "私に＋チェンナイ・へ＋行く・必要" },
        { id: "4-02", featured: true, ta: "என்னால தமிழ் படிக்க முடியும்.", roman: "eṉṉāle tamiḻ paḍikka muḍiyum.", morph: "eṉṉāle tamiḻ paḍikka muḍiyum.", kana: "イェンナーレ タミル パディッカ ムディユム。", ja: "私はタミル語を勉強できます。", literal: "私によって＋タミル語＋勉強する＋可能" },
        { id: "4-03", featured: true, ta: "நான் இப்போ போகலாமா?", roman: "nāṉ ippō pōkalāmā?", morph: "nāṉ ippō pōka-lām-ā?", kana: "ナーン イッポー ポーガラーマー？", ja: "私は今、行ってもいいですか。", literal: "私＋今＋行く・許可・疑問" },
        { id: "4-04", ta: "எனக்கு நாளைக்கு வரணும்.", roman: "eṉakku nāḷaikki varaṇum.", morph: "eṉakku nāḷaikki vara-ṇum.", kana: "イェナック ナーレッキ ヴァラヌム。", ja: "私は明日来たい／来る必要があります。", literal: "私に＋明日＋来る・必要" },
        { id: "4-05", ta: "எனக்கு இட்லி சாப்பிடணும்.", roman: "eṉakku iṭli sāppiḍaṇum.", morph: "eṉakku iṭli sāppiḍa-ṇum.", kana: "イェナック イドリ サーッピダヌム。", ja: "私はイドリを食べたいです。", literal: "私に＋イドリ＋食べる・欲求" },
        { id: "4-06", ta: "எனக்கு இந்தப் புத்தகம் வாங்கணும்.", roman: "eṉakku inda puttaham vāṅkaṇum.", morph: "eṉakku inda puttaham vāṅka-ṇum.", kana: "イェナック インダ プッタガム ヴァーンガヌム。", ja: "私はこの本を買いたい／買う必要があります。", literal: "私に＋この＋本＋買う・欲求／必要" },
        { id: "4-07", ta: "எனக்கு அந்தப் படம் பாக்கணும்.", roman: "eṉakku anda paḍam pākkaṇum.", morph: "eṉakku anda paḍam pākka-ṇum.", kana: "イェナック アンダ パダム パーッカヌム。", ja: "私はその映画を見たいです。", literal: "私に＋その＋映画＋見る・欲求" },
        { id: "4-08", ta: "எனக்கு தமிழ் படிக்கணும்.", roman: "eṉakku tamiḻ paḍikkaṇum.", morph: "eṉakku tamiḻ paḍikka-ṇum.", kana: "イェナック タミル パディッカヌム。", ja: "私はタミル語を勉強したい／しなければ。", literal: "私に＋タミル語＋勉強する・欲求／必要" },
        { id: "4-09", ta: "எனக்கு தமிழ் படிக்க ஆசை.", roman: "eṉakku tamiḻ paḍikka āsai.", morph: "eṉakku tamiḻ paḍikka āsai.", kana: "イェナック タミル パディッカ アーセ。", ja: "私はタミル語を勉強したいです。", literal: "私に＋タミル語＋勉強する＋願い" },
        { id: "4-10", ta: "எனக்கு நாளைக்கு வர முடியும்.", roman: "eṉakku nāḷaikki vara muḍiyum.", morph: "eṉakku nāḷaikki vara muḍiyum.", kana: "イェナック ナーレッキ ヴァラ ムディユム。", ja: "私は明日来ることができます。", literal: "私に＋明日＋来る＋可能" },
        { id: "4-11", ta: "என்னால இப்போ வர முடியாது.", roman: "eṉṉāle ippō vara muḍiyādu.", morph: "eṉṉāle ippō vara muḍiyādu.", kana: "イェンナーレ イッポー ヴァラ ムディヤードゥ。", ja: "私は今は来られません。", literal: "私によって＋今＋来る＋不可能" },
        { id: "4-12", ta: "இப்போ போகலாம்.", roman: "ippō pōkalām.", morph: "ippō pōka-lām.", kana: "イッポー ポーガラーム。", ja: "今、行きましょう／行ってもいいです。", literal: "今＋行く・勧誘／許可" },
        { id: "4-13", ta: "எனக்கு இந்தப் புத்தகம் வாங்க ஆசை.", roman: "eṉakku inda puttaham vāṅka āsai.", morph: "eṉakku inda puttaham vāṅka āsai.", kana: "イェナック インダ プッタガム ヴァーンガ アーセ。", ja: "私はこの本を買いたいです。", literal: "私に＋この＋本＋買う＋願い" },
        { id: "4-14", ta: "நான் நாளைக்கு வருவேன்.", roman: "nāṉ nāḷaikki varuvēn.", morph: "nāṉ nāḷaikki varu-v-ēn.", kana: "ナーン ナーレッキ ヴァルヴェーン。", ja: "私は明日来ます。", literal: "私＋明日＋来る・未来・私" }
      ],
      quiz: [
        { q: "「私はタミル語を勉強したい／しないと」に合う骨格は？", options: ["எனக்கு தமிழ் படிக்கணும்", "நான் தமிழ் படிக்கறேன்", "நான் தமிழ் படிச்சேன்", "எனக்கு தமிழ் படிக்கல"], answer: 0, feedback: "欲求・必要は eṉakku＋不定詞＋-ṇum。", tags: ["正解", "現在", "過去", "否定"] },
        { q: "pāru「見る」の不定詞は？", options: ["பாக்க", "பார", "பாத்து", "பாப்பேன்"], answer: 0, feedback: "強変化の不定詞は pākka。-kk- が現れます。", tags: ["正解", "過剰一般化", "副動詞", "未来"] },
        { q: "「私なら実行できる」に近い可能構文は？", options: ["என்னால வர முடியும்", "நான் வர முடியும்", "எனக்கு வருவேன்", "என்னால வந்தேன்"], answer: 0, feedback: "eṉṉāle＋不定詞＋muḍiyum で、行為者としての可能を出します。", tags: ["正解", "格枠", "一致", "TAM"] },
        { q: "「行ってもいいですか」は？", options: ["நான் போகலாமா?", "நான் போறேனா?", "நான் போனேனா?", "நான் போகல?"], answer: 0, feedback: "不定詞 pōka＋許可 -lām＋疑問 -ā です。", tags: ["正解", "現在疑問", "過去疑問", "否定"] },
        { q: "純粋な希望を明示する表現は？", options: ["எனக்கு தமிழ் படிக்க ஆசை", "நான் தமிழ் படிப்பேன்", "எனக்கு தமிழ் படிக்க முடியும்", "நான் தமிழ் படிக்கல"], answer: 0, feedback: "eṉakku＋不定詞＋āsai は「〜したいという願い」を明示します。", tags: ["正解", "未来", "可能", "否定"] }
      ]
    },

    {
      id: "you-polite",
      number: 5,
      navTitle: "あなたはする",
      title: "文末を「あなた」に切り替える",
      tamilTitle: "நீங்க …றீங்க · …க்கறீங்க",
      deck: "一人称で育てた時制語幹はそのまま。最後の -ēn を、旅先で安全な丁寧二人称 -īṅka に切り替え、相手について現在・過去・未来を言えるようにします。",
      targets: ["丁寧二人称 nīṅka", "人称語尾 -īṅka", "現在・過去・未来", "主語の省略"],
      heroExample: {
        id: "5-01",
        ta: "நீங்க இப்போ போறீங்க.",
        roman: "nīṅka ippō pōrīṅka.",
        morph: "nīṅka ippō pō-r-īṅka.",
        kana: "ニーンガ イッポー ポーリーンガ。",
        ja: "あなたは今、行きます。",
        literal: "あなた・丁寧＋今＋行く・現在・あなた丁寧"
      },
      readSections: [
        {
          kicker: "THE SECOND PERSON SWITCH",
          heading: "動詞の家族は変えず、最後だけを -īṅka にする",
          paragraphs: [
            "第1〜4章で作った <strong>語幹＋時制＋人称</strong>の骨組みを、そのまま対話へ移します。<span class=\"ta-inline\" lang=\"ta\">போறேன்</span> <strong>pō-r-ēn</strong>「私は行く」の最後を入れ替えると、<span class=\"ta-inline\" lang=\"ta\">போறீங்க</span> <strong>pō-r-īṅka</strong>「あなたは行く」です。現在の <code>-r-</code> も、動詞クラスも変わりません。",
            "過去なら <strong>pō-n-ēn → pō-n-īṅka</strong>、未来なら <strong>pō-v-ēn → pō-v-īṅka</strong>。つまり新しい暗記表を一から作るのではなく、既知の時制語幹へ丁寧二人称語尾を差し込むだけです。"
          ],
          formula: {
            label: "丁寧二人称の有限形",
            slots: ["時制語幹", "-īṅka"],
            note: "pō-r-īṅka／pō-n-īṅka／pō-v-īṅka。時制は語尾の前に残ります。"
          }
        },
        {
          kicker: "THE SAFE DEFAULT",
          heading: "旅先では、まず நீங்க を標準装備にする",
          paragraphs: [
            "<span class=\"ta-inline\" lang=\"ta\">நீங்க</span> <strong>nīṅka</strong> は複数の「あなたたち」であると同時に、一人の相手へ敬意を示す「あなた」です。店員、運転手、宿の人、初対面の相手には、この形を使えば社会距離を安全側に置けます。",
            "親しい一人に使う <span class=\"ta-inline\" lang=\"ta\">நீ</span> <strong>nī</strong> と語尾 <code>-ē</code> は実在する重要形ですが、使う相手を間違えると距離が近すぎます。本教材では、まず <strong>nīṅka＋-īṅka</strong> を会話の標準にし、親称は後の章で使用域ごと学びます。"
          ],
          note: { tone: "pink", title: "複数と敬意が同じ形", body: "nīṅka は「あなたたち」にも「あなた・丁寧」にもなります。旅行会話では、人数よりも敬意の働きを先に覚えます。" }
        },
        {
          kicker: "TENSE STAYS VISIBLE",
          heading: "-īṅka の前を見れば、現在・過去・未来がわかる",
          paragraphs: [
            "<strong>var-r-īṅka</strong>「来る」、<strong>vand-īṅka</strong>「来た」、<strong>varu-v-īṅka</strong>「来るだろう」。語尾が長くなっても、時制の見分け方は一人称と同じです。過去語幹 vand- や強未来 paḍi-pp- を消さずに読み取ります。",
            "強変化も保存されます。<strong>pāk-k-r-īṅka / pātt-īṅka / pā-pp-īṅka</strong>、<strong>paḍi-kk-r-īṅka / paḍi-cc-īṅka / paḍi-pp-īṅka</strong>。人称を増やしても、動詞クラスを覚え直す必要はありません。"
          ]
        },
        {
          kicker: "DROP THE PRONOUN AGAIN",
          heading: "語尾が相手を示すので、நீங்க も省略できる",
          paragraphs: [
            "会話の相手が明らかなら、<span class=\"ta-inline\" lang=\"ta\">இப்போ வர்றீங்க.</span> だけでも「今、あなたは来ます」です。<code>-īṅka</code> が聞き手を保持するため、毎回 nīṅka を置く必要はありません。",
            "ただし学習の最初は、<strong>nīṅka＋動詞</strong>を一度フルで言ってから省略します。誰について話しているか曖昧な場面や、相手を対比・強調するときは nīṅka を残してください。"
          ],
          note: { tone: "blue", title: "一人称との鏡", body: "-ēn が話し手を、-īṅka が聞き手を文末に置きます。この二つがそろうと、質問と答えを往復させる準備が整います。" }
        }
      ],
      formConfig: {
        title: "7動詞の丁寧二人称・3時制",
        intro: "語幹と時制は第1〜3章のまま。最後を -īṅka にして、一人称との差を耳で確認します。",
        keys: ["politePresent", "politePast", "politeFuture"],
        labels: { politePresent: "現在2敬", politePast: "過去2敬", politeFuture: "未来2敬" }
      },
      examples: [
        { id: "5-01", featured: true, ta: "நீங்க இப்போ போறீங்க.", roman: "nīṅka ippō pōrīṅka.", morph: "nīṅka ippō pō-r-īṅka.", kana: "ニーンガ イッポー ポーリーンガ。", ja: "あなたは今、行きます。", literal: "あなた・丁寧＋今＋行く・現在・あなた丁寧" },
        { id: "5-02", featured: true, ta: "நீங்க நேத்து வந்தீங்க.", roman: "nīṅka nēttu vandīṅka.", morph: "nīṅka nēttu vand-īṅka.", kana: "ニーンガ ネーットゥ ヴァンディーンガ。", ja: "あなたは昨日、来ました。", literal: "あなた・丁寧＋昨日＋来た・あなた丁寧" },
        { id: "5-03", featured: true, ta: "நீங்க நாளைக்கு வருவீங்க.", roman: "nīṅka nāḷaikki varuvīṅka.", morph: "nīṅka nāḷaikki varu-v-īṅka.", kana: "ニーンガ ナーレッキ ヴァルヴィーンガ。", ja: "あなたは明日、来ます。", literal: "あなた・丁寧＋明日＋来る・未来・あなた丁寧" },
        { id: "5-04", ta: "நீங்க இட்லி சாப்பிடறீங்க.", roman: "nīṅka iṭli sāppiḍrīṅka.", morph: "nīṅka iṭli sāppiḍ-r-īṅka.", kana: "ニーンガ イドリ サーッピダリーンガ。", ja: "あなたはイドリを食べます。", literal: "あなた・丁寧＋イドリ＋食べる・現在・あなた丁寧" },
        { id: "5-05", ta: "நீங்க கடையில தண்ணீர் வாங்குறீங்க.", roman: "nīṅka kaḍai-le taṇṇīr vāṅkurīṅka.", morph: "nīṅka kaḍai-le taṇṇīr vāṅku-r-īṅka.", kana: "ニーンガ カダイレ タンニール ヴァーングリーンガ。", ja: "あなたは店で水を買います。", literal: "あなた・丁寧＋店・で＋水＋買う・現在・あなた丁寧" },
        { id: "5-06", ta: "நீங்க அந்தப் படம் பாக்கறீங்க.", roman: "nīṅka anda paḍam pākkrīṅka.", morph: "nīṅka anda paḍam pāk-k-r-īṅka.", kana: "ニーンガ アンダ パダム パーッカリーンガ。", ja: "あなたはその映画を見ます。", literal: "あなた・丁寧＋その＋映画＋見る・強現在・あなた丁寧" },
        { id: "5-07", ta: "நீங்க இந்தப் புத்தகம் படிக்கறீங்க.", roman: "nīṅka inda puttaham paḍikkrīṅka.", morph: "nīṅka inda puttaham paḍi-kk-r-īṅka.", kana: "ニーンガ インダ プッタガム パディッカリーンガ。", ja: "あなたはこの本を読みます。", literal: "あなた・丁寧＋この＋本＋読む・強現在・あなた丁寧" },
        { id: "5-08", ta: "நீங்க இங்க இருக்கீங்க.", roman: "nīṅka iṅge irukkīṅka.", morph: "nīṅka iṅge iru-kk-īṅka.", kana: "ニーンガ インゲ イルッキーンガ。", ja: "あなたはここにいます。", literal: "あなた・丁寧＋ここ＋いる・あなた丁寧" },
        { id: "5-09", ta: "நீங்க இட்லி சாப்பிட்டீங்க.", roman: "nīṅka iṭli sāppiṭṭīṅka.", morph: "nīṅka iṭli sāppiṭṭ-īṅka.", kana: "ニーンガ イドリ サーッピッティーンガ。", ja: "あなたはイドリを食べました。", literal: "あなた・丁寧＋イドリ＋食べた・あなた丁寧" },
        { id: "5-10", ta: "நீங்க அந்தப் படம் பாத்தீங்க.", roman: "nīṅka anda paḍam pāttīṅka.", morph: "nīṅka anda paḍam pātt-īṅka.", kana: "ニーンガ アンダ パダム パーッティーンガ。", ja: "あなたはその映画を見ました。", literal: "あなた・丁寧＋その＋映画＋見た・あなた丁寧" },
        { id: "5-11", ta: "நீங்க நாளைக்கு போவீங்க.", roman: "nīṅka nāḷaikki pōvīṅka.", morph: "nīṅka nāḷaikki pō-v-īṅka.", kana: "ニーンガ ナーレッキ ポーヴィーンガ。", ja: "あなたは明日、行きます。", literal: "あなた・丁寧＋明日＋行く・未来・あなた丁寧" },
        { id: "5-12", ta: "நீங்க தினமும் தமிழ் படிப்பீங்க.", roman: "nīṅka tiṉamum tamiḻ paḍippīṅka.", morph: "nīṅka tiṉamum tamiḻ paḍi-pp-īṅka.", kana: "ニーンガ ティナムム タミル パディッピーンガ。", ja: "あなたは毎日タミル語を勉強します。", literal: "あなた・丁寧＋毎日＋タミル語＋勉強する・習慣・あなた丁寧" },
        { id: "5-13", ta: "இப்போ வர்றீங்க.", roman: "ippō varrīṅka.", morph: "ippō var-r-īṅka.", kana: "イッポー ヴァッリーンガ。", ja: "今、あなたは来ます。", literal: "今＋来る・現在・あなた丁寧" }
      ],
      quiz: [
        { q: "「あなたは今、行きます」に合う文は？", options: ["நீங்க இப்போ போறீங்க", "நான் இப்போ போறேன்", "நீங்க நேத்து போனீங்க", "நீங்க இப்போ வர்றீங்க"], answer: 0, feedback: "nīṅka に合わせ、現在語幹 pō-r- の後ろへ -īṅka を置きます。", tags: ["正解", "人称一致", "TAM", "語彙"] },
        { q: "丁寧な聞き手を示す人称語尾は？", options: ["-īṅka", "-ēn", "-ē", "-āṅka"], answer: 0, feedback: "-īṅka が丁寧二人称。-ēn は一人称、-ē は親称二人称、-āṅka は三人称複数・敬称側です。", tags: ["正解", "一人称", "レジスター", "三人称"] },
        { q: "「あなたはその映画を見ました」は？", options: ["நீங்க அந்தப் படம் பாத்தீங்க", "நீங்க அந்தப் படம் பாக்கறீங்க", "நான் அந்தப் படம் பாத்தேன்", "நீங்க நேத்து வந்தீங்க"], answer: 0, feedback: "pātt- は「見る」の過去語幹、-īṅka は丁寧二人称です。", tags: ["正解", "TAM", "人称一致", "語彙"] },
        { q: "paḍi「勉強する」の丁寧二人称未来は？", options: ["படிப்பீங்க", "படிக்கறீங்க", "படிச்சீங்க", "படிப்பேன்"], answer: 0, feedback: "強未来 paḍi-pp- に丁寧二人称 -īṅka：paḍippīṅka。", tags: ["正解", "現在", "過去", "人称一致"] },
        { q: "旅先の初対面の相手に安全な「あなた」は？", options: ["நீங்க", "நீ", "நான்", "எனக்கு"], answer: 0, feedback: "nīṅka は一人への敬意にも複数にも使える、旅行会話の安全な標準形です。", tags: ["正解", "レジスター", "人称", "格枠"] }
      ]
    },

    {
      id: "you-yes-no",
      number: 6,
      navTitle: "あなたはしますか",
      title: "文末に、質問の -ā を灯す",
      tamilTitle: "…றீங்களா? · …வீங்களா?",
      deck: "丁寧二人称の文を並べ替えず、最後に疑問標識 -ā を付けるだけで「〜しますか」。語尾内部で戻る -ḷ も含め、三時制の問いを一つの型にします。",
      targets: ["極性疑問 -ā", "-īṅkaḷ-ā の接続", "語順を変えない", "質問と肯定・否定の返答"],
      heroExample: {
        id: "6-01",
        ta: "நீங்க இப்போ போறீங்களா?",
        roman: "nīṅka ippō pōrīṅkaḷā?",
        morph: "nīṅka ippō pō-r-īṅkaḷ-ā?",
        kana: "ニーンガ イッポー ポーリーンガラー？",
        ja: "あなたは今、行きますか。",
        literal: "あなた・丁寧＋今＋行く・現在・あなた丁寧・疑問"
      },
      readSections: [
        {
          kicker: "YES–NO QUESTIONS",
          heading: "平叙文の最後に -ā を付ければ、質問になる",
          paragraphs: [
            "タミル語の極性疑問、つまり「はい／いいえ」で答えられる問いは、基本的に文末へ <code>-ā</code> を付けます。<span class=\"ta-inline\" lang=\"ta\">நீங்க இப்போ போறீங்க.</span> に疑問を加えると <span class=\"ta-inline\" lang=\"ta\">நீங்க இப்போ போறீங்களா?</span> です。",
            "英語のような主語と動詞の入れ替えはありません。肯定文で作った語順を保ったまま、最後へ疑問標識を灯します。このため、まず言い切り形を作り、最後に <code>-ā?</code> を足す二段階で練習できます。"
          ],
          formula: {
            label: "丁寧な極性疑問",
            slots: ["語幹＋時制", "-īṅkaḷ", "-ā?"],
            note: "pō-r-īṅkaḷ-ā?「行きますか」。疑問でも現在・過去・未来の部分は変わりません。"
          }
        },
        {
          kicker: "THE RETURNING Ḷ",
          heading: "言い切りで見えなかった -ḷ が、母音の前で戻る",
          paragraphs: [
            "言い切りの <strong>-īṅka</strong> は、歴史的・形態的には <strong>-īṅka(ḷ)</strong> と見なせます。文末では最後の <strong>ḷ</strong> が落ちますが、母音で始まる疑問 <code>-ā</code> が続くと戻り、<strong>-īṅkaḷ-ā</strong> になります。",
            "したがって <strong>pōrīṅka → pōrīṅkaḷā?</strong>、<strong>vandīṅka → vandīṅkaḷā?</strong>。タミル文字でも <span class=\"ta-inline\" lang=\"ta\">போறீங்க → போறீங்களா?</span> と <span class=\"ta-inline\" lang=\"ta\">ள</span> が現れます。これは別の敬語語尾ではなく、同じ語尾の接続形です。"
          ],
          note: { tone: "pink", title: "-īṅkā へ短絡しない", body: "教材上は -īṅkaḷ-ā と分解します。聞こえ方が速くても、綴りと形態の ḷ を消して新しい形を発明しません。" }
        },
        {
          kicker: "THREE TENSES, ONE QUESTION",
          heading: "時制を選んでから、同じ -ā を付ける",
          paragraphs: [
            "現在 <strong>pō-r-īṅkaḷ-ā?</strong>「行きますか」、過去 <strong>pō-n-īṅkaḷ-ā?</strong>「行きましたか」、未来 <strong>pō-v-īṅkaḷ-ā?</strong>「行く予定ですか」。疑問標識は同じで、時制だけがその前で交替します。",
            "よく使う <span class=\"ta-inline\" lang=\"ta\">சாப்பிட்டீங்களா?</span>「食べましたか」は、挨拶や気遣いにもなる頻出形です。まず意味を丸ごと覚えつつ、内部では <strong>sāppiṭṭ-īṅkaḷ-ā</strong> と分解できる状態を目指します。"
          ]
        },
        {
          kicker: "ANSWER WITH A PREDICATE",
          heading: "ஆமா／இல்ல のあとに、自分の動詞を返す",
          paragraphs: [
            "肯定の短い応答は <span class=\"ta-inline\" lang=\"ta\">ஆமா</span> <strong>āmā</strong>「はい」、否定は <span class=\"ta-inline\" lang=\"ta\">இல்ல</span> <strong>illa</strong>「いいえ」。ただし旅行会話では、それだけで止めずに <strong>-ēn</strong> の動詞を一つ返すと誤解が減ります。",
            "<span class=\"ta-inline\" lang=\"ta\">நாளைக்கு போவீங்களா?</span> に <span class=\"ta-inline\" lang=\"ta\">ஆமா, நாளைக்கு போவேன்.</span>、または <span class=\"ta-inline\" lang=\"ta\">இல்ல, நாளைக்கு போகமாட்டேன்.</span>。相手への <code>-īṅkaḷ-ā?</code> を、自分の <code>-ēn</code> へ切り返します。"
          ],
          note: { tone: "blue", title: "-ā は二人称専用ではない", body: "第4章の nāṉ pōkalāmā?「私は行ってもいいですか」のように、-ā は文を質問にする標識です。丁寧さと人称は、その前の形が担当します。" }
        }
      ],
      formConfig: {
        title: "7動詞の丁寧疑問・3時制",
        intro: "言い切り形の最後へ -ā を接続。-īṅka(ḷ) の ḷ が戻るところまで一塊で聞きます。",
        keys: ["politePresentQuestion", "politePastQuestion", "politeFutureQuestion"],
        labels: { politePresentQuestion: "今・習慣？", politePastQuestion: "した？", politeFutureQuestion: "予定・未来？" }
      },
      examples: [
        { id: "6-01", featured: true, ta: "நீங்க இப்போ போறீங்களா?", roman: "nīṅka ippō pōrīṅkaḷā?", morph: "nīṅka ippō pō-r-īṅkaḷ-ā?", kana: "ニーンガ イッポー ポーリーンガラー？", ja: "あなたは今、行きますか。", literal: "あなた・丁寧＋今＋行く・現在・あなた丁寧・疑問" },
        { id: "6-02", featured: true, ta: "நீங்க சாப்பிட்டீங்களா?", roman: "nīṅka sāppiṭṭīṅkaḷā?", morph: "nīṅka sāppiṭṭ-īṅkaḷ-ā?", kana: "ニーンガ サーッピッティーンガラー？", ja: "あなたは食べましたか。", literal: "あなた・丁寧＋食べた・あなた丁寧・疑問" },
        { id: "6-03", featured: true, ta: "நீங்க நாளைக்கு வருவீங்களா?", roman: "nīṅka nāḷaikki varuvīṅkaḷā?", morph: "nīṅka nāḷaikki varu-v-īṅkaḷ-ā?", kana: "ニーンガ ナーレッキ ヴァルヴィーンガラー？", ja: "あなたは明日、来ますか。", literal: "あなた・丁寧＋明日＋来る・未来・あなた丁寧・疑問" },
        { id: "6-04", ta: "நீங்க நாளைக்கு வர்றீங்களா?", roman: "nīṅka nāḷaikki varrīṅkaḷā?", morph: "nīṅka nāḷaikki var-r-īṅkaḷ-ā?", kana: "ニーンガ ナーレッキ ヴァッリーンガラー？", ja: "あなたは明日、来ますか。", literal: "あなた・丁寧＋明日＋来る・現在直近・あなた丁寧・疑問" },
        { id: "6-05", ta: "நீங்க இட்லி சாப்பிடறீங்களா?", roman: "nīṅka iṭli sāppiḍrīṅkaḷā?", morph: "nīṅka iṭli sāppiḍ-r-īṅkaḷ-ā?", kana: "ニーンガ イドリ サーッピダリーンガラー？", ja: "あなたはイドリを食べますか。", literal: "あなた・丁寧＋イドリ＋食べる・現在・あなた丁寧・疑問" },
        { id: "6-06", ta: "நீங்க தண்ணீர் வாங்குறீங்களா?", roman: "nīṅka taṇṇīr vāṅkurīṅkaḷā?", morph: "nīṅka taṇṇīr vāṅku-r-īṅkaḷ-ā?", kana: "ニーンガ タンニール ヴァーングリーンガラー？", ja: "あなたは水を買いますか。", literal: "あなた・丁寧＋水＋買う・現在・あなた丁寧・疑問" },
        { id: "6-07", ta: "நீங்க அந்தப் படம் பாக்கறீங்களா?", roman: "nīṅka anda paḍam pākkrīṅkaḷā?", morph: "nīṅka anda paḍam pāk-k-r-īṅkaḷ-ā?", kana: "ニーンガ アンダ パダム パーッカリーンガラー？", ja: "あなたはその映画を見ますか。", literal: "あなた・丁寧＋その＋映画＋見る・強現在・あなた丁寧・疑問" },
        { id: "6-08", ta: "நீங்க தமிழ் படிக்கறீங்களா?", roman: "nīṅka tamiḻ paḍikkrīṅkaḷā?", morph: "nīṅka tamiḻ paḍi-kk-r-īṅkaḷ-ā?", kana: "ニーンガ タミル パディッカリーンガラー？", ja: "あなたはタミル語を勉強していますか。", literal: "あなた・丁寧＋タミル語＋勉強する・強現在・あなた丁寧・疑問" },
        { id: "6-09", ta: "நீங்க இங்க இருக்கீங்களா?", roman: "nīṅka iṅge irukkīṅkaḷā?", morph: "nīṅka iṅge iru-kk-īṅkaḷ-ā?", kana: "ニーンガ インゲ イルッキーンガラー？", ja: "あなたはここにいますか。", literal: "あなた・丁寧＋ここ＋いる・あなた丁寧・疑問" },
        { id: "6-10", ta: "நீங்க நேத்து வந்தீங்களா?", roman: "nīṅka nēttu vandīṅkaḷā?", morph: "nīṅka nēttu vand-īṅkaḷ-ā?", kana: "ニーンガ ネーットゥ ヴァンディーンガラー？", ja: "あなたは昨日、来ましたか。", literal: "あなた・丁寧＋昨日＋来た・あなた丁寧・疑問" },
        { id: "6-11", ta: "நீங்க அந்தப் படம் பாத்தீங்களா?", roman: "nīṅka anda paḍam pāttīṅkaḷā?", morph: "nīṅka anda paḍam pātt-īṅkaḷ-ā?", kana: "ニーンガ アンダ パダム パーッティーンガラー？", ja: "あなたはその映画を見ましたか。", literal: "あなた・丁寧＋その＋映画＋見た・あなた丁寧・疑問" },
        { id: "6-12", ta: "ஆமா, நாளைக்கு போவேன்.", roman: "āmā, nāḷaikki pōvēn.", morph: "āmā, nāḷaikki pō-v-ēn.", kana: "アーマー、ナーレッキ ポーヴェーン。", ja: "はい、明日行きます。", literal: "はい＋明日＋行く・未来・私" },
        { id: "6-13", ta: "இல்ல, நாளைக்கு போகமாட்டேன்.", roman: "illa, nāḷaikki pōkamāṭṭēn.", morph: "illa, nāḷaikki pōka-māṭṭ-ēn.", kana: "イッラ、ナーレッキ ポーガマーッテーン。", ja: "いいえ、明日は行きません。", literal: "いいえ＋明日＋行く・未来否定・私" }
      ],
      quiz: [
        { q: "「あなたは今、行きますか」は？", options: ["நீங்க இப்போ போறீங்களா?", "நீங்க இப்போ போறீங்க.", "நீங்க நேத்து போனீங்களா?", "நான் இப்போ போறேனா?"], answer: 0, feedback: "現在の丁寧二人称 pōrīṅka に疑問 -ā を接続し、pōrīṅkaḷā? とします。", tags: ["正解", "疑問標識", "TAM", "人称一致"] },
        { q: "丁寧二人称の言い切り形に -ā が続くと戻る音は？", options: ["-ḷ-", "-n-", "-v-", "-pp-"], answer: 0, feedback: "-īṅka(ḷ)＋-ā → -īṅkaḷā。Tamil文字でも ள が現れます。", tags: ["正解", "過去語幹", "未来", "活用クラス"] },
        { q: "「あなたは食べましたか」は？", options: ["நீங்க சாப்பிட்டீங்களா?", "நீங்க சாப்பிடறீங்களா?", "நீங்க சாப்பிடுவீங்களா?", "நான் சாப்பிட்டேனா?"], answer: 0, feedback: "過去語幹 sāppiṭṭ-＋丁寧二人称＋疑問です。", tags: ["正解", "現在", "未来", "人称一致"] },
        { q: "極性疑問 -ā について正しい説明は？", options: ["人称に関係なく文を質問にできる", "丁寧二人称だけに付く", "語順を必ず逆転させる", "過去形だけに付く"], answer: 0, feedback: "-ā は疑問標識。人称・丁寧さ・時制は、その前の動詞形が担当します。", tags: ["正解", "人称", "語順", "TAM"] },
        { q: "நாளைக்கு போவீங்களா? への明確な肯定応答は？", options: ["ஆமா, நாளைக்கு போவேன்.", "இல்ல, நாளைக்கு போகமாட்டேன்.", "ஆமா, நேத்து போனேன்.", "ஆமா, நாளைக்கு வருவேன்."], answer: 0, feedback: "質問の未来 pōvīṅkaḷā? を、答えでは一人称未来 pōvēn へ切り替えます。", tags: ["正解", "極性", "TAM", "語彙"] }
      ]
    },

    {
      id: "you-wh",
      number: 7,
      navTitle: "いつ・どこ・何を",
      title: "答えの場所へ、疑問詞を置く",
      tamilTitle: "எங்க? · எப்போ? · என்ன?",
      deck: "疑問詞を文頭へ強制移動せず、知りたい答えが入る位置へ置く。どこ・いつ・何・どの・誰・どう・いくらを、既知の丁寧二人称動詞へ接続します。",
      targets: ["疑問詞を元位置に置く", "-ā を重ねない", "eṅge / eppō / eṉṉa", "疑問詞＋格"],
      heroExample: {
        id: "7-01",
        ta: "நீங்க எங்க போறீங்க?",
        roman: "nīṅka eṅge pōrīṅka?",
        morph: "nīṅka eṅge pō-r-īṅka?",
        kana: "ニーンガ イェンゲ ポーリーンガ？",
        ja: "あなたはどこへ行きますか。",
        literal: "あなた・丁寧＋どこ＋行く・現在・あなた丁寧"
      },
      readSections: [
        {
          kicker: "REPLACE THE ANSWER",
          heading: "答えの部品を、疑問詞に差し替える",
          paragraphs: [
            "<span class=\"ta-inline\" lang=\"ta\">நீங்க சென்னைக்கு போறீங்க.</span>「あなたはチェンナイへ行きます」の目的地を知りたければ、その場所を <span class=\"ta-inline\" lang=\"ta\">எங்க</span> <strong>eṅge</strong>「どこ」に替え、<span class=\"ta-inline\" lang=\"ta\">நீங்க எங்க போறீங்க?</span> とします。",
            "タミル語の疑問詞は、原則として答えが入る位置に残ります。まず肯定文を思い浮かべ、未知の部品だけを eṅge / eppō / eṉṉa へ替える方法なら、英語型の語順変換を覚える必要がありません。"
          ],
          formula: {
            label: "内容疑問の作り方",
            slots: ["既知の文", "答えの部品→疑問詞"],
            note: "nīṅka [ceṉṉaikku] pōrīṅka → nīṅka [eṅge] pōrīṅka?"
          }
        },
        {
          kicker: "NO EXTRA -Ā",
          heading: "疑問詞がある文には、ふつう -ā を足さない",
          paragraphs: [
            "「行きますか」は真偽を尋ねるため <strong>pōrīṅkaḷā?</strong>。「どこへ行きますか」は <strong>eṅge pōrīṅka?</strong> です。疑問詞そのものが知りたい情報を示すので、通常は文末へ極性疑問の <code>-ā</code> を重ねません。",
            "<span class=\"ta-inline\" lang=\"ta\">எங்க போறீங்களா?</span> のようにすると、初級で欲しい単純な「どこへ？」とは別の焦点・確認の読みを呼びやすくなります。最初は <strong>疑問詞あり＝-ā なし</strong>を明確なレーンとして練習します。"
          ],
          note: { tone: "pink", title: "二つの疑問を混ぜない", body: "pōrīṅkaḷā? は「行くか否か」。eṅge pōrīṅka? は「行き先はどこか」。何を未知にしているかが違います。" }
        },
        {
          kicker: "THE E-SERIES",
          heading: "i＝ここ、a＝そこ、e＝どこ、の系列を見る",
          paragraphs: [
            "既出の <span class=\"ta-inline\" lang=\"ta\">இங்க</span> <strong>iṅge</strong>「ここ」、<span class=\"ta-inline\" lang=\"ta\">அங்க</span> <strong>aṅge</strong>「そこ」に対し、疑問は <span class=\"ta-inline\" lang=\"ta\">எங்க</span> <strong>eṅge</strong>「どこ」。タミル語では i- が近称、a- が遠称、e- が疑問を作る系列が広く見られます。",
            "時間は <span class=\"ta-inline\" lang=\"ta\">எப்போ</span> <strong>eppō</strong>「いつ」、物・内容は <span class=\"ta-inline\" lang=\"ta\">என்ன</span> <strong>eṉṉa</strong>「何」。選択肢の中から「どの名詞」と尋ねる <span class=\"ta-inline\" lang=\"ta\">எந்த</span> <strong>enda</strong> は、<strong>enda＋名詞</strong>で使います。"
          ]
        },
        {
          kicker: "QUESTION WORDS TAKE CASE",
          heading: "疑問詞も、答えと同じ格の場所に入る",
          paragraphs: [
            "「どこから」は <span class=\"ta-inline\" lang=\"ta\">எங்கிருந்து</span> <strong>eṅge-irundu</strong>、「誰を」は <span class=\"ta-inline\" lang=\"ta\">யாரை</span> <strong>yāre</strong>。疑問詞だから格が消えるのではなく、求める答えが持つ関係を疑問詞にも持たせます。",
            "旅行では <span class=\"ta-inline\" lang=\"ta\">நீங்க எங்கிருந்து வர்றீங்க?</span>「どこから来ましたか」、<span class=\"ta-inline\" lang=\"ta\">இது எவ்வளவு?</span>「これはいくらですか」が即戦力です。文法を広げすぎず、移動・人・金額に必要な形から使います。"
          ],
          note: { tone: "blue", title: "疑問詞は語彙ではなく差し替え装置", body: "eṅge / eppō / eṉṉa を覚えると、7動詞×3時制の文をそのまま質問へ変換できます。" }
        }
      ],
      formConfig: {
        title: "丁寧現在形と疑問詞の差し替え",
        intro: "動詞側は -īṅka のまま。下の疑問詞を、答えが入る場所へ差し込みます。",
        keys: ["politePresent"],
        labels: { politePresent: "質問の文末" },
        extensionKicker: "QUESTION WORDS",
        extensionTitle: "旅行で先に使う8つの疑問部品",
        modalRows: [
          { label: "場所", ta: "எங்க", roman: "eṅge", kana: "イェンゲ", ja: "どこ" },
          { label: "時間", ta: "எப்போ", roman: "eppō", kana: "イェッポー", ja: "いつ" },
          { label: "内容・物", ta: "என்ன", roman: "eṉṉa", kana: "イェンナ", ja: "何" },
          { label: "選択", ta: "எந்த", roman: "enda", kana: "イェンダ", ja: "どの＋名詞" },
          { label: "人", ta: "யாரு", roman: "yāru", kana: "ヤール", ja: "誰" },
          { label: "様子・方法", ta: "எப்படி", roman: "eppaḍi", kana: "イェッパディ", ja: "どう・どのように" },
          { label: "量・値段", ta: "எவ்வளவு", roman: "evvaḷavu", kana: "イェッヴァラヴ", ja: "いくら・どれくらい" },
          { label: "起点", ta: "எங்கிருந்து", roman: "eṅge-irundu", kana: "イェンギルンドゥ", ja: "どこから" }
        ]
      },
      examples: [
        { id: "7-01", featured: true, ta: "நீங்க எங்க போறீங்க?", roman: "nīṅka eṅge pōrīṅka?", morph: "nīṅka eṅge pō-r-īṅka?", kana: "ニーンガ イェンゲ ポーリーンガ？", ja: "あなたはどこへ行きますか。", literal: "あなた・丁寧＋どこ＋行く・現在・あなた丁寧" },
        { id: "7-02", featured: true, ta: "நீங்க எப்போ வர்றீங்க?", roman: "nīṅka eppō varrīṅka?", morph: "nīṅka eppō var-r-īṅka?", kana: "ニーンガ イェッポー ヴァッリーンガ？", ja: "あなたはいつ来ますか。", literal: "あなた・丁寧＋いつ＋来る・現在・あなた丁寧" },
        { id: "7-03", featured: true, ta: "நீங்க என்ன சாப்பிடறீங்க?", roman: "nīṅka eṉṉa sāppiḍrīṅka?", morph: "nīṅka eṉṉa sāppiḍ-r-īṅka?", kana: "ニーンガ イェンナ サーッピダリーンガ？", ja: "あなたは何を食べますか。", literal: "あなた・丁寧＋何＋食べる・現在・あなた丁寧" },
        { id: "7-04", ta: "நீங்க என்ன வாங்குறீங்க?", roman: "nīṅka eṉṉa vāṅkurīṅka?", morph: "nīṅka eṉṉa vāṅku-r-īṅka?", kana: "ニーンガ イェンナ ヴァーングリーンガ？", ja: "あなたは何を買いますか。", literal: "あなた・丁寧＋何＋買う・現在・あなた丁寧" },
        { id: "7-05", ta: "நீங்க எந்தப் படம் பாக்கறீங்க?", roman: "nīṅka enda paḍam pākkrīṅka?", morph: "nīṅka enda paḍam pāk-k-r-īṅka?", kana: "ニーンガ イェンダ パダム パーッカリーンガ？", ja: "あなたはどの映画を見ますか。", literal: "あなた・丁寧＋どの＋映画＋見る・強現在・あなた丁寧" },
        { id: "7-06", ta: "நீங்க எந்தப் புத்தகம் படிக்கறீங்க?", roman: "nīṅka enda puttaham paḍikkrīṅka?", morph: "nīṅka enda puttaham paḍi-kk-r-īṅka?", kana: "ニーンガ イェンダ プッタガム パディッカリーンガ？", ja: "あなたはどの本を読んでいますか。", literal: "あなた・丁寧＋どの＋本＋読む・強現在・あなた丁寧" },
        { id: "7-07", ta: "நீங்க எங்க இருக்கீங்க?", roman: "nīṅka eṅge irukkīṅka?", morph: "nīṅka eṅge iru-kk-īṅka?", kana: "ニーンガ イェンゲ イルッキーンガ？", ja: "あなたはどこにいますか。", literal: "あなた・丁寧＋どこ＋いる・あなた丁寧" },
        { id: "7-08", ta: "நீங்க நேத்து எங்க போனீங்க?", roman: "nīṅka nēttu eṅge pōnīṅka?", morph: "nīṅka nēttu eṅge pō-n-īṅka?", kana: "ニーンガ ネーットゥ イェンゲ ポーニーンガ？", ja: "あなたは昨日どこへ行きましたか。", literal: "あなた・丁寧＋昨日＋どこ＋行った・あなた丁寧" },
        { id: "7-09", ta: "நீங்க எப்போ சாப்பிட்டீங்க?", roman: "nīṅka eppō sāppiṭṭīṅka?", morph: "nīṅka eppō sāppiṭṭ-īṅka?", kana: "ニーンガ イェッポー サーッピッティーンガ？", ja: "あなたはいつ食べましたか。", literal: "あなた・丁寧＋いつ＋食べた・あなた丁寧" },
        { id: "7-10", ta: "நீங்க என்ன பாத்தீங்க?", roman: "nīṅka eṉṉa pāttīṅka?", morph: "nīṅka eṉṉa pātt-īṅka?", kana: "ニーンガ イェンナ パーッティーンガ？", ja: "あなたは何を見ましたか。", literal: "あなた・丁寧＋何＋見た・あなた丁寧" },
        { id: "7-11", ta: "நீங்க நாளைக்கு எங்க போவீங்க?", roman: "nīṅka nāḷaikki eṅge pōvīṅka?", morph: "nīṅka nāḷaikki eṅge pō-v-īṅka?", kana: "ニーンガ ナーレッキ イェンゲ ポーヴィーンガ？", ja: "あなたは明日どこへ行きますか。", literal: "あなた・丁寧＋明日＋どこ＋行く・未来・あなた丁寧" },
        { id: "7-12", ta: "நீங்க எங்கிருந்து வர்றீங்க?", roman: "nīṅka eṅgirundu varrīṅka?", morph: "nīṅka eṅge-irundu var-r-īṅka?", kana: "ニーンガ イェンギルンドゥ ヴァッリーンガ？", ja: "あなたはどこから来ますか／来ましたか。", literal: "あなた・丁寧＋どこ・から＋来る・現在・あなた丁寧" },
        { id: "7-13", ta: "நீங்க யாரைப் பாக்கறீங்க?", roman: "nīṅka yāre pākkrīṅka?", morph: "nīṅka yār-e pāk-k-r-īṅka?", kana: "ニーンガ ヤーレ パーッカリーンガ？", ja: "あなたは誰に会いますか／誰を見ていますか。", literal: "あなた・丁寧＋誰・を＋見る・強現在・あなた丁寧" },
        { id: "7-14", ta: "நீங்க எப்படி இருக்கீங்க?", roman: "nīṅka eppaḍi irukkīṅka?", morph: "nīṅka eppaḍi iru-kk-īṅka?", kana: "ニーンガ イェッパディ イルッキーンガ？", ja: "お元気ですか／調子はどうですか。", literal: "あなた・丁寧＋どのように＋いる・あなた丁寧" },
        { id: "7-15", ta: "இது என்ன?", roman: "idu eṉṉa?", morph: "idu eṉṉa?", kana: "イドゥ イェンナ？", ja: "これは何ですか。", literal: "これ＋何" },
        { id: "7-16", ta: "இது எவ்வளவு?", roman: "idu evvaḷavu?", morph: "idu evvaḷavu?", kana: "イドゥ イェッヴァラヴ？", ja: "これはいくらですか。", literal: "これ＋いくら" }
      ],
      quiz: [
        { q: "「あなたはどこへ行きますか」は？", options: ["நீங்க எங்க போறீங்க?", "நீங்க எப்போ போறீங்க?", "நீங்க என்ன சாப்பிடறீங்க?", "நீங்க இங்க போறீங்களா?"], answer: 0, feedback: "目的地を eṅge「どこ」に差し替え、内容疑問なので通常 -ā は付けません。", tags: ["正解", "疑問詞", "語彙", "疑問種別"] },
        { q: "「いつ」を表す疑問詞は？", options: ["எப்போ", "எங்க", "என்ன", "எப்படி"], answer: 0, feedback: "eppō が「いつ」。eṅge はどこ、eṉṉa は何、eppaḍi はどうです。", tags: ["正解", "場所", "内容", "方法"] },
        { q: "「どの本を読んでいますか」は？", options: ["எந்தப் புத்தகம் படிக்கறீங்க?", "என்ன புத்தகம் படிக்கறீங்களா?", "எங்க புத்தகம் படிக்கறீங்க?", "எப்போ புத்தகம் படிச்சீங்க?"], answer: 0, feedback: "選択の enda は名詞の前に置き、内容疑問では文末 -ā を重ねません。", tags: ["正解", "疑問標識", "疑問詞", "TAM"] },
        { q: "「どこから」に合う形は？", options: ["எங்கிருந்து", "எங்க", "இங்க", "அங்க"], answer: 0, feedback: "eṅge＋irundu で起点「どこから」。", tags: ["正解", "格枠", "近称", "遠称"] },
        { q: "内容疑問文について正しい説明は？", options: ["疑問詞を答えの位置へ置く", "必ず文末へ -ā を足す", "動詞を文頭へ移す", "人称語尾を外す"], answer: 0, feedback: "肯定文の答え部分を疑問詞へ置換し、動詞と人称一致は保ちます。", tags: ["正解", "疑問種別", "語順", "人称一致"] }
      ]
    },

    {
      id: "you-dialogue",
      number: 8,
      navTitle: "質問して、答える",
      title: "-īṅkaḷ-ā? を -ēn へ返す",
      tamilTitle: "போறீங்களா? — போறேன்.",
      deck: "相手への丁寧な問いと、自分の一人称の答えを一往復にする。現在・過去・未来、はい／いいえ、疑問詞を旅行場面の短い対話へまとめます。",
      targets: ["質問→一人称回答", "三時制の往復", "āmā / illa", "旅行場面の短対話"],
      heroExample: {
        id: "8-01",
        ta: "நீங்க எங்க போறீங்க? — நான் ஹோட்டலுக்கு போறேன்.",
        roman: "nīṅka eṅge pōrīṅka? — nāṉ hōṭṭalukku pōrēn.",
        morph: "nīṅka eṅge pō-r-īṅka? — nāṉ hōṭṭal-ukku pō-r-ēn.",
        kana: "ニーンガ イェンゲ ポーリーンガ？ — ナーン ホーッタルック ポーレーン。",
        ja: "どこへ行きますか。— ホテルへ行きます。",
        literal: "あなた・丁寧＋どこ＋行く・あなた丁寧 — 私＋ホテル・へ＋行く・私"
      },
      readSections: [
        {
          kicker: "THE CONVERSATION HINGE",
          heading: "質問の人称を、そのまま答えへ持ち込まない",
          paragraphs: [
            "相手へ尋ねるときは <strong>-īṅka</strong>、自分が答えるときは <strong>-ēn</strong>。<span class=\"ta-inline\" lang=\"ta\">எங்க போறீங்க?</span> に対して <span class=\"ta-inline\" lang=\"ta\">ஹோட்டலுக்கு போறேன்.</span> と返します。動詞の現在部分 <code>-r-</code> は共通で、人称だけが反転します。",
            "日本語では質問も答えも動詞が同じ形になりやすいため、タミル語では相手の語尾をそのまま反復しない注意が必要です。文末を聞いた瞬間に、<strong>-īṅka → -ēn</strong>へ切り替える癖を作ります。"
          ],
          formula: {
            label: "対話の蝶番",
            slots: ["V＋-īṅka(ḷ)-ā?", "V＋-ēn"],
            note: "pōrīṅkaḷā? → pōrēn／vandīṅkaḷā? → vandēn／pōvīṅkaḷā? → pōvēn"
          }
        },
        {
          kicker: "KEEP THE TENSE",
          heading: "人称は替えるが、尋ねられた時制は保つ",
          paragraphs: [
            "現在の問い <strong>sāppiḍrīṅkaḷā?</strong> なら <strong>sāppiḍrēn</strong>、過去の問い <strong>sāppiṭṭīṅkaḷā?</strong> なら <strong>sāppiṭṭēn</strong>、未来の問い <strong>sāppiḍuvīṅkaḷā?</strong> なら <strong>sāppiḍuvēn</strong>。",
            "答えで人称と時制を同時に取り違えないため、動詞を <strong>時制語幹｜人称語尾</strong>の二つに分けます。左側を保存し、右側だけを聞き手から話し手へ替えるのが最短です。"
          ]
        },
        {
          kicker: "YES, NO, THEN THE VERB",
          heading: "短答のあとへ、肯定または否定の述語を置く",
          paragraphs: [
            "<span class=\"ta-inline\" lang=\"ta\">ஆமா</span>「はい」の後ろには、質問と同じ内容を一人称で確認します。<span class=\"ta-inline\" lang=\"ta\">வருவீங்களா?</span> — <span class=\"ta-inline\" lang=\"ta\">ஆமா, வருவேன்.</span>。これで、相手が聞き間違えても予定が明確に残ります。",
            "<span class=\"ta-inline\" lang=\"ta\">இல்ல</span>「いいえ」の後ろは、時間に合わせて否定を選びます。非未来なら <strong>V-la</strong>、未来・意志なら <strong>V-a māṭṭēn</strong>。<span class=\"ta-inline\" lang=\"ta\">போவீங்களா?</span> — <span class=\"ta-inline\" lang=\"ta\">இல்ல, போகமாட்டேன்.</span> です。"
          ],
          note: { tone: "pink", title: "否定でも質問の時制を読む", body: "「行きましたか」への否定は pōkala、「行く予定ですか」への否定は pōkamāṭṭēn。illa だけで止めず、述語で時間を確定します。" }
        },
        {
          kicker: "TRAVEL-SIZE DIALOGUES",
          heading: "一往復を、一つの音声単位として覚える",
          paragraphs: [
            "この章の例文は、質問と答えをダッシュで結んだ一往復です。個々の単語を思い出してから組み立てるのではなく、<strong>eṅge pōrīṅka? — hōṭṭalukku pōrēn.</strong> のように音のまとまりとして再生・追唱します。",
            "慣れたら nīṅka / nāṉ を落とし、<span class=\"ta-inline\" lang=\"ta\">எப்போ வர்றீங்க? — நாளைக்கு வர்றேன்.</span> と短くします。ただし練習の最初は主語を残し、どちらの語尾が誰を示すかを確実にしてから縮めてください。"
          ],
          note: { tone: "blue", title: "ここで対話エンジンが閉じる", body: "一人称4章＋丁寧二人称4章で、「自分を述べる→相手に尋ねる→自分で返す」の最小会話回路が完成します。" }
        }
      ],
      formConfig: {
        title: "質問形と一人称回答を横に置く",
        intro: "まず現在の7動詞で人称を反転し、下の三時制ペアで同じ操作を確認します。",
        keys: ["politePresentQuestion", "present"],
        labels: { politePresentQuestion: "相手へ質問", present: "自分で答える" },
        extensionKicker: "QUESTION → ANSWER",
        extensionTitle: "時制を保って、人称だけを返す",
        modalRows: [
          { label: "行く・現在", ta: "போறீங்களா? — போறேன்.", roman: "pō-r-īṅkaḷ-ā? → pō-r-ēn", kana: "ポーリーンガラー？ — ポーレーン。", ja: "行きますか。— 行きます。" },
          { label: "行く・過去", ta: "போனீங்களா? — போனேன்.", roman: "pō-n-īṅkaḷ-ā? → pō-n-ēn", kana: "ポーニーンガラー？ — ポーネーン。", ja: "行きましたか。— 行きました。" },
          { label: "行く・未来", ta: "போவீங்களா? — போவேன்.", roman: "pō-v-īṅkaḷ-ā? → pō-v-ēn", kana: "ポーヴィーンガラー？ — ポーヴェーン。", ja: "行く予定ですか。— 行きます。" },
          { label: "来る・現在", ta: "வர்றீங்களா? — வர்றேன்.", roman: "var-r-īṅkaḷ-ā? → var-r-ēn", kana: "ヴァッリーンガラー？ — ヴァッレーン。", ja: "来ますか。— 来ます。" },
          { label: "来る・過去", ta: "வந்தீங்களா? — வந்தேன்.", roman: "vand-īṅkaḷ-ā? → vand-ēn", kana: "ヴァンディーンガラー？ — ヴァンデーン。", ja: "来ましたか。— 来ました。" }
        ]
      },
      examples: [
        { id: "8-01", featured: true, ta: "நீங்க எங்க போறீங்க? — நான் ஹோட்டலுக்கு போறேன்.", roman: "nīṅka eṅge pōrīṅka? — nāṉ hōṭṭalukku pōrēn.", morph: "nīṅka eṅge pō-r-īṅka? — nāṉ hōṭṭal-ukku pō-r-ēn.", kana: "ニーンガ イェンゲ ポーリーンガ？ — ナーン ホーッタルック ポーレーン。", ja: "どこへ行きますか。— ホテルへ行きます。", literal: "あなた・丁寧＋どこ＋行く・あなた丁寧 — 私＋ホテル・へ＋行く・私" },
        { id: "8-02", featured: true, ta: "நீங்க எப்போ வர்றீங்க? — நான் நாளைக்கு வர்றேன்.", roman: "nīṅka eppō varrīṅka? — nāṉ nāḷaikki varrēn.", morph: "nīṅka eppō var-r-īṅka? — nāṉ nāḷaikki var-r-ēn.", kana: "ニーンガ イェッポー ヴァッリーンガ？ — ナーン ナーレッキ ヴァッレーン。", ja: "いつ来ますか。— 明日来ます。", literal: "あなた・丁寧＋いつ＋来る・あなた丁寧 — 私＋明日＋来る・私" },
        { id: "8-03", featured: true, ta: "நீங்க சாப்பிட்டீங்களா? — ஆமா, சாப்பிட்டேன்.", roman: "nīṅka sāppiṭṭīṅkaḷā? — āmā, sāppiṭṭēn.", morph: "nīṅka sāppiṭṭ-īṅkaḷ-ā? — āmā, sāppiṭṭ-ēn.", kana: "ニーンガ サーッピッティーンガラー？ — アーマー、サーッピッテーン。", ja: "食べましたか。— はい、食べました。", literal: "あなた・丁寧＋食べた・疑問 — はい＋食べた・私" },
        { id: "8-04", ta: "நீங்க என்ன சாப்பிடறீங்க? — நான் இட்லி சாப்பிடறேன்.", roman: "nīṅka eṉṉa sāppiḍrīṅka? — nāṉ iṭli sāppiḍrēn.", morph: "nīṅka eṉṉa sāppiḍ-r-īṅka? — nāṉ iṭli sāppiḍ-r-ēn.", kana: "ニーンガ イェンナ サーッピダリーンガ？ — ナーン イドリ サーッピダレーン。", ja: "何を食べますか。— イドリを食べます。", literal: "あなた・丁寧＋何＋食べる — 私＋イドリ＋食べる" },
        { id: "8-05", ta: "நீங்க எங்கிருந்து வர்றீங்க? — நான் ஜப்பான்ல இருந்து வர்றேன்.", roman: "nīṅka eṅgirundu varrīṅka? — nāṉ jappāṉ-le irundu varrēn.", morph: "nīṅka eṅge-irundu var-r-īṅka? — nāṉ jappāṉ-le irundu var-r-ēn.", kana: "ニーンガ イェンギルンドゥ ヴァッリーンガ？ — ナーン ジャッパーンラ イルンドゥ ヴァッレーン。", ja: "どこから来ましたか。— 日本から来ました。", literal: "あなた・丁寧＋どこ・から＋来る — 私＋日本・で＋から＋来る" },
        { id: "8-06", ta: "நீங்க எத்தனை நாள் இங்க இருக்கீங்க? — நான் மூணு நாள் இங்க இருக்கேன்.", roman: "nīṅka ettaṉe nāḷ iṅge irukkīṅka? — nāṉ mūṇu nāḷ iṅge irukkēn.", morph: "nīṅka ettaṉe nāḷ iṅge iru-kk-īṅka? — nāṉ mūṇu nāḷ iṅge iru-kk-ēn.", kana: "ニーンガ イェッタネ ナール インゲ イルッキーンガ？ — ナーン ムーヌ ナール インゲ イルッケーン。", ja: "ここに何日いますか。— 3日います。", literal: "あなた・丁寧＋何日＋ここ＋いる — 私＋3日＋ここ＋いる" },
        { id: "8-07", ta: "நீங்க இந்த ஹோட்டல்ல இருக்கீங்களா? — ஆமா, இங்க இருக்கேன்.", roman: "nīṅka inda hōṭṭal-le irukkīṅkaḷā? — āmā, iṅge irukkēn.", morph: "nīṅka inda hōṭṭal-le iru-kk-īṅkaḷ-ā? — āmā, iṅge iru-kk-ēn.", kana: "ニーンガ インダ ホーッタッラ イルッキーンガラー？ — アーマー、インゲ イルッケーン。", ja: "このホテルに泊まっていますか。— はい、ここにいます。", literal: "あなた・丁寧＋この＋ホテル・で＋いる・疑問 — はい＋ここ＋いる・私" },
        { id: "8-08", ta: "நீங்க அந்தப் படம் பாத்தீங்களா? — இல்ல, பாக்கல.", roman: "nīṅka anda paḍam pāttīṅkaḷā? — illa, pākkala.", morph: "nīṅka anda paḍam pātt-īṅkaḷ-ā? — illa, pākka-la.", kana: "ニーンガ アンダ パダム パーッティーンガラー？ — イッラ、パーッカラ。", ja: "その映画を見ましたか。— いいえ、見ていません。", literal: "あなた・丁寧＋その＋映画＋見た・疑問 — いいえ＋見る・非未来否定" },
        { id: "8-09", ta: "நீங்க நாளைக்கு வருவீங்களா? — ஆமா, வருவேன்.", roman: "nīṅka nāḷaikki varuvīṅkaḷā? — āmā, varuvēn.", morph: "nīṅka nāḷaikki varu-v-īṅkaḷ-ā? — āmā, varu-v-ēn.", kana: "ニーンガ ナーレッキ ヴァルヴィーンガラー？ — アーマー、ヴァルヴェーン。", ja: "明日来ますか。— はい、来ます。", literal: "あなた・丁寧＋明日＋来る・未来・疑問 — はい＋来る・未来・私" },
        { id: "8-10", ta: "நீங்க நாளைக்கு போவீங்களா? — இல்ல, போகமாட்டேன்.", roman: "nīṅka nāḷaikki pōvīṅkaḷā? — illa, pōkamāṭṭēn.", morph: "nīṅka nāḷaikki pō-v-īṅkaḷ-ā? — illa, pōka-māṭṭ-ēn.", kana: "ニーンガ ナーレッキ ポーヴィーンガラー？ — イッラ、ポーガマーッテーン。", ja: "明日行きますか。— いいえ、行きません。", literal: "あなた・丁寧＋明日＋行く・未来・疑問 — いいえ＋行く・未来否定・私" },
        { id: "8-11", ta: "நீங்க என்ன வாங்குறீங்க? — நான் தண்ணீர் வாங்குறேன்.", roman: "nīṅka eṉṉa vāṅkurīṅka? — nāṉ taṇṇīr vāṅkurēn.", morph: "nīṅka eṉṉa vāṅku-r-īṅka? — nāṉ taṇṇīr vāṅku-r-ēn.", kana: "ニーンガ イェンナ ヴァーングリーンガ？ — ナーン タンニール ヴァーングレーン。", ja: "何を買いますか。— 水を買います。", literal: "あなた・丁寧＋何＋買う — 私＋水＋買う" },
        { id: "8-12", ta: "நீங்க எந்தப் புத்தகம் படிக்கறீங்க? — நான் இந்தப் புத்தகம் படிக்கறேன்.", roman: "nīṅka enda puttaham paḍikkrīṅka? — nāṉ inda puttaham paḍikkrēn.", morph: "nīṅka enda puttaham paḍi-kk-r-īṅka? — nāṉ inda puttaham paḍi-kk-r-ēn.", kana: "ニーンガ イェンダ プッタガム パディッカリーンガ？ — ナーン インダ プッタガム パディッカレーン。", ja: "どの本を読んでいますか。— この本を読んでいます。", literal: "あなた・丁寧＋どの＋本＋読む — 私＋この＋本＋読む" },
        { id: "8-13", ta: "நீங்க எப்போ போவீங்க? — நான் நாளைக்கு போவேன்.", roman: "nīṅka eppō pōvīṅka? — nāṉ nāḷaikki pōvēn.", morph: "nīṅka eppō pō-v-īṅka? — nāṉ nāḷaikki pō-v-ēn.", kana: "ニーンガ イェッポー ポーヴィーンガ？ — ナーン ナーレッキ ポーヴェーン。", ja: "いつ行きますか。— 明日行きます。", literal: "あなた・丁寧＋いつ＋行く・未来 — 私＋明日＋行く・未来" },
        { id: "8-14", ta: "நீங்க இங்க இருக்கீங்களா? — இல்ல, அங்க இருக்கேன்.", roman: "nīṅka iṅge irukkīṅkaḷā? — illa, aṅge irukkēn.", morph: "nīṅka iṅge iru-kk-īṅkaḷ-ā? — illa, aṅge iru-kk-ēn.", kana: "ニーンガ インゲ イルッキーンガラー？ — イッラ、アンゲ イルッケーン。", ja: "ここにいますか。— いいえ、そこにいます。", literal: "あなた・丁寧＋ここ＋いる・疑問 — いいえ＋そこ＋いる・私" }
      ],
      quiz: [
        { q: "எங்க போறீங்க? への「ホテルへ行きます」は？", options: ["ஹோட்டலுக்கு போறேன்", "ஹோட்டலுக்கு போறீங்க", "ஹோட்டலுக்கு போனேன்", "ஹோட்டலுக்கு வர்றேன்"], answer: 0, feedback: "相手の -īṅka を、自分の現在 -ēn へ替えます。", tags: ["正解", "人称一致", "TAM", "語彙"] },
        { q: "சாப்பிட்டீங்களா? への肯定応答は？", options: ["ஆமா, சாப்பிட்டேன்.", "ஆமா, சாப்பிடறேன்.", "இல்ல, சாப்பிடல.", "ஆமா, வாங்கினேன்."], answer: 0, feedback: "質問は過去。答えも過去語幹 sāppiṭṭ- を保ち、-ēn へ返します。", tags: ["正解", "TAM", "極性", "語彙"] },
        { q: "நாளைக்கு போவீங்களா? への否定応答は？", options: ["இல்ல, போகமாட்டேன்.", "இல்ல, போகல.", "ஆமா, போவேன்.", "இல்ல, வரமாட்டேன்."], answer: 0, feedback: "未来・意志の問いには、未来否定 pōka-māṭṭ-ēn が対応します。", tags: ["正解", "否定", "極性", "語彙"] },
        { q: "質問から答えへ切り返すとき、保存するものは？", options: ["時制語幹", "二人称語尾", "疑問 -ā", "疑問詞そのもの"], answer: 0, feedback: "時制語幹を保ち、人称を -īṅka から -ēn へ替え、疑問標識は外します。", tags: ["正解", "人称一致", "疑問標識", "焦点"] },
        { q: "「いつ来ますか。— 明日来ます」の往復は？", options: ["எப்போ வர்றீங்க? — நாளைக்கு வர்றேன்.", "எங்க வர்றீங்க? — நாளைக்கு வர்றேன்.", "எப்போ வர்றீங்களா? — நாளைக்கு வர்றேன்.", "எப்போ வந்தீங்க? — நாளைக்கு வர்றேன்."], answer: 0, feedback: "eppō が「いつ」。内容疑問なので -ā は付けず、答えに nāḷaikki「明日」を入れます。", tags: ["正解", "疑問詞", "疑問標識", "TAM"] }
      ]
    },

    {
      id: "third-familiar",
      number: 9,
      navTitle: "彼は／彼女はする",
      title: "人物の性を、文末の母音で言い分ける",
      tamilTitle: "அவன் …றான் · அவ …றா",
      deck: "一人称と二人称で作った時制語幹はそのまま。身近な男性には -āṉ、身近な女性には -ā を置き、第三者の行動を現在・過去・未来で描写します。",
      targets: ["男性3単 -āṉ", "女性3単 -ā", "時制語幹の保存", "親称の使用域"],
      heroExample: {
        id: "9-01",
        ta: "ரவி இப்போ போறான். மீனா இங்க இருக்கா.",
        roman: "ravi ippō pōrāṉ. mīṉā iṅge irukkā.",
        morph: "ravi ippō pō-r-āṉ. mīṉā iṅge iru-kk-ā.",
        kana: "ラヴィ イッポー ポーラーン。ミーナー インゲ イルッカー。",
        ja: "ラヴィは今行きます。ミーナーはここにいます。",
        literal: "ラヴィ＋今＋行く・現在・男性／ミーナー＋ここ＋いる・女性"
      },
      readSections: [
        {
          kicker: "A THIRD CAMERA",
          heading: "「私／あなた」の外側へ、カメラを向ける",
          paragraphs: [
            "ここまでの有限動詞は、話し手なら <code>-ēn</code>、聞き手への丁寧形なら <code>-īṅka</code> で終わりました。第三者を語るときも、現在・過去・未来の語幹を作り直す必要はありません。<strong>誰のことかを示す最後の語尾だけ</strong>を交換します。",
            "男性一人なら <span class=\"ta-inline\" lang=\"ta\">போறான்</span> <strong>pō-r-āṉ</strong>、女性一人なら <span class=\"ta-inline\" lang=\"ta\">போறா</span> <strong>pō-r-ā</strong>。共通する <strong>pō-r-</strong> が「行く・現在」を、末尾の <strong>-āṉ / -ā</strong> が人物の一致を担当します。"
          ],
          formula: {
            label: "身近な第三者",
            slots: ["語幹＋時制", "-āṉ 男性 / -ā 女性"],
            note: "pō-r-āṉ ↔ pō-r-ā。違うのは文末、時制語幹は共通です。"
          }
        },
        {
          kicker: "THREE TENSES",
          heading: "現在・過去・未来の左側を保存する",
          paragraphs: [
            "「行く」なら現在 <strong>pō-r-āṉ / pō-r-ā</strong>、過去 <strong>pō-n-āṉ / pō-n-ā</strong>、未来 <strong>pō-v-āṉ / pō-v-ā</strong>。第1〜3章で覚えた <code>-r- / -n- / -v-</code> はそのままです。",
            "強変化でも同じ発想が使えます。<span class=\"ta-inline\" lang=\"ta\">படிக்கறான்</span> <strong>paḍi-kk-r-āṉ</strong>、<span class=\"ta-inline\" lang=\"ta\">படிச்சா</span> <strong>paḍi-cc-ā</strong>、<span class=\"ta-inline\" lang=\"ta\">பாப்பான்</span> <strong>pā-pp-āṉ</strong>。クラス差と人称語尾を一度に暗記せず、左から「動詞クラス＋時制｜人物」と切ります。"
          ],
          note: { tone: "blue", title: "名前でも動詞は一致する", body: "Ravi の後ろは男性語尾、Meena の後ろは女性語尾。代名詞がなくても、動詞の最後に人物情報が残ります。" }
        },
        {
          kicker: "AVAN & AVA",
          heading: "அவன் は彼、அவ は彼女——ただし距離が近い形",
          paragraphs: [
            "<span class=\"ta-inline\" lang=\"ta\">அவன்</span> <strong>avan</strong> は男性、口語の <span class=\"ta-inline\" lang=\"ta\">அவ</span> <strong>ava</strong> は女性を指します。教科書的な女性形 <span class=\"ta-inline\" lang=\"ta\">அவள்</span> <strong>avaḷ</strong> に対し、会話では末尾が落ちた ava が広く使われます。本教材は話し言葉の練習なので ava を主表示にします。",
            "一度人物を出せば、代名詞も省略できます。<span class=\"ta-inline\" lang=\"ta\">ரவி வந்தான். சாப்பிட்டான்.</span> なら、二文目の <strong>-āṉ</strong> が同じ男性を追跡します。女性なら <span class=\"ta-inline\" lang=\"ta\">மீனா வந்தா. சாப்பிட்டா.</span> と <strong>-ā</strong> が連続します。"
          ]
        },
        {
          kicker: "REGISTER WARNING",
          heading: "この二つは、知らない大人への安全な呼び方ではない",
          paragraphs: [
            "avan / ava は文法上ただの三人称単数ですが、社会的には<strong>親しい人、同年代以下、子ども、物語の登場人物</strong>などに向く近い形です。旅先で知らない大人を指して裸の avan / ava を使うと、ぞんざいに響く可能性があります。",
            "名前が分かるなら名前を使い、敬意が必要なら次章の <strong>avaru / avaṅka</strong> と敬称語尾へ進みます。第9章の正解は形態として正しいだけでなく、Ravi と Meena という身近な人物の小さな物語に限定して、使用域まで一緒に覚えます。"
          ],
          note: { tone: "pink", title: "性は自然性、敬意は別の軸", body: "-āṉ / -ā は男性・女性を区別しますが、敬意を自動的には足しません。大人への社会距離は第10章の語尾で表します。" }
        }
      ],
      formConfig: {
        title: "7動詞の男性・女性3単／3時制",
        intro: "各時制語幹を保ったまま、男性 -āṉ と女性 -ā を対で確認します。",
        keys: ["masculinePresent", "femininePresent", "masculinePast", "femininePast", "masculineFuture", "feminineFuture"],
        labels: {
          masculinePresent: "男性・現在", femininePresent: "女性・現在",
          masculinePast: "男性・過去", femininePast: "女性・過去",
          masculineFuture: "男性・未来", feminineFuture: "女性・未来"
        },
        extensionKicker: "PEOPLE",
        extensionTitle: "第三者を置く6つの主語",
        modalRows: [
          { label: "彼", ta: "அவன்", roman: "avan", kana: "アヴァン", ja: "身近な男性・彼" },
          { label: "彼女・口語", ta: "அவ", roman: "ava", kana: "アヴァ", ja: "身近な女性・彼女" },
          { label: "彼女・完全形", ta: "அவள்", roman: "avaḷ", kana: "アヴァル", ja: "女性単数の完全形" },
          { label: "男性名", ta: "ரவி", roman: "ravi", kana: "ラヴィ", ja: "ラヴィ" },
          { label: "女性名", ta: "மீனா", roman: "mīṉā", kana: "ミーナー", ja: "ミーナー" },
          { label: "人を尋ねる", ta: "யாரு", roman: "yāru", kana: "ヤール", ja: "誰" }
        ]
      },
      examples: [
        { id: "9-01", featured: true, ta: "ரவி இப்போ போறான். மீனா இங்க இருக்கா.", roman: "ravi ippō pōrāṉ. mīṉā iṅge irukkā.", morph: "ravi ippō pō-r-āṉ. mīṉā iṅge iru-kk-ā.", kana: "ラヴィ イッポー ポーラーン。ミーナー インゲ イルッカー。", ja: "ラヴィは今行きます。ミーナーはここにいます。", literal: "ラヴィ＋今＋行く・男性／ミーナー＋ここ＋いる・女性" },
        { id: "9-02", featured: true, ta: "மீனா ஹோட்டலுக்கு வர்றா.", roman: "mīṉā hōṭṭalukku varrā.", morph: "mīṉā hōṭṭal-ukku var-r-ā.", kana: "ミーナー ホーッタルック ヴァッラー。", ja: "ミーナーはホテルへ来ます。", literal: "ミーナー＋ホテル・へ＋来る・現在・女性" },
        { id: "9-03", featured: true, ta: "அவன் இட்லி சாப்பிட்டான்.", roman: "avan iṭli sāppiṭṭāṉ.", morph: "avan iṭli sāppiṭṭ-āṉ.", kana: "アヴァン イドリ サーッピッターン。", ja: "彼はイドリを食べました。", literal: "彼＋イドリ＋食べた・男性" },
        { id: "9-04", ta: "அவ தண்ணீர் வாங்குறா.", roman: "ava taṇṇīr vāṅkurā.", morph: "ava taṇṇīr vāṅku-r-ā.", kana: "アヴァ タンニール ヴァーングラー。", ja: "彼女は水を買います。", literal: "彼女＋水＋買う・現在・女性" },
        { id: "9-05", ta: "ரவி நேத்து அந்தப் படம் பாத்தான்.", roman: "ravi nēttu anda paḍam pāttāṉ.", morph: "ravi nēttu anda paḍam pātt-āṉ.", kana: "ラヴィ ネーットゥ アンダ パダム パーッターン。", ja: "ラヴィは昨日その映画を見ました。", literal: "ラヴィ＋昨日＋その映画＋見た・男性" },
        { id: "9-06", ta: "மீனா இந்தப் புத்தகம் படிச்சா.", roman: "mīṉā inda puttaham paḍiccā.", morph: "mīṉā inda puttaham paḍi-cc-ā.", kana: "ミーナー インダ プッタガム パディッチャー。", ja: "ミーナーはこの本を読みました。", literal: "ミーナー＋この本＋読んだ・女性" },
        { id: "9-07", ta: "அவன் இங்க இருக்கான்.", roman: "avan iṅge irukkāṉ.", morph: "avan iṅge iru-kk-āṉ.", kana: "アヴァン インゲ イルッカーン。", ja: "彼はここにいます。", literal: "彼＋ここ＋いる・男性" },
        { id: "9-08", ta: "அவ சென்னைல இருக்கா.", roman: "ava ceṉṉai-le irukkā.", morph: "ava ceṉṉai-le iru-kk-ā.", kana: "アヴァ チェンネラ イルッカー。", ja: "彼女はチェンナイにいます。", literal: "彼女＋チェンナイ・で＋いる・女性" },
        { id: "9-09", ta: "ரவி நாளைக்கு வருவான்.", roman: "ravi nāḷaikki varuvāṉ.", morph: "ravi nāḷaikki varu-v-āṉ.", kana: "ラヴィ ナーレッキ ヴァルヴァーン。", ja: "ラヴィは明日来るでしょう／来ます。", literal: "ラヴィ＋明日＋来る・未来・男性" },
        { id: "9-10", ta: "மீனா நாளைக்கு போவா.", roman: "mīṉā nāḷaikki pōvā.", morph: "mīṉā nāḷaikki pō-v-ā.", kana: "ミーナー ナーレッキ ポーヴァー。", ja: "ミーナーは明日行くでしょう／行きます。", literal: "ミーナー＋明日＋行く・未来・女性" },
        { id: "9-11", ta: "அவன் தமிழ் படிக்கறான்.", roman: "avan tamiḻ paḍikkrāṉ.", morph: "avan tamiḻ paḍi-kk-r-āṉ.", kana: "アヴァン タミル パディッカラーン。", ja: "彼はタミル語を勉強しています。", literal: "彼＋タミル語＋勉強する・男性" },
        { id: "9-12", ta: "அவ அந்தப் படம் பாக்கறா.", roman: "ava anda paḍam pākkrā.", morph: "ava anda paḍam pāk-k-r-ā.", kana: "アヴァ アンダ パダム パーッカラー。", ja: "彼女はその映画を見ています。", literal: "彼女＋その映画＋見る・女性" },
        { id: "9-13", ta: "ரவி எங்க போறான்?", roman: "ravi eṅge pōrāṉ?", morph: "ravi eṅge pō-r-āṉ?", kana: "ラヴィ イェンゲ ポーラーン？", ja: "ラヴィはどこへ行きますか。", literal: "ラヴィ＋どこ＋行く・男性" },
        { id: "9-14", ta: "மீனா எப்போ வந்தா?", roman: "mīṉā eppō vandā?", morph: "mīṉā eppō vand-ā?", kana: "ミーナー イェッポー ヴァンダー？", ja: "ミーナーはいつ来ましたか。", literal: "ミーナー＋いつ＋来た・女性" },
        { id: "9-15", ta: "அவன் யாரு? அவ யாரு?", roman: "avan yāru? ava yāru?", morph: "avan yāru? ava yāru?", kana: "アヴァン ヤール？ アヴァ ヤール？", ja: "彼は誰ですか。彼女は誰ですか。", literal: "彼＋誰／彼女＋誰" }
      ],
      quiz: [
        { q: "「ラヴィは今行きます」は？", options: ["ரவி இப்போ போறான்.", "ரவி இப்போ போறா.", "ரவி இப்போ போறாரு.", "ரவி இப்போ போறாங்க."], answer: 0, feedback: "身近な男性一人なので、現在語幹 pō-r- に男性語尾 -āṉ を付けます。", tags: ["正解", "性一致", "敬称", "数一致"] },
        { q: "「ミーナーは来ました」に合う文末は？", options: ["வந்தா", "வந்தான்", "வர்றா", "வருவா"], answer: 0, feedback: "女性単数の過去は vand-ā。-ā を保ち、過去語幹 vand- を選びます。", tags: ["正解", "性一致", "TAM", "TAM"] },
        { q: "படிக்கறான் の内部は？", options: ["paḍi-kk-r-āṉ", "paḍi-cc-āṉ", "paḍi-pp-āṉ", "paḍi-kk-r-ā"], answer: 0, feedback: "強現在 paḍi-kk-r- と男性語尾 -āṉ の組み合わせです。", tags: ["正解", "TAM", "TAM", "性一致"] },
        { q: "旅先の知らない大人を指すときの注意は？", options: ["avan / ava は親称なので敬称形を検討する", "avan は誰にでも最敬語になる", "ava は複数だけを表す", "動詞から人称語尾を外す"], answer: 0, feedback: "avan / ava は近い呼び方。知らない大人には次章の敬称形が安全です。", tags: ["正解", "レジスター", "数一致", "人称一致"] },
        { q: "ரவி நாளைக்கு வருவான். の時制と一致は？", options: ["未来・男性単数", "現在・男性単数", "未来・女性単数", "過去・男性単数"], answer: 0, feedback: "varu-v- が未来、-āṉ が男性単数を示します。", tags: ["正解", "TAM", "性一致", "TAM"] }
      ]
    },

    {
      id: "third-honorific",
      number: 10,
      navTitle: "あの方はする",
      title: "敬意を、第三者の語尾に焼き込む",
      tamilTitle: "அவரு …றாரு · அவங்க …றாங்க",
      deck: "知らない大人や敬う相手を第三者として語る。男性敬称の avaru + -āru と、女性敬称の avaṅka + -āṅka を分け、名前や家族語とも組み合わせます。",
      targets: ["男性敬称 -āru", "女性敬称 -āṅka", "社会距離", "敬称主語の選択"],
      heroExample: {
        id: "10-01",
        ta: "அந்த ஐயா போறாரு. அந்த அம்மா வர்றாங்க.",
        roman: "anda aiyā pōrāru. anda ammā varrāṅka.",
        morph: "anda aiyā pō-r-āru. anda ammā var-r-āṅka.",
        kana: "アンダ アイイヤー ポーラール。アンダ アンマー ヴァッラーンガ。",
        ja: "あの男性は行きます。あの女性は来ます。",
        literal: "あの＋男性敬称＋行く・敬称男性／あの＋女性敬称＋来る・敬称女性"
      },
      readSections: [
        {
          kicker: "RESPECT IS AGREEMENT",
          heading: "敬意は代名詞だけでなく、動詞の最後にも現れる",
          paragraphs: [
            "第三者への敬意は「あの方」という語を一つ足して終わりではありません。男性敬称なら <span class=\"ta-inline\" lang=\"ta\">அவரு போறாரு</span> <strong>avaru pō-r-āru</strong> のように、主語と動詞の両方が敬称レーンに入ります。",
            "第9章の男性親称 <strong>-āṉ</strong> を、男性敬称では <strong>-āru</strong> へ替えます。現在 <strong>pō-r-āru</strong>、過去 <strong>pō-n-āru</strong>、未来 <strong>pō-v-āru</strong>。時制語幹は保存されるので、追加コストは文末の社会距離です。"
          ],
          formula: {
            label: "男性一人への敬称",
            slots: ["語幹＋時制", "-āru"],
            note: "avaru pō-r-āru / pō-n-āru / pō-v-āru"
          }
        },
        {
          kicker: "A GENDER ASYMMETRY",
          heading: "女性敬称は、複数と同じ -āṅka を使う",
          paragraphs: [
            "口語では、敬う男性一人に <span class=\"ta-inline\" lang=\"ta\">அவரு</span> <strong>avaru</strong> と <strong>-āru</strong> を使います。一方、敬う女性一人には通常 <span class=\"ta-inline\" lang=\"ta\">அவங்க</span> <strong>avaṅka</strong> と <strong>-āṅka</strong> を使います。",
            "つまり「敬称単数」という一つの左右対称な箱ではありません。<span class=\"ta-inline\" lang=\"ta\">அந்த அம்மா வர்றாங்க</span> は女性一人でも動詞が <strong>var-r-āṅka</strong>。この形は第11章の「彼ら」にも使われ、人数は文脈や名詞から判断します。"
          ],
          note: { tone: "pink", title: "avaru を女性へ機械転用しない", body: "本教材の基準口語では avaru + -āru は男性敬称。女性敬称は avaṅka + -āṅka を既定にします。" }
        },
        {
          kicker: "TITLES & FAMILY",
          heading: "ஐயா／அம்மா や家族語が、人物の扱いを案内する",
          paragraphs: [
            "<span class=\"ta-inline\" lang=\"ta\">ஐயா</span> <strong>aiyā</strong> は男性への敬称、<span class=\"ta-inline\" lang=\"ta\">அம்மா</span> <strong>ammā</strong> は女性への丁寧な呼びかけにも使えます。第三者なら <strong>anda aiyā ...-āru</strong>、<strong>anda ammā ...-āṅka</strong> と、名詞に合う動詞語尾を選びます。",
            "家族について丁寧に語るときも、父 <span class=\"ta-inline\" lang=\"ta\">அப்பா</span> <strong>appā</strong> に -āru、母 ammā に -āṅka を使う会話が自然です。これは生物学的な単複だけでなく、話し手が人物をどう扱うかを動詞が映す仕組みです。"
          ]
        },
        {
          kicker: "SAFE TRAVEL DEFAULT",
          heading: "未知の大人には、近すぎる形より敬称形を選ぶ",
          paragraphs: [
            "店員、宿の人、運転手、年長者など、関係がまだ分からない大人について話すなら、敬称形は安全な出発点です。男性なら <span class=\"ta-inline\" lang=\"ta\">அவரு எங்க இருக்காரு?</span>、女性なら <span class=\"ta-inline\" lang=\"ta\">அவங்க எங்க இருக்காங்க?</span> と尋ねられます。",
            "名前が分かっても敬意を保ちたい場合、名前＋敬称語尾を使えます。逆に友人の Ravi や Meena へ常に敬称を付ける必要はありません。文法問題として語尾を当てるだけでなく、<strong>人物との距離を選んでから語尾を選ぶ</strong>順序にします。"
          ],
          note: { tone: "blue", title: "敬称は「単なる複数」ではない", body: "女性敬称と複数が同じ -āṅka でも、敬意という意味は主語と場面から生まれます。形の重なりを消さずに使い分けます。" }
        }
      ],
      formConfig: {
        title: "7動詞の第三者敬称／3時制",
        intro: "男性一人の -āru と、女性敬称の -āṅka を時制ごとに並べます。",
        keys: ["honorificPresent", "pluralPresent", "honorificPast", "pluralPast", "honorificFuture", "pluralFuture"],
        labels: {
          honorificPresent: "男性敬称・現在", pluralPresent: "女性敬称・現在",
          honorificPast: "男性敬称・過去", pluralPast: "女性敬称・過去",
          honorificFuture: "男性敬称・未来", pluralFuture: "女性敬称・未来"
        },
        extensionKicker: "SOCIAL DISTANCE",
        extensionTitle: "人物を敬称レーンへ置く主語",
        modalRows: [
          { label: "男性敬称代名詞", ta: "அவரு", roman: "avaru", kana: "アヴァル", ja: "その方・彼（敬称男性）" },
          { label: "女性敬称代名詞", ta: "அவங்க", roman: "avaṅka", kana: "アヴァンガ", ja: "その方・彼女（敬称女性）" },
          { label: "男性への敬称", ta: "அந்த ஐயா", roman: "anda aiyā", kana: "アンダ アイイヤー", ja: "あの男性・あの方" },
          { label: "女性への敬称", ta: "அந்த அம்மா", roman: "anda ammā", kana: "アンダ アンマー", ja: "あの女性・あの方" },
          { label: "父", ta: "அப்பா", roman: "appā", kana: "アッパー", ja: "父・お父さん" },
          { label: "母", ta: "அம்மா", roman: "ammā", kana: "アンマー", ja: "母・お母さん" }
        ]
      },
      examples: [
        { id: "10-01", featured: true, ta: "அந்த ஐயா போறாரு. அந்த அம்மா வர்றாங்க.", roman: "anda aiyā pōrāru. anda ammā varrāṅka.", morph: "anda aiyā pō-r-āru. anda ammā var-r-āṅka.", kana: "アンダ アイイヤー ポーラール。アンダ アンマー ヴァッラーンガ。", ja: "あの男性は行きます。あの女性は来ます。", literal: "男性敬称＋行く・男性敬称／女性敬称＋来る・女性敬称" },
        { id: "10-02", featured: true, ta: "அவரு ஹோட்டல்ல இருக்காரு.", roman: "avaru hōṭṭal-le irukkāru.", morph: "avaru hōṭṭal-le iru-kk-āru.", kana: "アヴァル ホーッタッラ イルッカール。", ja: "その男性はホテルにいます。", literal: "その方・男性＋ホテル・で＋いる・男性敬称" },
        { id: "10-03", featured: true, ta: "அவங்க சென்னைல இருக்காங்க.", roman: "avaṅka ceṉṉai-le irukkāṅka.", morph: "avaṅka ceṉṉai-le iru-kk-āṅka.", kana: "アヴァンガ チェンネラ イルッカーンガ。", ja: "その女性はチェンナイにいます。", literal: "その方・女性＋チェンナイ・で＋いる・女性敬称" },
        { id: "10-04", ta: "அப்பா கடைக்கு போனாரு.", roman: "appā kaḍaikku pōnāru.", morph: "appā kaḍai-kku pō-n-āru.", kana: "アッパー カダイック ポーナール。", ja: "父は店へ行きました。", literal: "父＋店・へ＋行った・男性敬称" },
        { id: "10-05", ta: "அம்மா தண்ணீர் வாங்கினாங்க.", roman: "ammā taṇṇīr vāṅkināṅka.", morph: "ammā taṇṇīr vāṅk-in-āṅka.", kana: "アンマー タンニール ヴァーンギナーンガ。", ja: "母は水を買いました。", literal: "母＋水＋買った・女性敬称" },
        { id: "10-06", ta: "அந்த ஐயா சாப்பிட்டாரு.", roman: "anda aiyā sāppiṭṭāru.", morph: "anda aiyā sāppiṭṭ-āru.", kana: "アンダ アイイヤー サーッピッタール。", ja: "あの男性は食べました。", literal: "あの男性敬称＋食べた・男性敬称" },
        { id: "10-07", ta: "அந்த அம்மா அந்தப் படம் பாத்தாங்க.", roman: "anda ammā anda paḍam pāttāṅka.", morph: "anda ammā anda paḍam pātt-āṅka.", kana: "アンダ アンマー アンダ パダム パーッターンガ。", ja: "あの女性はその映画を見ました。", literal: "あの女性敬称＋その映画＋見た・女性敬称" },
        { id: "10-08", ta: "அவரு தமிழ் படிக்கறாரு.", roman: "avaru tamiḻ paḍikkrāru.", morph: "avaru tamiḻ paḍi-kk-r-āru.", kana: "アヴァル タミル パディッカラール。", ja: "その男性はタミル語を勉強しています。", literal: "その方・男性＋タミル語＋勉強する・男性敬称" },
        { id: "10-09", ta: "அவங்க இந்தப் புத்தகம் படிக்கறாங்க.", roman: "avaṅka inda puttaham paḍikkrāṅka.", morph: "avaṅka inda puttaham paḍi-kk-r-āṅka.", kana: "アヴァンガ インダ プッタガム パディッカラーンガ。", ja: "その女性はこの本を読んでいます。", literal: "その方・女性＋この本＋読む・女性敬称" },
        { id: "10-10", ta: "அவரு நாளைக்கு வருவாரு.", roman: "avaru nāḷaikki varuvāru.", morph: "avaru nāḷaikki varu-v-āru.", kana: "アヴァル ナーレッキ ヴァルヴァール。", ja: "その男性は明日来るでしょう／来ます。", literal: "その方・男性＋明日＋来る・未来・男性敬称" },
        { id: "10-11", ta: "அவங்க நாளைக்கு போவாங்க.", roman: "avaṅka nāḷaikki pōvāṅka.", morph: "avaṅka nāḷaikki pō-v-āṅka.", kana: "アヴァンガ ナーレッキ ポーヴァーンガ。", ja: "その女性は明日行くでしょう／行きます。", literal: "その方・女性＋明日＋行く・未来・女性敬称" },
        { id: "10-12", ta: "அவரு என்ன வாங்குறாரு?", roman: "avaru eṉṉa vāṅkurāru?", morph: "avaru eṉṉa vāṅku-r-āru?", kana: "アヴァル イェンナ ヴァーングラール？", ja: "その男性は何を買いますか。", literal: "その方・男性＋何＋買う・男性敬称" },
        { id: "10-13", ta: "அவங்க எங்க இருக்காங்க?", roman: "avaṅka eṅge irukkāṅka?", morph: "avaṅka eṅge iru-kk-āṅka?", kana: "アヴァンガ イェンゲ イルッカーンガ？", ja: "その女性はどこにいますか。", literal: "その方・女性＋どこ＋いる・女性敬称" },
        { id: "10-14", ta: "அந்த ஐயா யாரு? அந்த அம்மா யாரு?", roman: "anda aiyā yāru? anda ammā yāru?", morph: "anda aiyā yāru? anda ammā yāru?", kana: "アンダ アイイヤー ヤール？ アンダ アンマー ヤール？", ja: "あの男性はどなたですか。あの女性はどなたですか。", literal: "あの男性敬称＋誰／あの女性敬称＋誰" }
      ],
      quiz: [
        { q: "「その男性は行きます」の敬称形は？", options: ["அவரு போறாரு.", "அவரு போறான்.", "அவரு போறாங்க.", "அவங்க போறா."], answer: 0, feedback: "男性敬称主語 avaru には動詞語尾 -āru を一致させます。", tags: ["正解", "レジスター", "性一致", "人称一致"] },
        { q: "「その女性は来ます」の敬称形は？", options: ["அவங்க வர்றாங்க.", "அவங்க வர்றாரு.", "அவ வர்றா.", "அவரு வர்றாங்க."], answer: 0, feedback: "女性敬称は avaṅka + -āṅka。男性敬称 -āru へ機械的に揃えません。", tags: ["正解", "性一致", "レジスター", "主語一致"] },
        { q: "அப்பா கடைக்கு போனாரு. の語尾が示すものは？", options: ["男性への敬意", "女性単数", "中性単数", "一人称"], answer: 0, feedback: "-āru はここで父への男性敬称を示します。", tags: ["正解", "性一致", "中性", "人称一致"] },
        { q: "女性一人でも -āṅka が使われる理由は？", options: ["女性敬称が複数形と同形だから", "女性には時制がないから", "すべての女性が文法上複数だから", "-āṅka が過去語尾だから"], answer: 0, feedback: "形が複数と重なりますが、意味上の人数は主語と文脈で決まります。", tags: ["正解", "TAM", "数一致", "TAM"] },
        { q: "知らない大人について話す安全な出発点は？", options: ["人物に合う敬称主語と敬称語尾", "必ず avan / ava", "動詞を一人称にする", "人称一致を使わない"], answer: 0, feedback: "社会距離が不明なら、敬称形から始めるのが安全です。", tags: ["正解", "レジスター", "人称一致", "文法"] }
      ]
    },

    {
      id: "third-plural",
      number: 11,
      navTitle: "彼らはする",
      title: "複数の人物を、ひとつの -āṅka で追う",
      tamilTitle: "அவங்க …றாங்க",
      deck: "二人以上の人物には avaṅka と -āṅka。女性敬称と同じ外形になる曖昧さを、名前の並列・人数語・文脈で解きながら、集団の行動を三時制で語ります。",
      targets: ["人物複数 -āṅka", "avaṅka の二つの読み", "並列主語", "人数語と文脈"],
      heroExample: {
        id: "11-01",
        ta: "ரவியும் மீனாவும் வர்றாங்க. அவங்க இங்க இருக்காங்க.",
        roman: "raviyum mīṉāvum varrāṅka. avaṅka iṅge irukkāṅka.",
        morph: "ravi-y-um mīṉā-v-um var-r-āṅka. avaṅka iṅge iru-kk-āṅka.",
        kana: "ラヴィユム ミーナーヴム ヴァッラーンガ。アヴァンガ インゲ イルッカーンガ。",
        ja: "ラヴィとミーナーが来ます。彼らはここにいます。",
        literal: "ラヴィ・も＋ミーナー・も＋来る・複数／彼ら＋ここ＋いる・複数"
      },
      readSections: [
        {
          kicker: "MORE THAN ONE PERSON",
          heading: "人物が二人以上なら、文末は -āṅka",
          paragraphs: [
            "複数の人物を主語にすると、動詞は <strong>-āṅka</strong> で終わります。<span class=\"ta-inline\" lang=\"ta\">அவங்க போறாங்க</span> <strong>avaṅka pō-r-āṅka</strong>「彼ら／彼女らは行きます」。現在語幹 pō-r- の後ろだけが人物複数へ切り替わります。",
            "過去は <strong>pō-n-āṅka</strong>、未来は <strong>pō-v-āṅka</strong>。強変化でも <strong>paḍi-kk-r-āṅka / paḍi-cc-āṅka / paḍi-pp-āṅka</strong> と、第9章までに作った時制語幹を保存します。複数だから動詞語幹まで新しくなるわけではありません。"
          ],
          formula: {
            label: "人物複数の有限形",
            slots: ["語幹＋時制", "-āṅka"],
            note: "pō-r-āṅka / pō-n-āṅka / pō-v-āṅka"
          }
        },
        {
          kicker: "ONE FORM, TWO READINGS",
          heading: "அவங்க は「彼ら」と「その女性」の両方になりうる",
          paragraphs: [
            "第10章では、女性一人への敬称として <span class=\"ta-inline\" lang=\"ta\">அவங்க வர்றாங்க</span> を使いました。第11章では、同じ文字列が「彼ら／彼女らは来ます」になります。これは誤りではなく、<strong>女性敬称単数と人物複数が同じ形を共有する</strong>ためです。",
            "直前に <span class=\"ta-inline\" lang=\"ta\">அந்த அம்மா</span> が出ていれば女性一人、Ravi と Meena が出ていれば複数。日本語の単語一対一対応を求めず、談話の中で誰を引き継ぐかを見ます。必要なら名前や人数を言い直せば曖昧さを解消できます。"
          ],
          note: { tone: "pink", title: "形だけで人数を決めない", body: "avaṅka + -āṅka は、敬称女性一人か複数人物かを単独では確定しません。先行する人物と場面が判定材料です。" }
        },
        {
          kicker: "COORDINATE THE PEOPLE",
          heading: "A-வும் B-வும் で「AとB」を一つの複数主語にする",
          paragraphs: [
            "<span class=\"ta-inline\" lang=\"ta\">ரவியும் மீனாவும்</span> <strong>ravi-y-um mīṉā-v-um</strong> は、直訳すると「RaviもMeenaも」。二人を並べて一つの複数主語を作るため、動詞は <strong>-āṅka</strong> で一致します。",
            "人数を明示する <span class=\"ta-inline\" lang=\"ta\">ரெண்டு பேரும்</span> <strong>reṇḍu pērum</strong>「二人とも」、全員の <span class=\"ta-inline\" lang=\"ta\">எல்லாரும்</span> <strong>ellārum</strong>、一部を指す <span class=\"ta-inline\" lang=\"ta\">சில பேர்</span> <strong>sila pēr</strong>「何人か」も同じ複数語尾を呼びます。"
          ]
        },
        {
          kicker: "TRACK THE GROUP",
          heading: "主語を一度作れば、-āṅka が集団を追跡する",
          paragraphs: [
            "<span class=\"ta-inline\" lang=\"ta\">ரவியும் மீனாவும் வந்தாங்க. சாப்பிட்டாங்க. படம் பாத்தாங்க.</span> と続けると、二文目以降に avaṅka を毎回置かなくても、-āṅka が同じ集団を追います。これは第9章の -āṉ / -ā による人物追跡を複数へ広げたものです。",
            "ただし、直前に女性敬称一人がいる場面では省略すると人数が曖昧になります。そのときは <strong>reṇḍu pērum</strong> や名前を戻します。形態省略が可能でも、会話相手が誰を想像できるかを優先するのが実用的です。"
          ],
          note: { tone: "blue", title: "第三者の人物体系が完成", body: "-āṉ 男性、-ā 女性、-āru 男性敬称、-āṅka 女性敬称／複数。人間を語る主要な4終端が揃いました。" }
        }
      ],
      formConfig: {
        title: "7動詞の人物複数／3時制",
        intro: "現在・過去・未来の語幹を保存し、すべて -āṅka で集団へ接続します。",
        keys: ["pluralPresent", "pluralPast", "pluralFuture"],
        labels: { pluralPresent: "複数・現在", pluralPast: "複数・過去", pluralFuture: "複数・未来" },
        extensionKicker: "GROUP WORDS",
        extensionTitle: "複数だと明示する6つの部品",
        modalRows: [
          { label: "彼ら・彼女ら", ta: "அவங்க", roman: "avaṅka", kana: "アヴァンガ", ja: "彼ら・彼女ら／女性敬称一人" },
          { label: "RaviとMeena", ta: "ரவியும் மீனாவும்", roman: "raviyum mīṉāvum", kana: "ラヴィユム ミーナーヴム", ja: "ラヴィとミーナー" },
          { label: "二人とも", ta: "ரெண்டு பேரும்", roman: "reṇḍu pērum", kana: "レンドゥ ペールム", ja: "二人とも" },
          { label: "全員", ta: "எல்லாரும்", roman: "ellārum", kana: "エッラールム", ja: "みんな・全員" },
          { label: "何人か", ta: "சில பேர்", roman: "sila pēr", kana: "シラ ペール", ja: "何人か・一部の人" },
          { label: "人", ta: "பேர்", roman: "pēr", kana: "ペール", ja: "人を数える語" }
        ]
      },
      examples: [
        { id: "11-01", featured: true, ta: "ரவியும் மீனாவும் வர்றாங்க. அவங்க இங்க இருக்காங்க.", roman: "raviyum mīṉāvum varrāṅka. avaṅka iṅge irukkāṅka.", morph: "ravi-y-um mīṉā-v-um var-r-āṅka. avaṅka iṅge iru-kk-āṅka.", kana: "ラヴィユム ミーナーヴム ヴァッラーンガ。アヴァンガ インゲ イルッカーンガ。", ja: "ラヴィとミーナーが来ます。彼らはここにいます。", literal: "ラヴィ・も＋ミーナー・も＋来る・複数／彼ら＋ここ＋いる・複数" },
        { id: "11-02", featured: true, ta: "அவங்க கடைக்கு போறாங்க.", roman: "avaṅka kaḍaikku pōrāṅka.", morph: "avaṅka kaḍai-kku pō-r-āṅka.", kana: "アヴァンガ カダイック ポーラーンガ。", ja: "彼らは店へ行きます。", literal: "彼ら＋店・へ＋行く・複数" },
        { id: "11-03", featured: true, ta: "அவங்க இட்லி சாப்பிட்டாங்க.", roman: "avaṅka iṭli sāppiṭṭāṅka.", morph: "avaṅka iṭli sāppiṭṭ-āṅka.", kana: "アヴァンガ イドリ サーッピッターンガ。", ja: "彼らはイドリを食べました。", literal: "彼ら＋イドリ＋食べた・複数" },
        { id: "11-04", ta: "அவங்க தண்ணீர் வாங்கினாங்க.", roman: "avaṅka taṇṇīr vāṅkināṅka.", morph: "avaṅka taṇṇīr vāṅk-in-āṅka.", kana: "アヴァンガ タンニール ヴァーンギナーンガ。", ja: "彼らは水を買いました。", literal: "彼ら＋水＋買った・複数" },
        { id: "11-05", ta: "அவங்க அந்தப் படம் பாத்தாங்க.", roman: "avaṅka anda paḍam pāttāṅka.", morph: "avaṅka anda paḍam pātt-āṅka.", kana: "アヴァンガ アンダ パダム パーッターンガ。", ja: "彼らはその映画を見ました。", literal: "彼ら＋その映画＋見た・複数" },
        { id: "11-06", ta: "அவங்க தமிழ் படிக்கறாங்க.", roman: "avaṅka tamiḻ paḍikkrāṅka.", morph: "avaṅka tamiḻ paḍi-kk-r-āṅka.", kana: "アヴァンガ タミル パディッカラーンガ。", ja: "彼らはタミル語を勉強しています。", literal: "彼ら＋タミル語＋勉強する・複数" },
        { id: "11-07", ta: "அவங்க ஹோட்டல்ல இருக்காங்க.", roman: "avaṅka hōṭṭal-le irukkāṅka.", morph: "avaṅka hōṭṭal-le iru-kk-āṅka.", kana: "アヴァンガ ホーッタッラ イルッカーンガ。", ja: "彼らはホテルにいます。", literal: "彼ら＋ホテル・で＋いる・複数" },
        { id: "11-08", ta: "ரெண்டு பேரும் நாளைக்கு வருவாங்க.", roman: "reṇḍu pērum nāḷaikki varuvāṅka.", morph: "reṇḍu pērum nāḷaikki varu-v-āṅka.", kana: "レンドゥ ペールム ナーレッキ ヴァルヴァーンガ。", ja: "二人とも明日来るでしょう／来ます。", literal: "二人とも＋明日＋来る・未来・複数" },
        { id: "11-09", ta: "எல்லாரும் இங்க இருக்காங்க.", roman: "ellārum iṅge irukkāṅka.", morph: "ellārum iṅge iru-kk-āṅka.", kana: "エッラールム インゲ イルッカーンガ。", ja: "みんなここにいます。", literal: "全員＋ここ＋いる・複数" },
        { id: "11-10", ta: "சில பேர் நாளைக்கு போவாங்க.", roman: "sila pēr nāḷaikki pōvāṅka.", morph: "sila pēr nāḷaikki pō-v-āṅka.", kana: "シラ ペール ナーレッキ ポーヴァーンガ。", ja: "何人かは明日行くでしょう／行きます。", literal: "何人か＋明日＋行く・未来・複数" },
        { id: "11-11", ta: "அவங்க எங்க போறாங்க?", roman: "avaṅka eṅge pōrāṅka?", morph: "avaṅka eṅge pō-r-āṅka?", kana: "アヴァンガ イェンゲ ポーラーンガ？", ja: "彼らはどこへ行きますか。", literal: "彼ら＋どこ＋行く・複数" },
        { id: "11-12", ta: "அவங்க எப்போ வந்தாங்க?", roman: "avaṅka eppō vandāṅka?", morph: "avaṅka eppō vand-āṅka?", kana: "アヴァンガ イェッポー ヴァンダーンガ？", ja: "彼らはいつ来ましたか。", literal: "彼ら＋いつ＋来た・複数" },
        { id: "11-13", ta: "அவங்க என்ன வாங்குறாங்க?", roman: "avaṅka eṉṉa vāṅkurāṅka?", morph: "avaṅka eṉṉa vāṅku-r-āṅka?", kana: "アヴァンガ イェンナ ヴァーングラーンガ？", ja: "彼らは何を買いますか。", literal: "彼ら＋何＋買う・複数" },
        { id: "11-14", ta: "ரவியும் மீனாவும் இந்தப் புத்தகம் படிப்பாங்க.", roman: "raviyum mīṉāvum inda puttaham paḍippāṅka.", morph: "ravi-y-um mīṉā-v-um inda puttaham paḍi-pp-āṅka.", kana: "ラヴィユム ミーナーヴム インダ プッタガム パディッパーンガ。", ja: "ラヴィとミーナーはこの本を読むでしょう／読みます。", literal: "ラヴィ・も＋ミーナー・も＋この本＋読む・未来・複数" },
        { id: "11-15", ta: "அவங்க யாரு?", roman: "avaṅka yāru?", morph: "avaṅka yāru?", kana: "アヴァンガ ヤール？", ja: "彼らは誰ですか／その女性はどなたですか。", literal: "彼ら／その方・女性＋誰" }
      ],
      quiz: [
        { q: "「彼らは店へ行きます」は？", options: ["அவங்க கடைக்கு போறாங்க.", "அவங்க கடைக்கு போறாரு.", "அவன் கடைக்கு போறான்.", "அவ கடைக்கு போறா."], answer: 0, feedback: "複数主語 avaṅka に、人物複数 -āṅka を一致させます。", tags: ["正解", "敬称男性", "数一致", "性一致"] },
        { q: "ரவியும் மீனாவும் の動詞に合う語尾は？", options: ["-āṅka", "-āṉ", "-ā", "-ēn"], answer: 0, feedback: "RaviとMeenaで複数主語になるため -āṅka です。", tags: ["正解", "数一致", "性一致", "人称一致"] },
        { q: "அவங்க வர்றாங்க. が持ちうる二つの読みは？", options: ["彼らが来る／敬う女性一人が来る", "彼が来る／私は来る", "物が来る／あなたが来る", "現在／過去"], answer: 0, feedback: "avaṅka + -āṅka は人物複数と女性敬称単数で同形です。", tags: ["正解", "人称一致", "中性", "TAM"] },
        { q: "「二人とも」を明示する形は？", options: ["ரெண்டு பேரும்", "எல்லாரும்", "சில பேர்", "அவரு"], answer: 0, feedback: "reṇḍu pērum が「二人とも」。曖昧な avaṅka の人数を明示できます。", tags: ["正解", "語彙", "数量", "敬称"] },
        { q: "அவங்க இட்லி சாப்பிட்டாங்க. の時制は？", options: ["過去", "現在", "未来", "人称なし"], answer: 0, feedback: "過去語幹 sāppiṭṭ- と複数語尾 -āṅka の組み合わせです。", tags: ["正解", "TAM", "TAM", "人称一致"] }
      ]
    },

    {
      id: "third-neuter",
      number: 12,
      navTitle: "それは起こる",
      title: "物と出来事を、人間とは別の終端で語る",
      tamilTitle: "அது வர்றது · வந்தது · வரும்",
      deck: "人ではない物・場所・出来事には中性形。現在 -adu、過去 -adu、未来 -um の基本に、頻出の pōccu「行ってしまった」と irukku「ある」を加えます。",
      targets: ["中性現在・過去", "中性未来 -um", "pōccu / irukku", "物・出来事の主語"],
      heroExample: {
        id: "12-01",
        ta: "பஸ் வந்தது. ரயில் போச்சு.",
        roman: "pas vandadu. rayil pōccu.",
        morph: "pas vand-adu. rayil pōccu.",
        kana: "パス ヴァンダドゥ。ライル ポーッチュ。",
        ja: "バスが来ました。列車は行ってしまいました。",
        literal: "バス＋来た・中性／列車＋行ってしまった・中性"
      },
      readSections: [
        {
          kicker: "THE NON-HUMAN LANE",
          heading: "物・場所・出来事は、人間の性と敬称から降りる",
          paragraphs: [
            "バス、列車、店、本、出来事などを主語にすると、-āṉ / -ā / -āru / -āṅka という人物語尾は使いません。指示代名詞なら <span class=\"ta-inline\" lang=\"ta\">இது</span> <strong>idu</strong>「これ」、<span class=\"ta-inline\" lang=\"ta\">அது</span> <strong>adu</strong>「それ・あれ」を使い、動詞を中性形へ送ります。",
            "「来る」の透明な三時制は <span class=\"ta-inline\" lang=\"ta\">வர்றது</span> <strong>var-r-adu</strong>、<span class=\"ta-inline\" lang=\"ta\">வந்தது</span> <strong>vand-adu</strong>、<span class=\"ta-inline\" lang=\"ta\">வரும்</span> <strong>var-um</strong>。まずこの一列を、中性エンジンの基準にします。"
          ],
          formula: {
            label: "中性の基準列",
            slots: ["現在 V-r-adu", "過去 V-past-adu", "未来 V-infinitive-um"],
            note: "var-r-adu / vand-adu / var-um"
          }
        },
        {
          kicker: "A DIFFERENT FUTURE",
          heading: "中性未来は、人間未来の -v- / -pp- をそのまま使わない",
          paragraphs: [
            "人物未来は <strong>varu-v-āṉ</strong>、<strong>paḍi-pp-āṅka</strong> のように未来語幹を作りました。中性未来は <strong>-um</strong> を不定詞側の語幹へ接続し、<span class=\"ta-inline\" lang=\"ta\">வரும்</span> <strong>var-um</strong>、<span class=\"ta-inline\" lang=\"ta\">படிக்கும்</span> <strong>paḍi-kk-um</strong> になります。",
            "したがって、人物形の語尾だけを機械交換する規則では足りません。弱変化の <strong>sāppiḍ-um / vāṅk-um</strong>、強変化の <strong>pāk-k-um / paḍi-kk-um</strong>、特別型の <strong>pōk-um / var-um / iru-kk-um</strong> を、不定詞の家族として見ます。"
          ],
          note: { tone: "pink", title: "中性未来は独立して確認", body: "paḍippāṉ の -pp- を残して中性化しません。正解は paḍikkum。未来 -um は不定詞側の -kk- と結びます。" }
        },
        {
          kicker: "TWO HIGH-FREQUENCY SPECIALS",
          heading: "போச்சு と இருக்கு は、丸ごと頻出形として持つ",
          paragraphs: [
            "「列車が行ってしまった／もう出た」には <span class=\"ta-inline\" lang=\"ta\">ரயில் போச்சு</span> <strong>rayil pōccu</strong> が非常に便利です。規則的な <strong>pōnadu</strong> も文脈によって現れますが、完了した出来事を会話で報告する pōccu は独立した高頻度形として覚えます。",
            "存在動詞の中性現在は <span class=\"ta-inline\" lang=\"ta\">இருக்கு</span> <strong>irukku</strong>。「店がここにある」は <span class=\"ta-inline\" lang=\"ta\">கடை இங்க இருக்கு</span>。過去は <strong>irundadu</strong>、未来は <strong>irukkum</strong> へ戻ります。特殊なのは体系全体ではなく、よく使う一つのセルです。"
          ],
          note: { tone: "blue", title: "旅行で先に聞こえる二語", body: "pōccu は「もう行った／終わった」、irukku は「ある・いる」。時刻表、場所、在庫の会話で何度も現れます。" }
        },
        {
          kicker: "OBJECTS, EVENTS & QUESTIONS",
          heading: "名詞を主語に置き、疑問詞と -ā をそのまま再利用する",
          paragraphs: [
            "<span class=\"ta-inline\" lang=\"ta\">பஸ் எங்க இருக்கு?</span>「バスはどこですか」、<span class=\"ta-inline\" lang=\"ta\">தண்ணீர் எப்போ வரும்?</span>「水はいつ来ますか」のように、第7章の疑問詞は中性形にもそのまま使えます。内容疑問なので通常 -ā を足しません。",
            "はい／いいえなら <span class=\"ta-inline\" lang=\"ta\">ரயில் போச்சா?</span>「列車はもう出ましたか」、<span class=\"ta-inline\" lang=\"ta\">பஸ் பத்து மணிக்கு வருமா?</span>「バスは10時に来ますか」。中性の言い切り形へ疑問 -ā を付けるだけです。口語には varudu など別の現在表記もありますが、本教材は形が見える varradu 系へ統一します。"
          ],
          note: { tone: "blue", title: "人と世界を語る編の出口", body: "第9〜12章で、身近な男女・敬称人物・集団・物事まで、同じ動詞語幹から語り分けられるようになりました。" }
        }
      ],
      formConfig: {
        title: "7動詞の中性／3時制",
        intro: "現在・過去の -adu、未来の -um、そして pōccu / irukku の特別セルを横断します。動詞によっては「その物が〜する」だけでなく「〜すること」の読みも生じます。",
        keys: ["neuterPresent", "neuterPast", "neuterFuture"],
        labels: { neuterPresent: "中性・現在", neuterPast: "中性・過去", neuterFuture: "中性・未来" },
        extensionKicker: "THINGS & EVENTS",
        extensionTitle: "中性主語に置く旅行語彙",
        modalRows: [
          { label: "これ", ta: "இது", roman: "idu", kana: "イドゥ", ja: "これ・このこと" },
          { label: "それ・あれ", ta: "அது", roman: "adu", kana: "アドゥ", ja: "それ・あれ・そのこと" },
          { label: "バス", ta: "பஸ்", roman: "pas", kana: "パス", ja: "バス" },
          { label: "列車", ta: "ரயில்", roman: "rayil", kana: "ライル", ja: "列車・鉄道" },
          { label: "店", ta: "கடை", roman: "kaḍai", kana: "カダイ", ja: "店" },
          { label: "本", ta: "புத்தகம்", roman: "puttaham", kana: "プッタガム", ja: "本" },
          { label: "10時に", ta: "பத்து மணிக்கு", roman: "pattu maṇikku", kana: "パットゥ マニック", ja: "10時に" }
        ]
      },
      examples: [
        { id: "12-01", featured: true, ta: "பஸ் வந்தது. ரயில் போச்சு.", roman: "pas vandadu. rayil pōccu.", morph: "pas vand-adu. rayil pōccu.", kana: "パス ヴァンダドゥ。ライル ポーッチュ。", ja: "バスが来ました。列車は行ってしまいました。", literal: "バス＋来た・中性／列車＋行ってしまった・中性" },
        { id: "12-02", featured: true, ta: "பஸ் இப்போ வர்றது.", roman: "pas ippō varradu.", morph: "pas ippō var-r-adu.", kana: "パス イッポー ヴァッラドゥ。", ja: "バスが今来ます／来ています。", literal: "バス＋今＋来る・現在・中性" },
        { id: "12-03", featured: true, ta: "பஸ் பத்து மணிக்கு வரும்.", roman: "pas pattu maṇikku varum.", morph: "pas pattu maṇi-kku var-um.", kana: "パス パットゥ マニック ヴァルム。", ja: "バスは10時に来ます。", literal: "バス＋10時・に＋来る・中性未来" },
        { id: "12-04", ta: "ரயில் போச்சு.", roman: "rayil pōccu.", morph: "rayil pōccu.", kana: "ライル ポーッチュ。", ja: "列車はもう出ました。", literal: "列車＋行ってしまった・中性" },
        { id: "12-05", ta: "ரயில் நாளைக்கு வரும்.", roman: "rayil nāḷaikki varum.", morph: "rayil nāḷaikki var-um.", kana: "ライル ナーレッキ ヴァルム。", ja: "列車は明日来ます。", literal: "列車＋明日＋来る・中性未来" },
        { id: "12-06", ta: "கடை இங்க இருக்கு.", roman: "kaḍai iṅge irukku.", morph: "kaḍai iṅge iru-kku.", kana: "カダイ インゲ イルック。", ja: "店はここにあります。", literal: "店＋ここ＋ある・中性現在" },
        { id: "12-07", ta: "ஹோட்டல் அங்க இருந்தது.", roman: "hōṭṭal aṅge irundadu.", morph: "hōṭṭal aṅge irund-adu.", kana: "ホーッタル アンゲ イルンダドゥ。", ja: "ホテルはそこにありました。", literal: "ホテル＋そこ＋あった・中性過去" },
        { id: "12-08", ta: "புத்தகம் இங்க இருக்கும்.", roman: "puttaham iṅge irukkum.", morph: "puttaham iṅge iru-kk-um.", kana: "プッタガム インゲ イルックム。", ja: "本はここにあるでしょう／あります。", literal: "本＋ここ＋ある・中性未来" },
        { id: "12-09", ta: "இது நல்லா இருக்கு.", roman: "idu nallā irukku.", morph: "idu nallā iru-kku.", kana: "イドゥ ナッラー イルック。", ja: "これは良いです。", literal: "これ＋良く＋ある・中性現在" },
        { id: "12-10", ta: "அது அங்க இருக்கு.", roman: "adu aṅge irukku.", morph: "adu aṅge iru-kku.", kana: "アドゥ アンゲ イルック。", ja: "それはそこにあります。", literal: "それ＋そこ＋ある・中性現在" },
        { id: "12-11", ta: "இந்தப் புத்தகம் ஜப்பான்ல இருந்து வந்தது.", roman: "inda puttaham jappāṉ-le irundu vandadu.", morph: "inda puttaham jappāṉ-le irundu vand-adu.", kana: "インダ プッタガム ジャッパーンラ イルンドゥ ヴァンダドゥ。", ja: "この本は日本から来ました。", literal: "この本＋日本・から＋来た・中性" },
        { id: "12-12", ta: "தண்ணீர் எப்போ வரும்?", roman: "taṇṇīr eppō varum?", morph: "taṇṇīr eppō var-um?", kana: "タンニール イェッポー ヴァルム？", ja: "水はいつ来ますか。", literal: "水＋いつ＋来る・中性未来" },
        { id: "12-13", ta: "பஸ் எங்க இருக்கு?", roman: "pas eṅge irukku?", morph: "pas eṅge iru-kku?", kana: "パス イェンゲ イルック？", ja: "バスはどこにありますか。", literal: "バス＋どこ＋ある・中性現在" },
        { id: "12-14", ta: "இது எப்போ வந்தது?", roman: "idu eppō vandadu?", morph: "idu eppō vand-adu?", kana: "イドゥ イェッポー ヴァンダドゥ？", ja: "これはいつ来ましたか。", literal: "これ＋いつ＋来た・中性" },
        { id: "12-15", ta: "ரயில் போச்சா?", roman: "rayil pōccā?", morph: "rayil pōcc-ā?", kana: "ライル ポーッチャー？", ja: "列車はもう出ましたか。", literal: "列車＋行ってしまった・疑問" },
        { id: "12-16", ta: "பஸ் பத்து மணிக்கு வருமா?", roman: "pas pattu maṇikku varumā?", morph: "pas pattu maṇi-kku var-um-ā?", kana: "パス パットゥ マニック ヴァルマー？", ja: "バスは10時に来ますか。", literal: "バス＋10時・に＋来る・中性未来・疑問" }
      ],
      quiz: [
        { q: "「バスが来た」の中性形は？", options: ["பஸ் வந்தது.", "பஸ் வந்தான்.", "பஸ் வந்தாங்க.", "பஸ் வந்தாரு."], answer: 0, feedback: "物であるバスには過去語幹 vand- + 中性 -adu を使います。", tags: ["正解", "性一致", "数一致", "敬称"] },
        { q: "中性未来「読む／読まれることになる」は？", options: ["படிக்கும்", "படிப்பான்", "படிப்பாங்க", "படிச்சது"], answer: 0, feedback: "中性未来は不定詞側の paḍi-kk- に -um を接続し、paḍikkum です。", tags: ["正解", "人称一致", "数一致", "TAM"] },
        { q: "「列車はもう出た」の頻出形は？", options: ["ரயில் போச்சு.", "ரயில் போறது.", "ரயில் போகும்.", "ரயில் போனான்."], answer: 0, feedback: "完了した出来事の報告には pōccu が頻出します。", tags: ["正解", "TAM", "TAM", "性一致"] },
        { q: "「店はここにある」は？", options: ["கடை இங்க இருக்கு.", "கடை இங்க இருக்கான்.", "கடை இங்க இருக்காங்க.", "கடை இங்க இருக்காரு."], answer: 0, feedback: "存在動詞の中性現在は特別な irukku です。", tags: ["正解", "性一致", "数一致", "敬称"] },
        { q: "பஸ் பத்து மணிக்கு வருமா? の -ā は？", options: ["中性未来を極性疑問にする", "男性語尾に変える", "過去形に変える", "複数だけを示す"], answer: 0, feedback: "varum が中性未来、最後の -ā が「来るか」を尋ねる極性疑問です。", tags: ["正解", "性一致", "TAM", "数一致"] }
      ]
    },

    {
      id: "aspect-now",
      number: 13,
      navTitle: "している・してしまった",
      title: "出来事の内側と、その後を言い分ける",
      tamilTitle: "…க்கிட்டு இருக்கேன் · …இருக்கேன் · …ட்டேன்",
      deck: "同じ『食べた／食べている』でも、進行中なのか、経験・結果が今に残るのか、最後までやり切ったのかで形を選びます。動詞の後ろに補助動詞を置き、活用語尾は列の最後へ一度だけ付けます。",
      targets: ["進行 V-க்கிட்டு இரு", "現在関連の完了 V-இரு", "完遂 V-(வி)டு", "単純過去との意味差"],
      heroExample: {
        id: "13-01",
        ta: "நான் இப்போ சாப்பிட்டுக்கிட்டு இருக்கேன்.",
        roman: "nāṉ ippō sāppiṭṭukkiṭṭu irukkēn.",
        morph: "nāṉ ippō sāppiṭṭ-u-kkiṭṭu iru-kk-ēn.",
        kana: "ナーン イッポー サーッピットゥッキットゥ イルッケーン。",
        ja: "私は今、食べているところです。",
        literal: "私＋今＋食べて・進行＋いる・現在・私"
      },
      readSections: [
        {
          kicker: "INSIDE THE EVENT",
          heading: "進行形は、動作の途中へ視点を置く",
          paragraphs: [
            "『今ちょうど〜している』は、主動詞の連用形に <strong>-க்கிட்டு</strong> <strong>-kkiṭṭu</strong> と <span class=\"ta-inline\" lang=\"ta\">இரு</span> <strong>iru</strong>『いる』を続けます。<span class=\"ta-inline\" lang=\"ta\">சாப்பிட்டுக்கிட்டு இருக்கேன்</span> は、<strong>sāppiṭṭ-u-kkiṭṭu iru-kk-ēn</strong>。最初の動詞は時制・人称を持たず、最後の irukkēn だけが『現在・私』を示します。",
            "日本語の『〜ている』は習慣や結果状態にも広がりますが、この章の <strong>V-kkiṭṭu iru</strong> はまず目の前の進行として固定します。<span class=\"ta-inline\" lang=\"ta\">இப்போ</span> ippō『今』と組み合わせると意味が見えやすくなります。"
          ],
          formula: {
            label: "進行の列",
            slots: ["主動詞 AVP", "-kkiṭṭu", "iru + TAM + PNG"],
            note: "sāppiṭṭ-u-kkiṭṭu iru-kk-ēn"
          }
        },
        {
          kicker: "CURRENT RELEVANCE",
          heading: "V-இரு は、過去の出来事を『今の状態』へつなぐ",
          paragraphs: [
            "<span class=\"ta-inline\" lang=\"ta\">வந்திருக்கேன்</span> <strong>vand-irukk-ēn</strong> は『来たことがあり、今ここにいる／来ている』のように、完了した出来事の結果や経験を現在へ結びます。単純過去 <span class=\"ta-inline\" lang=\"ta\">வந்தேன்</span> vandēn は、過去の到着を一件の出来事として置くだけです。",
            "<span class=\"ta-inline\" lang=\"ta\">ஏற்கனவே</span> ērkaṉavē『すでに』と相性がよく、旅行では『もう食べました』『その映画は見たことがあります』を短く伝えられます。ただし文脈によって結果・経験・継続の重みは変わるため、日本語訳一語へ閉じ込めません。"
          ],
          note: { tone: "blue", title: "過去と完了を並べる", body: "vandēn は過去の出来事。vandirukkēn は、その到着・経験・結果が会話の『今』に関係するときの形です。" }
        },
        {
          kicker: "DONE ALL THE WAY",
          heading: "V-(வி)டு は、完遂と話し手の区切りを加える",
          paragraphs: [
            "連用形の後ろに <span class=\"ta-inline\" lang=\"ta\">விடு</span> <strong>viḍu</strong> を置くと、『すっかり〜する』『〜してしまう』という完遂・区切りが加わります。口語では v が落ちやすく、<span class=\"ta-inline\" lang=\"ta\">சாப்பிட்டுட்டேன்</span>、<span class=\"ta-inline\" lang=\"ta\">போயிட்டேன்</span> のような一まとまりで聞こえます。",
            "日本語の『しまった』と同様、後悔を伴うこともありますが、後悔専用ではありません。『水は買い終えた』『本は読み切った』という単純な完遂にも使えます。"
          ],
          formula: {
            label: "完遂の列",
            slots: ["主動詞 AVP", "(v)iḍu", "TAM + PNG"],
            note: "pātt-uṭṭ-ēn / pōy-iṭṭ-ēn"
          }
        },
        {
          kicker: "ONE EVENT, THREE VIEWS",
          heading: "形を選ぶ前に、話し手がどこから見るかを決める",
          paragraphs: [
            "『食べる』を例にすると、<span class=\"ta-inline\" lang=\"ta\">சாப்பிட்டுக்கிட்டு இருக்கேன்</span> は途中、<span class=\"ta-inline\" lang=\"ta\">சாப்பிட்டிருக்கேன்</span> は完了と現在の関係、<span class=\"ta-inline\" lang=\"ta\">சாப்பிட்டுட்டேன்</span> はやり切った区切りです。出来事そのものは同じでも、焦点が違います。",
            "アスペクト補助動詞は必須の時制語尾ではなく、話し手が必要なときに足す部品です。迷ったら単純現在・過去でも文は成立します。まず三つの代表場面で意味の核を作り、細かな地域差・縮約は音声経験とともに広げます。"
          ],
          note: { tone: "pink", title: "三つを直訳で混ぜない", body: "進行・現在関連の完了・完遂は、どれも日本語で『〜ている／〜た』になりえます。訳ではなく、途中・今との関係・区切りを診断します。" }
        }
      ],
      formConfig: {
        title: "7動詞の進行・完了・完遂",
        intro: "主動詞側の連用形と補助動詞側の一人称語尾を、動詞ごとに一まとまりで確認します。",
        keys: ["progressive", "perfect", "completive"],
        labels: { progressive: "〜している途中", perfect: "〜していて今に関係", completive: "〜してしまった／し切った" },
        extensionKicker: "TIME ANCHORS",
        extensionTitle: "視点を決める五つの時間表現",
        modalRows: [
          { label: "今", ta: "இப்போ", roman: "ippō", kana: "イッポー", ja: "今・いまちょうど" },
          { label: "まだ／なお", ta: "இன்னும்", roman: "iṉṉum", kana: "インヌム", ja: "まだ・さらに" },
          { label: "すでに", ta: "ஏற்கனவே", roman: "ērkaṉavē", kana: "イェールカナヴェー", ja: "すでに・前もって" },
          { label: "たった今", ta: "இப்போதான்", roman: "ippōtāṉ", kana: "イッポーダーン", ja: "ちょうど今・今しがた" },
          { label: "まだ〜ない", ta: "இன்னும் இல்ல", roman: "iṉṉum illa", kana: "インヌム イッラ", ja: "まだない・まだです" }
        ]
      },
      examples: [
        { id: "13-01", featured: true, ta: "நான் இப்போ சாப்பிட்டுக்கிட்டு இருக்கேன்.", roman: "nāṉ ippō sāppiṭṭukkiṭṭu irukkēn.", morph: "nāṉ ippō sāppiṭṭ-u-kkiṭṭu iru-kk-ēn.", kana: "ナーン イッポー サーッピットゥッキットゥ イルッケーン。", ja: "私は今、食べているところです。", literal: "私＋今＋食べて・進行＋いる・現在・私" },
        { id: "13-02", featured: true, ta: "நான் ஏற்கனவே சாப்பிட்டிருக்கேன்.", roman: "nāṉ ērkaṉavē sāppiṭṭirukkēn.", morph: "nāṉ ērkaṉavē sāppiṭṭ-iru-kk-ēn.", kana: "ナーン イェールカナヴェー サーッピッティルッケーン。", ja: "私はもう食べています／もう食べました。", literal: "私＋すでに＋食べて・いる・現在・私" },
        { id: "13-03", featured: true, ta: "நான் சாப்பிட்டுட்டேன்.", roman: "nāṉ sāppiṭṭuṭṭēn.", morph: "nāṉ sāppiṭṭ-uṭṭ-ēn.", kana: "ナーン サーッピットゥッテーン。", ja: "私は食べ終えました／食べてしまいました。", literal: "私＋食べて・完遂・過去・私" },
        { id: "13-04", ta: "நான் தமிழ் படிச்சுக்கிட்டு இருக்கேன்.", roman: "nāṉ tamiḻ paḍiccukkiṭṭu irukkēn.", morph: "nāṉ tamiḻ paḍicc-u-kkiṭṭu iru-kk-ēn.", kana: "ナーン タミル パディッチュッキットゥ イルッケーン。", ja: "私はタミル語を勉強しているところです。", literal: "私＋タミル語＋勉強して・進行＋いる・現在・私" },
        { id: "13-05", ta: "நான் ஹோட்டலுக்கு போய்க்கிட்டு இருக்கேன்.", roman: "nāṉ hōṭṭalukku pōykkiṭṭu irukkēn.", morph: "nāṉ hōṭṭal-ukku pōy-kkiṭṭu iru-kk-ēn.", kana: "ナーン ホーッタルック ポーイッキットゥ イルッケーン。", ja: "私はホテルへ向かっているところです。", literal: "私＋ホテル・へ＋行って・進行＋いる・現在・私" },
        { id: "13-06", ta: "நான் இப்போ வந்துக்கிட்டு இருக்கேன்.", roman: "nāṉ ippō vandukkiṭṭu irukkēn.", morph: "nāṉ ippō vand-u-kkiṭṭu iru-kk-ēn.", kana: "ナーン イッポー ヴァンドゥッキットゥ イルッケーン。", ja: "私は今そちらへ向かっています。", literal: "私＋今＋来て・進行＋いる・現在・私" },
        { id: "13-07", ta: "நான் அந்தப் படம் பாத்துக்கிட்டு இருக்கேன்.", roman: "nāṉ anda paḍam pāttukkiṭṭu irukkēn.", morph: "nāṉ anda paḍam pātt-u-kkiṭṭu iru-kk-ēn.", kana: "ナーン アンダ パダム パーットゥッキットゥ イルッケーン。", ja: "私はその映画を見ているところです。", literal: "私＋その映画＋見て・進行＋いる・現在・私" },
        { id: "13-08", ta: "நான் தண்ணீர் வாங்கிக்கிட்டு இருக்கேன்.", roman: "nāṉ taṇṇīr vāṅkikkiṭṭu irukkēn.", morph: "nāṉ taṇṇīr vāṅki-kkiṭṭu iru-kk-ēn.", kana: "ナーン タンニール ヴァーンギッキットゥ イルッケーン。", ja: "私は水を買っているところです。", literal: "私＋水＋買って・進行＋いる・現在・私" },
        { id: "13-09", ta: "நான் அந்தப் படம் பாத்திருக்கேன்.", roman: "nāṉ anda paḍam pāttirukkēn.", morph: "nāṉ anda paḍam pātt-iru-kk-ēn.", kana: "ナーン アンダ パダム パーッティルッケーン。", ja: "私はその映画を見たことがあります。", literal: "私＋その映画＋見て・いる・現在・私" },
        { id: "13-10", ta: "நான் இந்தப் புத்தகம் படிச்சிருக்கேன்.", roman: "nāṉ inda puttaham paḍiccirukkēn.", morph: "nāṉ inda puttaham paḍicc-iru-kk-ēn.", kana: "ナーン インダ プッタガム パディッチルッケーン。", ja: "私はこの本を読んだことがあります／読んであります。", literal: "私＋この本＋読んで・いる・現在・私" },
        { id: "13-11", ta: "நான் சென்னைக்கு வந்திருக்கேன்.", roman: "nāṉ ceṉṉaikku vandirukkēn.", morph: "nāṉ ceṉṉai-kku vand-iru-kk-ēn.", kana: "ナーン チェンネック ヴァンディルッケーン。", ja: "私はチェンナイに来ています。", literal: "私＋チェンナイ・へ＋来て・いる・現在・私" },
        { id: "13-12", ta: "நான் தண்ணீர் வாங்கிட்டேன்.", roman: "nāṉ taṇṇīr vāṅkiṭṭēn.", morph: "nāṉ taṇṇīr vāṅk-iṭṭ-ēn.", kana: "ナーン タンニール ヴァーンギッテーン。", ja: "私は水を買い終えました／買ってしまいました。", literal: "私＋水＋買って・完遂・過去・私" },
        { id: "13-13", ta: "நான் அந்தப் படம் பாத்துட்டேன்.", roman: "nāṉ anda paḍam pāttuṭṭēn.", morph: "nāṉ anda paḍam pātt-uṭṭ-ēn.", kana: "ナーン アンダ パダム パーットゥッテーン。", ja: "私はその映画を見終えました／見てしまいました。", literal: "私＋その映画＋見て・完遂・過去・私" },
        { id: "13-14", ta: "நான் இந்தப் புத்தகம் படிச்சுட்டேன்.", roman: "nāṉ inda puttaham paḍiccuṭṭēn.", morph: "nāṉ inda puttaham paḍicc-uṭṭ-ēn.", kana: "ナーン インダ プッタガム パディッチュッテーン。", ja: "私はこの本を読み終えました。", literal: "私＋この本＋読んで・完遂・過去・私" },
        { id: "13-15", ta: "இன்னும் சாப்பிடல.", roman: "iṉṉum sāppiḍala.", morph: "iṉṉum sāppiḍa-la.", kana: "インヌム サーッピダラ。", ja: "まだ食べていません。", literal: "まだ＋食べる・非未来否定" }
      ],
      quiz: [
        { q: "『今、食べている途中』を明示する形は？", options: ["சாப்பிட்டுக்கிட்டு இருக்கேன்", "சாப்பிட்டிருக்கேன்", "சாப்பிட்டுட்டேன்", "சாப்பிட்டேன்"], answer: 0, feedback: "AVP + -kkiṭṭu + iru が出来事の進行中へ視点を置きます。", tags: ["正解", "現在関連", "完遂", "単純過去"] },
        { q: "『その映画を見た経験が今の話題に関係する』は？", options: ["அந்தப் படம் பாத்திருக்கேன்.", "அந்தப் படம் பாத்துக்கிட்டு இருக்கேன்.", "அந்தப் படம் பாத்துட்டேன்.", "அந்தப் படம் பாப்பேன்."], answer: 0, feedback: "pāttirukkēn は完了した『見る』を現在へつなぎます。", tags: ["正解", "進行", "完遂", "未来"] },
        { q: "வாங்கிட்டேன் が வாங்கினேன் に加えるものは？", options: ["完遂・区切り", "進行中", "未来予測", "丁寧な相手"], answer: 0, feedback: "AVP + (v)iḍu は、買う動作を最後まで済ませたという区切りを加えます。", tags: ["正解", "アスペクト", "TAM", "人称一致"] },
        { q: "進行構文で時制・人称を受け持つ位置は？", options: ["最後の இரு", "最初の主動詞だけ", "主語だけ", "-க்கிட்டு だけ"], answer: 0, feedback: "主動詞は連用形になり、最後の iru が TAM と PNG を受け持ちます。", tags: ["正解", "連鎖", "主語", "補助部品"] },
        { q: "『まだ食べていない』に合うものは？", options: ["இன்னும் சாப்பிடல.", "ஏற்கனவே சாப்பிட்டிருக்கேன்.", "இப்போ சாப்பிட்டுக்கிட்டு இருக்கேன்.", "சாப்பிட்டுட்டேன்."], answer: 0, feedback: "iṉṉum『まだ』と非未来否定 sāppiḍala を組み合わせます。", tags: ["正解", "完了", "進行", "完遂"] }
      ]
    },

    {
      id: "verb-chains",
      number: 14,
      navTitle: "して、行く",
      title: "有限語尾は最後に一つ、動作はその前へ連ねる",
      tamilTitle: "போய் வாங்கி வர்றேன்",
      deck: "『店へ行って、水を買って、ホテルへ戻る』を、一つの長い動詞列にします。途中の動詞は連用形または目的を表す不定詞にし、時制・人称を示す有限語尾は原則として最後の動詞に一度だけ置きます。",
      targets: ["連用形による順接", "不定詞による目的", "進行を含む連鎖", "最後の動詞だけを活用"],
      heroExample: {
        id: "14-01",
        ta: "நான் கடைக்கு போய் தண்ணீர் வாங்குறேன்.",
        roman: "nāṉ kaḍaikku pōyi taṇṇīr vāṅkurēn.",
        morph: "nāṉ kaḍai-kku pōy-i taṇṇīr vāṅku-r-ēn.",
        kana: "ナーン カダイック ポーイ タンニール ヴァーングレーン。",
        ja: "私は店へ行って、水を買います。",
        literal: "私＋店・へ＋行って＋水＋買う・現在・私"
      },
      readSections: [
        {
          kicker: "ONE FINITE ENDING",
          heading: "出来事を足すたび、前の動詞を連用形へ畳む",
          paragraphs: [
            "タミル語では、先に起こる動作を <strong>AVP（連用形）</strong>にして次の動詞へ渡せます。<span class=\"ta-inline\" lang=\"ta\">போய் வாங்குறேன்</span> は <strong>pōyi + vāṅkurēn</strong>『行って、買う』。時制と一人称 -ēn は最後の vāṅkurēn にだけ現れます。",
            "三つでも同じです。<span class=\"ta-inline\" lang=\"ta\">போய் வாங்கி வர்றேன்</span>『行って、買って、来ます』では pōyi と vāṅki が背景の動作、varrēn が文全体の現在・一人称を閉じます。"
          ],
          formula: { label: "順接の列", slots: ["V₁-AVP", "V₂-AVP", "V₃-TAM-PNG"], note: "pōyi + vāṅki + var-r-ēn" }
        },
        {
          kicker: "PURPOSE BEFORE MOTION",
          heading: "『〜しに行く／来る』は、不定詞を移動動詞の前へ置く",
          paragraphs: [
            "目的を表すときは <strong>V-a + pō / vā</strong>。<span class=\"ta-inline\" lang=\"ta\">சாப்பிட போறேன்</span> sāppiḍa pōrēn は『食べるために行く』、<span class=\"ta-inline\" lang=\"ta\">தமிழ் படிக்க சென்னைக்கு வர்றேன்</span> は『タミル語を学びにチェンナイへ来る』です。",
            "AVP は先に実行した動作をつなぎ、不定詞は後続の移動の目的をつなぐ。この対比が分かれば、日本語の『〜て行く』と『〜しに行く』を形で区別できます。"
          ],
          note: { tone: "blue", title: "順序か、目的か", body: "sāppiṭṭu pōrēn は『食べてから行く』。sāppiḍa pōrēn は『食べるために行く』。日本語が似ていても最初の動詞の形が違います。" }
        },
        {
          kicker: "ASPECT INSIDE A CHAIN",
          heading: "進行形も一つのまとまりとして、文末へ置ける",
          paragraphs: [
            "第13章の <strong>V-kkiṭṭu iru</strong> も動詞列です。<span class=\"ta-inline\" lang=\"ta\">படம் பாத்துக்கிட்டு சாப்பிடறேன்</span>『映画を見ながら食べる』では、pāttukkiṭṭu が継続する背景、sāppiḍarēn が主たる有限動詞です。",
            "動作の関係は文脈で『〜してから』『〜しながら』『〜して、その結果』などに読まれます。連用形そのものを日本語の接続詞一つへ固定せず、出来事の自然な順序から解釈します。"
          ],
          formula: { label: "背景を伴う列", slots: ["V₁-AVP-kkiṭṭu", "V₂-TAM-PNG"], note: "pātt-u-kkiṭṭu sāppiḍ-r-ēn" }
        },
        {
          kicker: "CHANGE THE LAST CELL",
          heading: "人称・時制を変えるときは、列の終端だけを交換する",
          paragraphs: [
            "<span class=\"ta-inline\" lang=\"ta\">ரவி வந்து புத்தகம் வாங்கினான்</span>『ラヴィは来て本を買った』では、vandu は変わらず、最後が vāṅkināṉ になります。複数なら <span class=\"ta-inline\" lang=\"ta\">அவங்க சாப்பிட்டு போனாங்க</span>。既習の人称語尾をそのまま列の出口へ置けます。",
            "長い文でも診断手順は同じです。まず最後の有限動詞で時制・人称を読む。次に左へ戻り、AVP を出来事の順序、不定詞を目的として拾います。"
          ],
          note: { tone: "pink", title: "すべての動詞を活用しない", body: "『行った・買った・来た』を一語ずつ有限過去にすると、一つの滑らかな列になりません。途中は AVP、出口だけ TAM + PNG です。" }
        }
      ],
      formConfig: {
        title: "7動詞の連鎖用フォーム",
        intro: "不定詞は目的、連用形は前景・順接の部品。二列を並べ、文末の有限動詞へ接続します。",
        keys: ["avp", "infinitive"],
        labels: { avp: "〜して（AVP）", infinitive: "〜するために" },
        extensionKicker: "CHAIN BLUEPRINTS",
        extensionTitle: "そのまま入れ替えられる連鎖の型",
        modalRows: [
          { label: "行って買う", ta: "போய் வாங்குறேன்", roman: "pōyi vāṅku-r-ēn", kana: "ポーイ ヴァーングレーン", ja: "行って買います" },
          { label: "買って来る", ta: "வாங்கி வர்றேன்", roman: "vāṅki var-r-ēn", kana: "ヴァーンギ ヴァッレーン", ja: "買って来ます" },
          { label: "食べて行く", ta: "சாப்பிட்டு போறேன்", roman: "sāppiṭṭu pō-r-ēn", kana: "サーッピットゥ ポーレーン", ja: "食べてから行きます" },
          { label: "食べに行く", ta: "சாப்பிட போறேன்", roman: "sāppiḍa pō-r-ēn", kana: "サーッピダ ポーレーン", ja: "食べるために行きます" },
          { label: "見ながら食べる", ta: "பாத்துக்கிட்டு சாப்பிடறேன்", roman: "pāttukkiṭṭu sāppiḍ-r-ēn", kana: "パーットゥッキットゥ サーッピダレーン", ja: "見ながら食べます" }
        ]
      },
      examples: [
        { id: "14-01", featured: true, ta: "நான் கடைக்கு போய் தண்ணீர் வாங்குறேன்.", roman: "nāṉ kaḍaikku pōyi taṇṇīr vāṅkurēn.", morph: "nāṉ kaḍai-kku pōy-i taṇṇīr vāṅku-r-ēn.", kana: "ナーン カダイック ポーイ タンニール ヴァーングレーン。", ja: "私は店へ行って、水を買います。", literal: "私＋店・へ＋行って＋水＋買う・現在・私" },
        { id: "14-02", featured: true, ta: "நான் ஹோட்டலுக்கு வந்து சாப்பிடறேன்.", roman: "nāṉ hōṭṭalukku vandu sāppiḍarēn.", morph: "nāṉ hōṭṭal-ukku vand-u sāppiḍ-r-ēn.", kana: "ナーン ホーッタルック ヴァンドゥ サーッピダレーン。", ja: "私はホテルへ来て、食べます。", literal: "私＋ホテル・へ＋来て＋食べる・現在・私" },
        { id: "14-03", featured: true, ta: "நான் சாப்பிட்டு போறேன்.", roman: "nāṉ sāppiṭṭu pōrēn.", morph: "nāṉ sāppiṭṭ-u pō-r-ēn.", kana: "ナーン サーッピットゥ ポーレーン。", ja: "私は食べてから行きます。", literal: "私＋食べて＋行く・現在・私" },
        { id: "14-04", ta: "நான் புத்தகம் வாங்கி படிக்கறேன்.", roman: "nāṉ puttaham vāṅki paḍikkarēn.", morph: "nāṉ puttaham vāṅki paḍi-kk-r-ēn.", kana: "ナーン プッタガム ヴァーンギ パディッカレーン。", ja: "私は本を買って読みます。", literal: "私＋本＋買って＋読む・現在・私" },
        { id: "14-05", ta: "நான் படம் பாத்து வர்றேன்.", roman: "nāṉ paḍam pāttu varrēn.", morph: "nāṉ paḍam pātt-u var-r-ēn.", kana: "ナーン パダム パーットゥ ヴァッレーン。", ja: "私は映画を見て戻ってきます。", literal: "私＋映画＋見て＋来る・現在・私" },
        { id: "14-06", ta: "நான் கடைக்கு போய் தண்ணீர் வாங்கி ஹோட்டலுக்கு வர்றேன்.", roman: "nāṉ kaḍaikku pōyi taṇṇīr vāṅki hōṭṭalukku varrēn.", morph: "nāṉ kaḍai-kku pōy-i taṇṇīr vāṅki hōṭṭal-ukku var-r-ēn.", kana: "ナーン カダイック ポーイ タンニール ヴァーンギ ホーッタルック ヴァッレーン。", ja: "私は店へ行き、水を買って、ホテルへ戻ります。", literal: "私＋店・へ＋行って＋水＋買って＋ホテル・へ＋来る・現在・私" },
        { id: "14-07", ta: "நான் சாப்பிட போறேன்.", roman: "nāṉ sāppiḍa pōrēn.", morph: "nāṉ sāppiḍa pō-r-ēn.", kana: "ナーン サーッピダ ポーレーン。", ja: "私は食べに行きます。", literal: "私＋食べるため＋行く・現在・私" },
        { id: "14-08", ta: "நான் தண்ணீர் வாங்க போறேன்.", roman: "nāṉ taṇṇīr vāṅka pōrēn.", morph: "nāṉ taṇṇīr vāṅka pō-r-ēn.", kana: "ナーン タンニール ヴァーンガ ポーレーン。", ja: "私は水を買いに行きます。", literal: "私＋水＋買うため＋行く・現在・私" },
        { id: "14-09", ta: "நான் படம் பாக்க போறேன்.", roman: "nāṉ paḍam pākka pōrēn.", morph: "nāṉ paḍam pā-kka pō-r-ēn.", kana: "ナーン パダム パーッカ ポーレーン。", ja: "私は映画を見に行きます。", literal: "私＋映画＋見るため＋行く・現在・私" },
        { id: "14-10", ta: "நான் தமிழ் படிக்க சென்னைக்கு வர்றேன்.", roman: "nāṉ tamiḻ paḍikka ceṉṉaikku varrēn.", morph: "nāṉ tamiḻ paḍi-kka ceṉṉai-kku var-r-ēn.", kana: "ナーン タミル パディッカ チェンネック ヴァッレーン。", ja: "私はタミル語を学びにチェンナイへ来ます。", literal: "私＋タミル語＋学ぶため＋チェンナイ・へ＋来る・現在・私" },
        { id: "14-11", ta: "நான் படம் பாத்துக்கிட்டு சாப்பிடறேன்.", roman: "nāṉ paḍam pāttukkiṭṭu sāppiḍarēn.", morph: "nāṉ paḍam pātt-u-kkiṭṭu sāppiḍ-r-ēn.", kana: "ナーン パダム パーットゥッキットゥ サーッピダレーン。", ja: "私は映画を見ながら食べます。", literal: "私＋映画＋見て・継続＋食べる・現在・私" },
        { id: "14-12", ta: "அவங்க சாப்பிட்டு போனாங்க.", roman: "avaṅka sāppiṭṭu pōṉāṅka.", morph: "avaṅka sāppiṭṭ-u pō-n-āṅka.", kana: "アヴァンガ サーッピットゥ ポーナーンガ。", ja: "彼らは食べてから行きました。", literal: "彼ら＋食べて＋行く・過去・複数" },
        { id: "14-13", ta: "ரவி வந்து புத்தகம் வாங்கினான்.", roman: "ravi vandu puttaham vāṅkiṉāṉ.", morph: "ravi vand-u puttaham vāṅk-in-āṉ.", kana: "ラヴィ ヴァンドゥ プッタガム ヴァーンギナーン。", ja: "ラヴィは来て、本を買いました。", literal: "ラヴィ＋来て＋本＋買う・過去・男性" },
        { id: "14-14", ta: "மீனா படம் பாத்து ஹோட்டலுக்கு வந்தா.", roman: "mīṉā paḍam pāttu hōṭṭalukku vandā.", morph: "mīṉā paḍam pātt-u hōṭṭal-ukku vand-ā.", kana: "ミーナー パダム パーットゥ ホーッタルック ヴァンダー。", ja: "ミーナーは映画を見て、ホテルへ来ました。", literal: "ミーナー＋映画＋見て＋ホテル・へ＋来る・過去・女性" },
        { id: "14-15", ta: "அந்த ஐயா கடைக்கு போய் தண்ணீர் வாங்கினாரு.", roman: "anda aiyā kaḍaikku pōyi taṇṇīr vāṅkiṉāru.", morph: "anda aiyā kaḍai-kku pōy-i taṇṇīr vāṅk-in-āru.", kana: "アンダ アイイヤー カダイック ポーイ タンニール ヴァーンギナール。", ja: "あの男性は店へ行って、水を買いました。", literal: "あの男性・敬称＋店・へ＋行って＋水＋買う・過去・敬称" }
      ],
      quiz: [
        { q: "『食べてから行く』は？", options: ["சாப்பிட்டு போறேன்", "சாப்பிட போறேன்", "சாப்பிட்டுக்கிட்டு இருக்கேன்", "சாப்பிட்டேன்"], answer: 0, feedback: "実行した動作をつなぐので AVP sāppiṭṭu を使います。", tags: ["正解", "目的", "進行", "単純過去"] },
        { q: "『食べに行く』は？", options: ["சாப்பிட போறேன்", "சாப்பிட்டு போறேன்", "சாப்பிட்டுட்டேன்", "சாப்பிடல"], answer: 0, feedback: "移動の目的には不定詞 sāppiḍa を pōrēn の前へ置きます。", tags: ["正解", "順接", "完遂", "否定"] },
        { q: "போய் வாங்கி வர்றேன் で時制・人称を示すのは？", options: ["最後の வர்றேன்", "最初の போய்", "中央の வாங்கி", "三つ全部"], answer: 0, feedback: "途中二つは AVP。有限の TAM + PNG は最後の varrēn に一度だけ現れます。", tags: ["正解", "連鎖", "連鎖", "過剰活用"] },
        { q: "『映画を見ながら食べる』に合う列は？", options: ["பாத்துக்கிட்டு சாப்பிடறேன்", "பாக்க சாப்பிடறேன்", "பாத்தேன் சாப்பிட்டேன்", "பாத்துட்டேன்"], answer: 0, feedback: "背景として継続する動作を pāttukkiṭṭu にし、最後を有限動詞にします。", tags: ["正解", "目的", "過剰活用", "完遂"] },
        { q: "அவங்க சாப்பிட்டு போனாங்க. の文末が示すものは？", options: ["過去・人物複数", "現在・一人称", "未来・丁寧二人称", "中性未来"], answer: 0, feedback: "pō-n-āṅka が文全体を過去・人物複数として閉じます。", tags: ["正解", "TAM/PNG", "TAM/PNG", "中性"] }
      ]
    },

    {
      id: "requests",
      number: 15,
      navTitle: "してください",
      title: "相手への働きかけを、敬意と否定で調整する",
      tamilTitle: "வாங்க · போகாதீங்க · இருக்கலாமா?",
      deck: "旅先でそのまま使える、複数敬称型の依頼・命令を中心にします。『してください』『しないでください』『してもいいですか』『してはいけない』を、相手への指示と一般規則に分けて選びます。",
      targets: ["丁寧命令 stem-(u)ṅka", "否定命令 -ādīṅka", "許可 -lāmā?", "一般禁止 kūḍādu"],
      heroExample: {
        id: "15-01",
        ta: "கொஞ்சம் இங்க வாங்க.",
        roman: "koñcam iṅge vāṅka.",
        morph: "koñcam iṅge vā-ṅka.",
        kana: "コンジャム インゲ ヴァーンガ。",
        ja: "ちょっとこちらへ来てください。",
        literal: "少し＋ここへ＋来る・丁寧命令"
      },
      readSections: [
        {
          kicker: "POLITE IMPERATIVE",
          heading: "複数敬称 -ங்க を、旅行の安全な依頼レーンにする",
          paragraphs: [
            "動詞語幹に <strong>-(u)ṅka</strong> を付けると、丁寧な命令・依頼になります。<span class=\"ta-inline\" lang=\"ta\">போங்க</span>『行ってください』、<span class=\"ta-inline\" lang=\"ta\">பாருங்க</span>『見てください』、<span class=\"ta-inline\" lang=\"ta\">சாப்பிடுங்க</span>『食べてください』。語幹の形に応じて u の現れ方が変わるため、活用表では完成形を音で覚えます。",
            "この形は複数の相手にも、敬意を払う一人にも使えます。旅行者が店員、運転手、初対面の相手へ話す基準形として先に固定すると安全です。"
          ],
          formula: { label: "丁寧命令", slots: ["動詞語幹", "(u)ṅka"], note: "pō-ṅka / pāru-ṅka / sāppiḍ-uṅka" }
        },
        {
          kicker: "SOFTEN THE REQUEST",
          heading: "கொஞ்சம் を添え、依頼の圧をやわらげる",
          paragraphs: [
            "<span class=\"ta-inline\" lang=\"ta\">கொஞ்சம்</span> koñcam は本来『少し』ですが、命令の前に置くと日本語の『ちょっと〜してください』に近い軟化表現になります。<span class=\"ta-inline\" lang=\"ta\">கொஞ்சம் இருங்க</span>『少し待って／いてください』は旅先で特に頻出です。",
            "注意したいのが <span class=\"ta-inline\" lang=\"ta\">வாங்க</span>。動詞 <strong>வா vā</strong>『来る』の丁寧命令は vāṅka『来てください』です。一方、<strong>வாங்கு vāṅku</strong>『買う・受け取る』は <span class=\"ta-inline\" lang=\"ta\">வாங்குங்க</span> vāṅkuṅka。音の長さだけでなく末尾まで聞きます。"
          ],
          note: { tone: "pink", title: "வாங்க ≠ வாங்குங்க", body: "vāṅka は『来てください』、vāṅkuṅka は『買って／受け取ってください』。旅行会話で意味が大きく分かれる最小対です。" }
        },
        {
          kicker: "DON'T DO IT",
          heading: "特定の相手への『しないで』は -ஆதீங்க",
          paragraphs: [
            "相手へ丁寧に禁止を伝える形は <strong>V-ā-d-īṅka</strong>。<span class=\"ta-inline\" lang=\"ta\">போகாதீங்க</span>『行かないでください』、<span class=\"ta-inline\" lang=\"ta\">பாக்காதீங்க</span>『見ないでください』です。肯定命令とは別の否定語幹として、一つずつ対で持ちます。",
            "親しい単数相手への短い禁止形もありますが、この章では旅先の安全性を優先し、敬称複数の -ādīṅka だけを産出レーンにします。聞き分けの範囲を広げても、自分が使う形は一つに絞れます。"
          ],
          formula: { label: "丁寧な否定命令", slots: ["否定語幹 V-ā", "d", "īṅka"], note: "pōk-ā-d-īṅka / pākk-ā-d-īṅka" }
        },
        {
          kicker: "PERMISSION VS RULE",
          heading: "自分の許可を尋ねる -லாமா、一般規則を示す கூடாது",
          paragraphs: [
            "『私が〜してもいいですか』は、不定詞側に <strong>-lāmā?</strong> を付けます。<span class=\"ta-inline\" lang=\"ta\">நான் இங்க இருக்கலாமா?</span>『ここにいてもいいですか』。疑問 -ā が最後に加わり、相手へ許可を求めます。",
            "標識や一般規則として『〜してはいけない』と言うなら <strong>V-a-k-kūḍādu</strong>。<span class=\"ta-inline\" lang=\"ta\">இங்க சாப்பிடக்கூடாது</span> は『ここで食べてはいけない』です。特定相手への働きかけ -ādīṅka と、一般的な不可 kūḍādu を分けます。"
          ],
          note: { tone: "blue", title: "相手か、規則か", body: "pōkādīṅka は『あなたは行かないで』。pōkakkūḍādu は『行ってはいけない／行くことは不可』。同じ禁止でも視点が違います。" }
        }
      ],
      formConfig: {
        title: "7動詞の丁寧命令・否定命令",
        intro: "肯定と否定を左右で対にし、語幹の交替を完成形のまま確認します。",
        keys: ["politeImperative", "politeNegativeImperative"],
        labels: { politeImperative: "〜してください", politeNegativeImperative: "〜しないでください" },
        extensionKicker: "REQUEST TOOLKIT",
        extensionTitle: "依頼・許可・禁止を調整する部品",
        modalRows: [
          { label: "ちょっと", ta: "கொஞ்சம்", roman: "koñcam", kana: "コンジャム", ja: "依頼をやわらげる『少し／ちょっと』" },
          { label: "ここにいても？", ta: "இங்க இருக்கலாமா?", roman: "iṅge irukka-lām-ā?", kana: "インゲ イルッカラーマー？", ja: "ここにいてもいいですか" },
          { label: "見ても？", ta: "பாக்கலாமா?", roman: "pākka-lām-ā?", kana: "パーッカラーマー？", ja: "見てもいいですか" },
          { label: "食べてはいけない", ta: "சாப்பிடக்கூடாது", roman: "sāppiḍa-k-kūḍādu", kana: "サーッピダックーダードゥ", ja: "食べることは禁止・不可" },
          { label: "行ってはいけない", ta: "போகக்கூடாது", roman: "pōka-k-kūḍādu", kana: "ポーガックーダードゥ", ja: "行くことは禁止・不可" }
        ]
      },
      examples: [
        { id: "15-01", featured: true, ta: "கொஞ்சம் இங்க வாங்க.", roman: "koñcam iṅge vāṅka.", morph: "koñcam iṅge vā-ṅka.", kana: "コンジャム インゲ ヴァーンガ。", ja: "ちょっとこちらへ来てください。", literal: "少し＋ここへ＋来る・丁寧命令" },
        { id: "15-02", featured: true, ta: "கொஞ்சம் இருங்க.", roman: "koñcam iruṅka.", morph: "koñcam iru-ṅka.", kana: "コンジャム イルンガ。", ja: "少し待って／いてください。", literal: "少し＋いる・丁寧命令" },
        { id: "15-03", featured: true, ta: "இந்தப் புத்தகம் பாருங்க.", roman: "inda puttaham pāruṅka.", morph: "inda puttaham pāru-ṅka.", kana: "インダ プッタガム パールンガ。", ja: "この本を見てください。", literal: "この本＋見る・丁寧命令" },
        { id: "15-04", ta: "தமிழ் படிங்க.", roman: "tamiḻ paḍiṅka.", morph: "tamiḻ paḍi-ṅka.", kana: "タミル パディンガ。", ja: "タミル語を読んで／勉強してください。", literal: "タミル語＋読む・丁寧命令" },
        { id: "15-05", ta: "சாப்பிடுங்க.", roman: "sāppiḍuṅka.", morph: "sāppiḍ-uṅka.", kana: "サーッピドゥンガ。", ja: "食べてください。", literal: "食べる・丁寧命令" },
        { id: "15-06", ta: "தண்ணீர் வாங்குங்க.", roman: "taṇṇīr vāṅkuṅka.", morph: "taṇṇīr vāṅku-ṅka.", kana: "タンニール ヴァーングンガ。", ja: "水を買って／受け取ってください。", literal: "水＋買う・受け取る・丁寧命令" },
        { id: "15-07", ta: "ஹோட்டலுக்கு போங்க.", roman: "hōṭṭalukku pōṅka.", morph: "hōṭṭal-ukku pō-ṅka.", kana: "ホーッタルック ポーンガ。", ja: "ホテルへ行ってください。", literal: "ホテル・へ＋行く・丁寧命令" },
        { id: "15-08", ta: "இங்க வராதீங்க.", roman: "iṅge varādīṅka.", morph: "iṅge var-ā-d-īṅka.", kana: "インゲ ヴァラーディーンガ。", ja: "ここへ来ないでください。", literal: "ここへ＋来る・否定・丁寧命令" },
        { id: "15-09", ta: "அங்க போகாதீங்க.", roman: "aṅge pōkādīṅka.", morph: "aṅge pōk-ā-d-īṅka.", kana: "アンゲ ポーガーディーンガ。", ja: "そこへ行かないでください。", literal: "そこへ＋行く・否定・丁寧命令" },
        { id: "15-10", ta: "இந்தப் படம் பாக்காதீங்க.", roman: "inda paḍam pākkādīṅka.", morph: "inda paḍam pākk-ā-d-īṅka.", kana: "インダ パダム パーッカーディーンガ。", ja: "この映画を見ないでください。", literal: "この映画＋見る・否定・丁寧命令" },
        { id: "15-11", ta: "இந்தப் புத்தகம் படிக்காதீங்க.", roman: "inda puttaham paḍikkādīṅka.", morph: "inda puttaham paḍikk-ā-d-īṅka.", kana: "インダ プッタガム パディッカーディーンガ。", ja: "この本を読まないでください。", literal: "この本＋読む・否定・丁寧命令" },
        { id: "15-12", ta: "இங்க சாப்பிடக்கூடாது.", roman: "iṅge sāppiḍakkūḍādu.", morph: "iṅge sāppiḍa-k-kūḍādu.", kana: "インゲ サーッピダックーダードゥ。", ja: "ここで食べてはいけません。", literal: "ここで＋食べる・不可" },
        { id: "15-13", ta: "அங்க போகக்கூடாது.", roman: "aṅge pōkakkūḍādu.", morph: "aṅge pōka-k-kūḍādu.", kana: "アンゲ ポーガックーダードゥ。", ja: "そこへ行ってはいけません。", literal: "そこへ＋行く・不可" },
        { id: "15-14", ta: "நான் இங்க இருக்கலாமா?", roman: "nāṉ iṅge irukkalāmā?", morph: "nāṉ iṅge irukka-lām-ā?", kana: "ナーン インゲ イルッカラーマー？", ja: "私はここにいてもいいですか。", literal: "私＋ここに＋いる・許可・疑問" },
        { id: "15-15", ta: "நான் இந்தப் படம் பாக்கலாமா?", roman: "nāṉ inda paḍam pākkalāmā?", morph: "nāṉ inda paḍam pākka-lām-ā?", kana: "ナーン インダ パダム パーッカラーマー？", ja: "私はこの映画を見てもいいですか。", literal: "私＋この映画＋見る・許可・疑問" },
        { id: "15-16", ta: "நான் தண்ணீர் வாங்கலாமா?", roman: "nāṉ taṇṇīr vāṅkalāmā?", morph: "nāṉ taṇṇīr vāṅka-lām-ā?", kana: "ナーン タンニール ヴァーンガラーマー？", ja: "私は水を買ってもいいですか。", literal: "私＋水＋買う・許可・疑問" }
      ],
      quiz: [
        { q: "初対面の相手へ『行ってください』は？", options: ["போங்க", "போறீங்க", "போகாதீங்க", "போகலாம்"], answer: 0, feedback: "丁寧命令は語幹 pō- + -ṅka の pōṅka です。", tags: ["正解", "丁寧現在", "否定命令", "提案/許可"] },
        { q: "வாங்க と வாங்குங்க の対比は？", options: ["来てください／買って・受け取ってください", "買います／来ます", "来ないで／買わないで", "来た／買った"], answer: 0, feedback: "vā『来る』の丁寧命令が vāṅka、vāṅku『買う』の丁寧命令が vāṅkuṅka です。", tags: ["正解", "語彙", "否定", "TAM"] },
        { q: "特定の相手へ『ここへ来ないでください』は？", options: ["இங்க வராதீங்க.", "இங்க வர்றீங்க.", "இங்க வாங்க.", "இங்க வரலாம்."], answer: 0, feedback: "丁寧な否定命令 varādīṅka を使います。", tags: ["正解", "丁寧現在", "肯定命令", "許可"] },
        { q: "『私はここにいてもいいですか』は？", options: ["நான் இங்க இருக்கலாமா?", "நான் இங்க இருக்கேன்.", "இங்க இருங்க.", "இங்க இருக்காதீங்க."], answer: 0, feedback: "自分の許可を尋ねるので irukka-lām-ā? です。", tags: ["正解", "陳述", "肯定命令", "否定命令"] },
        { q: "一般規則として『ここで食べてはいけない』は？", options: ["இங்க சாப்பிடக்கூடாது.", "இங்க சாப்பிடாதீங்க.", "இங்க சாப்பிடலாமா?", "இங்க சாப்பிடுங்க."], answer: 0, feedback: "一般的な不可・禁止には sāppiḍa-k-kūḍādu を使います。", tags: ["正解", "相手への禁止", "許可", "肯定命令"] }
      ]
    },

    {
      id: "familiar-we",
      number: 16,
      navTitle: "君／私たちはする",
      title: "近い『君』と、二種類の『私たち』を選ぶ",
      tamilTitle: "நீ …றே · நாம / நாங்க …றோம்",
      deck: "親しい一人への நீ nī と、聞き手を含む நாம nāma、含まない நாங்க nāṅka を加えます。語尾は nī が -ē、二種類の『私たち』はどちらも -ōm。主語代名詞が会話の参加範囲を決めます。",
      targets: ["親称二人称 -ē", "一人称複数 -ōm", "包括 nāma / 除外 nāṅka", "勧誘 -lām"],
      heroExample: {
        id: "16-01",
        ta: "நீ இப்போ போறே. நாம இப்போ போறோம்.",
        roman: "nī ippō pōrē. nāma ippō pōrōm.",
        morph: "nī ippō pō-r-ē. nāma ippō pō-r-ōm.",
        kana: "ニー イッポー ポーレー。ナーマ イッポー ポーローム。",
        ja: "君は今行く。私たちは今行くよ。",
        literal: "君＋今＋行く・現在・親称／私たち・包括＋今＋行く・現在・複数"
      },
      readSections: [
        {
          kicker: "FAMILIAR YOU",
          heading: "நீ + -ē は、距離の近い一人へ使う",
          paragraphs: [
            "親しい単数相手には <span class=\"ta-inline\" lang=\"ta\">நீ</span> <strong>nī</strong> と語尾 <strong>-ē</strong>。<span class=\"ta-inline\" lang=\"ta\">நீ போறே</span>『君は行く』、<span class=\"ta-inline\" lang=\"ta\">நீ வந்தே</span>『君は来た』、<span class=\"ta-inline\" lang=\"ta\">நீ வருவே</span>『君は来るだろう』と、現在・過去・未来の語幹は既習のままです。",
            "nī は家族、親友、子どもなど、社会的距離が近い相手の形です。初対面・店員・年長者には第5章の <span class=\"ta-inline\" lang=\"ta\">நீங்க</span> nīṅka を維持します。文法的に短いからといって、誰にでも安全な形ではありません。"
          ],
          formula: { label: "親称単数", slots: ["நீ nī", "動詞 + TAM", "-ē"], note: "pō-r-ē / vand-ē / varu-v-ē" }
        },
        {
          kicker: "TWO KINDS OF WE",
          heading: "நாம は『あなたも一緒』、நாங்க は『あなた以外の私たち』",
          paragraphs: [
            "タミル語の『私たち』は二つです。<span class=\"ta-inline\" lang=\"ta\">நாம</span> <strong>nāma</strong> は聞き手を含む包括形、<span class=\"ta-inline\" lang=\"ta\">நாங்க</span> <strong>nāṅka</strong> は聞き手を含まない除外形。どちらも動詞語尾は <strong>-ōm</strong> です。",
            "つまり <span class=\"ta-inline\" lang=\"ta\">வர்றோம்</span> varrōm だけでは、聞き手が仲間に入るか分かりません。参加範囲が重要な場面では主語を落とさず、nāma / nāṅka を明示します。"
          ],
          note: { tone: "pink", title: "語尾だけでは区別できない", body: "nāma varrōm も nāṅka varrōm も終端は -ōm。聞き手を含むかどうかは主語代名詞が担います。" }
        },
        {
          kicker: "KEEP THE TENSE STEM",
          heading: "新しく覚えるのは出口だけ。時制の骨格は変えない",
          paragraphs: [
            "『来る』なら nī は <strong>var-r-ē / vand-ē / varu-v-ē</strong>、私たちは <strong>var-r-ōm / vand-ōm / varu-v-ōm</strong>。『読む』の未来では、強変化 -pp- も <span class=\"ta-inline\" lang=\"ta\">படிப்பே</span> / <span class=\"ta-inline\" lang=\"ta\">படிப்போம்</span> の中に残ります。",
            "これまでの原則どおり、過去語幹を動詞ごとに保持し、最後の人称語尾だけを交換します。人称表を丸暗記するより、語幹と出口の二段階で組むほうが誤りを診断できます。"
          ],
          formula: { label: "出口の対比", slots: ["TAM 語幹", "-ē（君）／-ōm（私たち）"], note: "paḍi-pp-ē ↔ paḍi-pp-ōm" }
        },
        {
          kicker: "LET'S",
          heading: "நாம + -லாம் で、聞き手を含む『一緒に〜しよう』を作る",
          paragraphs: [
            "不定詞側に <strong>-lām</strong> を付け、包括主語 nāma と組み合わせると勧誘になります。<span class=\"ta-inline\" lang=\"ta\">நாம போகலாம்</span>『一緒に行こう』、<span class=\"ta-inline\" lang=\"ta\">நாம சாப்பிடலாம்</span>『一緒に食べよう』です。",
            "疑問形 <span class=\"ta-inline\" lang=\"ta\">நாம போகலாமா?</span> は『一緒に行こうか』で、返答は <span class=\"ta-inline\" lang=\"ta\">சரி</span> sari『いいよ』が自然です。除外主語 <span class=\"ta-inline\" lang=\"ta\">நாங்க போகலாமா?</span> なら『私たち（あなた以外）が行ってもいいですか』という許可の読みになり、参加範囲の差が発話行為まで変えます。"
          ],
          note: { tone: "blue", title: "同じ pōkalāmā?、違う会話", body: "nāma pōkalāmā? は共同提案。nāṅka pōkalāmā? は聞き手に許可を求める質問。主語を必ず聞きます。" }
        }
      ],
      formConfig: {
        title: "7動詞の親称単数・一人称複数・勧誘",
        intro: "時制語幹を横断し、親称 -ē と複数 -ōm を比較します。最後に人称を持たない -lām の勧誘形を加えます。",
        keys: ["familiarPresent", "familiarPast", "familiarFuture", "firstPluralPresent", "firstPluralPast", "firstPluralFuture", "hortative"],
        labels: { familiarPresent: "君・現在", familiarPast: "君・過去", familiarFuture: "君・未来", firstPluralPresent: "私たち・現在", firstPluralPast: "私たち・過去", firstPluralFuture: "私たち・未来", hortative: "〜しよう／してもよい" },
        extensionKicker: "PARTICIPANT MAP",
        extensionTitle: "誰を会話の輪へ入れるか",
        modalRows: [
          { label: "親しい君", ta: "நீ", roman: "nī", kana: "ニー", ja: "親しい単数の聞き手" },
          { label: "私たち・包括", ta: "நாம", roman: "nāma", kana: "ナーマ", ja: "話し手＋聞き手を含む私たち" },
          { label: "私たち・除外", ta: "நாங்க", roman: "nāṅka", kana: "ナーンガ", ja: "話し手側だけ。聞き手を含まない" },
          { label: "一緒に行こうか", ta: "நாம போகலாமா?", roman: "nāma pōka-lām-ā?", kana: "ナーマ ポーガラーマー？", ja: "共同提案。返答は சரி『いいよ』" },
          { label: "私たちが行っても？", ta: "நாங்க போகலாமா?", roman: "nāṅka pōka-lām-ā?", kana: "ナーンガ ポーガラーマー？", ja: "聞き手を除く集団への許可。返答は ஆமா『はい』" },
          { label: "いいよ", ta: "சரி", roman: "sari", kana: "サリ", ja: "提案への同意・了解" },
          { label: "はい", ta: "ஆமா", roman: "āmā", kana: "アーマー", ja: "極性質問への肯定" }
        ]
      },
      examples: [
        { id: "16-01", featured: true, ta: "நீ இப்போ போறே. நாம இப்போ போறோம்.", roman: "nī ippō pōrē. nāma ippō pōrōm.", morph: "nī ippō pō-r-ē. nāma ippō pō-r-ōm.", kana: "ニー イッポー ポーレー。ナーマ イッポー ポーローム。", ja: "君は今行く。私たちは今行くよ。", literal: "君＋今＋行く・現在・親称／私たち・包括＋今＋行く・現在・複数" },
        { id: "16-02", featured: true, ta: "நாம இப்போ போறோம்.", roman: "nāma ippō pōrōm.", morph: "nāma ippō pō-r-ōm.", kana: "ナーマ イッポー ポーローム。", ja: "私たちは今行きます（あなたも一緒です）。", literal: "私たち・包括＋今＋行く・現在・複数" },
        { id: "16-03", featured: true, ta: "நாங்க நாளைக்கு வருவோம்.", roman: "nāṅka nāḷaikki varuvōm.", morph: "nāṅka nāḷaikki varu-v-ōm.", kana: "ナーンガ ナーレッキ ヴァルヴォーム。", ja: "私たちは明日来ます（あなたは含みません）。", literal: "私たち・除外＋明日＋来る・未来・複数" },
        { id: "16-04", ta: "நீ நேத்து வந்தே.", roman: "nī nēttu vandē.", morph: "nī nēttu vand-ē.", kana: "ニー ネーットゥ ヴァンデー。", ja: "君は昨日来たね。", literal: "君＋昨日＋来る・過去・親称" },
        { id: "16-05", ta: "நீ நாளைக்கு வருவே.", roman: "nī nāḷaikki varuvē.", morph: "nī nāḷaikki varu-v-ē.", kana: "ニー ナーレッキ ヴァルヴェー。", ja: "君は明日来るよ。", literal: "君＋明日＋来る・未来・親称" },
        { id: "16-06", ta: "நீ இட்லி சாப்பிடறே.", roman: "nī iṭli sāppiḍarē.", morph: "nī iṭli sāppiḍ-r-ē.", kana: "ニー イドリ サーッピダレー。", ja: "君はイドリを食べる。", literal: "君＋イドリ＋食べる・現在・親称" },
        { id: "16-07", ta: "நீ தமிழ் படிக்கறே.", roman: "nī tamiḻ paḍikkarē.", morph: "nī tamiḻ paḍi-kk-r-ē.", kana: "ニー タミル パディッカレー。", ja: "君はタミル語を勉強している。", literal: "君＋タミル語＋勉強する・現在・親称" },
        { id: "16-08", ta: "நாம நாளைக்கு வருவோம்.", roman: "nāma nāḷaikki varuvōm.", morph: "nāma nāḷaikki varu-v-ōm.", kana: "ナーマ ナーレッキ ヴァルヴォーム。", ja: "私たちは明日来ます（あなたも一緒です）。", literal: "私たち・包括＋明日＋来る・未来・複数" },
        { id: "16-09", ta: "நாங்க நேத்து வந்தோம்.", roman: "nāṅka nēttu vandōm.", morph: "nāṅka nēttu vand-ōm.", kana: "ナーンガ ネーットゥ ヴァンドーム。", ja: "私たちは昨日来ました（あなたは含みません）。", literal: "私たち・除外＋昨日＋来る・過去・複数" },
        { id: "16-10", ta: "நாங்க ஹோட்டல்ல இருக்கோம்.", roman: "nāṅka hōṭṭalle irukkōm.", morph: "nāṅka hōṭṭal-le iru-kk-ōm.", kana: "ナーンガ ホーッタッラ イルッコーム。", ja: "私たちはホテルにいます（あなたは含みません）。", literal: "私たち・除外＋ホテル・で＋いる・現在・複数" },
        { id: "16-11", ta: "நாம சாப்பிடலாம்.", roman: "nāma sāppiḍalām.", morph: "nāma sāppiḍa-lām.", kana: "ナーマ サーッピダラーム。", ja: "一緒に食べましょう。", literal: "私たち・包括＋食べる・勧誘" },
        { id: "16-12", ta: "நாம படம் பாக்கலாம்.", roman: "nāma paḍam pākkalām.", morph: "nāma paḍam pākka-lām.", kana: "ナーマ パダム パーッカラーム。", ja: "一緒に映画を見ましょう。", literal: "私たち・包括＋映画＋見る・勧誘" },
        { id: "16-13", ta: "நாம தண்ணீர் வாங்கலாம்.", roman: "nāma taṇṇīr vāṅkalām.", morph: "nāma taṇṇīr vāṅka-lām.", kana: "ナーマ タンニール ヴァーンガラーム。", ja: "一緒に水を買いましょう。", literal: "私たち・包括＋水＋買う・勧誘" },
        { id: "16-14", ta: "நாம எங்க போறோம்?", roman: "nāma eṅge pōrōm?", morph: "nāma eṅge pō-r-ōm?", kana: "ナーマ イェンゲ ポーローム？", ja: "私たちはどこへ行きますか（あなたも一緒です）。", literal: "私たち・包括＋どこ＋行く・現在・複数" },
        { id: "16-15", ta: "நாங்க ஜப்பான்ல இருந்து வர்றோம்.", roman: "nāṅka jappāṉle irundu varrōm.", morph: "nāṅka jappāṉ-le irundu var-r-ōm.", kana: "ナーンガ ジャッパーンラ イルンドゥ ヴァッローム。", ja: "私たちは日本から来ています（あなたは含みません）。", literal: "私たち・除外＋日本・から＋来る・現在・複数" },
        { id: "16-16", ta: "நாம போகலாமா? — சரி, போகலாம்.", roman: "nāma pōkalāmā? — sari, pōkalām.", morph: "nāma pōka-lām-ā? — sari, pōka-lām.", kana: "ナーマ ポーガラーマー？— サリ、ポーガラーム。", ja: "一緒に行きましょうか。— いいよ、行きましょう。", literal: "私たち・包括＋行く・勧誘・疑問／了解＋行く・勧誘" }
      ],
      quiz: [
        { q: "親しい一人へ『君は来るよ』は？", options: ["நீ வர்றே.", "நீங்க வர்றீங்க.", "நாம வர்றோம்.", "அவன் வர்றான்."], answer: 0, feedback: "親称 nī には現在語幹 var-r- と語尾 -ē を使います。", tags: ["正解", "丁寧二人称", "一人称複数", "三人称男性"] },
        { q: "聞き手を含む『私たち』は？", options: ["நாம", "நாங்க", "நீங்க", "அவங்க"], answer: 0, feedback: "nāma が包括形で、話し手と聞き手を同じ輪に入れます。", tags: ["正解", "除外", "二人称", "三人称複数"] },
        { q: "நாம と நாங்க の動詞語尾について正しいのは？", options: ["どちらも -ōm", "நாம だけ -ēn", "நாங்க だけ -īṅka", "どちらも -āṅka"], answer: 0, feedback: "包括・除外の差は主語にあり、動詞はどちらも一人称複数 -ōm です。", tags: ["正解", "一人称単数", "二人称", "三人称複数"] },
        { q: "聞き手も含めて『一緒に食べよう』は？", options: ["நாம சாப்பிடலாம்.", "நாங்க சாப்பிடுவோம்.", "நீ சாப்பிடறே.", "சாப்பிடுங்க."], answer: 0, feedback: "包括 nāma と hortative sāppiḍalām で共同提案になります。", tags: ["正解", "除外未来", "親称現在", "丁寧命令"] },
        { q: "நாங்க போகலாமா? の中心的な読みは？", options: ["私たち（あなた以外）が行ってもいいですか", "一緒に行こうか", "君は行くか", "彼らは行ったか"], answer: 0, feedback: "除外主語 nāṅka なので、聞き手を含まない集団の行動への許可質問になります。", tags: ["正解", "包括勧誘", "二人称", "三人称過去"] }
      ]
    },

    {
      id: "quotation-thought",
      number: 17,
      navTitle: "〜って言った・思った",
      title: "一つの文を包み、発話・思考・意図として運ぶ",
      tamilTitle: "…ன்னு சொன்னேன் · நினைக்கறேன் · இருக்கேன்",
      deck: "完成した文の後ろに引用標識 -nnu を置けば、その文を『〜と言う』『〜と思う』『〜と尋ねる』の中へ運べます。問いの形も未来の形も保ったまま包み、意図と伝聞へ広げます。",
      targets: ["引用・埋込み -nnu", "発話と思考", "埋込み疑問", "意図 -lām-nnu", "伝聞 -ām"],
      heroExample: {
        id: "17-01",
        ta: "நான் நாளைக்கு போவேன்னு சொன்னேன்.",
        roman: "nāṉ nāḷaikki pōvēnnu soṉṉēn.",
        morph: "nāṉ nāḷaikki pō-v-ēn-nu soṉ-n-ēn.",
        kana: "ナーン ナーレッキ ポーヴェーンヌ ソンネーン。",
        ja: "私は明日行くと言いました。",
        literal: "私＋明日＋行く・未来・私・引用＋言う・過去・私"
      },
      readSections: [
        {
          kicker: "WRAP A WHOLE SENTENCE",
          heading: "完成した文の後ろへ -ன்னு を置き、一つの内容にする",
          paragraphs: [
            "<span class=\"ta-inline\" lang=\"ta\">நான் நாளைக்கு போவேன்</span>『私は明日行く』は、それだけで完成した文です。最後に <strong>-nnu</strong> を付けて <span class=\"ta-inline\" lang=\"ta\">நான் நாளைக்கு போவேன்னு</span> とすると、文全体が『私は明日行く、と』という引用内容になります。その後ろへ <span class=\"ta-inline\" lang=\"ta\">சொன்னேன்</span> soṉṉēn『言った』を置けば、発話を含む一文が完成します。",
            "-nnu は独立した日本語の引用符ではなく、もとは『言う』に関わる形が文法化した埋込み標識です。引用範囲の最後に一度だけ置き、その後ろの சொல் sollu『言う』、கேள் kēḷu『尋ねる／聞く』、நினை niṉai『思う』などへ内容を渡します。"
          ],
          formula: { label: "引用の列", slots: ["完成文 S", "-nnu", "sollu / kēḷu / niṉai + TAM + PNG"], note: "nāḷaikki pō-v-ēn-nu soṉ-n-ēn" }
        },
        {
          kicker: "KEEP TENSE AND VIEWPOINT",
          heading: "外側が過去でも、引用内の時制をそのまま保つ",
          paragraphs: [
            "タミル語では、外側が過去の <span class=\"ta-inline\" lang=\"ta\">சொன்னேன்</span> でも、引用内の未来 <span class=\"ta-inline\" lang=\"ta\">போவேன்</span> は未来のままです。外側の時制へ機械的に合わせません。引用内容をまず独立文として作り、それを -nnu で包みます。",
            "直接話法と間接話法では、誰の視点で代名詞・人称語尾を選ぶかが変わりえます。<span class=\"ta-inline\" lang=\"ta\">ரவி நாளைக்கு வருவான்னு சொன்னான்</span> は『ラヴィは、ラヴィ自身が明日来ると言った』という三人称の間接的な包み方。発話そのものを再現するなら、引用内を nāṉ + -ēn にできます。"
          ],
          note: { tone: "pink", title: "外側の過去へ引っぱられない", body: "『言った』が過去でも、引用内で未来なら pōvēn / varuvāṉ のまま。まず引用内容を独立文として正しく作ります。" }
        },
        {
          kicker: "QUESTIONS INSIDE SENTENCES",
          heading: "問いも形を崩さず、そのまま -nnu の前へ置く",
          paragraphs: [
            "極性疑問なら <span class=\"ta-inline\" lang=\"ta\">அவரு வருவாரா?</span>『あの方は来ますか』の -ā を残し、<span class=\"ta-inline\" lang=\"ta\">அவரு வருவாரான்னு கேட்டேன்</span>『あの方が来るか尋ねた』と包みます。内容疑問も <span class=\"ta-inline\" lang=\"ta\">அவங்க எங்க போறாங்கன்னு கேட்டேன்</span> のように、eṅge を答え位置に残します。",
            "<span class=\"ta-inline\" lang=\"ta\">தெரியல</span> teriyala『分からない』を後ろへ置けば、埋込み疑問は旅行会話の強い道具になります。<span class=\"ta-inline\" lang=\"ta\">அவரு எப்போ வருவாருன்னு தெரியல</span>『あの方がいつ来るか分かりません』のように、知らない内容を丸ごと示せます。"
          ],
          formula: { label: "埋込み疑問", slots: ["極性疑問 -ā / 内容疑問詞", "-nnu", "kēḷu / teriyala"], note: "varu-v-ār-ā-nnu kēṭṭ-ēn" }
        },
        {
          kicker: "INTENT & REPORT",
          heading: "-lām-nnu で意図、文末 -ām で情報源を一歩遠ざける",
          paragraphs: [
            "意図は <strong>V-a-lām + -nnu + iru / niṉai</strong> で表せます。<span class=\"ta-inline\" lang=\"ta\">நான் நாளைக்கு போகலாம்னு இருக்கேன்</span> は『明日行こうと思っている／行くつもりだ』。第16章の -lām を引用内容にし、最後の irukkēn が現在・一人称を担います。",
            "一方、文末の <strong>-ām</strong> は伝聞標識です。<span class=\"ta-inline\" lang=\"ta\">அந்த ஐயா நாளைக்கு வருவாராம்</span> は『あの方は明日来るそうです』で、話し手が情報の真偽を直接保証せず報告します。引用 -nnu と伝聞 -ām は形も役割も別なので、同じ『〜だそうだ』という日本語だけで混ぜません。"
          ],
          note: { tone: "blue", title: "nnu と ām の出口", body: "-nnu は後ろの『言う・思う・尋ねる』へ内容を渡します。-ām は文末で『〜だそうだ／らしい』と情報源を遠ざけます。" }
        }
      ],
      formConfig: {
        title: "7動詞を引用・意図・伝聞へ包む",
        intro: "一人称の三時制を -nnu で包む列、-lām-nnu irukkēn の意図列、敬称人物未来＋-ām の伝聞列を比較します。",
        keys: ["quotePresent", "quotePast", "quoteFuture", "intent", "reportive"],
        labels: { quotePresent: "現在『〜と』", quotePast: "過去『〜と』", quoteFuture: "未来『〜と』", intent: "〜するつもり", reportive: "〜するそうだ" },
        extensionKicker: "QUOTE VERBS",
        extensionTitle: "引用内容を受け取る六つの出口",
        modalRows: [
          { label: "言う・現在", ta: "சொல்றேன்", roman: "sol-r-ēn", kana: "ソッレーン", ja: "私は言います" },
          { label: "言う・過去", ta: "சொன்னேன்", roman: "soṉ-n-ēn", kana: "ソンネーン", ja: "私は言いました" },
          { label: "思う・現在", ta: "நினைக்கறேன்", roman: "niṉai-kk-r-ēn", kana: "ニネッカレーン", ja: "私は思います" },
          { label: "思う・過去", ta: "நினைச்சேன்", roman: "niṉai-cc-ēn", kana: "ニネッチェーン", ja: "私は思いました" },
          { label: "尋ねる・過去", ta: "கேட்டேன்", roman: "kēṭṭ-ēn", kana: "ケーッテーン", ja: "私は尋ねました／聞きました" },
          { label: "分からない", ta: "தெரியல", roman: "teriya-la", kana: "テリヤラ", ja: "分かりません・知りません" }
        ]
      },
      examples: [
        { id: "17-01", featured: true, ta: "நான் நாளைக்கு போவேன்னு சொன்னேன்.", roman: "nāṉ nāḷaikki pōvēnnu soṉṉēn.", morph: "nāṉ nāḷaikki pō-v-ēn-nu soṉ-n-ēn.", kana: "ナーン ナーレッキ ポーヴェーンヌ ソンネーン。", ja: "私は明日行くと言いました。", literal: "私＋明日＋行く・未来・私・引用＋言う・過去・私" },
        { id: "17-02", featured: true, ta: "நான் இப்போ வர்றேன்னு சொன்னேன்.", roman: "nāṉ ippō varrēnnu soṉṉēn.", morph: "nāṉ ippō var-r-ēn-nu soṉ-n-ēn.", kana: "ナーン イッポー ヴァッレーンヌ ソンネーン。", ja: "私は今向かっていると言いました。", literal: "私＋今＋来る・現在・私・引用＋言う・過去・私" },
        { id: "17-03", featured: true, ta: "நான் ஏற்கனவே சாப்பிட்டேன்னு சொன்னேன்.", roman: "nāṉ ērkaṉavē sāppiṭṭēnnu soṉṉēn.", morph: "nāṉ ērkaṉavē sāppiṭṭ-ēn-nu soṉ-n-ēn.", kana: "ナーン イェールカナヴェー サーッピッテーンヌ ソンネーン。", ja: "私はもう食べたと言いました。", literal: "私＋すでに＋食べた・私・引用＋言う・過去・私" },
        { id: "17-04", ta: "ரவி நாளைக்கு வருவான்னு சொன்னான்.", roman: "ravi nāḷaikki varuvāṉṉu soṉṉāṉ.", morph: "ravi nāḷaikki varu-v-āṉ-nu soṉ-n-āṉ.", kana: "ラヴィ ナーレッキ ヴァルヴァーンヌ ソンナーン。", ja: "ラヴィは、自分が明日来ると言いました。", literal: "ラヴィ＋明日＋来る・未来・男性・引用＋言う・過去・男性" },
        { id: "17-05", ta: "மீனா படம் நல்லா இருக்கும்னு நினைச்சா.", roman: "mīṉā paḍam nallā irukkumnu niṉaiccā.", morph: "mīṉā paḍam nallā iru-kk-um-nu niṉai-cc-ā.", kana: "ミーナー パダム ナッラー イルックムンヌ ニネッチャー。", ja: "ミーナーは、その映画は良いだろうと思いました。", literal: "ミーナー＋映画＋良く＋ある・中性未来・引用＋思う・過去・女性" },
        { id: "17-06", ta: "நான் இந்தப் புத்தகம் நல்லா இருக்கும்னு நினைக்கறேன்.", roman: "nāṉ inda puttaham nallā irukkumnu niṉaikkarēn.", morph: "nāṉ inda puttaham nallā iru-kk-um-nu niṉai-kk-r-ēn.", kana: "ナーン インダ プッタガム ナッラー イルックムンヌ ニネッカレーン。", ja: "私は、この本は良いだろうと思います。", literal: "私＋この本＋良く＋ある・中性未来・引用＋思う・現在・私" },
        { id: "17-07", ta: "அவங்க ஹோட்டல்ல இருக்காங்கன்னு சொன்னாங்க.", roman: "avaṅka hōṭṭalle irukkāṅkaṉṉu soṉṉāṅka.", morph: "avaṅka hōṭṭal-le iru-kk-āṅka-nnu soṉ-n-āṅka.", kana: "アヴァンガ ホーッタッラ イルッカーンガンヌ ソンナーンガ。", ja: "彼らは、ホテルにいると言いました。", literal: "彼ら＋ホテル・で＋いる・複数・引用＋言う・過去・複数" },
        { id: "17-08", ta: "அவங்க அந்த ஐயா நாளைக்கு வருவாருன்னு சொன்னாங்க.", roman: "avaṅka anda aiyā nāḷaikki varuvāruṉṉu soṉṉāṅka.", morph: "avaṅka anda aiyā nāḷaikki varu-v-āru-nnu soṉ-n-āṅka.", kana: "アヴァンガ アンダ アイイヤー ナーレッキ ヴァルヴァールンヌ ソンナーンガ。", ja: "彼らは、あの男性が明日来ると言いました。", literal: "彼ら＋あの男性・敬称＋明日＋来る・未来・敬称・引用＋言う・過去・複数" },
        { id: "17-09", ta: "அவரு வருவாரான்னு கேட்டேன்.", roman: "avaru varuvārāṉṉu kēṭṭēn.", morph: "avaru varu-v-ār-ā-nnu kēṭṭ-ēn.", kana: "アヴァル ヴァルヴァーラーンヌ ケーッテーン。", ja: "私は、あの方が来るか尋ねました。", literal: "あの方＋来る・未来・敬称・疑問・引用＋尋ねる・過去・私" },
        { id: "17-10", ta: "அவங்க எங்க போறாங்கன்னு கேட்டேன்.", roman: "avaṅka eṅge pōrāṅkaṉṉu kēṭṭēn.", morph: "avaṅka eṅge pō-r-āṅka-nnu kēṭṭ-ēn.", kana: "アヴァンガ イェンゲ ポーラーンガンヌ ケーッテーン。", ja: "私は、彼らがどこへ行くのか尋ねました。", literal: "彼ら＋どこ＋行く・複数・引用＋尋ねる・過去・私" },
        { id: "17-11", ta: "அவரு எப்போ வருவாருன்னு தெரியல.", roman: "avaru eppō varuvāruṉṉu teriyala.", morph: "avaru eppō varu-v-āru-nnu teriya-la.", kana: "アヴァル イェッポー ヴァルヴァールンヌ テリヤラ。", ja: "あの方がいつ来るのか分かりません。", literal: "あの方＋いつ＋来る・未来・敬称・引用＋分からない" },
        { id: "17-12", ta: "நான் நாளைக்கு போகலாம்னு இருக்கேன்.", roman: "nāṉ nāḷaikki pōkalāmnu irukkēn.", morph: "nāṉ nāḷaikki pōka-lām-nnu iru-kk-ēn.", kana: "ナーン ナーレッキ ポーガラームンヌ イルッケーン。", ja: "私は明日行くつもりです。", literal: "私＋明日＋行く・意図・引用＋いる・現在・私" },
        { id: "17-13", ta: "நாங்க சென்னைக்கு வரலாம்னு இருக்கோம்.", roman: "nāṅka ceṉṉaikku varalāmnu irukkōm.", morph: "nāṅka ceṉṉai-kku vara-lām-nnu iru-kk-ōm.", kana: "ナーンガ チェンネック ヴァララームンヌ イルッコーム。", ja: "私たちはチェンナイへ来る予定です（聞き手は含みません）。", literal: "私たち・除外＋チェンナイ・へ＋来る・意図・引用＋いる・現在・複数" },
        { id: "17-14", ta: "நாம இங்க சாப்பிடலாம்னு நினைக்கறேன்.", roman: "nāma iṅge sāppiḍalāmnu niṉaikkarēn.", morph: "nāma iṅge sāppiḍa-lām-nnu niṉai-kk-r-ēn.", kana: "ナーマ インゲ サーッピダラームンヌ ニネッカレーン。", ja: "ここで一緒に食べようと思います。", literal: "私たち・包括＋ここで＋食べる・勧誘・引用＋思う・現在・私" },
        { id: "17-15", ta: "அந்த ஐயா நாளைக்கு வருவாராம்.", roman: "anda aiyā nāḷaikki varuvārām.", morph: "anda aiyā nāḷaikki varu-v-ār-ām.", kana: "アンダ アイイヤー ナーレッキ ヴァルヴァーラーム。", ja: "あの男性は明日来るそうです。", literal: "あの男性・敬称＋明日＋来る・未来・敬称・伝聞" },
        { id: "17-16", ta: "ரயில் நாளைக்கு வருமாம்.", roman: "rayil nāḷaikki varumām.", morph: "rayil nāḷaikki var-um-ām.", kana: "ライル ナーレッキ ヴァルマーム。", ja: "列車は明日来るそうです。", literal: "列車＋明日＋来る・中性未来・伝聞" }
      ],
      quiz: [
        { q: "『私は明日行くと言いました』は？", options: ["நான் நாளைக்கு போவேன்னு சொன்னேன்.", "நான் நாளைக்கு போவேன்.", "நான் நாளைக்கு போவாராம்.", "நான் நாளைக்கு போனா."], answer: 0, feedback: "独立文 pōvēn を -nnu で包み、外側を soṉṉēn で閉じます。", tags: ["正解", "引用なし", "伝聞", "条件"] },
        { q: "外側が சொன்னேன்『言った』のとき、引用内の未来は？", options: ["未来形のまま保つ", "必ず過去形にする", "必ず現在形にする", "人称語尾を消す"], answer: 0, feedback: "外側の過去へ機械的に合わせず、引用内容の未来を保ちます。", tags: ["正解", "TAM", "TAM", "PNG"] },
        { q: "『あの方が来るか尋ねた』で、疑問 -ā はどこに残る？", options: ["-nnu の直前", "外側の கேட்டேன் の後", "主語の後", "消える"], answer: 0, feedback: "varuvārā-nnu のように、埋め込む問いの疑問標識を保ってから -nnu を付けます。", tags: ["正解", "疑問", "語順", "過剰削除"] },
        { q: "『明日行くつもりです』の意図構文は？", options: ["போகலாம்னு இருக்கேன்", "போவேன்னு சொன்னேன்", "போவாராம்", "போனாலும்"], answer: 0, feedback: "V-a-lām + -nnu + iru で意図を表し、最後の irukkēn がPNGを担います。", tags: ["正解", "引用発話", "伝聞", "譲歩"] },
        { q: "文末 -ām の வருவாராம் が示すものは？", options: ["伝聞・報告", "直接命令", "条件", "一人称引用"], answer: 0, feedback: "-ām は『来るそうだ／らしい』と、情報を報告として示します。", tags: ["正解", "命令", "条件", "引用"] }
      ]
    },

    {
      id: "conditions-relatives",
      number: 18,
      navTitle: "〜なら・〜でも・〜ので",
      title: "二つの出来事を結び、名詞の前まで文を伸ばす",
      tamilTitle: "வந்தா · வந்தாலும் · வர்றதுனால · வந்த ஹோட்டல்",
      deck: "過去語幹から人称を外して『もし〜なら』を作り、-um で『たとえ〜でも』へ広げます。さらに動詞を名詞化して理由を示し、連体形を名詞の前へ置いて『私が見た映画』まで一息で作ります。",
      targets: ["条件 past stem + -ā", "譲歩 -ālum", "理由 V-r-ad-u-nāle", "現在・過去連体形", "前置型の関係節"],
      heroExample: {
        id: "18-01",
        ta: "அவரு வந்தா, நான் போவேன்.",
        roman: "avaru vandā, nāṉ pōvēn.",
        morph: "avaru vand-ā, nāṉ pō-v-ēn.",
        kana: "アヴァル ヴァンダー、ナーン ポーヴェーン。",
        ja: "あの方が来たら、私は行きます。",
        literal: "あの方＋来る・条件／私＋行く・未来・私"
      },
      readSections: [
        {
          kicker: "IF: PAST STEM + -Ā",
          heading: "条件形は過去語幹を使うが、過去にも人称にも決まらない",
          paragraphs: [
            "『もし〜なら／〜したら』は、動詞の<strong>過去語幹</strong>へ <strong>-ā(l)</strong> を付けます。口語の文末では l が現れず、<span class=\"ta-inline\" lang=\"ta\">வந்தா</span> vandā、<span class=\"ta-inline\" lang=\"ta\">போனா</span> pōnā、<span class=\"ta-inline\" lang=\"ta\">பாத்தா</span> pāttā のように聞こえます。",
            "材料は過去語幹ですが、条件形そのものは時制とPNGを中和します。<span class=\"ta-inline\" lang=\"ta\">நீங்க சாப்பிட்டா</span> でも、丁寧二人称 -īṅka は付けません。いつの、誰の条件かは主語・時間語と後続節が決めます。"
          ],
          formula: { label: "条件の列", slots: ["過去語幹", "-ā(l)", "結果節 TAM + PNG"], note: "vand-ā, nāṉ pō-v-ēn" }
        },
        {
          kicker: "EVEN IF: -ĀL + -UM",
          heading: "条件の潜在的な -l を戻し、-um を足して『たとえ〜でも』",
          paragraphs: [
            "条件標識の完全形 -āl に <strong>-um</strong> を加えると譲歩形になります。<span class=\"ta-inline\" lang=\"ta\">வந்தாலும்</span> vandālum『たとえ来ても』、<span class=\"ta-inline\" lang=\"ta\">போனாலும்</span> pōnālum『どこへ行っても』です。単独条件では見えなかった l が、後続の -um の前で現れます。",
            "疑問詞と組み合わせれば範囲を広げられます。<span class=\"ta-inline\" lang=\"ta\">யாரு வந்தாலும்</span>『誰が来ても』、<span class=\"ta-inline\" lang=\"ta\">எங்க போனாலும்</span>『どこへ行っても』。第7章の疑問詞が、譲歩形によって『誰でも／どこでも』へ変わります。"
          ],
          note: { tone: "blue", title: "-ā と -ālum は同じ家族", body: "vandā は『来たら』、vandālum は『来ても』。過去語幹 vand- を保ち、-um の有無で条件／譲歩を分けます。" }
        },
        {
          kicker: "BECAUSE: VERBAL NOUN + -NĀLE",
          heading: "出来事を『〜すること』にし、理由の格を付ける",
          paragraphs: [
            "理由の一つの作り方は、現在連体形に中性名詞化 <strong>-adu</strong> を付け、さらに原因・手段を表す <strong>-nāle</strong> を続けることです。<span class=\"ta-inline\" lang=\"ta\">வர்றதுனால</span> は <strong>var-r-ad-u-nāle</strong>『来ることによって／来るので』。口語では一続きに縮まって聞こえます。",
            "<span class=\"ta-inline\" lang=\"ta\">ஹோட்டல் நல்லா இருக்கறதுனால, நாங்க இங்க இருக்கோம்</span>『ホテルが良いので、私たちはここにいます』のように、理由節を結果節の前へ置きます。会話を二文に分けるなら <span class=\"ta-inline\" lang=\"ta\">ஏன்னா</span>『なぜなら』、<span class=\"ta-inline\" lang=\"ta\">அதனால</span>『だから』も使えます。"
          ],
          formula: { label: "理由の列", slots: ["現在連体形 V-r-a", "-adu", "-nāle"], note: "iru-kk-r-ad-u-nāle『いる／あるので』" }
        },
        {
          kicker: "RELATIVE CLAUSES BEFORE NOUNS",
          heading: "『〜する／した名詞』は、説明を名詞の前へ置く",
          paragraphs: [
            "現在連体形は現在語幹＋<strong>-a</strong>、過去連体形は過去語幹＋<strong>-a</strong>。<span class=\"ta-inline\" lang=\"ta\">அங்க இருக்கற ஹோட்டல்</span>『そこにあるホテル』、<span class=\"ta-inline\" lang=\"ta\">நான் பாத்த படம்</span>『私が見た映画』のように、日本語と同じく説明する節を名詞の<strong>前</strong>へ置きます。独立した関係代名詞は要りません。",
            "連体形にもPNGはありません。主語が nāṉ でも avaṅka でも、形は pātta / varra のままです。長い文を読むときは、まず最後の名詞を見つけ、その直前の連体形までを『その名詞を説明する箱』として左へ戻ります。これで本教材の述語エンジンは、独立文から名詞内部まで伸びます。"
          ],
          note: { tone: "pink", title: "வந்தா と வந்த は一音違い", body: "vandā は条件『来たら』、vanda は過去連体『来た〜』。長母音 -ā と短い -a を、後ろに名詞があるかどうかと一緒に聞き分けます。" }
        }
      ],
      formConfig: {
        title: "7動詞の条件・譲歩・連体・理由",
        intro: "同じ過去語幹から条件 -ā、譲歩 -ālum、過去連体 -a を作り、現在連体と理由形を並べます。",
        keys: ["conditional", "concessive", "relativePresent", "relativePast", "reasonForm"],
        labels: { conditional: "もし〜なら", concessive: "たとえ〜でも", relativePresent: "〜する名詞", relativePast: "〜した名詞", reasonForm: "〜するので" },
        extensionKicker: "CLAUSE CONNECTORS",
        extensionTitle: "否定条件・疑問詞・理由の実用部品",
        modalRows: [
          { label: "来ないなら", ta: "வரலன்னா", roman: "vara-la-nnā", kana: "ヴァラランナー", ja: "来ないなら・来なかったら" },
          { label: "要らないなら", ta: "வேண்டாம்னா", roman: "vēṇḍām-nnā", kana: "ヴェーンダームンナー", ja: "要らない／望まないなら" },
          { label: "誰が来ても", ta: "யாரு வந்தாலும்", roman: "yāru vand-āl-um", kana: "ヤール ヴァンダールム", ja: "誰が来ても・誰でも" },
          { label: "どこへ行っても", ta: "எங்க போனாலும்", roman: "eṅge pō-n-āl-um", kana: "イェンゲ ポーナールム", ja: "どこへ行っても" },
          { label: "なぜなら", ta: "ஏன்னா", roman: "ēṉṉā", kana: "イェーンナー", ja: "なぜなら・というのは" },
          { label: "だから", ta: "அதனால", roman: "adaṉāle", kana: "アダナーレ", ja: "そのため・だから" }
        ]
      },
      examples: [
        { id: "18-01", featured: true, ta: "அவரு வந்தா, நான் போவேன்.", roman: "avaru vandā, nāṉ pōvēn.", morph: "avaru vand-ā, nāṉ pō-v-ēn.", kana: "アヴァル ヴァンダー、ナーン ポーヴェーン。", ja: "あの方が来たら、私は行きます。", literal: "あの方＋来る・条件／私＋行く・未来・私" },
        { id: "18-02", featured: true, ta: "பஸ் வந்தா, நான் ஹோட்டலுக்கு போவேன்.", roman: "pas vandā, nāṉ hōṭṭalukku pōvēn.", morph: "pas vand-ā, nāṉ hōṭṭal-ukku pō-v-ēn.", kana: "パス ヴァンダー、ナーン ホーッタルック ポーヴェーン。", ja: "バスが来たら、私はホテルへ行きます。", literal: "バス＋来る・条件／私＋ホテル・へ＋行く・未来・私" },
        { id: "18-03", featured: true, ta: "நீங்க சாப்பிட்டா, நாம போகலாம்.", roman: "nīṅka sāppiṭṭā, nāma pōkalām.", morph: "nīṅka sāppiṭṭ-ā, nāma pōka-lām.", kana: "ニーンガ サーッピッター、ナーマ ポーガラーム。", ja: "あなたが食べたら、一緒に行きましょう。", literal: "あなた・丁寧＋食べる・条件／私たち・包括＋行く・勧誘" },
        { id: "18-04", ta: "நீங்க புத்தகம் வாங்கினா, நான் படிப்பேன்.", roman: "nīṅka puttaham vāṅkiṉā, nāṉ paḍippēn.", morph: "nīṅka puttaham vāṅk-in-ā, nāṉ paḍi-pp-ēn.", kana: "ニーンガ プッタガム ヴァーンギナー、ナーン パディッペーン。", ja: "あなたが本を買ったら、私は読みます。", literal: "あなた・丁寧＋本＋買う・条件／私＋読む・未来・私" },
        { id: "18-05", ta: "அந்தப் படம் நல்லா இருந்தா, நாம பாக்கலாம்.", roman: "anda paḍam nallā irundā, nāma pākkalām.", morph: "anda paḍam nallā irund-ā, nāma pākka-lām.", kana: "アンダ パダム ナッラー イルンダー、ナーマ パーッカラーム。", ja: "その映画が良さそうなら、一緒に見ましょう。", literal: "その映画＋良く＋ある・条件／私たち・包括＋見る・勧誘" },
        { id: "18-06", ta: "நீங்க வரலன்னா, நான் போவேன்.", roman: "nīṅka varalaṉṉā, nāṉ pōvēn.", morph: "nīṅka vara-la-nnā, nāṉ pō-v-ēn.", kana: "ニーンガ ヴァラランナー、ナーン ポーヴェーン。", ja: "あなたが来ないなら、私は行きます。", literal: "あなた・丁寧＋来る・否定・条件／私＋行く・未来・私" },
        { id: "18-07", ta: "வேண்டாம்னா, சரி.", roman: "vēṇḍāmṉā, sari.", morph: "vēṇḍām-nnā, sari.", kana: "ヴェーンダームンナー、サリ。", ja: "要らないなら、それで大丈夫です。", literal: "要らない・条件／了解" },
        { id: "18-08", ta: "அவரு வந்தாலும், நான் போவேன்.", roman: "avaru vandālum, nāṉ pōvēn.", morph: "avaru vand-āl-um, nāṉ pō-v-ēn.", kana: "アヴァル ヴァンダールム、ナーン ポーヴェーン。", ja: "あの方が来ても、私は行きます。", literal: "あの方＋来る・条件・譲歩／私＋行く・未来・私" },
        { id: "18-09", ta: "நீங்க எங்க போனாலும், தண்ணீர் வாங்கலாம்.", roman: "nīṅka eṅge pōṉālum, taṇṇīr vāṅkalām.", morph: "nīṅka eṅge pō-n-āl-um, taṇṇīr vāṅka-lām.", kana: "ニーンガ イェンゲ ポーナールム、タンニール ヴァーンガラーム。", ja: "どこへ行っても、水は買えます。", literal: "あなた・丁寧＋どこ＋行く・譲歩／水＋買う・可能" },
        { id: "18-10", ta: "யாரு வந்தாலும், சரி.", roman: "yāru vandālum, sari.", morph: "yāru vand-āl-um, sari.", kana: "ヤール ヴァンダールム、サリ。", ja: "誰が来ても大丈夫です。", literal: "誰＋来る・譲歩／了解" },
        { id: "18-11", ta: "எப்போ பாத்தாலும், அவங்க இங்க இருக்காங்க.", roman: "eppō pāttālum, avaṅka iṅge irukkāṅka.", morph: "eppō pātt-āl-um, avaṅka iṅge iru-kk-āṅka.", kana: "イェッポー パーッタールム、アヴァンガ インゲ イルッカーンガ。", ja: "いつ見ても、彼らはここにいます。", literal: "いつ＋見る・譲歩／彼ら＋ここ＋いる・複数" },
        { id: "18-12", ta: "பஸ் வர்றதுனால, நான் இங்க இருக்கேன்.", roman: "pas varradunāle, nāṉ iṅge irukkēn.", morph: "pas var-r-ad-u-nāle, nāṉ iṅge iru-kk-ēn.", kana: "パス ヴァッラドゥナーレ、ナーン インゲ イルッケーン。", ja: "バスが来るので、私はここにいます。", literal: "バス＋来る・名詞化・理由／私＋ここ＋いる・現在・私" },
        { id: "18-13", ta: "ஹோட்டல் நல்லா இருக்கறதுனால, நாங்க இங்க இருக்கோம்.", roman: "hōṭṭal nallā irukkaradunāle, nāṅka iṅge irukkōm.", morph: "hōṭṭal nallā iru-kk-r-ad-u-nāle, nāṅka iṅge iru-kk-ōm.", kana: "ホーッタル ナッラー イルッカラドゥナーレ、ナーンガ インゲ イルッコーム。", ja: "ホテルが良いので、私たちはここにいます。", literal: "ホテル＋良く＋ある・名詞化・理由／私たち・除外＋ここ＋いる・複数" },
        { id: "18-14", ta: "அங்க இருக்கற ஹோட்டல் நல்லா இருக்கு.", roman: "aṅge irukkara hōṭṭal nallā irukku.", morph: "aṅge iru-kk-r-a hōṭṭal nallā iru-kku.", kana: "アンゲ イルッカラ ホーッタル ナッラー イルック。", ja: "そこにあるホテルは良いです。", literal: "そこ＋ある・現在連体＋ホテル＋良く＋ある・中性" },
        { id: "18-15", ta: "நான் நேத்து பாத்த படம் நல்லா இருந்தது.", roman: "nāṉ nēttu pātta paḍam nallā irundadu.", morph: "nāṉ nēttu pātt-a paḍam nallā irund-adu.", kana: "ナーン ネーットゥ パーッタ パダム ナッラー イルンダドゥ。", ja: "私が昨日見た映画は良かったです。", literal: "私＋昨日＋見た・過去連体＋映画＋良く＋あった・中性" },
        { id: "18-16", ta: "நான் வாங்கின புத்தகம் இங்க இருக்கு.", roman: "nāṉ vāṅkiṉa puttaham iṅge irukku.", morph: "nāṉ vāṅk-in-a puttaham iṅge iru-kku.", kana: "ナーン ヴァーンギナ プッタガム インゲ イルック。", ja: "私が買った本はここにあります。", literal: "私＋買う・過去連体＋本＋ここ＋ある・中性" }
      ],
      quiz: [
        { q: "『あの方が来たら』の条件形は？", options: ["அவரு வந்தா", "அவரு வந்தாரு", "அவரு வந்தாலும்", "அவரு வந்த"], answer: 0, feedback: "過去語幹 vand- に条件 -ā を付け、PNGは付けません。", tags: ["正解", "敬称過去", "譲歩", "過去連体"] },
        { q: "条件形 வந்தா が持たない情報は？", options: ["時制とPNG", "動詞語幹", "条件の意味", "後続節との関係"], answer: 0, feedback: "条件形は時制・人称・数・性を中和し、文脈と後続節が解釈を補います。", tags: ["正解", "語彙", "機能", "統語"] },
        { q: "『たとえ来ても』は？", options: ["வந்தாலும்", "வந்தா", "வந்த", "வர்றதுனால"], answer: 0, feedback: "条件 -āl に -um を加えた vandālum が譲歩形です。", tags: ["正解", "条件", "連体", "理由"] },
        { q: "வர்றதுனால の構造は？", options: ["現在連体＋名詞化＋理由", "過去語幹＋条件", "未来語幹＋伝聞", "不定詞＋命令"], answer: 0, feedback: "var-r-a + adu + nāle が『来ることによって／来るので』を作ります。", tags: ["正解", "条件", "伝聞", "命令"] },
        { q: "『私が見た映画』の語順は？", options: ["நான் பாத்த படம்", "படம் நான் பாத்த", "நான் பாத்தா படம்", "நான் பாத்தாலும் படம்"], answer: 0, feedback: "連体節 nāṉ pātta を、説明する名詞 paḍam の前へ置きます。", tags: ["正解", "後置", "条件", "譲歩"] }
      ]
    }
  ]
};

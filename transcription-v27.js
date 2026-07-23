/*
 * Transcription layer — v2.7
 *
 * The curriculum keeps conventional Tamil spelling in `ta`.  This layer adds:
 *   spokenRoman  — sound-oriented Romanization without morpheme hyphens
 *   spokenKana   — kana checked against the project transcription standard
 *   ttsText      — Tamil respelling for speech synthesis when spelling and
 *                  educated Chennai speech differ
 *
 * `morph` remains the structural analysis.  Do not use it as the only reading
 * line: written -ai / -il / -āl and spoken -e / -le / -āle must stay distinct.
 */
(() => {
  "use strict";

  const book = window.TAMIL_BOOK;
  if (!book) throw new Error("Curriculum data must load before transcription-revision.js");

  const TAMIL_RE = /[\u0B80-\u0BFF]/u;
  const INLINE_SPAN_RE = /<span class="ta-inline" lang="ta">([^<]+)<\/span>/gu;

  const normalizeTamil = value => String(value ?? "")
    .replace(/[.?!,;:—–…“”"'‘’()[\]{}।॥]/gu, "")
    .replace(/\s+/gu, " ")
    .trim();

  const compactMorph = value => String(value ?? "")
    .replace(/-/gu, "")
    .replace(/\s+([.?!,;:])/gu, "$1")
    .replace(/\s+/gu, " ")
    .trim();

  /*
   * Noninitial Tamil ஐ is normally monophthongized in the register used by
   * this book.  Protect sequences whose written "ai" is not that vowel sign,
   * plus confirmed English loans that retain /ai/.
   */
  const protectedAi = [
    "āṉlaiṉ",
    "ṭiraivar",
    "vaifai",
    "fḷaiṭ",
    "sais",
    "aiyā",
    "rayil"
  ];

  function normalizeSpokenRoman(value) {
    let result = compactMorph(value);
    const held = [];
    for (const token of protectedAi) {
      const marker = `§${held.length}§`;
      const pattern = new RegExp(token, "gu");
      if (pattern.test(result)) {
        held.push(token);
        result = result.replace(pattern, marker);
      }
    }
    result = result.replace(/ai/gu, "e");
    held.forEach((token, index) => {
      result = result.replaceAll(`§${index}§`, token);
    });
    return result
      .replace(/kuḻandee\b/gu, "kuḻande")
      .replace(/kuḻandee/gu, "kuḻande")
      .replace(/uḍambue/gu, "uḍambe")
      .replace(/kadavue/gu, "kadave")
      .replace(/avarue/gu, "avare")
      .replace(/adue/gu, "ade")
      .replace(/idue/gu, "ide")
      .replace(/kattiāle/gu, "kattiyāle");
  }

  const kanaRules = [
    ["ティレヴァルックップ", "ティレヴァルック"],
    ["ドライヴァルックップ", "ドライヴァルック"],
    ["ウンガルックップ", "ウンガルック"],
    ["プラートバーラッティル", "プラートバーラムレ"],
    ["ヴィマーナ ニレヤッティレールンドゥ", "ヴィマーナ ニレヤムレールンドゥ"],
    ["ヴァレパダッティル", "ヴァレパダムレ"],
    ["マルンドゥッカダイ", "マルンドゥッカデ"],
    ["クランダインガルック", "クランデンガルック"],
    ["クランダインガ", "クランデンガ"],
    ["クランデエ", "クランデ"],
    ["ホーッタッラ", "ホーッタルレ"],
    ["ジャッパーンラ", "ジャッパーンレ"],
    ["チェンネラ", "チェンネレ"],
    ["カールダーラ", "カールダーレ"],
    ["カッティヤーラ", "カッティヤーレ"],
    ["パッカッティレ", "パッカットゥレ"],
    ["イェディリレ", "イェディルレ"],
    ["マーディイレ", "マーディレ"],
    ["ヴェリイレ", "ヴェリレ"],
    ["カダイレ", "カデレ"],
    ["カダイック", "カデック"],
    ["カダイ", "カデ"],
    ["アヴァレッ", "アヴァレ"],
    ["カダヴェッ", "カダヴェ"],
    ["ウダンベッ", "ウダンベ"],
    ["イデッ", "イデ"],
    ["イェナックッ", "イェナック"],
    ["サイヴァ", "セヴァ"],
    ["ヴァルガイ", "ヴァルゲ"]
  ];

  function normalizeSpokenKana(value) {
    let result = String(value ?? "");
    for (const [from, to] of kanaRules) result = result.replaceAll(from, to);
    return result;
  }

  const protectedTamilAi = [
    "ஆன்லைன்",
    "டிரைவர்",
    "வைஃபை",
    "ஃப்ளைட்",
    "சைஸ்",
    "ஐயா"
  ];

  const tamilSoundRules = [
    ["குழந்தையை", "குழந்தெ"],
    ["குழந்தைகளுக்கு", "குழந்தெங்களுக்கு"],
    ["குழந்தைங்க", "குழந்தெங்க"],
    ["டிரைவருக்குப் ", "டிரைவருக்கு "],
    ["உங்களுக்குப் ", "உங்களுக்கு "],
    ["எனக்குக் ", "எனக்கு "],
    ["அவரைப் ", "அவரெ "],
    ["இதைத் ", "இதெ "],
    ["கதவைத் ", "கதவெ "],
    ["உடம்பைப் ", "உடம்பெ "],
    ["பிளாட்பாரத்தில", "பிளாட்பாரம்லெ"],
    ["விமான நிலையத்திலேருந்து", "விமான நெலெயம்லேருந்து"],
    ["வரைபடத்தில", "வரெபடம்லெ"],
    ["பக்கத்தில", "பக்கத்துலெ"],
    ["கடையில", "கடெலெ"],
    ["கடைல", "கடெலெ"],
    ["சென்னைல", "சென்னெலெ"],
    ["காலைல", "காலெலெ"],
    ["ஜப்பான்ல ", "ஜப்பான்லெ "],
    ["ஹோட்டல்ல", "ஹோட்டல்லெ"],
    ["மாடியில", "மாடிலெ"],
    ["ஸ்டாப்ல", "ஸ்டாப்லெ"],
    ["ஆட்டோல", "ஆட்டோலெ"],
    ["எதிரில", "எதிர்லெ"],
    ["மூலைல", "மூலெலெ"],
    ["தமிழ்ல", "தமிழ்லெ"],
    ["மேசைல", "மேசெலெ"],
    ["பஸ்ல", "பஸ்லெ"],
    ["ரயில்ல", "ரயில்லெ"],
    ["ரூம்ல", "ரூம்லெ"],
    ["வெளியில", "வெளிலெ"],
    ["வீட்டுல", "வீட்டுலெ"],
    ["இதுல", "இதுலெ"],
    ["அதுல", "அதுலெ"],
    ["கார்டால", "கார்டாலெ"],
    ["கத்தியால", "கத்தியாலெ"]
  ];

  function normalizeSpokenTamil(value) {
    let result = String(value ?? "");
    const held = [];
    for (const token of protectedTamilAi) {
      if (!result.includes(token)) continue;
      const marker = `ஃ${held.length}ஃ`;
      held.push(token);
      result = result.replaceAll(token, marker);
    }
    for (const [from, to] of tamilSoundRules) result = result.replaceAll(from, to);
    result = result.replaceAll("ை", "ெ");
    result = result
      .replace(/ெப்(?=\s)/gu, "ெ")
      .replace(/ெத்(?=\s)/gu, "ெ");
    held.forEach((token, index) => {
      result = result.replaceAll(`ஃ${index}ஃ`, token);
    });
    return result;
  }

  const itemById = new Map();
  const allItems = [];
  const addItem = item => {
    if (!item?.ta || !TAMIL_RE.test(item.ta)) return;
    if (item.id) itemById.set(item.id, item);
    if (!allItems.includes(item)) allItems.push(item);
  };

  for (const verb of book.coreVerbs ?? []) {
    for (const form of Object.values(verb)) addItem(form);
  }
  for (const chapter of book.chapters ?? []) {
    addItem(chapter.heroExample);
    for (const item of chapter.examples ?? []) addItem(item);
    for (const item of chapter.formConfig?.vocabulary ?? []) addItem(item);
    for (const item of chapter.formConfig?.patterns ?? []) addItem(item);
    for (const item of chapter.formConfig?.modalRows ?? []) addItem(item);
  }

  /* Two structural analyses corrected during the same audit. */
  if (itemById.has("35-12")) {
    itemById.get("35-12").morph = "nēttaviḍa iṉṉaikki uḍambu nall-ā iru-kku.";
  }
  if (itemById.has("23-12")) {
    itemById.get("23-12").morph = "kōvil pakkattu-le oru hōṭṭal iru-kku.";
  }
  if (itemById.has("30-01")) {
    itemById.get("30-01").morph = "inda ṭikkeṭṭ-e vāṅkiṉ-ēn.";
  }
  for (const id of ["35-03", "38-02", "G35-03", "G38-03"]) {
    const item = itemById.get(id);
    if (!item) continue;
    if (item.morph) item.morph = item.morph.replace(/\bpas-e\b/gu, "pass-e");
    else item.roman = item.roman.replace(/\bpas-e\b/gu, "pass-e");
  }
  if (itemById.has("32-09")) {
    itemById.get("32-09").morph = "inda pass-ukku ṭikkeṭ eṅge vāṅka-ṇum?";
  }
  if (itemById.has("31-08")) {
    itemById.get("31-08").morph = "katti-y-āle paḻam veṭṭiṉ-ēn.";
  }

  for (const item of allItems) {
    const structural = item.morph || item.roman || "";
    item.spokenRoman = normalizeSpokenRoman(structural);
    item.spokenKana = normalizeSpokenKana(item.kana || "");
    item.ttsText = normalizeSpokenTamil(item.ta);
  }

  const manualInlineGlosses = [
    ["நான்", "nāṉ", "ナーン"],
    ["வந்து சாப்பிட்டேன்", "vandu sāppiṭṭēn", "ヴァンドゥ サーッピッテーン"],
    ["சாப்பிட்டு போனேன்", "sāppiṭṭu pōṉēn", "サーッピットゥ ポーネーン"],
    ["சென்னைக்கு போனேன்", "ceṉṉekku pōṉēn", "チェンネック ポーネーン"],
    ["அந்தப் படத்தைப் பாத்தேன்", "anda paḍatte pāttēn", "アンダ パダッテ パーッテーン"],
    ["நாளைக்கு போவேன்", "nāḷekki pōvēn", "ナーレッキ ポーヴェーン"],
    ["தினமும் படிப்பேன்", "tiṉamum paḍippēn", "ティナムム パディッペーン"],
    ["நேத்து போகல", "nēttu pōkala", "ネーットゥ ポーガラ"],
    ["எனக்கு வரணும்", "eṉakku varaṇum", "イェナック ヴァラヌム"],
    ["எனக்கு", "eṉakku", "イェナック"],
    ["என்னால", "eṉṉāle", "イェンナーレ"],
    ["நான் போகலாமா?", "nāṉ pōkalāmā?", "ナーン ポーガラーマー？"],
    ["நீங்க", "nīṅka", "ニーンガ"],
    ["போறீங்க → போறீங்களா?", "pōrīṅka → pōrīṅkaḷā?", "ポーリーンガ → ポーリーンガラー？"],
    ["ள", "ḷ", "ル（反り舌音）"],
    ["நாளைக்கு போவீங்களா?", "nāḷekki pōvīṅkaḷā?", "ナーレッキ ポーヴィーンガラー？"],
    ["நீங்க சென்னைக்கு போறீங்க.", "nīṅka ceṉṉekku pōrīṅka.", "ニーンガ チェンネック ポーリーンガ。"],
    ["எங்க போறீங்களா?", "eṅge pōrīṅkaḷā?", "イェンゲ ポーリーンガラー？"],
    ["இங்க", "iṅge", "インゲ"],
    ["அங்க", "aṅge", "アンゲ"],
    ["யாரை", "yāre", "ヤーレ"],
    ["எங்க போறீங்க?", "eṅge pōrīṅka?", "イェンゲ ポーリーンガ？"],
    ["ஆமா, வருவேன்.", "āmā, varuvēn.", "アーマー、ヴァルヴェーン。"],
    ["இல்ல, போகமாட்டேன்.", "illa, pōkamāṭṭēn.", "イッラ、ポーガマーッテーン。"],
    ["எப்போ வர்றீங்க? — நாளைக்கு வர்றேன்.", "eppō varrīṅka? — nāḷekki varrēn.", "イェッポー ヴァッリーンガ？ — ナーレッキ ヴァッレーン。"],
    ["ரவி வந்தான். சாப்பிட்டான்.", "ravi vandāṉ. sāppiṭṭāṉ.", "ラヴィ ヴァンダーン。サーッピッターン。"],
    ["மீனா வந்தா. சாப்பிட்டா.", "mīṉā vandā. sāppiṭṭā.", "ミーナー ヴァンダー。サーッピッター。"],
    ["அவரு போறாரு", "avaru pōrāru", "アヴァル ポーラール"],
    ["அந்த அம்மா வர்றாங்க", "anda ammā varrāṅka", "アンダ アンマー ヴァッラーンガ"],
    ["ஐயா", "aiyā", "アイイヤー"],
    ["அவரு எங்க இருக்காரு?", "avaru eṅge irukkāru?", "アヴァル イェンゲ イルッカール？"],
    ["அவங்க போறாங்க", "avaṅka pōrāṅka", "アヴァンガ ポーラーンガ"],
    ["அவங்க வர்றாங்க", "avaṅka varrāṅka", "アヴァンガ ヴァッラーンガ"],
    ["ரவியும் மீனாவும் வந்தாங்க. சாப்பிட்டாங்க. படம் பாத்தாங்க.", "raviyum mīṉāvum vandāṅka. sāppiṭṭāṅka. paḍam pāttāṅka.", "ラヴィユム ミーナーヴム ヴァンダーンガ。サーッピッターンガ。パダム パーッターンガ。"],
    ["விடு", "viḍu", "ヴィドゥ"],
    ["போய் வாங்கி வர்றேன்", "pōyi vāṅki varrēn", "ポーイ ヴァーンギ ヴァッレーン"],
    ["தமிழ் படிக்க சென்னைக்கு வர்றேன்", "tamiḻ paḍikka ceṉṉekku varrēn", "タミル パディッカ チェンネック ヴァッレーン"],
    ["படம் பாத்துக்கிட்டு சாப்பிடறேன்", "paḍam pāttukkiṭṭu sāppiḍarēn", "パダム パーットゥッキットゥ サーッピダレーン"],
    ["நீ போறே", "nī pōrē", "ニー ポーレー"],
    ["நீ வந்தே", "nī vandē", "ニー ヴァンデー"],
    ["நீ வருவே", "nī varuvē", "ニー ヴァルヴェー"],
    ["நாம போகலாம்", "nāma pōkalām", "ナーマ ポーガラーム"],
    ["நான் நாளைக்கு போவேன்னு", "nāṉ nāḷekki pōvēṉṉu", "ナーン ナーレッキ ポーヴェーンヌ"],
    ["அவரு வருவாரா?", "avaru varuvārā?", "アヴァル ヴァルヴァーラー？"],
    ["நீங்க சாப்பிட்டா", "nīṅka sāppiṭṭā", "ニーンガ サーッピッター"],
    ["அங்க இருக்கற ஹோட்டல்", "aṅge irukkara hōṭṭal", "アンゲ イルッカラ ホーッタル"],
    ["நான் பாத்த படம்", "nāṉ pātta paḍam", "ナーン パーッタ パダム"],
    ["பாத்து பண்ண முடியுமா?", "pāttu paṇṇa muḍiyumā?", "パーットゥ パンナ ムディユマー？"],
    ["செக்-அவுட் பண்ணுவேன்", "cek-avuṭ paṇṇuvēn", "チェックアウト パンヌヴェーン"],
    ["தூங்க போறேன்", "tūṅka pōrēn", "トゥーンガ ポーレーン"],
    ["இடது பக்கம் திரும்புங்க", "iḍadu pakkam tirumbuṅka", "イダドゥ パッカム ティルンブンガ"],
    ["வழி தெரியல", "vaḻi teriyala", "ヴァリ テリヤラ"],
    ["இந்தக் கோவிலோட வரலாறு தெரியணும்", "inda kōvilōḍa varalāru teriyaṇum", "インダ コーヴィローダ ヴァララール テリヤヌム"],
    ["இந்த மருந்துக்கு அலர்ஜி இருக்கு", "inda marundukku alarji irukku", "インダ マルンドゥック アラルジ イルック"],
    ["என் பாஸ்போர்ட்", "eṉ pāspōrṭ", "イェン パースポート"],
    ["என்னோட பாஸ்போர்ட்", "eṉṉōḍa pāspōrṭ", "イェンノーダ パースポート"],
    ["வீடு", "vīḍu", "ヴィードゥ"],
    ["இதை", "ide", "イデ"],
    ["இதுக்கு", "idukku", "イドゥック"],
    ["எத்தனை பேர்?", "ettaṉe pēr?", "イェッタネ ペール？"],
    ["ரெண்டு பேர்", "reṇḍu pēr", "レンドゥ ペール"],
    ["நான் மட்டும் வர்றேன்", "nāṉ maṭṭum varrēn", "ナーン マットゥム ヴァッレーン"],
    ["நான் தான் வர்றேன்", "nāṉ tāṉ varrēn", "ナーン ターン ヴァッレーン"],
    ["யாரோ வந்தாங்க", "yārō vandāṅka", "ヤーロー ヴァンダーンガ"],
    ["நான் வாங்கின டிக்கெட்", "nāṉ vāṅkiṉa ṭikkeṭ", "ナーン ヴァーンギナ ティッケット"],
    ["நான் வாங்கினது", "nāṉ vāṅkiṉadu", "ナーン ヴァーンギナドゥ"],
    ["நேத்து வந்தவங்க", "nēttu vandavaṅka", "ネーットゥ ヴァンダヴァンガ"],
    ["நான் பார்க்காத படம்", "nāṉ pārkkāda paḍam", "ナーン パールッカーダ パダム"],
    ["குழந்தையை படிக்க வைக்கறாங்க", "kuḻande paḍikka vekkarāṅka", "クランデ パディッカ ヴェッカラーンガ"],
    ["எழுதிக்கோங்க", "eḻudikkoṅka", "イェルディッコーンガ"],
    ["நாளைக்கு", "nāḷekki", "ナーレッキ"],
    ["தினமும்", "tiṉamum", "ティナムム"],
    ["நாளைக்கு போகமாட்டேன்", "nāḷekki pōkamāṭṭēn", "ナーレッキ ポーガマーッテーン"],
    ["எப்போ வர்றீங்க", "eppō varrīṅka", "イェッポー ヴァッリーンガ"],
    ["ரவி வந்தான்", "ravi vandāṉ", "ラヴィ ヴァンダーン"],
    ["மீனா வந்தா", "mīṉā vandā", "ミーナー ヴァンダー"],
    ["ரவியும் மீனாவும் வந்தாங்க", "raviyum mīṉāvum vandāṅka", "ラヴィユム ミーナーヴム ヴァンダーンガ"],
    ["படம் பாத்தாங்க", "paḍam pāttāṅka", "パダム パーッターンガ"],
    ["க்கிட்டு", "-kkiṭṭu", "-ッキットゥ"],
    ["சொல்", "sol", "ソル"],
    ["கேள்", "kēḷ", "ケール"],
    ["நினை", "niṉe", "ニネ"],
    ["ஹோட்டல் நல்லா இருக்கறதுனால", "hōṭṭal nallā irukkaraduṉāle", "ホーッタル ナッラー イルッカラドゥナーレ"],
    ["நாங்க இங்க இருக்கோம்", "nāṅka iṅge irukkōm", "ナーンガ インゲ イルッコーム"],
    ["போகுமா", "pōkumā", "ポーグマー"],
    ["பெயர்ல", "peyarle", "ペヤルレ"],
    ["கொடு", "koḍu", "コドゥ"],
    ["பண்ணு", "paṇṇu", "パンヌ"],
    ["செக்", "cek", "チェック"],
    ["அவுட் பண்ணுவேன்", "avuṭ paṇṇuvēn", "アウト パンヌヴェーン"],
    ["தூங்கு", "tūṅku", "トゥーング"]
  ];

  const inlineIndex = new Map();
  const putInline = (ta, roman, kana) => {
    const key = normalizeTamil(ta);
    if (!key || inlineIndex.has(key)) return;
    inlineIndex.set(key, {
      ta: String(ta).trim(),
      roman: normalizeSpokenRoman(roman),
      kana: normalizeSpokenKana(kana)
    });
  };

  for (const item of allItems) {
    putInline(item.ta, item.spokenRoman, item.spokenKana);
  }
  for (const [ta, roman, kana] of manualInlineGlosses) putInline(ta, roman, kana);

  const resolveInline = tamil => inlineIndex.get(normalizeTamil(tamil)) || null;

  const glossMarkup = (tamil, gloss) => {
    if (!gloss) return `<span class="ta-inline" lang="ta">${tamil}</span>`;
    return `<span class="ta-gloss"><span class="ta-inline" lang="ta">${tamil}</span><span class="ta-gloss-reading"><span class="ta-gloss-roman">${gloss.roman}</span><span class="kana-line ta-gloss-kana">${gloss.kana}</span></span></span>`;
  };

  function enrichHtml(value) {
    let html = String(value ?? "");
    const placeholders = [];
    html = html.replace(INLINE_SPAN_RE, (match, tamil, offset, source) => {
      const following = source.slice(offset + match.length);
      if (/^\s*<strong>[A-Za-zāīūēōṭḍṇṉṅñḷḻṟṣ]/u.test(following)) return match;
      const marker = `\u0001${placeholders.length}\u0002`;
      placeholders.push(glossMarkup(tamil, resolveInline(tamil)));
      return marker;
    });

    const parts = html.split(/(<[^>]+>)/gu);
    html = parts.map(part => {
      if (part.startsWith("<")) return part;
      return part.replace(/[\u0B80-\u0BFF]+(?:\s+[\u0B80-\u0BFF]+)*/gu, (tamil, offset, source) => {
        const following = source.slice(offset + tamil.length);
        if (/^\s+[A-Za-zāīūēōṭḍṇṉṅñḷḻṟṣ]/u.test(following)) return tamil;
        const gloss = resolveInline(tamil);
        return gloss ? glossMarkup(tamil, gloss) : tamil;
      });
    }).join("");

    placeholders.forEach((markup, index) => {
      html = html.replace(`\u0001${index}\u0002`, markup);
    });
    return html;
  }

  const chapter30 = book.chapters.find(chapter => chapter.number === 30);
  if (chapter30) {
    chapter30.formConfig.soundMap = {
      title: "「〜を・〜に・〜の」を、書記形と口語音に分ける",
      intro: "英語の前置詞や日本語の助詞に近い仕事をしますが、一対一対応ではありません。まず対象・到達点・所有という機能を決め、その後で形を選びます。",
      rows: [
        { role: "特定の対象（〜を）", written: "-ஐ / -ai", spoken: "-எ / -e", kana: "-エ", cue: "人、または聞き手が特定できる物" },
        { role: "受け手・行先（〜に／へ）", written: "-(உ)க்கு", spoken: "-(u)kku", kana: "-（ウ）ック", cue: "人・場所・時刻へ届く向き" },
        { role: "所有（〜の）", written: "-ஓட", spoken: "-ōḍa", kana: "-オーダ", cue: "後ろの名詞の持ち主を示す" }
      ],
      note: "例：டிக்கெட்டை は綴りを ṭikkeṭṭai と分析できますが、この教材の口語読みは ṭikkeṭṭe（ティッケッテ）。書記形を消さず、音の行と分けて表示します。"
    };
  }

  const chapter31 = book.chapters.find(chapter => chapter.number === 31);
  if (chapter31) {
    chapter31.formConfig.soundMap = {
      title: "同じ「〜で」でも、場所・乗り物・道具を分ける",
      intro: "日本語の「で」や英語の by / in / at から直接選ばず、文中で何を表すかを先に判定します。",
      rows: [
        { role: "場所・乗り物（〜で／に）", written: "-இல் / -il", spoken: "-லெ / -le", kana: "-レ", cue: "ホテル・部屋・バスなどの場" },
        { role: "起点（〜から）", written: "-இலிருந்து", spoken: "-lērundu", kana: "-レールンドゥ", cue: "場所 -le に『そこから』を重ねる" },
        { role: "人の所・人への接触", written: "-கிட்ட", spoken: "-kiṭṭa", kana: "-キッタ", cue: "人に聞く・人の手元にある" },
        { role: "道具・原因（〜で／によって）", written: "-ஆல் / -āl", spoken: "-ஆலெ / -āle", kana: "-アーレ", cue: "カード・ナイフなどを手段にする" },
        { role: "同行（〜と一緒に）", written: "-ஓட / கூட", spoken: "-ōḍa / kūḍa", kana: "-オーダ／クーダ", cue: "人と同じ行動をする" }
      ],
      note: "交通手段は日常口語で -le が自然です。道具の -āle と同じ日本語「で」でも、形は別です。"
    };
  }

  book.meta.edition = "音声・転写精修版 v2.7";
  book.meta.transcriptionVersion = "2.7";

  window.TAMIL_TRANSCRIPTION = Object.freeze({
    compactMorph,
    enrichHtml,
    normalizeSpokenKana,
    normalizeSpokenRoman,
    normalizeSpokenTamil,
    normalizeTamil,
    resolveInline,
    allItems
  });
})();

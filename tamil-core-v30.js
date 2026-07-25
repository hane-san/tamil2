(() => {
  "use strict";

  const INDEPENDENT_VOWELS = Object.freeze({
    "அ": "a",
    "ஆ": "ā",
    "இ": "i",
    "ஈ": "ī",
    "உ": "u",
    "ஊ": "ū",
    "எ": "e",
    "ஏ": "ē",
    "ஐ": "ai",
    "ஒ": "o",
    "ஓ": "ō",
    "ஔ": "au"
  });

  const DEPENDENT_VOWELS = Object.freeze({
    "ா": "ā",
    "ி": "i",
    "ீ": "ī",
    "ு": "u",
    "ூ": "ū",
    "ெ": "e",
    "ே": "ē",
    "ை": "ai",
    "ொ": "o",
    "ோ": "ō",
    "ௌ": "au"
  });

  const CONSONANTS = Object.freeze({
    "க": "k",
    "ங": "ṅ",
    "ச": "c",
    "ஞ": "ñ",
    "ட": "ṭ",
    "ண": "ṇ",
    "த": "t",
    "ந": "n",
    "ப": "p",
    "ம": "m",
    "ய": "y",
    "ர": "r",
    "ல": "l",
    "வ": "v",
    "ழ": "ḻ",
    "ள": "ḷ",
    "ற": "ṟ",
    "ன": "ṉ",
    "ஜ": "j",
    "ஶ": "ś",
    "ஷ": "ṣ",
    "ஸ": "s",
    "ஹ": "h"
  });

  const TAMIL_NUMERALS = Object.freeze({
    "௦": "0",
    "௧": "1",
    "௨": "2",
    "௩": "3",
    "௪": "4",
    "௫": "5",
    "௬": "6",
    "௭": "7",
    "௮": "8",
    "௯": "9",
    "௰": "10",
    "௱": "100",
    "௲": "1000"
  });

  const VIRAMA = "்";
  const AYTHAM = "ஃ";

  const DEFAULT_CONFIDENCE = Object.freeze({
    form: "B",
    morphology: "B",
    pronunciation: "C",
    registerNaturalness: "B"
  });

  const DEFAULT_REVIEW = Object.freeze({
    nativeReviewed: false,
    reviewedAt: null,
    reviewerProfile: null
  });

  function transliterateTamil(value) {
    const input = String(value ?? "").normalize("NFC");
    const characters = Array.from(input);
    let output = "";

    for (let index = 0; index < characters.length; index += 1) {
      const character = characters[index];

      if (INDEPENDENT_VOWELS[character]) {
        output += INDEPENDENT_VOWELS[character];
        continue;
      }

      if (character === AYTHAM) {
        output += "ḵ";
        continue;
      }

      if (CONSONANTS[character]) {
        const next = characters[index + 1];
        if (next === VIRAMA) {
          output += CONSONANTS[character];
          index += 1;
          continue;
        }
        if (DEPENDENT_VOWELS[next]) {
          output += CONSONANTS[character] + DEPENDENT_VOWELS[next];
          index += 1;
          continue;
        }
        output += CONSONANTS[character] + "a";
        continue;
      }

      if (DEPENDENT_VOWELS[character] || character === VIRAMA) {
        throw new Error(`孤立したタミル母音記号またはプッリです: ${character}`);
      }

      if (TAMIL_NUMERALS[character]) {
        output += TAMIL_NUMERALS[character];
        continue;
      }

      if (/[\u0B80-\u0BFF]/u.test(character)) {
        throw new Error(`固定転写表で未定義のタミル文字です: U+${character.codePointAt(0).toString(16).toUpperCase()}`);
      }

      output += character;
    }

    return output;
  }

  function confidence(form = "B", morphology = "B", pronunciation = "C", registerNaturalness = "B") {
    return Object.freeze({ form, morphology, pronunciation, registerNaturalness });
  }

  function normalizeEntry(input) {
    const targetTamil = String(input.targetTamil ?? "").normalize("NFC");
    if (!input.id || !targetTamil || !input.meaningJa) {
      throw new Error("教材項目には id・targetTamil・meaningJa が必要です");
    }

    const computedRoman = transliterateTamil(targetTamil);
    if (input.orthographicRoman && input.orthographicRoman.normalize("NFC") !== computedRoman) {
      throw new Error(`${input.id}: orthographicRoman が固定転写と一致しません（${computedRoman}）`);
    }
    if (!input.structuredRoman) {
      throw new Error(`${input.id}: structuredRoman が必要です`);
    }
    if (!input.pronunciationRoman || !input.katakana) {
      throw new Error(`${input.id}: pronunciationRoman と katakana は発音監査済みの値を明示してください`);
    }

    const entry = {
      id: input.id,
      meaningJa: input.meaningJa,
      literalJapanese: input.literalJapanese ?? null,

      primaryRegister: input.primaryRegister ?? "SST",
      regionalProfile: input.regionalProfile ?? "TN-GENERAL",
      styleTags: [...(input.styleTags ?? ["neutral"])],

      sourceTamil: input.sourceTamil ?? null,
      targetTamil,
      spokenOrthographyStatus: input.spokenOrthographyStatus ?? "pedagogical-normalized",
      counterparts: [...(input.counterparts ?? [])],

      orthographicRoman: computedRoman,
      structuredRoman: input.structuredRoman.normalize("NFC"),
      underlyingAnalysis: input.underlyingAnalysis ?? null,
      morphemes: [...(input.morphemes ?? [])],

      pronunciationRoman: input.pronunciationRoman.normalize("NFC"),
      pronunciationVariants: [...(input.pronunciationVariants ?? [])]
        .map(value => String(value).normalize("NFC")),
      broadIPA: input.broadIPA ?? null,
      katakana: input.katakana.normalize("NFC"),
      kanaVariants: [...(input.kanaVariants ?? [])]
        .map(value => String(value).normalize("NFC")),
      japaneseEstablishedName: input.japaneseEstablishedName ?? null,

      ttsText: String(input.ttsText ?? targetTamil).normalize("NFC"),
      grammarNote: input.grammarNote ?? null,
      vocabulary: [...(input.vocabulary ?? [])],
      audioGroup: input.audioGroup ?? null,

      sourceRefs: [...(input.sourceRefs ?? ["TAMIL-INTEGRATED-v2.0-rc.1"])],
      confidence: Object.freeze({ ...DEFAULT_CONFIDENCE, ...(input.confidence ?? {}) }),
      review: Object.freeze({ ...DEFAULT_REVIEW, ...(input.review ?? {}) }),

      featured: Boolean(input.featured),
      kind: input.kind ?? null,
      group: input.group ?? null,
      note: input.note ?? null
    };

    // The v2.8 renderer consumes these names. They are projections from explicit
    // v3 fields, never guesses from an undifferentiated legacy `roman` value.
    entry.ta = entry.targetTamil;
    entry.roman = entry.structuredRoman;
    entry.morph = entry.structuredRoman;
    entry.spokenRoman = entry.pronunciationRoman;
    entry.kana = entry.katakana;
    entry.spokenKana = entry.katakana;
    entry.ja = entry.meaningJa;
    entry.literal = entry.literalJapanese;

    return Object.freeze(entry);
  }

  function entry(input) {
    return normalizeEntry(input);
  }

  function stripMorphBoundaries(value) {
    return String(value ?? "").replace(/-/g, "");
  }

  window.TAMIL_V30 = Object.freeze({
    INDEPENDENT_VOWELS,
    DEPENDENT_VOWELS,
    CONSONANTS,
    TAMIL_NUMERALS,
    transliterateTamil,
    stripMorphBoundaries,
    confidence,
    entry
  });
})();

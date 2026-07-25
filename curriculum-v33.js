(() => {
  "use strict";

  const chapters = [...(window.TAMIL_LESSONS_V30 || [])].sort((left, right) => left.number - right.number);
  const expected = [1, 2, 3, 4, 5, 6, 7, 8];
  if (chapters.length !== expected.length || chapters.some((chapter, index) => chapter.number !== expected[index])) {
    throw new Error("v3.3-rc.1 の公開範囲は第1課〜第8課です");
  }

  window.TAMIL_BOOK = Object.freeze({
    meta: Object.freeze({
      title: "口語タミル語の教科書",
      edition: "統合規格 v2.0-rc.1 対応版 v3.3-rc.1",
      primaryRegister: "SST",
      regionalProfile: "TN-GENERAL",
      styleTags: Object.freeze(["neutral"]),
      publicScope: "PART 0＋第1課〜第8課",
      legacyDataPolicy: "v2.8以前の38章は履歴データとして保持し、公開教材の正本にはしない"
    }),
    parts: Object.freeze([
      Object.freeze({ code: "PART I", title: "名詞・格・述語・動詞の土台", chapters: Object.freeze([1, 2, 3, 4, 5, 6, 7, 8]) })
    ]),
    coreVerbs: Object.freeze(["பார்", "போ", "குடி", "வா"]),
    chapters: Object.freeze(chapters)
  });
})();

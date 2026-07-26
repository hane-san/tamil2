(() => {
  "use strict";

  const freezeList = values => Object.freeze([...values]);
  const freezeSupplement = input => Object.freeze({
    ...input,
    prerequisites: freezeList(input.prerequisites),
    returnToLessons: freezeList(input.returnToLessons),
    legacyRefs: freezeList(input.legacyRefs),
    sourceLessons: freezeList(input.sourceLessons),
    excludedScope: freezeList(input.excludedScope)
  });

  const supplements = [
    {
      code: "A",
      release: "v4.2",
      title: "全人称で過去・未来を動かす",
      entryQuestion: "『私は行った』から、『あなたは行った』『その方は行くだろう』へ、どう広げる？",
      prerequisites: [8, 14],
      returnToLessons: [8, 14],
      legacyRefs: ["curriculum-v28.js:coreVerbs", "grammar-v28.js:38 (person-bearing examples only)"],
      sourceLessons: ["lesson08-v33.js", "lesson14-v37.js"],
      excludedScope: ["現在形の全人称説明の再掲", "未検証の活用自動生成"],
      status: "drafting"
    },
    {
      code: "B",
      release: "v4.2",
      title: "これ・それ／あれ・どれ、ここ・どこ",
      entryQuestion: "頭の i-・a-・e- を替えると、物・場所・時・様子はどう連動する？",
      prerequisites: [2, 15],
      returnToLessons: [2, 15],
      legacyRefs: ["grammar-v28.js:33", "G33-01..G33-08", "33-01..33-12"],
      sourceLessons: ["lesson02-v30.js", "lesson15-v38.js"],
      excludedScope: ["日本語のこれ・それ・あれの三距離をそのまま移植", "旧roman・kanaの無監査流用"],
      status: "drafting"
    },
    {
      code: "C",
      release: "v4.3",
      title: "数・量・人数・時刻・期間",
      entryQuestion: "同じ数字でも、物・人・時刻・時間の長さで後ろはどう変わる？",
      prerequisites: [1, 16],
      returnToLessons: [1, 16],
      legacyRefs: ["grammar-v28.js:32", "grammar-v28.js:34"],
      sourceLessons: ["lesson01-v30.js", "lesson16-v38.js"],
      excludedScope: ["数字一覧だけの暗記課", "数詞後の複数を一律化"],
      status: "planned"
    },
    {
      code: "D",
      release: "v4.3",
      title: "比較をもう一段深く読む",
      entryQuestion: "『より』だけでなく、『同じくらい』『範囲の中でいちばん』をどう作る？",
      prerequisites: [16],
      returnToLessons: [16],
      legacyRefs: ["grammar-v28.js:35", "G35-01..G35-08", "35-01..35-12"],
      sourceLessons: ["lesson16-v38.js"],
      excludedScope: ["基本比較の単純再掲", "比較範囲のない最上級の機械生成"],
      status: "planned"
    },
    {
      code: "E",
      release: "v4.4",
      title: "も・だけ・こそ・誰か・何も",
      entryQuestion: "小さな助詞一つで、追加・限定・焦点・不特定はどう変わる？",
      prerequisites: [2, 16, 18],
      returnToLessons: [2, 16, 18],
      legacyRefs: ["grammar-v28.js:36", "G36-01..G36-09", "36-01..36-12"],
      sourceLessons: ["lesson02-v30.js", "lesson16-v38.js", "lesson18-v39.js"],
      excludedScope: ["-umの全用法を一つの訳へ統合", "正しい別機能形を誤文扱い"],
      status: "planned"
    },
    {
      code: "F",
      release: "v4.4",
      title: "経験・結果・変化",
      entryQuestion: "『見たことがある』『しておいた』『そうなってしまった』は、どこが違う？",
      prerequisites: [11, 12, 18],
      returnToLessons: [11, 12, 18],
      legacyRefs: ["grammar-v28.js:36 example 36-08", "grammar-v28.js:38 examples 38-05,38-10..38-12"],
      sourceLessons: ["lesson11-v36.js", "lesson12-v36.js", "lesson18-v39.js"],
      excludedScope: ["名詞化そのものの再講義", "完了・経験・変化の一形式への統合"],
      status: "planned"
    },
    {
      code: "G",
      release: "v4.5",
      title: "使役と自動詞・他動詞",
      entryQuestion: "誰かにさせる文と、物が変わる文・誰かが変える文をどう分ける？",
      prerequisites: [7, 11, 12],
      returnToLessons: [7, 11, 12],
      legacyRefs: ["grammar-v28.js:38", "G38-01..G38-04", "38-01..38-04"],
      sourceLessons: ["lesson07-v33.js", "lesson11-v36.js", "lesson12-v36.js"],
      excludedScope: ["自他対応の無制限な派生規則化", "受け身との混同"],
      status: "planned"
    },
    {
      code: "H",
      release: "v4.5",
      title: "自分のため・互いに・行為者を言わない文",
      entryQuestion: "自分用にする、互いにする、誰がしたか言わない――行為者の見せ方をどう変える？",
      prerequisites: [3, 12, 17],
      returnToLessons: [3, 12, 17],
      legacyRefs: ["grammar-v28.js:38", "G38-05..G38-09", "38-05..38-12"],
      sourceLessons: ["lesson03-v31.js", "lesson12-v36.js", "lesson17-v39.js"],
      excludedScope: ["-paṭu受け身を日常会話の既定にする", "tāṉを日本語の再帰代名詞へ一律対応"],
      status: "planned"
    }
  ].map(freezeSupplement);

  window.TAMIL_SUPPLEMENT_CATALOG_V42 = Object.freeze({
    version: "4.2.0-dev",
    public: false,
    numberingPolicy: "supplement-codes-not-lessons-21-to-28",
    legacyTravelPolicy: "scene-review-packs-after-supplements",
    progressPolicy: "keep-core-and-supplement-progress-separate",
    supplements: Object.freeze(supplements)
  });
})();

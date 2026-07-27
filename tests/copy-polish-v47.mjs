import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";

const context = vm.createContext({ window: {} });
const run = path => vm.runInContext(fs.readFileSync(path, "utf8"), context, { filename: path });

run("supplements-v42.js");

const examples = Object.freeze([{ id: "kept-example" }]);
const baseSection = (heading, paragraphs = ["元の説明"]) => Object.freeze({
  kicker: "説明",
  heading,
  takeaway: "元の結論",
  paragraphs: Object.freeze(paragraphs)
});

context.window.TAMIL_SUPPLEMENTS_V42 = [
  Object.freeze({
    code: "A",
    navTitle: "全人称の過去・未来",
    title: "第8課の時制と第14課の人称を掛け合わせる",
    deck: "旧説明",
    entryQuestion: "旧質問",
    examples,
    readSections: Object.freeze([])
  }),
  Object.freeze({
    code: "B",
    examples,
    readSections: Object.freeze([baseSection("i- は話し手側、a- は離れた側、e- は未知")])
  }),
  Object.freeze({
    code: "C",
    examples,
    readSections: Object.freeze([baseSection("数字そのものより、後ろに何を置いたかを読む")])
  }),
  Object.freeze({
    code: "F",
    examples,
    readSections: Object.freeze([baseSection("右端の இருக்கு が、過去の出来事を現在へつなぐ")])
  }),
  Object.freeze({
    code: "G",
    examples,
    readSections: Object.freeze([
      baseSection("迂言的使役は、不定詞＋வை で原因を追加する"),
      baseSection("நில்／நிறுத்து、ஓடு／ஓட்டு は頻出の語彙対として覚える"),
      baseSection("起きる、勉強させる、笑わせる")
    ])
  }),
  Object.freeze({
    code: "H",
    examples,
    readSections: Object.freeze([
      baseSection("-க்கோ は再帰代名詞ではなく、主体への関わりを加える補助動詞系"),
      baseSection("-ப்படு 受け身は、形式的な読解層へ置く")
    ])
  })
];

run("copy-polish-v47.js");

const supplements = context.window.TAMIL_SUPPLEMENTS_V42;
const get = code => supplements.find(item => item.code === code);

assert.equal(get("A").navTitle, "主要人称の過去・未来");
assert.match(get("A").title, /主要人称/);
assert.doesNotMatch(get("A").title, /全人称/);
assert.strictEqual(get("A").examples, examples, "language example objects must stay untouched");

assert.match(get("B").readSections[0].heading, /語の最初/);
assert.match(get("C").readSections[0].paragraphs[0], /物を数えるとき/);
assert.match(get("F").readSections[0].paragraphs[0], /表面形にない母音/);
assert.match(get("G").readSections[0].heading, /誰かにさせる/);
assert.match(get("G").readSections[1].paragraphs[0], /文に必要な人・物/);
assert.match(get("H").readSections[0].heading, /動作を自分側へ引き寄せる/);
assert.match(get("H").readSections[1].paragraphs[1], /誰かがした/);

const catalog = context.window.TAMIL_SUPPLEMENT_CATALOG_V42;
assert.equal(catalog.version, "4.7.0-preview");
assert.equal(catalog.supplements.find(item => item.code === "A").title, "主要人称で過去・未来を動かす");
assert.ok(catalog.supplements.every(item => item.status === "プレビュー"));

const audit = context.window.TAMIL_JAPANESE_COPY_AUDIT_V47;
assert.equal(audit.version, "4.7-preview");
for (const field of ["targetTamil", "ttsText", "structuredRoman", "pronunciationRoman", "katakana", "quiz answers", "progress keys"]) {
  assert.ok(audit.preservedFields.includes(field));
}

console.log("Japanese copy polish validation passed");

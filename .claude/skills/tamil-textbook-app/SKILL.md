---
name: tamil-textbook-app
description: 口語タミル語の教科書（TN-SST、スマートフォン向けPWA）のリポジトリで作業するときのスキル。本課・補講・実践パック・音声UIの追加や修正、読み（発音ローマ字・カナ）の監査、版上げとリリース（版付きファイル名、index.html、sw.js、manifest、package.json、README・監査記録）、CI の失敗対応、PR 作成を、このリポジトリの正本と不変条件に沿って進める。「第N課」「補講」「実践パック」「例文を足して」「読みを直して」「カナが違う」「版を上げて」「リリース」「PR を作って」「テストが落ちた」「sw.js」「manifest」と言われたら、このリポジトリで作業するかぎり必ず使う。アプリの外で使う例文集・印刷ドリル・読解カード・語彙表づくりは対象外。
---

# 口語タミル語の教科書アプリ

地域横断型の Standard Spoken Tamil（内部ラベル TN-SST）を、タミル文字・形態・発音・カナの層を分けて教えるスマートフォン向け教材。GitHub Pages で main から公開される。

## 正本と優先順位

利用者の直近の指示 ＞ プロジェクト指示 ＞ 語学規格書01 タミル語統合規格 v2.0-rc.1 ＞ 基盤書 v1.1 ＞ `APPROVED_RULES.md` ＞ `LANGUAGE_CHECK.md`。現在の状態は `README.md` と各監査記録（`*_AUDIT.md`）に書かれている。旧 `REGISTER_AND_KANA_RULES.md` の旧v2本文は廃止済みで、そこにある一律規則（語頭 எ をイェ、非語頭 ai をエ、母音間の一律濁音化、全語 -ai→-e）は使わない。

## 変えてはいけないもの

1. **層を混ぜない。** `targetTamil`／`ttsText`（タミル文字だけ。TTS に渡すのはこれだけ）／`orthographicRoman`（固定表）／`structuredRoman`（固定表＋検証済み境界 `-`。ハイフンを除けば厳密転写と一致）／`pronunciationRoman`（ṅ ṉ ṟ を書かない）／`katakana`（発音層から作る）。
2. **一語形一読み。** 同じタミル語の語形には、どの課でも同じ発音＋カナ。語末 -ai は「そのまま。ただし対格の -ai だけ -e」。`tests/reading-consistency-v49.mjs` が止める。
3. **語形を発明しない。** 新しい語形は監査済みコーパスか、課が教える規則を監査済みの語に当てた派生（根拠を監査記録に明示）だけ。実践パックでは `tools/build-practice-v49.mjs` が未登録の語でビルドを止める。
4. **公開済みの本課データを黙って変えない。** `targetTamil`・`ttsText`・`meaningJa`・問題文・正答・進捗キーは、明示の指示と監査記録なしに一文字も変えない。説明や表示の改善は別層（`clarity-v41.js`、`copy-polish-v47.js` など）で重ねる。
5. **生成物を手で直さない。** `practice-v49.js` は `tools/practice-spec-v49.mjs` を直して `npm run build:practice` で作る。
6. **状態を盛らない。** ネイティブ音声監査前は版を `rc`／`preview` のままにし、補講は `public: false`、`review.nativeReviewed: false` を維持する。端末 TTS はネイティブ監査の代わりにならない。
7. **旧38章を再公開しない。** 旧 `curriculum-v28.js / travel-v28.js / grammar-v28.js` は履歴・移行元で、正しさの根拠ではない。
8. **テストを飛ばさない・弱めない。** 落ちたら原因を直す。

## 作業の型

### A. 内容を足す・直す（本課・補講・実践パック）

1. 対象の規則を `APPROVED_RULES.md` と関連する監査記録で確かめる。
2. データの形は `references/data-schema.md`（必須フィールド、互換名、課の構造の不変条件）。
3. 例文は2〜3件ずつ足し、そのたびに検査を回す。語形の読みは `node .claude/skills/tamil-textbook-app/scripts/export-audited-forms.mjs` の出力（監査済み語形 TSV）と一致させる。
4. 新しい語形・判断は、その変更の監査記録（`references/audit-doc-template.md`）に根拠つきで残す。
5. `npm ci && npm test`。UI を触ったら 390px 幅の Chromium で通し操作（コンソールエラー0・横スクロール0）。

### B. 読みの監査・修正

1. `npm run test:reading` で衝突を出す。監査済み語形 TSV を書き出して全体を見渡す。
2. 多数決で決めず、層の定義から規則を立てて統一する（前例：`READING_CONSISTENCY_AUDIT.md`）。
3. 変えるのは表示層だけ。変更件数と「変えていないもの」を監査記録に書く。

### C. 版上げ・リリース

`references/release-checklist.md` の順に進める（版付きファイル名、`index.html` の読込み、`sw.js` の `CACHE_NAME`／`APP_FILES`、manifest、`meta app-version`、`package.json`＋lock、README・APPROVED_RULES・LANGUAGE_CHECK・監査記録、CI のステップ）。

### D. CI が落ちたとき

ローカルで `npm ci && npm test` を再現し、落ちたスイートの最初の失敗から原因を直す。「一時的な不調」で片付けない。検査の条件を緩めて通すことはしない。

### E. シェルが使えず GitHub API だけで作業するとき

`references/chat-fallback.md`（分割パッチ＋SHA-256 検証＋一時ワークフロー＋後片付け）。使える環境なら、まずクローンしてローカルで `npm test` を回す方を選ぶ。

## ブランチ・PR・公開

- 作業は必ず feature ブランチで行い、main に直接 push しない。
- **main へのマージ＝GitHub Pages での公開**。マージは利用者の明示の了承があるときだけ。
- PR 本文は `references/pr-template.md` の型（変更ごとの番号節、変えていないもの、検査、ネイティブ確認待ち）。
- コミットメッセージは英語の要約行＋本文（何を・なぜ・何を変えていないか）。

## 完了報告

- 変更したファイルと層（データ／表示／UI／検査）
- 検査結果（全スイートの結果、追加・変更したテスト、390px の確認）
- 変えていないもの（本課データ・正答・進捗キー）
- ネイティブ確認待ちの項目と、反転できる既定

## 参照ファイル

| ファイル | 読む場面 |
|---|---|
| `references/data-schema.md` | 例文・問題・解説のデータを書くとき |
| `references/release-checklist.md` | 版上げ・公開の前 |
| `references/audit-doc-template.md` | 監査記録を書くとき |
| `references/pr-template.md` | PR 本文を書くとき |
| `references/chat-fallback.md` | シェルなしで GitHub API だけを使うとき |
| `scripts/export-audited-forms.mjs` | 監査済み語形と固定された読みを TSV で書き出す |

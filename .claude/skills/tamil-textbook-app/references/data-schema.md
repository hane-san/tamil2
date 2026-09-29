# データの形と不変条件

実装：`tamil-core-v30.js` の `entry()`（`normalizeEntry`）。検査：`tests/validate-v30.mjs` ほか。

## 目次

1. 例文項目（entry）
2. 課（chapter）
3. 問題（quiz）
4. 解説（readSections）
5. 実践パック
6. 補講

## 1. 例文項目（entry）

`entry({...})` に渡す必須値：`id`、`targetTamil`、`meaningJa`、`structuredRoman`、`pronunciationRoman`、`katakana`。足りなければ読込み時に例外。

| フィールド | 既定・規則 |
|---|---|
| `targetTamil` | NFC。対象レジスターの自然なタミル文字 |
| `ttsText` | 既定は `targetTamil`。現行範囲では `targetTamil` と一致し、タミル文字＋空白＋許可句読点のみ |
| `orthographicRoman` | 渡しても渡さなくても `transliterateTamil(targetTamil)` で上書きされる。渡した値が固定転写と違えば例外 |
| `structuredRoman` | ハイフンを除けば `orthographicRoman` と一致（検査） |
| `underlyingAnalysis` / `morphemes` | 表面にない基底分析はここ。`structuredRoman` に足さない |
| `pronunciationRoman` | 発音監査済みの値を明示。ṅ ṉ ṟ を書かない。変種は `pronunciationVariants[]` |
| `katakana` | 発音層から。変種は `kanaVariants[]`。12px 以上で初期表示 |
| `broadIPA` | 根拠がある場合だけ。推測で埋めない |
| `japaneseEstablishedName` | 日本語の慣用名（カナ転写と分ける） |
| `primaryRegister` / `regionalProfile` / `styleTags` | 既定 `SST` / `TN-GENERAL` / `["neutral"]`。親しい形は `familiar`、書き言葉は `LT-WR` |
| `counterparts` | 別レジスターの対応形（保守的・文語形など） |
| `spokenOrthographyStatus` | 既定 `pedagogical-normalized` |
| `sourceRefs` | 既定 `["TAMIL-INTEGRATED-v2.0-rc.1"]` |
| `confidence` | 4軸 `form / morphology / pronunciation / registerNaturalness`、既定 B/B/C/B。`D` は公開禁止 |
| `review` | 既定 `{nativeReviewed:false, reviewedAt:null, reviewerProfile:null}` |

互換名（`ta`, `roman`, `morph`, `spokenRoman`, `kana`, `spokenKana`, `ja`, `literal`）は正本フィールドからの**投影**として自動で付く。旧データの `roman` を内容不明のまま正本フィールドへ移さない。

## 2. 課（chapter）

キー：`id, number, navTitle, title, tamilTitle, deck, targets, criticalPoints, readSections, formConfig, quiz, heroExample, examples, scenePhrases, drills`

- 公開本課はちょうど 20 課（PART 0 は別に `reference`）。
- `examples`：8〜12 件（PART 0 も 8〜12）。
- `criticalPoints`（持ち帰る3点）：ちょうど 3。
- `formConfig`：`mode, title, intro, checkpoint, patterns`（語彙を持つ課は `vocabulary` も）。
- 初学者向けの錨（`clarity.lessonAnchors`）と用語ガイド（`clarity.lessonTerms`、用語は `clarity.terms` に定義済み）が全課にある。
- 比較ボード：3〜5 項目、各項目は同じ課の実在する例文 ID を参照し、ラベルを持つ。表示専用の新しいタミル語形を作らない。

## 3. 問題（quiz）

キー：`focus, q, options, answer, feedback, rule, tags`

- 一課 5 問。`focus` はこの順で固定：`形態分解 → 機能選択 → 実用場面 → 混同防止 → 総合復習`。
- 選択肢は 4 つ、重複なし。`tags` は選択肢と同数（正解は `"正解"`、誤答は `"条件との混同"` のような診断名）。
- `rule`（持ち帰る一行）が必須。
- 「なぜその形か」「別の形なら何が変わるか」を最低 3 問で問う。語義当てだけで埋めない。
- 誤答は検証済みの実在形・正しい説明から一特徴だけ変える。存在しない活用形を作らない。正しい別レジスター形は「この場面では不適切」と説明する。
- 表示順は安定した決定規則で並べ替え、保存するのは教材上の選択肢番号（表示位置ではない）。全 100 問で正解の表示位置は 4 位置に 25 問ずつ。

## 4. 解説（readSections）

- 6 セクション以上：5 つの解説ブロック＋短い読み取り 1 つ。各セクションは `kicker / heading / takeaway / paragraphs`（必要に応じ `note`）。
- 順序の基本：持ち帰る3点 → まず結論 → 形を読む → なぜ → 実用場面 → 混同防止 → 短い読み取り。
- 各段落は一文の結論から始める。定義の列挙から始めない。
- 解説で初出のタミル語句は `<span class="ta-inline" lang="ta">…</span> <span class="roman-inline">(structuredRoman)</span>`。括弧内に発音近似を混ぜない。
- 短い読み取り（`miniReading.ids`）は 2〜5 文で、同じ課の実在する例文 ID を参照する。

## 5. 実践パック

- 各課 `scenePhrases` 6 文（`scene` を持つ entry）と `drills` 5 問。場面は `tools/practice-spec-v49.mjs` の `SCENE_ORDER`（空港・駅／移動・オート／買い物／食事／ホテル／道をきく／人と話す／困ったとき）。
- 追加ドリルは選択肢を全部正しい文にして、場面に合うものを選ばせる。
- 原稿は `tools/practice-spec-v49.mjs`（文を語形の並びで書く。派生語形は `DERIVED` に明示）→ `npm run build:practice` → `practice-v49.js`（生成物）。
- 状態：`review.nativeReviewed:false`、`confidence.registerNaturalness:"C"`。
- 保存キーは `tamil-practice-drills-v49`・`tamil-practice-prefs-v49`。本課（`tamil-verb-engine-v2`）・補講（`tamil-supplements-v42`）と混ぜない。

## 6. 補講

- A〜H。第21〜28課とは表示しない。本課へ往復する別レイヤー（`#supp=hub`、`#supp=A&view=read`）。
- 補講A は 10 例、B〜H は各 12 例。各補講に対照表、3 つの急所、6 解説ブロック、3 文の読み取り、5 問の診断問題。
- 未確認の人称形を自動生成して「全人称」と表示しない。
- `LT-WR`・`reading-only` の形（例：補講H の `-ப்படு` 受け身）は日常会話の無標形にしない。
- ネイティブ監査まで `public: false`。レビュー票は `SUPPLEMENT_NATIVE_REVIEW_QUEUE.md`。

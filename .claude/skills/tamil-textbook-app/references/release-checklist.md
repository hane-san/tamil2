# 版上げ・リリースの手順

版の呼び方：本課は `vX.Y-rc.N`、プレビュー層は `vX.Y-preview`。ネイティブ音声監査が済むまで `rc`／`preview` を外さない。

## 1. ファイル

- 変更したランタイムファイルは**版付きの新しいファイル名**で作る（例：`practice-v49.js`、`styles-practice-v49.css`）。旧版のファイルは履歴として残し、読込みから外す。
- 生成物（`practice-v49.js` など）はビルドで作る。

## 2. 配線（どれか一つでも漏れると、オフライン時に古い版が出る）

- [ ] `index.html` の `<script>`／`<link rel="stylesheet">` を新しいファイル名へ。読込み順を守る（`tamil-core` → `reference` → 各課 → `reading` → `pedagogy` → `clarity` → `practice` → `curriculum` → `audio-shell` → `app` → 補講ローダー → UI 層）。
- [ ] `index.html` の `<meta name="app-version" content="…">`
- [ ] `index.html` の `<link rel="manifest" href="manifest-vNN.webmanifest">`（manifest を更新したとき）
- [ ] `sw.js` の `CACHE_NAME`（`tamil2-tn-sst-vNN-…-YYYYMMDD` の形で必ず変える）
- [ ] `sw.js` の `APP_FILES`（新ファイルを追加し、読み込まなくなったファイルを外す）
- [ ] `package.json` の `version`、`package-lock.json` を `npm install --package-lock-only` で同期（手で直さない）
- [ ] 新しいテストを `package.json` の `test` と `.github/workflows/validate.yml` の層別ステップの両方に登録

## 3. 文書

- [ ] `README.md`：現在の状態（版・範囲・監査状態）、主なファイル、検査の一覧
- [ ] `APPROVED_RULES.md`：新しく承認された規則を「vX.Y承認追記」として末尾に
- [ ] `LANGUAGE_CHECK.md`：言語判断と検査結果
- [ ] 変更ごとの監査記録（`*_AUDIT.md`）：`audit-doc-template.md` の型
- [ ] ネイティブ確認待ちの項目を README の「公開前に人間が確認する項目」に追加

## 4. 検査

```bash
npm ci
npm test
```

- 全スイート green（現在 12 スイート）。
- UI を触ったときは 390px 幅の Chromium で通し操作：対象画面の表示、タップ再生（1回の操作で1回だけ再生）、進捗の保存とリロード後の保持、本課⇄補講⇄実践パックの行き来。コンソールエラー 0、横スクロール 0。

## 5. 公開

- feature ブランチ → PR（`pr-template.md`）→ CI green → **利用者の明示の了承を得てから** main にマージ（＝GitHub Pages で公開）。
- マージ後、公開ページで `app-version` と Service Worker の更新（古いキャッシュが消えること）を確かめる。

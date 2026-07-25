# 口語タミル語の教科書

地域横断型の Standard Spoken Tamil（SST）を、文字・形態・発音・カナの役割を分けて学ぶスマートフォン向け教材です。

このリポジトリの公開正本は `v3.1-rc.1` です。現在の承認済み制作範囲は次の5単位です。

- PART 0：名詞格・斜格語幹・複数の早見、12母音×18子音のタップ式文字表
- 第1課：名詞の形
- 第2課：代名詞と中心格
- 第3課：所有・共同・道具
- 第4課：場所・方向・起点

旧v2.8の38章データは履歴・移行元として残していますが、最新規格で再検証するまで `index.html` から読み込みません。

## 言語基準

- 主表示：`primaryRegister:SST`
- 地域プロファイル：`regionalProfile:TN-GENERAL`
- 既定スタイル：`styleTags:[neutral]`
- 内部複合ラベル：`TN-SST`
- 現代チェンナイ：自然さと旅行実用性の照合地点
- 現代文語：`LT-WR` として別の対応層

`TN-SST` は公的規格名ではありません。タミル・ナードゥ州で地域横断的に通じる比較的中立なSSTを、このプロジェクト内で指定するラベルです。狭義のチェンナイ口語、Madras Bashai、スラング、英語混交は無標の標準にしません。

## 表示とデータ

公開例文は最低限、次の層を別フィールドで持ちます。

1. `targetTamil` — 対象レジスターのタミル文字
2. `orthographicRoman` — 固定表による厳密文字転写
3. `structuredRoman` — 表面形を保つ形態境界付き転写
4. `pronunciationRoman` — 検証済みの広い学習用発音
5. `katakana` — 発音層から作る音読補助
6. `meaningJa` / `literalJapanese` — 自然訳／必要時の直訳

互換表示の `ta / roman / spokenRoman / kana / ja` は新フィールドからのみ投影します。旧 `roman` の内容を自動判定して新正本へ昇格させません。

例：

```text
சாப்பிடு
orthographicRoman: cāppiṭu
pronunciationRoman: sāppiḍu
```

```text
எனக்கு
orthographicRoman: eṉakku
structuredRoman: eṉ-akku
```

## 使い方

HTTPSまたはローカルHTTPサーバーで `index.html` を開きます。

```bash
python3 -m http.server 8000
```

ブラウザで `http://localhost:8000/` を開いてください。

- 例文カード全体：個別再生
- 「全例文を聞く」：上から連続再生
- 音声ドック：前／次、停止、通常／ゆっくり、1回／2回
- `Aa`：カナ・直訳・構造表示の切替、印刷
- 左上メニュー：PART 0、第1課〜第4課、進捗

旧版でカナ非表示を保存していた場合、v3への初回移行時だけカナを表示へ戻します。他の学習記録は同じローカル保存領域に残します。

## 音声

- TTSには `ttsText` の自然なタミル文字だけを渡します。
- ローマ字、形態素ハイフン、カナ、日本語は読み上げません。
- `ta-IN` 音声を優先します。
- 端末にタミル語音声がない場合は短く通知し、ブラウザ既定音声で再生を試みます。
- 一文字表も同じTTS経路を使います。

音声合成の品質は端末とブラウザに依存します。`pronunciationRoman`、カナ、端末TTSが一致するとは限らないため、個別語の最終発音はネイティブ音声監査で確定します。

## 主なファイル

- `index.html` — 公開画面
- `tamil-core-v30.js` — 固定文字転写、標準スキーマ、明示的互換投影
- `reference-v30.js` — PART 0
- `lesson01-v30.js` — 第1課
- `lesson02-v30.js` — 第2課
- `lesson03-v31.js` — 第3課
- `lesson04-v31.js` — 第4課
- `curriculum-v31.js` — 現在の公開範囲を組み立てる入口
- `app-v28.js` — ナビ、進捗、練習、音声、印刷（UI本体を段階移行中）
- `styles-v28.css` — モバイル・印刷スタイル
- `manifest-v31.webmanifest` / `sw.js` — PWAとオフラインキャッシュ
- `tests/validate-v30.mjs` — ゴールデンテストと全公開データlint
- `tests/dom-v30.cjs` — 設定移行、描画、音声イベントのDOM操作テスト
- `APPROVED_RULES.md` — 実装時に守る承認済みルール
- `LANGUAGE_CHECK.md` — 言語判断、根拠、保留事項、検証記録

旧 `curriculum-v28.js`、`travel-v28.js`、`grammar-v28.js`、`reference-v28.js`、`transcription-v28.js` は移行元です。公開画面へ再接続するには、新スキーマへの個別監査と承認が必要です。

## 検証

```bash
npm install
npm test
```

この検査は次を確認します。

- 固定転写の独立ゴールデンケース50件以上
- 全公開項目のNFC、厳密転写、構造保存
- TTSに非タミル文字層が混ざっていないこと
- レジスター、出典、4軸信頼度、レビュー状態
- 例文数、2〜5文の短い読み取り、問題数、選択肢・診断タグ
- 旧38章の正本ファイルを `index.html` が読み込まないこと
- 小型例文カードのカナが12px以上であること
- 旧カナ設定の移行とタミル語音声不在時の通知
- 216文字表、カード・キー・連続・一文字音声が一操作一回だけ発火すること

第3・4課を含む `confidence.pronunciation:C` の項目は設計上公開可能ですが、ネイティブ音声監査待ちです。`D` は公開できません。

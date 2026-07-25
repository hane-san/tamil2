# 承認済み制作・実装ルール v3.0-rc.1

更新日：2026-07-25

このファイルは現行アプリの承認済みルールを要約する。矛盾時は、ユーザーの直近指示、プロジェクト指示、`語学規格書01_タミル語統合規格_v2_0-rc_1.md`、基盤書v1.1群の順を優先する。

## 1. 公開範囲

ユーザーが明示的に広げるまで、公開正本は次だけとする。

- 共通UI
- PART 0
- 第1課「名詞の形」
- 第2課「代名詞と中心格」
- README、言語検証記録、承認ルール、テスト

旧38章は削除しないが、移行元・履歴データであり、`index.html` から読み込まない。旧章を一括変換して再公開しない。

## 2. 既定レジスター

無指定の会話・例文・語彙・発音・カナ・TTSは、次を既定とする。

```text
primaryRegister: SST
regionalProfile: TN-GENERAL
styleTags: [neutral]
internalCompositeLabel: TN-SST
```

- `TN-SST` はプロジェクト内部名。
- 現代チェンナイは実用照合地点であり、狭い地域方言そのものを主軸にしない。
- Madras Bashai、俗語、乱暴な映画語、英語混交は明示タグなしで主表示しない。
- 現代文語は `LT-WR` の対応層に置く。
- 正しい別レジスター形を誤文扱いしない。

## 3. 必須データ層

公開教材項目は最低限、次を持つ。

```text
id
targetTamil
ttsText
orthographicRoman
structuredRoman
pronunciationRoman
broadIPA
katakana
meaningJa
literalJapanese
morphemes
grammarNote
vocabulary
audioGroup
sourceTamil
counterparts
primaryRegister
regionalProfile
styleTags
sourceRefs
confidence
review
```

`broadIPA` は根拠がある場合だけ登録し、推測で埋めない。

互換フィールドは次の明示的投影だけを許可する。

| 互換名 | 正本 |
|---|---|
| `ta` | `targetTamil` |
| `roman` / `morph` | `structuredRoman` |
| `spokenRoman` | `pronunciationRoman` |
| `kana` / `spokenKana` | `katakana` |
| `ja` | `meaningJa` |
| `literal` | `literalJapanese` |

旧 `roman` を内容不明のまま厳密転写・構造・発音のいずれかへ移さない。

## 4. 固定文字転写

`orthographicRoman` は統合規格第6〜8節の固定表だけで生成する。

- 母音長：`ā ī ū ē ō`
- `க ச ட த ப ற → k c ṭ t p ṟ`
- `ங ஞ ண ந ம ன → ṅ ñ ṇ n m ṉ`
- `ய ர ல வ ழ ள → y r l v ḻ ḷ`
- `ஃ → ḵ`
- `ஜ ஶ ஷ ஸ ஹ → j ś ṣ s h`

位置異音、有声化、弱化を混ぜない。

```text
சாப்பிடு → cāppiṭu
புத்தகம் → puttakam
அது → atu
```

`structuredRoman` はこの文字列へ検証済み境界 `-` だけを加える。ハイフンを除けば `orthographicRoman` と一致しなければならない。

```text
எனக்கு → eṉ-akku
வீட்டுக்கு → vīṭṭ-ukku
```

基底分析は `underlyingAnalysis` へ置き、表面形にない要素を構造行へ捏造しない。

## 5. 発音とカナ

- `pronunciationRoman` は対象レジスターの検証済み広い発音。
- 変種は `pronunciationVariants[]`。
- カナは発音層から作る。厳密転写や原語綴りから直生成しない。
- 長母音は `ー`、阻害音重子音は `ッ`。
- `ழ` はラ行近似、`வ` は原則ヴァ行。
- 語頭 `எ/ஏ` を一律イェ系にしない。
- 非語頭 `ஐ/ai` を一律エにしない。
- 母音間阻害音を一律濁音にしない。
- 日本語慣用名は `japaneseEstablishedName` に分ける。

個別語の主発音を対象音声で確定できない場合、`confidence.pronunciation:C` としてレビュー対象にする。`D` は公開禁止。

## 6. 格と代名詞

- 対格を「書記 -ai／口語 -e／省略 Ø」の文字列変換として教えない。
- 対格標示は、有生性、特定性、定性、動詞とのまとまり、レジスターから判断する。
- 無標識目的語を「発音で落ちただけ」と説明しない。
- `என்னை` は `eṉṉai`／`eṉṉ-ai`／登録発音 `enne`。
- `அதை` は `atai`／`at-ai`／登録発音 `ade`。
- `எனக்கு` の構造表示は `eṉ-akku`。
- 与格は到達・受け手に加え、必要、好み、知識等の経験者を表す。
- `நீ` は親称単数、`நீங்க` は敬意単数／複数。場面不一致と文法的誤りを分ける。

斜格語幹の中心例：

```text
வீடு → வீட்ட- → வீட்டுக்கு / வீட்டுல
மரம் → மரத்த- → மரத்துக்கு / மரத்துல
```

無生物は数詞が複数性を担うと名詞を無標識にできる。複数接尾辞を自動追加しない。

## 7. 表示

主要例文の基本順：

1. `targetTamil`
2. `structuredRoman`
3. `katakana`
4. `pronunciationRoman`
5. `meaningJa`
6. 必要時 `literalJapanese`

`orthographicRoman`、IPA、出典、信頼度は詳細・監査層に置ける。

- iPhone縦画面、一列を優先。
- タミル文字は日本語本文より大きくする。
- カナは初期表示し、小型カードでも12px以上。
- 旧版でカナ非表示ならv3初回だけ表示へ移行する。
- 例文カード全体をタップ・Enter・Spaceで再生できる。
- カードと再生表示のイベントを一経路にし、二重再生しない。
- 読み上げ状態、キーボード操作、スクリーンリーダー用ラベルを持つ。

## 8. TTS

- TTSへ渡すのは自然なタミル文字 `ttsText` だけ。
- ローマ字、形態ハイフン、カナ、日本語を渡さない。
- `ta-IN` を優先。
- タミル語音声がない端末では短く通知し、既定音声で試す。
- 通常／ゆっくり、1回／2回、前／次、停止、連続再生を維持する。

## 9. 問題

- 一課3〜5問。
- 誤答は検証済みの実在形または正しい説明から一特徴だけ変える。
- 誤形を発明しない。
- 各選択肢に診断タグを持たせる。
- 正しい別レジスター形は、必要なら「設問場面では不適切」と説明する。

## 10. 検証ゲート

公開前に必ず実行する。

```bash
npm install
npm test
```

必須：

- 固定転写ゴールデン50件以上
- 全公開データlint
- NFC
- strict／structuredの一致
- TTS文字種
- 4軸信頼度
- iPhone相当幅
- カナ初期表示
- カード全体タップ
- 二重再生防止
- 連続音声
- タミル語音声不在時
- 旧38章が公開入口から外れていること

ネイティブ音声監査前は版を `rc` とする。

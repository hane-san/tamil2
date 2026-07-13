# சென்னை தமிழ் — タミル語基礎文法アプリ試作

第1課「名詞の形」と第2課「代名詞と中心となる格」だけを収録した、スマートフォン向け試作です。第3課以降の教材データは含めていません。

## ファイル構成

```text
index.html
styles.css
app.js
lessons/
  lesson01.js
  lesson02.js
README.md
LANGUAGE_CHECK.md
```

- `index.html`：共通画面とスクリプト読込み
- `styles.css`：スマートフォン優先の共通デザイン
- `app.js`：描画、課切替、確認問題、Web Speech APIによるTTS
- `lessons/lesson01.js`：第1課の教材データ
- `lessons/lesson02.js`：第2課の教材データ
- `LANGUAGE_CHECK.md`：画面へ出さない言語検証メモ

教材データとUIを分離しているため、今後の課は同じデータ形で追加できます。ただし、この試作の検証が終わるまで第3課以降を追加しない前提です。

## 起動

外部ライブラリやビルド処理はありません。フォルダ構成を保ったまま `index.html` を開きます。

ブラウザのローカルファイル制限がある場合は、このフォルダで簡易サーバーを起動してください。

```bash
python3 -m http.server 8000
```

その後、ブラウザで `http://localhost:8000/` を開きます。

## TTS

- Web Speech APIを使用します。
- `ta-IN` または `ta` の音声を端末内から探します。
- TTSへ渡す文字列は各例文の `ttsText` だけです。
- 日本語、ローマ字、カタカナ、解説、ボタン名は読み上げません。
- タミル語音声がない場合も、教材表示と確認問題は動作します。

対応操作：

- 各例文の個別再生
- 通常／ゆっくり
- 1回／2回
- 課内例文の連続再生
- 停止
- 再生中カードの強調

## データ項目

各例文は主に次の項目を持ちます。

```js
{
  id,
  tamil,
  ttsText,
  romanised,
  surfaceRomanised,
  katakana,
  japanese,
  literalJapanese,
  morphemes,
  grammarNote,
  vocabulary,
  audioGroup
}
```

`surfaceRomanised` は、形態素の構造と実際の表面形が大きくずれる場合だけ使います。

## 設計上の判断

- 一列の縦スクロールを基本にし、長い固定ヘッダーを避けました。
- 下部には音声操作だけを固定し、教材本文の横幅を狭めています。
- タミル文字は日本語本文より大きくしています。
- アイボリー、青緑、マンゴー、少量のピンクで、写真なしのチェンナイらしい明るさを作りました。
- コーラムを直接模写せず、細い反復幾何学線だけを装飾に使っています。
- 見出しは短くし、長い使い方説明や学習目標は画面に置いていません。
- 文法解説では「形→理由→対比→後の課への接続」を本文として残しています。

## 簡易検証

Node.js がある環境では、JavaScriptの構文を確認できます。

```bash
node --check app.js
node --check lessons/lesson01.js
node --check lessons/lesson02.js
```

実機では、iPhone SafariとAndroid Chromeの両方で、文字サイズ、下部ドック、TTS音声、長文スクロールを確認してください。

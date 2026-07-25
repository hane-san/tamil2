# レジスター・カナ規則（移行案内）

このファイルの旧v2本文は廃止した。

旧版にあった次の規則は、最新の統合規格と衝突するため使用しない。

- 狭い意味の「チェンナイ口語」を無標の主表示にする
- タミル文字列から常に同じカナを直接生成する
- 語頭 `எ / ஏ` を一律 `イェ / イェー` にする
- 非語頭 `ை / ai` を一律エ段にする
- 母音間阻害音を一律濁音にする
- `-ai → -e` を全語へ適用する

現行の正本は次の順で参照する。

1. プロジェクト指示
2. `語学規格書01_タミル語統合規格_v2_0-rc_1.md`
3. 基盤書v1.1
4. `APPROVED_RULES.md`
5. `LANGUAGE_CHECK.md`

実装上の要点：

```text
primaryRegister: SST
regionalProfile: TN-GENERAL
styleTags: [neutral]
internalCompositeLabel: TN-SST
```

カナは `broadIPA` または同等の検証済み発音記述から作り、`katakana` に登録する。厳密文字転写は `orthographicRoman`、形態表示は `structuredRoman`、実用発音は `pronunciationRoman` に分ける。

詳細は `APPROVED_RULES.md` を参照する。

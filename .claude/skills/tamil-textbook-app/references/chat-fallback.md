# シェルなし（GitHub API だけ）で大きな変更を入れる手順

クローンしてローカルで `npm ci && npm test` を回せる環境（Claude Code など）があるなら、そちらを使う。この手順は、チャットから GitHub API でファイルを書くことしかできないときの代替。v4.0／v4.1 のリリースで実際に使い、途中で次の事故が起きた：

- 一つのペイロードが大きすぎて途中で壊れた（「Remove corrupted payload fragment」）
- 検査結果をチャットへ持ち帰れず、結果の取り出しだけで十数回のコミットを重ねた

## 手順

1. **リリースブランチを切る**（例：`release/vX.Y-rc.N`）。main には触れない。
2. **変更を一つのパッチにまとめる**：`git diff` 相当の unified diff を作り、gzip → base64。
3. **SHA-256 を記録する**：gzip 後のファイルのハッシュを控える。
4. **分割して置く**：base64 を小さな部品（`.vXYpatch.part-00` … `part-NN`）に分けて、1 部品ずつコミットする。部品は小さめにし、大きな一括書き込みをしない。
5. **一時ワークフローを置く**（`.github/workflows/apply-vXY-….yml`）。トリガーは、そのブランチに目印ファイル（`.vXYpatch.ready`）が push されたとき。中身：
   - `cat .vXYpatch.part-* | base64 -d > patch.gz`
   - `echo '<sha256>  patch.gz' | sha256sum -c -`（一致しなければ止まる）
   - `gzip -dc patch.gz > patch && git apply --check patch && git apply patch`
   - `npm ci --no-audit --no-fund` → `npm test | tee test.log`
   - **検査結果は `$GITHUB_STEP_SUMMARY` に書き出す**（ジョブのログ・サマリーを API で読めるので、結果をファイルに書き戻すコミットを重ねなくてよい）
   - 後片付け：`node_modules`、部品、目印ファイル、**この一時ワークフロー自身**を削除
   - 変更パスの検証：`git diff --cached --name-only origin/main` が、期待するファイル一覧と完全一致すること
   - bot としてコミットしてリリースブランチへ push
6. **目印ファイルを push** して実行。失敗したらログ（`get_job_logs` 等）を読み、原因を直した新しいパッチで 2〜5 をやり直す。
7. リリースブランチから main への PR を作る。一時ファイル・一時ワークフローが残っていないことを PR の差分で確かめる。
8. main へのマージは利用者の明示の了承を得てから。

## やってはいけないこと

- ハッシュ検証なしで部品を組み立てる
- 一時ワークフローや部品を main に残す
- 検査に通っていない状態で「リリース済み」と報告する

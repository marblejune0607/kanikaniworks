# 動画ギャラリーの更新方法

ページ: /gallery/

海底あるある第1〜20話（新しい順）とアクタンモクタン全21首版を掲載。PCでの再生は確認済み。スマートフォンでの操作は未確認です。

1. MP4を public/videos/ に追加。1ファイル25 MiB未満。互換性のためH.264 / AACを推奨。Web向けにfaststartを設定。
2. 正方形1:1のサムネイルを public/images/gallery/ に追加。
3. src/data/videos.ts の配列に作品を追加。series、title、caption、poster、srcを指定しpublishedをtrueにします。配列順が表示順です。
4. タイトルとサムネイルを作品に合わせて確認。
5. npm run build 後、PC・スマホで確認して通常のGitHub→Cloudflare Pagesの手順で反映。

初期HTMLにMP4のsrcはありません。クリック後に選択された1本だけを読み込み、閉じるとsrcを外して停止します。Esc、背景クリック、閉じるボタンに対応。前後ボタンで表示順に公開済み作品を移動します。

動画の差し替えを繰り返すとGit履歴が肥大化するため、動画は公開用に圧縮し、元データは登録しないでください。容量が増えたらR2などへ移行できます（srcを配信URLに変更）。

デスクトップのkanikaniworksに実装しています。反映対象はsrc/pages/index.astro、src/pages/gallery.astro、src/data/videos.ts、docs/video-gallery.md、および追加動画・画像です。

# himachatclient

このパッケージはヒマチャットのログイン処理、募集、タイムライン投稿を簡易的にするためのものです。

## インストール方法

npm install himachatclient


## 使用方法

const HimaChatClient = require('himachatclient');

const client = new HimaChatClient();

(async () => {
  await client.login('UserID', 'Password');
  await client.bosyu('content');
  await client.timeline('content');
})();

bosyu()、timeline()を使うには最初にlogin()を入れないと出来ません。
login()のUserIDにはログインIDを、Passwordにはログインパスワード
bosyu()のcontentには募集内容
timeline()のcontetには投稿内容
「\n」を改行したいところに入れることによって改行が出来ます。

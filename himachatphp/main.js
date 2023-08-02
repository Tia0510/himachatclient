const HimachaLogin = require('./syori.js');

const client = new HimachaLogin();

(async () => {
    await client.login("ユーザーID","パスワード");

  })();


  
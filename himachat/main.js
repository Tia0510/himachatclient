const HimachaLogin = require('./syori.js');

const client = new HimachaLogin('ログインID', 'ログインパスワード');

client.login().catch(console.error);

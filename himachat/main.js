const HimachaLogin = require('./shori.js');

const client = new HimachaLogin('ログインID', 'ログインパスワード');

client.login().catch(console.error);
class HimachaLogin {
    constructor(id, pass) {
      this.logindata = {
        id: id,
        pass: pass
      };
    }
  
    async login() {
      let mysession, myid;
  
      const response = await fetch('https://himachat.jp/entrance.php?mode=entry', {
        method: 'GET',
        credentials: 'include'
      });
  
      let data = await response.text();
      if (data.charCodeAt(0) === 0xFEFF) {
        data = data.slice(1);
      }
    
      const json = JSON.parse(data);
      mysession = json.mysession;
      myid = json.myuid;
  
      const params = new URLSearchParams();
      params.append("marumie", myid);
      params.append("mysession", mysession);
      params.append("fid", this.logindata.id);
      params.append("fpass", this.logindata.pass);
      params.append("hkey", "null");
  
      await fetch('https://himachat.jp/community/top_Login.php', {
        method: 'POST',
        body: params,
      });
    }
  }
  
  module.exports = HimachaLogin;
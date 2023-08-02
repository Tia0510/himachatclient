class HimachaLogin {
  constructor() {
    this.mysession = null;
    this.myid = null;
  }

  async login(id, pass) {
    const response = await fetch('https://himachat.jp/entrance.php?mode=entry', {
      method: 'GET',
      credentials: 'include'
    });

    let data = await response.text();
    if (data.charCodeAt(0) === 0xFEFF) {
      data = data.slice(1);
    }

    const json = JSON.parse(data);
    this.mysession = json.mysession;
    this.myid = json.myuid;

    const params = new URLSearchParams();
    params.append("marumie", this.myid);
    params.append("mysession", this.mysession);
    params.append("fid", id);
    params.append("fpass", pass);
    params.append("hkey", "null");

    await fetch('https://himachat.jp/community/top_Login.php', {
      method: 'POST',
      body: params,
    });
  }

  async bosyu(content) {
    if (!this.myid || !this.mysession) {
      throw new Error('募集をするには先にログインする必要があります！');
    }

    const params = new URLSearchParams();
    params.append("marumie", this.myid);
    params.append("mysession", this.mysession);
    params.append("mozi", content);

    await fetch("https://himachat.jp/community/yobikomi_Toukou.php", {
      method: "POST",
      body: params
    });
  }

  async timeline(content) {
    if (!this.myid || !this.mysession) {
      throw new Error('タイムラインを投稿するには先にログインする必要があります！');
    }

    const params = new URLSearchParams();
    params.append("marumie", this.myid);
    params.append("mysession", this.mysession);
    params.append("fnaiyou", content);

    await fetch("https://himachat.jp/community/timeline_Toukou.php", {
      method: "POST",
      body: params
    });
  }
}

module.exports = HimachaLogin;
import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

class HTTPService {
  // url = "https://api.github.com/octocat";
  // token = process.env.GITHUB_TOKEN;

  // fetch(url: string, method: "POST" | "GET", headers = {}) {
  //   const newUrl = this.url + url;
  //   return fetch(newUrl, {
  //     method,
  //     headers: { ...headers, Authorization: `Bearer ${this.token}` },
  //   });
  // }

  async get(url: string) {
    return await octokit.request("GET /" + url);
    // return this.fetch(url, "GET", headers);
  }
}

export default HTTPService;

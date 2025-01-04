import HTTPService from "@/services/HTTPService";

class ReposServices extends HTTPService {
  async getRepos() {
    const result = await this.get("/repos");
    return result;
    // return await result.json();
  }
}

const reposServices = new ReposServices();

export default reposServices;

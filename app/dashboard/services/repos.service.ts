/* eslint-disable @typescript-eslint/no-explicit-any */
import createQueries from "@/services/createQueries";
import HTTPService from "@/services/HTTPService";

class ReposServices extends HTTPService {
  async getRepos(sp: { q?: string }) {
    try {
      const queries = createQueries(sp);
      const hasQuery = sp.q && sp.q.trim() !== "";
      const endpoint = hasQuery ? `/search/repositories` : `/repositories`;

      const result = await this.get(`${endpoint}?${queries}`);
      return result;
    } catch (error: any) {
      console.error({ error });
      throw new Error(error?.message || "something went wrong");
    }
  }
}

const reposServices = new ReposServices();

export default reposServices;

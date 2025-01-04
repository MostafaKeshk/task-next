/* eslint-disable @typescript-eslint/no-explicit-any */
class HTTPService {
  private readonly baseURL = "https://api.github.com";

  async get(url: string) {
    try {
      const response = await fetch(`${this.baseURL}${url}`, {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          Accept: "application/vnd.github.v3+json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "something went wrong");
      }

      return await response.json();
    } catch (error: any) {
      console.error({ error });
      throw new Error(error?.message || "something went wrong");
    }
  }
}

export default HTTPService;

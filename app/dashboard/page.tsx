import { Suspense } from "react";
import reposServices from "./services/repos.service";
import ReposContainer from "./component/ReposContainer";
import SearchInput from "@/components/SearchInput";

const Dashboard = async ({
  searchParams,
}: {
  searchParams: { q?: string };
}) => {
  const sp = await searchParams;
  const hasQuery = sp.q && sp.q.trim() !== "";

  const result = await reposServices.getRepos(sp);
  const items = hasQuery ? result.items : result;
  return (
    <div>
      <h1 className="text-2xl text-center mb-5">Repos</h1>
      <SearchInput />

      <Suspense fallback={<h2>Loading...</h2>}>
        <ReposContainer list={items} />
      </Suspense>
    </div>
  );
};

export default Dashboard;

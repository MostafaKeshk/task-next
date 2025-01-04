import { Suspense } from "react";
import reposServices from "./services/repos.service";
import ReposContainer from "./component/ReposContainer";

const Dashboard = async () => {
  const result = await reposServices.getRepos();

  console.log({ result });
  return (
    <div>
      <h1>Repos</h1>
      <Suspense fallback={<h2>Loading...</h2>}>
        <ReposContainer list={[]} />
      </Suspense>
    </div>
  );
};

export default Dashboard;

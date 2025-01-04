import IRepo from "../../services/IRepo";
import RepoCard from "./RepoCard";

const ReposContainer = ({ list }: { list: IRepo[] }) => {
  if (list.length === 0) {
    return <p>No repositories found.</p>;
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {list.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
};

export default ReposContainer;

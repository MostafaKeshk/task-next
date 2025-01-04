import Image from "next/image";
import IRepo from "../../services/IRepo";

const RepoCard = ({ repo }: { repo: IRepo }) => {
  return (
    <div key={repo.id} className="mb-5">
      <div className="flex items-start">
        <Image
          src={repo.owner.avatar_url}
          alt={`${repo.owner.login}'s avatar`}
          width={50}
          height={50}
          className="rounded-full"
        />
        <div className="ml-3">
          <h3 className="text-xl font-semibold">{repo.name}</h3>
          <p className="text-gray-600">
            {repo.description || "No description available."}
          </p>
          <p className="text-sm text-gray-500">
            <strong>Stars:</strong> {repo.stargazers_count}
          </p>
          <p className="text-sm text-gray-500">
            <strong>Forks:</strong> {repo.forks_count}
          </p>
          <p className="text-sm text-gray-500">
            <strong>Open Issues:</strong> {repo.open_issues_count}
          </p>
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            View Repo on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default RepoCard;

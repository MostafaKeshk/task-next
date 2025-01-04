import Paths from "@/routes/paths";
import Link from "next/link";

const Home = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <Link href={Paths.dashboard}>Login</Link>
    </div>
  );
};

export default Home;

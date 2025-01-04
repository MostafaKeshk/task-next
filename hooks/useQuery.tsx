import { useRouter, useSearchParams } from "next/navigation";

const useQuery = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const updateSearchParam = (key: string, value: string) => {
    const currentParams = new URLSearchParams(searchParams.toString());
    if (value) {
      currentParams.set(key, value);
    } else {
      currentParams.delete(key);
    }
    const newUrl = `?${currentParams.toString()}`;
    window.history.replaceState(null, "", newUrl);
    router.refresh();
  };

  return updateSearchParam;
};

export default useQuery;

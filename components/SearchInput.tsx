"use client";

import useDebounce from "@/hooks/useDebounce";
import useQuery from "@/hooks/useQuery";
import { useState, useEffect, ChangeEvent } from "react";

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const updateSearchParam = useQuery();
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    if (debouncedSearchTerm !== undefined) {
      updateSearchParam("q", debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={handleInputChange}
      placeholder="Search..."
      className="border w-full mb-4 border-purple-400"
    />
  );
};

export default SearchInput;

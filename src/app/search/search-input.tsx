"use client";

import { useEffect, useState } from "react";

import Input from "@/components/common/input";
import { useKeyword } from "@/lib/hooks/context/useKeyword";
import useDebounce from "@/lib/hooks/useDebounce";
import { cn } from "@/utils/cn";

interface SearchInputProps {
  className?: string;
}

function SearchInput({ className }: SearchInputProps) {
  const { setKeyword: setDebouncedKeyword } = useKeyword();
  const [keyword, setKeyword] = useState<string>("");
  const debouncedKeyword = useDebounce(keyword, 500);

  useEffect(() => {
    setDebouncedKeyword(debouncedKeyword);
  }, [debouncedKeyword, setDebouncedKeyword]);

  return (
    <Input
      className={cn("w-full rounded-full", className)}
      placeholder="검색어를 입력해주세요"
      autoFocus
      value={keyword}
      onChange={(e) => setKeyword(e.target.value)}
    />
  );
}

export default SearchInput;

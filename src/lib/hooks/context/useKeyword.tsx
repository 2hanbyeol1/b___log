"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface KeywordContextType {
  keyword: string;
  setKeyword: Dispatch<SetStateAction<string>>;
}

const KeywordContext = createContext<KeywordContextType>({
  keyword: "",
  setKeyword: () => {},
});

export function KeywordProvider({ children }: { children: ReactNode }) {
  const [keyword, setKeyword] = useState("");

  return (
    <KeywordContext.Provider value={{ keyword, setKeyword }}>
      {children}
    </KeywordContext.Provider>
  );
}

export function useKeyword() {
  const context = useContext(KeywordContext);

  if (!context) {
    throw new Error("useKeyword must be used within a KeywordProvider");
  }

  return context;
}

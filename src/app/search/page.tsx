import Container from "@/components/common/container";
import { KeywordProvider } from "@/lib/hooks/context/useKeyword";

import SearchInput from "./search-input";
import SearchList from "./search-list";

function SearchPage() {
  return (
    <Container as="section">
      <h2 className="mb-6 text-2xl font-semibold">
        어떤 내용을 찾고 계신가요?
      </h2>

      <KeywordProvider>
        <SearchInput className="mb-6" />
        <SearchList />
      </KeywordProvider>
    </Container>
  );
}

export default SearchPage;

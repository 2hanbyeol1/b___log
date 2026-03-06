import { BlogPost } from "../types/post";

export const PATH = {
  MAIN: "/",
  BLOG: (id: BlogPost["id"], scrollToTop: boolean = false) =>
    `/post/${id}${scrollToTop ? "#0" : ""}`,
  SEARCH: "/search",
  SEARCH_TAG: (tag: BlogPost["tags"][number]) => `/search/tag/${tag}`,
};

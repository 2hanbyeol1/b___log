import { BlogPost } from "@/lib/types/blog";

import posts from "../../../public/data/posts.json";
import { normalizeString } from "../str";

export function getAllBlogPostList() {
  return posts as BlogPost[];
}

export function searchBlogPostListByKeyword(keyword: string) {
  const posts = getAllBlogPostList();
  const normalizedKeyword = normalizeString(keyword);

  return posts.filter(
    ({ title, summary, tags }) =>
      normalizeString(title).includes(normalizedKeyword) ||
      normalizeString(summary).includes(normalizedKeyword) ||
      tags.some((tag) => normalizeString(tag).includes(normalizedKeyword)),
  );
}

export function searchBlogPostListByTag(tag: BlogPost["tags"][number]) {
  const posts = getAllBlogPostList();
  const normalizedKeyword = normalizeString(tag);

  return posts.filter(({ tags }) =>
    tags.some((tag) => normalizeString(tag).includes(normalizedKeyword)),
  );
}

export function getAllTags() {
  const posts = getAllBlogPostList();
  return [...new Set(posts.map((post) => post.tags).flat())];
}

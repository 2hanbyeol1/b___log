"use client";

import PostList from "@/components/blog/post/list";
import { useKeyword } from "@/lib/hooks/context/useKeyword";
import {
  getAllTags,
  searchBlogPostListByKeyword,
} from "@/utils/notion/get-item";

import TagList from "./tag-list";

function SearchList() {
  const { keyword } = useKeyword();

  const posts = searchBlogPostListByKeyword(keyword);
  const tags = getAllTags();

  if (!keyword) return <TagList tags={tags} />;

  if (posts.length === 0) {
    return (
      <div className="my-16 text-center text-base">검색 결과가 없어요</div>
    );
  }

  return <PostList posts={posts} />;
}

export default SearchList;

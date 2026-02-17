import PostList from "@/components/blog/post/list";
import { getAllBlogPostList } from "@/utils/notion/get-item";

function HomePage() {
  const posts = getAllBlogPostList();

  return <PostList posts={posts} />;
}

export default HomePage;

import BlogListItem from "@/components/blog/post/list/item";
import { BlogPost } from "@/lib/types/blog";

interface PostListProps {
  posts: BlogPost[];
}

function PostList({ posts }: PostListProps) {
  if (posts.length === 0) {
    return (
      <div className="my-16 text-center text-base">아직 게시물이 없어요</div>
    );
  }

  return (
    <div className="mobile:gap-8 flex flex-col gap-16">
      {posts.map((post) => (
        <BlogListItem key={post.id} {...post} />
      ))}
    </div>
  );
}

export default PostList;

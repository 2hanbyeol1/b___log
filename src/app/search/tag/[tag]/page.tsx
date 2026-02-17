import PostList from "@/components/blog/post/list";
import Container from "@/components/common/container";
import { getAllTags, searchBlogPostListByTag } from "@/utils/notion/get-item";

async function TagSearchPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params;

  const decodedTag = decodeURIComponent(tag);
  const posts = searchBlogPostListByTag(decodedTag);

  return (
    <Container as="section">
      <h2 className="mb-6 text-2xl font-semibold">
        &apos;{decodedTag}&apos; 태그가 포함된 게시물
      </h2>

      <PostList posts={posts} />
    </Container>
  );
}

export default TagSearchPage;

export function generateStaticParams() {
  const tags = getAllTags();
  return tags.map((tag) => ({ tag }));
}

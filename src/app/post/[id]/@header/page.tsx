import { notFound } from "next/navigation";

import Tag from "@/components/blog/post/list/item/tag";
import Button from "@/components/common/button";
import { PATH } from "@/lib/constants/path";
import { formatDate } from "@/utils/date";
import { fetchBlogPostById } from "@/utils/notion/fetch-item";

async function BlogPostHeader({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const post = await fetchBlogPostById(id);
  if (!post) notFound();

  const { title, created_at, tags } = post;

  return (
    <header className="tablet:mb-24 mb-12">
      {/* 제목 */}
      <h1 className="mb-5 text-4xl font-semibold">{title}</h1>

      {/* 생성 일시 */}
      {created_at && (
        <div className="mb-5 text-base text-gray-500">
          {formatDate(created_at)}
        </div>
      )}

      {/* 태그 */}
      <div className="flex items-center gap-2">
        {tags.map((tag, idx) => (
          <Button key={`post-${id}-tag-${idx}`} href={PATH.SEARCH_TAG(tag)}>
            <Tag tag={tag} size="sm" interactable />
          </Button>
        ))}
      </div>
    </header>
  );
}

export default BlogPostHeader;

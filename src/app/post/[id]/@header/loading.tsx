import TagSkeleton from "@/components/blog/post/list/item/tag/skeleton";
import Iterator from "@/components/common/iterator";
import Skeleton from "@/components/common/skeleton";

function BlogPostHeaderLoading() {
  return (
    <div className="mb-24">
      {/* 제목 */}
      <Skeleton className="mb-5 max-w-96 font-semibold" fontSize="4xl" />

      {/* 생성 일시 */}
      <Skeleton className="mb-5 max-w-32 text-gray-500" fontSize="base" />

      {/* 태그 */}
      <div className="flex items-center gap-2">
        <Iterator
          count={2}
          render={(idx) => <TagSkeleton key={`post-tag-skeleton-${idx}`} />}
        />
      </div>
    </div>
  );
}

export default BlogPostHeaderLoading;

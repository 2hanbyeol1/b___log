import Iterator from "@/components/common/iterator";
import Skeleton from "@/components/common/skeleton";

function BlogPostLoading() {
  return (
    <div>
      {/* h2 + p 태그 영역 */}
      <Iterator
        count={2}
        render={(idx) => (
          <div key={`p-skeleton-${idx}`}>
            {/* h2 태그 */}
            <Skeleton className="mt-14 mb-4 max-w-40" fontSize="2xl" />

            {/* p 태그 */}
            <div className="my-2">
              <Skeleton fontSize="lg" />
              <Skeleton fontSize="lg" />
              <Skeleton fontSize="lg" />
            </div>
          </div>
        )}
      />

      {/* 이미지 / 코드블록 / 콜아웃 등 */}
      <Skeleton className="my-5 h-96" />
    </div>
  );
}

export default BlogPostLoading;

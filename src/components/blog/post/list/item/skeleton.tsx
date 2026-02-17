import Iterator from "@/components/common/iterator";
import Skeleton from "@/components/common/skeleton";

import TagSkeleton from "./tag/skeleton";

function BlogListItemSkeleton() {
  return (
    <div className="max-mobile:flex-col mobile:gap-8 flex items-center gap-4">
      <Skeleton className="mobile:w-48 aspect-4/3 w-full shrink-0 rounded-lg" />

      <div className="w-full">
        <div className="mb-1.5">
          <Skeleton className="max-w-64" fontSize="2xl" />
        </div>
        <div className="mb-4">
          <Skeleton className="w-full" fontSize="base" />
          <Skeleton className="w-3/4" fontSize="base" />
        </div>

        <div className="flex items-center gap-2">
          <Iterator
            count={2}
            render={(idx) => <TagSkeleton key={`home-tag-skeleton-${idx}`} />}
          />
        </div>
      </div>
    </div>
  );
}

export default BlogListItemSkeleton;

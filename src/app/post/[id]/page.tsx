import type { Metadata } from "next";

import Blocks from "@/components/blog/post/block";
import TableOfContents from "@/components/blog/post/table-of-contents";
import { cn } from "@/utils/cn";
import { fetchHeadingBlocksByPageId } from "@/utils/notion/fetch-item";
import { getAllBlogPostList } from "@/utils/notion/get-item";

import ShareButton from "./share-button";

async function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const headings = await fetchHeadingBlocksByPageId(id);

  return (
    <div className="relative flex flex-col text-gray-800">
      <Blocks blockId={id} />

      <div className="mt-28 flex justify-end">
        <ShareButton />
      </div>

      {headings.length > 0 && (
        <aside
          className={cn(
            "fixed right-4 bottom-4 h-fit w-fit",
            "laptop:top-0 laptop:left-[calc(100%+20px)] laptop:absolute laptop:h-full laptop:w-full laptop:max-w-[calc((100vw-920px)/2-2rem)]",
          )}
        >
          <div className="sticky top-24">
            <TableOfContents headings={headings} />
          </div>
        </aside>
      )}
    </div>
  );
}

export default BlogDetailPage;

export function generateStaticParams() {
  const posts = getAllBlogPostList();

  return posts.map((post) => ({
    id: post.id,
  }));
}

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  const post = getAllBlogPostList().find((post) => post.id === id);

  return {
    title: post?.title ?? "별로그",
    description: post?.summary ?? "포스트를 찾을 수 없습니다",
    openGraph: {
      images: post?.thumbnail.url,
    },
  };
}

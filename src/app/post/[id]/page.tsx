import type { Metadata } from "next";

import Blocks from "@/components/blog/post/block";
import { getAllBlogPostList } from "@/utils/notion/get-item";

async function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <div className="text-gray-800">
      <Blocks blockId={id} />
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
      images: post?.thumbnail.url ?? "/og-image.png",
    },
  };
}

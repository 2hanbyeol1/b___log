import { ReactNode } from "react";

import Container from "@/components/common/container";

function BlogPostLayout({
  children,
  header,
}: {
  children: ReactNode;
  header: ReactNode;
}) {
  return (
    <Container as="article">
      {/* 게시물 헤더 - 제목, 생성 일시, 태그 */}
      {header}

      {/* 게시물 본문 */}
      {children}
    </Container>
  );
}

export default BlogPostLayout;

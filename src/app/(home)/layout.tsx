import { ReactNode } from "react";

import Container from "@/components/common/container";

function HomeLayout({
  children,
  hero,
}: {
  children: ReactNode;
  hero: ReactNode;
}) {
  return (
    <>
      {/* 히어로 섹션 */}
      {hero}

      {/* 전체 게시물 섹션 */}
      <Container as="section" className="mobile:pt-28 pt-40">
        <h2 className="mb-6 text-3xl font-semibold">전체 게시물</h2>

        {children}
      </Container>
    </>
  );
}

export default HomeLayout;

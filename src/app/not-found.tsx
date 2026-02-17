import Image from "next/image";

import Button from "@/components/common/button";
import FullScreenContainer from "@/components/common/container/full-screen";
import { PATH } from "@/lib/constants/path";

function NotFound() {
  return (
    <FullScreenContainer className="flex items-center justify-center">
      <div className="mb-10 flex flex-col items-center gap-6">
        <Image
          src="/image/crying.png"
          alt="울고 있는 캐릭터"
          width={132}
          height={132}
          className="animate-bounce"
        />
        <div className="text-xl">페이지를 찾을 수 없어요</div>
        <Button href={PATH.MAIN}>메인으로 돌아가기</Button>
      </div>
    </FullScreenContainer>
  );
}

export default NotFound;

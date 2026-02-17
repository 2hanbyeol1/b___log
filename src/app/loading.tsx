import Image from "next/image";

import FullScreenContainer from "@/components/common/container/full-screen";

function LoadingPage() {
  return (
    <FullScreenContainer className="flex items-center justify-center">
      <div className="mb-10 flex flex-col items-center gap-6">
        <Image
          src="/image/running.png"
          alt="달리는 캐릭터"
          width={132}
          height={132}
          className="animate-bounce"
        />
        <div className="text-xl">잠시만 기다려주세요</div>
      </div>
    </FullScreenContainer>
  );
}

export default LoadingPage;

import Image from "next/image";

import Container from "@/components/common/container";

function HeroSection() {
  return (
    <section className="bg-primary-light flex h-96 items-center justify-center font-medium">
      <Container className="relative flex h-full items-center justify-center">
        {/* 환영 메시지 */}
        <h1 className="text-primary-dark max-mobile:mb-24 z-10 text-center text-3xl leading-relaxed font-semibold">
          <span className="text-primary/70 mb-2 inline-block text-lg font-medium">
            환영합니다
          </span>
          <br />
          <span>경험, 생각, 새로운 IT 지식을</span>
          <br />
          <span>정리해서 공유해드릴게요!</span>
        </h1>

        {/* 인사하는 캐릭터 이미지 */}
        <div className="tablet:w-56 absolute right-0 -bottom-14 aspect-square w-40">
          <Image
            src="/image/greeting.png"
            alt="인사하는 캐릭터"
            fill
            sizes="(max-width: 768px) 160px, 224px"
            loading="eager"
          />
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;

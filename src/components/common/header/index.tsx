import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { PATH } from "@/lib/constants/path";
import { cn } from "@/utils/cn";

import Container from "../container";

interface HeaderProps {
  className?: string;
}

function Header({ className }: HeaderProps) {
  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-20 flex w-full items-center border-b border-gray-200 bg-white",
        className,
      )}
    >
      <Container className="flex items-center justify-between p-0">
        <Link href={PATH.MAIN} className="hover:animate-spin">
          <Image
            src="/image/face.png"
            alt="로고"
            width={44}
            height={44}
            loading="eager"
          />
        </Link>

        <div className="[&>a]:hover:text-primary flex items-center gap-8 text-base font-medium text-gray-700">
          <Link href={PATH.SEARCH}>
            <Search className="size-6" />
          </Link>
        </div>
      </Container>
    </header>
  );
}

export default Header;

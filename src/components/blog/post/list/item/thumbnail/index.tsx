import Image from "next/image";

import { cn } from "@/utils/cn";

interface ThumbnailProps {
  className?: string;
  imageClassName?: string;
  thumbnail?: { url: string; name: string };
}

function Thumbnail({ className, imageClassName, thumbnail }: ThumbnailProps) {
  return (
    <div
      className={cn(
        "relative aspect-4/3 w-full overflow-hidden rounded-lg",
        className,
      )}
    >
      <Image
        src={thumbnail?.url ?? "/image/thumbnail.png"}
        alt={thumbnail?.name ?? "썸네일 대체이미지"}
        className={cn("object-cover", imageClassName)}
        fill
        blurDataURL="/image/thumbnail.png"
        sizes="100%"
      />
    </div>
  );
}

export default Thumbnail;

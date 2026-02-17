/* eslint-disable @next/next/no-img-element */
import { ImageBlockObjectResponse } from "@notionhq/client";

import { cn } from "@/utils/cn";

import RichText from "../text/rich-text";

interface ImageBlockProps {
  className?: string;
  block: ImageBlockObjectResponse;
}

function ImageBlock({ className, block }: ImageBlockProps) {
  const src =
    block.image.type === "file"
      ? block.image.file.url
      : block.image.external.url;
  const caption = block.image.caption;

  return (
    <figure className={cn("flex flex-col items-center gap-2", className)}>
      <img
        className="max-h-[560px] w-full object-contain"
        src={src}
        alt={block.image.caption.map((text) => text.plain_text).join("")}
      />
      {caption && (
        <figcaption className="text-center">
          <RichText
            className="text-gray-400"
            id={block.id}
            richText={caption}
          />
        </figcaption>
      )}
    </figure>
  );
}

export default ImageBlock;

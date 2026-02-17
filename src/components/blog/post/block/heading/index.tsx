import { PropsWithChildren } from "react";
import {
  Heading1BlockObjectResponse,
  Heading2BlockObjectResponse,
  Heading3BlockObjectResponse,
  RichTextItemResponse,
} from "@notionhq/client";

import { cn } from "@/utils/cn";

import RichText from "../text/rich-text";

interface HeadingProps extends PropsWithChildren {
  className?: string;
  block:
    | Heading1BlockObjectResponse
    | Heading2BlockObjectResponse
    | Heading3BlockObjectResponse;
  richText: RichTextItemResponse[];
}

function Heading({ className, block, richText, children }: HeadingProps) {
  const Component = (() => {
    if (block.type === "heading_1") return "h1";
    if (block.type === "heading_2") return "h2";
    return "h3";
  })();

  return (
    <Component
      className={cn(
        "mb-4 font-semibold",
        "[&:where(h1)]:mt-14 [&:where(h1,h2,h3)+:where(h1,h2,h3)]:mt-0 [&:where(h2)]:mt-14 [&:where(h3)]:mt-6",
        block.type === "heading_1" && "text-3xl",
        block.type === "heading_2" && "text-2xl",
        block.type === "heading_3" && "text-xl",
        className,
      )}
    >
      <RichText id={block.id} richText={richText} />
      {children}
    </Component>
  );
}

export default Heading;

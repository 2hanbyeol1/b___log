import { PropsWithChildren } from "react";
import {
  Heading1BlockObjectResponse,
  Heading2BlockObjectResponse,
  Heading3BlockObjectResponse,
  RichTextItemResponse,
} from "@notionhq/client";
import { cva } from "class-variance-authority";
import { Link } from "lucide-react";

import CopyTrigger from "@/components/common/copy-trigger";
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

const headingVariants = cva(
  "scroll-mt-24 mb-4 font-semibold [&:where(h1)]:mt-16 [&:where(h1,h2,h3)+:where(h1,h2,h3)]:mt-0 [&:where(h2)]:mt-14 [&:where(h3)]:mt-12",
  {
    variants: {
      blockType: {
        heading_1: "text-3xl",
        heading_2: "text-2xl",
        heading_3: "text-xl",
      },
    },
  },
);

function Heading({ className, block, richText, children }: HeadingProps) {
  const Element = (() => {
    if (block.type === "heading_1") return "h1";
    if (block.type === "heading_2") return "h2";
    return "h3";
  })();

  const id = richText.map((text) => text.plain_text).join("");

  return (
    <Element
      id={id}
      className={cn(
        headingVariants({ blockType: block.type }),
        "group/heading",
        className,
      )}
    >
      <CopyTrigger
        className="flex items-center gap-2"
        value={id}
        isUrl
        successMessage={`링크가 복사됐어요!`}
      >
        <RichText id={block.id} richText={richText} />
        {children}
        <Link className="hidden stroke-gray-400 group-hover/heading:block" />
      </CopyTrigger>
    </Element>
  );
}

export default Heading;

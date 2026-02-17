import { PropsWithChildren } from "react";
import { ParagraphBlockObjectResponse } from "@notionhq/client";

import { cn } from "@/utils/cn";

import RichText from "../text/rich-text";

interface ParagraphProps extends PropsWithChildren {
  className?: string;
  block: ParagraphBlockObjectResponse;
}

function Paragraph({ className, block, children }: ParagraphProps) {
  if (block.paragraph.rich_text.length === 0) return <br />;

  return (
    <p className={cn("leading-relaxed", className)}>
      <RichText id={block.id} richText={block.paragraph.rich_text} />
      {children}
    </p>
  );
}

export default Paragraph;

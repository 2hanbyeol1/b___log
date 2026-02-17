import { PropsWithChildren } from "react";
import { QuoteBlockObjectResponse } from "@notionhq/client";

import { cn } from "@/utils/cn";

import RichText from "../text/rich-text";

interface QuoteProps extends PropsWithChildren {
  className?: string;
  block: QuoteBlockObjectResponse;
}

function Quote({ className, block, children }: QuoteProps) {
  return (
    <blockquote
      className={cn(
        "border-l-3 border-gray-300 py-1 pl-6 whitespace-pre-wrap",
        className,
      )}
    >
      <RichText id={block.id} richText={block.quote.rich_text} />
      {children}
    </blockquote>
  );
}

export default Quote;

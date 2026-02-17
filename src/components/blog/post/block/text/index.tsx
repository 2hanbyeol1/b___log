import { ElementType } from "react";
import { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";
import Link from "next/link";

import { cn } from "@/utils/cn";

import Equation from "./equation";

interface TextProps {
  className?: string;
  text: RichTextItemResponse;
  as?: ElementType;
}

function Text({ className, text, as: Component = "span" }: TextProps) {
  const commonClassName = cn(
    text.annotations.bold && "font-semibold bg-primary/10 px-0.5",
    className,
  );

  if (text.type === "equation") return <Equation formula={text.plain_text} />;

  if (text.annotations.code)
    return (
      <code
        key={text.plain_text}
        className={cn(
          "text-primary rounded-md bg-gray-100 px-1 py-0.5 text-sm",
          commonClassName,
        )}
      >
        {text.plain_text}
      </code>
    );

  if (!!text.href)
    return (
      <Link
        key={text.plain_text}
        href={text.href ?? ""}
        className={cn("text-primary hover:underline", commonClassName)}
        target="_blank"
        rel="noopener noreferrer"
      >
        {text.plain_text}
      </Link>
    );

  return (
    <Component key={text.plain_text} className={commonClassName}>
      {text.plain_text}
    </Component>
  );
}

export default Text;

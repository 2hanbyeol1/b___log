import { PropsWithChildren } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { CodeBlockObjectResponse } from "@notionhq/client";

import { cn } from "@/utils/cn";

interface CodeProps extends PropsWithChildren {
  className?: string;
  block: CodeBlockObjectResponse;
}

function Code({ className, block }: CodeProps) {
  return (
    <SyntaxHighlighter
      className={cn("rounded-md bg-gray-50 p-6", className)}
      language={block.code.language}
      style={a11yLight}
      customStyle={{
        background: undefined,
        padding: undefined,
        color: undefined,
      }}
    >
      {block.code.rich_text.map((text) => text.plain_text).join("")}
    </SyntaxHighlighter>
  );
}

export default Code;

import { PropsWithChildren } from "react";
import { ToggleBlockObjectResponse } from "@notionhq/client";

import { cn } from "@/utils/cn";

import RichText from "../text/rich-text";

interface ToggleProps extends PropsWithChildren {
  className?: string;
  block: ToggleBlockObjectResponse;
}

function Toggle({ className, block, children }: ToggleProps) {
  return (
    <details className={cn("*:mt-2", className)}>
      <summary className="cursor-pointer text-lg">
        <RichText
          className="ml-1"
          id={block.id}
          richText={block.toggle.rich_text}
        />
      </summary>
      {children}
    </details>
  );
}

export default Toggle;

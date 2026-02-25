import { PropsWithChildren } from "react";
import { NumberedListItemBlockObjectResponse } from "@notionhq/client";

import { cn } from "@/utils/cn";

import RichText from "../text/rich-text";

interface NumberedListItemProps extends PropsWithChildren {
  className?: string;
  block: NumberedListItemBlockObjectResponse;
}

async function NumberedListItem({
  className,
  block,
  children,
}: NumberedListItemProps) {
  return (
    <>
      <li className={cn("my-3", className)}>
        <RichText id={block.id} richText={block.numbered_list_item.rich_text} />
      </li>
      {children}
    </>
  );
}

export default NumberedListItem;

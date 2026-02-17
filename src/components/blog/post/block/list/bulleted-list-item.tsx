import { PropsWithChildren } from "react";
import { BulletedListItemBlockObjectResponse } from "@notionhq/client";

import { cn } from "@/utils/cn";

import RichText from "../text/rich-text";

interface BulletedListItemProps extends PropsWithChildren {
  className?: string;
  block: BulletedListItemBlockObjectResponse;
}

async function BulletedListItem({
  className,
  block,
  children,
}: BulletedListItemProps) {
  return (
    <>
      <li className={cn("my-3", className)}>
        <RichText id={block.id} richText={block.bulleted_list_item.rich_text} />
      </li>
      {children}
    </>
  );
}

export default BulletedListItem;

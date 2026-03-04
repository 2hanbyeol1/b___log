import { PropsWithChildren } from "react";
import {
  BulletedListItemBlockObjectResponse,
  NumberedListItemBlockObjectResponse,
} from "@notionhq/client";

import { cn } from "@/utils/cn";

import RichText from "../text/rich-text";

interface ListItemProps extends PropsWithChildren {
  className?: string;
  block:
    | BulletedListItemBlockObjectResponse
    | NumberedListItemBlockObjectResponse;
}

async function ListItem({ className, block, children }: ListItemProps) {
  return (
    <>
      <li className={cn("my-3 pl-1", className)}>
        <RichText
          id={block.id}
          richText={
            block.type === "bulleted_list_item"
              ? block.bulleted_list_item.rich_text
              : block.numbered_list_item.rich_text
          }
        />
      </li>
      {children}
    </>
  );
}

export default ListItem;

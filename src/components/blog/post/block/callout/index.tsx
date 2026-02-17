import { PropsWithChildren } from "react";
import { CalloutBlockObjectResponse } from "@notionhq/client";

import { cn } from "@/utils/cn";

import Icon from "../icon";
import RichText from "../text/rich-text";

interface CalloutProps extends PropsWithChildren {
  className?: string;
  block: CalloutBlockObjectResponse;
}

function Callout({ className, block, children }: CalloutProps) {
  const icon = block.callout.icon;

  return (
    <aside className={cn("rounded-lg bg-gray-100 p-6", className)}>
      <div className="flex gap-4">
        {icon && <Icon icon={icon} />}

        <div>
          <RichText id={block.id} richText={block.callout.rich_text} />
          {children}
        </div>
      </div>
    </aside>
  );
}

export default Callout;

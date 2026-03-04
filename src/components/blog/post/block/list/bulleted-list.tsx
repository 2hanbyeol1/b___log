import { PropsWithChildren } from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/utils/cn";

interface ListProps
  extends PropsWithChildren, VariantProps<typeof listVariants> {
  className?: string;
  blockType: "bulleted_list_item" | "numbered_list_item";
}

const listVariants = cva("mt-6 mb-2 list-disc pl-6 text-lg", {
  variants: {
    blockType: {
      bulleted_list_item: "list-disc [&_ul]:mt-2",
      numbered_list_item: "list-decimal [&_ol]:mt-2",
    },
  },
});

function List({ className, blockType, children }: ListProps) {
  const Element = blockType === "bulleted_list_item" ? "ul" : "ol";

  return (
    <Element className={cn(listVariants({ blockType }), className)}>
      {children}
    </Element>
  );
}

export default List;

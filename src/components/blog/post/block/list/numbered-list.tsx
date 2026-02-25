import { PropsWithChildren } from "react";

import { cn } from "@/utils/cn";

interface NumberedListProps extends PropsWithChildren {
  className?: string;
}

function NumberedList({ className, children }: NumberedListProps) {
  return (
    <ol className={cn("mt-6 mb-2 list-decimal pl-5 [&_ul]:mt-2", className)}>
      {children}
    </ol>
  );
}

export default NumberedList;

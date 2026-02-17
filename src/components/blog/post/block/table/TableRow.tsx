import { PropsWithChildren } from "react";

import { cn } from "@/utils/cn";

interface TableRowProps extends PropsWithChildren {
  className?: string;
}

function TableRow({ children, className }: TableRowProps) {
  return (
    <tr className={cn("first:bg-gray-100 first:font-medium", className)}>
      {children}
    </tr>
  );
}

export default TableRow;

import { PropsWithChildren } from "react";

import { cn } from "@/utils/cn";

interface TableProps extends PropsWithChildren {
  className?: string;
}

async function Table({ className, children }: TableProps) {
  return (
    <table className={cn(className)}>
      <tbody>{children}</tbody>
    </table>
  );
}

export default Table;

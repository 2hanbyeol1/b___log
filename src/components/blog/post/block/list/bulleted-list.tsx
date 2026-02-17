import { PropsWithChildren } from "react";

import { cn } from "@/utils/cn";

interface BulletedListProps extends PropsWithChildren {
  className?: string;
}

function BulletedList({ className, children }: BulletedListProps) {
  return (
    <ul className={cn("mt-6 mb-2 list-disc pl-5 [&_ul]:mt-2", className)}>
      {children}
    </ul>
  );
}

export default BulletedList;

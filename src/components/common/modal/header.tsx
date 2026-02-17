import { PropsWithChildren } from "react";

import { cn } from "@/utils/cn";

interface ModalHeaderProps extends PropsWithChildren {
  className?: string;
}

function ModalHeader({ className, children }: ModalHeaderProps) {
  return (
    <div className={cn("mb-6 flex items-center justify-between", className)}>
      {children}
    </div>
  );
}

export default ModalHeader;

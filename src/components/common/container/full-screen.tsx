import { ReactNode } from "react";

import { cn } from "@/utils/cn";

interface FullScreenContainerProps {
  className?: string;
  children: ReactNode;
}

function FullScreenContainer({
  className,
  children,
}: FullScreenContainerProps) {
  return (
    <div className={cn("h-[calc(100dvh-72px)] w-full", className)}>
      {children}
    </div>
  );
}

export default FullScreenContainer;

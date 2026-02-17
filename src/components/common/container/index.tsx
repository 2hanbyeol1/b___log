import { ElementType, ReactNode } from "react";

import { cn } from "@/utils/cn";

interface ContainerProps {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

function Container({
  as: Component = "div",
  children,
  className,
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "tablet:px-8 mx-auto w-full max-w-[920px] px-4 py-16",
        className,
      )}
    >
      {children}
    </Component>
  );
}

export default Container;

import { PropsWithChildren } from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/utils/cn";

interface SkeletonProps
  extends PropsWithChildren, VariantProps<typeof skeletonVariants> {
  className?: string;
}

const wrapperVariants = cva("flex items-center", {
  variants: {
    fontSize: {
      none: "",
      xs: "py-[2px]", // !
      sm: "h-[20px]",
      base: "h-[24px]",
      lg: "py-[5px]", // !
      xl: "py-[4px]", // !
      "2xl": "h-[32px]",
      "3xl": "py-[3px]", // !
      "4xl": "h-[40px]",
    },
  },
  defaultVariants: {
    fontSize: "none",
  },
});

const skeletonVariants = cva("rounded-md", {
  variants: {
    fontSize: {
      none: "",
      xs: "h-[12px]",
      sm: "h-[14px]",
      base: "h-[16px]",
      lg: "h-[18px]",
      xl: "h-[20px]",
      "2xl": "h-[24px]",
      "3xl": "h-[30px]",
      "4xl": "h-[36px]",
    },
  },
  defaultVariants: {
    fontSize: "none",
  },
});

function Skeleton({ className, children, fontSize }: SkeletonProps) {
  return (
    <div className={cn(wrapperVariants({ fontSize }), className)}>
      <div
        className={cn(
          "h-full w-full animate-pulse bg-gray-200",
          skeletonVariants({ fontSize }),
        )}
      >
        {children}
      </div>
    </div>
  );
}

export default Skeleton;

import { ComponentProps } from "react";

import { cn } from "@/utils/cn";

function Input({ className, ...props }: ComponentProps<"input">) {
  return (
    <input
      className={cn(
        "focus:ring-primary/60 rounded-xl border border-gray-300 px-4 py-2.5 ring-2 ring-transparent outline-none",
        className,
      )}
      {...props}
    />
  );
}

export default Input;

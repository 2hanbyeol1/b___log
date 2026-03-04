"use client";
import { PropsWithChildren } from "react";

import { useToast } from "@/lib/hooks/context/useToast";
import { cn } from "@/utils/cn";

interface CopyTriggerProps extends PropsWithChildren {
  className?: string;
  value: string;
  isUrl?: boolean;
  successMessage?: string;
  errorMessage?: string;
}

function CopyTrigger({
  className,
  value,
  children,
  isUrl = false,
  successMessage = `복사됐어요`,
  errorMessage = "복사에 실패했어요",
}: CopyTriggerProps) {
  const { addToast } = useToast();

  const handleClick = async () => {
    let data = value;

    if (isUrl) {
      const url = new URL(window.location.href);
      url.hash = value;
      data = url.toString();
    }

    try {
      await navigator.clipboard.writeText(data);

      addToast({
        message: successMessage,
        type: "success",
      });
    } catch {
      addToast({
        message: errorMessage,
        type: "error",
      });
    }
  };

  return (
    <button className={cn("cursor-pointer", className)} onClick={handleClick}>
      {children}
    </button>
  );
}

export default CopyTrigger;

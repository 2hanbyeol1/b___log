"use client";
import { PropsWithChildren } from "react";

import { useToast } from "@/lib/hooks/context/useToast";

interface CopyTriggerProps extends PropsWithChildren {
  value: string;
  isUrl?: boolean;
  successMessage?: string;
  errorMessage?: string;
}

function CopyTrigger({
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
    <button className="cursor-pointer" onClick={handleClick}>
      {children}
    </button>
  );
}

export default CopyTrigger;

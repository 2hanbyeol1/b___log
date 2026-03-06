import { ForwardIcon } from "lucide-react";

import CopyTrigger from "@/components/common/copy-trigger";
import { cn } from "@/utils/cn";

interface ShareButtonProps {
  className?: string;
}

function ShareButton({ className }: ShareButtonProps) {
  return (
    <CopyTrigger
      className={cn(
        "flex items-center gap-1.5 rounded-md bg-gray-100 px-3 py-2 hover:bg-gray-200",
        className,
      )}
      value=""
      isUrl
      successMessage={`링크가 복사됐어요!`}
    >
      <ForwardIcon className="size-5 stroke-gray-800" />
      <span>공유하기</span>
    </CopyTrigger>
  );
}

export default ShareButton;

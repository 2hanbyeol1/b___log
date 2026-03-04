import { cn } from "@/utils/cn";

interface DividerProps {
  className: string;
}

function Divider({ className }: DividerProps) {
  return <div className={cn("h-px bg-gray-200", className)}></div>;
}

export default Divider;

import { cn } from "@/utils/cn";

interface ModalTitleProps {
  className?: string;
  title: string;
}

function Modaltitle({ className, title }: ModalTitleProps) {
  return (
    <div className={cn("text-center text-lg font-semibold", className)}>
      {title}
    </div>
  );
}

export default Modaltitle;

import { ComponentProps } from "react";
import Link from "next/link";

import { cn } from "@/utils/cn";

type ButtonProps = ComponentProps<"button"> | ComponentProps<typeof Link>;

function Button({ className, ...props }: ButtonProps) {
  const commonCN = "flex items-center justify-center";
  if ("href" in props) {
    return <Link className={cn(commonCN, className)} {...props} />;
  }
  return <button className={cn(commonCN, className)} {...props} />;
}

export default Button;

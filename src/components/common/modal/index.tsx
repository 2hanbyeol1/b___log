import { PropsWithChildren } from "react";

import { cn } from "@/utils/cn";

import ModalCloseButton from "./closeButton";
import ModalHeader from "./header";
import Modaltitle from "./title";

interface ModalProps extends PropsWithChildren {
  className?: string;
}

function Modal({ className, children }: ModalProps) {
  return (
    <div className={cn("rounded-xl bg-white px-8 py-10", className)}>
      {children}
    </div>
  );
}

Modal.Header = ModalHeader;
Modal.Title = Modaltitle;
Modal.CloseButton = ModalCloseButton;

export default Modal;

"use client";
import { MouseEvent, useEffect } from "react";

import { useModal } from "@/lib/hooks/context/useModal";

function ModalWrapper() {
  const { modal, closeModal } = useModal();

  useEffect(() => {
    const handleEscKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleEscKeyDown);
    return () => {
      window.removeEventListener("keydown", handleEscKeyDown);
    };
  }, [closeModal]);

  const handleModalWrapperClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) closeModal();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-sm"
      onClick={handleModalWrapperClick}
    >
      {modal}
    </div>
  );
}

export default ModalWrapper;

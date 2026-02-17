"use client";

import { createContext, ReactNode, useContext, useState } from "react";

import ModalWrapper from "@/components/common/modal/wrapper";

interface ModalContextType {
  modal: ReactNode | null;
  openModal: (modal: ReactNode) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType>({
  modal: null,
  openModal: () => {},
  closeModal: () => {},
});

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modal, setModal] = useState<ModalContextType["modal"]>(null);

  const openModal = (modal: ReactNode) => {
    setModal(modal);
  };

  const closeModal = () => {
    setModal(null);
  };

  return (
    <ModalContext.Provider value={{ modal, openModal, closeModal }}>
      {children}
      {modal && <ModalWrapper />}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModal must be used within a ModalContext");
  }

  return context;
}

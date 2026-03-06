"use client";

import { createContext, ReactNode, useContext, useState } from "react";

import ToastList from "@/components/common/toast/list";
import {
  AddToastProps,
  DEFAULT_DURATION,
  RemoveToastProps,
  ToastType,
} from "@/lib/types/toast";

interface ToastContextType {
  toasts: ToastType[];
  addToast: (toast: AddToastProps) => void;
  removeToast: (props: RemoveToastProps) => void;
}

const ToastContext = createContext<ToastContextType>({
  toasts: [],
  addToast: () => {},
  removeToast: () => {},
});

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastContextType["toasts"]>([]);

  const addToast = (toast: AddToastProps) => {
    setToasts((prev) => [
      ...prev,
      {
        ...toast,
        id: crypto.randomUUID(),
        duration: toast.duration ?? DEFAULT_DURATION,
      },
    ]);
  };

  const removeToast = ({ id }: RemoveToastProps) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}

      <ToastList />
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within a ModalContext");
  }

  return context;
}

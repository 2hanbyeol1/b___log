"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { AlertCircleIcon, CheckIcon, InfoIcon, XIcon } from "lucide-react";

import { useToast } from "@/lib/hooks/context/useToast";
import { ToastType } from "@/lib/types/toast";

interface ToastProps {
  toast: ToastType;
}

function Toast({ toast }: ToastProps) {
  const { removeToast } = useToast();

  useEffect(() => {
    const timeout = setTimeout(() => {
      removeToast({ id: toast.id });
    }, toast.duration);

    return () => {
      clearTimeout(timeout);
    };
  }, [toast, removeToast]);

  const Icon = (() => {
    switch (toast.type) {
      case "success":
        return CheckIcon;
      case "error":
        return XIcon;
      case "warning":
        return AlertCircleIcon;
      default:
        return InfoIcon;
    }
  })();

  return (
    <motion.div
      initial={{ scale: 0.5, y: 10 }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0.5, y: 10 }}
      transition={{ duration: 0.2 }}
      className="flex items-center gap-2.5 rounded-lg bg-white px-4 py-3 shadow-lg"
    >
      <div className="bg-primary rounded-full p-1">
        <Icon className="size-3 stroke-white" />
      </div>

      <span>{toast.message}</span>
    </motion.div>
  );
}

export default Toast;

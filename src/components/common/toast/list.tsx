import { AnimatePresence } from "framer-motion";

import { useToast } from "@/lib/hooks/context/useToast";

import Toast from ".";

function ToastList() {
  const { toasts } = useToast();

  return (
    <div className="fixed bottom-6 left-1/2 flex -translate-x-1/2 flex-col gap-2">
      <AnimatePresence>
        {toasts.map((toast) => (
          <Toast key={toast.id} toast={toast} />
        ))}
      </AnimatePresence>
    </div>
  );
}

export default ToastList;

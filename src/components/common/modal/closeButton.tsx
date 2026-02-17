import { X } from "lucide-react";

import { useModal } from "@/lib/hooks/context/useModal";

function ModalCloseButton() {
  const { closeModal } = useModal();

  return (
    <button className="flex items-center justify-center" onClick={closeModal}>
      <X className="h-6 w-6 stroke-gray-500" />
    </button>
  );
}

export default ModalCloseButton;

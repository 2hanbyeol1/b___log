export const DEFAULT_DURATION = 3000;

export interface ToastType {
  id: string;
  message: string;
  type: "success" | "error" | "warning" | "info";
  duration: number;
}

export interface AddToastProps {
  message: ToastType["message"];
  type: ToastType["type"];
  duration?: ToastType["duration"];
}

export interface RemoveToastProps {
  id: ToastType["id"];
}

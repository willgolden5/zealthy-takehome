import { useToastDispatchContext } from "~/components/DesignSystem/Toast/ToastContext";
import { ToastType } from "~/components/DesignSystem/Toast/types";

export function useToast() {
  const dispatch = useToastDispatchContext();

  const showToast = (title: string, message: string, type: ToastType) => {
    dispatch({
      type: "ADD_TOAST",
      payload: {
        title,
        id: new Date().getTime(),
        type,
        message,
      },
    });
  };

  return showToast;
}

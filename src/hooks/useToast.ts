import { useToastDispatchContext } from "~/components/designSystem/Toast/ToastContext";
import { ToastType } from "~/components/designSystem/Toast/types";

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

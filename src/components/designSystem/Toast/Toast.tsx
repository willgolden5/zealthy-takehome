// Toast.tsx
import React, { useEffect, useState } from "react";
import { useToastDispatchContext } from "./ToastContext";
import { Toast as ToastType } from "./types";

const Toast: React.FC<ToastType> = ({ id, type, message, title }) => {
  const dispatch = useToastDispatchContext();
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true); // Start exit animation
      setTimeout(() => dispatch({ type: "DELETE_TOAST", id }), 500); // Remove toast after animation
    }, 5000); // Adjust display duration as needed

    return () => clearTimeout(timer);
  }, [id, dispatch]);

  const bgColor = {
    success: "bg-green-300",
    error: "bg-orange-300",
    info: "bg-purple-300",
  }[type];

  return (
    <div
      className={` p-4 ${bgColor}  ${
        isExiting ? "animate-slide-out-bottom" : "animate-slide-in-bottom"
      } border-1 relative rounded-md transition-all`}
      style={{ animationDuration: "500ms" }}
    >
      <div className="flex flex-col space-y-0">
        <p className="font-bold">{title}</p>
        <p className="font-sm py-1 font-light">{message}</p>
      </div>
    </div>
  );
};

export default Toast;

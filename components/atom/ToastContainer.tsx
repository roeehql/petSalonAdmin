import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { removeToast } from "@/store/toastSlice";
import { useEffect } from "react";
import Toast from "./Toast";

const ToastContainer = () => {
  const toasts = useAppSelector((state) => state.toast);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(removeToast());
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [toasts]);
  return (
    <>
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} />
      ))}
    </>
  );
};

export default ToastContainer;

import { useAppDispatch } from "@/store/hooks";
import { ToastSliceState, clearToast } from "@/store/toastSlice";
import { TextP } from "./Text";

const Toast = ({ toast }: { toast: ToastSliceState }) => {
  const dispatch = useAppDispatch();
  const bgColor = {
    success: "bg-green-400",
    error: "bg-red-400",
    warning: "bg-orange-400",
    info: "bg-sky-400",
  };

  return (
    <div
      className={`fixed top-16 right-4 flex flex-col justify-center items-center w-60 h-fit my-4 p-2 rounded-md shadow z-50 ${
        bgColor[toast.type]
      }`}
    >
      <div className="flex justify-between items-end w-full h-fit my-2 border-b-2 border-b-white">
        <TextP
          text={toast.type}
          plusStyle={`text-white ${bgColor[toast.type]}`}
        />
        <button
          className="px-3 border-none bg-transparent text-base text-white"
          onClick={() => dispatch(clearToast(toast.id))}
        >
          X
        </button>
      </div>
      <TextP
        text={toast.text}
        plusStyle={`w-full text-white ${bgColor[toast.type]}`}
      />
    </div>
  );
};

export default Toast;

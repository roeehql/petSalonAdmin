import { FormEvent, RefObject } from "react";
import emailjs from "@emailjs/browser";
import { useAppDispatch } from "@/store/hooks";
import { setToast } from "@/store/toastSlice";

export const useEmail = (form: RefObject<HTMLFormElement>) =>{
    const dispatch = useAppDispatch();

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const templateParams =
          form.current !== null ? form.current : "아무것도 작성되지 않았습니다.";
        emailjs
          .sendForm(
            "service_k257ji7",
            "template_ltilrb9",
            templateParams,
            "BZlB9P6ScykFm5VUT"
          )
          .then(
            (result) => {
              dispatch(
                setToast({
                  type: "info",
                  text: `${result.text} 성공적으로 전송되었습니다.`,
                })
              );
            },
            (error) => {
              dispatch(setToast({ type: "error", text: error.text }));
            }
          );
      };

      return {sendEmail}
}
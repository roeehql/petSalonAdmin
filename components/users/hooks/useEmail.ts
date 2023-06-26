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
        const API_KEY = process.env.NEXT_PUBLIC_API_KEY ? process.env.NEXT_PUBLIC_API_KEY : ""
        const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID ? process.env.NEXT_PUBLIC_TEMPLATE_ID : ""
        const SERVICE_ID =process.env.NEXT_PUBLIC_SERVICE_ID ? process.env.NEXT_PUBLIC_SERVICE_ID : ""
        
        emailjs
          .sendForm(
              SERVICE_ID,
              TEMPLATE_ID,
              templateParams,
              API_KEY
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
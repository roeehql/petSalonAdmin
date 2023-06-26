import { ChangeEvent, useRef, useState } from "react";
import { useAppSelector } from "@/store/hooks";
import useInput from "@/hooks/useInput";
import { useEmail } from "./hooks/useEmail";
import Button from "../atom/Button";

export const ContactUs = () => {
  const [message, setMessage] = useState("");
  const { value: email, onChange: onEmailChange } = useInput("");
  const userInfo = useAppSelector((state) => state.userInfo.value);
  const form = useRef<HTMLFormElement>(null);
  const { sendEmail } = useEmail(form);

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col justify-center items-center w-1/2 h-fit p-4 border-2 border-gray-400 rounded shadow"
    >
      <div className="flex">
        <label htmlFor="from_name" className="w-full text-left px-4">
          매장명
        </label>
        <input
          type="text"
          id="from_name"
          name="from_name"
          value={userInfo.shop}
          readOnly
          className="w-full outline-none px-4 text-xl"
        />
      </div>
      <div className="flex">
        <label htmlFor="from_tel" className="w-full text-left px-4 mt-3">
          매장 연락처
        </label>
        <input
          type="text"
          id="from_tel"
          name="from_tel"
          value={userInfo.tel}
          readOnly
          className="w-full outline-none px-4 text-xl"
        />
      </div>
      <label htmlFor="from_email" className="w-full text-left p-4">
        답장 받을 이메일 주소
      </label>
      <input
        type="email"
        id="from_email"
        name="from_email"
        value={email}
        onChange={onEmailChange}
        placeholder="이메일"
        className="w-full px-4 py-2 border-2 border-gray-300"
      />
      <label htmlFor="message" className="w-full text-left p-4">
        내용
      </label>
      <textarea
        id="message"
        name="message"
        value={message}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setMessage(e.target.value)
        }
        className="w-full h-44 p-3 resize-none border-2 border-gray-300"
      />
      <Button type="submit" text="전송" plusStyle="my-3" />
    </form>
  );
};

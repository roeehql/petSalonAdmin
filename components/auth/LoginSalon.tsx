import Link from "next/link";
import { FormEvent } from "react";

import { useAppDispatch } from "@/store/hooks";
import { setToast } from "@/store/toastSlice";
import useInput from "@/hooks/useInput";
import { useLogin } from "./hooks/useLogin";

import { TextP, TitleH } from "@/components/atom/Text";
import Button from "@/components/atom/Button";
import Input from "@/components/atom/Input";

const LoginSalon = () => {
  const { value: tel, onChange: onTelChange } = useInput("");
  const { value: password, onChange: onPasswordChange } = useInput("");
  const dispatch = useAppDispatch();

  const { handleLogin } = useLogin();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (tel === "" || password === "") {
      dispatch(
        setToast({
          type: "warning",
          text: "연락처 또는 비밀번호를 입력하지 않으셨습니다.",
        })
      );
    }
    handleLogin({ tel, password });
  };

  return (
    <form
      className="flex flex-col justify-center items-center"
      onSubmit={handleSubmit}
    >
      <TitleH text="로그인" plusStyle="text-center" />
      <Input
        type="text"
        name="shop-tel"
        labelText="연락처"
        value={tel}
        onChange={onTelChange}
      />
      <Input
        type="password"
        name="password"
        labelText="PW"
        value={password}
        onChange={onPasswordChange}
      />
      <Button type="submit" text="로그인" plusStyle="my-4 " />
      <Link href="/create">
        <TextP text="회원이 되고 싶습니다." />
      </Link>
    </form>
  );
};

export default LoginSalon;

import { useState } from "react";
import useInput from "@/hooks/useInput";
import { Salons } from "@/types/salonsTypes";
import Input from "../atom/Input";
import Button from "../atom/Button";
import { TextP, TitleH } from "../atom/Text";
import Toast from "../atom/Toast";
import useHandleSignUp from "./hooks/useHandleSignUp";

const SignUpForm = () => {
  const [salon, setSalon] = useState<Salons>({
    name: "",
    tel: "",
    password: "",
    address: "",
    canSissorCut: false,
    canCatCut: false,
    hasCctv: false,
    hasPickupService: false,
  });
  const { handleSubmit } = useHandleSignUp();

  const { value: name, onChange: onNameChange } = useInput("");
  const { value: tel, onChange: onTelChange } = useInput("");
  const { value: password, onChange: onPasswordChange } = useInput("");
  const { value: address, onChange: onAddressChange } = useInput("");

  const handleSignUp = () => {
    setSalon({
      name,
      tel,
      password,
      address,
      canCatCut: salon.canCatCut,
      canSissorCut: salon.canSissorCut,
      hasCctv: salon.hasCctv,
      hasPickupService: salon.hasPickupService,
    });
    handleSubmit(salon);
  };

  return (
    <div className="flex flex-col justify-center items-center p-6 my-6 border-2 bg-white shadow rounded-md">
      <TitleH text="회원가입" />
      <Input
        type="text"
        name="name"
        labelText="매장명"
        value={name}
        onChange={onNameChange}
      />
      <Input
        type="text"
        name="tel"
        labelText="매장번호"
        value={tel}
        onChange={onTelChange}
      />
      <Input
        type="text"
        name="address"
        labelText="매장주소"
        value={address}
        onChange={onAddressChange}
      />
      <Input
        type="password"
        name="password"
        labelText="비밀번호"
        value={password}
        onChange={onPasswordChange}
      />
      <TitleH
        text="추가 입력 사항"
        plusStyle="w-full text-center text-sky-900 my-5 border-t-2 border-t-sky-200"
      />
      <div className="flex justify-between items-center w-full">
        <TextP text="고양이 미용" plusStyle="w-24" />
        <Input
          type="radio"
          labelText="가능"
          name="cat-cut"
          value={"true"}
          checked={salon.canCatCut}
          onChange={() => setSalon({ ...salon, canCatCut: true })}
        />
        <Input
          type="radio"
          labelText="불가능"
          name="cat-cut"
          value={"false"}
          checked={!salon.canCatCut}
          onChange={() => setSalon({ ...salon, canCatCut: false })}
        />
      </div>
      <div className="flex justify-between items-center w-full my-3">
        <TextP text="가위컷" plusStyle="w-24" />
        <Input
          type="radio"
          labelText="가능"
          name="sissor-cut"
          value={"true"}
          checked={salon.canSissorCut}
          onChange={() => setSalon({ ...salon, canSissorCut: true })}
        />
        <Input
          type="radio"
          labelText="불가능"
          name="sissor-cut"
          value={"false"}
          checked={!salon.canSissorCut}
          onChange={() => setSalon({ ...salon, canSissorCut: false })}
        />
      </div>
      <div className="flex justify-between items-center w-full my-3">
        <TextP text="CCTV 제공" plusStyle="w-24" />
        <Input
          type="radio"
          labelText="가능"
          name="cctv"
          value={"true"}
          checked={salon.hasCctv}
          onChange={() => setSalon({ ...salon, hasCctv: true })}
        />
        <Input
          type="radio"
          labelText="불가능"
          name="cctv"
          value={"false"}
          checked={!salon.hasCctv}
          onChange={() => setSalon({ ...salon, hasCctv: false })}
        />
      </div>
      <div className="flex justify-between items-center w-full my-3">
        <TextP text="픽업 서비스" plusStyle="w-24" />
        <Input
          type="radio"
          labelText="가능"
          name="pick-up"
          value={"true"}
          checked={salon.hasPickupService}
          onChange={() => setSalon({ ...salon, hasPickupService: true })}
        />
        <Input
          type="radio"
          labelText="불가능"
          name="pick-up"
          value={"false"}
          checked={!salon.hasPickupService}
          onChange={() => setSalon({ ...salon, hasPickupService: false })}
        />
      </div>
      <Button
        type="submit"
        onClick={handleSignUp}
        text="매장 등록"
        plusStyle="my-3"
      />
    </div>
  );
};

export default SignUpForm;

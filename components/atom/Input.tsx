import React, { ChangeEvent } from "react";

interface InputType {
  type: "text" | "radio" | "number" | "password";
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  labelText: string;
  checked?: boolean;
}

const Input = ({
  type,
  name,
  onChange,
  value,
  labelText,
  checked,
}: InputType) => {
  return (
    <div className="flex flex-col justify-center items-center">
      {type === "radio" ? (
        <label
          className={`px-4 py-2 mx-2 rounded ${
            checked ? "bg-sky-600" : "bg-sky-300"
          } text-white cursor-pointer`}
        >
          <input
            type="radio"
            value={value}
            className="mr-2 cursor-pointer"
            checked={checked}
            onChange={onChange}
          />
          {labelText}
        </label>
      ) : (
        <>
          <label
            className="pt-4 text-base tracking-tighter text-green-950"
            htmlFor={name}
          >
            {labelText}
          </label>
          <input
            type={type}
            name={name}
            onChange={onChange}
            value={value}
            required
            className="px-4 py-2 mt-2 rounded-xl border-2 border-sky-600 outline-none"
          />
        </>
      )}
    </div>
  );
};

export default Input;

import { MouseEvent } from "react";

interface ButtonState {
  type: "button" | "submit";
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void | (() => void);
  text: string;
  plusStyle?: string;
}
const Button = ({ type = "button", onClick, text, plusStyle }: ButtonState) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`min-w-fit px-4 py-2 rounded-2xl bg-sky-700 text-white tracking-tighter border-none outline-none cursor-pointer hover:brightness-110 ${plusStyle}`}
    >
      {text}
    </button>
  );
};

export default Button;

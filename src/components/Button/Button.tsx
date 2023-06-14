import React from "react";

interface IButton {
  text: string;
  border?: boolean;
}

export const Button = ({ text, border }: IButton): JSX.Element => {
  return (
    <div
      className={`
     w-fit rounded-full
     ${border && " rounded-l-none"}
      text-center p-4 font-bold text-slate-100 bg-blue-400 shadow-lg  transition hover:text-sky-700 cursor-pointer
      `}
    >
      {text}
    </div>
  );
};

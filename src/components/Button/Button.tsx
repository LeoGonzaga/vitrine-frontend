import React from "react";

interface IButton {
  text: string;
}

export const Button = ({ text }: IButton): JSX.Element => {
  return (
    <div
      className={`
      w-fit rounded-full
      text-center p-4 font-bold text-slate-100 bg-blue-400 shadow-lg  transition hover:text-sky-700 cursor-pointer
      `}
    >
      {text}
    </div>
  );
};

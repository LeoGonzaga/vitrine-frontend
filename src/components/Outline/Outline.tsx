import React from "react";

interface IButton {
  text: string;
}

export const Outline = ({ text }: IButton): JSX.Element => {
  return (
    <div
      className={`
     w-fit rounded-full
      text-center p-4 font-bold text-blue-400 bg-slate-100 shadow-lg  transition hover:text-sky-700 cursor-pointer
      `}
    >
      {text}
    </div>
  );
};

import React from "react";

export const Input = (): JSX.Element => {
  return (
    <div>
      <input
        className=" placeholder:text-slate-400 
        w-72
        block bg-white
        border border-slate-300 
        rounded-full
        rounded-r-none
        py-3 pl-3 pr-3
        shadow-sm focus:outline-none
        focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        placeholder="Digite o nome do comércio..."
        type="text"
        name="search"
      />
    </div>
  );
};

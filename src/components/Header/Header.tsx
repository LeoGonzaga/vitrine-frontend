import React from "react";
import Logo from "../Logo";
import Outline from "../Outline";

export const Header = (): JSX.Element => {
  return (
    <nav className="w-full pb-3 flex items-center justify-between border-solid border-b-2 border-gray-100">
      <Logo />
      <Outline text="Cadastrar meu negócio" />
    </nav>
  );
};

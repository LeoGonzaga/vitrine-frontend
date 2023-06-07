import React from "react";
import Logo from "../Logo";
import Button from "../Button";

export const Header = (): JSX.Element => {
  return (
    <nav className="w-full pb-3 flex items-center justify-between border-solid border-b-2 border-gray-100">
      <Logo />
      <Button text="Cadastrar meu negócio" />
    </nav>
  );
};

import React from "react";
import Logo from "../Logo";
import Button from "../Button";

export const Header = (): JSX.Element => {
  return (
    <nav className="flex items-center justify-between p-5 border-b-2">
      <Logo />

      <Button />
    </nav>
  );
};

import React from "react";
import Logo from "../Logo";

export const Header = (): JSX.Element => {
  return (
    <nav className="p-6 border-b-2">
      <Logo />
    </nav>
  );
};

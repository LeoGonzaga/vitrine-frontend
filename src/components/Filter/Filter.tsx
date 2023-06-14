import React from "react";
import Input from "../Input";
import Button from "../Button";

export const Filter = (): JSX.Element => {
  return (
    <div className="mt-4 flex items-center pb-3">
      <Input />
      <Button text="Procurar" border />
    </div>
  );
};

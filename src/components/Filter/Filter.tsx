import React from "react";
import Input from "../Input";
import Button from "../Button";

export const Filter = (): JSX.Element => {
  return (
    <div className="mt-4 flex w-full gap-4 items-center flex-wrap pb-3">
      <Input />
      <Button text="Buscar" />
    </div>
  );
};

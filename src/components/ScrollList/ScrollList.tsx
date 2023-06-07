import React from "react";
import Card from "../Card";

export const ScrollList = (): JSX.Element => {
  return (
    <div className="mt-2 max-h-[70vh] overflow-y-auto">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

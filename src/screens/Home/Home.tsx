import Filter from "@/components/Filter";
import Header from "@/components/Header";
import ScrollList from "@/components/ScrollList";
import Title from "@/components/Title";
import React from "react";

export const Home = () => {
  return (
    <div className="p-3">
      <Header />
      <div className="flex flex-wrap w-full items-center justify-between">
        <Filter />
        <Title />
      </div>
      <div className="flex items-center content-center justify-center">
        <ScrollList />
      </div>
    </div>
  );
};

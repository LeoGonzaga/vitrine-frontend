import Details from "@/components/Details";
import Filter from "@/components/Filter";
import Header from "@/components/Header";
import ScrollList from "@/components/ScrollList";
import Title from "@/components/Title";
import React from "react";

export const Home = () => {
  return (
    <div className="p-3">
      <Header />
      <Filter />
      <Title />
      <div className="flex gap-20 flex-wrap-reverse items-center content-center justify-center">
        <ScrollList />
        <Details />
      </div>
    </div>
  );
};

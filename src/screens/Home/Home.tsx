import Card from "@/components/Card";
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
      <ScrollList />
    </div>
  );
};

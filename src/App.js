import React from "react";
import { Films } from "./bus/films/Films";
import { Search } from "./bus/films/Search";
import { Header } from "./components/Header";

export const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Search />
      <Films />
    </div>
  );
};

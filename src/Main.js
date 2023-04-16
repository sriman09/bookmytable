import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AppBanner from "./components/AppBanner";
import Table from "./components/Table";
import Hero from "./components/Hero";

const Main = () => {
  return (
    <div>
      <Hero />
      <Table />
      <AppBanner />
    </div>
  );
};
export default Main;

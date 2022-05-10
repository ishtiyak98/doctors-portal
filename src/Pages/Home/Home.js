import React from "react";
import Navbar from "../Shared/Navbar";
import Banner from "./Banner";
import Info from "./Info";
import Services from "./Services";

const Home = () => {
  return (
    <div className="mx-5 lg:mx-16">
      <Navbar></Navbar>
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
    </div>
  );
};

export default Home;

import React from "react";
import Navbar from "../Shared/Navbar";
import Banner from "./Banner";
import Info from "./Info";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services";
import Treatment from "./Treatment";

const Home = () => {
  return (
    <div className="mx-5 lg:mx-16">
      <Navbar></Navbar>
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <Treatment></Treatment>
      <MakeAppointment></MakeAppointment>
    </div>
  );
};

export default Home;

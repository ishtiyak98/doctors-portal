import React from "react";
import Navbar from "../Shared/Navbar";
import Banner from "./Banner";
import ContactUs from "./ContactUs";
import Info from "./Info";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services";
import Testimonial from "./Testimonial";
import Treatment from "./Treatment";

const Home = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <Treatment></Treatment>
      <MakeAppointment></MakeAppointment>
      <Testimonial></Testimonial>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;

import React, { useState } from "react";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import AvailableAppointments from "./AvailableAppointments";
import DatePicker from "./DatePicker";

const Appointment = () => {
    const [date, setDate] = useState(new Date());
  return (
    <div>
      <Navbar></Navbar>
      <DatePicker date={date} setDate={setDate}></DatePicker>
      <AvailableAppointments date={date}></AvailableAppointments>
      <Footer></Footer>
    </div>
  );
};

export default Appointment;

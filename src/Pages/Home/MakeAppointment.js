import React from "react";
import doctor from "../../assets/images/doctor-small.png";
import appBack from "../../assets/images/appointment.png";
import MainButton from "../Shared/MainButton";

const MakeAppointment = () => {
  return (
    <section style={{ background: `url(${appBack})` }} className="mb-40 mt-20 px-5 lg:px-16">
      <div className="flex items-center justify-center">
        <div className="flex-1 hidden lg:block">
          <img className=" mt-[-100px]" src={doctor} alt="" />
        </div>
        <div className="flex-1">
          <div className="space-y-7 p-8 lg:pr-24">
            <h5 className="text-2xl font-semibold text-secondary">
              Appointment
            </h5>
            <h1 className="text-4xl font-semibold text-white">
              Make an appointment Today
            </h1>
            <p className="text-white">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <MainButton>GET STARTED</MainButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;

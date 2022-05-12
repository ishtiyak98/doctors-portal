import { format } from "date-fns";
import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import bannerImg from "../../assets/images/chair.png";

const DatePicker = ({ date, setDate }) => {
  return (
    <section>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={bannerImg} className="max-w-sm rounded-lg shadow-2xl" alt="" />
          <div>
            <DayPicker mode="single" selected={date} onSelect={setDate} />
            <p>You have selected : {format(date, "PP")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DatePicker;

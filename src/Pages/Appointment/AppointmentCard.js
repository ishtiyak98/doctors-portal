import React from "react";
import AppointmentModal from "./AppointmentModal";


const AppointmentCard = ({appointment, setTreatment}) => {
    const {name, slots} = appointment;
  return (
    <div>
      <div style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }} className="card max-w-lg">
        <div className="card-body items-center text-center space-y-1">
          <h2 className="card-title text-secondary">{name}</h2>
          <p className="uppercase text-lg font-medium">
              {slots.length ? slots[0] : <span className="text-red-500">try another date</span>}
          </p>
          <p className="uppercase text-sm font-medium">{slots.length} {slots.length <= 0 ? "space" : "spaces"} Available</p>
          <div className="card-actions">
            {/* <MainButton disabled={slots.length === 0}>book appointment</MainButton> */}
            <label
                htmlFor="booking-modal"
                disabled={slots.length === 0}
                className="btn btn-secondary text-white uppercase"
                onClick={()=> setTreatment(appointment)}
                >Book Appointment</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;

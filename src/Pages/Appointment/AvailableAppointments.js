import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Spinner from "../Shared/Spinner";
import AppointmentCard from "./AppointmentCard";
import AppointmentModal from "./AppointmentModal";

const AvailableAppointments = ({ date }) => {
  // const [appointments, setAppointment] = useState([]);
  const [treatment, setTreatment] = useState(null);

  const {data:appointments, isLoading, refetch } = useQuery("available", () =>
    fetch(`http://localhost:5000/available?date=${format(date, "PP")}`)
    .then((res) => res.json())
  );

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  // useEffect(() => {
  //   fetch(`http://localhost:5000/available?date=${format(date, "PP")}`)
  //     .then((res) => res.json())
  //     .then((data) => setAppointment(data));
  // }, [date]);

  console.log(treatment);

  return (
    <section className="pb-40 mx-5 lg:mx-16">
      <h2 className="text-2xl font-semibold text-secondary text-center mb-16">
        Available Appointments on {format(date, "PP")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {appointments.map((appointment) => (
          <AppointmentCard
            key={appointment._id}
            appointment={appointment}
            setTreatment={setTreatment}
          ></AppointmentCard>
        ))}
      </div>

      {treatment && (
        <AppointmentModal
          treatment={treatment}
          setTreatment={setTreatment}
          date={date}
          refetch = {refetch}
        ></AppointmentModal>
      )}
    </section>
  );
};

export default AvailableAppointments;

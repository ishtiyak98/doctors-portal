import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyAppointment = () => {
  const [myAppointments, setMyAppointments] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/appointment?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setMyAppointments(data));
    }
  }, [user]);

  return (
    <div className="mx-5 lg:mx-16">
      <div class="overflow-x-auto mt-4">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th className="text-base">Name</th>
              <th className="text-base">Date</th>
              <th className="text-base">Time</th>
              <th className="text-base">Treatment</th>
            </tr>
          </thead>
          <tbody>
            {myAppointments.map((ap, index) => (
              <tr className="hover">
                <th>{index + 1}</th>
                <td>{ap.patientName}</td>
                <td>{ap.date}</td>
                <td>{ap.slot}</td>
                <td>{ap.treatmentName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;

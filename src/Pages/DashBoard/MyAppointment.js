import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const MyAppointment = () => {
  const [myAppointments, setMyAppointments] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/appointment?email=${user.email}`, {
        method: "GET",
        headers: {
          "authorization": `Bearer ${localStorage.getItem("accessToken")}`
        }
      })
        .then((res) => {
          console.log(res, "...res");
          if (res.status === 401 || res.status === 403) {
            localStorage.removeItem("accessToken");
            signOut(auth);
            toast.error("Un-Authorized Access");
            navigate("/");
          }
          return res.json();
        })
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

import React from "react";
import { useQuery } from "react-query";
import Spinner from "../Shared/Spinner";
import UserRow from "./UserRow";

const Users = () => {
  const { data: users, isLoading, refetch } = useQuery("users", () =>
    fetch("http://localhost:5000/users", {
        method: "GET",
        headers:{
            "authorization": `Bearer ${localStorage.getItem("accessToken")}`
        }
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Spinner></Spinner>;
  }
  return (
    <div>
      <h2>All User {users.length}</h2>

      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {
                users.map((user, index)=> <UserRow key={index} index={index} user={user} refetch={refetch}></UserRow>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;

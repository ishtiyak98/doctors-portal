import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, index, refetch }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("failed to make an admin, You Don't have the authorization.");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          console.log(data);
          refetch();
          toast.success("successfully made an admin");
        }
      });
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{email}</td>
      <td>
        {
          <button
            className="btn btn-secondary text-white btn-sm"
            onClick={makeAdmin}
            disabled={role === "admin"}
          >
            Make Admin
          </button>
        }
      </td>
      <td>
        <button className="btn btn-accent text-white btn-sm">
          Remove User
        </button>
      </td>
    </tr>
  );
};

export default UserRow;

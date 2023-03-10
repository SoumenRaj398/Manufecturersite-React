import React from "react";
import { toast } from "react-toastify";

const User = ({ refetch, user }) => {
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
          toast.error("Failed to create an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`Successfully an admin create`);
        }
      });
  };
  return (
    <tr className="text-center">
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} className="btn btn-xs btn-outline">
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button className="btn btn-xs btn-outline">X</button>
      </td>
    </tr>
  );
};

export default User;

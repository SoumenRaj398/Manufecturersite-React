import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyTools = () => {
  const [purchases, setPurchases] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/ordered?customer=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          console.log("res", res);
          if (res.status === 401 || res.status === 403) {
            navigate("/");
          }
          return res.json();
        })
        .then((data) => {
          setPurchases(data);
        });
    }
  }, [user]);
  return (
    <div>
      <h1 className="text-xl font-bold text-primary mb-2">
        my oreder:{purchases.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr className="text-center">
              <th></th>
              <th>Name</th>
              <th>Address</th>
              <th>Quantity</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {purchases.map((p, index) => (
              <tr className="text-center">
                <th>{index + 1}</th>
                <td>{p.customerName}</td>
                <td>{p.quantity}</td>
                <td>{p.address}</td>
                <td>
                  <button class="btn btn-xs btn-outline">X</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTools;

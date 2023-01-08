import React from "react";
import { useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Quantity from "./Quantity";
import { toast } from "react-toastify";

//

const Purchase = () => {
  const { purchaseId } = useParams();
  const [user, loading, error] = useAuthState(auth);

  const handlePurchase = (e) => {
    e.preventDefault();

    const purchase = {
      purchaseId: purchaseId,
      customer: user.email,
      customerName: user.displayName,
      phone: e.target.phone.value,
      address: e.target.address.value,
      quantity: e.target.quantity.value,
    };
    fetch("http://localhost:5000/purchase", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(purchase),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          toast("Your order is done");
        } else {
          toast("Your order is failed");
        }
      });
  };

  return (
    <div>
      <h1 className="text-center text-4xl font-bold m-16 text-secondary">
        Fill up this form for your order
      </h1>
      <form
        onSubmit={handlePurchase}
        className="grid grid-cols-1 gap-4 justify-items-center"
      >
        <input
          type="text"
          disabled
          value={user?.displayName}
          className="input input-bordered input-accent w-full max-w-xs"
        />
        <input
          type="email"
          disabled
          value={user?.email}
          className="input input-bordered input-accent w-full max-w-xs"
        />
        <input
          type="text"
          value={purchaseId}
          disabled
          className="input input-bordered input-accent w-full max-w-xs"
        />
        <input
          name="quantity"
          type="text"
          placeholder="Order Quantity"
          className="input input-bordered input-accent w-full max-w-xs"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          className="input input-bordered input-accent w-full max-w-xs"
        />
        <input
          name="address"
          type="text"
          placeholder="Your Address"
          className="input input-bordered input-accent w-full max-w-xs"
        />
        <input
          type="submit"
          value="Submit"
          className="btn border-0 text-white w-full max-w-xs bg-gradient-to-r from-primary to-secondary"
        />
      </form>
      <div className="text-center m-24">
        <Quantity />
      </div>
    </div>
  );
};

export default Purchase;

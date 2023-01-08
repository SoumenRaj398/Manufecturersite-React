import React from "react";

const ToolSummery = () => {
  return (
    <div className="hero min-h-screen mt-5">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://i.ibb.co/x6mpNGP/cmputer.jpg"
          className=" rounded-bl-lg shadow-sm"
          alt=""
        />
        <div>
          <h1 className="text-4xl font-bold">Which Parts Are Available</h1>
          <p className="py-6">
            Here are top-of-the-line PC Building Components available and each
            of these products is durable and original. You will be able to find
            the latest Casings, Power Supplies, Processors, Graphics Cards,
            Motherboards, RAMs, Hard Disks, and more to make your desired
            Desktop PC..
          </p>
          <button className="btn border-0 bg-gradient-to-r from-primary to-secondary text-white font-bold">
            MORE DETAILS
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToolSummery;

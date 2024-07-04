import React from "react";

function Fluid() {
  return (
    <div className="flex flex-col justify-between items-center mt-32">
      <div className="flex flex-col text-center max-w-64 gap-8 mb-8">
        <h5 className=" text-[#BDBDBD]">SUMMER 2020</h5>
        <h2>Part of the Neural Universe</h2>
        <h4 className="text-mainSpace-grey">
          We know how large objects will act, but things on a small scale.
        </h4>
      </div>
      <div className="flex flex-col justify-between items-center gap-8">
        <button className="button-std max-w-fit">BUY NOW</button>
        <button className="button-std-reverse max-w-fit">Learn More</button>
      </div>
      <div className="flex items-center">
        <img src="../images/Fluid.png" alt="hero" />
      </div>
    </div>
  );
}

export default Fluid;

import React from "react";

function Fluid() {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="text-center gap-8 mt-32 mb-20 max-w-64">
        <h5 className=" text-[#BDBDBD]">SUMMER 2020</h5>
        <h2>Part of the Neural Universe</h2>
        <h4>
          We know how large objects will act, but things on a small scale.
        </h4>
      </div>
      <div className="flex flex-col gap-6 ">
        <button className="button-std">BUY NOW</button>
        <button className="button-std-reverse">Learn More</button>
      </div>
      <div className="flex items-center">
        <img src="../images/Fluid.png" alt="hero" />
      </div>
    </div>
  );
}

export default Fluid;

import React from "react";

function Fluid() {
  return (
    <section className="flex flex-col justify-between md:justify-center items-center mt-32 md:mt-0 md:flex-row-reverse">
      <div className="flex flex-col justify-between items-center md:items-start gap-8 md:min-w-[570px]">
        <div className="text-center max-w-64 md:max-w-sm md:text-left">
          <h5 className=" text-[#BDBDBD]">SUMMER 2020</h5>
          <h2>Part of the Neural Universe</h2>
          <h4 className="text-mainSpace-grey">
            We know how large objects will act, but things on a small scale.
          </h4>
        </div>
        <div className="flex flex-col justify-between items-center gap-7 md:flex-row">
          <button className="button-std">BUY NOW</button>
          <button className="button-std-reverse">Learn More</button>
        </div>
      </div>
      <div className="flex items-center md:max-w-[1025px]">
        <img
          src="../images/Fluid.png"
          className="md:min-w-[725px] object-cover"
          alt="hero"
        />
      </div>
    </section>
  );
}

export default Fluid;

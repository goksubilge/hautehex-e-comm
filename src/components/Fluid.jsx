import React from "react";

function Fluid() {
  return (
    <section className="flex flex-col justify-between md:justify-center items-center mt-32 md:mt-0 md:flex-row-reverse gap-24">
      <div className="flex flex-col justify-between items-center md:items-start gap-8 md:min-w-[380px]">
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
      <div className="md:max-w-[700px] overflow-hidden">
        <img
          src="../images/Fluid.png"
          className="min-w-[350px] min-h-[350px] md:min-h-[600px] md:min-w-[300px] md:scale-110 object-cover "
          alt="hero"
        />
      </div>
    </section>
  );
}

export default Fluid;

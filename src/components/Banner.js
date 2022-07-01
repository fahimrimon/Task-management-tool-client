import React from "react";
import banner from "../Images/banner.webp";
const Banner = () => {
  return (
    <div class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={banner} class="max-w-sm rounded-lg shadow-2xl" alt="" />
        <div>
          <h1 class="text-5xl font-bold">This is the time to set your <br /> <span className="text-amber-400">Daily task</span></h1>
          <p class="py-6">
            Now is your time to complete the daily task.
          </p>
          <button class="btn btn-secondary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

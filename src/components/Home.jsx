import React from "react";
import img from "../assets/img/home.png";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-col-reverse justify-center lg:flex-row lg:justify-between items-center lg:px-32 px-5 gap-10 bg-gradient-to-r from-[#FFDCAB] to-[#AB6B2E] ">
      <div className=" w-full lg:w-2/4 space-y-4 mt-14 lg:mt-0 mb-10 lg:mb-0 lg:text-start text-center">
        <h1 className="font-semibold text-5xl  lg:text-start leading-tight">
          Start your day with a steaming cup of coffee
        </h1>
        <p>
          Boost your productivity and build your mood with a glass of coffee in
          the morning
        </p>

        <div className=" flex flex-row gap-6 lg:justify-start justify-center ">
          <Button title="ADD TO CART"  />
          <Button title="MORE MENU" />
        </div>
      </div>

      <div className="relative mt-20 lg:mt-0">
        <img src={img} alt="img" className="animate-[spin_40s_linear_infinite]  " />

        <div className=" absolute bg-white px-8 py-2 top-5 right-0 rounded-full shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] hover:scale-105 duration-150">
          <h2 className=" font-semibold">14K</h2>
        </div>

        <div className=" absolute bg-white px-8 py-2 bottom-0 -left-10 rounded-full hover:scale-105 duration-150">
          <h2 className=" font-semibold">Cappuccino</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;

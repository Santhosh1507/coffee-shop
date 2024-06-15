import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const MenuCard = (props) => {
  return (
    <div className=" w-full lg:w-1/4 bg-white p-3 rounded-lg hover:scale-110 duration-200 ">
      <div>
        <img className=" rounded-xl hover:scale-105 duration-100" src={props.img} alt="img1" />
      </div>
      <div className=" p-2 mt-5">
        <div className=" flex flex-row justify-between">
          <h3 className=" font-semibold text-xl hover:scale-110 duration-100">{props.title}</h3>
          <h3 className=" font-semibold text-xl hover:scale-110 duration-100">{props.value}</h3>
        </div>
        <div className=" flex flex-row justify-between mt-3">
          <div className=" flex gap-2">
            <button className="px-3 text-sm border-2 border-[#AB6B2E] bg-[#FFDCAB] hover:text-[#AB6B2E] transition-all rounded-lg hover:scale-110 duration-100">
              Hot
            </button>
            <button className="px-3 text-sm border-2 border-[#AB6B2E] bg-[#FFDCAB] hover:text-[#AB6B2E] transition-all rounded-lg hover:scale-110 duration-100">
              Cold
            </button>
          </div>
          <span className=" flex items-center bg-[#FFDCAB] px-3 py-2 rounded-full cursor-pointer hover:scale-125 duration-100">
            <FaShoppingCart size={20} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;

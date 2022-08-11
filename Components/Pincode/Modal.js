import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";

const index = () => {
  return (
    <div className="absolute flex flex-col top-10 rounded-[10px] w-[500px]">
      <div className="bg-[#303030] mb-[50px] p-8 rounded-[10px]">
        <h1 className="text-[16px] font-bold text-[#FFFFFF] mb-5">
          Add Pincode
        </h1>
        <div className="flex gap-5">
          <input
            type="text"
            placeholder="282007"
            className="p-3 outline-none text-center w-[60%] rounded-md"
          />
          <button className="bg-[#FFC044] w-[40%] text-center rounded-md text-black">
            ADD
          </button>
        </div>

        <div className="flex flex-col mt-6 w-full">
          <div className="flex flex-row items-center justify-between">
            <h1 className="text-[16px] font-bold text-[#FFFFFF]">Add Area</h1>
            <div className="w-fit flex items-center text-white rounded-lg bg-[#141414] py-2 px-4 space-x-2">
              <BsPlusLg />
              <span>Add</span>
            </div>
          </div>
          <div className="flex felx-row gap-5 w-full mt-4 ">
            <div className="bg-[#F9F9F9] py-[10px] px-3 rounded-md w-[90%] cursor-pointer">
              Ram Chock
            </div>
            <div className="flex items-center bg-white ml-3 px-3 py-2 rounded-[4px] cursor-pointer w-1/10">
              <FaTrash color="#FF2525" size="1.5rem" />
            </div>
          </div>
          <div className="flex felx-row gap-5 w-full mt-4 ">
            <div className="bg-[#F9F9F9] py-[10px] px-3 rounded-md w-[90%] cursor-pointer">
              Ram Chock
            </div>
            <div className="flex items-center bg-white ml-3 px-3 py-2 rounded-[4px] cursor-pointer w-1/10">
              <FaTrash color="#FF2525" size="1.5rem" />
            </div>
          </div>
          <div className="flex felx-row gap-5 w-full mt-4 ">
            <div className="bg-[#F9F9F9] py-[10px] px-3 rounded-md w-[90%] cursor-pointer">
              Ram Chock
            </div>
            <div className="flex items-center bg-white ml-3 px-3 py-2 rounded-[4px] cursor-pointer w-1/10">
              <FaTrash color="#FF2525" size="1.5rem" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;

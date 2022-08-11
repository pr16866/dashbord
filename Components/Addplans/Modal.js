import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";

const index = () => {
  return (
    <div className="absolute flex flex-col top-10 rounded-[10px] w-[800px]">
      <div className="bg-[#303030] relative mb-[50px] p-8 rounded-[10px]">
        <h1 className="text-[18px] font-bold text-[#FFFFFF] mb-5">ADD PLAN</h1>

        <div className="flex md:flex-row flex-col items-center md:flex-wrap text-white md:gap-[22px] tracking-wider mt-12 font-sans gap-6">
          <div className="w-full md:w-[31%] items-center justify-around flex-wrap md:flex-row">
            <label
              htmlFor="vehicle"
              className="block mb-1 font-semibold text-[12px] md:text-[15px]"
            >
              Vehicle Type *
            </label>
            <select
              name="vehicleType"
              id="cars"
              className="w-full p-3 rounded-[5px] text-[#737373] mb-2 outline-none flex items-center"
              //   onChange={handleChange}
            >
              <option value="car">Car</option>
              <option value="bike">Bike</option>
            </select>
          </div>
          <div className="w-full md:w-[31%] items-center justify-around flex-wrap md:flex-row">
            <label
              htmlFor="vehicle"
              className="block mb-1 font-semibold text-[12px] md:text-[15px]"
            >
              Selecet Category *
            </label>
            <select
              name="category"
              id="cars"
              className="w-full p-3 rounded-[5px] text-[#737373] mb-2 outline-none "
              //   onChange={handleChange}
            >
              <option value="hatchback">Hatchback</option>
              <option value="sedan">Sedan</option>
              <option value="mini suv">Mini suv</option>
              <option value="suv">Suv</option>
            </select>
          </div>
          <div className="w-full md:w-[30%] items-center justify-around flex-wrap md:flex-row">
            <label
              htmlFor="vehicle"
              className="block mb-1 font-semibold text-[12px] md:text-[15px]"
            >
              Service *
            </label>
            <select
              name="service"
              id="cars"
              className="w-full p-3 rounded-[5px] text-[#737373] mb-2 outline-none"
              // onChange={handleChange}
            >
              <option value="subscription wash">Subscription wash</option>

              <option value="onetime wash"> Onetime wash</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end mt-4">
          <div className="w-fit flex items-center text-white rounded-lg bg-[#141414] p-2 space-x-2 mr-3">
            <BsPlusLg />
            <span>Add Feature</span>
          </div>
        </div>

        <div className="w-full mt-3">
          <label
            htmlFor="address"
            className="block mb-1 font-semibold text-white text-semibold text-[15px]"
          >
            Feature 1 *
          </label>
          <div className="flex flex-row">
            <input
              type="text"
              name="address"
              placeholder="Feature Description"
              className="w-full text-[14px] px-4 py-[10px] rounded outline-none"
            />
            <div className="flex items-center bg-white ml-3 px-3 py-2 rounded-[4px] cursor-pointer">
              <FaTrash color="#FF2525" size="1.5rem" />
            </div>
          </div>
        </div>
        <div className="w-full mt-4">
          <label
            htmlFor="address"
            className="block mb-1 font-semibold text-white text-semibold text-[15px]"
          >
            Feature 2 *
          </label>
          <div className="flex flex-row">
            <input
              type="text"
              name="address"
              placeholder="Feature Description"
              className="w-full text-[14px] px-4 py-[10px] rounded outline-none"
            />
            <div className="flex items-center bg-white ml-3 px-3 py-2 rounded-[4px] cursor-pointer">
              <FaTrash color="#FF2525" size="1.5rem" />
            </div>
          </div>
        </div>
        <div className="w-full mt-4">
          <label
            htmlFor="address"
            className="block mb-1 font-semibold text-white text-semibold text-[15px]"
          >
            Feature 3 *
          </label>
          <div className="flex flex-row">
            <input
              type="text"
              name="address"
              placeholder="Feature Description"
              className="w-full text-[14px] px-4 py-[10px] rounded outline-none"
            />
            <div className="flex items-center bg-white ml-3 px-3 py-2 rounded-[4px] cursor-pointer">
              <FaTrash color="#FF2525" size="1.5rem" />
            </div>
          </div>
        </div>

        <div className="w-[30%] mt-6">
          <label
            htmlFor="address"
            className="block mb-1 font-semibold text-white text-semibold text-[15px]"
          >
            Best Price *
          </label>
          <input
            type="number"
            name="address"
            placeholder="4000"
            className="w-full text-[14px] px-4 py-[10px] rounded outline-none"
          />
        </div>

        <div className="flex justify-end mt-4">
          <div className="w-fit flex items-center text-white rounded-lg bg-[#141414] py-2 px-4 space-x-2">
            <BsPlusLg />
            <span>AddOns</span>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex gap-5 w-full mt-3">
            <div className="w-[60%]">
              <label
                htmlFor="address"
                className="block mb-1 font-semibold text-white text-semibold text-[15px]"
              >
                Add On 1 *
              </label>
              <div className="flex flex-row">
                <input
                  type="text"
                  name="address"
                  placeholder="Pre filled"
                  className="w-full text-[14px] px-4 py-[10px] rounded outline-none"
                />
              </div>
            </div>
            <div className="w-[38%]">
              <label
                htmlFor="address"
                className="block mb-1 font-semibold text-white text-semibold text-[15px]"
              >
                Price *
              </label>
              <div className="flex flex-row">
                <input
                  type="number"
                  name="address"
                  placeholder="400"
                  className="w-full text-[14px] px-4 py-[10px] rounded outline-none"
                />
                <div className="flex items-center bg-white ml-5 px-3 py-2 rounded-[4px] cursor-pointer">
                  <FaTrash color="#FF2525" size="1.5rem" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-5 w-full mt-3">
            <div className="w-[60%]">
              <label
                htmlFor="address"
                className="block mb-1 font-semibold text-white text-semibold text-[15px]"
              >
                Add On 1 *
              </label>
              <div className="flex flex-row">
                <input
                  type="text"
                  name="address"
                  placeholder="Pre filled"
                  className="w-full text-[14px] px-4 py-[10px] rounded outline-none"
                />
              </div>
            </div>
            <div className="w-[38%]">
              <label
                htmlFor="address"
                className="block mb-1 font-semibold text-white text-semibold text-[15px]"
              >
                Price *
              </label>
              <div className="flex flex-row">
                <input
                  type="number"
                  name="address"
                  placeholder="400"
                  className="w-full text-[14px] px-4 py-[10px] rounded outline-none"
                />
                <div className="flex items-center bg-white ml-5 px-3 py-2 rounded-[4px] cursor-pointer font-normal">
                  <FaTrash color="#FF2525" size="1.5rem" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#FFC044] w-[60%] mx-auto rounded-md mt-6">
          <button className="w-full py-[14px] text-black">Add Plan</button>
        </div>
      </div>
    </div>
  );
};

export default index;

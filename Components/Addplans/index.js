import React, { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import AddplansModal from "./Modal";

const index = () => {
  const [isModal, setIsModal] = useState(false);
  const [openId, setOpenId] = useState("1");

  const toggleDetails = (id) => {
    openId == id ? setOpenId("") : setOpenId(id);
  };
  return (
    <>
      <div className="flex flex-row items-center justify-between px-4 mt-10">
        <h1 className="mt-4 text-lg font-bold text-black mb-4">Plans</h1>
        <div
          className="w-fit flex items-center text-white rounded-lg bg-[#141414] py-2 px-4 space-x-2 cursor-pointer"
          onClick={() => setIsModal(!isModal)}
        >
          <BsPlusLg />
          <span>Add Plans</span>
        </div>
      </div>

      <table className="w-full text-left text-[14px] whitespace-no-wrap mt-5">
        <thead>
          <tr className="space-x-4">
            <th className="px-4 w-[150px] py-3 title-font tracking-wider font-semibold text-gray-900  text-sm rounded-tl rounded-bl">
              Plan ID
            </th>
            <th className="px-4 w-[250px] py-3 title-font tracking-wider font-semibold text-gray-900  text-sm">
              Plan Name
            </th>
            <th className="px-4 w-[120px] py-3 title-font tracking-wider font-semibold text-gray-900  text-sm">
              Category
            </th>
            <th className="px-4 w-[120px] py-3 title-font tracking-wider font-semibold text-gray-900  text-sm">
              Price
            </th>
            <th className="px-4 w-[150px] py-3 title-font tracking-wider font-semibold text-gray-900  text-sm">
              Edit
            </th>
            <th className="w-[100px] title-font tracking-wider font-semibold text-gray-900  text-sm rounded-tr rounded-br"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-3 w-max">#1</td>
            <td className="px-4 py-3 w-max">Car Golden Package</td>
            <td className="px-4 py-3 text-gray-900 w-max">Sedan</td>
            <td className="px-4 py-3">6000</td>
            <td>
              <div className="flex flex-row items-center justify-between">
                <div className="flex py-1 px-5 rounded-md items-center bg-[#FFC044]">
                  <button>Edit</button>
                </div>
                <div
                  className="ml-5 p-[2px]"
                  onClick={() => toggleDetails("1")}
                >
                  <FaChevronDown className="cursor-pointer" />
                </div>
              </div>
            </td>
          </tr>
          <tr className="border-b border-[#EFEEEB]">
            <td colSpan={5}>
              {openId == "1" && (
                <div className="flex px-2 py-3 text-[#151515]">
                  <div className="flex flex-col w-1/2">
                    <h1 className="text-[16px] font-bold ">Features</h1>
                    <span>
                      Lorem ipsum dolor sit amet, consec adipiscing elit.
                    </span>
                    <span>
                      Lorem ipsum dolor sit amet, consec adipiscing elit.
                    </span>
                    <span>Lorem ipsum dolor sit amet, consec</span>
                    <span>Lorem ipsum dolor sit amet, consec adipiscing</span>
                    <span>Lorem ipsum dolor sit amet, consec</span>
                  </div>
                  <div className="flex flex-col w-1/2">
                    <h1 className="text-[16px] font-bold">Wash Details</h1>
                    <div className="flex flex-row">
                      <div className="flex flex-col">
                        <p htmlFor="name" className="mr-[10px]">
                          Assigned
                        </p>
                        <p htmlFor="name" className="mr-[10px]">
                          Wash Type
                        </p>
                        <p htmlFor="name" className="mr-[10px]">
                          Wash of the month
                        </p>
                        <p htmlFor="name" className="mr-[10px]">
                          Add Ons
                        </p>
                      </div>
                      <div className="flex flex-col">
                        <p>: Rakesh Kumar/Not assigned</p>
                        <p>: Gold package wash</p>
                        <p>: 2/4</p>
                        <p>
                          : Windscreen cleaning <br></br> Tyre polishing
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </td>
          </tr>
          {/* ------------------------------ */}
          <tr>
            <td className="px-4 py-3 w-max">#2</td>
            <td className="px-4 py-3 w-max">Car Golden Package</td>
            <td className="px-4 py-3 text-gray-900 w-max">Sedan</td>
            <td className="px-4 py-3">6000</td>
            <td>
              <div className="flex flex-row items-center justify-between">
                <div className="flex py-1 px-5 rounded-md items-center bg-[#FFC044]">
                  <button>Edit</button>
                </div>
                <div
                  className="ml-5 p-[2px]"
                  onClick={() => toggleDetails("2")}
                >
                  <FaChevronDown className="cursor-pointer" />
                </div>
              </div>
            </td>
          </tr>
          <tr className="border-b border-[#EFEEEB]">
            <td colSpan={5}>
              {openId == "2" && (
                <div className="flex px-2 py-3 text-[#151515]">
                  <div className="flex flex-col w-1/2 text-left">
                    <h1 className="text-[16px] font-bold ">Features</h1>
                    <span>
                      Lorem ipsum dolor sit amet, consec adipiscing elit.
                    </span>
                    <span>
                      Lorem ipsum dolor sit amet, consec adipiscing elit.
                    </span>
                    <span>Lorem ipsum dolor sit amet, consec</span>
                    <span>Lorem ipsum dolor sit amet, consec adipiscing</span>
                    <span>Lorem ipsum dolor sit amet, consec</span>
                  </div>
                  <div className="flex flex-col w-1/2">
                    <h1 className="text-[16px] font-bold">Wash Details</h1>
                    <div className="flex flex-row">
                      <div className="flex flex-col">
                        <p htmlFor="name" className="mr-[10px]">
                          Assigned
                        </p>
                        <p htmlFor="name" className="mr-[10px]">
                          Wash Type
                        </p>
                        <p htmlFor="name" className="mr-[10px]">
                          Wash of the month
                        </p>
                        <p htmlFor="name" className="mr-[10px]">
                          Add Ons
                        </p>
                      </div>
                      <div className="flex flex-col">
                        <p>: Rakesh Kumar/Not assigned</p>
                        <p>: Gold package wash</p>
                        <p>: 2/4</p>
                        <p>
                          : Windscreen cleaning <br></br> Tyre polishing
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </td>
          </tr>
          {/* ------------------------------ */}
          <tr>
            <td className="px-4 py-3 w-max">#3</td>
            <td className="px-4 py-3 w-max">Car Golden Package</td>
            <td className="px-4 py-3 text-gray-900 w-max">Sedan</td>
            <td className="px-4 py-3">6000</td>
            <td>
              <div className="flex flex-row items-center justify-between">
                <div className="flex py-1 px-5 rounded-md items-center bg-[#FFC044]">
                  <button>Edit</button>
                </div>
                <div
                  className="ml-5 p-[2px]"
                  onClick={() => toggleDetails("3")}
                >
                  <FaChevronDown className="cursor-pointer" />
                </div>
              </div>
            </td>
          </tr>
          <tr className="border-b border-[#EFEEEB]">
            <td colSpan={5}>
              {openId == "3" && (
                <div className="flex px-2 py-3 text-[#151515]">
                  <div className="flex flex-col w-1/2">
                    <h1 className="text-[16px] font-bold ">Features</h1>
                    <span>
                      Lorem ipsum dolor sit amet, consec adipiscing elit.
                    </span>
                    <span>
                      Lorem ipsum dolor sit amet, consec adipiscing elit.
                    </span>
                    <span>Lorem ipsum dolor sit amet, consec</span>
                    <span>Lorem ipsum dolor sit amet, consec adipiscing</span>
                    <span>Lorem ipsum dolor sit amet, consec</span>
                  </div>
                  <div className="flex flex-col w-1/2">
                    <h1 className="text-[16px] font-bold">Wash Details</h1>
                    <div className="flex flex-row">
                      <div className="flex flex-col">
                        <p htmlFor="name" className="mr-[10px]">
                          Assigned
                        </p>
                        <p htmlFor="name" className="mr-[10px]">
                          Wash Type
                        </p>
                        <p htmlFor="name" className="mr-[10px]">
                          Wash of the month
                        </p>
                        <p htmlFor="name" className="mr-[10px]">
                          Add Ons
                        </p>
                      </div>
                      <div className="flex flex-col">
                        <p>: Rakesh Kumar/Not assigned</p>
                        <p>: Gold package wash</p>
                        <p>: 2/4</p>
                        <p>
                          : Windscreen cleaning <br></br> Tyre polishing
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </td>
          </tr>
          {/* ------------------------------ */}
        </tbody>
      </table>
      {isModal && (
        <div className="absolute flex justify-center items-center inset-0 z-50 outline-none focus:outline-none backdrop-blur-sm">
          <AddplansModal />
        </div>
      )}
    </>
  );
};

export default index;

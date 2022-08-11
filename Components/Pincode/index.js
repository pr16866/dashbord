import React, { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import PincodeModal from "./Modal";

const index = () => {
  const [isModal, setIsModal] = useState(false);

  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-row items-center justify-between px-4 mt-10">
          <h1 className="mt-4 text-lg font-bold text-black mb-4">
            Currnent Pincodes
          </h1>
          <div
            className="w-fit flex items-center text-white rounded-lg bg-[#141414] py-2 px-4 space-x-2 cursor-pointer"
            onClick={() => setIsModal(!isModal)}
          >
            <BsPlusLg />
            <span>Add Pincode</span>
          </div>
        </div>
        <p className="w-full flex justify-center py-3 border-b border-[#EFEFEF]">
          282007
        </p>
        <p className="w-full flex justify-center py-3 border-b border-[#EFEFEF]">
          282007
        </p>
        <p className="w-full flex justify-center py-3 border-b border-[#EFEFEF]">
          282007
        </p>
        <p className="w-full flex justify-center py-3 border-b border-[#EFEFEF]">
          282007
        </p>
        <p className="w-full flex justify-center py-3 border-b border-[#EFEFEF]">
          282007
        </p>
      </div>
      {isModal && (
        <div className="absolute flex justify-center items-center inset-0 z-50 outline-none focus:outline-none backdrop-blur-sm">
          <PincodeModal />
        </div>
      )}
    </>
  );
};

export default index;

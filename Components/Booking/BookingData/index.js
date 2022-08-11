import React, { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import BookingModal from "../Modal";
import { useRouter } from "next/router";
import { allOrders } from "../../../utils/api";
import { onetimewash, subscriptionwash } from "./index.module.css";
function BookingData({ props }) {
  const [openId, setOpenId] = useState();
  const [isModal, setIsModal] = useState(false);
  const [orders, setOrders] = useState([]);

  const { page, setPage, btnPreview, setbtnPreview, filteredDAta } = props;

  var router = useRouter();
  const [querry, setQuerry] = useState("");

  const toggleDetails = (id) => {
    openId == id ? setOpenId() : setOpenId(id);
  };
  useEffect(() => {
    if (router.query.type) {
      setQuerry(router.query.type);
      setPage(0);
      //   setbtnPreview(
      //     {
      //       next: true,
      //         previous: false,
      // })
    }
  }, [router]);

  useEffect(() => {
    if (querry) {
      getOrders();
    }
  }, [querry, page]);

  const getOrders = async () => {
    let val = await allOrders(page, querry);
    console.log(val);
    if (val.length !== 0) {
      setOrders(val);
    } else {
      setPage(page ? page - 1 : 0);
      setbtnPreview({ ...btnPreview, next: false });
    }
  };

  useEffect(() => {
    if (filteredDAta.length) {
      setOrders(filteredDAta);
    }
  }, [filteredDAta]);
  // console.log(orders);
  return (
    <>
      {orders.map((item, index) => {
        return (
          <tbody key={index}>
            <tr>
              <td className="px-4 py-3 w-max">{item.orderNo}</td>
              <td className="px-4 py-3 w-max">
                {querry === "One_time_wash"
                  ? "One Time Wash"
                  : "Subscription Wash"}
              </td>
              <td className="px-4 py-3 w-max">PAID</td>
              <td className="px-4 py-3 text-gray-900 w-max">
                <button
                  className="px-5 py-1 bg-[#FFC044] rounded-md"
                  onClick={() => setIsModal(!isModal)}
                >
                  Assign
                </button>
              </td>
              <td>
                <div className="flex flex-row items-center justify-between">
                  <div className="flex space-x-4 items-center">
                    <div className="w-2 h-2 rounded-full bg-[#FF013E]"></div>
                    <span>Assign</span>
                  </div>
                  <div
                    className="ml-5 p-[2px]"
                    onClick={() => toggleDetails(index)}
                  >
                    <FaChevronDown className="cursor-pointer" />
                  </div>
                </div>
              </td>
            </tr>

            <tr className="border-b border-[#EFEEEB]">
              <td colSpan={5}>
                {openId == index && (
                  <div
                    className={
                      querry === "One_time_wash"
                        ? onetimewash
                        : subscriptionwash
                    }
                  >
                    {/* client Details */}
                    <div className="flex flex-col w-[70%] pr-4">
                      <h1 className="text-[16px] font-bold ">Client Details</h1>
                      <div className="flex flex-row">
                        <div className="flex flex-col">
                          <div className="flex flex-row">
                            <p htmlFor="name" className="mr-9">
                              Phone
                            </p>
                            <span>: {item.phoneNo}</span>
                          </div>
                          <div className="flex flex-row">
                            <p htmlFor="name" className="mr-[26px]">
                              Address
                            </p>
                            <span>:</span>
                            <span className="ml-1">
                              {item.address}
                            </span>
                          </div>
                          <div className="flex flex-row">
                            <p htmlFor="name" className="mr-[10px]">
                              Landmark
                            </p>
                            <span className="ml-1">: {item.landmark}</span>
                          </div>
                          <div className="flex flex-row">
                            <p htmlFor="name" className="mr-6">
                              Pincode
                            </p>
                            <span className="ml-[2px]">: {item.pincode}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Wash Details */}
                    {querry === "One_time_wash" ? (
                      <div className="flex flex-col w-[70%]">
                        <h1 className="text-[16px] font-bold mb-1">
                          Wash Details
                        </h1>
                        <div className="flex flex-col">
                          <div className="flex flex-row">
                            <p htmlFor="name" className="mr-7">
                              Assigned
                            </p>
                            <span className="ml-9">
                              : Rakesh Kumar/Not assigned
                            </span>
                          </div>
                          <div className="flex flex-row">
                            <p className="mr-7">Vehicle No. </p>
                            <span className="ml-[23px]">:</span>
                            <span className="ml-1">{item.vehicleNo}</span>
                          </div>
                          <div className="flex flex-row">
                            <p className="mr-6">Vehicle Type </p>
                            <span className="ml-5">:</span>
                            <span className="ml-1">{item.vehicleType}</span>
                          </div>
                          <div className="flex flex-row">
                            <p className="mr-10">Service </p>
                            <span className="ml-[37px]">:</span>
                            <span className="ml-1">{item.service} </span>
                          </div>
                          <div className="flex flex-row">
                            <p className="mr-6">Time Slot </p>
                            <span className="ml-[39px]">:</span>
                            <span className="ml-1">{item.timeSlot}</span>
                          </div>
                          <div className="flex flex-row">
                            <p>Wash of the Month</p>
                            <span className="ml-[2px]">:</span>
                            <span className="ml-1">2/4</span>
                          </div>
                          {item.addOn &&
                            item.addOn.map((data, index) => {
                              return (
                                <div className="flex flex-row" key={index}>
                                  <p className="mr-9">Add On</p>
                                  <span className="ml-9">:</span>
                                  <span className="ml-1">{data}</span>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    ) : (
                      <>
                        {item[0] && (
                          <>
                            <h1 className="text-[16px] font-bold mb-1 mt-4">
                              Wash Details
                            </h1>
                            {item[0].map((item, index) => {
                              return (
                                <div
                                  className="flex flex-col w-[70%] mt-2"
                                  key={index}
                                >
                                  <div className="flex flex-col">
                                    <div className="flex flex-row">
                                      <p htmlFor="name" className="mr-7">
                                        Assigned
                                      </p>
                                      <span className="ml-9">
                                        : Rakesh Kumar/Not assigned
                                      </span>
                                    </div>
                                    <div className="flex flex-row">
                                      <p className="mr-7">Vehicle No. </p>
                                      <span className="ml-[23px]">:</span>
                                      <span className="ml-1">
                                        {item.vehicleNo}
                                      </span>
                                    </div>
                                    <div className="flex flex-row">
                                      <p className="mr-6">Vehicle Type </p>
                                      <span className="ml-5">:</span>
                                      <span className="ml-1">
                                        {item.vehicleType}
                                      </span>
                                    </div>
                                    <div className="flex flex-row">
                                      <p className="mr-10">Service </p>
                                      <span className="ml-[37px]">:</span>
                                      <span className="ml-1">
                                        {item.service}{" "}
                                      </span>
                                    </div>
                                    <div className="flex flex-row">
                                      <p className="mr-6">Time Slot </p>
                                      <span className="ml-[39px]">:</span>
                                      <span className="ml-1">
                                        {item.timeSlot}
                                      </span>
                                    </div>
                                    <div className="flex flex-row">
                                      <p>Wash of the Month</p>
                                      <span className="ml-[2px]">:</span>
                                      <span className="ml-1">2/4</span>
                                    </div>
                                    {item.addOn.map((data, index) => {
                                      return (
                                        <div
                                          className="flex flex-row mb-2"
                                          key={index}
                                        >
                                          <p className="mr-9">Add On</p>
                                          <span className="ml-9">:</span>
                                          <span className="ml-1">{data}</span>
                                        </div>
                                      );
                                    })}
                                  </div>
                                  <hr />
                                </div>
                              );
                            })}
                          </>
                        )}
                      </>
                    )}
                  </div>
                )}
              </td>
            </tr>
          </tbody>
        );
      })}

      {isModal && (
        <div className="absolute flex justify-center items-center inset-0  z-50 outline-none focus:outline-none backdrop-blur-sm">
          <BookingModal />
        </div>
      )}
    </>
  );
}

export default BookingData;

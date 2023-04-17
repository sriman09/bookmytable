import React from "react";
import moment from "moment";
const Booking = () => {
  return (
    <div className="flex bg-white shadow-md justify-start md:justify-center rounded-lg overflow-x-scroll mx-auto py-4 px-2  md:mx-12">
      <div className="flex group hover:bg-purple-500 hover:shadow-lg hover-dark-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center w-16">
        <div className="flex items-center px-4 py-4">
          <div className="text-center">
            <p className="text-gray-900 group-hover:text-gray-100 text-sm transition-all	duration-300">
              {" "}
              {moment().format("dddd").slice(0, 3)}{" "}
            </p>
            <p className="text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300">
              {" "}
              {moment().format("DD")}{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="flex group hover:bg-purple-500 hover:shadow-lg hover-dark-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center  w-16">
        <div className="flex items-center px-4 py-4">
          <div className="text-center">
            <p className="text-gray-900 group-hover:text-gray-100 text-sm transition-all	duration-300">
              {" "}
              {moment().add(1, "days").format("dddd").slice(0, 3)}{" "}
            </p>
            <p className="text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300">
              {" "}
              {moment().add(1, "days").format("DD")}{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="flex group hover:bg-purple-500 hover:shadow-lg hover-dark-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center  w-16">
        <div className="flex items-center px-4 py-4">
          <div className="text-center">
            <p className="text-gray-900 group-hover:text-gray-100 text-sm transition-all	duration-300">
              {" "}
              {moment().add(2, "days").format("dddd").slice(0, 3)}{" "}
            </p>
            <p className="text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300">
              {" "}
              {moment().add(2, "days").format("DD")}
            </p>
          </div>
        </div>
      </div>

      <div className="flex group bg-purple-600 shadow-lg dark-shadow rounded-lg mx-1 cursor-pointer justify-center relative  w-16">
        <span className="flex h-3 w-3 absolute -top-1 -right-1">
          <span className="animate-ping absolute group-hover:opacity-75 opacity-0 inline-flex h-full w-full rounded-full bg-purple-400 "></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-100"></span>
        </span>
        <div className="flex items-center px-4 py-4">
          <div className="text-center">
            <p className="text-gray-100 text-sm">
              {moment().add(3, "days").format("dddd").slice(0, 3)}
            </p>
            <p className="text-gray-100  mt-3 font-bold">
              {moment().add(3, "days").format("DD")}
            </p>
          </div>
        </div>
      </div>

      <div className="flex group hover:bg-purple-500 hover:shadow-lg hover-dark-shadow rounded-lg mx-1 transition-all	duration-300 cursor-pointer justify-center w-16">
        <div className="flex items-center px-4 py-4">
          <div className="text-center">
            <p className="text-gray-900 group-hover:text-gray-100 text-sm transition-all	duration-300">
              {" "}
              {moment().add(4, "days").format("dddd").slice(0, 3)}{" "}
            </p>
            <p className="text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300">
              {" "}
              {moment().add(4, "days").format("DD")}{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="flex group hover:bg-purple-500 hover:shadow-lg hover-dark-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center  w-16">
        <div className="flex items-center px-4 py-4">
          <div className="text-center">
            <p className="text-gray-900 group-hover:text-gray-100 text-sm transition-all	duration-300">
              {" "}
              {moment().add(5, "days").format("dddd").slice(0, 3)}{" "}
            </p>
            <p className="text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300">
              {" "}
              {moment().add(5, "days").format("DD")}{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="flex group hover:bg-purple-500 hover:shadow-lg hover-dark-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center w-16">
        <div className="flex items-center px-4 py-4">
          <div className="text-center">
            <p className="text-gray-900 group-hover:text-gray-100 text-sm transition-all	duration-300">
              {" "}
              {moment().add(6, "days").format("dddd").slice(0, 3)}{" "}
            </p>
            <p className="text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300">
              {" "}
              {moment().add(6, "days").format("DD")}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;

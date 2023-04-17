import React from "react";
import { NavLink } from "react-router-dom";

const Table = () => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="flex flex-col text-center w-full">
        <h2 className="text-xs text-indigo-400 tracking-widest font-medium title-font mb-1">
          PLAY ON
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">
          Book Your Table Now
        </h1>
      </div>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src="https://tse3.mm.bing.net/th/id/OIP.TWUn9eiHDzcbxD8BSdgdQQHaFj?pid=ImgDet&rs=1"
                alt="blog"
              />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                  CATEGORY
                </h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">
                  Table 1
                </h1>
                <div className="flex items-center flex-wrap  justify-center py-8 ">
                  <NavLink
                    to="/book"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Book
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src="https://barpooltables.net/wp-content/uploads/2020/05/IMG_0810-scaled.jpeg"
                alt="blog"
              />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                  CATEGORY
                </h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">
                  Table 2
                </h1>
                {/* <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p> */}
                <div className="flex justify-center py-8 items-center flex-wrap">
                  <NavLink
                    to="/book"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Book
                  </NavLink>
                  {/* <a className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                    <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                        <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                        </svg>1.2K
                    </span>
                    <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                        <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>6
                    </span> */}
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src="https://barpooltables.net/wp-content/uploads/2020/04/IMG_1741-1-scaled.jpeg"
                alt="blog"
              />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                  CATEGORY
                </h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">
                  Table 3
                </h1>
                <div className="flex items-center justify-center py-8 flex-wrap ">
                  <NavLink
                    to="/book"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Book
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Table;

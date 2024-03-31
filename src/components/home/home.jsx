import React from "react";
import SearchSection from "../searchbar/SearchSection";

const Home = () => {
  return (
    <>
      <div className=" w-full h-screen flex flex-col items-center justify-center ">
        <div className=" w-full">
          <h1 className=" text-slate-950 text-2xl">
            India's First Job Portal For Workers
          </h1>
          <button className="bg-indigo-700 px-5 py-2 text-white rounded-lg mt-5">
            Hire Now
          </button>
        </div>
        <SearchSection />
      </div>
    </>
  );
};

export default Home;

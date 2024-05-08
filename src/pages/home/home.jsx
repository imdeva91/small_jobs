import React from "react";
import SearchSection from "../../components/searchbar/SearchSection";

const Home = () => {
  return (
    <>
    <div className="w-full h-screen ">
    
      <div className=" m-auto  flex items-center h-1/2 ">
        <div className=" mx-20">
        <h1 className="text-5xl font-bold block">India First Job Portal For Worker</h1>
        <button className="bg-green-500 text-white text-xl font-semibold  px-5 rounded py-1 cursor-pointe mt-7">Hire</button>
        </div>
      </div>
      <div className="mx-20 mt-[-20px]">
          <SearchSection/>
        </div>
    </div>
    </>
  );
};

export default Home;

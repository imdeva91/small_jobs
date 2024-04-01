import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [click, setClick] = useState(false);
  return (
    <>
      <header className="shadow-xl bg-white w-full  sm:h-24 py-1  z-10 fixed ">
        <div className="max-w-[1200px] flex items-center md:justify-around justify-between px-10 relative">
          <div className="sm:w-[80px] sm:h-[80px] h-14 w-14">
            <img src={logo} alt="" />
          </div>
          <div className="md:flex list-none gap-16 items-center hidden text-xl">
            <Link to={""} className="cursor-pointer">
              Home
            </Link>
            <Link to={"/about"} className="cursor-pointer">
              {" "}
              About
            </Link>
            <Link to={"/contact"} className="cursor-pointer">
              Contact{" "}
            </Link>
          </div>
          <div className="md:flex gap-1 items-center hidden ">
            <div>
              <button className="bg-indigo-700 px-5 py-2 text-white rounded-lg">
                Hire Now
              </button>
            </div>
            <div className="hover:bg-indigo-700 hover:text-white px-5 py-2 duration-700 rounded-lg ">
              <button>Signin</button>
            </div>
            <div className="h-[50px] w-[50px] rounded-full bg-red-500 overflow-hidden">
              <img
                className="object-cover h-[50px] w-[50px]"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="img"
              />
            </div>
          </div>
          <div className="md:hidden ">
            <IoMenu fontSize={"40px"} onClick={() => setClick(true)} />
          </div>
        </div>

        {click ? (
          <div className="h-[60vh] rounded-b-xl	 w-full bg-gray-300 absolute top-0 -bottom-4 ">
            <div className="top-5 right-5 absolute">
              <RxCross2 fontSize={"40px"} onClick={() => setClick(false)} />
            </div>

            <div className="flex flex-col items-start  justify-around py-10 px-5 ">
              <div className="sm:w-[80px] sm:h-[80px] h-14 w-14">
                <img src={logo} alt="" />
              </div>
              <div className="flex flex-col list-none gap-5 mt-5 items-center font-bold text-2xl ">
                <Link to={""} className="cursor-pointer">
                  Home
                </Link>
                <Link to={"/about"} className="cursor-pointer">
                  {" "}
                  About
                </Link>
                <Link to={"/contact"} className="cursor-pointer">
                  Contact{" "}
                </Link>
              </div>
              <div className="flex  gap-2 items-center justify-between mt-2 ">
                <div>
                  <button className="bg-indigo-700 px-2 py-2  text-white rounded-lg">
                    Hire Now
                  </button>
                </div>
                <div className="hover:bg-indigo-700 hover:text-white px-5 py-2 duration-700 rounded-lg ">
                  <button>Signin</button>
                </div>
                <div className="h-[70px] w-[70px] rounded-full bg-red-500 overflow-hidden">
                  <img
                    className="object-cover "
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          " "
        )}
      </header>
    </>
  );
};

export default Navbar;

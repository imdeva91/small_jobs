import React from "react";
import { FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa";

const WorkerSignIn = () => {
  return (
    <div className=" w-screen h-screen grid place-content-center">
      <div className=" w-96 h-96 p-4 rounded-2xl bg-indigo-300 shadow-2xl ">
        <h1 className=" text-2xl text-indigo-800 ">SignIn</h1>
        {/* ----------------------------Email--------------------------- */}
        <label className=" text-lg " htmlFor="email">
          Email
        </label>
        <input
          className=" w-full p-1 px-2 text-base border-0 border-gray-500 rounded-md outline-none"
          placeholder="xyz@example.com"
          type="email"
          name="email"
          id="email"
        />
        {/* ----------------------------Password---------------------------------------- */}
        <label className=" text-lg " htmlFor="email">
          Password
        </label>
        <input
          className=" w-full p-1 px-2 text-base border-0 border-gray-500 rounded-md outline-none"
          type="password"
          name="password"
          id="password"
        />
        {/* -----------------------------Sign Button--------------------------------------- */}
        <button
          className=" w-full bg-indigo-700 rounded-md p-1 text-xl my-3 text-white"
          type="submit"
        >
          SignIn
        </button>
        {/* ---------------------------------Social Media---------------------------------------- */}
        <div className=" h-2/4 flex items-center">
          <div className=" w-8/12 m-auto flex justify-between items-center">
            <FaInstagram className="size-9 p-0 m-0 hover:cursor-pointer " />
            <FaGoogle className="size-8 p-0 m-0 hover:cursor-pointer " />
            <FaFacebook className="size-8 p-0 m-0 hover:cursor-pointer " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkerSignIn;

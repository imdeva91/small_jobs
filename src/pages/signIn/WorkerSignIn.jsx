import React from "react";

const WorkerSignIn = () => {
  return (
    <div className=" w-screen h-screen grid place-content-center">
      <div className=" w-96 h-96 p-4 rounded-2xl border-4 border-black">
        <h1 className=" text-2xl ">SignIn</h1>
        <label className=" text-lg " htmlFor="email">Email</label>
        <input className=" w-full p-1 px-2 text-lg border-2 border-gray-500 rounded-lg" placeholder="xyz@example.com" type="email" name="email" id="email" />
        <label className=" text-lg " htmlFor="email">Password</label>
        <input className=" w-full p-1 px-2 text-lg border-2 border-gray-500 rounded-lg" type="password" name="password" id="password" />
        <button className=" w-full bg-indigo-700 rounded-lg p-1 text-xl my-3 text-white" type="submit">SignIn</button>
        <div className=" w-full flex justify-between">
          <button className=" p-3 rounded-full bg-slate-400 ">G</button>
          <button className=" p-3 rounded-full bg-slate-400 ">I</button>
          <button className=" p-3 rounded-full bg-slate-400 ">F</button>
          
        </div>
      </div>
    </div>
  )
};

export default WorkerSignIn;

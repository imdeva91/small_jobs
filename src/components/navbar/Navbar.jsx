import React from "react";

const Navbar = () => {
  return (
    <>
      <header className="shadow-xl w-full h-16">
        <div className="max-w-[1200px] flex items-center justify-around">
          <div>Logo</div>
          <div className="flex list-none gap-10 items-center ">
            <li>Home</li>
            <li>About</li>
            <li>Contact </li>
          </div>
          <div className="flex gap-10 items-center">
            <div>
              <button className="bg-indigo-700 px-5 py-2 text-white rounded-lg">
                Hire Now
              </button>
            </div>
            <div>
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
        </div>
      </header>
    </>
  );
};

export default Navbar;

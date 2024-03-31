import React from "react";

const SearchSection = () => {
  return (
    <>
      <div className=" p-6 max-w-100 w-full rounded-2xl shadow-black shadow-2xl">
        <div className=" ">
          <h1>Search Worker</h1>
          <form className="" action="search">
            <div className="md:flex  items-center justify-evenly">
              <div className="">
                <label htmlFor="search" className="flex items-start">
                  Select job title
                </label>
                <input
                  className=" border-solid border-2 border-sky-500 rounded-md "
                  type="search"
                  id="search"
                  name="search"
                />
              </div>
              <div>
                <label htmlFor="search1" className="flex items-start">
                  Select job title
                </label>
                <input
                  className=" border-solid border-2 border-sky-500 rounded-md "
                  type="search"
                  id="search1"
                  name="search"
                />
              </div>
              <button className="bg-indigo-700 px-8 py-2 rounded-lg text-white mt-3">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SearchSection;

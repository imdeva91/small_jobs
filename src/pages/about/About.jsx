import React from "react";

const About = () => {
  return (
    <div className="py-32  sm:py-8 lg:py-24 h-full w-full m-auto">
      <div className="mx-auto md:mt-20 max-w-screen-xl px-4 md:px-8">
        {/* <!-- text - start --> */}
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Our Website User by the numbers
          </h2>

          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text but is random or otherwise generated.
          </p>
        </div>
        {/* <!-- text - end --> */}

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-0 md:divide-x">
          {/* <!-- stat - start --> */}
          <div className="flex flex-col items-center md:p-4">
            <div className="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">
              20+
            </div>
            <div className="text-sm font-semibold sm:text-base">Cotegries</div>
          </div>
          {/* <!-- stat - end --> */}

          {/* <!-- stat - start --> */}
          <div className="flex flex-col items-center md:p-4">
            <div className="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">
              500+
            </div>
            <div className="text-sm font-semibold sm:text-base">Customers</div>
          </div>

          {/* <!-- stat - start --> */}
          <div className="flex flex-col items-center md:p-4">
            <div className="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">
              1000+
            </div>
            <div className="text-sm font-semibold sm:text-base">Worker</div>
          </div>
          {/* <!-- stat - end --> */}

          {/* <!-- stat - start --> */}
          <div className="flex flex-col items-center md:p-4">
            <div className="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">
              1500+
            </div>
            <div className="text-sm font-semibold sm:text-base">Users</div>
          </div>
          {/* <!-- stat - end --> */}
        </div>
      </div>
    </div>
  );
};

export default About;

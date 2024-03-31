import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <h1>Logo</h1>
            <span className="ml-3 text-xl">JobFinder</span>
          </a>
          <p className="text-xl text-gray-500 sm:ml-4  sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 jobFinder —
            <a
              href=""
              className="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @smalljob
            </a>
          </p>
          <span className="inline-flex gap-6 sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <FaInstagram
              className="hover:text-red-500 cursor-pointer"
              fontSize={"40px"}
            />
            <FaXTwitter
              className="hover:text-red-500 cursor-pointer"
              fontSize={"40px"}
            />
            <MdOutlineEmail
              className="hover:text-red-500 cursor-pointer"
              fontSize={"40px"}
            />
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

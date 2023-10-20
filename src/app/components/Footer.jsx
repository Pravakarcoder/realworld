import React from "react";

import { FiFacebook } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";
import { SiMinutemailer } from "react-icons/si";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white  mt-10">
        <div className="container mx-auto py-6 px-3">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 lg:w-1/4 mb-4">
              <h2 className="text-xl font-bold mb-2">About Us</h2>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul className="mt-4">
                <li className="mb-2">
                  <a href="#" className="text-gray-300 hover:text-white">
                    About
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-300 hover:text-white">
                    Contact
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-300 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-300 hover:text-white">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:pl-16 xl:pl-28  md:w-1/2 lg:w-1/4 mb-4">
              <h2 className="text-xl font-bold mb-2">Categories</h2>
              <ul>
                <li className="mb-2">
                  <a href="#" className="text-gray-300 hover:text-white">
                    Fashion
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-300 hover:text-white">
                    Technology
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-300 hover:text-white">
                    Health
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-300 hover:text-white">
                    Food &amp; Drink
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 mb-4">
              <h2 className="text-xl font-bold mb-2">Follow Us</h2>
              <ul className="flex space-x-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white text-2xl"
                  >
                    <FiFacebook />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white text-2xl"
                  >
                    <FaXTwitter />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white text-2xl"
                  >
                    <FiInstagram />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white text-2xl"
                  >
                    <AiOutlineYoutube />
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 mb-4">
              <h2 className="text-xl font-bold mb-2">Newsletter</h2>
              <p className="text-sm">
                Subscribe to our newsletter for the latest updates.
              </p>
              <form className="mt-4">
                <div className="flex">
                  <input
                    type="email"
                    className="px-4 py-2 w-2/3 rounded-l-md focus:outline-none text-slate-700"
                    placeholder="Email address"
                    required
                  />
                  <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 text-2xl rounded-r-md">
                    <SiMinutemailer />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 py-2">
          <div className="container mx-auto px-4">
            <p className="text-sm text-gray-300 text-center">
              © 2023 Saurav Company. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

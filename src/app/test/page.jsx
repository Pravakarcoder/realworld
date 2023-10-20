"use client";

import React from "react";
import { BsTelephoneOutbound } from "react-icons/bs";
import { LiaMapMarkerAltSolid } from "react-icons/lia";
import { TfiEmail } from "react-icons/tfi";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const Test = () => {
  useEffect(() => {
    AOS.init({
      offset: 200, // Adjust the offset to trigger animations earlier or later
      duration: 850, // Animation duration in milliseconds
    });
  }, []);

  return (
    <>
      <div className="overflow-x-hidden overflow-y-hidden">
        <div className="w-full xl:w-full p-0">
          <div className="block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden cursor-pointer">
            <div className="relative pb-48 overflow-hidden transition duration-300 ease-in-out hover:scale-105 h-72">
              <Image
                className="absolute inset-0 h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                alt=""
              />
            </div>

            <div
              className="w-32 h-32 ml-5 relative -mt-10 rounded-full overflow-hidden bg-gray-200"
              data-aos="zoom-in"
            >
              <Image
                src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                alt="Profile Image"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div
              className=""
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <h3 className="text-3xl font-semibold  pl-44 -mt-20">
                ABC company
              </h3>
              <div
                className="items-center sm:flex sm:ml-40 ml-44 mt-4"
                data-aos="fade-right"
              >
                {/* <div className="flex items-center ml-44 mt-4"> */}
                <div className="text-gray-800 flex space-x-2 pl-4 my-3 hover:text-orange-700 duration-300">
                  {/* <div className="text-gray-800 flex space-x-2 hover:text-orange-700 duration-300"> */}
                  <BsTelephoneOutbound className="text-xl" />
                  <a href="tel:837393039">
                    {" "}
                    <span>8373930393</span>
                  </a>
                </div>
                <div className="flex mx-4 text-gray-800 my-3 hover:text-orange-700 duration-300">
                  <LiaMapMarkerAltSolid className="text-xl" />{" "}
                  <a
                    href="https://www.google.com/maps/place/Janakpur/@26.7236424,85.8634997,36022m/data=!3m1!1e3!4m6!3m5!1s0x39ec4005fb138bb9:0x533a64cf0e13c2d1!8m2!3d26.7271466!4d85.9406745!16s%2Fm%2F02z3mgm?entry=ttu"
                    target="_blank"
                  >
                    <span>Janakpur</span>
                  </a>
                </div>
                <div className="flex mx-4 space-x-2 text-gray-800 my-3 hover:text-orange-700 duration-300">
                  {/* <div className="flex mx-4 space-x-2 text-gray-800 hover:text-orange-700 duration-300"> */}
                  <TfiEmail className="text-xl" />
                  <a href="mailto:abc@gmail.com">
                    <span>abc@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="p-4 mt-0 sm:mt-10">
              <h1 className="mt-2 mb-2 font-semibold">Description</h1>

              <div className="border-t border-gray-900 my-0" />
              <p className="text-sm my-4 justify-cente">
                Janakpurdham or Janakpur is a sub-metropolitan city in Dhanusha
                District, Madhesh Province, Nepal. The city is a hub for
                religious and cultural tourism. A headquarter of Dhanusha
                district, Janakpur is also the capital for Madhesh Province.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="flex flex-col justify-center items-center h-screen pt-4">
          <div className="bg-white shadow-lg w-5/6 h-3/4">
            <h3 className="font-semibold m-5">Google Map</h3>
            <div className="border-t border-gray-900 mt-5"></div>
            <div className="m-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95891.3298573003!2d85.89425480934143!3d26.725769975379766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ec4005fb138bb9%3A0x533a64cf0e13c2d1!2sJanakpur!5e0!3m2!1sen!2snp!4v1697637356670!5m2!1sen!2snp"
                width="100%"
                height="100%"
                className="h-[28rem]"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div> */}

        <div
          className="flex flex-col justify-center items-center h-auto pt-4"
          data-aos="fade-up-right"
        >
          <div className="bg-white shadow-lg w-5/6 h-3/4">
            <h3 className="font-semibold m-5">Google Map</h3>
            <div className="border-t border-gray-900 mt-5"></div>
            <div className="m-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95891.3298573003!2d85.89425480934143!3d26.725769975379766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ec4005fb138bb9%3A0x533a64cf0e13c2d1!2sJanakpur!5e0!3m2!1sen!2snp!4v1697637356670!5m2!1sen!2snp"
                width="100%"
                height="100%"
                className="h-[28rem]"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* <div className="flex  flex-col justify-center items-center h-screen pt-0 -mt-28">
          <h3 className="font-semibold m-5">Contact Us</h3>

          <div className="shadow-lg  w-5/6 h-2/3">
            <div className="max-w-screen-xl mt-0 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
              <div className="flex flex-col justify-between">
                <div>
                  <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                    Lets talk about everything!
                  </h2>
                  <div className="text-gray-700 mt-8">
                    Send us a <span className="underline">message</span> to
                    contact.
                  </div>
                </div>
              </div>
              <div className="">
                <div>
                  <span className="uppercase text-sm text-gray-600 font-bold">
                    Full Name
                  </span>
                  <input
                    className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder=""
                  />
                </div>
                <div className="mt-8">
                  <span className="uppercase text-sm text-gray-600 font-bold">
                    Email
                  </span>
                  <input
                    className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                  />
                </div>
                <div className="mt-8">
                  <span className="uppercase text-sm text-gray-600 font-bold">
                    Message
                  </span>
                  <textarea className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                </div>
                <div className="mt-8">
                  <button className="uppercase text-sm font-bold tracking-wide bg-orange-500 hover:bg-orange-700 duration-300 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div
          className="flex  flex-col justify-center items-center h-full pt-0 mt-10"
          data-aos="fade-up-left"
        >
          <h3 className="font-semibold m-5">Contact Us</h3>

          <div className="shadow-lg  w-5/6 h-2/3">
            <div className="max-w-screen-xl mt-0 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
              <div className="flex flex-col justify-between">
                <div>
                  <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                    Lets talk about everything!
                  </h2>
                  <div className="text-gray-700 mt-8">
                    Send us a <span className="underline">message</span> to
                    contact.
                  </div>
                </div>
              </div>
              <div className="">
                <div>
                  <span className="uppercase text-sm text-gray-600 font-bold">
                    Full Name
                  </span>
                  <input
                    className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder=""
                  />
                </div>
                <div className="mt-8">
                  <span className="uppercase text-sm text-gray-600 font-bold">
                    Email
                  </span>
                  <input
                    className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                  />
                </div>
                <div className="mt-8">
                  <span className="uppercase text-sm text-gray-600 font-bold">
                    Message
                  </span>
                  <textarea className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                </div>
                <div className="mt-8">
                  <button className="uppercase text-sm font-bold tracking-wide bg-orange-500 hover:bg-orange-700 duration-300 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Test;

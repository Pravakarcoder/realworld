import Link from "next/link";
import React from "react";

const popularpostsData = [
  {
    id: 1,
    name: "Taj Hotels",
    description:
      "The Taj Hotel, often referred to as the Taj, is a prominent and luxurious hotel chain based in India and luxurious hotel chain based in India..",
    Img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    Rating: 4,
    link: "/test",
  },
  {
    id: 2,
    name: "Ram Coffee Shop",
    description:
      "Restaurant serving drip coffee with light meals or a specialty store selling roast and ground beans, coffee sets, and other items.",
    Img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=847&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    Rating: 4,
    link: "/test",
  },
  {
    id: 3,
    name: "Indian Oil",
    description:
      "TWelcome to the world of IndianOil, an integrated oil company in India and across the globe has its presence in almost all the streams of oil, gas, ...",
    Img: "https://images.unsplash.com/photo-1621742984448-1ee5a38fb5a5?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGV0cm9sJTIwcHVtcHxlbnwwfHwwfHx8MA%3D%3D",
    Rating: 4,
    link: "/test",
  },
  {
    id: 4,
    name: "Apple Store",
    description:
      "Discover the innovative world of Apple and shop everything iPhone, iPad, Apple Watch, Mac, and Apple TV, plus  plus plus plus plus plus explore...",
    Img: "https://images.unsplash.com/photo-1612126887536-3d6993d0924e?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QXBwbGUlMjBzdG9yZXxlbnwwfHwwfHx8MA%3D%3D",
    Rating: 4,
    link: "/test",
  },
  {
    id: 5,
    name: "Samsung Store",
    description:
      "Buy more than one product and get extra 5% off on Samsung Top load. Avail ₹ 743 instant bank discount* on leading bank cards.",
    Img: "https://images.unsplash.com/photo-1672396654321-a31611457926?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Ftc3VuZyUyMHN0b3JlfGVufDB8fDB8fHww",
    Rating: 4,
    link: "/test",
  },
  {
    id: 6,
    name: "shopping mall",
    description:
      "A shopping mall is a large, enclosed retail complex or building that houses a variety of stores, boutiques, restaurants.",
    Img: "https://images.unsplash.com/photo-1614521084980-811d04f6c6cb?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob3BwaW5nJTIwbWFsbHxlbnwwfHwwfHx8MA%3D%3D",
    Rating: 4,
    link: "/test",
  },
];

const PopularPosts = () => {
  return (
    <div className="bg-slate-200 shadow-2xl mt-40 mb-7  pb-5">
      <div className="xl:mx-32 2xl:mx-40">
        <div className="flex justify-center items-center flex-col pt-10">
          <h3 className="text-4xl font-semibold mt-5 text-center  text-[#6B5E59]">
            Most Popular Posts
          </h3>
          <span className="text-md mt-4">Click to view popular posts</span>
        </div>

        <div className="container pt-6 mx-auto px-3 xl:px-3  overflow-x-hidden">
          <div className="flex flex-wrap -mx-4">
            {/* <div className="w-full sm:w-1/2 md:w-1/2 xl:w-2/6 p-4 ">
              <Link
                href={`/popularposts/ih`}
                className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
              >
                <div className="relative pb-48 overflow-hidden transition duration-300 ease-in-out hover:scale-105">
                  <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                    alt=""
                  />
                </div>
                <div className="p-4">
                  <span className="inline-block px-2 py-1 leading-none bg-pink-200 text-pink-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                    Highlight
                  </span>

                  <h2 className="mt-2 mb-2  font-bold">
                    Purus Ullamcorper Inceptos Nibh
                  </h2>

                  <p className="text-sm">
                    Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                    Donec ullamcorper nulla non metus auctor fringilla.
                  </p>
                  <div className="mt-3 flex items-center">
                    <span className="text-sm font-semibold">ab</span>&nbsp;
                    <span className="font-bold text-xl">45,00</span>&nbsp;
                    <span className="text-sm font-semibold">€</span>
                  </div>
                </div>
                <div className="p-4 border-t border-b text-xs text-gray-700">
                  <span className="flex items-center mb-1">
                    <i className="far fa-clock fa-fw mr-2 text-gray-900"></i> 3
                    Tage
                  </span>
                  <span className="flex items-center">
                    <i className="far fa-address-card fa-fw text-gray-900 mr-2"></i>{" "}
                    Ermäßigung mit Karte
                  </span>
                </div>
                <div className="p-4 flex items-center text-sm text-gray-600">
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 fill-current text-yellow-500"
                  >
                    <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 fill-current text-yellow-500"
                  >
                    <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 fill-current text-yellow-500"
                  >
                    <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 fill-current text-yellow-500"
                  >
                    <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 fill-current text-gray-400"
                  >
                    <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                  </svg>
                  <span className="ml-2">34 Bew </span>
                  <span className="text-[#ff0000] ml-auto">close</span>
                </div>
              </Link>
            </div> */}

            {popularpostsData.map((popularposts, index) => (
              <div
                className="w-full sm:w-1/2 md:w-1/2 xl:w-2/6 p-4"
                key={index}
              >
                <Link
                  href={popularposts.link}
                  className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
                >
                  <div className="relative pb-48 overflow-hidden">
                    <img
                      className="absolute inset-0 h-full w-full object-cover"
                      src={popularposts.Img}
                      alt=""
                    />
                  </div>
                  <div className="p-4">
                    <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                      Highlight
                    </span>
                    <h2 className="mt-2 mb-2  font-bold">
                      {popularposts.name}
                    </h2>
                    <p className="text-sm">{popularposts.description}</p>
                  </div>
                  <div className="p-1 border-t text-xs text-gray-700" />
                  <div className="p-4 flex items-center text-sm text-gray-600">
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 fill-current text-yellow-500"
                    >
                      <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                    </svg>{" "}
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 fill-current text-yellow-500"
                    >
                      <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                    </svg>{" "}
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 fill-current text-yellow-500"
                    >
                      <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                    </svg>{" "}
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 fill-current text-yellow-500"
                    >
                      <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 fill-current text-gray-400"
                    >
                      <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                    </svg>
                    <span className="text-[#0ffd03] ml-auto">open</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    // <div className="container mx-auto px-3 xl:px-3  overflow-x-hidden">
    //   <div className="flex flex-wrap -mx-4">
    //     <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
    //       <a
    //         href=""
    //         className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
    //       >
    //         <div className="relative pb-48 overflow-hidden">
    //           <img
    //             className="absolute inset-0 h-full w-full object-cover"
    //             src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
    //             alt=""
    //           />
    //         </div>
    //         <div className="p-4">
    //           <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
    //             Highlight
    //           </span>
    //           <h2 className="mt-2 mb-2  font-bold">
    //             Purus Ullamcorper Inceptos Nibh
    //           </h2>
    //           <p className="text-sm">
    //             Cras justo odio, dapibus ac facilisis in, egestas eget quam.
    //             Donec ullamcorper nulla non metus auctor fringilla.
    //           </p>
    //           <div className="mt-3 flex items-center">
    //             <span className="text-sm font-semibold">ab</span>&nbsp;
    //             <span className="font-bold text-xl">45,00</span>&nbsp;
    //             <span className="text-sm font-semibold">€</span>
    //           </div>
    //         </div>
    //         <div className="p-4 border-t border-b text-xs text-gray-700">
    //           <span className="flex items-center mb-1">
    //             <i className="far fa-clock fa-fw mr-2 text-gray-900"></i> 3 Tage
    //           </span>
    //           <span className="flex items-center">
    //             <i className="far fa-address-card fa-fw text-gray-900 mr-2"></i>{" "}
    //             Ermäßigung mit Karte
    //           </span>
    //         </div>
    //         <div className="p-4 flex items-center text-sm text-gray-600">
    //           <svg
    //             viewBox="0 0 24 24"
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-4 w-4 fill-current text-yellow-500"
    //           >
    //             <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
    //           </svg>
    //           <svg
    //             viewBox="0 0 24 24"
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-4 w-4 fill-current text-yellow-500"
    //           >
    //             <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
    //           </svg>
    //           <svg
    //             viewBox="0 0 24 24"
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-4 w-4 fill-current text-yellow-500"
    //           >
    //             <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
    //           </svg>
    //           <svg
    //             viewBox="0 0 24 24"
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-4 w-4 fill-current text-yellow-500"
    //           >
    //             <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
    //           </svg>
    //           <svg
    //             viewBox="0 0 24 24"
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-4 w-4 fill-current text-gray-400"
    //           >
    //             <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
    //           </svg>
    //           <span className="ml-2">34 Bewertungen</span>
    //         </div>
    //       </a>
    //     </div>
    //     <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
    //       <a
    //         href=""
    //         className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
    //       >
    //         <div className="relative pb-48 overflow-hidden">
    //           <img
    //             className="absolute inset-0 h-full w-full object-cover"
    //             src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
    //             alt=""
    //           />
    //         </div>
    //         <div className="p-4">
    //           <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
    //             Highlight
    //           </span>
    //           <h2 className="mt-2 mb-2  font-bold">
    //             Purus Ullamcorper Inceptos Nibh
    //           </h2>
    //           <p className="text-sm">
    //             Cras justo odio, dapibus ac facilisis in, egestas eget quam.
    //             Donec ullamcorper nulla non metus auctor fringilla.
    //           </p>
    //           <div className="mt-3 flex items-center">
    //             <span className="text-sm font-semibold">ab</span>&nbsp;
    //             <span className="font-bold text-xl">45,00</span>&nbsp;
    //             <span className="text-sm font-semibold">€</span>
    //           </div>
    //         </div>
    //         <div className="p-4 border-t border-b text-xs text-gray-700">
    //           <span className="flex items-center mb-1">
    //             <i className="far fa-clock fa-fw mr-2 text-gray-900"></i> 3 Tage
    //           </span>
    //           <span className="flex items-center">
    //             <i className="far fa-address-card fa-fw text-gray-900 mr-2"></i>{" "}
    //             Ermäßigung mit Karte
    //           </span>
    //         </div>
    //         <div className="p-4 flex items-center text-sm text-gray-600">
    //           <svg
    //             viewBox="0 0 24 24"
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-4 w-4 fill-current text-yellow-500"
    //           >
    //             <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
    //           </svg>
    //           <svg
    //             viewBox="0 0 24 24"
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-4 w-4 fill-current text-yellow-500"
    //           >
    //             <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
    //           </svg>
    //           <svg
    //             viewBox="0 0 24 24"
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-4 w-4 fill-current text-yellow-500"
    //           >
    //             <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
    //           </svg>
    //           <svg
    //             viewBox="0 0 24 24"
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-4 w-4 fill-current text-yellow-500"
    //           >
    //             <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
    //           </svg>
    //           <svg
    //             viewBox="0 0 24 24"
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-4 w-4 fill-current text-gray-400"
    //           >
    //             <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
    //           </svg>
    //           <span className="ml-2">34 Bewertungen</span>
    //         </div>
    //       </a>
    //     </div>
    //     <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
    //       <a
    //         href=""
    //         className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
    //       >
    //         <div className="relative pb-48 overflow-hidden">
    //           <img
    //             className="absolute inset-0 h-full w-full object-cover"
    //             src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
    //             alt=""
    //           />
    //         </div>
    //         <div className="p-4">
    //           <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
    //             Highlight
    //           </span>
    //           <h2 className="mt-2 mb-2  font-bold">
    //             Purus Ullamcorper Inceptos Nibh
    //           </h2>
    //           <p className="text-sm">
    //             Cras justo odio, dapibus ac facilisis in, egestas eget quam.
    //             Donec ullamcorper nulla non metus auctor fringilla.
    //           </p>
    //           <div className="mt-3 flex items-center">
    //             <span className="text-sm font-semibold">ab</span>&nbsp;
    //             <span className="font-bold text-xl">45,00</span>&nbsp;
    //             <span className="text-sm font-semibold">€</span>
    //           </div>
    //         </div>
    //         <div className="p-4 border-t border-b text-xs text-gray-700">
    //           <span className="flex items-center mb-1">
    //             <i className="far fa-clock fa-fw mr-2 text-gray-900"></i> 3 Tage
    //           </span>
    //           <span className="flex items-center">
    //             <i className="far fa-address-card fa-fw text-gray-900 mr-2"></i>{" "}
    //             Ermäßigung mit Karte
    //           </span>
    //         </div>
    //         <div className="p-4 flex items-center text-sm text-gray-600">
    //           <svg
    //             viewBox="0 0 24 24"
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-4 w-4 fill-current text-yellow-500"
    //           >
    //             <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
    //           </svg>
    //           <svg
    //             viewBox="0 0 24 24"
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-4 w-4 fill-current text-yellow-500"
    //           >
    //             <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
    //           </svg>
    //           <svg
    //             viewBox="0 0 24 24"
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-4 w-4 fill-current text-yellow-500"
    //           >
    //             <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
    //           </svg>
    //           <svg
    //             viewBox="0 0 24 24"
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-4 w-4 fill-current text-yellow-500"
    //           >
    //             <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
    //           </svg>
    //           <svg
    //             viewBox="0 0 24 24"
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-4 w-4 fill-current text-gray-400"
    //           >
    //             <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
    //           </svg>
    //           <span className="ml-2">34 Bewertungen</span>
    //         </div>
    //       </a>
    //     </div>
    //     <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
    //       <a
    //         href=""
    //         className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
    //       >
    //         <div className="relative pb-48 overflow-hidden">
    //           <img
    //             className="absolute inset-0 h-full w-full object-cover"
    //             src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
    //             alt=""
    //           />
    //         </div>
    //         <div className="p-4">
    //           <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
    //             Highlight
    //           </span>
    //           <h2 className="mt-2 mb-2  font-bold">
    //             Purus Ullamcorper Inceptos Nibh
    //           </h2>
    //           <p className="text-sm">
    //             Cras justo odio, dapibus ac facilisis in, egestas eget quam.
    //             Donec ullamcorper nulla non metus auctor fringilla.
    //           </p>
    //           <div className="mt-3 flex items-center">
    //             <span className="text-sm font-semibold">ab</span>&nbsp;
    //             <span className="font-bold text-xl">45,00</span>&nbsp;
    //             <span className="text-sm font-semibold">€</span>
    //           </div>
    //         </div>
    //         <div className="p-4 border-t border-b text-xs text-gray-700">
    //           <span className="flex items-center mb-1">
    //             <i className="far fa-clock fa-fw mr-2 text-gray-900"></i> 3 Tage
    //           </span>
    //           <span className="flex items-center">
    //             <i className="far fa-address-card fa-fw text-gray-900 mr-2"></i>{" "}
    //             Ermäßigung mit Karte
    //           </span>
    //         </div>
    //         <div className="p-4 flex items-center text-sm text-gray-600">
    //           <svg
    //             viewBox="0 0 24 24"
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-4 w-4 fill-current text-yellow-500"
    //           >
    //             <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
    //           </svg>
    //           <svg
    //             viewBox="0 0 24 24"
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-4 w-4 fill-current text-yellow-500"
    //           >
    //             <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
    //           </svg>
    //           <svg
    //             viewBox="0 0 24 24"
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-4 w-4 fill-current text-yellow-500"
    //           >
    //             <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
    //           </svg>
    //           <svg
    //             viewBox="0 0 24 24"
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-4 w-4 fill-current text-yellow-500"
    //           >
    //             <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
    //           </svg>
    //           <svg
    //             viewBox="0 0 24 24"
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-4 w-4 fill-current text-gray-400"
    //           >
    //             <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
    //           </svg>
    //           <span className="ml-2">34 Bewertungen</span>
    //         </div>
    //       </a>
    //     </div>
    //     <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
    //       <a
    //         href=""
    //         className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
    //       >
    //         <div className="relative pb-48 overflow-hidden">
    //           <img
    //             className="absolute inset-0 h-full w-full object-cover"
    //             src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
    //             alt=""
    //           />
    //         </div>
    //         <div className="p-4">
    //           <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
    //             Highlight
    //           </span>
    //           <h2 className="mt-2 mb-2  font-bold">
    //             Purus Ullamcorper Inceptos Nibh
    //           </h2>
    //           <p className="text-sm">
    //             Cras justo odio, dapibus ac facilisis in, egestas eget quam.
    //             Donec ullamcorper nulla non metus auctor fringilla.
    //           </p>
    //           <div className="mt-3 flex items-center">
    //             <span className="text-sm font-semibold">ab</span>&nbsp;
    //             <span className="font-bold text-xl">45,00</span>&nbsp;
    //             <span className="text-sm font-semibold">€</span>
    //           </div>
    //         </div>
    //         <div className="p-4 border-t border-b text-xs text-gray-700">
    //           <span className="flex items-center mb-1">
    //             <i className="far fa-clock fa-fw mr-2 text-gray-900"></i> 3 Tage
    //           </span>
    //           <span className="flex items-center">
    //             <i className="far fa-address-card fa-fw text-gray-900 mr-2"></i>{" "}
    //             Ermäßigung mit Karte
    //           </span>
    //         </div>
    //         <div className="p-4 flex items-center text-sm text-gray-600">
    //           <svg
    //             viewBox="0 0 24 24"
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-4 w-4 fill-current text-yellow-500"
    //           >
    //             <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
    //           </svg>
    //           <svg
    //             viewBox="0 0 24 24"
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-4 w-4 fill-current text-yellow-500"
    //           >
    //             <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
    //           </svg>
    //           <svg
    //             viewBox="0 0 24 24"
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-4 w-4 fill-current text-yellow-500"
    //           >
    //             <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
    //           </svg>
    //           <svg
    //             viewBox="0 0 24 24"
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-4 w-4 fill-current text-yellow-500"
    //           >
    //             <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
    //           </svg>
    //           <svg
    //             viewBox="0 0 24 24"
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-4 w-4 fill-current text-gray-400"
    //           >
    //             <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
    //           </svg>
    //           <span className="ml-2">34 Bewertungen</span>
    //         </div>
    //       </a>
    //     </div>
    //     <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
    //       <a
    //         href=""
    //         className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
    //       >
    //         <div className="relative pb-48 overflow-hidden">
    //           <img
    //             className="absolute inset-0 h-full w-full object-cover"
    //             src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
    //             alt=""
    //           />
    //         </div>
    //         <div className="p-4">
    //           <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
    //             Highlight
    //           </span>
    //           <h2 className="mt-2 mb-2  font-bold">
    //             Purus Ullamcorper Inceptos Nibh
    //           </h2>
    //           <p className="text-sm">
    //             Cras justo odio, dapibus ac facilisis in, egestas eget quam.
    //             Donec ullamcorper nulla non metus auctor fringilla.
    //           </p>
    //           <div className="mt-3 flex items-center">
    //             <span className="text-sm font-semibold">ab</span>&nbsp;
    //             <span className="font-bold text-xl">45,00</span>&nbsp;
    //             <span className="text-sm font-semibold">€</span>
    //           </div>
    //         </div>
    //         <div className="p-4 border-t border-b text-xs text-gray-700">
    //           <span className="flex items-center mb-1">
    //             <i className="far fa-clock fa-fw mr-2 text-gray-900"></i> 3 Tage
    //           </span>
    //           <span className="flex items-center">
    //             <i className="far fa-address-card fa-fw text-gray-900 mr-2"></i>{" "}
    //             Ermäßigung mit Karte
    //           </span>
    //         </div>
    //         <div className="p-4 flex items-center text-sm text-gray-600">
    //           <svg
    //             viewBox="0 0 24 24"
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-4 w-4 fill-current text-yellow-500"
    //           >
    //             <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
    //           </svg>
    //           <svg
    //             viewBox="0 0 24 24"
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-4 w-4 fill-current text-yellow-500"
    //           >
    //             <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
    //           </svg>
    //           <svg
    //             viewBox="0 0 24 24"
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-4 w-4 fill-current text-yellow-500"
    //           >
    //             <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
    //           </svg>
    //           <svg
    //             viewBox="0 0 24 24"
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-4 w-4 fill-current text-yellow-500"
    //           >
    //             <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
    //           </svg>
    //           <svg
    //             viewBox="0 0 24 24"
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-4 w-4 fill-current text-gray-400"
    //           >
    //             <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
    //           </svg>
    //           <span className="ml-2">34 Bewertungen</span>
    //         </div>
    //       </a>
    //     </div>
    //     <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
    //       <a
    //         href=""
    //         className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
    //       >
    //         <div className="relative pb-48 overflow-hidden">
    //           <img
    //             className="absolute inset-0 h-full w-full object-cover"
    //             src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
    //             alt=""
    //           />
    //         </div>
    //         <div className="p-4">
    //           <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
    //             Highlight
    //           </span>
    //           <h2 className="mt-2 mb-2  font-bold">
    //             Purus Ullamcorper Inceptos Nibh
    //           </h2>
    //           <p className="text-sm">
    //             Cras justo odio, dapibus ac facilisis in, egestas eget quam.
    //             Donec ullamcorper nulla non metus auctor fringilla.
    //           </p>
    //           <div className="mt-3 flex items-center">
    //             <span className="text-sm font-semibold">ab</span>&nbsp;
    //             <span className="font-bold text-xl">45,00</span>&nbsp;
    //             <span className="text-sm font-semibold">€</span>
    //           </div>
    //         </div>
    //         <div className="p-4 border-t border-b text-xs text-gray-700">
    //           <span className="flex items-center mb-1">
    //             <i className="far fa-clock fa-fw mr-2 text-gray-900"></i> 3 Tage
    //           </span>
    //           <span className="flex items-center">
    //             <i className="far fa-address-card fa-fw text-gray-900 mr-2"></i>{" "}
    //             Ermäßigung mit Karte
    //           </span>
    //         </div>
    //         <div className="p-4 flex items-center text-sm text-gray-600">
    //           <svg
    //             viewBox="0 0 24 24"
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-4 w-4 fill-current text-yellow-500"
    //           >
    //             <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
    //           </svg>
    //           <svg
    //             viewBox="0 0 24 24"
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-4 w-4 fill-current text-yellow-500"
    //           >
    //             <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
    //           </svg>
    //           <svg
    //             viewBox="0 0 24 24"
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-4 w-4 fill-current text-yellow-500"
    //           >
    //             <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
    //           </svg>
    //           <svg
    //             viewBox="0 0 24 24"
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-4 w-4 fill-current text-yellow-500"
    //           >
    //             <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
    //           </svg>
    //           <svg
    //             viewBox="0 0 24 24"
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-4 w-4 fill-current text-gray-400"
    //           >
    //             <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
    //           </svg>
    //           <span className="ml-2">34 Bewertungen</span>
    //         </div>
    //       </a>
    //     </div>
    //     <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
    //       <a
    //         href=""
    //         className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
    //       >
    //         <div className="relative pb-48 overflow-hidden">
    //           <img
    //             className="absolute inset-0 h-full w-full object-cover"
    //             src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
    //             alt=""
    //           />
    //         </div>
    //         <div className="p-4">
    //           <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
    //             Highlight
    //           </span>
    //           <h2 className="mt-2 mb-2  font-bold">
    //             Purus Ullamcorper Inceptos Nibh
    //           </h2>
    //           <p className="text-sm">
    //             Cras justo odio, dapibus ac facilisis in, egestas eget quam.
    //             Donec ullamcorper nulla non metus auctor fringilla.
    //           </p>
    //           <div className="mt-3 flex items-center">
    //             <span className="text-sm font-semibold">ab</span>&nbsp;
    //             <span className="font-bold text-xl">45,00</span>&nbsp;
    //             <span className="text-sm font-semibold">€</span>
    //           </div>
    //         </div>
    //         <div className="p-4 border-t border-b text-xs text-gray-700">
    //           <span className="flex items-center mb-1">
    //             <i className="far fa-clock fa-fw mr-2 text-gray-900"></i> 3 Tage
    //           </span>
    //           <span className="flex items-center">
    //             <i className="far fa-address-card fa-fw text-gray-900 mr-2"></i>{" "}
    //             Ermäßigung mit Karte
    //           </span>
    //         </div>
    //         <div className="p-4 flex items-center text-sm text-gray-600">
    //           <svg
    //             viewBox="0 0 24 24"
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-4 w-4 fill-current text-yellow-500"
    //           >
    //             <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
    //           </svg>
    //           <svg
    //             viewBox="0 0 24 24"
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-4 w-4 fill-current text-yellow-500"
    //           >
    //             <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
    //           </svg>
    //           <svg
    //             viewBox="0 0 24 24"
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-4 w-4 fill-current text-yellow-500"
    //           >
    //             <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
    //           </svg>
    //           <svg
    //             viewBox="0 0 24 24"
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-4 w-4 fill-current text-yellow-500"
    //           >
    //             <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
    //           </svg>
    //           <svg
    //             viewBox="0 0 24 24"
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-4 w-4 fill-current text-gray-400"
    //           >
    //             <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
    //           </svg>
    //           <span className="ml-2">34 Bewertungen</span>
    //         </div>
    //       </a>
    //     </div>
    //   </div>
    // </div>
  );
};

export default PopularPosts;

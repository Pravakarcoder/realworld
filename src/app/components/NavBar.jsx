// "use client";

// import Image from "next/image";

// import logo from "../../../public/assets/logo.webp";
// import Link from "next/link";

// import React, { useEffect, useState } from "react";
// import { HiBars3 } from "react-icons/hi2";
// import { GrClose } from "react-icons/gr";
// import { BiChevronRight } from "react-icons/bi";

// import { PiUser } from "react-icons/pi";

// const navbarMenu = [
//   {
//     href: "/",
//     label: "Home",
//   },
//   {
//     href: "/",
//     label: "Categories",
//   },
//   {
//     href: "/",
//     label: "Contact",
//   },
//   {
//     href: "/",
//     label: "Blog",
//   },
// ];

// const NavBar = () => {
//   const [navOpen, setNavOpen] = useState(false);

//   const [dimensions, setDimensions] = useState({
//     height: window.innerHeight,
//     width: window.innerWidth,
//   });

//   const mobileMenuHandler = () => {
//     setNavOpen(!navOpen);
//   };

//   useEffect(() => {
//     function handleResize() {
//       setDimensions({
//         height: window.innerHeight,
//         width: window.innerWidth,
//       });

//       // When the window resize we set the navOpen false
//       if (dimensions.width > 768 && navOpen) {
//         setNavOpen(false);
//       }
//     }

//     window.addEventListener("resize", handleResize);

//     return (_) => {
//       window.removeEventListener("resize", handleResize);
//     };
//   });

//   return (
//     <>
//       <header className="container h-20  items-center content-center w-full bg-[#f2f5f4]">
//         <div className="flex  justify-around items-center -ml-20">
//           <div className="text-white">
//             <Image src={logo} alt="logo" height={87.7} width={345} />
//           </div>
//           <div className="hidden  lg:block  text-center text-1xs text-blue-700">
//             <ul className="flex space-x-20">
//               {navbarMenu.map((item, index) => (
//                 <li key={item.label} className="hover:text-red-700">
//                   <Link href={item.href}>{item.label}</Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className="text-blue-700 hover:cursor-pointer">
//             <div className="inline-flex flex-col hover:text-red-700 align-middle">
//               <PiUser className="text-2xl" />
//             </div>
//             <span className="hover:text-red-700 p-3"> Sign In</span>
//             <span className="hover:text-red-700">Log In</span>
//           </div>
//         </div>

//         {/* For Mobile/Tablet Devices Nav Menu */}

//         {/* <div
//           className={
//             navOpen
//               ? "py-0 block fixed w-screen z-[9999]"
//               : " py-0 hidden fixed w-screen z-[9999]"
//           }
//         >
//           <div
//             className="h-screen w-screen z-[999] top-0 fixed bg-black bg-opacity-50"
//             onClick={mobileMenuHandler}
//           ></div>

//           <div className="bg-white w-[380px] top-0 right-0 z-[9999] h-screen fixed">
//             <div className="h-14 px-10 border-b flex items-center">
//               <button
//                 className="flex items-center space-x-3 "
//                 onClick={mobileMenuHandler}
//               >
//                 <GrClose />
//                 <span>Close</span>
//               </button>
//             </div>

//             <div className="h-full py-3 px-10 pb-20 overflow-y-scroll scroll-smooth">
//               <ul className="block mb-7" onClick={mobileMenuHandler}>
//                 {navbarMenu.map((item, index) => (
//                   <Link
//                     href={item.href}
//                     className="group flex items-center py-2 duration-300 transition-all ease-in-out  hover:text-blue-900"
//                   >
//                     <span>{item.label}</span>
//                     <span className="left-2 relative duration-300 transition-all ease-in-out opacity-0 group-hover:opacity-100 group-hover:left-3">
//                       <BiChevronRight className="text-xl" />
//                     </span>
//                   </Link>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div> */}
//       </header>
//     </>
//   );
// };

// export default NavBar;

"use client";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-white shadow-2xl text-center">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/">
              <h2 className="text-2xl font-bold">Search</h2>
            </Link>

            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-gray-600 hover:text-blue-600  hover:duration-200">
                <Link href="/" onClick={() => setNavbar(!navbar)}>
                  {" "}
                  Home
                </Link>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <Link href="/categories" onClick={() => setNavbar(!navbar)}>
                  Categories
                </Link>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <Link href="/contact" onClick={() => setNavbar(!navbar)}>
                  Contact
                </Link>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <Link href="/blog" onClick={() => setNavbar(!navbar)}>
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

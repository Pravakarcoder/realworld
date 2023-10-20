"use client";

import { useEffect, useState } from "react";

import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`${
        showButton ? "block" : "hidden"
      } fixed bottom-4  h-12 w-12 right-4 p-2 bg-orange-400 text-white rounded-full hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-opacity-50 transition-all duration-300`}
    >
      <AiOutlineArrowUp className="text-3xl  hover:animate-ping" />
    </button>
  );
};

export default ScrollButton;

import React from "react";
import SearchWorld from "../../../public/assets/WorldSearch.png";
import Image from "next/image";
import HomeCategories from "./HomeCategories";

const Hero = () => {
  return (
    <>
      <div className="mt-20 bg-white">
        <div className=" flex justify-center items-center  ml-4 xl:space-x-56 md:space-x-32 mt-9">
          <div className="font-bold text-4xl  sm:text-5xl  md:text-6xl xl:text-6xl mt-3 text-orange-500 first-letter:capitalize">
            What's Near To You?
            <div className="text-2xl">
              <h2 className="font-semibold  mt-3 xl:ml-2  text-slate-600">
                Search Local Area
              </h2>
            </div>
          </div>
          <div className="AnimationBounce">
            <Image src={SearchWorld} alt="" width={300} height={300} />
          </div>
        </div>
      </div>
      <HomeCategories />
    </>
  );
};

export default Hero;

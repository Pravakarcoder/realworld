import React from "react";
import Loading from "../components/Loading";

const page = () => {
  return (
    <div
      className="h-screen w-full flex justify-center items-center
     font-semibold text-6xl text-orange-500
    "
    >
      Coming soon
      <div className="ml-10">
        <Loading />
      </div>
    </div>
  );
};

export default page;

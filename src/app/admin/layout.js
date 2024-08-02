import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import React from "react";

export default function layout({ children }) {
  return (
    <>
      <div className=" w-full relative ">
        <Sidebar />
        <div className="absolute left-[207px]  w-[86%]">
          <Header />
          <div className="bg-gray-50  w-[103%]">{children}</div>
        </div>
      </div>
    </>
  );
}

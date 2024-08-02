import { Avatar } from "@mui/material";
import React from "react";
import { GoSidebarCollapse } from "react-icons/go";
import { RiRefreshLine } from "react-icons/ri";

export default function Media() {
  return (
    <>
      {/* third sidebar */}

      <div className="h-[90vh] bg-white border-r-gray-500 border-solid border-2">
        <div
        //  className="h-12 bg-white  ml-1 p-0" style={{ width: "100%" }}
         >
          <div className="flex items-center ">
            <span
              className="text-gray-400 p-3"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Avatar
                sizes="15px"
                style={{ width: "35px", height: "35px", paddingBottom: "2px" }}
              />
            </span>
            <div className="flex justify-between items-center w-full">
              <div className="flex border-gray-100 my-2 flex-col">
                <h4>Ayush</h4>
                <button className="text-xs bg-gray-50 border-2 border-gray-200 ">
                  Label
                </button>
              </div>
              <div className="flex items-center pl-3 mb-4 ms-3">
                <button className="flex mt-2 ml-3 border-gray-900 rounded bg-white">
                  <span className="pt-1 text-gray-700">
                    <RiRefreshLine />
                  </span>
                </button>
                <button className="flex mt-2 ml-3 border-gray-900 rounded bg-white">
                  <span className="pt-1  text-gray-700">
                    <GoSidebarCollapse />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* third sidebar end */}
    </>
  );
}

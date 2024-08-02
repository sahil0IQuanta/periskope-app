import { Avatar } from "@mui/material";
import React from "react";
import { BsStars } from "react-icons/bs";
import { GoSidebarCollapse } from "react-icons/go";
import { RiRefreshLine } from "react-icons/ri";
import Media from "./media";

export default function Detail() {
  return (
    <>
      {/* single chat section header */}
      <div
      //  className="h-[90vh] bg-yellow-50 border-r-gray-500 border-solid border-2 -ml-1"
      >
        <div
        //  className="h-9 bg-zinc-100  ml-1 p-0"
        >
          <div className="flex items-center flex justify-between  w-full bg-white">
            <div className="flex bg-white">
              <span
                className="text-gray-400 p-3"
                style={{ display: "flex", alignItems: "center" }}
              >
                <Avatar
                  sizes="15px"
                  style={{
                    width: "25px",
                    height: "25px",
                    paddingBottom: "2px",
                  }}
                />
              </span>
              <div className="flex border-gray-100 my-3">
                <h4>Ayush</h4>
              </div>
            </div>

            <div>
              <div>
                <button className="flex mt-2 ml-3 border-gray-900 rounded bg-white pb-2">
                  <span className="pt-1 px-2 text-gray-700">
                    <BsStars />
                  </span>
                  <span className="px-2 text-sm text-gray-700">Summarize</span>
                </button>
              </div>
            </div>

            {/* <div className="flex justify-between items-center w-full bg-white">
              <div className="flex items-center pl-3 mb-4 ms-3">
                <button className="flex mt-2 ml-3 border-gray-900 rounded bg-white">
                  <span className="pt-1 px-2 text-gray-700">
                    <BsStars />
                  </span>
                  <span className="px-2 text-sm text-gray-700">Summarize</span>
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* single chat section header end*/}

      {/* main chat container start */}

      <div className="bg-grey-50 h-[100%] ">
        <div className="flex pt-8">
          <div
            className="text-gray-400 px-2"
            style={{ display: "flex", alignItems: "start" }}
          >
            <Avatar
              sizes="15px"
              style={{
                width: "25px",
                height: "25px",
                paddingBottom: "2px",
              }}
            />
          </div>
          <div className="bg-white h-[80px]  px-1 flex flex-col rounded p-2">
            <div className="flex justify-between gap-6 text-xs text-gray-400 px-2 pb-2">
              <span className="text-pink-800 font-bold">iQuanta</span>
              <span>+9198547854415</span>
            </div>
            <span className="item-center px-2">Hii From iQuanta</span>
          </div>
        </div>
      </div>
    </>
  );
}

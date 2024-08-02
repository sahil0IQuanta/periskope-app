import { Avatar, ListItemAvatar, ListItemText } from "@mui/material";
import React, { useState } from "react";
import { IoFilter } from "react-icons/io5";
import { LuFilter } from "react-icons/lu";
import ImageIcon from "@mui/icons-material/Image";

export default function ChatSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [chats, setChats] = useState([
    { id: 1, name: "Ayush", message: "Hello!" },
    { id: 2, name: "Neeraj", message: "Hi there!" },
    { id: 2, name: "Vivek", message: "Hi there!" },
    { id: 2, name: "Akash", message: "Hi there!" },
    { id: 2, name: "Rohan", message: "Hi there!" },
    { id: 2, name: "Mohit", message: "Hi there!" },

    // Add more chats here
  ]);

  const filteredChats = chats.filter(
    (chat) =>
      chat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      chat.message.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>


      <div
        // className="w-[25vw] bg-white -mt-1 -ml-1 pt-2 z-10 "
        style={{ borderRight: "1px solid black ", height: "100%" }}
      >
        {/* Search Bar start */}
        <div
        //   className="h-9 bg-gray-50 -m-1 ml-3 p-0  "
        //   style={{ width: "100%" }}
        >
          <div className="flex">
            <span className="text-gray-400 p-3">
              {" "}
              <LuFilter />
            </span>
            <div className="border-gray-100 my-1 ">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-70 py-1 px-4 border text-sm rounded mb-4"
              />
            </div>

            <div className="pl-3">
              <button className="flex mt-2 ml-3 border-gray-900 rounded bg-white">
                <span className="pt-1 px-2 text-gray-700">
                  <IoFilter />
                </span>
                <span className="px-2 pt-1 text-sm text-gray-700">Filter</span>
              </button>
            </div>
          </div>
        </div>
        {/* Search Bar end */}

        {/* Chat List Start */}
        <div>
          <div className=" p-4">
            {filteredChats.map((chat) => (
              <div key={chat.id} className="p-4 border rounded flex ">
                <ListItemAvatar className="pt-1 ">
                  <Avatar sizes="10px">
                    <ImageIcon />
                  </Avatar>
                </ListItemAvatar>

                <ListItemText primary={chat.name} secondary={chat.message} />
              </div>
            ))}
          </div>
        </div>
      </div>







    </>
  );
}

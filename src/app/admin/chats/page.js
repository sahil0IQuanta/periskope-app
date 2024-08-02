"use client";

import React, { useState } from "react";
import { LuFilter } from "react-icons/lu";
import { IoFilter } from "react-icons/io5";
import { Avatar, ListItemAvatar, ListItemText } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import { BsStars } from "react-icons/bs";
import { PiCursorClickFill } from "react-icons/pi";
import { RiRefreshLine } from "react-icons/ri";
import { GoSidebarCollapse } from "react-icons/go";
import BlankPage from "@/components/chats/BlankPage";
import Detail from "@/components/chats/Detail";
import ChatSection from "@/components/chats/chatSection";
import Media from "@/components/chats/media";

export default function Chats() {
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
        className="flex h-[100vh] bg-gray-50"
        style={{ border: "2px solid red" }}
      >
        {/* chat section */}
        <div className="w-[60%]">
          <ChatSection />
        </div>
        {/* Chat List End */}

        {/* blank side section */}

        {/* <BlankPage /> */}
        <div className="w-[100%]">
          <Detail />
        </div>
        <div className="w-[70%]">
          <Media />
        </div>
      </div>
    </>
  );
}

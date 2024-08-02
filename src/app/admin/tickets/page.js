'use client'

import React, { useState } from 'react'
import { IoFilter } from 'react-icons/io5';
import { LuFilter } from 'react-icons/lu'
import { PiCursorClickFill } from 'react-icons/pi'
import { IoTicketSharp } from "react-icons/io5";


export default function Tickets() {

  const [searchTerm, setSearchTerm] = useState('');
  const [chats, setChats] = useState([
    { id: 1, name: 'Ayush', message: 'Hello!' },
    { id: 2, name: 'Neeraj', message: 'Hi there!' },
    { id: 2, name: 'Vivek', message: 'Hi there!' },
    { id: 2, name: 'Akash', message: 'Hi there!' },
    { id: 2, name: 'Rohan', message: 'Hi there!' },
    { id: 2, name: 'Mohit', message: 'Hi there!' },

    // Add more chats here
  ]);

  const filteredChats = chats.filter(chat =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    chat.message.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <>
      <div className='flex h-[90vh] bg-gray-50 '>



        <div className='w-[25vw] bg-white -mt-1 pt-2 z-10 ' style={{ borderRight: "1px solid black " }}>

          {/* Search Bar start */}
          <div className='h-9 bg-gray-50 -m-1 ml-3 p-0  ' style={{ width: "358px" }}>
            <div className='flex'>
              <span className='text-gray-400 p-3'> <LuFilter /></span>
              <div className='border-gray-100 my-1 '>
                <input
                  type='text'
                  placeholder='Search...'
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className='w-70 py-1 px-4 border text-sm rounded mb-4'
                />
              </div>

              <div className='pl-3'>
                <button className='flex mt-2 ml-3 border-gray-900 rounded bg-white'>
                  <span className='pt-1 px-2 text-gray-700'><IoFilter /></span>
                  <span className='px-2 pt-1 text-sm text-gray-700'>Filter</span>
                </button>
              </div>
            </div>


          </div>
          {/* Search Bar end */}



          <div className='bg-gray-200 h-[84vh] mt-2 flex flex-col'>

          <div className='text-center m-auto text-sm text-gray-500'>
  <div className='flex justify-center items-center'>
    <span className='m-auto p-auto'><IoTicketSharp /></span>
  </div>
  <p>No Open Tickets</p>
  <p>To create a ticket, right click on any message, or the use of this emoji</p>
</div>



          </div>


        </div >




        {/* side section */}


        {/* blank side section */}

        <div className='flex flex-col items-center justify-center w-[60vw] left-2 text-gray-500'>
          <span>
            <PiCursorClickFill size={15} />
          </span>
          <p className='text-center text-sm'>
            Select a ticket to View
          </p>

          <footer className='align-text-bottom'>Secure Viewer</footer>
        </div>

        {/* blank side section end */}






      </div >

    </>
  )
}

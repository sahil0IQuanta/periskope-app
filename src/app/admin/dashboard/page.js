'use client'

import React, { useState } from 'react'
import { IoIosPeople } from "react-icons/io";
import { BsChatSquareDotsFill } from "react-icons/bs";
import { BiSolidMessageError } from "react-icons/bi";
import { IoTicketSharp } from "react-icons/io5";
import { SiConventionalcommits } from "react-icons/si";
import { CiClock2 } from "react-icons/ci";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { GiTeamUpgrade } from "react-icons/gi";
import { IoPersonCircleSharp } from "react-icons/io5";
import { MdCircle } from 'react-icons/md';
// import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import DatePickerComp from '@/components/DatePicker';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro';
import { Box } from '@mui/material';



export default function Dashboard() {

  return (
    // <>
    //   {/* <div style={{ height: "100vh", display: "flex" }} className='grid-flow-col'> */}
    //   <div className='flex h-[90vh] '>



    //     {/* <div style={{ width: "70vw", backgroundColor: "grey-50" }}> */}
    //     <div className='w-[70vw] bg-gray-50'>

    //       {/* iquanta dashboard start */}
    //       <div className='flex justify-between p-5'>
    //         <div >
    //           <h1 className='text-lg font-bold text-gray-700'>Iquanta: Dashboard</h1>
    //           <p className='text-sm'>Summery metrics across your all WhatsApp Chats</p>
    //         </div>
    //         <div style={{ alignContent: "center" }}  >
    //           {/* <h1>Select a date</h1>
    //           <DatePicker
    //             selected={selectedDate}
    //             onChange={(date) => setSelectedDate(date)}
    //             dateFormat="dd/MM/yyyy"
    //           /> */}
    //           <select value="3" className='py-1'>
    //             <option value="1"> Option 1 </option>
    //             <option value="2"> Option 2 </option>
    //             <option value="3"> 22/10/2024 </option>
    //           </select>

    //           <button className='bg-white mx-4 p-1 border-gray-50 text-sm'> &#8634; Refresh</button>

    //         </div>

    //       </div>
    //       {/* iquanta dashboard end */}


    //       {/* mini four boxes start */}

    //       <div className='flex '>
    //         <div className=' ml-9 px-5 bg-gray-50 text-gray-500' style={{ width: "200px", display: "flex", flexDirection: "column", height: "80px", backgroundColor: "white", justifyContent: "center", }} >
    //           <span className='flex pt-1'>
    //             <span className='pt-1'><IoIosPeople /></span> <p className='pl-2'>  All Chats</p>
    //           </span>
    //           <h3 className='text-black text-2xl font-bold py-1'>228</h3>
    //         </div>
    //         <div className='ml-9 px-5 bg-gray-50 text-gray-500' style={{ width: "200px", display: "flex", flexDirection: "column", height: "80px", backgroundColor: "white", justifyContent: "center", }}>
    //           <span className='flex pt-1'>
    //             <span className='pt-1'><IoIosPeople /></span> <p className='pl-2'>  Active Chats</p>
    //           </span>
    //           <h3 className='text-black text-2xl font-bold py-1'>20</h3>
    //         </div>
    //         <div className='ml-9 px-5 bg-gray-50 text-gray-500 w-[200px]' style={{ width: "200px", display: "flex", flexDirection: "column", height: "80px", backgroundColor: "white", justifyContent: "center", }}>
    //           <span className='flex pt-1'>
    //             <span className='pt-1'><BsChatSquareDotsFill /></span> <p className='pl-2'>  Total Messages</p>
    //           </span>
    //           <h3 className='text-black text-2xl font-bold py-1'>764</h3>

    //         </div>
    //         <div className='ml-9 px-5 bg-gray-50 text-gray-500' style={{ width: "200px", display: "flex", flexDirection: "column", height: "80px", backgroundColor: "white", justifyContent: "center", }}>
    //           <span className='flex pt-1'>
    //             <span className='pt-1'><BiSolidMessageError color='red' size="20" /></span> <p className='pl-2'>  Flagged Chats</p>
    //           </span>
    //           <h3 className='text-black text-2xl font-bold py-1'>0</h3>
    //         </div>
    //       </div>
    //       {/* mini four boxes end */}




    //       {/* medium 2 boxes start */}

    //       <div className='flex'>
    //         <div className='ml-9 mt-6 bg-gray-50 text-gray-500' style={{ width: "445px", display: "flex", flexDirection: "column", height: "150px", backgroundColor: "white" }} >
    //           {/* <p className='pl-5 py-2'>Tickets</p> */}
    //           <span className='flex pt-1'>
    //             <span className='pt-2 pl-5'><IoTicketSharp size={20} color='GrayWhite' /></span> <p className='pl-2 py-2'>Tickets </p>
    //           </span>
    //           <hr />
    //           <div className='flex'>
    //             <span className='p-4' style={{ width: "45%" }}>
    //               <span className='flex'><span className='pt-1'><SiConventionalcommits color='red' /> </span><p className='pl-2'>Open</p></span>
    //               <h5 className='font-bold text-3xl text-black pl-6'>-</h5>
    //             </span>
    //             <span className='p-4' style={{ width: "45%" }}>
    //               <span className='flex'><span className='pt-1'><CiClock2 color='#f59e0b' /> </span><p className='pl-2'>In progress</p></span>
    //               <h5 className='font-bold text-3xl text-black pl-6'>-</h5>

    //             </span>
    //           </div>
    //         </div>

    //         <div className='ml-9 mt-6 bg-gray-50 text-gray-500' style={{ width: "445px", display: "flex", flexDirection: "column", height: "150px", backgroundColor: "white" }} >
    //           <p className='pl-5 py-2'>Bulk Messages</p>
    //           <hr />
    //           <div className=' flex flex-col justify-center items-center h-screen  ' >
    //             <div className='flex  justify-center items-center ' ><FaEnvelopeOpenText /></div>
    //             <p>No bulk message yet</p>
    //           </div>
    //         </div>


    //       </div>
    //       {/* medium 2 boxes end */}



    //       {/* one large container  start*/}

    //       <div>
    //         <div className='ml-9 mt-6 bg-gray-50 text-gray-500' style={{ width: "925px", height: "300px", backgroundColor: "white" }} >
    //           <span className='flex pt-1'>
    //             <span className='pt-3 pl-5'><GiTeamUpgrade color='black' /></span> <p className='pl-2 py-2'>Team Metrics </p>
    //           </span>
    //           <hr />
    //           <div className="overflow-x-auto">
    //             <table className="min-w-full divide-y divide-white-200">
    //               <thead className="bg-white-50">
    //                 <tr>
    //                   <th className="px-6 py-3 text-left text-sm  font-bold text-gray-500 ">User</th>
    //                   <th className="px-6 py-3 text-left text-sm font-bold text-gray-500 "># message sent</th>
    //                   <th className="px-6 py-3 text-left text-sm font-bold text-gray-500 "># open tickets</th>
    //                   <th className="px-6 py-3 text-left text-sm font-bold text-gray-500 "># responses (to flagged messages)</th>
    //                   <th className="px-6 py-3 text-left text-sm font-bold text-gray-500 "># Average response time (flagged messages)</th>
    //                 </tr>
    //               </thead>
    //               <tbody className="bg-white divide-y divide-gray-200">
    //                 <tr>
    //                   <td className="pl-3 py-4 whitespace-nowrap">
    //                     <div className='flex '>
    //                       <span className='pt-2'>

    //                         <IoPersonCircleSharp size={30} />
    //                       </span>
    //                       <div className='pl-2'>
    //                         <span className='text-left  font-bold text-gray-500'>Total</span>
    //                         <p className='text-left text-sm font-medium text-gray-500'>All members</p>
    //                       </div>
    //                     </div>

    //                   </td>
    //                   <td className="pl-9 py-4 whitespace-nowrap">0</td>
    //                   <td className="pl-9 py-4 whitespace-nowrap">0</td>
    //                   <td className=" pl-9 py-4 whitespace-nowrap">0</td>
    //                 </tr>
    //                 {/* Add more rows as needed */}
    //               </tbody>
    //             </table>
    //           </div>



    //           <hr />
    //         </div>
    //         <hr />
    //       </div>

    //       {/* one large container end */}
    //     </div>


    //     {/* right sidebar start */}

    //     <div style={{ width: "25vw", backgroundColor: "white" }}>
    //       <div className='p-5' >
    //         <h1 className='text-lg font-bold text-gray-700'>Phone Status</h1>
    //         <p className='text'>Status of connected Phones</p>
    //       </div>

    //       <div className='flex bg-gray-50 h-14 m-4 p-4' >
    //         <span><IoPersonCircleSharp size={30} /></span>
    //         <p className='text-sm text-gray-600 font-bold'>+91 9876543210</p>
    //         <span className='flex pl-5 pt-3'>
    //           <span >

    //             <MdCircle size={15} color='red' />
    //           </span>
    //           <button className='text-sm  hover:underline'> Restart</button>
    //         </span>
    //         <button className='pl-4 hover:font-bold pt-1'>...</button>

    //       </div>
    //     </div>

    //     {/* right sidebar end */}

    //   </div >
    // </>

    <>
      <div className='flex h-[92vh] overflow-hidden'>
        {/* Left Container */}
        <div className='flex flex-col items-center w-[70vw] bg-gray-50 overflow-hidden border border-gray-100'>
          {/* iquanta dashboard start */}
          <div className='flex justify-between py-8 px-4 w-full'>
            <div>
              <h1 className='text-lg font-bold text-gray-600'>Iquanta: Dashboard</h1>
              <p className='text-sm text-gray-500'>Summary metrics across all your WhatsApp Chats</p>
            </div>
            <div className='flex items-center '>
              <Box className = 'text-sm'>
              
                <DatePickerComp />
              </Box>

              {/* <DateRangeCalendar /> */}
              {/* <select value="3" className='py-1 text-sm '>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">22/10/2024</option>
              </select> */}
              <button className='bg-white mx-8 p-1 border border-gray-300 text-xs'> &#8634; Refresh</button>
            </div>
          </div>
          {/* iquanta dashboard end */}

          {/* Container for Mini, Medium, and Large Boxes */}
          <div className='flex flex-wrap gap-4 px-5 w-full'>
            {/* Mini Boxes */}
            <div className='flex gap-6 w-full'>
              <div className='bg-gray-50 text-gray-500' style={{ width: "204px", height: "84px", backgroundColor: "white", display: "flex", flexDirection: "column", justifyContent: "center", borderRadius: "8px" }}>
                <span className='flex pt-1 pl-3 text-sm'>
                  <span className='pt-1'><IoIosPeople /></span>
                  <p className='pl-2'>All Chats</p>
                </span>
                <h3 className='text-gray-500 text-xl font-bold py-1 pl-10'>{`228`}</h3>
              </div>
              <div className='bg-gray-50 text-gray-500' style={{ width: "204px", height: "84px", backgroundColor: "white", display: "flex", flexDirection: "column", justifyContent: "center", borderRadius: "8px" }}>
                <span className='flex pt-1 pl-3 text-sm'>
                  <span className='pt-1'><IoIosPeople /></span>
                  <p className='pl-2'>Active Chats</p>
                </span>
                <h3 className='text-grey-500 pl-10 text-2xl font-bold py-1'>20</h3>
              </div>
              <div className='bg-gray-50 text-gray-500' style={{ width: "204px", height: "84px", backgroundColor: "white", display: "flex", flexDirection: "column", justifyContent: "center", borderRadius: "8px" }}>
                <span className='flex pt-1 pl-3 text-sm'>
                  <span className='pt-1'><BsChatSquareDotsFill /></span>
                  <p className='pl-2'>Total Messages</p>
                </span>
                <h3 className='text-gray-500 text-2xl pl-10 font-bold py-1'>764</h3>
              </div>
              <div className='bg-gray-50 text-gray-500 ml-2' style={{ width: "204px", height: "84px", backgroundColor: "white", display: "flex", flexDirection: "column", justifyContent: "center", borderRadius: "8px" }}>
                <span className='flex pt-1 pl-3 text-sm'>
                  <span className='pt-1'><BiSolidMessageError color='red' size="20" /></span>
                  <p className='pl-2'>Flagged Chats</p>
                </span>
                <h3 className='text-gray-500 pl-10 text-2xl font-bold py-1'>0</h3>
              </div>
            </div>

            {/* Medium Boxes */}
            <div className='flex gap-3 w-full'>
              <div className='bg-gray-50 text-gray-500' style={{ width: "428px", height: "135px", backgroundColor: "white", display: "flex", flexDirection: "column", borderRadius: "8px" }}>
                <span className='flex pt-1'>
                  <span className='pt-2 pl-5'><IoTicketSharp size={20} color='GrayWhite' /></span>
                  <p className='pl-2 py-2 text-sm font-medium text-gray-700'>Tickets</p>
                </span>
                <hr />
                <div className='flex'>
                  <span className='p-4' style={{ width: "45%" }}>
                    <span className='flex'><span className='pt-1'><SiConventionalcommits color='red' /></span><p className='pl-2 text-sm'>Open</p></span>
                    <h5 className='font-bold text-xl text-black pl-6'>-</h5>
                  </span>
                  <span className='p-4' style={{ width: "45%" }}>
                    <span className='flex'><span className='pt-1'><CiClock2 color='#f59e0b' /></span><p className='pl-2 text-sm'>In progress</p></span>
                    <h5 className='font-bold text-xl text-black pl-6'>-</h5>
                  </span>
                </div>
              </div>

              <div className='bg-gray-50 text-gray-500' style={{ width: "445px", height: "135px", backgroundColor: "white", display: "flex", flexDirection: "column", borderRadius: "8px" }}>
                <p className='pl-5 py-2 text-sm font-medium text-gray-500'>Bulk Messages</p>
                <hr />
                <div className='flex flex-col justify-center items-center h-full'>
                  <div className='flex justify-center items-center'><FaEnvelopeOpenText size={20} color='gray' /></div>
                  <p className='text-sm text-gray-500'>No bulk message yet</p>
                </div>
              </div>
            </div>

            {/* Large Container */}
            <div className='flex justify-center w-[890px] '>
              <div className='bg-gray-50 text-gray-500' style={{ width: "", height: "240px", backgroundColor: "white", borderRadius: "8px" }}>
                <span className='flex pt-1'>
                  <span className='pt-3 pl-5'><GiTeamUpgrade color='black' /></span>
                  <p className='pl-2 py-2 text-sm font-medium text-gray-700'>Team Metrics</p>
                </span>
                <hr />
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-sm font-bold text-gray-500">User</th>
                        <th className="px-6 py-3 text-left text-sm font-bold text-gray-500"># message sent</th>
                        <th className="px-6 py-3 text-left text-sm font-bold text-gray-500"># open tickets</th>
                        <th className="px-6 py-3 text-left text-sm font-bold text-gray-500"># responses (to flagged messages)</th>
                        <th className="px-6 py-3 text-left text-sm font-bold text-gray-500"># Average response time (flagged messages)</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="pl-3 py-4 whitespace-nowrap">
                          <div className='flex'>
                            <span className='pt-2'><IoPersonCircleSharp size={30} /></span>
                            <div className='pl-2'>
                              <span className='text-left font-bold text-gray-500'>Total</span>
                              <p className='text-left text-sm font-medium text-gray-500'>All members</p>
                            </div>
                          </div>
                        </td>
                        <td className="pl-9 py-4 whitespace-nowrap">0</td>
                        <td className="pl-9 py-4 whitespace-nowrap">0</td>
                        <td className="pl-9 py-4 whitespace-nowrap">0</td>
                      </tr>
                      {/* Add more rows as needed */}
                    </tbody>
                  </table>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>




        {/* left container */}

        {/* Right Sidebar */}
        <div className="w-[27vw] bg-white overflow-hidden  border border-gray-100">
          <div className='py-8 px-4'>
            <h1 className='text-lg font-bold text-gray-600'>Phone Status</h1>
            <p className='text-sm text-gray-500'>Status of connected Phones</p>
          </div>
          <div className='flex bg-gray-50 h-14 m-4 p-4 items-center'>
            <span><IoPersonCircleSharp size={30} /></span>
            <p className='text-sm text-gray-600 font-bold'>+91 9876543210</p>
            <span className='flex pl-5 pt-3'>
              <span><MdCircle size={15} color='red' /></span>
              <button className='text-sm hover:underline'>Restart</button>
            </span>
            <button className='pl-4 hover:font-bold pt-1'>...</button>
          </div>
        </div>
      </div>

    </>
  )
}

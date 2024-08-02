'use client'

import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { FaBellSlash } from "react-icons/fa";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { VscDesktopDownload } from "react-icons/vsc";
import { MdCircle } from "react-icons/md";
import { LiaQuestionCircleSolid } from "react-icons/lia";
import { LuRefreshCcwDot } from "react-icons/lu";
import { AiFillThunderbolt } from "react-icons/ai";
import { usePathname } from 'next/navigation';





export default function Header() {

    let path = usePathname()
    console.log(path);
    return (
        <>
            

{/* <div className='flex bg-white-50 justify-between items-center' style={{ width: "100%", top: "0 !important", position: "sticky" }}>
    <div className="flex justify-center items-center">
        <span className="pl-5 text-gray-500"><AiFillHome size={12} /></span>
        <p className="text-gray-500 pl-1 font-bold text-xs">dashboard</p>
    </div>
    <div className="flex flex-wrap justify-center items-center space-x-4 py-2">
        <button className='bg-green-700 px-3 py-1 rounded-sm text-xs h-6 flex items-center min-w-[120px]'>
            <span className='flex items-center'>
                <span className='pt-0.5'><AiFillThunderbolt size={10} color='white' /></span>
                <p className='text-white ml-1'>Upgrade Plans</p>
            </span>
        </button>

        <button className='bg-gray-50 p-1 h-6 flex items-center min-w-[40px]'>
            <LuRefreshCcwDot size={16} color='gray-100' />
        </button>

        <button className='bg-gray-50 p-1 h-6 flex items-center min-w-[40px]'>
            <span className='pt-0.5'><LiaQuestionCircleSolid size={16} color='black' /></span>
            <p className='text-grey-700 text-xs ml-1'>Help</p>
        </button>

        <button className='bg-gray-50 p-2 h-6 flex items-center min-w-[40px]'>
            <span className='pt-0.5'><MdCircle size={10} color='red' /></span>
            <p className='text-grey-400 text-xs ml-1'>0/1 Phones</p>

        </button>

        <button className='bg-gray-50 p-1 h-6 flex items-center min-w-[40px]'>
            <VscDesktopDownload size={16} color='gray-100' />
        </button>

        <button className='bg-gray-50 p-1 h-6 flex items-center min-w-[40px]'>
            <BsFillRocketTakeoffFill size={16} color='gray-50' />
        </button>

        <button className='bg-gray-50 p-1 h-6 flex items-center min-w-[40px]'>
            <FaBellSlash size={16} color='gray-50' />
        </button>
    </div>
</div> */}


<div className='flex bg-white-50 justify-between items-center border border-gray-100 overflow-x-hidden m-0 w-full top-0 sticky py-1.5 bg-white' >
    <div className="flex justify-center items-center">
        <span className="pl-4 text-gray-500"><AiFillHome size={12} /></span>
        <p className="text-gray-500 pl-2 font-bold text-xs">dashboard</p>
    </div>
    <div className="flex flex-wrap justify-center items-center space-x-4 pr-4">
        <button className='bg-green-700 border border-gray-300 px-2.5 py-1.5 rounded-md text-xs flex items-center'>
            <span className='flex items-center'>
                <span className='pt-0.5'><AiFillThunderbolt size={10} color='white' /></span>
                <p className='text-white ml-1'>Upgrade Plans</p>
            </span>
        </button>

        <button className='bg-white border border-gray-300 px-2.5 py-1.5 rounded-md flex items-center'>
            <LuRefreshCcwDot size={16} color='gray-700' />
        </button>

        <button className='bg-white border border-gray-300 px-2.5 py-1.5 rounded-md flex items-center'>
            <span className='pt-0.5'><LiaQuestionCircleSolid size={16} color='black' /></span>
            <p className='text-gray-700 text-xs ml-1'>Help</p>
        </button>

        <button className='bg-white border border-gray-300 px-3 py-1.5 rounded-md flex items-center'>
            <span className='pt-0.5'><MdCircle size={10} color='red' /></span>
            <p className='text-gray-400 text-xs ml-1'>0/1 Phones</p>
        </button>

        <button className='bg-white border border-gray-300 py-1.5 px-2.5 rounded-md flex items-center'>
            <VscDesktopDownload size={14} color='gray-700'  />
        </button>

        <button className='bg-white border border-gray-300 px-2.5 py-1.5 rounded-md flex items-center'>
            <BsFillRocketTakeoffFill size={16} color='gray-700' />
        </button>

        <button className='bg-white border border-gray-300 px-2.5 py-1.5 rounded-md flex items-center'>
            <FaBellSlash size={16} color='gray-700' />
        </button>
    </div>
</div>






        </>
    )
}

'use client'
import Image from "next/image";
import { TbFileDownload } from "react-icons/tb";
import { LuFilter } from "react-icons/lu";
import { MdOutlineCancel } from "react-icons/md";
import data from "../data"

export default function Home() {


  return (
    <div className="flex flex-col border-2 border-black h-fit m-2 rounded-xl shadow-xl shadow-black">

      {/* heading */}
      <div className="bg-white flex justify-between items-center px-3 row-start-1 row-end-3">
        <h1 className="text-white hidden sm:flex">.</h1>
        <h1 className="text-sm font-bold py-2 sm:text-center sm:text-lg xl:text-2xl">Recently Generated Reports</h1>
        <div className="flex gap-2 py-2">
          <button className="border-[2px] p-[2px] border-gray-400 rounded-md"><LuFilter className="text-gray-500 sm:w-5 sm:h-5 xl:w-6 xl:h-6"/></button>
          <button className="border-[2px] p-[2px] border-gray-400 rounded-md"><MdOutlineCancel className="text-gray-500 sm:w-5 sm:h-5 xl:w-6 xl:h-6"/></button>
        </div>
      </div>

      {/* table content */}
      <div className="bg-gray-100 row-start-2 row-end-3">
           
      </div>
      <div className="bg-green-700 row-start-2 row-end-3">a</div>
    </div>
  );
}

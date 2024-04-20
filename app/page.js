'use client'
import Image from "next/image";
import { TbFileDownload } from "react-icons/tb";
import { LuFilter } from "react-icons/lu";
import { MdOutlineCancel } from "react-icons/md";
import { data } from "../data"
import { useState } from "react";
import Pagination from "./component/Pagination";

export default function Home() {

const[current , setCurrent] = useState(1)
const[dataPerPage , setDataPerPage] = useState(7)


 const lastPostIndex = current * dataPerPage;
 const firstPostIndex = lastPostIndex - dataPerPage

const currentData = data.slice(firstPostIndex , lastPostIndex) 

  return (
    <div className="flex flex-col border-2 border-black h-fit  m-2 items-center rounded-xl shadow-xl shadow-black">

      {/* heading */}
      <div className="bg-white flex justify-between items-center py-1 px-3 md:w-[770px] lg:w-[1060px] xl:w-[1250px] 2xl:w-[1500px] row-start-1 row-end-3">
        <h1 className="text-white hidden sm:flex">.</h1>
        <h1 className="text-sm font-bold py-2 sm:text-center sm:text-lg xl:text-2xl">Recently Generated Reports</h1>
        <div className="flex gap-2 py-2 mr-6">
          <button className="border-[2px] p-[2px] border-gray-400 rounded-md"><LuFilter className="text-gray-500 sm:w-5 sm:h-5 xl:w-6 xl:h-6" /></button>
          <button className="border-[2px] p-[2px] border-gray-400 rounded-md"><MdOutlineCancel className="text-gray-500 sm:w-5 sm:h-5 xl:w-6 xl:h-6" /></button>
        </div>
      </div>

      {/* table content */}
      <div className="row-start-1 row-end-3">
        <table className="w-full hidden md:block">
          <thead
            className=" border-2 border-[#e3e5ec]">
            <tr className="bg-gray-200">
              <th className=" p-2 flex ml-6 w-28 lg:w-40 text-sm md:text-base font-semibold  text-left">
                Date
              </th>
              <th className=" p-2 w-[520px] lg:w-[768px] xl:w-[947px] 2xl:w-[1195px] text-sm md:text-base  font-semibold text-left">
                Report Name
              </th>
              <th className=" p-2 w-36  text-sm md:text-base font-semibold text-center">
                Download
              </th>
            </tr>
          </thead>
          <tbody >
            {currentData.map((items, index) => {
              return (
                <tr
                  className=" items-center"
                  key={index}>
                  <td className="p-2  text-xs ml-6 mt-5 gap-2 flex flex-col whitespace-nowrap">
                    <h1 className="font-semibold text-gray-500 md:text-sm 2xl:text-base">{items.date}</h1>
                    <h1 className="font-semibold text-gray-400">{items.time}</h1>
                  </td>

                  <td className="p-1  text-xs md:text-sm  whitespace-nowrap">
                    <div className="flex ">
                      <h1 className="font-semibold 2xl:text-base text-gray-500">
                        {items.name}
                      </h1>
                    </div>
                  </td>

                  <td className="p-2 ">
                    <div className="text-center">
                    <button><TbFileDownload className="w-7 h-7" /></button>
                    </div>
                  </td>

                </tr>
              );
            })}
          </tbody>
        </table>

        {/* for smaller screens */}
        <div className="grid grid-cols-1  gap-4 m-3 md:hidden">
          {data.map((item, index) => {
            return (
              <div key={index} className="p-4 rounded-lg gap-2 flex flex-col shadow-lg ">
                <div className="flex flex-col gap-3 text-sm">
                  <div >
                    <h1 className="text-sm font-semibold w-full break-words">
                      {item.name}
                    </h1>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex-col gap-1">
                      <h1 className="text-xs font-semibold">{item.date}</h1>
                      <h1 className="text-[10px] font-semibold text-gray-400">{item.time}</h1>
                    </div>
                    <button><TbFileDownload className="w-7 h-7" /></button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-green-700 row-start-2 row-end-3">
        <Pagination totalPosts={data.length} postsPerPage={dataPerPage} setCurrent={setCurrent} current={current}/>
      </div>
    </div>
  );
}

import React from 'react'
import { TiMediaPlayReverseOutline } from "react-icons/ti";
import { TiMediaPlayOutline } from "react-icons/ti";

const Pagination = ({ totalPosts, postsPerPage, setCurrent, current }) => {

    let pages = [];

    // Calculate total number of pages
    const totalPages = Math.ceil(totalPosts / postsPerPage);


    let startPage, endPage;
    if (totalPages <= 5) {
        startPage = 1;
        endPage = totalPages;
    } else {
        if (current <= 3) {
            startPage = 1;
            endPage = 5;
        } else if (current + 1 >= totalPages) {
            startPage = totalPages - 4;
            endPage = totalPages;
        } else {
            startPage = current - 2;
            endPage = current + 2;
        }
    }

    // Generate page numbers to display
    for (let i = startPage; i <= endPage; i++) {
        pages.push(i)
    }


    return (
        <div className='flex gap-3 m-6'>
            <button className='flex items-center text-gray-600' onClick={() => setCurrent(current - 1)} disabled={current === 1}>
                <TiMediaPlayReverseOutline />
                <p>Prev</p>
            </button>

            {
                pages.map((page, index) => {
                    return <button key={index} onClick={() => setCurrent(page)} className={`border-[1px] text-xs border-gray-400 p-1 px-2 rounded-md text-gray-600 font-medium ${page === current && 'bg-orange-500 text-[#ffff] border-orange-500'}`}>{page}</button>
                })
            }

            <button onClick={() => setCurrent(current + 1)}
                className='flex items-center text-gray-600'
                disabled={current === totalPages}>
                <p>Next</p>
                <TiMediaPlayOutline />
            </button>
        </div>
    )
}

export default Pagination

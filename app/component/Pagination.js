import React from 'react'

const Pagination = ({totalPosts,postsPerPage,setCurrent,current}) => {

    let pages = [];

    for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++){
        pages.push(i)
    }

  return (
    <div>
      {
        pages.map((page , index)=>{
            return <button key={index} onClick={()=> setCurrent(page)}>{page}</button>
        })
      }
    </div>
  )
}

export default Pagination
import { title } from 'process'
import React from 'react'
import requests from '../utils/requests'
import {useRouter} from 'next/router'

function Nav() {
  const router = useRouter()
  return (
    <nav className="relative">
      <div className="flex px-10 sm:px-20 text-2xl 
        whitespace-nowrap overflow-scroll scrollbar-hide
        space-x-10
      ">
        {Object.entries(requests).map(([key,{title,url}])=>(
        <h2 key={key} 
        onClick={()=>{
          router.push(`/?genre=${key}`)
        }}
        className="last:pr-24 cursor-pointer transform transition : ;
        duration-100 hover:scale-125 hover:text-white
        active:text-red-500
        ">
          {title}
        </h2>
      ))}
      </div>
      <div className=' absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12'></div>
    </nav>
  )
}

export default Nav

import { Router, useRouter } from 'next/router'
import React from 'react'
function HeaderItem({title,Icon}:{title:string,Icon:(props: React.ComponentProps<'svg'>)=>JSX.Element}) {
  const router = useRouter()
  return (
    <div
    onClick={()=>{router.push(`/other?title=${title}`)}}
    className='flex flex-col items-center w-12 sm:w-20 cursor-pointer  group  hover:text-white'>
      <Icon className='h-8 mb-1 group-hover:animate-bounce'/>
      <p className='opacity-0  group-hover:opacity-100  tracking-widest'>{title}</p>
    </div>
  )
}

export default HeaderItem

import React from 'react'
function HeaderItem({title,Icon}:{title:string,Icon:(props: React.ComponentProps<'svg'>)=>JSX.Element}) {
  return (
    <div className='flex flex-col items-center w-12 sm:w-20 cursor-pointer  group  hover:text-white'>
      <Icon className='h-8 mb-1 group-hover:animate-bounce'/>
      <p className='opacity-100  group-hover:opacity-100  tracking-widest'>{title}</p>
    </div>
  )
}

export default HeaderItem

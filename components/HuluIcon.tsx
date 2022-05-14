import { useRouter } from 'next/router'
import React from 'react'

function HuluIcon() {
  const router = useRouter()
  const {title} = router.query
  console.log(title);
  return (
    <div className="cursor-pointer animate-bounce pt-3 sm:mr-5 " onClick={()=>{router.push('/')}}>
      <svg width={80} height={30} viewBox="0 0 80 30" fill="none">
        <path
          d="M49 29.708h6.37V.042H49v29.666zM37.815 21.25c0 1.042-.778 1.917-1.704 1.917h-3.704c-.925 0-1.703-.875-1.703-1.917V9.292h-6.37v12.541c0 5.125 2.925 7.834 7.222 7.834h6.222c3.963 0 6.37-3.209 6.37-7.834V9.292h-6.37c.037 0 .037 11.583.037 11.958zM73.63 9.292V21.25c0 1.042-.778 1.917-1.704 1.917h-3.704c-.926 0-1.703-.875-1.703-1.917V9.292h-6.37v12.541c0 5.125 2.925 7.834 7.221 7.834h6.223c3.963 0 6.37-3.209 6.37-7.834V9.292H73.63zm-61.037 0H8.519c-1.445 0-2.149.416-2.149.416V.042H0v29.625h6.333V17.75c0-1.042.778-1.917 1.704-1.917h3.704c.926 0 1.703.875 1.703 1.917v11.958h6.37V16.792c0-5.417-3.221-7.5-7.221-7.5z"
          fill="#1CE783"
        />
      </svg>
    </div>
  )
}

export default HuluIcon

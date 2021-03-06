import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from '../components/Header'
function other() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter()
  const { title } = router.query
  const query = router.query
  console.log(query.title);
  if (title && title === 'HOME') {
    router.push('/')
  }
  return (
    <>
      <Head>
        <title>mini Hulu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        {/* Content */}
        <div className=" min-h-[50vh] flex text-2xl justify-center font-bold  
        items-center  animate-pulse
        ">
          <h1>{title}</h1>
        </div>
        {/* Footer */}
        <footer>
          <h1 className="flex justify-center">
            Developed by 🐟SuDongYuer🐟. &nbsp;
            <a className="text-blue-400 
             animate-bounce cursor-pointer
             "
             href="https://github.com/sudongyuer/mini-hulu"
            >
              Click&nbsp;</a>
            for source codes.
          </h1>
        </footer>
      </div>
    </>
  )
}

export default other

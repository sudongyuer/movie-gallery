import React, { forwardRef, useState } from 'react'
import Image from 'next/image'
import { ThumbUpIcon } from '@heroicons/react/outline';
import MovieModal from './MovieModal';

const BASE_URL = "https://image.tmdb.org/t/p/original/";

// eslint-disable-next-line react/display-name
const Thumbnail = forwardRef<HTMLDivElement>(({ result }: any, ref) => {
  const [showSkeleton, setShowSkeleton] = useState(true);
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <>
      <div
        ref={ref}
        onClick={() => { setModalIsOpen(true) }}
        className="group cursor-pointer p-2 transition duration-300 ease-in-out
    transform sm:hover:scale-105 hover:z-1 relative
   ">
        <div className='relative'>
          {
            showSkeleton
            &&
            <div className="absolute w-full h-full bg-gray-400 opacity-5  z-10 animate-pulse rounded-3xl" />
          }
          <Image
            layout='responsive'
            className='rounded-3xl'
            placeholder="empty"
            src={
              `${BASE_URL}${result.backdrop_path || result.poster_path}`
              ||
              `${BASE_URL}${result.poster_path}`
            }
            width={1920}
            height={1080}
            onLoadingComplete={() => setShowSkeleton(false)}
          />
        </div>
        <div>
          <p className="p-2 truncate max-w-md">
            {result.overview}
          </p>
          <h2 className="mt-1 text-2xl text-white transition-all duration-100
       ease-in-out  group-hover:font-bold
       ">
            {result.title || result.original_title}
          </h2>
          <p className='flex items-center opacity-0 group-hover:opacity-100'>
            {result.media_type && `${result.media_type} •`}{" "}
            {result.release_date || result.first_air_date} •{" "}
            <ThumbUpIcon className='h-5 mx-2' />{result.vote_count}
          </p>
        </div>
      </div>
      {/* Modal */}
      <MovieModal
        result={result}
        isOpen={modalIsOpen}
        portalClassName="modal"
        setModalIsOpen={setModalIsOpen}
      />
    </>
  );
});
export default Thumbnail

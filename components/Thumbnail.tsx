import React, { forwardRef } from 'react'
import Image from 'next/image'
import { ThumbUpIcon } from '@heroicons/react/outline';
type result = {
  "adult": boolean,
  "backdrop_path": string,
  "genre_ids":number[],
  "id": number,
  "original_language": string,
  "original_title": string,
  "overview":string,
  "popularity": number,
  "poster_path":string,
  "release_date":string,
  "title": string,
  "video": boolean,
  "vote_average": number,
  "vote_count": number
}
const BASE_URL = "https://image.tmdb.org/t/p/original/";

// eslint-disable-next-line react/display-name
const Thumbnail=forwardRef<HTMLDivElement>(({ result }:any, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div 
    ref={ref}
    className="group cursor-pointer p-2 transition duration-100 ease-in-out
    transform sm:hover:scale-105 hover:z-50
   ">
     <Image 
     layout='responsive'
     src={
       `${BASE_URL}${result.backdrop_path || result.poster_path}`
       ||
       `${BASE_URL}${result.poster_path}`
     }
     width={1920}
     height={1080}
     />
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
         <ThumbUpIcon className='h-5 mx-2'/>{result.vote_count}
       </p>
     </div>
   </div>
  );
});
export default Thumbnail

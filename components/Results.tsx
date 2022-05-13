import React from 'react'
import Thumbnail from './Thumbnail';
import FlipMove from 'react-flip-move';
export type resultsArray= {
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
}[]

function Results({results}:{results:resultsArray}) {
  console.log(results);
  return (
    <FlipMove
    className="px-5 my-10 sm:grid 
    md:grid-cols-2 xl:grid-cols-3 3xl:flex
     justify-center flex-wrap
    "
    >
      {results?.map(result=>(
        <Thumbnail key={result.id} result={result}/>
      ))}
    </FlipMove>
  )
}

export default Results

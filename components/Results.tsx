import React from 'react'
import Thumbnail from './Thumbnail';
import FlipMove from 'react-flip-move';
import { resultsArray } from '../types';

function Results({results}:{results:resultsArray}) {
  console.log(results);
  return (
    <FlipMove
    enterAnimation="accordionVertical"
    leaveAnimation="fade"
    duration={300}
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

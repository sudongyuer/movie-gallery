import React, { useState } from 'react'
import Thumbnail from './Thumbnail';
import FlipMove from 'react-flip-move';
import { resultsArray } from '../types';
import MovieModal from './MovieModal';

function Results({results}:{results:resultsArray}) {
  console.log(results);
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [currentResult, setCurrentResult] = useState(null)
  return (
    <>
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
        <Thumbnail key={result.id} setModalIsOpen={setModalIsOpen} result={result} setCurrentResult={setCurrentResult}/>
      ))}
    </FlipMove>
      {/* Modal */}
      {
        currentResult ?
        (
        <MovieModal
        result={currentResult}
        isOpen={modalIsOpen}
        portalClassName="modal"
        setModalIsOpen={setModalIsOpen}
      />):null
      }
      </>
  )
}

export default Results

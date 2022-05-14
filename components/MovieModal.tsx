import React from 'react'
import { result } from '../types'
import Modal from "react-modal"
import { CalendarIcon ,StarIcon ,HeartIcon} from "@heroicons/react/solid"
type propsType = {
  result: result,
  isOpen: boolean,
  portalClassName: string,
  setModalIsOpen: Function
}

function MovieModal({ result, isOpen, portalClassName, setModalIsOpen }: propsType) {
  return (
    <Modal
      isOpen={isOpen}
      portalClassName="modal"
      onRequestClose={() => setModalIsOpen(false)}
    >
      <h3>{result.name || result.original_title || result.title}</h3>
      <div className="viewer-count">
        <p>
          {/* <Date /> */}
          <CalendarIcon className="h-5 text-gary-500" />
          &nbsp;<span>{result.release_date || result.first_air_date}</span>
        </p>
        <p>
          {/* <Star /> */}
          <StarIcon className="h-5  text-yellow-500" />
          &nbsp;<span>{result.vote_average}</span>
        </p>
        <p>
          {/* <Like /> */}
          <HeartIcon className="h-5 text-red-500" />

          &nbsp;<span>{result.vote_count}</span>
        </p>
      </div>{" "}
      <p>
        <span>{result.overview}</span>
      </p>
    </Modal>
  )
}

export default MovieModal

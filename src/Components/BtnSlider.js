import React from 'react'
import './Graphic-Design.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons'

export default function BtnSlider({direction, moveSlide}) {
    console.log(direction, moveSlide);
  return (
        <button 
        onClick={moveSlide}
        className={direction === "next" ? 'btn-slide next' : "btn-slide prev"}>

            <FontAwesomeIcon icon={direction === "next" ? faArrowRight : faArrowLeft}  />
          

        </button>
        
  )
}

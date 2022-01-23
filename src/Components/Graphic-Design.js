import React , {useState} from "react";
import './Graphic-Design.css'
import BtnSlider from './BtnSlider'
import dataSlider from "./dataSlider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

function Graphic_Design(){

    const [slideIndex, setSlideIndex] = useState(1);

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } else if(slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        } else if(slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div class="Container">
            <div class="Inner_container">
                <div class="graphicDesignH1">
                    <h1 data-aos="fade-up" data-aos-duration="1000">
                        Graphic Design
                    </h1>
                    <hr data-aos="fade-up" data-aos-duration="2000" />
                    <h3>Here is some of my graphic design I did as a freelancer...</h3>
                    </div>
                <div data-aos="fade-in" data-aos-duration="4000" class="GraphicDesignContainer">

                    {dataSlider.map((obj, index) => {
                        return (
                            <div 
                            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
                                <img
                                    src={process.env.PUBLIC_URL + `/Imgs/GraphicDesign${index + 1}.jpg`}  
                                />
                            </div>
                        )

                    })} 
                    <BtnSlider moveSlide={nextSlide} direction={"next"} />
                    <BtnSlider moveSlide={prevSlide} direction={"prev"} />
                <div className="container-dots">
                    {Array.from({length: 5}).map((item, index) => (
                        <div 
                        onClick={() => moveDot(index + 1)}
                        className={slideIndex === index + 1 ? "dot active" : "dot"}>

                        </div>
                    ))}

                </div>
                </div>
                <div class="myGraphicDesignInsta">
                <h3 >check out more at my instagram page: <a href="https://www.instagram.com/graphic.designer.2019/" target="_blank"> <FontAwesomeIcon icon={faInstagram} /> </a></h3>
                </div>
            </div>
        </div>
    )
}

export default Graphic_Design;
import React, { useEffect, useState } from "react";
import './AboutMe.css';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css';
import Aos from "aos";
import "aos/dist/aos.css";



const AboutMe = () => {
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])
    return (
        <div class="AboutMe_Container">
            <div class="AboutMe_Container">
                <div class="Inner_container">
                    <div data-aos="fade-up" data-aos-anchor-placement="top-center" class="AboutMe" id="AboutMe">
                        <h1>Hi, I’m Moe. Nice to meet you.</h1>
                        <h2>I'm a Front-end Developer/Designer with well-developed interpersonal skills and technical
expertise to engage with consumers and promote products/services through e-commerce, content web
marketing and social media. A self-driven and motivated professional hoping to expand consumer base by
capturing audience's attention, increasing brand awareness through digital design and executing
marketing/communication plans through digital platforms. Constantly learning new technologies and
softwares and developing customized websites to deliver digital communication objectives.</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;
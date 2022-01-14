import React, { useState } from "react";
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import Menu from './Menu'


function navebar() {

    return (
        <div class="container">
            <div class="Main_Navbar">
                <div class="Navbar">
                    <img src={require('../Images/Logo2.png')} height={100} width={100} />
                    <div class="social_media_icons">
                        <a href="https://www.facebook.com/MohameedSA/" target="_blank"><span class="social_media_icon"><FontAwesomeIcon icon={faFacebook} /></span></a>
                        <a href="https://www.linkedin.com/in/mo-saleh-5aa4a9113/" target="_blank"><span class="social_media_icon"><FontAwesomeIcon icon={faLinkedin} /></span></a>
                        <a href="https://www.instagram.com/moham3d_96/" target="_blank"><span class="social_media_icon"><FontAwesomeIcon icon={faInstagram} /></span></a>
                    </div>
                    <a href="#Projects"><button>
                        Projects
                    </button></a> 
                    <a href="#Experience">
                        Experience
                    </a>
                    
                </div>
                <Menu />
            </div>

        </div>
    )
}
export default navebar;
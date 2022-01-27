import react from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons' 
import {faArrowUp} from '@fortawesome/free-solid-svg-icons'

function Footer(){
    return (
        <div class="Footer-container">
            <div class="Inner_container">
                <div class="Footer">
                <img data-aos="fade-in" data-aos-duration="3000" src={require('../Images/Logo-white.png')} height={100} width={100} /> 
                <h2 data-aos="fade-in" data-aos-duration="3000">Living, learning, & leveling up  <br/>one day at a time.</h2>
                <div data-aos="fade-in" data-aos-duration="3000" class="social_media_icons_footer">
                    <a href="https://www.facebook.com/MohameedSA/" target="_blank"><span class="social_media_icon_footer"><FontAwesomeIcon icon={faFacebook} /></span></a>
                    <a href="https://www.linkedin.com/in/mo-saleh-5aa4a9113/" target="_blank"><span class="social_media_icon_footer"><FontAwesomeIcon icon={faLinkedin} /></span></a>
                    <a href="https://www.instagram.com/moham3d_96/" target="_blank"><span class="social_media_icon_footer"><FontAwesomeIcon icon={faInstagram} /></span></a>
                    </div>
                    <br/><br/><br/>
                    <b data-aos="fade-in" data-aos-duration="3000">This website is made by me &copy; 2022</b><br/><br/>
                    <b data-aos="fade-in" data-aos-duration="3000">Made with REACT. </b> <img data-aos="fade-in" data-aos-duration="1000" src={require('../Images/React.png')} height={30} width={35} /> <b data-aos="fade-in" data-aos-duration="1000"> All Rights Reserved.</b>
                <br/><br/><br/><br/><br/><br/>
                <a class="Backtop" href='#'><FontAwesomeIcon  icon={faArrowUp} /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;
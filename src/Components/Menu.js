import React, { useState } from "react";
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faBars, faWindowClose } from '@fortawesome/free-solid-svg-icons'

function Navagation() {
    const [showMenu, setShowMenu] = useState(false)

    let Mainmenu;


    if (showMenu) {
        return Mainmenu =
            <div className="Mainmenu_opened">
                <div className="closeMenu">
                <FontAwesomeIcon icon={faWindowClose} style={{fontSize: "30px"}} onClick={() => setShowMenu(false)} />
                </div>
                <a data-aos="fade-up" data-aos-duration="2000" href="#Projects"><button>
                    Projects
                </button></a> <br /><br />
                <a data-aos="fade-up" data-aos-duration="2000" href="#Experience">
                Experience
                </a>

            </div>;
    }

    return (
        <div class="Container">
            <div class="MobileMenu">
                <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)} />

            </div>
        </div>

    )

}

export default Navagation;
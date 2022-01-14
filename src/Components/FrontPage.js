import react from "react";
import './FrontPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowDown} from '@fortawesome/free-solid-svg-icons'



function FrontPage() {
    return (
        <div class="Container">
            <div class="Inner_container">
                <div class="Front_Page">
                    <b class="Front_Page_intro">Front-end Developer & Designer <br /> </b><br />
                    <b>I design and code beautifully simple things, and I love what I do.
                    </b> 
                    <br/>
                    <img src={require('../Images/Moe-Saleh.png')} height={200} width={200} />
                    <br/>
                    <a href="#AboutMe"><button> About Me <span class="rotate"><FontAwesomeIcon icon={faArrowDown} /></span> </button></a>
                </div>
            </div>
        </div>
    )
}

export default FrontPage;
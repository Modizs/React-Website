import React from "react";
import './Skills.css';



function Skills() {
    return (
        <div class="Container">
            <div class="Inner_container">
                <div class="Skills" id="Skills">
                    <div class="Skills_Icons">
                        <div>
                    <img data-aos="flip-left" data-aos-duration="1000" src={require('../Images/Fast.png')} height={200} width={200} />
                    <h1 data-aos="fade" data-aos-duration="1000">Fast</h1>
                    <b data-aos="fade-right" data-aos-duration="1000"> Having a website that has fast load times and lag free interaction is my highest priority </b><br/><br/><br/>
                        </div>
                        <div>
                    <img data-aos="flip-left" data-aos-duration="2000" src={require('../Images/Responsive.png')} height={200} width={200} />
                    <h1 data-aos="fade" data-aos-duration="2000">Responsive</h1>
                    <b data-aos="fade-right" data-aos-duration="2000"> My layout will be perfect on every device there is.</b><br/><br/><br/>
                    </div>
                    <div>

                    <img data-aos="flip-left" data-aos-duration="3000" src={require('../Images/Dynamic.png')} height={200} width={200} />
                    <h1 data-aos="fade" data-aos-duration="3000">Dynamic</h1>
                    <b data-aos="fade-right" data-aos-duration="3000"> Websites don't have to be static, I love making pages come to life.</b><br/><br/><br/>
                    </div>

                </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;
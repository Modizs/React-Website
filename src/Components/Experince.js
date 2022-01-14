import React from "react";
import './Experince.css';
import ProgressBar from './ProgressBar'


function Experince() {
    return (
        <div class="Container">
            <div class="Inner_container">
                <div class="Experince" id="Experience">
                    <h1 data-aos="fade-up" data-aos-duration="1000"> Experience </h1>
                    <hr data-aos="fade-up" data-aos-duration="2000" />
                    <div class="Experince_container">
                    <div>
                        <h2 data-aos="zoom-in-right" data-aos-duration="1000">Web Developer/Marketing Manager </h2><br />
                        <b data-aos="zoom-in-right" data-aos-duration="2000"><span class="Company"> The Renosuperstore </span>
                            <br />January 2020 to Present<br />
                            <span class="Company"><br />The lead developer in the company<br /></span></b>
                        <b class="work_experince">
                            <ul>
                                <li data-aos="fade-in" data-aos-duration="1000">Maintained the website by solving any errors that occur.</li>
                                <li data-aos="fade-in" data-aos-duration="1500">Added features in the website that was needed to enhance and simplify the purchase process</li>
                                <li data-aos="fade-in" data-aos-duration="2000">Worked on the website through e commerce by adding products into the website</li>
                                <li data-aos="fade-in" data-aos-duration="2500">Created graphics for the website</li>
                                <li data-aos="fade-in" data-aos-duration="3000">Worked on the SEO and marketing for the website</li>
                            </ul>
                        </b>
                        <h2 data-aos="zoom-in-right" data-aos-duration="1000">Web Designer</h2> <br />
                        <b data-aos="zoom-in-right" data-aos-duration="5000"><span class="Company"> Enceladus </span>
                            <br />January 2017 to September 2017<br />
                            <span class="Company"><br />Initiated modern web development for Enceladus by<br /></span></b>
                        <b class="work_experince">
                            <ul>
                                <li data-aos="fade-in" data-aos-duration="1000"> utilizing UI graphics, HTML, CSS,
                                    Responsive Design and Javascript to promote the sale of graphic design tools and services</li>
                                <li data-aos="fade-in" data-aos-duration="1500">Generated online customer traffic through user-friendly website which targeted e-commerce, digital
                                    marketing and sales demographics</li>
                                <li data-aos="fade-in" data-aos-duration="2000">Collaborated with Designers, support staff, management, executives and organizational
                                    stakeholders to generate content ideas, marketing strategies and designs; communicated complex
                                    technical concepts of web design and implementation of digital marketing techniques</li>
                                <li data-aos="fade-in" data-aos-duration="2500">Creatively recommended and implemented innovative personal web designs to attract customer
                                    growth and sales</li>
                            </ul>
                        </b>
                    </div>
                    <div>
                        <img data-aos="zoom-in" data-aos-duration="2000" src={require('../Images/Coding.png')} height={300} width={300} />
                        <div data-aos="zoom-in" data-aos-duration="2000"><ProgressBar  /></div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Experince;
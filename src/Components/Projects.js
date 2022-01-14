import React from "react";
import './Projects.css'

function Projects() {
    return (
        <div class="Container">
            <div class="Inner_container">
                <div class="Projects" id="Projects">
                    <h1 data-aos="fade-up" data-aos-duration="1000"> Projects </h1>
                    <hr data-aos="fade-up" data-aos-duration="2000" />
                    <h2 data-aos="fade-in" data-aos-duration="1000">Here is some of my recent work...</h2>

                                <a href="https://github.com/Modizs/EECS4413-work/blob/master/FinalProjectBookStore.war" target="_blank"><div data-aos="zoom-in-right" data-aos-duration="1000" class="container1">
                                    <img src={require('../Images/BookStoreWebsite.png')} height={300} width={500} class="BookStore" />
                                    <div class="overlay1">
                                        <div class="text"> <h3>Book Store Website</h3>
                                            <b>Made using java, HTML, CSS, and JavaScript for my final project</b> </div>
                                    </div>
                                </div> </a>


                                <a href="https://github.com/Modizs/Car-follows-light" target="_blank"><div data-aos="zoom-in" data-aos-duration="2000" class="container2">
                                    <img class="CarFollowsLight" src={require('../Images/CarFollowslight.png')} height={300} width={500} />
                                    <div class="overlay2">
                                        <div class="text"><h3>Car Follows Light</h3>
                                            <b>Made using C++</b></div>
                                    </div>
                                </div> </a>


                                <a href="https://github.com/Modizs/Responsive-webpage" target="_blank"><div data-aos="zoom-in-left" data-aos-duration="1000" class="container3">
                                    <img class="ResponsivePage" src={require('../Images/FullyResponsivePage.png')} height={300} width={500} />
                                    <div class="overlay3">
                                        <div class="text"><h3>Fully Responsive Page</h3>
                                            <b>Made using HTML and CSS</b> </div>
                                    </div>
                                </div> </a>


                    <h3 data-aos="fade-in" data-aos-duration="1000">You can find out more information and see more of my project on my github: &nbsp;
                        <a href="https://github.com/Modizs" target="_blank">https://github.com/Modizs</a> <br /></h3>
                    <b data-aos="fade-in" data-aos-duration="1000">This website was completely made by me using <span class="Company">REACT</span></b>
                    <br /><br /><br /><br /><br /><br /><br /><br />
                    <div class="Contact-me">
                        <h2 data-aos="fade-in" data-aos-duration="3000">Please shoot me an email if you have any questions.</h2>
                        <a data-aos="fade-in" data-aos-duration="3000" href="mailto:modi-z-96@live.com"><button>Email me</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;
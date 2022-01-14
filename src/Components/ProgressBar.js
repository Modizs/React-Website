import React from "react";
import '../Components/ProgressBar.css'
import './AppearOnScroll'


function ProgressBar() {
    return (
        <div class="Container">
            <div class="Inner_container">
        <div class="Progressbar">
            <div class="Bar">
                <b class="percentage"> 90% </b>
                <div class="HTML">
                    <b class="BarText">HTML</b>
                </div>
            </div>
            <div class="Bar">
                <b class="percentage"> 90% </b>
                <div class="CSS">
                    <b class="BarText">CSS</b>
                </div>
            </div>
            <div class="Bar">
                <b class="percentage"> 70% </b>
                <div class="JavaScript">
                    <b class="BarText">JavaScript</b>
                </div>
            </div>
            <div class="Bar">
                <b class="percentage"> 70% </b>
                <div class="React">
                    <b class="BarText">React</b>
                </div>
            </div>
            <div class="Bar">
                <b class="percentage"> 75% </b>
                <div class="UI-Design">
                <b class="BarText">UI-Design</b>

                </div>
            </div>
            <div class="Bar">
                <b class="percentage"> 90% </b>
                <div class="Photoshop">
                    <b class="BarText">Photoshop</b>
                </div>
            </div>
        </div>
        </div>
        </div>
  
    )
}
export default ProgressBar;


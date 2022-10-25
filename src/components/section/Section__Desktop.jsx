import React from 'react';
import SectionStyles__Desktop from './SectionStyles__Desktop.scss';
import fondo from "../videos/fondo1.mp4";
import profileImg from "../images/profileImg.png"

const SectionDesktop = () => {
    return (
        <div className='vid'>
            <div className="overlay">
            </div>
            <div className="texto">
                <div className='textBox'>
                    <h1>Hi!</h1>
                    <h4>My name is</h4> 
                    <h2>Matías Reyes,</h2>
                    <h3>I´m a Full-Stack developer</h3> 
                    <h4>actually studing to become a  </h4>
                    <h3>TIC Engineer!</h3>
                </div> <span className='cursor'></span>
                <img src={profileImg} alt="Profile Image" />
            </div>
            <video src={fondo} autoPlay loop muted/>
        </div>
    );
}

export default SectionDesktop;
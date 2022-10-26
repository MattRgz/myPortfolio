import React from 'react';
import HeaderStyles__Desktop from './HeaderStyles__Desktop.scss';
import fondo from "../videos/fondo1.mp4";
import profileImg from "../images/profileImg.png"

const HeaderDesktop = () => {
    return (
        <div className='vid' id='homeId'>
            <div className="overlay">
            </div>
            <div className="texto">
                <div className='textBox'>
                    <h1>Hi!</h1>
                    <h4>My name is</h4> 
                    <h2>Matías Reyes,</h2>
                    <h3>I´m a Full-Stack developer</h3> 
                    <h4>currently studing to become a  </h4>
                    <h3>TIC Engineer!</h3>
                </div> <span className='cursor'></span>
                <img src={profileImg} alt="Profile Image" />
            </div>
            <video className='videoDesktop' src={fondo} autoPlay loop muted/>
        </div>
    );
}

export default HeaderDesktop;
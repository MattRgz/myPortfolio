import React from 'react';
import HeaderStyles__Desktop from './HeaderStyles__Desktop.scss';
import fondo from "../../assets/videos/fondo1.mp4";
import profileImg from "../../assets/images/profileImg.png";

const HeaderDesktop = () => {
    return (
        <div className='vid'>
            <div className="overlay">
            </div>
            <div className="texto">
                <div className='textBox'>
                    <h1 className='firstText'>Hi!</h1>
                    <h4 className='secondText'>My name is</h4> 
                    <h2 className='thirdText'>Matías Reyes,</h2>
                    <h3 className='fourText'>I´m a Full-Stack developer</h3> 
                    <h4 className='fiveText'>currently studing to become a  </h4>
                    <h3 className='sixtText'>TIC Engineer!</h3>
                </div> <span className='cursor'></span>
                <img src={profileImg} alt="Profile Image" />
            </div>
            <video className='videoDesktop' src={fondo} autoPlay loop muted/>
        </div>
    );
}

export default HeaderDesktop;
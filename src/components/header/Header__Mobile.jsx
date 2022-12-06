import React from 'react';
import HeaderStyles__Mobile from './HeaderStyles__Mobile.scss';
import fondo from "../../assets/videos/fondo1.mp4";
import profileImg from "../../assets/images/profileImg.png"

const HeaderMobile = () => {
    return (
        <div className='vid'>
            <div className="overlayMobile"></div>
            <div className="textoMobile">
                <div className='textBoxMobile'>
                    <img className='imgMobile' src={profileImg} alt="Profile Image" />
                    <h1>Hi!</h1>
                    <h4>My name is</h4> 
                    <h2>Matías Reyes,</h2>
                    <h3>I´m a Full-Stack developer</h3> 
                    <h4>currently studing to become a  </h4>
                    <h3>TIC Engineer!</h3>
                </div>
            </div>
        </div>
    );
}

export default HeaderMobile;

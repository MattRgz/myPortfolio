import React from 'react';
import SectionStyles__Desktop from './SectionStyles__Desktop.scss';
import fondo from "../videos/fondo.mp4";

const SectionDesktop = () => {
    return (
        <div className='vid'>
            <video autoPlay muted loop id="myVideo">
                <source src="../videos/fondo.mp4" type="video/mp4" />
            </video>
        </div>
    );
}

export default SectionDesktop;
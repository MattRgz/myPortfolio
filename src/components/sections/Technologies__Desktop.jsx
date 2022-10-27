import React from 'react';
import TechnologiesStyles__Desktop from "./TechnologiesStyles__Desktop.scss";
import reactIcon from "../images/reactIcon.png";
import expressIcon from "../images/expressIcon.png"
import mongoDBIcon from "../images/mongoDBIcon.png";
import nodeJsIcon from "../images/nodeJsIcon.png";
import pythonIcon from "../images/pythonIcon.png";
import pNetIcon from "../images/pNetIcon.png";
import { useInView  } from "react-intersection-observer";

const TechnologiesDesktop = () => {
    const {ref: firstMainText, inView: firstMainTextonView} = useInView();
    const {ref: secondMainText, inView: secondMainTextonView} = useInView();
    const {ref: firstTechnologiesCardContainer, inView: firstTechnologiesCardContainerOnView} = useInView();
    const {ref: secondTechnologiesCardContainer, inView: secondTechnologiesCardContainerOnView} = useInView();
    return (
        <div className='TechnologiesContainer'>
            <div ref={firstMainText} className={`${"TechnologiesMainText"} ${firstMainTextonView?"entryFromUp":""}`}>
                <h4>Technologies that I feel really comfortable:</h4>
            </div>
            <div ref={firstTechnologiesCardContainer} className={`${"TechnologiesCardContainer"} ${firstTechnologiesCardContainerOnView?"entryFromDown":""}`}>
                <div className='TechnologiesCard'>
                    <div className="cardLogoContainer">
                        <img src={mongoDBIcon} alt="MongoDB Logo" />
                    </div>
                </div>
                <div className='TechnologiesCard'>
                    <div className="cardLogoContainer" style={{alignItems:"center"}}>
                        <img src={expressIcon} alt="Express Logo" />
                    </div>
                </div>
                <div className='TechnologiesCard'>
                    <div className="cardLogoContainer">
                        <img src={reactIcon} alt="React Logo" />
                    </div>
                </div>
                <div className='TechnologiesCard'>
                    <div className='cardLogoContainer'>
                        <img src={nodeJsIcon} alt="NodeJs Logo" />
                    </div>
                </div>
            </div>
            <div ref={secondMainText} className={`${"TechnologiesMainText"} ${secondMainTextonView?"entryFromUp":""}`}>
                <h4>Some technologies that I also handle:</h4>
            </div>
            <div ref={secondTechnologiesCardContainer} className={`${"TechnologiesCardContainer"} ${secondTechnologiesCardContainerOnView?"entryFromDown":""}`}>
                <div className='TechnologiesCard'>
                    <div className="cardLogoContainer" style={{scale:"2"}}>
                        <img src={pythonIcon} alt="Python Logo"/>
                    </div>
                </div>
                <div className='TechnologiesCard'>
                    <div className="cardLogoContainer" style={{alignItems:"center"}}>
                        <img src={pNetIcon} alt=".NET Logo" style={{borderRadius:"500px"}}/>
                    </div>
                </div>
            </div>
        </div>
        
            
    );
}

export default TechnologiesDesktop;

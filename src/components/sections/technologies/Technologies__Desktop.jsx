import React from 'react';
import TechnologiesStyles__Desktop from "./TechnologiesStyles__Desktop.scss";
import reactIcon from "../../../assets/images/reactIcon.png";
import expressIcon from "../../../assets/images/expressIcon.png"
import mongoDBIcon from "../../../assets/images/mongoDBIcon.png";
import nodeJsIcon from "../../../assets/images/nodeJsIcon.png";
import pythonIcon from "../../../assets/images/pythonIcon.png";
import pNetIcon from "../../../assets/images/pNetIcon.png";
import { useInView  } from "react-intersection-observer";
import ThreeScene from "../../ThreeComponents/ThreeScene.js"

const TechnologiesDesktop = () => {
    return (
        <div style={{width:"100%", height:"100vh", display:"flex", justifyContent:"space-evenly", alignContent:"center"}}>
            <div style={{display:"flex", justifyContent:"center", alignContent:"center"}}>
                <p >Esto sera una tarjeta</p>
            </div>
            <div style={{width:"40vw", height:"70vh", cursor:"pointer"}}>
                TENGO QUE REFINAR LA ESFERA PQ QUEDO COMO HUEVO XD
                <ThreeScene/>
            </div>
        </div>
    );
}

export default TechnologiesDesktop;

    // const {ref: firstMainText, inView: firstMainTextonView} = useInView();
    // const {ref: secondMainText, inView: secondMainTextonView} = useInView();
    // const {ref: firstTechnologiesCardContainer, inView: firstTechnologiesCardContainerOnView} = useInView();
    // const {ref: secondTechnologiesCardContainer, inView: secondTechnologiesCardContainerOnView} = useInView();
    // return (
    //     <div className='TechnologiesContainer'>
    //         <div ref={firstMainText} className={`${"TechnologiesMainText"} ${firstMainTextonView?"entryFromUp":""}`}>
    //             <h4>Technologies I perform my best with:</h4>
    //         </div>
    //         <div ref={firstTechnologiesCardContainer} className={`${"TechnologiesCardContainer"} ${firstTechnologiesCardContainerOnView?"entryFromDown":""}`}>
    //             <div className='TechnologiesCard'>
    //                 <div className="cardLogoContainer">
    //                     <img src={mongoDBIcon} alt="MongoDB Logo" />
    //                 </div>
    //             </div>
    //             <div className='TechnologiesCard'>
    //                 <div className="cardLogoContainer" style={{alignItems:"center"}}>
    //                     <img src={expressIcon} alt="Express Logo" />
    //                 </div>
    //             </div>
    //             <div className='TechnologiesCard'>
    //                 <div className="cardLogoContainer">
    //                     <img src={reactIcon} alt="React Logo" />
    //                 </div>
    //             </div>
    //             <div className='TechnologiesCard'>
    //                 <div className='cardLogoContainer'>
    //                     <img src={nodeJsIcon} alt="NodeJs Logo" />
    //                 </div>
    //             </div>
    //         </div>
    //         <div ref={secondMainText} className={`${"TechnologiesMainText"} ${secondMainTextonView?"entryFromUp":""}`}>
    //             <h4>Some technologies that I also handle:</h4>
    //         </div>
    //         <div ref={secondTechnologiesCardContainer} className={`${"TechnologiesCardContainer"} ${secondTechnologiesCardContainerOnView?"entryFromDown":""}`}>
    //             <div className='TechnologiesCard'>
    //                 <div className="cardLogoContainer" style={{scale:"2"}}>
    //                     <img src={pythonIcon} alt="Python Logo"/>
    //                 </div>
    //             </div>
    //             <div className='TechnologiesCard'>
    //                 <div className="cardLogoContainer" style={{alignItems:"center"}}>
    //                     <img src={pNetIcon} alt=".NET Logo" style={{borderRadius:"500px"}}/>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
        
            
//     );
// }

// export default TechnologiesDesktop;

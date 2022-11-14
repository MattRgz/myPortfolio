import React from 'react';
import TechnologiesStyles__Desktop from "./TechnologiesStyles__Desktop.scss";
import { useInView  } from "react-intersection-observer";
import ThreeScene from "../../ThreeComponents/ThreeScene.js"

const TechnologiesDesktop = () => {
    const {ref: techText, inView: inViewTechText} = useInView();
    const {ref: techCarrousel, inView: inViewTechCarrousel} = useInView();
    return (
        <div className='techContainer'>
            <div className="techText">
                <div>
                    <div ref={techText} className={inViewTechText?`entryFromUp`:``} style={{textAlign:"justify",lineHeight:"30px",marginBottom:"15px"}}>
                        <h1> I feel really confident working with MERN, </h1>
                        <h3> however I'm always searching for some new technologies to learn. </h3>
                    </div>
                    <div  style={{textAlign:"justify",lineHeight:"30px"}}>
                        <h1> Currently I really enjoy making frontend design & development.</h1>
                        <h3> but I also have knowledge working with backend. </h3>
                    </div>
                </div>
            </div>
            <div ref={techCarrousel} className={`${"techViewport"} ${inViewTechCarrousel?`entryFromBottom`:``}`}>
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

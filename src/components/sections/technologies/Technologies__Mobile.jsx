import React from 'react';
import TechnologiesStyles__Mobile from "./TechnologiesStyles__Mobile.scss";
import { useInView  } from "react-intersection-observer";
import ThreeScene from "../../ThreeComponents/ThreeScene.js"

const TechnologiesMobile = () => {
    const {ref: techText, inView: inViewTechText} = useInView();
    const {ref: techCarrousel, inView: inViewTechCarrousel} = useInView();
    return (
        <div className='techContainerMobile'>
            <div className="techTextMobile">
                <div>
                    <div ref={techText} className={inViewTechText} style={{textAlign:"justify",lineHeight:"30px",marginBottom:"15px"}}>
                        <h1> I feel really confident working with MERN, </h1>
                        <h3> however I'm always searching for some new technologies to learn. </h3>
                    </div>
                    <div  style={{textAlign:"justify",lineHeight:"30px"}}>
                        <h1> Currently I really enjoy making frontend design & development.</h1>
                        <h3> but I also have knowledge working with backend. </h3>
                    </div>
                </div>
            </div>
            <div ref={techCarrousel} className={`${"techViewportMobile"}`}>
                <span className='whiteBackground'></span>
                <ThreeScene/>
            </div>
        </div>
    );
}
export default TechnologiesMobile;

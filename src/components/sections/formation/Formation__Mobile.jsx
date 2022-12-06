import React from 'react';
import FormationStyles__Mobile from "./FormationStyles__Mobile.scss";
import codingDojoCertificate from "../../../assets/codingDojoCertificate.pdf";
import CurseraPython4EverybodyCertificate from "../../../assets/CurseraPython4Everybody.pdf";
import sanSebastianUniversityLogo from "../../../assets/images/USS.png";
import { useInView  } from "react-intersection-observer";

const FormationMobile = () => {
    const {ref: titleMobile, inView: inViewTitleMobile} = useInView();
    const {ref: firstCardMobile, inView: inViewFirstCardMobile} = useInView();
    const {ref: secondCardMobile, inView: inViewSecondCardMobile} = useInView();
    const {ref: thirdCardMobile, inView: inViewThirdCardMobile} = useInView();
    const {ref: fourthCardMobile, inView: inViewFourthCardMobile} = useInView();
    return (
        <div className='FormationContainerMobile'>
            <div ref={titleMobile} className={`${"FormationMainTextMobile"} ${inViewTitleMobile?'formationTitleOnViewMobile':''}`}>
                <h1> Things which I'm very proud of! 📑 </h1>
            </div>
            <div className="formationCardsContainerMobile">
                <div ref={firstCardMobile} className={`${"formationCardsMobile"} ${inViewFirstCardMobile?'formationCardOneOnViewMobile':''}`}>
                    <h2 className='cardTitleMobile'>
                        Coding Dojo Certificate
                    </h2>
                    <h4 className='cardSubtitleMobile'>
                        Certificated at Coding Dojo LATAM, in MERN Full-Stack BootCamp. Where I built an individual project as well as a groupal one.
                    </h4>
                    <div className='iFrameContainerMobile'>
                        <a href={codingDojoCertificate}>
                            <span className='iFrameHoverLink'>
                            </span>
                        </a>
                        <iframe src={codingDojoCertificate} frameborder="0"  title="Matías Reyes Coding Dojo Certificate" allowfullscreen="true" height="220.5" width="284.5"></iframe>
                    </div>
                </div>
                <div ref={secondCardMobile} className={`${"formationCardsMobile"} ${inViewSecondCardMobile?'formationCardTwoOnViewMobile':''}`}>
                    <h2 className='cardTitleMobile'>
                        Python 4 Everyone Certificate
                    </h2>
                    <h4 className='cardSubtitleMobile'>
                        Certificated by Coursera at University of Michigan, in "Getting Starting with Python" course. Currently I'm improving my skills on my own.
                    </h4>
                    <div className='iFrameContainerMobile'>
                        <iframe src={CurseraPython4EverybodyCertificate} frameborder="0"  title="Matías Reyes Basic Python Certificate" allowfullscreen="true" height="220.5" width="284.5"></iframe>
                    </div>
                </div>
                <div ref={thirdCardMobile} className={`${"formationCardsMobile"} ${inViewThirdCardMobile?'formationCardThreeOnViewMobile':''}`}>
                    <h2 className='cardTitleMobile'>
                        Ending TIC Engineering at USS.
                    </h2>
                    <h4 className='cardSubtitleMobile'>
                        Currently, I'm studying at San Sebastian University. Where I'm finishing the last year of my TIC Engineer degree.
                    </h4>
                    <div className='iFrameContainerMobile'>
                        <img src={sanSebastianUniversityLogo} alt="Universidad San Sebastian Logo" height="220.5" width="284.5"/>
                    </div>
                    <div ref={fourthCardMobile} className={`${"FormationEndTextContainer"} ${inViewFourthCardMobile?'formationEndtextOnView':''}`}>
                        <h4> 🤓 I considerate myself a self-taught person, reason why I'm constantly improving my knowledgments in some React libraries, and Frontend tips. 🤓 </h4>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default FormationMobile;

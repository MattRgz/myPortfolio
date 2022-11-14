import React from 'react';
import FormationStyles__Desktop from "./FormationStyles__Desktop.scss";
import codingDojoCertificate from "../../../assets/codingDojoCertificate.pdf";
import CurseraPython4EverybodyCertificate from "../../../assets/CurseraPython4Everybody.pdf";
import sanSebastianUniversityLogo from "../../../assets/images/USS.png";
import { useInView  } from "react-intersection-observer";

const FormationDesktop = () => {
    const {ref: title, inView: inViewTitle} = useInView();
    const {ref: firstCard, inView: inViewFirstCard} = useInView();
    const {ref: secondCard, inView: inViewSecondCard} = useInView();
    const {ref: thirdCard, inView: inViewThirdCard} = useInView();
    const {ref: fourthCard, inView: inViewFourthCard} = useInView();
    return (
        <div className='FormationContainer'>
            <div ref={title} className={`${"FormationMainText"} ${inViewTitle?'formationTitleOnView':''}`}>
                <h1> Things which I'm very proud of! 📑 </h1>
            </div>
            <div className="formationCardsContainer">
                <div ref={firstCard} className={`${"formationCards"} ${inViewFirstCard?'formationCardOneOnView':''}`}>
                    <h2 className='cardTitle'>
                        Coding Dojo Certificate
                    </h2>
                    <h4 className='cardSubtitle'>
                        Certificated at Coding Dojo LATAM, in MERN Full-Stack BootCamp. Where I built an individual project as well as a groupal one.
                    </h4>
                    <div className='iFrameContainer'>
                        <a href={codingDojoCertificate}>
                            <span className='iFrameHoverLink'>
                            </span>
                        </a>
                        <iframe src={codingDojoCertificate} frameborder="0"  title="Matías Reyes Coding Dojo Certificate" allowfullscreen="true" height="220.5" width="284.5"></iframe>
                    </div>
                </div>
                <div ref={secondCard} className={`${"formationCards"} ${inViewSecondCard?'formationCardTwoOnView':''}`}>
                    <h2 className='cardTitle'>
                        Python 4 Everyone Certificate
                    </h2>
                    <h4 className='cardSubtitle'>
                        Certificated by Coursera at University of Michigan, in "Getting Starting with Python" course. Currently I'm improving my skills on my own.
                    </h4>
                    <div className='iFrameContainer'>
                        <iframe src={CurseraPython4EverybodyCertificate} frameborder="0"  title="Matías Reyes Basic Python Certificate" allowfullscreen="true" height="220.5" width="284.5"></iframe>
                    </div>
                </div>
                <div ref={thirdCard} className={`${"formationCards"} ${inViewThirdCard?'formationCardThreeOnView':''}`}>
                    <h2 className='cardTitle'>
                        Ending TIC Engineering at USS.
                    </h2>
                    <h4 className='cardSubtitle'>
                        Currently, I'm studying at San Sebastian University. Where I'm finishing the last year of my TIC Engineer degree.
                    </h4>
                    <div className='iFrameContainer'>
                        <span className='iFrameBackground'></span>
                        <img src={sanSebastianUniversityLogo} alt="Universidad San Sebastian Logo" height="220.5" width="284.5"/>
                    </div>
                </div>
            </div>
            <div ref={fourthCard} className={`${"FormationEndTextContainer"} ${inViewFourthCard?'formationEndtextOnView':''}`}>
                <h4> 🤓 I considerate myself a self-taught person, reason why I'm constantly improving my knowledgments in some React libraries, and Frontend tips. 🤓 </h4>
            </div>
        </div>
    );
}

export default FormationDesktop;

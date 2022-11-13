import React from 'react';
import ContactStyles__Desktop from "./ContactStyles__Desktop.scss";
import githubContact from "../../../assets/images/githubContact.png";
import linkedInContact from "../../../assets/images/linkedInContact.png";
import mailContact from "../../../assets/images/mailContact.png";

const ContactDesktop = () => {
    return (
        <div className='contactContainer'>
            <h1 className='letsTalkText'>
                Let<span>'</span>s talk<span>!</span>
            </h1>
            <div>
                <span></span>
                <ul>
                    <li>
                        <a href="https://github.com/MattRgz" target="_blank"  rel="noreferrer">
                            <img src={githubContact} alt="Github" />    
                        </a>
                    </li>
                    <li>
                        <img src={mailContact} alt="eMail" />
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/matiasreyesgonzalez/" target="_blank"  rel="noreferrer">
                            <img src={linkedInContact} alt="LinkedIn" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ContactDesktop;

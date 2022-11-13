import React from 'react';
import ContactStyles__Desktop from "./ContactStyles__Desktop.scss";
import githubContact from "../../../assets/images/githubContact.png";
import linkedInContact from "../../../assets/images/linkedInContact.png";
import mailContact from "../../../assets/images/mailContact.png";

const ContactDesktop = () => {
    return (
        <div className='contactContainer'>
            <h1 className='letsTalkText'>
                Let's talk!
            </h1>
            <div>
                <span></span>
                <ul>
                    <li>
                        <a href="#">
                            <img src={githubContact} alt="Github" />    
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={mailContact} alt="eMail" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={linkedInContact} alt="LinkedIn" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ContactDesktop;

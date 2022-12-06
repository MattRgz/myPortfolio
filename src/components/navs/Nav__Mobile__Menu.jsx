import React from 'react';
import NavStyles__Mobile__Menu from './NavStyles__Mobile__Menu.scss';
import githubContact from '../../assets/images/githubIconMobile.png';
import linkedInContact from '../../assets/images/linkedInIconMobile.png';
import {Link} from "react-scroll";
import { useInView  } from "react-intersection-observer";
import logoPositivo from '../../assets/images/logoPositivo.png'

const NavMobileMenu = () => {
    const {ref: scrolling, inView: projectSection} = useInView();
    return (
        <div ref={scrolling} className={`mainContainer ${projectSection?"imScrolling":""}` }>
            <header className='logo'>
                <img style={{width:'96px'}} src={logoPositivo} alt="Logo Matias Reyes" />
            </header>
            <main >
                <div className='linkList'>
                    <ul>
                        <Link style={{cursor:"pointer"}} to="homeIdMobile" spy={true} smooth={true} offset={-150} duration={700}>
                                <li>
                                    <p className='Mobile__LinkContainer'>Home</p>
                                </li>
                        </Link>
                        <Link style={{cursor:"pointer"}}  to="projectsIdMobile" spy={true} smooth={true} offset={-100} duration={700}>
                                <li>
                                    <p className='Mobile__LinkContainer'>My Projects</p>
                                </li>
                        </Link>
                        <Link style={{cursor:"pointer"}}  to="technologiesIdMobile" spy={true} smooth={true} offset={-100} duration={700}>
                                <li>
                                    <p className='Mobile__LinkContainer'>Technologies</p>
                                </li>
                        </Link>
                        <Link style={{cursor:"pointer"}}  to="formationIdMobile" spy={true} smooth={true} offset={-100} duration={700}>
                                <li>
                                    <p className='Mobile__LinkContainer'>Formation</p>
                                </li>
                        </Link>
                        <Link style={{cursor:"pointer"}}  to="contactIdMobile" spy={true} smooth={true} offset={-80} duration={700}>
                                <li>
                                    <p className='Mobile__LinkContainer'>Contact</p>
                                </li>
                        </Link>
                    </ul>
                </div>
                <ul className='socialMediaContainer'>
                        <li>
                            <a href="https://github.com/MattRgz" target="_blank" rel="noreferrer">
                                <img src={githubContact} alt="Github" />    
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/matiasreyesgonzalez/" target="_blank" rel="noreferrer">
                                <img src={linkedInContact} alt="LinkedIn" />
                            </a>
                        </li>
                    </ul>
            </main>
        </div>
    );
}

export default NavMobileMenu;

import React from 'react';
import NavStyles__Mobile__Menu from './NavStyles__Mobile__Menu.scss';
import githubContact from '../../assets/images/githubIconMobile.png';
import linkedInContact from '../../assets/images/linkedInIconMobile.png';

const NavMobileMenu = () => {
    return (
        <div className='mainContainer'>
            <header className='logo'>
                LOGO
            </header>
            <main >
                <div className='linkList'>
                    <ul>
                        <a href="#">
                            <li>
                                <p className='Mobile__LinkContainer'>Home</p>
                            </li>
                        </a>
                        <a href="#">
                            <li>
                                <p className='Mobile__LinkContainer'>My Projects</p>
                            </li>
                        </a>
                        <a href="#">
                            <li>
                                <p className='Mobile__LinkContainer'>Technologies</p>
                            </li>
                        </a>
                        <a href="#">
                            <li>
                                <p className='Mobile__LinkContainer'>Formation</p>
                            </li>
                        </a>
                        <a href="#">
                            <li>
                                <p className='Mobile__LinkContainer'>Contact</p>
                            </li>
                        </a>
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

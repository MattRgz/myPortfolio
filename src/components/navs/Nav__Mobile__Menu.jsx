import React from 'react';
import NavStyles__Mobile__Menu from './NavStyles__Mobile__Menu.scss';

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
                                <p className='Mobile__LinkContainer'>Me</p>
                            </li>
                        </a>
                        <a href="#">
                            <li>
                                <p className='Mobile__LinkContainer'>Formation</p>
                            </li>
                        </a>
                        <a href="#">
                            <li>
                                <p className='Mobile__LinkContainer'>Technologies</p>
                            </li>
                        </a>
                        <a href="#">
                            <li>
                                <p className='Mobile__LinkContainer'>Otro link</p>
                            </li>
                        </a>
                    </ul>
                </div>
                <div className='socialMediaContainer'>
                    <span className='socialMediaIcon'>Instagram</span> &nbsp; <span className='socialMediaIcon'>GitHub</span> &nbsp; <span className='socialMediaIcon'>LinkedIn</span>
                </div>
            </main>
        </div>
    );
}

export default NavMobileMenu;

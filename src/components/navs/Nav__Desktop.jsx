import React from 'react';
import NavStyles__Desktop__Menu from './NavStyles__Desktop__Menu.scss';
import {Link} from "react-scroll";

const NavDesktop = () => {
    return (
        <div style={{display:'flex', backgroundColor:'rgba(150,150,150,0.2)', position:'relative',right:'0', left:'0',height:'100px'}}>
            <div style={{display:'flex', flexGrow:'1', justifyContent:'center', alignItems:'end'}}>
                <p style={{marginBottom:'10px'}}>LOGO</p>
            </div>
            <div style={{display:'flex',flexGrow:'3', justifyContent:'center',alignItems:'end', marginRight:'14%'}}>
                <ul className='MainLinksContainer__Desktop'>
                    <li className='ItemList__Desktop'>
                        <Link style={{cursor:"pointer"}} to="homeId" spy={true} smooth={true} offset={0} duration={500}>
                            <p className='linkContainer'>
                                Home
                            </p>
                        </Link>
                        <span className='bottomBorder'></span>
                    </li>
                    <li className='ItemList__Desktop'>
                        <Link style={{cursor:"pointer"}}  to="proyectsId" spy={true} smooth={true} offset={-100} duration={500}>
                            <p className='linkContainer'>
                                My proyects
                            </p>
                        </Link>
                        <span className='bottomBorder'></span>
                    </li>
                    <li className='ItemList__Desktop'>
                        <Link style={{cursor:"pointer"}}  to="technologiesId" spy={true} smooth={true} offset={-100} duration={500}>
                            <p className='linkContainer'>
                            Technologies
                            </p>
                        </Link>
                        <span className='bottomBorder'></span>
                    </li>
                    <li className='ItemList__Desktop'>
                        <Link style={{cursor:"pointer"}}  to="formationId" spy={true} smooth={true} offset={-100} duration={500}>
                            <p className='linkContainer'>
                                Formation
                            </p>
                        </Link>
                        <span className='bottomBorder'></span>
                    </li>
                    <li className='ItemList__Desktop'>
                        <Link style={{cursor:"pointer"}}  to="contactId" spy={true} smooth={true} offset={-100} duration={500}>
                            <p className='linkContainer'>
                                Contact
                            </p>
                        </Link>
                        <span className='bottomBorder'></span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavDesktop;

import React from 'react';
import NavStyles__Desktop__Menu from './NavStyles__Desktop__Menu.scss';
import {Link} from "react-scroll";
import { useInView  } from "react-intersection-observer";

const NavDesktop = () => {
    const {ref: scrolling, inView: projectSection} = useInView();
    return (
        <div ref={scrolling} className={`${projectSection?"imScrolling":""}` } style={{display:'flex', backgroundColor:'rgba(255,255,255,1)',position:"sticky",right:'0', left:'0',height:'12vh', zIndex:"1"}}>
            <div className='logoBox' style={{display:'flex', flexGrow:'1', justifyContent:'center', alignItems:'end'}}>
                {/* <p style={{marginBottom:'10px'}}>LOGO</p> */}
            </div>
            <div style={{display:'flex',flexGrow:'3', justifyContent:'center',alignItems:'end', marginRight:'14%'}}>
                <ul className='MainLinksContainer__Desktop'>
                    <li className='ItemList__Desktop'>
                        <Link style={{cursor:"pointer"}} to="homeId" spy={true} smooth={true} offset={-150} duration={700}>
                            <p className='linkContainer'>
                                Home
                            </p>
                        </Link>
                        <span className='bottomBorder'></span>
                    </li>
                    <li className='ItemList__Desktop'>
                        <Link style={{cursor:"pointer"}}  to="projectsId" spy={true} smooth={true} offset={-100} duration={700}>
                            <p className='linkContainer'>
                                My projects
                            </p>
                        </Link>
                        <span className='bottomBorder'></span>
                    </li>
                    <li className='ItemList__Desktop'>
                        <Link style={{cursor:"pointer"}}  to="technologiesId" spy={true} smooth={true} offset={-100} duration={700}>
                            <p className='linkContainer'>
                                Technologies
                            </p>
                        </Link>
                        <span className='bottomBorder'></span>
                    </li>
                    <li className='ItemList__Desktop'>
                        <Link style={{cursor:"pointer"}}  to="formationId" spy={true} smooth={true} offset={-100} duration={700}>
                            <p className='linkContainer'>
                                Formation
                            </p>
                        </Link>
                        <span className='bottomBorder'></span>
                    </li>
                    <li className='ItemList__Desktop'>
                        <Link style={{cursor:"pointer"}}  to="contactId" spy={true} smooth={true} offset={-80} duration={700}>
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

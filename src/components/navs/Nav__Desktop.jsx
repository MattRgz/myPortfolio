import React from 'react';
import NavStyles__Desktop__Menu from './NavStyles__Desktop__Menu.scss';

const NavDesktop = () => {
    return (
        <div style={{display:'flex', backgroundColor:'rgba(150,150,150,0.2)', position:'relative',right:'0', left:'0',height:'100px'}}>
            <div style={{display:'flex', flexGrow:'1', justifyContent:'center', alignItems:'end'}}>
                <p style={{marginBottom:'10px'}}>LOGO</p>
            </div>
            <div style={{display:'flex',flexGrow:'3', justifyContent:'center',alignItems:'end', marginRight:'14%'}}>
                <ul className='MainLinksContainer__Desktop'>
                    <li className='ItemList__Desktop'>
                        <a href="#">
                            <p className='linkContainer'>
                                Me
                            </p>
                        </a>
                        <span className='bottomBorder'></span>
                    </li>
                    <li className='ItemList__Desktop'>
                        <a href="#">
                            <p className='linkContainer'>
                                Formation
                            </p>
                        </a>
                        <span className='bottomBorder'></span>
                    </li>
                    <li className='ItemList__Desktop'>
                        <a href="#">
                            <p className='linkContainer'>
                            Technologies
                            </p>
                        </a>
                        <span className='bottomBorder'></span>
                    </li>
                    <li className='ItemList__Desktop'>
                        <a href="#">
                            <p className='linkContainer'>
                            Otros links
                            </p>
                        </a>
                        <span className='bottomBorder'></span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavDesktop;

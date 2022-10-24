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
                        <p className='linkContainer'>
                            <a href="#">Me</a>
                        </p>
                    </li>
                    <li className='ItemList__Desktop'>
                        <p className='linkContainer'>
                            <a href="#">Formation</a>
                        </p>
                    </li>
                    <li className='ItemList__Desktop'>
                        <p className='linkContainer'>
                            <a href="#">Technologies</a>
                        </p>
                    </li>
                    <li className='ItemList__Desktop'>
                        <p className='linkContainer'>
                            <a href="#">Otros links</a>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavDesktop;

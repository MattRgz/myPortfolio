import React from 'react';
import NavMobileButton from './Nav__Mobile__Button';
import { useState } from 'react';
import NavMobileMenu from './Nav__Mobile__Menu';

const NavMobile = () => {

    const [menuBtnState, setMenuBtnState] = useState(false);
    const callBackFunction = () =>{
        setMenuBtnState(menuBtnState => !menuBtnState)
    }

    return (
        <div style={{display:'flex', backgroundColor:'rgba(150,150,150,0.2)', position:'relative',right:'0', left:'0',height:'100%',width:'100%'}}>
            <div style={{display:'flex',flexGrow:'1', justifyContent:'start', marginLeft:'25px', alignItems:'center', position:"relative", zIndex:"3"}}>
                {
                    menuBtnState?<p><NavMobileMenu/></p>:<p style={{color: "white"}}>LOGO</p>
                }
            </div>
            <div style={{display:'flex',flexGrow:'1', justifyContent:'end', marginRight:'25px',}}>
                <div style={{display:'flex',justifyContent:'center', alignItems:'center', marginRight:'35px',position:"relative", zIndex:"3"}}>
                    <NavMobileButton callBackFunction={callBackFunction}/>
                </div>
            </div>
        </div>
    );
}

export default NavMobile;

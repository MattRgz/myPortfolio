import React from 'react';
import NavStyles__Mobile__Button from './NavStyles__Mobile__Button.scss';
import { useState } from 'react';

const NavMobile = (props) => {

    const callBackFunction = props.callBackFunction
    const [btnState, setBtnState] = useState(false);
    
    const animateBars = () =>{
        setBtnState(btnState=>!btnState);
        callBackFunction()
    }
    
    let activePrefix = btnState ? 'active-' : '';

    return (

        <div className="bars__menu" onClick={animateBars}>
            <span className={`${activePrefix}line1__bars-menu`}></span>
            <span className={`${activePrefix}line2__bars-menu`}></span>
            <span className={`${activePrefix}line3__bars-menu`}></span>
        </div>
    );
}

export default NavMobile;



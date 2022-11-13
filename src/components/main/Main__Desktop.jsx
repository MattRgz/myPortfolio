import React from 'react';
import MainStyles__Desktop from "./MainStyles__Desktop.scss";
import { useInView  } from "react-intersection-observer";
import ejemplo from "../../assets/images/Ejemplo.png"

const MainDesktop = () => {
    const {ref: firstProyect, inView: leftEntry} = useInView();
    const {ref: secondProyect, inView: rightEntry} = useInView();
    const {ref: thirdProyect, inView: secondLeftEntry} = useInView();
    return (
        <div className='proyectContainer'>
            <div ref={firstProyect} className={`${"proyectAtLeft"} ${leftEntry?"entryFromLeft":""}` }>
                <p style={{color:"black"}}>Proyecto 1</p>
                <img src={ejemplo} alt="ACA VA UNA IMAGEN 1" />
            </div>
            <div ref={secondProyect}  className={`${"proyectAtRight"} ${rightEntry?"entryFromRight":""}` }>
                <img src={ejemplo} alt="ACA VA UNA IMAGEN 2" />
                <p style={{color:"black"}}>Proyecto 2</p>
            </div>
            <div ref={thirdProyect}  className={`${"proyectAtLeft"} ${secondLeftEntry?"entryFromLeft":""}` }>
                <p style={{color:"black"}}>Proyecto 3</p>
                <img src={ejemplo} alt="ACA VA UNA IMAGEN 3" />
            </div>
        </div>
    );
}

export default MainDesktop;

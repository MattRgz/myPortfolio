import React from 'react';
import MainStyles__Desktop from "./MainStyles__Desktop.scss";
import { useInView  } from "react-intersection-observer";

const MainDesktop = () => {
    const {ref: firstProyect, inView: leftEntry} = useInView();
    const {ref: secondProyect, inView: rightEntry} = useInView();
    const {ref: thirdProyect, inView: secondLeftEntry} = useInView();
    return (
        <div className='proyectContainer'>
            <div ref={firstProyect} className={`${"proyectAtLeft"} ${leftEntry?"entryFromLeft":""}` }>
                <p>Proyecto 1</p>
                <img src="#" alt="ACA VA UNA IMAGEN 1" />
            </div>
            <div ref={secondProyect}  className={`${"proyectAtRight"} ${rightEntry?"entryFromRight":""}` }>
                <img src="#" alt="ACA VA UNA IMAGEN 2" />
                <p>Proyecto 2</p>
            </div>
            <div ref={thirdProyect}  className={`${"proyectAtLeft"} ${secondLeftEntry?"entryFromLeft":""}` }>
                <p>Proyecto 3</p>
                <img src="#" alt="ACA VA UNA IMAGEN 3" />
            </div>
        </div>
    );
}

export default MainDesktop;

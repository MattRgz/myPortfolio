import React from 'react';
import MainStyles__Desktop from "./MainStyles__Desktop.scss";
import { useInView  } from "react-intersection-observer";
import ejemplo from "../../assets/images/Ejemplo.png";
import taskifyPic from "../../assets/images/taskifyPic.png";
import githubMinIcon from "../../assets/images/githubMinIcon.png"

const MainDesktop = () => {
    const {ref: firstProyect, inView: leftEntry} = useInView();
    const {ref: secondProyect, inView: rightEntry} = useInView();
    const {ref: thirdProyect, inView: secondLeftEntry} = useInView();
    return (
        <div className='proyectContainer'>
            <div ref={firstProyect} className={`${"proyectAtLeft"} ${leftEntry?"entryFromLeft":""}` }>
                <div style={{color:"black", textAlign:'justify',width:'30%'}}>
                    <p style={{color:"black"}}>Taskify is a "To Do List" coded as a project for my bootcamp. You can create a profile and manage the list with products previusly created.</p>
                    <div className='codeLinkButtonBox'>
                        <a target="_blank"  rel="noreferrer" href="https://github.com/MattRgz/Taskify" style={{textDecoration:'none'}}>
                            <button className='codeLinkButton' style={{display:"flex",alignItems:'center',justifyContent:'center'}}> 
                                <img src={githubMinIcon} alt="GHIcon" style={{width:'20px',borderRadius:'25px'}}/>
                                <div style={{display:'flex',justifyContent:'end',alignContent:'center',width:'65%'}}>
                                    <p>
                                        {`${"Code </>"}`}
                                    </p>
                                </div>
                            </button>
                        </a>
                    </div>
                </div>
                <img src={taskifyPic} alt="ACA VA UNA IMAGEN 1" />
            </div>
            <div ref={secondProyect}  className={`${"proyectAtRight"} ${rightEntry?"entryFromRight":""}` }>
                <img src={taskifyPic} alt="ACA VA UNA IMAGEN 2" />
                <div style={{color:"black", textAlign:'justify',width:'30%'}}>
                    <p style={{color:"black"}}>Proyecto 2</p>
                    <div className='codeLinkButtonBox'>
                        <a target="_blank"  rel="noreferrer" href="#" style={{textDecoration:'none'}}>
                            <button className='codeLinkButton' style={{display:"flex",alignItems:'center',justifyContent:'center'}}> 
                                <img src={githubMinIcon} alt="GHIcon" style={{width:'20px',borderRadius:'25px'}}/>
                                <div style={{display:'flex',justifyContent:'end',alignContent:'center',width:'65%'}}>
                                    <p>
                                        {`${"Code </>"}`}
                                    </p>
                                </div>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div ref={thirdProyect}  className={`${"proyectAtLeft"} ${secondLeftEntry?"entryFromLeft":""}` }>
                <div style={{color:"black", textAlign:'justify',width:'30%'}}>  
                    <p style={{color:"black"}}>Proyecto 3</p>
                    <div className='codeLinkButtonBox'>
                        <a target="_blank"  rel="noreferrer" href="#" style={{textDecoration:'none'}}>
                            <button className='codeLinkButton' style={{display:"flex",alignItems:'center',justifyContent:'center'}}> 
                                <img src={githubMinIcon} alt="GHIcon" style={{width:'20px',borderRadius:'25px'}}/>
                                <div style={{display:'flex',justifyContent:'end',alignContent:'center',width:'65%'}}>
                                    <p>
                                        {`${"Code </>"}`}
                                    </p>
                                </div>
                            </button>
                        </a>
                    </div>
                </div>
                <img src={taskifyPic} alt="ACA VA UNA IMAGEN 3" />
            </div>
        </div>
    );
}

export default MainDesktop;

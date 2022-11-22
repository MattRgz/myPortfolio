import React from 'react';
import MainStyles__Desktop from "./MainStyles__Desktop.scss";
import { useInView  } from "react-intersection-observer";
import ejemplo from "../../assets/images/Ejemplo.png";
import taskifyPic from "../../assets/images/taskifyPic.png";
import githubMinIcon from "../../assets/images/githubMinIcon.png";
import GestorNPic from "../../assets/images/GestorNPic.png";
import myPortfolioPic from "../../assets/images/myPortfolioPic.png";

const MainDesktop = () => {
    const {ref: firstProyect, inView: leftEntry} = useInView();
    const {ref: secondProyect, inView: rightEntry} = useInView();
    const {ref: thirdProyect, inView: secondLeftEntry} = useInView();
    return (
        <div className='proyectContainer'>
            <div ref={firstProyect} className={`${"proyectAtLeft"} ${leftEntry?"entryFromLeft":""}` }>
                <div  style={{color:"black", textAlign:'justify',width:'30%'}}>
                    <p style={{color:"black"}}>My first project was called GestorN, It was born as an easy customizable management web for small business. It's important to say that it was my first BootCamp project, and I's mainly aimed at backend development. </p>
                    <div className='codeLinkButtonBox'>
                        <a target="_blank"  rel="noreferrer" href="https://github.com/MattRgz/ECRProject/tree/master/proyectoIndividualECR" style={{textDecoration:'none'}}>
                            <button className='codeLinkButton' style={{display:"flex",alignItems:'center',justifyContent:'center'}}> 
                                <img src={githubMinIcon} alt="GHIcon" style={{width:'20px',borderRadius:'25px'}}/>
                                <div style={{display:'flex',justifyContent:'end',alignContent:'center',width:'65%'}}>
                                    <p>
                                        {`${"Code </>"}`}
                                    </p>
                                </div>
                            </button>
                        </a>
                        {/* <a target="_blank"  rel="noreferrer" href="#">
                            <button className='codeLinkButton' style={{marginLeft:'15px',display:"flex",alignItems:'center',justifyContent:'center'}}>
                                <p>
                                    Visit Project
                                </p>
                            </button>
                        </a> */}
                    </div>
                </div>
                <img src={GestorNPic} alt="GestorN" />
            </div>
            <div ref={secondProyect}  className={`${"proyectAtRight"} ${rightEntry?"entryFromRight":""}` }>
                <img src={taskifyPic} alt="Taskify" />
                <div style={{color:"black", textAlign:'justify',width:'30%'}}>
                    <p style={{color:"black"}}>Taskify is a "To Do List" coded as a second project for my BootCamp graduation. You can create a profile and manage a list with products previously created by the page's administrator. For this project I used design tools that can be reviewed on the documentation. </p>
                    <div className='codeLinkButtonBox'>
                        <a target="_blank"  rel="noreferrer" href="https://github.com/MattRgz/Taskify" style={{textDecoration:'none'}}>
                            <button className='codeLinkButton' style={{display:"flex",alignItems:'center',justifyContent:'center'}}> 
                                <img src={githubMinIcon} alt="GHIcon" style={{width:'20px',borderRadius:'25px'}}/>
                                <div style={{display:'flex',justifyContent:'end',alignContent:'center',width:'65%'}}>
                                    <p>
                                        {`${"Code </>"}`}
                                    </p>
                                </div>
                            </button >
                        </a>
                        {/* <a target="_blank"  rel="noreferrer" href="#">
                            <button className='codeLinkButton' style={{marginLeft:'15px',display:"flex",alignItems:'center',justifyContent:'center'}}>
                                <p>
                                    Visit Project
                                </p>
                            </button>
                        </a> */}
                    </div>
                </div>
            </div>
            <div ref={thirdProyect}  className={`${"proyectAtLeft"} ${secondLeftEntry?"entryFromLeft":""}` }>
                <div style={{color:"black", textAlign:'justify',width:'30%'}}>  
                    <p style={{color:"black"}}>Last but not least, my portfolio is my third project. I tried to give more importance to the frontend development at the same time that I learned how to design and implement 3D objects. Honestly, a great achievement for me.</p>
                    <div className='codeLinkButtonBox'>
                        <a target="_blank"  rel="noreferrer" href="https://github.com/MattRgz/myPortfolio" style={{textDecoration:'none'}}>
                            <button className='codeLinkButton' style={{display:"flex",alignItems:'center',justifyContent:'center'}}> 
                                <img src={githubMinIcon} alt="GHIcon" style={{width:'20px',borderRadius:'25px'}}/>
                                <div style={{display:'flex',justifyContent:'end',alignContent:'center',width:'65%'}}>
                                    <p>
                                        {`${"Code </>"}`}
                                    </p>
                                </div>
                            </button>
                        </a>
                        {/* <a target="_blank"  rel="noreferrer" href="#">
                            <button className='codeLinkButton' style={{marginLeft:'15px',display:"flex",alignItems:'center',justifyContent:'center'}}>
                                <p>
                                    Visit Project
                                </p>
                            </button>
                        </a> */}
                    </div>
                </div>
                <img src={myPortfolioPic} alt="My potfolio" />
            </div>
        </div>
    );
}

export default MainDesktop;

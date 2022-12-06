import React from 'react';
import MainStyle__Mobile from "./MainStyle__Mobile.scss";
import { useInView  } from "react-intersection-observer";
import ejemplo from "../../assets/images/Ejemplo.png";
import taskifyPic from "../../assets/images/taskifyPic.png";
import githubMinIcon from "../../assets/images/githubMinIcon.png";
import GestorNPic from "../../assets/images/GestorNPic.png";
import myPortfolioPic from "../../assets/images/myPortfolioPic.png";


const MainMobile = () => {

    const {ref: firstProyectMobile, inView: leftEntryMobile} = useInView();
    const {ref: secondProyectMobile, inView: rightEntryMobile} = useInView();
    const {ref: thirdProyectMobile, inView: secondLeftEntryMobile} = useInView();
    return (
        <div className='proyectContainerMobile'>
            <div ref={firstProyectMobile} className={`${"proyectAtLeftMobile"}` }>
                <div  style={{ textAlign:'justify',width:'70%'}}>
                    <p>My first project was called GestorN, It was born as an easy customizable management web for small business. It's important to say that it was my first BootCamp project, and I's mainly aimed at backend development. </p>
                    <div className='codeLinkButtonBox'>
                        <a target="_blank"  rel="noreferrer" href="https://github.com/MattRgz/ECRProject/tree/master/proyectoIndividualECR" style={{textDecoration:'none'}}>
                            <button className='codeLinkButton' style={{display:"flex",alignItems:'center',justifyContent:'center',width:'250px',border:'solid white 1px'}}> 
                                <img src={githubMinIcon} alt="GHIcon" style={{marginRight:'15px',width:'20px',borderRadius:'25px'}}/>
                                <div style={{display:'flex',justifyContent:'center',alignContent:'center',width:'100px'}}>
                                    <p>
                                        {`${"Code here! </>"}`}
                                    </p>
                                </div>
                            </button>
                        </a>
                    </div>
                </div>
                <img className='projectPic' src={GestorNPic} alt="GestorN" />
            </div>
            <div ref={secondProyectMobile}  className={`${"proyectAtRightMobile"} ` }>
                <img className='projectPic' src={taskifyPic} alt="Taskify" />
                <div  style={{ textAlign:'justify',width:'70%'}}>
                    <p>Taskify is a "To Do List" coded as a second project for my BootCamp graduation. You can create a profile and manage a list with products previously created by the page's administrator. For this project I used design tools that can be reviewed on the documentation. </p>
                    <div className='codeLinkButtonBox'>
                        <a target="_blank"  rel="noreferrer" href="https://github.com/MattRgz/Taskify" style={{textDecoration:'none'}}>
                            <button className='codeLinkButton' style={{display:"flex",alignItems:'center',justifyContent:'center',width:'250px',border:'solid white 1px'}}> 
                                <img src={githubMinIcon} alt="GHIcon" style={{marginRight:'15px',width:'20px',borderRadius:'25px'}}/>
                                <div style={{display:'flex',justifyContent:'center',alignContent:'center',width:'100px'}}>
                                    <p>
                                        {`${"Code here! </>"}`}
                                    </p>
                                </div>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div ref={thirdProyectMobile}  className={`${"proyectAtLeftMobile"} ` }>
            <div  style={{ textAlign:'justify',width:'70%'}}>  
                    <p >Last but not least, my portfolio is my third project. I tried to give more importance to the frontend development at the same time that I learned how to design and implement 3D objects. Honestly, a great achievement for me.</p>
                    <div className='codeLinkButtonBox'>
                        <a target="_blank"  rel="noreferrer" href="https://github.com/MattRgz/myPortfolio" style={{textDecoration:'none'}}>
                            <button className='codeLinkButton' style={{display:"flex",alignItems:'center',justifyContent:'center',width:'250px',border:'solid white 1px'}}> 
                                <img src={githubMinIcon} alt="GHIcon" style={{marginRight:'15px' ,width:'20px',borderRadius:'25px'}}/>
                                <div style={{display:'flex',justifyContent:'center',alignContent:'center',width:'100px'}}>
                                    <p>
                                        {`${"Code here! </>"}`}
                                    </p>
                                </div>
                            </button>
                        </a>
                    </div>
                </div>
                <img className='projectPic' src={myPortfolioPic} alt="My potfolio" />
            </div>
        </div>
    );
}

export default MainMobile;


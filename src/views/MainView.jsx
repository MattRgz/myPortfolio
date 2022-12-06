import React from 'react';
import Nav__Desktop from '../components/navs/Nav__Desktop';
import Nav__Mobile from '../components/navs/Nav__Mobile';
import Main__Desktop from '../components/main/Main__Desktop';
import MainViewStyle from './viewStyles/MainViewStyle.scss';
import HeaderDesktop from '../components/header/Header__Desktop';
import HeaderMobile from '../components/header/Header__Mobile';
import TechnologiesDesktop from '../components/sections/technologies/Technologies__Desktop';
import FormationDesktop from '../components/sections/formation/Formation__Desktop';
import ContactDesktop from '../components/sections/contact/Contact__Desktop';
import MainMobile from '../components/main/Main__Mobile';
import TechnologiesMobile from '../components/sections/technologies/Technologies__Mobile';
import FormationMobile from '../components/sections/formation/Formation__Mobile';
import ContactMobile from '../components/sections/contact/Contact__Mobile';
import logoPositivo from '../assets/images/logoPositivo.png';


const MainView = () => {
    return (
        <div>
            <div className="desktop__view">
                <nav style={{position:'sticky', top:'0',background:"white",zIndex:"1"}}>
                    <Nav__Desktop/>
                </nav>
                <header id='homeId' style={{height:'88vh',background:"white",position:"relative",zIndex:"-1"}}>
                    <HeaderDesktop/>
                </header>
                <main id='projectsId' style={{height:'90vh',background:"white",position:"relative"}}>
                    <Main__Desktop/>
                </main>
                <section id='technologiesId' style={{height:'90vh',position:"relative",background:"white",zIndex:"0"}}>
                    <TechnologiesDesktop/>
                </section>
                <section id='formationId'  style={{height:'90vh',position:"relative",background:"white"}}>
                    <FormationDesktop/>
                </section>
                <section id='contactId'  style={{height:'92vh',position:"relative", background:"white"}}>
                    <ContactDesktop/>
                </section>
                <footer style={{display:"flex",height:'20vh', background:"black",color:"white",alignItems:"center", flexDirection:'column'}}>
                    <img  style={{width:'96px', marginTop:'25px'}} src={logoPositivo} alt="Logo Matias Reyes" />
                    <div style={{width:"100%",heigth:"50%",marginTop:"30px",fontSize:"13px",justifyContent:"center"}}>
                        © Copyright <a style={{textDecoration:"none", color:"blanchedalmond"}} href="https://github.com/MattRgz">Matías</a> . All Rights Reserved
                    </div>
                </footer>
            </div>
            <div  className="mobile__view">
                <nav style={{position:'sticky', top:'0px',zIndex:"1",width:'100vw', height:'100px',marginBottom:'50px'}}>
                    <Nav__Mobile/>
                </nav>
                <header id='homeIdMobile' style={{position:"relative",width:'100vw', height:'80vh',marginBottom:'20px'}}>
                    <HeaderMobile/>
                </header>
                <main id='projectsIdMobile' style={{position:"relative",height:'270vh',width:'100vw',marginBottom:'20px'}}>
                    <MainMobile/>
                </main >
                <section id='technologiesIdMobile' style={{position:"relative",height:'90vh',width:'100vw',marginBottom:'20px'}}>
                    <TechnologiesMobile/>
                </section>
                <section id='formationIdMobile' style={{position:"relative",height:'270vh',width:'100vw',marginBottom:'20px'}}>
                    <FormationMobile/>
                </section>
                <section id='contactIdMobile' style={{height:'75vh',position:"relative",width:'100vw'}}>
                    <ContactMobile/>
                </section>
                <footer style={{height:'5vh',position:"relative",width:'100vw'}}>
                <img  style={{width:'96px'}} src={logoPositivo} alt="Logo Matias Reyes" />
                    <div style={{color:"white",width:"100%",heigth:"50%",marginBottom:"30px",fontSize:"13px",justifyContent:"center"}}>
                        © Copyright <a style={{textDecoration:"none", color:"blanchedalmond"}} href="https://github.com/MattRgz">Matías</a> . All Rights Reserved
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default MainView;

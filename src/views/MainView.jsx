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


const MainView = () => {
    return (
        <div>
            <div className="desktop__view">
                <nav style={{position:'sticky', top:'0px',background:"white",zIndex:"3"}}>
                    <Nav__Desktop/>
                </nav>
                <header id='homeId' style={{height:'88vh',background:"white",position:"relative",zIndex:"-1"}}>
                    <HeaderDesktop/>
                </header>
                <main id='projectsId' style={{height:'90vh',background:"white",position:"relative"}}>
                    <Main__Desktop/>
                </main>
                <section id='technologiesId' style={{height:'90vh',position:"relative",background:"white"}}>
                    <TechnologiesDesktop/>
                </section>
                <section id='formationId'  style={{height:'90vh',position:"relative",background:"white"}}>
                    <FormationDesktop/>
                </section>
                <section id='contactId'  style={{height:'92vh',position:"relative", background:"white"}}>
                    <ContactDesktop/>
                </section>
                <footer style={{display:"flex",height:'20vh', background:"black",color:"white",alignItems:"end"}}>
                    <div style={{width:"100%",heigth:"50%",marginBottom:"30px",fontSize:"13px",justifyContent:"center"}}>
                        © Copyright <a style={{textDecoration:"none", color:"blanchedalmond"}} href="https://github.com/MattRgz">Matías</a> . All Rights Reserved
                    </div>
                </footer>
            </div>
            <div  className="mobile__view">
                <nav style={{position:'sticky', top:'0px',zIndex:"3"}}>
                    <Nav__Mobile/>
                </nav>
                <header style={{position:"relative"}}>
                    <HeaderMobile/>
                </header>
                <main style={{position:"relative",height:'270vh'}}>
                    <MainMobile/>
                </main>
                <section>

                </section>
                <footer>

                </footer>
            </div>
        </div>
    );
}

export default MainView;

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


const MainView = () => {
    return (
        <div>
            <div className="desktop__view">
                <nav style={{position:'sticky', top:'0px',background:"white",zIndex:"1"}}>
                    <Nav__Desktop/>
                </nav>
                <header id='homeId' style={{height:'88vh',background:"white",position:"relative", zIndex:"-1"}}>
                    <HeaderDesktop/>
                </header>
                <main id='projectsId' style={{height:'90vh',background:"white",position:"relative", zIndex:"-1"}}>
                    <Main__Desktop/>
                </main>
                <section id='technologiesId' style={{height:'90vh',position:"relative", zIndex:"-1",background:"white"}}>
                    <TechnologiesDesktop/>
                </section>
                <section id='formationId'  style={{height:'90vh',position:"relative", zIndex:"-1",background:"white"}}>
                    <FormationDesktop/>
                </section>
                <section id='contactId'  style={{height:'92vh',position:"relative", background:"white"}}>
                    <ContactDesktop/>
                </section>
                <footer style={{height:'20vh', background:"darkgold"}}>

                </footer>
            </div>
            <div  className="mobile__view">
                <nav style={{position:'sticky', top:'0px'}}>
                    <Nav__Mobile/>
                </nav>
                <header style={{position:"absolute"}}>
                    <HeaderMobile/>
                </header>
                <main>

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

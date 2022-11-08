import React from 'react';
import Nav__Desktop from '../components/navs/Nav__Desktop';
import Nav__Mobile from '../components/navs/Nav__Mobile';
import Main__Desktop from '../components/main/Main__Desktop';
import MainViewStyle from './viewStyles/MainViewStyle.scss';
import HeaderDesktop from '../components/header/Header__Desktop';
import HeaderMobile from '../components/header/Header__Mobile';
import TechnologiesDesktop from '../components/sections/technologies/Technologies__Desktop';
import FormationDesktop from '../components/sections/formation/Formation__Desktop';


const MainView = () => {
    return (
        <div>
            <div className="desktop__view">
                <nav style={{position:'sticky', top:'0px'}}>
                    <Nav__Desktop/>
                </nav>
                <header id='homeId' style={{height:'100vh'}}>
                    <HeaderDesktop/>
                </header>
                <main id='proyectsId' style={{height:'100vh'}}>
                    <Main__Desktop/>
                </main>
                <section id='technologiesId' style={{height:'100vh'}}>
                    <TechnologiesDesktop/>
                </section>
                <section id='formationId'  style={{height:'100vh', background:"darkgold"}}>
                    <FormationDesktop/>
                </section>
                <section id='contactId'  style={{height:'100vh'}}>

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

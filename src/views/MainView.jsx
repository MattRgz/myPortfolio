import React from 'react';
import Nav__Desktop from '../components/navs/Nav__Desktop';
import Nav__Mobile from '../components/navs/Nav__Mobile';
import Main__Desktop from '../components/main/Main__Desktop';
import MainViewStyle from './viewStyles/MainViewStyle.scss';
import HeaderDesktop from '../components/header/Header__Desktop';
import HeaderMobile from '../components/header/Header__Mobile';

const MainView = () => {
    return (
        <div>
            <div className="desktop__view">
                <header style={{height:'100vh'}}>
                    <HeaderDesktop/>
                </header>
                <nav style={{position:'sticky', top:'0px'}}>
                    <Nav__Desktop/>
                </nav>
                <main>
                    <Main__Desktop/>
                </main>
                <section id='technologiesId' style={{height:'100vh'}}>

                </section>
                <section id='formationId'  style={{height:'100vh', background:"gold"}}>

                </section>
                <section id='contactId'  style={{height:'100vh'}}>

                </section>
                <footer style={{height:'20vh', background:"gold"}}>

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

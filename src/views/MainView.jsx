import React from 'react';
import Nav__Desktop from '../components/navs/Nav__Desktop';
import Nav__Mobile from '../components/navs/Nav__Mobile';
import Main__Desktop from '../components/main/Main__Desktop';
import MainViewStyle from './viewStyles/MainViewStyle.scss';
import SectionDesktop from '../components/section/Section__Desktop';
import SectionMobile from '../components/section/Section__Mobile';

const MainView = () => {
    return (
        <div>
            <div className="desktop__view">
                <section style={{height:'100vh'}}>
                    <SectionDesktop/>
                </section>
                <header style={{position:'sticky', top:'0px'}}>
                    <Nav__Desktop/>
                </header>
                <main>
                    <Main__Desktop/>
                </main>
                <footer>

                </footer>
            </div>
            <div  className="mobile__view">
                <header style={{position:'sticky', top:'0px'}}>
                    <Nav__Mobile/>
                </header>
                <section style={{position:"absolute"}}>
                    <SectionMobile/>
                </section>
                <main>

                </main>
                <footer>

                </footer>
            </div>
        </div>
    );
}

export default MainView;

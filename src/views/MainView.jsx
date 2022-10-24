import React from 'react';
import Nav__Desktop from '../components/navs/Nav__Desktop';
import Nav__Mobile from '../components/navs/Nav__Mobile';
import Main__Desktop from '../components/main/Main__Desktop';
import MainViewStyle from './viewStyles/MainViewStyle.scss';
import SectionDesktop from '../components/section/Section__Desktop';

const MainView = () => {
    return (
        <div>
            <section className="desktop__view" style={{height:'100vh'}}>
                <SectionDesktop/>
            </section>
            <header style={{position:'sticky', top:'0px'}}>
                <div className="desktop__view">
                <Nav__Desktop/>
                </div>
                <div className="mobile__view">
                <Nav__Mobile/>
                </div>
            </header>
            <main>
                <div className="desktop__view">
                    <Main__Desktop/>
                </div>
                <div className="mobile__view">
                </div>
            </main>
            <footer>
                <div className="desktop__view">
                </div>
                <div className="mobile__view">
                </div>
            </footer>
        </div>
    );
}

export default MainView;

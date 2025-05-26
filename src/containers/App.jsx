import React from 'react';
import { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import StickyNavbar from '../components/StickyNavbar';
import Intro from '../components/Intro/Intro';
import PortfolioPage from '../components/PortfolioPage/PortfolioPage';
import Tools from '../components/Tools/Tools';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import './App.css';
import 'animate.css';

function App() {
    const parallaxRef = useRef();

    const scrollToPage = (pageIndex) => {
      parallaxRef.current.scrollTo(pageIndex);
    };

    return (
        <>
            <StickyNavbar scrollToPage={scrollToPage} />
                <div className='App'>
                    
                    <Parallax ref={parallaxRef} pages={7.45} style={{ top: '0', left: '0' }} className='animation'>

                        <ParallaxLayer offset={0} speed={0.25}>
                            <div className='animation_layer parallax' id='background'></div>
                        </ParallaxLayer>

                        <ParallaxLayer offset={0} speed={0.25}>
                            <div className='container-welcome'>
                                <h1 className='text-welcome'>Welcome</h1>
                            </div>
                            </ParallaxLayer>

                        <ParallaxLayer offset={0} speed={0.25}>
                            <div className='container-unfold'>
                                <h1 className='text-unfold'>.. scroll down to read on</h1>
                            </div>
                        </ParallaxLayer>

                        <ParallaxLayer offset={0} speed={0.3}>
                            <div className='animation_layer parallax' id='clouds'></div>
                        </ParallaxLayer>

                        <ParallaxLayer offset={0} speed={0.32}>
                            <div className='animation_layer parallax' id='mountain6'></div>
                        </ParallaxLayer>

                        <ParallaxLayer offset={0} speed={0.35}>
                            <div className='animation_layer parallax' id='mountain5'></div>
                        </ParallaxLayer>

                        <ParallaxLayer offset={0} speed={0.40}>
                            <div className='animation_layer parallax' id='mountain4'></div>
                        </ParallaxLayer>

                        <ParallaxLayer offset={0} speed={0.41}>
                            <div className='animation_layer parallax' id='mountain3'></div>
                        </ParallaxLayer>

                        <ParallaxLayer offset={0} speed={0.43}>
                            <div className='animation_layer parallax' id='mountain2'></div>
                        </ParallaxLayer>

                        <ParallaxLayer offset={0} speed={0.45}>
                            <div className='animation_layer parallax' id='cliffs'></div>
                        </ParallaxLayer>

                        <ParallaxLayer offset={0} speed={0.54}>
                            <div className='animation_layer parallax' id='trees'></div>
                        </ParallaxLayer>

                        <ParallaxLayer offset={0} speed={0.59}>
                            <div className='animation_layer parallax' id='land2'></div>
                        </ParallaxLayer>

                        <ParallaxLayer offset={0} speed={0.67}>
                            <div className='animation_layer parallax' id='land1'></div>
                        </ParallaxLayer>

                        <ParallaxLayer offset={0} speed={0.73}>
                            <div className='animation_layer parallax' id='rocks'></div>
                        </ParallaxLayer>

                        <ParallaxLayer offset={1.2} speed={0.50}>
                            <Intro />
                        </ParallaxLayer>

                        <ParallaxLayer offset={2} speed={0.50}>
                            <PortfolioPage />
                        </ParallaxLayer>

                        <ParallaxLayer offset={4.8} speed={0.50}>
                            <Tools />
                        </ParallaxLayer>

                        <ParallaxLayer offset={5.8} speed={0.50}>
                            <About />
                        </ParallaxLayer>

                        <ParallaxLayer offset={6.8} speed={0.50}>
                            <Contact />
                        </ParallaxLayer>

                        <ParallaxLayer offset={7.4} speed={0}>
                            <footer>
                                <p>© 2025. Suzanne Hoftijzer</p>
                            </footer>
                        </ParallaxLayer>

                    </Parallax>
                </div>
        </>
    );
  }

export default App;
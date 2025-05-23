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
                            <div className="intro-text">
                                <h1 className="typewriter">Welcome</h1>
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

                        <ParallaxLayer offset={0} speed={0.42}>
                            <div className='animation_layer parallax' id='mountain3'></div>
                        </ParallaxLayer>

                        <ParallaxLayer offset={0} speed={0.44}>
                            <div className='animation_layer parallax' id='mountain2'></div>
                        </ParallaxLayer>

                        <ParallaxLayer offset={0} speed={0.47}>
                            <div className='animation_layer parallax' id='mountain1'></div>
                        </ParallaxLayer>

                        <ParallaxLayer offset={0} speed={0.62}>
                            <div className='animation_layer parallax' id='trees'></div>
                        </ParallaxLayer>

                        <ParallaxLayer offset={0} speed={0.68}>
                            <div className='animation_layer parallax' id='land'></div>
                        </ParallaxLayer>

                        <ParallaxLayer offset={0} speed={0.72}>
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
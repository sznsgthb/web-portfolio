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

                        <ParallaxLayer offset={0} speed={-0.10}>
                            <div className='animation_layer parallax' id='background'></div>
                        </ParallaxLayer>

                        <ParallaxLayer offset={0} speed={-0.10}>
                            <div className='container-welcome'>
                                <h1 className='text-welcome'>Welcome</h1>
                            </div>
                            </ParallaxLayer>

                        <ParallaxLayer offset={0} speed={-0.10}>
                            <div className='container-unfold'>
                                <h1 className='text-unfold'>scroll to read on..</h1>
                            </div>
                        </ParallaxLayer>

                        <ParallaxLayer offset={0} speed={-0.05}>
                            <div className='animation_layer parallax' id='stars'></div>
                        </ParallaxLayer>

                        <ParallaxLayer offset={0} speed={-0.20}>
                            <div className='animation_layer parallax' id='greenlight'></div>
                        </ParallaxLayer>

                        <ParallaxLayer offset={0} speed={-0.10}>
                            <div className='animation_layer parallax' id='bluelight'></div>
                        </ParallaxLayer>

                        <ParallaxLayer offset={0} speed={0.05}>
                            <div className='animation_layer parallax' id='cloud1'></div>
                        </ParallaxLayer>

                        <ParallaxLayer offset={0} speed={0.05}>
                            <div className='animation_layer parallax' id='cloud2'></div>
                        </ParallaxLayer>

                        <ParallaxLayer offset={0} speed={0.10}>
                            <div className='animation_layer parallax' id='cloud3'></div>
                        </ParallaxLayer>

                        <ParallaxLayer offset={0} speed={-0.15}>
                            <div className='animation_layer parallax' id='trees4'></div>
                        </ParallaxLayer>

                        <ParallaxLayer offset={0} speed={0.05}>
                            <div className='animation_layer parallax' id='trees3'></div>
                        </ParallaxLayer>

                        <ParallaxLayer offset={0} speed={0.30}>
                            <div className='animation_layer parallax' id='trees2'></div>
                        </ParallaxLayer>

                        <ParallaxLayer offset={0} speed={0.50}>
                            <div className='animation_layer parallax' id='trees1'></div>
                        </ParallaxLayer>

                        <ParallaxLayer offset={0} speed={0.70}>
                            <div className='animation_layer parallax' id='land'></div>
                        </ParallaxLayer>

                        {/* <ParallaxLayer offset={0} speed={0.73}>
                            <div className='animation_layer parallax' id='shine'></div>
                        </ParallaxLayer> */}

                        <ParallaxLayer offset={1.1} speed={0.50}>
                            <Intro />
                        </ParallaxLayer>

                        <ParallaxLayer offset={2} speed={0.50}>
                            <PortfolioPage />
                        </ParallaxLayer>

                        <ParallaxLayer offset={4.7} speed={0.50}>
                            <Tools />
                        </ParallaxLayer>

                        <ParallaxLayer offset={5.73} speed={0.50}>
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
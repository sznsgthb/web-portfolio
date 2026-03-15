import React from 'react';
import type { FC } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import moon from '/images/parallax/moon.svg';
import clouds from '/images/parallax/clouds.svg';
import DriftingClouds from '../DriftingClouds';
import TreeLanterns from '../TreeLanterns';
import Rocks from '../Rocks';
import overlay from '/images/parallax/overlay.svg';
import rightbranch from '/images/parallax/rightbranch.svg';
import leftbranch from '/images/parallax/leftbranch.svg';
import Intro from '../Intro/Intro';
import Portfolio from '../Portfolio/Portfolio';
import Tools from '../Tools/Tools';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Cliffs from '../Cliffs';
import './ParallaxPage.css';
import { useAdaptiveTriggers } from '../../useAdaptiveTriggers';
import { parallaxConfig } from '../../parallaxConfig';
import { Pages } from '../../types';
import type { ParallaxPageProps } from '../../types'




export const ParallaxPage: FC<ParallaxPageProps> = ({ parallaxRef }) => {
    const width = useAdaptiveTriggers({})
    
    return(

            <Parallax ref={parallaxRef} pages={parallaxConfig[width].pages} key={width} className='animation'>

                    <ParallaxLayer 
                        offset={0} 
                        speed={0} 
                        factor={parallaxConfig[width].pages} //test dit nog even
                        style={{ 
                            background: 'linear-gradient(190deg, #83D5C7 0%, #FFDF94 10%, #FAB699 25%, #FFD9A7 50%, #FFF4E8 100%)' 
                        }} 
                    />
                    <ParallaxLayer
                        offset={parallaxConfig[width][Pages.moon].offset}
                        speed={parallaxConfig[width][Pages.moon].speed}
                    >
                        <img src={moon} className="moon" alt="Moon" />
                    </ParallaxLayer>

                    <ParallaxLayer
                        offset={parallaxConfig[width][Pages.clouds].offset}
                        speed={parallaxConfig[width][Pages.clouds].speed}
                    >
                        <img src={clouds} className="clouds" alt="Clouds" />
                    </ParallaxLayer>

                    <ParallaxLayer
                        offset={parallaxConfig[width][Pages.drift].offset}
                        speed={parallaxConfig[width][Pages.drift].speed}
                    >
                        <DriftingClouds />
                    </ParallaxLayer>

                    <ParallaxLayer
                        offset={parallaxConfig[width][Pages.tree].offset}
                        speed={parallaxConfig[width][Pages.tree].speed}
                    >
                        <TreeLanterns />
                    </ParallaxLayer>


                    <ParallaxLayer
                        offset={parallaxConfig[width][Pages.welcome].offset}
                        speed={parallaxConfig[width][Pages.welcome].speed}
                    >
                        <div className='container-welcome'>
                            <h1 className='text-welcome'>Welcome</h1>
                        </div>
                    </ParallaxLayer>
                    

                    <ParallaxLayer
                        offset={parallaxConfig[width][Pages.intro].offset}
                        speed={parallaxConfig[width][Pages.intro].speed}
                    >
                        <div className="intro-wrapper">
                            <img src={overlay} alt="Overlay" />
                            <Intro className="intro" />
                        </div>
                    </ParallaxLayer>

                    <ParallaxLayer
                        offset={parallaxConfig[width][Pages.rocks].offset}
                        speed={parallaxConfig[width][Pages.rocks].speed}
                    >
                        <Rocks />
                    </ParallaxLayer>

                    <ParallaxLayer
                        offset={parallaxConfig[width][Pages.background].offset}
                        speed={parallaxConfig[width][Pages.background].speed}
                    >
                        <div className="background-wrapper">
                            <img src={rightbranch} className="rightbranch" alt="Branch" />
                            <img src={leftbranch} className="leftbranch" alt="Branch" />
                        </div>
                    </ParallaxLayer>

                    <ParallaxLayer
                        offset={parallaxConfig[width][Pages.portfolio].offset}
                        speed={parallaxConfig[width][Pages.portfolio].speed}
                    >
                            <Portfolio />
                    </ParallaxLayer>

                    <ParallaxLayer
                        offset={parallaxConfig[width][Pages.tools].offset}
                        speed={parallaxConfig[width][Pages.tools].speed}
                    >
                            <Tools />
                    </ParallaxLayer>

                    <ParallaxLayer
                        offset={parallaxConfig[width][Pages.about].offset}
                        speed={parallaxConfig[width][Pages.about].speed}
                    >
                            <About /> 
                    </ParallaxLayer>

                    <ParallaxLayer
                        offset={parallaxConfig[width][Pages.contact].offset}
                        speed={parallaxConfig[width][Pages.contact].speed}
                    >
                            <Cliffs />
                            <Contact />
                    </ParallaxLayer>

                    <ParallaxLayer
                        offset={parallaxConfig[width][Pages.footer].offset}
                        speed={parallaxConfig[width][Pages.footer].speed}
                    >
                        <footer>
                            <p>© 2026. Suzanne Hoftijzer</p>
                        </footer>
                    </ParallaxLayer>
                    
            </Parallax>
    )
}
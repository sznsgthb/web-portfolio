import React from 'react';
import ScrollAnimation from '../../containers/ScrollAnimation';
import './Tools.css';
import html5 from '/images/logos/html-logo.svg';
import css3 from '/images/logos/css-logo.svg';
import javascript from '/images/logos/js-logo.svg';
// import typescript from '/images/logos/ts-logo.svg';
import reactjs from '/images/logos/react-logo.svg';
import adobe from '/images/logos/acc-logo.svg';
import illustrator from '/images/logos/ai-logo.svg';
import aftereffects from '/images/logos/ae-logo.svg';
import photoshop from '/images/logos/ps-logo.svg';
import git from '/images/logos/git-logo.svg';
import pgsql from '/images/logos/pgsql-logo.svg';
import nodejs from '/images/logos/node-logo.svg';



function Tools() {
    return (
        <>
            <ScrollAnimation animation="fadeInUp" delay={500}>
                <h1>.. curated with the following tools</h1>
                <br/>
                </ScrollAnimation> 

                <ScrollAnimation animation="fadeInUp" delay={1000}>                    
                    <h2>Graphic design</h2>
                </ScrollAnimation>
                        <div className='logo-container-gd'>
                            <div className='logo'>
                                <img src={adobe} alt='logo' />
                                <p>Adobe Creative Cloud</p>
                            </div>

                        <div className='logo'>
                            <img src={illustrator} alt='logo' />
                            <p>Adobe Illustrator</p>
                        </div>

                        <div className='logo'>
                            <img src={aftereffects} alt='logo' />
                            <p>Adobe After Effects</p>
                        </div>

                        <div className='logo'>
                            <img src={photoshop} alt='logo' />
                            <p>Adobe Photoshop</p>
                        </div>
                    </div>

            <ScrollAnimation animation="fadeInUp" delay={1200}>
                <h2>Front-end</h2>
            </ScrollAnimation>
                    <div className='logo-container-fe'>

                        <div className='logo'>
                            <img src={reactjs} alt='logo' />
                            <p>React.js</p>
                        </div>

                        <div className='logo'>
                            <img src={javascript} alt='logo' />
                            <p>JavaScript</p>
                        </div>

                        {/* <div className='logo'>
                            <img src={typescript} alt='logo' />
                            <p>TypeScript</p>
                        </div> */}

                        <div className='logo'>
                            <img src={css3} alt='logo' />
                            <p>CSS 3</p>
                        </div>

                        <div className='logo'>
                            <img src={html5} alt='logo' />
                            <p>HTML 5</p>
                        </div>

                        <div className='logo'>
                            <img src={git} alt='logo' />
                            <p>Git</p>
                        </div>

                    </div>
                <br />

            <ScrollAnimation animation="fadeInUp" delay={1400}>  
                <h2>Back-end</h2>
            </ScrollAnimation>
                    <div className='logo-container-be'>

                        <div className='logo'>
                            <img src={nodejs} alt='logo' />
                            <p>Node.js</p>
                        </div>

                        <div className='logo'>
                            <img src={pgsql} alt='logo' />
                            <p>PostgreSQL</p>
                        </div>

                    </div>
        </>
    );
  }
  

export default Tools;
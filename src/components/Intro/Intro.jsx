import React from 'react';
import ScrollAnimation from '../../containers/ScrollAnimation';
import '../../containers/App.css';
import './Intro.css'

function Intro() {
    return (
        <>
            <div>
                <div>
                    <div className='container-h1'>
                        <ScrollAnimation animation="fadeInUp" delay={750}>
                            <h1 className='text-header1'>Hi there,</h1>
                        </ScrollAnimation>
                        <ScrollAnimation animation="fadeInUp" delay={1750}>
                            <h1 className='text-header2'>my name is Suzanne.</h1>
                        </ScrollAnimation>
                    </div>

                <div className='container-h2'>
                    <ScrollAnimation animation="fadeInUp" delay={2750}>
                            <h2 className='text-header3'>How great that you found your way to my page.</h2>
                        </ScrollAnimation>
                        <ScrollAnimation animation="fadeInUp" delay={3250}>
                            <h2 className='text-header3'>Here you'll find a peek into the things i've been creating — with care, curiosity and a 'bit' of color.</h2>
                        </ScrollAnimation>
                    </div>
                    

                    <ScrollAnimation animation="fadeInUp" delay={4750}>
                        <div className='intro-text'>
                            <p>As a content creator and full-stack web developer i'm excited about crafting colourful, visually rich, yet simple and user-friendly web experiences.</p>
                            <p>While I'm still early in my professional journey, I bring a strong foundation in React, a sharp eye for detail, and genuine enthusiasm for building thoughtful digital experiences.</p>
                            <p>I'm driven by the belief that technology and design should serve a purpose — to connect, inspire, to tell a story, or make life just a little easier.</p>
                            <p>On this page, you'll find a selection of the projects I've been working on.</p>
                                <br />
                            <p>Happy browsing!</p>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </>
    );
}

export default Intro;
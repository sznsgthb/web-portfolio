import React from 'react';
import ScrollAnimation from '../../containers/ScrollAnimation.js';
import '../../containers/App.css';
import './Intro.css'

function Intro({ className }) {
    
    return (
        <div className={className}>
            <ScrollAnimation animation="fadeInUp" delay={750}>
                <h1 className="h1-intro">Hi there.</h1>
            </ScrollAnimation>
            <ScrollAnimation animation="fadeInUp" delay={1750}>
                <h1 className='h1-intro'>My name is Suzanne.</h1>
            </ScrollAnimation>

            <div className='intro-text'>
                <ScrollAnimation animation="fadeInUp" delay={2750}>
                    <h3 className='text-header3'>How great that you found your way to my page.</h3>
                </ScrollAnimation>
                <ScrollAnimation animation="fadeInUp" delay={3250}>
                    <h3 className='text-header3'>Here you'll find a peek into the things i've been creating — with care, curiosity and a 'bit' of color.</h3>
                </ScrollAnimation>

            <ScrollAnimation animation="fadeInUp" delay={4750}>
                    <br/>
                    <h3>
                        As a content creator and full-stack web developer i'm excited about crafting colourful, visually rich, yet simple and user-friendly web experiences.
                        While still early in my professional journey, I bring a strong foundation in React, a sharp eye for detail, and genuine enthusiasm for building thoughtful digital experiences.
                        I'm driven by the belief that technology and design should serve a purpose — to connect, inspire, to tell a story, or make life just a little easier.
                        On this page, you'll find a selection of the projects I've been working on.
                    </h3>
                    <br />
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInUp" delay={8000}>
                    <h3>
                        Happy browsing!
                    </h3>
                </ScrollAnimation>
        </div>

        </div>
    );
}

export default Intro;
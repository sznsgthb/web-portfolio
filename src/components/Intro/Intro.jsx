import React from 'react';
import { useEffect, useRef, useState } from 'react';
import ScrollAnimation from '../../containers/ScrollAnimation';
import '../../containers/App.css';
import './Intro.css'

function Intro() {
    return (
        <>
            <div>
                <div>
                    <div className='container-header'>
                        <ScrollAnimation animation="fadeInUp" delay={500}>
                            <h1 className='text-header1'>Hi there,</h1>
                        </ScrollAnimation>
                        <ScrollAnimation animation="fadeInUp" delay={1000}>
                            <h1 className='text-header2'>my name is Suzanne.</h1>
                        </ScrollAnimation>
                    </div>

                    <ScrollAnimation animation="fadeInUp" delay={1500}>
                        <div className='intro-text'>
                            <p>As a self-taught designer and full-stack web developer I thoroughly enjoy creating colourful and visually rich, yet simple and user-friendly web experiences.</p>
                            <p>While I’m still early in my professional journey, I bring a strong foundation in React, a sharp eye for design and detail, and a huge enthusiasm for building thoughtful digital experiences.</p>
                            <p>I am motivated by using technology and design with intention — to serve a purpose and make a connection with you, the viewer.</p>
                            <p>On this page, you will find what I have been up to so far.</p>
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
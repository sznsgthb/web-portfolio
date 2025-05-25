import React from 'react';
import '../../containers/App.css';
import './Intro.css'

function Intro() {
    return (
        <>
            <div>
                <div>
                    <div className='container-header1'>
                        <h1 className='text-header1'>Hi there, my name is Suzanne.</h1>
                    </div>
                    <div className='container-header2'>
                       <h1 className='text-header2'>How lovely that you found my page.</h1>
                    </div>
                    <br />
                        <p>As a self-taught web designer and full-stack developer i thoroughly enjoy creating colourful and visually rich, yet simple and user-friendly web experiences.</p>
                         <p>While I’m still early in my professional journey, I bring a strong foundation in React, a sharp eye for design and detail, and a huge enthusiasm for building thoughtful digital experiences.</p>
                         <p>I am motivated by using technology and design with intention — to serve a purpose and make a connection with you, the viewer.</p>
                         <p>On this page, you will find what i have been up to so far.</p>
                         <br />
                        <p>Happy browsing! </p>
                </div>
            </div>
        </>
    );
}

export default Intro;
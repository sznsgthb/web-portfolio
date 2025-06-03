import React from 'react';
import '../../containers/App.css';
import ScrollAnimation from '../../containers/ScrollAnimation';
import './About.css'
import profilepicture from '/images/profile-picture-01.png';

function About() {
    return (
        <>
            <div className='container'>
                <div className='introduction'>
                    <ScrollAnimation animation="fadeInUp" delay={1000}>                   
                        <h1>A bit about me.. </h1>
                    </ScrollAnimation>

                    <ScrollAnimation animation="fadeInUp" delay={1500}>               
                        <p>... </p>
                        <br />
                        <br />
                    </ScrollAnimation>
                    
                    <ScrollAnimation animation="fadeInUp" delay={2500}>
                        <h1>Journey </h1>
                    </ScrollAnimation>

                    <ScrollAnimation animation="fadeInUp" delay={3000}>
                        <p>... </p>
                        {/* <p>Click [here] to see a timeline of my education and career journey. </p> */}
                    </ScrollAnimation>
                        
                </div>
                <ScrollAnimation animation="fadeIn" delay={1500}>
                    <div className='picture'>
                        <img src={profilepicture} alt='picture' />
                    </div>
                </ScrollAnimation>
            </div>
        </>
    );
}

export default About;
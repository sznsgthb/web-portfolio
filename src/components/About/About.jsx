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
                    <ScrollAnimation animation="fadeInUp" delay={500}>                   
                        <h1>A bit about me</h1>
                    </ScrollAnimation>

                    <ScrollAnimation animation="fadeInUp" delay={2000}>               
                        <p>While pursuing my fascination for the human mind in higher education, I studied the intersection of how our minds interact with digital solutions.
                                For years, I have crafted digital interventions with great pleasure, combining psychological insight, graphic design and active ingredients designed to stimulate behavioural change and improve health behaviours in clients with mental health conditions or lifestyle challenges.
                        </p>
                        <br />
                    </ScrollAnimation>

                    <ScrollAnimation animation="fadeInUp" delay={2750}>               
                        <p>Yet, limited by an inability to create new functionalities myself, it didn't take long before I took an interest in how programming actually works.
                                Being able to design and build the technology was exactly what I was after. Not to mention the limitless amount of creativity I knew I would be able to pour into it! It sparked a fire immediately.
                                Through courses and guidance from experienced colleagues, I learned the ropes of full-stack web development, with special focus on the front-end.
                        </p>
                        <p>This portfolio reflects my first steps into the world of programming, with many more to come.</p>
                        <br />
                    </ScrollAnimation>

                    <ScrollAnimation animation="fadeInUp" delay={3500}>               
                        <p>My journey has been far from linear, but always driven by curiosity, a love for learning, and a desire to expand my horizons.
                            I pride myself on always being ready to adapt to the changing tides of life,
                            fast-paced developments in the world,
                            my ever-evolving interests and values, and every hallenge or obstacle that comes my way.</p>
                    </ScrollAnimation>
                        
                </div>
                <ScrollAnimation animation="fadeIn" delay={1250}>
                    <div className='picture'>
                        <img src={profilepicture} alt='picture' />
                    </div>
                </ScrollAnimation>
            </div>
        </>
    );
}

export default About;
import React from 'react';
import '../../containers/App.css';
import './About.css'
import profilepicture from '/images/profile-picture-01.png';

function About() {
    return (
        <>
            <div className='container'>
                <div className='introduction'>
                    <h1>A bit about me... </h1>
                        <p>Bepakt en bezakt met een onuitputtelijke nieuwsgierigheid kenmerkt m'n loopbaan zich voortdurend willen uitbreiden van m'n vaardigheden. </p>
                        <br />
                        <p>
                        Uitgerust met de kennis vanuit mijn studie om adoptie te vergroten t.o.v. ehealth heb ikjaren  gewijdt aan het bouwen van content en het vormgeven van een grote verscheidenheid aan visuals. 
                        </p>
                        <br />
                        <p>.. opleiding full-stack development</p>
                        <br />
                        <h1>Just for fun </h1>
                        <p>When I’m not lost in my Figma files, you can find me scaling walls at my local bouldering gym, keeping my kittens off of my keyboard, or learning new jazz chords on the guitar!</p>
                        <br />
                        <h1>Journey </h1>
                        <p> Curious about my path? Click here to see a timeline of my education and career journey. </p>
                </div>
                <div className='picture'>
                    <img src={profilepicture} alt='picture' />
                </div>
            </div>
        </>
    );
}

export default About;
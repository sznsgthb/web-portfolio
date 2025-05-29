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
                        <p>... </p>
                        <br />
                        <h1>Just for fun </h1>
                        <p>...</p>
                        <br />
                        <h1>Journey </h1>
                        <p>Click [here] to see a timeline of my education and career journey. </p>
                </div>
                <div className='picture'>
                    <img src={profilepicture} alt='picture' />
                </div>
            </div>
        </>
    );
}

export default About;
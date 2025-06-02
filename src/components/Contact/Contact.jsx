import React from 'react';
import './Contact.css';
import ScrollAnimation from '../../containers/ScrollAnimation';
import linkedin from '/images/logos/linkedin-logo.svg';
import github from '/images/logos/github-logo.svg';
import mail from '/images/logos/mail-logo.svg';

function Contact() {
    return (
      <>
<div>
    <div className='contact-headers'>
        <ScrollAnimation animation="fadeInUp" delay={1000}>    
            <h1>Thanks for stopping by!</h1>
        </ScrollAnimation>
            
        <ScrollAnimation animation="fadeInUp" delay={1800}>    
            <h1>Let's connect.</h1>
        </ScrollAnimation>
      </div>

      <div className="contact-grid">

        <ScrollAnimation animation="fadeInUp" delay={2300}>    
            <h3>Shoot me a message:</h3>
        </ScrollAnimation>

        <ScrollAnimation animation="fadeInUp" delay={3100}>  
            <h3>.. or find me on these platforms:</h3>
        </ScrollAnimation>

        <ScrollAnimation animation="fadeIn" delay={2500}>  
            <div className="logo-container-email">   
                <div className="container-email">
                <img src={mail} alt="email logo" />
                <p>suzannehoftijzer@gmail.com</p>
                </div>
            </div>
        </ScrollAnimation>

        <ScrollAnimation animation="fadeIn" delay={3300}>  
            <div className="logo-container-sm">
            <div className="logo-sm">
                <img src={linkedin} alt="LinkedIn logo" />
                <a href="https://linkedin.com/in/suzannehoftijzer" target="_blank" rel="noopener noreferrer">
                    <p>LinkedIn</p>
                </a>
            </div>
            <div className="logo-sm">
                <img src={github} alt="GitHub logo" />
                <a href="https://github.com/sznsgthb" target="_blank" rel="noopener noreferrer">
                <p>GitHub</p>
                </a>
            </div>
            </div>
        </ScrollAnimation>

      </div>
    </div>
    </>
    );
  }
  
  export default Contact;

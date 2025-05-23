import React from 'react';
import './Contact.css';
import linkedin from '/images/logos/linkedin-logo.svg';
import github from '/images/logos/github-logo.svg';
import mail from '/images/logos/mail-logo.svg';

function Contact() {
    return (
      <>
<div>
    <div className='contact-headers'>
            <h1>Thanks for stopping by!</h1>
            <h1>Let's connect.</h1>
      </div>

      <div className="contact-grid">
        {/* Header 1 */}
        <h3>Shoot me a message:</h3>

        {/* Header 2 */}
        <h3>.. or find me on these platforms:</h3>

        {/* Email content */}
        <div className="logo-container-email">   
            <div className="container-email">
            <img src={mail} alt="email logo" />
            <p>suzannehoftijzer@gmail.com</p>
            </div>
        </div>

        {/* Social content */}
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
      </div>
    </div>
    </>
    );
  }
  
  export default Contact;

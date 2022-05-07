import React from 'react';

import * as c from '../assets/content/contactIndex';
import ContactForm from '../components/ContactForm';

const About = () => {
    return (
        <div className="contact__container" id="contact">
            <div className="contact__content">
                <h1 className="title---circles">CONTACT ME</h1> 

                <div className="contact__container---form">
                    <div className="contact__content---form">
                        <ContactForm /> 

                        <div className="contact__socials">
                            <span className="contact---title">Get in touch with me !</span>
                            <div className="socials__content">
                                <div className="contact__link discord">
                                    <img src={c.Discord} alt="Discord" />
                                    <span>Malek#4178</span>
                                </div>
                                <a href="https://github.com/MalekGuez" target="_blank" rel="noreferrer" className="contact__link">
                                    <img src={c.GitHub} alt="GitHub" />
                                </a>
                                <a href="https://linkedin.com/in/malekguezouli" target="_blank" rel="noreferrer" className="contact__link">
                                    <img src={c.Linkedin} alt="Linkedin" />
                                </a>
                            </div>
                            
                        </div>
                    </div>
                </div> 
                               
            </div>
        </div>
    );
}

export default About;
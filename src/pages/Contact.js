import React from 'react';
import ContactForm from '../components/ContactForm';

const About = () => {
    return (
        <div className="contact__container" id="contact">
            <div className="contact__content">
                <h1 className="title---circles">CONTACT ME</h1> 

                <div className="contact__split">
                    <div className="contact__left">
                        <ContactForm /> 
                    </div>
                    <div className="contact__right">

                    </div>
                </div> 
                               
            </div>
        </div>
    );
}

export default About;
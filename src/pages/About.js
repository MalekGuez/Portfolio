import React from 'react';

const About = () => {
    return (
        <div className="about__container" id="about">
            <div className="about__content">
                <h1 className="title---circles">WHO AM I ?</h1>

                <div className="about__texts">
                    <div className="texts__content">
                        Malek, 21 years old, a junior front-end developer currently based in France.<br/><br/>

                        On track for learning more about Web Development and Web Design.<br/><br/>

                        Cares a lot about the user experience. Passionated for UI animations and creating intuitive, dynamic user experiences.
                    </div>

                    <a className="button" href="./" target="_blank" rel="noopener noreferrer">
                        Link to my CV
                    </a>
                </div>
               
            </div>
        </div>
    );
}

export default About;
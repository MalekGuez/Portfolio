import React from 'react';

const AboutSIO = () => {
    return (
        <div className="about__container" id="about">
            <div className="about__content aboutsio__content">
                <h1 className="title---circles">Bienvenue sur mon Portfolio</h1>

                <div className="about__texts">
                    <div className="texts__content">

                        Je suis <strong>GUEZOULI Malek</strong>.<br/><br/>
                        
                        Actuellement en deuxième année de <strong>BTS Services Informatiques aux Organisations (BTS SIO)</strong> à Colmar dans la spécialité <strong>Solutions Logicielles et Applications Métiers (SLAM)</strong> qui est proposé au Lycée Camille Sée.<br/><br/>

                        Étant passionné par l'informatique, j'ai pour but de devenir <strong>développeur Web</strong>.
                    </div>

                    <a className="button" href="./" target="_blank" rel="noopener noreferrer">
                        Plus d'informations
                    </a>
                </div>
               
            </div>
        </div>
    );
}

export default AboutSIO;
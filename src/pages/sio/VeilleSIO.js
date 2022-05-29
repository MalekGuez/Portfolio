import React from 'react';

import Veille from '../../assets/content/about/VEILLE.pdf';

const VeilleSIO = () => {
    return (
        <div className="about__container" id="veille">
            <div className="about__content veille__content">
                <h1 className="title---circles">Veille Technologique</h1>

                <div className="about__texts">
                    <div className="texts__content">
                    Une veille bien pensée et organisée permet de savoir comment mettre à jour connaissances et compétences, avant même d’entamer la pratique. Elle permet également d’être à l’affût de nouveautés pouvant être pertinentes dans une activité pour aller jusqu’à pouvoir anticiper les problèmes ou opportunités.
                    <br/><br/><br/>
                    Afin de réaliser ma veille technologique, j'ai suivi des flux RSS grâce à l'application Feedly, et me suis renseigné via des articles parlant d'informatique se trouvant sur Google, ainsi que de vidéo YouTube basées sur l'informatique.
                    <br/><br/><br/>
                    Ma veille technologique porte sur Firebase, qui est un ensemble de services d'hébergement pour n'importe quel type d'application appartenant à Google.
                    </div>
                    <a className="button" href={Veille} target="_blank" rel="noopener noreferrer">
                        PDF de ma veille
                    </a>
                </div>
               
            </div>
        </div>
    );
}

export default VeilleSIO;
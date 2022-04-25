import React from 'react';

import * as p from '../assets/content/worksIndex';
import WorkSlider from '../components/generics/WorkSlider';

const Works = () => {
    
    const devProjects = [{
        Charlemagne: {
            name: "Charlemagne",
            logo: p.Charlemagne,
            link: "https://github.com/Nahay/Charlemagne"
        },

        WeebLampe: {
            name: "Weeb Lampe",
            logo: p.WL,
            link: "https://github.com/Nahay/WeebLampe"            
        },


    }];

    const designProjects = [{
        PulpFiction: {
            name: "Pulp Fiction",
            image: p.PF,
            link: ""
        }
    }];

    
    return (
        <div className="works__container" id="works">
            <div className="works__content">
                <h1 className="title---circles">WORKS</h1>
                
                <WorkSlider list={devProjects}/>
            </div>
       
        </div>
    );
}

export default Works;
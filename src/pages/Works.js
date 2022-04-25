import React from 'react';

import * as p from '../assets/content/worksIndex';
import WorksSlider from '../components/generics/WorksSlider';

const Works = () => {
    
    const devProjects = [
        {
            name: "Charlemagne",
            image: p.Charlemagne,
            link: "https://github.com/Nahay/Charlemagne"
        },
        {
            name: "Weeb Lampe",
            image: p.WL,
            link: "https://github.com/Nahay/WeebLampe"            
        },
        {
            name: "Weeb Battle",
            image: p.WB
        },
        {
            name: "Charlemagne",
            image: p.Charlemagne,
            link: "https://github.com/Nahay/Charlemagne"
        },
        {
            name: "Weeb Lampe",
            image: p.WL,
            link: "https://github.com/Nahay/WeebLampe"            
        },
        {
            name: "Weeb Battle",
            image: p.WB
        },
        {
            name: "Charlemagne",
            image: p.Charlemagne,
            link: "https://github.com/Nahay/Charlemagne"
        },
        {
            name: "Weeb Lampe",
            image: p.WL,
            link: "https://github.com/Nahay/WeebLampe"            
        },
        {
            name: "Weeb Battle",
            image: p.WB
        }
    ];

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

                <div className="works__slider">
                    <WorksSlider list={devProjects}/>
                </div>
            
            </div>
       
        </div>
    );
}

export default Works;
import React from 'react';

import WorksSlider from '../components/generics/WorksSlider';


const Works = () => {

    return (
        <div className="works__container" id="works">
            <div className="works__content">
                <h1 className="title---circles">WORKS</h1>
                <WorksSlider />
            
            </div>
       
        </div>
    );
}

export default Works;
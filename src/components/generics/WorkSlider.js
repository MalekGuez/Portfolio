import React, { useEffect, useState } from 'react';


const WorkSlider = ({list}) => {

    return ( 
        <div className="works__slider">
            {list.map((p, i) => {
                return (
                    <div className="works__box" key={i}>{p.name}</div>
                );
            })}
        </div>
    );
}

export default WorkSlider;
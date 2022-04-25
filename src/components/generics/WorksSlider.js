import React from 'react';


const WorksSlider = ({list}) => {

    return ( 
        <div className="slider__container">
            {list.map((p, i) => {
                return (
                    <div className="slider__box" key={i}>
                        <img className="slider__image" src={p.image} alt={p.name} width="100"/>
                        <h1 className="slider__title">{p.name}</h1>
                    </div>
                );
            })}
        </div>
    );
}

export default WorksSlider;
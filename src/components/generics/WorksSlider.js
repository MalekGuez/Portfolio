import React, { useRef } from 'react';

const WorksSlider = ({list}) => {

    const slider = useRef(null);

    return (
        <div className="slider">
            <div className="slider__inner" ref={slider} >
                    {list.map((p) => {
                        return (
                            <div className="slider__box" key={p.name}>
                                <img className="slider__image" src={p.image} alt={p.name} width="100"/>
                                <h1 className="slider__title">{p.name}</h1>

                                <div className="slider__infos" onClick={() => console.log("ok")}>
                                    {p.dev &&
                                        <div className="infos__content">
                                            {p.link && 
                                                <div className="info__item">
                                                    <a href={p.link} 
                                                </div>
                                            }
                                        </div>
                                    }
                                    {p.design && 
                                        <div className="infos__content">
                                            {p.link}
                                        </div>
                                    }
                                    {p.draw && 
                                        <div className="infos__content">
                                            {p.link}
                                        </div>
                                    }

                                </div>
                            </div>
                        );
                    })}
            </div>
            <div className="slider__arrows">
                
            </div>
        </div>       
    );
}

export default WorksSlider;
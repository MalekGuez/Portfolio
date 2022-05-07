import React, { useRef } from 'react';

import * as w from '../../assets/content/worksIndex';

const WorksSlider = ({list}) => {

    const slider = useRef(null);
    const arrowLeft = useRef(null);
    const arrowRight = useRef(null);

    const handleClickLeft = () => slider.current.scrollLeft -= 180;

    const handleClickRight = () => slider.current.scrollLeft += 180;

    return (
        <div className="slider">
            <div className="slider__inner" id="slider" ref={slider}>
                    {list.map((p) => {
                        return (
                            <div className="slider__box" key={p.name}>
                                <div className="box__content">                                    
                                    <h1 className="slider__title">{p.name}</h1>
                                    <div className="slider__image">
                                        <img src={p.image} alt={p.name} width="100"/>
                                    </div>                                    
                                </div>

                                <div className="slider__infos">
                                    {p.dev &&
                                        <div className="infos__content">
                                            {p.link && 
                                                <a href={p.link} target="_blank" className="info__item">
                                                    <img src={w.GitHub} alt={p.name} />
                                                </a>
                                            }
                                            { p.url && 
                                                <a href={p.url} target="_blank" className="info__item">
                                                    <img src={w.WWW} alt={p.name} />
                                                </a>
                                            }
                                            {p.wiki && 
                                                <a href={p.wiki} target="_blank" className="info__item">
                                                    <img src={w.Info} alt={p.name} />
                                                </a>
                                            }
                                        </div>
                                    }
                                    {p.design && 
                                        <div className="infos__content">
                                            <a href={p.link} target="_blank" className="info__item">
                                                <img src={w.Dribble} alt={p.name} />
                                            </a>
                                        </div>
                                    }
                                    {p.draw && 
                                        <div className="infos__content">
                                            <a href={p.link} target="_blank" className="info__item">
                                                <img src={w.Dribble} alt={p.name} />                                     
                                            </a>
                                        </div>
                                    }

                                </div>
                            </div>
                        );
                    })}
            </div>
            <div className="slider__arrows">
                <button className="arrow__left" onClick={handleClickLeft} ref={arrowLeft}>
                    <img src={w.ArrowLeft} alt={"Arrow Left"} />
                </button>
                <button className="arrow__right"  onClick={handleClickRight} ref={arrowRight}>
                    <img src={w.ArrowRight} alt={"Arrow Right"}/>
                </button>
            </div>
        </div>       
    );
}

export default WorksSlider;
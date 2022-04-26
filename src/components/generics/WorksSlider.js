import React, {useEffect, useState, useRef} from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faPaintBrush, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

import * as p from '../../assets/content/worksIndex';

const WorksSlider = () => {
    const dev = useRef();
    const design = useRef();
    const draw = useRef();

    const slider = useRef(null);

    const [width, setWidth] = useState(0);
    const [sliderList, setSliderList] = useState([]);


    useEffect(() => {
        setSliderList(devProjects);
        dev.current.classList.add("focused");
    }, []);
    
    useEffect(() => {
        setWidth(slider.current.scrollWidth-slider.current.offsetWidth);
    }
    , [sliderList]);

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
        }
    ];

    const designs = [
        {
            name: "Pulp Fiction",
            image: p.PF,
            link: ""
        },
        {
            name: "Pulp Fictiona",
            image: p.PF,
            link: ""
        },
        {
            name: "Pulp Fictionaa",
            image: p.PF,
            link: ""
        },
        {
            name: "Pulp ezFictiona",
            image: p.PF,
            link: ""
        },
        {
            name: "Pulp Fictzionaa",
            image: p.PF,
            link: ""
        }
        
    ];

    const drawings = [
        {
            name: "Pulp Fictioneza",
            image: p.PF,
            link: ""
        },
    ];

    // HANDLE -----------------------------------------------------

    const handleClickDev = () => {
        console.log({slider: slider.current});
        setWidth(0);
        dev.current.classList.add("focused");
        design.current.classList.remove("focused");
        draw.current.classList.remove("focused");
        setSliderList(devProjects);
    } 

    const handleClickDesign = () => {
        setWidth(0);
        design.current.classList.add("focused");
        dev.current.classList.remove("focused");
        draw.current.classList.remove("focused");
        setSliderList(designs); 

    }

    const handleClickDraw = () => {
        setWidth(0);
        draw.current.classList.add("focused");
        design.current.classList.remove("focused");
        dev.current.classList.remove("focused");
        setSliderList(drawings);
    }
    
    return ( 

        <div className="works__slider">
            <div className="slider__buttons">
                <div className="slider__button" onClick={handleClickDev} ref={dev}>
                    <FontAwesomeIcon icon={faLaptopCode} size="xl" className="button---icons"/>
                    <span>Development</span>
                </div>
                <div className="slider__button" onClick={handleClickDesign} ref={design}>
                    <FontAwesomeIcon icon={faPaintBrush} size="xl" className="button---icons"/>
                    <span>Design</span>
                </div>
                <div className="slider__button" onClick={handleClickDraw} ref={draw}>
                    <FontAwesomeIcon icon={faPen} size="xl" className="button---icons"/>
                    <span>Drawing</span>
                </div>
            </div>
            
            <motion.div className="slider" ref={slider}>
                <motion.div drag="x" dragConstraints={slider} className="slider__inner" whileDrag={{cursor: "grabbing"}}>
                    {sliderList.map((p) => {
                        return (
                            <motion.div className="slider__box" key={p.name}>
                                <img className="slider__image" src={p.image} alt={p.name} width="100"/>
                                <h1 className="slider__title">{p.name}</h1>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>                    
        </div>
       
    );
}

export default WorksSlider;
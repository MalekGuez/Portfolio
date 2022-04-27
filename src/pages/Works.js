import React, {useEffect, useState, useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faPaintBrush, faLaptopCode } from '@fortawesome/free-solid-svg-icons';


import * as p from './../assets/content/worksIndex';
import WorksSlider from '../components/generics/WorksSlider';

const Works = () => {
    const [sliderList, setSliderList] = useState([]);

    const dev = useRef();
    const design = useRef();
    const draw = useRef();

    const devProjects = [
        {
            name: "Charlemagne",
            image: p.Charlemagne,
            dev: true,
            link: "https://github.com/Nahay/Charlemagne"
        },
        {
            name: "Weeb Lampe",
            image: p.WL,
            dev: true,
            link: "https://github.com/Nahay/WeebLampe"            
        },
        {
            name: "Weeb Battle",
            dev: true,
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

    useEffect(() => {
        setSliderList(devProjects);
        dev.current.classList.add("focused");
    }, []);


    const handleClickDev = () => {
        dev.current.classList.add("focused");
        design.current.classList.remove("focused");
        draw.current.classList.remove("focused");
        setSliderList(devProjects);
    } 

    const handleClickDesign = () => {
        design.current.classList.add("focused");
        dev.current.classList.remove("focused");
        draw.current.classList.remove("focused");
        setSliderList(designs); 
    }

    const handleClickDraw = () => {
        draw.current.classList.add("focused");
        design.current.classList.remove("focused");
        dev.current.classList.remove("focused");
        setSliderList(drawings);
    }

    return (
        <div className="works__container" id="works">
            <div className="works__content">
                <h1 className="title---circles">WORKS</h1>

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

                    <WorksSlider list={sliderList}/>
                </div>            
            </div>
       
        </div>
    );
}

export default Works;
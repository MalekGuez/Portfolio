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
            dev: true,
            name: "Charlemagne",
            image: p.Charlemagne,
            link: "https://github.com/Nahay/Charlemagne",
            url: "https://le-charlemagne.netlify.app/",
            wiki: "https://github.com/Nahay/Charlemagne/wiki"
        },
        {
            dev: true,
            name: "Weeb Lampe",
            image: p.WL,
            dev: true,
            link: "https://github.com/Nahay/WeebLampe",
            url: "https://weeblampe.000webhostapp.com/index.php"    
        },
        {
            dev: true,
            name: "Weeb Battle",
            image: p.WB,
            url: "http://weeb-battle.000webhostapp.com/index.html"
        },
        {
            dev: true,
            name: "Charlemagne Réservation",
            image: p.Charlemagne,
            link: "https://github.com/Nahay/charlemagne-reservation-client",
        },
        {
            dev: true,
            name: "Rent Car",
            image: p.RentCar,
            link: "https://github.com/MalekGuez/RentCar",
            wiki: "https://github.com/MalekGuez/RentCar/wiki"
        },
    ];

    const designs = [
        {
            design: true,
            name: "Pulp Fiction",
            image: p.PF,
            link: "https://dribbble.com/shots/18123065-Pulp-Fiction"
        },
        {
            design: true,
            name: "3D Ball",
            image: p.Ball,
            link: "https://dribbble.com/shots/18127227-Geometric-shape"
        },
        {
            design: true,
            name: "Geometric shape",
            image: p.Geometric,
            link: "https://dribbble.com/shots/18127227-Geometric-shape"
        },
        {
            design: true,
            name: "Square Spiral",
            image: p.SSpiral,
            link: "https://dribbble.com/shots/18127335-Square-Spiral"
        },
        {
            design: true,
            name: "Spiral",
            image: p.Spiral,
            link: "https://dribbble.com/shots/18127326-Spiral"
        },
        {
            design: true,
            name: "Weeb Lampe - Texts",
            image: p.WeebLampe,
            link: "https://dribbble.com/shots/18128907-Weeb-Lampe-Texts",
        },
        {
            design: true,
            name: "Weeb Battle - Texts",
            image: p.WeebBattle,
            link: "https://dribbble.com/shots/18127507-Weeb-Battle-Texts",
            url: "https://drive.google.com/file/d/1WjnSTSuSESX-kO-x1vsLeyHo1vZMkuI9/view"
        }
    ];

    const drawings = [
        {
            draw: true,
            name: "Snorlax",
            image: p.Snorlax,
            link: "https://dribbble.com/shots/18122800-Snorlax"
        },
        {
            draw: true,
            name: "Shinobu",
            image: p.Shinobu,
            link: "https://dribbble.com/shots/18122794-Shinobu"   
        },
        {
            draw: true,
            name: "Luxray",
            image: p.Luxray,
            link: "https://dribbble.com/shots/18127239-Lux"   
        }
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

        setTimeout(() => {
            document.getElementById("slider").scrollLeft = 0;
        }, 250)
        
    } 

    const handleClickDesign = () => {
        design.current.classList.add("focused");
        dev.current.classList.remove("focused");
        draw.current.classList.remove("focused");
        setSliderList(designs); 
        setTimeout(() => {
            document.getElementById("slider").scrollLeft = 0;
        }, 250)
    }

    const handleClickDraw = () => {

        draw.current.classList.add("focused");
        design.current.classList.remove("focused");
        dev.current.classList.remove("focused");
        setSliderList(drawings);
        setTimeout(() => {
            document.getElementById("slider").scrollLeft = 0;
        }, 1000)
    }

    return (
        <div className="works__container" id="works">
            <div className="works__content">
                <h1 className="title---circles">WORKS</h1>

                <div className="works__slider">
                    <div className="slider__buttons">
                        <div className="slider__button" onClick={handleClickDev} ref={dev}>
                            <FontAwesomeIcon icon={faLaptopCode} size="xl" className="button---icons"/>
                            <span className="button__desc">Development</span>
                        </div>
                        <div className="slider__button" onClick={handleClickDesign} ref={design}>
                            <FontAwesomeIcon icon={faPaintBrush} size="xl" className="button---icons"/>
                            <span className="button__desc">Design</span>
                        </div>
                        <div className="slider__button" onClick={handleClickDraw} ref={draw}>
                            <FontAwesomeIcon icon={faPen} size="xl" className="button---icons"/>
                            <span className="button__desc">Drawing</span>
                        </div>
                    </div>

                    <WorksSlider list={sliderList}/>
                </div>            
            </div>
       
        </div>
    );
}

export default Works;
import React, { useRef } from "react";

import AboutSIO from "./AboutSIO";
import WorksSIO from "./WorksSIO";
import VeilleSIO from "./VeilleSIO";
import NavbarSIO from "../../components/navigation/NavbarSIO";

const Portfolio = () => {

    const bg = useRef(null);

    const onScroll = (e) => {
        if(e.target.scrollTop / e.target.clientHeight >= 1) bg.current.style.opacity = 1;
        else bg.current.style.opacity = e.target.scrollTop / e.target.clientHeight;        
    }

    return (
        <>
            <NavbarSIO/>
            <div className="section__container" onScroll={(e) => onScroll(e)}>
                <div className="background---blur"></div>
                <div className="background---clear" ref={bg}></div>
                <section className="section">
                    <AboutSIO />
                </section>

                <section className="section">
                    <WorksSIO/>
                </section>

                <section className="section">
                    <VeilleSIO/>
                </section>
            </div>
        </>
    )
}

export default Portfolio;
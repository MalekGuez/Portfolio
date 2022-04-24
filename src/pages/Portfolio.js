import React, { useRef } from "react";

import Home from "./Home";
import Navbar from "../components/navigation/Navbar";
import About from "./About";
import Skills from "./Skills";
import Works from "./Works";
import Contact from "./Contact";

const Portfolio = () => {

    const bg = useRef(null);

    const onScroll = (e) => bg.current.style.opacity = e.target.scrollTop / e.target.clientHeight;

    return (
        <>
            <Navbar />
            <div className="section__container" onScroll={(e) => onScroll(e)}>
                <div className="background---blur"></div>
                <div className="background---clear" ref={bg}></div>
                <section className="section">
                    <Home/>
                </section>

                <section className="section">
                    <About/>
                </section>

                <section className="section">
                    <Skills />
                </section>

                <section className="section">
                    <Works />
                </section>

                <section className="section">
                    <Contact />
                </section>

            </div>
        </>
    )
}

export default Portfolio;
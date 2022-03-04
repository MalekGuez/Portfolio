import React, { useEffect, useState, useRef } from "react";

import Home from "./subpages/Home";
import Content from "./subpages/Content";
import Navbar from "../components/navigation/Navbar";

const Portfolio = () => {

    const home = useRef(null);
    const content = useRef(null);
    const bg = useRef(null);

    const onScroll = (e) => {
        bg.current.style.opacity = e.target.scrollTop*1.2 / e.target.clientHeight
    }

    return (
        <>
            <Navbar />
            <div className="section__container" onScroll={(e) => onScroll(e)}>
                <div className="background---blur"></div>
                <div className="background---clear" ref={bg}></div>
                <section className="section">
                    <Home homeRef={home}/>
                </section>

                <section className="section">
                    <Content contentRef={content}/>
                </section>
            </div>
        </>
    )
}

export default Portfolio;
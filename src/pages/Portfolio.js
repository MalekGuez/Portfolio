import React, { useEffect, useState, useRef } from "react";

import Home from "./subpages/Home";
import Content from "./subpages/Content";
import Navbar from "../components/navigation/Navbar";

const Portfolio = () => {

    const home = useRef(null);


    const onScroll = () => {
        window.removeEventListener("scroll", onScroll);
        let x = document.documentElement.scrollTop;
        x = 5-x/100;
        if(x<0) x=0;
        home.current.style.backdropFilter = "blur("+x+"px)";
        window.addEventListener("scroll", onScroll);
        window.removeEventListener("scroll", onScroll);
    }

    return (
        <>
            <Navbar />
            <div className="section__container" onScroll={() => onScroll()}>
                <section className="section">
                    <Home home={home}/>
                </section>

                <section className="section">
                    <Content />
                </section>
            </div>
        </>
    )
}

export default Portfolio;
import React, { useEffect, useState, useRef } from "react";

import Home from "./subpages/Home";
import Content from "./subpages/Content";
import Navbar from "../components/navigation/Navbar";

const Portfolio = () => {

    const home = useRef(null);

    const onScroll = () => {
        window.removeEventListener('scroll', onScroll);
        let x = document.scrollTop;
        x = 6-x/50;
        if(x<0) x=0;
        console.log(x);
        // home.current.style.backdrop-filter = "blur("+x+"px)";
        window.addEventListener('scroll', onScroll);
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
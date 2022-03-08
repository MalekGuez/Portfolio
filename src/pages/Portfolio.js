import React, { useRef } from "react";

import Home from "./Home";
import Contents from "./Contents";
import Navbar from "../components/navigation/Navbar";

const Portfolio = () => {

    const home = useRef(null);
    const contents = useRef(null);
    const bg = useRef(null);

    const onScroll = (e) => { bg.current.style.opacity = e.target.scrollTop / e.target.clientHeight }

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
                    <Contents contentsRef={contents}/>
                </section>
            </div>
        </>
    )
}

export default Portfolio;
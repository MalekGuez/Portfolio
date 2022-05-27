import React, { useRef } from "react";

import Navbar from "../../components/navigation/Navbar";

const Portfolio = () => {

    const bg = useRef(null);

    const onScroll = (e) => {
        if(e.target.scrollTop / e.target.clientHeight >= 1) bg.current.style.opacity = 1;
        else bg.current.style.opacity = e.target.scrollTop / e.target.clientHeight;
        
    }

    return (
        <>
            <Navbar />
            <div className="section__container" onScroll={(e) => onScroll(e)}>
                <div className="background---blur"></div>
                <div className="background---clear" ref={bg}></div>
                <section className="section">
                </section>

                <section className="section">
                </section>

                <section className="section">
                </section>

                <section className="section">
                </section>

                <section className="section">
                </section>

            </div>
        </>
    )
}

export default Portfolio;
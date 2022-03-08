import React from "react";

import About from "./subpages/About";
import Skills from "./subpages/Skills";

const Contents = ({contentsRef}) => {
    return (
        <div className="contents__container" ref={contentsRef}>
            <div className="contents__content">
                <section className="contents---section">
                    <About/>
                </section>
                <section className="contents---section two">
                    <Skills/>
                </section>
                <section className="contents---section one">
                </section>
            </div>
        </div>
    );
}

export default Contents;
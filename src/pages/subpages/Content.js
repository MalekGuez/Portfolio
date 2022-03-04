import React from "react";

const Content = ({contentRef, bgRef}) => {
    return (
        <div className="content__container" ref={contentRef}>
            blabla
            <div className="content__background" ref={bgRef}></div>
        </div>
    );
}

export default Content;
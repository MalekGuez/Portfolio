import React from 'react';
import Button from '../components/generics/Button';

const Home = ({homeRef}) => {
    return (
        <div className="home__container" ref={homeRef}>
            <div className="home__background---blured"></div>

            <div className="home__content">
                <p className="bold home__text">Hi my name is</p>
                <p className="bold home__name">Malek.</p>

                <div className="home__items">
                    <p className="bold home__text">I'm a</p>

                    <div className="item__3D-container">
                        <div className="bold">Developer</div>
                        <div className="bold">Designer</div>
                        <div className="bold">Tech fan</div>
                        <div className="bold">Freelancer</div>
                    </div>
                </div>
                <div className="home__button">
                    <Button text="About me" onClick={() => console.log("e")}/>
                </div>
            </div>
        </div>
    );
};

export default Home;
import React from 'react';
import Button from '../../components/generics/Button';

const Home = ({home}) => {
    return (
        <div className="home__container" ref={home}>
            <div className="home__content">
                <p className="bold home---text">Hi my name is</p>
                <p className="bold home---name">Malek.</p>
                <div className="content__item">
                    <p className="bold home---text">I'm a</p>
                    <div className="item__3D-container">
                        <div className="bold">Developer</div>
                        <div className="bold">Designer</div>
                        <div className="bold">TECH FAN</div>
                        <div className="bold">Freelancer</div>
                    </div>
                </div>
                <Button text="About me" onClick={() => console.log("e")}/>
            </div>
        </div>
    );
};

export default Home;
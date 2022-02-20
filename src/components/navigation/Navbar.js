import React from 'react';
import Button from '../generics/Button';

const Navbar = () => {
    return (
        <nav className="nav__container">
            <div className="nav__logo">&lt;/&gt;</div>
            <div className="nav__items">
                <div className="nav__item">Home</div>
                <div className="nav__item">About</div>
                <div className="nav__item">Portfolio</div>
                <Button text={"Contact me"} onClick={() => console.log("")} />
            </div>
        </nav>
    );
};

export default Navbar;
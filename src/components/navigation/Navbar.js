import React from 'react';
import Button from '../generics/Button';

const Navbar = () => {
    return (
        <nav className="nav__container">
            <div className="nav__logo">
                <a className="nav__item" href="#home">&lt;/&gt;</a>
            </div>
            <div className="nav__items">
                <a className="nav__item" href="#home">Home</a>
                <a className="nav__item" href="#about">About</a>
                <a className="nav__item" href="#works">Portfolio</a>
                <a className="button" href="#contact">Contact me</a>
            </div>
        </nav>
    );
};

export default Navbar;
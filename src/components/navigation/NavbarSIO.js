import React from 'react';

const NavbarSIO = () => {
    return (
        <nav className="nav__container">
            <div className="nav__logo">
                <a className="nav__item" href="#home">&lt;/&gt;</a>
            </div>
            <div className="nav__items">
                <a className="nav__item" href="#about">À propos</a>
                <a className="nav__item" href="#works">Projets</a>
                <a className="nav__item" href="#veille">Veille technologique</a>
            </div>
        </nav>
    );
};

export default NavbarSIO;
import React from 'react';
import './header.css';
import Search from './Search/Search';

const Header = (props) => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__logo">Тут будет логотип</div>
                    <Search />
                </div>
            </div>
        </header>
    );
};

export default Header;

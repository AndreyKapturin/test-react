import React from 'react';
import './header.css';

const Header = (props) => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__logo">Тут будет логотип</div>
                    <div className="header__search">
                        Здесь будет компонент поиска
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

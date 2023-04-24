import React from 'react';
import './search.css';

const Search = (props) => {
    return (
        <div className="search">
            <input
                className="search__input"
                placeholder="Поиск..."
                onChange={() => {}}
            />
        </div>
    );
};

export default Search;

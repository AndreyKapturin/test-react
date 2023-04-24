import React from 'react';
import './App.css';
import Main from './components/Main/Main';
import Header from './components/Header/Header';

function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <div>Тут будет футер</div>
        </div>
    );
}

export default App;

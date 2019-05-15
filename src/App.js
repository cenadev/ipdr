import React from 'react'

import './App.css'

import Logo from './components/Logo'
import Menu from './components/Menu'
import Main from './components/Main'

export default function App() {
    return (
        <div className="App">
            <Logo />
            <Menu />
            <Main />
        </div>
    );
}
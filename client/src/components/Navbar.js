import React, { useState } from 'react';
import { useDarkMode } from '../hooks/useDarkMode.js'

const Navbar = () => {
    const [darkMode, setDarkMode] = useDarkMode("darkmode", false);
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };
    return (
        <nav className="navbar">
            <h1 className="nav-header">⚽ Soccer Stats 2019</h1>
            <div className="dark-mode__toggle">
                <div
                    onClick={toggleMode}
                    className={darkMode ? 'toggle toggled' : 'toggle'}
                />
            </div>
        </nav>
    );
};

export default Navbar;

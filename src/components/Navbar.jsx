import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <h2>Jatun Taki</h2>
            </div>
            <div className="navbar-right">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
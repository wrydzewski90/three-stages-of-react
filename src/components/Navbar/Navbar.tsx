import React from 'react';
import './Navbar.scss';

const Navbar = () => {
    return (
        <div className="navbar-wrapper">
            <div className="nav-left-side">
                <ul>
                    <li>home</li>
                    <li>about</li>
                    <li>work</li>
                    <li>writing</li>
                    <li className="contact">contact</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;

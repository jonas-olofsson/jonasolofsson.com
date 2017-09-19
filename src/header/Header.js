import React, { Component } from 'react';
import logo from './logo.svg';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <img src={logo} className="logo" alt="logo" />
                <h2>Jonas Olofsson</h2>
            </div>
        );
    }
}

export default Header;

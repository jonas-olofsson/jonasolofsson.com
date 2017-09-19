import React, { Component } from 'react';
import image from './jag.jpg';
import './IndexPage.css';

class IndexPage extends Component {
    render() {
        return (
            <div className="index-page">
                <img src={image} className="index-image" alt="Me" />
            </div>
        );
    }
}

export default IndexPage;

// @flow
import * as React from 'react';
import image from './jag.jpg';
import './IndexPage.css';

type Props = {}

class IndexPage extends React.Component<Props> {
    render() {
        return (
            <div className="index-page">
                <img src={image} className="index-image" alt="Me" width="250px"/>
            </div>
        );
    }
}

export default IndexPage;

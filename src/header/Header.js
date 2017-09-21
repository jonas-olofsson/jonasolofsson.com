// @flow
import * as React from 'react';
import './Header.css';

type Props = {}

class Header extends React.Component<Props> {
    render() {
        return (
            <div className="site-header">
                <h2>Jonas Olofsson</h2>
            </div>
        );
    }
}


export default Header;

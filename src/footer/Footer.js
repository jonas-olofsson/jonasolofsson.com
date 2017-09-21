// @flow
import * as React from 'react';
import './Footer.css';

type Props = { }

class Footer extends React.Component<Props> {
    render() {
        return (
            <footer className="site-footer">
                &copy; Jonas Olofsson
            </footer>
        );
    }
}

export default Footer;

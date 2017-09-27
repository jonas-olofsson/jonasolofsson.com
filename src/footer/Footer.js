// @flow
import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

type Props = { }

class Footer extends React.Component<Props> {
    render() {
        return (
            <footer className="site-footer">
                <a className={"site-performance-link"} href="https://observatory.mozilla.org/analyze.html?host=www.jonasolofsson.com">Mozilla Observatory</a>
                <a className={"site-performance-link"} href="https://testmysite.io/59c4c5eb0752d0733ba6a876/www.jonasolofsson.com">Testmysite.io</a>
                <div>&copy; Jonas Olofsson</div>
            </footer>
        );
    }
}

export default Footer;

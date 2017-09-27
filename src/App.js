// @flow
import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Header from './header/Header.js'
import IndexPage from './index-page/IndexPage.js'
import Footer from './footer/Footer.js'

type Props = {
}

class App extends React.Component<Props> {
  render() {
    return (
      <div className="App">
          <Header/>
          <IndexPage/>
          <Footer/>
      </div>
    );
  }
}

export default App;

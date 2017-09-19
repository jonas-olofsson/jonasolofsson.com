import React, { Component } from 'react';
import './App.css';
import Header from './header/Header.js'
import IndexPage from './index-page/IndexPage.js'
import Footer from './footer/Footer.js'

class App extends Component {
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

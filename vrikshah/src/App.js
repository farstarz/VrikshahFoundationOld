import React from 'react';
import { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import TakeAction from './components/TakeAction';
import Facts from './components/Facts';
import ContactUs from './components/ContactUs';
import Navi from './components/Navi';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navi />
        <Home className="Component-div" />
        <About className="Component-div" />
        <TakeAction className="Component-div" />
        <Facts className="Component-div" />
        <ContactUs className="Component-div" />
        <Footer className="Component-div" />

      </div>
    );
  }
}

export default App;

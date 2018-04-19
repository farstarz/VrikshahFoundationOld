import React from 'react';
import { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import TakeAction from './components/TakeAction';
import Facts from './components/Facts';
import ContactUs from './components/ContactUs';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home  />
        <h2 className="heading" id="about">ABOUT</h2>
        <About />
        <h2 className="heading" id="takeaction">TAKE ACTION</h2>
        <TakeAction />
        <h2 className="heading" id="facts">FACTS</h2>
        <Facts />
        <h2 className="heading" id="contactus">CONTACT US</h2>
        <ContactUs />

      </div>
    );
  }
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Facts from './components/Facts';
import TakeAction from './components/TakeAction';
import ContactUs from './components/ContactUs';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route exact path="/" component={Home} />
      <Route path="/About" component={About} />
      <Route path="/Facts" component={Facts} />
      <Route path="/TakeAction" component={TakeAction} />
      <Route path="/ContactUs" component={ContactUs} />
    </div>
  </Router>
  ,
  document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Facts from './components/Facts';
import TakeAction from './components/TakeAction';
import ContactUs from './components/ContactUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import { browserHistory, Router } from 'react-router';
import {Nav} from 'react-bootstrap';


ReactDOM.render(
    <BrowserRouter>
      <div className='app-container'>
        <Nav />
          <Route path="/" component={App} />
          {/*<Route path="/" component={Home}  />
          <Route path="/About" component={About}   />
          <Route path="/Facts" component={Facts}   />
          <Route path="/TakeAction" component={TakeAction}   />
          <Route path="/ContactUs" component={ContactUs}    />*/}
      </div>
    </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();

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
import { applyRouterMiddleware, browserHistory, Router } from 'react-router';
import { useScroll } from 'react-router-scroll';
import {Provider} from 'react-redux';
import { reducers, createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import {Nav} from 'react-bootstrap';

const createStoreWithMiddleware = createStore(reducers, applyMiddleware(ReduxPromise));

ReactDOM.render(
  <Provider store={createStoreWithMiddleware}>
    <BrowserRouter>
      <div className='app-container'>
        <Nav />
          {/*<Route path="/" component={App} />*/}
          <Route path="/Home" component={Home}
            onEnter={function(){
              document.getElementById('home_id').scrollIntoView();
              }
            }
          />
          <Route path="/About" component={About}
            onEnter={function(){
              document.getElementById('about_id').scrollIntoView();
              }
            }
          />
          <Route path="/Facts" component={Facts}
            onEnter={function(){
              document.getElementById('facts_id').scrollIntoView();
              }
            }
          />
          <Route path="/TakeAction" component={TakeAction}
            onEnter={function(){
              document.getElementById('takeAction_id').scrollIntoView();
              }
            }
          />
          <Route path="/ContactUs" component={ContactUs}
            onEnter={function(){
              document.getElementById('contactUs_id').scrollIntoView();
              }
            }
          />
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#app')
);
registerServiceWorker();

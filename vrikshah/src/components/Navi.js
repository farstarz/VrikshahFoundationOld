import React, { Component } from 'react';
import '../App.css';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import ScrollableAnchor from 'react-scrollable-anchor';

class Navi extends Component {
   render() {
      return(

        <header id="masthead" className="site-header original" role="banner">
  				<div className="header-wrap" data-parallax-video="">
  				  <div className="header-wrap-inner">
              <div className="site-branding">
                <h1 className="site-title">
                  <a href="#Home" rel="home">
                    <span className="screen-reader-text">
                      Vrikshah Foundation
                    </span>
                    <span className="site-title-text">
                      Vrikshah Foundation
                    </span>
                  </a>
                </h1>
                <p className="site-description">
                   Tastefully Simple
                </p>
              </div>
              <nav id="site-navigation"  role="navigation">
  				  			<div className="layout-medium">
                    <div className="nav-menu">
  				  					<ul id="menu-main">
                        <li id="menu-home">
                          <a href="#Home">Home</a>
                        </li>
                        <li id="menu-about">
                          <a href="#About">About</a>
                        </li>
                        <li id="menu-takeaction">
                          <a href="#TakeAction">Initiative</a>
                        </li>
                        <li id="menu-facts">
                          <a href="#Facts">Facts</a>
                        </li>
                        <li id="menu-contactus">
                          <a href="#ContactUs">Contact Us</a>
                        </li>
                      </ul>
                    </div>
					  			</div>
  				  	</nav>

            </div>
  			  </div>
  			 </header>

        /*  <Navbar.Header>
            <Navbar.Brand>
              <a href="#Home">Vrikshah</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
            <Nav bsStyle="pills" activeKey={1}>
              <NavItem eventkey={1} href="#Home">
                Home
              </NavItem>
              <NavItem eventkey={2} href="#About">
                About
              </NavItem>
              <NavItem eventkey={3} href="#TakeAction">
                Initiative
              </NavItem>
              <NavItem eventkey={4} href="#Facts">
                facts
              </NavItem>
              <NavItem eventkey={5} href="#ContactUs">
                ContactUs
              </NavItem>
            </Nav>*/

      );
    }
  }

export default Navi;

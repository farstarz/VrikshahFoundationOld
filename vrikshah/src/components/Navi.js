import React, { Component } from 'react';
import '../App.css';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class Navi extends Component {
   render() {
      return(
        <header id="masthead" className="site-header original" role="banner">
  			  <div className="header-wrap" data-parallax-video="">
  				  <div className="header-wrap-inner">
              <div className="site-branding">
                <h1 className="site-title">
                  <a href="Home" rel="home">
                    <span className="screen-reader-text">Vrikshah Foundation
                    </span>
                    <span className="site-title-text">Vrikshah Foundation
                    </span>
                  </a>
                </h1>
                <p className="site-description">let us plant some trees
                </p>
              </div>
              <nav id="site-navigation" className="main-navigation\
                site-navigation" role="navigation">
  						  <div className="menu-wrap">
  							  <div className="layout-medium">
  								  <a className="menu-toggle">
  									  <span className="lines"></span>
  									</a>
										<div className="nav-menu">
  									  <ul id="menu-main-menu" className="menu-custom">
                        <li id="menu-item-2234" className="menu-item menu-item-\
                          type-taxonomy menu-item-object-category menu-item\
                          -2234">
                          <a href="Home">Home</a>
                        </li>
                        <li id="menu-item-13059" className="menu-item menu-item\
                          -type-taxonomy menu-item-object-category menu-item-\
                          13059">
                          <a href="About">About</a>
                        </li>
                        <li id="menu-item-13061" className="menu-item menu-item\
                          -type-taxonomy menu-item-object-category menu-item-\
                          13061">
                          <a href="TakeAction">Initiative</a>
                        </li>
                        <li id="menu-item-13083" className="menu-item menu-item\
                          -type-taxonomy menu-item-object-category menu-item-\
                          13083">
                          <a href="Facts">Facts</a>
                        </li>
                        <li id="menu-item-10755" className="menu-item menu-item\
                          -type-taxonomy menu-item-object-category menu-item-\
                          10755">
                          <a href="ContactUs">Contact Us</a>
                        </li>
                      </ul>
                    </div>
										<a className="search-toggle toggle-link"></a>
										{/*}	<div className="search-container">
  															<div className="search-box" role="search">
  																<form className="search-form" method="get" action="http://mmminimal.com/">
  																	<label>
  																		<span>
  																			Search for																		</span>
  																		<input type="search" id="search-field" name="s" placeholder="type and hit enter" className="input-text"/>
  																	</label>
  																	<input type="submit" className="search-submit" value="Search" />
  																</form>
  															</div>
  														</div>*/}
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

import React, { Component } from 'react';
import '../App.css';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class Navi extends Component {
   render() {
      return(

        <header id="masthead" class="site-header original" role="banner">
  						<div class="header-wrap" data-parallax-video="">
  				<div class="header-wrap-inner">
  													<nav id="site-navigation" class="main-navigation site-navigation" role="navigation">
  									<div class="menu-wrap">
  										<div class="layout-medium">
  											<a class="menu-toggle">
  												<span class="lines"></span>
  											</a>

  																		<a class="shopping-cart" href="http://mmminimal.com/cart/" title="View your shopping cart">
  							</a>


  											<div class="nav-menu">
  												<ul id="menu-main-menu" class="menu-custom"><li id="menu-item-2234" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-2234"><a href="Home">Home</a></li>
  <li id="menu-item-13059" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-13059"><a href="#About">About</a></li>
  <li id="menu-item-13061" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-13061"><a href="#TakeAction">Initiative</a></li>
  <li id="menu-item-13083" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-13083"><a href="#Facts">Facts</a></li>
  <li id="menu-item-10755" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-10755"><a href="#ContactUs">Contact Us</a></li>
  </ul>											</div>

  																									<a class="search-toggle toggle-link"></a>

  													{/*}	<div class="search-container">
  															<div class="search-box" role="search">
  																<form class="search-form" method="get" action="http://mmminimal.com/">
  																	<label>
  																		<span>
  																			Search for																		</span>
  																		<input type="search" id="search-field" name="s" placeholder="type and hit enter" class="input-text"/>
  																	</label>
  																	<input type="submit" class="search-submit" value="Search" />
  																</form>
  															</div>
  														</div>*/}

  																					</div>
  									</div>
  								</nav>
  															<div class="site-branding">
  																						<h1 class="site-title">
  														<a href="http://mmminimal.com/" rel="home">
  															<span class="screen-reader-text">
  																mmminimal															</span>
  															<span class="site-title-text">
  																mmminimal															</span>
  														</a>
  													</h1>

  																					<p class="site-description">
  													Tastefully Simple												</p>
  																			</div>
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

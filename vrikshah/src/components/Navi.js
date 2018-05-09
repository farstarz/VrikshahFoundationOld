import React, { Component } from 'react';
import '../App.css';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class Navi extends Component {
   render() {
      return(
        <Navbar>
          <Navbar.Header>
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
            </Nav>
        </Navbar>
      );
    }
  }

export default Navi;

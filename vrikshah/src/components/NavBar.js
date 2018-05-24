import React, { Component } from 'react';
import '../App.js';

class NavBar extends Component {
    render() {
      return(
        <ul class>
          <li className="active">
            <a href="/" data-text="Home">
              <div>Home</div>
            </a>
          </li>
          <li>
            <a href="/about" data-text="About">
              <div>About</div>
            </a>
          </li>
          <li>
            <a href="/takeaction" data-text="Take Action">
              <div>Take Action</div>
            </a>
          </li>
          <li>
            <a href="/facts" data-text="Facts">
              <div>Facts</div>
            </a>
          </li>
          <li>
            <a  href="/contactus" data-text="Contact Us">
              <div>Contact Us</div>
            </a>
          </li>
      </ul>
      );
    }
  }

export default NavBar;

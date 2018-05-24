import React, { Component } from 'react';
import '../App.css';
import tribute from "../Images/Tribute001.jpg"

{/*class ContactUs extends Component {
    render() {
        return (
        <div className="ContactUs Section">
            <h1 className="contactUs-intro">
            <strong>Contact Us </strong>i:gjhgjh</h1>
            <p className="contactUs-item">
            rfjghgjf jhfjhfh fjvjhgjhgvb jgvjhvjhf
            vjhfvjhmvh d cfd fgfjhfvjhjgch fx
            fhcjbnmbgbjh nmvbnvv nbkh ffjh fjhgbn
            fjmghf jhv ky giyd fg hg ik hg jkhjg
            yug igjhj g hjgh kjh ighjkhjhk futuy
            gh yuyjng yguhfjhg gihjgh hjg </p>
        </div>
        );
    }
}*/}




class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'type your name here...',
      email: 'type your name here...',
      contactNo: 'optional',
      message: 'type your message here...'
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
    <div className="container Section" id="contactUs_id">
      <div className="row">
        <div className="col">
          <div>
            <img src={tribute} alt="tribute" />
          </div>
        </div>
        <div className="col">
          <form>
            <label>
              Name:
              <input
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
              Email:
              <input
                name="email"
                type="text"
                value={this.state.email}
                onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
              Contact No:
              <input
                name="contactNo"
                type="text"
                value={this.state.contactNo}
                onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
              Message:
              <input
                name="message"
                type="text"
                value={this.state.message}
                onChange={this.handleInputChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
    );
  }
}
export default ContactUs;

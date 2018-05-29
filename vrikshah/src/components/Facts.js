import React, { Component } from 'react';
import '../App.css';
import ScrollableAnchor from 'react-scrollable-anchor';

class Facts extends Component {
    render() {
        return (
        <ScrollableAnchor id="Facts">
        <div className="container Section">
          <h4>did you know ?</h4>
          <div className="row">
            <div className="col-md-7">
              <div className="Container-1">
                <h1 className="App-intro">
                  <strong>Fact 1</strong>
                </h1>
                <p className="facts-item">rfjghgjf
                  jhfjhfh fjvjhg jhgvb jgvjhvjhf
                  vjhfvjhmvh d cfd fgfjhfvjhjgch
                  fx fhcjbnmbgbjh nmvbnvv nbkh
                  ffjh fjhgbn fjmghf jhky giyd
                  fg hg ik hg jkhjg yug igjhj
                  g hjgh kjhighjkhjhk futuy gh
                  yuyjng yguhfjhg gihjgh hjg
                </p>
              </div>
            </div>
            <div className="col-md-5"></div>
            <div className="col-md-5"></div>
            <div className="col-md-7">
              <div className="Container-2">
                <h1 className="App-intro">
                  <strong>Fact 2</strong>
                </h1>
                <p className="facts-item">rfjghgjf
                  jhfjhfh fjvjhg jhgvb jgvjhvjhf
                  vjhfvjhmvh d cfd fgfjhfvjhjgch
                  fx fhcjbnmbgbjh nmvbnvv nbkh
                  ffjh fjhgbn fjmghf jhky giyd
                  fg hg ik hg jkhjg yug igjhj
                  g hjgh kjhighjkhjhk futuy gh
                  yuyjng yguhfjhg gihjgh hjg
                </p>
              </div>
            </div>
          </div>
        </div>
        </ScrollableAnchor>
        );
    }
}

export default Facts;

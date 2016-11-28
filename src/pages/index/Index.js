import React, { Component } from 'react';
import logo from "../../logo.svg";

class Index extends Component {

  static propTypes = {
    title: React.PropTypes.string
  }

  static defaultProps = {
    title: "undefined"
  }


  render() {
    return(
      <div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.props.title}</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}
export default Index;

import React, { Component } from 'react';


class Methods extends Component {

  static propTypes = {
    title: React.PropTypes.string,
    reasoning: React.PropTypes.string,
    how: React.PropTypes.string,
    outcome: React.PropTypes.string
  }

  static defaultProps = {
    title: "undefined",
    reasoning: "undefined",
    how: "undefined",
    outcome: "undefined"
  }


  render() {
    return(
      <div className="timeline-item timeline-method">
        <div className="row">
          <div className="">
            <h5 className="method-title">Research</h5>
            <h4>{this.props.title}</h4>
            <p><b>Reasoning</b> : {this.props.reasoning}</p>
            <p><b>How</b> : {this.props.how}</p>
            <p><b>Outcome</b> : {this.props.outcome}</p>
          </div>
        </div>




      </div>
    )
  }
}
export default Methods;

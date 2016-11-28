import React, { Component } from 'react';


class Analysis extends Component {

  static propTypes = {
    title: React.PropTypes.string,
    list: React.PropTypes.string,
    analysis: React.PropTypes.string
  }

  static defaultProps = {
    title: "undefined",
    list: "undefined",
    analysis: "undefined"
  }


  render() {
    return(
      <div className="timeline-item timeline-analysis">
        <div className="row">
          <div className="">
            <h5 className="analysis-title">Analysis</h5>
            <h4>{this.props.title}</h4>
            <p><b>Material</b> : {this.props.list}</p>
            <p><b>Analysis</b> : {this.props.analysis}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default Analysis;

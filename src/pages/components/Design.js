import React, { Component } from 'react';


class Design extends Component {

  static propTypes = {
    title: React.PropTypes.string,
    description: React.PropTypes.string
  }

  static defaultProps = {
    title: "undefined",
    list: "undefined"
  }


  render() {
    return(
      <div className="timeline-item timeline-design">
        <div className="row">
          <div className="">
            <h5 className="design-title">Design</h5>
            <h4>{this.props.title}</h4>
            <p><b>Description</b> : {this.props.description}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default Design;

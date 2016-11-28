import React, { Component } from 'react';
import usergroups from "./UserGroups.css"
import user from "../../img/icon/cyclist.png"
import bicycle from "../../img/icon/bicycle.png"
import gt from "../../img/icon/gt.jpg"
import chair from "../../img/wrong/chair.jpg"
import railing from "../../img/wrong/railing.jpg"

class UserGroup extends Component {

  static propTypes = {
    title: React.PropTypes.string,
    area: React.PropTypes.string,
    space: React.PropTypes.string
  }

  static defaultProps = {
    title: "undefined",
    area: "undefined",
    space: "undefined"
  }


  render() {
    return(
      <div>
        <div className="row">
          <div className="center">
            <img src={user} className="small-round" alt="user" />
            <img src={bicycle} className="small-round" alt="bicycle" />
            <img src={gt} className="small-round" alt="gt" />
          </div>
          <div className="">
            <h5 className="timeline-item right">User Group</h5>
            <h4>{this.props.title}</h4>
            <br/>
            <h5 className="timeline-item right">Problem Space</h5>
            <h4>{this.props.area}</h4>
            <p>{this.props.space}</p>
          </div>
          <div>
            <img src={chair} className="img-rounded sample-img" alt="chair" />
            <img src={railing} className="img-rounded sample-img" alt="railing" />
          </div>
          <div>
            <h5 className="timeline-item right">Contribution</h5>
            <h4>Researcher, Designer, Prototyper</h4>
            <ul>
              <li>Preparing and conducting user research including survey and interview</li>
              <li>Recruiting student cyclists to participate for interview and contextual interview</li>
              <li>Analyzing information using affinity diagram and data coding</li>
              <li>Generating and sketching ideas</li>
              <li>Storyboarding for three design concepts</li>
              <li>Prototyping mobile application wireframe</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default UserGroup;

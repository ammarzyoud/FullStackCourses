import React, { Component } from "react";
import Tutorial from "./Tutorial";

export default class Courses extends Component {
  render() {
    return (
      <div>
        {this.props.tutorials.map(tutorial => {
          return <Tutorial tutorial={tutorial} />;
        })}
      </div>
    );
  }
}

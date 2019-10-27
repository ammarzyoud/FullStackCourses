import React, { Component } from "react";
import axios from "axios";
import Navbar from "./Navbar";


export default class Filter extends Component {
  state = {
    tutorial: []
  };

  componentDidMount() {
    this.Filter();
  }

  Filter = () => {
    const {
      match: { params }
    } = this.props;
    axios
      .get(`http://localhost:9000/filter/${params.title}`)
      .then(({ data: tutorial }) => {
        console.log("tutorial", tutorial);
        this.setState({ tutorial });
      });
  };

  render() {
    return (
      <div>
      <Navbar/>
      <div className="container" style={{marginTop:"15%"}} >
      
        {this.state.tutorial.map(tutorial => {
          return (
            <div
              className="container bg-info border border-danger"
              key={tutorial._id} 
            >
              <button type="button" className="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <h3>{tutorial.Title}</h3>
              <hr className="bg-primary" />
              <h5>{tutorial.Link}</h5>
              <div className="row">
                <span className="col">
                  Type of Tutorial : {tutorial.TypeOfTutorial}
                </span>
                <span className="col">Type of Pay : {tutorial.TyoeOfPay}</span>
                <span className="col">Skill Level : {tutorial.SkillLevel}</span>
              </div>
              <label className="badge badge-pill badge-warning">
                {tutorial.Tag}
              </label>
              <button
                type="button"
                className="btn-primary float-right"
              ></button>
            </div>
          )
        })}
      </div>
      </div>
    );
  }
}

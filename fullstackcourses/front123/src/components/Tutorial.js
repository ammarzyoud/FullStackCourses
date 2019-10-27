import React, { Component } from "react";
import Profile from "./Profile";

export default class Tutorial extends Component {
  state = {
    btnVale: "Add To Favourite"
  };
  changeFav = btnVale => {
    //  this.setState({btnVale})
    if (this.state.btnVale === "Add To Favourite") {
      this.setState({ btnVale: "Remove" });
    } else if (this.state.btnVale === "Remove") {
      this.setState({ btnVale: "Add To Favourite" });
    }
  };

  changeValues = event => {
    let newValue = event.target.value;
    this.setState({ [event.target.name]: newValue });
  };

  onChange = e => {
    console.log(`radio checked:${e.target.value}`);
  };
  render() {
    return (
      <div
        className="container bg-info border border-danger  p-5 mt-2">
        <button type="button" class="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <h3>{this.props.tutorial.Title}</h3>
        <hr className="bg-primary" />
        <h5>Tutorial Link : {this.props.tutorial.Link}</h5>
        <div className="row">
          <span className="col">
            Type of Tutorial : {this.props.tutorial.TypeOfTutorial}
          </span>
          <t />
          <span className="col">
            Type of Pay : {this.props.tutorial.TyoeOfPay}
          </span>
          <t />
          <span className="col">
            Skill Level : {this.props.tutorial.SkillLevel}
          </span>
          <t />
        </div>
        <label className="badge badge-pill badge-warning">
          {this.props.tutorial.Tag}
        </label>
        <button
          type="button"
          className="btn-primary float-right"
          onClick={this.changeFav}
        >
          {this.state.btnVale}
        </button>
        {/* <Profile {}/> */}
      </div>
    );
  }
}

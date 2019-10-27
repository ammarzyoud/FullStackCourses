import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

export default class ShowCard extends Component {
  cardClicked = title => {
    console.log("titleeeeee :", title);
    this.props.filter(title);
  };
  render() {
    const { tags } = this.props;
    return (
      <div className=" container-fluid card-deck ">
        {tags.map(tag => {
          return (
            <div
              key={tag._id}
              className="card border-primary mb-3"
              onClick={() => this.cardClicked(tag.label)}
            >
              <div className="card-body">
                <h5 className="card-title">{tag.label}</h5>
                <hr className="bg-primary" />
                <p>Official Website : </p><a href={tag.tagLink}>{tag.tagLink}</a>
              </div>
            </div>
          );
        })}

        {/* Filtering */}
        {this.props.tutorial.map(tutorial => {
          return (
            <div className="container bg-info border border-danger  p-5 mt-2">
              <button type="button" class="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <h3>{tutorial.Title}</h3>
              <hr className="bg-primary" />
              <div className="row">
                <span className="col">
                  Type of Tutorial : {tutorial.TypeOfTutorial}
                </span>
                <t />
                <span className="col">Type of Pay : {tutorial.TyoeOfPay}</span>
                <t />
                <span className="col">Skill Level : {tutorial.SkillLevel}</span>
                <t />
              </div>
              <label className="badge badge-pill badge-warning">
                {tutorial.Tag}
              </label>
              <button
                type="button"
                className="btn-primary float-right"
              ></button>
            </div>
          );
        })}

      </div>
    );
  }
}

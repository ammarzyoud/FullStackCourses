import React, { Component } from "react";

export default class AddTutorial extends Component {
  state = {
    label: "",
    tagLink: "",
    value: ""
  };

  changeValues = event => {
    let newValue = event.target.value;
    this.setState({ [event.target.name]: newValue });
  };

  render() {
    const { addtag } = this.props;

    return (
      <>
        <input
          name="label"
          placeholder="Tag Name"
          value={this.state.label}
          onChange={this.changeValues}
        />
        <input
          name="tagLink"
          placeholder="Tutorial Link"
          value={this.state.tagLink}
          onChange={this.changeValues}
        />

        <button
          onClick={() => {
            addtag({
              label: this.state.label,
              tagLink: this.state.tagLink,
              value: this.state.label
            });

            this.setState({
              label: "",
              tagLink: "",
              value: ""
            });
          }}
        >
          Add New Tag
        </button>
      </>
    );
  }
}

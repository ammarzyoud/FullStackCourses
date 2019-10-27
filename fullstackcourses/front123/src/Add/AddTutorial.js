import React, { Component } from "react";
import uuid from "uuid";
import { Radio } from "antd";

// import {inputLink} from "react-input-link"

export default class AddTutorial extends Component {
  state = {
    Title: "",
    Link: "",
    Description: "",
    Tag: "",
    TypeOfTutorial: "",
    TyoeOfPay: "",
    SkillLevel: "",
    btnVale: "Add To Favourite"

  };

  changeFav = (btnVale) => {
    //  this.setState({btnVale})
    if (this.state.btnVale === "Add To Favourite") { this.setState({ btnVale: "Remove" }) }
    else if (this.state.btnVale === "Remove") { this.setState({ btnVale: "Add To Favourite" }) }

  }

  changeValues = (event) => {
    let newValue = event.target.value
    this.setState({ [event.target.name]: newValue })
  }

  render() {
    const { addtutorial, tutorials, tags } = this.props;
    // const {changeValues}=this

    return (
      <div className="container-fluid  ">
        {/* <input name="Title" placeholder="Tutorial Title" value={this.state.Title} onChange={this.changeValues} /> */}
        <div class="input-group mt-2 ">
          <div class="input-group-prepend">
            <span class="input-group-text" id="">
              Tutorial Title
            </span>
          </div>
          <input
            required
            name="Title"
            placeholder="ex : Android Tutorial.. "
            value={this.state.Title}
            onChange={this.changeValues}
            type="text"
            class="form-control"
          />
        </div>

        {/* <input name="Link" placeholder="Tutorial Link" value={this.state.Link} onChange={this.changeValues} /> */}
        <div class="input-group mt-2">
          <div class="input-group-prepend">
            <span class="input-group-text" id="">
              Tutorial Link
            </span>
          </div>
          <input
            required
            name="Link"
            placeholder="ex : https://www.android.com/"
            value={this.state.Link}
            onChange={this.changeValues}
            type="text"
            class="form-control"
          />
        </div>

        {/* <input name="Description" placeholder="Tutorial Description" value={this.state.Description} onChange={this.changeValues} /> */}
        <div class="input-group mt-2">
          <div class="input-group-prepend">
            <span class="input-group-text" id="">
              {" "}
              Tutorial Description
            </span>
          </div>
          <textarea
            required
            name="Description"
            rows="3"
            cols="5"
            wrap="soft"
            placeholder="ex : Android is an open source ... "
            value={this.state.Description}
            onChange={this.changeValues}
            type="text"
            class="form-control"
          ></textarea>
        </div>
        <div class="input-group mb-3 mt-2">
          <div class="input-group-prepend">
            <label class="input-group-text" for="inputGroupSelect01">
              Programming Language
            </label>
          </div>
          <select
            class="custom-select"
            name="Tag"
            value={this.state.Tag}
            onChange={this.changeValues}
          >
            <option selected hidden>
              Choose
            </option>

            {tags.map((tags, index) => {
              return <option value={tags.value}> {tags.label}</option>;
            })}
          </select>
        </div>

        <div className="mt-2">
          <Radio.Group
            name="TypeOfTutorial"
            defaultValue="Video"
            buttonStyle="solid"
            value={this.state.TypeOfTutorial}
            onChange={this.changeValues}
          >
            Type of Tutorial : <t />
            <Radio.Button value="Video">Video</Radio.Button>
            <Radio.Button value="Blog">Blog</Radio.Button>
          </Radio.Group>
        </div>

        <div className="mt-2">
          <Radio.Group
            name="TyoeOfPay"
            buttonStyle="solid"

            value={this.state.TyoeOfPay}
            onChange={this.changeValues}
          >
            Type of Pay : <t />
            <Radio.Button value="Free">Free</Radio.Button>
            <Radio.Button value="Pay">Pay</Radio.Button>
          </Radio.Group>
        </div>

        <div className="mt-2">
          <Radio.Group
            name="SkillLevel"
            buttonStyle="solid"
            value={this.state.SkillLevel}
            onChange={this.changeValues}
          >
            Skills Level: <t />
            <Radio.Button value="Beginner">Beginner</Radio.Button>
            <Radio.Button value="Intermediate">Intermediate</Radio.Button>
            <Radio.Button value="Advanced">Advanced</Radio.Button>
          </Radio.Group>
        </div>
        <button
          className="mt-2 col-md-3"
          type="submit"
          onClick={() => {
            addtutorial({
              id: (tutorials.id = uuid()),
              Title: this.state.Title,
              Link: this.state.Link,
              Description: this.state.Description,
              Tag: this.state.Tag,
              TypeOfTutorial: this.state.TypeOfTutorial,
              TyoeOfPay: this.state.TyoeOfPay,
              SkillLevel: this.state.SkillLevel
            });

            this.setState({
              Title: "",
              Link: "",
              Description: "",
              Tag: "",
              TypeOfTutorial: "",
              TyoeOfPay: "",
              SkillLevel: ""
            });
          }}
        >
          Add New Tutorial
        </button>
        <hr />
      </div>
    );
  }
}

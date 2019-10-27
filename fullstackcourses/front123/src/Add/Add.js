import React, { Component } from "react";
import AddTutorial from "./AddTutorial";
import AddTag from "./AddTag";
import axios from "axios";
import Navbar from "../components/Navbar";

export default class Add extends Component {
  state = {
    tutorials: [],
    tags: []
  };

  readTags = () => {
    axios.get(`http://localhost:9000/tagsData`).then(res => {
      const tags = res.data;
      this.setState({ tags });
    });
  };

  componentDidMount() {
    this.readTags();
  }

  addtutorial = tutorial => {
    console.log()
    axios
      .post(`http://localhost:9000/addtutorial`, { tutorial })
      .then(res => {
        this.setState({ tutorials: res.data });
        this.readTutorials();
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  addtag = tag => {
    axios
      .post(`http://localhost:9000/addTag`, tag)
      .then(res => {
        this.setState({ tags: res.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    const { addtutorial, addtag } = this;
    const { tutorials, tags } = this.state;
    return (
      <>
      <div style={{marginTop:"20%"}}>
      <Navbar/>
        <AddTutorial
          addtutorial={addtutorial}
          tutorials={tutorials}
          tags={tags}
        />
        <AddTag addtag={addtag} tags={tags} />
        </div>
      </>
    );
  }
}

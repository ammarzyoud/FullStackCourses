import React, { Component } from "react";
import axios from "axios";
import Courses from "./Courses";
import Navbar from "./Navbar";
import Footer from "../layout/Footer";


export default class Show extends Component {
  state = {
    tutorials: []
  };
  readTutorials = () => {
    axios.get(`http://localhost:9000/data`).then(res => {
      console.log(res.data);
      const tutorials = res.data;
      this.setState({ tutorials });
    });
  };

  componentDidMount() {
    this.readTutorials();
  }

  render() {
    return (
      <div style={{marginTop:"20%"}}>
        <Navbar />
        <Courses tutorials={this.state.tutorials} />
      </div>
    );
  }
}

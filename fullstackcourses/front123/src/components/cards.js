import React, { Component } from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";

export default class cards extends Component {
  state = {
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

  render() {
    return (
      <div className=" container-fluid card-deck h-50 mt-5" data-toggle="tooltip" data-placement="top" title="Filter Tutorials On Specific Tag">
        {this.state.tags.map(tag => {
          const { label } = tag;
          return (
            <div className="card border-warning">
              <div className="card-body">
                <Link to={`/Filter/${label}`} key={tag._id}>
                  <h5 className="card-title">{tag.label}</h5>
                  <hr className="bg-primary" />
                </Link>
                <p>Official Website : </p>
                <span>
                  <a tag="a" href={tag.tagLink}>
                    {tag.tagLink}
                  </a>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

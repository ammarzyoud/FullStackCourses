import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import Show from "./Show";
import { Link, withRouter } from "react-router-dom";
import Navbar from "./Navbar";

import { Tabs, Row} from "antd";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      errors: {}
    };
  }

  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    this.setState({
      first_name: decoded.first_name,
      last_name: decoded.last_name,
      email: decoded.email
    });
  }

  render() {
    const mystyle = {
      display: 'block',
      transform: "translate3d(316px, 0px, 0px)",
      width: '152px'
    };
    //const videos=this.props.
    const { first_name, last_name, email } = this.state;
    return (
      <>
      <Navbar/>
      <div className="container" style={{marginTop:"20%"}} >
        <div className="jumbotron bg-primary " >
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">{first_name + " " + last_name}</h1>
            <center>{email}</center>
          </div>

        </div>
        <Link to="Add"><button>Add tutorial</button></Link>

        <hr />
        {/* <div className="ant-tabs-nav-scroll">
          <div className="ant-tabs-nav ant-tabs-nav-animated">
            <div>

              <div role="tab" aria-disabled="false" aria-selected="false" className=" ant-tabs-tab">Favorites
            </div>
              <div role="tab" aria-disabled="false" aria-selected="false" className=" ant-tabs-tab">Submitted Videos
              </div><div role="tab" aria-disabled="false" aria-selected="true" className="ant-tabs-tab-active ant-tabs-tab">Submitted Blogs
              </div></div>
              <div className="ant-tabs-ink-bar ant-tabs-ink-bar-animated" style={mystyle}>
                </div></div>
        </div> */}

        <Tabs defaultActiveKey="1" size="large">
          <Tabs.TabPane tab="Favorites" key="1" className="tab-content">
            <Row gutter={8}>favorites</Row>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Submitted Videos" key="2" className="tab-content">
            <Row gutter={8}>submittedVideos</Row>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Submitted Blogs" key="3" className="tab-content">
            <Row gutter={8}>submittedBlogs</Row>
          </Tabs.TabPane>
        </Tabs>





      </div>
      </>
    );
  }
}

export default Profile;

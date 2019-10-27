import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Show from "./components/Show";
import Add from "./Add/Add";
import Filter from "./components/Filter";
import Trainers from "./layout/Trainers";
import Services from "./layout/Services";
import Popular from "./layout/Popular";


export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <div className="App">
            {/* <Navbar />
            <br />
            <Header />
            <Herobox /> */}
            <Route exact path="/" component={Home} />
            <div className="container">
              <Route path="/Add" component={Add} />
              <Route path="/Show" component={Show} />
              <Route path="/Trainers" component={Trainers} />
              <Route path="/Services" component={Services} />
              <Route exact path="/Filter/:title" component={Filter} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/Popular" component={Popular} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/profile" component={Profile} />
            </div>
            {/* <Popular />
            <Services />
            <Trainers />
            <Coding />
            <Footer /> */}
          </div>
        </Router>
      </>
    );
  }
}

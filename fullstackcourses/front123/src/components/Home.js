import React, { Component } from "react";
import Trainers from "../layout/Trainers";
import Coding from "../layout/Coding";
import Footer from "../layout/Footer";
import Cards from "./cards";
import Herobox from "../layout/Herobox";
import Popular from "../layout/Popular";
import Services from "../layout/Services";
import Navbar from "./Navbar";
import Header from "../layout/Header";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <br />
        <Header />
        <Herobox />
        <div className="container"><Cards />
        
        <Popular />
        <Services />
        <Trainers />
        <Coding />
        </div>
        <Footer />
      </div>
    );
  }
}
export default Home;

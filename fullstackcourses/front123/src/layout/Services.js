import React, { Component } from "react";
import Navbar from "../components/Navbar";

export default class Services extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="Services" class="services page_section">
          <Navbar/>
          <div class="container" style={{marginTop:"10%"}}>
            <div class="row">
              <div class="col">
                <div class="section_title text-center">
                  <h1>Our Services</h1>
                </div>
              </div>
            </div>

            <div class="row services_row">
              <div class="col-lg-4 service_item text-left d-flex flex-column align-items-start justify-content-start">
                <div class="icon_container d-flex flex-column justify-content-end">
                  <img src="images/earth-globe.svg" alt="" />
                </div>
                <h3>Online Courses</h3>
                <p>
                  In aliquam, augue a gravida rutrum, ante nisl fermentum nulla,
                  vitae tempor nisl ligula vel nunc. Proin quis mi malesuada,
                  finibus tortor fermentum.
                </p>
              </div>

              <div class="col-lg-4 service_item text-left d-flex flex-column align-items-start justify-content-start">
                <div class="icon_container d-flex flex-column justify-content-end">
                  <img src="images/exam.svg" alt="" />
                </div>
                <h3>Online Trainers</h3>
                <p>
                  In aliquam, augue a gravida rutrum, ante nisl fermentum nulla,
                  vitae tempor nisl ligula vel nunc. Proin quis mi malesuada,
                  finibus tortor fermentum.
                </p>
              </div>

              <div class="col-lg-4 service_item text-left d-flex flex-column align-items-start justify-content-start">
                <div class="icon_container d-flex flex-column justify-content-end">
                  <img src="images/books.svg" alt="" />
                </div>
                <h3>CodeingAcademy</h3>
                <p>
                  In aliquam, augue a gravida rutrum, ante nisl fermentum nulla,
                  vitae tempor nisl ligula vel nunc. Proin quis mi malesuada,
                  finibus tortor fermentum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

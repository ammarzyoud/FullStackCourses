import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class Navbar extends Component {
  logOut(e) {
    e.preventDefault();
    localStorage.removeItem("usertoken");
    this.props.history.push(`/`);
  }

  render() {
    const logo = (
      <Link to="/" classNameName="nav-link">
        <h3 style={{ color: "white" }}>Full Stack</h3>
      </Link>
    );

    const loginRegLink = (
      <ul classNameName="navbar-nav">
        <li classNameName="nav-item">
          <Link to="/login" classNameName="nav-link">
            Login
          </Link>
        </li>
        <li classNameName="nav-item">
          <Link to="/register" classNameName="nav-link">
            Register
          </Link>
        </li>
      </ul>
    );

    const userLink = (
      <ul classNameName="navbar-nav">
        <li classNameName="nav-item">
          <Link to="/profile" classNameName="nav-link">
            User
          </Link>
        </li>
        <li classNameName="nav-item">
          <Link to="/Show" classNameName="nav-link">
            Tutorials
          </Link>
        </li>

        <li classNameName="nav-item">
          <a href="" onClick={this.logOut.bind(this)} classNameName="nav-link">
            Logout
          </a>
        </li>
      </ul>
    );

    return (
      <React.Fragment>
        <div className="super_container">
          <header className="header d-flex flex-row">
            <div className="header_content d-flex flex-row align-items-center">
              <div className="logo_container">
                <div className="logo">
                  <img src="images/logo.png" alt="" />
                  <span>FullStack</span>
                </div>
              </div>

              <nav className="main_nav_container">
                <div className="main_nav">
                  <ul className="main_nav_list">
                    <li className="main_nav_item">
                    <Link to="/" classNameName="nav-link">
                        Home
                      </Link>
                    </li>
                    <li class="main_nav_item">
                    <Link to="/Popular" classNameName="nav-link">
                        Courses
                      </Link>
                    </li>

                    <li class="main_nav_item">
                    <Link to="/Services" classNameName="nav-link">
                        Services
                      </Link>
                    </li>

                    <li class="main_nav_item">
                    <Link to="/Trainers" classNameName="nav-link">
                        Trainers
                      </Link>
                    </li>
                    <li class="main_nav_item">
                      {localStorage.usertoken ? userLink : loginRegLink}
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div class="header_side d-flex flex-row justify-content-center align-items-center">
              <img src="images/phone-call.svg" alt="" />
              <span>+962777517553</span>
            </div>

            <div class="hamburger_container">
              <i class="fas fa-bars trans_200"></i>
            </div>
          </header>

          <div class="menu_container menu_mm">
            <div class="menu_close_container">
              <div class="menu_close"></div>
            </div>

            <div class="menu_inner menu_mm">
              <div class="menu menu_mm">
                <ul class="menu_list menu_mm">
                  <li class="menu_item menu_mm">
                    <a href="#Home">Home</a>
                  </li>
                  <li class="menu_item menu_mm">
                    <a href="#">About us</a>
                  </li>
                  <li class="menu_item menu_mm">
                    <a href="courses.html">Courses</a>
                  </li>
                  <li class="menu_item menu_mm">
                    <a href="elements.html">Elements</a>
                  </li>
                  <li class="menu_item menu_mm">
                    <a href="news.html">News</a>
                  </li>
                  <li class="menu_item menu_mm">
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>

                <div class="menu_social_container menu_mm">
                  <ul class="menu_social menu_mm">
                    <li class="menu_social_item menu_mm">
                      <a href="#">
                        <i class="fab fa-pinterest"></i>
                      </a>
                    </li>
                    <li class="menu_social_item menu_mm">
                      <a href="#">
                        <i class="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li class="menu_social_item menu_mm">
                      <a href="#">
                        <i class="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li class="menu_social_item menu_mm">
                      <a href="#">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li class="menu_social_item menu_mm">
                      <a href="#">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Navbar);

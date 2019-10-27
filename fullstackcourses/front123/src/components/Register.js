import React, { Component } from "react";
import { register } from "./UserFunctions";
import Navbar from "./Navbar";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password
    };
    const errors = {};
    const emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    errors.email = !user.email.match(emailformat) ? "Invalid Email" : "";
    errors.password =
      user.password.length < 6
        ? "Password should be more than 6 characters"
        : "";
    console.log(errors);

    if (errors.email === "" && errors.password === "") {
      register(user).then(res => {
        this.props.history.push(`/login`);
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <link rel="stylesheet" href="css/style.css"/>
<link rel="stylesheet" href="fonts/material-icon/css/material-design-iconic-font.min.css"/>

        <section class="signup" style={{marginTop:"15%"}}>
          <div class="container">
            <div class="signup-content">
              <div class="signup-form">
                <h2 class="form-title">Sign up</h2>
                <form  noValidate onSubmit={this.onSubmit}class="register-form" id="register-form">
                  <div class="form-group">
                    <label for="name">
                      <i class="zmdi zmdi-account material-icons-name"></i>
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      placeholder="Enter First Name"
                      value={this.state.first_name}
                      onChange={this.onChange}
                    />
                  </div>
                  <div class="form-group">
                    <label for="name">
                      <i class="zmdi zmdi-account material-icons-name"></i>
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      id="last_name"
                      placeholder="Enter Last Name"
                       value={this.state.last_name}
                      onChange={this.onChange}
                    />
                  </div>
                  <div class="form-group">
                    <label for="email">
                      <i class="zmdi zmdi-email"></i>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter Email"
                      value={this.state.email}
                      onChange={this.onChange}
                    />
                  </div>
                  <div class="form-group">
                    <label for="password">
                      <i class="zmdi zmdi-lock"></i>
                    </label>
                    <input
                      type="password"

                      name="password"
                      placeholder="Enter Password"
                      value={this.state.password}
                      onChange={this.onChange}
                    />
                  </div>
                 
                  <div class="form-group form-button">
                    <input
                      type="submit"
                      name="signup"
                      id="signup"
                      class="form-submit"
                      value="Register"
                    />
                  </div>
                </form>
              </div>
              <div class="signup-image">
                <figure>
                  <img src="images/signup-image.jpg" alt="sing up image" />
                </figure>
                <a href="#" class="signup-image-link">
                  I am already member
                </a>
              </div>
            </div>
          </div>
        </section>
       <script src="vendor/jquery/jquery.min.js"></script>
    <script src="js/main.js"></script> 

      </React.Fragment>
    );
  }
}

export default Register;

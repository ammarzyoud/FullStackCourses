import React, { Component } from 'react'
import { login } from './UserFunctions'
import Navbar from './Navbar'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            error: '',
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit (e) {
        e.preventDefault()

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        login(user).then(res => {
            if (!res.error) {
                this.props.history.push(`/profile`)
            } else {
                this.setState({ error: res.error })
            }
        })
    }

    render () {
        return (
        
            <React.Fragment>
            <Navbar/>
            <link rel="stylesheet" href="css/style.css"/>
<link rel="stylesheet" href="fonts/material-icon/css/material-design-iconic-font.min.css"/>

  
        <section class="sign-in"  style={{marginTop:"15%"}}>
        <div class="container">
            <div class="signin-content">
                <div class="signin-image">
                    <figure><img src="images/signin-image.jpg" alt="sing up image"/></figure>
                    <a href="#" class="signup-image-link">Create an account</a>
                </div>

                <div class="signin-form">
                    <h2 class="form-title">Sign up</h2>
                    <form noValidate onSubmit={this.onSubmit} class="register-form" id="login-form">
                        <div class="form-group">
                            <label for="Email"><i class="zmdi zmdi-account material-icons-name"></i></label>
                            <input type="email" name="email" id="Email" placeholder="Your Email"   value={this.state.email}
                            onChange={this.onChange}/>
                        </div>
                        <div class="form-group">
                            <label for="your_pass"><i class="zmdi zmdi-lock"></i></label>
                            <input type="password" name="password" id="your_pass" placeholder="Password"  value={this.state.password}
                            onChange={this.onChange}/>
                        </div>
                      
                        <div className="alert alert-danger"
                            style={{ visibility: this.state.error !== '' ? 'visible' : 'hidden' }}>{this.state.error}</div>
                        <button type="submit" className="btn btn-lg btn-primary btn-block">
                            Sign in
                        </button>
                    </form>
                 
                </div>
            </div>
        </div>
    </section>
    </React.Fragment>
        )
    }
}

export default Login
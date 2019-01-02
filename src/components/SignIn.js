import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../store/authActions'
import { Link } from 'gatsby';
import { Redirect } from '@reach/router';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state)
  }
  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/" /> 
    return (
      <div className="container signinpage">
        <form className="white" onSubmit={this.handleSubmit}>
          <h1>Sign In</h1>
          <div className="input-field">
            <input type="email" id='email' placeholder="Email Address" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <input type="password" id='password' placeholder="Password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button>Login</button>
            <div className="center red-text">
              { authError ? <p>{authError}</p> : null }
            </div>
          </div>
          <p className="signup_link">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
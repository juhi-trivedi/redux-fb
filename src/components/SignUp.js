import React, { Component } from 'react';
import { Redirect } from '@reach/router';
import { connect } from 'react-redux';
import { signUp } from '../store/authActions';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  }
  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/" /> 
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <div className="input-field">
            <input type="email" id='email' placeholder="Email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <input type="password" id='password' placeholder="Password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <input type="text" id='firstName' placeholder="First Name" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <input type="text" id='lastName' placeholder="Last Name" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button>Sign Up</button>
            <div className="center red-text">
              { authError ? <p>{authError}</p> : null }
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    signUp: (creds) => dispatch(signUp(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
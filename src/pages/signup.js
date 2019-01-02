import React, { Component } from 'react';

import SignUpForm from '../components/SignUp';
import Layout from '../components/layout';


export class SignUpPage extends Component {
  render() {
    return (
      <Layout><div className="container signinpage"> <h1>SignUp</h1> <SignUpForm /> </div></Layout>
    )
  }
}



export default SignUpPage 
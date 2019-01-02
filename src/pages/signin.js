import React, { Component } from 'react';

import SignInForm from '../components/SignIn';
import Layout from '../components/layout';


export class SignInPage extends Component {
  render() {
    return (
      <Layout><div className="container"> <SignInForm /> </div></Layout>
    )
  }
}



export default SignInPage 
import React, { Component } from 'react';
import Layout from '../components/layout';
import Map from '../components/Map'

import { Redirect, redirectTo } from "react-router-dom";
import { connect } from 'react-redux';
import { navigate } from 'gatsby';

class Contact extends Component {
  render() {
    const { auth } = this.props;
    // if (!auth.uid) return <Redirect to='/' /> 
    // if(!auth.uid) return redirectTo('/')
    if(!auth.uid) {
      return navigate('/')
    }
    else {
    return (
      <Layout>
        <div className="container">
          <div className="contactform">
            <h3>Contact Form</h3>
            <form action="https://formspree.io/juhi.trivedi@multidots.com" method="POST">
            <input type="hidden" name="_next" value="thanks"/>
            <p>
                <label>Your name: </label>
                  <input type="text" name="name" />
              </p>
              <p>
                <label>Your email: </label>
                  <input type="email" name="email" />
              </p>
              <p>
                <label>Message: </label>
                  <textarea name="message" />
              </p>
              <p>
                <input type="submit" value="Send" />
              </p>
            </form>
            <div className="gmap">
              <Map />
            </div>
          </div>
        </div>
      </Layout>
    );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Contact)
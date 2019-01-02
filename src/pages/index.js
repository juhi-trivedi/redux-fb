import React, { Component } from 'react';
import '../components/layout.css';
import '../components/header.css';
import Layout from '../components/layout';
import { connect } from 'react-redux';
import { Link } from 'gatsby';


class IndexPage extends Component {
  render() {
    const { auth } = this.props;
    return (
      <div className="mainparent"> 
        <Layout>
          <div className="landingpage">
            <div className="container"> 
            <h1> Welcome To<br/>Gatsby + Contentful + Firebase Demo </h1>
            { auth.uid ? <Link to="/home" className="signinlink">Check Out Our Blogs</Link> : <Link to="/signin" className="signinlink">Sign In</Link> }
          </div>
        </div>
      </Layout>
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
  
export default connect(mapStateToProps)(IndexPage)

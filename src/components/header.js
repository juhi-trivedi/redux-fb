import React from 'react';
import { Link } from 'gatsby'
import Logo from '../images/logo.png';
import './header.css'
import { connect } from 'react-redux'

import SignedInLinks from './SignInLinks'
import SignedOutLinks from './SignOutLinks'


const Header = (props) => {
  const { auth } = props;
  // console.log(auth);
  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;

  return (
    <header>
        <div className="container">
          <div className="logo">
              <h1 style={{ margin: 0 }}>
                  <Link to='/'> <img src={Logo} alt="Site Logo" /> </Link>
              </h1>
          </div>
        {links}
      </div>
    </header>
  )
}

const mapStateToProps = (state) => {
  // console.log(state);
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Header)
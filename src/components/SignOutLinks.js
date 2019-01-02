import React from 'react'
import { Link } from 'gatsby'

const SignedOutLinks = () => {
  return (
      <ul className="menulist">
        <li><Link to='/signup'>Signup</Link></li>
        <li><Link to='/signin'>Login</Link></li>
      </ul>
  )
}

export default SignedOutLinks
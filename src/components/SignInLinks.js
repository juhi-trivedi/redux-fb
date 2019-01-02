import React from 'react'
import { connect } from 'react-redux'
import { signOut } from '../store/authActions'
import { Link, StaticQuery } from 'gatsby';

const SignedInLinks = ( props ) => (
  <StaticQuery
    query={graphql`
      query pagesMenuQuery {
        allContentfulPages {
          edges {
            node {
              title
              slug
            }
          }
        }
      }   
    `}
    render={data => (
      <>
          <ul className="menulist">
              <li>
                  <Link to='/home'> Blogs </Link>
              </li>
              {data.allContentfulPages.edges.map(({node}) => ( 
              <li key={Math.random()}>
                  <Link to={node.slug}> {node.title} </Link>
              </li>
              ))}
              <li>
                  <Link to="/Contact"> Contact </Link>
              </li>
              <li><Link onClick={props.signOut}>Log Out</Link></li>
          </ul>
      </>
    )}
  />
);


const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
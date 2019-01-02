import React, { Component } from 'react'
import Layout from '../components/layout'
import { StaticQuery, Link, graphql, navigate } from 'gatsby'
import HeadText from '../components/headText'

const BlogPost = ({ node }) => {
  return (
    <li>
      <img src={node.heroImage.fixed.src} alt={node.title} />
      <div className="blogtext">
        <Link to={node.slug}>{node.title}</Link>
        <p>{node.body.childMarkdownRemark.excerpt}</p>
      </div>
    </li>
  )
}

const BlogListData = ({ data }) => (
  <StaticQuery
    query={graphql`
      query pagesListQuery {
        allContentfulBlog(
          filter: { node_locale: { eq: "en-US" } }
          sort: { fields: [publishDate], order: DESC }
        ) {
          edges {
            node {
              title
              slug
              body {
                childMarkdownRemark {
                  excerpt
                }
              }
              heroImage {
                fixed(height: 300) {
                  src
                }
              }
            }
          }
        }
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
        <ul className="blog-post">
          {data.allContentfulBlog.edges.map(edge => (
            <BlogPost node={edge.node} key={Math.random()} />
          ))}
        </ul>
      </>
    )}
  />
)
class HomePage extends Component {
  render() {
    return (
      <Layout>
        <div className="container">
          <HeadText />
          <BlogListData />
        </div>
      </Layout>
    )
  }
}

export default HomePage
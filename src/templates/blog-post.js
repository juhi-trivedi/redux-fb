import React, { Component} from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import Disqus from '../components/Disqus';

class BlogPost extends Component {
  
  handleNewComment(comment) {
    console.log(comment.text);
  }

  render() {
    const {
      title,
      body,
      slug
    } = this.props.data.contentfulBlog
    return (
      <Layout>
        <Helmet title={`${title}`} />
        <div className="container blogdetails">
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{__html: body.childMarkdownRemark.html}} />
          <Disqus slug={slug} title={title} />
        </div>
          {/* <PrevNextPost previous={previous} next={next} /> */}
      </Layout>
    )
  }
}

BlogPost.propTypes = {
  data: PropTypes.object.isRequired
}

export default BlogPost

export const pageQuery = graphql`
  query blogPostQuery($slug: String!){
    contentfulBlog(slug: {eq: $slug}) {
      title
      slug
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
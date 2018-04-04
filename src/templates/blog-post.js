import React from "react";
import Helmet from "react-helmet";

// import '../css/blog-post.css'; // make it pretty!

export default function Template({ data, // this prop will be injected by the GraphQL query we'll write in a bit
}) {
  const { markdownRemark: post } = data; // data.markdownRemark holds our post data
  return (
    <div className="blog-post-container container-fluid">
      <Helmet title={`sharkDeveloper - ${post.frontmatter.title}`} />
      <div className="blog-post">
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.date}</p>
        <div className="row">
            <div className="col-xs-12 col-sm-8 col-sm-offset-2">
                <div
                    className="blog-post-content"
                    dangerouslySetInnerHTML={{ __html: post.html }}
                />
            </div>
        </div>
        
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        description
      }
    }
  }
`;
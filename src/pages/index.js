import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({data}) => {
    return (
        <div>
            <h1>Hi Kaneliq</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
            {
               data.allMarkdownRemark.edges.map((post, i) => {
                    return (
                        <div key={i}>
                            <Link to={post.node.frontmatter.path}>
                                {post.node.frontmatter.title}
                                <span style={{display: "block", fontSize: "9pt"}}>
                                    {post.node.frontmatter.date}
                                </span>
                            </Link>
                        </div>
                    )
               })
            }
            
        </div>
    )
}

export const pageQuery = graphql`
  query getAllPosts {
    allMarkdownRemark(limit: 10) {
      edges {
          node {
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
              }
          }
      }
    }
  }
`;

export default IndexPage

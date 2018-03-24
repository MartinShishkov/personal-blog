import * as React from 'react'
import Link from 'gatsby-link'
import { PostListViewItem } from "../components/ui/molecules/PostListViewItem";

declare const graphql: any;

export interface IIndexPageProps{
    data: any;
}

export default class IndexPage extends React.Component<IIndexPageProps, {}> {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12 text-center">
                        <h1>This is some NEW TS shit</h1>
                        <p>Welcome to your new Gatsby site.</p>
                        <p>Now go build something great.</p>
                    </div>
                </div>
                
                {
                    this.props.data.allMarkdownRemark.edges.map((post, i) => {
                        return (
                            <PostListViewItem 
                                url={post.node.frontmatter.path}
                                title={post.node.frontmatter.title}
                                date={post.node.frontmatter.date}
                                key={i}
                            />
                        )
                    })
                }
            </div>
        );
    }
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
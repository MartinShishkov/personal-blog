import * as React from 'react'
import Link from 'gatsby-link'
import Helmet from "react-helmet";
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
                <Helmet title={`sharkDeveloper - home`} />
                <div className={"row"}>              
                    {
                        this.props.data.allMarkdownRemark.edges.map((post, i) => 
                            <div className="col-xs-12 col-sm-8 col-sm-offset-2" key={i}>
                                <PostListViewItem 
                                    url={post.node.frontmatter.path}
                                    title={post.node.frontmatter.title}
                                    date={post.node.frontmatter.date}
                                    description={post.node.frontmatter.description}
                                />
                            </div>
                        )
                    }
                </div>
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
                description
              }
          }
      }
    }
  }
`;
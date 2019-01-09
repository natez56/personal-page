import React from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import PostNavBar from "../components/PostNavBar/PostNavBar";
import styles from "./notes.module.css";
import { graphql } from "gatsby";

class Notes extends React.Component {
  postEdges = this.props.data.allMarkdownRemark.edges;
  render() {
    console.log("notes:", this.postEdges);
    return (
      <Layout>
        <div className={styles.menu}>
          <Helmet title={config.siteTitle} />
          <SEO />
          <PostNavBar postEdges={this.postEdges} />
        </div>
      </Layout>
    );
  }
}

export default Notes;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query AritclesQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            category
            date
          }
        }
      }
    }
  }
`;

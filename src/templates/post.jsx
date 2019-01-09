import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import UserInfo from "../components/UserInfo/UserInfo";
import Disqus from "../components/Disqus/Disqus";
import PostTags from "../components/PostTags/PostTags";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import "./b16-tomorrow-dark.css";
import styles from "./post.module.css";
import PostNavBar from "../components/PostNavBar/PostNavBar";

export default class PostTemplate extends React.Component {
  state = {
    postEdges: this.props.location.state
  };

  convertPostEdgeToArray = () => {
    const postEdgeArray = [];
    const postEdges = this.props.location.state;
    const keys = Object.keys(this.props.location.state);

    for (let i = 0; i < keys.length; i++) {
      postEdgeArray.push(postEdges[keys[i]]);
    }

    return postEdgeArray;
  };

  render() {
    const postEdges = this.convertPostEdgeToArray();
    console.log("post.jsx", postEdges);
    const { slug } = this.props.pageContext;
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }
    return (
      <Layout>
        <div className={styles.postPage}>
          <Helmet>
            <title>{`${post.title} | ${config.siteTitle}`}</title>
          </Helmet>
          <SEO postPath={slug} postNode={postNode} postSEO />
          <div className={styles.content}>
            <PostNavBar className={styles.navMenu} postEdges={postEdges[0]} />
            <div className={styles.divPost}>
              <h1 className={styles.title}>{post.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
              <div className={styles.postMeta}>
                <PostTags tags={post.tags} />
              </div>
              <UserInfo config={config} />
            </div>
            <div className={styles.thirdColumn} />
          </div>
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
        tags
      }
      fields {
        nextTitle
        nextSlug
        prevTitle
        prevSlug
        slug
        date
      }
    }
  }
`;

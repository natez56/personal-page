import React from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import Logo from "../components/Logo/Logo";
import ProjectGrid from "../components/ProjectGrid/ProjectGrid";
import PlainFooter from "../components/PlainFooter/PlainFooter";

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <div className="index-container">
          <Helmet title={config.siteTitle} />
          <SEO />
          <Logo />
          <ProjectGrid />
          <PlainFooter />
        </div>
      </Layout>
    );
  }
}

export default Index;

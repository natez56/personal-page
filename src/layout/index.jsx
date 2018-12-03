import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import "./index.css";
import CustomNavBar from "../components/CustomNavBar/CustomNavBar";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <div>
          <Helmet>
            <meta name="description" content={config.siteDescription} />
          </Helmet>
          <CustomNavBar />
          {children}
        </div>
      </div>
    );
  }
}

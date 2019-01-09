import React from "react";
import styles from "./Logo.module.css";

class Logo extends React.Component {
  render() {
    return (
      <div className={styles.logo}>
        <header>Nathan Zimmerman</header>
        <span>Front-End Web Developer</span>
      </div>
    );
  }
}

export default Logo;

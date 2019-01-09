import React from "react";
import styles from "./PlainFooter.module.css";

class PlainFooter extends React.Component {
  state = {};
  render() {
    return <footer className={styles.footer} />;
  }
}

export default PlainFooter;

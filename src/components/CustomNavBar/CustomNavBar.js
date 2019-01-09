import React from "react";
import styles from "./CustomNavBar.module.css";
import { Link } from "gatsby";

const ListLink = props => (
  <Link className={styles.link} to={props.to}>
    {props.children}
  </Link>
);

class CustomNavBar extends React.Component {
  render() {
    return (
      <div className={styles.nav}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/notes">Notes</ListLink>
        <a href="https://github.com/natez56">Github</a>
      </div>
    );
  }
}

export default CustomNavBar;

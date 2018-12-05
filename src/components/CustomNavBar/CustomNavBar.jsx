import React from "react";
import "./CustomNavBar.css";
import { Link } from "gatsby";

const ListLink = props => (
  <Link className="link link--nav" to={props.to}>
    {props.children}
  </Link>
);

class CustomNavBar extends React.Component {
  render() {
    return (
      <div className="div div--nav">
        <ListLink to="/">Home</ListLink>
        <ListLink to="/articles">Notes</ListLink>
        <a href="https://github.com/natez56">Github</a>
      </div>
    );
  }
}

export default CustomNavBar;

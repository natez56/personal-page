import React from "react";
import styles from "./PostNavBarItem.module.css";
import { Link } from "gatsby";
import buttonImg from "../../imgs/chevron-down.svg";

const postNavBarItem = props => {
  let btnClass = "";
  let menuClass = "";

  if (props.isClosed === "false") {
    btnClass = styles.open;
    menuClass = styles.menuOpen;
  } else {
    menuClass = styles.menuClosed;
    btnClass = styles.closed;
  }

  console.log("NavBarItem", props.state);
  return (
    <div className={menuClass}>
      <input
        className={btnClass}
        type="image"
        src={buttonImg}
        onClick={props.menuClick}
      />
      {props.postCategories.map(category => (
        <div>
          <div
            key={category}
            className={styles.dropdown}
            onClick={() => props.itemClick(category)}
          >
            {category}
          </div>
          <div>
            {props.postData[category].map(post => (
              <Link
                state={[props.state]}
                className={styles.link}
                to={post[1]}
                key={post[0]}
              >
                <h1 className={styles.linkTitle}>{post[0]}</h1>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default postNavBarItem;

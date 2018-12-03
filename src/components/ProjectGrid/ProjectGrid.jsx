import React from "react";
import "./ProjectGrid.css";
import img1 from "../../imgs/img1.png";
import img2 from "../../imgs/Habitica-logo.png";

class ProjectGrid extends React.Component {
  render() {
    return (
      <main>
        <div className="container">
          <div className="grid-item" id="item-1">
            <a href="https://github.com/natez56/Blog">
              <img src={img1} alt="picture of code" />
            </a>
            <h2>Personal Page</h2>
            <p>The code for my personal website.</p>
          </div>
          <div className="grid-item" id="item-2">
            <a href="https://github.com/natez56/habitica">
              <img src={img2} alt="picture of code" />
            </a>
            <h2>Habitica Contributions</h2>
            <p>Code for Habitica Repo.</p>
          </div>
          <div className="grid-item" id="item-2">
            <a href="https://github.com/natez56/CS467_RPG1">
              <img src={img1} alt="picture of code" />
            </a>
            <h2>Nightfall</h2>
            <p>School final project.</p>
          </div>
        </div>
      </main>
    );
  }
}

export default ProjectGrid;

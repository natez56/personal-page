import React from "react";
import styles from "./PostNavBar.module.css";
import PostNavBarItem from "../PostNavBarItem/PostNavBarItem";

class PostNavBar extends React.Component {
  state = {
    postEdges: this.props.postEdges,
    showMenu: true,
    showCategory: []
  };

  getPostData = () => {
    const postList = [];
    this.state.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        category: postEdge.node.frontmatter.category,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });

    return postList;
  };

  getCategoryData = postList => {
    const list = {};

    for (let i = 0; i < postList.length; i++) {
      if (!(postList[i].category in list)) {
        list[postList[i].category] = [];
        const title = postList[i].title;
        const path = postList[i].path;

        list[postList[i].category].push([title, path]);
      } else {
        const keys = Object.keys(list);

        for (let j = 0; j < keys.length; j++) {
          if (postList[i].category === keys[j]) {
            const title = postList[i].title;
            const path = postList[i].path;

            list[keys[j]].push([title, path]);
          }
        }
      }
    }

    return list;
  };

  getShownCategories = (categories, categoryData) => {
    const shownCategories = this.state.showCategory;
    const newObj = {};

    for (let i = 0; i < categories.length; i++) {
      newObj[categories[i]] = [];
    }

    for (let i = 0; i < shownCategories.length; i++) {
      newObj[shownCategories[i]] = categoryData[shownCategories[i]];
    }

    return newObj;
  };

  toggleMenu = () => {
    const isShown = this.state.showMenu;

    if (isShown) {
      this.setState({ showCategory: [] });
    }

    this.setState({ showMenu: !isShown });
  };

  toggleItem = category => {
    const categoriesShown = this.state.showCategory.slice();
    let categoryFound = false;
    for (let i = 0; i < categoriesShown.length; i++) {
      if (categoriesShown[i] === category) {
        categoriesShown.splice(i, 1);
        categoryFound = true;
      }
    }

    if (!categoryFound) {
      categoriesShown.push(category);
    }

    this.setState({ showCategory: categoriesShown });
  };

  render() {
    console.log("PostNavBar: ", this.state.postEdges);
    const postData = this.getPostData();
    const categoryData = this.getCategoryData(postData);
    const categories = Object.keys(categoryData);
    const shownCategories = this.getShownCategories(categories, categoryData);
    let menu = null;

    if (this.state.showMenu) {
      menu = (
        <PostNavBarItem
          state={this.state.postEdges}
          isClosed="false"
          menuClick={this.toggleMenu}
          itemClick={this.toggleItem}
          postCategories={categories}
          postData={shownCategories}
        />
      );
    } else {
      menu = (
        <PostNavBarItem
          state={this.state.postEdges}
          isClosed="true"
          menuClick={this.toggleMenu}
          itemClick={this.toggleItem}
          postCategories={[]}
          postData={shownCategories}
        />
      );
    }

    return <div className={styles.menu}>{menu}</div>;
  }
}

export default PostNavBar;

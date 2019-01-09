---
title: "React Basics"
cover: "https://unsplash.it/1152/300/?random?SuperLong"
category: "React"
date: "12/04/2018"
tags:
  - programming
  - React
---

## Project Structure

- Capitalize component folders and use descriptive names, for example Person.
- Capitalize files in component folders as well, for example Person.js

## Components

In its simplest form components are a function that returns jsx. Use functional
as often as possible.

1. Functional components (presentational, dumb, stateless)

```javascript
const cmp = () => {
  return <div>some JSX</div>;
};
```

    - Uses props.attribute

2. Class-based components (containers, smart, stateful components)

```javascript
class Cmp extends Component {
  render() {
    return <div>some JSX</div>;
  }
}
```

    - Uses this.props.attribute

## Props

- If props is changed it will update DOM.
- props.children: refers to elements between the opening and closing tag.

## State

- If state is changed it will update DOM.
- State should only be handled in a few selected components named containers.

## Handler functions

- Methods that you are not actively calling, but instead are called by events.

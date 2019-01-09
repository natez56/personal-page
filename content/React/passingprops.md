---
title: "React: Passing Props"
cover: "https://unsplash.it/1152/300/?random?SuperLong"
category: "React"
date: "12/04/2018"
tags:
  - programming
  - React
---

## Pass function as prop.

```javascript
// Use bind syntax.
<Person click={this.switchNameHandler.bind(this, "Nathan!")} />

// This can be inefficient
<Person click={() => switchNameHandler("Nathan")} />
```

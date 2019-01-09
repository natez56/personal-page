---
title: "CSS Sizing"
cover: "https://unsplash.it/1152/300/?random?SuperLong"
category: "CSS"
date: "12/04/2018"
tags:
  - programming
  - CSS
---

## box-sizing

After setting width and height to 100% padding will cause an element to extend
beyond the containing element. Fix: box-sizing: border-box;

```css
.child {
  width: 100%;
  height: 50%;
  padding: 20px;
  box-sizing: border-box;
}
```

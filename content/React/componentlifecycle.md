---
title: "React Component Lifecycle"
cover: "https://unsplash.it/1152/300/?random?SuperLong"
category: "React"
date: "12/04/2018"
tags:
  - programming
  - React
---

## Creation

- constructor(props)
- componentWillMount() <- Avoid this
- render()
- Render Child Components
- componentDidMount()

* Can Cause Side-Effects (request api)
* Don't update state

- componentWillReceiveProps() <- Avoid this
- shouldComponentUpdate()
- componentWillUpdate() <- Avoid this
- componentDidUpdate()
- componentDidCatch()

- componentWillUnmount()

## New Hooks

- getDerivedStateFromProps(nextProps, prevState) {} : Updates state if props changed.

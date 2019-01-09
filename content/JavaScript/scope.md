---
title: "JavaScript Scope"
cover: "https://unsplash.it/1152/300/?random?SuperLong"
category: "JavaScript"
date: "12/04/2018"
tags:
  - programming
  - JavaScript
---

# Notes Taken From https://github.com/getify/You-Dont-Know-JS

## JavaScript Scope

JavaScript has function based scope.

## Methods to avoid collision.

1. Create object in global scope to act as namespace.
2. Use dependency manager to create module.

## Function Scope: Declaration vs. Expression

- Declaration: Pollutes global scope.

```javascript
var a = 2;

function foo() {
  var a = 3;
  console.log(a); // 3;
}

foo();
console.log(a); // 2;
```

- Expression: Name bound only in its own function. No pollution. (Immediately Invoked Function Expression IIFE)

```javascript
var a = 2;

(function foo() {
  var a = 3;
  console.log(a); // 3
})();

console.log(a); // 2
```

## Anonymous vs. Named

Best practice: name your function expressions. Why?

1. Stack trace
2. Recursion and unbinding itself
3. Descriptive names

```javascript
setTimeout(function timeoutHandler() {
  console.log("I waited 1 second!");
}, 1000);
```

## Let

Scopes value to { .. }
Can wrap values in block to aid garbage collection.

## const

Block scoped. Value cannot be re-assigned.

---
title: "JavaScript Built In Methods"
cover: "https://unsplash.it/1152/300/?random?SuperLong"
category: "JavaScript"
date: "12/06/2018"
tags:
  - programming
  - JavaScript
---

## Arrays

```javascript
const numbers = [1, 2, 3];

// map: creates new array with the results of calling a provided function on every element
const doubleNumArray = numbers.map(x => x * 2); // Returns new array [2, 4, 6]

// find: returns the value of the first element in the array that satisfies the provided testing function
const found = numbers.find(x => x > 1); // Return 2

// filter: method creates a new array with all elements that pass the test implemented by the provided function
const filteredNums = numbers.filter(x => x > 1); // Return new array [2, 3]

// findIndex: method returns the index of the first element in the array that satisfies the provided testing function
const index = numbers.findIndex(x => x > 1); // Returns 1

// reduce: executes a reducer function on each member of the array resulting in a single output
const reduced = numbers.reduce((total, x) => total + x); // Returns 6

// concat: used to merge two arrays
const mergedArray = numbers.concat(filteredNums); // returns [1, 2, 3, 2, 3]

// slice: returns a shallow copy of a portion of an array into a new array object
const slicedArray = numbers.slice(1, 3); // returns [2, 3]

// splice: changes the contents of an array by removing or replacing existing elements
numbers.splice(1, 1, -1); // Changes original array to [1, -1, 3]
```

---
title: "JavaScript ES6"
cover: "https://unsplash.it/1152/300/?random?SuperLong"
category: "JavaScript"
date: "12/06/2018"
tags:
  - programming
  - JavaScript
---

# let & const

- const: Value that you only assign once.
- let: Value that you plan on changing.

# Arrow Functions

Will always keep its context when using this.

```javascript
const myFnc = () => {
  ///
};

const multiply = number => {
  return number * 2;
};

const multiply = number => number * 2;
```

# Exports & Imports

The default keyword allows import statements to choose the name of the import

```javascript
// Both are valid
import person from "./person.js";
import prs from "./person.js";
```

Named exports can use multiple export statements in one file.

```javascript
import { baseData } from "./utility.js";

// Alias
import { baseData as bd } from "./utility.js";

import * as bundled from "./utility.js";
```

# Classes

```javascript
class Person {
    name = 'Max' // property
    call = () => {} // method
}

const myPerson = new Person()
myPerson.call()
console.log(myPerson.name)

// Inheritance
class Person extends Master
```

## Properties & Methods

Properties are variables.
Methods are functions.

```javascript
constructor() {
    this.myProperty = 'value'
}

// Same as

myProperty = 'value'

myMethod() {}

// Same as

myMethod = () => {}
```

## Spread & Rest Operators

Spread: used to split up array elements or object properties

```javascript
const newArray = [...oldArray, 1, 2];
const newObject = { ...oldObject, newProp: 5 }; // If newProp is overwritten in oldObject is present
```

Rest: Used to merge a list of function arguments in an array.

```javascript
// Merges argument list into an array
function sortArgs(...args) {
  return args.sort();
}
```

## Destructuring

Easily extract array elements or object properties and store them in variables

```javascript
[a, b] = ['hello', 'Max']
console.log(a) // Hello
console.log(b) // Max

{name} = {name: 'Max', age: 28}
console.log(name) // Max
console.log(age) // Undefined
```

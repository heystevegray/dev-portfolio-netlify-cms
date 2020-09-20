---
title: "Nullish coalescing operator (??) "
publish_date: 2020-09-19T23:19:22.844Z
updated: ""
description: Check for null values faster than you can say "??".
image: assets/mick-haupt-ve9dq7zm22y-unsplash.jpg
tldr: >-
  If the left side of the [Nullish coalescing operator
  (??)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)
  operator is `null` or `undefined`, the right side is returned. Otherwise the
  left side is returned.


  ```jsx

  const name1 = null ?? "Bob";

  const name2 = undefined ?? "Burger";

  const name3 = "Jeff" ?? "Britta";


  console.log({ name1, name2, name3 });

  ```


  Th output is the following:


  ```jsx

  { name1: "Bob", name2: "Burger", name3: "Jeff" }

  ```
tags:
  - development
  - javascript
  - nullish
  - workflow
---
# Overview

```
exclude: Overview
```

# Summary

A [nullish](https://developer.mozilla.org/en-US/docs/Glossary/Nullish) value in Javascript is a value that is either `null` or `undefiend`. The nullish coalescing operator (??) is a [Binary logical operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Binary_logical_operators).

> The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand. | [Source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)

# Usage

A good example of when to use this operator is when you are working with [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage). When you try to get and item by it's name, the `Storage` interface will return that key's `value`, or `null` if the key does not exist. | [Source](https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem)

```jsx
const storage = localStorage.getItem("dark-theme-key");
const initialState = JSON.parse(storage ?? "true");

const [darkTheme, setDarkTheme] = useState(initialState);
```

# Example

If the left side of the `??` operator is `null` or `undefined`, the right side is returned. Otherwise the left side is returned.

```jsx
const name1 = null ?? "Bob";
const name2 = undefined ?? "Burger";
const name3 = "Jeff" ?? "Britta";

console.log({ name1, name2, name3 });
```

Th output is the following:

```jsx
{ name1: "Bob", name2: "Burger", name3: "Jeff" }
```

# Resources

[Nullish coalescing operator (??)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)
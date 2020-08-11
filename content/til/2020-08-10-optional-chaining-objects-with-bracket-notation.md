---
title: Optional chaining objects with bracket notation
publish_date: 2020-08-10T06:35:26.871Z
updated: ""
image: assets/emily-morter-8xaa0f9yqne-unsplash.jpg
tags:
  - development
  - javascript
---

## Summary

You are probably familiar with this representation of [optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining):

```javascript
const nestedProp = obj.first?.second
```

if not:

> The **optional chaining** operator (**`?.`**) permits reading the value of a property located deep within a chain of connected objects without having to expressly validate that each reference in the chain is valid. | [Source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)

You can use optional chaining with objects that use [bracket notation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors).

## Example

```jsx
const nestedProp = obj?.["first"]?.["second"]
```

## Resources

[The optional chaining operator (**`?.`**)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)

## TLDR

You can use the [optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) operator (**`?.`**) with objects and [bracket notation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors).

```jsx
const nestedProp = obj?.["first"]?.["second"]
```

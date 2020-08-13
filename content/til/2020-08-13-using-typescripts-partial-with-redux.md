---
title: Using Typescript's Partial with Redux
publish_date: 2020-08-13T02:41:07.927Z
updated: ""
image: assets/element5-digital-uikfmnxo3bi-unsplash.jpg
tags:
  - development
  - typescript
  - redux
---
# Summary

### Partial

Quick overview of `Partial`:

> Constructs a type with all properties of Type set to optional. This utility will return a type that represents all subsets of a given type. | [Source](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)

Here is an [example from the documentation](https://www.typescriptlang.org/docs/handbook/utility-types.html#example):

![Typescript Partial example.](assets/tspartialexample.png "Typescript Partial example.")

You can see that it's not problem to only update *part* of the `Todo` interface on line 16. If I take the same code above, and remove `Partial` on line 6, we get the following error in Typescript.

![Image of a typescript error.](assets/tspartialexample2.png "Image of a Typescript error.")

Here is the error that is displayed:

> Argument of type '{ description: string; }' is not assignable to parameter of type 'Todo'. Property 'title' is missing in type '{ description: string; }' but required in type 'Todo'. (2345)

Wrapping `Partial<>` around the `Todo` interface allows us to only update a few of the properties in the interface without having to make all of the [optional properties](https://www.typescriptlang.org/docs/handbook/interfaces.html#optional-properties). Which is dope.

# Usage

### Redux

So now we can take this and apply it to a Redux and Typescript application. For example, we can define our `action` to accept a `Partial<Todo>`.

```jsx
// src/actions/Todo.ts

// interface Todo {
//   title: string
//   description: string
// }

export const UPDATE_TODO = "UPDATE_TODO";

export function updateTodo(todo: Partial<Todo>) {
  return { type: UPDATE_TODO, todo };
}
```

Finally, we can only `dispatch` settings that you have changed.

```jsx
dispatch(updateTodo({ title: "organize living room" }));
```

# Resources

[Handbook - Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)
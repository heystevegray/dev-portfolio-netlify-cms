---
title: Create a responsive Navbar with Bulma and React Hooks
publish_date: 2020-08-16T05:12:50.556Z
updated: ""
description: A minimal Navbar example with built in hamburger menu animations.
image: assets/erik-odiin-jbqvjx2ewnu-unsplash.jpg
tags:
  - development
  - typescript
  - react
  - hooks
  - bulma
---
# Summary

[Here is the Navbar documentation](https://bulma.io/documentation/components/navbar/) from Bulma. I learned that you need to add the `is-active` className to both the [navbar-burger](https://bulma.io/documentation/components/navbar/#navbar-burger) and the [navbar-menu](https://bulma.io/documentation/components/navbar/#navbar-menu) when the hamburger menu is clicked for anything to happen. The good news is we can easily implement this using the `useState` hook.

# Example

You can view the full code for my `header.tsx` file [here](https://github.com/heystevegray/dev-portfolio-netlify-cms/blob/master/src/components/header.tsx).

### Add the useState hook

Lets add a new state variable called `active` to manage the hamberger menu state in our Component.

```tsx
import React, { useState } from "react"

const Header = () => {
  const [active, setActive] = useState(false)
}
```

### Animate the burger and show the menu

Quick note about the `navbar-burger`.

> The `navbar-burger` has to contain three empty span tags in order to visualize the hamburger lines or the cross (when active). | [Source](https://bulma.io/documentation/components/navbar/#navbar-burger)

Now lets control the states of these elements with our state variable. If the `is-active` className is added on the `navbar-burger`, the burger will animate into a cross. Setting the `is-active` className on the `navbar-menu` will make the menu visible. We can add it using [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) like so:

```tsx
{/* The navbar-burger */}
<a
  role="button"
  className={`navbar-burger burger ${active && "is-active"}`} 
  onClick={() => {
    setActive(!active)
  }}
>
  <span aria-hidden="true"></span>
  <span aria-hidden="true"></span>
  <span aria-hidden="true"></span>
</a>

{/* The navbar-menu */}
<div className={`navbar-menu ${active && "is-active"}`}>
  <div className="navbar-start">
    <Link to="/til" className="navbar-item">
      Today I Learned
    </Link>
  </div>
</div>
```

Don't forget to add the `onClick` function to the  `navbar-burger` so that we can set the `active` state when it is clicked.

And thats it! 🥳

# Resources

[Navbar](https://bulma.io/documentation/components/navbar/)

[heystevegray/dev-portfolio-netlify-cms](https://github.com/heystevegray/dev-portfolio-netlify-cms/blob/master/src/components/header.tsx)

# TLDR

[Here is how I implemented the responsive Navbar](https://github.com/heystevegray/dev-portfolio-netlify-cms/blob/master/src/components/header.tsx) for my portfolio website using Bulma and React Hooks!  | [Resources](https://bulma.io/documentation/components/navbar/)
---
title: Create a responsive Navbar with Bulma and React Hooks
publish_date: 2020-08-16T07:05:17.683Z
updated: 2020-08-16T17:39:12.847Z
description: A minimal Navbar example with built in hamburger menu animations.
image: assets/erik-odiin-jbqvjx2ewnu-unsplash.jpg
tags:
  - development
  - typescript
  - react
  - hooks
  - bulma
---
```toc
```

## Summary

[Here is the Navbar documentation](https://bulma.io/documentation/components/navbar/) from Bulma. When I copied the example code from the documentation and clicked the menu, nothing happened.

I learned that you need to add the `is-active` className to both the [navbar-burger](https://bulma.io/documentation/components/navbar/#navbar-burger) and the [navbar-menu](https://bulma.io/documentation/components/navbar/#navbar-menu) when the hamburger menu is clicked for anything to happen. The good news is we can easily implement this using the `useState` hook.

## Example

You can view the full code for my `header.tsx` file [here](https://github.com/heystevegray/dev-portfolio-netlify-cms/blob/master/src/components/header.tsx).

### Add the `useState` hook

Let's add a new state variable called `active` to manage the hamburger menu state in our Component.

```tsx
import React, { useState } from "react";

const Header = () => {
  const [active, setActive] = useState(false);
};
```

### Animate the burger and show the menu

Quick note about the `navbar-burger`.

> The `navbar-burger` has to contain three empty span tags in order to visualize the hamburger lines or the cross (when active). | [Source](https://bulma.io/documentation/components/navbar/#navbar-burger)

Now let's control the states of these elements with our state variable. If the `is-active` className is added on the `navbar-burger`, the burger will animate into a cross. Setting the `is-active` className on the `navbar-menu` will make the menu visible. We can add it using [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) like so:

```tsx
{
  /* The navbar-burger */
}
<a
  role="button"
  className={`navbar-burger burger ${active && "is-active"}`}
  onClick={() => {
    setActive(!active);
  }}
>
  <span aria-hidden="true"></span>
  <span aria-hidden="true"></span>
  <span aria-hidden="true"></span>
</a>;

{
  /* The navbar-menu */
}
<div className={`navbar-menu ${active && "is-active"}`}>
  <div className="navbar-start">
    <Link to="/til" className="navbar-item">
      Today I Learned
    </Link>
  </div>
</div>;
```

### Add the `onClick` function

Don't forget to add the `onClick` function to the `navbar-burger` so that we can set the `active` state when it is clicked.

And thats it! 🥳

### Full source code

```tsx
import React, { ReactElement, useState } from "react";
import { Link } from "gatsby";

interface Props {
  siteTitle: string;
}

const Header = ({ siteTitle = "Home" }: Props): ReactElement => {
  const [active, setActive] = useState(false);

  return (
    <header>
      <nav role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          {/* Main links */}
          <Link to="/" className="navbar-item">
            {siteTitle}
          </Link>
          <Link to="/til" className="is-hidden-touch navbar-item">
            Today I Learned
          </Link>

          {/* The navbar-burger */}
          <a
            role="button"
            className={`navbar-burger burger ${active && "is-active"}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={() => {
              setActive(!active);
            }}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        {/* The navbar-menu */}
        {active && (
          <div className={`navbar-menu has-background-black-bis ${active && "is-active"}`}>
            <div className="navbar-start">
              <Link to="/til" className="navbar-item">
                Today I Learned
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
```

## Resources

[Bulma Navbar Documentation](https://bulma.io/documentation/components/navbar/)

[Full source code for my header component](https://github.com/heystevegray/dev-portfolio-netlify-cms/blob/master/src/components/header.tsx)

## TLDR

[Here is how I implemented the responsive Navbar](https://github.com/heystevegray/dev-portfolio-netlify-cms/blob/master/src/components/header.tsx) for my portfolio website using Bulma and React Hooks! | [Resources](https://bulma.io/documentation/components/navbar/)
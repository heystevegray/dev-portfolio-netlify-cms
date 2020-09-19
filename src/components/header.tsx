import React, { ReactElement, useState } from "react";
import { Link } from "gatsby";

interface Props {
  siteTitle: string;
}

const Header = ({ siteTitle = "Home" }: Props): ReactElement => {
  const [active, setActive] = useState(false);

  return (
    <header>
      <nav
        className="navbar is-fixed-top has-background-black-bis"
        role="navigation"
        aria-label="main navigation"
      >
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
          <div
            className={`navbar-menu has-background-grey-darker ${
              active && "is-active"
            }`}
          >
            <div className="navbar-start">
              <Link to="/" className="navbar-item">
                Home
              </Link>
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

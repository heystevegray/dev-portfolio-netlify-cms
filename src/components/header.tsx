import React, { ReactElement, useState } from "react";
import { Link } from "gatsby";
import Socials from "./Socials/Socials";

interface Props {
  siteTitle: string;
  isHome: boolean;
}

const Header = ({
  siteTitle = "Home",
  isHome = false,
}: Props): ReactElement => {
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
          {!isHome && (
            <>
              <Link to="/projects" className="is-hidden-touch navbar-item">
                Projects
              </Link>
              <Link to="/til" className="is-hidden-touch navbar-item">
                Today I Learned
              </Link>
              <Link to="/about" className="is-hidden-touch navbar-item">
                About
              </Link>
              <Link to="/contact" className="is-hidden-touch navbar-item">
                Contact
              </Link>
            </>
          )}

          {/* The navbar-burger */}
          <a
            role="button"
            className={`navbar-burger burger ${active && "is-active"}`}
            aria-label="menu"
            aria-expanded={active}
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
        {!active && (
          <div className="navbar-menu">
            <div className="navbar-end navbar-item">
              <Socials iconSize={2.5} />
            </div>
          </div>
        )}
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
              <Link to="/projects" className="navbar-item">
                Projects
              </Link>
              <Link to="/til" className="navbar-item">
                Today I Learned
              </Link>
              <Link to="/about" className="navbar-item">
                About
              </Link>
              <Link to="/contact" className="navbar-item">
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

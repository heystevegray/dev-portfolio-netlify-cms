import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Socials from "./Socials/Socials"

const Header = ({ siteTitle }) => (
  <header>
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <h4 className="title is-4">
          <Link to="/" className="navbar-item">
            {siteTitle}
          </Link>
        </h4>

        {/* <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a> */}
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <Link to="/til" className="navbar-item">
            Today I Learned
          </Link>
          {/* <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">More</a>
            <div className="navbar-dropdown">
              <a className="navbar-item">About</a>
              <hr className="navbar-divider" />
            </div>
          </div> */}
        </div>
      </div>

      {/* <div className="navbar-end">
          <div className="navbar-item"></div>
        </div> */}
      {/* </div> */}
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

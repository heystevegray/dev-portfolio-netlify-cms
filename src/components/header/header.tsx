import React, { ReactElement, useState, useEffect } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Socials from "../Socials/Socials"
import "./header.scss"

const Header = ({ siteTitle }): ReactElement => {
  const [active, setActive] = useState(false)

  useEffect(() => {
    console.log({ active })
  }, [active])

  return (
    <header>
      <nav role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            {siteTitle}
          </Link>
          <Link to="/til" className="is-hidden-touch navbar-item">
            Today I Learned
          </Link>

          <a
            role="button"
            className={`navbar-burger burger ${active && "is-active"}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={() => {
              setActive(!active)
            }}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        {active && (
          <div
            className={`navbar-menu has-background-black-bis ${
              active && "is-active"
            }`}
          >
            <div className="navbar-start">
              <Link to="/til" className="navbar-item">
                Today I Learned
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

import React from "react"
import Socials from "./Socials/Socials"

export default function Footer() {
  return (
    <footer className="footer">
      <Socials />
      <div className="container">
        <p className="content has-text-centered">
          Steve Gray © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}

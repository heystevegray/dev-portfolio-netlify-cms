import React from "react"
import Socials from "./Socials/Socials"

export default function Footer() {
  return (
    <footer className="footer has-background-black-bis">
      <Socials />
      <p className="has-text-centered">
        Steve Gray © {new Date().getFullYear()}
      </p>
    </footer>
  )
}

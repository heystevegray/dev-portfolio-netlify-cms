import React from "react";
import Socials from "./Socials/Socials";

export default function Footer() {
  return (
    <footer>
      <div className="p-10 mt-10 place-self-center has-background-black-ter">
        <Socials />
        <p className="has-text-centered">
          All rights reserved {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

import { Button } from "@material-ui/core";
import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="contact max-w-2xl my-10 has-background-black-ter md:p-8 md:py-12 p-4 flex flex-col flex-wrap w-full mx-auto"
    >
      <form name="contact" method="post" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <div className="flex flex-wrap flex-col w-full sm:p-4 p-1">
          <label className="mb-1" htmlFor="name">
            Name *
          </label>
          <input
            className="p-3 mb-4 text-md input"
            type="text"
            id="name"
            name="name"
            aria-label="name"
            placeholder="Your name"
            required
          />
          <label className="mb-1" htmlFor="email">
            Email *
          </label>
          <input
            className="p-3 mb-4 text-md input"
            type="email"
            placeholder="Your email"
            id="email"
            name="email"
            aria-label="email"
            required
          />
          <label className="mb-1" htmlFor="message">
            Message *
          </label>
          <textarea
            className="p-3 mb-6 text-md input h-48 min-h-48"
            inputMode="text"
            placeholder="What's up? Let's build something together..."
            name="message"
            id="message"
            aria-label="message"
            required
          />
          <Button
            style={{ background: "var(--accent-color)" }}
            className="text-black"
            type="submit"
            size="large"
            variant="contained"
            fullWidth
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Contact;

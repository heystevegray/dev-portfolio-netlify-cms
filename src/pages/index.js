import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../assets/styles.css"
import "../assets/sass/index.scss"
import Socials from "../components/Socials/Socials"

const IndexPage = () => (
  <Layout>
    <SEO title="Developer Portfolio Website" />
    <section className="hero is-fullheight-with-navbar has-text-centered is-transparent">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Software Engineer</h1>
          <h2 className="subtitle is-6">{`React | Typescript | Bulma`}</h2>
          <div className="columns is-centered">
            <div className="column is-one-fifth">
              <div className="columns is-centered">
                <Link className="column" to="/til/">
                  <button className="button is-link is-rounded">
                    Things I've learned
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* <Socials iconSize={3} /> */}
        </div>
      </div>
    </section>

    {/* <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    {/* <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </Layout>
)

export default IndexPage

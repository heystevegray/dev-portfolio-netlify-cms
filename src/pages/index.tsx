import React, { ReactElement } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../assets/styles.css"
import "../assets/sass/index.scss"
import Img from "gatsby-image"

const IndexPage = ({ data }): ReactElement => {
  const image = data?.file?.childImageSharp?.fixed

  return (
    <Layout>
      <SEO title="Developer Portfolio" />
      <section className="hero is-fullheight-with-navbar has-text-centered has-background-black-bis">
        <div className="hero-body">
          <div className="container">
            {image && <Img className="logo" fixed={image} />}
            <h1 className="title is-1">Steve Gray</h1>
            <div className="container">
              <h3 className="title is-3">Software Engineer</h3>
              <h5 className="subtitle">{`React | Typescript | Bulma`}</h5>
              <div className="columns is-centered">
                <div className="column is-one-fifth">
                  <div className="columns is-centered">
                    <Link className="column" to="/til/">
                      <button className="button has-text-dark is-large is-link is-rounded">
                        Today I Learned
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    file(relativePath: { eq: "logo.jpg" }) {
      childImageSharp {
        fixed(width: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

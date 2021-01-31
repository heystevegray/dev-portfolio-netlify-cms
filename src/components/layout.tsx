/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./header";
import Title from "./Title/Title";
import Headshot from "./Headshot/Headshot";
import Footer from "./footer";
import { useWindowSize } from "react-use";
import "./layout.css";

interface Props {
  children: any;
  isHome?: boolean;
  showHeadshot?: boolean;
  title?: string;
  center?: boolean;
}

const Layout = ({
  children,
  isHome = false,
  title,
  showHeadshot = false,
}: Props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div>
      <Header isHome={isHome} siteTitle={data.site.siteMetadata.title} />
      <main className="sm:pt-36 pt-12 md:px-10 min-h-screen">
        {title && (
          <div className={`mt-10 sm:mb-20 mb-10 ${isHome && "invisible"}`}>
            <Title title={title} />
          </div>
        )}
        {showHeadshot && <Headshot />}
        <div className="has-background-black-bis">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

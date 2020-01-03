import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
        <footer>
          <button onClick={() => window.scrollTo(0, 0)}>top</button>
          © {new Date().getFullYear()} Francesco Strazzullo. All rights reserved. Email: <a href="mailto:francesco.strazzullo86@gmail.com" target="_black">francesco.strazzullo86@gmail.com</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

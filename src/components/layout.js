import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Container from './container'
import Footer from './footer'
import Header from './header'
import './layout.css'

const Layout = ({ children, PhotoCredit = () => null }) => {
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
        <Container>
          <main>{children}</main>
        </Container>
        <Footer>
          © {new Date().getFullYear()} Francesco Strazzullo. All rights reserved. Email: <a href='mailto:francesco.strazzullo86@gmail.com' target='_black'>francesco.strazzullo86@gmail.com</a>
          <PhotoCredit />
        </Footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import HeaderImage from "../components/images/homeHeaderImage"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <HeaderImage />
      <h2>Speaker, Trainer and Frontend Engineer</h2>
    </div>

    <div>
      <h3>Worskshops</h3>
      <p>I'm a trainer that helps organizations to learn new tools and techinique. You can check my workshops in the link below.</p>

      <ul>
        <li><Link to="/workshop">Frameworkless Frontend Development</Link></li>
        <li><Link to="/workshop">Frameworkless Frontend Development</Link></li>
        <li><Link to="/workshop">Frameworkless Frontend Development</Link></li>
        <li><Link to="/workshop">Frameworkless Frontend Development</Link></li>
        <li><Link to="/workshop">Frameworkless Frontend Development</Link></li>
      </ul>
    </div>

    <div>
      <h3>Book</h3>
      <p>I'm a trainer that helps organizations to learn new tools and techinique. You can check my workshops in the link below.</p>

      <ul>
        <li><Link to="/book">Frameworkless Frontend Development Book</Link></li>
        <li><a href="http://frameworklessmovement.org/" target="_black">Frameworkless Movement</a></li>
      </ul>
    </div>

    <div>
      <h3>About Me</h3>
      <p>Frontend engineer and speaker at @FlowingIs, Author of "Frameworkless Front-end Developer" by @Apress. Also a PlayStation lover.</p>
    </div>
  </Layout>
)

export default IndexPage

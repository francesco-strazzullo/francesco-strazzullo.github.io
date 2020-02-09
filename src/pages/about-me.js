import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderImage from "../components/images/homeHeaderImage"
import Hero from "../components/hero"

const SecondPage = () => (
  <Layout>
    <SEO title="about me" />

    <Hero title={"Speaker, Trainer and Frontend Engineer"} img={<HeaderImage />} />


    <section>
      <h3>Lorem ipsum dolor sit amet, consectetur adipisci elit</h3>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisci <strong>elit</strong>, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do <strong>eiusmod tempor incidunt ut labore et dolore magna aliqua</strong>. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </section>


    <section>
      <h3>eiusmod tempor incidunt</h3>

      <h4>quis nostrum exercitationem </h4>

      <ul>
        <li> Lorem ipsum dolor sit amet</li>
        <li> Lorem ipsum dolor sit amet</li>
        <li> Lorem ipsum dolor sit amet</li>
        <li> Lorem ipsum dolor sit amet</li>
      </ul>

      <h4>quis nostrum exercitationem </h4>

      <ul>
        <li> Lorem ipsum dolor sit amet</li>
        <li> Lorem ipsum dolor sit amet</li>
        <li> Lorem ipsum dolor sit amet</li>
        <li> Lorem ipsum dolor sit amet</li>
      </ul>
    </section>
  </Layout>
)

export default SecondPage

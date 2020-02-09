import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/Section"

const SecondPage = () => (
  <Layout>
    <SEO title="videos" />

    <Section hasSidebar={false}>
      <h2>Videos</h2>
    </Section>

    <Section hasSidebar={false}>
      <h3>ViennaJS Semptermber 2018: Framework Compass Chart</h3>
      <div>
        <iframe title="video1" width="560" height="315" src="https://www.youtube.com/embed/buFMbKRAUs8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
      </div>
    </Section>

    <Section hasSidebar={false}>
      <h3>ViennaJS Semptermber 2018: Framework Compass Chart</h3>
      <div>
        <iframe title="video2" width="560" height="315" src="https://www.youtube.com/embed/buFMbKRAUs8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
      </div>
    </Section>

    <Section hasSidebar={false}>
      <h3>ViennaJS Semptermber 2018: Framework Compass Chart</h3>
      <div>
        <iframe title="video3" width="560" height="315" src="https://www.youtube.com/embed/buFMbKRAUs8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
      </div>
    </Section>

    <Section hasSidebar={false}>
      <h3>ViennaJS Semptermber 2018: Framework Compass Chart</h3>
      <div>
        <iframe title="video4" width="560" height="315" src="https://www.youtube.com/embed/buFMbKRAUs8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
      </div>
    </Section>

  </Layout>
)

export default SecondPage

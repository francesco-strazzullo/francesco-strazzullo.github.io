import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/Section"
import IframeContainer from "../components/iframeContainer"

const SecondPage = () => (
  <Layout>
    <SEO title="videos" />

    <Section hasSidebar={false}>
      <h2>Videos</h2>
    </Section>

    <Section hasSidebar={false}>
      <h3>ViennaJS Semptermber 2018: Framework Compass Chart</h3>
      <IframeContainer>
        <iframe title="video1" src="https://www.youtube.com/embed/buFMbKRAUs8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
      </IframeContainer>
    </Section>

    <Section hasSidebar={false}>
      <h3>ViennaJS Semptermber 2018: Framework Compass Chart</h3>
      <IframeContainer>
        <iframe title="video2" src="https://www.youtube.com/embed/buFMbKRAUs8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
      </IframeContainer>
    </Section>

    <Section hasSidebar={false}>
      <h3>ViennaJS Semptermber 2018: Framework Compass Chart</h3>
      <IframeContainer>
        <iframe title="video3" src="https://www.youtube.com/embed/buFMbKRAUs8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
      </IframeContainer>
    </Section>

    <Section hasSidebar={false}>
      <h3>ViennaJS Semptermber 2018: Framework Compass Chart</h3>
      <IframeContainer>
        <iframe title="video4" src="https://www.youtube.com/embed/buFMbKRAUs8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
      </IframeContainer>
    </Section>

  </Layout>
)

export default SecondPage

import React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'
import Section from '../components/Section'
import IframeContainer from '../components/iframeContainer'
import TalksImage from '../components/images/TalksImage'
import Hero from '../components/hero'

const PhotoCredit = () => (
  <span style={{ float: 'right' }}>
  Photo by <a href='https://unsplash.com/@tylercallahan'>Tyler Callahan</a> on <a href='https://unsplash.com/'>Unsplash</a>
  </span>
)

const SecondPage = () => (
  <Layout PhotoCredit={PhotoCredit}>
    <Seo title='Talks' />

    <Hero title='Talks' img={<TalksImage />} />

    <Section hasSidebar={false}>
      <h3 id='tdd'>TestCon 2019: Strategic TDD</h3>
      <IframeContainer>
        <iframe title='Strategic TDD' src='https://www.youtube.com/embed/q7bw-P7qgGA' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen />
      </IframeContainer>
    </Section>

    <Section hasSidebar={false}>
      <h3 id='engine'>jsday 2019: A DIY guide to building your own Rendering Engine</h3>
      <IframeContainer>
        <iframe title='A DIY guide to building your own Rendering Engine' src='https://www.youtube.com/embed/T9x7Bkpw4hg' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen />
      </IframeContainer>
    </Section>

    <Section hasSidebar={false}>
      <h3 id='chart'>ViennaJS Semptermber 2018: Framework Compass Chart</h3>
      <IframeContainer>
        <iframe title='Framework Compass Chart' src='https://www.youtube.com/embed/buFMbKRAUs8' frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />
      </IframeContainer>
    </Section>

    <Section hasSidebar={false}>
      <h3>jsday 2018: StranglerApplication pattern: a legacy frontend use case</h3>
      <IframeContainer>
        <iframe title='StranglerApplication pattern: a legacy frontend use case' src='https://www.youtube.com/embed/cTSoFvAUUF8' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen />
      </IframeContainer>
    </Section>

    <Section hasSidebar={false}>
      <h3>RuhrJS 2016: Sacrificial Architecture in modern web development</h3>
      <IframeContainer>
        <iframe title='Sacrificial Architecture in modern web development' src='https://www.youtube.com/embed/Q2vqjQdw6jU' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen />
      </IframeContainer>
    </Section>

    <Section hasSidebar={false}>
      <h3>ReactJS Day 2016: Stay Reactive with MobX</h3>
      <IframeContainer>
        <iframe title='Stay Reactive with MobX' src='https://www.youtube.com/embed/z0O2LDdcH1A' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen />
      </IframeContainer>
    </Section>

  </Layout>
)

export default SecondPage

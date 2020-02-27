import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import HeaderImage from '../components/images/homeHeaderImage'
import StrazzImage from '../components/images/strazzImage'
import Hero from '../components/hero'
import Section from '../components/Section'
import Seo from '../components/seo'

const IndexPage = () => (
  <Layout>
    <Seo title='Home' />
    <Hero title='Speaker, Trainer and Software Engineer' img={<HeaderImage />} />

    <Section hasSidebar>
      <h3>Worskshops</h3>
      <p>I'm a trainer that helps organizations to learn new tools and techiniques. You can check my workshops in the links below.</p>

      <ul>
        <li><Link to='/workshops/#frameworkless'>Frameworkless Frontend Development</Link></li>
        <li><Link to='/workshops/#decision-making'>Decision-making for critical software decisions</Link></li>
      </ul>
    </Section>

    <Section hasSidebar>
      <h3>Talks</h3>
      <p>I love to share some thoughts with other developers at conferences or meetup. These are some of my latest talks.</p>

      <ul>
        <li><Link to='/talks/#tdd'>Strategic TDD</Link></li>
        <li><Link to='/talks/#engine'>A DIY guide to building your own Rendering Engine</Link></li>
        <li><Link to='/talks/#chart'>Framework Compass Chart</Link></li>
      </ul>
    </Section>

    <Section
      hasSidebar sidebar={
        <div className='display-desktop' style={{ height: '350px', position: 'relative' }}>
          <div style={{ bottom: '0px', left: '0px', position: 'absolute', height: '260px', width: '248px' }}>
            <StrazzImage />
          </div>
        </div>
      }
    >
      <h3>Book</h3>
      <p>I'm a trainer that helps organizations to learn new tools and techinique. You can check my workshops in the link below.</p>

      <ul>
        <li><Link to='/workshop'>Frameworkless Frontend Development</Link></li>
        <li><Link to='/workshop'>Frameworkless Frontend Development</Link></li>
        <li><Link to='/workshop'>Frameworkless Frontend Development</Link></li>
        <li><Link to='/workshop'>Frameworkless Frontend Development</Link></li>
        <li><Link to='/workshop'>Frameworkless Frontend Development</Link></li>
      </ul>
      <br />
      <br />
      <br />
    </Section>
  </Layout>
)

export default IndexPage

import React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'
import HiResBookImage from '../components/images/HiResBookImage'
import Hero from '../components/hero'
import Section from '../components/Section'
import BookImage from '../components/images/bookImage'

const PhotoCredit = () => (
  <span style={{ float: 'right' }}>
  Photo by <a href='https://unsplash.com/@beatriz_perez'>Beatriz Pérez Moya</a> on <a href='https://unsplash.com/'>Unsplash</a>
  </span>
)

const SecondPage = () => (
  <Layout PhotoCredit={PhotoCredit}>

    <Seo title='book' />

    <Hero title='Book' img={<HiResBookImage />} />

    <Section hasSidebar={false}>
      <h2>Frameworkless Front-end Development</h2>
      <p>
        I published my first book "Frameworkless Front-end Development" with <a href='https://www.apress.com/it/book/9781484249666'>Apress</a>. This book is about working efficiently without frameworks and choosing the right tool following the principles of the <a href='https://github.com/frameworkless-movement/manifesto'>Frameworkless Manifesto</a>.
      </p>
      <p style={{ textAlign: 'center', marginTop: '15px' }}>
        <BookImage />
      </p>
    </Section>

    <Section hasSidebar={false}>
      <h3>Chapters</h3>
    </Section>

    <Section hasSidebar={false}>
      <h5>Chapter 1: Let’s Talk AboutFrameworks</h5>
      <p>The meaning of Frameworks and the <i>hidden</i> cost that usually team don't see.</p>
    </Section>

    <Section hasSidebar={false}>
      <h5>Chapter 2: Rendering</h5>
      <p>How to create a rendering engine from scratch, starting from extremely simple DOM manipulation functions to a complete virtual DOM algorithm.</p>
    </Section>

    <Section hasSidebar={false}>
      <h5>Chapter 3: Managing DOM Events</h5>
      <p>Some useful techniques to easily manage DOM Events.</p>
    </Section>

    <Section hasSidebar={false}>
      <h5>Chapter 4: Web Components</h5>
      <p>An introduction about Web Components: a set of APIs that make possible to build components without the help of third-party libraries.</p>
    </Section>

    <Section hasSidebar={false}>
      <h5>Chapter 5: HTTP Requests</h5>
      <p>Different ways to make an HTTP request and managing its results.</p>
    </Section>

    <Section hasSidebar={false}>
      <h5>Chapter 6: Routing</h5>
      <p>How to create a simple routing library, using fragment identifiers or real paths.</p>
    </Section>

    <Section hasSidebar={false}>
      <h5>Chapter 7: State Management</h5>
      <p>This chapter is about the meaning of State Management and the different kind of patterns that you may use.</p>
    </Section>

    <Section hasSidebar={false}>
      <h5>Chapter 8: The Right Tool For The Right Job</h5>
      <p>Decision-making tools useful when you need to choose a new framework or library</p>
    </Section>

  </Layout>
)

export default SecondPage

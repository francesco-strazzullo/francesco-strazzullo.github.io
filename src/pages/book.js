import React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'
import HiResBookImage from '../components/images/HiResBookImage'
import Hero from '../components/hero'
import Section from '../components/Section'

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
      <h3>Lorem ipsum dolor sit amet, consectetur adipisci elit</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisci <strong>elit</strong>, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do <strong>eiusmod tempor incidunt ut labore et dolore magna aliqua</strong>. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </Section>

    <Section hasSidebar={false}>
      <h3>Lorem ipsum dolor sit amet, consectetur adipisci elit</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisci <strong>elit</strong>, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do <strong>eiusmod tempor incidunt ut labore et dolore magna aliqua</strong>. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </Section>

    <Section hasSidebar={false}>
      <h3>Lorem ipsum dolor sit amet, consectetur adipisci elit</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisci <strong>elit</strong>, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do <strong>eiusmod tempor incidunt ut labore et dolore magna aliqua</strong>. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </Section>

  </Layout>
)

export default SecondPage

import React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'
import HeaderImage from '../components/images/homeHeaderImage'
import Hero from '../components/hero'
import Section from '../components/Section'
import Button from '../components/button'

const SecondPage = () => (
  <Layout>
    <Seo title='about me' />

    <Hero title='Speaker, Trainer and Frontend Engineer' img={<HeaderImage />} />

    <Button
      label='contact me' onClickCallback={() => {
        window.location.href = 'mailto:francesco.strazzullo86@gmail.com'
      }}
    />

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

import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import HeaderImage from '../components/images/workshopsHeaderImage'
import Hero from '../components/hero'
import Section from '../components/Section'

const PhotoCredit = () => (
  <span style={{ float: 'right' }}>
  Photo by <a href='https://unsplash.com/@williamdaigneault'>William Daigneault</a> on <a href='https://unsplash.com/'>Unsplash</a>
  </span>
)

const Workshops = () => (
  <Layout PhotoCredit={PhotoCredit}>
    <Seo title='workshops' />

    <Hero title='Workshops' img={<HeaderImage />} />

    <Section hasSidebar={false}>
      <p>This is a list of my workshops. If you want to ask any information about a workshop feel free to <a href='mailto:francesco.strazzullo86@gmail.com'>contact</a> me.</p>
    </Section>

    <Section hasSidebar={false}>
      <h3 class='workshop-title' id='frameworkless'>Frameworkless Front-end Development</h3>
      <p>
        Based on my book <Link to='/book'>Frameworkless Front-end Development</Link>, this two-day workshop that will help your team to understand how to work efficiently without using frontend frameworks. We will also cover the concept of technical debt related to frameworks and how to mitigate its effects during the lifespan of your product. At last, we will understand how to choose the right framework (or no framework at all) for the right product.
      </p>
      <h6>Why is it important?</h6>
      <p>
        In order to work with frameworks in a <i>good way</i>, a team should be able to understand the basic principles behind them. This workshop aims to solve this problem. Building a small set of libraries and trying to link them together it's a fantastic way to learn. Like <a target='_blank' rel='noopener noreferrer' href='https://blog.cleancoder.com/uncle-bob/2015/08/06/LetTheMagicDie.html'>Uncle Bob</a> says "Before you commit to a framework, make sure you could write it."
      </p>
      <h6>Schedule</h6>
      <p class='workshop-schedule-title'>Introduction</p>
      <ul>
        <li>What is a framework?</li>
        <li>The Framework's way</li>
      </ul>
      <br />
      <p class='workshop-schedule-title'>The Frameworkless Toolkit</p>
      <ul>
        <li>Rendering</li>
        <li>DOM Events Management</li>
        <li>Virtual DOM</li>
        <li>Web Components</li>
        <li>Routing</li>
        <li>State Management</li>
      </ul>
      <br />
      <p class='workshop-schedule-title'>The Right Tool For The Right Job</p>
      <ul>
        <li>Tradeoff Slider</li>
        <li>Framework Compass Chart</li>
        <li>Architectural Clash</li>
      </ul>
    </Section>

    <Section hasSidebar={false}>
      <h3 class='workshop-title' id='decision-making'>Decision-making for critical software decisions</h3>
      <p>
        During this workshop, I will help your team to analyze different kinds of decisions that they will need to tackle during their day-by-day job. We will also define some useful workflow for the most important decisions that a team has to address.
      </p>
      <p>
        We will understand what is the meaning of "Non-functional requirements" and how they are a very important factor to define the context in which the software product "lives".
      </p>
      <p>
        At last, we will cover how to put these decisions in motion in a reversible way. Your team should make sure that the decisions that they make today will not become roadblocks in the future.
      </p>
      <h6>Why is it important?</h6>
      <p>
        To make mindful decisions is a skill that has become crucial for any software development team. Nevertheless, is often an underrated skill that is not trained enough.
      </p>
      <p>
        Every day teams face technological and methodological choices like <i>"Is microservices the right architecture at this moment?"</i> or <i>"What kind of tests should I write for this feature?"</i>. Making these decisions "blindly" without any kind of collaborative process could be a very bad approach.
      </p>
      <h6>Schedule</h6>
      <p class='workshop-schedule-title'>Day 1</p>
      <ul>
        <li>Let's classify decisions</li>
        <li>Explore <i>Identity</i></li>
        <li>Explore <i>Market</i></li>
        <li>Explore <i>Value</i></li>
        <li>Explore <i>Context</i></li>
      </ul>
      <br />
      <p class='workshop-schedule-title'>Day 2</p>
      <ul>
        <li>Let's classify decision-making tools</li>
        <li>Design reversible architectures</li>
        <li>How to communicate architectural decisions</li>
        <li>Using experiments to work in complex ecosystems</li>
      </ul>
    </Section>
  </Layout>
)

export default Workshops

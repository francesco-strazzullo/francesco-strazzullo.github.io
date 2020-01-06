import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import StrazzLogoIcon from "./images/strazzLogoIcon"
import Container from "./container";
import styles from "./header.module.css"

import LinkedinIcon from "./images/linkedinIcon"
import TwitterIcon from "./images/twitterIcon"
import MediumIcon from "./images/mediumIcon"

const menu = [{
  label: "workshops",
  slug: "/workshops"
},{
  label: "videos",
  slug: "/videos"
},{
  label: "book",
  slug: "/book"
},{
  label: "about me",
  slug: "/about-me"
}]

const Header = ({ siteTitle }) => (
  <Container>
    <header className={styles.header}>
      <div className={styles.header__title}>
        <h1>
          <Link
            alt={siteTitle}
            to="/">
              <StrazzLogoIcon alt={siteTitle} />
          </Link>
        </h1>
      </div>
      <div className={styles.header__menu}>
        {menu.map(menuItem => {
          return <Link className={styles.header__menu__item} key={menuItem.slug} to={menuItem.slug} >{menuItem.label}</Link>
        })}
      </div>
    </header>
    <div className={styles.header__social}>
        <ul className={styles.header__social__list}>
          <li className={styles.header__social__list__item}>
            <a href="https://www.linkedin.com/in/francescostrazzullo/">
              <LinkedinIcon />
            </a>
          </li>
          <li className={styles.header__social__list__item}>
            <a href="https://twitter.com/TheStrazz86">
              <TwitterIcon />
            </a>
          </li>
          <li className={styles.header__social__list__item}>
            <a href="https://medium.com/@TheStrazz86">
              <MediumIcon />
            </a>
          </li>
        </ul>
      </div>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

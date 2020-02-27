import React from 'react'
import PropTypes from 'prop-types'
import styles from './footer.module.css'
import Button from './button'
import TopArrowIcon from './images/topArrowIcon'

const Footer = ({ children }) => (
  <footer className={styles.footer}>
    <div className={styles.footer__scrolltop}>
      <Button label='top' onClickCallback={() => window.scrollTo(0, 0)} Icon={TopArrowIcon} />
    </div>
    {children}
  </footer>
)

Footer.propTypes = {
  children: PropTypes.node.isRequired
}

export default Footer

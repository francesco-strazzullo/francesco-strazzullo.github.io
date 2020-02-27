import React from 'react'
import PropTypes from 'prop-types'
import containerStyles from './container.module.css'

const Container = ({ children }) => (
  <div className={containerStyles.container}>
    {children}
  </div>
)

Container.propTypes = {
  children: PropTypes.node.isRequired
}

export default Container

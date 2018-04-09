import React from 'react'
import PropTypes from 'prop-types'
import styles from './{{pascalCase name}}.module.scss'

const {{pascalCase name}} = props => (
  <div className={styles['{{kebabCase name}}']}>
    {/* JSX here */}
  </div>
)

{{pascalCase name}}.propTypes = {
  // PropTypes here
  myProp: PropTypes.string
}

{{pascalCase name}}.defaultProps = {
  // defaultProps here
}

export default {{pascalCase name}}

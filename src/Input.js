import PropTypes from 'prop-types'
import React from 'react'

const Input = ({ value, handleChange, placeholder, name }) => {
  return (
    <input
      type='text'
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    />
  )
}

Input.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired
}

export default Input

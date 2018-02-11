import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ value, handleChange, placeholder }) => {
  return (
    <input
      type='text'
      name={value}
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

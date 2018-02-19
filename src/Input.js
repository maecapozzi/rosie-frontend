import PropTypes from 'prop-types'
import React from 'react'

import StyledInput from './StyledInput'

const Input = ({
  backgroundColor,
  fontColor,
  handleChange,
  name,
  placeholder,
  type,
  value
}) => {
  return (
    <StyledInput
      backgroundColor={backgroundColor}
      fontColor={fontColor}
      name={name}
      onChange={handleChange}
      placeholder={placeholder}
      type={type}
      value={value}
    />
  )
}

Input.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  fontColor: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string
}

export default Input

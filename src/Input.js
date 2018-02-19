// @flow

import PropTypes from 'prop-types'
import React from 'react'

import StyledInput from './StyledInput'

type Props = {
  backgroundColor: string,
  fontColor: string,
  handleChange: Function,
  name: string,
  placeholder: string,
  type: string,
  value: string
}

const Input = (props: Props) => {
  return (
    <StyledInput
      backgroundColor={props.backgroundColor}
      fontColor={props.fontColor}
      name={props.name}
      onChange={props.handleChange}
      placeholder={props.placeholder}
      type={props.type}
      value={props.value}
    />
  )
}

export default Input

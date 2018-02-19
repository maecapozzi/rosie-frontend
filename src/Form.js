// @flow

import PropTypes from 'prop-types'
import React from 'react'

import Button from './Button'
import Input from './Input'

type Props = {
  backgroundColor: string,
  handleChange: Function,
  handleSubmit: Function,
  fontColor: string,
  mainColor: string,
  password: string,
  username: string
}

const Form = (props: Props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Input
        backgroundColor={props.backgroundColor}
        fontColor={props.fontColor}
        handleChange={props.handleChange}
        name='username'
        placeholder='username'
        type='text'
        value={props.username}
      />
      <Input
        backgroundColor={props.backgroundColor}
        fontColor={props.fontColor}
        handleChange={props.handleChange}
        name='password'
        placeholder='password'
        type='password'
        value={props.password}
      />
      <Button backgroundColor={props.mainColor} color={props.mainColor}>
        {'Submit'}
      </Button>
    </form>
  )
}

export default Form

import PropTypes from 'prop-types'
import React from 'react'

import Button from './Button'
import Input from './Input'

const Form = ({
  backgroundColor,
  handleChange,
  handleSubmit,
  fontColor,
  mainColor,
  password,
  username
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <Input
        backgroundColor={backgroundColor}
        fontColor={fontColor}
        handleChange={handleChange}
        name='username'
        placeholder='username'
        type='text'
        value={username}
      />
      <Input
        backgroundColor={backgroundColor}
        fontColor={fontColor}
        handleChange={handleChange}
        name='password'
        placeholder='password'
        type='password'
        value={password}
      />
      <Button backgroundColor={mainColor} color={mainColor}>
        {'Submit'}
      </Button>
    </form>
  )
}

Form.proptypes = {
  backgroundColor: PropTypes.string,
  fontColor: PropTypes.fontColor,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
}

export default Form

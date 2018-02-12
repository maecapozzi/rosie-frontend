import React from 'react'
import PropTypes from 'prop-types'
import Input from './Input'

const Form = ({ username, password, handleSubmit, handleChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Input
        type='text'
        name='username'
        value={username}
        placeholder='username'
        handleChange={handleChange}
      />
      <Input
        type='text'
        name='password'
        value={password}
        placeholder='password'
        handleChange={handleChange}
      />
      <input type='submit' />
    </form>
  )
}

Form.proptypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default Form

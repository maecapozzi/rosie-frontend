import axios from 'axios'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import Input from './Input'

class Form extends Component {
  state = {
    username: '',
    password: ''
  }

  post = url => {
    axios.post(url, {
      username: this.state.username,
      password: this.state.password
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    if (this.props.type === 'createUser') {
      this.post('http://localhost:3001/createUser')
    } else {
      this.post('http://localhost:3001/login')
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render () {
    return (
      <div>
        <h1>{this.props.formName}</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            type='text'
            name='username'
            value={this.state.username}
            placeholder='username'
            handleChange={this.handleChange}
          />
          <Input
            type='text'
            name='password'
            value={this.state.password}
            placeholder='password'
            handleChange={this.handleChange}
          />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

Form.proptypes = {
  type: PropTypes.string.isRequired
}

export default Form

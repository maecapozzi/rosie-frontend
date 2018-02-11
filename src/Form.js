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
    axios
      .post(url, {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
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
      <form onSubmit={this.handleSubmit}>
        <Input
          value={this.state.username}
          handleChange={this.handleChange}
          placeholder='username'
        />
        <Input
          value={this.state.password}
          handleChange={this.handleChange}
          placeholder='password'
        />
        <input type='submit' />
      </form>
    )
  }
}

Form.proptypes = {
  type: PropTypes.string.isRequired
}

export default Form

import axios from 'axios'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Form from './Form'

class FormContainer extends Component {
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
        <Form
          username={this.state.username}
          password={this.state.password}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

FormContainer.proptypes = {
  type: PropTypes.string.isRequired
}

export default FormContainer

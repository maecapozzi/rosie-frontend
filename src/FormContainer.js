import axios from 'axios'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import Form from './Form'
import SubheaderContainer from './SubheaderContainer'

class FormContainer extends Component {
  state = {
    password: '',
    selected: true,
    type: 'createUser',
    username: ''
  }

  post = url => {
    axios.post(url, {
      username: this.state.username,
      password: this.state.password
    })
  }

  handleClick = e => {
    if (e.target.id === 'createUser') {
      this.setState({ type: 'createUser', selected: true })
    } else {
      this.setState({ type: 'login', selected: false })
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    let uri = 'http://localhost:3001'
    if (this.state.type === 'createUser') {
      this.post(uri + '/createUser')
    } else {
      this.post(uri + '/login')
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render () {
    return (
      <div>
        <SubheaderContainer
          handleClick={this.handleClick}
          mainColor={this.props.mainColor}
          selected={this.state.selected}
        />
        <Form
          backgroundColor={this.props.backgroundColor}
          fontColor={this.props.fontColor}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          mainColor={this.mainColor}
          password={this.state.password}
          username={this.state.username}
        />
      </div>
    )
  }
}

FormContainer.proptypes = {
  backgroundColor: PropTypes.string.isRequired,
  fontColor: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequred,
  mainColor: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  username: PropTypes.isRequired
}

export default FormContainer

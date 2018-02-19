// @flow

import axios from 'axios'
import PropTypes from 'prop-types'
import React from 'react'

import Form from './Form'
import SubheaderContainer from './SubheaderContainer'

type Props = {
  mainColor: string,
  backgroundColor: string,
  fontColor: string
}

type State = {
  password: string,
  selected: boolean,
  type: string,
  username: string
}

class FormContainer extends React.Component<Props, State> {
  state = {
    password: '',
    selected: true,
    type: 'createUser',
    username: ''
  }

  post = (url: string) => {
    axios.post(url, {
      username: this.state.username,
      password: this.state.password
    })
  }

  handleClick = (e: SyntheticEvent<>) => {
    if (e.currentTarget.id === 'createUser') {
      this.setState({ type: 'createUser', selected: true })
    } else {
      this.setState({ type: 'login', selected: false })
    }
  }

  handleSubmit = (e: SyntheticEvent<HTMLInputElement>) => {
    e.preventDefault()
    let uri = 'http://localhost:3001'
    if (this.state.type === 'createUser') {
      this.post(uri + '/createUser')
    } else {
      this.post(uri + '/login')
    }
  }

  handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value })
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
          mainColor={this.props.mainColor}
          password={this.state.password}
          username={this.state.username}
        />
      </div>
    )
  }
}

export default FormContainer

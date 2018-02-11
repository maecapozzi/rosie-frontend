import React, { Component } from 'react'
import axios from 'axios'
import './App.css'

class App extends Component {
  state = {
    username: '',
    password: ''
  }
  handleSubmit = e => {
    e.preventDefault()
    axios
      .post('http://localhost:3001/createUser', {
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

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='username'
          value={this.state.username}
          placeholder='username'
          onChange={this.handleChange}
        />
        <input
          type='password'
          name='password'
          value={this.state.password}
          placeholder='password'
          onChange={this.handleChange}
        />
        <input type='submit' />
      </form>
    )
  }
}

export default App

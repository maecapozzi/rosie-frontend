import React, { Component } from 'react'
import Form from './Form'
import './App.css'

class App extends Component {
  render () {
    return (
      <div>
        <Form type='createUser' />
        <Form type='login' />
      </div>
    )
  }
}

export default App

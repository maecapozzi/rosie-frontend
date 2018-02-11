import React, { Component } from 'react'
import Form from './Form'

const App = () => {
  return (
    <div>
      <h1>Register</h1>
      <Form type='createUser' />
      <h1>Login</h1>
      <Form type='login' />
    </div>
  )
}

export default App

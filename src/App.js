import React, { Component } from 'react'

import Form from './Form'

const App = () => {
  return (
    <div>
      <Form formName='Register' type='createUser' />
      <Form formName='Login' type='login' />
    </div>
  )
}

export default App

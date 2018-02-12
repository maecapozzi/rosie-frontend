import React from 'react'

import FormContainer from './FormContainer'

const App = () => {
  return (
    <div>
      <FormContainer formName='Register' type='createUser' />
      <FormContainer formName='Login' type='login' />
    </div>
  )
}

export default App

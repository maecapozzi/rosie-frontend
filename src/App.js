// @flow

import React from 'react'

import Background from './Background'
import Centered from './Centered'
import FormContainer from './FormContainer'
import Title from './Title'

const backgroundColor = '#36485E'
const fontColor = '#ffffff'
const mainColor = '#68D7C5'

const App = () => {
  return (
    <Background backgroundColor={backgroundColor}>
      <Centered>
        <Title
          color={mainColor}
          fontSize='5em'
          fontWeight='lighter'
          fontStyle='italic'
        >
          {'Rosie'}
        </Title>
        <FormContainer
          backgroundColor={backgroundColor}
          fontColor={fontColor}
          formName='Register'
          mainColor={mainColor}
          type='createUser'
        />
      </Centered>
    </Background>
  )
}

export default App

import React from 'react'
import Subheader from './Subheader'
import Span from './Span'

const SubheaderContainer = ({ mainColor, handleClick, selected }) => {
  return (
    <div>
      <Subheader
        id='createUser'
        mainColor={mainColor}
        onClick={handleClick}
        selected={!selected}
      >
        {'Register'}
      </Subheader>
      <Span color={mainColor}> / </Span>
      <Subheader
        id='login'
        mainColor={mainColor}
        onClick={handleClick}
        selected={selected}
      >
        {'Login'}
      </Subheader>
    </div>
  )
}

export default SubheaderContainer

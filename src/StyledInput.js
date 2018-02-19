import styled from 'styled-components'

const StyledInput = styled.input`
  background: ${props => props.backgroundColor};
  border-bottom: 1px solid white;
  border-left: none;
  border-right: none;
  border-top: none;
  color: ${props => props.fontColor};
  display: block;
  font-family: 'Arvo', serif;
  font-size: 1em;
  margin: 2em auto;
  outline: none;
  padding-bottom: 0.5em;
  width: 15em;
`

export default StyledInput

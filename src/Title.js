import styled from 'styled-components'

const Title = styled.h1`
  color: ${props => props.color};
  display: inline-block;
  font-family: 'VT323', monospace;
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  margin: 1em 0 0.5em 0;
`

export default Title

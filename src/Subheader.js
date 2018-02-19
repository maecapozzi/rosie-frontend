import styled from 'styled-components'

const Subheader = styled.h3`
  color: ${props => (props.selected ? props.mainColor : '#ffffff')};
  font-family: 'Arvo', serif;
  font-size: 1.25em;
  font-weight: lighter;
  display: inline;
`

export default Subheader

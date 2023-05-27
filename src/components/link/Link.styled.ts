import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const LinkStyled = styled(NavLink)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  color: black;
  background-color: white;
  
  text-decoration: none;
  
  &:hover {
    color: white;
    background-color: black;
  }
  
  &.active {
    color: white;
    background-color: red;
  }
`

export default LinkStyled

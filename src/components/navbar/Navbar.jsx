import React from 'react'
import { StyledImg, StyledNav } from './styled.navbar'
import logo from "../../assets/images/logo.png";
const Navbar = () => {
  return (
    <div>
        <StyledNav>
            <StyledImg src={logo} />
        </StyledNav>
    </div>
  )
}

export default Navbar
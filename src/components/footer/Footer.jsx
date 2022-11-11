import React from 'react'
import { StyledFooter, StyledLink, StyledP } from './styled.footer'

const Footer = () => {
  return (
    <StyledFooter>
        <StyledP>
            Designed by 
            <StyledLink href='https://github.com/H02c4n'>
            H02c4n
            </StyledLink>
        </StyledP>
    </StyledFooter>
  )
}

export default Footer
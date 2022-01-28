import React from 'react'
import {LinkStyled, Button} from './styles'
import {Link} from 'wouter'

export default function StyledButton ({href, children}){
    return(
        href 
        ? <LinkStyled as={Link} to={href}>{children}</LinkStyled>
        :<Button>{children}</Button>
    )
}
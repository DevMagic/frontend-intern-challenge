import React from 'react'
import logo from '../../assets/devMagicLogo.png'
import { DivHeader } from './Styles'

const Header = () =>{

    return (
        <DivHeader>
            <img data-testid={'devMagic'} src= { logo } alt='logo'/>
        </DivHeader>
    )
}

export default Header
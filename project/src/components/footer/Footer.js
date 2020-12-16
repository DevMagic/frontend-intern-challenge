import React from 'react'
import face from '../../assets/icon-facebook.png'
import twitter from '../../assets/icon-twitter.png'
import chao from '../../assets/logo-chaordic.png'
import { DivFooter, DivChao, DivSocial } from './Styles'

const Footer = () =>{

    return(
        <DivFooter>
            <DivChao>
                <img src={chao}/>
            </DivChao>
            <DivSocial>
                <img src={twitter}/>
                <img src={face}/>
            </DivSocial>
        </DivFooter>
    )
}

export default Footer

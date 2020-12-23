import React from 'react';

import { Footer,Chrdc,RedeSocial,Imagens} from './styles';
import imgChrdc from '../../Assests/img/logo-chaordic.png'

import imgFace from '../../Assests/img/icon-facebook.png'
import imgTwitte from '../../Assests/img/icon-twitter.png'



function PageFinal() {
  return (
    <Footer>
      <Chrdc><Imagens src={imgChrdc} alt="logo da chaordic"/></Chrdc>
      <RedeSocial>
        <Imagens src={imgFace} alt="facebook"/>
        <Imagens src={imgTwitte} alt="Twitter"/>
      </RedeSocial>
    </Footer>
    );
}

export default PageFinal;
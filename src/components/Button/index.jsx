import React, { useEffect } from 'react';

import { ButtonEncurte, SpanText, FadeIn } from './styles';

function Button({ encurtUrl, chargeName }) {


  return (
    <ButtonEncurte onClick={encurtUrl}>
      { chargeName == 'COPIAR' ? <FadeIn>{chargeName}</FadeIn> : <SpanText>{chargeName}</SpanText>}

    </ButtonEncurte>
  )
}

export default Button;
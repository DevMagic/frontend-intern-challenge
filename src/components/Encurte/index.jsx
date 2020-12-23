import React, { useEffect } from 'react';

import { EncurteInput, FadeIn } from './styles';

function Encurte({ HadleInput, shorte }) {

  return (
    <div>
      {shorte ? <FadeIn value={shorte} /> : <EncurteInput onChange={HadleInput} />}


    </div>

  );
}

export default Encurte;
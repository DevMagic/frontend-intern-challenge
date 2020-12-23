import React from 'react';

import { ContentHits, Triangulo, ContandorHits, TituloHits, TextSpan } from './styles';

function HIts({ quantidaDedeHits }) {
  let totalArr = []
  let total;
  let reducer;

  if (quantidaDedeHits) {
    quantidaDedeHits.forEach((url) => totalArr.push(url.hits))
    reducer = (accumulator, currentValue) => accumulator + currentValue;
    total = totalArr.reduce(reducer)

  }
  //console.log(total);

  return (
    <ContentHits>
      <Triangulo></Triangulo>
      <TituloHits>HITS</TituloHits>

      <ContandorHits>{total} </ContandorHits>

      <TextSpan>Cliques em links</TextSpan>
    </ContentHits>
  );
}

export default HIts;
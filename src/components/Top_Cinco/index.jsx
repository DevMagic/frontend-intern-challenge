import React from 'react';

import { ListTop, TopH, LinkTop, LinkHits, LinkDIv } from './styles';


function sortJson(prop) {
  return function (a, b) {
    if (a[prop] < b[prop]) {

      return 1;
    } else if (a[prop] > b[prop]) {
      return -1;
    }
    return 0;
  }
}


function Top_Cinco({ osTopCinco }) {

  let arrhits = []
  console.log(osTopCinco);

  if (osTopCinco) {
    osTopCinco.sort(sortJson("hits"))
    arrhits = osTopCinco.slice(0, 5)

    console.log(arrhits);
  }

  return (
    <ListTop>
      <TopH>TOP 5</TopH>
      {arrhits.map(element => (
        <LinkDIv key={element.id}>
          <LinkTop >

            {element.shortUrl}
            <LinkHits> {element.hits}</LinkHits>
          </LinkTop>
        </LinkDIv>
      ))}

    </ListTop>
  )
}

export default Top_Cinco;
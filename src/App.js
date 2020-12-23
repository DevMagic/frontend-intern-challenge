import React, { useState, useEffect } from 'react'
import { Encurte, Button, TopCinco, Hits, PageFinal } from './components/index'
import { Content, ContentForm, TextH, TextP, ContentHome } from './styles'



function App() {
  const [data, setDatas] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [encurte, setEncurt] = useState('');
  const [charge, setCharge] = useState('ENCURTAR');



  useEffect(() => {
    fetch('../urls.json', {
      headers: {
        accept: 'application/json'
      }
    }).then(res => res.json()).then(data => setDatas(data))
  }, [])



  const submitHadleInput = (event) => {
    event.preventDefault()

    console.log(encurte);

  }
  const HadleInput = (event) => {
    let encurte = event.target.value;

    setEncurt(prevState => {
      return { ...prevState, encurte: encurte }
    });

  }


  const encurtUrl = (event) => {
    if (encurte) {
      console.log('oi');
      data.forEach(url => {
        if (url.url == encurte.encurte) {
          const shortUrl = url.shortUrl
          setCharge('COPIAR')
          setShortUrl(prevState => {
            return { ...prevState, shortUrl: shortUrl }
          })

        }
      })
    }

  }



  return (
      <Content >

        <ContentHome>
          <TextH>Encurte seus links.</TextH>
          <TextP>
            Links são longos. Encurte os links que você deseja compartilhar, e acompanhe enquanto viajam através da
            internet.
        </TextP>
          <ContentForm onSubmit={submitHadleInput}>
            <Encurte HadleInput={HadleInput} shorte={shortUrl.shortUrl} />
            <Button encurtUrl={encurtUrl} chargeName={charge} />
          </ContentForm>
        </ContentHome>

        <TopCinco osTopCinco={data} />
        <Hits quantidaDedeHits={data} />

        <PageFinal />
      </Content>

  );
}

export default App;

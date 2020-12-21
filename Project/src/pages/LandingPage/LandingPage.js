import React from 'react'

import { useEffect, useState } from 'react'

import api from '../../services/api'

import TopLinks from '../../components/TopLinks/TopLinks'
import Spinner from '../../components/Spinner/Spinner'


const LandingPage = () => {
    const [links, setLinks] = useState([])
    const [longUrl, setLongUrl] = useState('')
    const [btnClicked, setBtnClicked] = useState(false)
    const [shortenUrl, setShortenUrl] = useState('')
    const [loading, setLoading] = useState(false)

    const activeStyle = { opacity: '1', transition: 'opacity 1s', transitionDelay: '1s', zIndex: 10 } 
    const inactiveStyle = {opacity: '0', transition: 'opacity 1s', zIndex: 1 }

    useEffect(() => {
        setLoading(true)
        api.get('/urls.json')
            .then(response => {
                const allLinks = response.data
                setLinks(allLinks)
                setLoading(false)
            })
            .catch(error => {
                setLoading(false)    
            })
    }, [])

    const topLinksList = links.sort((a, b) => b.hits - a.hits).slice(0, 5) 
    
    const topFive = topLinksList.map((link) => {
        return <TopLinks
            key={link.id}
            linkUrl={link.shortUrl}
            linkAcces={link.hits} />
    })

    const totalHits = links.reduce((acc, act) => {
        return acc += act.hits
    }, 0)

    const handleClose = () => {
        setBtnClicked(false)
        setShortenUrl('') 
    }

    const handleClick = () => {
        setBtnClicked(!btnClicked)
        setShortenUrl('http://chr.dc/xyzxyz') 
    }
    
    return (
        <>
            <section className="MainSection">
                <div className="MainSection__Wrapper">
                    <div className="Container MainSection__Container">
                        <h1 className="MainSection__Container-title">
                            Encurte seus links.
                        </h1>
                        <p className="MainSection__Container-description">
                            Links são longos. Encurte os links que você deseja compartilhar, e acompanhe enquanto viajam 
                            através da internet.
                        </p>
                        <div className="MainSection__Container-linkArea">
                            <div className="MainSection__Container-linkArea-wrapper">
                                <div className="MainSection__Container-linkArea-wrapper-shortener">
                                    <label className="MainSection__Container-linkArea-wrapper-shortener-url" style={btnClicked ? activeStyle : inactiveStyle}> {shortenUrl} </label>
                                    <span onClick={handleClose} className="MainSection__Container-linkArea-wrapper-shortener-close" style={btnClicked ? activeStyle : inactiveStyle}>
                                        x
                                    </span>
                                </div>
                                <input className="MainSection__Container-linkArea-wrapper-link"
                                    style={btnClicked ? inactiveStyle : activeStyle}
                                    type="text"
                                    placeholder="Cole o seu link aqui"
                                    value={longUrl}
                                    onChange={e => setLongUrl(e.target.value)}
                                >
                                </input>
                            </div>
                            <button 
                                className="MainSection__Container-linkArea-button"
                                onClick={handleClick}
                            > 
                                <span className="MainSection__Container-linkArea-button-msg"
                                    style={btnClicked ? inactiveStyle : activeStyle}>ENCURTAR</span> 
                                <span className="MainSection__Container-linkArea-button-msg"
                                    style={btnClicked ? activeStyle : inactiveStyle}>COPIAR</span>
                            </button>
                          
                        </div>
                    </div>
                </div>
            </section>

            <section className="TopSection">
                {loading && <Spinner /> }
                {!loading && 
                    <div className="Container TopSection__Container">
                        <h1 className="TopSection__Container-title">
                            TOP 5
                        </h1>
                        <div className="TopSection__Container-links">
                            {topFive}
                        </div>
                    </div>
                }
            </section>

            <section className="HitsSection">
                <div className="Container HitsSection__Container">
                    <div className="HitsSection__Container-image"></div>
                    <h1 className="HitsSection__Container-title">
                        HITS
                    </h1>
                    <p className="HitsSection__Container-totalNumber">
                        {totalHits}
                    </p>
                    <p className="HitsSection__Container-totalNumber-description">
                        Cliques em links
                    </p>
                </div>    
            </section>
        </>

    )
}

export default LandingPage
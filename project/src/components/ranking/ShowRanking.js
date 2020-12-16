import React, { useEffect, useState } from 'react'
import data from '../../assets/urls.json'
import { 
    DivBottom, 
    DivHits, 
    DivHug, 
    DivInfo, 
    DivTopFive, 
    DivUnity, 
    DivUrl, 
    TextHits, 
    UnderText, 
    Triangulo, 
    TextTopFive
} from './Styles';

const ShowRanking = () =>{
    const [topFive, setTopFive] = useState([]);
    const [totalOfHits, setTotalOfHits] = useState()
    const urls= data;

    const getTopFive = () =>{
        const order = urls && urls.sort((a, b) => {
            return b.hits-a.hits
        });
        let newTopFive = []
        for (let i = 0; i <= 4; i++){
        newTopFive.push(order[i])
        };
        setTopFive(newTopFive);
    };

    const sum = () =>{
        let total = 0
        urls.map((hit) =>{
            total += hit.hits
            return total
        })
        setTotalOfHits(total)
    };

    useEffect(() =>{
        getTopFive();
        sum();
    }, [urls]);

    return (
        <DivHug>
            <TextTopFive>TOP 5</TextTopFive>
            <DivTopFive>
                {topFive && topFive.map((url) =>{
                    return (
                        <DivInfo data-testid="top-five">
                            <DivUrl>
                                {url.shortUrl} 
                            </DivUrl>
                            <DivUnity>
                                {url.hits} 
                            </DivUnity>
                        </DivInfo>
                    )
                })}
            </DivTopFive>
            <DivBottom>
                <Triangulo>
                </Triangulo>
                <TextHits>HITS</TextHits>
                <DivHits data-testid="hits">
                    {totalOfHits}
                </DivHits>
                <UnderText>Cliques em links</UnderText>
            </DivBottom>
        </DivHug>
    )
}

export default ShowRanking
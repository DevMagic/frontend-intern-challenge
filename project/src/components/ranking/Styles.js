import styled from 'styled-components'

export const DivHug = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const DivTopFive = styled.div`
    display: flex;
    flex-direction: column;
    height: 240px;
    margin-top: 1em;

    @media (min-width: 880px){
        height: 260px;
    }

`;

export const TextTopFive = styled.h2`
    font-family: 'Roboto Slab', serif;
    color: #AA1423;

    @media (min-width: 880px){
        font-size: 2rem;
    }
`;

export const DivInfo = styled.div`
    display:flex;
    border-bottom: 1px solid #EEE;
    width: 90vw;
    justify-content: space-between;
    height: 35px;
    align-items: flex-end;
    padding-bottom: 3px;

    @media (min-width: 680px){
        max-width: 60vw;
    };

    @media (min-width: 880px){
        max-width: 25vw;
    }
`;

export const DivUrl = styled.div`
    color: #AA1423;
    font-weight: 600;
    font-size: 1.1rem;
`;

export const DivUnity = styled.div`
    color: #777;
    font-weight: 500;
    font-size: 1.2rem;
`;

export const DivBottom = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #EEE;
    width: 100vw;
    height: 200px;
    margin-top: 30px;

    @media (min-width: 680px){
        max-width: 60vw;
    }

    @media (min-width: 880px){
        height: 240px;
    }
`;

export const TextHits = styled.h2`
    font-family: 'Roboto Slab', serif;
    color: #AA1423;
    margin: 0;
    margin-bottom: 1em;

    @media (min-width: 880px){
        font-size: 2rem;
        margin-top: .5em;
    }
`;


export const DivHits = styled.div`
    background-color: #fefefe;
    color: #AA1423;
    border: 1px solid #777;
    padding: 3px;
    border-radius: 5px;
    font-weight: 700;
    width: 30vw;
    text-align: center;

    @media (min-width: 680px){
        max-width: 150px;
        height: 35px;
        font-size: 1.2rem;
    };

    @media (min-width: 880px){
        font-size: 1.4rem;
    }
`;

export const UnderText = styled.p`
    margin: 0;
    margin-bottom: 2em;
    margin-top: 3px;
    color: #777;
    font-size: 12px;
    font-weight: 500;

    @media (min-width: 680px){
        font-size: .85rem;
    };

    @media (min-width: 880px){
        font-size: 1rem;
    }
`;

export const Triangulo = styled.div`
    margin-bottom: .7em;
    width: 0; 
    height: 0; 
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
    border-top: 25px solid #fefefe;

    @media (min-width: 880px){
        margin-bottom: 0;
        border-left: 45px solid transparent;
        border-right: 45px solid transparent;
        border-top: 45px solid #fefefe;    }
`;
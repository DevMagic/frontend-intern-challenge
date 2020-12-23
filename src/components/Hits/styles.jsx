import styled from "styled-components";

export const ContentHits = styled.div`
        width: 100%;
        margin-top: 3rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #EEE;
`;

export const Triangulo = styled.div`
        width: 0;
        height: 0;
        border-left: 25px solid transparent;
        border-right: 25px solid transparent;
        border-top: 25px solid #FFF;
`;
export const TituloHits = styled.h1`
          text-align: center;
        font-family: var(--font-roboto-slab);
        color: #AA1423;
        margin: 1rem 0 1rem 0;
`;
export const ContandorHits = styled.div`   
       border: #EEE;
        border-radius: 1rem;
        background-color: #FFF;
        color: #AA1423;
        font-size: 2rem;
        padding: 1rem;
        text-align: center;
`;

export const TextSpan = styled.span`
   display: flex;
        flex-direction: column;
        text-align: center;
        margin: 0.2rem 0 5rem 0;

`;
import styled from 'styled-components'
import back from '../../assets/background-home.jpg'

export const BigDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    background-image: url(${back});
    background-repeat: no-repeat;
    background-size: cover;

    @media (min-width: 680px){
        max-width: 60vw;
    }
`;

export const DivForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    height: 50vh;
    padding-top: 5em;
`;

export const DivText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const H2 = styled.h2`
    color: #EEE;
    font-family: 'Roboto Slab', serif;
    margin-bottom: 5px;

    @media (min-width: 880px){
        font-size: 2rem;
    }
`;

export const Paragraphy = styled.p`
    color: #EEE;
    font-family: 'Roboto', sans-serif;
    font-size: .7rem;
    text-align: center;
    margin-bottom: 37px;
    margin-top: 0;

    @media (min-width: 880px){
        font-size: 1.1rem;
    }
`;

export const Input = styled.input`
    border: none;
    border-bottom: 1px solid #e86603;
    background: transparent;
    margin-right: 8px;
    padding-bottom: 4px;
    color: ${(props) => props.name === "ENCURTAR" ? "#e86603" : "#EEE"};

    ::placeholder{
        color: #e86603;
        font-weight: 200;
        font-family: 'Roboto', sans-serif;
    };

    :focus{
        background: transparent;
        outline: none;
    }

    @media (min-width: 880px){
        width: 300px;
        height: 33px;
        padding-bottom: 0;
        font-size: 1rem;

        ::placeholder{
            font-size: 1.1rem;
        }
    }
`;

export const Button = styled.button`
    border: none;
    background-color: #e86603;
    color: #EEE;
    height: 25px;
    font-family: 'Roboto', sans-serif;
    
    @media (min-width: 880px){
        width: 110px;
        height: 33px;
        font-size: 1rem;
    }
`
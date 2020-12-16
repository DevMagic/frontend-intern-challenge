import styled from 'styled-components'

export const DivFooter = styled.div`
    display: flex;
    width: 100vw;
    height: 60px;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 680px){
        max-width: 60vw;
    }
`;

export const DivChao = styled.div`
    margin-left: 2em;

    @media (min-width: 680px){
        margin-left: 5em;
    }
`;

export const DivSocial = styled.div`
    display: flex;
    justify-content: space-between;
    width: 70px; 
    height: 30px;
    margin-right: 1em;

    @media (min-width: 680px){
        margin-right: 5em;
    }

`;


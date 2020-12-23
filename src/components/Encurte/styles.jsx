import styled, { keyframes } from 'styled-components'

export const EncurteInput = styled.input.attrs({
        type: 'text',
        placeholder: 'Cole o seu link aqui'
})`
        font-family: 'Roboto, sans-serif;';
        font-size: 400;
        outline: none;
        border: none;
        width: 27rem;
        height: 2rem;
        font-size: 1rem;
        color: orange;
        border-bottom: 0.1rem solid orange;
        background-color: transparent;
        position: relative;
        ::placeholder {
        color: orange;
                
        }
        
`;

const fablink = keyframes`  
  from { opacity: 0; }
  to { opacity: 1; }
`;


export const FadeIn = styled(EncurteInput)` 
        font-family: 'Roboto Slab, sans-serif;';
        font-size: 700;
        color:#fff;
        -webkit-animation: ${fablink} 1s linear;
        -moz-animation: ${fablink} 1s linear;
        -ms-animation: ${fablink} 1s linear;
        -o-animation: ${fablink} 1s linear;
        animation: ${fablink} 1s linear;
`;


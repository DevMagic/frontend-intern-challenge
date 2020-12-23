import styled,{keyframes} from 'styled-components'

export const ButtonEncurte = styled.button.attrs({
  type: 'submit'
})`
        font-size: 1.2rem;
        color: #fff;
        width: 9rem;
        height: 2.5rem;
        margin-left: 1rem;
        border: none;
        outline: none;
        background-color:orangered;
`;
export const SpanText = styled.span`
  font-size: 1rem;
`;

const fablink  = keyframes`  
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const FadeIn = styled.span`
      -webkit-animation: ${fablink} 1s linear;
        -moz-animation: ${fablink} 1s linear;
        -ms-animation: ${fablink} 1s linear;
        -o-animation: ${fablink} 1s linear;
        animation: ${fablink} 1s linear;
`;
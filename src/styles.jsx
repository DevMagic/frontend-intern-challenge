import styled from 'styled-components'
import bagroundimg from './Assests/img/background-home.jpg'

export const Content = styled.div`
      

`;
export const ContentHome = styled.div`
  width: 100vw;
        height: 100vh;
        max-width: 100%;
        max-height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url(${bagroundimg});

`;
export const ContentForm = styled.form`
       display: flex;
        justify-content: center;
        align-items: center;  

`;
export const TextH = styled.h1`
        font-size: 3rem;
        color: #ffffff;
        margin-bottom: 1rem;
`;
export const TextP = styled.p`
        font-size: 1rem;
        text-align: center;
        color: #fff;
        max-width: 50%;
        margin-bottom: 2rem;
`;
import styled from 'styled-components'

export const DivHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    height: 40px;
    width: 100vw;
    
    img{
        height: 50px;
        width: 50vw;;
    }

    @media (min-width: 680px){
        max-width: 60vw;
        
        img{
            width: 40vw;
        }
    }
`;


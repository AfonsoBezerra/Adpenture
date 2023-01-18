import styled from 'styled-components';

export const MapBoxStyle = styled.div`
    width: 100%;
    height:50%;
    background-color: white;
    border-radius: 10px;
    padding: 1rem;
    @media (min-width: 1919px){
        height: 70%;
    }
    @media (max-width: 1440px){
        height: 40%;
    }
    @media (max-width: 600px){
        height: 600px;
    }
`;
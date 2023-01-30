import styled from 'styled-components';

export const MapBoxStyle = styled.div`
    width: 100%;
    height:40%;
    background-color: white;
    border-radius: 10px;
    padding: 1rem;
    @media (min-width: 1700px){
        height: 100%;
    }
    @media (max-width: 1440px){
        height: 35%;
    }
    @media (max-width: 600px){
        height: 600px;
    }
`;
import styled from 'styled-components';

export const MapBoxStyle = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 10px;
    padding: 1rem;
    @media (max-width: 1440px){
        height: 50%;
    }
    @media (max-width: 600px){
        height: 600px;
    }
`;
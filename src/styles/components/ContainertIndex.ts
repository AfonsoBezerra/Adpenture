import styled  from 'styled-components';

export const ContainerIndex = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 20rem auto;
  @media (max-width: 1359px){
    grid-template-columns: auto;
  }
`
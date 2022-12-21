import styled, { css } from 'styled-components';

interface iBody{
  active: boolean
}

export const BodyStyle = styled.section<iBody>`
  width:100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0 2rem 2rem 2rem;
  ${({active}) =>
    active ?
    css`
      overflow: hidden;
    `
    :
    css`
      overflow-x: hidden;
    `
  }
  

  .main{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    gap: 1rem;
    .friend-map{
      width: 100%;
      height: 100%;
      display: flex;
      flex-wrap:wrap;
      gap: 1rem;
    }
    @media (min-width: 600px){
      margin-top: 2rem;
      gap: 2rem;
    }
  }
`;
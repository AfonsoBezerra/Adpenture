import styled, { css } from 'styled-components';

interface iBody{
  active: boolean
}

export const BodyStyle = styled.section<iBody>`
  width:100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  ${({active}) =>
    active ?
    css`
      overflow: hidden;
      @media (min-width: 1024px){
        padding-right: 2.98rem;
      }
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
      padding: 0 1rem 1rem 1rem;
      width: 100%;
      height: 100%;
      display: flex;
      gap: 1rem;
      @media (max-width: 1023px){
        flex-direction: column;
        justify-content: space-between
      }
    }
    @media (min-width: 600px){
      margin-top: 2rem;
      gap: 2rem;
    }
  }
`;
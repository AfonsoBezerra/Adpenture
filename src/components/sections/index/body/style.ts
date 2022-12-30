import styled, { css } from 'styled-components';

interface iBody{
  active: boolean
}

export const BodyStyle = styled.section<iBody>`
  width:100%;
  display: flex;
  height: 100%;
  min-height: 100vh;
  @media(max-width:600px){
      height: fit-content;
  }
  flex-direction: column;
 
  position: relative;
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
    @media(max-width:600px){
      height: fit-content;
    }
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
      .column{
        display: flex;
        flex-direction: column;
        width: 50%;
        height: 100%;
        @media(min-width:1023px){
          height: 100%;
        }
        gap: 1rem;
        @media (max-width: 1023px){
           width: 100%;
        }
      }
      @media (max-width: 1023px){
        flex-direction: column;
      }
    }
    @media (min-width: 600px){
      margin-top: 1rem;
      gap: 2rem;
    }
  }
`;
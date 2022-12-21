import styled, {css} from "styled-components";

interface iContainer  {
  isSideBar: boolean
}

export const ContainerStyle = styled.div<iContainer>`
      height: auto;
      ${({ isSideBar }) =>
        isSideBar ?
        css``
        :
        css`
          background-color: white;
          padding: 1rem;
          border-radius: 15px;
        `
      }
      img{
        position: relative;
        z-index: 2;
        transform: translateY(3%);
        width:100%
      }
      .start{
        margin-top: -8px;
        position: relative;
        width: 100%;
        height: auto;
        border-radius: 10px;
        background-color:#6E8B40;
        color: white;
        overflow: hidden;
        white-space: nowrap;
        display: flex;
        justify-content: space-between;
        padding: 1rem;
        
        .text{
          display: flex;
          flex-direction: column;
          font-size: 13px;
          span{
            font-size: 10px;
            color: rgba(255,255,255,0.5);
          }
        }
        button{
          width: 40px;
          background-color: #FECA05;
          border-radius: 10px;
          border: none;
          box-shadow: 0 0 10px rgba(0,0,0,0.3);
          cursor: pointer;
          transition: all .5s;
          :hover{
            transform: scale(1.1);
          }
        }
      }
      ${({ isSideBar }) =>
      isSideBar ?
      css`
        @media (max-width: 600px){
          display: none;
        }
      `
      :
      css`
         @media (min-width: 600px){
          display: none;
        }
      `
      }
`;
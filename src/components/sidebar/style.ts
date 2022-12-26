import styled from "styled-components";

export const SidebarStyle = styled.div`
  position: fixed;
  z-index: 99;
  width: 20rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 2px solid rgba(0,0,0,0.1);
  padding: 2rem 1rem;
  position: relative;
  transition: all .5s;
  gap: 2rem;
  overflow: auto;
  @media (max-width: 600px){
    gap:1rem;
  }
  .header{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    button{
      display: none;
      background-color: transparent;
      border: none;
      svg{
        color: rgba(0,0,0,0.5);
      }
    }
    @media (max-width: 1360px){
        justify-content: space-around;
        button{
        display: block;
      }
    }

    @media (max-width: 390px){
      button{
        svg{
          width: 20px;
        }
      }
      .logo{
        svg{
          width: 150px;
        }
      }
    }
  }
  .body{
    width: 100%;
    height: auto;
    ul{
      display: flex;
      flex-direction: column;
      padding: 0 1rem 3rem 1rem;
      gap:2.5rem;
      li{
        cursor: pointer;
        list-style: none;
        display: flex;
        display: flex;
        flex-direction: column;
        gap: .5rem;
        height: auto;
        width: 10rem;
        transition: all .5s;
        .content{
          display: flex;
          align-items: center;
          .text{
            visibility: visible;
            opacity: 1;
            margin-left: 1rem;
            font-size: 17px;
            color: rgba(0,0,0,0.4);
            transition: all .5s;
            font-weight: 500;
          }
          :hover {
              svg{
                transform: scale(1.2);
                fill: rgba(255, 193, 49, 0.8);
              }
              .text{
                transform: scale(1.05);
                color: rgba(255, 193, 49, 0.8);
              }  
          }
          &.active {
              svg{
                transform: scale(1.2);
                fill: rgba(255, 193, 49, 0.8);
              }
              .text{
                transform: scale(1.05);
                color: rgba(255, 193, 49, 0.8);
              }  
          }
        }
      }
      @media (max-width: 390px){
        gap: 2rem;
        li{
          .content{
            .text{
              font-size: 18px;
            }
            svg{
              width: 25px;
            }
          }
        }
      }
    }
  }
  .footer{
    padding: 0rem 1rem 0 .5rem;
    width: 10rem;
    cursor: pointer;
    display: flex;
    align-items: flex-end;

    .text{
            visibility: visible;
            opacity: 1;
            margin-left: 1rem;
            font-size: 17px;
            color: rgba(211,0,0,0.8);
            transition: all .5s;
            font-weight: 500;
    }
    :hover{
      svg{
        transform: scale(1.2);
      }
    }
    @media (max-width: 390px){
      .text{
        font-size: 18px;
      }
      svg{
        width: 25px;
      }
    }
  }
  
  /* &.active {
    width: 20rem;
    .body{
      ul{
          li{
            .text{
              visibility: visible;
              opacity: 1;
            }
          }
        }
    }
    .footer {
      .text{
              visibility: visible;
              opacity: 1;
        }
    }
  } */

  @media (max-width: 1359px){
    left: -20rem;
    &.active{
      left: 0;
    }
  }
`;
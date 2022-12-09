import styled from "styled-components";

export const SidebarStyle = styled.div`
  position: fixed;
  z-index: 99;
  width: 20rem;
  overflow-x: hidden;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap:2rem;
  border-right: 2px solid rgba(0,0,0,0.1);
  padding: 2rem 1rem;
  position: relative;
  transition: all .5s;
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
  }
  .body{
    width: 100%;
    height: 100%;
    ul{
      display: flex;
      flex-direction: column;
      padding: 0 1rem 3rem 1rem;
      gap: 2rem;
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
            font-size: 15px;
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
    }
    .container{
      overflow: hidden;
      img{
        position: relative;
        z-index: 5;
        transform: translateY(3%);
        width:17.5rem
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
    }}
  }
  .footer{
    padding: 0 1rem 3rem .5rem;
    width: 10rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    .text{
            visibility: visible;
            opacity: 1;
            margin-left: 1rem;
            font-size: 16px;
            color: rgba(211,0,0,0.8);
            transition: all .5s;
            font-weight: 500;
    }
    :hover{
      svg{
        transform: scale(1.2);
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

  @media (max-width: 1360px){
    left: -20rem;
    &.active{
      left: 0;
    }
  }
`;
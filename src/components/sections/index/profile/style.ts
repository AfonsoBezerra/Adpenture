import styled  from 'styled-components';

export const ProfileCardStyle = styled.section`
  width: 25rem;
  height: 100%;
  right: -25rem;
  position: fixed;
  overflow: auto;
  z-index:999;
  background-color: #6E8B40;
  transition: all .5s;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 5px rgba(0,0,0,.2);
  gap: 3rem;

  &::-webkit-scrollbar {
    width: 8px;               /* width of the entire scrollbar */
  }

  &::-webkit-scrollbar-track {
    background:  rgba(0,0,0,0.1);       /* color of the tracking area */
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0,0,0,0.7);    /* color of the scroll thumb */
    border-radius: 20px;       /* roundness of the scroll thumb */
  }

  .header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 2rem 0rem 2rem; 
    button{
      background-color: white;
      padding: .5rem;
      border-radius: 10px;
      cursor: pointer;
      border: none;
      transition: all .5s;
      box-shadow: 0 0 10px rgba(255,255,255,0.1);
      :hover{
        box-shadow: 0 0 10px rgba(255,255,255,0.3);
        transform: scale(1.1);
        svg{
          color:rgba(0,0,0,1); 
        }
      }
    }
    h1{
      font-size: 28px;
      color: white;
      padding: 0;
      font-weight: 500;
      margin-left: 1rem;
    }
  }
  .body{
    padding:  0 2rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    .container{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      .profile{
          padding: .5rem;
          border: 1px solid  #FECA05;
          background-color:   #6E8B40; 
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          .circle{
            width: 150px;
            height: 150px;
            border-radius: 50%;
            background-color: #FECA05;
            display: flex;
            justify-content: center;
            align-items: center;
            img{
              width: 90%;
              height: 90%;
              border-radius: 50%;
            }
          }
      }
      .name{
        display: flex;
        flex-direction: column;
        align-items: center;
        h2{
          white-space: nowrap;
          max-width: 100%;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          color: rgba(255, 255, 255, 1);
          text-overflow: ellipsis;
          text-align: center;
          font-size: 26px;
          font-weight: 500;
        }
        .subtitle{
          display: flex;
          justify-content: center;
          span{
            font-size: 15px;
            color: rgba(255, 255, 255, 0.6);
            margin-right: .3rem;
          }
        }
      }
    }
    .history{
      width: 100%;
      height: auto;
      min-height: 110px;
      background-color: white;
      border-radius: 10px;
      margin-top: 25px;
      box-shadow: 0 0 10px rgba(0,0,0,.2);
      display: flex;
      .img{
        padding: 0 .5rem;
        width: 50%;
        height: 100%;
        img{
          width: 100%;
          height: 100%;
          border-radius: 10px;
          transform: translateY(-10px);
          box-shadow: 0 0 10px rgba(0,0,0,.2);
        }
      }
      .text {
        padding: .5rem .5rem .5rem .2rem;
        width: 50%;
        display: flex;
        flex-direction: column;
        height: 100%;
        .textHeader {
          display: flex;
          width: 100%;
          flex-direction: row;
          justify-content: end;
        }
        .textBody{
          display: flex;
          flex-direction: column;
          line-height: 1rem;
          height: 100%;
          .current{
            font-size: 10px;
            font-weight: 600;
            color: rgba(0,0,0,.7);
          }
          .title{
            font-size: 17px;
            font-weight: 700;
            color: rgba(0,0,0,.9);
          }
          .description{
            height: 100%;
            display: flex;
            flex-direction: row;
            align-items: end;
            justify-content: space-between;
            .localization{
              span{
                font-size: 9px;
                font-weight: 600;
                color: rgba(0,0,0,.7);
              }
            }
            .ratting{
              span{
                font-size: 10px;
                font-weight: 600;
                color: rgba(0,0,0,.8);
              }
            }
          }
        }
      }
    }
  }

  .footer{
    display: flex;
    align-items: flex-end;
    width: 100%;
    height: 100%;
    overflow: hidden;
    min-height:300px;
    img{
      position: relative;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &.active{
    right: 0;
  }

  @media(max-width: 1024px){
    width: 20rem;
    height: 100%;
    right: -20rem;
      .body{
        .history{
          width: 100%;
          height: auto;
          min-height: 90px;
      }
    }
    .footer{
      min-height:350px;
      img{
        position: relative;
        width: 100%;
        height: 90%;
        object-fit: fill;
      }
  }
  }
  @media(max-width: 380px){
    width: 20rem;
    height: 100%;
    right: -20rem;
    gap: 1rem;
      .body{
        gap: .2rem;
        .history{
          width: 100%;
          height: auto;
          min-height: 90px;
      }
    }
  }
`;
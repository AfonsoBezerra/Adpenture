import styled, {css} from "styled-components";
import { I } from "styled-icons/fa-solid";

interface EventProps {
  length: number;
}

export const EventCardStyle = styled.div<EventProps>`
  width: auto;
  height: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: .5rem;
  .image{
    width: 100%;
    height: 100%;
    border-radius: 10px;
    box-shadow: 3px 3px 15px rgba(0,0,0,.3);
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
    }
  }
  .description{
    display: flex;
    flex-direction: column;
    gap: .5rem;
    h1{
      font-size: 18px;
      color: rgba(0,0,0,.9);
      white-space: nowrap;
      max-width: 80%;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .line{
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      position: relative;
      .localization {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        span{
          font-size: 12px;
          margin-left: .2rem;
          color: rgba(0,0,0,.7);
          white-space: nowrap;
          max-width: 70%;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
      .friends{
        position: relative;
        display: flex;
        align-items: center;
        right: 0;
        .content{
          position: absolute !important;
          bottom: 0;
          right: 0;
        }
        ${({length})=> 
          {
            if(length == 2) {
             return css`
                #friend-0{
                  right: 1rem;
                  z-index: 0;
                }
                #friend-1{
                  z-index: 1;
                }
              `
            }else if(length >= 3){
              return css`
                #friend-0{
                  right: 2rem;
                  z-index: 0;
                }
                #friend-1{
                  right: 1rem;
                  z-index: 1;
                }
                .content-howmuch{
                  z-index: 2;
                }
            `
            }
          }
        }
        span{
          font-size: 12px;
          font-weight: 600;
          color: rgba(0,0,0,.7);
        }
      }
    }
  }
  .enterEvent{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: .2rem;
    border-radius: 5px;
    border: none;
    background-color: #FECA05;
    cursor: pointer;
    color: black;
    font-weight: 700;
    font-size: 10px;
    text-transform: uppercase;
    transition: all .5s;
    :hover{
      background-color: #FECA0585;
      color: rgba(0,0,0,.85);
    }
  }
  /* @media(min-width: 1700px){
    height: 250px;
  } */
`
import { Payment } from '@styled-icons/fluentui-system-regular/Payment';
import styled from "styled-components";

export const DestinationCardStyle = styled.div`
  width: auto;
  height: 300px;
  background-color: white;
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: .5rem;
  margin:  0 16px;
  .image{
    width: 100%;
    height: 80%;
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
    height: 20%;
    display: flex;
    flex-direction: column;
    gap: .5rem;
    position: relative;
    .tooltip{
        display: none;
        position: absolute;
        top: -50%;
        right: 0;
        z-index: 9999;
        .container{
          position: relative;
          z-index: 0;
          .seta{
            position: absolute;
            top: -3px;
            width: 10px;
            height: 10px;
            background-color: black;
            transform: rotate(45deg);
          }
        }
    }
    h1{
      font-size: 18px;
      color: rgba(0,0,0,.9);
      white-space: nowrap;
      max-width: 80%;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical; 
      overflow: hidden;
      text-overflow: ellipsis;
      position: relative;
      &:hover{
        ~ .tooltip{
          background-color: rgba(0,0,0,.9);
          font-size: 13px;
          padding: .2rem .4rem;
          border-radius: 3px;
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      }
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
      .ratting{
        position: absolute;
        display: flex;
        align-items: center;
        right: 0;
        span{
          font-size: 12px;
          font-weight: 600;
          color: rgba(0,0,0,.7);
        }
      }
    }
  }
  @media(min-width: 1700px){
    height: 350px;
  }
`
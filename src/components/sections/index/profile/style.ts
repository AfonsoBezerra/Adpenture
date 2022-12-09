import styled  from 'styled-components';

export const ProfileCardStyle = styled.section`
  width: 20rem;
  height: 100%;
  right: -20rem;
  position: fixed;
  z-index:999;
  background-color: #6E8B40;
  transition: all .5s;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  .header{
    display: flex;
    justify-content: space-between;
    align-items: center;
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
  }
  &.active{
    right: 0;
  }
`;
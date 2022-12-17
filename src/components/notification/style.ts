import  styled  from 'styled-components';

export const NotificationContainer = styled.div`
    width: 44px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    position: relative;
    cursor: pointer;
    display: flex;
    justify-content: center;
    outline:none;  
    z-index: 2;
    span{
      width: 8px;
      height: 8px;
      background-color: red;
      position: absolute;
      border-radius: 50%;
      right: 28%;
      top: 25%;
    }
    .container{
      position: absolute;
      padding: 1rem;
      max-width: 280px;
      width: 280px;
      height: auto;
      display: none;
      background-color:  white;
      top:130%;
      z-index: -1;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
      ::before{
        position: absolute;
        z-index: 1;
        top: -7px;
        left: 50%;
        width: 0.9375rem;
        height: 0.9375rem;
        content: '';
        transform: translateX(-50%) rotate(45deg);
        color: #fff;
        background-color:white;
      }
      ul{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        list-style: none;
        width: auto;
        height: auto;
        li{
          display: flex;
          justify-content: space-between;
          a{
            font-size: 10px;  
            text-decoration: none;
            color: rgba(0,0,0,0.8)
          }
          .title{
            display: flex;
            flex-direction: column;
            gap: .2rem;
            h2{
              font-size: 12px;
              font-weight: 700;
              padding: 0;
              margin: 0;
            }
            h5{
              font-size: 10px;
              font-weight: 500;
              color: rgba(0,0,0,0.5)
            }
          }
        }
        .final{
          display: flex;
          justify-content: center;
          font-size: 10px;
          color: rgba(0,0,0,0.8);
        }
      }
      &.active{
        display: block;
      }
    }
`
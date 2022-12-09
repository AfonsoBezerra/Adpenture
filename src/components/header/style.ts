import styled  from 'styled-components';

export const HeaderStyle = styled.header`
  width: 100%;
  height: auto;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button{
    background-color: transparent;
    border: none;
  }
  .iconsButtons{
    display: flex;
    .main{
      color: rgba(0,0,0,0.5);
      :hover{
        color: rgba(255, 193, 49, 0.8);
        transform: scale(1.2);
      }
    }
  }
  .search{
    width: 30%;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    
    svg{
      position: absolute;
      left: 10px;
    }
    input{
      width: 100%;
      height: 100%;
      padding-left: 40px;
      border-radius: 12px;
      font-size: 15px;
      color: rgba(0,0,0,0.8);
      border: none;
      outline: none;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }
    @media (max-width: 500px){
      display: none;
  }
  }
  .menu{
    padding: .6rem;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
  }
  .pushSide{
    display: none;
    @media (max-width: 1360px){
      display: block;
    }
  }

.content{
  height: auto;
  display: flex;
  align-items: center;
  gap: 2.5rem;
}
`;

import styled  from 'styled-components';

export const ProfileStyle = styled.div`
  width: auto;
  padding: .2rem;
  background-color: #FECA05;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  .img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgba(0,0,0,.7);
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
`;
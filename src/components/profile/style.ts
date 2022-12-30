import styled  from 'styled-components';

interface ProfileStyleProps {
  componetSize: string;
  componentColor: string
}



export const ProfileStyle = styled.div<ProfileStyleProps>`
  width: fit-content;
  height: fit-content;
  padding: 2.5px;
  background-color: ${({componentColor})=> componentColor} ;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  .img{
    width: ${({componetSize})=> componetSize};
    height: ${({componetSize})=> componetSize};
    border-radius: 50%;
    background-color: rgba(0,0,0,.7);
    display: flex;
    justify-content: center;
    align-items: center;
    .howmuch{
      width: 100%;
      height: 100%;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 500;
      font-size: 10px;
      color: #fff;
    }
    img{
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
`;
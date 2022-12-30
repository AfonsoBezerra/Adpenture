import styled from "styled-components";

export const BoxFriendsStyle = styled.div`
  width: 100%;
  overflow: auto;
  padding: 2rem;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &::-webkit-scrollbar {
    width: 5px;               /* width of the entire scrollbar */
  }

  &::-webkit-scrollbar-track {
    background:  rgba(0,0,0,0.1);       /* color of the tracking area */
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0,0,0,0.3);    /* color of the scroll thumb */
    border-radius: 20px;       /* roundness of the scroll thumb */
  }

  .header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    h1{
      margin: 0;
      letter-spacing: 1px;
      font-size: 18px;
      padding:0;
    }
    h5{
      margin: 0;
      padding: 0;
      letter-spacing: 1px;
      font-weight: 400;
      font-size: 13px;
      color: rgba(0,0,0,.4);
      @media (max-width:600px){
          font-size: 11px;
      }
      span{
        color: #FECA05;
        letter-spacing: 0;
      }
    }
  }

  .body{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1.5rem;
  }
  @media (max-width: 1023px){
      width: 100%;
  }
  @media (max-width: 500px){
      padding: 1.5rem;
  }
`;
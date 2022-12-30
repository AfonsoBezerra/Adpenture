import styled from "styled-components";

export const EventBoxStyle = styled.div`
  width: 50%;
  height: 100%;
  background-color: white;
  border-radius: 10px;
  padding: 2rem;
  .header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1{
        margin: 0;
        letter-spacing: 1px;
        font-size: 18px;
        padding:0;
    }
  }

  .cardsEvents{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    margin-top: 1rem;
    /* align-items: start;
    grid-auto-rows: 210px; */
    @media(max-width:1700px){
      grid-template-columns: 1fr 1fr ;
    }
    @media(max-width:600px){
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: 1023px){
      width: 100%;
      .cardsEvents{
        flex-direction: column;
      }
  }
`;
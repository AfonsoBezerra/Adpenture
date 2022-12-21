import styled  from 'styled-components';

export const BodyStyle = styled.section`
  width:100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  .main{
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    gap: 1rem;
    @media (min-width: 600px){
      margin-top: 3rem;
    }
  }
`;
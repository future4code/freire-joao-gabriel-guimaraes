import styled from 'styled-components'

export const Container = styled.div`
  width: 398px;
  height: 598px;
  border: 3px solid #ef97a3;
  background-color: #f2b8a0;
  border-radius: 25px;
  margin: 0 auto;
  display: grid;
  grid-template-rows: 50px 1fr 70px;
   justify-content: center; 
  align-items: center; 
  & :last-child {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;


export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Div = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const H3 = styled.h2 `
  color: purple;
  text-shadow: 0 0 12px #d4486f;
`
import styled from "styled-components";
import ceuEstrelado from '../../img/ceuEstrelado.jpg'

export const Container = styled.div `
    height: 100vh;
    display: grid;
    grid-template-rows: 80px 1fr;
`

export const Div = styled.div `
     width: 100%;
     display: flex;
     flex-direction: column;
     color: white;
     align-items: center;
     justify-content: center;
     background: url(${ceuEstrelado}) no-repeat center fixed;
    background-size: cover;
    
`
export const Header = styled.header `
     background-color:#170E47;
     color: white;
     display: grid;
     grid-template-columns: 1fr 48%;
     
     justify-items: end;
     align-items: center;

`
export const Conteudo = styled.div `
    width: 500px;
    height: 50px;
    display: flex;
    align-items: center;
    border: 2px solid black;
    border-radius: 15px;
    box-shadow: 1px 1px 1px 1px #5b1d75;
     justify-content: space-between;
     background-color: black;
     color: white;
     margin-bottom: 15px;
     padding: 0 15px 0 15px;
     &:hover{
      background-color: #5b1d75;
      border: 2px solid #5b1d75;
      cursor: pointer;
     }

`

export const Div2 = styled.div`
     width: 300px;
     display: flex;
     justify-content: space-between;
`
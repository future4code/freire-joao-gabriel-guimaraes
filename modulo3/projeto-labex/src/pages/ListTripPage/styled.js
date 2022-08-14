import styled from "styled-components";
import ceuEstrelado from '../../img/ceuEstrelado.jpg'

export const Container = styled.div `
height: 100vh;
display: grid;
grid-template-rows: 80px 1fr 40px;
`

export const Div = styled.div `
 width: 100%;
 display: grid;
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
height: 200px;
width: 400px;
display: flex;
flex-direction: column;
align-items: center;
border: 2px solid #170E47;
background-color: black;
border-radius: 5px;
box-shadow: 1px 1px darkblue;
`
export const ContainerTrips = styled.div `
width: 80%;
height: 700px;
display: grid;
align-items: center;
grid-template-columns: 1fr 1fr 1fr;
 grid-gap: 60px;
`
export const Footer = styled.div `
background-color: black;
display: flex;
align-items: center;
justify-content: center;
color: white;
`
export const P = styled.p`
margin-right: 20px;`
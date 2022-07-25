import styled from "styled-components";
import ceuEstrelado from '../../img/ceuEstrelado.jpg'
import TextField from "@mui/material/TextField";

export const Container = styled.div `
    height: 100vh;
    display: grid;
    grid-template-rows: 80px 1fr;
`

export const Div = styled.div `
     width: 100%;
     display: grid;
     color: white;
     
     justify-content: center;
     flex-direction: column;
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

export const Form = styled.form `
    margin-top: 200px;
`
export const H3 = styled.h3 `
    margin-bottom: 50px;
`
export const Input = styled(TextField)`
  background-color: black;
  
`;
export const Input1 = styled.input`
  background-color: black;
  color: purple;
  border: 2px solid black;
  width: 220px;
  height: 50px;
  &:focus{ 
  outline: none;
  border: 2px solid purple;
    
  }
`;
export const Select = styled.select`
  background-color: black;
  color: purple;
  border: 2px solid black;
  width: 220px;
  height: 50px;
  &:focus{ 
  outline: none;
  border: 2px solid purple;
    
  }
  margin-bottom: 20px;
  margin-top: 10px;

`
import styled from "styled-components";
import ceuEstrelado from "../../img/ceuEstrelado.jpg";
import TextField from "@mui/material/TextField";

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 80px 1fr;
`;

export const Div = styled.div`
  display: flex;
  color: white;
  align-items: center;
  flex-direction: column;
  background: url(${ceuEstrelado}) no-repeat center fixed;
  background-size: cover;
`;
export const Header = styled.header`
  background-color: #170e47;
  color: white;
  display: grid;
  grid-template-columns: 1fr 48%;

  justify-items: end;
  align-items: center;
`;

export const Form = styled.form`
  margin-top: 300px;
`;
export const Input = styled(TextField)`
  background-color: black;
`;

export const ButtonContainer = styled.div`
  margin-top: 15px;
  margin-left: 30px;
  display: flex;
  width: 200px;
  justify-content: center;
`;

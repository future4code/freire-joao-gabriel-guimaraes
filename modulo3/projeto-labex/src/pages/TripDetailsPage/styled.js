import styled from "styled-components";
import ceuEstrelado from "../../img/ceuEstrelado.jpg";

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 80px 1fr;
`;

export const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: white;
  align-items: center;
  justify-content: center;
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
export const Conteudo = styled.div`
  width: 1000px;
  height: 700px;
  border: 2px solid #170e47;
  border-radius: 15px;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
`;
export const H1 = styled.h1`
  color: #5b1d75;
`;
export const H3 = styled.h3`
  color: #5b1d75;
`;

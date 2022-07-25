import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 340px;
  height: 450px;
  position: relative;
  box-shadow: 0 0 2em #d4486f;
  & > img {
    border-radius: 9px;
    background-color: #d4486f;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Conteudo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 120px;
  position: absolute;
  bottom: 0;
  color: white;
  text-shadow: 0 0 12px #000000;
  & > h4 {
    margin: 0;
    padding: 0;
    text-align: left;
    width: 250px;
    padding-right: 80px;
    padding-top: 5px;
    height: 30px;
    position: absolute;
    top: 0;
  }
  & > p {
    padding: 0;
    margin: 0;
    max-width: 250px;
    padding-left: 5px;
    font-size: 14px;
    position: absolute;
    left: 0;
    
  }
`;

export default function Card(props) {
  return (
    <Container>
      <img src={props.foto} alt="" />
      <Conteudo>
        <h4>
          {props.nome}, {props.idade}
        </h4>
        <p>{props.bio} </p>
      </Conteudo>
    </Container>
  );
}

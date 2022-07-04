import React from "react";
import styled from "styled-components";

const Container1 = styled.div`
  display: flex;
  max-width: 40%;
  padding: 10px 15px;
  background-color: ${(props) => {
    if (props.local === "right") {
      return "#dcf8c6";
    } else {
      return "whitesmoke";
    }
  }};
  text-align: ${(props) => props.local};
  align-self: ${(props) => {
    if (props.local === "right") {
      return "flex-end";
    } else {
      return "flex-start";
    }
  }};

  flex-direction: column;
  margin: 0 12px 5px 12px;
  border: 1px solid whitesmoke;
  border-radius: 7px;
  box-shadow: 2px 2px darkgray;
`;

const Container2 = styled.div`
  margin-bottom: 10px;
`;

class Mensagem extends React.Component {
  render() {
    let local;

    if (this.props.nome === "eu") {
      local = "right";
    } else {
      local = "left";
    }

    return (
      <Container1 local={local}>
        <Container2>
          <strong> {this.props.nome} </strong>{" "}
        </Container2>
        {this.props.mensagem}
      </Container1>
    );
  }
}

export default Mensagem;

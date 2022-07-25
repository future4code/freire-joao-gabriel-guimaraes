import React from "react";
import { BASE_URL } from "../../constants/urls";
import { decideData } from "../../services/requests";
import styled from "styled-components";
import Button from "@mui/material/Button";

export function CandidateCard(props) {
  const { name, profession, age, country, applicationText, id } =
    props.candidate;
  const approved = (decision) => {
    const url = `${BASE_URL}/trips/${props.tripId}/candidates/${id}/decide`;
    decideData(url, decision, props.getData);
  };
  return (
    <div>
      <p>
        <b>Nome:</b> {name}
      </p>
      <p>
        <b>Profissão:</b> {profession}
      </p>
      <p>
        <b>idade:</b> {age}
      </p>
      <p>
        <b>País:</b> {country}
      </p>
      <p>
        <b>Texto de candidatura:</b> {applicationText}
      </p>
      <Button
        variant="contained"
        size="small"
        margin="normal"
        color="secondary"
        onClick={() => {
          approved(true);
        }}
      >
        Aprovar
      </Button>
      <Button
        variant="contained"
        size="small"
        margin="normal"
        color="secondary"
        onClick={() => {
          approved(false);
        }}
      >
        Reprovar
      </Button>
    </div>
  );
}

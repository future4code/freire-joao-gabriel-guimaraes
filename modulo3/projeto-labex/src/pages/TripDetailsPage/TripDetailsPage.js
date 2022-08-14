import { useRequestData } from "../../services/requests";
import { BASE_URL } from "../../constants/urls";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CandidateCard } from "../../components/candidateCard/CandidateCard";

import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { Container, Div, Header, Conteudo, H1, H3 } from "./styled";

function TripDetailsPage() {
  const convertDate = (date) => {
    const day = date.substring(8, 10);
    const month = date.substring(5, 7);
    const year = date.substring(0, 4);
    return `${day}/${month}/${year}`;
  };
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const pathParams = useParams();
  const [name, isLoading, error, getData] = useRequestData(
    `${BASE_URL}/trip/${pathParams.id}`
  );

  const candidates =
    name &&
    name.trip &&
    name.trip.candidates.map((person) => {
      return (
        <CandidateCard
          candidate={person}
          tripId={pathParams.id}
          key={person.id}
          getData={getData}
        />
      );
    });
  const approvedCandidates =
    name &&
    name.trip &&
    name.trip.approved.map((person) => {
      return <li key={person.id}> {person.name}</li>;
    });
  const date = name && convertDate(name.trip.date);
  return (
    <Container>
      <Header>
        <h1>labeX</h1>{" "}
        <Button
          variant="contained"
          size="small"
          margin="normal"
          color="secondary"
          onClick={goBack}
        >
          voltar
        </Button>
      </Header>

      <Div>
        <Conteudo>
          {isLoading && <CircularProgress color="secondary" />}

          {!isLoading && name && name.trip && <H1>{name.trip.name}</H1>}
          {!isLoading && name && name.trip && (
            <div>
              <p>
                <b>Descrição:</b> {name.trip.description}
              </p>
              <p>
                <b>Planeta:</b> {name.trip.planet}
              </p>
              <p>
                <b>Duração:</b> {name.trip.durationInDays}
              </p>
              <p>
                <b>Data:</b> {date}
              </p>
            </div>
          )}
          <div>
            <H3>Candidatos Pendentes:</H3>
          </div>
          {candidates && candidates.length > 0 ? (
            candidates
          ) : (
            <p>Não há candidatos pendentes.</p>
          )}
          <div>
            <H3>Candidatos Aprovados:</H3>
          </div>
          {approvedCandidates && approvedCandidates.length > 0 ? (
            approvedCandidates
          ) : (
            <p>Não há candidatos aprovados.</p>
          )}
        </Conteudo>
      </Div>
    </Container>
  );
}

export default TripDetailsPage;

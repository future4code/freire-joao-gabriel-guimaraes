import { useRequestData } from "../../services/requests";
import React from "react";
import { BASE_URL } from "../../constants/urls";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import {
  Container,
  Div,
  Header,
  Conteudo,
  ContainerTrips,
  Footer,
  P,
} from "./styled";

function ListTripPage() {
  const convertDate = (date) => {
    const day = date.substring(8, 10);
    const month = date.substring(5, 7);
    const year = date.substring(0, 4);
    return `${day}/${month}/${year}`;
  };
  const navigate = useNavigate();
  const goToApplicationPage = () => {
    navigate("/trips/application");
  };
  const goBack = () => {
    navigate(-1);
  };

  const [name, isLoading, error] = useRequestData(`${BASE_URL}/trips`);

  const trips =
    name &&
    name.trips.map((trip) => {
      const date = convertDate(trip.date);
      return (
        <Conteudo key={trip.id}>
          {" "}
          <p>
            <h3>{trip.name}</h3>
          </p>{" "}
          <p>Descrição: {trip.description}</p> <p>Planeta: {trip.planet}</p>{" "}
          <p>Duração: {trip.durationInDays} dias </p> <p>Data: {date}</p>{" "}
        </Conteudo>
      );
    });
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
        <ContainerTrips>
          {isLoading && <CircularProgress color="secondary" />}
          {!isLoading && trips}
        </ContainerTrips>
      </Div>
      <Footer>
        <P>gostou de alguma viagem?</P>
        <Button
          variant="contained"
          size="medium"
          color="secondary"
          onClick={goToApplicationPage}
        >
          inscrever-se
        </Button>
      </Footer>
    </Container>
  );
}

export default ListTripPage;

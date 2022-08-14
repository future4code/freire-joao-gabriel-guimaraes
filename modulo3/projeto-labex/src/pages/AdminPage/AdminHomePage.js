import { useRequestData, deleteData } from "../../services/requests";
import { BASE_URL } from "../../constants/urls";
import React from "react";
import { useNavigate } from "react-router-dom";
import useProtectedPage from "../../hooks/useProtectedPage";
import { Container, Div, Header, Conteudo, Div2 } from "./styled";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

function AdminHomePage() {
  useProtectedPage();

  const navigate = useNavigate();
  const goToDetaisPage = (id) => {
    navigate(`/admin/trips/${id}`);
  };
  const [name, isLoading, error, getData] = useRequestData(`${BASE_URL}/trips`);
  const deleteTrip = (id, name) => {
    const url = `${BASE_URL}/trips/${id}`;
    if (window.confirm(`Tem certeza que deseja deletar a viagem ${name}?`)) {
      deleteData(url, getData);
    }
  };
  const trips =
    name &&
    name.trips.map((trip) => {
      return (
        <Conteudo
          key={trip.id}
          onClick={() => {
            goToDetaisPage(trip.id);
          }}
        >
          <p>{trip.name}</p>
          <IconButton
            aria-label="delete"
            color="secondary"
            onClick={(e) => {
              deleteTrip(trip.id, trip.name);
              e.stopPropagation();
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Conteudo>
      );
    });

  const goToHomePage = () => {
    navigate("/");
  };
  const goToCreateTrip = () => {
    navigate("/admin/trips/create");
  };
  const goToLoginPage = () => {
    navigate("/login");
    localStorage.removeItem("token");
  };

  return (
    <Container>
      <Header>
        <h1>labeX</h1>{" "}
        <Button
          variant="contained"
          size="small"
          margin="normal"
          color="secondary"
          onClick={goToHomePage}
        >
          voltar
        </Button>
      </Header>
      <Div>
        {isLoading && <CircularProgress color="secondary" />}
        {!isLoading && trips}

        <Div2>
          <Button
            variant="contained"
            size="small"
            margin="normal"
            color="secondary"
            onClick={goToCreateTrip}
          >
            Criar Viagem
          </Button>
          <Button
            variant="contained"
            size="small"
            color="secondary"
            onClick={goToLoginPage}
          >
            Logout
          </Button>
        </Div2>
      </Div>
    </Container>
  );
}

export default AdminHomePage;

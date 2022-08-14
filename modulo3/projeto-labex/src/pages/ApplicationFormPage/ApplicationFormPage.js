import { useRequestData, applicationTrip } from "../../services/requests";
import React from "react";
import { useState } from "react";
import { BASE_URL } from "../../constants/urls";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { countries } from "../../constants/countries";
import { Container, Div, Header, Form, H3, Input, Select } from "./styled";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

function ApplicationFormPage() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const [tripId, setTripId] = useState("");
  const [allTrips] = useRequestData(`${BASE_URL}/trips`);

  const { form, onChange, cleanFields } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  });
  const onChangeTrip = (e) => {
    setTripId(e.target.value);
  };
  const applicationText = (event) => {
    event.preventDefault();
    const url = `${BASE_URL}/trips/${tripId}/apply`;
    applicationTrip(url, form, cleanFields);
  };
  const tripsOptions =
    allTrips &&
    allTrips.trips.map((t) => {
      return (
        <option key={t.id} value={t.id} sx={{ input: { color: "purple" } }}>
          {t.name}
        </option>
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
        <Form onSubmit={applicationText}>
          <H3>Formulário de inscrição</H3>

          <Select name="country" onChange={onChangeTrip} label="Viagem">
            <option value={""}>escolha uma viagem</option>
            {tripsOptions}
          </Select>

          <Select
            name="country"
            onChange={onChange}
            value={form.country}
            required
          >
            <option value={""}>escolha um país</option>
            {countries.map((country) => {
              return (
                <option value={country} key={country}>
                  {country}
                </option>
              );
            })}
          </Select>

          <Input
            InputLabelProps={{
              style: { color: "purple" },
            }}
            sx={{ input: { color: "purple" } }}
            color="secondary"
            margin="normal"
            id="outlined-basic"
            variant="outlined"
            type="text"
            onChange={onChange}
            value={form.name}
            name="name"
            required
            label="nome"
            inputProps={{ pattern: "^.{3,}$" }}
            title={"escreva no mínimo 3 letras"}
          />

          <Input
            InputLabelProps={{
              style: { color: "purple" },
            }}
            sx={{ input: { color: "purple" } }}
            color="secondary"
            margin="normal"
            id="outlined-basic"
            variant="outlined"
            type="number"
            onChange={onChange}
            value={form.age}
            name="age"
            required
            label="idade"
            inputProps={{ min: 18 }}
          />
          <Input
            InputLabelProps={{
              style: { color: "purple" },
            }}
            sx={{ input: { color: "purple" } }}
            color="secondary"
            margin="normal"
            id="outlined-basic"
            variant="outlined"
            type="text"
            onChange={onChange}
            value={form.applicationText}
            name="applicationText"
            required
            label="Texto de candidatura"
            inputProps={{ pattern: "^.{30,}$" }}
            title={"escreva no mínimo 30 letras"}
          />
          <Input
            InputLabelProps={{
              style: { color: "purple" },
            }}
            sx={{ input: { color: "purple" } }}
            color="secondary"
            id="outlined-basic"
            margin="normal"
            variant="outlined"
            type="text"
            onChange={onChange}
            value={form.profession}
            name="profession"
            required
            label="profissão"
            inputProps={{ pattern: "^.{10,}$" }}
            title={"escreva no mínimo 10 letras"}
          />

          <Button
            variant="contained"
            endIcon={<SendIcon />}
            color="secondary"
            type="submit"
          >
            Enviar
          </Button>
        </Form>
      </Div>
    </Container>
  );
}

export default ApplicationFormPage;
